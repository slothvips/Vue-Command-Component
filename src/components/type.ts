import type { Ref } from "vue";

/**
 * Represents a function that takes any arguments and returns a value
 * @template T - The return type of the function (defaults to unknown)
 */
export type AnyFunction<T = unknown> = (...args: any[]) => T;

export enum EVENT_NAME {
  confirm = "confirm",
  cancel = "cancel",
  // 组件销毁时
  destory = "destory",
}

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

export interface IOnConfig {
  once?: boolean;
  // 延迟执行时间后,即使事件没有触发也立即调用
  callAfterDelay?: number;
}
