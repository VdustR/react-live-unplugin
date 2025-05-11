import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "react-live-unplugin",
  tagline: "Interactive React Live Code Blocks",
  favicon: "img/favicon.ico",
  url: "https://vdustr.dev/",
  baseUrl: "/react-live-unplugin/",
  trailingSlash: true,
  organizationName: "VdustR",
  projectName: "react-live-unplugin",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "react-live-unplugin",
      logo: {
        alt: "react-live-unplugin",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/VdustR/react-live-unplugin",
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
              label: "Getting Started",
              to: "/docs/basic",
            },
            {
              label: "Docusaurus Plugin",
              to: "/docs/docusaurus",
            },
            {
              label: "Customization",
              to: "/docs/custom",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/VdustR/react-live-unplugin",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="http://github.com/vdustr" target="_blank" rel="noopener noreferrer">VdustR</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
  } satisfies ThemeConfig,
  plugins: ["react-live-unplugin/docusaurus/plugin"],
};

export default config;
