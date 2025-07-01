import type { ICommandConfig, IRenderComponentOptions } from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import type { VNode } from "vue";
import { NDrawer } from "naive-ui";

export interface INaiveDrawerConfig extends ICommandConfig { }

const baseRender = (contentVNode: VNode, { componentRef, visible, onMounted, config, consumer }: IRenderComponentOptions<INaiveDrawerConfig>) => {

  const onUpdateShow = (show: boolean) => {
    if (!show) {
      consumer.value!.destroy();
    }
  };

  const onAfterLeave = () => {
    consumer.value!.destroy();
  };

  return (
    <NDrawer
      ref={componentRef}
      show={visible.value}
      onUpdateShow={onUpdateShow}
      onAfterLeave={onAfterLeave}
      onVnodeMounted={onMounted}
      width={300}
      placement="right"
      {...config.value.attrs}
    >
      {{
        default: () => contentVNode,
        ...config.value.slots,
      }}
    </NDrawer>
  );
};

export const useDrawer = createAdapter({
  render: baseRender,
  defaultConfig: {
    attrs: {
      width: 300,
      placement: "right" as const,
    }
  }
}); 
