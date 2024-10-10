import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

const app = createApp(App);

app.provide("main", "来自main的🩷");

app.use(router);
app.mount("#app");
