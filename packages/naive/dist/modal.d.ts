import { ICommandConfig, IUseConfigOrGetter, ValueOrGetter } from '@vue-cmd/core';
import { VNode } from 'vue';
export interface INaiveModalConfig extends ICommandConfig {
    title?: string;
    width?: string | number;
    height?: string | number;
}
export declare const useModal: (useConfig?: IUseConfigOrGetter) => (contentVNode: VNode, commandConfig?: ValueOrGetter<INaiveModalConfig> | undefined) => import('@vue-cmd/core').IConsumer;
export declare const useDialog: (useConfig?: IUseConfigOrGetter) => (content: VNode, config: INaiveModalConfig) => import('@vue-cmd/core').IConsumer;
