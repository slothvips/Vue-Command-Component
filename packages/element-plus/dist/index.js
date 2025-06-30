import { createVNode as a, mergeProps as n } from "vue";
import { createAdapter as u } from "@vue-cmd/core";
import { ElDialog as m, ElDrawer as f } from "element-plus";
const i = (o, {
  componentRef: t,
  visible: r,
  onMounted: d,
  config: e,
  consumer: l
}) => {
  const s = () => {
    l.value.destroy();
  };
  return a(m, n({
    ref: t,
    modelValue: r.value,
    onVnodeMounted: d,
    title: e.title,
    width: e.width
  }, e.attrs, {
    onClosed: s
  }), {
    default: () => o,
    ...e.slots
  });
}, v = u({
  render: i,
  defaultConfig: {}
}), p = (o, {
  componentRef: t,
  visible: r,
  onMounted: d,
  config: e,
  consumer: l
}) => {
  const s = () => {
    l.value.destroy();
  };
  return a(f, n({
    ref: t,
    modelValue: r.value,
    onVnodeMounted: d
  }, e.attrs, {
    onClosed: s
  }), {
    default: () => o,
    ...e.slots
  });
}, w = u({
  render: p,
  defaultConfig: {}
});
export {
  v as useDialog,
  w as useDrawer
};
