import { Teleport, computed, createVNode, defineComponent, getCurrentInstance, h, inject, nextTick, provide, ref, render, version } from "vue";

//#region src/type.ts
let EVENT_NAME = /* @__PURE__ */ function(EVENT_NAME$1) {
	EVENT_NAME$1["destroy"] = "destroy";
	return EVENT_NAME$1;
}({});

//#endregion
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
//#region src/utils.ts
/**
* 基于命令弹窗消费对象的事件注册中心
*/
var ConsumerEventBus = class {
	constructor() {
		_defineProperty(this, "map", /* @__PURE__ */ new WeakMap());
	}
	getEventsMapByConsumer(consumer) {
		let eventsMap = this.map.get(consumer);
		if (!eventsMap) {
			eventsMap = /* @__PURE__ */ new Map();
			this.map.set(consumer, eventsMap);
		}
		return eventsMap;
	}
	getEventsByConsumer(consumer, name) {
		const eventsMap = this.getEventsMapByConsumer(consumer);
		let events = eventsMap.get(name);
		if (!events) {
			events = /* @__PURE__ */ new Set();
			eventsMap.set(name, events);
		}
		return events;
	}
	on(consumer, name, callback, config = {}) {
		const events = this.getEventsByConsumer(consumer, name);
		let finalCallback = callback;
		if (config.once) finalCallback = (...args) => {
			callback(...args);
			this.off(consumer, name, finalCallback);
		};
		events.add(finalCallback);
		config.callImmediatelyAfterDelay !== void 0 && setTimeout(() => {
			finalCallback();
		}, config.callImmediatelyAfterDelay || 0);
	}
	once(consumer, name, callback, config = {}) {
		this.on(consumer, name, callback, _objectSpread2(_objectSpread2({}, config), {}, { once: true }));
	}
	emit(consumer, name, ...args) {
		this.getEventsByConsumer(consumer, name).forEach((callback) => callback(...args));
	}
	off(consumer, name, callback) {
		this.getEventsByConsumer(consumer, name).delete(callback);
	}
};
/**
* 将事件名转换为总线名称
*/
const eventName2BusName = (name = "") => name.slice(2).toLowerCase();
/**
* 将总线名称转换为事件名
*/
const busName2EventName = (name = "") => `on${name.charAt(0).toUpperCase()}${name.slice(1)}`;
/**
* 创建一个Promise和它的处理器
*/
const PromiseWithResolvers = () => {
	let resolve = () => void 0;
	let reject = () => void 0;
	return {
		promise: new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		}),
		resolve,
		reject
	};
};
/**
* 在同级dom节点中获取最大的z-index
*/
const getMaxZIndex = (domNode) => {
	var _domNode$parentElemen;
	const siblings = ((_domNode$parentElemen = domNode.parentElement) === null || _domNode$parentElemen === void 0 ? void 0 : _domNode$parentElemen.children) || [];
	let maxZIndex = 0;
	Array.from(siblings).forEach((sibling) => {
		if (sibling !== domNode) {
			const zIndex = parseInt(window.getComputedStyle(sibling).zIndex);
			if (!isNaN(zIndex) && zIndex > maxZIndex) maxZIndex = zIndex;
		}
	});
	return +maxZIndex;
};
/**
* Checks if a value is null or undefined
* @param val - The value to check
* @returns true if the value is null or undefined
*/
const isNull = (val) => val === null || val === void 0;
const RxRender = (render$1) => {
	if (typeof render$1 !== "function") return render$1;
	return h(defineComponent({ render: () => render$1() }));
};
const uuid = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
/**
* 检测当前是否为Vue 3.0以上版本
* @returns true if Vue version is 3.0 or higher
*/
const isVue3OrHigher = () => {
	return parseInt(version.split(".")[0]) >= 3;
};

//#endregion
//#region src/core.tsx
const CommandComponentConsumerInjectKey = Symbol("CommandComponentConsumerInjectKey");
const CommandComponentStackInjectKey = Symbol("CommandComponentStackInjectKey");
const EB = new ConsumerEventBus();
const activeConsumers = /* @__PURE__ */ new Set();
/**
* 获取自身以及所有祖先provides链
* @param ins - 组件实例
* @returns provides链上的所有注入内容
*/
const getProvidesChain = (ins) => {
	return _objectSpread2(_objectSpread2({}, ins.parent ? getProvidesChain(ins.parent) : {}), ins.provides);
};
function commandProviderWithRender(parentInstance, uiComponent, config) {
	var _parentInstance$vnode;
	if (!isVue3OrHigher()) throw new Error("Vue 3.0 or higher is required");
	if (!parentInstance) render(h({ setup() {
		parentInstance = getCurrentInstance();
		return () => null;
	} }), document.body);
	const appendToElement = (typeof config.appendTo === "string" ? document.querySelector(config.appendTo) : config.appendTo) || ((_parentInstance$vnode = parentInstance.vnode.el) === null || _parentInstance$vnode === void 0 ? void 0 : _parentInstance$vnode.parentElement) || document.body;
	const containerEl = document.createElement("div");
	containerEl.className = config.customClassName || "command-component-container";
	const hide = () => {
		if (consumer.destroyed) throw new Error("Consumer has been destroyed");
		config.visible.value = false;
	};
	const show = () => {
		if (consumer.destroyed) throw new Error("Consumer has been destroyed");
		config.visible.value = true;
	};
	const unmount = () => {
		nextTick(() => {
			render(null, containerEl);
			containerEl.remove();
		});
	};
	const { promise, resolve, reject } = PromiseWithResolvers();
	const DEFAULT_ANIMATION_TIMEOUT = 3e3;
	const destroy = (external = false) => {
		if (external) {
			hide();
			consumer.once(EVENT_NAME.destroy, unmount, {
				once: true,
				callImmediatelyAfterDelay: DEFAULT_ANIMATION_TIMEOUT
			});
		} else {
			activeConsumers.delete(consumer);
			consumer.stack.splice(consumer.stackIndex).forEach((c) => c.destroy(true));
			consumer.destroyed = true;
		}
	};
	const destroyWithResolve = (val) => {
		resolve(val);
		destroy();
	};
	const destroyWithReject = (reason) => {
		reject(reason);
		destroy();
	};
	const consumer = {
		meta: config.meta || {},
		promise,
		resolve,
		reject,
		destroyWithResolve,
		destroyWithReject,
		hide,
		show,
		destroy,
		container: containerEl,
		visible: config.visible,
		on: (name, callback, config$1 = {}) => EB.on(consumer, name, callback, config$1),
		once: (name, callback, config$1 = {}) => EB.on(consumer, name, callback, config$1),
		emit: (name, ...args) => EB.emit(consumer, name, ...args),
		off: (name, callback) => EB.off(consumer, name, callback),
		stack: [],
		stackIndex: -1,
		componentRef: void 0,
		mounted: false,
		destroyed: false
	};
	const vnode = createVNode(/* @__PURE__ */ defineComponent({ setup() {
		const commandInstance = getCurrentInstance();
		for (const key in config.provideProps) provide(key, config.provideProps[key]);
		const upStreamProvides = _objectSpread2(_objectSpread2({}, getProvidesChain(commandInstance)), getProvidesChain(parentInstance));
		const provideKeys = [...Object.getOwnPropertySymbols(upStreamProvides), ...Object.keys(upStreamProvides)];
		for (const key of provideKeys) provide(key, upStreamProvides[key]);
		provide(CommandComponentConsumerInjectKey, consumer);
		const stack = inject(CommandComponentStackInjectKey, []);
		consumer.stackIndex = stack.length;
		stack.push(consumer);
		provide(CommandComponentStackInjectKey, stack);
		consumer.stack = stack;
		return () => h(uiComponent);
	} }), null, null);
	vnode.appContext = (parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.appContext) || vnode.appContext;
	if (config.fragment) {
		Object.assign(containerEl.style, {
			display: "none",
			position: "absolute",
			pointerEvents: "none"
		});
		document.head.appendChild(containerEl);
		render(h(Teleport, { to: appendToElement }, vnode), containerEl);
	} else {
		appendToElement.appendChild(containerEl);
		render(vnode, containerEl);
	}
	if (config.immediate === void 0 || config.immediate) consumer.show();
	consumer.mounted = true;
	activeConsumers.add(consumer);
	return consumer;
}
const useConsumer = (warn = true) => {
	const showWarningMessage = () => warn && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
	return inject(CommandComponentConsumerInjectKey, () => new Proxy({}, {
		get: () => showWarningMessage,
		apply: showWarningMessage
	}), true);
};

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var _freeGlobal_default = freeGlobal;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
/** Detect free variable `self`. */
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = _freeGlobal_default || freeSelf || Function("return this")();
var _root_default = root;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
/** Built-in value references. */
var Symbol$1 = _root_default.Symbol;
var _Symbol_default = Symbol$1;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
/** Used for built-in method references. */
var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$4.hasOwnProperty;
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString$1 = objectProto$4.toString;
/** Built-in value references. */
var symToStringTag$1 = _Symbol_default ? _Symbol_default.toStringTag : void 0;
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
	try {
		value[symToStringTag$1] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString$1.call(value);
	if (unmasked) if (isOwn) value[symToStringTag$1] = tag;
	else delete value[symToStringTag$1];
	return result;
}
var _getRawTag_default = getRawTag;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
/**
* Used to resolve the
* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
* of values.
*/
var nativeObjectToString = Object.prototype.toString;
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
var _objectToString_default = objectToString;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
/** `Object#toString` result references. */
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */
var symToStringTag = _Symbol_default ? _Symbol_default.toStringTag : void 0;
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? _getRawTag_default(value) : _objectToString_default(value);
}
var _baseGetTag_default = baseGetTag;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
/**
* Checks if `value` is classified as an `Array` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array, else `false`.
* @example
*
* _.isArray([1, 2, 3]);
* // => true
*
* _.isArray(document.body.children);
* // => false
*
* _.isArray('abc');
* // => false
*
* _.isArray(_.noop);
* // => false
*/
var isArray = Array.isArray;
var isArray_default = isArray;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
/**
* This method returns the first argument it receives.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Util
* @param {*} value Any value.
* @returns {*} Returns `value`.
* @example
*
* var object = { 'a': 1 };
*
* console.log(_.identity(object) === object);
* // => true
*/
function identity(value) {
	return value;
}
var identity_default = identity;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
/** `Object#toString` result references. */
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
/**
* Checks if `value` is classified as a `Function` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a function, else `false`.
* @example
*
* _.isFunction(_);
* // => true
*
* _.isFunction(/abc/);
* // => false
*/
function isFunction(value) {
	if (!isObject_default(value)) return false;
	var tag = _baseGetTag_default(value);
	return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js
/** Used to detect overreaching core-js shims. */
var coreJsData = _root_default["__core-js_shared__"];
var _coreJsData_default = coreJsData;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js
/** Used to detect methods masquerading as native. */
var maskSrcKey = function() {
	var uid = /[^.]+$/.exec(_coreJsData_default && _coreJsData_default.keys && _coreJsData_default.keys.IE_PROTO || "");
	return uid ? "Symbol(src)_1." + uid : "";
}();
/**
* Checks if `func` has its source masked.
*
* @private
* @param {Function} func The function to check.
* @returns {boolean} Returns `true` if `func` is masked, else `false`.
*/
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked_default = isMasked;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
/** Used to resolve the decompiled source of functions. */
var funcToString$2 = Function.prototype.toString;
/**
* Converts `func` to its source code.
*
* @private
* @param {Function} func The function to convert.
* @returns {string} Returns the source code.
*/
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$2.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
var _toSource_default = toSource;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js
/**
* Used to match `RegExp`
* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
*/
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */
var funcProto$1 = Function.prototype, objectProto$3 = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$3.hasOwnProperty;
/** Used to detect if a method is native. */
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
* The base implementation of `_.isNative` without bad shim checks.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a native function,
*  else `false`.
*/
function baseIsNative(value) {
	if (!isObject_default(value) || _isMasked_default(value)) return false;
	return (isFunction_default(value) ? reIsNative : reIsHostCtor).test(_toSource_default(value));
}
var _baseIsNative_default = baseIsNative;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js
/**
* Gets the value at `key` of `object`.
*
* @private
* @param {Object} [object] The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
var _getValue_default = getValue;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js
/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
	var value = _getValue_default(object, key);
	return _baseIsNative_default(value) ? value : void 0;
}
var _getNative_default = getNative;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseCreate.js
/** Built-in value references. */
var objectCreate = Object.create;
/**
* The base implementation of `_.create` without support for assigning
* properties to the created object.
*
* @private
* @param {Object} proto The object to inherit from.
* @returns {Object} Returns the new object.
*/
var baseCreate = function() {
	function object() {}
	return function(proto) {
		if (!isObject_default(proto)) return {};
		if (objectCreate) return objectCreate(proto);
		object.prototype = proto;
		var result = new object();
		object.prototype = void 0;
		return result;
	};
}();
var _baseCreate_default = baseCreate;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_apply.js
/**
* A faster alternative to `Function#apply`, this function invokes `func`
* with the `this` binding of `thisArg` and the arguments of `args`.
*
* @private
* @param {Function} func The function to invoke.
* @param {*} thisArg The `this` binding of `func`.
* @param {Array} args The arguments to invoke `func` with.
* @returns {*} Returns the result of `func`.
*/
function apply(func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}
var _apply_default = apply;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
/**
* Copies the values of `source` to `array`.
*
* @private
* @param {Array} source The array to copy values from.
* @param {Array} [array=[]] The array to copy values to.
* @returns {Array} Returns `array`.
*/
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
var _copyArray_default = copyArray;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
/**
* Creates a function that'll short out and invoke `identity` instead
* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
* milliseconds.
*
* @private
* @param {Function} func The function to restrict.
* @returns {Function} Returns the new shortable function.
*/
function shortOut(func) {
	var count = 0, lastCalled = 0;
	return function() {
		var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
		lastCalled = stamp;
		if (remaining > 0) {
			if (++count >= HOT_COUNT) return arguments[0];
		} else count = 0;
		return func.apply(void 0, arguments);
	};
}
var _shortOut_default = shortOut;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/constant.js
/**
* Creates a function that returns `value`.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {*} value The value to return from the new function.
* @returns {Function} Returns the new constant function.
* @example
*
* var objects = _.times(2, _.constant({ 'a': 1 }));
*
* console.log(objects);
* // => [{ 'a': 1 }, { 'a': 1 }]
*
* console.log(objects[0] === objects[1]);
* // => true
*/
function constant(value) {
	return function() {
		return value;
	};
}
var constant_default = constant;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
	try {
		var func = _getNative_default(Object, "defineProperty");
		func({}, "", {});
		return func;
	} catch (e) {}
}();
var _defineProperty_default = defineProperty;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSetToString.js
/**
* The base implementation of `setToString` without support for hot loop shorting.
*
* @private
* @param {Function} func The function to modify.
* @param {Function} string The `toString` result.
* @returns {Function} Returns `func`.
*/
var baseSetToString = !_defineProperty_default ? identity_default : function(func, string) {
	return _defineProperty_default(func, "toString", {
		"configurable": true,
		"enumerable": false,
		"value": constant_default(string),
		"writable": true
	});
};
var _baseSetToString_default = baseSetToString;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToString.js
/**
* Sets the `toString` method of `func` to return `string`.
*
* @private
* @param {Function} func The function to modify.
* @param {Function} string The `toString` result.
* @returns {Function} Returns `func`.
*/
var setToString = _shortOut_default(_baseSetToString_default);
var _setToString_default = setToString;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
* Checks if `value` is a valid array-like index.
*
* @private
* @param {*} value The value to check.
* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
*/
function isIndex(value, length) {
	var type = typeof value;
	length = length == null ? MAX_SAFE_INTEGER$1 : length;
	return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex_default = isIndex;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssignValue.js
/**
* The base implementation of `assignValue` and `assignMergeValue` without
* value checks.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && _defineProperty_default) _defineProperty_default(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
var _baseAssignValue_default = baseAssignValue;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js
/**
* Performs a
* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* comparison between two values to determine if they are equivalent.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.eq(object, object);
* // => true
*
* _.eq(object, other);
* // => false
*
* _.eq('a', 'a');
* // => true
*
* _.eq('a', Object('a'));
* // => false
*
* _.eq(NaN, NaN);
* // => true
*/
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
var eq_default = eq;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignValue.js
/** Used to check objects for own properties. */
var hasOwnProperty$6 = Object.prototype.hasOwnProperty;
/**
* Assigns `value` to `key` of `object` if the existing value is not equivalent
* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* for equality comparisons.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignValue(object, key, value) {
	var objValue = object[key];
	if (!(hasOwnProperty$6.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) _baseAssignValue_default(object, key, value);
}
var _assignValue_default = assignValue;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyObject.js
/**
* Copies properties of `source` to `object`.
*
* @private
* @param {Object} source The object to copy properties from.
* @param {Array} props The property identifiers to copy.
* @param {Object} [object={}] The object to copy properties to.
* @param {Function} [customizer] The function to customize copied values.
* @returns {Object} Returns `object`.
*/
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) _baseAssignValue_default(object, key, newValue);
		else _assignValue_default(object, key, newValue);
	}
	return object;
}
var _copyObject_default = copyObject;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
/**
* A specialized version of `baseRest` which transforms the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @param {Function} transform The rest array transform.
* @returns {Function} Returns the new function.
*/
function overRest(func, start, transform) {
	start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
	return function() {
		var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
		while (++index < length) array[index] = args[start + index];
		index = -1;
		var otherArgs = Array(start + 1);
		while (++index < start) otherArgs[index] = args[index];
		otherArgs[start] = transform(array);
		return _apply_default(func, this, otherArgs);
	};
}
var _overRest_default = overRest;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRest.js
/**
* The base implementation of `_.rest` which doesn't validate or coerce arguments.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @returns {Function} Returns the new function.
*/
function baseRest(func, start) {
	return _setToString_default(_overRest_default(func, start, identity_default), func + "");
}
var _baseRest_default = baseRest;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_default = isLength;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike(value) {
	return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIterateeCall.js
/**
* Checks if the given arguments are from an iteratee call.
*
* @private
* @param {*} value The potential iteratee value argument.
* @param {*} index The potential iteratee index or key argument.
* @param {*} object The potential iteratee object argument.
* @returns {boolean} Returns `true` if the arguments are from an iteratee call,
*  else `false`.
*/
function isIterateeCall(value, index, object) {
	if (!isObject_default(object)) return false;
	var type = typeof index;
	if (type == "number" ? isArrayLike_default(object) && _isIndex_default(index, object.length) : type == "string" && index in object) return eq_default(object[index], value);
	return false;
}
var _isIterateeCall_default = isIterateeCall;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createAssigner.js
/**
* Creates a function like `_.assign`.
*
* @private
* @param {Function} assigner The function to assign values.
* @returns {Function} Returns the new assigner function.
*/
function createAssigner(assigner) {
	return _baseRest_default(function(object, sources) {
		var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
		customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
		if (guard && _isIterateeCall_default(sources[0], sources[1], guard)) {
			customizer = length < 3 ? void 0 : customizer;
			length = 1;
		}
		object = Object(object);
		while (++index < length) {
			var source = sources[index];
			if (source) assigner(object, source, index, customizer);
		}
		return object;
	});
}
var _createAssigner_default = createAssigner;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var objectProto$2 = Object.prototype;
/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$2);
}
var _isPrototype_default = isPrototype;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
/**
* The base implementation of `_.times` without support for iteratee shorthands
* or max array length checks.
*
* @private
* @param {number} n The number of times to invoke `iteratee`.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the array of results.
*/
function baseTimes(n, iteratee) {
	var index = -1, result = Array(n);
	while (++index < n) result[index] = iteratee(index);
	return result;
}
var _baseTimes_default = baseTimes;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
/** `Object#toString` result references. */
var argsTag$1 = "[object Arguments]";
/**
* The base implementation of `_.isArguments`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*/
function baseIsArguments(value) {
	return isObjectLike_default(value) && _baseGetTag_default(value) == argsTag$1;
}
var _baseIsArguments_default = baseIsArguments;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$1.hasOwnProperty;
/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
/**
* Checks if `value` is likely an `arguments` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*  else `false`.
* @example
*
* _.isArguments(function() { return arguments; }());
* // => true
*
* _.isArguments([1, 2, 3]);
* // => false
*/
var isArguments = _baseIsArguments_default(function() {
	return arguments;
}()) ? _baseIsArguments_default : function(value) {
	return isObjectLike_default(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
/**
* This method returns `false`.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {boolean} Returns `false`.
* @example
*
* _.times(2, _.stubFalse);
* // => [false, false]
*/
function stubFalse() {
	return false;
}
var stubFalse_default = stubFalse;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
/** Built-in value references. */
var Buffer$1 = freeModule$2 && freeModule$2.exports === freeExports$2 ? _root_default.Buffer : void 0;
/**
* Checks if `value` is a buffer.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
* @example
*
* _.isBuffer(new Buffer(2));
* // => true
*
* _.isBuffer(new Uint8Array(2));
* // => false
*/
var isBuffer = (Buffer$1 ? Buffer$1.isBuffer : void 0) || stubFalse_default;
var isBuffer_default = isBuffer;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
/** `Object#toString` result references. */
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
* The base implementation of `_.isTypedArray` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
*/
function baseIsTypedArray(value) {
	return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[_baseGetTag_default(value)];
}
var _baseIsTypedArray_default = baseIsTypedArray;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
/**
* The base implementation of `_.unary` without support for storing metadata.
*
* @private
* @param {Function} func The function to cap arguments for.
* @returns {Function} Returns the new capped function.
*/
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
var _baseUnary_default = baseUnary;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
/** Detect free variable `process` from Node.js. */
var freeProcess = freeModule$1 && freeModule$1.exports === freeExports$1 && _freeGlobal_default.process;
/** Used to access faster Node.js helpers. */
var nodeUtil = function() {
	try {
		var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
		if (types) return types;
		return freeProcess && freeProcess.binding && freeProcess.binding("util");
	} catch (e) {}
}();
var _nodeUtil_default = nodeUtil;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = _nodeUtil_default && _nodeUtil_default.isTypedArray;
/**
* Checks if `value` is classified as a typed array.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
* @example
*
* _.isTypedArray(new Uint8Array);
* // => true
*
* _.isTypedArray([]);
* // => false
*/
var isTypedArray = nodeIsTypedArray ? _baseUnary_default(nodeIsTypedArray) : _baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
/** Used to check objects for own properties. */
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
/**
* Creates an array of the enumerable property names of the array-like `value`.
*
* @private
* @param {*} value The value to query.
* @param {boolean} inherited Specify returning inherited property names.
* @returns {Array} Returns the array of property names.
*/
function arrayLikeKeys(value, inherited) {
	var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? _baseTimes_default(value.length, String) : [], length = result.length;
	for (var key in value) if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || _isIndex_default(key, length)))) result.push(key);
	return result;
}
var _arrayLikeKeys_default = arrayLikeKeys;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
var _overArg_default = overArg;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeysIn.js
/**
* This function is like
* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* except that it includes inherited enumerable properties.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
var _nativeKeysIn_default = nativeKeysIn;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeysIn.js
/** Used to check objects for own properties. */
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
/**
* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeysIn(object) {
	if (!isObject_default(object)) return _nativeKeysIn_default(object);
	var isProto = _isPrototype_default(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) result.push(key);
	return result;
}
var _baseKeysIn_default = baseKeysIn;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keysIn.js
/**
* Creates an array of the own and inherited enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keysIn(new Foo);
* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
*/
function keysIn(object) {
	return isArrayLike_default(object) ? _arrayLikeKeys_default(object, true) : _baseKeysIn_default(object);
}
var keysIn_default = keysIn;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeCreate.js
var nativeCreate = _getNative_default(Object, "create");
var _nativeCreate_default = nativeCreate;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashClear.js
/**
* Removes all key-value entries from the hash.
*
* @private
* @name clear
* @memberOf Hash
*/
function hashClear() {
	this.__data__ = _nativeCreate_default ? _nativeCreate_default(null) : {};
	this.size = 0;
}
var _hashClear_default = hashClear;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashDelete.js
/**
* Removes `key` and its value from the hash.
*
* @private
* @name delete
* @memberOf Hash
* @param {Object} hash The hash to modify.
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
var _hashDelete_default = hashDelete;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashGet.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
/** Used to check objects for own properties. */
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
/**
* Gets the hash value for `key`.
*
* @private
* @name get
* @memberOf Hash
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function hashGet(key) {
	var data = this.__data__;
	if (_nativeCreate_default) {
		var result = data[key];
		return result === HASH_UNDEFINED$1 ? void 0 : result;
	}
	return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
var _hashGet_default = hashGet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashHas.js
/** Used to check objects for own properties. */
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
/**
* Checks if a hash value for `key` exists.
*
* @private
* @name has
* @memberOf Hash
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function hashHas(key) {
	var data = this.__data__;
	return _nativeCreate_default ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
var _hashHas_default = hashHas;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashSet.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
* Sets the hash `key` to `value`.
*
* @private
* @name set
* @memberOf Hash
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the hash instance.
*/
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = _nativeCreate_default && value === void 0 ? HASH_UNDEFINED : value;
	return this;
}
var _hashSet_default = hashSet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Hash.js
/**
* Creates a hash object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
Hash.prototype.clear = _hashClear_default;
Hash.prototype["delete"] = _hashDelete_default;
Hash.prototype.get = _hashGet_default;
Hash.prototype.has = _hashHas_default;
Hash.prototype.set = _hashSet_default;
var _Hash_default = Hash;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheClear.js
/**
* Removes all key-value entries from the list cache.
*
* @private
* @name clear
* @memberOf ListCache
*/
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
var _listCacheClear_default = listCacheClear;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assocIndexOf.js
/**
* Gets the index at which the `key` is found in `array` of key-value pairs.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} key The key to search for.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq_default(array[length][0], key)) return length;
	return -1;
}
var _assocIndexOf_default = assocIndexOf;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheDelete.js
/** Built-in value references. */
var splice = Array.prototype.splice;
/**
* Removes `key` and its value from the list cache.
*
* @private
* @name delete
* @memberOf ListCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function listCacheDelete(key) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
var _listCacheDelete_default = listCacheDelete;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheGet.js
/**
* Gets the list cache value for `key`.
*
* @private
* @name get
* @memberOf ListCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function listCacheGet(key) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet_default = listCacheGet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheHas.js
/**
* Checks if a list cache value for `key` exists.
*
* @private
* @name has
* @memberOf ListCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function listCacheHas(key) {
	return _assocIndexOf_default(this.__data__, key) > -1;
}
var _listCacheHas_default = listCacheHas;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheSet.js
/**
* Sets the list cache `key` to `value`.
*
* @private
* @name set
* @memberOf ListCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the list cache instance.
*/
function listCacheSet(key, value) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
var _listCacheSet_default = listCacheSet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js
/**
* Creates an list cache object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
ListCache.prototype.clear = _listCacheClear_default;
ListCache.prototype["delete"] = _listCacheDelete_default;
ListCache.prototype.get = _listCacheGet_default;
ListCache.prototype.has = _listCacheHas_default;
ListCache.prototype.set = _listCacheSet_default;
var _ListCache_default = ListCache;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
var Map$1 = _getNative_default(_root_default, "Map");
var _Map_default = Map$1;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheClear.js
/**
* Removes all key-value entries from the map.
*
* @private
* @name clear
* @memberOf MapCache
*/
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new _Hash_default(),
		"map": new (_Map_default || _ListCache_default)(),
		"string": new _Hash_default()
	};
}
var _mapCacheClear_default = mapCacheClear;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKeyable.js
/**
* Checks if `value` is suitable for use as unique object key.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
*/
function isKeyable(value) {
	var type = typeof value;
	return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable_default = isKeyable;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMapData.js
/**
* Gets the data for `map`.
*
* @private
* @param {Object} map The map to query.
* @param {string} key The reference key.
* @returns {*} Returns the map data.
*/
function getMapData(map, key) {
	var data = map.__data__;
	return _isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData_default = getMapData;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheDelete.js
/**
* Removes `key` and its value from the map.
*
* @private
* @name delete
* @memberOf MapCache
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function mapCacheDelete(key) {
	var result = _getMapData_default(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
var _mapCacheDelete_default = mapCacheDelete;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheGet.js
/**
* Gets the map value for `key`.
*
* @private
* @name get
* @memberOf MapCache
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function mapCacheGet(key) {
	return _getMapData_default(this, key).get(key);
}
var _mapCacheGet_default = mapCacheGet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheHas.js
/**
* Checks if a map value for `key` exists.
*
* @private
* @name has
* @memberOf MapCache
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function mapCacheHas(key) {
	return _getMapData_default(this, key).has(key);
}
var _mapCacheHas_default = mapCacheHas;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheSet.js
/**
* Sets the map `key` to `value`.
*
* @private
* @name set
* @memberOf MapCache
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the map cache instance.
*/
function mapCacheSet(key, value) {
	var data = _getMapData_default(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
var _mapCacheSet_default = mapCacheSet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js
/**
* Creates a map cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function MapCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
MapCache.prototype.clear = _mapCacheClear_default;
MapCache.prototype["delete"] = _mapCacheDelete_default;
MapCache.prototype.get = _mapCacheGet_default;
MapCache.prototype.has = _mapCacheHas_default;
MapCache.prototype.set = _mapCacheSet_default;
var _MapCache_default = MapCache;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getPrototype.js
/** Built-in value references. */
var getPrototype = _overArg_default(Object.getPrototypeOf, Object);
var _getPrototype_default = getPrototype;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isPlainObject.js
/** `Object#toString` result references. */
var objectTag = "[object Object]";
/** Used for built-in method references. */
var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);
/**
* Checks if `value` is a plain object, that is, an object created by the
* `Object` constructor or one with a `[[Prototype]]` of `null`.
*
* @static
* @memberOf _
* @since 0.8.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
* @example
*
* function Foo() {
*   this.a = 1;
* }
*
* _.isPlainObject(new Foo);
* // => false
*
* _.isPlainObject([1, 2, 3]);
* // => false
*
* _.isPlainObject({ 'x': 0, 'y': 0 });
* // => true
*
* _.isPlainObject(Object.create(null));
* // => true
*/
function isPlainObject(value) {
	if (!isObjectLike_default(value) || _baseGetTag_default(value) != objectTag) return false;
	var proto = _getPrototype_default(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackClear.js
/**
* Removes all key-value entries from the stack.
*
* @private
* @name clear
* @memberOf Stack
*/
function stackClear() {
	this.__data__ = new _ListCache_default();
	this.size = 0;
}
var _stackClear_default = stackClear;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackDelete.js
/**
* Removes `key` and its value from the stack.
*
* @private
* @name delete
* @memberOf Stack
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function stackDelete(key) {
	var data = this.__data__, result = data["delete"](key);
	this.size = data.size;
	return result;
}
var _stackDelete_default = stackDelete;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackGet.js
/**
* Gets the stack value for `key`.
*
* @private
* @name get
* @memberOf Stack
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function stackGet(key) {
	return this.__data__.get(key);
}
var _stackGet_default = stackGet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackHas.js
/**
* Checks if a stack value for `key` exists.
*
* @private
* @name has
* @memberOf Stack
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function stackHas(key) {
	return this.__data__.has(key);
}
var _stackHas_default = stackHas;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackSet.js
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/**
* Sets the stack `key` to `value`.
*
* @private
* @name set
* @memberOf Stack
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the stack cache instance.
*/
function stackSet(key, value) {
	var data = this.__data__;
	if (data instanceof _ListCache_default) {
		var pairs = data.__data__;
		if (!_Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
			pairs.push([key, value]);
			this.size = ++data.size;
			return this;
		}
		data = this.__data__ = new _MapCache_default(pairs);
	}
	data.set(key, value);
	this.size = data.size;
	return this;
}
var _stackSet_default = stackSet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Stack.js
/**
* Creates a stack cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Stack(entries) {
	this.size = (this.__data__ = new _ListCache_default(entries)).size;
}
Stack.prototype.clear = _stackClear_default;
Stack.prototype["delete"] = _stackDelete_default;
Stack.prototype.get = _stackGet_default;
Stack.prototype.has = _stackHas_default;
Stack.prototype.set = _stackSet_default;
var _Stack_default = Stack;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneBuffer.js
/** Detect free variable `exports`. */
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
/** Built-in value references. */
var Buffer = freeModule && freeModule.exports === freeExports ? _root_default.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
/**
* Creates a clone of  `buffer`.
*
* @private
* @param {Buffer} buffer The buffer to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Buffer} Returns the cloned buffer.
*/
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
var _cloneBuffer_default = cloneBuffer;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Uint8Array.js
/** Built-in value references. */
var Uint8Array = _root_default.Uint8Array;
var _Uint8Array_default = Uint8Array;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneArrayBuffer.js
/**
* Creates a clone of `arrayBuffer`.
*
* @private
* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
* @returns {ArrayBuffer} Returns the cloned array buffer.
*/
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new _Uint8Array_default(result).set(new _Uint8Array_default(arrayBuffer));
	return result;
}
var _cloneArrayBuffer_default = cloneArrayBuffer;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneTypedArray.js
/**
* Creates a clone of `typedArray`.
*
* @private
* @param {Object} typedArray The typed array to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned typed array.
*/
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? _cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray_default = cloneTypedArray;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneObject.js
/**
* Initializes an object clone.
*
* @private
* @param {Object} object The object to clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneObject(object) {
	return typeof object.constructor == "function" && !_isPrototype_default(object) ? _baseCreate_default(_getPrototype_default(object)) : {};
}
var _initCloneObject_default = initCloneObject;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createBaseFor.js
/**
* Creates a base function for methods like `_.forIn` and `_.forOwn`.
*
* @private
* @param {boolean} [fromRight] Specify iterating from right to left.
* @returns {Function} Returns the new base function.
*/
function createBaseFor(fromRight) {
	return function(object, iteratee, keysFunc) {
		var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
		while (length--) {
			var key = props[fromRight ? length : ++index];
			if (iteratee(iterable[key], key, iterable) === false) break;
		}
		return object;
	};
}
var _createBaseFor_default = createBaseFor;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFor.js
/**
* The base implementation of `baseForOwn` which iterates over `object`
* properties returned by `keysFunc` and invokes `iteratee` for each property.
* Iteratee functions may exit iteration early by explicitly returning `false`.
*
* @private
* @param {Object} object The object to iterate over.
* @param {Function} iteratee The function invoked per iteration.
* @param {Function} keysFunc The function to get the keys of `object`.
* @returns {Object} Returns `object`.
*/
var baseFor = _createBaseFor_default();
var _baseFor_default = baseFor;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignMergeValue.js
/**
* This function is like `assignValue` except that it doesn't assign
* `undefined` values.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignMergeValue(object, key, value) {
	if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) _baseAssignValue_default(object, key, value);
}
var _assignMergeValue_default = assignMergeValue;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLikeObject.js
/**
* This method is like `_.isArrayLike` except that it also checks if `value`
* is an object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array-like object,
*  else `false`.
* @example
*
* _.isArrayLikeObject([1, 2, 3]);
* // => true
*
* _.isArrayLikeObject(document.body.children);
* // => true
*
* _.isArrayLikeObject('abc');
* // => false
*
* _.isArrayLikeObject(_.noop);
* // => false
*/
function isArrayLikeObject(value) {
	return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_safeGet.js
/**
* Gets the value at `key`, unless `key` is "__proto__" or "constructor".
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function safeGet(object, key) {
	if (key === "constructor" && typeof object[key] === "function") return;
	if (key == "__proto__") return;
	return object[key];
}
var _safeGet_default = safeGet;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toPlainObject.js
/**
* Converts `value` to a plain object flattening inherited enumerable string
* keyed properties of `value` to own properties of the plain object.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {Object} Returns the converted plain object.
* @example
*
* function Foo() {
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.assign({ 'a': 1 }, new Foo);
* // => { 'a': 1, 'b': 2 }
*
* _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
* // => { 'a': 1, 'b': 2, 'c': 3 }
*/
function toPlainObject(value) {
	return _copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default = toPlainObject;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMergeDeep.js
/**
* A specialized version of `baseMerge` for arrays and objects which performs
* deep merges and tracks traversed objects enabling objects with circular
* references to be merged.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @param {string} key The key of the value to merge.
* @param {number} srcIndex The index of `source`.
* @param {Function} mergeFunc The function to merge values.
* @param {Function} [customizer] The function to customize assigned values.
* @param {Object} [stack] Tracks traversed source values and their merged
*  counterparts.
*/
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	var objValue = _safeGet_default(object, key), srcValue = _safeGet_default(source, key), stacked = stack.get(srcValue);
	if (stacked) {
		_assignMergeValue_default(object, key, stacked);
		return;
	}
	var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
	var isCommon = newValue === void 0;
	if (isCommon) {
		var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
		newValue = srcValue;
		if (isArr || isBuff || isTyped) if (isArray_default(objValue)) newValue = objValue;
		else if (isArrayLikeObject_default(objValue)) newValue = _copyArray_default(objValue);
		else if (isBuff) {
			isCommon = false;
			newValue = _cloneBuffer_default(srcValue, true);
		} else if (isTyped) {
			isCommon = false;
			newValue = _cloneTypedArray_default(srcValue, true);
		} else newValue = [];
		else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
			newValue = objValue;
			if (isArguments_default(objValue)) newValue = toPlainObject_default(objValue);
			else if (!isObject_default(objValue) || isFunction_default(objValue)) newValue = _initCloneObject_default(srcValue);
		} else isCommon = false;
	}
	if (isCommon) {
		stack.set(srcValue, newValue);
		mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
		stack["delete"](srcValue);
	}
	_assignMergeValue_default(object, key, newValue);
}
var _baseMergeDeep_default = baseMergeDeep;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMerge.js
/**
* The base implementation of `_.merge` without support for multiple sources.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @param {number} srcIndex The index of `source`.
* @param {Function} [customizer] The function to customize merged values.
* @param {Object} [stack] Tracks traversed source values and their merged
*  counterparts.
*/
function baseMerge(object, source, srcIndex, customizer, stack) {
	if (object === source) return;
	_baseFor_default(source, function(srcValue, key) {
		stack || (stack = new _Stack_default());
		if (isObject_default(srcValue)) _baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
		else {
			var newValue = customizer ? customizer(_safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
			if (newValue === void 0) newValue = srcValue;
			_assignMergeValue_default(object, key, newValue);
		}
	}, keysIn_default);
}
var _baseMerge_default = baseMerge;

//#endregion
//#region ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js
/**
* This method is like `_.assign` except that it recursively merges own and
* inherited enumerable string keyed properties of source objects into the
* destination object. Source properties that resolve to `undefined` are
* skipped if a destination value exists. Array and plain object properties
* are merged recursively. Other objects and value types are overridden by
* assignment. Source objects are applied from left to right. Subsequent
* sources overwrite property assignments of previous sources.
*
* **Note:** This method mutates `object`.
*
* @static
* @memberOf _
* @since 0.5.0
* @category Object
* @param {Object} object The destination object.
* @param {...Object} [sources] The source objects.
* @returns {Object} Returns `object`.
* @example
*
* var object = {
*   'a': [{ 'b': 2 }, { 'd': 4 }]
* };
*
* var other = {
*   'a': [{ 'c': 3 }, { 'e': 5 }]
* };
*
* _.merge(object, other);
* // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
*/
var merge = _createAssigner_default(function(object, source, srcIndex) {
	_baseMerge_default(object, source, srcIndex);
});
var merge_default = merge;

//#endregion
//#region src/adapter.tsx
/**
* 创建函数式适配器
* @param options 适配器选项
* @returns 适配器函数
*/
function createAdapter(options) {
	if (!isVue3OrHigher()) throw new Error("Vue 3.0 or higher is required");
	const { render: render$1, defaultConfig = {}, configTransformer } = options;
	return function(useConfig) {
		const parentInstance = getCurrentInstance();
		return function commandComponent(contentVNode, commandConfig) {
			const mergedConfig = computed(() => {
				const mergedConfig$1 = merge_default({}, defaultConfig, typeof useConfig === "function" ? useConfig() : useConfig, typeof commandConfig === "function" ? commandConfig() : commandConfig);
				return configTransformer ? configTransformer(mergedConfig$1) : mergedConfig$1;
			});
			const visible = ref(false);
			const consumerRef = { value: null };
			consumerRef.value = commandProviderWithRender(parentInstance, createVNode(/* @__PURE__ */ defineComponent({ setup: () => {
				const mergedConfig$1 = computed(() => {
					const mergedConfig$2 = merge_default({}, defaultConfig, typeof useConfig === "function" ? useConfig() : useConfig, typeof commandConfig === "function" ? commandConfig() : commandConfig);
					return configTransformer ? configTransformer(mergedConfig$2) : mergedConfig$2;
				});
				const componentRef = ref();
				const onMounted = () => {
					Promise.resolve().then(() => {
						consumerRef.value.componentRef = componentRef;
					});
				};
				const renderOptions = {
					componentRef,
					onMounted,
					config: mergedConfig$1,
					consumer: consumerRef,
					visible
				};
				return () => render$1(contentVNode, renderOptions);
			} }), null, null), _objectSpread2(_objectSpread2({}, mergedConfig.value), {}, { visible }));
			return consumerRef.value;
		};
	};
}

//#endregion
export { CommandComponentConsumerInjectKey, CommandComponentStackInjectKey, ConsumerEventBus, EVENT_NAME, PromiseWithResolvers, RxRender, activeConsumers, busName2EventName, commandProviderWithRender, createAdapter, eventName2BusName, getMaxZIndex, isNull, isVue3OrHigher, useConsumer, uuid };