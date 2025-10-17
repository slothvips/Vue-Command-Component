import type {
  ICommandConfig,
  IRenderComponentOptions,
  IUseConfig,
  IUseConfigOrGetter,
} from "@vue-cmd/core";
import { createAdapter, EVENT_NAME } from "@vue-cmd/core";
import { ElDialog, type DialogProps } from "element-plus";
import { type VNode } from "vue";

export type IDialogConfig = ICommandConfig<Partial<DialogProps>> & {
  title?: string;
  width?: string;
};

const baseRender = (
  contentVNode: VNode,
  options: IRenderComponentOptions<IDialogConfig>,
) => {
  const { componentRef, visible, onMounted, config, consumer } = options;

  const { title, width, attrs, slots } = config.value;

  // 点击遮罩和关闭按钮会触发
  const handleClose = (done: () => void) => {
    consumer.value!.destroy();
    attrs?.onBeforeClose?.(done);
    done();
  };

  // 动画结束时触发
  const handleClosed = (...args: unknown[]) => {
    consumer.value!.emit(EVENT_NAME.destroy);
    return attrs?.onClosed?.(...args);
  };

  return (
    <ElDialog
      ref={componentRef}
      v-model={visible.value}
      onVnodeMounted={onMounted}
      title={title}
      width={width}
      {...attrs}
      beforeClose={handleClose}
      onClosed={handleClosed}
    >
      {{
        default: () => contentVNode,
        ...slots,
      }}
    </ElDialog>
  );
};

export const useDialog = createAdapter({
  render: baseRender,
  defaultConfig: {
    meta: {
      name: "element-plus-dialog",
    },
  },
});

/**
 * 可拖拽,遮罩无法关闭,按esc无法关闭
 * @returns
 */
export const useDialogWithDrag = (useConfig?: IUseConfigOrGetter) => {
  const dialog = useDialog(useConfig);
  return (contentVNode: VNode, config: IDialogConfig = {}) => {
    return dialog(contentVNode, {
      attrs: {
        // 可拖拽
        draggable: true,
        closeOnClickModal: false,
        closeOnPressEscape: false,
      },
      ...config,
    });
  };
};
