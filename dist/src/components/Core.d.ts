import { Component, ComponentInternalInstance, InjectionKey, Ref } from 'vue';
import { IOnConfig } from './utils';
export interface ICommandDialogArrtsProviderConfig {
    provideProps?: Record<string, any>;
    appendTo?: string | HTMLElement;
}
export type ICommandDialogProviderConfig = ICommandDialogArrtsProviderConfig & {
    visible: Ref<boolean>;
};
/** 弹窗消费者对象,或者也可理解为弹窗实例实例~ */
export interface IConsumer {
    /** 弹窗promise */
    promise: Promise<any>;
    /** 弹窗promise执行器参数resolve */
    resolve: (val?: any) => void;
    /** 弹窗promise执行器参数reject */
    reject: (reason?: any) => void;
    /** 弹窗销毁,并解决promise */
    destroyWithResolve: (val?: any) => void;
    /** 弹窗销毁,并拒绝promise */
    destroyWithReject: (reason?: any) => void;
    /** 弹窗销毁,但是不继续推进promise的状态改变 */
    destroy: (external?: boolean) => void;
    /** 弹窗是否可见响应式变量,虽然已经提供了hide以及show方法不需要通过该属性来控制弹窗的显示与隐藏,但是为了方便一些特殊场景,还是提供了该属性,比如你需要watch这个属性来做一些事情 */
    visible: Ref<boolean>;
    /** 隐藏 */
    hide: () => void;
    /** 显示 */
    show: () => void;
    /** 订阅取消 */
    off: (name: string | symbol, callback: Function) => void;
    /** 订阅 */
    on: (name: string | symbol, callback: Function, config?: IOnConfig) => void;
    /** 单次订阅 */
    once: (name: string | symbol, callback: Function) => void;
    /** 发布 */
    emit: (name: string | symbol, ...args: any) => void;
    /** 一般建议赋值为UI库的弹窗实例实例Ref */
    componentRef?: Ref<any> | undefined;
    /** 弹窗挂载的html元素 */
    container: HTMLDivElement;
    /** 弹窗嵌套堆栈 */
    stack: IConsumer[];
    /** 当前在弹窗嵌套堆栈中的索引 */
    stackIndex: number;
}
export declare const CommandDialogConsumerInjectKey: InjectionKey<IConsumer>;
export declare const CommandDialogStackInjectKey: InjectionKey<IConsumer[]>;
export declare function CommandProvider(parentInstance: ComponentInternalInstance | null, uiComponentVnode: Component, config: ICommandDialogProviderConfig): IConsumer;
export declare const getConsumer: (warn?: boolean) => IConsumer;
export declare const getCommandDialogConsumer: (...args: any) => IConsumer;
