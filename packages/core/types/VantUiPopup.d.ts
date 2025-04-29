import { VNode } from 'vue';
import { ICommandComponentConfig, ICreateCommandComponentConfig } from './type';
export declare const useVantUiPopup: (createConfig?: ICreateCommandComponentConfig) => (ContentVNode: VNode, config?: ICommandComponentConfig) => import('./type').IConsumer;
export declare const useVantUiPopupOnBottom: (createConfig?: ICreateCommandComponentConfig) => (ContentVNode: VNode, config?: ICommandComponentConfig) => import('./type').IConsumer;
