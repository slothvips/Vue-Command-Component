# 进阶用法

本章节将介绍命令式组件的一些高级特性和使用场景。

## Promise特性

Promise是使用命令式组件后获得的最大优势之一，它使我们与组件的通信方式转变为基于Promise的异步流程。以下通过典型案例展示其带来的便利：

### 案例一：表格行内编辑

<demo vue="../components/promise.vue"></demo>

在管理系统中，通过弹窗编辑表格行数据是常见需求。对比命令式与声明式实现方式，命令式组件在开发体验和代码简洁度上具有明显优势。

### 案例二：多步骤弹窗

某些场景下，需要在弹窗中执行多个连续步骤，例如：数据选择、内容编辑、信息确认等。利用Promise特性可以优雅地实现这类流程：

<demo vue="../components/promise2.vue"></demo>

### 案例三：整点花活儿(🤪)

命令组件其实不仅仅是用于弹窗这类场景,它也可以当做一个特殊的节点挂载管理器:
<demo vue="../components/flower.vue"></demo>

## 响应式组件

命令式组件存在一个固有限制：`DialogContent`组件的视图无法自动响应props数据变化。此时可通过`RxRender`包装渲染函数，将VNode生成延迟到Vue组件的渲染函数内部执行。其核心原理是将渲染函数封装为响应式组件，从而实现视图的动态更新。

<demo vue="../components/reactive-component.vue"></demo>

## 响应式配置

通常组件的展示形式相对固定，但在特定场景下，我们可能需要根据数据变化动态调整组件配置。实现方式非常简单：只需将配置项设计为返回配置对象的函数即可。

<demo vue="../components/reactive-config.vue"></demo>
