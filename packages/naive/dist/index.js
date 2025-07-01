import { createVNode as u, mergeProps as f } from "vue";
import { createAdapter as p } from "@vue-cmd/core";
import { NModal as v, NDrawer as i } from "naive-ui";
const h = (o, {
  componentRef: r,
  visible: a,
  onMounted: d,
  config: e,
  consumer: t
}) => {
  const n = (l) => {
    l || t.value.destroy();
  }, s = () => {
    t.value.destroy();
  };
  return u(v, f({
    ref: r,
    show: a.value,
    onUpdateShow: n,
    onAfterLeave: s,
    onVnodeMounted: d,
    preset: "dialog"
  }, e.value.attrs), {
    default: () => o,
    ...e.value.slots
  });
}, A = p({
  render: h,
  defaultConfig: {
    attrs: {
      preset: "dialog",
      closable: !0
    }
  }
}), w = (o, {
  componentRef: r,
  visible: a,
  onMounted: d,
  config: e,
  consumer: t
}) => {
  const n = (l) => {
    l || t.value.destroy();
  }, s = () => {
    t.value.destroy();
  };
  return u(i, f({
    ref: r,
    show: a.value,
    onUpdateShow: n,
    onAfterLeave: s,
    onVnodeMounted: d,
    width: 300,
    placement: "right"
  }, e.value.attrs), {
    default: () => o,
    ...e.value.slots
  });
}, y = p({
  render: w,
  defaultConfig: {
    attrs: {
      width: 300,
      placement: "right"
    }
  }
});
export {
  y as useDrawer,
  A as useModal
};
