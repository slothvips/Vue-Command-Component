import type { Component, ComponentInternalInstance, InjectionKey } from "vue";
import { defineComponent, inject, nextTick, provide, render } from "vue";
import { EVENT_NAME, type ICommandComponentProviderConfig, type IConsumer, type IOnConfig } from "./type";
import { ConsumerEventBus, PromiseWithResolvers } from "./utils";

// Consumer inject key
export const CommandComponentConsumerInjectKey: InjectionKey<IConsumer> = Symbol("CommandComponentConsumerInjectKey");
// Stack inject key
export const CommandComponentStackInjectKey: InjectionKey<IConsumer[]> = Symbol("CommandComponentStackInjectKey");

const eventBus = new ConsumerEventBus();

// 所有未被内存销毁的命令式组件Consumer集合
// 其用途是为了提供一个接触不到Consumer的地方去操作Consumer
export const activeCommandComponentConsumers = new Set<IConsumer>();
// 销毁所有命令式组件
export const destroyAllCommandComponentConsumer = () => {
  console.log("destroyAllCommandComponentConsumer");
  activeCommandComponentConsumers.forEach((consumer) => {
    consumer.destroy();
  });
};

// 获取上游所有provides链
const getProvidesChain = (ins: ComponentInternalInstance): any => ({
  ...(ins.parent ? getProvidesChain(ins.parent) : {}),
  ...(ins as any).provides,
});
export function CommandProvider(parentInstance: ComponentInternalInstance | null, uiComponentVnode: Component, config: ICommandComponentProviderConfig): IConsumer {
  const appendToElement = (typeof config.appendTo === "string" ? document.querySelector(config.appendTo) : config.appendTo) || document.body;
  const container = document.createElement("div");
  container.className = config.customClassName || "command-commponent-container";

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
  };
  const destroy = (external = false) => {
    if (external) {
      // 这里的事件是为了完整的关闭动画展示
      // 如果关闭时没有触发该事件,那么将永远不会执行卸载操作所以加入延时立即调用,保证最终一定会执行卸载操作
      // 没有一个弹窗动画会超过三秒吧 =.=
      consumer.on(EVENT_NAME.destory, unmount, { once: true, callAfterDelay: 3000 });
      hide();
    } else {
      // 从集合中删除掉consumer
      activeCommandComponentConsumers.delete(consumer);
      // 当前弹窗关闭,需要销毁所有下游的弹窗
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
    meta: config.meta || {},
    promise,
    resolve,
    reject,
    destroyWithResolve,
    destroyWithReject,
    hide,
    show,
    destroy,
    container,
    visible: config.visible,
    on: (name: string | symbol, callback: Function, config: IOnConfig = {}) => eventBus.on(consumer, name, callback, config),
    once: (name: string | symbol, callback: Function) => eventBus.once(consumer, name, callback),
    emit: (name: string | symbol, ...args: any) => eventBus.emit(consumer, name, ...args),
    off: (name: string | symbol, callback: Function) => eventBus.off(consumer, name, callback),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
  };

  const CommandComponentProviderComponent = defineComponent({
    setup() {
      // 注入私有域成员
      for (const key in config.provideProps) {
        provide(key, config.provideProps[key]);
      }
      // 注入consumer
      provide(CommandComponentConsumerInjectKey, consumer);

      // 嵌套弹窗的堆栈,最终你可以在任何一个consumer中获取到所有嵌套的consumer
      const stack = inject(CommandComponentStackInjectKey, []);
      // 标记当前弹窗的index
      consumer.stackIndex = stack.length;
      stack.push(consumer);
      // 继续注入给子组件
      provide(CommandComponentStackInjectKey, stack);
      consumer.stack = stack;

      return () => uiComponentVnode;
    },
  });
  const vnode = <CommandComponentProviderComponent />;

  // 应用上下文继承处理
  vnode.appContext = parentInstance?.appContext || vnode.appContext;
  vnode.appContext!.provides = {
    ...vnode.appContext!.provides,
    ...getProvidesChain(parentInstance!),
  };

  render(vnode, container);

  activeCommandComponentConsumers.add(consumer);
  return consumer;
}

export const getConsumer = (warn: boolean = true): IConsumer => {
  const showWarningMessage = () =>
    warn &&
    console.warn(`没有根据CommandComponentConsumerInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup顶层中直接调用.
    2.你没有(或者你根本不需要)在命令弹窗内展示该组件,这个时候你一般可以通过warn参数忽略该警告消息.`);

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

// ---------------------------------
/**
 * @deprecated This API will be deprecated in the future, please use `getConsumer` instead.
 */
export const getCommandDialogConsumer = (...args: any) => {
  console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead.");
  return getConsumer(...args);
};
