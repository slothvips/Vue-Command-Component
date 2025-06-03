import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import UnoCSS from "unocss/vite";
import { ElementPlusResolver, VantResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import libCss from 'vite-plugin-libcss';
export default defineConfig({
  plugins: [
    libCss(),
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
      // root: resolve(__dirname, "src"),
      entryRoot: resolve(__dirname, "src"),
      outDir: "types",
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
      name: "Vue3CommandDialog",
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
