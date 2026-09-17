/**
 * Shared list of "key pages" used both by the visual baseline spec
 * (tests/visual/key-pages.spec.js) and the accessibility audit
 * (scripts/audit-a11y.mjs), so the two can never drift apart.
 *
 * Each entry's `path` is a real, currently-live route (resolved against
 * tests/fixtures/route-inventory.json and the docs/ tree, not the brief's
 * parenthetical guesses, several of which pointed at slugs that don't
 * exist or that have moved). `slug` is the filename-safe identifier used
 * for screenshots and audit report keys.
 *
 * Resolution notes (as of 2026-09-15):
 *  - modeling: docs/modeling/*.mdx sidebar_position values put
 *    google-drive.mdx (position 1) first, not feature-flagging.
 *  - api: sidebars.js line ~868 explicitly orders
 *    ["api/api-reference", "api/pdp-api-reference", "api/pdp-statistics"],
 *    so api-reference is the first API page.
 *  - permit-mcp-gateway: the category has a real index doc
 *    (docs/permit-mcp-gateway/index.mdx -> route "/permit-mcp-gateway"),
 *    so the bare route is a real page, not a redirect.
 *  - ai-security: the "AI Security" sidebar category has no generated
 *    index (no `link`), so "/ai-security" does not resolve to a page.
 *    The first real page under that section is "ai-security/framework".
 */

const KEY_PAGES = [
	{ slug: 'home', path: '/' },
	{ slug: 'quickstart', path: '/quickstart' },
	{ slug: 'how-does-it-work', path: '/overview/how-does-it-work' },
	{ slug: 'rbac-overview', path: '/how-to/build-policies/rbac/overview' },
	{ slug: 'modeling-google-drive', path: '/modeling/google-drive' },
	{ slug: 'nodejs-quickstart', path: '/sdk/nodejs/quickstart-nodejs' },
	{ slug: 'api-reference', path: '/api/api-reference' },
	{ slug: 'permit-mcp-gateway', path: '/permit-mcp-gateway' },
	{ slug: 'ai-security-framework', path: '/ai-security/framework' },
	{ slug: 'embeddable-uis-overview', path: '/embeddable-uis/overview' },
	{ slug: 'audit-logs-types-and-filtering', path: '/how-to/use-audit-logs/types-and-filtering' },
	{ slug: 'pdp-overview', path: '/concepts/pdp/overview' },
	{ slug: 'faq', path: '/faq' },
	// Intentionally unmatched route; docusaurus serve returns its 404.html
	// with an HTTP 404 status for this, which callers should treat as expected.
	{ slug: '404', path: '/this-page-does-not-exist', expectedStatus: 404 },
];

module.exports = { KEY_PAGES };
