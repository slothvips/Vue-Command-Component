import { resolve } from "path";
import { createConfig } from "../../vite.config.base";
import { getCorePlugins } from "../../vite.plugins";

export default createConfig({
  name: "VueCmdCore",
  entry: resolve(__dirname, "src/index.ts"),
  plugins: getCorePlugins(),
  external: ["vue"],
  globals: {
    vue: "Vue"
  }
});
