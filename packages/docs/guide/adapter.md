# 适配其他组件

尽管已经提供一些开箱即用的组件，但很有可能没有适配你喜欢的组件。接下来我将告诉你怎么接入适配自己的组件。

## 函数式适配器

我们采用全新的函数式适配器设计，提供了更高的灵活性和可扩展性，采用组合式的设计理念，让适配工作变得更加简单和强大。

### 基础用法

```tsx
import { createAdapter } from "./adapter";

// 创建渲染器
const myComponentRenderer = (contentVNode, { componentRef, visible, onMounted, config, consumer }) => {
  const handleClose = () => {
    consumer.value!.destroy();
  };

  return (
    <MyComponent
      ref={componentRef}
      visible={visible.value}
      onClose={handleClose}
      onMounted={onMounted}
      {...config.attrs}
    >
      {contentVNode}
    </MyComponent>
  );
};

// 创建适配器
export const useMyComponent = createAdapter({
  renderer: myComponentRenderer,
  defaultConfig: {
    title: "默认标题",
    width: "500px"
  }
});
```

### 高级特性

#### 配置转换器

```tsx
export const useMyComponentWithTransformer = createAdapter({
  renderer: myComponentRenderer,
  configTransformer: (config, createConfig) => {
    // 在渲染前对配置进行预处理
    return {
      ...config,
      customClassName: `${config.customClassName || ''} enhanced-component`.trim(),
      attrs: {
        ...config.attrs,
        theme: config.theme || 'light'
      }
    };
  }
});
```

#### 多个适配器变体

创建多个适配器变体来满足不同的使用场景：

```tsx
// 基础适配器
export const useMyComponent = createAdapter({
  renderer: myComponentRenderer,
  defaultConfig: {
    title: "基础组件",
    width: "400px"
  }
});

// 增强适配器
export const useMyComponentPro = createAdapter({
  renderer: myComponentRenderer,
  defaultConfig: {
    title: "增强组件",
    width: "600px",
    attrs: {
      type: "pro",
      theme: "dark"
    }
  }
});

// 全屏适配器
export const useMyComponentFullscreen = createAdapter({
  renderer: myComponentRenderer,
  defaultConfig: {
    title: "全屏组件",
    attrs: {
      fullscreen: true
    }
  }
});
```

### 完整示例：ElementPlus Dialog

```tsx
import { ElDialog } from "element-plus";
import { createAdapter } from "./adapter";

const elementPlusDialogRenderer = (contentVNode, { componentRef, visible, onMounted, config, consumer }) => {
  const handleClose = (done: () => void) => {
    done();
    consumer.value!.destroy();
  };

  return (
    <ElDialog
      ref={componentRef}
      modelValue={visible.value}
      beforeClose={handleClose}
      onVnodeMounted={onMounted}
      title={config.title}
      width={config.width}
      {...config.attrs}
    >
      {{
        default: () => contentVNode,
        ...config.slots,
      }}
    </ElDialog>
  );
};

// 基础对话框
export const useElementPlusDialog = createAdapter({
  renderer: elementPlusDialogRenderer,
  defaultConfig: {
    title: "提示",
    width: "500px"
  }
});

// 确认对话框
export const useElementPlusConfirm = createAdapter({
  renderer: elementPlusDialogRenderer,
  defaultConfig: {
    title: "确认",
    width: "400px",
    attrs: {
      closeOnClickModal: false,
      closeOnPressEscape: false
    }
  }
});

// 全屏对话框
export const useElementPlusFullscreenDialog = createAdapter({
  renderer: elementPlusDialogRenderer,
  defaultConfig: {
    title: "全屏对话框",
    attrs: {
      fullscreen: true
    }
  }
});
```

### 使用方式

```tsx
// 基础使用
const dialog = useElementPlusDialog();
const consumer = dialog(<div>对话框内容</div>);

// 带配置使用
const consumer2 = dialog(
  <div>确认删除内容</div>,
  {
    title: "删除确认",
    attrs: { type: "warning" }
  }
);

// 使用 Promise
dialog(<div>异步内容</div>)
  .promise
  .then(result => console.log('确认:', result))
  .catch(error => console.log('取消:', error));
```

## 建议

- **采用函数式设计**：更简洁、灵活且易于扩展
- **创建多个适配器变体**：为不同使用场景提供专门的适配器
- **简单需求直接使用 `createAdapter`**：大多数情况下这已经足够了
- **合理使用生命周期钩子**：在关键节点执行自定义逻辑

## 总结

函数式适配器系统带来了：

- 🚀 **更高的开发效率**：代码量减少 50%+
- 🎯 **更好的可维护性**：纯函数式设计，易于测试和调试
- 🔧 **更强的扩展性**：函数式设计，支持灵活的适配器组合
- 📦 **更小的打包体积**：Tree-shaking 友好
- 🎨 **更好的开发体验**：TypeScript 类型推导更准确
