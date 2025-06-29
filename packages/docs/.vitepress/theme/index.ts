import DefaultTheme from "vitepress/theme";
// import { ElMessage } from "element-plus";
import "./styles.css";
import "virtual:uno.css";

import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import { useRoute } from "vitepress";

// const rawConsoelLog = console.log;
// console.log = (...args) => {
//   ElMessage.success([...args].join());
//   rawConsoelLog(
//     ...args,
//     `
// link ElMessage code:
// const rawConsoelLog = console.log;
// console.log = (...args) => {
//   ElMessage.success([...args].join());
//   rawConsoelLog(...args);
// };`
//   );
// };

export default {
  ...DefaultTheme,

  async enhanceApp(
    // { Vue, app }
  ) {
    // app.config.globalProperties.$panda = "Vue3-Command-Component";
  },
  setup() {
    const route = useRoute();
    // 启用插件
    imageViewer(route);
  },
};
