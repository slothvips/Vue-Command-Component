# 适配其他组件

本项目已经提供了一些开箱即用的组件，但由于组件库众多，可能你正在使用的组件还没有被适配。本指南将帮助你将自己使用的组件适配为命令式组件。如果你愿意分享你的适配成果，欢迎提交 PR。

适配工作的核心目标是与 `core` 层的逻辑进行绑定，例如告知 `core` 层何时执行销毁清理逻辑。适配层的作用是抹平不同组件之间的差异，提供统一的接口。理解这个目标有助于更好地掌握适配过程。

## 适配器 `createAdapter`

为了简化适配工作，`createAdapter` 函数封装了通用的逻辑处理，让开发者只需要关注组件之间的差异部分。

### 基础用法

`createAdapter` 函数可以帮助你快速适配命令式组件。

它是对 `CommandProviderWithRender` 函数的封装，屏蔽了通用逻辑，让你专注于组件的适配工作。

它需要两个参数:

- 渲染器：决定如何渲染组件，以及如何与 `core` 层的逻辑关联(主要是销毁逻辑)
- 初始配置：组件属性的默认值，后续可以在多个地方进行修改和覆盖

适配工作主要在 `render` 函数中实现，具体需要完成以下任务:

1. 返回目标组件的渲染 vnode，可以使用 jsx 或 h 函数
2. 将 `visible` 参数绑定到组件上控制显隐，建议使用单向绑定
3. 传递插槽、属性、事件等，通常直接展开 `{...config.attrs}` 到组件上
4. 将 `componentRef` 绑定到组件上，通过 `onVnodeMounted` 回调执行 `onMounted`，用于设置组件实例引用
5. 关联 `core` 层的销毁清理逻辑，在组件关闭回调中调用 `consumer.value!.destroy()`。如果组件有关闭动画结束回调，建议使用该回调进行销毁以保证动画完整播放

下面是一个将 `MyComponent` 组件适配为命令式组件的示例:

```tsx
import { createAdapter } from '@vue-cmd/core'
const myComponentRender = (contentVNode, { componentRef, visible, onMounted, config, consumer }) => {
  // 对应1. 返回目标组件的渲染 vnode
  return (
    <MyComponent
    {/* 对应2. 单向绑定 */}
    modelValue={visible.value}
    {/* 对应4. 设置 ref 引用 */}
    ref={componentRef} onVnodeMounted={onMounted}
    {/* 对应3. 传递属性 */}
    {...config.attrs}
    {/* 对应5. 关联销毁清理逻辑 */}
    onClosed={() => consumer.value!.destroy()}>
    {/* 命令组件内部渲染内容 */}
      {{
        default: () => contentVNode,
        {/* 对应3. 传递插槽 */}
        ...config.slots,
      }}
    </MyComponent>
  )
}

export const useMyComponent = createAdapter({
  render: myComponentRender,
  // 这里可以是一个空对象
  defaultConfig: {
    title: '基础适配器',
    width: '400px',
    // 这里可以设置一些组件的元数据,方便你后续使用
    meta: {
      name: 'my-component',
    },
  },
})
```
通过这种方式，可以快速完成组件的适配工作。

::: tip 关于销毁函数的选择
用户行为通常可以分为三类：Commit(提交确认)/Cancel(取消)/Dismiss(关闭忽略)，对应 Promise 的三种状态：fulfilled/rejected/pending。

销毁逻辑对应的函数分别为:
- Commit: 推进到 fulfilled 状态 > `consumer.destroyWithResolve()`
- Cancel: 推进到 rejected 状态 > `consumer.destroyWithReject()`
- Dismiss: 不推进 Promise 状态 > `consumer.destroy()`

除非用户在组件内部明确表态(如点击确认/拒绝按钮)，否则通常认为用户行为是 Dismiss，如点击关闭图标、遮罩层导致的组件销毁等。

在适配层中，通常认为用户行为是 Dismiss，除非有特殊业务需求，否则建议使用 `consumer.destroy()` 来销毁组件。
:::


### 配置转换器 `configTransformer`

在最终渲染前对配置进行预处理，允许对配置进行修改。它的作用是提供统一的配置拦截和控制点。

```tsx
import { createAdapter } from '@vue-cmd/core'

const myComponentRender = (contentVNode, config) => {
  const { componentRef, visible, onMounted, config, consumer } = config.value
  return (
    <MyComponent ref={componentRef} onVnodeMounted={onMounted} {...config.value.attrs}>
      {contentVNode}
    </MyComponent>
  )
}

export const useMyComponentWithTransformer = createAdapter({
  renderer: myComponentRender,
  configTransformer: (config) => {
    return {
      ...config.value,
      customClassName: `${config.value.customClassName || ''} enhanced-component`.trim(),
      attrs: {
        ...config.value.attrs,
        theme: config.value.theme || 'light',
      },
    }
  },
})
```

## `CommandProviderWithRender`

当需要对命令式组件进行高度自定义时，如果 `createAdapter` 无法满足灵活性需求，可以使用 `CommandProviderWithRender` 函数进行适配。它提供了对组件渲染过程和逻辑处理的完全控制。

你可以查看`createAdapter`的源码,了解它的实现原理,从而拆解它,但是一般来讲不建议这么做,因为需要关注的细节较多,很麻烦.

## 总结

推荐优先使用 `createAdapter`，它已经能够满足大部分场景的需求。`createAdapter` 封装了通用逻辑，让你专注于组件渲染和交互逻辑。

只有在 `createAdapter` 无法满足特殊定制需求时，才考虑使用 `CommandProviderWithRender`.
