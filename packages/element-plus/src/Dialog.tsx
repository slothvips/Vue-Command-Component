import type { ICommandComponentConfig, IRenderComponentOptions } from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import { ElDialog } from "element-plus";
import type { VNode } from "vue";

export type IElementPlusDialogConfig = ICommandComponentConfig & {
  title?: string;
  width?: string;
};

const baseRender = (contentVNode: VNode, { componentRef, visible, onMounted, config, consumer }: IRenderComponentOptions<IElementPlusDialogConfig>) => {

  const onClosed = () => {
    consumer.value!.destroy();
  };

  return (
    <ElDialog
      ref={componentRef}
      modelValue={visible.value}
      onVnodeMounted={onMounted}
      title={config.title}
      width={config.width}
      {...config.attrs}
      onClosed={onClosed}
    >
      {{
        default: () => contentVNode,
        ...config.slots,
      }}
    </ElDialog>
  );
};

export const useElementPlusDialog = createAdapter({
  render: baseRender,
  defaultConfig: {}
});
