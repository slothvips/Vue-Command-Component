import { createVNode as f, mergeProps as u } from "vue";
import { createAdapter as p } from "@vue-cmd/core";
import { NModal as i, NDrawer as h } from "naive-ui";
const v = (o, {
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
  return f(i, u({
    ref: r,
    show: a.value,
    onUpdateShow: n,
    onAfterLeave: s,
    onVnodeMounted: d,
    preset: "dialog"
  }, e.attrs), {
    default: () => o,
    ...e.slots
  });
}, A = p({
  render: v,
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
  return f(h, u({
    ref: r,
    show: a.value,
    onUpdateShow: n,
    onAfterLeave: s,
    onVnodeMounted: d,
    width: 300,
    placement: "right"
  }, e.attrs), {
    default: () => o,
    ...e.slots
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
