import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueRouter from "unplugin-vue-router/vite";

export default defineConfig({
  plugins: [vue(), vueJsx(), VueRouter()],
  server: {
    port: 7263,
  },
  build: {
    outDir: "dist-example-page",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  base: "./",
});
