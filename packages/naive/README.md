# @vue-cmd/naive

Naive UI 适配器包，为 Vue Command Component 提供 Naive UI 组件的命令式调用能力。

## 安装

```bash
npm install @vue-cmd/naive
# 或
pnpm add @vue-cmd/naive
# 或
yarn add @vue-cmd/naive
```

## 使用

### 模态框 (Modal)

```vue
<template>
  <button @click="openModal">打开模态框</button>
</template>

<script setup>
import { useNaiveModal } from '@vue-cmd/naive';

const modal = useNaiveModal();

const openModal = () => {
  modal(
    <div>这是模态框内容</div>,
    {
      title: "示例模态框",
      attrs: {
        preset: "dialog",
        closable: true,
      }
    }
  );
};
</script>
```

### 抽屉 (Drawer)

```vue
<template>
  <button @click="openDrawer">打开抽屉</button>
</template>

<script setup>
import { useNaiveDrawer } from '@vue-cmd/naive';

const drawer = useNaiveDrawer();

const openDrawer = () => {
  drawer(
    <div>这是抽屉内容</div>,
    {
      attrs: {
        title: "示例抽屉",
        width: 400,
        placement: "right",
      }
    }
  );
};
</script>
```

## API

### useNaiveModal

创建一个 Naive UI 模态框适配器。

**类型定义：**

```typescript
interface INaiveModalConfig extends ICommandComponentConfig {
  title?: string;
  width?: string | number;
  height?: string | number;
}
```

### useNaiveDrawer

创建一个 Naive UI 抽屉适配器。

**类型定义：**

```typescript
interface INaiveDrawerConfig extends ICommandComponentConfig {
  title?: string;
  width?: string | number;
  height?: string | number;
  placement?: "top" | "right" | "bottom" | "left";
}
```

## 许可证

MIT 
