import { ICommandComponentConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export interface INaiveDrawerConfig extends ICommandComponentConfig {
}
export declare const useDrawer: (createConfig?: import('@vue-cmd/core').IUseCommandComponentConfig) => (contentVNode: VNode, config?: INaiveDrawerConfig | undefined) => import('@vue-cmd/core').IConsumer;
