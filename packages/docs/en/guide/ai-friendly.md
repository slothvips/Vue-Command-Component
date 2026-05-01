# AI-Friendly Integration Guide

If you are collaborating with AI to generate integration code, provide the key information on this page first. This page does not replace the full documentation; it helps AI generate code that follows this project's patterns more reliably.

## What This Project Is Suitable for AI-Assisted Work

- A Vue 3 imperative component library.
- Typical usage is opening Dialog, Drawer, or Popup components through function calls.
- Built-in adapters are available for Element Plus, Naive UI, and Vant.
- A common goal is generating integration code.
- A common goal is wrapping business dialogs.
- A common goal is adding Promise-based interaction flows.

## Facts to Tell AI Before Integration

- This project only supports Vue 3.
- `useDialog` / `useDrawer` must be called synchronously at the top of `setup`, because they depend on the current component instance internally.
- The first argument of a command function can be either a VNode or a function that returns a VNode.
- JSX is recommended for content components and invocation code.
- If the project does not configure JSX, use Vue's `h` function to create VNodes.
- If the project uses on-demand imports or auto imports, component styles may need to be imported manually. For example:

```ts
import "element-plus/theme-chalk/el-dialog.css";
```

## Minimal Runnable Example

### JSX Usage

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

    return () => <button onClick={openDialog}>Open dialog</button>;
  },
});
```

### `h` Usage

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

    return () => h("button", { onClick: openDialog }, "Open dialog");
  },
});
```

## Real Business Example

The following example shows a common Promise scenario: click "Edit user" to open a dialog, resolve when the dialog confirms, reject when it cancels, and read the result outside with `await`.

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
        <input v-model={name.value} placeholder="Please enter a username" />
        <div style="margin-top: 16px; display: flex; gap: 8px;">
          <button onClick={confirm}>Confirm</button>
          <button onClick={cancel}>Cancel</button>
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
        const result = await dialog(
          () => <UserFormDialog initialName="Alice" />,
          {
            title: "Edit user",
            width: "520px",
          },
        ).promise;

        console.log("User updated", result);
      } catch (error) {
        console.log("User canceled editing", error);
      }
    };

    return () => <button onClick={editUser}>Edit user</button>;
  },
});
```

## Recommended Prompt Templates

```text
Generate a basic Dialog integration example based on Vue 3 and @vue-cmd/element-plus.
Requirements: call useDialog synchronously at the top of setup; use JSX; define a Content component; when a button is clicked, call dialog(<Content />, { title, width }) to open the dialog; if styles are required, remind me to import element-plus/theme-chalk/el-dialog.css.
```

```text
Help me generate a business dialog with a Promise flow.
Scenario: clicking "Edit user" opens an Element Plus Dialog. The dialog content contains a username input. On confirm, call useConsumer().destroyWithResolve({ name }) inside the dialog to return data. On cancel, call destroyWithReject(new Error("cancelled")). Outside, use await dialog(() => <UserFormDialog initialName="Alice" />, { title: "Edit user", width: "520px" }).promise and handle the result with try/catch.
```

## Adapter / Secondary Wrapper Prompt Template

```text
Refer to the existing @vue-cmd adapter pattern and help me create an imperative wrapper for a Vue 3 UI component.
Requirements: keep the useDialog-style invocation; do not invent lower-level capabilities; pass native component props and events through attrs; use destroyWithResolve for confirm scenarios; use destroyWithReject for cancel or reject scenarios; use consumer.destroy() for Dismiss scenarios such as close icons, overlays, or ESC where the user did not explicitly confirm or reject; keep the code style close to existing @vue-cmd adapters and documentation examples.
```

## Further Reading

- [Quick Start](./quick-start)
- [Adapting Other Components](./adapter)
- [FAQ](./faq)
