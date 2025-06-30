import { VNode } from 'vue';
import { ICommandComponentConfig, ICommandComponentProviderConfig, IConsumer, IUseCommandComponentConfig, IRenderComponentOptions } from './type';
export type AdapterRender<TConfig extends ICommandComponentConfig = ICommandComponentConfig> = (contentVNode: VNode, options: IRenderComponentOptions<TConfig>) => VNode;
export type AdapterOptions<TConfig extends ICommandComponentConfig = ICommandComponentConfig> = {
    /** 渲染器函数 */
    render: AdapterRender<TConfig>;
    /** 默认配置 */
    defaultConfig?: Partial<TConfig>;
    /** 挂载节点 */
    appendTo?: HTMLElement | string;
    /** 配置转换器 - 在渲染前对配置进行转换 */
    configTransformer?: (config: ICommandComponentProviderConfig, useConfig: IUseCommandComponentConfig) => ICommandComponentProviderConfig;
};
/**
 * 创建函数式适配器
 * @param options 适配器选项
 * @returns 适配器函数
 */
export declare function createAdapter<TConfig extends ICommandComponentConfig = ICommandComponentConfig>(options: AdapterOptions<TConfig>): (useConfig?: IUseCommandComponentConfig) => (contentVNode: VNode, config?: TConfig) => IConsumer;
