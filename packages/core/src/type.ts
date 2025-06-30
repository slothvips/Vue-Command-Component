import type { ComponentPublicInstance, Ref, VNode, VNodeRef } from "vue";

/**
 * Represents a function that takes any arguments and returns a value
 * @template T - The return type of the function (defaults to unknown)
 */
export type AnyFunction<T = unknown> = (...args: any[]) => T;

export enum EVENT_NAME {
  // 销毁
  destroy = "destroy",
}

/**
 * 类似于vue-router中的meta数据,保存到consumer的meta属性中供消费
 */
export type Meta = {
  /** 弹窗别名 */
  name?: string;
  /** 扩展数据 */
  [key: string]: unknown;
};

// 创建时配置
export type ICreateCommandComponentConfig = {
  /** 是否立即显示 */
  visible?: boolean;
  /** 元数据 */
  meta?: Meta;
  /** 挂在点 */
  appendTo?: string | HTMLElement;
  /** 自定义类名 */
  customClassName?: string;
};

// 调用时配置,在执行命令时依然可以传入配置覆盖创建时配置,实现最大灵活度
export interface ICommandComponentConfig extends ICreateCommandComponentConfig {
  /** 私有域成员注入 */
  provideProps?: Record<string | symbol, unknown>;
  /** 组件原生属性 */
  attrs?: Record<string, any>;
  /** 组件插槽 */
  slots?: Record<string, () => VNode | VNode[]>;
}

export type ICommandComponentProviderConfig = ICommandComponentConfig & {
  visible: Ref<boolean, boolean>;
};

export interface IConsumer {
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
  once: (name: string | symbol, callback: (...args: unknown[]) => void) => void;
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

export interface IOnConfig {
  once?: boolean;
  // 延迟执行时间后,即使事件没有触发也立即调用
  callImmediatelyAfterDelay?: number;
}

/**
 * 适配器渲染组件的选项接口
 */
export interface IRenderComponentOptions<Config> {
  /** 组件引用 */
  componentRef: Ref;
  /** 是否可见 */
  visible: Ref<boolean>;
  /** 挂载回调 */
  onMounted: () => void;
  /** 组件配置 */
  config: Config;
  /** 消费者实例 */
  consumer: {
    value: IConsumer;
  };
}

/**
 * 事件总线回调函数类型
 */
export type EventCallback = (...args: unknown[]) => void;

/**
 * 事件回调集合类型
 */
export type EventCallbackSet = Set<EventCallback>;

/**
 * 事件映射类型
 */
export type EventMap = Map<string | symbol, EventCallbackSet>;

/**
 * 事件总线映射类型
 */
export type EventBusMap = WeakMap<IConsumer, EventMap>;

/**
 * Promise处理器返回类型
 */
export interface IPromiseWithResolvers<T = unknown> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason?: unknown) => void;
}
