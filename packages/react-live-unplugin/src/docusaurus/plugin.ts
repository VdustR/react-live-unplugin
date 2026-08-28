import type { Plugin } from "@docusaurus/types";
import { reactLiveUnplugin } from "..";

module.exports = () => {
  const plugin: Plugin = {
    name: "docusaurus-plugin-react-live",
    configureWebpack() {
      return {
        plugins: [
          reactLiveUnplugin.webpack({
            enforce: "pre",
            reactLiveExportName: "LiveCodeBlock",
            reactLiveModulePath: "react-live-unplugin/docusaurus/LiveCodeBlock",
          }),
        ],
      };
    },
  };
  return plugin;
};
