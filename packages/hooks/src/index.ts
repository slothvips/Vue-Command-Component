import type { IConsumer, ICoreConfig, IUseConfig } from '@vue-cmd/core';
import { activeConsumers, commandProviderWithRender } from '@vue-cmd/core';
import { defineComponent, getCurrentInstance, h, nextTick, onMounted, ref, watch, watchEffect, type VNode } from 'vue';
import { useRoute } from 'vue-router';

/**
 * 获取所有弹窗consumer管理
 * @returns 
 *  activeConsumers: 所有弹窗consumer集合
 *  hideAll: 隐藏所有弹窗,但可能导致弹窗销毁,具体看适配器实现
 *  showAll: 显示所有弹窗,但可能导致弹窗销毁,具体看适配器实现
 *  toggleAll: 切换所有弹窗的显示状态,但可能导致弹窗销毁,具体看适配器实现
 *  destroyAll: 销毁所有弹窗
 *  destroyAllWithResolve: 销毁所有弹窗,并解决promise
 *  destroyAllWithReject: 销毁所有弹窗,并拒绝promise
 */
export const useConsumersManager = (): {
  activeConsumers: Set<IConsumer>;
  hideAll: () => void;
  showAll: () => void;
  toggleAll: () => void;
  destroyAll: () => void;
  destroyAllWithResolve: () => void;
  destroyAllWithReject: () => void;
} => {
  return {
    activeConsumers,
    hideAll: () => {
      activeConsumers.forEach(consumer => consumer.hide());
    },
    showAll: () => {
      activeConsumers.forEach(consumer => consumer.show());
    },
    toggleAll: () => {
      activeConsumers.forEach(consumer => {
        const { visible } = consumer;
        if (visible.value) {
          consumer.hide();
        } else {
          consumer.show();
        }
      });
    },
    destroyAll: () => {
      activeConsumers.forEach((consumer) => {
        consumer.destroy();
      });
    },
    destroyAllWithResolve: () => {
      activeConsumers.forEach((consumer) => {
        consumer.destroyWithResolve();
      });
    },
    destroyAllWithReject: () => {
      activeConsumers.forEach((consumer) => {
        consumer.destroyWithReject();
      });
    }
  };
};

/**
 * 路由变化销毁所有弹窗
 * @returns 停止监听的函数
 */
export const useDestroyAllOnRouteChange = (): (() => void) => {
  const { destroyAll } = useConsumersManager();
  const route = useRoute();
  return watch(() => route.path, () => destroyAll(), { immediate: true })
};


/**
 * 仅借用命令组件的能力,无需适配任何UI库,可以用于一些特殊场景,比如需要函数展示内容
 */
export const useRawCommand = (useConfig: IUseConfig<{
  displayDirective?: 'if' | 'show',
  onShow?: (el: HTMLElement, consumer: IConsumer) => void,
  onHide?: (el: HTMLElement, consumer: IConsumer) => void,
  outer?: (slot: VNode | null) => VNode,
  sayhello?: string,
}>) => {
  const instance = getCurrentInstance()
  return (vnode: VNode, config: ICoreConfig = {} as ICoreConfig) => {
    // init config
    const finalConfig = {
      ...useConfig,
      ...config,
    }

    finalConfig.displayDirective = finalConfig.displayDirective ?? 'if'
    finalConfig.onShow = finalConfig.onShow || ((el) => {
      el.style.display = 'block'
    })
    finalConfig.onHide = finalConfig.onHide || ((el) => {
      el.style.display = 'none'
    })

    const visible = ref(finalConfig.immediate ?? true)
    finalConfig.visible = visible

    const consumer = commandProviderWithRender(instance, h(defineComponent({
      setup() {
        finalConfig.displayDirective === 'show' && watch(() => visible.value, () => {
          nextTick().then(() => {
            const collect = (targetVnode: VNode): HTMLElement[] => {
              if (targetVnode.shapeFlag === 1) {
                return [targetVnode.el as HTMLElement];
              } else if (targetVnode.shapeFlag === 16) {
                // @ts-ignore
                return targetVnode.children.map((child: VNode) => {
                  return collect(child)
                })
              } else {
                console.warn('TODO:wait implement', targetVnode)
                return []
              }
            }

            const els = collect(vnode).flat(Infinity)
            els.forEach((el) => {
              visible.value ? finalConfig.onShow?.(el, consumer) : finalConfig.onHide?.(el, consumer)
            })
          })
        }, {
          immediate: true,
        })

        return () => {
          const finalDisplayDirective = finalConfig.displayDirective
          const outer = finalConfig.outer
          return outer ?
            outer(finalDisplayDirective === 'if' ? (visible.value ? vnode : null) : vnode) :
            finalDisplayDirective === 'if' ? (visible.value ? vnode : null) : vnode
        }
      }
    })), finalConfig)

    return consumer
  }
};
