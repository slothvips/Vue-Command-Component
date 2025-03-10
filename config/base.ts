import Components from "unplugin-vue-components/vite";
import { VantResolver, ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import { resolve } from "path";

export default {
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  base: "./",
};
