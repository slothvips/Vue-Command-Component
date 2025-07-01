import { merge } from 'lodash-es'
import type { VNode } from 'vue'
import { computed, defineComponent, getCurrentInstance, h, ref, watchEffect } from 'vue'
import { CommandProviderWithRender } from './core'
import type { ICommandConfig, ICoreConfig, IConsumer, IUseConfig, IRenderComponentOptions, ValueOrGetter } from './type'
import { RxRender, uuid } from './utils'

export type AdapterRender<TConfig extends ICommandConfig = ICommandConfig> = (contentVNode: VNode, options: IRenderComponentOptions<TConfig>) => VNode

export type AdapterOptions<TConfig extends ICommandConfig = ICommandConfig> = {
  /** 渲染器函数 */
  render: AdapterRender<TConfig>
  /** 默认配置 */
  defaultConfig?: Partial<TConfig>
  /** 挂载节点 */
  appendTo?: HTMLElement | string
  /** 配置转换器 - 在渲染前对配置进行转换 */
  configTransformer?: (config: TConfig & ICommandConfig) => TConfig & ICommandConfig
}

/**
 * 创建函数式适配器
 * @param options 适配器选项
 * @returns 适配器函数
 */
export function createAdapter<TConfig extends ICommandConfig = ICommandConfig>(options: AdapterOptions<TConfig>) {
  const { render, defaultConfig = {}, configTransformer } = options

  return function (useConfig?: ValueOrGetter<IUseConfig>) {
    const parentInstance = getCurrentInstance()
    return function commandComponent(contentVNode: VNode, commandConfig?: ValueOrGetter<TConfig>): IConsumer {
      const mergedConfig = computed(() => {
        const useConfigData = typeof useConfig === 'function' ? useConfig() : useConfig
        const commandConfigData = typeof commandConfig === 'function' ? commandConfig() : commandConfig

        console.log(useConfigData, commandConfigData)

        const mergedConfig = merge({}, defaultConfig, useConfigData, commandConfigData)

        return configTransformer ? configTransformer(mergedConfig) : mergedConfig
      })

      const visible = ref<boolean>(true)

      const consumerRef = {
        value: null as unknown as IConsumer,
      }

      const Wrapper = defineComponent({
        setup: () => {
          const mergedConfig = computed(() => {
            const useConfigData = typeof useConfig === 'function' ? useConfig() : useConfig
            const commandConfigData = typeof commandConfig === 'function' ? commandConfig() : commandConfig

            const mergedConfig = merge({}, defaultConfig, useConfigData, commandConfigData)

            return configTransformer ? configTransformer(mergedConfig) : mergedConfig
          })

          const componentRef = ref()
          const onMounted = () => {
            Promise.resolve().then(() => {
              consumerRef.value!.componentRef = componentRef
            })
          }

          const renderOptions: IRenderComponentOptions<TConfig> = {
            componentRef,
            onMounted,
            config: mergedConfig,
            consumer: consumerRef!,
            visible,
          }

          return () =>  render(contentVNode, renderOptions)
        },
      })
      consumerRef.value = CommandProviderWithRender(
        parentInstance,
        <Wrapper />,
        {
          ...mergedConfig.value,
          visible,
        }
      )

      return consumerRef.value!
    }
  }
}
