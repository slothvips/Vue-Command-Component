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
  consumer: u
}) => {
  const a = () => {
    u.value.destroy();
  };
  return d(f, p({
    ref: s,
    show: e.value,
    "onUpdate:show": (l) => e.value = l,
    onClickCloseIcon: a,
    onVnodeMounted: n
  }, r, o.attrs), {
    default: () => t,
    ...o.slots
  });
}, i = c({
  render: m,
  defaultConfig: {
    attrs: r
  }
});
export {
  i as usePopup
};
