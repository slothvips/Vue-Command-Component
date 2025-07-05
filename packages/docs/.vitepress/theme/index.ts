import DefaultTheme from "vitepress/theme";
// import { ElMessage } from "element-plus";
import "./styles.css";
import "virtual:uno.css";
import "viewerjs/dist/viewer.min.css";
import 'vant/lib/index.css';
import imageViewer from "vitepress-plugin-image-viewer";
import { useRoute, useData } from "vitepress";
import { h, defineComponent } from "vue";
import { NConfigProvider, darkTheme, lightTheme } from "naive-ui";
import { ConfigProvider } from 'vant';

// 创建一个Naive包装组件处理主题切换
const NaiveThemeProvider = defineComponent({
  name: 'NaiveThemeProvider',
  setup(_, { slots }) {
    const { isDark } = useData();

    return () => h(NConfigProvider, {
      theme: isDark.value ? darkTheme : lightTheme,
    }, slots);
  }
});

// 创建一个Vant包装组件处理主题切换

const VantThemeProvider = defineComponent({
  name: 'VantThemeProvider',
  setup(_, { slots }) {
    const { isDark } = useData();
    return () => h(ConfigProvider, {
      theme: isDark.value ? 'dark' : 'light',
    }, slots);
  }
});

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    app.use(ConfigProvider);
    // app.config.globalProperties.$panda = "Vue-Command-Component";
  },
  setup() {
    const route = useRoute();
    // 启用插件
    imageViewer(route as any);
  },
  Layout: () => {
    return h(NaiveThemeProvider, null, {
      default: () => h(VantThemeProvider, null, {
        default: () => h(DefaultTheme.Layout),
      }),
    });
  },
};
