import { test } from "@playwright/test";
import { readFileSync } from "fs";
import { join } from "path";
import { KEY_PAGES } from "./key-pages.js";

// Baseline "before" screenshots for the docs-site makeover. Later stages
// re-run this spec (`npm run test:visual`) to produce "after" shots for the
// same pages, viewports and themes so the two can be diffed.
//
// This spec is deliberately NOT part of the default `npx playwright test`
// invocation Argos CI runs - see the RUN_VISUAL_BASELINE gate in
// playwright.config.js for why, and run it with `npm run test:visual`.

const siteUrl = process.env.BASE_URL || "http://localhost:3000";
const stylesheetPath = join(__dirname, "..", "screenshot.css");
const stylesheet = readFileSync(stylesheetPath).toString();
const outDir = join(__dirname, "..", "..", "screenshots", process.env.VISUAL_OUT_DIR || "baseline");

const VIEWPORTS = [
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];

const THEMES = ["light", "dark"];

// Wait for hydration, requires Docusaurus v2.4.3+
// Docusaurus adds a <html data-has-hydrated="true"> once hydrated
// See https://github.com/facebook/docusaurus/pull/9256
function waitForDocusaurusHydration() {
  return document.documentElement.dataset.hasHydrated === "true";
}

// Known flake (ai-security-framework, quickstart, 390 viewport): images that
// are still decoding when the screenshot fires paint one or two frames late,
// producing a small pixel diff on an otherwise-identical page. Wait for
// every <img> on the page to finish loading, then for the network to go
// idle, before capturing.
async function waitForImages(page) {
  // `loading="lazy"` images below the fold don't start fetching until they
  // scroll into view - `page.screenshot({fullPage: true})` does scroll
  // through the page, but only during the capture itself, which is too late
  // for a wait that runs before it. Scroll through first so every image on
  // the page has actually started loading before we wait on it.
  await page.evaluate(async () => {
    const step = window.innerHeight || 800;
    const height = document.documentElement.scrollHeight;
    for (let y = 0; y < height; y += step) {
      window.scrollTo(0, y);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => setTimeout(resolve, 30));
    }
    window.scrollTo(0, 0);
  });

  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(
      images.map((img) => {
        if (img.complete) {
          return Promise.resolve();
        }
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
          // Safety net: an image the browser defers indefinitely (e.g. one
          // that never actually enters the viewport) must not hang the
          // whole capture - 4s is generous for a same-origin/static asset.
          setTimeout(resolve, 4000);
        });
      })
    );
  });

  // Best-effort: some pages keep a long-lived connection open (e.g. the
  // Inkeep search/chat widget), which would never let networkidle resolve.
  // Images are what actually cause the flake, so don't fail the capture if
  // idle isn't reached quickly.
  await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {});
}

for (const keyPage of KEY_PAGES) {
  for (const viewport of VIEWPORTS) {
    for (const theme of THEMES) {
      test(`${keyPage.slug} @ ${viewport.name} [${theme}]`, async ({ page, context }) => {
        // Seed the same localStorage key Docusaurus's colour-mode toggle
        // writes, before any page script runs, so its boot script applies
        // this theme on first paint instead of the default.
        await context.addInitScript((value) => {
          try {
            window.localStorage.setItem("theme", value);
          } catch {
            /* storage unavailable */
          }
        }, theme);

        await page.setViewportSize({ width: viewport.width, height: viewport.height });

        const expectedStatus = keyPage.expectedStatus ?? 200;
        const response = await page.goto(siteUrl + keyPage.path);
        if (!response || (response.status() >= 400 && response.status() !== expectedStatus)) {
          throw new Error(`HTTP ${response ? response.status() : "no response"} for ${keyPage.path}`);
        }

        await page.waitForFunction(waitForDocusaurusHydration);

        // Confirm the theme actually applied before capturing - a silent
        // mismatch here would make "before" and "after" shots incomparable.
        const appliedTheme = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
        if (appliedTheme !== theme) {
          throw new Error(`theme mismatch for ${keyPage.path}: expected data-theme="${theme}", got "${appliedTheme}"`);
        }

        await waitForImages(page);

        await page.addStyleTag({ content: stylesheet });

        const fileName = `${keyPage.slug}--${viewport.name}--${theme}.png`;
        await page.screenshot({ path: join(outDir, fileName), fullPage: true });
      });
    }
  }
}
