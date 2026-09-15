#!/usr/bin/env node
/**
 * Accessibility audit for docs.permit.io.
 *
 * Checks the key pages (tests/visual/key-pages.js — shared with the visual
 * baseline spec so the two lists never drift), in both colour schemes, for:
 *   1. WCAG AA text contrast (4.5:1 normal text, 3.0:1 large text).
 *   2. Content clipped outside the viewport at mobile width.
 *
 * Ported from next-website/scripts/audit-a11y.mjs. Elements whose visible
 * colour comes from a clipped background gradient (`background-clip: text`
 * with a transparent `color`) cannot be measured from the `color` property —
 * reading it yields `transparent`, which computes to a false 1.05:1 failure.
 * Those are collected under `manualReview` and are never counted as
 * failures. Check them from rendered pixels instead.
 *
 * Theme switching mirrors Docusaurus's own colour-mode toggle: it stores the
 * preference under the `theme` localStorage key (see
 * node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js) and an
 * inline boot script applies it to `<html data-theme="...">` before first
 * paint. We seed that key via `context.addInitScript` before navigating, and
 * this script asserts `html[data-theme]` matches after load so a change to
 * Docusaurus's storage key trips loudly instead of silently auditing the
 * wrong theme.
 *
 * This script does NOT start or stop the server itself — run `npm run serve`
 * (or point BASE_URL elsewhere) first. Kept deliberately simple: one fewer
 * moving part than managing a child process, and it matches how the
 * Playwright visual spec already expects a server via `webServer` in
 * playwright.config.js.
 *
 *   npm run serve &
 *   npx playwright install chromium   # first run only
 *   npm run audit:a11y
 *   BASE_URL=http://localhost:3010 npm run audit:a11y
 *   npm run audit:a11y -- --routes=/faq,/quickstart
 *   npm run audit:a11y -- --update-baseline   # re-record scripts/a11y-baseline.json
 *   PLAYWRIGHT_CHROMIUM_PATH=/path/to/chrome npm run audit:a11y
 */
import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { KEY_PAGES } from '../tests/visual/key-pages.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const BASELINE_PATH = join(HERE, 'a11y-baseline.json');
const UPDATE_BASELINE = process.argv.includes('--update-baseline');

/** Stable identity for one finding, so the baseline survives unrelated edits. */
// Digits are normalised so live values (dates, counters) do not churn.
// Copy edits to a failing element still surface as new findings; re-record the
// baseline with --update-baseline when a change only rewords existing text.
const fingerprint = (route, scheme, kind, detail) =>
	`${route}|${scheme}|${kind}|${String(detail).replace(/\d+(?:[.,]\d+)*/g, '#')}`;

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const ALL_ROUTES = KEY_PAGES.map((p) => p.path);
const EXPECTED_STATUS = new Map(KEY_PAGES.map((p) => [p.path, p.expectedStatus || 200]));

const routesArg = process.argv.find((a) => a.startsWith('--routes='));
const ROUTES = routesArg
	? routesArg.slice('--routes='.length).split(',').filter(Boolean)
	: ALL_ROUTES;

/** Runs inside the page. Returns contrast failures, clipped elements, and skips. */
function collect() {
	const srgbToLinear = (v) => {
		const c = v / 255;
		return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
	};
	const luminance = ([r, g, b]) =>
		0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);

	const parseColor = (s) => {
		const m = String(s).match(
			/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?\s*\)/
		);
		if (!m) return null;
		return {
			rgb: [Number(m[1]), Number(m[2]), Number(m[3])],
			alpha: m[4] === undefined ? 1 : Number(m[4]),
		};
	};

	const blend = (fg, bg, alpha) => fg.map((c, i) => c * alpha + bg[i] * (1 - alpha));

	/**
	 * Composite the effective background behind an element by walking ancestors
	 * and blending translucent layers. Returns null when an ancestor paints a
	 * background image — the real backdrop is then unknowable from CSS alone.
	 */
	const effectiveBackground = (el) => {
		const layers = [];
		let node = el;
		while (node && node !== document.documentElement) {
			// Mermaid (and other SVG) labels are HTML inside <foreignObject>; the
			// colour behind them is the SVG shape's `fill`, not a CSS background.
			// Without this the label is measured against the page and reads as a
			// false ~1:1 failure (or a false pass). Use the node shape's fill as the
			// opaque layer when it has one.
			if (node.tagName && node.tagName.toLowerCase() === 'foreignobject') {
				const group = node.closest('g.node, g.cluster');
				const shape = group && group.querySelector(':scope > rect, :scope > polygon, :scope > path, :scope > circle, :scope > ellipse, :scope > g > rect, :scope > g > path');
				const fill = shape && parseColor(getComputedStyle(shape).fill);
				if (fill && fill.alpha === 1) {
					layers.push(fill);
					break;
				}
			}
			const cs = getComputedStyle(node);
			if (cs.backgroundImage && cs.backgroundImage !== 'none') return null;
			const bg = parseColor(cs.backgroundColor);
			if (bg && bg.alpha > 0) {
				layers.push(bg);
				if (bg.alpha === 1) break;
			}
			node = node.parentElement;
		}
		const rootBg = parseColor(getComputedStyle(document.documentElement).backgroundColor);
		let base = rootBg && rootBg.alpha === 1 ? rootBg.rgb : [255, 255, 255];
		for (let i = layers.length - 1; i >= 0; i--) {
			base = blend(layers[i].rgb, base, layers[i].alpha);
		}
		return base;
	};

	const describe = (el) => {
		const cls = typeof el.className === 'string' ? el.className : '';
		const short = cls.trim() ? '.' + cls.trim().split(/\s+/).slice(0, 3).join('.') : '';
		return `${el.tagName.toLowerCase()}${short}`;
	};

	const failures = [];
	const manualReview = [];
	const seen = new Set();

	document
		.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,span,a,button,td,th,label,dt,dd,summary,blockquote,figcaption,code,abbr')
		.forEach((el) => {
			// Only leaf text nodes, so we measure the element that actually paints text.
			if (el.children.length > 0) return;
			const text = (el.textContent || '').trim();
			if (text.length < 3) return;

			const cs = getComputedStyle(el);
			if (cs.display === 'none' || cs.visibility === 'hidden') return;
			if (Number(cs.opacity) < 0.15) return;

			const rect = el.getBoundingClientRect();
			if (rect.width < 2 || rect.height < 2) return;

			const clip = cs.webkitBackgroundClip || cs.backgroundClip;
			const fg = parseColor(cs.color);

			// Gradient-clipped text: the computed colour is transparent and the real
			// colour comes from the background. Not measurable here.
			if (clip === 'text' || !fg || fg.alpha === 0) {
				manualReview.push({
					el: describe(el),
					text: text.slice(0, 48),
					reason: 'background-clip:text',
				});
				return;
			}

			const bg = effectiveBackground(el);
			if (!bg) return; // text over an image; not measurable from CSS

			const fgRgb = fg.alpha < 1 ? blend(fg.rgb, bg, fg.alpha) : fg.rgb;
			const l1 = luminance(fgRgb);
			const l2 = luminance(bg);
			const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

			const size = parseFloat(cs.fontSize);
			const bold = Number(cs.fontWeight) >= 700;
			const isLarge = size >= 24 || (size >= 18.66 && bold);
			const required = isLarge ? 3 : 4.5;

			if (ratio < required - 0.005) {
				const key = `${describe(el)}|${text.slice(0, 24)}|${ratio.toFixed(2)}`;
				if (seen.has(key)) return;
				seen.add(key);
				failures.push({
					el: describe(el),
					text: text.slice(0, 48),
					ratio: Number(ratio.toFixed(2)),
					required,
					size: Math.round(size),
					color: cs.color,
				});
			}
		});

	// Horizontal clipping. Anything wider than the viewport is potentially lost
	// content on mobile (no horizontal scroll affordance on most docs layouts).
	const viewportWidth = document.documentElement.clientWidth;
	const clipped = [];
	const clipSeen = new Set();
	document.querySelectorAll('*').forEach((el) => {
		const cs = getComputedStyle(el);
		// Decorative overlays that cannot be interacted with are not lost content.
		if (cs.position === 'absolute' && cs.pointerEvents === 'none') return;
		if (cs.visibility === 'hidden' || cs.display === 'none') return;
		const rect = el.getBoundingClientRect();
		if (rect.width <= 0 || rect.height <= 0) return;
		if (rect.right <= viewportWidth + 1.5) return;
		// Docusaurus's skip link is parked just past the right edge on purpose
		// (theme-classic SkipToContent: position fixed, left 100%) and moves to
		// left 1rem on :focus, so it is not lost content. Matched by its fixed
		// target href, not by class, so any other overflowing link still counts.
		if (el.matches('a[href="#__docusaurus_skipToContent_fallback"]') && cs.position === 'fixed') return;
		// Ignore anything inside a container that scrolls horizontally on purpose
		// (e.g. Docusaurus code blocks, tables).
		let node = el.parentElement;
		let scrollable = false;
		while (node && node !== document.body) {
			const ox = getComputedStyle(node).overflowX;
			if (ox === 'auto' || ox === 'scroll') {
				scrollable = true;
				break;
			}
			node = node.parentElement;
		}
		if (scrollable) return;
		const key = describe(el) + Math.round(rect.right);
		if (clipSeen.has(key)) return;
		clipSeen.add(key);
		clipped.push({
			el: describe(el),
			right: Math.round(rect.right),
			width: Math.round(rect.width),
			overflowBy: Math.round(rect.right - viewportWidth),
		});
	});

	return { failures, manualReview, clipped: clipped.slice(0, 12) };
}

async function main() {
	const launchOptions = process.env.PLAYWRIGHT_CHROMIUM_PATH
		? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
		: {};
	const browser = await chromium.launch(launchOptions);

	let totalContrast = 0;
	let totalClipped = 0;
	let totalManual = 0;
	const report = [];

	for (const scheme of ['dark', 'light']) {
		for (const route of ROUTES) {
			const context = await browser.newContext({
				viewport: { width: 1440, height: 900 },
				colorScheme: scheme,
			});
			// Seed the stored preference Docusaurus's colour-mode toggle writes,
			// same key its own boot script reads before first paint.
			await context.addInitScript((value) => {
				try {
					window.localStorage.setItem('theme', value);
				} catch {
					/* storage unavailable */
				}
			}, scheme);
			const page = await context.newPage();
			try {
				const expectedStatus = EXPECTED_STATUS.get(route) ?? 200;
				const response = await page.goto(BASE_URL + route, { waitUntil: 'networkidle', timeout: 90000 });
				const status = response ? response.status() : null;
				if (!response || (status >= 400 && status !== expectedStatus)) {
					throw new Error(`HTTP ${status ?? 'no response'}`);
				}
				await page.waitForTimeout(1200);

				// Sanity check: confirm the theme actually applied. If Docusaurus ever
				// changes its storage key or boot-script behaviour, fail loudly here
				// instead of silently auditing the wrong theme.
				const appliedTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
				if (appliedTheme !== scheme) {
					throw new Error(`theme mismatch: expected data-theme="${scheme}", got "${appliedTheme}"`);
				}

				const desktop = await page.evaluate(collect);

				// Re-check at mobile width, where clipping actually bites.
				await page.setViewportSize({ width: 390, height: 844 });
				await page.waitForTimeout(900);
				const mobile = await page.evaluate(collect);

				const contrast = new Map(
					[...desktop.failures, ...mobile.failures].map((f) => [`${f.el}|${f.text}`, f])
				);
				totalContrast += contrast.size;
				totalClipped += mobile.clipped.length;
				totalManual += desktop.manualReview.length;

				if (contrast.size || mobile.clipped.length) {
					report.push({ route, scheme, contrast: [...contrast.values()], clipped: mobile.clipped });
				}
			} catch (err) {
				report.push({ route, scheme, error: String(err.message).slice(0, 140) });
				totalContrast += 1;
			} finally {
				await context.close();
			}
		}
	}
	await browser.close();

	for (const entry of report) {
		console.log(`\n=== ${entry.route}  [${entry.scheme}] ===`);
		if (entry.error) {
			console.log(`  ERROR: ${entry.error}`);
			continue;
		}
		for (const f of entry.contrast) {
			console.log(
				`  CONTRAST ${String(f.ratio).padStart(5)} (needs ${f.required})  ${f.size}px  ${f.el}  "${f.text}"`
			);
		}
		for (const c of entry.clipped) {
			console.log(`  CLIPPED  +${c.overflowBy}px past viewport  ${c.el}  (w=${c.width})`);
		}
	}

	if (process.argv.includes('--json')) {
		console.log('__JSON__' + JSON.stringify(report));
	}

	// Collect stable fingerprints for every finding in this run.
	const current = new Set();
	for (const entry of report) {
		if (entry.error) continue;
		for (const f of entry.contrast) {
			current.add(fingerprint(entry.route, entry.scheme, 'contrast', `${f.el}|${f.text}`));
		}
		for (const c of entry.clipped) {
			current.add(fingerprint(entry.route, entry.scheme, 'clipped', c.el));
		}
	}

	const errored = report.filter((entry) => entry.error);

	if (UPDATE_BASELINE) {
		if (errored.length) {
			console.log('\nRefusing to update the baseline: some routes failed to load.');
			console.log(errored.map((e) => `  ${e.route} [${e.scheme}] ${e.error}`).join('\n'));
			process.exit(1);
		}
		// A partial run (--routes) must not drop known findings for routes it did not visit.
		const previous = existsSync(BASELINE_PATH) ? JSON.parse(readFileSync(BASELINE_PATH, 'utf8')).findings : [];
		const visited = new Set(ROUTES);
		const kept = previous.filter((f) => !visited.has(f.split('|')[0]));
		const merged = [...new Set([...kept, ...current])].sort();
		writeFileSync(
			BASELINE_PATH,
			JSON.stringify({ generated: new Date().toISOString().slice(0, 10), findings: merged }, null, 2) + '\n'
		);
		console.log(`\nBaseline written: ${merged.length} known finding(s) -> scripts/a11y-baseline.json`);
		return;
	}

	const baseline = existsSync(BASELINE_PATH)
		? new Set(JSON.parse(readFileSync(BASELINE_PATH, 'utf8')).findings)
		: new Set();

	const introduced = [...current].filter((f) => !baseline.has(f));
	const visitedRoutes = new Set(ROUTES);
	const fixed = [...baseline].filter((f) => visitedRoutes.has(f.split('|')[0]) && !current.has(f));

	console.log(
		`\n${totalContrast} contrast failure(s), ${totalClipped} clipped element(s) across ${ROUTES.length} route(s) x 2 themes.`
	);
	console.log(`${totalManual} gradient-clipped element(s) skipped — verify those from rendered pixels.`);
	console.log(`\nBaseline: ${baseline.size} known, ${fixed.length} fixed, ${introduced.length} newly introduced.`);

	if (errored.length > 0) {
		console.log(`\n${errored.length} route/theme run(s) failed to load:`);
		for (const e of errored) console.log(`  ${e.route} [${e.scheme}] ${e.error}`);
		console.log('FAIL');
		process.exit(1);
	}

	if (introduced.length > 0) {
		console.log('\nNewly introduced findings:');
		for (const f of introduced.slice(0, 40)) console.log(`  ${f}`);
		console.log('FAIL');
		process.exit(1);
	}

	if (fixed.length > 0) {
		console.log('\nFixed since the baseline was recorded. Re-record with:');
		console.log('  npm run audit:a11y -- --update-baseline');
	}

	console.log('PASS (no new findings)');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
