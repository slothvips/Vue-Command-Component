import { resolve } from "node:path";
import { createConfig } from "../../vite.config.base";
import { getVantPlugins } from "../../vite.plugins";

export default createConfig({
  name: "VueCmdVant",
  entry: resolve(__dirname, "src/index.ts"),
  plugins: getVantPlugins(),
  external: ["vue", "vant", "lodash-es", "@vue-cmd/core"],
  globals: {
    vue: "Vue",
    vant: "Vant",
    "lodash-es": "LodashEs",
    "@vue-cmd/core": "VueCmdCore",
  }
}); 
