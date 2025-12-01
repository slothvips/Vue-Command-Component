import { EVENT_NAME, createAdapter } from "@vue-cmd/core";
import { createVNode, mergeProps } from "vue";
import { ElDialog, ElDrawer } from "element-plus";

export * from "@vue-cmd/core"

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
//#region src/dialog.tsx
const baseRender$1 = (contentVNode, options) => {
	const { componentRef, visible, onMounted, config, consumer } = options;
	const { title, width, attrs, slots } = config.value;
	const handleClose = (done) => {
		var _attrs$onBeforeClose;
		consumer.value.destroy();
		attrs === null || attrs === void 0 || (_attrs$onBeforeClose = attrs.onBeforeClose) === null || _attrs$onBeforeClose === void 0 || _attrs$onBeforeClose.call(attrs, done);
		done();
	};
	const handleClosed = (...args) => {
		var _attrs$onClosed;
		consumer.value.emit(EVENT_NAME.destroy);
		return attrs === null || attrs === void 0 || (_attrs$onClosed = attrs.onClosed) === null || _attrs$onClosed === void 0 ? void 0 : _attrs$onClosed.call(attrs, ...args);
	};
	return createVNode(ElDialog, mergeProps({
		"ref": componentRef,
		"modelValue": visible.value,
		"onUpdate:modelValue": ($event) => visible.value = $event,
		"onVnodeMounted": onMounted,
		"title": title,
		"width": width
	}, attrs, {
		"beforeClose": handleClose,
		"onClosed": handleClosed
	}), _objectSpread2({ default: () => contentVNode }, slots));
};
const useDialog = createAdapter({
	render: baseRender$1,
	defaultConfig: { meta: { name: "element-plus-dialog" } }
});
/**
* 可拖拽,遮罩无法关闭,按esc无法关闭
* @returns
*/
const useDialogWithDrag = (useConfig) => {
	const dialog = useDialog(useConfig);
	return (contentVNode, config = {}) => {
		return dialog(contentVNode, _objectSpread2({ attrs: {
			draggable: true,
			closeOnClickModal: false,
			closeOnPressEscape: false
		} }, config));
	};
};

//#endregion
//#region src/drawer.tsx
const baseRender = (contentVNode, { componentRef, visible, onMounted, config, consumer }) => {
	const { attrs, slots, title, size } = config.value;
	const onClosed = () => {
		consumer.value.destroy();
	};
	return createVNode(ElDrawer, mergeProps({
		"ref": componentRef,
		"modelValue": visible.value,
		"onUpdate:modelValue": ($event) => visible.value = $event,
		"onVnodeMounted": onMounted,
		"title": title,
		"size": size
	}, attrs, { "onClosed": onClosed }), _objectSpread2({ default: () => contentVNode }, slots));
};
const useDrawer = createAdapter({
	render: baseRender,
	defaultConfig: { meta: { name: "element-plus-drawer" } }
});

//#endregion
export { useDialog, useDialogWithDrag, useDrawer };