import { ElDrawer } from "element-plus";
import type { VNode } from "vue";
import { UIComponentAdapter } from "./adapter";
import { EVENT_NAME, type ICommandComponentConfig, type ICreateCommandComponentConfig, type IRenderComponentOptions } from "./type";

// 自行拓展属性
export type IElementPlusDrawerConfig = ICommandComponentConfig & {
  title: string;
  width?: string;
};

class ElementPlusDrawerAdapter extends UIComponentAdapter<IElementPlusDrawerConfig> {
  protected renderComponent(ContentVNode: VNode, options: IRenderComponentOptions<IElementPlusDrawerConfig>): VNode {
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
      <ElDrawer
        ref={componentRef}
        modelValue={visible}
        beforeClose={handleClose}
        onVnodeMounted={onMounted}
        {...{
          title: config.title,
          ...config.attrs,
        }}
        onClosed={handleClosed}
      >
        {{
          default: () => ContentVNode,
          ...config.slots,
        }}
      </ElDrawer>
    );
  }
}

export const useElementPlusDrawer = (createConfig: ICreateCommandComponentConfig = {}) => {
  const adapter = new ElementPlusDrawerAdapter();

  adapter.setMountNode(createConfig.appendTo);

  return adapter.createCommand(createConfig);
};
