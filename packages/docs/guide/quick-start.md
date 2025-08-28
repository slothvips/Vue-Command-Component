# 快速开始

本指南将帮助您快速上手Vue命令式组件。

## 兼容性要求

::: warning 重要提醒
仅支持`Vue 3`，请确认您的Vue版本！
:::

::: tip JSX配置建议
若未配置JSX支持，您需要使用`h`函数创建VNode，这会导致代码较为繁琐。强烈建议配置JSX支持以获得更优的开发体验。`Vite`用户请参考 [@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)。
:::

## 安装

通过包管理器安装所需依赖：

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

推荐使用 Anthony Fu 的 [`@antfu/ni`](https://www.npmjs.com/package/@antfu/ni) 简化包管理器操作：

```bash
npm i -g @antfu/ni
```

安装后可统一使用以下命令：

```bash
ni @vue-cmd/element-plus
```

## 基本用法

::: warning 使用注意事项
`useDialog`等适配层hooks必须在setup顶部同步调用，因为其内部依赖`getCurrentInstance`API来获取当前组件实例。
:::

```jsx
import { defineComponent, h } from "vue";
import { useDialog } from "@vue-cmd/element-plus";

// 初始化命令式组件
const CommandDialog = useDialog();

// 定义弹窗内容组件
const Content = defineComponent({
  render() {
    return <div>弹窗内容</div>;
  },
});

// 调用命令式组件
CommandDialog(<Content />);

// 如果未使用JSX，可以使用h函数替代
// 关于JSX和h函数的更多资料请参见 Vue 官方文档：https://vuejs.org/guide/extras/render-function.html#the-h-function
CommandDialog(h(Content));
```

更多示例请参阅[基础示例](../example/base.md)
