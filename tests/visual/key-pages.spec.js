import { test } from "@playwright/test";
import { readFileSync } from "fs";
import { join } from "path";
import { KEY_PAGES } from "./key-pages.js";

// Baseline "before" screenshots for the docs-site makeover (Task 0.3). Later
// stages re-run this spec (`npm run test:visual`) to produce "after" shots
// for the same pages, viewports and themes so the two can be diffed.
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

        await page.addStyleTag({ content: stylesheet });

        const fileName = `${keyPage.slug}--${viewport.name}--${theme}.png`;
        await page.screenshot({ path: join(outDir, fileName), fullPage: true });
      });
    }
  }
}
