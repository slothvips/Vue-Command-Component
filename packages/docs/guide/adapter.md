# 适配其他组件

尽管已经提供一些开箱即用的组件,但很有可能没有适配你喜欢的组件.接下来我将告诉你怎么接入适配自己的组件.总得来说可以分为两种方式:
- 使用`CommandProviderWithRender`,灵活度最大,但是适配工作量也会上升
- 使用适配器类`UIComponentAdapter`,他基于`CommandProviderWithRender`,已经完成绝大多数工作,所以需要适配的工作量会小一些,但可能失去了一定的灵活度.

## 适配器类`UIComponentAdapter`

使用这个类最主要做的几个步骤:
- 继承`UIComponentAdapter`类
- 实现`renderComponent`方法,这个方法会在`CommandProviderWithRender`中被调用,你需要在这个方法中返回一个虚拟节点,这个节点就是你要渲染的组件,而`renderComponent`中你需要做:
  -  在合适的时机调用销毁函数
  - 传递插槽
  - 赋值componentRef以便于你可以调用原生组件的属性或者方法


可以参见对`ElementPlusDialog`的实现:

```tsx
import { ElDialog } from "element-plus";
import type { VNode } from "vue";
import { UIComponentAdapter } from "./adapter";
import { EVENT_NAME, type ICommandComponentConfig, type ICreateCommandComponentConfig, type IRenderComponentOptions } from "./type";

// 自行拓展属性
export type IElementPlusDialogConfig = ICommandComponentConfig & {
  title: string;
  width?: string;
};

class ElementPlusDialogAdapter extends UIComponentAdapter<IElementPlusDialogConfig> {
  protected renderComponent(ContentVNode: VNode, options: IRenderComponentOptions<IElementPlusDialogConfig>): VNode {
    const { componentRef, visible, onMounted, config, consumer } = options;
    const handleClose = (done: () => void) => {
      done();
      consumer.value!.destroy();
    };

    const handleClosed = (...args: unknown[]) => {
      consumer.value!.emit(EVENT_NAME.destroy);
      return config.attrs?.onClosed?.(...args);
    };

    return (
      <ElDialog
        ref={componentRef}
        modelValue={visible}
        beforeClose={handleClose}
        onVnodeMounted={onMounted}
        title={config.title}
        width={config.width}
        {...{
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
  }
}

export const useElementPlusDialog = (createConfig: ICreateCommandComponentConfig = {}) => {
  const adapter = new ElementPlusDialogAdapter();

  adapter.setMountNode(createConfig.appendTo);

  return adapter.createCommand(createConfig);
};
```

## 使用`CommandProviderWithRender`

提供最大的灵活度,但是适配工作相对较为繁琐,但核心思想依然是使用`UIComponentAdapter`那几件事

如果不使用`UIComponentAdapter`,`ElementPlusDialog`的适配代码可能是下边这个样子的
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

## 建议

如果没有特殊需求,建议使用`UIComponentAdapter`,他会帮你处理大部分的适配工作,如果你需要更大的灵活度,可以考虑使用`CommandProviderWithRender`,但是需要自己处理一些细节问题.
