// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("./src/css/prism-theme");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const companyWebsiteUrl =
  process.env.COMPANY_WEBSITE_URL ?? "https://permit.io";

const apiReferenceUrl =
  process.env.API_REFERENCE_URL ?? "https://api.permit.io/v2/redoc";

const algoliaAppId = process.env.APPLICATION_ID || "";
const algoliaApiKey = process.env.API_KEY || "";

let searchConfig = {};
if (algoliaAppId && algoliaApiKey) {
  searchConfig = {
    algolia: {
      appId: process.env.APPLICATION_ID,
      apiKey: process.env.API_KEY,
      indexName: "docs",
    },
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Permit.io",
  tagline: "Fullstack Authorization",
  url: "https://docs.permit.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "permitio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
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
      }),
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
            to: "/features/multitenancy",
          },
        ],
      },
    ],
    "docusaurus-plugin-sass",
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
      navbar: {
        logo: {
          alt: "Permit.io",
          src: "img/permitio-logo.svg",
          srcDark: "img/permitio-logo-dark.svg",
          width: 110,
        },
        items: [
          {
            href: "https://app.permit.io",
            position: "left",
            label: "Home",
          },
          {
            type: "doc",
            docId: "home",
            position: "left",
            label: "Docs",
          },
          {
            to: `${apiReferenceUrl}`,
            label: "API Reference",
            position: "left",
            target: "_self",
          },
          {
            type: "doc",
            docId: "status",
            position: "left",
            label: "Permit Status",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/permitio",
            position: "right",
            className: "header-github-link",
            "aria-label": "Github",
          },
          {
            href: "https://twitter.com/permit_io",
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Twitter",
          },
          {
            href: "https://bit.ly/opal-slack",
            position: "right",
            className: "header-slack-link",
            "aria-label": "Slack community",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Permit, Inc.`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
        additionalLanguages: ["java", "csharp", "groovy"],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      //search configuration
      ...searchConfig,
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
