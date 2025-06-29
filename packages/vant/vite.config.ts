import { resolve } from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueCmdVant",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
              external: ["vue", "vant", "lodash-es", "@vue-cmd/core"],
      output: {
        globals: {
          vue: "Vue",
          vant: "Vant",
          "lodash-es": "LodashEs",
          "@vue-cmd/core": "VueCmdCore",
        },
      },
    },
  },
}); 
