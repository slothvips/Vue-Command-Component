# Vue Command Component 🚀

<div align="center">

**轻松实现Vue组件的命令式调用，告别繁琐的状态管理**

[![npm version](https://badge.fury.io/js/@vue-cmd%2Fcore.svg)](https://www.npmjs.com/package/@vue-cmd/core)
[![npm downloads](https://img.shields.io/npm/dm/@vue-cmd/core.svg)](https://www.npmjs.com/package/@vue-cmd/core)
[![GitHub stars](https://img.shields.io/github/stars/slothvips/Vue-Command-Component.svg)](https://github.com/slothvips/Vue-Command-Component/stargazers)
[![License](https://img.shields.io/github/license/slothvips/Vue-Command-Component.svg)](LICENSE)

[文档网站](https://slothvips.github.io/Vue-Command-Component/) | [快速开始](https://slothvips.github.io/Vue-Command-Component/guide/quick-start.html) | [在线演示](https://slothvips.github.io/Vue-Command-Component/example/base.html)

</div>

## ✨ 特性

- 🎯 **命令式调用** - 通过函数调用控制组件，而非模板声明
- 🔥 **简化代码** - 减少繁杂的模板代码和状态管理
- 🎨 **多UI库支持** - 已适配 Element Plus、Naive UI、Vant
- 📦 **开箱即用** - 零配置，安装即用
- 🔧 **完整的环境信息** - 保留完整的Vue环境上下文
- 🚀 **Promise支持** - 优雅的异步流程处理
- 💪 **TypeScript支持** - 完整的类型定义

## 🤔 为什么需要命令式组件？

### 传统方式 😰
```vue
<template>
  <div>
    <el-button @click="showDialog = true">打开弹窗</el-button>
    
    <!-- 需要在模板中定义弹窗 -->
    <el-dialog 
      v-model="showDialog" 
      title="用户信息"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <UserForm :user="currentUser" @submit="handleSubmit" />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 需要管理状态
const showDialog = ref(false)
const currentUser = ref(null)

// 需要多个事件处理函数
const handleConfirm = () => {
  showDialog.value = false
}

const handleCancel = () => {
  showDialog.value = false
}

const handleSubmit = (userData) => {
  // 处理提交逻辑
  showDialog.value = false
}
</script>
```

### 命令式方式 🎉
```vue
<template>
  <div>
    <el-button @click="openUserDialog">打开弹窗</el-button>
  </div>
</template>

<script setup>
import { useDialog } from '@vue-cmd/element-plus'

const CommandDialog = useDialog()

const openUserDialog = async () => {
  try {
    const userData = await CommandDialog(
      <UserForm user={currentUser} />,
      { title: '用户信息' }
    ).promise
    // 直接获取结果，无需额外状态管理
    console.log('用户数据：', userData)
  } catch (error) {
    console.log('用户取消了操作')
  }
}
</script>
```

**对比结果：代码量减少极大，无需状态管理，逻辑更清晰！**

## 📦 安装

```bash
# 选择你使用的UI库
npm install @vue-cmd/element-plus  # Element Plus
npm install @vue-cmd/naive         # Naive UI  
npm install @vue-cmd/vant          # Vant
```

## 🚀 快速开始

### 1. 基础用法

```js
import { useDialog } from '@vue-cmd/element-plus'

const CommandDialog = useDialog()

// 简单调用
CommandDialog(<div>Hello World!</div>)

// 带配置
CommandDialog(<UserForm />, {
  title: '编辑用户',
  width: '500px'
})
```

### 2. Promise支持

```js
const result = await CommandDialog(<UserForm />, {
  title: '新增用户'
}).promise

console.log('用户提交的数据：', result)
```

### 3. 工作流弹窗

```js
const openNestedDialogs = async () => {
  const step1 = await CommandDialog(<Step1 />).promise
  const step2 = await CommandDialog(<Step2 data={step1} />).promise
  const step3 = await CommandDialog(<Step3 data={step2} />).promise
  
  console.log('完成所有步骤：', step3)
}
```

## 🎯 适用场景

- ✅ **弹窗类组件**：Dialog、Modal、Drawer
- ✅ **确认类交互**：删除确认、操作确认
- ✅ **表单编辑**：行内编辑、快速编辑
- ✅ **多步骤流程**：向导、分步表单
- ✅ **临时性UI**：提示框、通知

## 📚 文档

- [完整文档](https://slothvips.github.io/Vue-Command-Component/)
- [快速开始](https://slothvips.github.io/Vue-Command-Component/guide/quick-start.html)
- [示例演示](https://slothvips.github.io/Vue-Command-Component/example/base.html)

## 🛠️ 支持的UI库

| UI库           | 包名                    | 状态     |
| -------------- | ----------------------- | -------- |
| Element Plus   | `@vue-cmd/element-plus` | ✅ 已支持 |
| Naive UI       | `@vue-cmd/naive`        | ✅ 已支持 |
| Vant           | `@vue-cmd/vant`         | ✅ 已支持 |
| Ant Design Vue | -                       | 🚧 计划中 |
| Quasar         | -                       | 🚧 计划中 |

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](CONTRIBUTING.md)。

## 📄 许可证

[MIT](LICENSE) © 2024
