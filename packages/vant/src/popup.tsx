import type {
  ICommandConfig,
  IRenderComponentOptions,
  IUseConfig,
} from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import { merge } from "lodash-es";
import type { PopupProps, PopupPosition } from "vant";
import { Popup } from "vant";
import type { CSSProperties, VNode } from "vue";

const defaultProps: Partial<PopupProps> = {
  round: true,
  lockScroll: true,
};

export type VantPopupConfig = {
  position?: PopupPosition;
  style?: CSSProperties;
  closeable?: boolean;
} & ICommandConfig<Partial<PopupProps>>;

const baseRender = (
  contentVNode: VNode,
  {
    componentRef,
    visible,
    onMounted,
    config,
    consumer,
  }: IRenderComponentOptions<VantPopupConfig>,
) => {
  const { attrs, ...rest } = config.value;

  const onClose = () => {
    consumer.value!.destroy();
  };

  return (
    <Popup
      ref={componentRef}
      show={visible.value}
      onClickCloseIcon={onClose}
      onVnodeMounted={onMounted}
      {...defaultProps}
      {...rest}
      {...attrs}
    >
      {{
        default: () => contentVNode,
        ...config.value.slots,
      }}
    </Popup>
  );
};

export const usePopup = createAdapter({
  render: baseRender,
  defaultConfig: {
    attrs: defaultProps,
  },
});

export const usePopupOnBottom = (createConfig: IUseConfig = {}) => {
  const popup = usePopup(createConfig);
  return (ContentVNode: VNode, config: ICommandConfig = {}) => {
    const mergedConfig: ICommandConfig = merge({}, config, {
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
