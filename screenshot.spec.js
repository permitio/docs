import fs from "fs";
import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";
import { extractSitemapPathnames, pathnameToArgosName } from "./argo_utils.js";
// Constants
const siteUrl = 'http://localhost:3000';
const sitemapPath = './build/sitemap.xml';
const stylesheetPath = './screenshot.css';
const stylesheet = fs.readFileSync(stylesheetPath).toString();

// Wait for hydration
function waitForDocusaurusHydration() {
  return document.documentElement.dataset.hasHydrated === 'true';
}

function screenshotPathname(pathname) {
  test(`pathname ${pathname}`, async ({ page }) => {
    const url = siteUrl + pathname;
    await page.goto(url);
    await page.waitForFunction(waitForDocusaurusHydration);
    await page.addStyleTag({ content: stylesheet });
    await argosScreenshot(page, pathnameToArgosName(pathname));
  });
}

test.describe('Docusaurus site screenshots', () => {
  const pathnames = extractSitemapPathnames(sitemapPath);
  console.log('Pathnames to screenshot:', pathnames);
  const filteredPathnames = pathnames.filter((pathname) => !pathname.includes('/1.0.0/'));
  console.log('Filtered Pathnames:', filteredPathnames);

  filteredPathnames.forEach(screenshotPathname);
});
