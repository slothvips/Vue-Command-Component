import { ICommandComponentConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export type IDialogConfig = ICommandComponentConfig & {
    title?: string;
    width?: string;
};
export declare const useDialog: (createConfig?: import('@vue-cmd/core').IUseCommandComponentConfig) => (contentVNode: VNode, config?: IDialogConfig | undefined) => import('@vue-cmd/core').IConsumer;
