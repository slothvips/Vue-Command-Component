import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueRouter from "unplugin-vue-router/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueRouter()],
  server: {
    port: 7263,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "Vue3CommandDialog",
      fileName: "index",
    },
    minify: "esbuild",
    rollupOptions: {
      external: ["vue", "element-plus", "vant"],

      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
