var S = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var y = (e, o, r) => o in e ? S(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, d = (e, o) => {
  for (var r in o || (o = {}))
    O.call(o, r) && y(e, r, o[r]);
  if (v)
    for (var r of v(o))
      A.call(o, r) && y(e, r, o[r]);
  return e;
};
import { activeConsumers as l, commandProviderWithRender as R } from "@vue-cmd/core";
import { inject as N, watch as b, getCurrentInstance as _, ref as k, h as W, defineComponent as j, nextTick as C } from "vue";
/*!
* vue-router v4.5.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var f;
(function(e) {
  e.pop = "pop", e.push = "push";
})(f || (f = {}));
var w;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(w || (w = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var E;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(E || (E = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const H = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function P(e) {
  return N(H);
}
const x = () => ({
  activeConsumers: l,
  hideAll: () => {
    l.forEach((e) => e.hide());
  },
  showAll: () => {
    l.forEach((e) => e.show());
  },
  toggleAll: () => {
    l.forEach((e) => {
      const { visible: o } = e;
      o.value ? e.hide() : e.show();
    });
  },
  destroyAll: () => {
    l.forEach((e) => {
      e.destroy();
    });
  },
  destroyAllWithResolve: () => {
    const e = [...l].map((o) => (o.destroyWithResolve(), o.promise));
    return Promise.allSettled(e);
  },
  destroyAllWithReject: () => {
    const e = [...l].map((o) => (o.destroyWithReject(), o.promise));
    return Promise.allSettled(e);
  }
}), L = () => {
  const { destroyAll: e } = x(), o = P();
  return b(
    () => o.path,
    () => e(),
    { immediate: !0 }
  );
}, M = (e) => {
  const o = _();
  return (r, D = {}) => {
    var p, h;
    const t = d(d({}, e), D);
    t.displayDirective = (p = t.displayDirective) != null ? p : "if", t.onShow = t.onShow || ((s) => {
      s.style.display = "block";
    }), t.onHide = t.onHide || ((s) => {
      s.style.display = "none";
    });
    const c = k((h = t.immediate) != null ? h : !0);
    t.visible = c;
    const u = R(
      o,
      W(
        j({
          setup() {
            return t.displayDirective === "show" && b(
              () => c.value,
              () => {
                C().then(() => {
                  const s = (n) => n.shapeFlag === 1 ? [n.el] : n.shapeFlag === 16 ? n.children.map(
                    (i) => s(i)
                  ) : (console.warn(
                    "TODO:other case wait implement",
                    n
                  ), []);
                  s(r).flat(1 / 0).forEach((n) => {
                    var i, m;
                    c.value ? (i = t.onShow) == null || i.call(t, n, u) : (m = t.onHide) == null || m.call(t, n, u);
                  });
                });
              },
              {
                immediate: !0
              }
            ), () => {
              const s = t.displayDirective, a = t.outer;
              return a ? a(
                s === "if" ? c.value ? r : null : r
              ) : s === "if" ? c.value ? r : null : r;
            };
          }
        })
      ),
      t
    );
    return u;
  };
};
export {
  x as useConsumersManager,
  L as useDestroyAllOnRouteChange,
  M as useRawCommand
};
