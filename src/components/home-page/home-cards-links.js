import React from "react";

export const firstRow = [
  {
    type: "link",
    href: "quickstart",
    label: "Overview",
    svgIcon: <i className="ri-earth-line" />,
    tone: "purple",
    description: "Learn what Permit is and how it works",
  },
  {
    type: "link",
    href: "walkthroughs",
    label: "Tutorials & Walkthroughs",
    svgIcon: <i className="ri-book-open-line" />,
    tone: "purple",
    description: "Best practices and how-to guides",
  },
  {
    type: "link",
    href: "category/learn-by-example",
    label: "Examples",
    svgIcon: <i className="ri-suitcase-line" />,
    tone: "purple",
    description: "View real-life Permit integration examples",
  },
];

export const quickStartRow = [
  {
    type: "link",
    href: "/quick-start/nest",
    label: "NestJS",
    svgIcon: <i className="ri-server-line" />,
    tone: "orange",
    description: "Add authorization to your NestJS application",
  },
  {
    type: "link",
    href: "/quick-start/nextjs",
    label: "Next.js",
    svgIcon: <i className="ri-reactjs-line" />,
    tone: "orange",
    description: "Integrate fine-grained authorization with Next.js",
  },
  {
    type: "link",
    href: "/quick-start/express",
    label: "Express.js",
    svgIcon: <i className="ri-terminal-box-line" />,
    tone: "orange",
    description: "Secure your Express.js API endpoints",
  },
  {
    type: "link",
    href: "/quick-start/fastapi",
    label: "FastAPI",
    svgIcon: <i className="ri-rocket-line" />,
    tone: "orange",
    description: "Python authorization with FastAPI framework",
  },
  {
    type: "link",
    href: "/quick-start/django",
    label: "Django",
    svgIcon: <i className="ri-building-line" />,
    tone: "orange",
    description: "Add permissions to your Django application",
  },
  {
    type: "link",
    href: "/quick-start/flask",
    label: "Flask",
    svgIcon: <i className="ri-flask-line" />,
    tone: "orange",
    description: "Implement authorization in Flask applications",
  },
  {
    type: "link",
    href: "/quick-start/aspnet",
    label: "ASP.NET Core",
    svgIcon: <i className="ri-microsoft-line" />,
    tone: "orange",
    description: "Secure .NET applications with Permit",
  },
  {
    type: "link",
    href: "/quick-start/spring-boot",
    label: "Spring Boot",
    svgIcon: <i className="ri-plant-line" />,
    tone: "orange",
    description: "Java authorization with Spring Boot",
  },
  {
    type: "link",
    href: "/quick-start/gin",
    label: "Gin",
    svgIcon: <i className="ri-speed-line" />,
    tone: "orange",
    description: "Go web framework with authorization",
  },
  {
    type: "link",
    href: "/quick-start/rails",
    label: "Ruby on Rails",
    svgIcon: <i className="ri-train-line" />,
    tone: "orange",
    description: "Add permissions to Rails applications",
  },
];

export const policyModelingRow = [
  {
    type: "link",
    href: "/how-to/build-policies/rbac/overview",
    label: "RBAC (Role-Based Access Control)",
    svgIcon: <i className="ri-profile-line" />,
    description: "Role-based authorization explained",
  },
  {
    type: "link",
    href: "/how-to/build-policies/abac/overview",
    label: "ABAC (Attribute-Based Access Control)",
    svgIcon: <i className="ri-award-line" />,
    description: "Policy-based access using attributes",
  },
  {
    type: "link",
    href: "/how-to/build-policies/rebac/overview",
    label: "ReBAC (Relationship-Based Access Control)",
    svgIcon: <i className="ri-node-tree" />,
    description: "Access control based on relationships",
  },
  {
    type: "link",
    href: "/how-to/build-policies/policy-basics",
    label: "Choosing the Right Model",
    svgIcon: <i className="ri-question-line" />,
    description: "Policy Basics & How to decide between RBAC, ABAC, and ReBAC",
  },
  {
    type: "link",
    href: "/how-to/SDLC/modeling-implementation-components",
    label: "Common Policy Patterns",
    svgIcon: <i className="ri-function-line" />,
    description: "Time-Based, Ownership, Multi-Tenancy",
  },
];

export const sdkRow = [
  {
    type: "link",
    href: "sdk/sdks-overview",
    label: "SDKs",
    svgIcon: <i className="ri-tools-line" />,
    description: "Explore the supported SDKs and frameworks",
  },
  {
    type: "link",
    href: "/integrations/infra-as-code/terraform-provider",
    label: "Terraform",
    svgIcon: <i className="ri-cloud-line" />,
    description: "Manage policy as code with Terraform",
  },
  {
    type: "link",
    href: "sdk/golang/quickstart-golang",
    label: "Golang",
    icon: " ",
  },
  { type: "link", href: "sdk/nodejs/quickstart-nodejs", label: "Node.js", icon: " " },
  { type: "link", href: "sdk/python/quickstart_python_sync", label: "Python", icon: " " },
  { type: "link", href: "sdk/ruby/quickstart-ruby", label: "Ruby", icon: " " },
  { type: "link", href: "sdk/java/quickstart-java", label: "Java", icon: " " },
  { type: "link", href: "sdk/dotnet/quickstart-dotnet", label: ".NET", icon: " " },
];

export const integrationsRow = [
  {
    type: "link",
    href: "/embeddable-uis/overview",
    label: "Permit Elements",
    svgIcon: <i className="ri-palette-line" />,
    description: "Pre-built, embeddable UI components for your app",
  },
  {
    type: "link",
    href: "/integrations/feature-flagging/casl",
    label: "Frontend Entitlements",
    svgIcon: <i className="ri-brush-line" />,
    description: "Adjust & render UI dynamically based on policy rules",
  },
];

export const enforcementRow = [
  {
    type: "link",
    href: "/overview/sync-your-first-user-with-sdk",
    label: "Syncing Users & Identity",
    svgIcon: <i className="ri-user-settings-line" />,
    description: "Sync identities & manage user roles efficiently",
  },
  {
    type: "link",
    href: "/integrations/gateways/overview",
    label: "Gateways & Proxies",
    svgIcon: <i className="ri-shield-line" />,
    description: "Enforce policies at the gateway/proxy level",
  },
  {
    type: "link",
    href: "/how-to/bulk-operations",
    label: "Bulk Operations",
    svgIcon: <i className="ri-stack-line" />,
    description: "Efficiently manage permissions in bulk",
  },
  {
    type: "link",
    href: "/how-to/enforce-permissions/url-mapping/url-mapping-check",
    label: "URL Mapping",
    svgIcon: <i className="ri-map-pin-line" />,
    description: "Map and secure routes with access control",
  },
];

export const devOpsRow = [
  {
    type: "link",
    href: "/integrations/gitops/overview",
    label: "GitOps",
    svgIcon: <i className="ri-loop-left-line" />,
    description: "GitOps-ready Permission Management",
  },
  {
    type: "link",
    href: "/how-to/SDLC/CI-CD",
    label: "Policy CI/CD",
    svgIcon: <i className="ri-git-branch-line" />,
    description: "Automate policy deployment with CI/CD",
  },
  {
    type: "link",
    href: "/how-to/manage-data/loading-data",
    label: "Custom Data Loading",
    svgIcon: <i className="ri-database-2-line" />,
    description: "Load external data into your access logic",
  },
  {
    type: "link",
    href: "/how-to/use-audit-logs/types-and-filtering/",
    label: "Auditing & Logs",
    svgIcon: <i className="ri-file-list-line" />,
    description: "Track and monitor permission changes",
  },
];

export const socialsRow = [
  {
    type: "link",
    href: "https://io.permit.io/docs-home-join-community",
    label: "Permit.io Slack Community",
    svgIcon: <i className="ri-slack-line" />,
  },
  {
    type: "link",
    href: "https://github.com/permitio",
    label: "Github",
    svgIcon: <i className="ri-github-line" />,
  },
];
