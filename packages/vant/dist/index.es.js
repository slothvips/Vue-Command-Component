var w = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (o, e, t) => e in o ? w(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, l = (o, e) => {
  for (var t in e || (e = {}))
    a.call(e, t) && p(o, t, e[t]);
  if (n)
    for (var t of n(e))
      d.call(e, t) && p(o, t, e[t]);
  return o;
};
var m = (o, e) => {
  var t = {};
  for (var r in o)
    a.call(o, r) && e.indexOf(r) < 0 && (t[r] = o[r]);
  if (o != null && n)
    for (var r of n(o))
      e.indexOf(r) < 0 && d.call(o, r) && (t[r] = o[r]);
  return t;
};
import { createAdapter as C } from "@vue-cmd/core";
export * from "@vue-cmd/core";
import { createVNode as h, mergeProps as x } from "vue";
import { merge as y } from "lodash-es";
import { Popup as V } from "vant";
const c = {
  round: !0,
  lockScroll: !0
}, b = (o, {
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
  ]), P = () => {
    f.value.destroy();
  };
  return h(V, x({
    ref: e,
    show: t.value,
    "onUpdate:show": (g) => t.value = g,
    onClosed: P,
    onVnodeMounted: r
  }, c, v, i), l({
    default: () => o
  }, s.value.slots));
}, k = C({
  render: b,
  defaultConfig: {
    attrs: c
  }
}), R = (o = {}) => {
  const e = k(o);
  return (t, r = {}) => {
    const s = y({}, r, {
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
  k as usePopup,
  R as usePopupOnBottom
};
