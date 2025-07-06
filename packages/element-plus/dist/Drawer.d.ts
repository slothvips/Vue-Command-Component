import { ICommandConfig } from '@vue-cmd/core';
import { DrawerProps } from 'element-plus';
import { VNode } from 'vue';
export type IDrawerConfig = {
    size?: string;
    title?: string;
} & ICommandConfig<Partial<DrawerProps>>;
export declare const useDrawer: (useConfig?: import('@vue-cmd/core').IUseConfigOrGetter) => (contentVNode: VNode, commandConfig?: import('@vue-cmd/core').ValueOrGetter<IDrawerConfig> | undefined) => import('@vue-cmd/core').IConsumer;
