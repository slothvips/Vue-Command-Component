# Vue 3 Universal Imperative Dialog Solution

Frontend developers have long suffered from dialog development. The development experience of dialogs has always been poor, especially with issues like nested dialogs, state management, destruction and reconstruction, which are extremely frustrating. Therefore, I decided to implement a universal imperative dialog solution to address these pain points. This is a universal imperative dialog solution designed specifically for Vue 3. It provides a flexible and extensible way to manage and control dialogs in applications. Although it's called a dialog, it's not limited to dialogs; theoretically, any component can be adapted.

We won't compare the pros and cons of declarative dialogs and imperative dialogs here. If you've already explored imperative dialogs and come across this, you may have already experienced the tedium and pain of declarative dialog development firsthand. So why not try this library? It might bring you a different experience.

## Features

- Imperative API, dialog development becomes programmatic, liberating dialog productivity!
- Supports dialog nesting, chain management, and provides complete context support (state management, routing, internationalization, etc.).
- Flexible configuration, supports custom properties, slots, event handlers, etc.
- Ready to use out of the box, already implemented adaptations for Element Plus's Dialog component and Vant's Popup component, and can be extended to better fit your actual business needs.
- The core logic of imperative components is decoupled, allowing for adaptation to different UI library target components.

## Installation

```shell
npm i vue3-command-dialog
# or
pnpm i vue3-command-dialog
# or
yarn add vue3-command-dialog
```

## Online Example

You can view the online example (using Element Plus Dialog as an example) through the following link:

[Example](https://pandavips.github.io/Vue3-Command-Dialog/#/example/base)

## How to Adapt Your Own UI Library Components

In addition to the already adapted Element Plus Dialog component and Vant Popup component, you can also adapt your own UI library components. You can refer to the following steps:

You can refer to the implementation for element-plus and vantui in the example code. Here, we'll just discuss the core logic:

1. We need the CommandDialogProvider function to wrap our target component. Its main purpose is to inject the `Consumer` object into the wrapped component, so our internal dialog component can receive this object, which is our main means of controlling the dialog. This object has the following properties and methods:

```ts
/** Dialog consumer object, or can be understood as the dialog instance~ */
export interface IConsumer {
  /** Dialog promise */
  promise: Promise<any>;
  /** Dialog promise executor parameter resolve */
  resolve: (val?: any) => void;
  /** Dialog promise executor parameter reject */
  reject: (reason?: any) => void;
  /** Destroy dialog and resolve promise */
  destroyWithResolve: (val?: any) => void;
  /** Destroy dialog and reject promise */
  destroyWithReject: (reason?: any) => void;
  /** Destroy dialog without changing the promise state */
  destroy: (external?: boolean) => void;
  /** Reactive variable for dialog visibility. Although hide and show methods are provided and this property is not needed to control dialog display, it's still provided for convenience in some special scenarios, such as when you need to watch this property */
  visible: Ref<boolean>;
  /** Hide */
  hide: () => void;
  /** Show */
  show: () => void;
  /** Unsubscribe */
  off: (name: string | symbol, callback: Function) => void;
  /** Subscribe */
  on: (name: string | symbol, callback: Function) => void;
  /** Subscribe once */
  once: (name: string | symbol, callback: Function) => void;
  /** Publish */
  emit: (name: string | symbol, ...args: any) => void;
  /** Generally recommended to be assigned the UI library's dialog instance Ref */
  componentRef?: Ref<any> | undefined;
  /** HTML element where the dialog is mounted */
  container: HTMLDivElement;
  /** Dialog nesting stack */
  stack: IConsumer[];
  /** Current index in the dialog nesting stack */
  stackIndex: number;
}
```

You don't need to worry about the creation and destruction of this object, you just need to know that there is such an object and what properties and methods it has. You may also notice that this object has methods like `on`, `once`, `emit`, `off`, etc. The event functions registered through these APIs are strictly limited to the `consumer` object, so the event registration and publishing of different `consumer` objects do not affect each other. At the same time, you don't need to worry about event unbinding and other logic, these have been handled internally for you.

CommandDialogProvider also returns a `consumer` object for external use of the dialog. The consumer objects obtained internally and externally of the dialog are the same object, so they are strictly equal (===).

The internal dialog component obtains the `consumer` object by calling `getCommandDialogConsumer`. This function will return a consumer object, and it can only be called directly at the top of setup, not conditionally or asynchronously.

2. The rest is the introduction of parameter passing,

```ts
  // You can directly use provide for injection, it can be received internally the same way, but if you want to implement a more private scope, you can place the data to be injected under this object
  provideProps?: Record<string, any>;
  // Mount point, default is body
  appendTo?: string | HTMLElement;
  // Internally maintained reactive variable, you need to pass it in completely, don't unpack the reactive variable
  visible: Ref<boolean>;
```

The rest is not complicated. For more details, check the element-plus adaptation code: /src/components/ElementPlusDialog.tsx

## Some Suggestions

- It's strongly recommended that your project configures jsx! If you can tolerate using the `h` function all the time, you can ignore this suggestion.

- Although the consumer object implements a subscription pattern, you should avoid using it for internal and external communication. Its appearance is to enhance the components of the command dialog, and is not recommended for business development. So, unless absolutely necessary, please try to use `destroyWithReject` and `destroyWithResolve` to interact with data using the features of promises. Of course, you can also use very conventional means like `props` and `emit` for communication.

## TODO

- Adapt vantui's popup component
