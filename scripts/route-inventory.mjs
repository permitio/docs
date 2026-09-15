// scripts/route-inventory.mjs
// Baseline: node scripts/route-inventory.mjs --write
// Check:    node scripts/route-inventory.mjs --check
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const BUILD = path.resolve('build');
const FIXTURE = path.resolve('tests/fixtures/route-inventory.json');
const mode = process.argv[2];

const norm = (u) => (u.length > 1 ? u.replace(/\/+$/, '') : u);

// Redirect `from` paths, read from the docusaurus.config.js source of truth (same way
// checkRedirects.js does it) rather than trusted to the filesystem walk below. On macOS/APFS
// (case-insensitive, case-preserving) a build can silently fold a redirect's declared case
// onto an already-existing lowercase doc directory, so the walk alone would miss (or
// mis-case) that redirect. Reading the config keeps the exact case Netlify/CI will see.
// NOTE: when Task 1.1 moves redirects into redirects.js, only this lookup needs to change.
function redirectFromsFromConfig() {
  const config = require('../docusaurus.config.js');
  const [, options] = config.plugins.find((p) => Array.isArray(p) && p[0] === '@docusaurus/plugin-client-redirects');
  return (options.redirects || []).flatMap((r) => r.from).map(norm);
}

function builtRoutes() {
  const xml = fs.readFileSync(path.join(BUILD, 'sitemap.xml'), 'utf8');
  const sitemap = [...xml.matchAll(/<loc>https:\/\/docs\.permit\.io([^<]*)<\/loc>/g)].map((m) => norm(m[1] || '/'));
  // Client redirects emit an index.html at each `from` path, so walk the build dir too
  // (this also catches any generated page that isn't in the sitemap or the redirect config).
  const pages = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'index.html') pages.push(norm('/' + path.relative(BUILD, dir).split(path.sep).join('/')));
    }
  })(BUILD);
  return { sitemap, pages, redirects: redirectFromsFromConfig() };
}

const { sitemap, pages, redirects } = builtRoutes();

if (mode === '--write') {
  // Dedupe case-insensitively, preferring the config's exact-case spelling for redirects,
  // so the fixture records `/reference/SDKs/Python/sync_user` (the real declared redirect)
  // rather than whatever case a case-folding macOS build happened to walk off disk.
  const byLower = new Map();
  for (const r of [...sitemap, ...pages]) byLower.set(r.toLowerCase(), r);
  for (const r of redirects) byLower.set(r.toLowerCase(), r); // config spelling wins
  const routes = [...byLower.values()].sort();
  fs.mkdirSync(path.dirname(FIXTURE), { recursive: true });
  fs.writeFileSync(FIXTURE, JSON.stringify(routes, null, 2) + '\n');
  console.log(`Wrote ${routes.length} routes`);
} else if (mode === '--check') {
  const baseline = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
  // Compare case-insensitively: macOS builds fold case (APFS is case-insensitive but
  // case-preserving) and Netlify serves static paths case-insensitively, so a route that
  // differs from the baseline only in case still resolves in production either way.
  const routes = new Set([...sitemap, ...pages, ...redirects].map((r) => r.toLowerCase()));
  const missing = baseline.filter((r) => !routes.has(r.toLowerCase()));
  if (missing.length) {
    console.error(`Missing ${missing.length} routes (add a redirect or restore the page):\n` + missing.join('\n'));
    process.exit(1);
  }
  console.log(`All ${baseline.length} baseline routes resolve (${routes.size - baseline.length} new).`);
} else {
  console.error('Usage: --write | --check');
  process.exit(2);
}
