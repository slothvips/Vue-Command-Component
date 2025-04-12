import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 7263,
  },
  build: {
    outDir: "dist-example-page",
  },
});
