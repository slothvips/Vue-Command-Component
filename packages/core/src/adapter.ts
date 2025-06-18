import { merge } from "lodash-es";
import type { ComponentInternalInstance, Ref, VNode } from "vue";
import { defineComponent, getCurrentInstance, h, ref } from "vue";
import { CommandProviderWithRender } from "./Core";
import type { ICommandComponentConfig, IConsumer, ICreateCommandComponentConfig, IRenderComponentOptions } from "./type";
import { isNull } from "./utils";

export abstract class UIComponentAdapter<Config extends ICommandComponentConfig = ICommandComponentConfig> {
  protected mountNode?: HTMLElement | string;
  public parentInstance: ComponentInternalInstance | null;

  constructor() {
    this.parentInstance = getCurrentInstance();
  }

  setMountNode(node: HTMLElement | undefined | string): void {
    this.mountNode = node;
  }

  createCommand(createConfig: ICreateCommandComponentConfig) {
    return (ContentVNode: VNode, config: Config = {} as Config): IConsumer => {
      const visible = ref<boolean>(isNull(createConfig.visible) ? true : !!createConfig.visible);
      const consumer = this.createConsumer(ContentVNode, visible, config, createConfig);
      return consumer;
    };
  }

  protected createConsumer(ContentVNode: VNode, visible: Ref<boolean>, config: Config, createConfig: ICreateCommandComponentConfig): IConsumer {
    // TODO: need a better idea
    const consumerRef = {
      value: null as unknown as IConsumer,
    };

    const Wrapper = defineComponent({
      setup: () => {
        const componentRef = ref();
        const handleMounted = () => {
          Promise.resolve().then(() => {
            consumerRef.value!.componentRef = componentRef;
          });
        };

        return () =>
          this.renderComponent(ContentVNode, {
            componentRef: componentRef,
            visible,
            onMounted: handleMounted,
            config,
            consumer: consumerRef!,
          });
      },
    });

    // 合并配置
    const mergedConfig = merge(createConfig, config);
    const finalConfig = {
      ...mergedConfig,
      visible,
    };

    consumerRef.value = CommandProviderWithRender(this.parentInstance, h(Wrapper), finalConfig);

    return consumerRef.value!;
  }

  /**
   * 渲染组件
   * @param ContentVNode - 内容节点
   * @param options - 渲染选项
   */
  protected abstract renderComponent(ContentVNode: VNode, getOptions: IRenderComponentOptions<Config>): VNode;
}
