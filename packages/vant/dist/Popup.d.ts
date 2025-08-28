import { ICommandConfig, IUseConfig } from '@vue-cmd/core';
import { PopupProps, PopupPosition } from 'vant';
import { CSSProperties, VNode } from 'vue';
export type VantPopupConfig = {
    position?: PopupPosition;
    style?: CSSProperties;
    closeable?: boolean;
} & ICommandConfig<Partial<PopupProps>>;
export declare const usePopup: (useConfig?: import('@vue-cmd/core').IUseConfigOrGetter) => (contentVNode: VNode, commandConfig?: import('@vue-cmd/core').ValueOrGetter<VantPopupConfig> | undefined) => import('@vue-cmd/core').IConsumer;
export declare const usePopupOnBottom: (createConfig?: IUseConfig) => (ContentVNode: VNode, config?: ICommandConfig) => import('@vue-cmd/core').IConsumer;
