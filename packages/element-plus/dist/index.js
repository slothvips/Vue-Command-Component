import { createVNode as n, mergeProps as a } from "vue";
import { createAdapter as u } from "@vue-cmd/core";
import { ElDialog as m, ElDrawer as f } from "element-plus";
const i = (t, {
  componentRef: o,
  visible: r,
  onMounted: l,
  config: e,
  consumer: s
}) => {
  const d = () => {
    s.value.destroy();
  };
  return n(m, a({
    ref: o,
    modelValue: r.value,
    onVnodeMounted: l,
    title: e.title,
    width: e.width
  }, e.attrs, {
    onClosed: d
  }), {
    default: () => t,
    ...e.slots
  });
}, v = u({
  render: i,
  defaultConfig: {}
}), p = (t, {
  componentRef: o,
  visible: r,
  onMounted: l,
  config: e,
  consumer: s
}) => {
  const d = () => {
    s.value.destroy();
  };
  return n(f, a({
    ref: o,
    modelValue: r.value,
    onVnodeMounted: l
  }, e.attrs, {
    onClosed: d
  }), {
    default: () => t,
    ...e.slots
  });
}, w = u({
  render: p,
  defaultConfig: {}
});
export {
  v as useElementPlusDialog,
  w as useElementPlusDrawer
};
