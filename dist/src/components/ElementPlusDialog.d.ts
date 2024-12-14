import { DialogProps } from 'element-plus';
import { VNode } from 'vue';
import { ICommandComponentArrtsProviderConfig } from './Core';
export type IElementPlusDialogConfig = {
    slots?: {
        [key: string]: () => VNode | VNode[];
    };
    attrs?: Partial<DialogProps & Record<string, any>>;
    title?: string;
    width?: string;
    onCancel?: (() => void) | boolean;
    cancelBtnText?: string;
    onConfirm?: (() => void) | boolean;
    confirmBtnText?: string;
} & ICommandComponentArrtsProviderConfig & Record<string, any>;
export declare const setElementPlusDialogMountNode: (node: HTMLElement | undefined) => void;
export declare const createElementPlusDialog: (immediately?: boolean) => (ContentVNode: VNode, config?: IElementPlusDialogConfig) => import('./Core').IConsumer;
