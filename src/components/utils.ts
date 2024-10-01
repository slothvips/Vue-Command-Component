import type { IConsumer } from "./Core";

export interface IOnConfig {
  once?: boolean;
  // 延迟执行时间后,即使事件没有触发也立即调用
  callAfterDelay?: number;
}

// 基于命令弹窗消费对象的事件注册中心
export class ConsumerEventBus {
  private map = new WeakMap<IConsumer, Map<string | symbol, Set<Function>>>();

  private getEventsMapByConsumer(consumer: IConsumer): Map<string | symbol, Set<Function>> {
    let eventsMap = this.map.get(consumer);
    if (!eventsMap) {
      eventsMap = new Map();
      this.map.set(consumer, eventsMap);
    }
    return eventsMap;
  }

  private getEventsByConsumer(consumer: IConsumer, name: string | symbol): Set<Function> {
    const eventsMap = this.getEventsMapByConsumer(consumer);
    let events = eventsMap.get(name);
    if (!events) {
      events = new Set();
      eventsMap.set(name, events);
    }
    return events;
  }

  on(consumer: IConsumer, name: string | symbol, callback: Function, config: IOnConfig = {}): void {
    const events = this.getEventsByConsumer(consumer, name);
    let finalCallback = callback;
    if (config.once) {
      finalCallback = (...args: any[]) => {
        callback(...args);
        this.off(consumer, name, finalCallback);
      };
    }
    events.add(finalCallback);
    config.callAfterDelay !== void 0 &&
      setTimeout(() => {
        finalCallback();
      }, config.callAfterDelay || 0);
  }

  once(consumer: IConsumer, name: string | symbol, callback: Function): void {
    this.on(consumer, name, callback, { once: true });
  }

  emit(consumer: IConsumer, name: string | symbol, ...args: any[]): void {
    const events = this.getEventsByConsumer(consumer, name);
    // if (events.size === 0) {
    // console.warn(`${consumer}未注册${String(name)}事件`);
    // }
    events.forEach((callback) => callback(...args));
  }

  off(consumer: IConsumer, name: string | symbol, callback: Function): void {
    this.getEventsByConsumer(consumer, name).delete(callback);
  }
}

export const eventName2BusName = (name = ""): string => name.slice(2).toLowerCase();

export const busName2EventName = (name = ""): string => `on${name.charAt(0).toUpperCase()}${name.slice(1)}`;

export const PromiseWithResolvers = () => {
  let resolve: (value: unknown) => void = () => void 0;
  let reject: (reason?: any) => void = () => void 0;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
};
