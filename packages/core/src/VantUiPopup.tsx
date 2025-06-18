import { merge } from "lodash-es";
import type { PopupProps } from "vant";
import { Popup } from "vant";
import type { CSSProperties, VNode } from "vue";
import { UIComponentAdapter } from "./adapter";
import { type ICommandComponentConfig, type ICreateCommandComponentConfig, type IRenderComponentOptions } from "./type";

const defaultProps: Partial<
  PopupProps & {
    style: CSSProperties;
  }
> = {
  round: true,
  lockScroll: true,
  closeable: true,
  style: {
    backgroundColor: "#fff",
    color: "#000",
  },
};

class VantUiPopupAdapter extends UIComponentAdapter<ICommandComponentConfig> {
  protected renderComponent(ContentVNode: VNode, options: IRenderComponentOptions<ICommandComponentConfig>): VNode {
    const { componentRef, visible, onMounted, config, consumer } = options;
    const handleClose = () => {
      consumer.value!.destroy();
    };
    return (
      <Popup
        ref={componentRef}
        v-model:show={visible.value}
        onClickCloseIcon={handleClose}
        onVnodeMounted={onMounted}
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
  }
}

export const useVantUiPopup = (createConfig: ICreateCommandComponentConfig = {}) => {
  const adapter = new VantUiPopupAdapter();
  adapter.setMountNode(createConfig.appendTo);
  return adapter.createCommand(createConfig);
};

// ---拓展功能示例---
// 在底部弹出
export const useVantUiPopupOnBottom = (createConfig: ICreateCommandComponentConfig = {}) => {
  const popup = useVantUiPopup(createConfig);

  return (ContentVNode: VNode, config: ICommandComponentConfig = {}) => {
    const mergedConfig: ICommandComponentConfig = merge({}, config, {
      attrs: {
        position: "bottom",
        style: {
          width: "100vw",
        },
      },
    });
    return popup(ContentVNode, mergedConfig);
  };
};
