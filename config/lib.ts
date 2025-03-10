import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "tsconfig.types.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "../src/components/index.ts"),
      name: "Vue3CommandDialog",
      fileName: "index",
    },
    minify: "esbuild",
    rollupOptions: {
      external: Object.keys(require("../package.json").peerDependencies || {}),
      output: {
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
          "vue-router": "VueRouter",
          vant: "Vant",
        },
      },
    },
  },
});
