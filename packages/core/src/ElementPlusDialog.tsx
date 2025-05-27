import { ElDialog } from "element-plus";
import type { VNode } from "vue";
import { UIComponentAdapter } from "./adapter";
import { EVENT_NAME, type ICommandComponentConfig, type ICreateCommandComponentConfig, type IRenderComponentOptions } from "./type";
import { merge } from "lodash-es";

// 自行拓展属性
export type IElementPlusDialogConfig = ICommandComponentConfig & {
  title?: string;
  width?: string;
};

class ElementPlusDialogAdapter extends UIComponentAdapter<IElementPlusDialogConfig> {
  protected renderComponent(ContentVNode: VNode, options: IRenderComponentOptions<IElementPlusDialogConfig>): VNode {
    const { componentRef, visible, onMounted, config, consumer } = options;
    const handleClose = (done: () => void) => {
      done();
      consumer.value!.destroy();
    };

    const handleClosed = (...args: unknown[]) => {
      consumer.value!.emit(EVENT_NAME.destroy);
      return config.attrs?.onClosed?.(...args);
    };

    return (
      <ElDialog
        ref={componentRef}
        modelValue={visible}
        beforeClose={handleClose}
        onVnodeMounted={onMounted}
        title={config.title}
        width={config.width}
        {...{
          ...config.attrs,
        }}
        onClosed={handleClosed}
      >
        {{
          default: () => ContentVNode,
          ...config.slots,
        }}
      </ElDialog>
    );
  }
}

export const useElementPlusDialog = (createConfig: ICreateCommandComponentConfig = {}) => {
  const adapter = new ElementPlusDialogAdapter();

  adapter.setMountNode(createConfig.appendTo);

  return adapter.createCommand(createConfig);
};


// 进一步封装示例
export const useElementPlusDialogWithDrag = (createConfig: ICreateCommandComponentConfig = {}) => {
  const command = useElementPlusDialog(createConfig);
  return (ContentVNode: VNode, config: IElementPlusDialogConfig = {}) => {
    const mergedConfig: IElementPlusDialogConfig = merge({}, config, {
      attrs: {
        draggable: true,
      },
    });
    return command(ContentVNode, mergedConfig);
  };
};
