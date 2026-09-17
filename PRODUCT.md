# Product

Context for design work on docs.permit.io. Visual rules live in [DESIGN.md](./DESIGN.md); voice and page structure live in [STYLE_GUIDE.md](./STYLE_GUIDE.md).

## What this is

The developer documentation for Permit.io: authorization as a service. The site covers modeling policy (RBAC, ABAC, ReBAC), enforcing it with SDKs and a policy decision point (PDP), securing AI agents with Permit MCP Gateway, embedding Permit Elements, and operating Permit in production.

## Who uses it

Engineers implementing authorization in their own product. They have already chosen Permit, or are evaluating it hands-on. They arrive from search, from the dashboard, or from an error, usually with a concrete task: install an SDK, call `permit.check()`, deploy a PDP, map a model onto their domain. Many read with the dashboard and an editor open beside the docs, in both light and dark system themes.

## Mode

- **Read** for guides, concepts, quickstarts and the docs home. Success is understanding: the reader finds the right page, follows it top to bottom, and copies working code.
- **Operate** for reference pages (API, SDK method pages, configuration tables). Success is lookup: scan a table or a code tab, find the parameter, leave.

The docs home is a Read surface, not a marketing page. It routes readers to a task; it does not sell.

## Brand

Aligned with www.permit.io, which owns the brand. The docs borrow its tokens (purple and orange accents, warm light surfaces, navy dark surfaces) and its typefaces (Manrope, Rajdhani, IBM Plex Mono), and apply them with more restraint: calm, dense where reference needs it, no decoration that competes with code. Marketing claims stay on www.permit.io.

## Constraints

- Every published URL keeps working (`npm run build` checks routes, redirects and anchors).
- WCAG 2.x AA contrast in both themes (`scripts/audit-a11y.mjs` stays at zero findings).
- Styles target stable class names only (ThemeClassNames, Infima, `pm-*`), never hashed CSS-module classes.
- No new runtime dependencies without a clear reason.
