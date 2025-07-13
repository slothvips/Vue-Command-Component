var P = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (e, r, o) => r in e ? P(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, d = (e, r) => {
  for (var o in r || (r = {}))
    a.call(r, o) && l(e, o, r[o]);
  if (s)
    for (var o of s(r))
      p.call(r, o) && l(e, o, r[o]);
  return e;
};
var c = (e, r) => {
  var o = {};
  for (var t in e)
    a.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && s)
    for (var t of s(e))
      r.indexOf(t) < 0 && p.call(e, t) && (o[t] = e[t]);
  return o;
};
import { createAdapter as k } from "@vue-cmd/core";
export * from "@vue-cmd/core";
import { createVNode as x, mergeProps as V } from "vue";
import { Popup as b } from "vant";
const f = {
  round: !0,
  lockScroll: !0
}, g = (e, {
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
  return x(b, V({
    ref: r,
    show: o.value,
    onClickCloseIcon: C,
    onVnodeMounted: t
  }, f, v, i), d({
    default: () => e
  }, n.value.slots));
}, I = k({
  render: g,
  defaultConfig: {
    attrs: f
  }
});
export {
  I as usePopup
};
