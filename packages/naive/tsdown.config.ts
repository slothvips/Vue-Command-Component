import { defineConfig } from "tsdown";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  entry: "src/index.ts",
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  target: "es2015",
  external: ["vue", "naive-ui", "@vue-cmd/core"],
  plugins: [vue(), vueJsx()],
});
