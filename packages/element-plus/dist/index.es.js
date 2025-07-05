var b = Object.defineProperty;
var g = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var C = (l, e, o) => e in l ? b(l, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[e] = o, a = (l, e) => {
  for (var o in e || (e = {}))
    h.call(e, o) && C(l, o, e[o]);
  if (g)
    for (var o of g(e))
      w.call(e, o) && C(l, o, e[o]);
  return l;
};
import { createVNode as p, mergeProps as v } from "vue";
import { createAdapter as D, EVENT_NAME as M } from "@vue-cmd/core";
import { ElDialog as y, ElDrawer as N } from "element-plus";
const R = (l, e) => {
  const {
    componentRef: o,
    visible: d,
    onMounted: u,
    config: i,
    consumer: r
  } = e, {
    title: c,
    width: m,
    attrs: n,
    slots: f
  } = i.value, E = (s) => {
    var t;
    r.value.destroy(), (t = n == null ? void 0 : n.onBeforeClose) == null || t.call(n, s), s();
  }, V = (...s) => {
    var t;
    return r.value.emit(M.destroy), (t = n == null ? void 0 : n.onClosed) == null ? void 0 : t.call(n, ...s);
  };
  return p(y, v({
    ref: o,
    modelValue: d.value,
    onVnodeMounted: u,
    title: c,
    width: m
  }, n, {
    beforeClose: E,
    onClosed: V
  }), a({
    default: () => l
  }, f));
}, z = D({
  render: R,
  defaultConfig: {
    meta: {
      name: "element-plus-dialog"
    }
  }
}), B = () => {
  const l = z();
  return (e, o = {}) => l(e, a({
    attrs: {
      // 可拖拽
      draggable: !0,
      closeOnClickModal: !1,
      closeOnPressEscape: !1
    }
  }, o));
}, A = (l, {
  componentRef: e,
  visible: o,
  onMounted: d,
  config: u,
  consumer: i
}) => {
  const {
    attrs: r,
    slots: c,
    title: m,
    size: n
  } = u.value, f = () => {
    i.value.destroy();
  };
  return p(N, v({
    ref: e,
    modelValue: o.value,
    onVnodeMounted: d,
    title: m,
    size: n
  }, r, {
    onClosed: f
  }), a({
    default: () => l
  }, c));
}, T = D({
  render: A,
  defaultConfig: {
    meta: {
      name: "element-plus-drawer"
    }
  }
});
export {
  z as useDialog,
  B as useDialogWithDrag,
  T as useDrawer
};
