// Fails the build when a tracked file cites Permit's private source code: a link to a
// private permitio repository, or a path inside one. This repo is public: such
// citations reveal internal structure and never help a docs reader (a link to a
// private repo is also a 404 for them). Describe the behavior, or link the public
// API reference, instead.
//
// Three rules, each case-insensitive:
//
// 1. GitHub links. A github.com or raw.githubusercontent.com URL under permitio/
//    must name a repo in PUBLIC_REPOS. This catches every private repo without
//    naming one; public names are safe to list. Docker Hub, npm and Terraform names
//    also start with `permitio/`, so only those two hosts are checked. When you
//    link a public repo that isn't listed yet, add it (lower case).
// 2. Named private repos. A PRIVATE_REPOS name that starts a path (<repo>/src/…),
//    or is followed by a path in code formatting, parentheses or after a colon
//    (<repo> `dir/`, <repo> (dir/…), <repo>:dir/…), or by a source-file path after
//    plain whitespace (<repo> dir/file.py). The name must not follow a word
//    character, `/` (except in `permitio/<repo>`), `.` or `-`, so site paths such
//    as /agent-security/x.png pass, and so does a Helm release or namespace
//    followed by a space (`-n agent-security deployment/…`).
// 3. Repo-less source paths: a lower-case `<dir>/src/<file>.<ext>` token outside a
//    URL. ALLOWED_SRC_PATHS lists the public ones the docs cite on purpose.
//
// check-private-paths.fixtures.txt holds one known-bad line per shape and some
// known-good ones. Every run checks the rules against it first, so a rule change
// that stops catching a shape fails here instead of passing silently.
import { execFileSync } from "node:child_process";
import fs from "node:fs";

const PUBLIC_REPOS = new Set([
  "admin-scripts",
  "cedar-agent",
  "cognito-integration",
  "docs",
  "galactic-health-corporation",
  "generated-policy-example",
  "ghc-demo-policy",
  "langchain-permit",
  "mesa-verde-banking-demo",
  "n8n-nodes-permitio",
  "opal",
  "opal-example-policy-repo",
  "pdp",
  "permit-cli",
  "permit-cpp",
  "permit-demo-element",
  "permit-dotnet",
  "permit-erlang",
  "permit-fe-sdk",
  "permit-go-example",
  "permit-golang",
  "permit-hanko",
  "permit-hasura-python-example",
  "permit-java",
  "permit-java-example",
  "permit-kotlin",
  "permit-langflow-framework",
  "permit-mcp",
  "permit-mongodb-secure-rag",
  "permit-next-todo-starter",
  "permit-node",
  "permit-nuxt-example",
  "permit-pdp-deployments-examples",
  "permit-php",
  "permit-prisma",
  "permit-prompt-filtering",
  "permit-pydanticai",
  "permit-python",
  "permit-python-example",
  "permit-ruby",
  "permit-vue-example",
  "pink-mobile-demo-app",
  "terraform-provider-permit-io",
  "trino-authz-example",
]);
const PRIVATE_REPOS = [
  "agent-security",
  "cloud-pdp",
  "next-website",
  "pdp-tester",
  "permit-backend",
  "permit-frontend",
  "permit-opa",
];
const ALLOWED_SRC_PATHS = [
  // Docusaurus's own site source, cited in src/css/base/_infima.scss.
  "website/src/",
];

const EXT = "py|rs|go|ts|tsx|js|jsx|mjs|cjs|rego|tpl|sql|sh|toml|ya?ml|json|css|scss|html";
const GITHUB_REPO =
  /(?:github\.com|raw\.githubusercontent\.com)\/permitio\/([\w.-]+?)(?:\.git)?(?=[/)#?\s"'`\]>|,;]|$)/gi;
const START = String.raw`(?:^|[^\w/.-]|\.\./|permitio/)`;
const ANY_PATH = String.raw`[\w.-]+/`;
const SRC_PATH = String.raw`(?:\.{0,2}/)?(?:[\w.-]+/)*(?:src/[\w.-]+|[\w-]+\.(?:${EXT})\b)`;
const NAMED_REPO = new RegExp(
  START +
    `(${PRIVATE_REPOS.join("|")})` +
    "(?:" +
    [
      String.raw`/[\w.-]`, // <repo>/path
      String.raw`\x60?\s*[(:]\s*\x60?${ANY_PATH}`, // <repo> (path, <repo>:path
      String.raw`\x60\s+\x60${ANY_PATH}`, // `<repo>` `path`
      String.raw`\s+\x60${ANY_PATH}`, // <repo> `path`
      String.raw`\x60?\s+\x60?${SRC_PATH}`, // <repo> dir/file.py
    ].join("|") +
    ")",
  "i",
);
const REPOLESS_SRC = new RegExp(
  String.raw`(?<![\w./:@-])[a-z][\w-]*/src/[\w./-]*[\w-]\.(?:${EXT})\b`,
  "g",
);

// Returns [column, excerpt, reason] for the first problem on the line, or null.
function findProblem(line) {
  for (const m of line.matchAll(GITHUB_REPO)) {
    if (!PUBLIC_REPOS.has(m[1].toLowerCase()))
      return [m.index, m[0], `links permitio/${m[1]}, which is not a known public repo`];
  }
  const named = line.match(NAMED_REPO);
  if (named) return [named.index, named[0], `cites a path in the private ${named[1]} repo`];
  for (const m of line.matchAll(REPOLESS_SRC)) {
    if (!ALLOWED_SRC_PATHS.some((p) => m[0].startsWith(p)))
      return [m.index, m[0], "cites a repo-relative source path"];
  }
  return null;
}

const SELF = "scripts/check-private-paths.mjs";
const FIXTURES = "scripts/check-private-paths.fixtures.txt";

// Self-test: `bad:` lines must be flagged, `good:` lines must not.
const selfTest = [];
fs.readFileSync(FIXTURES, "utf8")
  .split("\n")
  .forEach((line, i) => {
    const [, kind, text] = line.match(/^(bad|good): (.*)$/) ?? [];
    if (!kind) return;
    if ((kind === "bad") !== Boolean(findProblem(text)))
      selfTest.push(`  ${FIXTURES}:${i + 1}: expected ${kind}: ${text}`);
  });
if (selfTest.length) {
  console.error(
    `paths:private self-test failed; the rules no longer match:\n${selfTest.join("\n")}`,
  );
  process.exit(1);
}

const SKIP = /\.(png|jpe?g|gif|webp|ico|mp4|woff2?|ttf|pdf)$|^package-lock\.json$/i;
const files = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter(
    (f) =>
      f &&
      f !== SELF &&
      f !== FIXTURES &&
      !SKIP.test(f) &&
      fs.existsSync(f) &&
      fs.statSync(f).isFile(),
  );

const problems = [];
for (const file of files) {
  fs.readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      const found = findProblem(line);
      if (!found) return;
      const [col, excerpt, reason] = found;
      problems.push(`${file}:${i + 1}:${col + 1}: ${reason}: ${excerpt.trim().slice(0, 80)}`);
    });
}

if (problems.length) {
  console.error(
    `Private source citations in tracked files (${problems.length}). This repo is public; remove them:\n` +
      problems.map((p) => `  ${p}`).join("\n"),
  );
  process.exit(1);
}
console.log(`paths:private: ${files.length} tracked files, no private source citations`);
