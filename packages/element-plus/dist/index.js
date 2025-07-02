import { createVNode as c, mergeProps as i } from "vue";
import { createAdapter as m, EVENT_NAME as D } from "@vue-cmd/core";
import { ElDialog as E, ElDrawer as V } from "element-plus";
const b = (o, l) => {
  const {
    componentRef: t,
    visible: s,
    onMounted: n,
    config: a,
    consumer: r
  } = l, {
    title: f,
    width: g,
    attrs: e,
    slots: p
  } = a.value, C = (d) => {
    d(), r.value.destroy();
  }, v = (...d) => {
    var u;
    return r.value.emit(D.destroy), (u = e == null ? void 0 : e.onClosed) == null ? void 0 : u.call(e, ...d);
  };
  return c(E, i({
    ref: t,
    modelValue: s.value,
    onVnodeMounted: n,
    title: f,
    width: g
  }, e, {
    beforeClose: C,
    onClosed: v
  }), {
    default: () => o,
    ...p
  });
}, h = m({
  render: b,
  defaultConfig: {
    meta: {
      name: "element-plus-dialog"
    }
  }
}), R = () => {
  const o = h();
  return (l, t = {}) => o(l, {
    attrs: {
      // 可拖拽
      draggable: !0,
      closeOnClickModal: !1,
      closeOnPressEscape: !1
    },
    ...t
  });
}, w = (o, {
  componentRef: l,
  visible: t,
  onMounted: s,
  config: n,
  consumer: a
}) => {
  const r = () => {
    a.value.destroy();
  };
  return c(V, i({
    ref: l,
    modelValue: t.value,
    onVnodeMounted: s
  }, n.value.attrs, {
    onClosed: r
  }), {
    default: () => o,
    ...n.value.slots
  });
}, A = m({
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
  A as useDrawer
};
