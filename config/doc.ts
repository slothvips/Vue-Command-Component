import { defineConfig } from "vite";
import VueRouter from "unplugin-vue-router/vite";

export default defineConfig({
  server: {
    port: 7263,
  },
  plugins: [VueRouter()],
  build: {
    outDir: "dist-example-page",
  },
});
