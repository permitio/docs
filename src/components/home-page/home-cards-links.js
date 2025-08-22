import React from "react";

export const firstRow = [
  {
    type: "link",
    href: "quickstart",
    label: "Overview",
    svgIcon: <i className="ri-earth-line ri-xl !text-[#974ef2]"></i>,
    description: "Learn what Permit is and how it works",
  },
  {
    type: "link",
    href: "walkthroughs",
    label: "Tutorials & Walkthroughs",
    svgIcon: <i className="ri-book-open-line ri-xl !text-[#974ef2]"></i>,
    description: "Best practices and how-to guides",
  },
  {
    type: "link",
    href: "category/learn-by-example",
    label: "Examples",
    svgIcon: <i className="ri-suitcase-line ri-xl !text-[#974ef2]"></i>,
    description: "View real-life Permit integration examples",
  },
];

export const quickStartRow = [
  {
    type: "link",
    href: "/quick-start/nest",
    label: "NestJS",
    svgIcon: <i className="ri-server-line ri-xl !text-[#E74C3C]"></i>,
    description: "Add authorization to your NestJS application",
  },
  {
    type: "link",
    href: "/quick-start/nextjs",
    label: "Next.js",
    svgIcon: <i className="ri-reactjs-line ri-xl !text-[#E74C3C]"></i>,
    description: "Integrate fine-grained authorization with Next.js",
  },
  {
    type: "link",
    href: "/quick-start/express",
    label: "Express.js",
    svgIcon: <i className="ri-terminal-box-line ri-xl !text-[#E74C3C]"></i>,
    description: "Secure your Express.js API endpoints",
  },
  {
    type: "link",
    href: "/quick-start/fastapi",
    label: "FastAPI",
    svgIcon: <i className="ri-rocket-line ri-xl !text-[#E74C3C]"></i>,
    description: "Python authorization with FastAPI framework",
  },
  {
    type: "link",
    href: "/quick-start/django",
    label: "Django",
    svgIcon: <i className="ri-building-line ri-xl !text-[#E74C3C]"></i>,
    description: "Add permissions to your Django application",
  },
  {
    type: "link",
    href: "/quick-start/flask",
    label: "Flask",
    svgIcon: <i className="ri-flask-line ri-xl !text-[#E74C3C]"></i>,
    description: "Implement authorization in Flask applications",
  },
  {
    type: "link",
    href: "/quick-start/aspnet",
    label: "ASP.NET Core",
    svgIcon: <i className="ri-microsoft-line ri-xl !text-[#E74C3C]"></i>,
    description: "Secure .NET applications with Permit",
  },
  {
    type: "link",
    href: "/quick-start/spring-boot",
    label: "Spring Boot",
    svgIcon: <i className="ri-plant-line ri-xl !text-[#E74C3C]"></i>,
    description: "Java authorization with Spring Boot",
  },
  {
    type: "link",
    href: "/quick-start/gin",
    label: "Gin",
    svgIcon: <i className="ri-speed-line ri-xl !text-[#E74C3C]"></i>,
    description: "Go web framework with authorization",
  },
  {
    type: "link",
    href: "/quick-start/rails",
    label: "Ruby on Rails",
    svgIcon: <i className="ri-train-line ri-xl !text-[#E74C3C]"></i>,
    description: "Add permissions to Rails applications",
  },
];

export const policyModelingRow = [
  {
    type: "link",
    href: "/how-to/build-policies/rbac/overview",
    label: "RBAC (Role-Based Access Control)",
    svgIcon: <i className="ri-profile-line ri-xl !text-[#2D7DD2]"></i>,
    description: "Role-based authorization explained",
  },
  {
    type: "link",
    href: "/how-to/build-policies/abac/overview",
    label: "ABAC (Attribute-Based Access Control)",
    svgIcon: <i className="ri-award-line ri-xl !text-[#2D7DD2]"></i>,
    description: "Policy-based access using attributes",
  },
  {
    type: "link",
    href: "/how-to/build-policies/rebac/overview",
    label: "ReBAC (Relationship-Based Access Control)",
    svgIcon: <i className="ri-node-tree ri-xl !text-[#2D7DD2]"></i>,
    description: "Access control based on relationships",
  },
  {
    type: "link",
    href: "/how-to/build-policies/policy-basics",
    label: "Choosing the Right Model",
    svgIcon: <i className="ri-question-line ri-xl !text-[#2D7DD2]"></i>,
    description: "Policy Basics & How to decide between RBAC, ABAC, and ReBAC",
  },
  {
    type: "link",
    href: "/how-to/SDLC/modeling-implementation-components",
    label: "Common Policy Patterns",
    svgIcon: <i className="ri-function-line ri-xl !text-[#2D7DD2]"></i>,
    description: "Time-Based, Ownership, Multi-Tenancy",
  },
];

export const sdkRow = [
  {
    type: "link",
    href: "sdk/sdks-overview",
    label: "SDKs",
    svgIcon: <i className="ri-tools-line ri-xl !text-[#16A085]"></i>,
    description: "Explore the supported SDKs and frameworks",
  },
  {
    type: "link",
    href: "/integrations/infra-as-code/terraform-provider",
    label: "Terraform",
    svgIcon: <i className="ri-cloud-line ri-xl !text-[#16A085]"></i>,
    description: "Manage policy as code with Terraform",
  },
  {
    type: "link",
    href: "sdk/permit-cli-reference",
    label: "Permit CLI",
    svgIcon: <i className="ri-terminal-line ri-xl !text-[#16A085]"></i>,
    description: "Command-line interface for policy management and automation",
  },
  {
    type: "link",
    href: "https://api.permit.io/scalar",
    label: "API Reference",
    svgIcon: <i className="ri-code-s-slash-line ri-xl !text-[#16A085]"></i>,
    description: "Complete API documentation and interactive explorer",
  },
  { type: "link", href: "sdk/golang/quickstart-golang", label: "Golang", icon: " " },
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
    svgIcon: <i className="ri-palette-line ri-xl !text-[#E67E22]"></i>,
    description: "Pre-built, embeddable UI components for your app",
  },
  {
    type: "link",
    href: "/integrations/feature-flagging/casl",
    label: "Frontend Entitlements",
    svgIcon: <i className="ri-brush-line ri-xl !text-[#E67E22]"></i>,
    description: "Adjust & render UI dynamically based on policy rules",
  },
];

export const enforcementRow = [
  {
    type: "link",
    href: "/overview/sync-your-first-user-with-sdk",
    label: "Syncing Users & Identity",
    svgIcon: <i className="ri-user-settings-line ri-xl !text-[#974ef2]"></i>,
    description: "Sync identities & manage user roles efficiently",
  },
  {
    type: "link",
    href: "/integrations/gateways/overview",
    label: "Gateways & Proxies",
    svgIcon: <i className="ri-shield-line ri-xl !text-[#974ef2]"></i>,
    description: "Enforce policies at the gateway/proxy level",
  },
  {
    type: "link",
    href: "/how-to/bulk-operations",
    label: "Bulk Operations",
    svgIcon: <i className="ri-stack-line ri-xl !text-[#974ef2]"></i>,
    description: "Efficiently manage permissions in bulk",
  },
  {
    type: "link",
    href: "/foaz/url-mapping-check/",
    label: "URL Mapping",
    svgIcon: <i className="ri-map-pin-line ri-xl !text-[#974ef2]"></i>,
    description: "Map and secure routes with access control",
  },
];

export const devOpsRow = [
  {
    type: "link",
    href: "/integrations/gitops/overview",
    label: "GitOps",
    svgIcon: <i className="ri-loop-left-line ri-xl !text-[#2D7DD2]"></i>,
    description: "GitOps-ready Permission Management",
  },
  {
    type: "link",
    href: "/how-to/SDLC/CI-CD",
    label: "Policy CI/CD",
    svgIcon: <i className="ri-git-branch-line ri-xl !text-[#2D7DD2]"></i>,
    description: "Automate policy deployment with CI/CD",
  },
  {
    type: "link",
    href: "/how-to/manage-data/loading-data",
    label: "Custom Data Loading",
    svgIcon: <i className="ri-database-2-line ri-xl !text-[#2D7DD2]"></i>,
    description: "Load external data into your access logic",
  },
  {
    type: "link",
    href: "/how-to/use-audit-logs/types-and-filtering/",
    label: "Auditing & Logs",
    svgIcon: <i className="ri-file-list-line ri-xl !text-[#2D7DD2]"></i>,
    description: "Track and monitor permission changes",
  },
];

export const socialsRow = [
  {
    type: "link",
    href: "https://io.permit.io/docs-home-join-community",
    label: "Permit.io Slack Community",
    svgIcon: <i className="ri-slack-line ri-xl !text-[#846358]"></i>,
  },
  {
    type: "link",
    href: "https://github.com/permitio",
    label: "Github",
    svgIcon: <i className="ri-github-line ri-xl !text-[#846358]"></i>,
  },
];
