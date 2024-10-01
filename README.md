# Vue 3 通用的命令式弹窗方案

天下苦弹窗开发久矣, 作为一个前端开发, 弹窗的开发体验一直很糟糕, 尤其是嵌套弹窗, 状态管理, 销毁重建等问题, 让人不胜其烦. 所以, 我决定实现一个通用的命令式弹窗解决方案来解决这些痛点.这是一个专为 Vue 3 设计的通用命令式弹窗解决方案。它提供了一种灵活且可扩展的方式来管理和控制应用程序中的弹窗。虽然唤作弹窗,但是它不仅仅局限于弹窗,理论上任何组件都可以进行适配.

这里就不比较声明式弹窗和命令弹窗的优缺点了,如果你已经尝试探索命令弹窗而看到这里,那么你或许已经切实的体会到了声明式弹窗开发的繁琐和痛苦,那么不妨试试这个库,或许能给你带来一些不一样的体验.

## 特性

- 命令式 API，弹窗开发变更为编程式,解放弹窗生产力!
- 支持弹窗嵌套,链式管理,并提供完整上下文支持(状态管理,路由,国际化等).
- 灵活的配置, 支持自定义属性,插槽,事件处理器等.
- 开箱即用,已实现与 Element Plus 的 Dialog 组件以及 vant 的 Popup 组件的适配,也可以自行拓展以便更贴切你的实际业务.
- 命令式组件核心逻辑解耦,可自行适配不同的 UI 库目标组件

## 在线示例

您可以通过以下链接查看在线示例(以 element-plus Dialog 为例)：

[Example](https://pandavips.github.io/Vue3-Command-Dialog/#/Vue3-Command-Dialog/base)

## 你如何适配自己 UI 库组件

除了已经适配的 Element Plus 的 Dialog 组件以及 vant 的 Popup 组件, 您也可以自行适配您自己的 UI 库组件, 具体可以参考以下步骤:

具体可以借鉴示例代码中对 element-plus 以及 vantui 的实现,这里只说一下核心逻辑;

1.我们需要 CommandDialogProvider 函数来对我们的目标组件进行包装, 它的最主要的作用是对被包裹的组件注入`Consumer`对象,那么我们的弹窗内部组件就可以接收到这个对象,它是我们对弹窗进行控制的主要手段.这个对象上有下列属性和方法:

```ts
/** 弹窗消费者对象,或者也可理解为弹窗实例实例~ */
export interface IConsumer {
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
  /** 弹窗销毁,但是不继续推进promise的状态改变 */
  destroy: (external?: boolean) => void;
  /** 弹窗是否可见响应式变量,虽然已经提供了hide以及show方法不需要通过该属性来控制弹窗的显示与隐藏,但是为了方便一些特殊场景,还是提供了该属性,比如你需要watch这个属性来做一些事情 */
  visible: Ref<boolean>;
  /** 隐藏 */
  hide: () => void;
  /** 显示 */
  show: () => void;
  /** 订阅取消 */
  off: (name: string | symbol, callback: Function) => void;
  /** 订阅 */
  on: (name: string | symbol, callback: Function) => void;
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

CommandDialogProvider 同时也会返回一个`consumer`对象,以供弹窗外部使用,弹窗内部和外部拿到的 consumer 是同一个对象,所以他们是全等(===)的.

弹窗内部组件获取 `consumer` 对象的方式为调用`getCommandDialogConsumer`, 该函数会返回一个 consumer 对象,它一样只能在 setup 顶部直接调用,不可条件调用或者异步调用.

2.剩余的就是传递参数的介绍了,

```ts
  // 你大可直接使用provide注入,内部一样能接收到,但是你想实现更私有的作用域,可以将需要注入的数据放置在这个对象下
  provideProps?: Record<string, any>;
  // 挂载点,默认body
  appendTo?: string | HTMLElement;
  // 内部维护的响应式变量,你需要完整的将其传递进去,不要将响应式变量解包
  visible: Ref<boolean>;
```

其余并不复杂,更多查看 element-plus 适配代码:/src/components/ElementPlusDialog.tsx

## 一些建议

- 强烈建议你的项目配置 jsx!如果你能忍受一味的使用`h`函数,那么你可以忽略这个建议.

- 尽管 consumer 对象实现了一个订阅模式,但是你应该避免通过它来进行内部和外部的通信,它的出现是为了实现对命令弹窗的组件的增强,不建议用于业务开发.所以,情非得已之下,请尽量使用`destroyWithReject`和`destroyWithResolve`来借助 promise 的特性进行数据交互.当然,也可以使用很常规的`props`和`emit`等手段进行通信.

## TODO

- 适配 vantui 的 popup 组件
