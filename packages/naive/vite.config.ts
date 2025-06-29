import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "VueCmdNaive",
      fileName: (format) => `index.${format === "es" ? "js" : format === "cjs" ? "umd.cjs" : format}`,
    },
    rollupOptions: {
      external: ["vue", "naive-ui", "@vue-cmd/core"],
      output: {
        globals: {
          vue: "Vue",
          "naive-ui": "NaiveUI",
          "@vue-cmd/core": "VueCmdCore",
        },
      },
    },
  },
}); 
