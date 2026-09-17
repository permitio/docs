---
name: Permit.io Docs
description: Developer documentation for Permit.io, on the www.permit.io brand tokens.
colors:
  purple: "#8132d7"
  purple-dark-theme: "#875cff"
  link: "#8132d7"
  link-hover: "#7427c8"
  link-dark-theme: "#946dff"
  link-hover-dark-theme: "#af91ff"
  orange: "#e55105"
  orange-dark-theme: "#ff8841"
  bg: "#fef8f4"
  surface-1: "#fdf3ec"
  surface-2: "#f9ede7"
  surface-3: "#f2e8e4"
  text: "#1a1a1f"
  text-muted: "#55525e"
  bg-dark-theme: "#050816"
  surface-1-dark-theme: "#0a0f22"
  surface-2-dark-theme: "#0d1029"
  surface-3-dark-theme: "#111638"
  text-dark-theme: "#e8e6f2"
  text-muted-dark-theme: "#a3a0b8"
  success: "#176b3a"
  warning: "#b04a00"
  danger: "#c0331b"
  success-dark-theme: "#4ccf86"
  warning-dark-theme: "#ff8841"
  danger-dark-theme: "#ff7a66"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  h1:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  h4:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.25
  intro:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  ui:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "Rajdhani, Manrope, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
  code:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  code-inline: "0.375rem"
  control: "0.5rem"
  code-block: "0.625rem"
  card: "0.75rem"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.link}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "0.6875rem 1.125rem"
  button-primary-hover:
    backgroundColor: "{colors.link-hover}"
  code-block:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
    rounded: "{rounded.code-block}"
    typography: "{typography.code}"
  code-block-title:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.text-muted}"
  doc-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "1.125rem 1.25rem 1.25rem"
  table-head:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
---

# Design System: Permit.io Docs

## Overview

A calm reading surface on the www.permit.io brand. Warm paper-like light surfaces and deep navy dark surfaces, one purple that means "you can act on this", orange held back for rare emphasis, and three typefaces with fixed jobs: Manrope reads, Rajdhani labels, IBM Plex Mono is code. The docs are a Read surface (guides, concepts) and an Operate surface (reference tables, code tabs), so hierarchy comes from type weight, spacing and hairlines, not from decoration.

The source of truth is code: `src/css/tokens.scss` (brand and semantic tokens, with every contrast ratio), `src/css/base/_infima.scss` (tokens mapped onto Infima), `src/css/base/_typography.scss` (type scale), `src/css/components/*` (one partial per surface) and `src/css/prism/{light,dark}.js` (syntax colours). The frontmatter above mirrors those files; when they disagree, the SCSS wins and this file is stale.

**The Mirror Rule.** Brand tokens mirror `next-website/app/globals.css`. Change a brand value in both repos together, and record why here.

## Colors

Every colour is a role, defined once in `tokens.scss` for light (`:root`) and re-resolved for dark (`[data-theme='dark']`). Components consume `--pm-*` tokens or the Infima variables mapped onto them, never raw hex.

### Primary

- **Permit purple** (light `purple`, dark `purple-dark-theme`): fills, rules and icons. The active sidebar and TOC rule, the active tab underline, focus rings, highlighted code lines, card hover borders.
- **Link purple** (light `link`, dark `link-dark-theme`): every purple *text*. Links, active navigation labels, primary button fills. In dark mode it is one lightness step above the brand purple, the lightest step that clears 4.5:1 on surface-3.

### Secondary

- **Akita orange** (light `orange`, dark `orange-dark-theme`): rare emphasis only. In light mode it is 3.62:1 on the page, so it never carries body-size text there; use it for large marks and non-text accents.

### Neutral

- **Page and surfaces** (`bg`, `surface-1..3`, and their dark twins): four steps of warm cream in light, four steps of navy in dark. Page, then raised panels (cards, footer, zebra rows), then code and table heads, then code title bars.
- **Text** (`text`, `text-muted`): primary copy and secondary copy. Both clear AA body contrast on every surface in both themes.
- **Borders**: `--pm-border` (12% ink light, 10% white dark) for decorative hairlines; `--pm-border-strong` (55% / 40%) where a boundary identifies a control and needs 3:1.

### Status

`success`, `warning`, `danger` and `note` (= text-muted) drive admonitions. Each is exposed as an `-rgb` channel so tints are plain `rgb(... / alpha)` at 7% (light) or 10% (dark) over the page.

**The One Purple Rule.** Purple means interactive or current. Do not spend it on decoration; a purple thing on the page should be clickable, focused, or the current location.

**The Measured Contrast Rule.** Every new foreground/background pair gets its ratio written next to the token in `tokens.scss`, measured on all four surfaces in both themes. `scripts/audit-a11y.mjs` must stay at zero.

**Intentional exceptions to generic checks.** A warm cream page and a purple accent both match generic "AI palette" detectors. Here they are the pinned www.permit.io brand, not a default, and stay.

## Typography

- **Manrope** (variable 200-800, self-hosted, Latin subset): body, headings, UI.
- **Rajdhani 600**: small uppercase labels that name a kind of thing (admonition type, sidebar section group, TOC heading, code tab bar). Never sentences.
- **IBM Plex Mono 400/500**: code, file names, method names. Upright only.

### Hierarchy

- **Page title** (h1, 2.25rem / 700, 1.875rem below 996px) with a 1.125rem muted **intro** for the first one or two paragraphs.
- **Section** (h2, 1.625rem / 700, 3rem above) and **subsection** (h3, 1.25rem / 700, 2.25rem above). Sections are separated by space, never by a rule.
- **h4-h6** (1.0625 / 1 / 0.875rem, 700) lean on weight rather than size.
- **Body** 1rem / 1.7, prose capped at `--pm-measure`.
- **UI text** 0.8125-0.875rem / 500 in navigation, TOC, breadcrumbs, table cells (0.9375rem).
- **Code** 0.8125rem in blocks, 0.875em inline.
- **Label** Rajdhani 0.75-0.8125rem, uppercase, 0.12em tracking.

**The Label Rule.** Rajdhani uppercase is for one-to-three word names of a category. A title a reader has to read as a phrase (a custom admonition title, a question) is set in Manrope sentence case.

**The Twelve Pixel Floor.** No text below 0.75rem (12px), labels included.

## Layout

- **Docs frame**: navbar (60px), a 300px sidebar with a hairline right border, the article column capped at `--doc-item-container-width` (42rem) and centred in the space left of a 16rem sticky TOC. Below 996px the sidebar becomes a drawer and the TOC is hidden.
- **Article gutter** 1rem; top gutter 2.2rem.
- **Home and landing pages** (`full_width_container`) use a 76rem page with their own gutter (1.5rem, 1rem below 576px).
- **Spacing** follows a 4px base (0.25rem steps): tight 0.25-0.5rem inside a group, 1-1.5rem between blocks, 2.25-3rem above headings.
- The column must shrink before the TOC does: a page that widens its container (frontmatter or MDX) can never push the TOC off-screen.

**The Proximity Rule.** Space above a heading is always larger than space below it, and a lead-in sentence binds to the list it introduces.

## Elevation & Depth

Flat. Depth is expressed with surface steps and 1px hairlines, not shadows. The only shadows are focus rings (`--pm-focus-ring`: 2px page-colour gap, 2px purple) and Infima defaults that are switched off (`--ifm-global-shadow-lw: none` on code blocks).

**The No-Glow Rule.** No coloured or zero-offset glow shadows, in either theme.

## Shapes

- 0.375rem: inline code, small buttons, sidebar item corners.
- 0.5rem: controls, tables, admonitions.
- 0.625rem: code blocks and code tab bars.
- 0.75rem (`--pm-radius`): cards, pagination, callouts.
- Circles only for step markers and diagram nodes.

## Components

### Buttons

Primary: link-purple fill, `--pm-on-primary` text (white in light, page navy in dark), 0.5rem radius, 700 weight. Secondary: transparent with a `--pm-border-strong` edge and `--pm-text`. Both show the token focus ring.

### Cards / Containers

- **Doc cards** (category indexes, `DocCardList`): surface-1 panel, hairline border that turns purple on hover, a small tinted icon chip and a title.
- **Home cards** (`CardGrid`): same panel language; the arrow sits in flow at the foot of the card.
- **Pagination**: same panel, border-only hover.
- **Next-step callout** (`NextStepCallout`): surface-1 panel with a `--pm-border-strong` edge and a Rajdhani label.

### Navigation

- **Navbar**: section tabs in 14px/500 muted text; the active tab is link-purple over a 2px purple rule on the bar's bottom border.
- **Sidebar**: muted 14px/500 links; the active page is link-purple text on a 2px purple left rule (a position marker, not a card accent); nested lists hang off a 1px guide line; `category-as-header` groups are Rajdhani labels over a hairline.
- **TOC**: "Contents" label, a 1px guide line, the active heading mirrors the sidebar; Edit this page and help links below.
- **Breadcrumbs**: 13px muted trail, current page in text colour at 600.

### Code

Blocks on `--pm-code-bg` with a hairline border and no shadow; a title bar one surface step up; highlighted lines get a 10-16% purple tint and a 2px inset purple rule. Language tabs (SDK `CodeBlock` and Elements `CodeDropdown`) share one strip: Rajdhani labels, active label in link purple over a 2px rule. Inline code is a quiet surface-2 chip.

### Admonitions

A faint tint of the type's status colour over the page, an icon and a Rajdhani type label in the status colour, body copy in `--pm-text`. Links inside stay link-purple and clear 4.5:1 on every tint.

### Tables

A framed, horizontally scrollable block with a surface-2 header, hairline cell borders and surface-1 zebra rows. Tables with 15+ rows cap their height and keep a sticky header.

### Diagrams

Coded React diagrams (`DiagramFrame` and friends): a 2px text-colour top rule and a Rajdhani label (the website's DiagramFrame voice), real text, and a one-sentence caption.

### Timeline steps

`TimelineWrapper` / `TimelineStep`: numbered circles on a vertical rail for long step-by-step guides.

## Do's and Don'ts

### Do:

- Use `--pm-*` tokens or the Infima variables mapped onto them; add a token (with its measured ratios) before adding a colour.
- Target `ThemeClassNames`, Infima and `pm-*` classes; restate upstream module styles on a stable class when you swizzle.
- Keep motion to 120-180ms colour and border transitions, and honour `prefers-reduced-motion`.
- Check both themes at 1440px and 390px, and run `scripts/audit-a11y.mjs`, before shipping a visual change.

### Don't:

- Don't select hashed CSS-module classes (`[class*=...]`).
- Don't draw a coloured side stripe thicker than 1px on a card, callout or admonition.
- Don't set sentences or custom titles in uppercase tracked Rajdhani.
- Don't add glow shadows, gradient text, or hover lifts to reading surfaces.
- Don't put body-size text on orange in light mode.
