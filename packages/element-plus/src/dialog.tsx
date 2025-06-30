import type { ICommandComponentConfig, IRenderComponentOptions } from '@vue-cmd/core'
import { createAdapter } from '@vue-cmd/core'
import { ElDialog } from 'element-plus'
import type { VNode } from 'vue'

export type IDialogConfig = ICommandComponentConfig & {
  title?: string
  width?: string
}

const baseRender = (contentVNode: VNode, { componentRef, visible, onMounted, config, consumer }: IRenderComponentOptions<IDialogConfig>) => {
  const onClosed = () => {
    consumer.value!.destroy()
  }

  return (
    <ElDialog ref={componentRef} modelValue={visible.value} onVnodeMounted={onMounted} title={config.title} width={config.width} {...config.attrs} onClosed={onClosed}>
      {{
        default: () => contentVNode,
        ...config.slots,
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
