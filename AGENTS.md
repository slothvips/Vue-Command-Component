# Agentic Coding Guidelines for Vue-Command-Component

## 1. Project Overview

**Vue Command Component** is a monorepo library enabling imperative usage of Vue components (Dialogs, Drawers) without template-based state management. It uses a **Core + Adapter** architecture.

- **Core Logic** (`packages/core`): Manages mounting/unmounting, context inheritance, and Promise resolution.
- **Adapters** (`packages/element-plus`, etc.): UI library wrappers (e.g., Element Plus, Naive UI) compatible with the command pattern.
- **Hooks** (`packages/hooks`): Shared composables.
- **Docs** (`packages/docs`): VitePress documentation and playground for manual testing.

## 2. Environment & Toolchain

- **Runtime**: Node.js >= 16
- **Package Manager**: `pnpm` >= 8 (**Strictly required** - do not use npm/yarn)
- **Language**: TypeScript 5.5+
- **Framework**: Vue 3.5+
- **Build Tool**: `tsdown` (for packages), `vite` (for docs)

## 3. Development Commands

### Setup & Build

- **Install Dependencies**:
  ```bash
  pnpm install
  ```
- **Build All Packages**:
  ```bash
  pnpm build
  ```
- **Build Specific Package**:
  ```bash
  pnpm --filter @vue-cmd/core build
  ```

### Development & Verification

- **Dev Mode (Watch All)**:

  ```bash
  pnpm dev
  ```

  _Use this when making changes to core or adapters to auto-rebuild._

- **Run Documentation / Playground**:
  ```bash
  pnpm doc:dev
  ```
  _Starts server at http://localhost:3000. Use this for manual verification._

### Formatting

- **Format Code** (Prettier):
  ```bash
  pnpm format
  ```
  _Always run this before committing._

### Testing Strategy

**CRITICAL**: This project relies on **Manual Verification** in the documentation site.

1.  Start dev mode: `pnpm dev` (in one terminal)
2.  Start docs: `pnpm doc:dev` (in another terminal)
3.  Modify code in `packages/*`.
4.  Verify behavior in the relevant documentation example.
5.  **No automated unit tests** (`*.test.ts`) exist currently.

## 4. Code Style & Conventions

### TypeScript & Naming

- **Strict Typing**: Avoid `any`. Use `unknown` or specific types.
- **Interfaces**: **MUST** use `I` prefix (Hungarian notation) for interfaces (e.g., `IConsumer`, `ICoreConfig`).
- **File Naming**: `kebab-case` (e.g., `use-dialog.ts`, `command-modal.vue`).
- **Component Naming**: `PascalCase` (e.g., `dialog`).
- **Composable Naming**: `camelCase`, prefixed with `use` (e.g., `useConsumer`).

### Vue Patterns

- **Composition API**: exclusively used.
- **JSX/TSX**: Heavily used in `packages/core` and adapters for render functions.
  ```tsx
  // Example pattern in adapters
  return (
    <ElDialog v-model={visible.value}>
      {{ default: () => contentVNode }}
    </ElDialog>
  );
  ```
- **Injection Keys**: Define `InjectionKey<T>` symbols in `type.ts` or relevant files.

### Comments & Language

- **JSDoc**: Use JSDoc `/** ... */` for exported functions and types.
- **Language**: Existing comments are mixed (English/Chinese). **Prefer English** for new documentation, but **Chinese** is acceptable for inline logic comments if consistent with surrounding code.

### Error Handling

- **Validation**: Throw errors for invalid usage (e.g., missing Vue version).
- **Promises**:
  - Use `PromiseWithResolvers` utility.
  - Reject promises with meaningful reasons.
  - Ensure cleanup (`destroy()`) happens on both resolve and reject.

## 5. Architecture & Core Concepts

### Core Logic (`packages/core`)

- **`IConsumer`**: The interface returned to the user to control the component (show/hide/destroy).
- **`commandProviderWithRender`**: The heart of the library. It creates a virtual parent to inherit context (`provides`) and renders the component to a container.
- **Context Inheritance**: Critical feature. Ensures `provide/inject` works across the imperative boundary.

### Adapter Pattern (`packages/element-plus`, etc.)

- **Goal**: Wrap a UI library component to work with `IConsumer`.
- **Implementation**:
  1.  Define a render function that binds `visible`, `attrs`, and events.
  2.  Use `createAdapter` (if available) or implement the factory function.
  3.  Handle `close`/`closed` events to trigger `consumer.destroy()`.

## 6. Git & Workflow

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `chore`: Maintenance/Build

### Workflow Rules

1.  **Branch**: Feature branches from `main`.
2.  **Verify**: **MANDATORY** manual check in `pnpm doc:dev` before PR.
3.  **Format**: Run `pnpm format`.
4.  **Lint**: Ensure no TS errors (run `pnpm build` to check types).

## 7. Common Pitfalls

- **Missing Rebuild**: `packages/docs` consumes built files from `packages/*/dist`. You **MUST** run `pnpm dev` or `pnpm build` for changes to reflect in docs.
- **Context Loss**: If `provide/inject` fails, check `getProvidesChain` in core.
- **Style Isolation**: When using `fragment: true`, ensure styles don't break.

## 8. File Structure Reference

```text
packages/
├── core/
│   ├── src/
│   │   ├── core.tsx       # Main logic
│   │   ├── type.ts        # Interfaces (IConsumer, etc.)
│   │   └── index.ts       # Public API
├── element-plus/          # Adapter example
│   ├── src/
│   │   ├── dialog.tsx     # Dialog adapter
│   │   └── index.ts
└── docs/                  # VitePress site
```
