import Components from "unplugin-vue-components/vite";
import { VantResolver, ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import { resolve } from "path";

export const plugins = [
  vueJsx(),
  Components({
    resolvers: [VantResolver(), ElementPlusResolver()],
  }),
  UnoCSS(),
];

export default {
  plugins: [vue(), ...plugins],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  base: "./",
};
