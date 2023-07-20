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
						to: "/features/multitenancy",
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
							"/tutorials/connect_your_app/",
							"/tutorials/connecting_to_authentication",
						],
						to: "/getting-started/create-your-account",
					},
					{
						from: "/features/policy_editor/",
						to: "/category/policy-editor",
					},
					{
						from: [
							"/tutorials/demo",
							"/tutorials/configuration",
							"/tutorials/healthchecks",
						],
						to: "/getting-started/create-your-account",
					},
					{
						from: "/concepts/projects_and_environments",
						to: "/features/projects-and-env",
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
						to: "/features/audit-logs/troubleshooting",
					},
					{
						from: "/features/coming_soon/",
						to: "/features/coming-soon",
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
						to: "/getting-started/create-your-account",
					},
					{
						from: "/tutorials/quickstart",
						to: "/getting-started/quickstart",
					},
					{
						from: "/tutorials/introduction/what-is-permit",
						to: "/overview/what-is-permit",
					},
					{
						from: "/security/connectivity",
						to: "/overview/how-permit-works",
					},
					{
						from: ["/concepts/authorization-concepts", "/concepts/glossary"],
						to: "/overview/permit-basics",
					},
					{
						from: "tutorials/deploying/on-prem",
						to: "getting-started/deploying/on-prem",
					},
					{
						from: "tutorials/deploying/overview",
						to: "getting-started/deploying/overview",
					},
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
					// {
					// 	type: "doc",
					// 	docId: "home",
					// 	position: "left",
					// 	label: "Docs",
					// },
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
						href: "https://io.permit.io/docs-to-slack",
						position: "right",
						className: "header-slack-link",
						"aria-label": "Slack community",
					},
				],
			},
			prism: {
				theme: require("prism-react-renderer/themes/dracula"),
				additionalLanguages: ["java", "ruby", "csharp", "groovy", "go"],
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
