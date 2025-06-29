import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import UnoCSS from "unocss/vite";
import { ElementPlusResolver, VantResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    vueJsx(),
    Components({
      resolvers: [
        VantResolver(),
        ElementPlusResolver({
          // ssr: true,
        }),
      ],
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueCmdCore",
      fileName: "index",
    },
    minify: "esbuild",
    rollupOptions: {
      external: Object.keys(require("./package.json").peerDependencies || {}),
      output: {
        globals: {},
      },
    },
  },
});
