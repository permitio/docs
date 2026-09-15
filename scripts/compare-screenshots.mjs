#!/usr/bin/env node
/**
 * Pixel-diffs two directories of same-named PNG screenshots (e.g.
 * screenshots/baseline vs screenshots/stage-1) and reports, per image,
 * the number/ratio of differing pixels.
 *
 * Reuses Playwright's own bundled pixelmatch + pngjs comparator
 * (node_modules/playwright-core/lib/utils/comparators.js) instead of
 * adding a new dependency, since @playwright/test is already a devDependency.
 *
 * Usage:
 *   node scripts/compare-screenshots.mjs <dirA> <dirB> [--threshold=0.1]
 *
 * <dirA>/<dirB> are resolved relative to screenshots/ if not absolute.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, isAbsolute, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const args = process.argv.slice(2);
const positional = args.filter((a) => !a.startsWith("--"));
const [dirAArg, dirBArg] = positional;

if (!dirAArg || !dirBArg) {
  console.error("Usage: node scripts/compare-screenshots.mjs <dirA> <dirB> [--threshold=0.1]");
  process.exit(2);
}

const thresholdArg = args.find((a) => a.startsWith("--threshold="));
const pixelmatchThreshold = thresholdArg ? Number(thresholdArg.split("=")[1]) : 0.1;

const screenshotsRoot = join(__dirname, "..", "screenshots");
const resolveDir = (d) => (isAbsolute(d) ? d : join(screenshotsRoot, d));

const dirA = resolveDir(dirAArg);
const dirB = resolveDir(dirBArg);

const comparatorsPath = join(
  __dirname,
  "..",
  "node_modules",
  "playwright-core",
  "lib",
  "utils",
  "comparators.js"
);

if (!existsSync(comparatorsPath)) {
  console.error(`Could not find Playwright's internal comparator at ${comparatorsPath}.`);
  console.error("Make sure @playwright/test / playwright-core is installed.");
  process.exit(2);
}

const { getComparator } = require(comparatorsPath);
const compareImages = getComparator("image/png");

const filesA = new Set(readdirSync(dirA).filter((f) => f.endsWith(".png")));
const filesB = new Set(readdirSync(dirB).filter((f) => f.endsWith(".png")));

const allFiles = Array.from(new Set([...filesA, ...filesB])).sort();

let anyDiffAboveThreshold = false;
const rows = [];

for (const file of allFiles) {
  if (!filesA.has(file)) {
    rows.push({ file, status: "MISSING in " + dirAArg });
    continue;
  }
  if (!filesB.has(file)) {
    rows.push({ file, status: "MISSING in " + dirBArg });
    continue;
  }
  const bufA = readFileSync(join(dirA, file));
  const bufB = readFileSync(join(dirB, file));

  if (Buffer.compare(bufA, bufB) === 0) {
    rows.push({ file, status: "identical", diffPixels: 0, ratio: 0 });
    continue;
  }

  const result = compareImages(bufB, bufA, {
    threshold: pixelmatchThreshold,
    // maxDiffPixels: 0 forces the comparator to always report a
    // mismatch (with the pixel count) rather than treat small diffs as
    // passing, since we want the raw numbers, not a pass/fail.
    maxDiffPixels: 0,
  });

  if (!result) {
    rows.push({ file, status: "identical (below threshold)", diffPixels: 0, ratio: 0 });
    continue;
  }

  const match = result.errorMessage.match(/^(\d+) pixels \(ratio ([\d.]+) of all image pixels\)/);
  const sizeMismatch = result.errorMessage.includes("Expected an image");
  const diffPixels = match ? Number(match[1]) : null;
  const ratio = match ? Number(match[2]) : null;

  if (sizeMismatch) {
    rows.push({ file, status: "SIZE MISMATCH: " + result.errorMessage });
    anyDiffAboveThreshold = true;
    continue;
  }

  rows.push({ file, status: "diff", diffPixels, ratio });
  if (ratio !== null && ratio > 0.001) anyDiffAboveThreshold = true;
}

const width = Math.max(...rows.map((r) => r.file.length));
for (const r of rows) {
  const label = r.file.padEnd(width + 2);
  if (r.status === "identical") {
    console.log(`${label}identical`);
  } else if (r.status === "identical (below threshold)") {
    console.log(`${label}identical (below pixelmatch threshold ${pixelmatchThreshold})`);
  } else if (r.status === "diff") {
    console.log(`${label}${r.diffPixels} px diff (ratio ${r.ratio})`);
  } else {
    console.log(`${label}${r.status}`);
  }
}

console.log("");
console.log(
  anyDiffAboveThreshold
    ? "Some images differ by more than 0.1% of pixels — review above."
    : "All images identical or within 0.1% pixel diff."
);
process.exit(anyDiffAboveThreshold ? 1 : 0);
