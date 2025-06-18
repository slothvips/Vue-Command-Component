# 常规用法

这里会展示一些常规用法.

这里展示的所有`api`,在弹窗内部都可以使用`useConsumer`获取到同一个`consumer`来使用;弹窗内部和外部获取到的`consumer`是全等的,换句话说,他们的作用是完全相同的.

因为弹窗对于命令式组件来说,是最能展现它能力的使用场景,所以我将使用弹窗来展示使用示例.

熟悉了弹窗的用法,触类旁通的也会理解其他组件使用方式.

那么,我们开始吧.

## DialogContent

示例中会多次使用弹窗内容组件`dialog-content`,下边是它的样子:

<demo vue="../components/dialog-content.vue" />

## 创建和销毁

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

支持原生组件所有的属性和事件,方法.

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

这一块和vue3的provide和inject是一样的,没有任何区别.不过你可以用`provideProps`来实现私有的注入,这样做的好处是,注入会被限制在命令组件内部,命令组件之外的组件不会被污染注入域.

它的使用很简单.
```ts
const CommandDialog = useElementPlusDialog();
CommandDialog(<div>1</div>,{
  provideProps: {
    a: 1,
    b: 2,
  },
})
```
## 其他UI库组件示例

目前另外的适配:

<demo vue="../components/other-ui.vue"></demo>

## 响应式组件

由于jsx的书写方式,上述所有示例都有一个严重的缺陷,就是`DialogContent`组件的视图是无法根据props数据的变化进行更新的,这个时候你就需要JSXReactive来包裹你的jsx
<demo vue="../components/reactive-component.vue"></demo>


