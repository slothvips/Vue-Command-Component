import type { ICommandComponentConfig, IRenderComponentOptions } from '@vue-cmd/core'
import { createAdapter } from '@vue-cmd/core'
import type { DrawerProps } from 'element-plus'
import { ElDrawer } from 'element-plus'
import type { VNode } from 'vue'

export type IDrawerConfig = Partial<DrawerProps> & ICommandComponentConfig

const baseRender = (contentVNode: VNode, { componentRef, visible, onMounted, config, consumer }: IRenderComponentOptions<IDrawerConfig>) => {
  const onClosed = () => {
    consumer.value!.destroy()
  }

  return (
    <ElDrawer ref={componentRef} modelValue={visible.value} onVnodeMounted={onMounted} {...config.attrs} onClosed={onClosed}>
      {{
        default: () => contentVNode,
        ...config.slots,
      }}
    </ElDrawer>
  )
}

export const useDrawer = createAdapter({
  render: baseRender,
  defaultConfig: {
    meta: {
      name: 'element-plus-drawer',
    },
  },
})
