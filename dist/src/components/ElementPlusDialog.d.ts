import { DialogProps } from 'element-plus';
import { VNode } from 'vue';
import { ICreateCommandComponentConfig, IConsumer } from './type';
import { IUIAdapterConfig } from './adapter';
/**
 * Element Plus Dialog 配置
 */
type ExtendedDialogProps = DialogProps & {
    onClosed?: (...args: unknown[]) => void;
};
export type IElementPlusDialogConfig = IUIAdapterConfig<ExtendedDialogProps>;
/**
 * 设置 Dialog 挂载点
 */
export declare const setElementPlusDialogMountNode: (node: HTMLElement | undefined) => void;
/**
 * 创建 Element Plus Dialog
 */
export declare const createElementPlusDialog: (createConfig?: ICreateCommandComponentConfig) => (ContentVNode: VNode, config?: IUIAdapterConfig<ExtendedDialogProps>) => IConsumer;
export {};
