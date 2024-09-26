import type { IConsumer } from "./Core";

// 基于命令弹窗消费对象的事件注册中心
export class ConsumerEventBus {
  map = new WeakMap<IConsumer, Map<string | symbol, Set<Function>>>();
  // 获取一个Consumer下所有的事件对应函数集的映射关系
  getEventsMapByConsumer = (consumer: IConsumer) => {
    if (this.map.has(consumer)) {
      return this.map.get(consumer);
    } else {
      const res = new Map();
      this.map.set(consumer, res);
      return res;
    }
  };
  // 获取一个Consumer下,name事件注册的函数集
  getEventsByConsumer = (consumer: IConsumer, name: string | symbol): Set<Function> => {
    if (this.getEventsMapByConsumer(consumer)?.has(name)) {
      return this.getEventsMapByConsumer(consumer)?.get(name);
    } else {
      const res = new Set<Function>();
      this.getEventsMapByConsumer(consumer)?.set(name, res);
      return res;
    }
  };
  // 订阅
  on = (consumer: IConsumer, name: string | symbol, callback: Function) => {
    const events = this.getEventsByConsumer(consumer, name);
    events?.add(callback);
  };
  // 单次订阅
  once = (consumer: IConsumer, name: string | symbol, callback: Function) => {
    const events = this.getEventsByConsumer(consumer, name);
    const onceCallback = () => {
      callback();
      this.off(consumer, name, onceCallback);
    };
    events?.add(onceCallback);
  };
  // 发布
  emit = (consumer: IConsumer, name: string | symbol, ...args: any) => {
    const events = this.getEventsByConsumer(consumer, name);
    console.assert(!!events.size, `${consumer}未注册${String(name)}事件`);
    events?.forEach((callback: Function) => callback(...args));
  };
  // 取消订阅
  off = (consumer: IConsumer, name: string | symbol, callback: Function) => {
    const events = this.getEventsByConsumer(consumer, name);
    events?.delete(callback);
  };
}

export const eventName2BusName = (name = "") => {
  return name.slice(2).toLowerCase();
};

export const busName2EventName = (name = "") => {
  return "on" + name.slice(0, 1).toUpperCase() + name.slice(1);
};
