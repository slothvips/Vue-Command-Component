import type { ICommandConfig, IRenderComponentOptions } from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import type { PopupProps } from "vant";
import { Popup } from "vant";
import type { VNode } from "vue";

const defaultProps: Partial<PopupProps > = {
  round: true,
  lockScroll: true,
  closeable: true,
};

const baseRender = (contentVNode: VNode, { componentRef, visible, onMounted, config, consumer }: IRenderComponentOptions<ICommandConfig>) => {

  const onClose = () => {
    consumer.value!.destroy();
  };
  
  return (
    <Popup
      ref={componentRef}
      v-model:show={visible.value}
      onClickCloseIcon={onClose}
      onVnodeMounted={onMounted}
      {...defaultProps}
      {...config.value.attrs}
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
  } as Partial<ICommandConfig>,
});
