# Docs design audit (Impeccable)

Audit of docs.permit.io against [Impeccable](https://impeccable.style/) (Paul Bakaus, github.com/pbakaus/impeccable, skill v4.3.1): the `audit` report format, the 61 detector anti-patterns (`antipatterns.json`), and the `typeset`, `layout`, `colorize`, `distill`, `clarify`, `polish` and `animate` references. Impeccable's CLI and npm packages were not run; every check was applied by hand.

- **Build audited:** `origin/master` at the start of this branch, `npm run build` then `docusaurus serve --port 3810`.
- **Captures:** Playwright, 1440px and 390px, light and dark. Pages: the 14 key pages in `tests/visual/key-pages.js`, plus a long how-to (`/how-to/enforce-permissions/url-mapping/regex-url-mapping-check`), SDK code tabs (`/how-to/enforce-permissions/bulk-check`), admonitions and tables (`/permit-mcp-gateway/architecture`), Elements `CodeDropdown` (`/embeddable-uis/element/user-management`), an API page (`/api/rebac/rebac-api-calls`), the 404 page and the mobile drawer. Screenshot names below are `<slug>-<width>-<theme>[-mid].png` (`-mid` is scrolled to 35% of the page). They are working files and are not committed.
- **Mechanical probe:** a read-only browser script re-implementing the detector checks that apply to a rendered docs page (line length, heading rhythm, tiny text, wide tracking, long uppercase runs, side-stripe borders, text past the viewport, TOC overlap, touch targets), at 1440, 1280 and 390.
- **Context:** [PRODUCT.md](./PRODUCT.md) (mode: Read, Operate for reference) and [DESIGN.md](./DESIGN.md).

## Audit health score

| # | Dimension | Score | Key finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3 | `scripts/audit-a11y.mjs` is at 0, but timeline step numbers (white on orange-500, 2.80:1) and Element tiles (click handler on a `div`, `alt="placeholder"`) fail outside its selectors |
| 2 | Performance | 4 | Self-hosted Latin-subset fonts, static home snippet, no layout-property animation on reading surfaces |
| 3 | Responsive design | 3 | A page that widens its column pushes the TOC off-screen, and the Redoc iframe runs under the TOC; 30px mobile nav toggle |
| 4 | Theming | 3 | Full token system in both themes; hard-coded `#A666F4` and Tailwind `orange-500` in the timeline, purple glow on dark card hover |
| 5 | Implementation integrity | 3 | Coherent, product-specific system; a handful of generic tells (side-stripe callouts, icon-tile cards, uppercase custom titles) |
| **Total** | | **16/20** | **Good**: address the weak spots below |

**Implementation integrity verdict: pass.** The makeover already expresses one system: tokens mirrored from www.permit.io with measured contrast for every pair, one partial per surface on stable selectors, a fixed role for each typeface, and coded diagrams instead of images. The findings are local drift and a few reflexive patterns, not a missing system.

**Issues by severity:** P0 0, P1 4, P2 9, P3 6.

## Findings by command

### typeset

| Sev | Anti-pattern | Where | Screenshot | Evidence and fix |
|-----|--------------|-------|------------|------------------|
| P2 | `all-caps-body` / `wide-tracking`: custom admonition titles set as uppercase Rajdhani labels | Any admonition with a title: quickstart ("A video walkthrough"), modeling/google-drive, pdp/overview ("Cloud PDP – when not to use it"), embeddable-uis/overview, permit-mcp-gateway/architecture | `quickstart-1440-light.png`, `embeddable-uis-overview-390-light-mid.png` | Probe found 4+ word uppercase runs on 8 of 19 pages. Keep the Rajdhani label for the default type name ("Note", "Tip"); set a custom title in Manrope 600 sentence case (Admonition Layout swizzle decides; no MDX change). |
| P3 | `tiny-text` (< 12px) | Home SDK tiles registry label (11px), `NextStepCallout` label (11px) | `home-1440-light-mid.png`, `permit-mcp-gateway-1440-light.png` | Raise both to the 0.75rem label floor. |
| P2 | `line-length`: running text sets about 89 characters per line at 16px (Impeccable range 45-75; the detector fires above 80). `--pm-measure: 72ch` never applied: `.markdown > * { max-width: 100% }` in `_markdown.scss` wins at equal specificity, and 72ch of Manrope zeros is wider than the column anyway | Every doc page with 16px prose | `rbac-overview-1440-light.png` | Apply the cap after the 100% rule and set it in rem: 34rem holds running text near 75 characters. Code, tables and figures keep the full column. |
| P3 | `heading-rhythm`: an h3 directly after an h2 sits as close to the h2 as to its own paragraph (16px above, 15px below) | api/rebac/rebac-api-calls, permit-mcp-gateway/architecture, modeling/google-drive, nodejs quickstart | `admonitions-tables-mcp-arch-1440-light-mid.png` | Give stacked headings 1.25rem between them and tighten the space under h2/h3 so each binds to what it introduces. |

### layout

| Sev | Anti-pattern | Where | Screenshot | Evidence and fix |
|-----|--------------|-------|------------|------------------|
| P1 | `text-overflow`, hidden by `clipped-overflow-container`: the doc column cannot shrink (Infima `.col` is `flex-shrink: 0`), so a page that widens `--doc-item-container-width` pushes the TOC 68px past the viewport; `#__docusaurus { overflow: clip }` hides the overflow instead of the page scrolling | how-to/enforce-permissions/url-mapping/regex-url-mapping-check (52rem column) at 1280-1440 | `howto-long-regex-url-1440-light-mid.png` ("Setting Up Regex URL Mappin" cut off) | Let the content column shrink (`flex-shrink: 1; min-width: 0`) and keep the TOC column fixed. |
| P1 | `text-occlusion`: the Redoc iframe is 1080px wide (inline `max-width: 80vw`) and runs under the TOC; the TOC paints over the API reference | api/api-reference | `api-reference-1440-light.png` ("NEED HELP?" over the Redoc content) | CSS cap: iframes in `.markdown` never exceed their column (`max-width: 100% !important` beats the inline style, no MDX change). |
| P2 | Unreachable sticky content: `.pm-toc` has a max height but no overflow, so on long TOCs "Edit this page" and the help links fall below the fold and never scroll into view; the Ask AI button also covers the TOC's last lines | faq, permit-mcp-gateway/architecture | `faq-1440-light-mid.png`, `admonitions-tables-mcp-arch-1440-light-mid.png` | Make the TOC column its own scroll area with a thin scrollbar and bottom padding that clears the floating Ask AI button. |
| P2 | Page not centred, rows stretch to 1392px: the 404 `main` loses its `max-width` to Infima, so the title sits flush 16px from the edge and each destination row is a full-width bar | 404 | `404-1440-light.png` | Constrain and centre `main.pm-404` on a 40rem column. |
| P2 | Proximity: a lead-in sentence ("Admin setup:", "Yes. Here is how...") sits as far from its list (20px) as the list sits from the next block (20px) | permit-mcp-gateway/architecture, how-does-it-work, ai-security/framework, faq, pdp/overview | `admonitions-tables-mcp-arch-1440-light-mid.png` | Tighten `p + ul/ol` to 0.5rem so the list binds to its lead-in. |
| P2 | Home card arrow is absolutely positioned at the card foot; with a four-line description the arrow sits 4px under the text and collides at intermediate widths | Home "Choose your path" | `home-1440-light.png` (third card) | Put the arrow in flow with `margin-top: auto`. |
| P2 | Touch target: the mobile nav toggle is 30x30px (Impeccable and WCAG 2.5.8 guidance: 44px, 24px minimum) | Every page below 996px | `quickstart-390-light.png` | Pad the toggle to a 44px hit area without changing the drawn icon. |
| P3 | Mobile gutter: 32px each side (column padding plus article padding) leaves a 326px text column at 390px | Every doc page at 390px | `quickstart-390-light.png`, `admonitions-tables-mcp-arch-390-dark-mid.png` | 20px per side below 996px. |

### colorize

| Sev | Anti-pattern | Where | Screenshot | Evidence and fix |
|-----|--------------|-------|------------|------------------|
| P1 | `low-contrast`: timeline step numbers are white 16px/700 on Tailwind `orange-500` (#f97316), 2.80:1 (needs 4.5:1). The a11y script misses it because the number is a `div` of one character | Every `TimelineWrapper` page (regex URL mapping, ABAC guides, ...) | `howto-long-regex-url-1440-light-mid.png` | Draw the marker from tokens: a link-purple disc with `--pm-on-primary` text (6.23:1 light, 5.60:1 dark), rail in `--pm-border-strong`. |
| P2 | `design-system-color`: timeline rail `#A666F4` and `bg-orange-500` are outside the token system and identical in both themes | `src/components/timeline/*` | `howto-long-regex-url-1440-dark-mid.png` | Same fix; move the styles to a `pm-timeline` partial. |

### distill

| Sev | Anti-pattern | Where | Screenshot | Evidence and fix |
|-----|--------------|-------|------------|------------------|
| P2 | `side-tab` / `border-accent-on-rounded`: a 3px coloured left stripe on rounded admonitions and on the rounded `NextStepCallout` | Every admonition (probe: 1-14 per page), every NextStepCallout | `quickstart-1440-light.png`, `pdp-overview-1440-dark-mid.png`, `permit-mcp-gateway-1440-light.png` | The tint, icon and coloured label already identify the type. Replace the stripe with a 1px border in the type's colour at low alpha; callout keeps its strong hairline. |
| P2 | `icon-tile-stack`: a tinted icon square stacked above the title on every card | Home "Choose your path" and API cards, DocCards on category index pages | `home-1440-light.png`, `home-390-light-mid.png` | Put the icon beside the title so the title leads and cards lose ~52px of height each. |
| P3 | `repeated-container-text`-adjacent redundancy: the home "How it works" section heading is followed by a 2px rule and a label restating it ("How a permission decision is made") | Home | `home-1440-light-mid.png` | Leave: the frame is the website's DiagramFrame voice and the label names the figure when it is reused in docs pages. Noted only. |

### clarify

| Sev | Anti-pattern | Where | Screenshot | Evidence and fix |
|-----|--------------|-------|------------|------------------|
| P1 | Non-semantic control and placeholder alt text: `ElementTile` navigates from a `div` `onClick` (not focusable, not announced as a link) and every tile image has `alt="placeholder"` | embeddable-uis/overview, ai-security/framework | `embeddable-uis-overview-1440-dark-mid.png` | Render the tile as a real link; image alt describes the element preview. Component-only change, same props. |
| P3 | `ActionTile` "Learn More →" is a `span` with `onClick` | Pages importing `ActionTile` | n/a (not in capture set) | Same pattern; convert to a link. |

Page copy (headings ending in colons, em-dashes, "powerful" and similar) is left to the parallel content review PR, per the scope of this one.

### polish

| Sev | Anti-pattern | Where | Screenshot | Evidence and fix |
|-----|--------------|-------|------------|------------------|
| P3 | Browser surfaces left on defaults: text selection colour | All pages, both themes | n/a | Theme `::selection` from the purple token at a contrast-safe alpha. |
| P3 | Inline code chips in dense prose draw a border on every chip; paragraphs with four or five calls read as a row of boxes | sdk-tabs-bulk-check, faq, architecture | `sdk-tabs-bulk-check-1440-dark.png` | Drop the chip border; the surface-2 fill carries the role. |

### animate

| Sev | Anti-pattern | Where | Screenshot | Evidence and fix |
|-----|--------------|-------|------------|------------------|
| P2 | `dark-glow`: DocCard hover adds a purple blurred shadow (`0 6px 20px -12px` purple at 45%), which reads as a glow on navy, plus a 2px lift | Category index pages (DocCardList), both themes | n/a (hover state) | Border-colour-only hover, like home cards and pagination. Reading surfaces stay still. |
| P3 | `dark-glow`: 6px zero-offset purple ring around the highlighted diagram node | Home and how-does-it-work decision flow | `home-1440-light-mid.png` | Replace the halo with a 2px page-colour gap and a 1px purple ring (same visual weight as the focus ring language). |
| P3 | `layout-transition`: `WhatsNext` progress bar animates `width` | `src/components/whats-next` | n/a | Animate `transform: scaleX()` instead. |

## Checks that pass

`overused-font`, `flat-type-hierarchy`, `gradient-text`, `nested-cards`, `monotonous-spacing`, `bounce-easing`, `pulsing-dot`, `blinking-cursor`, `shape-assembled-illustration`, `radial-halo`, `radial-spotlight-glow`, `marquee`, `italic-serif-display`, `hero-eyebrow-chip`, `kicker-above-heading` (Rajdhani labels name groups and figures, they do not sit above headings), `numbered-section-labels` (walkthrough cards are a real sequence), `oversized-h1`, `extreme-negative-tracking`, `broken-image`, `content-hidden-at-rest`, `gray-on-color`, `tight-leading`, `justified-text`, `undersized-ui-text` (nothing below 11px), `cramped-padding`, `body-text-viewport-edge`, `gpt-thin-border-wide-shadow`, `repeating-stripes-gradient`, `codex-grid-background`, `image-hover-transform`, and the zero-finding contrast audit on all 19 captured routes in both themes.

## Intentional exceptions

- `cream-palette` and `ai-color-palette` match the light page (#fef8f4) and the purple accent. Both are pinned by www.permit.io and stay (PRODUCT.md: the brief wins).
- Rajdhani uppercase labels are the website's label voice. They stay for short category names, and leave custom titles (see typeset).
- The mobile TOC stays hidden (earlier, deliberate layout decision in the makeover).

## Positive findings

- Every colour pair has a measured WCAG ratio recorded next to its token, for all four surfaces in both themes, and the Prism themes carry their own ratio tables.
- Dark mode is designed, not inverted: a separate link purple for text, navy surface steps, re-resolved derived tokens.
- Fonts are self-hosted, subset to Latin and to the weights in use.
- One selector strategy (ThemeClassNames, Infima, `pm-*`) with swizzles that exist only to add stable class names.
- Diagrams are coded, themed and captioned instead of screenshots.

## Plan (Impeccable command order)

1. **typeset**: admonition custom titles, 12px floor, prose measure, stacked heading rhythm.
2. **layout**: shrinkable doc column, iframe cap, scrollable TOC, 404 column, lead-in proximity, card arrow in flow, nav toggle hit area, mobile gutter.
3. **colorize**: timeline markers and rail from tokens.
4. **distill / clarify**: side stripes, icon placement on cards, Element and Action tiles as real links.
5. **polish**: selection colour, inline code chips.
6. **animate**: DocCard hover, diagram node halo, WhatsNext progress.
