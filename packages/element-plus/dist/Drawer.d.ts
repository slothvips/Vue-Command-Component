import { ICommandComponentConfig } from '@vue-cmd/core';
import { DrawerProps } from 'element-plus';
import { VNode } from 'vue';
export type IElementPlusDrawerConfig = Partial<DrawerProps> & ICommandComponentConfig;
export declare const useElementPlusDrawer: (createConfig?: import('@vue-cmd/core').ICreateCommandComponentConfig) => (contentVNode: VNode, config?: IElementPlusDrawerConfig | undefined) => import('@vue-cmd/core').IConsumer;
