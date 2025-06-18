import { ElDialog, ElButton, ElIcon } from "element-plus";
import { defineComponent, ref, type VNode } from "vue";
import { UIComponentAdapter } from "./adapter";
import { EVENT_NAME, type ICommandComponentConfig, type ICreateCommandComponentConfig, type IRenderComponentOptions } from "./type";
import { FullScreen, Close } from "@element-plus/icons-vue";
// import './ElementPlusDialog.scss'
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
        modelValue={visible.value}
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

class ElementPlusDialogProAdapter extends UIComponentAdapter<IElementPlusDialogConfig> {
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

    const ElDialogPro = defineComponent({
      setup() {
        const isFullScreen = ref(false)
        return () => {
          return <ElDialog
            ref={componentRef}
            modelValue={visible.value}
            beforeClose={handleClose}
            onVnodeMounted={onMounted}
            title={config.title}
            width={config.width}
            {...{
              ...config.attrs,
            }}
            fullscreen={isFullScreen.value}
            showClose={false}
            onClosed={handleClosed}
            draggable={config.attrs?.draggable === undefined ? true : config.attrs.draggable}
          >
            {{
              header: ({ titleId, titleClass, close }: any) => config.slots?.header ? config.slots.header() : <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span id={titleId} class={titleClass}>
                  {config.title || ""}
                </span>
                <div class='flex items-center gap-2.5'>
                    <div class="cursor-pointer hover:text-[color:var(--el-color-primary)]" onClick={() => isFullScreen.value = !isFullScreen.value}>
                      <ElIcon class="el-icon--left" ><FullScreen /></ElIcon>
                    </div>
                    {
                      config.attrs?.showClose !== false && <div class="cursor-pointer hover:text-[color:var(--el-color-primary)]" onClick={close}>
                        <ElIcon class="el-icon--left" ><Close /></ElIcon>
                      </div>
                    }
                  </div>
             
              </div>,
              default: () => ContentVNode,
              ...config.slots,
            }}
          </ElDialog>
        }
      }
    })

    return (
      <ElDialogPro />
    );
  }
}

// ---增值---
export const useElementPlusDialogPro = (createConfig: ICreateCommandComponentConfig = {}) => {
  const adapter = new ElementPlusDialogProAdapter();

  adapter.setMountNode(createConfig.appendTo);

  return adapter.createCommand(createConfig);
};
