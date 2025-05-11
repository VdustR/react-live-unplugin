import type { Plugin } from "@docusaurus/types";
import process from "node:process";
import path from "pathe";
import { reactLiveUnplugin } from "..";

module.exports = () => {
  const plugin: Plugin = {
    name: "docusaurus-plugin-react-live",
    configureWebpack(config) {
      return {
        resolve: {
          alias: {
            "@docusaurus/theme-live-codeblock": path.dirname(
              require.resolve("@docusaurus/theme-live-codeblock/package.json", {
                paths: [process.cwd()],
              }),
            ),
          },
        },
        plugins: [
          reactLiveUnplugin.webpack({
            enforce: "pre",
            reactLiveExportName: "LiveCodeBlock",
            reactLiveModulePath: "react-live-unplugin/docusaurus/LiveCodeBlock",
          }),
          ...(config.plugins || []),
        ],
      };
    },
  };
  return plugin;
};
