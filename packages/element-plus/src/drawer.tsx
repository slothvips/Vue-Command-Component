import type { ICommandConfig, IRenderComponentOptions } from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import { ElDrawer, type DrawerProps } from "element-plus";
import type { VNode } from "vue";

export type IDrawerConfig = {
  size?: string;
  title?: string;
} & ICommandConfig<Partial<DrawerProps>>;

const baseRender = (
  contentVNode: VNode,
  {
    componentRef,
    visible,
    onMounted,
    config,
    consumer,
  }: IRenderComponentOptions<IDrawerConfig>,
) => {
  const { attrs, slots, title, size } = config.value;
  const onClosed = () => {
    consumer.value!.destroy();
  };
  return (
    <ElDrawer
      ref={componentRef}
      v-model={visible.value}
      onVnodeMounted={onMounted}
      title={title}
      size={size}
      {...attrs}
      onClosed={onClosed}
    >
      {{
        default: () => contentVNode,
        ...slots,
      }}
    </ElDrawer>
  );
};

export const useDrawer = createAdapter({
  render: baseRender,
  defaultConfig: {
    meta: {
      name: "element-plus-drawer",
    },
  },
});
