import { ICommandComponentConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export interface INaiveModalConfig extends ICommandComponentConfig {
    title?: string;
    width?: string | number;
    height?: string | number;
}
export declare const useModal: (createConfig?: import('@vue-cmd/core').IUseCommandComponentConfig) => (contentVNode: VNode, config?: INaiveModalConfig | undefined) => import('@vue-cmd/core').IConsumer;
