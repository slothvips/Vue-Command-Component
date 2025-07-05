var P = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, r, o) => r in e ? P(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, p = (e, r) => {
  for (var o in r || (r = {}))
    a.call(r, o) && l(e, o, r[o]);
  if (s)
    for (var o of s(r))
      d.call(r, o) && l(e, o, r[o]);
  return e;
};
var c = (e, r) => {
  var o = {};
  for (var t in e)
    a.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && s)
    for (var t of s(e))
      r.indexOf(t) < 0 && d.call(e, t) && (o[t] = e[t]);
  return o;
};
import { createVNode as k, mergeProps as V } from "vue";
import { createAdapter as b } from "@vue-cmd/core";
import { Popup as g } from "vant";
const f = {
  round: !0,
  lockScroll: !0
}, h = (e, {
  componentRef: r,
  visible: o,
  onMounted: t,
  config: n,
  consumer: m
}) => {
  const u = n.value, {
    attrs: i
  } = u, v = c(u, [
    "attrs"
  ]), C = () => {
    m.value.destroy();
  };
  return k(g, V({
    ref: r,
    show: o.value,
    onClickCloseIcon: C,
    onVnodeMounted: t
  }, f, v, i), p({
    default: () => e
  }, n.value.slots));
}, I = b({
  render: h,
  defaultConfig: {
    attrs: f
  }
});
export {
  I as usePopup
};
