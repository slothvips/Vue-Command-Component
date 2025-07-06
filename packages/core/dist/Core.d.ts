import { ComponentInternalInstance, InjectionKey, VNode } from 'vue';
import { IConsumer, ICoreConfig } from './type';
export declare const CommandComponentConsumerInjectKey: InjectionKey<IConsumer>;
export declare const CommandComponentStackInjectKey: InjectionKey<IConsumer[]>;
export declare const activeConsumers: Set<IConsumer>;
export declare function commandProviderWithRender(parentInstance: ComponentInternalInstance | null, uiComponent: VNode, config: ICoreConfig): IConsumer;
export declare const useConsumer: (warn?: boolean) => IConsumer;
