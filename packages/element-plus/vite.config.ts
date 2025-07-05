import { resolve } from "node:path";
import { createConfig } from "../../vite.config.base";
import { getElementPlusPlugins, getLibCssPlugin } from "../../vite.plugins";

export default createConfig({
  name: "VueCmdElementPlus",
  entry: resolve(__dirname, "src/index.ts"),
  plugins: [...getElementPlusPlugins(), ...getLibCssPlugin()],
  external: ["vue", "element-plus", "@element-plus/icons-vue", "@vue-cmd/core"],
  globals: {
    vue: "Vue",
    "element-plus": "ElementPlus",
    "@element-plus/icons-vue": "ElementPlusIconsVue",
    "@vue-cmd/core": "VueCmdCore",
  }
}); 
