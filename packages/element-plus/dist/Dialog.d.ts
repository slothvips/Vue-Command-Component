import { ICommandComponentConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export type IElementPlusDialogConfig = ICommandComponentConfig & {
    title?: string;
    width?: string;
};
export declare const useElementPlusDialog: (createConfig?: import('@vue-cmd/core').ICreateCommandComponentConfig) => (contentVNode: VNode, config?: IElementPlusDialogConfig | undefined) => import('@vue-cmd/core').IConsumer;
