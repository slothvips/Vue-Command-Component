var b = Object.defineProperty;
var g = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var p = (l, e, o) => e in l ? b(l, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[e] = o, d = (l, e) => {
  for (var o in e || (e = {}))
    h.call(e, o) && p(l, o, e[o]);
  if (g)
    for (var o of g(e))
      w.call(e, o) && p(l, o, e[o]);
  return l;
};
import { createAdapter as C, EVENT_NAME as M } from "@vue-cmd/core";
export * from "@vue-cmd/core";
import { createVNode as v, mergeProps as D } from "vue";
import { ElDialog as y, ElDrawer as N } from "element-plus";
const R = (l, e) => {
  const {
    componentRef: o,
    visible: t,
    onMounted: u,
    config: i,
    consumer: s
  } = e, {
    title: c,
    width: m,
    attrs: n,
    slots: f
  } = i.value, E = (a) => {
    var r;
    s.value.destroy(), (r = n == null ? void 0 : n.onBeforeClose) == null || r.call(n, a), a();
  }, V = (...a) => {
    var r;
    return s.value.emit(M.destroy), (r = n == null ? void 0 : n.onClosed) == null ? void 0 : r.call(n, ...a);
  };
  return v(y, D({
    ref: o,
    modelValue: t.value,
    onVnodeMounted: u,
    title: c,
    width: m
  }, n, {
    beforeClose: E,
    onClosed: V
  }), d({
    default: () => l
  }, f));
}, x = C({
  render: R,
  defaultConfig: {
    meta: {
      name: "element-plus-dialog"
    }
  }
}), B = (l) => {
  const e = x(l);
  return (o, t = {}) => e(o, d({
    attrs: {
      // 可拖拽
      draggable: !0,
      closeOnClickModal: !1,
      closeOnPressEscape: !1
    }
  }, t));
}, z = (l, {
  componentRef: e,
  visible: o,
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
  return v(N, D({
    ref: e,
    modelValue: o.value,
    onVnodeMounted: t,
    title: m,
    size: n
  }, s, {
    onClosed: f
  }), d({
    default: () => l
  }, c));
}, T = C({
  render: z,
  defaultConfig: {
    meta: {
      name: "element-plus-drawer"
    }
  }
});
export {
  x as useDialog,
  B as useDialogWithDrag,
  T as useDrawer
};
