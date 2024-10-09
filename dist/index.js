var O = Object.defineProperty;
var U = (t, o, e) => o in t ? O(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var w = (t, o, e) => U(t, typeof o != "symbol" ? o + "" : o, e);
import { createVNode as u, render as x, inject as M, defineComponent as D, provide as b, nextTick as N, getCurrentInstance as R, ref as P, h as E, mergeProps as W, resolveComponent as T } from "vue";
import { useGlobalComponentSettings as A, ElDialog as L } from "element-plus";
import { Popup as $ } from "vant";
class q {
  constructor() {
    w(this, "map", /* @__PURE__ */ new WeakMap());
  }
  getEventsMapByConsumer(o) {
    let e = this.map.get(o);
    return e || (e = /* @__PURE__ */ new Map(), this.map.set(o, e)), e;
  }
  getEventsByConsumer(o, e) {
    const n = this.getEventsMapByConsumer(o);
    let s = n.get(e);
    return s || (s = /* @__PURE__ */ new Set(), n.set(e, s)), s;
  }
  on(o, e, n, s = {}) {
    const r = this.getEventsByConsumer(o, e);
    let l = n;
    s.once && (l = (...c) => {
      n(...c), this.off(o, e, l);
    }), r.add(l), s.callAfterDelay !== void 0 && setTimeout(() => {
      l();
    }, s.callAfterDelay || 0);
  }
  once(o, e, n) {
    this.on(o, e, n, { once: !0 });
  }
  emit(o, e, ...n) {
    this.getEventsByConsumer(o, e).forEach((r) => r(...n));
  }
  off(o, e, n) {
    this.getEventsByConsumer(o, e).delete(n);
  }
}
const G = (t = "") => t.slice(2).toLowerCase(), B = (t = "") => `on${t.charAt(0).toUpperCase()}${t.slice(1)}`, H = () => {
  let t = () => {
  }, o = () => {
  };
  return { promise: new Promise((n, s) => {
    t = n, o = s;
  }), resolve: t, reject: o };
};
var C = /* @__PURE__ */ ((t) => (t.confirm = "confirm", t.cancel = "cancel", t.destory = "destory", t))(C || {});
const S = Symbol("CommandDialogConsumerInjectKey"), j = Symbol("CommandDialogStackInjectKey"), f = new q(), g = (t) => ({
  ...t.parent ? g(t.parent) : {},
  ...t.provides
});
function I(t, o, e) {
  const n = (typeof e.appendTo == "string" ? document.querySelector(e.appendTo) : e.appendTo) || document.body, s = document.createElement("div");
  s.className = "command-commponent-container", n.appendChild(s);
  const r = () => {
    e.visible.value = !1;
  }, l = () => {
    e.visible.value = !0;
  }, c = () => {
    N(() => {
      x(null, s), s.remove();
    });
  }, m = (a = !1) => {
    a ? (i.on(C.destory, c, {
      once: !0,
      callAfterDelay: 3e3
    }), r()) : i.stack.splice(i.stackIndex).forEach((p) => p.destroy(!0));
  }, {
    promise: d,
    resolve: v,
    reject: h
  } = H(), i = {
    promise: d,
    resolve: v,
    reject: h,
    destroyWithResolve: (a) => {
      v(a), m();
    },
    destroyWithReject: (a) => {
      h(a), m();
    },
    hide: r,
    show: l,
    destroy: m,
    container: s,
    visible: e.visible,
    on: (a, p, K = {}) => f.on(i, a, p, K),
    once: (a, p) => f.once(i, a, p),
    emit: (a, ...p) => f.emit(i, a, ...p),
    off: (a, p) => f.off(i, a, p),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, y = u(/* @__PURE__ */ D({
    setup() {
      for (const p in e.provideProps)
        b(p, e.provideProps[p]);
      b(S, i);
      const a = M(j, []);
      return i.stackIndex = a.length, a.push(i), b(j, a), i.stack = a, () => o;
    }
  }), null, null);
  return y.appContext = (t == null ? void 0 : t.appContext) || y.appContext, y.appContext.provides = {
    ...y.appContext.provides,
    ...g(t)
  }, x(y, s), i;
}
const ee = (t = !0) => {
  const o = () => t && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return M(S, () => new Proxy({}, {
    get: () => o,
    apply: o
  }), !0);
}, te = (t = !0) => {
  const o = R(), {
    locale: {
      t: e
    }
  } = A("message-box");
  return (s, r = {}) => {
    const l = P(t), c = I(o, E(/* @__PURE__ */ D({
      setup() {
        const m = P(), d = (k) => {
          k(), c.destroy();
        }, v = () => {
          c.emit(C.destory);
        }, h = () => {
          Promise.resolve().then(() => {
            c.componentRef = m;
          });
        };
        return () => u(L, W({
          ref: m,
          modelValue: l.value,
          beforeClose: d,
          onClosed: v,
          onVnodeMounted: h
        }, {
          title: r.title,
          width: r.width,
          ...r.attrs
        }), {
          default: () => s,
          footer: () => u("div", null, [r[B(C.cancel)] && u(T("el-button"), {
            onClick: () => c.emit(C.cancel)
          }, {
            default: () => [r.cancelBtnText || e("el.messagebox.cancel")]
          }), r[B(C.confirm)] && u(T("el-button"), {
            type: "primary",
            onClick: () => c.emit(C.confirm)
          }, {
            default: () => [r.confirmBtnText || e("el.messagebox.confirm")]
          })]),
          ...r.slots
        });
      }
    })), {
      provideProps: r.provideProps || {},
      appendTo: r.appendTo,
      visible: l
    });
    return Object.entries(r).filter(([m, d]) => m.startsWith("on") && typeof d == "function").forEach(([m, d]) => {
      const v = G(m);
      c.on(v, d);
    }), c;
  };
}, z = {
  overlay: !0,
  round: !0,
  lockScroll: !0,
  closeable: !0,
  closeOnClickOverlay: !1,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, V = (t = !0) => {
  const o = R();
  return (n, s = {}) => {
    const r = P(t), l = I(o, E(/* @__PURE__ */ D({
      setup() {
        const c = P(), m = () => {
          l.destroy();
        }, d = () => {
          l.emit(C.destory);
        }, v = () => {
          Promise.resolve().then(() => {
            l.componentRef = c;
          });
        };
        return () => u($, W({
          ref: c,
          show: r.value,
          onClickCloseIcon: m,
          onClosed: d,
          onVnodeMounted: v
        }, {
          ...z,
          ...s.attrs
        }), {
          default: () => n,
          ...s.slots
        });
      }
    })), {
      provideProps: s.provideProps || {},
      appendTo: s.appendTo,
      visible: r
    });
    return l;
  };
}, oe = (t = !0) => {
  const o = V(t);
  return (e, n = {}) => (n.attrs || (n.attrs = {}), n.attrs.position = "bottom", n.attrs.style.width = "100vw", o(e, n));
}, F = (t = !0) => {
  const o = V(t);
  return (e, n = {}) => {
    const s = u("div", {
      class: "w-full h-full"
    }, [n.title && u("div", {
      class: "vant-popup-title"
    }, [u("div", {
      class: "vant-popup-title-text",
      innerHTML: n.title
    }, null)]), e]);
    return o(s, n);
  };
}, ne = (t = !0) => {
  const o = F(t);
  return (e, n = {}) => (n.attrs || (n.attrs = {}), n.attrs.position = "bottom", n.attrs.style.width = "100vw", o(e, n));
};
export {
  S as CommandDialogConsumerInjectKey,
  I as CommandDialogProvider,
  j as CommandDialogStackInjectKey,
  C as EVENT_NAME,
  te as createElementPlusDialog,
  V as createVantUiPopup,
  oe as createVantUiPopupOnBottom,
  F as createVantUiTitlePopup,
  ne as createVantUiTitlePopupOnBottom,
  ee as getCommandDialogConsumer
};
