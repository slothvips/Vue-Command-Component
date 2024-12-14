import { DrawerProps } from 'element-plus';
import { VNode } from 'vue';
import { ICommandComponentArrtsProviderConfig } from './Core';
export type IElementPlusDrawerConfig = {
    slots?: {
        [key: string]: () => VNode | VNode[];
    };
    attrs?: Partial<DrawerProps & Record<string, any>>;
    title?: string;
    size?: string;
} & ICommandComponentArrtsProviderConfig & Record<string, any>;
export declare const setElementPlusDrawerMountNode: (node: HTMLElement | undefined) => void;
export declare const createElementPlusDrawer: (immediately?: boolean) => (ContentVNode: VNode, config?: IElementPlusDrawerConfig) => import('./Core').IConsumer;
