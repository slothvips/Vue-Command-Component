# 适配其他组件

尽管已经提供一些开箱即用的组件，但很可能没有具体到你正在使用的组件。

接下来我将告诉你怎么将自己正在使用的组件适配为命名式组件。首先我们要明白我们适配的本质工作,其最终目的为了和我们`core`层的一些逻辑进行互动和关联,比如告知`core`层应该在什么时候执行销毁清理逻辑,以及一些其他功能的互动,有了这个前提我们才能更好的理解我们在干什么.

## 适配器 `createAdapter`

综上所述,我们其实可以屏蔽一些通用的逻辑处理,让适配工作变得更简单,最终让我们只用适配组件之间差异的地方即可.而`createAdapter`函数就是用来实现这个目的的.

### 基础用法

我将向你介绍`createAdapter`这个函数,他用来创建我们的适配器,通过他我们就可以快速适配自己的命令式组件.

实际上他是对`CommandProviderWithRender`函数的封装,尽量屏蔽通用的逻辑,让你专注于适配自己的组件.

它需要两个参数:

- 一个是渲染器,用来决定如何渲染组件,以及如何和`core`层的逻辑进行关联(主要是销毁逻辑).
- 一个是初始配置,这个很好理解,你可以将其认为是组件属性的默认值,你后续有很多地方可以对其进行改写和覆盖.

相信你能很快理解这个例子,它非常简单,你只需要提供一个渲染函数,以及一个初始配置即可.

其中我们所有的适配工作都在 render 中实现即可,总结一下我们具体需要做哪些事情:

1. 首先是一定要返回一个目标组件的渲染 vnode 的,不管你是通过 jsx,还是 h 函数.
2. 将参数 visible 绑定到组件上,用来控制显隐,一般建议单向绑定,由我们自己来完全控制.
3. 传递插槽,属性,事件等,除了自己定义的一些便捷属性之外,一般我们会直接展开`{...config.attrs}`到组件上.
4. 将参数`componentRef`绑定到组件上,然后利用`onVnodeMounted`的回调执行`onMounted`,它当前的目的是为了设置组件的 ref 引用,让边调用组件上暴露的属性和方法.
5. 和 `core` 层关联销毁清理逻辑,比如在组件关闭的回调函数里`consumer.value!.destroy()`;

听上去需要做很多工作,但实际上我们可以很简单的完成适配,下边是一个简单的例子,它将一个`MyComponent`组件适配为命名式组件:

```tsx
import { createAdapter } from '@vue-cmd/core'
const myComponentRender = (contentVNode, { componentRef, visible, onMounted, config, consumer }) => {
  return (
    <MyComponent
    {/* 对应2. 单向绑定 */}
    modelValue={visible.value}
    {/* 对应4. 设置 ref 引用 */}
    ref={componentRef} onVnodeMounted={onMounted}
    {/* 对应3. 传递属性 */}
    {...config.attrs}
    {/* 对应5. 关联销毁清理逻辑 */}
    onClose={() => consumer.value!.destroy()}>
      {{
        default: () => contentVNode,
        {/* 对应3. 传递插槽 */}
        ...config.slots,
      }}
    </MyComponent>
  )
}

export const useMyComponent = createAdapter({
  render: myComponentRender,
  // 这里可以是一个空对象
  defaultConfig: {
    title: '基础适配器',
    width: '400px',
    // 这里可以设置一些组件的元数据,方便你后续使用
    meta: {
      name: 'my-component',
    },
  },
})
```

实际体验之后,你会发现适配工作极其简单高效.😊

### 配置转换器 `configTransformer`

在最终渲染前对配置进行预处理,你可以对配置进行任意的修改,方便你进行一些控制.它的作用是为了让你有地方可以统一的拦截和控制配置.

```tsx
import { createAdapter } from '@vue-cmd/core'

const myComponentRender = (contentVNode, { componentRef, visible, onMounted, config, consumer }) => {
  return (
    <MyComponent ref={componentRef} onVnodeMounted={onMounted} {...config.attrs}>
      {contentVNode}
    </MyComponent>
  )
}

export const useMyComponentWithTransformer = createAdapter({
  renderer: myComponentRender,
  configTransformer: (config, createConfig) => {
    return {
      ...config,
      customClassName: `${config.customClassName || ''} enhanced-component`.trim(),
      attrs: {
        ...config.attrs,
        theme: config.theme || 'light',
      },
    }
  },
})
```

## `CommandProviderWithRender`

如果你需要进行完全自主的定制你的命令式组件,`createAdapter` 可能无法满足你的灵活性需求,那么你可以使用 `CommandProviderWithRender` 函数来进行适配,他可以让你完全控制你的命令式组件的渲染过程以及逻辑处理.

下边是一个将 element-plus 的 dialog 用`CommandProviderWithRender`适配的例子:

```tsx
import { ElDialog, useGlobalComponentSettings, ElButton, type DialogProps } from "element-plus";
import type { VNode } from "vue";
import { getCurrentInstance, h, ref, defineComponent } from "vue";
import type { ICommandComponentArrtsProviderConfig, ICreateCommandComponentConfig } from "./Core";
import { CommandProvider } from "./Core";
import { busName2EventName, eventName2BusName, isNull } from "./utils";
import { EVENT_NAME } from "./type";

export type IElementPlusDialogConfig = {
  // 目标ui库目标组件的插槽
  slots?: {
    [key: string]: () => VNode | VNode[];
  };
  // 目标ui库目标组件的属性
  attrs?: Partial<DialogProps & Record<string, any>>;

  // 其实title和width都是目标组件的属性,所以通过attrs属性也能实现,但是这两个属性实在太常见了,可以单独拎出来,少些一些代码
  title?: string;
  width?: string;
} & ICommandComponentArrtsProviderConfig &
  Record<string, any>;

// ElementPlusDialog全局挂载点
let mountNode: HTMLElement | undefined = void 0;
export const setElementPlusDialogMountNode = (node: HTMLElement | undefined) => {
  mountNode = node;
};

export const createElementPlusDialog = (createConfig: ICreateCommandComponentConfig = {}) => {
  // 我们需要捕获使用命令式组件的的组件实例,我们会用它来获取上下文
  const parentInstance = getCurrentInstance();
  // 返回一个函数,这个函数接收一个组件节点,以及配置项,返回一个consumer对象
  const commandDialog = (ContentVNode: VNode, config: IElementPlusDialogConfig = {}) => {
    // 初始显隐状态
    const visible = ref<boolean>(isNull(createConfig.immediately) ? true : !!createConfig.immediately);

    // 这里的consumer和弹窗内部通过`getConsumer`接收到的`consumer`是同一个对象
    const consumer = CommandProvider(
      parentInstance,
      h(
        defineComponent({
          setup() {
            // 这里一般建议你在后续赋值为UI库的弹窗组件的ref,以便将来使用它暴露的属性和方法
            const componentRef = ref();
            const handleMounted = () => {
              Promise.resolve().then(() => {
                // 设置ref,以便将来使用第三方组件暴露的属性和方法
                consumer.componentRef = componentRef;
              });
            };

            const handleClose = (done: () => void) => {
              done();
              consumer.destroy();
            };

            // 包装外部监听的onClosed事件,并触发销毁事件
            const handleClosed = (...args: any[]) => {
              consumer.emit(EVENT_NAME.destory);
              return config.attrs?.onClosed?.(...args);
            };

            return () => (
              <ElDialog
                ref={componentRef}
                modelValue={visible.value}
                beforeClose={handleClose}
                onVnodeMounted={handleMounted}
                {...{
                  title: config.title,
                  width: config.width,
                  ...config.attrs,
                }}
                onClosed={handleClosed}
              >
                {{
                  default: () => ContentVNode,
                  ...config.slots,
                }}
              </ElDialog>
            );
          },
        })
      ),
      {
        provideProps: config.provideProps || {},
        appendTo: mountNode || config.appendTo,
        visible,
        // 优先使用执行动作的meta,其次使用创建时的meta
        meta: {
          ...(createConfig?.meta || {
            name: "command-element-plus-dialog",
          }),
          ...(config?.meta || {}),
        },
      }
    );

    return consumer;
  };

  return commandDialog;
};
```

## 最后

大多数时候都只需要使用`createAdapter`即可,它可以帮你完成绝大多数工作,让你专注于如何渲染自己的组件以及如何和命令式组件进行交互,而无需关心通用的逻辑.

非必要,不要使用`CommandProviderWithRender`,因为你需要额外处理很多工作内容.
