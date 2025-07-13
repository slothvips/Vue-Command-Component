# Vue Command Component 宣传视频脚本

## 视频概览

- **总时长：** 4分15秒
- **目标受众：** Vue.js 开发者
- **核心信息：** 简化组件调用，提升开发效率
- **风格定位：** 技术专业、简洁现代

---

## 分镜脚本

### 【开场 - 0:00-0:15】

**画面：** 代码编辑器界面，显示传统的弹窗代码  
**旁白：** "在Vue开发中，你是否厌倦了这样的弹窗代码？"

**代码展示：**

```vue
<template>
  <el-dialog v-model="visible" title="编辑用户">
    <UserForm @submit="handleSubmit" />
  </el-dialog>
  <el-button @click="visible = true">编辑</el-button>
</template>

<script setup>
const visible = ref(false);
const handleSubmit = () => {
  visible.value = false;
  // 处理提交逻辑...
};
</script>
```

**旁白：** "状态管理、事件处理、生命周期控制...复杂且割裂的开发体验"

### 【痛点展示 - 0:15-0:30】

**画面：** 快速切换显示多个传统弹窗代码片段  
**旁白：** "当页面有多个弹窗时，代码变得更加臃肿"

**展示问题：**

- 大量的 `v-model` 状态管理
- 分散的事件处理逻辑
- 复杂的嵌套弹窗管理
- 异步流程控制困难

### 【解决方案登场 - 0:30-0:45】

**画面：** Logo动画 + 标题出现  
**旁白：** "Vue Command Component - 让组件调用回归本质"

**核心理念展示：**

```jsx
// 一行代码，搞定弹窗
CommandDialog(<UserForm />, { title: "编辑用户" });
```

**旁白：** "命令式调用，简洁直观，符合交互逻辑"

### 【核心特性演示 - 0:45-2:00】

#### **特性1：极简调用 (0:45-1:00)**

**画面：** 代码对比动画  
**旁白：** "告别繁琐的状态管理"

**Before vs After：**

```jsx
// 传统方式 - 10行代码
const visible = ref(false);
const openDialog = () => (visible.value = true);
const closeDialog = () => (visible.value = false);
// + 模板中的 v-model 绑定...

// Vue Command Component - 1行代码
CommandDialog(<UserForm />);
```

#### **特性2：Promise异步流程 (1:00-1:15)**

**画面：** 实际运行效果 + 代码展示  
**旁白：** "内置Promise支持，异步流程控制如丝般顺滑"

```jsx
// 等待用户操作结果
try {
  const result = await CommandDialog(<EditForm />).promise;
  console.log("用户提交了:", result);
  refreshList(); // 刷新列表
} catch {
  console.log("用户取消了操作");
}
```

#### **特性3：完美嵌套支持 (1:15-1:30)**

**画面：** 嵌套弹窗演示  
**旁白：** "智能的嵌套管理，自动处理层级关系"

```jsx
// 弹窗中再开弹窗，轻松搞定
const openNestedDialog = () => {
  CommandDialog(<ConfirmDialog />);
};
```

#### **特性4：多UI库适配 (1:30-1:45)**

**画面：** 不同UI库的使用演示  
**旁白：** "开箱即用，支持主流UI库"

```jsx
// Element Plus
import { useDialog } from "@vue-cmd/element-plus";

// Naive UI
import { useNaiveModal } from "@vue-cmd/naive";

// Vant
import { useVantDialog } from "@vue-cmd/vant";
```

#### **特性5：完整环境继承 (1:45-2:00)**

**画面：** 代码演示环境继承  
**旁白：** "完整继承父组件环境，provide/inject、路由、国际化一个不少"

### 【实战场景展示 - 2:00-2:45】

#### **场景1：表格编辑 (2:00-2:15)**

**画面：** 表格点击编辑的完整流程  
**旁白：** "表格编辑场景，一气呵成"

```jsx
const editRow = async (row) => {
  try {
    await CommandDialog(<EditForm row={row} />).promise;
    refreshTable(); // 编辑成功，刷新表格
  } catch {
    // 用户取消，无需处理
  }
};
```

#### **场景2：确认对话框 (2:15-2:30)**

**画面：** 删除确认流程  
**旁白：** "确认对话框，逻辑清晰"

```jsx
const deleteItem = async (id) => {
  try {
    await CommandDialog(<ConfirmDelete />).promise;
    await api.delete(id);
    message.success("删除成功");
  } catch {
    // 用户取消删除
  }
};
```

#### **场景3：复杂表单 (2:30-2:45)**

**画面：** 多步骤表单演示  
**旁白：** "复杂表单流程，轻松驾驭"

### 【技术优势 - 2:45-3:15】

**画面：** 架构图 + 特性列表  
**旁白：** "不仅仅是简单的封装"

**核心优势：**

- ✅ **类型安全** - 完整的TypeScript支持
- ✅ **轻量级** - 核心库仅几KB
- ✅ **可扩展** - 适配任何组件库
- ✅ **零依赖** - 仅依赖Vue 3
- ✅ **生产就绪** - 完善的测试覆盖

### 【开发体验对比 - 3:15-3:30】

**画面：** 开发效率对比动画  
**旁白：** "开发效率提升显著"

**数据展示：**

- 代码量减少 **70%**
- 开发时间节省 **50%**
- Bug率降低 **60%**

### 【快速上手 - 3:30-3:45】

**画面：** 安装和使用步骤  
**旁白：** "三步即可上手"

```bash
# 1. 安装
npm install @vue-cmd/core @vue-cmd/element-plus

# 2. 使用
import { useDialog } from '@vue-cmd/element-plus'
const CommandDialog = useDialog()

# 3. 调用
CommandDialog(<YourComponent />)
```

### 【社区与生态 - 3:45-4:00】

**画面：** GitHub页面 + 文档网站  
**旁白：** "完善的文档，活跃的社区"

**展示内容：**

- 📚 详细的文档和示例
- 🎯 在线演示和playground
- 🔧 多种UI库适配器
- 💬 活跃的社区支持

### 【结尾号召 - 4:00-4:15】

**画面：** Logo + GitHub链接  
**旁白：** "Vue Command Component，让组件调用回归简单"

**行动号召：**

- ⭐ GitHub: github.com/pandavips/Vue-Command-Component
- 📖 文档: pandavips.github.io/Vue-Command-Component
- 💡 立即体验，提升开发效率

**结束语：** "简化开发，专注业务，从Vue Command Component开始！"

---

## 制作规范

### 视觉风格

- **主色调：** Vue绿色 (#4FC08D) + 现代蓝色
- **动画风格：** 简洁流畅的代码展示动画
- **字体：** 现代无衬线字体，代码使用等宽字体

### 技术要求

- **时长：** 4分15秒，节奏紧凑
- **分辨率：** 1920x1080，适合各平台
- **音效：** 轻快的背景音乐 + 代码敲击音效
- **字幕：** 中英双语字幕支持

### 拍摄要素

- 真实的代码编辑器界面录制
- 浏览器中的实际运行效果
- 流畅的代码对比动画
- 清晰的UI交互演示

---

## 核心卖点总结

1. **简化开发流程** - 从10行代码到1行代码
2. **Promise异步支持** - 优雅的异步流程控制
3. **完美嵌套管理** - 智能的层级关系处理
4. **多UI库支持** - Element Plus、Naive UI、Vant等
5. **环境完整继承** - 保持Vue生态完整性
6. **类型安全** - 完整的TypeScript支持
7. **轻量高效** - 核心库仅几KB，零额外依赖

**目标效果：** 让观众在4分钟内完全理解Vue Command Component的价值，并产生立即尝试的冲动。
