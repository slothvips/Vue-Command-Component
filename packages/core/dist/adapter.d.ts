import { VNode } from 'vue';
import { ICommandConfig, IConsumer, IUseConfig, IRenderComponentOptions, ValueOrGetter } from './type';
export type AdapterRender<TConfig extends ICommandConfig = ICommandConfig> = (contentVNode: VNode, options: IRenderComponentOptions<TConfig>) => VNode;
export type AdapterOptions<TConfig extends ICommandConfig = ICommandConfig> = {
    /** 渲染器函数 */
    render: AdapterRender<TConfig>;
    /** 默认配置 */
    defaultConfig?: Partial<TConfig>;
    /** 挂载节点 */
    appendTo?: HTMLElement | string;
    /** 配置转换器 - 在渲染前对配置进行转换 */
    configTransformer?: (config: TConfig & ICommandConfig) => TConfig & ICommandConfig;
};
/**
 * 创建函数式适配器
 * @param options 适配器选项
 * @returns 适配器函数
 */
export declare function createAdapter<TConfig extends ICommandConfig = ICommandConfig>(options: AdapterOptions<TConfig>): (useConfig?: ValueOrGetter<IUseConfig>) => (contentVNode: VNode, commandConfig?: ValueOrGetter<TConfig>) => IConsumer;
