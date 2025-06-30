import { ElDialog, type DialogProps } from 'element-plus'
import type { Ref, VNode } from 'vue'
import { getCurrentInstance, h, ref, defineComponent } from 'vue'
import type { ICommandComponentConfig, ICommandComponentProviderConfig, IUseCommandComponentConfig } from '@vue-cmd/core'
import { CommandProviderWithRender } from '@vue-cmd/core'
import {  isNull } from '@vue-cmd/core'
import { EVENT_NAME } from '@vue-cmd/core'

export type IElementPlusDialogConfig = {
  // 目标ui库目标组件的插槽
  slots?: {
    [key: string]: () => VNode | VNode[]
  }
  // 目标ui库目标组件的属性
  attrs?: Partial<DialogProps & Record<string, any>>

  // 其实title和width都是目标组件的属性,所以通过attrs属性也能实现,但是这两个属性实在太常见了,可以单独拎出来,少些一些代码
  title?: string
  width?: string
} & ICommandComponentProviderConfig &
  Record<string, any>

export const createElementPlusDialog = (createConfig: IUseCommandComponentConfig = {}) => {
  // 我们需要捕获使用命令式组件的的组件实例,我们会用它来获取上下文
  const parentInstance = getCurrentInstance()
  // 返回一个函数,这个函数接收一个组件节点,以及配置项,返回一个consumer对象
  const commandDialog = (ContentVNode: VNode, config: IElementPlusDialogConfig) => {
    // 初始显隐状态
    // const visible = ref<boolean>(isNull(createConfig.visible) ? true : !!createConfig.visible)
    const visible = ref<boolean>(true)

    // 这里的consumer和弹窗内部通过`getConsumer`接收到的`consumer`是同一个对象
    const consumer = CommandProviderWithRender(
      parentInstance,
      h(
        defineComponent({
          setup() {
            // 这里一般建议你在后续赋值为UI库的弹窗组件的ref,以便将来使用它暴露的属性和方法
            const componentRef = ref()
            const handleMounted = () => {
              Promise.resolve().then(() => {
                // 设置ref,以便将来使用第三方组件暴露的属性和方法
                consumer.componentRef = componentRef
              })
            }

            const handleClose = (done: () => void) => {
              done()
              consumer.destroy()
            }

            // 包装外部监听的onClosed事件,并触发销毁事件
            const handleClosed = (...args: any[]) => {
              consumer.emit(EVENT_NAME.destroy)
              return config.attrs?.onClosed?.(...args)
            }

            return () => (
              <ElDialog
                ref={componentRef}
                modelValue={visible.value}
                beforeClose={handleClose}
                onVnodeMounted={handleMounted}
                {...{
                  title: config.title,
                  width: config.width,
                  ...config.attrs,
                }}
                onClosed={handleClosed}
              >
                {{
                  default: () => ContentVNode,
                  ...config.slots,
                }}
              </ElDialog>
            )
          },
        })
      ),
      {
        provideProps: config.provideProps || {},
        appendTo: config.appendTo,
        visible: visible ,
        meta: {
          ...(createConfig?.meta || {
            name: 'command-element-plus-dialog',
          }),
          ...(config?.meta || {}),
        },
      }
    )

    return consumer
  }

  return commandDialog
}
