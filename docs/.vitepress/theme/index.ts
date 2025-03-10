import DefaultTheme from "vitepress/theme";
import elementplus from "element-plus";
import "element-plus/dist/index.css";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(elementplus);
    const components = (import.meta as any).glob("../../components/*.vue");
    for (const [key, value] of Object.entries(components)) {
      app.component(key.replace(/^\.\/|\.vue$/g, ""), value);
    }
  },
};
