import { ICommandConfig } from '@vue-cmd/core';
import { VNode } from 'vue';
export declare const usePopup: (useConfig?: import('@vue-cmd/core').ValueOrGetter<import('@vue-cmd/core').IUseConfig>) => (contentVNode: VNode, commandConfig?: import('@vue-cmd/core').ValueOrGetter<ICommandConfig> | undefined) => import('@vue-cmd/core').IConsumer;
