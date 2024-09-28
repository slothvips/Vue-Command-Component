import { PromiseWithResolvers } from "@/utils";
import type { Component, ComponentInternalInstance, InjectionKey, Ref } from "vue";
import { defineComponent, inject, nextTick, render, provide } from "vue";
import { ConsumerEventBus } from "./utils";
import { EVENT_NAME } from "./type";

export interface ICommandDialogArrtsProviderConfig {
  provideProps?: Record<string, any>;
  appendTo?: string | HTMLElement;
}

export type ICommandDialogProviderConfig = ICommandDialogArrtsProviderConfig & {
  visible: Ref<boolean>;
};

/** 弹窗消费者对象,或者也可理解为弹窗实例实例~ */
export interface IConsumer {
  /** 弹窗promise */
  promise: Promise<any>;
  /** 弹窗promise执行器参数resolve */
  resolve: (val?: any) => void;
  /** 弹窗promise执行器参数reject */
  reject: (reason?: any) => void;
  /** 弹窗销毁,并解决promise */
  destroyWithResolve: (val?: any) => void;
  /** 弹窗销毁,并拒绝promise */
  destroyWithReject: (reason?: any) => void;
  /** 弹窗销毁,不处理promise */
  destroy: (external?: boolean) => void;
  /** 隐藏 */
  hide: () => void;
  /** 显示 */
  show: () => void;
  /** 订阅取消 */
  off: (name: string | symbol, callback: Function) => void;
  /** 订阅 */
  on: (name: string | symbol, callback: Function) => void;
  /** 单次订阅 */
  once: (name: string | symbol, callback: Function) => void;
  /** 发布 */
  emit: (name: string | symbol, ...args: any) => void;
  /** 一般建议赋值为UI库的弹窗实例实例Ref */
  componentRef?: Ref<any> | undefined;
  /** 弹窗挂载的html元素 */
  container: HTMLDivElement
  /** 弹窗嵌套堆栈 */
  stack: IConsumer[],
  /** 当前在弹窗嵌套堆栈中的索引 */
  stackIndex: number
}

// Consumer inject key
export const CommandDialogConsumerInjectKey: InjectionKey<IConsumer> = Symbol("CommandDialogConsumerInjectKey");
// Stack inject key
export const CommandDialogStackInjectKey: InjectionKey<IConsumer[]> = Symbol("CommandDialogStackInjectKey");

const eventBus = new ConsumerEventBus();

const getProvidesChain = (ins: ComponentInternalInstance): any => ({
  ...ins.parent ? getProvidesChain(ins.parent) : {},
  ...(ins as any).provides
});

export function CommandDialogProvider(parentInstance: ComponentInternalInstance | null, uiComponentVnode: Component, config: ICommandDialogProviderConfig) {
  const appendToElement = (typeof config.appendTo === "string" ? document.querySelector(config.appendTo) : config.appendTo) || document.body;
  const container = document.createElement("div");
  appendToElement.appendChild(container);

  const hide = () => {
    config.visible.value = false;
  };
  const show = () => {
    config.visible.value = true;
  };
  const unmount = () => {
    nextTick(() => {
      render(null, container);
      container.remove();
    });
  }
  const destroy = (external = false) => {
    if (external) {
      consumer.once(EVENT_NAME.destory, unmount);
      hide();
    } else {
      consumer.stack.splice(consumer.stackIndex).forEach((c) => c.destroy(true));
    }
  };

  const { promise, resolve, reject } = PromiseWithResolvers();
  const destroyWithResolve = (val: any) => {
    resolve(val);
    destroy();
  };
  const destroyWithReject = (reason: any) => {
    reject(reason);
    destroy();
  };

  const consumer: IConsumer = {
    promise, resolve, reject, destroyWithResolve, destroyWithReject, hide, show, destroy, container,
    on: (name: string | symbol, callback: Function) => eventBus.on(consumer, name, callback),
    once: (name: string | symbol, callback: Function) => eventBus.once(consumer, name, callback),
    emit: (name: string | symbol, ...args: any) => eventBus.emit(consumer, name, ...args),
    off: (name: string | symbol, callback: Function) => eventBus.off(consumer, name, callback),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  };

  const CommandDialogProviderComponent = defineComponent({
    setup() {
      for (const key in config.provideProps) {
        provide(key, config.provideProps[key]);
      }
      provide(CommandDialogConsumerInjectKey, consumer);

      const stack = inject(CommandDialogStackInjectKey, [])
      consumer.stackIndex = stack.length
      stack.push(consumer)
      provide(CommandDialogStackInjectKey, stack)
      consumer.stack = stack

      return () => uiComponentVnode;
    },
  });
  const vnode = <CommandDialogProviderComponent />;

  vnode.appContext = parentInstance?.appContext || vnode.appContext;

  vnode.appContext!.provides = {
    ...vnode.appContext!.provides,
    ...getProvidesChain(parentInstance!),
  }

  render(vnode, container);
  return consumer;
}

export const getCommandDialogConsumer = (warn: boolean = true): IConsumer => {
  const showWarningMessage = () =>
    warn && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);

  return inject<IConsumer>(
    CommandDialogConsumerInjectKey,
    new Proxy({} as IConsumer, {
      get: () => showWarningMessage,
      apply: showWarningMessage,
    })
  )!;
};
