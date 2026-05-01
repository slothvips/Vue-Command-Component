# AI 友好接入指南

如果你正在和 AI 协作生成接入代码，可以先把本页关键信息提供给 AI。本文不替代完整文档，而是帮助 AI 更稳定地生成符合本项目模式的代码。

## 这个项目适合让 AI 做什么

- Vue 3 命令式组件库。
- 典型用途是函数调用打开 Dialog、Drawer、Popup。
- 已适配 Element Plus、Naive UI、Vant。
- 常见目标是生成接入代码。
- 常见目标是封装业务弹窗。
- 常见目标是补充 Promise 交互流程。

## 接入前先告诉 AI 这些事实

- 本项目仅支持 Vue 3。
- `useDialog` / `useDrawer` 需要在 `setup` 顶部同步调用，因为内部依赖当前组件实例。
- 命令函数的第一个参数可以直接传 VNode，也可以传返回 VNode 的函数。
- 推荐使用 JSX 编写内容组件和调用代码。
- 如果项目未配置 JSX，可以使用 Vue 的 `h` 函数创建 VNode。
- 如果项目使用按需加载或自动导入，可能需要手动导入组件样式。例如：

```ts
import "element-plus/theme-chalk/el-dialog.css";
```

## 最小可运行示例

### JSX 写法

```tsx
import { defineComponent } from "vue";
import { useDialog } from "@vue-cmd/element-plus";

const Content = defineComponent({
  setup() {
    return () => <div>Hello Vue Command Component</div>;
  },
});

export default defineComponent({
  setup() {
    const dialog = useDialog();

    const openDialog = () => {
      dialog(<Content />, {
        title: "Hello",
        width: "420px",
      });
    };

    return () => <button onClick={openDialog}>打开弹窗</button>;
  },
});
```

### h 写法

```ts
import { defineComponent, h } from "vue";
import { useDialog } from "@vue-cmd/element-plus";

const Content = defineComponent({
  setup() {
    return () => h("div", "Hello Vue Command Component");
  },
});

export default defineComponent({
  setup() {
    const dialog = useDialog();

    const openDialog = () => {
      dialog(h(Content), {
        title: "Hello",
        width: "420px",
      });
    };

    return () => h("button", { onClick: openDialog }, "打开弹窗");
  },
});
```

## 真实业务示例

下面示例展示一个常见的 Promise 场景：点击“编辑用户”打开弹窗，弹窗内部确认时 resolve，取消时 reject，外部通过 `await` 获取结果。

```tsx
import { defineComponent, ref } from "vue";
import { useConsumer, useDialog } from "@vue-cmd/element-plus";

const UserFormDialog = defineComponent({
  props: {
    initialName: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const consumer = useConsumer();
    const name = ref(props.initialName);

    const confirm = () => {
      consumer.destroyWithResolve({ name: name.value });
    };

    const cancel = () => {
      consumer.destroyWithReject(new Error("cancelled"));
    };

    return () => (
      <div>
        <input v-model={name.value} placeholder="请输入用户名" />
        <div style="margin-top: 16px; display: flex; gap: 8px;">
          <button onClick={confirm}>确认</button>
          <button onClick={cancel}>取消</button>
        </div>
      </div>
    );
  },
});

export default defineComponent({
  setup() {
    const dialog = useDialog();

    const editUser = async () => {
      try {
        const result = await dialog(() => <UserFormDialog initialName="Alice" />, {
          title: "编辑用户",
          width: "520px",
        }).promise;

        console.log("用户已更新", result);
      } catch (error) {
        console.log("用户取消编辑", error);
      }
    };

    return () => <button onClick={editUser}>编辑用户</button>;
  },
});
```

## 推荐提问模板

```text
请基于 Vue 3 和 @vue-cmd/element-plus 生成一个基础 Dialog 接入示例。
要求：在 setup 顶部同步调用 useDialog；使用 JSX；定义一个 Content 组件；点击按钮时调用 dialog(<Content />, { title, width }) 打开弹窗；如果需要样式，请提醒我导入 element-plus/theme-chalk/el-dialog.css。
```

```text
请帮我生成一个带 Promise 流程的业务弹窗。
场景：点击“编辑用户”打开 Element Plus Dialog，弹窗内容包含用户名输入框；确认时在弹窗内部通过 useConsumer().destroyWithResolve({ name }) 返回数据；取消时 destroyWithReject(new Error("cancelled"))；外部使用 await dialog(() => <UserFormDialog initialName="Alice" />, { title: "编辑用户", width: "520px" }).promise，并用 try/catch 处理结果。
```

## 适配 / 二次封装提问模板

```text
请参考 @vue-cmd 现有适配模式，帮我为某个 Vue 3 UI 组件做命令式二次封装。
要求：保留 useDialog 这类调用方式；不要发明底层能力；组件原生属性和事件统一透传到 attrs；插槽通过 slots 透传；关闭但不确认的场景使用 consumer.destroy()；确认场景使用 destroyWithResolve；取消场景使用 destroyWithReject；代码风格尽量接近 @vue-cmd 现有适配器和文档示例。
```

## 延伸阅读

- [快速开始](./quick-start)
- [适配其他组件](./adapter)
- [常见问题](./faq)
