// Fails the build on extensionless relative doc links such as [x](./page).
// Netlify serves every page with a trailing slash, so the browser resolves
// ./page against /section/current/ and lands on /section/current/page (404).
// Link to the file instead ([x](./page.mdx)); Docusaurus turns that into an
// absolute URL at build time.
import fs from 'node:fs';
import path from 'node:path';

const ASSET = /\.(mdx?|png|jpe?g|gif|svg|webp|mp4|json|ya?ml|js|ts|rego|txt|pdf)$/i;
const problems = [];

(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) check(full);
  }
})('docs');

function check(file) {
  let inFence = false;
  fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) return;
    // Relative targets are either dot-prefixed (./page, ../dir/page) or bare
    // (page, dir/page). Both resolve against the current URL in the browser.
    // Anything starting with /, #, a scheme or mailto: is absolute and fine.
    for (const [, raw] of line.matchAll(/\]\(([^)\s#][^)\s#]*)(?:#[^)\s]*)?\)/g)) {
      // Markdown allows <angle-bracketed> targets; unwrap before judging.
      const target = raw.replace(/^</, '').replace(/>$/, '');
      if (/^(\/|[a-z][a-z0-9+.-]*:)/i.test(target)) continue;
      if (!ASSET.test(target.replace(/\/$/, ''))) problems.push(`${file}:${i + 1}  ${target}`);
    }
  });
}

if (problems.length) {
  console.error(`Relative doc links must point at the .mdx file (e.g. ./page.mdx):\n${problems.join('\n')}`);
  process.exit(1);
}
console.log('relative-links: OK');
