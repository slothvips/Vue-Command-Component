# 常规用法

这里会展示一些常规用法.

这里展示的所有`api`,在弹窗内部都可以使用`useConsumer`获取到同一个`consumer`来使用;弹窗内部和外部获取到的`consumer`是全等的,换句话说,他们的作用是完全相同的.

## 创建和销毁

弹窗的唤起和销毁

销毁主要使用`destroy`和`destroyWithResolve`、`destroyWithReject`来进行销毁操作。

`destroyWithResolve`和`destroyWithReject`会将promise的状态推进到resolve和reject,而`destroy`只是销毁弹窗,不会推进promise的状态.

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

## 通信

你可以像往常一样,使用传统的emit来进行单项数据流来进行通信.
然而下一章中,你讲认识到一种更高效的通信方式,那就是promise特性的弹窗.

打开弹窗emit一个事件吧,它虽然不如promise方式优雅,但是它可以不断的向外部发送消息,而promise仅限一次.
<demo vue="../components/communication.vue"></demo>

## provide和inject

这一块和vue3的provide和inject是一样的,没有任何区别.
