import { ICommandConfig } from '@vue-cmd/core';
import { DrawerProps } from 'element-plus';
import { VNode } from 'vue';
export type IDrawerConfig = Partial<DrawerProps> & ICommandConfig;
export declare const useDrawer: (useConfig?: import('@vue-cmd/core').ValueOrGetter<import('@vue-cmd/core').IUseConfig>) => (contentVNode: VNode, commandConfig?: import('@vue-cmd/core').ValueOrGetter<IDrawerConfig> | undefined) => import('@vue-cmd/core').IConsumer;
