var g = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (o, e, t) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, d = (o, e) => {
  for (var t in e || (e = {}))
    a.call(e, t) && p(o, t, e[t]);
  if (n)
    for (var t of n(e))
      l.call(e, t) && p(o, t, e[t]);
  return o;
};
var m = (o, e) => {
  var t = {};
  for (var r in o)
    a.call(o, r) && e.indexOf(r) < 0 && (t[r] = o[r]);
  if (o != null && n)
    for (var r of n(o))
      e.indexOf(r) < 0 && l.call(o, r) && (t[r] = o[r]);
  return t;
};
import { createAdapter as w } from "@vue-cmd/core";
export * from "@vue-cmd/core";
import { createVNode as h, mergeProps as k } from "vue";
import { merge as x } from "lodash-es";
import { Popup as y } from "vant";
const c = {
  round: !0,
  lockScroll: !0
}, V = (o, {
  componentRef: e,
  visible: t,
  onMounted: r,
  config: s,
  consumer: f
}) => {
  const u = s.value, {
    attrs: i
  } = u, v = m(u, [
    "attrs"
  ]), C = () => {
    f.value.destroy();
  };
  return h(y, k({
    ref: e,
    show: t.value,
    "onUpdate:show": (P) => t.value = P,
    onClickCloseIcon: C,
    onVnodeMounted: r
  }, c, v, i), d({
    default: () => o
  }, s.value.slots));
}, b = w({
  render: V,
  defaultConfig: {
    attrs: c
  }
}), O = (o = {}) => {
  const e = b(o);
  return (t, r = {}) => {
    const s = x({}, r, {
      attrs: {
        position: "bottom",
        style: {
          width: "100vw"
        }
      }
    });
    return e(t, s);
  };
};
export {
  b as usePopup,
  O as usePopupOnBottom
};
