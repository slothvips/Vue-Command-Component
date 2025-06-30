import { ICommandComponentConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export type IDialogConfig = ICommandComponentConfig & {
    title?: string;
    width?: string;
};
export declare const useDialog: (useConfig?: import('@vue-cmd/core').IUseCommandComponentConfig) => (contentVNode: VNode, config?: IDialogConfig | undefined) => import('@vue-cmd/core').IConsumer;
/**
 * 可拖拽,遮罩无法关闭,按esc无法关闭
 * @returns
 */
export declare const useDialogWithDrag: () => (contentVNode: VNode, config?: IDialogConfig) => import('@vue-cmd/core').IConsumer;
/**
 * 全屏切换,自由拉伸
 * @returns
 */
