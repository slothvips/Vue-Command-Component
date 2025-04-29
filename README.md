# Vue 3 通用的命令式弹窗方案

## 英文文档

您可以通过以下链接查看英文文档:

[English Documentation](./README_EN.md)

天下苦弹窗开发久矣, 作为一个前端开发, 弹窗的开发体验一直很糟糕, 尤其是嵌套弹窗, 状态管理, 销毁重建等问题, 让人不胜其烦. 所以, 我决定实现一个通用的命令式弹窗解决方案来解决这些痛点.这是一个专为 Vue 3 设计的通用命令式弹窗解决方案。它提供了一种灵活且可扩展的方式来管理和控制应用程序中的弹窗。虽然唤作弹窗,但是它不仅仅局限于弹窗,理论上任何组件都可以进行适配.

这里就不比较声明式弹窗和命令弹窗的优缺点了,如果你已经尝试探索命令弹窗而看到这里,那么你或许已经切实的体会到了声明式弹窗开发的繁琐和痛苦,那么不妨试试这个库,或许能给你带来一些不一样的体验.

## 特性

- 命令式 API，弹窗开发变更为编程式,解放弹窗生产力!
- 支持弹窗嵌套,链式管理,并提供完整上下文支持(状态管理,路由,国际化等).
- 灵活的配置, 支持自定义属性,插槽,事件处理器等.
- 开箱即用,已实现与 Element Plus 的 Dialog/Drawer 组件以及 vant 的 Popup 组件的适配,也可以自行拓展以便更贴切你的实际业务.
- 命令式组件核心逻辑解耦,可自行适配不同的 UI 库目标组件

## 安装

```shell
npm i vue3-command-dialog
# 或者
pnpm i vue3-command-dialog
# 或者
yarn add vue3-command-dialog
```

## 在线示例

您可以通过以下链接查看在线示例(以 element-plus Dialog 为例)：

[Example](https://pandavips.github.io/Vue3-Command-Component/#/example/base)

### 常见问题

#### 弹窗没有正确的显示

这种原因是对应组件的`css`没有被成功引入,导致页面显示异常.这很可能是你使用了按需导入或者自动导入等手段,那么如果你在使用命令弹窗之前没有使用过这些组件,那么就可能会出现类似情况.一般建议手动在 main 的地方导入一下,比如下面这样:

```ts
import { createApp } from "vue";
import App from "./App.vue";

// 导入vant-popup弹窗样式
import("vant/es/popup/style");
// 导入element-plus dialog弹窗样式
import("element-plus/es/components/dialog/style/css");

const app = createApp(App);
app.mount("#app");
```

如果你对打包体积等没有要求,更简单粗暴的方法是直接全量导入组件库的 CSS:

```ts
// 导入vant全量样式
import "vant/lib/index.css";

// 导入element-plus全量样式
import "element-plus/dist/index.css";
```

####  其他问题

- 默认挂载点是body内的div,如果你没有更改过此项,可能会出现路由变化之后,弹窗依然存在的问题,可以在项目中`useAfterRouteChangeCloseAllCommandComponent`使用这个`hooks`来解决;你可以在App.vue中使用.
- 开发工具在组件树内审查不到弹窗内的组件,你可以开发dev-tools中的这个按钮来选中组件进行审查(如下图).
![dev-tools](./assets/images/vue-dev-tools.png)

## 如何适配[自己/其他] UI 库组件

您可以自行适配任何其他目标 UI 库组件, 具体可以参考以下步骤:

具体可以借鉴示例代码中对 element-plus 以及 vantui 的实现,这里只说一下核心逻辑;

1.我们需要 CommandProvider 函数来对我们的目标组件进行包装, 它的最主要的作用是对被包裹的组件注入`Consumer`对象,那么我们的弹窗内部组件就可以接收到这个对象,它是我们对弹窗进行控制的主要手段.这个对象上有下列属性和方法:

```ts
/** 弹窗消费者对象,理解为弹窗控制器也可以*/
export interface IConsumer {
  /** 弹窗实例的元数据,比如弹窗的类型,弹窗的名称等,以及你自己拓展的任何数据 */
  meta?: Meta;
  /** 弹窗是否可见响应式变量,虽然已经提供了hide以及show方法不需要通过该属性来控制弹窗的显示与隐藏,但是为了方便一些特殊场景,还是提供了该属性,比如你需要watch这个属性来做一些事情 */
  visible: Ref<boolean>;
  /** 隐藏 */
  hide: () => void;
  /** 显示 */
  show: () => void;
  /** 弹窗销毁,但是不继续推进promise的状态改变 */
  destroy: (external?: boolean) => void;
  /** 弹窗promise */
  promise: Promise<any>;
  /** 弹窗promise执行器参数resolve */
  resolve: (val?: any) => void;
  /** 弹窗promise执行器参数reject */
  reject: (reason?: any) => void;
  /** 弹窗销毁,并解决promise */
  destroyWithResolve: (val?: any) => void;
  /** 弹窗销毁,并拒绝promise */
  destroyWithReject: (reason?: any) => void;
  /** 订阅取消 */
  off: (name: string | symbol, callback: Function) => void;
  /** 订阅 */
  on: (name: string | symbol, callback: Function, config?: IOnConfig) => void;
  /** 单次订阅 */
  once: (name: string | symbol, callback: Function) => void;
  /** 发布 */
  emit: (name: string | symbol, ...args: any) => void;
  /** 一般建议赋值为UI库的弹窗实例实例Ref */
  componentRef?: Ref<any> | undefined;
  /** 弹窗挂载的html元素 */
  container: HTMLDivElement;
  /** 弹窗嵌套堆栈 */
  stack: IConsumer[];
  /** 当前在弹窗嵌套堆栈中的索引 */
  stackIndex: number;
}
```

你不用关心这个对象的创建销毁等逻辑,只需要知道有这么一个对象,以及它身上有哪些属性和方法即可.你还可以注意到,这个对象上还有`on` `once` `emit` `off`等方法,通过这些 api 注册的事件函数都会严格限制在 `consumer` 对象下,所以不同的`consumer`对象的事件注册发布均不互相影响;同时你也不用关心事件的解绑等逻辑,这些内部已经帮你处理好了.

CommandProvider 同时也会返回一个`consumer`对象,以供弹窗外部使用,弹窗内部和外部拿到的 consumer 是同一个对象,所以他们是全等(===)的.

弹窗内部组件获取 `consumer` 对象的方式为调用`useConsumer`, 该函数会返回一个 consumer 对象,它一样只能在 setup 顶部直接调用,不可条件调用或者异步调用.

2.剩余的就是`CommandProvider`函数参数的介绍了,

```ts
parentInstance: ComponentInternalInstance | null,
uiComponentVnode: Component,
config: {
  // 你大可直接使用provide注入,内部一样能接收到,但是你想实现更私有的作用域,可以将需要注入的数据放置在这个对象下
  provideProps?: Record<string, any>;
  // 挂载点,默认body
  appendTo?: string | HTMLElement;
  // 内部维护的响应式变量,你需要完整的将其传递进去,不要将响应式变量解包
  visible: Ref<boolean>;
  meta?:Meta;
}
```
更多查看 element-plus 适配代码:[element-plus dialog组件适配代码](https://github.com/pandavips/Vue3-Command-Component/blob/main/src/components/ElementPlusDialog.tsx)

## 一些建议

- 强烈建议你的项目配置 jsx!如果你能忍受一味的使用`h`函数,那么你可以忽略这个建议.

- 请不要使用Consumer的订阅系统来实现你的业务!它只应该用来增强弹窗的功能,如果你使用了这种方式,那么一定是你的设计出现了问题,一定还有更好的方案.

