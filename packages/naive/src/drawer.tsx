import type { ICommandConfig, IRenderComponentOptions } from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import type { VNode } from "vue";
import { NDrawer, NDrawerContent } from "naive-ui";
import type{DrawerProps,DrawerContentProps } from "naive-ui";

// 类型定义
export interface INaiveDrawerConfig extends ICommandConfig<Partial<{
  drawerAttrs: Partial<DrawerProps>;
  contentAttrs: Partial<DrawerContentProps>;
}>> {
  title?: string;
  width?: string | number;
  height?: string | number;
  placement?: "top" | "right" | "bottom" | "left";
}

const baseRender = (contentVNode: VNode, { componentRef, visible, onMounted, config, consumer }: IRenderComponentOptions<INaiveDrawerConfig>) => {
  const { attrs, slots } = config.value;
  const {drawerAttrs,contentAttrs}= attrs||{drawerAttrs:{},contentAttrs:{}}
  const handleClosed = () => {
    consumer.value!.destroy();
    attrs?.onAfterLeave?.();
  };

  return (
    <NDrawer
      ref={componentRef}
      v-model:show={visible.value}
      onAfterLeave={handleClosed}
      onVnodeMounted={onMounted}
      {...drawerAttrs}
    >
      <NDrawerContent {...contentAttrs}>
      {{
        default: () => contentVNode,
        ...slots,
      }}
      </NDrawerContent>
    </NDrawer>
  );
};

export const useDrawer = createAdapter({
  render: baseRender,
  defaultConfig: {
    attrs: {
      width: 300,
      placement: "right",
    }
  }
});

