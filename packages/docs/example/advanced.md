# 进阶用法

这里将向你介绍`promise`以及`consumer`的特性.

## Promise特性

这是我们在使用命令式组件后,带来的最大福利.它让我们与组件的通信变更为promise的方式.下边用一些典型的例子来解释他给我们带来的好处:

### 案例一: 编辑表格中的某一行

<demo vue="../components/promise.vue"></demo>

在一些admin中,弹窗编辑某一行的数据这种需求比比皆是,你可以自行脑补一下整个过程中使用命令式组件和常规声明式组件的区别,命令式的简洁和流畅的开发体验是毋庸置疑的.

### 案例二: 步骤弹窗 

在一些场景中,我们需要在弹窗中进行多步操作,比如:选择数据,编辑数据,确认数据.这时候我们就可以利用promise来实现了.下面是一个简单的步骤弹窗的例子:

<demo vue="../components/promise2.vue"></demo>

## Consumer特性

Consumer是一个重要的对象,它是命令组件内外通信的桥梁,它身上尽可能的多的向我们暴露了我们可能用到的属性和方法.

它的定义形状如下:
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
  /** 销毁,并解决promise */
  destroyWithResolve: (val?: unknown) => void;
  /** 销毁,并拒绝promise */
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

我们挑几个重要的说下吧

- `meta` 他可以类比`vue-router`中的meta属性,用于存储组件的相关信息.
- `visible` 这个属性是一个响应式变量,它的值是一个布尔值,表示组件是否可见,你甚至可以不调用show/hide方法,而是直接通过这个属性来控制组件的显示与隐藏.
- `hide` 这个方法用于隐藏组件,你可以在需要的时候调用它来控制组件的可见性.
- `show` 这个方法用于显示组件,你可以在需要的时候调用它来控制组件的可见性.
- 你可能还注意到貌似还有一个订阅发布系统,是的,的确有一个订阅发布系统.但是你不应该用它来实现你的业务,而是在进行命令式组件增强/封装的时候使用,它也是为此而设计的.
- `container` 容器元素
- `stack` 组件嵌套堆栈,它是一个数组,里面存储了当前组件嵌套的所有组件实例,你可以通过这个属性来获取当前组件嵌套的所有组件实例.
- `stackIndex` 当前在组件嵌套堆栈中的索引,它是一个数字,表示当前组件在组件嵌套堆栈中的索引,你可以通过这个属性来获取当前组件在组件嵌套堆栈中的索引.
- `componentRef` 这个属性是一个响应式变量,它的值是一个对象,表示组件的实例,你可以通过这个属性来获取组件的实例,然后使用原生组件暴露的属性,但是你在适配原生组件的时候一定要将实例赋值给它才能正常工作.
