# What Is an Imperative Component?

## 1. **Imperative Component Concept**

An imperative component, sometimes also called a functional component in this context, is a special way to invoke a component. It lets developers control a component's display and lifecycle through function calls instead of traditional template declarations. This approach is especially useful for temporary UI elements such as dialogs, alerts, and confirmation boxes.

A typical imperative component call looks like this:

```jsx
// Imperative call
commandComponent(
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>,
);
```

With a simple function call, you can control the component's full lifecycle.

## 2. **Advantages of Imperative Components**

Compared with traditional declarative components, imperative components provide these advantages:

- **Smoother development flow**: reduce template code and make component invocation more direct
- **Less boilerplate**: avoid extra state management and repetitive code
- **Better intuition**: component invocation matches the user's interaction flow more closely

Declarative development is still the core idea of Vue and remains the right choice for most UI scenarios. Imperative components optimize specific cases, especially temporary UI element management.

## 3. **Design Motivation**

Although declarative development is the mainstream paradigm in modern UI frameworks, it can become verbose and fragmented in scenarios such as dialogs. This fragmentation becomes more obvious when a page contains multiple dialogs.

Opening a dialog is itself an explicit command-like action. Using an imperative call better matches how developers think about and use this interaction. This is the core motivation behind this library.
