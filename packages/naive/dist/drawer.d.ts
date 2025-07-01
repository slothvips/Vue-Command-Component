import { ICommandConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export interface INaiveDrawerConfig extends ICommandConfig {
}
export declare const useDrawer: (useConfig?: import('@vue-cmd/core').ValueOrGetter<import('@vue-cmd/core').IUseConfig>) => (contentVNode: VNode, commandConfig?: import('@vue-cmd/core').ValueOrGetter<INaiveDrawerConfig> | undefined) => import('@vue-cmd/core').IConsumer;
