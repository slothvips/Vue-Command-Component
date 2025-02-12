import type { PopupProps } from "vant";
import { Popup } from "vant";
import type { VNode } from "vue";
import { getCurrentInstance, h, ref, defineComponent } from "vue";
import type { ICommandComponentArrtsProviderConfig, ICreateCommandComponentConfig } from "./Core";
import { CommandProvider } from "./Core";
import { EVENT_NAME } from "./type";
import { merge } from "lodash-es";
import { isNull } from ".";

export type IVantUiConfig = {
  slots?: {
    [key: string]: () => VNode | VNode[];
  };
  attrs?: Partial<PopupProps & Record<string, any>>;
} & ICommandComponentArrtsProviderConfig &
  Record<string, any>;

let mountNode: HTMLElement | undefined = void 0;
export const setVantUiPopupMountNode = (node: HTMLElement | undefined) => {
  mountNode = node;
};

const defaultProps: IVantUiConfig = {
  round: true,
  lockScroll: true,
  closeable: true,
  style: {
    backgroundColor: "#fff",
    color: "#000",
  },
};

export const createVantUiPopup = (createConfig: ICreateCommandComponentConfig = {}) => {
  const parentInstance = getCurrentInstance();
  const commandDialog = (ContentVNode: VNode, config: IVantUiConfig = {}) => {
    const visible = ref(isNull(createConfig.immediately) ? true : !!createConfig.immediately);
    const consumer = CommandProvider(
      parentInstance,
      h(
        defineComponent({
          setup() {
            const handleClose = () => {
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
              <Popup
                ref={componentRef}
                show={visible.value}
                onClickCloseIcon={handleClose}
                onClosed={handleClosed}
                onVnodeMounted={handleMounted}
                {...{
                  ...defaultProps,
                  ...config.attrs,
                }}
              >
                {{
                  default: () => ContentVNode,
                  ...config.slots,
                }}
              </Popup>
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
            name: "command-vant-ui-popup",
          }),
          ...(config?.meta || {}),
        },
      }
    );

    return consumer;
  };
  return commandDialog;
};

// ---拓展功能示例---
// 在底部弹出
export const createVantUiPopupOnBottom = (createConfig: ICreateCommandComponentConfig = {}) => {
  const CommandPopup = createVantUiPopup(createConfig);
  return (ContentVNode: VNode, config: IVantUiConfig = {}) => {
    merge(config, {
      attrs: {
        position: "bottom",
        style: {
          width: "100vw",
        },
      },
    });
    return CommandPopup(ContentVNode, config);
  };
};
