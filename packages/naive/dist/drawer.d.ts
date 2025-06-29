import { ICommandComponentConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export interface INaiveDrawerConfig extends ICommandComponentConfig {
}
export declare const useNaiveDrawer: (createConfig?: import('@vue-cmd/core').ICreateCommandComponentConfig) => (contentVNode: VNode, config?: INaiveDrawerConfig | undefined) => import('@vue-cmd/core').IConsumer;
