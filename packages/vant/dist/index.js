import { createVNode as d, mergeProps as p } from "vue";
import { createAdapter as c } from "@vue-cmd/core";
import { Popup as f } from "vant";
const r = {
  round: !0,
  lockScroll: !0,
  closeable: !0
}, m = (t, {
  componentRef: s,
  visible: e,
  onMounted: u,
  config: o,
  consumer: a
}) => {
  const l = () => {
    a.value.destroy();
  };
  return d(f, p({
    ref: s,
    show: e.value,
    "onUpdate:show": (n) => e.value = n,
    onClickCloseIcon: l,
    onVnodeMounted: u
  }, r, o.value.attrs), {
    default: () => t,
    ...o.value.slots
  });
}, h = c({
  render: m,
  defaultConfig: {
    attrs: r
  }
});
export {
  h as usePopup
};
