/* eslint-disable spellcheck/spell-checker */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// require("@babel/register")({
//   extensions: [".js", ".jsx"],
//   presets: ["@babel/preset-env", "@babel/preset-react"],
//   plugins: ["@babel/plugin-transform-modules-commonjs"],
// });

const path = require("path");

// Code block themes from the www.permit.io palette; contrast notes in each file.
const prismLightTheme = require("./src/css/prism/light");
const prismDarkTheme = require("./src/css/prism/dark");
const siteLinks = require("./src/data/site-links");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Permit.io Documentation",
  stylesheets: ["https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"],
  tagline:
    "Permit is a Fullstack Authorization as a Service, allowing you to configure policies with a no-code UI and bake in enforcement points into your application, never having to write permissions again.",
  url: "https://docs.permit.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "logo/favicon.ico",
  organizationName: "permitio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
    },
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
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
        redirects: require("./redirects"),
      },
    ],
    "docusaurus-plugin-sass",
    "docusaurus-plugin-hotjar",
    "docusaurus-plugin-image-zoom",
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
    [
      "@inkeep/cxkit-docusaurus",
      {
        ChatButton: {
          baseSettings: {
            apiKey: "446287e718c0fd535135e7e51147a028a61120d17fd74d2f",
            primaryBrandColor: "#8132D7",
            organizationDisplayName: "Permit.io",
          },
        },
        SearchBar: {
          searchSettings: {
            placeholder: "Search docs",
          },
          baseSettings: {
            apiKey: "446287e718c0fd535135e7e51147a028a61120d17fd74d2f",
            primaryBrandColor: "#8132D7",
            organizationDisplayName: "Permit.io",
            theme: {
              // The trigger renders in a shadow root, so navbar CSS cannot reach
              // it; page tokens (custom properties) still inherit. It fills the
              // width _navbar.scss gives its host and shows only the icon when
              // that host is narrow (below 1440px).
              styles: [
                {
                  key: "pm-navbar-search",
                  type: "style",
                  value: `
                    .ikp-search-bar__container { min-width: 0 !important; }
                    .ikp-search-bar__container button {
                      width: 100%;
                      border-color: var(--pm-border-strong);
                      background: transparent;
                      color: var(--pm-text-muted);
                    }
                    .ikp-search-bar__text {
                      overflow: hidden;
                      color: var(--pm-text-muted);
                      font-size: 0.875rem;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                    @media (max-width: 1439px) {
                      .ikp-search-bar__container button { justify-content: center; padding: 0; }
                      .ikp-search-bar__text, .ikp-search-bar__container kbd { display: none; }
                    }
                  `,
                },
              ],
            },
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        options: {
          themeVariables: {
            edgeLabelBackground: '#F9EDE7',
          },
        },
      },
      zoom: {
        selector: ".markdown :not(em) > img",
      },
      hotjar: {
        // Added fake appID as variables are pulled from netlify & error without alternative
        applicationId: process.env.HOTJAR_ID || "1234567890",
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: "Permit.io Docs",
          src: "logo/logo_nav.svg",
          srcDark: "logo/logo-dark.svg",
          href: "/",
          target: "_self",
          width: 110,
          height: 20,
        },
        items: [
          // Section tabs: each is backed by a sidebar in sidebars.js, so the tab
          // stays active on every page of that section.
          ...[
            ["getStarted", "Get started"],
            ["concepts", "Concepts"],
            ["modeling", "Policies"],
            ["enforce", "Enforce"],
            ["aiAgents", "AI agents"],
            ["sdks", "SDKs & API"],
            ["integrations", "Integrations"],
            ["operate", "Operate"],
          ].map(([sidebarId, label]) => ({
            type: "docSidebar",
            sidebarId,
            label,
            position: "left",
            className: "pm-nav-tab",
          })),
          {
            type: "search",
            position: "right",
            className: "pm-nav-search",
          },
          {
            label: "API reference",
            href: siteLinks.API_REFERENCE,
            position: "right",
            className: "pm-nav-link",
          },
          {
            type: "dropdown",
            label: "permit.io",
            position: "right",
            className: "pm-nav-link pm-nav-www",
            items: [
              { type: "html", value: '<span class="pm-dropdown-heading">Products</span>' },
              ...siteLinks.products.map(({ label, href }) => ({ label, href })),
              {
                type: "html",
                value: '<span class="pm-dropdown-heading">Authorization models</span>',
              },
              ...siteLinks.models.map(({ label, href }) => ({ label, href })),
              { type: "html", value: '<hr class="pm-dropdown-divider" />' },
              { label: "Pricing", href: siteLinks.PRICING },
              { label: "Trust Center", href: siteLinks.TRUST },
              { label: "Blog", href: siteLinks.BLOG },
            ],
          },
          {
            type: "html",
            position: "right",
            className: "pm-nav-icon",
            value: `<a href="${siteLinks.GITHUB}" target="_blank" rel="noopener noreferrer" aria-label="Permit.io on GitHub"><i class="ri-github-fill" aria-hidden="true"></i><span class="pm-nav-icon__label">GitHub</span></a>`,
          },
          {
            type: "html",
            position: "right",
            className: "pm-nav-cta",
            value: `<a href="${siteLinks.APP}" target="_blank" rel="noopener noreferrer">Open dashboard</a>`,
          },
        ],
      },
      footer: {
        // No `style: "dark"`: _footer.scss paints it from tokens so it follows
        // the colour mode (a dark footer on the light theme is website defect D2).
        logo: {
          alt: "Permit.io Docs",
          src: "logo/logo_nav.svg",
          srcDark: "logo/logo-dark.svg",
          href: "/",
          width: 110,
          height: 20,
        },
        links: [
          {
            title: "Docs",
            items: [
              { label: "Quickstart", to: "/quickstart" },
              { label: "Concepts", to: "/overview/how-does-it-work" },
              { label: "SDKs", to: "/sdk/sdks-overview" },
              { label: "API reference", href: siteLinks.API_REFERENCE },
              { label: "Changelog", to: "/updates-and-feedback/changelog" },
              { label: "Status", href: siteLinks.STATUS },
            ],
          },
          {
            title: "Products",
            items: siteLinks.products.map(({ label, href }) => ({ label, href })),
          },
          {
            title: "Resources",
            items: [
              { label: "Blog", href: siteLinks.BLOG },
              // The website has no models index page; RBAC links to the other three.
              { label: "Authorization models", href: siteLinks.models[0].href },
              { label: "Open source OPAL", href: siteLinks.OPAL },
              { label: "Videos", href: siteLinks.VIDEOS },
            ],
          },
          {
            title: "Company",
            items: [
              { label: "Trust Center", href: siteLinks.TRUST },
              { label: "Pricing", href: siteLinks.PRICING },
              { label: "Contact sales", href: siteLinks.DEMO },
              { label: "Community Slack", href: siteLinks.COMMUNITY },
              { label: "Privacy", href: siteLinks.PRIVACY },
              { label: "Terms", href: siteLinks.TERMS },
            ],
          },
        ],
        copyright: [
          `<span class="pm-footer-copyright">&copy; ${new Date().getFullYear()} Permit.io</span>`,
          '<ul class="pm-footer-social">',
          ...[
            ["GitHub", siteLinks.GITHUB, "ri-github-fill"],
            ["Slack", siteLinks.COMMUNITY, "ri-slack-fill"],
            ["X", siteLinks.X, "ri-twitter-x-fill"],
            ["YouTube", siteLinks.YOUTUBE, "ri-youtube-fill"],
            ["LinkedIn", siteLinks.LINKEDIN, "ri-linkedin-box-fill"],
          ].map(
            ([name, href, icon]) =>
              `<li><a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="Permit.io on ${name}"><i class="${icon}" aria-hidden="true"></i></a></li>`
          ),
          "</ul>",
        ].join(""),
      },
      prism: {
        theme: prismLightTheme,
        darkTheme: prismDarkTheme,
        additionalLanguages: ["java", "ruby", "csharp", "groovy", "go", "hcl", "php", "bash"],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: "support_us",
        content: `If you like Permit, give us a ⭐️  on <a href="${siteLinks.OPAL}" target="_blank" rel="noopener noreferrer">GitHub</a> and follow us on <a href="${siteLinks.X}" target="_blank" rel="noopener noreferrer">X</a>`,
        backgroundColor: "#8132D7",
        textColor: "#FFFFFF",
        isCloseable: true,
      },
    }),
};

module.exports = config;
