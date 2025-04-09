import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";
import { readFileSync } from "fs";
import * as cheerio from "cheerio";
import * as fs from "fs";
import { join } from "path";

// Extract a list of pathnames, given a fs path to a sitemap.xml file
// Docusaurus generates a build/sitemap.xml file for you!
export function extractSitemapPathnames(sitemapPath) {
  const sitemap = fs.readFileSync(sitemapPath).toString();
  const $ = cheerio.load(sitemap, { xmlMode: true });
  const urls = [];
  $("loc").each(function handleLoc() {
    urls.push($(this).text());
  });
  return urls.map((url) => new URL(url).pathname);
}

// Converts a pathname to a decent screenshot name
export function pathnameToArgosName(pathname) {
  return pathname.replace(/^\/|\/$/g, "") || "index";
}

// Constants
const siteUrl = "http://localhost:3000";
const sitemapPath = "./build/sitemap.xml";
const stylesheetPath = join(__dirname, "screenshot.css");
const stylesheet = readFileSync(stylesheetPath).toString();

// Wait for hydration, requires Docusaurus v2.4.3+
// Docusaurus adds a <html data-has-hydrated="true"> once hydrated
// See https://github.com/facebook/docusaurus/pull/9256
function waitForDocusaurusHydration() {
  return document.documentElement.dataset.hasHydrated === "true";
}

// Calculate and display progress of the running tests
function calculateProgress(index, total, pathname) {
  const percentage = Math.floor((index / total) * 100);
  const progressBarWidth = 30; // Width of the progress bar in characters
  const filledSquares = Math.floor((percentage / 100) * progressBarWidth);
  const emptySquares = progressBarWidth - filledSquares;
  const progressBar = '█'.repeat(filledSquares) + '░'.repeat(emptySquares);

  console.log(`Progress: [${progressBar}] ${percentage}% (${index + 1}/${total}) - Testing: ${pathname}`);
}

function screenshotPathname(pathname, index, total) {
  test(`pathname ${pathname}`, async ({ page }) => {
    calculateProgress(index, total, pathname);

    const url = siteUrl + pathname;
    await page.goto(url);
    await page.waitForFunction(waitForDocusaurusHydration);
    await page.addStyleTag({ content: stylesheet });
    await argosScreenshot(page, pathnameToArgosName(pathname));
  });
}

const IGNORED_PATHS = [
  // outdated version 1.0.0
  "/1.0.0",
];

test.describe("Docusaurus site screenshots", () => {
  const pathnames = extractSitemapPathnames(sitemapPath).filter(
    (pathname) => !IGNORED_PATHS.some((prefix) => pathname.startsWith(prefix))
  );

  console.log(`Starting screenshot tests for ${pathnames.length} pages...`);
  console.log(`Progress: [${('░').repeat(30)}] 0% (0/${pathnames.length})`);

  // Pass the index and total count to screenshotPathname
  pathnames.forEach((pathname, index) =>
    screenshotPathname(pathname, index, pathnames.length)
  );
});
