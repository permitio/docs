/* eslint-disable spellcheck/spell-checker */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// require("@babel/register")({
//   extensions: [".js", ".jsx"],
//   presets: ["@babel/preset-env", "@babel/preset-react"],
//   plugins: ["@babel/plugin-transform-modules-commonjs"],
// });

const path = require("path");

const { themes } = require("prism-react-renderer");

// prism-react-renderer's bundled `themes.github` light theme (used below for
// code blocks) has several token colors that miss WCAG AA 4.5:1 text
// contrast against its own #f6f8fa background out of the box: comment
// (2.71:1), string/attr-value (4.32:1), the entity/variable/number/property
// group (2.58:1), the atrule/keyword/attr-name/selector group (2.69:1), and
// function/tag (4.30:1) — confirmed against `npm run audit:a11y`. Stage 3
// re-tunes the whole code-block palette as part of the broader visual
// system; until then, this keeps `themes.github` as the base (per the
// approved dark-look-unchanged/light-theme-fixed decision for this upgrade)
// and only nudges those failing token colors darker, same hue, just past
// 4.5:1, so picking up the stock theme doesn't regress the a11y gate.
const githubLightTheme = {
  ...themes.github,
  styles: themes.github.styles.map((style) => {
    const overrides = {
      comment: "#717161", // was #999988 (2.71:1 -> 4.66:1)
      string: "#da1067", // was #e3116c (4.32:1 -> 4.64:1)
      entity: "#277b7a", // was #36acaa (2.58:1 -> 4.70:1)
      atrule: "#0078a0", // was #00a4db (2.69:1 -> 4.70:1)
      function: "#d42d3d", // was #d73a49 (4.30:1 -> 4.65:1)
    };
    const overrideKey = Object.keys(overrides).find((type) => style.types.includes(type));
    return overrideKey ? { ...style, style: { ...style.style, color: overrides[overrideKey] } } : style;
  }),
};

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
            primaryBrandColor: "#7542B5",
            organizationDisplayName: "Permit.io",
          },
        },
        SearchBar: {
          baseSettings: {
            apiKey: "446287e718c0fd535135e7e51147a028a61120d17fd74d2f",
            primaryBrandColor: "#7542B5",
            organizationDisplayName: "Permit.io",
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
            edgeLabelBackground: '#EEEEEE',
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
            type: "docsVersion",
            position: "right",
            className: "version",
          },
          {
            alt: "github logo",
            className: "github-icon nav-icon",
            href: "https://github.com/permitio",
            target: "_blank",
            position: "right",
          },
          {
            alt: "twitter logo",
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
        theme: githubLightTheme,
        darkTheme: themes.dracula,
        additionalLanguages: ["java", "ruby", "csharp", "groovy", "go", "hcl", "php", "bash"],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: "MVBO9ANY91",
        apiKey: "cce9564dd44f4505a37949e7ba1593e0",
        indexName: "permit",
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
