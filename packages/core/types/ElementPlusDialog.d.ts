import { VNode } from 'vue';
import { ICommandComponentConfig, ICreateCommandComponentConfig } from './type';
export type IElementPlusDialogConfig = ICommandComponentConfig & {
    title: string;
    width?: string;
};
export declare const useElementPlusDialog: (createConfig?: ICreateCommandComponentConfig) => (ContentVNode: VNode, config?: IElementPlusDialogConfig) => import('./type').IConsumer;
