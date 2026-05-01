# Quick Start

This guide helps you get started with Vue Command Component quickly.

## Compatibility Requirements

::: warning Important
Only `Vue 3` is supported. Make sure your Vue version is compatible.
:::

::: tip JSX Configuration Recommendation
If JSX support is not configured, you need to create VNodes with the `h` function, which makes the code more verbose. We strongly recommend enabling JSX support for a better development experience. `Vite` users can refer to [@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx).
:::

## Installation

Install the required dependency with your package manager:

::: code-group

```bash [npm]
$ npm install @vue-cmd/element-plus
```

```bash [yarn]
$ yarn add @vue-cmd/element-plus
```

```bash [pnpm]
$ pnpm add @vue-cmd/element-plus
```

```bash [bun]
$ bun add @vue-cmd/element-plus
```

:::

We recommend Anthony Fu's [`@antfu/ni`](https://www.npmjs.com/package/@antfu/ni) to simplify package-manager commands:

```bash
npm i -g @antfu/ni
```

After installation, you can use one unified command:

```bash
ni @vue-cmd/element-plus
```

## Basic Usage

::: warning Usage Notes
Adapter-layer hooks such as `useDialog` must be called synchronously at the top of `setup`, because they rely on the `getCurrentInstance` API internally to access the current component instance.

For projects that use on-demand imports or auto-import plugins, you may need to manually import the target component's style file; otherwise the component may not render correctly. Import the required component styles during project initialization, for example in `main.ts`:

```ts
// main.ts
import "element-plus/theme-chalk/el-dialog.css";
```

:::

```jsx
import { defineComponent, h } from "vue";
import { useDialog } from "@vue-cmd/element-plus";

// Initialize the imperative component
const dialog = useDialog();

// Define the dialog content component
const Content = defineComponent({
  render() {
    return <div>Dialog content</div>;
  },
});

// Call the imperative component
dialog(<Content />);

// If you are not using JSX, use the h function instead
// For more information about JSX and the h function, see the Vue official documentation: https://vuejs.org/guide/extras/render-function.html#the-h-function
dialog(h(Content));
```

For more examples, see [Basic Usage](../example/base.md).
