var h = Object.defineProperty;
var g = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var C = (l, o, e) => o in l ? h(l, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[o] = e, d = (l, o) => {
  for (var e in o || (o = {}))
    w.call(o, e) && C(l, e, o[e]);
  if (g)
    for (var e of g(o))
      M.call(o, e) && C(l, e, o[e]);
  return l;
};
import { createAdapter as v, EVENT_NAME as b } from "@vue-cmd/core";
export * from "@vue-cmd/core";
import { createVNode as V, mergeProps as D } from "vue";
import { ElDialog as y, ElDrawer as N } from "element-plus";
const R = (l, o) => {
  const {
    componentRef: e,
    visible: t,
    onMounted: u,
    config: i,
    consumer: s
  } = o, {
    title: c,
    width: m,
    attrs: n,
    slots: f
  } = i.value, p = (r) => {
    var a;
    s.value.destroy(), (a = n == null ? void 0 : n.onBeforeClose) == null || a.call(n, r), r();
  }, E = (...r) => {
    var a;
    return s.value.emit(b.destroy), (a = n == null ? void 0 : n.onClosed) == null ? void 0 : a.call(n, ...r);
  };
  return V(y, D({
    ref: e,
    modelValue: t.value,
    "onUpdate:modelValue": (r) => t.value = r,
    onVnodeMounted: u,
    title: c,
    width: m
  }, n, {
    beforeClose: p,
    onClosed: E
  }), d({
    default: () => l
  }, f));
}, x = v({
  render: R,
  defaultConfig: {
    meta: {
      name: "element-plus-dialog"
    }
  }
}), k = (l) => {
  const o = x(l);
  return (e, t = {}) => o(e, d({
    attrs: {
      // 可拖拽
      draggable: !0,
      closeOnClickModal: !1,
      closeOnPressEscape: !1
    }
  }, t));
}, z = (l, {
  componentRef: o,
  visible: e,
  onMounted: t,
  config: u,
  consumer: i
}) => {
  const {
    attrs: s,
    slots: c,
    title: m,
    size: n
  } = u.value, f = () => {
    i.value.destroy();
  };
  return V(N, D({
    ref: o,
    modelValue: e.value,
    "onUpdate:modelValue": (p) => e.value = p,
    onVnodeMounted: t,
    title: m,
    size: n
  }, s, {
    onClosed: f
  }), d({
    default: () => l
  }, c));
}, B = v({
  render: z,
  defaultConfig: {
    meta: {
      name: "element-plus-drawer"
    }
  }
});
export {
  x as useDialog,
  k as useDialogWithDrag,
  B as useDrawer
};
