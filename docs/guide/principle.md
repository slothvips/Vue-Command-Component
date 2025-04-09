# 让我们了解下命令式组件的工作原理吧

我们来了解下它的工作原理吧,这块属于拓展内容,即使你进行阅读了解,也丝毫不影响你愉快的使用;但是阅读后,可能有助于你进行拓展或者问题排查.

## 总览

实现一个命令式组件,需要攻克以下几个难点:
- 组件的渲染和挂载
- 组件的显隐控制
- 嵌套管理
- 完整的上下文支持
- promise支持

我们一个一个来解决吧,以下所有代码将使用jsx编写,如果你没有为你的项目配置jsx支持,自己颅内转换哦🤣.

## 组件的渲染和挂载

在我们日常的开发中,我们实际上只需要声明一个组件,而从创建VNode以及进行挂载渲染这些工作是由框架来完成的,但是在命令式组件中需要我们手动来实现.

我们只需要调用一个vue的api`render`就可以创建一个组件的dom节点,.在一些其他地方我看到有人使用的是`createApp`来创建,个人感觉是不太合理的,因为`createApp`创建的是一个完整的应用,而我们的组件只是应用中的一个部分,所以使用`render`来创建和销毁组件是最合理的.

而从`render`的参数来看,他需要一个VNode和挂载点.

它的使用方法:
```jsx
import { render } from "vue";

const vnode = <div>hello</div>

render(vnode, document.body);
```
如果你有跟着进行尝试,你可能会发现页面上没有任何变化,这是当然的,因为他没有任何样式😄,但你进行审查元素,你会实际看到一个div被挂载到了body上.

同理第三方组件库的组件,我们也可以使用这种方式来挂载,比如:
```jsx
import { render } from "vue";
import { ElDialog } from "element-plus";

render(<ElDialog>
    <div>hello</div>
</ElDialog>, document.body);
```

就这样,我们就解决了组件的渲染和挂载.

卸载工作也很简单,直接使用`render(null, document.body)`就可以卸载组件.

关于挂载点,我们直接默认一个挂载点,然后让实际使用地方也可以自定义挂载点,这样即可实现挂载点的最大灵活性.


## 组件的显隐控制

传统的声明式组件是通用一个响应式变量进行显示控制的,我们需要将这个变量换移到内部来维护,然后通过某者方式暴露一个方法给用户来进行控制.看了下边的伪代码,你可能会更清晰:

```jsx
const dialog=CmdDialog(<div />)

dialog.show()
dialog.hide()
```
这样我们在使用弹窗的地方就不需要维护变量,甚至可以无感这个变量的存在.但实际上,这个库还是向外部暴露了这个变量,方便用户进行一些其他操作,比如监听等.

那么弹窗内部应该如果来控制显隐呢?其实很简单,我们通过provide的方式将弹窗实例注入到弹窗组件内就ok了.
```jsx
const dialog=CmdDialog({
    setup(){
        const consumer=getConsumer()
        const close=()=>  consumer.destroyWithResolve('it\'s ok')
        return ()=>{
            return <button onClick={close}>关闭</button>
        }
    }
})
```
getConsumer函数实际是我们的封装,他的本质功能等同于inject(CommandComponentConsumerInjectKey),我们只是对他做了一些边界处理.

## 嵌套嵌套管理

弹窗的嵌套在开发中是经常遇到的,在一些复杂的业务中,甚至无限套娃的弹窗也是存在的.我们只需要维护一个栈,就可以实现嵌套弹窗的控制.在这个库中,我们在弹窗的实例中提供了`stack`和`stackIndex`属性,分别表示当前弹窗的嵌套堆栈以及当前弹窗在嵌套堆栈中的索引.
```jsx
const dialog=CmdDialog(<div />)
dialog.stack
dialog.stackIndex
```
## 完整的上下文支持

这个在实现中是最令人沮丧的,还好最终还是完成了.我们的弹窗中需要的不仅仅是祖先组件的注入的属性,还需要获取到使用命令式组件的地方的上下文,以及嵌套弹窗的上下文.

这一块其实没什么好说的,主要是去收集上下文,然后进行传递.所以如果你对vue的节点的数据结构有所了解,这一块实际上是很容易理解的.由于没有过多的技术含量,所以就不进行赘述了.

`getProvidesChain`,从这个函数出发,你很快就可以理解这一块的实现.


## promise支持

这个算是我们在使用命令式组件后,所带来的一个额外福利.可以看下边的代码:

```jsx
const dialog=CmdDialog({
    setup(){
        const coumser=getConsumer()
        return ()=>{
            return <el-button onClick={
                ()=>coumser.destroyWithResolve('it\'s ok')
            }>关闭</el-button>
        }
    }
})

dialog.promise.then((res)=>{
    console.log(res)
})
```
在实际开发中多多利用这个特性,你会发现生活都变美好了.

## 总结

以上,就是命令式组件的实现原理了.实际上,还有很多细节没有提到,但是都是一些比较边缘的细节,不提出来说明也无妨.

如果想要了解更多细节,可以查看源码,或者联系我进行交流.

## 最后

如果觉得对你有帮助,可以点个star,或者分享给你的朋友,谢谢.


