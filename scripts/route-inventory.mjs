// scripts/route-inventory.mjs
// Baseline: node scripts/route-inventory.mjs --write
// Check:    node scripts/route-inventory.mjs --check
import fs from 'node:fs';
import path from 'node:path';

const BUILD = path.resolve('build');
const FIXTURE = path.resolve('tests/fixtures/route-inventory.json');
const mode = process.argv[2];

const norm = (u) => (u.length > 1 ? u.replace(/\/+$/, '') : u);

function builtRoutes() {
  const xml = fs.readFileSync(path.join(BUILD, 'sitemap.xml'), 'utf8');
  const sitemap = [...xml.matchAll(/<loc>https:\/\/docs\.permit\.io([^<]*)<\/loc>/g)].map((m) => norm(m[1] || '/'));
  // Client redirects emit an index.html at each `from` path, so walk the build dir too.
  const pages = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'index.html') pages.push(norm('/' + path.relative(BUILD, dir).split(path.sep).join('/')));
    }
  })(BUILD);
  return new Set([...sitemap, ...pages]);
}

const routes = builtRoutes();
if (mode === '--write') {
  fs.mkdirSync(path.dirname(FIXTURE), { recursive: true });
  fs.writeFileSync(FIXTURE, JSON.stringify([...routes].sort(), null, 2) + '\n');
  console.log(`Wrote ${routes.size} routes`);
} else if (mode === '--check') {
  const baseline = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
  const missing = baseline.filter((r) => !routes.has(r));
  if (missing.length) {
    console.error(`Missing ${missing.length} routes (add a redirect or restore the page):\n` + missing.join('\n'));
    process.exit(1);
  }
  console.log(`All ${baseline.length} baseline routes resolve (${routes.size - baseline.length} new).`);
} else {
  console.error('Usage: --write | --check');
  process.exit(2);
}
