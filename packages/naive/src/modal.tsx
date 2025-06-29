import type { ICommandComponentConfig, IRenderComponentOptions } from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import type { VNode } from "vue";

// @ts-ignore - naive-ui 作为 peer dependency
import { NModal } from "naive-ui";

// 类型定义
export interface INaiveModalConfig extends ICommandComponentConfig {
  title?: string;
  width?: string | number;
  height?: string | number;
}

const baseRender = (contentVNode: VNode, { componentRef, visible, onMounted, config, consumer }: IRenderComponentOptions<INaiveModalConfig>) => {

  const onUpdateShow = (show: boolean) => {
    if (!show) {
      consumer.value!.destroy();
    }
  };

  const onAfterLeave = () => {
    consumer.value!.destroy();
  };

  return (
    <NModal
      ref={componentRef}
      show={visible.value}
      onUpdateShow={onUpdateShow}
      onAfterLeave={onAfterLeave}
      onVnodeMounted={onMounted}
      preset="dialog"
      {...config.attrs}
    >
      {{
        default: () => contentVNode,
        ...config.slots,
      }}
    </NModal>
  );
};

export const useNaiveModal = createAdapter({
  render: baseRender,
  defaultConfig: {
    attrs: {
      preset: "dialog",
      closable: true,
    }
  } as Partial<INaiveModalConfig>,
}); 
