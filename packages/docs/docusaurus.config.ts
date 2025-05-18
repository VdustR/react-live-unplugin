import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "react-live-unplugin",
  tagline: "Turn React components into live code blocks with ease",
  favicon: "img/favicon.ico",
  url: "https://vdustr.dev/",
  baseUrl: "/react-live-unplugin/",
  trailingSlash: true,
  organizationName: "VdustR",
  projectName: "react-live-unplugin",

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap",
        rel: "stylesheet",
      },
    },
  ],

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
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    image: "img/logo.png",
    navbar: {
      title: "react-live-unplugin",
      logo: {
        alt: "react-live-unplugin",
        src: "img/logo.png",
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
      copyright: `Copyright © ${new Date().getFullYear()} <a href="http://github.com/vdustr" target="_blank" rel="noopener noreferrer">VdustR</a>. Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.`,
    },
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
  } satisfies ThemeConfig,
  plugins: ["react-live-unplugin/docusaurus/plugin"],
};

export default config;
