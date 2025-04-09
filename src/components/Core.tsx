import type { Component, ComponentInternalInstance, InjectionKey, Ref } from "vue";
import { defineComponent, inject, nextTick, provide, render } from "vue";
import { EVENT_NAME } from "./type";
import { ConsumerEventBus, PromiseWithResolvers, type IOnConfig } from "./utils";

export interface ICommandComponentArrtsProviderConfig {
  /** 私有域成员注入 */
  provideProps?: Record<string, any>;
  /** 追加到哪个元素 */
  appendTo?: string | HTMLElement;
  /** 自定义类名 */
  customClassName?: string;
  /** 元数据 */
  meta?: Meta;
}

export type ICommandComponentProviderConfig = ICommandComponentArrtsProviderConfig & {
  /** 是否可见 */
  visible: Ref<boolean>;
};

// 创建参数,
export type ICreateCommandComponentConfig = {
  /** 是否立即显示 */
  immediately?: boolean;
  /** 元数据 */
  meta?: Meta;
};
// 类似于vue-router中的meta数据,后续会被保存到consumer的meta属性中,你可以在任何地方进行消费
export type Meta = {
  // 你可以给你的弹窗取一个别名
  name?: string;
  // 任意拓展数据
  [key: string]: any;
};

/** 弹窗消费者对象,理解为弹窗控制器也可以*/
export interface IConsumer {
  /** 弹窗实例的元数据,比如弹窗的类型,弹窗的名称等,以及你自己拓展的任何数据 */
  meta?: Meta;
  /** 弹窗是否可见响应式变量,虽然已经提供了hide以及show方法不需要通过该属性来控制弹窗的显示与隐藏,但是为了方便一些特殊场景,还是提供了该属性,比如你需要watch这个属性来做一些事情 */
  visible: Ref<boolean>;
  /** 隐藏 */
  hide: () => void;
  /** 显示 */
  show: () => void;
  /** 弹窗销毁,但是不继续推进promise的状态改变 */
  destroy: (external?: boolean) => void;
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
  /** 订阅取消 */
  off: (name: string | symbol, callback: Function) => void;
  /** 订阅 */
  on: (name: string | symbol, callback: Function, config?: IOnConfig) => void;
  /** 单次订阅 */
  once: (name: string | symbol, callback: Function) => void;
  /** 发布 */
  emit: (name: string | symbol, ...args: any) => void;
  /** 一般建议赋值为UI库的弹窗实例实例Ref */
  componentRef?: Ref<any> | undefined;
  /** 弹窗挂载的html元素 */
  container: HTMLDivElement;
  /** 弹窗嵌套堆栈 */
  stack: IConsumer[];
  /** 当前在弹窗嵌套堆栈中的索引 */
  stackIndex: number;
}

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
    console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandComponentConsumerInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
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
