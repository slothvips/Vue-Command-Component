import { ICommandComponentConfig } from '@vue-cmd/core';
import { DrawerProps } from 'element-plus';
import { VNode } from 'vue';
export type IDrawerConfig = Partial<DrawerProps> & ICommandComponentConfig;
export declare const useDrawer: (useConfig?: import('@vue-cmd/core').IUseCommandComponentConfig) => (contentVNode: VNode, config?: IDrawerConfig | undefined) => import('@vue-cmd/core').IConsumer;
