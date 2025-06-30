# 快速开始

让我们开始吧!

## 兼容性

仅支持`Vue 3`,请留意你的vue版本.

建议你为你的项目配置`jsx`支持,这会极大的改善你的开发体验,否则你就需要一路`h`函数了.关于如何为你的项目配置`jsx`支持,`vite`用户参见[@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx).

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


多嘴一句,建议你使用`Anthony Fu`的[`@antfu/ni`](https://www.npmjs.com/package/@antfu/ni)

```bash
npm i -g @antfu/ni
```

然后你就可以无视包管理器差异了
```bash
ni @vue-cmd/core @vue-cmd/element-plus
```


## 使用

现在你可以直接使用了。

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

值得说明一下，`useElementPlusDialog`之类的适配层hooks,必须在setup顶部调用,因为内部依赖`getCurrentInstance`这个api来捕获当前组件实例。

更多示例请参见[示例](../example/base.md)
