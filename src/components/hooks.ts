import { useRoute } from "vue-router";
import { destroyAllCommandComponentConsumer } from "./Core";
import { watch } from "vue";

// 监听路由变化,关闭所有存在的弹窗
export const useCloseAllOnRouteChange = () => {
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

/**
 * @deprecated 已弃用(因为它的名字不够优雅 =.=)，请使用 useCloseAllOnRouteChange 代替
 */
export const useAfterRouteChangeCloseAllCommandComponent = function () {
  console.warn(
    "useAfterRouteChangeCloseAllCommandComponent is deprecated (because its name is not elegant enough =.=), please use useCloseAllOnRouteChange instead, their functions are exactly the same"
  );
  return useCloseAllOnRouteChange();
};
