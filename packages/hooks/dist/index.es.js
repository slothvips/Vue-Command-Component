var O = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var v = (e, t, r) => t in e ? O(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, d = (e, t) => {
  for (var r in t || (t = {}))
    S.call(t, r) && v(e, r, t[r]);
  if (f)
    for (var r of f(t))
      A.call(t, r) && v(e, r, t[r]);
  return e;
};
import { activeConsumers as c, commandProviderWithRender as R } from "@vue-cmd/core";
import { inject as N, watch as b, getCurrentInstance as _, ref as k, h as W, defineComponent as j, nextTick as C } from "vue";
/*!
* vue-router v4.5.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var y;
(function(e) {
  e.pop = "pop", e.push = "push";
})(y || (y = {}));
var E;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(E || (E = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var w;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(w || (w = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const H = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function x(e) {
  return N(H);
}
const I = () => ({
  activeConsumers: c,
  hideAll: () => {
    c.forEach((e) => e.hide());
  },
  showAll: () => {
    c.forEach((e) => e.show());
  },
  toggleAll: () => {
    c.forEach((e) => {
      const { visible: t } = e;
      t.value ? e.hide() : e.show();
    });
  },
  destroyAll: () => {
    c.forEach((e) => {
      e.destroy();
    });
  },
  destroyAllWithResolve: () => {
    c.forEach((e) => {
      e.destroyWithResolve();
    });
  },
  destroyAllWithReject: () => {
    c.forEach((e) => {
      e.destroyWithReject();
    });
  }
}), M = () => {
  const { destroyAll: e } = I(), t = x();
  return b(() => t.path, () => e(), { immediate: !0 });
}, P = (e) => {
  const t = _();
  return (r, D = {}) => {
    var h, p;
    const o = d(d({}, e), D);
    o.displayDirective = (h = o.displayDirective) != null ? h : "if", o.onShow = o.onShow || ((n) => {
      n.style.display = "block";
    }), o.onHide = o.onHide || ((n) => {
      n.style.display = "none";
    });
    const l = k((p = o.immediate) != null ? p : !0);
    o.visible = l;
    const u = R(t, W(j({
      setup() {
        return o.displayDirective === "show" && b(() => l.value, () => {
          C().then(() => {
            const n = (s) => s.shapeFlag === 1 ? [s.el] : s.shapeFlag === 16 ? s.children.map((i) => n(i)) : (console.warn("TODO:wait implement", s), []);
            n(r).flat(1 / 0).forEach((s) => {
              var i, m;
              l.value ? (i = o.onShow) == null || i.call(o, s, u) : (m = o.onHide) == null || m.call(o, s, u);
            });
          });
        }, {
          immediate: !0
        }), () => {
          const n = o.displayDirective, a = o.outer;
          return a ? a(n === "if" ? l.value ? r : null : r) : n === "if" ? l.value ? r : null : r;
        };
      }
    })), o);
    return u;
  };
};
export {
  I as useConsumersManager,
  M as useDestroyAllOnRouteChange,
  P as useRawCommand
};
