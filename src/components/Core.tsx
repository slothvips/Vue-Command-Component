import { PromiseWithResolvers } from "@/utils";
import type { Component, ComponentInternalInstance, InjectionKey, Ref } from "vue";
import { defineComponent, inject, nextTick, render, provide } from "vue";
import { ConsumerEventBus } from "./utils";
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
  /** 一般是ui库的弹窗实例,但是具体是什么要看你的实现 */
  componentRef?: Ref<any>;
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

const eventBus = new ConsumerEventBus()
// 整理并返回provide链
const getProvidesChain = (ins: ComponentInternalInstance): any => {
  const provides = (ins as any).provides
  return {
    ...ins.parent ? getProvidesChain(ins.parent) : {},
    ...provides
  }
}
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
  const destroy = (external = false) => {
    if (external) {
      hide();
      nextTick(() => {
        render(null, container);
        container.remove();
      });
    } else {
      // 销毁下游的所有弹窗
      consumer.stack.splice(consumer.stackIndex).forEach((c) => c.destroy(true))
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
    on: (name: string | symbol, callback: Function) => {
      eventBus.on(consumer, name, callback)
    },
    once: (name: string | symbol, callback: Function) => {
      eventBus.on(consumer, name, callback)
    },
    emit: (name: string | symbol, ...args: any) => {
      eventBus.emit(consumer, name, ...args)
    },
    off: (name: string | symbol, callback: Function) => {
      eventBus.off(consumer, name, callback)
    },
    stack: [],
    stackIndex: -1
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

// 获取命令弹窗消费者对象
export function getCommandDialogConsumer(warn: boolean = true): IConsumer {
  const showWarningMessage = () =>
    warn &&
    console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);

  const consumer = inject<IConsumer>(
    CommandDialogConsumerInjectKey,
    // 有一些组件可能不单应用于命令弹窗内,那么他是一定没有被注入Consumer的.但是有关命令弹窗的相关逻辑可能还是存在于这个组件中,这个时候不应该报错终止程序
    new Proxy({} as IConsumer, {
      get: () => showWarningMessage,
      apply: showWarningMessage,
    })
  );

  return consumer!;
}
