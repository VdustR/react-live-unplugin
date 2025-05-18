import react from "@vitejs/plugin-react-swc";
import { reactLiveUnplugin } from "react-live-unplugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactLiveUnplugin.vite(), react()],
});
