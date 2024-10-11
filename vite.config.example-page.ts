import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueRouter from "unplugin-vue-router/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver, ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueRouter(),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
  ],
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
