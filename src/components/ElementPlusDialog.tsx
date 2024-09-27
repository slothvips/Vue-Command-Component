import { ElDialog, useGlobalComponentSettings, type DialogProps } from "element-plus";
import type { VNode } from "vue";
import { getCurrentInstance, h, ref, defineComponent } from "vue";
import type { ICommandDialogArrtsProviderConfig } from "./Core";
import { CommandDialogProvider } from "./Core";
import { busName2EventName, eventName2BusName } from "./utils";
import { EVENT_NAME } from "./type";

export type IElementPlusConfig = {
  slots?: {
    [key: string]: () => VNode | VNode[];
  };
  attrs?: Partial<DialogProps & Record<string, any>>;
  title?: string;
  width?: string;
  onCancel?: (() => void) | boolean;
  onCancelBtnText?: string;
  onConfirm?: (() => void) | boolean;
  onConfirmBtnText?: string;
} & ICommandDialogArrtsProviderConfig & Record<string, any>;

export const createElementPlusDialog = () => {
  const parentInstance = getCurrentInstance();
  const { locale: { t } } = useGlobalComponentSettings('message-box')

  const commandDialog = (ContentVNode: VNode, config: IElementPlusConfig = {}) => {
    const visible = ref(true);

    const consumer = CommandDialogProvider(
      parentInstance,
      h(defineComponent({
        setup() {
          const componentRef = ref()

          const handleClose = (done: () => void) => {
            done();
            consumer.destroy();
          };

          const handleClosed = () => {
            consumer.emit(EVENT_NAME.destory);
          };

          const handleMounted = () => {
            Promise.resolve().then(() => {
              consumer.componentRef = componentRef;
            });
          };

          return () => (
            <ElDialog
              ref={componentRef}
              modelValue={visible.value}
              beforeClose={handleClose}
              onClosed={handleClosed}
              onVnodeMounted={handleMounted}
              {...{
                title: config.title,
                width: config.width,
                ...config.attrs,
              }}
            >
              {{
                default: () => ContentVNode,
                footer: () => (
                  <div>
                    {config[busName2EventName(EVENT_NAME.cancel)] && (
                      <el-button onClick={() => consumer.emit(EVENT_NAME.cancel)}>
                        {config.onCancelBtnText || t('el.messagebox.cancel')}
                      </el-button>
                    )}
                    {config[busName2EventName(EVENT_NAME.confirm)] && (
                      <el-button type="primary" onClick={() => consumer.emit(EVENT_NAME.confirm)}>
                        {config.onConfirmBtnText || t('el.messagebox.confirm')}
                      </el-button>
                    )}
                  </div>
                ),
                ...config.slots,
              }}
            </ElDialog>
          )
        }
      })),
      {
        provideProps: config.provideProps || {},
        appendTo: config.appendTo,
        visible,
      }
    );

    // 处理事件绑定
    Object.entries(config)
      .filter(([key, fn]) => key.startsWith('on') && typeof fn === 'function')
      .forEach(([key, fn]) => {
        const bindKeyName = eventName2BusName(key);
        consumer.on(bindKeyName, fn as Function);
      });

    return consumer;
  };

  return commandDialog;
};
