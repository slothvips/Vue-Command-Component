var S = Object.defineProperty;
var W = (t, e, o) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var b = (t, e, o) => W(t, typeof e != "symbol" ? e + "" : e, o);
import { createVNode as C, render as x, inject as j, defineComponent as B, provide as g, nextTick as M, getCurrentInstance as T, ref as k, h as K, mergeProps as I, resolveComponent as D } from "vue";
import { useGlobalComponentSettings as $, ElDialog as N } from "element-plus";
class q {
  constructor() {
    b(this, "map", /* @__PURE__ */ new WeakMap());
  }
  getEventsMapByConsumer(e) {
    let o = this.map.get(e);
    return o || (o = /* @__PURE__ */ new Map(), this.map.set(e, o)), o;
  }
  getEventsByConsumer(e, o) {
    const r = this.getEventsMapByConsumer(e);
    let n = r.get(o);
    return n || (n = /* @__PURE__ */ new Set(), r.set(o, n)), n;
  }
  on(e, o, r) {
    this.getEventsByConsumer(e, o).add(r);
  }
  once(e, o, r) {
    const n = (...c) => {
      r(...c), this.off(e, o, n);
    };
    this.on(e, o, n);
  }
  emit(e, o, ...r) {
    const n = this.getEventsByConsumer(e, o);
    n.size === 0 && console.warn(`${e}未注册${String(o)}事件`), n.forEach((c) => c(...r));
  }
  off(e, o, r) {
    this.getEventsByConsumer(e, o).delete(r);
  }
}
const z = (t = "") => t.slice(2).toLowerCase(), P = (t = "") => `on${t.charAt(0).toUpperCase()}${t.slice(1)}`, G = () => {
  let t = () => {
  }, e = () => {
  };
  return { promise: new Promise((r, n) => {
    t = r, e = n;
  }), resolve: t, reject: e };
};
var p = /* @__PURE__ */ ((t) => (t.confirm = "confirm", t.cancel = "cancel", t.destory = "destory", t))(p || {});
const E = Symbol("CommandDialogConsumerInjectKey"), w = Symbol("CommandDialogStackInjectKey"), f = new q(), R = (t) => ({
  ...t.parent ? R(t.parent) : {},
  ...t.provides
});
function L(t, e, o) {
  const r = (typeof o.appendTo == "string" ? document.querySelector(o.appendTo) : o.appendTo) || document.body, n = document.createElement("div");
  r.appendChild(n);
  const c = () => {
    o.visible.value = !1;
  }, i = () => {
    o.visible.value = !0;
  }, d = () => {
    M(() => {
      x(null, n), n.remove();
    });
  }, m = (s = !1) => {
    s ? (a.once(p.destory, d), c()) : a.stack.splice(a.stackIndex).forEach((l) => l.destroy(!0));
  }, {
    promise: u,
    resolve: y,
    reject: h
  } = G(), a = {
    promise: u,
    resolve: y,
    reject: h,
    destroyWithResolve: (s) => {
      y(s), m();
    },
    destroyWithReject: (s) => {
      h(s), m();
    },
    hide: c,
    show: i,
    destroy: m,
    container: n,
    on: (s, l) => f.on(a, s, l),
    once: (s, l) => f.once(a, s, l),
    emit: (s, ...l) => f.emit(a, s, ...l),
    off: (s, l) => f.off(a, s, l),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, v = C(/* @__PURE__ */ B({
    setup() {
      for (const l in o.provideProps)
        g(l, o.provideProps[l]);
      g(E, a);
      const s = j(w, []);
      return a.stackIndex = s.length, s.push(a), g(w, s), a.stack = s, () => e;
    }
  }), null, null);
  return v.appContext = (t == null ? void 0 : t.appContext) || v.appContext, v.appContext.provides = {
    ...v.appContext.provides,
    ...R(t)
  }, x(v, n), a;
}
const Q = (t = !0) => {
  const e = () => t && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return j(E, new Proxy({}, {
    get: () => e,
    apply: e
  }));
}, X = () => {
  const t = T(), {
    locale: {
      t: e
    }
  } = $("message-box");
  return (r, n = {}) => {
    const c = k(!0), i = L(t, K(/* @__PURE__ */ B({
      setup() {
        const d = k(), m = (h) => {
          h(), i.destroy();
        }, u = () => {
          i.emit(p.destory);
        }, y = () => {
          Promise.resolve().then(() => {
            i.componentRef = d;
          });
        };
        return () => C(N, I({
          ref: d,
          modelValue: c.value,
          beforeClose: m,
          onClosed: u,
          onVnodeMounted: y
        }, {
          title: n.title,
          width: n.width,
          ...n.attrs
        }), {
          default: () => r,
          footer: () => C("div", null, [n[P(p.cancel)] && C(D("el-button"), {
            onClick: () => i.emit(p.cancel)
          }, {
            default: () => [n.onCancelBtnText || e("el.messagebox.cancel")]
          }), n[P(p.confirm)] && C(D("el-button"), {
            type: "primary",
            onClick: () => i.emit(p.confirm)
          }, {
            default: () => [n.onConfirmBtnText || e("el.messagebox.confirm")]
          })]),
          ...n.slots
        });
      }
    })), {
      provideProps: n.provideProps || {},
      appendTo: n.appendTo,
      visible: c
    });
    return Object.entries(n).filter(([d, m]) => d.startsWith("on") && typeof m == "function").forEach(([d, m]) => {
      const u = z(d);
      i.on(u, m);
    }), i;
  };
};
export {
  E as CommandDialogConsumerInjectKey,
  L as CommandDialogProvider,
  w as CommandDialogStackInjectKey,
  X as createElementPlusDialog,
  Q as getCommandDialogConsumer
};
