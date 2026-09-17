#!/usr/bin/env node
// One-off, idempotent normaliser for website links inside docs content.
// Rewrites http://permit.io, http://www.permit.io and https://permit.io
// (with any path) to the canonical https://www.permit.io.
//
// Never touches app.permit.io, api.permit.io, io.permit.io, docs.permit.io,
// or any other subdomain: the pattern requires the scheme to be followed
// directly by an optional "www." and then "permit.io", so a different
// subdomain label breaks that adjacency and the match simply doesn't occur.
// Already-canonical https://www.permit.io links match too, but replacing
// them with themselves is a no-op, which is what makes a second run report
// zero rewrites (idempotent).
//
// Case-insensitive on the scheme+host only (docs/authentication/logto.mdx
// has several http://Permit.io links) - domains are case-insensitive, but
// the match never extends into the path, so a case-sensitive path segment
// is untouched either way.
//
// Usage:
//   node scripts/normalize-links.mjs          rewrite docs/**/*.mdx in place
//   node scripts/normalize-links.mjs --check   report only, exit 1 if any
//                                              file would change (CI use)

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.resolve(__dirname, "..", "docs");

const LINK_RE = /https?:\/\/(www\.)?permit\.io/gi;
const CANONICAL = "https://www.permit.io";

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      out.push(full);
    }
  }
  return out;
}

function normalize(content) {
  let count = 0;
  const next = content.replace(LINK_RE, (match) => {
    if (match === CANONICAL) return match;
    count++;
    return CANONICAL;
  });
  return { next, count };
}

function main() {
  const checkOnly = process.argv.includes("--check");
  const files = walk(DOCS_DIR).sort();
  let totalRewritten = 0;
  let filesChanged = 0;

  for (const file of files) {
    const content = readFileSync(file, "utf8");
    const { next, count } = normalize(content);
    if (count > 0) {
      filesChanged++;
      totalRewritten += count;
      const relPath = path.relative(process.cwd(), file);
      if (checkOnly) {
        console.log(`would rewrite ${count} link(s) in ${relPath}`);
      } else {
        writeFileSync(file, next);
        console.log(`rewrote ${count} link(s) in ${relPath}`);
      }
    }
  }

  console.log(
    `\n${checkOnly ? "Would rewrite" : "Rewrote"} ${totalRewritten} link(s) across ${filesChanged} file(s) out of ${files.length} scanned.`
  );

  if (checkOnly && totalRewritten > 0) {
    process.exitCode = 1;
  }
}

main();
