/* eslint-disable spellcheck/spell-checker */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("path");

const lightCodeTheme = require("./src/css/prism-theme");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const companyWebsiteUrl = process.env.COMPANY_WEBSITE_URL ?? "https://permit.io";

const apiReferenceUrl = process.env.API_REFERENCE_URL ?? "https://api.permit.io/v2/redoc";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Permit.io Documentation",
  stylesheets: ["https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"],
  tagline:
    "Permit is a Fullstack Authorization as a Service, allowing you to configure policies with a no-code UI and bake in enforcement points into your application, never having to write permissions again.",
  url: "https://docs.permit.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "logo/favicon.ico",
  organizationName: "permitio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  markdown: { mermaid: true },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        gtag: {
          trackingID: "G-S2W3HZX9EZ",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          lastVersion: "current",
          versions: {
            current: {
              label: "2.0.0",
              path: "/",
            },
            "1.0.0": {
              banner: "none",
            },
          },
        },
        blog: false, // disables docusaurus blog
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // Backwards support - We moved multitenancy into features
          {
            from: "/concepts/multi-tenancy",
            to: "/how-to/build-policies/policy-basics",
          },
          {
            from: "/reference/sdks/python/sync_resources/",
            to: "/sdk/python/quickstart_python_sync",
          },
          {
            from: [
              "/sdk/python/role/create-role/",
              "/sdk/python/role/get-role/",
              "/sdk/python/resource/update-resource/",
              "/sdk/python/tenant/update-tenant/",
              "/reference/SDKs/Python/sync_user",
            ],
            to: "/sdk/python/usage-example",
          },
          {
            from: "/reference/sdks/java/sync_user/",
            to: "/sdk/java/user/sync",
          },
          {
            from: "/reference/sdks/java/quickstart_java/",
            to: "/sdk/java/quickstart-java",
          },
          {
            from: ["/reference/sdks/dotnet/sync_user/"],
            to: "/sdk/dotnet/user/SyncUser",
          },
          {
            from: [
              "/getting-started/create-your-account",
              "/tutorials/connect_your_app/",
              "/tutorials/connecting_to_authentication",
              "/tutorials/demo",
              "/tutorials/configuration",
              "/tutorials/healthchecks",
            ],
            to: "/quickstart",
          },
          {
            from: "/features/policy_editor/",
            to: "/how-to/build-policies/policy-basics",
          },
          {
            from: "/concepts/projects_and_environments",
            to: "/manage-your-account/projects-and-env",
          },
          {
            from: "/reference/api_with_cli/",
            to: "/api/api-with-cli",
          },
          {
            from: "/overview/permit_data_model/",
            to: "/",
          },
          {
            from: "/features/Audit Logs/troubleshooting",
            to: "/how-to/use-audit-logs/troubleshooting",
          },
          {
            from: "/features/coming_soon/",
            to: "/updates-and-feedback/roadmap",
          },

          // Backward compatability links for side-navigation (full rewrite).

          {
            from: [
              "/tutorials/onboarding/lets-begin",
              "/tutorials/onboarding/your-workspace",
              "/tutorials/onboarding/policy-and-resources",
              "/tutorials/onboarding/roles-and-permissions",
              "/tutorials/onboarding/connect-your-app",
            ],
            to: "/quickstart",
          },
          {
            from: "/tutorials/onboarding/deploying-to-production",
            to: "/how-to/deploy/deploy-to-production",
          },
          {
            from: ["/tutorials/quickstart"],
            to: "/quickstart",
          },
          {
            from: ["/tutorials/introduction/what-is-permit", "/overview/what-is-permit"],
            to: "/overview/why-permit",
          },
          {
            from: ["/security/connectivity", "/overview/how-permit-works"],
            to: "/overview/how-does-it-work",
          },
          {
            from: [
              "/concepts/authorization-concepts",
              "/concepts/glossary",
              "/overview/permit-basics",
            ],
            to: "/overview/glossary",
          },
          {
            from: "/tutorials/deploying/on-prem",
            to: "/how-to/deploy/on-prem",
          },
          {
            from: "/tutorials/deploying/overview",
            to: "/how-to/deploy/overview",
          },
          // FOAZ FIX
          {
            from: "/frontend-only-authz/overview",
            to: "/foaz/overview",
          },
          {
            from: "/features/policy-editor/editor-overview",
            to: "/how-to/build-policies/policy-basics",
          },
          {
            from: "/features/policy-editor/rbac",
            to: "/how-to/build-policies/rbac/overview",
          },
          {
            from: "/features/policy-editor/abac",
            to: "/how-to/build-policies/abac/overview",
          },
          {
            from: "/features/audit-logs/types",
            to: "/how-to/use-audit-logs/types-and-filtering",
          },
          {
            from: "/features/audit-logs/filtering",
            to: "/how-to/use-audit-logs/types-and-filtering",
          },
          {
            from: "/how-to/use-audit-logs/types",
            to: "/how-to/use-audit-logs/types-and-filtering",
          },
          {
            from: "/how-to/use-audit-logs/filtering",
            to: "/how-to/use-audit-logs/types-and-filtering",
          },
          {
            from: "/features/audit-logs/troubleshooting",
            to: "/how-to/use-audit-logs/troubleshooting",
          },
          {
            from: [
              "/errors/cloud_pdp_not_supporting_abac",
              "/features/audit-logs/errors/cloud_pdp_not_supporting_abac",
            ],
            to: "/how-to/use-audit-logs/errors/cloud_pdp_not_supporting_abac",
          },
          {
            from: [
              "/errors/no_matching_resourcesets",
              "/features/audit-logs/errors/no_matching_resourcesets",
            ],
            to: "/how-to/use-audit-logs/errors/no_matching_resourcesets",
          },
          {
            from: ["/errors/no_matching_rules", "/features/audit-logs/errors/no_matching_rules"],
            to: "/how-to/use-audit-logs/errors/no_matching_rules",
          },
          {
            from: [
              "/errors/no_matching_usersets",
              "/features/audit-logs/errors/no_matching_usersets",
            ],
            to: "/how-to/use-audit-logs/errors/no_matching_usersets",
          },
          {
            from: ["/errors/no_permission", "/features/audit-logs/errors/no_permission"],
            to: "/how-to/use-audit-logs/errors/no_permission",
          },
          {
            from: ["/errors/no_role_in_tenant", "/features/audit-logs/errors/no_role_in_tenant"],
            to: "/how-to/use-audit-logs/errors/no_role_in_tenant",
          },
          {
            from: ["/errors/no_such_action", "/features/audit-logs/errors/no_such_action"],
            to: "/how-to/use-audit-logs/errors/no_such_action",
          },
          {
            from: ["/errors/no_such_resource", "/features/audit-logs/errors/no_such_resource"],
            to: "/how-to/use-audit-logs/errors/no_such_resource",
          },
          {
            from: ["/errors/no_such_tenant", "/features/audit-logs/errors/no_such_tenant"],
            to: "/how-to/use-audit-logs/errors/no_such_tenant",
          },
          {
            from: ["/errors/no_user_roles", "/features/audit-logs/errors/no_user_roles"],
            to: "/how-to/use-audit-logs/errors/no_user_roles",
          },
          {
            from: ["/errors/user_not_synced", "/features/audit-logs/errors/user_not_synced"],
            to: "/how-to/use-audit-logs/errors/user_not_synced",
          },
          {
            from: "/getting-started/deploying/cloud-hosts/gcp-cloud-run",
            to: "/how-to/deploy/cloud-hosts/gcp-cloud-run",
          },
          {
            from: "/getting-started/deploying/cloud-hosts/kubernetes-raw",
            to: "/how-to/deploy/cloud-hosts/kubernetes-raw",
          },
          {
            from: "/getting-started/deploying/deploy-to-production",
            to: "/how-to/deploy/deploy-to-production",
          },
          {
            from: "/getting-started/deploying/overview",
            to: "/how-to/deploy/overview",
          },
          {
            from: "/getting-started/deploying/on-prem",
            to: "/how-to/deploy/on-prem",
          },
          {
            from: "/features/projects-and-env",
            to: "/manage-your-account/projects-and-env",
          },
          {
            from: "/features/user-management",
            to: "/how-to/build-policies/policy-basics",
          },
          {
            from: [
              "/features/settings/team-management",
              "/features/settings/api-key-management",
              "/features/settings/activity-logs",
              "/features/settings/api-log",
            ],
            to: "/manage-your-account/workspace-settings",
          },
          {
            from: "/features/permit-elements/overview",
            to: "/embeddable-uis/overview",
          },
          {
            from: "/features/permit-elements/element/user-management",
            to: "/embeddable-uis/element/user-management",
          },
          {
            from: "/features/permit-elements/element/audit-logs",
            to: "/embeddable-uis/element/audit-logs",
          },
          {
            from: "/features/permit-elements/element/approval-flows",
            to: "/embeddable-uis/element/approval-flows",
          },
          {
            from: "/features/permit-elements/email-configuration-and-templates",
            to: "/embeddable-uis/email-configuration-and-templates",
          },
          {
            from: "/features/permit-elements/permission-levels",
            to: "/embeddable-uis/permission-levels",
          },
          {
            from: "/features/permit-elements/user-preview",
            to: "/embeddable-uis/user-preview",
          },
          {
            from: "/features/multitenancy",
            to: "/concepts/multitenancy",
          },
          {
            from: "/features/loading-data/via-api",
            to: "/how-to/manage-data/loading-data",
          },
          {
            from: "/features/loading-data/via-opal",
            to: "/how-to/manage-data/loading-data",
          },
          {
            from: "/concepts/pdp-sharding",
            to: "/how-to/manage-data/pdp-sharding",
          },
          // Docs restructure iteration 1 - 5th March 2024
          {
            from: ["/getting-started/quickstart", "/overview/permit-demo"],
            to: "/quickstart",
          },
          {
            from: "/getting-started/connecting-your-app",
            to: "/overview/connecting-your-app",
          },
          {
            from: "/category/supported-sdks",
            to: "/sdk/sdks-overview",
          },
          {
            from: ["/category/how-to", "/category/-guides--tutorials"],
            to: "/category/guides--tutorials",
          },
          {
            from: ["/category/integrations", "/category/-integrate-to-applications"],
            to: "/category/integrate-to-applications",
          },
          {
            from: ["/category/modeling-examples", "/category/-learn-by-example"],
            to: "/category/learn-by-example",
          },
          {
            from: "/integrations/authentication/auth0/auth0-demo-app",
            to: "/authentication/auth0/auth0-demo-app",
          },
          {
            from: "/integrations/authentication/auth0/auth0-sync-script",
            to: "/authentication/auth0/auth0-sync-script",
          },
          {
            from: "/integrations/authentication/auth0/permit-integration",
            to: "/authentication/auth0/permit-integration",
          },
          {
            from: "/integrations/authentication/cognito/cognito-demo-app",
            to: "/authentication/cognito/cognito-demo-app",
          },
          {
            from: "/integrations/authentication/cognito/permit-integration",
            to: "/authentication/cognito/permit-integration",
          },
          {
            from: "/integrations/authentication/fusionauth",
            to: "/authentication/fusionauth",
          },
          {
            from: "/integrations/authentication/hankopermit",
            to: "/authentication/hankopermit",
          },
          {
            from: "/integrations/authentication/supertokens",
            to: "/authentication/supertokens",
          },
          {
            from: "/integrations/authentication/your-authentication",
            to: "/authentication/your-authentication",
          },
          { from: "/category/-work-with-authentication", to: "/category/work-with-authentication" },
        ],
      },
    ],
    "docusaurus-plugin-sass",
    "docusaurus-plugin-hotjar",
    "plugin-image-zoom",
    async function TailwindCSSPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      imageZoom: {
        selector: ".markdown :not(em) > img",
      },
      hotjar: {
        // Added fake appID as variables are pulled from netlify & error without alternative
        applicationId: process.env.HOTJAR_ID || "1234567890",
      },
      navbar: {
        hideOnScroll: false,
        // logo: {
        //   alt: "Permit.io logo",
        //   src: "logo/new-logo-light.svg",
        //   srcDark: "logo/new-logo-dark.svg",
        //   href: "/",
        //   target: "_self",
        //   width: 230,
        // },
        items: [
          {
            type: "search",
            position: "left",
            className: "algolia-search",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            alt: "twitter logo",
            className: "github-icon nav-icon",
            href: "https://github.com/permitio",
            target: "_blank",
            position: "right",
          },
          {
            alt: "github logo",
            className: "twitter-icon nav-icon",
            href: "https://twitter.com/permit_io",
            target: "_blank",
            position: "right",
          },
          {
            alt: "slack logo",
            className: "slack-icon nav-icon",
            href: "https://io.permit.io/docs-to-slack",
            target: "_blank",
            position: "right",
          },
          {
            type: "html",
            position: "right",
            className: "dashboard",
            value: "<a target='_blank' href='https://io.permit.io/QoPSfh'>Go to dashboard</a>",
          },
        ],
      },
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
        additionalLanguages: ["java", "ruby", "csharp", "groovy", "go", "hcl"],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: "5XEC02AV6V",
        apiKey: "468aa3509ee97f55ff3c6dcff73c61c4",
        indexName: "docs",
        contextualSearch: true,
      },
      announcementBar: {
        id: "support_us",
        content:
          'If you like Permit, give us a ⭐️  on <a href="https://www.github.com/permitio/opal" target="_blank" rel="noopener noreferrer">GitHub</a> and follow us on <a href="https://www.twitter.com/permit_io" target="_blank" rel="noopener noreferrer">Twitter</a>',
        backgroundColor: "#6851ff",
        textColor: "#FFFFFF",
        isCloseable: true,
      },
    }),
};

module.exports = config;
