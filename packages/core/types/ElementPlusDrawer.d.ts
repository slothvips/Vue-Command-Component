import { VNode } from 'vue';
import { ICommandComponentConfig, ICreateCommandComponentConfig } from './type';
export type IElementPlusDrawerConfig = ICommandComponentConfig & {
    title: string;
    width?: string;
};
export declare const useElementPlusDrawer: (createConfig?: ICreateCommandComponentConfig) => (ContentVNode: VNode, config?: IElementPlusDrawerConfig) => import('./type').IConsumer;
