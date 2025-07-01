import { createVNode as s, mergeProps as d } from "vue";
import { createAdapter as u } from "@vue-cmd/core";
import { ElDialog as p, ElDrawer as v } from "element-plus";
const C = (e, o) => {
  const {
    componentRef: t,
    visible: l,
    onMounted: r,
    config: n,
    consumer: a
  } = o, {
    title: c,
    width: i,
    attrs: m,
    slots: f
  } = n.value, g = () => {
    a.value.destroy();
  };
  return s(p, d({
    ref: t,
    modelValue: l.value,
    onVnodeMounted: r,
    title: c,
    width: i
  }, m, {
    onClosed: g
  }), {
    default: () => e,
    ...f
  });
}, D = u({
  render: C,
  defaultConfig: {
    meta: {
      name: "element-plus-dialog"
    }
  }
}), h = () => {
  const e = D();
  return (o, t = {}) => e(o, {
    attrs: {
      // 可拖拽
      draggable: !0,
      closeOnClickModal: !1,
      closeOnPressEscape: !1
    },
    ...t
  });
}, w = (e, {
  componentRef: o,
  visible: t,
  onMounted: l,
  config: r,
  consumer: n
}) => {
  const a = () => {
    n.value.destroy();
  };
  return s(v, d({
    ref: o,
    modelValue: t.value,
    onVnodeMounted: l
  }, r.value.attrs, {
    onClosed: a
  }), {
    default: () => e,
    ...r.value.slots
  });
}, E = u({
  render: w,
  defaultConfig: {
    meta: {
      name: "element-plus-drawer"
    }
  }
});
export {
  D as useDialog,
  h as useDialogWithDrag,
  E as useDrawer
};
