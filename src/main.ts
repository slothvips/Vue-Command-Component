import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);

app.provide("main", "来自main的🩷");

app.use(ElementPlus);
app.use(Vant);

app.use(router);
app.mount("#app");
