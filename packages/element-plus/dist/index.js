import { createVNode as n, mergeProps as d } from "vue";
import { createAdapter as u } from "@vue-cmd/core";
import { ElDialog as m, ElDrawer as i } from "element-plus";
const c = (t, {
  componentRef: o,
  visible: r,
  onMounted: l,
  config: e,
  consumer: a
}) => {
  const s = () => {
    a.value.destroy();
  };
  return n(m, d({
    ref: o,
    modelValue: r.value,
    onVnodeMounted: l,
    title: e.title,
    width: e.width
  }, e.attrs, {
    onClosed: s
  }), {
    default: () => t,
    ...e.slots
  });
}, f = u({
  render: c,
  defaultConfig: {
    meta: {
      name: "element-plus-dialog"
    }
  }
}), w = () => {
  const t = f();
  return (o, r = {}) => t(o, {
    attrs: {
      // 可拖拽
      draggable: !0,
      closeOnClickModal: !1,
      closeOnPressEscape: !1
    },
    ...r
  });
}, p = (t, {
  componentRef: o,
  visible: r,
  onMounted: l,
  config: e,
  consumer: a
}) => {
  const s = () => {
    a.value.destroy();
  };
  return n(i, d({
    ref: o,
    modelValue: r.value,
    onVnodeMounted: l
  }, e.attrs, {
    onClosed: s
  }), {
    default: () => t,
    ...e.slots
  });
}, V = u({
  render: p,
  defaultConfig: {
    meta: {
      name: "element-plus-drawer"
    }
  }
});
export {
  f as useDialog,
  w as useDialogWithDrag,
  V as useDrawer
};
