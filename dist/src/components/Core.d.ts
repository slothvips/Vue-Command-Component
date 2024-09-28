import { Component, ComponentInternalInstance, InjectionKey, Ref } from 'vue';
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
    /** 弹窗销毁,不处理promise */
    destroy: (external?: boolean) => void;
    /** 隐藏 */
    hide: () => void;
    /** 显示 */
    show: () => void;
    /** 订阅取消 */
    off: (name: string | symbol, callback: Function) => void;
    /** 订阅 */
    on: (name: string | symbol, callback: Function) => void;
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
export declare function CommandDialogProvider(parentInstance: ComponentInternalInstance | null, uiComponentVnode: Component, config: ICommandDialogProviderConfig): IConsumer;
export declare const getCommandDialogConsumer: (warn?: boolean) => IConsumer;
