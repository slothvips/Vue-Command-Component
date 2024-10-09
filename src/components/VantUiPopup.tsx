import "./VantUiPopup.scss"
import type { PopupProps } from 'vant'
import { Popup } from 'vant'
import type { VNode } from "vue";
import { getCurrentInstance, h, ref, defineComponent } from "vue";
import type { ICommandDialogArrtsProviderConfig } from "./Core";
import { CommandDialogProvider } from "./Core";
import { EVENT_NAME } from "./type";
import { merge } from "lodash-es";

export type IVantUiConfig = {
  // 目标ui库目标组件的插槽
  slots?: {
    [key: string]: () => VNode | VNode[];
  };
  // 目标ui库目标组件的属性
  attrs?: Partial<PopupProps & Record<string, any>>;

} & ICommandDialogArrtsProviderConfig & Record<string, any>;

// 默认属性
const defaultProps: IVantUiConfig = {
  overlay: true,
  round: true,
  lockScroll: true,
  closeable: true,
  closeOnClickOverlay: false,
  style: {
    backgroundColor: '#fff',
    color: '#000',
  }
}

export const createVantUiPopup = (immediately = true) => {
  const parentInstance = getCurrentInstance();

  const commandDialog = (ContentVNode: VNode, config: IVantUiConfig = {}) => {
    const visible = ref(immediately);
    const consumer = CommandDialogProvider(
      parentInstance,
      h(defineComponent({
        setup() {
          const componentRef = ref()

          const handleClose = () => {
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
          )
        }
      })),
      {
        provideProps: config.provideProps || {},
        appendTo: config.appendTo,
        visible,
      }
    );

    return consumer;
  };

  return commandDialog;
};


// ---拓展功能---
// 在底部弹出
export const createVantUiPopupOnBottom = (immediately = true) => {
  const CommandPopup = createVantUiPopup(immediately)
  return (ContentVNode: VNode, config: IVantUiConfig = {}) => {
    merge(config, {
      attrs: {
        position: 'bottom',
        style: {
          width: '100vw'
        }
      }
    })
    return CommandPopup(ContentVNode, config)
  }
}

// 标题
export const createVantUiTitlePopup = (immediately = true) => {
  const CommandPopup = createVantUiPopup(immediately)
  return (ContentVNode: VNode, config: IVantUiConfig = {}) => {
    const ContentWithTitleVNode = <div class="w-full h-full">
      {config.title && (
        <div class="vant-popup-title">
          <div class="vant-popup-title-text" v-html={config.title} />
        </div>
      )}
      {ContentVNode}
    </div>
    return CommandPopup(ContentWithTitleVNode, config)
  }
}

// 标题+底部
export const createVantUiTitlePopupOnBottom = (immediately = true) => {
  const CommandPopup = createVantUiTitlePopup(immediately)

  return (ContentVNode: VNode, config: IVantUiConfig = {}) => {
    merge(config, {
      attrs: {
        position: 'bottom',
        style: {
          width: '100vw'
        }
      }
    })
    return CommandPopup(ContentVNode, config)
  }
}
