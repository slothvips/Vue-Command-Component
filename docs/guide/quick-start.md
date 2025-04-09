# 快速开始

让我们开始吧!

## 兼容性

仅支持vue3项目.vue2是不能正常工作的.由于组件节点内部构造已经改变,即使使用`vue-demi`也是不能正常工作的,抱歉.

建议你为你的项目配置`jsx`支持,这会极大的改善你的开发体验,否则你就需要一路`h`函数了.关于如何为你的项目配置`jsx`支持,`vite`用户参见[@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx).

## 安装

通过你项目使用的包管理器进行安装

::: code-group

```bash [npm]
$ npm install vue3-command-component
```

```bash [yarn]
$ yarn add vue3-command-component
```

```bash [pnpm]
$ pnpm add vue3-command-component
```

```bash [bun]
$ bun add vue3-command-component
```

:::


多嘴一句,建议你使用`Anthony Fu`的[`@antfu/ni`](https://www.npmjs.com/package/@antfu/ni)

```bash
npm i -g @antfu/ni
```

然后你就可以无视包管理器了
```bash
ni vue3-command-component
```


## 使用

现在你可以直接使用了。

```jsx
import { createElementPlusDialog } from "vue3-command-component";

const CommandDialog=createElementPlusDialog()

const Content=defineComponent({
  render(){
    return <div>弹窗内容</div>
  }
})

CommandDialog(<Content />)
```
更多示例请参见[示例](../examples)
