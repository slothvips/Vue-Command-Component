# 常规用法

这里展示一些常见的使用方式。

弹窗是命令式组件最典型的应用场景，因此示例使用 `element-plus` 的 `dialog` 组件进行演示。通过这些示例，可以举一反三地理解其他组件的使用方式。

## 前菜

### DialogContent展示

示例中会多次使用弹窗内容组件`dialog-content`,下边是它的样子:

::: warning ☕️☕️☕️别着急进行交互,我们并没有真正的开始,这个组件需要和命令式组件配合使用,点击下边的按钮是没有任何反应的.
:::

<demo vue="../components/dialog-content.vue" />

### consumer对象

consumer是一个重要的对象,它是命令组件内外通信的桥梁,它身上尽可能的多的向我们暴露了我们可能用到的属性和方法.在弹窗内部可以使用`useConsumer`来获取,而在弹窗外部可以调用`useDialog`创建的命令函数来获取,他们是同一个对象,所以你会发现是全等的.

```ts
// 外部
const CommandDialog = useDialog();
const consumer = CommandDialog(<DialogContent />);

// 内部
const consumer2 = useConsumer();

console.log(consumer === consumer2); // true
```
就这样,我们在内外部都有了控制命令式组件的能力.

consumer的定义形状如下:
```ts
export interface IConsumer {
  /** 组件实例的元数据 */
  meta?: Meta;
  /** 是否可见响应式变量,虽然已经提供了hide以及show方法不需要通过该属性来控制弹窗的显示与隐藏,但是为了方便一些特殊场景,还是提供了该属性,比如你需要watch这个属性来做一些事情 */
  visible: Ref<boolean>;
  /** 隐藏 */
  hide: () => void;
  /** 显示 */
  show: () => void;
  /** 销毁,但是不继续推进promise的状态改变 */
  destroy: (external?: boolean) => void;
  /** promise */
  promise: Promise<unknown>;
  /** promise执行器参数resolve */
  resolve: (val?: unknown) => void;
  /** promise执行器参数reject */
  reject: (reason?: unknown) => void;
  /** 销毁,解决promise */
  destroyWithResolve: (val?: unknown) => void;
  /** 销毁,拒绝promise */
  destroyWithReject: (reason?: unknown) => void;
  /** 订阅取消 */
  off: (name: string | symbol, callback: (...args: unknown[]) => void) => void;
  /** 订阅 */
  on: (name: string | symbol, callback: (...args: unknown[]) => void, config?: IOnConfig) => void;
  /** 单次订阅 */
  once: (name: string | symbol, callback: (...args: unknown[]) => void) => void;
  /** 发布 */
  emit: (name: string | symbol, ...args: unknown[]) => void;
  /** UI库的组件实例引用 */
  componentRef?: Ref<any>;
  /** 组件挂载的html元素 */
  container: HTMLDivElement;
  /** 组件嵌套堆栈 */
  stack: IConsumer[];
  /** 当前在组件嵌套堆栈中的索引 */
  stackIndex: number;
  /** 已挂载 */
  mounted: boolean;
  /** 已销毁 */
  destroyed: boolean;
}
```

下面介绍几个重要的属性，其他属性可以参考类型定义自行探索。

- `meta` 他可以类比`vue-router`中的meta属性,用于存储组件的相关信息.
- `visible` 这个属性是一个响应式变量,它的值是一个布尔值,表示组件是否可见,你甚至可以不调用show/hide方法,而是直接通过这个属性来控制组件的显示与隐藏.
- `hide` 这个方法用于隐藏组件,你可以在需要的时候调用它来控制组件的可见性.
- `show` 这个方法用于显示组件,你可以在需要的时候调用它来控制组件的可见性.
- Consumer 还提供了一个事件系统，但建议仅在进行命令式组件增强或封装时使用，而不是用于业务逻辑实现。
- `container` 容器元素
- `stack` 组件嵌套堆栈,它是一个数组,里面存储了当前组件嵌套的所有组件实例,你可以通过这个属性来获取当前组件嵌套的所有组件实例.
- `stackIndex` 当前在组件嵌套堆栈中的索引,它是一个数字,表示当前组件在组件嵌套堆栈中的索引,你可以通过这个属性来获取当前组件在组件嵌套堆栈中的索引.
- `componentRef` 这个属性是一个响应式变量,它的值是一个对象,表示组件的实例,你可以通过这个属性来获取组件的实例,然后使用原生组件暴露的属性,但是你在适配原生组件的时候一定要将实例赋值给它才能正常工作.

::: danger 注意
Consumer 对象包含事件系统，但建议不要用于业务逻辑实现。该系统主要用于命令式组件的增强和封装，后续版本可能会有变动。
:::

## 创建和销毁

现在开始介绍命令式组件的具体使用方法。

弹窗的唤起和销毁

销毁主要使用`destroy`和`destroyWithResolve`、`destroyWithReject`来进行销毁操作。

`destroyWithResolve`和`destroyWithReject`会将promise的状态推进到resolve和reject,而`destroy`只是销毁弹窗,不会推进promise的状态(你可能会担心一个永远不会被推进到终态的promise会不会内存泄漏,那么你可以参见这篇文章:[一个永远不会完成的 Promise 是否会造成存储泄漏](https://juejin.cn/post/7419297143788470282?searchId=20250502235657363591F19D1773229FA7).

<demo vue="../components/base.vue"></demo>

## 显示和隐藏

隐藏`hide`只会隐藏掉组件,不会进行真正的销毁.

<demo vue="../components/showhide.vue"></demo>

## 嵌套

可以开始你的无限套娃之旅了~

<demo vue="../components/nested.vue"></demo>

## 原生组件特性

支持原生组件所有的属性和事件,方法.你可以将属性和事件放置到`attrs`中,理论完美兼容支持原生组件的所有属性和事件.

::: tip 响应式
但是目前这里有一个缺陷,就是`attrs`中的属性即使是响应式数据,视图也无法响应式更新(实际上,命令函数后续的配置都不会响应式更新,但好在弹窗的配置一般比较固定,不会轻易变动),目前正在实验解决方案.
:::

<demo vue="../components/native-attributes.vue"></demo>


## 原生组件插槽

支持原生组件所有的插槽,包括具名插槽和作用域插槽.

<demo vue="../components/native-slots.vue"></demo>

## 通信

你可以像往常一样,使用传统的emit来进行单向数据流的方式来进行通信.
然而下一章中,你会认识到一种更优雅的通信方式,那就是promise特性的弹窗.

打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.
<demo vue="../components/communication.vue"></demo>

## provide和inject

这一块和vue的provide和inject是一样的,没有任何区别.不过你可以用`provideProps`来实现私有的注入,这样做的好处是,注入会被限制在命令组件内部,命令组件之外的组件不会被污染注入域.

它的使用很简单.
```ts
const CommandDialog = useDialog();
CommandDialog(<div>1</div>,{
  provideProps: {
    a: 1,
    b: 2,
  },
})
```
