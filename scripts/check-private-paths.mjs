// Fails the build when a tracked file cites a source path inside one of
// Permit's private repositories (a repo name from PRIVATE_REPOS followed by a
// path into it). This repo is public: such paths reveal
// internal structure and never help a docs reader. Describe the behavior, or
// link the public API reference, instead.
//
// A repo name only counts when it starts a path (<repo>/src) or is followed by
// a code-formatted path (<repo> `src/`), and only at the
// start of a line or after whitespace, a quote, a backtick, a bracket or
// `permitio/`. Site paths such as /agent-security/dashboard.png start with a
// slash and are not matched. A few private source directories that appear
// without their repo name are matched too.
import { execFileSync } from "node:child_process";
import fs from "node:fs";

const PRIVATE_REPOS = [
  "agent-security",
  "cloud-pdp",
  "next-website",
  "pdp-tester",
  "permit-backend",
  "permit-frontend",
  "permit-opa",
];
const PRIVATE_DIRS = ["cloud-pdp-core", "permit_backend", "permit_common"];
const PATTERN = new RegExp(
  String.raw`(?:^|[\s'"\x60([]|permitio/)(${PRIVATE_REPOS.join("|")})(?:/| \x60[\w.-]+/)[\w.-]` +
    String.raw`|(?:^|[^\w/-])(${PRIVATE_DIRS.join("|")})/[\w.-]`,
);
const SKIP = /\.(png|jpe?g|gif|svg|webp|ico|mp4|woff2?|ttf|pdf)$|^package-lock\.json$/i;

const files = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter((f) => f && !SKIP.test(f) && fs.existsSync(f) && fs.statSync(f).isFile());

const problems = [];
for (const file of files) {
  fs.readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      const m = line.match(PATTERN);
      if (m) problems.push(`${file}:${i + 1}: cites a private source path (${m[1] ?? m[2]})`);
    });
}

if (problems.length) {
  console.error(
    `Private-repo source paths in tracked files (${problems.length}). This repo is public; remove them:\n` +
      problems.map((p) => `  ${p}`).join("\n"),
  );
  process.exit(1);
}
console.log(`paths:private: ${files.length} tracked files, no private-repo paths`);
