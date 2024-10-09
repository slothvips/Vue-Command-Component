import { IConsumer } from './Core';
export interface IOnConfig {
    once?: boolean;
    callAfterDelay?: number;
}
export declare class ConsumerEventBus {
    private map;
    private getEventsMapByConsumer;
    private getEventsByConsumer;
    on(consumer: IConsumer, name: string | symbol, callback: Function, config?: IOnConfig): void;
    once(consumer: IConsumer, name: string | symbol, callback: Function): void;
    emit(consumer: IConsumer, name: string | symbol, ...args: any[]): void;
    off(consumer: IConsumer, name: string | symbol, callback: Function): void;
}
export declare const eventName2BusName: (name?: string) => string;
export declare const busName2EventName: (name?: string) => string;
export declare const PromiseWithResolvers: () => {
    promise: Promise<unknown>;
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
};
export declare const getMaxZIndex: (domNode: HTMLElement) => number;
