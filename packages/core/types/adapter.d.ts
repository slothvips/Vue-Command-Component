import { ComponentInternalInstance, Ref, VNode } from 'vue';
import { ICommandComponentConfig, IConsumer, ICreateCommandComponentConfig, IRenderComponentOptions } from './type';
export declare abstract class UIComponentAdapter<Config extends ICommandComponentConfig = ICommandComponentConfig> {
    protected mountNode?: HTMLElement | string;
    parentInstance: ComponentInternalInstance | null;
    constructor();
    setMountNode(node: HTMLElement | undefined | string): void;
    createCommand(createConfig: ICreateCommandComponentConfig): (ContentVNode: VNode, config?: Config) => IConsumer;
    protected createConsumer(ContentVNode: VNode, visible: Ref<boolean>, config: Config, createConfig: ICreateCommandComponentConfig): IConsumer;
    /**
     * 渲染组件
     * @param ContentVNode - 内容节点
     * @param options - 渲染选项
     */
    protected abstract renderComponent(ContentVNode: VNode, getOptions: IRenderComponentOptions<Config>): VNode;
}
