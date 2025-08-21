# 常见问题

## 组件未正常渲染

如果组件未显示，请首先检查DOM节点是否正确挂载。若节点已挂载但未显示，通常是由于组件库的CSS样式未正确导入所致。

## 组件无法被Vue开发工具审查

这是当前已知限制，暂无完美的解决方案。不过您可以使用以下替代方法：在Vue开发者工具中使用组件选择器（见下图）选择目标组件进行审查。

![开发者工具选择器](../assets/images/vue-dev-tools.png)

## 路由跳转后组件未销毁

如果你希望路由跳转后销毁所有弹窗,请使用`useDestroyAllOnRouteChange`hooks.它的作用就是监听路由变化,然后销毁所有弹窗。

安装:

```shell
  npm i @vue-cmd/hooks
```

使用:

```ts
import { useDestroyAllOnRouteChange } from "@vue-cmd/hooks";
// 尽量提前调用,比如在App.vue中调用
const stop = useDestroyAllOnRouteChange();
// stop();
```
## 低版本element-plus出现ElConfigProvider注入配置失效问题

最新版本的element-plus不会出现这个问题,可以自行手动注入一遍

可以抽离配置注入组件,然后在你原先注入的地方使用这个组件:
```tsx
import { ElConfigProvider } from "element-plus";
import { computed, defineComponent, getCurrentInstance } from "vue";
import zh from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";

export default defineComponent({
  setup(_, { slots }) {
    return () => (
      <ElConfigProvider locale={zh}>
        {slots}
      </ElConfigProvider>
    );
  }
});
```
然后使用这个组件对命令组件进行包裹,所以我们需要稍微封装一下:
```tsx
import ElConfigProvider from "./ElConfigProvider";

import {
  useDrawer as useDrawerRaw,
  useDialog as useDialogRaw
} from "@vue-cmd/element-plus";

export function useDrawer(config = {}) {
  const drawer = useDrawerRaw(config);
  return (VNode, config) => {
    drawer(<ElConfigProvider>{VNode}</ElConfigProvider>, config);
  };
}

export function useDialog(config) {
  const drawer = useDialogRaw(config);
  return (VNode, config) => {
    drawer(<ElConfigProvider>{VNode}</ElConfigProvider>, config);
  };
}
```
使用方式没有任何改变,改变的只是导入的地方:

```tsx
import { useDrawer } from "@/components/VueCmd";

const drawer = useDrawer();

drawer(<div>hello</div>)
```
