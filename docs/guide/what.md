# 什么是命令式组件?

### 1. **声明式组件（Declarative Components）**

- **描述 UI 结构**：使用 **JSX** 或者 **模板语法** 来描述组件的 UI 和状态，而不是直接操作 DOM。
- **数据驱动**：基于**状态（state）和属性（props）** 渲染 UI，开发者只需关注数据变化，框架（如 React、Vue）会自动更新 UI。
- **易于维护**：代码清晰，逻辑解耦，组件更易于复用。

### 2. **命令式组件（Imperatively Components）**

- **直接操作 DOM**：使用 **document.querySelector** 或 **ref** 获取 DOM 节点，并手动修改其属性、事件等。
- **需要手动管理状态**：开发者必须自己控制 UI 何时更新，避免状态不同步问题。
- **适用于某些 UI 交互需求**：如 Canvas 绘图、地图渲染、复杂动画等。

### 3. **尤大对命令式组件的看法**

关于尤大对命令式组件的讨论:[如何使用vue.js构造modal(弹窗)组件?](https://www.zhihu.com/question/35820643)

我觉得说得很有道理,但是实际开发中还是需要区分场景,弹窗这种组件太适合使用命令式了,我们不需要做太多的前置工作,只需要调用一个api就可以唤起一个弹窗,这实在是太酷了!

### 4. **伪代码展示**

多说无益,下边是一些伪代码,用来展示命令式对于弹窗这种场景的利好

声明式:
```jsx
<!-- 描述UI -->
<dialog :show="show" /> 
// 显示
show=true
// 隐藏
show=false
```

命令式:
```jsx
const o=openDialog()
// 显示
o.show()
// 隐藏
o.hide()
```
初看你会觉得好像也没带来什么方便之处,但是如果同时在一个页面中有多个弹窗,其实这样极大的减轻了我们的心知负担,我们既不用再关心控制弹窗显隐的变量,也不用再代码文件之间上蹿下跳的找到我们代码的插入点,一切逻辑都变得更整体.
不信?那么你再看下这个伪代码:

```jsx
<!-- 描述UI -->
<dialog :show="show" /> 
<dialog :show="show2" /> 
<dialog :show="show3" /> 
<dialog :show="show4" /> 
<dialog :show="show5" /> 
<dialog :show="show6" /> 
// 显示
show=true
// 隐藏
show=false

// 显示
show2=true
// 隐藏
show2=false

// ....
```

命令式:
```jsx
const o=openDialog()
// 显示
o.show()
// 隐藏
o.hide()

const o2=openDialog()
// 显示
o2.show()
// 隐藏
o2.hide()

const o3=openDialog()
// 显示
o3.show()
// 隐藏
o3.hide()
```

你可以明显看出来,所有弹窗相关的逻辑都被聚合在一起了,而不会上下翻飞.

还有甚者,如果你有多个嵌套层级的弹窗,那么数据的收集和通信将变得非常的繁琐!特别是弹窗之间存在数据依赖关系的时候,真的让人头疼.
但是在命令式弹窗中,这一切都变得简单.

#### 声明式
```jsx
<!-- 描述UI -->
<dialog :show="show" call={(d)=>saveData1(d)}>
  <dialog :show="show2" call={(d)=>saveData2(d)}>
    <dialog :show="show3" call={(d)=>saveData3(d)} /> 
  </dialog> 
</dialog> 
// 显示
show=true
// 隐藏
show=false

// 显示
show2=true
// 隐藏
show2=false

// ....
```
#### 命令式
```jsx
const o1=openDialog(call)
const o2=openDialog(call)
const o3=openDialog(call)
const o4=openDialog(call)
const o5=openDialog(call)
// ....
```
我们通过call就可以收集到完整数据,如果更进一步,搭上promise的便车,那么一切可以变得井然有序.

#### 便于代码的封装
#### 获得promise便利的异步弹窗
#### 嵌套弹窗之间的通信
