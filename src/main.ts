import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import "virtual:uno.css";

// 导入vant-popup弹窗样式
import("vant/es/popup/style");
// 导入element-plus 样式
import("element-plus/es/components/dialog/style/css");
import("element-plus/es/components/drawer/style/css");

const app = createApp(App);

app.provide("main", "来自main的🩷");

app.config.globalProperties.$panda = "oh my god";

app.use(router);
app.mount("#app");
