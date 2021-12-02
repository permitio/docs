// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("./src/css/prism-theme");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const companyWebsiteUrl =
  process.env.COMPANY_WEBSITE_URL ?? "https://authorizon1.netlify.com";

const apiReferenceUrl =
  process.env.API_REFERENCE_URL ?? "https://api.authorizon.com/redoc";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Authorizon",
  tagline: "Permissions for everyone",
  url: "https://docs.authorizon.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "authorizon", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false, // disables docusaurus blog
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  plugins: ["docusaurus-plugin-sass"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Authorizon",
          src: "img/authorizon-logo.svg",
          srcDark: "img/authorizon-logo-dark.svg",
          width: 130,
        },
        items: [
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
            docId: "changelog",
            position: "left",
            label: "Changelog",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/home",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
          {
            title: "Even More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        logo: {
          alt: "Open Source Logo",
          src: "img/oss_logo.png",
          href: "https://opensource.facebook.com",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Authorizon, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
