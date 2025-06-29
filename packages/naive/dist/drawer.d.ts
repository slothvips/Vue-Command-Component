import { ICommandComponentConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export interface INaiveDrawerConfig extends ICommandComponentConfig {
    title?: string;
    width?: string | number;
    height?: string | number;
    placement?: "top" | "right" | "bottom" | "left";
}
export declare const useNaiveDrawer: (createConfig?: import('@vue-cmd/core').ICreateCommandComponentConfig) => (contentVNode: VNode, config?: INaiveDrawerConfig | undefined) => import('@vue-cmd/core').IConsumer;
