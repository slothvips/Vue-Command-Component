import type { ComponentInternalInstance, InjectionKey, VNode } from "vue";
import {
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  nextTick,
  provide,
  render,
  Teleport,
} from "vue";
import {
  EVENT_NAME,
  type EventCallback,
  type IConsumer,
  type ICoreConfig,
  type IOnConfig,
} from "./type";
import {
  ConsumerEventBus,
  isVue3OrHigher,
  PromiseWithResolvers,
} from "./utils";

export const CommandComponentConsumerInjectKey: InjectionKey<IConsumer> =
  Symbol("CommandComponentConsumerInjectKey");
export const CommandComponentStackInjectKey: InjectionKey<IConsumer[]> = Symbol(
  "CommandComponentStackInjectKey",
);

const EB = new ConsumerEventBus();

export const activeConsumers = new Set<IConsumer>();

/**
 * 获取自身以及所有祖先provides链
 * @param ins - 组件实例
 * @returns provides链上的所有注入内容
 */
const getProvidesChain = (
  ins: ComponentInternalInstance,
): Record<string | symbol, unknown> => ({
  ...(ins.parent ? getProvidesChain(ins.parent) : {}),
  ...(ins as any).provides,
});

// 注入+渲染
export function commandProviderWithRender(
  parentInstance: ComponentInternalInstance | null,
  uiComponent: VNode,
  config: ICoreConfig,
): IConsumer {
  if (!isVue3OrHigher()) {
    throw new Error("Vue 3.0 or higher is required");
  }
  // 某些情况下,我们可能需要在vue组件树之外的地方使用命令式组件,这个时候无法捕获到组件实例,可以创建一个空的组件实例来代替,以免后续流程受到影响
  if (!parentInstance) {
    render(
      h({
        setup() {
          parentInstance = getCurrentInstance();
          return () => null;
        },
      }),
      document.body,
    );
  }

  // 挂在点
  const appendToElement =
    (typeof config.appendTo === "string"
      ? document.querySelector(config.appendTo)
      : config.appendTo) ||
    (parentInstance as any).vnode.el?.parentElement ||
    document.body;

  const containerEl = document.createElement("div");
  containerEl.className =
    config.customClassName || "command-component-container";

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
    on: (
      name: string | symbol,
      callback: EventCallback,
      config: IOnConfig = {},
    ) => EB.on(consumer, name, callback, config),
    once: (
      name: string | symbol,
      callback: EventCallback,
      config: IOnConfig = {},
    ) => EB.on(consumer, name, callback, config),
    emit: (name: string | symbol, ...args: unknown[]) =>
      EB.emit(consumer, name, ...args),
    off: (name: string | symbol, callback: EventCallback) =>
      EB.off(consumer, name, callback),
    stack: [] as IConsumer[],
    stackIndex: -1,
    componentRef: void 0,
    mounted: false,
    destroyed: false,
  };

  const CommandComponentProviderComponent = defineComponent({
    setup() {
      const commandInstance = getCurrentInstance();

      // 注入私有域成员
      for (const key in config.provideProps) {
        provide(key, config.provideProps[key]);
      }

      // 上游注入
      const upStreamProvides = {
        ...getProvidesChain(commandInstance!),
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

  // 如果启用了fragment模式
  if (config.fragment) {
    // 设置容器元素为完全隐藏，确保不会影响任何布局（包括flex布局）
    Object.assign(containerEl.style, {
      display: "none",
      position: "absolute",
      pointerEvents: "none",
    });
    document.head.appendChild(containerEl);
    render(
      h(
        Teleport,
        {
          to: appendToElement,
        },
        vnode,
      ),
      containerEl,
    );
  } else {
    appendToElement.appendChild(containerEl);
    render(vnode, containerEl);
  }

  // 如果immediate为undefined，则默认立即渲染
  if (config.immediate === undefined || config.immediate) {
    consumer.show();
  }

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
    true,
  )!;
};
