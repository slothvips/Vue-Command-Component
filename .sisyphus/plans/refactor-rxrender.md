# Refactor `createAdapter` to Support Reactive Render Functions

## TL;DR

> **Quick Summary**: Modify `createAdapter` to accept a render function `() => VNode` directly as the first argument, eliminating the need for `RxRender`. Remove `RxRender` utility and update documentation.
>
> **Deliverables**:
>
> - Updated `packages/core/src/adapter.tsx`
> - Cleaned `packages/core/src/utils.ts`
> - Updated `packages/docs/components/reactive-component.vue`
> - Updated `packages/docs/example/advanced.md`
>
> **Estimated Effort**: Short
> **Parallel Execution**: NO - sequential
> **Critical Path**: Core changes -> Docs updates -> Verification

---

## Context

### Original Request

- Modify `packages/core/src/adapter.tsx` to accept `() => VNode`.
- Normalize argument into VNode (inline `RxRender` logic).
- Remove `RxRender` from utils.
- Verify and update usages.

### Interview Summary

**Key Discussions**:

- `RxRender` is used to make imperative components reactive to state changes.
- The goal is to support this natively in `dialog(fn)` instead of `dialog(RxRender(fn))`.

**Research Findings**:

- `RxRender` wraps a function in `h(defineComponent({ render: fn }))`.
- Usages found in `packages/docs`.
- `createAdapter` returns a function `commandComponent` which currently takes `contentVNode: VNode`.

### Metis Review

**Identified Gaps**:

- Need to ensure `h` is imported in `adapter.tsx`.
- Need to update typescript definition for `contentVNode`.

---

## Work Objectives

### Core Objective

Support `() => VNode` directly in imperative command calls for reactivity.

### Concrete Deliverables

- `packages/core/src/adapter.tsx`: Logic updated.
- `packages/core/src/utils.ts`: `RxRender` removed.
- Documentation reflects the new API.

### Definition of Done

- [ ] `pnpm --filter @vue-cmd/core build` passes.
- [ ] Docs code examples updated.

### Must Have

- Backward compatibility for passing `VNode` directly.

---

## Verification Strategy

### Test Decision

- **Infrastructure exists**: No automated tests for this UI logic.
- **User wants tests**: Manual verification via docs.
- **Approach**: Build check + Manual verification steps.

### Automated Verification Only (NO User Intervention)

**For Core Build**:

```bash
# Agent runs:
pnpm --filter @vue-cmd/core build
# Assert: Exit code 0
```

---

## Execution Strategy

### Parallel Execution Waves

Sequential execution recommended to ensure core stability before docs update.

### Agent Dispatch Summary

| Wave | Tasks | Recommended Agents           |
| ---- | ----- | ---------------------------- |
| 1    | 1, 2  | Build Agent (modifying core) |
| 2    | 3, 4  | Build Agent (updating docs)  |
| 3    | 5     | Build Agent (verification)   |

---

## TODOs

- [ ] 1. Modify `packages/core/src/adapter.tsx`

  **What to do**:
  - Add `h` to imports from "vue".
  - Update `commandComponent` signature: `contentVNode: VNode | (() => VNode)`.
  - Add normalization logic:
    ```typescript
    const finalContentVNode =
      typeof contentVNode === "function"
        ? h(defineComponent({ render: contentVNode }))
        : contentVNode;
    ```
  - Use `finalContentVNode` in `render(finalContentVNode, ...)` call.

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`typescript`]

  **References**:
  - `packages/core/src/adapter.tsx`
  - `packages/core/src/utils.ts` (for `RxRender` logic)

  **Verification**:
  - Run `pnpm --filter @vue-cmd/core build` to check for type errors.

- [ ] 2. Remove `RxRender` from `packages/core/src/utils.ts`

  **What to do**:
  - Delete `RxRender` export.

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **References**:
  - `packages/core/src/utils.ts`

- [ ] 3. Update `packages/docs/components/reactive-component.vue`

  **What to do**:
  - Remove `import { RxRender } from "@vue-cmd/core";`
  - Change `dialog(RxRender(() => ...))` to `dialog(() => ...)`

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **References**:
  - `packages/docs/components/reactive-component.vue`

- [ ] 4. Update `packages/docs/example/advanced.md`

  **What to do**:
  - Search for "RxRender".
  - Update text to explain that you can pass a function directly.
  - Remove "此时可通过`RxRender`包装渲染函数" text and replace with "此时可直接传入渲染函数".
  - Remove "其核心原理是将渲染函数封装为响应式组件" (or keep it but explain that the library handles it).

  **Recommended Agent Profile**:
  - **Category**: `writing`

  **References**:
  - `packages/docs/example/advanced.md`

- [ ] 5. Verify Build

  **What to do**:
  - Run `pnpm --filter @vue-cmd/core build`

  **Recommended Agent Profile**:
  - **Category**: `quick`

  **Success Criteria**:
  - Build success.
