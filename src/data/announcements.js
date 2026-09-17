// Draft announcements, kept separate from docusaurus.config.js so a launch
// is a content change, not a config change. Each entry is inert until
// `enabled: true` (owner sign-off) or previewed via DOCS_ANNOUNCEMENT=<id>.
//
// permit-nexus-launch: prepared ahead of the Permit Nexus (PDP v3) launch.
// Copy is deliberately neutral - no capability claims, since the product
// isn't public yet. The link target is the existing PDP overview doc until
// a dedicated Nexus page exists; update `content` when that page ships.
// Marked for owner approval in the PR before `enabled` flips to true.
module.exports = {
  id: "permit-nexus-launch",
  enabled: false,
  content:
    'Meet Permit Nexus, the next-generation Permit PDP. <a href="/concepts/pdp/overview">Read the launch notes →</a>',
  backgroundColor: "#8132D7",
  textColor: "#FFFFFF",
  isCloseable: true,
};
