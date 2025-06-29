import type { ICommandComponentConfig, IRenderComponentOptions } from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import type { VNode } from "vue";
import { NDrawer } from "naive-ui";

export interface INaiveDrawerConfig extends ICommandComponentConfig { }

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
      {...config.attrs}
    >
      {{
        default: () => contentVNode,
        ...config.slots,
      }}
    </NDrawer>
  );
};

export const useNaiveDrawer = createAdapter({
  render: baseRender,
  defaultConfig: {
    attrs: {
      width: 300,
      placement: "right" as const,
    }
  } as Partial<INaiveDrawerConfig>,
}); 
