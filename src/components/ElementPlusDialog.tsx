import { ElDialog, useGlobalComponentSettings, ElButton, type DialogProps } from "element-plus";
import type { VNode } from "vue";
import { getCurrentInstance, h, ref, defineComponent } from "vue";
import type { ICommandComponentArrtsProviderConfig } from "./Core";
import { CommandProvider } from "./Core";
import { busName2EventName, eventName2BusName } from "./utils";
import { EVENT_NAME } from "./type";

export type IElementPlusDialogConfig = {
  // 目标ui库目标组件的插槽
  slots?: {
    [key: string]: () => VNode | VNode[];
  };
  // 目标ui库目标组件的属性
  attrs?: Partial<DialogProps & Record<string, any>>;

  // 其实title和width都是目标组件的属性,所以通过attrs属性也能实现,但是这两个属性实在太常见了,可以单独拎出来,少些一些代码
  title?: string;
  width?: string;

  // 快捷的确认/取消按钮,可以传入函数,也可以传入boolean;如果传入函数,点击事会调用该函数;如果传入boolean,则表示是否显示该按钮,会通过consumer来触发固定的`EVENT_NAME.confirm`和`EVENT_NAME.cancel`事件,你可以在弹窗组件内部或者外部提供的consumer对象来注册这两个事件的回调函数来实现你的逻辑;
  onCancel?: (() => void) | boolean;
  cancelBtnText?: string;
  onConfirm?: (() => void) | boolean;
  confirmBtnText?: string;

} & ICommandComponentArrtsProviderConfig & Record<string, any>;


// ElementPlusDialog全局挂载点
let mountNode: HTMLElement | undefined = void 0
export const setElementPlusDialogMountNode = (node: HTMLElement | undefined) => {
  mountNode = node
}

export const createElementPlusDialog = (immediately = true) => {

  // 我们需要捕获使用命令式组件的的组件实例,我们会用它来获取上下文
  const parentInstance = getCurrentInstance();
  // 可忽略,只是为了获取语言包
  const { locale: { t } } = useGlobalComponentSettings('message-box')

  // 返回一个函数,这个函数接收一个组件节点,以及配置项,返回一个consumer对象
  const commandDialog = (ContentVNode: VNode, config: IElementPlusDialogConfig = {}) => {
    // 我们不再依赖外部的visible变量来控制弹窗的显示与隐藏,这免去了外部手动控制弹窗显示与隐藏的麻烦,而是通过consumer对象来进行控制
    const visible = ref(immediately);
    // 这里的consumer和弹窗内部通过`inject`接收到的`consumer`是同一个对象
    const consumer = CommandProvider(
      parentInstance,
      h(defineComponent({
        setup() {
          // 这里一般建议你在后续赋值为UI库的弹窗组件的ref,以便将来使用它暴露的属性和方法
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
                      <ElButton onClick={() => consumer.emit(EVENT_NAME.cancel)}>
                        {config.cancelBtnText || t('el.messagebox.cancel')}
                      </ElButton>
                    )}
                    {config[busName2EventName(EVENT_NAME.confirm)] && (
                      <ElButton type="primary" onClick={() => consumer.emit(EVENT_NAME.confirm)}>
                        {config.confirmBtnText || t('el.messagebox.confirm')}
                      </ElButton>
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
        appendTo: mountNode || config.appendTo,
        visible,
      }
    );

    // --------------便利性功能----------------
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
