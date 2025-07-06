import { ICommandConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
import { DrawerProps, DrawerContentProps } from 'naive-ui';
export interface INaiveDrawerConfig extends ICommandConfig<Partial<{
    drawerAttrs: Partial<DrawerProps>;
    contentAttrs: Partial<DrawerContentProps>;
}>> {
    title?: string;
    width?: string | number;
    height?: string | number;
    placement?: "top" | "right" | "bottom" | "left";
}
export declare const useDrawer: (useConfig?: import('@vue-cmd/core').IUseConfigOrGetter) => (contentVNode: VNode, commandConfig?: import('@vue-cmd/core').ValueOrGetter<INaiveDrawerConfig> | undefined) => import('@vue-cmd/core').IConsumer;
