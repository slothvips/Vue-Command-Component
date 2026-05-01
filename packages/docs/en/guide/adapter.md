# Adapting Other Components

This project includes adapters for several UI frameworks, but because the component library ecosystem is broad, you may need to implement imperative invocation for a specific component. This guide walks you through the adaptation process. If you are willing to share your adapter, PRs are welcome.

The core of adaptation is building a bridge between third-party components and the `core` layer. The adapter layer is mainly responsible for smoothing over differences between components and connecting them to the `core` layer.

## Adapter API: `createAdapter`

To simplify adapter development, we provide the `createAdapter` function. It encapsulates common logic so developers only need to focus on component-specific differences.

### Basic Usage

`createAdapter` is a high-level wrapper around the lower-level `commandProviderWithRender`. It hides complex details and provides a concise API.

It accepts a configuration object with these properties:

- **Renderer `render`**: defines how to render the component and connect lifecycle management logic
- **Default config `defaultConfig`**: default component props, which can later be overridden or merged in multiple places
- **Config transformer `configTransformer`**: preprocesses the config before rendering, allowing unified transformation or enhancement

The adapter implementation mainly happens inside the `render` function and needs to handle these key tasks:

1. Return the target UI component's rendered VNode using JSX or the `h` function
2. Bind the `visible` state to the component's visibility control prop
3. Pass component props, slots, events, and similar values, usually with `{...config.attrs}`
4. Bind `componentRef` to the component instance and run `onMounted` through the `onVnodeMounted` callback
5. Connect destruction logic by calling `consumer.value!.destroy()` when the component closes, preferably in the animation-end callback

The following example adapts `MyComponent` as an imperative component:

```tsx
import { createAdapter } from "@vue-cmd/core";

const myComponentRender = (
  contentVNode,
  { componentRef, visible, onMounted, config, consumer },
) => {
  return (
    <MyComponent
      // 2. Bind visibility control
      v-model={visible.value}
      // 4. Bind the component instance ref
      ref={componentRef}
      onVnodeMounted={onMounted}
      // 3. Pass component props
      {...config.attrs}
      // 5. Connect destruction logic
      onClosed={() => consumer.value!.destroy()}
    >
      {/* Render command component content */}
      {{
        default: () => contentVNode,
        // Pass other slots
        ...config.slots,
      }}
    </MyComponent>
  );
};

export const useMyComponent = createAdapter({
  render: myComponentRender,
  defaultConfig: {
    title: "Basic Dialog",
    width: "400px",
    // Component metadata for future extensions
    meta: {
      name: "my-component",
    },
  },
});
```

::: tip Choosing a Destruction Method
User interactions can be divided into three categories:

- **Commit**: the user explicitly submits data → `consumer.destroyWithResolve(data)`
- **Cancel**: the user explicitly rejects the operation → `consumer.destroyWithReject(reason)`
- **Dismiss**: the user does not make an explicit choice → `consumer.destroy()`

Unless the user explicitly clicks a confirm or reject button, the action is usually treated as Dismiss, such as closing through the close icon, overlay, or ESC key.

In the adapter layer, close behavior should use `consumer.destroy()` by default so the Promise state remains unchanged.
:::

### Config Transformer: `configTransformer`

Preprocess the config before rendering to transform or enhance config parameters uniformly:

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
    // Normalize config here
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

## Advanced Customization: `commandProviderWithRender`

When `createAdapter` cannot meet complex customization needs, use the lower-level `commandProviderWithRender` function. It provides full control over the rendering process.

We recommend reading the source implementation of `createAdapter` first to understand its internal mechanism before using the lower-level API directly.

## Best Practices

Prefer `createAdapter`. It covers most scenarios and effectively reduces adapter complexity. Only consider the lower-level API in special cases.
