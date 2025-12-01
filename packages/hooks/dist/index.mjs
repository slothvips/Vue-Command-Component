import { activeConsumers, commandProviderWithRender } from "@vue-cmd/core";
import { defineComponent, getCurrentInstance, h, nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";

//#region \0@oxc-project+runtime@0.99.0/helpers/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
		return typeof o$1;
	} : function(o$1) {
		return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
	}, _typeof(o);
}

//#endregion
//#region \0@oxc-project+runtime@0.99.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}

//#endregion
//#region \0@oxc-project+runtime@0.99.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}

//#endregion
//#region \0@oxc-project+runtime@0.99.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}

//#endregion
//#region \0@oxc-project+runtime@0.99.0/helpers/objectSpread2.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r$1) {
			return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r$1) {
			_defineProperty(e, r$1, t[r$1]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r$1) {
			Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
		});
	}
	return e;
}

//#endregion
//#region src/index.ts
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
const useConsumersManager = () => {
	return {
		activeConsumers,
		hideAll: () => {
			activeConsumers.forEach((consumer) => consumer.hide());
		},
		showAll: () => {
			activeConsumers.forEach((consumer) => consumer.show());
		},
		toggleAll: () => {
			activeConsumers.forEach((consumer) => {
				const { visible } = consumer;
				if (visible.value) consumer.hide();
				else consumer.show();
			});
		},
		destroyAll: () => {
			activeConsumers.forEach((consumer) => {
				consumer.destroy();
			});
		},
		destroyAllWithResolve: () => {
			const promises = [...activeConsumers].map((consumer) => {
				consumer.destroyWithResolve();
				return consumer.promise;
			});
			return Promise.allSettled(promises);
		},
		destroyAllWithReject: () => {
			const promises = [...activeConsumers].map((consumer) => {
				consumer.destroyWithReject();
				return consumer.promise;
			});
			return Promise.allSettled(promises);
		}
	};
};
/**
* 路由变化销毁所有弹窗
* @returns 停止监听的函数
*/
const useDestroyAllOnRouteChange = () => {
	const { destroyAll } = useConsumersManager();
	const route = useRoute();
	return watch(() => route.path, () => destroyAll(), { immediate: true });
};
/**
* 仅借用命令组件的能力,无需适配任何UI库,可以用于一些特殊场景,比如需要函数展示内容
*/
const useRawCommand = (useConfig) => {
	const instance = getCurrentInstance();
	return (vnode, config = {}) => {
		var _finalConfig$displayD, _finalConfig$immediat;
		const finalConfig = _objectSpread2(_objectSpread2({}, useConfig), config);
		finalConfig.displayDirective = (_finalConfig$displayD = finalConfig.displayDirective) !== null && _finalConfig$displayD !== void 0 ? _finalConfig$displayD : "if";
		finalConfig.onShow = finalConfig.onShow || ((el) => {
			el.style.display = "block";
		});
		finalConfig.onHide = finalConfig.onHide || ((el) => {
			el.style.display = "none";
		});
		const visible = ref((_finalConfig$immediat = finalConfig.immediate) !== null && _finalConfig$immediat !== void 0 ? _finalConfig$immediat : true);
		finalConfig.visible = visible;
		const consumer = commandProviderWithRender(instance, h(defineComponent({ setup() {
			finalConfig.displayDirective === "show" && watch(() => visible.value, () => {
				nextTick().then(() => {
					const collect = (targetVnode) => {
						if (targetVnode.shapeFlag === 1) return [targetVnode.el];
						else if (targetVnode.shapeFlag === 16) return targetVnode.children.map((child) => {
							return collect(child);
						});
						else {
							console.warn("TODO:other case wait implement", targetVnode);
							return [];
						}
					};
					collect(vnode).flat(Infinity).forEach((el) => {
						var _finalConfig$onShow, _finalConfig$onHide;
						visible.value ? (_finalConfig$onShow = finalConfig.onShow) === null || _finalConfig$onShow === void 0 || _finalConfig$onShow.call(finalConfig, el, consumer) : (_finalConfig$onHide = finalConfig.onHide) === null || _finalConfig$onHide === void 0 || _finalConfig$onHide.call(finalConfig, el, consumer);
					});
				});
			}, { immediate: true });
			return () => {
				const finalDisplayDirective = finalConfig.displayDirective;
				const outer = finalConfig.outer;
				return outer ? outer(finalDisplayDirective === "if" ? visible.value ? vnode : null : vnode) : finalDisplayDirective === "if" ? visible.value ? vnode : null : vnode;
			};
		} })), finalConfig);
		return consumer;
	};
};

//#endregion
export { useConsumersManager, useDestroyAllOnRouteChange, useRawCommand };