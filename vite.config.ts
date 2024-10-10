import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueRouter from "unplugin-vue-router/vite";
import dts from "vite-plugin-dts";
import Components from "unplugin-vue-components/vite";
import { VantResolver, ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueRouter(),
    dts({
      tsconfigPath: "./tsconfig.types.json",
    }),
    // vant 组件自动按需引入
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
  ],
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
      external: Object.keys(require("./package.json").peerDependencies || {}),
      output: {
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
          vant: "Vant",
        },
      },
    },
  },
});
