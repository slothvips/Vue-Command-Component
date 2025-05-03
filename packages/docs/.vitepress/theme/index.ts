import DefaultTheme from "vitepress/theme";
// import { ElMessage } from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "virtual:uno.css";

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

  async enhanceApp({ Vue, app }) {
    // app.config.globalProperties.$panda = "Vue3-Command-Component";
  },
};
