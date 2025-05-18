---
description: "React Live Unplugin"
---

# Installation

```bash
pnpm install react-live-unplugin react-live
```

To use the plugin, vite for example:

```ts
import { reactLiveUnplugin } from "react-live-unplugin";
// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    reactLiveUnplugin.vite({
      // options
    }),
  ],
});
```

You can check out the example in [packages/demo-vite](https://github.com/VdustR/react-live-unplugin/tree/main/packages/demo-vite).

All unplugin supports are supported, see [unplugin](https://unplugin.unjs.io/guide/#overview).

## Options

The plugin options are defined in the source code and include:

- `id`: A regex to match the file name (default: `/\.live\.(j|t)sx$/`).
- `exclude`: A regex to exclude file names (default: `/node_modules/`).
- `reactLiveModulePath`: The module path for the React Live component (default: `"react-live-unplugin/default/ReactLive"`).
- `reactLiveExportName`: The export name of the React Live component (default: `"ReactLive"`).

For more details, see the [source code](https://github.com/VdustR/react-live-unplugin/blob/main/packages/react-live-unplugin/src/index.ts).

## Usage

Create a file with the extension `.live.tsx` or `.live.jsx` and write your code in it and export the component to demo as default.

```tsx
// Demo.live.tsx
import { Button } from "@mui/material";

export default function DemoComponent() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}
```

Then you can use it just like a normal component:

```tsx
// Doc.tsx

import DemoComponent from "./Demo.live";

function Doc() {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>Demo:</div>
      <DemoComponent />
    </div>
  );
}
```
