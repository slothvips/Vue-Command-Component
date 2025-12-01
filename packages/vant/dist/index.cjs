let __vue_cmd_core = require("@vue-cmd/core");
let vue = require("vue");
let lodash_es = require("lodash-es");
let vant = require("vant");

//#region \0@oxc-project+runtime@0.99.0/helpers/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.includes(n)) continue;
		t[n] = r[n];
	}
	return t;
}

//#endregion
//#region \0@oxc-project+runtime@0.99.0/helpers/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e);
		for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}

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
//#region src/popup.tsx
const _excluded = ["attrs"];
const defaultProps = {
	round: true,
	lockScroll: true
};
const baseRender = (contentVNode, { componentRef, visible, onMounted, config, consumer }) => {
	const _config$value = config.value, { attrs } = _config$value, rest = _objectWithoutProperties(_config$value, _excluded);
	const onClose = () => {
		consumer.value.destroy();
	};
	return (0, vue.createVNode)(vant.Popup, (0, vue.mergeProps)({
		"ref": componentRef,
		"show": visible.value,
		"onUpdate:show": ($event) => visible.value = $event,
		"onClosed": onClose,
		"onVnodeMounted": onMounted
	}, defaultProps, rest, attrs), _objectSpread2({ default: () => contentVNode }, config.value.slots));
};
const usePopup = (0, __vue_cmd_core.createAdapter)({
	render: baseRender,
	defaultConfig: { attrs: defaultProps }
});
const usePopupOnBottom = (createConfig = {}) => {
	const popup = usePopup(createConfig);
	return (ContentVNode, config = {}) => {
		return popup(ContentVNode, (0, lodash_es.merge)({}, config, { attrs: {
			position: "bottom",
			style: { width: "100vw" }
		} }));
	};
};

//#endregion
exports.usePopup = usePopup;
exports.usePopupOnBottom = usePopupOnBottom;
Object.keys(__vue_cmd_core).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return __vue_cmd_core[k]; }
  });
});
