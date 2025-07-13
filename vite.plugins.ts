import {
  ElementPlusResolver,
  VantResolver,
} from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import libCss from "vite-plugin-libcss";

export const getElementPlusPlugins = () => [
  Components({
    resolvers: [ElementPlusResolver()],
  }),
];

export const getVantPlugins = () => [
  Components({
    resolvers: [VantResolver()],
  }),
];

export const getLibCssPlugin = () => [libCss()];

export const getCorePlugins = () => [
  Components({
    resolvers: [ElementPlusResolver(), VantResolver()],
  }),
];
