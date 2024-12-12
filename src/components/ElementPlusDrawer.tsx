import { ElDrawer, type DrawerProps } from "element-plus";
import type { VNode } from "vue";
import { getCurrentInstance, h, ref, defineComponent } from "vue";
import type { ICommandComponentArrtsProviderConfig } from "./Core";
import { CommandProvider } from "./Core";
import { EVENT_NAME } from "./type";

export type IElementPlusDrawerConfig = {
  slots?: {
    [key: string]: () => VNode | VNode[];
  };
  attrs?: Partial<DrawerProps & Record<string, any>>;
  title?: string;
  width?: string;
} & ICommandComponentArrtsProviderConfig &
  Record<string, any>;

let mountNode: HTMLElement | undefined = void 0;
export const setElementPlusDrawerMountNode = (node: HTMLElement | undefined) => {
  mountNode = node;
};

export const createElementPlusDrawer = (immediately = true) => {
  const parentInstance = getCurrentInstance();
  const commandDrawer = (ContentVNode: VNode, config: IElementPlusDrawerConfig = {}) => {
    const visible = ref(immediately);
    const consumer = CommandProvider(
      parentInstance,
      h(
        defineComponent({
          setup() {
            const componentRef = ref();
            const handleClose = (done: () => void) => {
              done();
              consumer.destroy();
            };

            const handleClosed = () => {
              consumer.emit(EVENT_NAME.destory);
            };

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
                  width: config.width,
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
      }
    );

    return consumer;
  };

  return commandDrawer;
};
