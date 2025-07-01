import type { ICommandConfig, IRenderComponentOptions } from '@vue-cmd/core'
import { createAdapter } from '@vue-cmd/core'
import { ElDialog } from 'element-plus'
import { type Ref, type VNode } from 'vue'

export type IDialogConfig = ICommandConfig & {
  title?: string
  width?: string
}

const baseRender = (contentVNode: VNode,options:IRenderComponentOptions<IDialogConfig>) => {
  const { componentRef, visible, onMounted, config, consumer } = options

  const { title, width, attrs, slots } = config.value

  const onClosed = () => {
    consumer.value!.destroy()
  }

  return (
    <ElDialog ref={componentRef} modelValue={visible.value} onVnodeMounted={onMounted} title={title} width={width} {...attrs} onClosed={onClosed}>
      {{
        default: () => contentVNode,
        ...slots,
      }}
    </ElDialog>
  )
}

export const useDialog = createAdapter({
  render: baseRender,
  defaultConfig: {
    meta: {
      name: 'element-plus-dialog',
    },
  },
})

/**
 * 可拖拽,遮罩无法关闭,按esc无法关闭
 * @returns 
 */
export const useDialogWithDrag = () => {
  const dialog = useDialog()
  return (contentVNode: VNode, config: IDialogConfig = {}) => {
    return dialog(contentVNode, {
      attrs: {
        // 可拖拽
        draggable: true,
        closeOnClickModal: false,
        closeOnPressEscape: false,
      },
      ...config,
    })
  }
}

/**
 * 全屏切换,自由拉伸
 * @returns
 */
// export const useDialogPro = () => {
//   const dialog = useDialog()
//   return (contentVNode: VNode, config: IDialogConfig = {}) => {
//     const fullScreen = ref(true)
//     return dialog(contentVNode, {
//       attrs: {
//         // 可拖拽
//         draggable: true,
//         closeOnClickModal: false,
//         closeOnPressEscape: false,
//         // 全屏
//         fullscreen: fullScreen.value,
//       },
//       ...config,
//     })
//   }
// }
