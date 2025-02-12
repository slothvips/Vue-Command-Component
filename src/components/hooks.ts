import { useRoute } from "vue-router";
import { destroyAllCommandComponentConsumer } from "./Core";
import { watch } from "vue";

// 监听路由变化,关闭所有存在的弹窗
export const useAfterRouteChangeCloseAllCommandComponent = () => {
  const route = useRoute();
  // 监听路由变化,关闭所有存在的弹窗
  watch(
    () => route.path,
    () => {
      console.log("路由变化,关闭所有存在的弹窗");
      destroyAllCommandComponentConsumer();
    }
  );
};
