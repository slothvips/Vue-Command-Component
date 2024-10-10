import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

const app = createApp(App);

app.provide("main", "来自main的🩷");

// 导入vant-popup弹窗样式
import("vant/es/popup/style");
// 导入element-plus dialog弹窗样式
import("element-plus/es/components/dialog/style/css");

app.use(router);
app.mount("#app");
