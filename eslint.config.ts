import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import { vdustr } from "@vp-tw/eslint-config";
import path from "pathe";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prettierignorePath = path.resolve(__dirname, ".prettierignore");

export default vdustr(
  {
    react: true,
  },
  {
    files: [
      "packages/docs/sidebars.ts",
      "packages/docs/src/pages/**/*.tsx",
      "**/*.live.tsx",
    ],
    rules: {
      "import/no-default-export": "off",
    },
  },
  {
    files: ["packages/docs/package.json"],
    rules: {
      // Docusaurus webpack requires ambiguous module mode for site packages.
      "package-json/require-type": "off",
    },
  },
  {
    files: ["packages/react-live-unplugin/test/package.test.mjs"],
    rules: {
      // This smoke test validates the built ESM and CommonJS package exports.
      "antfu/no-import-dist": "off",
      // Use the dependency-free Node test runner for the package smoke test.
      "test/no-import-node-test": "off",
    },
  },
  includeIgnoreFile(prettierignorePath),
);
