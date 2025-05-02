import { useRoute } from "vue-router";
import { destroyAllConsumer } from "./Core";
import { watch } from "vue";

export const useCloseAllOnRouteChange = () => {
  const route = useRoute();
  watch(
    () => route.path,
    () => {
      destroyAllConsumer();
    }
  );
};
