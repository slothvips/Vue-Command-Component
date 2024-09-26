import { ElDialog, type DialogProps } from "element-plus";
import type { VNode } from "vue";
import { getCurrentInstance, h, ref, defineComponent } from "vue";
import type { ICommandDialogArrtsProviderConfig } from "./Core";
import { CommandDialogProvider } from "./Core";
import { busName2EventName, eventName2BusName } from "./utils";
export type IElementPlusConfig = {
  slots?: {
    [key: string]: () => VNode | VNode[];
  };
  attrs?: Partial<DialogProps & Record<string, any>>;
  title?: string;
  width?: string;
} & Record<string, any> & ICommandDialogArrtsProviderConfig;

export enum EVENT_NAME {
  confirm = 'confirm',
  cancel = 'cancel',
}

export const createElementPlusDialog2 = () => {
  const parentInstance = getCurrentInstance();

  return (ContentVNode: VNode, config: IElementPlusConfig = {}) => {
    const visible = ref<boolean>(true);

    const consumer = CommandDialogProvider(
      parentInstance,
      h(defineComponent({
        setup() {
          const componentRef = ref()
          return () => <ElDialog
            ref={componentRef}
            modelValue={visible.value}
            before-close={(done: any) => {
              done()
              consumer.destroy();
            }}
            onVnodeMounted={() => {
              Promise.resolve().then(() => {
                consumer.componentRef = componentRef
              })
            }}
            {...{
              ...(config.title ? { title: config.title } : {}),
              ...(config.width ? { width: config.width } : {}),
              ...config.attrs,
            }}
          >
            {{
              default: () => ContentVNode,
              footer: () => (
                <div>
                  {
                    config[busName2EventName(EVENT_NAME.cancel)] && <el-button onClick={() => consumer.emit(EVENT_NAME.cancel)}>取消</el-button>
                  }
                  {
                    config[busName2EventName(EVENT_NAME.confirm)] && <el-button type="primary" onClick={() => consumer.emit(EVENT_NAME.confirm)}>确定</el-button>
                  }
                </div>
              ),
              ...config.slots,
            }}
          </ElDialog >
        }
      })),
      {
        provideProps: {
          ...(config.provideProps || {}),
        },
        appendTo: config.appendTo,
        visible,
      }
    );

    // 增值功能
    const onEvents = Object.entries(config).reduce<[string, any][]>((acc, [key, fn]) => {
      if (key.startsWith('on')) {
        const bindKeyName = eventName2BusName(key)
        return [
          ...acc,
          [bindKeyName, fn]
        ]
      }
      return acc
    }, [])
    onEvents.forEach(([key, fn]) => typeof fn === 'function' && consumer.on(key, fn))

    return consumer;
  };
};
