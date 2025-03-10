import DefaultTheme from "vitepress/theme";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import elementPlus from "element-plus";
import "element-plus/dist/index.css";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(elementPlus);
    app.component("demo-preview", ElementPlusContainer);
  },
};
