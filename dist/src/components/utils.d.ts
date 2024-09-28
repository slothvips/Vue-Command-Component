import { IConsumer } from './Core';
export declare class ConsumerEventBus {
    private map;
    private getEventsMapByConsumer;
    private getEventsByConsumer;
    on(consumer: IConsumer, name: string | symbol, callback: Function): void;
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
