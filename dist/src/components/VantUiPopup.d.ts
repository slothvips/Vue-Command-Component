import { PopupProps } from 'vant';
import { VNode } from 'vue';
import { ICommandDialogArrtsProviderConfig } from './Core';
export type IVantUiConfig = {
    slots?: {
        [key: string]: () => VNode | VNode[];
    };
    attrs?: Partial<PopupProps & Record<string, any>>;
} & ICommandDialogArrtsProviderConfig & Record<string, any>;
export declare const setVantUiPopupMountNode: (node: HTMLElement | undefined) => void;
export declare const createVantUiPopup: (immediately?: boolean) => (ContentVNode: VNode, config?: IVantUiConfig) => import('./Core').IConsumer;
export declare const createVantUiPopupOnBottom: (immediately?: boolean) => (ContentVNode: VNode, config?: IVantUiConfig) => import('./Core').IConsumer;
export declare const createVantUiTitlePopup: (immediately?: boolean) => (ContentVNode: VNode, config?: IVantUiConfig) => import('./Core').IConsumer;
export declare const createVantUiTitlePopupOnBottom: (immediately?: boolean) => (ContentVNode: VNode, config?: IVantUiConfig) => import('./Core').IConsumer;
