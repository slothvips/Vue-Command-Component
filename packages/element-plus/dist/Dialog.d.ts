import { ICommandConfig } from '@vue-cmd/core';
import { DialogProps } from 'element-plus';
import { VNode } from 'vue';
export type IDialogConfig = ICommandConfig<Partial<DialogProps>> & {
    title?: string;
    width?: string;
};
export declare const useDialog: (useConfig?: import('@vue-cmd/core').ValueOrGetter<import('@vue-cmd/core').IUseConfig>) => (contentVNode: VNode, commandConfig?: import('@vue-cmd/core').ValueOrGetter<IDialogConfig> | undefined) => import('@vue-cmd/core').IConsumer;
/**
 * 可拖拽,遮罩无法关闭,按esc无法关闭
 * @returns
 */
export declare const useDialogWithDrag: () => (contentVNode: VNode, config?: IDialogConfig) => import('@vue-cmd/core').IConsumer;
/**
 * 全屏切换,自由拉伸
 * @returns
 */
