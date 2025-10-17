# 适配其他组件

本项目已内置多个UI框架的适配器，但由于组件库生态众多，您可能需要为特定组件实现命令式调用。本指南将指导您完成组件适配流程。如果您愿意分享适配成果，欢迎提交PR。

适配工作的核心是建立第三方组件与`core`层之间的连接桥梁。适配层的主要职责是抹平不同组件之间的差异，将组件和`core`层进行对接。

## 适配器API：`createAdapter`

为简化适配工作，我们提供了`createAdapter`函数，它封装了通用逻辑处理，让开发者只需关注组件的特定差异部分。

### 基本使用

`createAdapter`是对底层`commandProviderWithRender`的高级封装，屏蔽了复杂细节，提供简洁的API。

它接受一个配置对象参数，包含以下属性：

- **渲染器`render`**：定义如何渲染组件并关联生命周期管理逻辑
- **默认配置`defaultConfig`**：组件属性的默认值，后续可在多处覆盖或合并
- **配置转换器`configTransformer`**：在渲染前对配置进行预处理，允许统一转换或增强配置参数

适配实现主要在`render`函数中完成，需要处理以下关键任务：

1. 返回目标UI组件的渲染VNode（使用JSX或h函数）
2. 将`visible`状态绑定到组件的显隐控制属性
3. 传递组件属性、插槽、事件等（通常通过解构`{...config.attrs}`实现）
4. 绑定`componentRef`到组件实例，并通过`onVnodeMounted`回调执行`onMounted`
5. 关联销毁逻辑，在组件关闭时调用`consumer.value!.destroy()`（建议在动画结束回调中执行）

以下是将`MyComponent`适配为命令式组件的示例：

```tsx
import { createAdapter } from "@vue-cmd/core";

const myComponentRender = (
  contentVNode,
  { componentRef, visible, onMounted, config, consumer },
) => {
  return (
    <MyComponent
      // 2. 显隐控制绑定
      v-model={visible.value}
      // 4. 组件实例引用绑定
      ref={componentRef}
      onVnodeMounted={onMounted}
      // 3. 传递组件属性
      {...config.attrs}
      // 5. 关联销毁逻辑
      onClosed={() => consumer.value!.destroy()}
    >
      {/* 命令组件内容渲染 */}
      {{
        default: () => contentVNode,
        // 传递其他插槽
        ...config.slots,
      }}
    </MyComponent>
  );
};

export const useMyComponent = createAdapter({
  render: myComponentRender,
  defaultConfig: {
    title: "基础弹窗",
    width: "400px",
    // 组件元数据，便于后续扩展
    meta: {
      name: "my-component",
    },
  },
});
```

::: tip 销毁函数选择指南
用户交互行为可分为三类：

- **确认(Commit)**：用户明确提交数据 → `consumer.destroyWithResolve(data)`
- **取消(Cancel)**：用户明确拒绝操作 → `consumer.destroyWithReject(reason)`
- **关闭(Dismiss)**：用户未明确表态 → `consumer.destroy()`

除非用户明确点击确认/拒绝按钮，否则通常视为Dismiss行为，如点击关闭图标、遮罩层或按ESC键导致的关闭。

在适配层中，默认应使用`consumer.destroy()`处理关闭行为，保持Promise状态不变。
:::

### 配置转换器：`configTransformer`

在渲染前对配置进行预处理，允许统一转换或增强配置参数：

```tsx
import { createAdapter } from "@vue-cmd/core";

const myComponentRender = (contentVNode, config) => {
  const { componentRef, visible, onMounted, config, consumer } = config.value;
  return (
    <MyComponent
      ref={componentRef}
      onVnodeMounted={onMounted}
      {...config.value.attrs}
    >
      {contentVNode}
    </MyComponent>
  );
};

export const useMyComponentWithTransformer = createAdapter({
  renderer: myComponentRender,
  configTransformer: (config) => {
    // 在此处统一处理配置
    return {
      ...config.value,
      customClassName:
        `${config.value.customClassName || ""} enhanced-component`.trim(),
      attrs: {
        ...config.value.attrs,
        theme: config.value.theme || "light",
      },
    };
  },
});
```

## 高级定制：`commandProviderWithRender`

当`createAdapter`无法满足复杂定制需求时，可使用底层的`commandProviderWithRender`函数，它提供对整个渲染过程的完全控制权。

建议先查看`createAdapter`的源码实现，理解其内部机制后再考虑直接使用底层API。

## 最佳实践

建议优先使用`createAdapter`，它已满足绝大多数场景需求，同时有效降低适配复杂度。只有在特殊情况下才考虑使用底层API。
