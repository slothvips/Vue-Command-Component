import { PopupProps } from 'vant';
import { VNode } from 'vue';
import { ICommandComponentArrtsProviderConfig, ICreateCommandComponentConfig } from './type';
export type IVantUiConfig = {
    slots?: {
        [key: string]: () => VNode | VNode[];
    };
    attrs?: Partial<PopupProps & Record<string, any>>;
} & ICommandComponentArrtsProviderConfig & Record<string, any>;
export declare const setVantUiPopupMountNode: (node: HTMLElement | undefined) => void;
export declare const createVantUiPopup: (createConfig?: ICreateCommandComponentConfig) => (ContentVNode: VNode, config?: IVantUiConfig) => import('./type').IConsumer;
export declare const createVantUiPopupOnBottom: (createConfig?: ICreateCommandComponentConfig) => (ContentVNode: VNode, config?: IVantUiConfig) => import('./type').IConsumer;
