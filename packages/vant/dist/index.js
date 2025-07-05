import { createVNode as p, mergeProps as c } from "vue";
import { createAdapter as f } from "@vue-cmd/core";
import { Popup as m } from "vant";
const o = {
  round: !0,
  lockScroll: !0
}, i = (r, {
  componentRef: t,
  visible: s,
  onMounted: n,
  config: e,
  consumer: u
}) => {
  const {
    attrs: l,
    ...a
  } = e.value, d = () => {
    u.value.destroy();
  };
  return p(m, c({
    ref: t,
    show: s.value,
    onClickCloseIcon: d,
    onVnodeMounted: n
  }, o, a, l), {
    default: () => r,
    ...e.value.slots
  });
}, k = f({
  render: i,
  defaultConfig: {
    attrs: o
  }
});
export {
  k as usePopup
};
