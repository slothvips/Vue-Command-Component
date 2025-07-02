import { ICommandConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export interface INaiveModalConfig extends ICommandConfig {
    title?: string;
    width?: string | number;
    height?: string | number;
}
export declare const useModal: (useConfig?: import('@vue-cmd/core').ValueOrGetter<import('@vue-cmd/core').IUseConfig>) => (contentVNode: VNode, commandConfig?: import('@vue-cmd/core').ValueOrGetter<INaiveModalConfig> | undefined) => import('@vue-cmd/core').IConsumer;
export declare const useDialog: () => (content: VNode, config: INaiveModalConfig) => void;
