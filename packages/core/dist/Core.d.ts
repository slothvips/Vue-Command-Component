import { Component, ComponentInternalInstance, InjectionKey } from 'vue';
import { ICommandComponentProviderConfig, IConsumer } from './type';
export declare const CommandComponentConsumerInjectKey: InjectionKey<IConsumer>;
export declare const CommandComponentStackInjectKey: InjectionKey<IConsumer[]>;
export declare const activeConsumers: Set<IConsumer>;
export declare const destroyAllConsumer: () => void;
export declare function CommandProviderWithRender(parentInstance: ComponentInternalInstance | null, uiComponent: Component, config: ICommandComponentProviderConfig): IConsumer;
export declare const useConsumer: (warn?: boolean) => IConsumer;
