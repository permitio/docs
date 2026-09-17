// Single source for links that leave the docs: navbar, footer, and any component
// that points at the website, the app, or the community. Mirrors
// next-website/components/layout/navbar-links.ts; change both together.
//
// API_REFERENCE is the ReDoc URL the docs already use (the pre-split sidebar
// header block and ~110 links in docs/**). api.permit.io/scalar also serves the
// reference; switching is a content decision for every page, not just the chrome.
const WWW = "https://www.permit.io";

module.exports = {
  WWW,
  APP: "https://app.permit.io",
  API_REFERENCE: "https://api.permit.io/v2/redoc",
  DEMO: `${WWW}/demo`,
  PRICING: `${WWW}/pricing`,
  TRUST: `${WWW}/trust`,
  BLOG: `${WWW}/blog`,
  VIDEOS: `${WWW}/videos`,
  PRIVACY: `${WWW}/legal/privacy-policy`,
  TERMS: `${WWW}/legal/terms-and-conditions`,
  COMMUNITY: "https://io.permit.io/slack",
  GITHUB: "https://github.com/permitio",
  OPAL: "https://github.com/permitio/opal",
  STATUS: "https://permit-io.instatus.com/",
  X: "https://x.com/permit_io",
  YOUTUBE: "https://www.youtube.com/@permitio",
  LINKEDIN: "https://www.linkedin.com/company/permitio/",
  products: [
    { label: "App & API Permissions", href: `${WWW}/app-and-api-permissions` },
    { label: "MCP Gateway", href: `${WWW}/mcp-gateway` },
    { label: "Coding Agents Gateway", href: `${WWW}/coding-agents-gateway` },
    { label: "AI Access Control", href: `${WWW}/ai-access-control` },
    { label: "Elements", href: `${WWW}/elements` },
  ],
  models: [
    { label: "RBAC", href: `${WWW}/rbac` },
    { label: "ABAC", href: `${WWW}/abac` },
    { label: "ReBAC", href: `${WWW}/rebac` },
    { label: "PBAC", href: `${WWW}/pbac` },
  ],
};
