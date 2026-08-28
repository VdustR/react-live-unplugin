import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

import { reactLiveUnplugin } from "../dist/index.js";

const require = createRequire(import.meta.url);

test("exports the plugin from ESM and CommonJS", () => {
  const commonJsModule = require("../dist/index.cjs");

  assert.equal(typeof reactLiveUnplugin.vite, "function");
  assert.equal(typeof commonJsModule.reactLiveUnplugin.vite, "function");
});

test("emits JavaScript without post-transform JSX", async () => {
  const plugin = reactLiveUnplugin.vite();
  const source = `import React from "react";

export default function Example() {
  return <strong>Hello</strong>;
}`;

  const transformed = await plugin.transform.handler(
    source,
    "Example.live.tsx",
  );

  assert.match(transformed, /createElement_/);
  assert.doesNotMatch(transformed, /<Component_/);
  assert.match(transformed, /const code_.+ = /);
  assert.match(transformed, /import React from \\"react\\"/);
});
