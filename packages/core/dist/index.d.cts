import * as vue0 from "vue";
import { ComponentInternalInstance, InjectionKey, Ref, VNode } from "vue";

//#region src/type.d.ts
declare enum EVENT_NAME {
  destroy = "destroy",
}
/**
 * 类似于vue-router中的meta数据,保存到consumer的meta属性中供消费
 */
type Meta = {
  /** 弹窗别名 */
  name?: string;
  /** 扩展数据 */
  [key: string]: unknown;
};
type IUseConfig<T = Record<string | symbol | number, unknown>> = {
  /** 元数据 */
  meta?: Meta;
  /** 挂载点 */
  appendTo?: string | HTMLElement;
  /** 自定义类名 */
  customClassName?: string;
  /** 是否立即渲染 */
  immediate?: boolean;
  /** 默认false,将为你的组件创建一个容器;如果为true将直接渲染到挂载点 */
  fragment?: boolean;
} & T;
type IUseConfigOrGetter = ValueOrGetter<IUseConfig>;
interface ICommandConfig<ATTRS = Record<string | symbol | number, any>> extends IUseConfig {
  /** 私有域成员注入 */
  provideProps?: Record<string | symbol, unknown>;
  /** 组件插槽 */
  slots?: Record<string, () => VNode | VNode[]>;
  /** 组件原生属性 */
  attrs?: ATTRS & {
    [key: string | symbol | number]: any;
  };
}
type ICoreConfig = ICommandConfig & {
  visible: Ref<boolean>;
};
interface IConsumer {
  /** 组件实例的元数据 */
  meta?: Meta;
  /** 是否可见响应式变量,虽然已经提供了hide以及show方法不需要通过该属性来控制弹窗的显示与隐藏,但是为了方便一些特殊场景,还是提供了该属性,比如你需要watch这个属性来做一些事情 */
  visible: Ref<boolean>;
  /** 隐藏 */
  hide: () => void;
  /** 显示 */
  show: () => void;
  /** 销毁,但是不继续推进promise的状态改变 */
  destroy: (external?: boolean) => void;
  /** promise */
  promise: Promise<unknown>;
  /** promise执行器参数resolve */
  resolve: (val?: unknown) => void;
  /** promise执行器参数reject */
  reject: (reason?: unknown) => void;
  /** 销毁,并解决promise */
  destroyWithResolve: (val?: unknown) => void;
  /** 销毁,并拒绝promise */
  destroyWithReject: (reason?: unknown) => void;
  /** 订阅取消 */
  off: (name: string | symbol, callback: (...args: unknown[]) => void) => void;
  /** 订阅 */
  on: (name: string | symbol, callback: (...args: unknown[]) => void, config?: IOnConfig) => void;
  /** 单次订阅 */
  once: (name: string | symbol, callback: (...args: unknown[]) => void, config?: IOnConfig) => void;
  /** 发布 */
  emit: (name: string | symbol, ...args: unknown[]) => void;
  /** UI库的组件实例引用 */
  componentRef?: Ref<any>;
  /** 组件挂载的html元素 */
  container: HTMLDivElement;
  /** 组件嵌套堆栈 */
  stack: IConsumer[];
  /** 当前在组件嵌套堆栈中的索引 */
  stackIndex: number;
  /** 已挂载 */
  mounted: boolean;
  /** 已销毁 */
  destroyed: boolean;
}
interface IOnConfig {
  once?: boolean;
  callImmediatelyAfterDelay?: number;
}
/**
 * 适配器渲染组件的选项接口
 */
interface IRenderComponentOptions<Config> {
  /** 组件引用 */
  componentRef: Ref;
  /** 是否可见 */
  visible: Ref<boolean>;
  /** 挂载回调 */
  onMounted: () => void;
  /** 组件配置 */
  config: Ref<Config>;
  /** 消费者实例 */
  consumer: {
    value: IConsumer;
  };
}
/**
 * 事件总线回调函数类型
 */
type EventCallback = (...args: unknown[]) => void;
/**
 * 事件回调集合类型
 */
type EventCallbackSet = Set<EventCallback>;
/**
 * 事件映射类型
 */
type EventMap = Map<string | symbol, EventCallbackSet>;
/**
 * 事件总线映射类型
 */
type EventBusMap = WeakMap<IConsumer, EventMap>;
/**
 * Promise处理器返回类型
 */
interface IPromiseWithResolvers<T = unknown> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason?: unknown) => void;
}
/**
 * 返回泛型的函数类型,或者直接返回泛型
 * @template T 输入类型
 * @template R 返回类型
 */
type ValueOrGetter<T> = (() => T) | T;
//#endregion
//#region src/core.d.ts
declare const CommandComponentConsumerInjectKey: InjectionKey<IConsumer>;
declare const CommandComponentStackInjectKey: InjectionKey<IConsumer[]>;
declare const activeConsumers: Set<IConsumer>;
declare function commandProviderWithRender(parentInstance: ComponentInternalInstance | null, uiComponent: VNode, config: ICoreConfig): IConsumer;
declare const useConsumer: (warn?: boolean) => IConsumer;
//#endregion
//#region src/adapter.d.ts
type AdapterRender<TConfig extends ICommandConfig = ICommandConfig> = (contentVNode: VNode, options: IRenderComponentOptions<TConfig>) => VNode;
type AdapterOptions<TConfig extends ICommandConfig = ICommandConfig> = {
  /** 渲染器函数 */
  render: AdapterRender<TConfig>;
  /** 默认配置 */
  defaultConfig?: Partial<TConfig>;
  /** 挂载节点 */
  appendTo?: HTMLElement | string;
  /** 配置转换器 - 在渲染前对配置进行转换 */
  configTransformer?: (config: TConfig & ICommandConfig) => TConfig & ICommandConfig;
};
/**
 * 创建函数式适配器
 * @param options 适配器选项
 * @returns 适配器函数
 */
declare function createAdapter<TConfig extends ICommandConfig = ICommandConfig>(options: AdapterOptions<TConfig>): (useConfig?: IUseConfigOrGetter) => (contentVNode: VNode, commandConfig?: ValueOrGetter<TConfig>) => IConsumer;
//#endregion
//#region src/utils.d.ts
/**
 * 基于命令弹窗消费对象的事件注册中心
 */
declare class ConsumerEventBus {
  private map;
  private getEventsMapByConsumer;
  private getEventsByConsumer;
  on(consumer: IConsumer, name: string | symbol, callback: EventCallback, config?: IOnConfig): void;
  once(consumer: IConsumer, name: string | symbol, callback: EventCallback, config?: IOnConfig): void;
  emit(consumer: IConsumer, name: string | symbol, ...args: unknown[]): void;
  off(consumer: IConsumer, name: string | symbol, callback: EventCallback): void;
}
/**
 * 将事件名转换为总线名称
 */
declare const eventName2BusName: (name?: string) => string;
/**
 * 将总线名称转换为事件名
 */
declare const busName2EventName: (name?: string) => string;
/**
 * 创建一个Promise和它的处理器
 */
declare const PromiseWithResolvers: <T = unknown>() => IPromiseWithResolvers<T>;
/**
 * 在同级dom节点中获取最大的z-index
 */
declare const getMaxZIndex: (domNode: HTMLElement) => number;
/**
 * Checks if a value is null or undefined
 * @param val - The value to check
 * @returns true if the value is null or undefined
 */
declare const isNull: (val: unknown) => val is null | undefined;
declare const RxRender: (render: () => VNode) => VNode<vue0.RendererNode, vue0.RendererElement, {
  [key: string]: any;
}>;
declare const uuid: () => string;
/**
 * 检测当前是否为Vue 3.0以上版本
 * @returns true if Vue version is 3.0 or higher
 */
declare const isVue3OrHigher: () => boolean;
//#endregion
export { AdapterOptions, AdapterRender, CommandComponentConsumerInjectKey, CommandComponentStackInjectKey, ConsumerEventBus, EVENT_NAME, EventBusMap, EventCallback, EventCallbackSet, EventMap, ICommandConfig, IConsumer, ICoreConfig, IOnConfig, IPromiseWithResolvers, IRenderComponentOptions, IUseConfig, IUseConfigOrGetter, Meta, PromiseWithResolvers, RxRender, ValueOrGetter, activeConsumers, busName2EventName, commandProviderWithRender, createAdapter, eventName2BusName, getMaxZIndex, isNull, isVue3OrHigher, useConsumer, uuid };