# 快速开始

本指南将帮助你快速上手命令式组件的使用。

## 兼容性

::: warning 重要提醒
仅支持`Vue 3`,请留意你的vue版本！
:::

::: tip JSX配置建议
如果没有配置JSX支持，你需要使用`h`函数来创建VNode，这会让代码变得繁琐。强烈建议配置JSX支持以获得更好的开发体验。`vite`用户参见[@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx).
:::

## 安装

通过你项目使用的包管理器进行安装

::: code-group

```bash [npm]
$ npm install @vue-cmd/core @vue-cmd/element-plus
```

```bash [yarn]
$ yarn add @vue-cmd/core @vue-cmd/element-plus
```

```bash [pnpm]
$ pnpm add @vue-cmd/core @vue-cmd/element-plus
```

```bash [bun]
$ bun add @vue-cmd/core @vue-cmd/element-plus
```

:::


推荐使用 `Anthony Fu` 的 [`@antfu/ni`](https://www.npmjs.com/package/@antfu/ni) 来简化包管理器的使用：

```bash
npm i -g @antfu/ni
```

安装后可以忽略包管理器差异：
```bash
ni @vue-cmd/core @vue-cmd/element-plus
```


## 使用

现在你可以直接使用了。

::: warning 使用注意事项
`useDialog`之类的适配层hooks,必须在setup顶部同步调用,因为其内部依赖`getCurrentInstance`这个api来捕获当前组件实例。
:::

```jsx
import { defineComponent, h } from "vue";
import { useDialog } from "@vue-cmd/element-plus";

const CommandDialog=useDialog()

const Content=defineComponent({
  render(){
    return <div>弹窗内容</div>
  }
})

CommandDialog(<Content />)

// 如果你没有使用jsx,你可以这样写,关于jsx和h函数的资料请参见[渲染函数 & JSX](https://vuejs.org/guide/extras/render-function.html#the-h-function)

CommandDialog(h(Content))
```

更多示例请参见[示例](../example/base.md)
