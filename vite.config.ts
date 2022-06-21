import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/roulette-project/",
  plugins: [react(), svgr()],
  server: {
    host: true,
  },
});
