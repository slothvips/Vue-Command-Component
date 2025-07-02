import type { Component, ComponentInternalInstance, InjectionKey } from "vue";
import { defineComponent, h, inject, nextTick, provide, render } from "vue";
import { EVENT_NAME, type EventCallback, type IConsumer, type ICoreConfig, type IOnConfig } from "./type";
import { ConsumerEventBus, PromiseWithResolvers } from "./utils";

export const CommandComponentConsumerInjectKey: InjectionKey<IConsumer> = Symbol("CommandComponentConsumerInjectKey");
export const CommandComponentStackInjectKey: InjectionKey<IConsumer[]> = Symbol("CommandComponentStackInjectKey");

const EB = new ConsumerEventBus();

export const activeConsumers = new Set<IConsumer>();

export const destroyAllConsumer = (): void => {
  activeConsumers.forEach((consumer) => {
    consumer.destroy();
  });
};

/**
 * 获取自身以及所有祖先provides链
 * @param ins - 组件实例
 * @returns provides链上的所有注入内容
 */
const getProvidesChain = (ins: ComponentInternalInstance): Record<string | symbol, unknown> => ({
  ...(ins.parent ? getProvidesChain(ins.parent) : {}),
  ...(ins as any).provides,
});

// 注入+渲染
export function CommandProviderWithRender(parentInstance: ComponentInternalInstance | null, uiComponent: Component, config: ICoreConfig): IConsumer {
  const appendToElement = (typeof config.appendTo === "string" ? document.querySelector(config.appendTo) : config.appendTo) || (parentInstance as any).vnode.el?.parentElement || document.body;

  const containerEl = document.createElement("div");
  containerEl.className = config.customClassName || "command-component-container";
  appendToElement.appendChild(containerEl);

  const hide = () => {
    if (consumer.destroyed) throw new Error("Consumer has been destroyed");
    config.visible.value = false;
  };
  const show = () => {
    if (consumer.destroyed) throw new Error("Consumer has been destroyed");
    config.visible.value = true;
  };
  const unmount = () => {
    nextTick(() => {
      render(null, containerEl);
      containerEl.remove();
    });
  };

  const { promise, resolve, reject } = PromiseWithResolvers<unknown>();
  const DEFAULT_ANIMATION_TIMEOUT = 3000;

  const destroy = (external = false): void => {
    if (external) {
      hide();
      // Delay destruction to ensure component animation completion (3s is enough.)
      consumer.once(EVENT_NAME.destroy, unmount, {
        once: true,
        callImmediatelyAfterDelay: DEFAULT_ANIMATION_TIMEOUT,
      });
    } else {
      activeConsumers.delete(consumer);
      // Destroy all downstream dialogs
      const stack = consumer.stack.splice(consumer.stackIndex);
      stack.forEach((c: IConsumer) => c.destroy(true));
      consumer.destroyed = true;
    }
  };

  const destroyWithResolve = (val: unknown): void => {
    resolve(val);
    destroy();
  };
  const destroyWithReject = (reason: unknown): void => {
    reject(reason);
    destroy();
  };

  const consumer: IConsumer = {
    meta: config.meta || {},
    promise,
    resolve,
    reject,
    destroyWithResolve,
    destroyWithReject,
    hide,
    show,
    destroy,
    container: containerEl,
    visible: config.visible,
    on: (name: string | symbol, callback: EventCallback, config: IOnConfig = {}) => EB.on(consumer, name, callback, config),
    once: (name: string | symbol, callback: EventCallback, config: IOnConfig = {}) => EB.once(consumer, name, callback, config),
    emit: (name: string | symbol, ...args: unknown[]) => EB.emit(consumer, name, ...args),
    off: (name: string | symbol, callback: EventCallback) => EB.off(consumer, name, callback),
    stack: [] as IConsumer[],
    stackIndex: -1,
    componentRef: void 0,
    mounted: false,
    destroyed: false,
  };

  const CommandComponentProviderComponent = defineComponent({
    setup() {
      // 注入私有域成员
      for (const key in config.provideProps) {
        provide(key, config.provideProps[key]);
      }

      // 上游注入
      const upStreamProvides = {
        // ...vnode.appContext!.provides,
        ...getProvidesChain(parentInstance!),
      };
      for (const key in upStreamProvides) {
        provide(key, upStreamProvides[key]);
      }

      // 注入consumer
      provide(CommandComponentConsumerInjectKey, consumer);

      // 处理嵌套弹窗
      const stack = inject(CommandComponentStackInjectKey, []);
      consumer.stackIndex = stack.length;
      stack.push(consumer);
      provide(CommandComponentStackInjectKey, stack);
      consumer.stack = stack;

      return () => h(uiComponent);
    },
  });

  const vnode = <CommandComponentProviderComponent />;

  vnode.appContext = parentInstance?.appContext || vnode.appContext;

  render(vnode, containerEl);
  consumer.mounted = true;

  activeConsumers.add(consumer);

  return consumer;
}

export const useConsumer = (warn: boolean = true): IConsumer => {
  const showWarningMessage = () =>
    warn &&
    console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return inject<IConsumer>(
    CommandComponentConsumerInjectKey,
    () =>
      new Proxy({} as IConsumer, {
        get: () => showWarningMessage,
        apply: showWarningMessage,
      }),
    true
  )!;
};
