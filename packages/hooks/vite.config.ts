import { resolve } from "path";
import { createConfig } from "../../vite.config.base";

export default createConfig({
  name: "VueCmdHooks",
  entry: resolve(__dirname, "src/index.ts"),
  external: ["vue", "@vue-cmd/core"],
  globals: {
    vue: "Vue",
    "@vue-cmd/core": "VueCmdCore",
  },
});
