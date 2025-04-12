import DefaultTheme from "vitepress/theme";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import BaseExample from "../../components/base.vue";
import "@vitepress-demo-preview/component/dist/style.css";
import "element-plus/dist/index.css";
import "uno.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("demo-preview", ElementPlusContainer);
    app.component("base-example", BaseExample);
  },
};
