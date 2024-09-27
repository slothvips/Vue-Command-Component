import type { IConsumer } from "./Core";

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

  on(consumer: IConsumer, name: string | symbol, callback: Function): void {
    this.getEventsByConsumer(consumer, name).add(callback);
  }

  once(consumer: IConsumer, name: string | symbol, callback: Function): void {
    const onceCallback = (...args: any[]) => {
      callback(...args);
      this.off(consumer, name, onceCallback);
    };
    this.on(consumer, name, onceCallback);
  }

  emit(consumer: IConsumer, name: string | symbol, ...args: any[]): void {
    const events = this.getEventsByConsumer(consumer, name);
    if (events.size === 0) {
      console.warn(`${consumer}未注册${String(name)}事件`);
    }
    events.forEach(callback => callback(...args));
  }

  off(consumer: IConsumer, name: string | symbol, callback: Function): void {
    this.getEventsByConsumer(consumer, name).delete(callback);
  }
}

export const eventName2BusName = (name = ""): string => name.slice(2).toLowerCase();

export const busName2EventName = (name = ""): string => 
  `on${name.charAt(0).toUpperCase()}${name.slice(1)}`;
