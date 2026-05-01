# How Imperative Components Work

This chapter explains the technical implementation of imperative components and helps you understand the core mechanisms. You can use the library normally without reading this chapter, but understanding these principles helps when extending functionality or solving complex issues.

## Core Challenges

Implementing imperative components requires solving these key technical challenges:

- Component rendering and mount management
- Component visibility control
- Component nesting management
- Context inheritance
- Promise-based async flow support

The following sections use pseudocode to explain the solutions. The examples use JSX syntax. If your project does not configure JSX support, convert them to `h` function calls yourself.

## Component Rendering and Mounting

In a regular Vue application, component rendering and mounting are managed automatically by the framework. Imperative components need to control this process manually.

The core solution is to use Vue's `render` API to render and mount components. Compared with `createApp`, the `render` API is better suited for managing the lifecycle of a single component because it does not require creating a full application instance.

```jsx
import { render } from "vue";

// Create a virtual node
const vnode = <div>hello</div>;

// Render the node to the target mount point
render(vnode, document.body);
```

Unmounting a component is just as simple:

```jsx
// Pass null to unmount
render(null, document.body);
```

### Mount Point Strategy

The choice of mount point has an important impact on component behavior. By default, we use the parent node at the call site as the mount point, which preserves CSS inheritance and the original DOM hierarchy. Users can also customize the mount point, for example by specifying `document.body`.

## Component Visibility Control

Traditional declarative components use reactive variables to control visibility. Imperative components encapsulate this mechanism internally:

```jsx
// Usage example
const dialog = CmdDialog(<div />);
dialog.show();
dialog.hide();
```

To let internal components control visibility, we pass the controller to inner components through dependency injection:

```jsx
const dialog = CmdDialog({
  setup() {
    // Inject the controller
    const consumer = useConsumer();
    // Define the close method
    const close = () => consumer.destroyWithResolve("Operation succeeded");

    return () => {
      return <button onClick={close}>Close</button>;
    };
  },
});
```

`useConsumer` is a wrapper around `inject(CommandComponentConsumerInjectKey)` with type safety and boundary handling.

## Nesting Management

Nested dialogs are a common scenario and require a stack structure to manage component hierarchy. Each imperative component instance contains `stack` and `stackIndex` properties, representing the current nesting stack and the component's index in that stack.

```jsx
const dialog = CmdDialog(<div />);
// Access nesting information
console.log(dialog.stack); // nesting stack
console.log(dialog.stackIndex); // current index
```

## Context Inheritance

Imperative components need to inherit the calling environment's context, including provide/inject data and internationalization configuration. This is mainly implemented by collecting provide data from the current component tree and injecting it again into the new component.

The core implementation is the `getProvidesChain` function, which collects and passes context data.

## Promise-Based Async Flow Support

Promise support is a core advantage of imperative components. It turns component interaction into a Promise-based async flow:

```jsx
const dialog = CmdDialog({
  setup() {
    const consumer = useConsumer();
    return () => {
      return (
        <el-button onClick={() => consumer.destroyWithResolve("Operation succeeded")}>
          Confirm
        </el-button>
      );
    };
  },
});

// Wait for the user's operation result
dialog.promise.then((result) => {
  console.log(result); // 'Operation succeeded'
});
```

The implementation creates and returns a Promise when the component is created, then calls `resolve` or `reject` at the right time, such as when the user clicks the confirm button:

```js
function createCommandComponent() {
  return new Promise((resolve) => {
    const close = (result) => {
      // Destroy the component
      // ...
      resolve(result);
    };
    // Render the component and bind the close method
  });
}
```

## Summary

Imperative components wrap Vue's low-level rendering API and combine it with Promise-based flow control, providing a simpler and more efficient development model for specific scenarios. Understanding how they work helps you use and extend them more effectively.
