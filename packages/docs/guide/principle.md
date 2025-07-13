# 命令式组件的工作原理

本章节介绍命令式组件的技术实现原理，帮助您深入理解核心机制。即使不阅读本节内容，也不会影响正常使用，但了解这些原理有助于进行功能扩展或解决复杂问题。

## 核心挑战

实现命令式组件需要解决以下关键技术挑战：

- 组件渲染与挂载管理
- 组件显隐状态控制
- 组件嵌套关系处理
- 上下文环境继承
- Promise异步流程支持

以下使用伪代码解析各项挑战的解决方案。示例代码采用JSX语法，若项目未配置JSX支持，请自行转换为`h`函数调用形式。

## 组件渲染与挂载

在常规Vue应用中，组件的渲染和挂载由框架自动管理。而命令式组件需要手动控制这一过程。

核心方案是利用Vue提供的`render`API进行组件的渲染与挂载。相比`createApp`，`render`API更适合单组件的生命周期管理，无需创建完整应用实例。

```jsx
import { render } from "vue";

// 创建虚拟节点
const vnode = <div>hello</div>;

// 将节点渲染到指定挂载点
render(vnode, document.body);
```

组件的卸载同样简单：

```jsx
// 传入null即可卸载
render(null, document.body);
```

### 挂载点策略

挂载点的选择对组件行为有重要影响。默认情况下，我们选择组件调用处的父级节点作为挂载点，这样可以保持CSS样式继承等原有DOM层级关系。用户也可以自定义挂载点，例如指定为`document.body`。

## 组件显隐控制

传统声明式组件通过响应式变量控制显隐，命令式组件将这一机制封装到内部：

```jsx
// 使用示例
const dialog = CmdDialog(<div />);
dialog.show();
dialog.hide();
```

为支持组件内部控制显隐，我们通过依赖注入将控制器传递给内部组件：

```jsx
const dialog = CmdDialog({
  setup() {
    // 注入控制器
    const consumer = useConsumer();
    // 定义关闭方法
    const close = () => consumer.destroyWithResolve("操作成功");

    return () => {
      return <button onClick={close}>关闭</button>;
    };
  },
});
```

`useConsumer`实际上是对`inject(CommandComponentConsumerInjectKey)`的封装，增加了类型安全和边界处理。

## 嵌套管理

弹窗嵌套是常见场景，需要一个栈结构来管理组件层级关系。每个命令式组件实例都包含`stack`和`stackIndex`属性，分别表示当前嵌套堆栈和组件在堆栈中的位置索引。

```jsx
const dialog = CmdDialog(<div />);
// 访问嵌套信息
console.log(dialog.stack); // 嵌套堆栈
console.log(dialog.stackIndex); // 当前索引
```

## 上下文环境继承

命令式组件需要继承调用环境的上下文，包括provide/inject、国际化配置等。这主要通过收集当前组件树上的provide数据并在新组件中重新注入实现。

核心实现在`getProvidesChain`函数，它负责收集并传递上下文数据。

## Promise异步流程支持

Promise支持是命令式组件的核心优势，它将组件交互模式转变为基于Promise的异步流程：

```jsx
const dialog = CmdDialog({
  setup() {
    const consumer = useConsumer();
    return () => {
      return (
        <el-button onClick={() => consumer.destroyWithResolve("操作成功")}>
          确认
        </el-button>
      );
    };
  },
});

// 等待用户操作结果
dialog.promise.then((result) => {
  console.log(result); // '操作成功'
});
```

实现原理是在组件创建时返回一个Promise对象，并在适当时机（如用户点击确认按钮）调用resolve或reject：

```js
function createCommandComponent() {
  return new Promise((resolve) => {
    const close = (result) => {
      // 销毁组件
      // ...
      resolve(result);
    };
    // 渲染组件，绑定close方法
  });
}
```

## 总结

命令式组件通过封装Vue底层渲染API，结合Promise流程控制，为特定场景提供了更简洁高效的开发方式。深入理解其工作原理有助于更好地使用和扩展其功能。
