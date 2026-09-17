# Permit Docs Makeover Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring docs.permit.io onto the same visual system, message architecture, and quality bar as the renovated www.permit.io, on the latest Docusaurus, without losing a single URL.

**Architecture:** One branch, one PR, seven stages. Every stage ends at a **stage gate**: a full production build (redirect lint, `docusaurus build`, hyperlink anchor check), a route-inventory check proving every pre-existing URL still resolves or redirects, and a screenshot pass. Structure and upgrade work lands before visual work; visual work lands before copy, so nothing is done twice. No doc IDs or slugs change, so sidebar and navigation restructuring cannot move a URL.

**Tech Stack:** Docusaurus 3.10.2 (from 3.7.0), React 18, MDX 3, Tailwind 3 (preflight off), SCSS, Inkeep search/chat, Playwright + Argos, Node 22.

**Inputs carried over from the website renovation** (`next-website/docs/superpowers/specs/2026-09-11-enterprise-ux-renovation-design.md`, `2026-09-14-enterprise-content-visual-strategy.md`):
- One visual system, not three. Semantic tokens, not colour-named aliases.
- Light theme `#8132D7` purple / `#E55105` orange on `#FEF8F4`; dark theme `#875cff` / `#ff8841` on `#050816`. Surfaces `#FDF3EC #F9EDE7 #F2E8E4` (light), `#0a0f22 #0d1029 #111638` (dark).
- Type: Manrope (body and headings), Rajdhani only for small uppercase labels, IBM Plex Mono for code.
- Zero WCAG AA contrast failures, measured in both themes, with `bg-clip-text` elements handled specially.
- Diagrams are coded (HTML/SVG with real labels and `<figcaption>`), never generated images.
- Category line: "The authorization platform for apps, APIs, and AI agents."
- Voice: technically grounded, name the mechanism behind every claim, no em-dashes in new copy, SOC 2 Type II **attested** (never certified), no numbers/customers/certifications outside the verified facts reference.
- Sales intent goes to `https://www.permit.io/demo`; community to `https://io.permit.io/slack`; sign in to `https://app.permit.io`.

**How docs differ from the website (governs every decision below):**
- The reader has already chosen to build. The job is time-to-first-working-check, then findability.
- Primary actions are *Quickstart*, *Open the dashboard*, *API reference*, *Ask in Slack*. "Book a demo" is available (footer, help box) but never the primary action.
- No mascot, no atmosphere imagery. Typography, diagrams, code, and real product screenshots only.
- Copy is second person, present tense, task-first. Marketing claims appear only as links to the website page that carries them.

## Global Constraints

- **No broken URLs.** Every URL in the baseline route inventory (Task 0.2) must, after every stage, either build to a page or be covered by a client redirect. Doc IDs, file paths, and `slug:` frontmatter do not change unless a redirect is added in the same commit.
- `onBrokenLinks: "throw"` stays on. `npm run build` (including `redirect-lint` and `hyperlink --check-anchors`) must pass at every stage gate.
- Pin all `@docusaurus/*` packages to exactly `3.10.2`.
- Node 22 (`.nvmrc`), matching `engines` and CI. Local shell currently runs v20.18.0 and must be switched.
- `trailingSlash` stays unset (current Netlify behaviour); changing it would change canonical URLs.
- Website links use the canonical host `https://www.permit.io`.
- No new runtime dependency without removing at least as much weight (net dependency count must go down).
- New copy follows the voice rules above. Product and compliance claims are checked against the `communicate-as-or-weis` skill's verified facts before commit.
- Plans and tooling live outside `docs/` (this file is under `plans/`) so Docusaurus never builds them.

---

## File Structure

| Path | Responsibility | Stage |
|---|---|---|
| `.nvmrc` | Pin Node 22 | 0 |
| `scripts/route-inventory.mjs` | Build baseline URL list from `build/sitemap.xml` plus redirect `from` paths; `--check` mode diffs a new build against it | 0 |
| `tests/fixtures/route-inventory.json` | Committed baseline of every public URL | 0 |
| `tests/visual/key-pages.spec.js` | Playwright captures of 14 key pages at 1440/390, light/dark | 0 |
| `scripts/audit-a11y.mjs` | Contrast + axe audit, ported from next-website, `bg-clip-text` aware | 0 |
| `redirects.js` | Client redirects moved out of the 685-line config (pure data, no behaviour change) | 1 |
| `docusaurus.config.js` | Upgraded config, new navbar/footer/announcement | 1, 4 |
| `src/theme/**` | Re-synced ejects, supported imports only, new Footer/NotFound/TOC help box | 1, 4 |
| `src/css/tokens.scss` | Single source of design tokens mapped onto Infima | 3 |
| `src/css/base/*.scss`, `src/css/components/*.scss` | Typography, code, admonitions, tables, sidebar, navbar, TOC, cards; stable `ThemeClassNames` selectors only | 3 |
| `src/components/diagrams/*` | Coded docs diagrams (decision flow, hybrid deployment, MCP gateway request path) | 5 |
| `src/components/home-page/*` | New docs home | 5 |
| `src/data/site-links.js` | One map of website/app/community URLs used by navbar, footer, TOC, components | 4 |
| `sidebars.js`, `docs/**/_category_.json` | Journey-based IA; labels and ordering only | 6 |
| `STYLE_GUIDE.md` + `CONTRIBUTING.md` | Docs voice, terminology glossary, component usage | 6 |
| `docs/**/*.mdx` | Copy, descriptions, terminology, cross-links | 6 |

---

## Stage 0 — Safety net (no user-visible change)

### Task 0.1: Branch and toolchain

**Files:** Create `.nvmrc`. Modify `package.json` (`packageManager` field removed: the repo uses `package-lock.json`, not yarn).

- [ ] `git checkout -b feat/docs-makeover`
- [ ] Write `.nvmrc` containing `22`; `nvm use`; `node -v` shows `v22.x`.
- [ ] `rm -rf node_modules .docusaurus build && npm ci`
- [ ] `npm run build` and record duration and warnings in the PR description draft (baseline).
- [ ] Commit: `chore: pin Node 22 and drop stale yarn packageManager field`

### Task 0.2: Route inventory guard

**Files:** Create `scripts/route-inventory.mjs`, `tests/fixtures/route-inventory.json`. Modify `package.json` scripts.

**Produces:** `npm run routes:check` (exit 1 on any missing URL), used by every later stage gate.

- [ ] Write the script:

```js
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
```

- [ ] Add scripts: `"routes:write": "node scripts/route-inventory.mjs --write"`, `"routes:check": "node scripts/route-inventory.mjs --check"`, and a `"gate": "npm run build && npm run routes:check"` script.
- [ ] Run `npm run routes:write` against the Task 0.1 build. Expected: roughly 345 doc routes plus 158 redirect paths.
- [ ] Fault test: temporarily delete `build/quickstart/index.html`, run `npm run routes:check`, expect exit 1 naming `/quickstart`. Rebuild.
- [ ] Commit: `test: add route inventory guard for URL preservation`

### Task 0.3: Visual and accessibility baseline

**Files:** Create `tests/visual/key-pages.spec.js`, `scripts/audit-a11y.mjs` (port of `next-website/scripts/audit-a11y.mjs`, pointed at `npm run serve` on port 3000). Modify `playwright.config.js`, `package.json` (`"audit:a11y"`), `.gitignore` (`screenshots/`).

Key pages: `/`, `/quickstart`, `/overview/how-does-it-work`, `/how-to/build-policies/rbac/overview`, `/modeling/…` (first page), `/sdk/nodejs/quickstart-nodejs` (or current Node SDK entry), `/api/…` (first page), `/permit-mcp-gateway` (index), `/ai-security` (index), `/embeddable-uis/overview`, `/how-to/use-audit-logs/types-and-filtering`, `/concepts/pdp/overview`, `/faq`, a 404 URL. The exact IDs are resolved from the route inventory when the spec is written.

- [ ] Spec captures each page at 1440×900 and 390×844, in `light` and `dark` (set via `localStorage.theme` before load), full page, with the existing `tests/screenshot.css` masks.
- [ ] Run once and store under `screenshots/baseline/` (git-ignored; attached to the PR as before/after).
- [ ] Run `npm run audit:a11y`, commit its output as `scripts/a11y-baseline.json` so later stages can show "N → 0".
- [ ] Commit: `test: key-page visual captures and contrast audit baseline`

**Stage 0 gate:** `npm run gate` passes; screenshots and a11y baseline exist.

---

## Stage 1 — Docusaurus 3.10.2 upgrade (intended: pixel-identical)

### Task 1.1: Extract redirects to data file

**Files:** Create `redirects.js`. Modify `docusaurus.config.js:69-556`, `checkRedirects.js`.

- [ ] Move the 111 redirect entries verbatim into `module.exports = [ ... ]` in `redirects.js`; config uses `redirects: require('./redirects')`.
- [ ] Update `checkRedirects.js` to `require('./redirects')` directly (drops the brittle plugin-array lookup) and to `process.exit(1)` in its catch block instead of only logging.
- [ ] `npm run gate`. Commit: `refactor: move client redirects into redirects.js`

### Task 1.2: Bump packages

**Files:** Modify `package.json`, `package-lock.json`.

- [ ] Pin `@docusaurus/core`, `preset-classic`, `plugin-client-redirects`, `plugin-content-docs`, `theme-mermaid`, `theme-search-algolia` (removed later if Q1 = Inkeep only), `babel` to `3.10.2`; add `@docusaurus/module-type-aliases` and `@docusaurus/types` `3.10.2` as dev deps.
- [ ] `prism-react-renderer` → `^2.4.1`; `@inkeep/cxkit-docusaurus` → latest `0.5.x`.
- [ ] `npm install`; resolve any peer conflict explicitly rather than via `legacy-peer-deps`. Then delete `.npmrc`'s `legacy-peer-deps=true` if install succeeds without it.
- [ ] Commit (build may fail here; fixed in 1.3 before the stage gate).

### Task 1.3: Config migrations

**Files:** Modify `docusaurus.config.js`.

- [ ] Prism v2: `const { themes } = require('prism-react-renderer');` then `prism: { theme: themes.github, darkTheme: themes.dracula, additionalLanguages: [...] }` (themes are restyled in Stage 3; this keeps the current dark look and fixes light).
- [ ] Move `onBrokenMarkdownLinks` to `markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } }`.
- [ ] Add `future: { v4: { removeLegacyPostBuildHeadAttribute: true, useCssCascadeLayers: false } }`. Cascade layers stay off because they reorder Infima against Tailwind; revisited in Stage 3.
- [ ] Remove unused `companyWebsiteUrl`, `apiReferenceUrl`, and old `lightCodeTheme`/`darkCodeTheme` requires.
- [ ] Fix swapped `alt` text on GitHub/Twitter navbar items (L631, L639).
- [ ] `npm run build`; fix anything the new version rejects.

### Task 1.4: Theme ejects onto supported APIs

**Files:** Modify `src/theme/DocSidebarItem/Category/index.js`, `DocSidebarItem/Link/index.js`, `DocItem/Layout/index.js`, `DocCard/index.js`. Delete `src/theme/MDXComponents/timeline.js` (orphan, imports a non-existent file).

- [ ] For each ejected component, run `npm run swizzle @docusaurus/theme-classic <Name> -- --eject --javascript --danger` into a temp dir, diff against ours, and re-apply only our customisation (icon from `customProps.icon`, `full_width`/`hide_breadcrumbs` frontmatter, card `svgIcon`) onto the 3.10.2 source.
- [ ] Replace every `@docusaurus/plugin-content-docs/lib/client/*` import with `@docusaurus/plugin-content-docs/client`, and `@docusaurus/theme-common/internal` with the public export where one exists. Verify: `grep -rn "lib/client\|theme-common/internal" src` returns nothing, or each remaining hit has a comment naming why no public API exists.
- [ ] Convert `DocSidebarItem/Html`, `Navbar/ColorModeToggle`, `Icon/*` stock copies back to no swizzle (delete) if they match upstream; keep only real customisations.

### Task 1.5: MDX compatibility off

**Files:** 7 MDX files with HTML comments, 3 with string `style=` attributes (listed by `grep -rln "<!--" docs` and `grep -rn 'style="' docs`). Modify `docusaurus.config.js` markdown block.

- [ ] Convert `<!-- x -->` to `{/* x */}`; convert `style="a: b"` to `style={{a: 'b'}}`.
- [ ] Remove `mdx1Compat` from config.
- [ ] Replace `</br>` in `src/components/home-page` hero string and stray `<br />` in `quick-start/nextjs.mdx`.
- [ ] Fix `tailwind.config.js` content glob `"../docs/**/*.mdx"` → `"./docs/**/*.{md,mdx}"`.

**Stage 1 gate:** `npm run gate` passes; key-page captures show no unintended diffs (expected diffs only: light code theme, fixed alt text); Argos CI run green or diffs approved. Commit per task: `build: upgrade Docusaurus to 3.10.2`, `refactor(theme): move ejected components to public docs APIs`, `fix(mdx): drop MDX 1 compatibility`.

---

## Stage 2 — Remove dead weight (no user-visible change)

### Task 2.1: Dead content and code

**Files:** Delete `docs.backup/`, `versioned_docs/`, `versioned_sidebars/` (not built: no `versions.json`, so no URLs), `src/css/prism-theme.js`, `src/css/components/_navbar-sidebar.scss`, `src/components/ReleaseBanner.js`, `src/components/elements/CodeBlockComponent.js`, `src/theme/NavbarItem/*` custom types (unused), `src/theme/SearchBar/index.js` (no-op wrapper), `.babelrc` (conflicts with `babel.config.js`), and the 9 `*.ignore` files after confirming none is referenced.

- [ ] Remove the `docsVersion` "2.0.0" navbar item (single version; the `/2.0.0/*` Netlify redirect stays in the build script).
- [ ] Load Remixicon once (config `stylesheets`), remove the duplicate from `src/theme/Layout.js`; delete `Layout.js` if nothing else remains.

### Task 2.2: Dependency diet

**Files:** Modify `package.json`.

- [ ] Remove unused: `npm`, `@mdx-js/loader`, `file-loader`, `url-loader`, `ignore-styles`, `postcss-preset-env`, `remark-gfm` (not wired), `axios`, `lodash`, `@emotion/react`, `@emotion/styled`. Verify each with `grep -rn "<pkg>" src docs docusaurus.config.js` = 0 before removing.
- [ ] Replace `@mui/material` (only `LinearProgress` in `WhatsNext`) with a 10-line CSS progress bar; remove MUI.
- [ ] Replace `react-code-blocks@0.0.9-0` and `react-syntax-highlighter` in `CodeDropdown`/`CodeBlock` with `@theme/CodeBlock` so all code shares one Prism theme; remove both packages.
- [ ] Replace `defaultProps` on function components (`SectionHero`, `WhatsNext`) with default parameters.
- [ ] If Q1 = Inkeep only: remove Algolia `themeConfig.algolia`, `@docusaurus/theme-search-algolia`, `docsearch-config.json`, `src/css/components/_algolia-searchbar.scss`, `.github/workflows/algolia_crawl.yml`.

**Stage 2 gate:** `npm run gate`; captures unchanged; `npm ls --depth=0 | wc -l` lower than baseline, recorded in PR.

---

## Stage 3 — Design system aligned with www.permit.io

### Task 3.1: Tokens

**Files:** Create `src/css/tokens.scss`. Modify `src/css/custom.scss` (import order: tokens → Infima overrides → Tailwind → base → components).

```scss
// src/css/tokens.scss — mirrors next-website/app/globals.css. Change both together.
:root {
  --pm-purple-rgb: 129 50 215;   // #8132D7, AA on light surfaces
  --pm-orange-rgb: 229 81 5;     // #E55105, large text and accents only
  --pm-bg: #fef8f4;
  --pm-surface-1: #fdf3ec;
  --pm-surface-2: #f9ede7;
  --pm-surface-3: #f2e8e4;
  --pm-text: #1a1a1f;
  --pm-text-muted: #55525e;
  --pm-border: rgb(47 23 8 / 0.12);
  --pm-akita-coat: #f57100;
  --pm-akita-ink: #2f1708;
  --pm-radius: 0.75rem;
  --pm-font-sans: 'Manrope', system-ui, sans-serif;
  --pm-font-label: 'Rajdhani', var(--pm-font-sans);
  --pm-font-mono: 'IBM Plex Mono', ui-monospace, monospace;
}
[data-theme='dark'] {
  --pm-purple-rgb: 135 92 255;   // #875cff
  --pm-orange-rgb: 255 136 65;   // #ff8841
  --pm-bg: #050816;
  --pm-surface-1: #0a0f22;
  --pm-surface-2: #0d1029;
  --pm-surface-3: #111638;
  --pm-text: #e8e6f2;
  --pm-text-muted: #a3a0b8;
  --pm-border: rgb(255 255 255 / 0.1);
}
```

- [ ] Map Infima: `--ifm-color-primary` and its six shades (generated from the purple with the Docusaurus colour tool, recorded in a comment), `--ifm-background-color: var(--pm-bg)`, `--ifm-font-family-base`, `--ifm-font-family-monospace`, `--ifm-heading-font-weight: 700`, `--ifm-link-color`, `--ifm-toc-border-color`, code block background, admonition colours.
- [ ] Delete the brown palette (`#43302b #846358 #d1b9b0 #f8f1ee #ffb381 #974ef2 #f76808 #7542B5 #6851ff`) and the four undefined variables (`--c-carbon-300 --c-blue-90 --c-blue-70 --dark`, 24 uses) by mapping each use to a token. Verify: `grep -rniE "43302b|846358|d1b9b0|c-carbon|c-blue|var\(--dark\)" src` returns nothing.
- [ ] Inkeep `primaryBrandColor` and announcement bar colours read the same purple.
- [ ] `tailwind.config.js`: remove `white: #FDFCFC` override; add `colors.pm.*` pointing at the CSS variables so MDX/Tailwind users get tokens, not hex.

### Task 3.2: Typography and fonts

**Files:** Modify `package.json` (+`@fontsource-variable/manrope`, `@fontsource/rajdhani` 600/700, `@fontsource/ibm-plex-mono` 400/500), `src/css/custom.scss` (remove Google Fonts `@import` of Inter).

- [ ] Self-hosted fonts (no render-blocking third-party request).
- [ ] Type scale for docs reading: body 16px/1.7, max line length ~72ch in content column, h1 2.25rem, h2 1.625rem with top rule spacing, h3 1.25rem; headings Manrope 700 with `letter-spacing: -0.01em`. Rajdhani only for sidebar section eyebrows and card labels (uppercase, `0.14em` tracking) matching the website's `DiagramFrame` label.

### Task 3.3: Components restyle on stable selectors

**Files:** Rewrite `src/css/components/_doc-sidebar.scss`, `_navbar.scss`, `_toc.scss`, `_markdown.scss`, `_doc-item.scss`, `_doc-page.scss`, `_edit-this-page.scss`; create `_code.scss`, `_admonitions.scss`, `_tables.scss`, `_cards.scss`.

- [ ] Replace all ~17 hashed-class attribute selectors (`[class*='docItemCol_']`, `[class^="sidebarLogo"]`, …) with `ThemeClassNames` (`.theme-doc-sidebar-container`, `.theme-doc-toc-desktop`, `.theme-doc-markdown`, …) or a className added in our own swizzle. Verify: `grep -rn "\[class[\*\^]=" src/css` returns nothing.
- [ ] Code blocks: Prism light/dark themes built from the website's `styles/prism-theme.css` palette; title bar, copy button, line highlight using tokens; inline code on `--pm-surface-2`.
- [ ] Admonitions: note/tip/info/warning/danger with left rule and tinted surface, colours checked for AA in both themes.
- [ ] Sidebar: quieter hierarchy (category labels 13px Manrope 600, active item purple text + 2px left rule, no filled pills), Remixicon icons kept at 16px muted.
- [ ] `DocCard`/`DocCardList`: token borders and surfaces, hover lift, remove hardcoded colours from `home-cards-links.js` (icon tint comes from a `tone` prop: `purple | orange | neutral`).
- [ ] Tables: horizontal scroll container, zebra on `--pm-surface-1`, sticky header in long tables.
- [ ] `colorMode.respectPrefersColorScheme: true` (the website honours the OS theme).

**Stage 3 gate:** `npm run gate`; `npm run audit:a11y` reports **0** contrast failures on key pages in both themes (baseline count → 0 in PR); captures reviewed at 1440/390 both themes; Argos diffs approved.

---

## Stage 4 — Shell and cross-linking with www.permit.io

### Task 4.1: Link map

**Files:** Create `src/data/site-links.js`.

```js
// Single source for links that leave the docs. Mirrors next-website/components/layout/navbar-links.ts.
const WWW = 'https://www.permit.io';
module.exports = {
  WWW,
  APP: 'https://app.permit.io',
  API_REFERENCE: 'https://api.permit.io/scalar',
  DEMO: `${WWW}/demo`,
  COMMUNITY: 'https://io.permit.io/slack',
  GITHUB: 'https://github.com/permitio',
  STATUS: 'https://permit-io.instatus.com/',
  X: 'https://x.com/permit_io',
  YOUTUBE: 'https://www.youtube.com/@permitio',
  LINKEDIN: 'https://www.linkedin.com/company/permitio/',
  products: [
    { label: 'App & API Permissions', href: `${WWW}/app-and-api-permissions` },
    { label: 'MCP Gateway', href: `${WWW}/mcp-gateway` },
    { label: 'Coding Agents Gateway', href: `${WWW}/coding-agents-gateway` },
    { label: 'AI Access Control', href: `${WWW}/ai-access-control` },
    { label: 'Elements', href: `${WWW}/elements` },
  ],
  models: [
    { label: 'RBAC', href: `${WWW}/rbac` },
    { label: 'ABAC', href: `${WWW}/abac` },
    { label: 'ReBAC', href: `${WWW}/rebac` },
    { label: 'PBAC', href: `${WWW}/pbac` },
  ],
};
```

(`API_REFERENCE` is confirmed against the current sidebar html block before commit.)

### Task 4.2: Navbar

**Files:** Modify `docusaurus.config.js` navbar, `src/theme/DocSidebar/index.js` (remove logo injection), `sidebars.js:5` (remove the html logo/links block).

- [ ] Logo in the navbar: Permit mark + "Docs" wordmark (`static/logo/logo_nav.svg`, dark variant `logo-dark.svg`), links to `/`.
- [ ] Left: section tabs (see Q3), e.g. *Get started*, *Guides*, *AI agents*, *SDKs & API*, *Integrations*.
- [ ] Right: Inkeep search, *API reference* (external), *permit.io* dropdown (Products, Authorization models, Pricing, Trust Center, Blog: all from `site-links.js`), GitHub icon, primary button **Open dashboard** → `APP`.
- [ ] Mobile: same items in the Docusaurus drawer; verify at 390px.

### Task 4.3: Footer (new; docs currently has none)

**Files:** Modify `docusaurus.config.js` `themeConfig.footer`.

- [ ] Columns mirroring the website footer, trimmed for developers: **Docs** (Quickstart, Concepts, SDKs, API reference, Changelog/Updates, Status), **Products** (from `site-links.products`), **Resources** (Blog, Authorization models, Open source OPAL, Videos), **Company** (Trust Center, Pricing, Contact sales → `/demo`, Community Slack, Privacy, Terms).
- [ ] Bottom row: logo, `© {year} Permit.io`, social icons (GitHub, Slack, X, YouTube, LinkedIn). "Twitter" becomes X everywhere.
- [ ] `style: 'dark'` overridden by tokens so the footer follows the theme (website defect D2 must not recur here).

### Task 4.4: Help box, edit link, 404

**Files:** Modify `src/theme/TOC/index.js`; config `docs.editUrl`; create `src/theme/NotFound/Content/index.js` (wrap).

- [ ] Replace hand-built GitHub edit URL (always `.mdx`, wrong for some files) with `editUrl: 'https://github.com/permitio/docs/edit/master/'`; keep the GitHub icon.
- [ ] TOC footer "Need help?" box: *Ask in Slack* and *Talk to an engineer* (→ `DEMO`), unique ids, gtag events retained with the same event names so analytics continuity holds.
- [ ] 404: search box, top five destinations, Slack link.

### Task 4.5: Announcement bar and in-content cross-links

**Files:** Modify config `announcementBar`; `scripts/normalize-links.mjs` (one-off, committed for re-use); MDX section intro pages.

- [ ] Remove the current OPAL/Twitter announcement bar.
- [ ] Prepare the Permit Nexus (PDP v3) announcement without showing it: `src/data/announcements.js` exports `{ id: 'permit-nexus-launch', enabled: false, content, backgroundColor, textColor, isCloseable: true }`; config sets `announcementBar` only when `enabled` is true (or env `DOCS_ANNOUNCEMENT=permit-nexus-launch` for a preview deploy). Draft content is a single neutral line ("Meet Permit Nexus, the next-generation Permit PDP. Read the launch notes →") with the link target left as the existing PDP overview until a Nexus page exists. The copy is marked for owner approval in the PR, and no Nexus capability claims are made.
- [ ] Verify: default build has no `.theme-announcement-bar`; `DOCS_ANNOUNCEMENT=permit-nexus-launch npm run build` shows it and passes contrast in both themes.
- [ ] Normalize website links in docs: `http://permit.io`, `http://www.permit.io`, `https://permit.io` → `https://www.permit.io` (44 occurrences). Script is idempotent; diff reviewed.
- [ ] Add a one-line "Product overview" link at the top of section intros only, pointing to the matching website page: MCP Gateway docs → `/mcp-gateway`; AI Security → `/ai-access-control`; Embeddable UIs → `/elements`; RBAC/ABAC/ReBAC modeling intros → `/rbac` `/abac` `/rebac`; audit logs → Trust Center where relevant. No links sprinkled into procedural steps.
- [ ] Follow-up recorded (separate next-website PR, not this one): website Developers menu and product pages link to the new docs landing pages; fix website link to `/overview/how-does-it-work` if its label changes.

### Task 4.6: Contextual CTAs where developer intent is high

**Files:** Create `src/components/cta/NextStepCallout.jsx` (+ `.module.scss`), register in `src/theme/MDXComponents.js`.

One component, three variants, always at the end of a section or page, never inside steps:
- `variant="enterprise"`: "This runs on the Enterprise plan. Talk to an engineer about your deployment →" (`DEMO`) on pages for features that sales-qualify: self-hosted/on-prem control plane, hybrid PDP deployment in regulated environments, SSO/SCIM for the Permit workspace, audit log retention/SIEM export, compliance and BAA pages. The exact page list is derived from pages that already mention plan limits or Enterprise, confirmed against `https://www.permit.io/pricing`.
- `variant="production"`: at the end of every framework quickstart and the main Quickstart: "Going to production? Review the PDP deployment checklist, or talk to an engineer about scale and latency." (docs link primary, `DEMO` secondary).
- `variant="agents"`: on MCP Gateway and AI agents section intros and demos: "Rolling out agents across your org? Book a security review →" (`DEMO`), next to the self-serve "Get started" link.
- `NextStepCallout` fires the same gtag event pattern as the TOC help box with `variant` as a label.
- Budget: at most one callout per page; no callouts on SDK/API reference pages.

**Stage 4 gate:** `npm run gate`; hyperlink passes; captures show navbar/footer at 1440/390 both themes; manual click-through of every navbar/footer link (list checked off in PR).

---

## Stage 5 — Docs home and landing pages

### Task 5.1: Coded diagrams

**Files:** Create `src/components/diagrams/DiagramFrame.jsx`, `DecisionFlowDiagram.jsx`, `HybridDeploymentDiagram.jsx`, `McpGatewayPathDiagram.jsx`; `src/components/diagrams/diagrams.module.scss`.

- [ ] Port structure and copy from `next-website/components/diagrams/*` (Tailwind classes → tokens + CSS modules). `<figure>`, `<figcaption>`, real text, horizontal at ≥996px, vertical below, both themes.
- [ ] Decision flow: Identity → Request → Policy decision point (in your VPC, OPA or Cedar) → Decision with reason → Audit to SIEM. Each stage links to its docs concept page.
- [ ] Register in `src/theme/MDXComponents.js` so MDX pages use `<DecisionFlowDiagram />` without imports.

### Task 5.2: New docs home

**Files:** Rewrite `docs/home.mdx` (keep `slug: /` and frontmatter flags), `src/components/home-page/*` (replace `SectionHero`, `home-cards-links.js`), delete `static/img/.../hero.png`, `cloud.png` if unused.

Layout, top to bottom:
1. **H1** "Permit.io Documentation"; lead: "Add fine-grained authorization to your apps, APIs, and AI agents. Model policy in the UI or as code, enforce it with an SDK call, and run decisions next to your services." Search input (Inkeep) + two buttons: *Quickstart* (primary), *API reference*.
2. **Choose your path** (4 cards): *Authorize your app and API* → quickstart; *Secure AI agents with MCP Gateway* → gateway index; *Embed access requests and user management* → embeddable UIs; *Deploy the PDP* → PDP concepts.
3. **How it works:** `<DecisionFlowDiagram />` with a link to `/overview/how-does-it-work`.
4. **SDKs:** language tiles (Node.js, Python, Java, .NET, Go, Ruby, PHP) from existing `static/img/languages`, plus Terraform, CLI.
5. **Popular tasks:** 6 text links (check a permission, sync users, write ABAC policy, ReBAC resource roles, audit logs, GitOps).
6. **Help:** Slack, GitHub, status page, Talk to an engineer.

- [ ] Same component set rebuilds `docs/overview/walkthroughs-intro.mdx` (`slug: /walkthroughs`).
- [ ] Copy checked against verified facts (skill) before commit.

**Stage 5 gate:** `npm run gate`; audit 0 failures on `/` and `/walkthroughs`; Lighthouse on `/` (mobile) recorded before/after in PR (target: performance not lower than baseline, accessibility ≥ 95).

---

## Stage 6 — Information architecture and copy

### Task 6.1: Journey-based sidebar (labels and order only)

**Files:** Modify `sidebars.js`, `docs/**/_category_.json`.

Proposed top level (13 categories today → 8):

| New section | Contains (existing categories, doc IDs unchanged) |
|---|---|
| Get started | Quickstart, Start Quickly, Quick Start Guide (framework quickstarts) |
| Concepts | Advanced Learning concepts, Decoupling Policy and Code, PDP overview |
| Model policies | Model Policies (RBAC, ABAC, ReBAC, policy as code) |
| Enforce permissions | Enforce Permissions, Work with Data |
| AI agents | AI Security, Permit MCP Gateway |
| SDKs & API | SDK docs (Connect Your App), API |
| Integrations | Integrate with Authentication, Embed Frontend Components, other integrations |
| Operate | Manage the SDLC, account management, audit logs, monitoring, Updates and Feedback |

- [ ] Verify no URL change: `npm run gate` (routes check) and `git diff --stat docs` shows only `_category_.json` files.
- [ ] Split into matching named sidebars (`getStarted`, `concepts`, `modeling`, `enforce`, `aiAgents`, `sdks`, `integrations`, `operate`); navbar tabs are `type: 'docSidebar'` items so the active tab highlights on every page in that sidebar. Every doc must belong to exactly one sidebar: verify with a build-time check that lists docs in no sidebar (`scripts/sidebar-coverage.mjs`, compares `docs/**/*.mdx` IDs against all sidebars, ignoring `home` and pages with `unlisted`/`draft`).
- [ ] The home page (`/`) has no sidebar; the navbar tabs are its entry points.

### Task 6.2: Style guide and terminology

**Files:** Create `STYLE_GUIDE.md`; link from `CONTRIBUTING.md`; extend `cspell.json` with product terms.

- [ ] Voice: second person, present tense, imperative steps, one idea per sentence, name the mechanism, no "simply/just/easy/seamless/comprehensive/powerful", no em-dashes in new copy.
- [ ] Page anatomy: title = task ("Check permissions with the Node.js SDK"), one-sentence description (also frontmatter `description`), prerequisites, steps, verify, next steps.
- [ ] Glossary: **Permit** in running text, **Permit.io** on first mention per page and in titles where the company is meant; **Permit Elements** (product) with "embeddable UI components" as the descriptive term; **Permit MCP Gateway**; **PDP** expanded on first use per page; **X** not Twitter; SOC 2 Type II **attested**.

### Task 6.3: Tier 1 copy rewrite (hand-edited)

**Files:** `docs/home.mdx` (done in 5.2), `docs/quickstart.mdx`, `docs/overview/*.mdx` (20), `docs/concepts/*.mdx` (8), `docs/getting-started/*`, `docs/faq.mdx`, section index pages of `permit-mcp-gateway`, `ai-security`, `embeddable-uis`, `modeling`, `how-to` top levels.

- [ ] Rewrite to the style guide. Known fixes: quickstart title "Getting Started" → "Quickstart" (URL unchanged), remove "Welcome to Permit! … Let's get started!", `why-permit` grammar and superlatives, `how-does-it-work` title aligned with its sidebar label, `http://permit.io/pricing` → `https://www.permit.io/pricing`.
- [ ] Every code sample on these pages is left byte-identical unless it is wrong; any change is called out in the commit message.
- [ ] Claims checked against verified facts.
- [ ] One commit per section so review stays tractable.

### Task 6.4: Tier 2 descriptions (all pages)

**Files:** 286 MDX files missing or empty `description`.

- [ ] Generate a ≤155-character task description from each page's H1 and first paragraph, write to frontmatter, then human-review the full diff in batches of ~50 (per top-level folder). No body changes in these commits.

### Task 6.5: Tier 3 terminology sweep (all pages)

- [ ] "Twitter" → "X"; http → https on permit.io hosts; "Permit Elements" vs "Embeddable UIs" per glossary; "Agent Security MCP Gateway" in the Linear demos → "Permit MCP Gateway" (if Q5 confirms); straight/curly apostrophe normalisation; `npx cspell "docs/**/*.mdx"` clean or allow-listed.
- [ ] Procedural SDK/API/how-to bodies are **not** rewritten in this PR beyond terminology; listed as follow-up.

**Stage 6 gate:** `npm run gate`; cspell clean; Inkeep search spot check (10 common queries return the right page first, recorded in PR).

---

## Stage 7 — Verification and PR

- [ ] `npm run gate`, `npm run audit:a11y`, `npx playwright test` locally on Node 22.
- [ ] Update `.github/workflows/argos.yml` to Node from `.nvmrc`; add a `routes:check` step after build.
- [ ] Use `superpowers:requesting-code-review` on the full diff; address findings.
- [ ] Open PR `feat: docs makeover — Docusaurus 3.10, website design system, IA and copy` with: stage-by-stage summary, before/after captures (1440/390, both themes) for the 14 key pages, a11y count before → after, dependency count before → after, build time before → after, route inventory result, list of follow-ups (website-side links, deeper procedural rewrites, React 19, Tailwind 4).
- [ ] Netlify deploy preview link checked on mobile and desktop.

---

## Decisions (approved 2026-09-15)

1. **Search:** Keep Inkeep (search + chat); remove the leftover Algolia config and crawler workflow.
2. **Hotjar:** Keep (site ID comes from env on Netlify).
3. **Navigation model:** Top navbar section tabs backed by separate sidebars. URLs unaffected.
4. **Sales CTA in docs:** Footer + "Talk to an engineer" in the help box; navbar primary is *Open dashboard*. Plus contextual CTAs where intent is high (Task 4.6).
5. **Naming:** "Permit Elements" as product name; AI section named "AI agents"; "Agent Security MCP Gateway" becomes "Permit MCP Gateway".
6. **Announcement bar:** Prepared for the PDP v3 launch, **Permit Nexus**, but not shown (Task 4.5). The current OPAL/Twitter bar is removed.
