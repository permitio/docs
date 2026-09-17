// Link data for the docs home (docs/home.mdx) and the walkthroughs landing
// (docs/overview/walkthroughs-intro.mdx). Every `href` is a built doc route
// (checked against build/sitemap.xml) or a src/data/site-links.js URL.
import siteLinks from "@site/src/data/site-links";

export const homeActions = [
  { label: "Quickstart", href: "/quickstart", primary: true },
  { label: "API reference", href: siteLinks.API_REFERENCE },
];

export const homePaths = [
  {
    title: "Authorize your app and API",
    description: "Model roles, attributes, and relationships, then call permit.check() from your backend.",
    href: "/quickstart",
    icon: "ri-shield-keyhole-line",
  },
  {
    title: "Secure AI agents with MCP Gateway",
    description: "Put the gateway in front of MCP servers so every tool call is checked against policy and logged.",
    href: "/permit-mcp-gateway",
    icon: "ri-robot-2-line",
  },
  {
    title: "Embed access requests and user management",
    description: "Add Permit Elements to your app so users can request access and admins can manage their own teams.",
    href: "/embeddable-uis/overview",
    icon: "ri-layout-masonry-line",
  },
  {
    title: "Deploy the PDP",
    description: "Run the policy decision point as a container next to your services, in your own network.",
    href: "/concepts/pdp/overview",
    icon: "ri-server-line",
  },
];

// Queries beyond a single allow/deny check. `method` is the SDK call as each
// page names it.
export const homeQueries = [
  {
    title: "Bulk check",
    method: "bulkCheck()",
    description: "Evaluate many user, action, and resource checks in a single call, for lists, tables, and dashboards.",
    href: "/how-to/enforce-permissions/bulk-check",
    icon: "ri-stack-line",
  },
  {
    title: "Get user permissions",
    method: "getUserPermissions()",
    description: "Return everything a user can do across resources and tenants, including ABAC access, to drive your UI.",
    href: "/how-to/enforce-permissions/user-permissions",
    icon: "ri-user-settings-line",
  },
  {
    title: "Get authorized users",
    method: "authorized_users()",
    description: "List the users who can perform an action on a resource, with the role assignments that grant it.",
    href: "/how-to/enforce-permissions/authorized-users",
    icon: "ri-team-line",
  },
  {
    title: "Check in all tenants",
    method: "checkInAllTenants()",
    description: "Find every tenant where a user can perform an action, without one check per tenant.",
    href: "/how-to/enforce-permissions/all-tenants-check",
    icon: "ri-building-2-line",
  },
];

// Package identifiers as the SDK pages install them.
export const homeSdks = [
  { name: "Node.js", registry: "npm", pkg: "permitio", href: "/sdk/nodejs/quickstart-nodejs" },
  { name: "Python", registry: "PyPI", pkg: "permit", href: "/sdk/python/quickstart-python" },
  { name: "Java", registry: "Maven", pkg: "io.permit:permit-sdk-java", href: "/sdk/java/quickstart-java" },
  { name: ".NET", registry: "NuGet", pkg: "Permit", href: "/sdk/dotnet/quickstart-dotnet" },
  { name: "Go", registry: "Go module", pkg: "github.com/permitio/permit-golang", href: "/sdk/golang/quickstart-golang" },
  { name: "Ruby", registry: "RubyGems", pkg: "permit-sdk", href: "/sdk/ruby/quickstart-ruby" },
  { name: "PHP", registry: "Composer", pkg: "permitio/permit-php", href: "/sdk/php/quickstart-php" },
  {
    name: "Terraform",
    registry: "Terraform provider",
    pkg: "permitio/permit-io",
    href: "/integrations/infra-as-code/terraform-provider",
  },
  { name: "CLI", registry: "npm", pkg: "@permitio/cli", href: "/how-to/permit-cli" },
];

export const homeTasks = [
  { label: "Check a permission", href: "/how-to/enforce-permissions/check" },
  { label: "Sync users", href: "/how-to/sync-users" },
  { label: "Write an ABAC policy", href: "/how-to/build-policies/abac/building-abac-policy" },
  { label: "Assign ReBAC resource roles", href: "/how-to/build-policies/rebac/building-rebac-policies" },
  { label: "Filter audit logs", href: "/how-to/use-audit-logs/types-and-filtering" },
  { label: "Manage policy with GitOps", href: "/integrations/gitops/overview" },
];

export const helpChannels = [
  {
    icon: "ri-slack-fill",
    label: "Ask in Slack",
    description: "Get help from the Permit team and other developers building with Permit.",
    href: siteLinks.COMMUNITY,
  },
  {
    icon: "ri-github-fill",
    label: "GitHub",
    description: "Source code and issue trackers for the SDKs, the PDP, and OPAL.",
    href: siteLinks.GITHUB,
  },
  {
    icon: "ri-pulse-line",
    label: "Status page",
    description: "Current availability of Permit services and incident history.",
    href: siteLinks.STATUS,
  },
  {
    icon: "ri-customer-service-2-line",
    label: "Talk to an engineer",
    description: "Architecture, scale, and rollout questions for your deployment.",
    href: siteLinks.DEMO,
  },
];

export const walkthroughActions = [
  { label: "Start the first walkthrough", href: "/overview/configure-your-first-rbac-policy", primary: true },
  { label: "Quickstart", href: "/quickstart" },
];

// Same order as the Walkthroughs category in sidebars.js.
export const walkthroughs = [
  {
    title: "Configure your first RBAC policy",
    description: "Create resources, actions, and roles, and decide which role can do what.",
    href: "/overview/configure-your-first-rbac-policy",
  },
  {
    title: "Use the Permit API and SDK",
    description: "Get an API key, install an SDK, and connect your application to Permit.",
    href: "/overview/use-the-permit-api-and-sdk",
  },
  {
    title: "Sync your first user",
    description: "Sync a user from your identity provider, assign roles, and add them to tenants.",
    href: "/overview/sync-your-first-user-with-sdk",
  },
  {
    title: "Run your first policy check",
    description: "Add an enforcement point with permit.check() on the Cloud PDP, change permissions, and test again.",
    href: "/overview/perform-policy-check-with-cloud-pdp",
  },
  {
    title: "Run a local PDP",
    description: "Pull and run the PDP container next to your application for local decisions.",
    href: "/overview/local-authorization-microservice",
  },
  {
    title: "Create an ABAC policy",
    description: "Define user sets and resource sets from attributes, then write policy rules on them.",
    href: "/overview/setup-attribute-based-access-control",
  },
  {
    title: "Create a ReBAC policy",
    description: "Create resource roles and relations, then define role derivations.",
    href: "/overview/create-a-rebac-policy",
  },
  {
    title: "Sync application data",
    description: "Sync users, tenants, role assignments, resource instances, and relationship tuples.",
    href: "/overview/sync-applications-data",
  },
  {
    title: "Run advanced authorization queries",
    description: "Run bulk checks, filter objects, list authorized users, and get user permissions.",
    href: "/overview/advanced-authorization-queries",
  },
  {
    title: "Add access requests and approvals",
    description: "Build the policy, configure Permit Elements, and embed access requests in your app.",
    href: "/overview/access-requests-and-approvals",
  },
];
