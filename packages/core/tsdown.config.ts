import { defineConfig } from "tsdown";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import {
  ElementPlusResolver,
  VantResolver,
} from "unplugin-vue-components/resolvers";

export default defineConfig({
  entry: "src/index.ts",
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  target: "es2015",
  external: ["vue"],
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [ElementPlusResolver(), VantResolver()],
    }),
  ],
});
