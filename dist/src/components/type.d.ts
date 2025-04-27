import { Ref } from 'vue';
/**
 * Represents a function that takes any arguments and returns a value
 * @template T - The return type of the function (defaults to unknown)
 */
export type AnyFunction<T = unknown> = (...args: any[]) => T;
export declare enum EVENT_NAME {
    confirm = "confirm",
    cancel = "cancel",
    destory = "destory"
}
export type ICreateCommandComponentConfig = {
    /** 是否立即显示 */
    immediately?: boolean;
    /** 元数据 */
    meta?: Meta;
};
/**
 * 类似于vue-router中的meta数据,保存到consumer的meta属性中供消费
 */
export type Meta = {
    /** 弹窗别名 */
    name?: string;
    /** 扩展数据 */
    [key: string]: unknown;
};
export interface ICommandComponentArrtsProviderConfig {
    /** 私有域成员注入 */
    provideProps?: Record<string | symbol, unknown>;
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
    promise: Promise<unknown>;
    /** 弹窗promise执行器参数resolve */
    resolve: (val?: unknown) => void;
    /** 弹窗promise执行器参数reject */
    reject: (reason?: unknown) => void;
    /** 弹窗销毁,并解决promise */
    destroyWithResolve: (val?: unknown) => void;
    /** 弹窗销毁,并拒绝promise */
    destroyWithReject: (reason?: unknown) => void;
    /** 订阅取消 */
    off: (name: string | symbol, callback: (...args: unknown[]) => void) => void;
    /** 订阅 */
    on: (name: string | symbol, callback: (...args: unknown[]) => void, config?: IOnConfig) => void;
    /** 单次订阅 */
    once: (name: string | symbol, callback: (...args: unknown[]) => void) => void;
    /** 发布 */
    emit: (name: string | symbol, ...args: unknown[]) => void;
    /** UI库的弹窗实例引用 */
    componentRef?: Ref<any>;
    /** 弹窗挂载的html元素 */
    container: HTMLDivElement;
    /** 弹窗嵌套堆栈 */
    stack: IConsumer[];
    /** 当前在弹窗嵌套堆栈中的索引 */
    stackIndex: number;
}
export interface IOnConfig {
    once?: boolean;
    callAfterDelay?: number;
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
/**
 * 深度合并对象类型
 */
export type DeepMergeable = Record<string, unknown>;
