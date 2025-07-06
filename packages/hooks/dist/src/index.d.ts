import { IConsumer, ICoreConfig, IUseConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
/**
 * 获取所有弹窗consumer管理
 * @returns
 *  activeConsumers: 所有弹窗consumer集合
 *  hideAll: 隐藏所有弹窗,但可能导致弹窗销毁,具体看适配器实现
 *  showAll: 显示所有弹窗,但可能导致弹窗销毁,具体看适配器实现
 *  toggleAll: 切换所有弹窗的显示状态,但可能导致弹窗销毁,具体看适配器实现
 *  destroyAll: 销毁所有弹窗
 *  destroyAllWithResolve: 销毁所有弹窗,并解决promise
 *  destroyAllWithReject: 销毁所有弹窗,并拒绝promise
 */
export declare const useConsumersManager: () => {
    activeConsumers: Set<IConsumer>;
    hideAll: () => void;
    showAll: () => void;
    toggleAll: () => void;
    destroyAll: () => void;
    destroyAllWithResolve: () => void;
    destroyAllWithReject: () => void;
};
/**
 * 路由变化销毁所有弹窗
 * @returns 停止监听的函数
 */
export declare const useDestroyAllOnRouteChange: () => (() => void);
/**
 * 仅借用命令组件的能力,无需适配任何UI库,可以用于一些特殊场景,比如需要函数展示内容
 */
export declare const useRawCommand: (useConfig: IUseConfig<{
    displayDirective?: "if" | "show";
    onShow?: (el: HTMLElement, consumer: IConsumer) => void;
    onHide?: (el: HTMLElement, consumer: IConsumer) => void;
    outer?: (slot: VNode | null) => VNode;
    sayhello?: string;
}>) => (vnode: VNode, config?: ICoreConfig) => IConsumer;
