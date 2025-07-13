import { resolve } from "path";
import { createConfig } from "../../vite.config.base";

export default createConfig({
  name: "VueCmdNaive",
  entry: resolve(__dirname, "src/index.ts"),
  external: ["vue", "naive-ui", "@vue-cmd/core"],
  globals: {
    vue: "Vue",
    "naive-ui": "NaiveUI",
    "@vue-cmd/core": "VueCmdCore",
  },
});
