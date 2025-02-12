import { ElDrawer, type DrawerProps } from "element-plus";
import type { VNode } from "vue";
import { getCurrentInstance, h, ref, defineComponent } from "vue";
import type { ICommandComponentArrtsProviderConfig, ICreateCommandComponentConfig } from "./Core";
import { CommandProvider } from "./Core";
import { EVENT_NAME } from "./type";
import { isNull } from ".";

export type IElementPlusDrawerConfig = {
  slots?: {
    [key: string]: () => VNode | VNode[];
  };
  attrs?: Partial<DrawerProps & Record<string, any>>;
  title?: string;
  size?: string;
} & ICommandComponentArrtsProviderConfig &
  Record<string, any>;

let mountNode: HTMLElement | undefined = void 0;
export const setElementPlusDrawerMountNode = (node: HTMLElement | undefined) => {
  mountNode = node;
};

export const createElementPlusDrawer = (createConfig: ICreateCommandComponentConfig = {}) => {
  const parentInstance = getCurrentInstance();
  const commandDrawer = (ContentVNode: VNode, config: IElementPlusDrawerConfig = {}) => {
    const visible = ref(isNull(createConfig.immediately) ? true : !!createConfig.immediately);
    const consumer = CommandProvider(
      parentInstance,
      h(
        defineComponent({
          setup() {
            const handleClose = (done: () => void) => {
              done();
              consumer.destroy();
            };
            const handleClosed = () => {
              consumer.emit(EVENT_NAME.destory);
            };
            const componentRef = ref();
            const handleMounted = () => {
              Promise.resolve().then(() => {
                consumer.componentRef = componentRef;
              });
            };
            return () => (
              <ElDrawer
                ref={componentRef}
                modelValue={visible.value}
                beforeClose={handleClose}
                onClosed={handleClosed}
                onVnodeMounted={handleMounted}
                {...{
                  title: config.title,
                  size: config.size,
                  ...config.attrs,
                }}
              >
                {{
                  default: () => ContentVNode,
                  ...config.slots,
                }}
              </ElDrawer>
            );
          },
        })
      ),
      {
        provideProps: config.provideProps || {},
        appendTo: mountNode || config.appendTo,
        visible,
        meta: {
          ...(createConfig?.meta || {
            name: "command-element-plus-drawer",
          }),
          ...(config?.meta || {}),
        },
      }
    );
    return consumer;
  };
  return commandDrawer;
};
