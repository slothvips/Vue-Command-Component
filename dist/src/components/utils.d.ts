import { IConsumer, IOnConfig, EventCallback, IPromiseWithResolvers, DeepMergeable } from './type';
/**
 * 基于命令弹窗消费对象的事件注册中心
 */
export declare class ConsumerEventBus {
    private map;
    private getEventsMapByConsumer;
    private getEventsByConsumer;
    on(consumer: IConsumer, name: string | symbol, callback: EventCallback, config?: IOnConfig): void;
    once(consumer: IConsumer, name: string | symbol, callback: EventCallback): void;
    emit(consumer: IConsumer, name: string | symbol, ...args: unknown[]): void;
    off(consumer: IConsumer, name: string | symbol, callback: EventCallback): void;
}
/**
 * 将事件名转换为总线名称
 */
export declare const eventName2BusName: (name?: string) => string;
/**
 * 将总线名称转换为事件名
 */
export declare const busName2EventName: (name?: string) => string;
/**
 * 创建一个Promise和它的处理器
 */
export declare const PromiseWithResolvers: <T = unknown>() => IPromiseWithResolvers<T>;
/**
 * 在同级dom节点中获取最大的z-index
 */
export declare const getMaxZIndex: (domNode: HTMLElement) => number;
/**
 * Checks if a value is null or undefined
 * @param val - The value to check
 * @returns true if the value is null or undefined
 */
export declare const isNull: (val: unknown) => val is null | undefined;
/**
 * 深度合并多个对象
 * @param target - 目标对象
 * @param source - 源对象
 * @param args - 额外的合并对象
 * @returns 合并后的新对象
 */
export declare const deepMerge: <T extends DeepMergeable>(target: T, source: Partial<T>, ...args: Partial<T>[]) => T;
