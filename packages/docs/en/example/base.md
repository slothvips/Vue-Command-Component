# Basic Usage

This page shows several common usage patterns.

Dialogs are the most typical use case for imperative components, so the examples use the `dialog` component from `element-plus`. These examples can help you understand how to use other components in the same way.

To use the `dialog` component from `element-plus`, install the `@vue-cmd/element-plus` package.

```bash
# npm
npm install @vue-cmd/element-plus element-plus

# pnpm
pnpm add @vue-cmd/element-plus element-plus

# yarn
yarn add @vue-cmd/element-plus element-plus
```

## Appetizer

### DialogContent Preview

The examples use the dialog content component `DialogContent` multiple times. This is what it looks like:

::: warning Do not interact with it yet. We have not really started; this component needs to work together with an imperative component, so clicking the button below will not do anything.

Also, `import { useConsumer } from "@vue-cmd/core";` is used here to make the demos work across component libraries. In real usage, import it from the specific package you are using, for example `import { useConsumer } from "@vue-cmd/element-plus"`.
:::

<demo vue="../components/shared/DialogContent.vue" />

### The consumer Object

`consumer` is an important object. It is the bridge for communication between the inside and outside of a command component. It exposes as many potentially useful properties and methods as possible. Inside a dialog, use `useConsumer` to get it. Outside a dialog, call the command function created by `useDialog` to get it. They are the same object, so you will find that they are strictly equal.

```ts
// Outside
const dialog = useDialog();
const consumer = dialog(<DialogContent />);

// Inside
const consumer2 = useConsumer();

console.log(consumer === consumer2); // true
```

With this, both the inside and outside have the ability to control the imperative component.

The shape of `consumer` is:

```ts
export interface IConsumer {
  /** Component instance metadata */
  meta?: Meta;
  /** Reactive visibility state. Although hide and show are provided, this is still exposed for special scenarios such as watching visibility changes. */
  visible: Ref<boolean>;
  /** Hide */
  hide: () => void;
  /** Show */
  show: () => void;
  /** Destroy without advancing the promise state */
  destroy: (external?: boolean) => void;
  /** Promise */
  promise: Promise<unknown>;
  /** Promise executor resolve */
  resolve: (val?: unknown) => void;
  /** Promise executor reject */
  reject: (reason?: unknown) => void;
  /** Destroy and resolve the promise */
  destroyWithResolve: (val?: unknown) => void;
  /** Destroy and reject the promise */
  destroyWithReject: (reason?: unknown) => void;
  /** Unsubscribe */
  off: (name: string | symbol, callback: (...args: unknown[]) => void) => void;
  /** Subscribe */
  on: (
    name: string | symbol,
    callback: (...args: unknown[]) => void,
    config?: IOnConfig,
  ) => void;
  /** Subscribe once */
  once: (name: string | symbol, callback: (...args: unknown[]) => void) => void;
  /** Emit */
  emit: (name: string | symbol, ...args: unknown[]) => void;
  /** UI library component instance ref */
  componentRef?: Ref<any>;
  /** Mounted HTML container element */
  container: HTMLDivElement;
  /** Component nesting stack */
  stack: IConsumer[];
  /** Current index in the component nesting stack */
  stackIndex: number;
  /** Mounted */
  mounted: boolean;
  /** Destroyed */
  destroyed: boolean;
}
```

Several important properties are introduced below. For the rest, refer to the type definitions.

- `meta` is similar to the `meta` property in `vue-router` and stores component-related information.
- `visible` is a reactive boolean that indicates whether the component is visible. You can even control the component directly through this property instead of calling `show` or `hide`.
- `hide` hides the component when you need to control visibility.
- `show` shows the component when you need to control visibility.
- `container` is the container element.
- `stack` is the component nesting stack. It stores all currently nested component instances.
- `stackIndex` is the current index in the component nesting stack.
- `componentRef` is a reactive object that represents the native component instance. You can use it to access properties exposed by the native component, but when adapting a native component, you must assign the instance to it for this to work correctly.

::: danger Note
The Consumer object includes an event system, but it is not recommended for business logic. This system is mainly used for enhancing and wrapping imperative components and may change in future versions.
:::

## Creation and Destruction

Now let's introduce the concrete usage of imperative components.

Dialog invocation and destruction mainly use `destroy`, `destroyWithResolve`, and `destroyWithReject`.

`destroyWithResolve` and `destroyWithReject` advance the promise state to resolved or rejected, while `destroy` only destroys the dialog without advancing the promise state. If you are concerned about whether a Promise that never reaches a terminal state causes memory leaks, see this article: [Does a Promise that never completes cause a memory leak?](https://juejin.cn/post/7419297143788470282?searchId=20250502235657363591F19D1773229FA7).

::: info Tips
The first argument of `dialog` supports two forms:

- Pass a VNode directly, which is concise and powerful.

```tsx
const dialog = useDialog();
dialog(<DialogContent />, {
  // dialog(<DialogContent />, {
  title: "hello world",
  width: "90%",
});
```

- Pass a function that returns a VNode. Use this when you need reactive props or run into special cases.

```tsx
const dialog = useDialog();
dialog(() => <DialogContent />, {
  // dialog(<DialogContent />, {
  title: "hello world",
  width: "90%",
});
```

:::

<demo vue="../components/base.vue"></demo>

## Show and Hide

`hide` only hides the component and does not actually destroy it. Some component close events are too limited to support this feature. `element-plus` supports it because we found the right timing.

<demo vue="../components/showhide.vue"></demo>

## Nesting

Start your journey into infinitely nested dialogs.

<demo vue="../components/nested.vue"></demo>

## Native Component Features

All native component props, events, and methods are supported. Put props and events into `attrs`; in theory, this is fully compatible with all native component props and events.

<demo vue="../components/native-attributes.vue"></demo>

## Native Component Slots

All native component slots are supported, including named slots and scoped slots.

<demo vue="../components/native-slots.vue"></demo>

## Component Ref

Pass a function that returns a VNode.

<demo vue="../components/component-ref.vue"></demo>

## Communication

You can communicate with the component as usual through traditional `emit` and one-way data flow.

In the next chapter, however, you will see a more elegant communication method: Promise-based dialogs.

Open the dialog and emit an event. It is not as elegant as the Promise approach, but it can keep sending messages to the outside, while a Promise resolves only once.

<demo vue="../components/communication.vue"></demo>

## provide and inject

This works the same way as Vue's `provide` and `inject`. You can also use `provideProps` to implement private injection, which limits the injected values to the command component and prevents components outside it from being polluted.

Usage is simple.

```ts
const dialog = useDialog();
dialog(<div>1</div>, {
  provideProps: {
    a: 1,
    b: 2,
  },
});
```

## el-drawer

<demo vue="../components/el-drawer.vue"></demo>

## Props Reference

For more props, refer to:
[element-plus dialog documentation](https://element-plus.org/en-US/component/dialog.html#api).
[element-plus drawer documentation](https://element-plus.org/en-US/component/drawer.html#api).

Place props and events from the official documentation into `attrs`.

We lift `title` and `width/size` to the top level because they are used so often, saving one layer of `attrs`. If these props are also present in `attrs`, they will be overridden.

```ts
const dialog = useDialog();
dialog(<DialogContent />, {
  title: "Title",
  width: "80%",
  attrs: {
    // If these props exist in attrs, they will be overridden
    title: "Title",
    width: "80%",
    // Event
    onXX: () => {},
  },
});
```

You can easily wrap this again and lift your frequently used props to the top-level object. Here is a simple example:

```ts
export const useDialogExample = () => {
  const dialog = useDialog();
  return (contentVnode, config: YourConfigInterface) => {
    return dialog(contentVnode, {
      attrs: {
        // Your frequently used props
        title: config?.title,
        width: config?.width,
        draggable: config?.draggable,
        fullscreen: config?.fullscreen,
      },
      ...config,
    });
  };
};
```
