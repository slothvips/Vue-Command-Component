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
  onMounted: n,
  config: o,
  consumer: a
}) => {
  const u = () => {
    a.value.destroy();
  };
  return d(f, p({
    ref: s,
    show: e.value,
    "onUpdate:show": (l) => e.value = l,
    onClickCloseIcon: u,
    onVnodeMounted: n
  }, r, o.attrs), {
    default: () => t,
    ...o.slots
  });
}, h = c({
  render: m,
  defaultConfig: {
    attrs: r
  }
});
export {
  h as useVantPopup
};
