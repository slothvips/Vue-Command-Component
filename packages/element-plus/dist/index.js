import { createVNode as f, mergeProps as g } from "vue";
import { createAdapter as C, EVENT_NAME as D } from "@vue-cmd/core";
import { ElDialog as E, ElDrawer as V } from "element-plus";
const b = (o, l) => {
  const {
    componentRef: n,
    visible: a,
    onMounted: d,
    config: u,
    consumer: r
  } = l, {
    title: i,
    width: c,
    attrs: e,
    slots: m
  } = u.value, p = (s) => {
    var t;
    r.value.destroy(), (t = e == null ? void 0 : e.onBeforeClose) == null || t.call(e, s), s();
  }, v = (...s) => {
    var t;
    return r.value.emit(D.destroy), (t = e == null ? void 0 : e.onClosed) == null ? void 0 : t.call(e, ...s);
  };
  return f(E, g({
    ref: n,
    modelValue: a.value,
    onVnodeMounted: d,
    title: i,
    width: c
  }, e, {
    beforeClose: p,
    onClosed: v
  }), {
    default: () => o,
    ...m
  });
}, h = C({
  render: b,
  defaultConfig: {
    meta: {
      name: "element-plus-dialog"
    }
  }
}), R = () => {
  const o = h();
  return (l, n = {}) => o(l, {
    attrs: {
      // 可拖拽
      draggable: !0,
      closeOnClickModal: !1,
      closeOnPressEscape: !1
    },
    ...n
  });
}, w = (o, {
  componentRef: l,
  visible: n,
  onMounted: a,
  config: d,
  consumer: u
}) => {
  const {
    attrs: r,
    slots: i,
    title: c,
    size: e
  } = d.value, m = () => {
    u.value.destroy();
  };
  return f(V, g({
    ref: l,
    modelValue: n.value,
    onVnodeMounted: a,
    title: c,
    size: e
  }, r, {
    onClosed: m
  }), {
    default: () => o,
    ...i
  });
}, z = C({
  render: w,
  defaultConfig: {
    meta: {
      name: "element-plus-drawer"
    }
  }
});
export {
  h as useDialog,
  R as useDialogWithDrag,
  z as useDrawer
};
