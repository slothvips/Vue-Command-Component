import type {
  ICommandConfig,
  IRenderComponentOptions,
  IUseConfig,
  IUseConfigOrGetter,
  ValueOrGetter,
} from "@vue-cmd/core";
import { createAdapter } from "@vue-cmd/core";
import type { VNode } from "vue";
import { merge } from "lodash-es";
import { NModal } from "naive-ui";

// 类型定义
export interface INaiveModalConfig extends ICommandConfig {
  title?: string;
  width?: string | number;
  height?: string | number;
}

const baseRender = (
  contentVNode: VNode,
  {
    componentRef,
    visible,
    onMounted,
    config,
    consumer,
  }: IRenderComponentOptions<INaiveModalConfig>,
) => {
  const { attrs, slots } = config.value;

  const handleClosed = () => {
    consumer.value!.destroy();
    attrs?.onAfterLeave?.();
  };

  return (
    <NModal
      ref={componentRef}
      v-model:show={visible.value}
      onAfterLeave={handleClosed}
      onVnodeMounted={onMounted}
      {...config.value.attrs}
    >
      {{
        default: () => contentVNode,
        ...slots,
      }}
    </NModal>
  );
};

export const useModal = createAdapter({
  render: baseRender,
  defaultConfig: {
    attrs: {
      closable: true,
    },
  },
});

export const useDialog = (useConfig?: IUseConfigOrGetter) => {
  const dialog = useModal(useConfig);
  return (content: VNode, config: INaiveModalConfig) => {
    return dialog(
      content,
      merge(config, {
        attrs: {
          title: "接接接接接接接",
          preset: "dialog",
        },
      }),
    );
  };
};
