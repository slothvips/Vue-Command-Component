import { defineComponent, h, type VNode } from "vue";
import type { EventBusMap, EventCallback, EventMap, IConsumer, IOnConfig, IPromiseWithResolvers } from "./type";

/**
 * 基于命令弹窗消费对象的事件注册中心
 */
export class ConsumerEventBus {
  private map: EventBusMap = new WeakMap();

  private getEventsMapByConsumer(consumer: IConsumer): EventMap {
    let eventsMap = this.map.get(consumer);
    if (!eventsMap) {
      eventsMap = new Map();
      this.map.set(consumer, eventsMap);
    }
    return eventsMap;
  }

  private getEventsByConsumer(consumer: IConsumer, name: string | symbol): Set<EventCallback> {
    const eventsMap = this.getEventsMapByConsumer(consumer);
    let events = eventsMap.get(name);
    if (!events) {
      events = new Set();
      eventsMap.set(name, events);
    }
    return events;
  }

  on(consumer: IConsumer, name: string | symbol, callback: EventCallback, config: IOnConfig = {}): void {
    const events = this.getEventsByConsumer(consumer, name);
    let finalCallback = callback;
    if (config.once) {
      finalCallback = (...args: unknown[]) => {
        callback(...args);
        this.off(consumer, name, finalCallback);
      };
    }
    events.add(finalCallback);
    config.callImmediatelyAfterDelay !== void 0 &&
      setTimeout(() => {
        finalCallback();
      }, config.callImmediatelyAfterDelay || 0);
  }

  once(consumer: IConsumer, name: string | symbol, callback: EventCallback, config: IOnConfig = {}): void {
    this.on(consumer, name, callback, {
      ...config,
      once: true,
    });
  }

  emit(consumer: IConsumer, name: string | symbol, ...args: unknown[]): void {
    const events = this.getEventsByConsumer(consumer, name);
    events.forEach((callback) => callback(...args));
  }

  off(consumer: IConsumer, name: string | symbol, callback: EventCallback): void {
    this.getEventsByConsumer(consumer, name).delete(callback);
  }
}

/**
 * 将事件名转换为总线名称
 */
export const eventName2BusName = (name = ""): string => name.slice(2).toLowerCase();

/**
 * 将总线名称转换为事件名
 */
export const busName2EventName = (name = ""): string => `on${name.charAt(0).toUpperCase()}${name.slice(1)}`;

/**
 * 创建一个Promise和它的处理器
 */
export const PromiseWithResolvers = <T = unknown>(): IPromiseWithResolvers<T> => {
  let resolve: (value: T) => void = () => void 0;
  let reject: (reason?: unknown) => void = () => void 0;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
};

/**
 * 在同级dom节点中获取最大的z-index
 */
export const getMaxZIndex = (domNode: HTMLElement): number => {
  const siblings = domNode.parentElement?.children || [];
  let maxZIndex = 0;
  Array.from(siblings).forEach((sibling) => {
    if (sibling !== domNode) {
      const zIndex = parseInt(window.getComputedStyle(sibling).zIndex);
      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    }
  });
  return +maxZIndex;
};

/**
 * Checks if a value is null or undefined
 * @param val - The value to check
 * @returns true if the value is null or undefined
 */
export const isNull = (val: unknown): val is null | undefined => val === null || val === void 0;

// 将一个vnode渲染函数变更为响应式组件
export const RxRender = (render: () => VNode) => {
  // 如果不是一个函数,将直接返回内容(或许是一个vnode)
  if (typeof render !== "function") return render;
  return h(defineComponent({ render: () => render() }));
};

// 创建一个唯一的key
export const uuid = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
