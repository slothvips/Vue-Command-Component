import { ConfigProvider } from 'vant';
import "virtual:uno.css";
import { useRoute } from "vitepress";
import imageViewer from "vitepress-plugin-image-viewer";
import DefaultTheme from "vitepress/theme";
import Layout from './components/Layout.vue';
import "./styles.css";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    app.use(ConfigProvider);
    app.config.globalProperties.$panda = "Vue-Command-Component";
  },
  setup() {
    const route = useRoute();
    // 启用插件
    imageViewer(route as any);
  },
  Layout,
};
