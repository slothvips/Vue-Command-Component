import { resolve } from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import libCss from 'vite-plugin-libcss';

export default defineConfig({
  plugins: [
    libCss(),
    Vue(),
    VueJsx(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueCmdElementPlus",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
              external: ["vue", "element-plus", "@element-plus/icons-vue", "@vue-cmd/core"],
      output: {
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
          "@element-plus/icons-vue": "ElementPlusIconsVue",
          "@vue-cmd/core": "VueCmdCore",
        },
      },
    },
  },
}); 
