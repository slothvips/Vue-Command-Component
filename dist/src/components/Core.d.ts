import { Component, ComponentInternalInstance, InjectionKey } from 'vue';
import { ICommandComponentProviderConfig, IConsumer } from './type';
export declare const CommandComponentConsumerInjectKey: InjectionKey<IConsumer>;
export declare const CommandComponentStackInjectKey: InjectionKey<IConsumer[]>;
/**
 * 所有未被内存销毁的命令式组件Consumer集合
 * 用途是为了提供一个接触不到Consumer的地方去操作Consumer
 */
export declare const activeCommandComponentConsumers: Set<IConsumer>;
/**
 * 销毁所有命令式组件
 */
export declare const destroyAllCommandComponentConsumer: () => void;
export declare function CommandProvider(parentInstance: ComponentInternalInstance | null, uiComponentVnode: Component, config: ICommandComponentProviderConfig): IConsumer;
export declare const getConsumer: (warn?: boolean) => IConsumer;
/**
 * @deprecated This API will be deprecated in the future, please use `getConsumer` instead.
 */
export declare const getCommandDialogConsumer: (warn?: boolean) => IConsumer;
