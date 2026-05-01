# Imperative vs. Traditional Usage

This page compares imperative components with traditional declarative components through practical code examples, helping you understand the core advantages of imperative components.

## Core Differences Overview

| Feature | Traditional Declarative | Imperative Component | Advantage |
| ------- | ----------------------- | -------------------- | --------- |
| **Code volume** | Requires template + state + events | One function call | Significantly less code |
| **State management** | Manually manage `visible` state | Managed automatically | Zero boilerplate |
| **Async flow** | Complex event callbacks | Promise support | Clear control flow |
| **Nested handling** | Manual layer management | Automatic stack management | Smarter handling |

## Detailed Comparison Examples

### 1. Basic Dialog Invocation

#### Traditional Declarative Usage

<demo vue="../components/comparison-traditional-basic.vue"></demo>

#### Imperative Component Usage

<demo vue="../components/comparison-command-basic.vue"></demo>

**Comparison result:**

- Code volume: significantly reduced, with no dialog definition required in the template
- State management: no need to manually manage `visible` state
- Event handling: no need to write multiple event handlers
- Async flow: Promise makes the logic clearer

### 2. Table Row Editing Scenario

#### Traditional Declarative Usage

<demo vue="../components/comparison-traditional-table.vue"></demo>

#### Imperative Component Usage

<demo vue="../components/comparison-command-table.vue"></demo>

**Comparison result:**

- Code volume: greatly reduced, with no need to define multiple dialogs in the template
- State management: only business data is required, no UI state is needed
- Event handling: logic is centralized instead of scattered across event functions
- Async flow: Promise chains make the workflow easy to follow

### 3. Complex Nested Dialogs

Nested dialogs are common but complex. Traditional usage requires manually managing multiple dialog states and layer relationships, while imperative components handle this complexity automatically.

<demo vue="../components/nested.vue"></demo>

**Comparison result:**

- Code volume: greatly reduced, with no need to predefine every dialog in the template
- State management: no need to manually manage multiple dialog states
- Layer management: automatically handles z-index and stack relationships
- Close logic: cascading close behavior is handled automatically

### 4. Async Workflow Comparison

Multi-step async workflows are common in business development. Traditional usage often leads to complex state management and callback handling, while imperative components turn the workflow into a clear Promise chain.

#### Traditional Declarative Usage

<demo vue="../components/comparison-traditional-workflow.vue"></demo>

#### Imperative Component Usage

<demo vue="../components/comparison-command-workflow.vue"></demo>

**Comparison result:**

- Async flow: callback-heavy logic becomes a clear Promise chain
- Error handling: unified `try-catch` instead of scattered error handling
- Data passing: pass data directly through function calls without intermediate state
- Flow control: linear code structure that is easier to understand and maintain

### 5. Multiple Dialog State Management Comparison

When a page needs to manage several different types of dialogs, traditional usage requires separate state for each dialog. Imperative components can create dialogs on demand and destroy them after use.

#### Traditional Declarative Usage

<demo vue="../components/comparison-traditional-multiple.vue"></demo>

#### Imperative Component Usage

<demo vue="../components/comparison-command-multiple.vue"></demo>

**Comparison result:**

- Template complexity: no need to predefine all dialog components
- State management: no need to maintain `visible` state for every dialog
- Extensibility: adding a new dialog does not require changing the template
- Memory usage: create on demand and destroy after use

## Core Advantages Summary

### 1. **Improved Development Efficiency**

- Eliminate tedious state management and event handling
- Focus on business logic instead of infrastructure code
- Less code means fewer bugs and easier maintenance

### 2. **Improved Code Quality**

- Related logic is centralized instead of scattered across templates and scripts
- Code flow better matches how people reason about interactions
- Complete TypeScript support reduces runtime errors

### 3. **Better Developer Experience**

- No need to think about state management and lifecycle details
- Promise chaining makes error handling clearer
- Component invocation is more flexible and easier to refactor

## Suitable Scenarios

Imperative components are especially suitable for:

- **Dialog-like components**: Dialog, Modal, Drawer, and similar components
- **Confirmation interactions**: delete confirmation, operation confirmation, and similar flows
- **Form editing**: inline editing, quick editing, and similar flows
- **Multi-step workflows**: wizards, step forms, and similar flows
- **Temporary UI**: alerts, notifications, and similar UI elements

Traditional declarative usage is still suitable for:

- **Main page content**: lists, tables, cards, and similar content
- **Static display components**: headers, sidebars, footers, and similar components
- **Complex stateful components**: components that require complex state management

As the comparison shows, imperative components can significantly improve development efficiency and code quality in specific scenarios, making them a powerful complement to traditional declarative development.
