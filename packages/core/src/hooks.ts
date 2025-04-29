import { useRoute } from "vue-router";
import { destroyAllConsumer } from "./Core";
import { watch } from "vue";

// 监听路由变化,关闭所有存在的弹窗
export const useCloseAllOnRouteChange = () => {
  const route = useRoute();
  // 监听路由变化,关闭所有存在的弹窗
  watch(
    () => route.path,
    () => {
      console.log("路由变化,关闭所有存在的弹窗");
      destroyAllConsumer();
    }
  );
};
