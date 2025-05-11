import type { BuildEntry } from "unbuild";
import { defineBuildConfig } from "unbuild";

const baseEntry = {
  builder: "mkdist",
  input: "./src/",
  outDir: "./dist",
  declaration: true,
} satisfies BuildEntry;

export default defineBuildConfig({
  entries: [
    {
      ...baseEntry,
      ext: "js",
      format: "esm",
    },
    {
      ...baseEntry,
      ext: "cjs",
      format: "cjs",
    },
  ],
});
