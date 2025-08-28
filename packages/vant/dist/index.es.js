var P = Object.defineProperty;
var n = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
var p = (o, e, t) => e in o ? P(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && p(o, t, e[t]);
  if (n)
    for (var t of n(e))
      a.call(e, t) && p(o, t, e[t]);
  return o;
};
var c = (o, e) => {
  var t = {};
  for (var r in o)
    l.call(o, r) && e.indexOf(r) < 0 && (t[r] = o[r]);
  if (o != null && n)
    for (var r of n(o))
      e.indexOf(r) < 0 && a.call(o, r) && (t[r] = o[r]);
  return t;
};
import { createAdapter as g } from "@vue-cmd/core";
export * from "@vue-cmd/core";
import { createVNode as w, mergeProps as b } from "vue";
import { merge as h } from "lodash-es";
import { Popup as k } from "vant";
const d = {
  round: !0,
  lockScroll: !0
}, x = (o, {
  componentRef: e,
  visible: t,
  onMounted: r,
  config: s,
  consumer: f
}) => {
  const u = s.value, {
    attrs: i
  } = u, v = c(u, [
    "attrs"
  ]), C = () => {
    f.value.destroy();
  };
  return w(k, b({
    ref: e,
    show: t.value,
    onClickCloseIcon: C,
    onVnodeMounted: r
  }, d, v, i), m({
    default: () => o
  }, s.value.slots));
}, y = g({
  render: x,
  defaultConfig: {
    attrs: d
  }
}), N = (o = {}) => {
  const e = y(o);
  return (t, r = {}) => {
    const s = h({}, r, {
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
  y as usePopup,
  N as usePopupOnBottom
};
