import { merge } from "lodash-es";
import type { VNode } from "vue";
import { defineComponent, getCurrentInstance, h, ref } from "vue";
import { CommandProviderWithRender } from "./core";
import type { ICommandComponentConfig, IConsumer, ICreateCommandComponentConfig, IRenderComponentOptions } from "./type";
import { isNull } from "./utils";

export type AdapterRenderer<TConfig extends ICommandComponentConfig = ICommandComponentConfig> = (
  contentVNode: VNode,
  options: IRenderComponentOptions<TConfig>
) => VNode;

export type AdapterOptions<TConfig extends ICommandComponentConfig = ICommandComponentConfig> = {
  /** 渲染器函数 */
  render: AdapterRenderer<TConfig>;
  /** 默认配置 */
  defaultConfig?: Partial<TConfig>;
  /** 挂载节点 */
  mountNode?: HTMLElement | string;
  /** 配置转换器 - 在渲染前对配置进行转换 */
  configTransformer?: (config: TConfig, createConfig: ICreateCommandComponentConfig) => TConfig;
};

/**
 * 创建函数式适配器
 * @param options 适配器选项
 * @returns 适配器函数
 */
export function createAdapter<TConfig extends ICommandComponentConfig = ICommandComponentConfig>(
  options: AdapterOptions<TConfig>
) {
  const { render: renderer, defaultConfig = {}, mountNode, configTransformer } = options;

  return function (createConfig: ICreateCommandComponentConfig = {}) {
    const parentInstance = getCurrentInstance();

    return function commandComponent(contentVNode: VNode, config: TConfig = {} as TConfig): IConsumer {
      // 合并配置
      let mergedConfig = merge({}, defaultConfig, config) as TConfig;

      // 应用配置转换器
      if (configTransformer) {
        mergedConfig = configTransformer(mergedConfig, createConfig);
      }

      const visible = ref<boolean>(isNull(createConfig.visible) ? true : !!createConfig.visible);

      const consumerRef = {
        value: null as unknown as IConsumer,
      };

      const Wrapper = defineComponent({
        setup: () => {
          const componentRef = ref();

          const onMounted = () => {
            Promise.resolve().then(() => {
              consumerRef.value!.componentRef = componentRef;
            });
          };

          const renderOptions: IRenderComponentOptions<TConfig> = {
            componentRef,
            visible,
            onMounted,
            config: mergedConfig,
            consumer: consumerRef!,
          };

          return () => {
            return renderer(contentVNode, renderOptions);
          };
        },
      });

      // 合并最终配置
      const finalCreateConfig = merge(createConfig, {
        appendTo: mountNode || createConfig.appendTo,
      });

      const finalConfig = {
        ...finalCreateConfig,
        ...mergedConfig,
        visible,
      };

      consumerRef.value = CommandProviderWithRender(parentInstance, h(Wrapper), finalConfig);

      return consumerRef.value!;
    };
  };
}


