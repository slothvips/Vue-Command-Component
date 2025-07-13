import { merge } from "lodash-es";
import type { VNode } from "vue";
import { computed, defineComponent, getCurrentInstance, ref } from "vue";
import { commandProviderWithRender } from "./core";
import type {
  ICommandConfig,
  IConsumer,
  IRenderComponentOptions,
  IUseConfigOrGetter,
  ValueOrGetter,
} from "./type";

export type AdapterRender<TConfig extends ICommandConfig = ICommandConfig> = (
  contentVNode: VNode,
  options: IRenderComponentOptions<TConfig>,
) => VNode;

export type AdapterOptions<TConfig extends ICommandConfig = ICommandConfig> = {
  /** 渲染器函数 */
  render: AdapterRender<TConfig>;
  /** 默认配置 */
  defaultConfig?: Partial<TConfig>;
  /** 挂载节点 */
  appendTo?: HTMLElement | string;
  /** 配置转换器 - 在渲染前对配置进行转换 */
  configTransformer?: (
    config: TConfig & ICommandConfig,
  ) => TConfig & ICommandConfig;
};

/**
 * 创建函数式适配器
 * @param options 适配器选项
 * @returns 适配器函数
 */
export function createAdapter<TConfig extends ICommandConfig = ICommandConfig>(
  options: AdapterOptions<TConfig>,
) {
  const { render, defaultConfig = {}, configTransformer } = options;

  return function (useConfig?: IUseConfigOrGetter) {
    const parentInstance = getCurrentInstance();
    return function commandComponent(
      contentVNode: VNode,
      commandConfig?: ValueOrGetter<TConfig>,
    ): IConsumer {
      const mergedConfig = computed(() => {
        const useConfigData =
          typeof useConfig === "function" ? useConfig() : useConfig;
        const commandConfigData =
          typeof commandConfig === "function" ? commandConfig() : commandConfig;

        const mergedConfig = merge(
          {},
          defaultConfig,
          useConfigData,
          commandConfigData,
        );

        return configTransformer
          ? configTransformer(mergedConfig)
          : mergedConfig;
      });

      // 默认不显示,否则组件进入动画可能不正常,后续将在core中根据情况显示
      const visible = ref<boolean>(false);

      const consumerRef = {
        value: null as unknown as IConsumer,
      };

      const Wrapper = defineComponent({
        setup: () => {
          const mergedConfig = computed(() => {
            const useConfigData =
              typeof useConfig === "function" ? useConfig() : useConfig;
            const commandConfigData =
              typeof commandConfig === "function"
                ? commandConfig()
                : commandConfig;

            const mergedConfig = merge(
              {},
              defaultConfig,
              useConfigData,
              commandConfigData,
            );

            return configTransformer
              ? configTransformer(mergedConfig)
              : mergedConfig;
          });

          const componentRef = ref();
          const onMounted = () => {
            Promise.resolve().then(() => {
              consumerRef.value!.componentRef = componentRef;
            });
          };

          const renderOptions: IRenderComponentOptions<TConfig> = {
            componentRef,
            onMounted,
            config: mergedConfig,
            consumer: consumerRef!,
            visible,
          };

          return () => render(contentVNode, renderOptions);
        },
      });
      consumerRef.value = commandProviderWithRender(
        parentInstance,
        <Wrapper />,
        {
          ...mergedConfig.value,
          visible,
        },
      );

      return consumerRef.value!;
    };
  };
}
