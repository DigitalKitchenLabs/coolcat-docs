// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "CoolCat Docs",
	tagline: "A Documental Journey",
	url: "https://docs.coolcat.space",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "DigitalKitchenLabs", // Usually your GitHub org/user name.
	projectName: "CoolCat Docs", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "CoolCat Docs",
				logo: {
					alt: "CoolCat Logo",
					src: "img/logo.svg"
				},
				items: [
					{ to: "https://coolcat.blog/", label: "Official Blog", position: "right" },
					{ to: "/docs/whitepaper", label: "Whitepaper", position: "left" },
					{
						href: "https://github.com/digitalkitchenlab/coolcatd",
						label: "GitHub",
						position: "right"
					}
				]
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Community",
						items: [
							{
								label: "Telegram",
								href: "https://t.me/coolcatcommunity"
							},
							{
								label: "Discord",
								href: "https://discord.gg/mnyvNG9ejf"
							},
							{
								label: "Twitter",
								href: "https://twitter.com/CoolCatChain"
							}
						]
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog"
							},
							{
								label: "GitHub",
								href: "https://github.com/facebook/docusaurus"
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Digital Kitchen. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
}

module.exports = config;
