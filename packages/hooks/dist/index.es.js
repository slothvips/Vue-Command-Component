import { activeConsumers as e } from "@vue-cmd/core";
import { inject as n, watch as l } from "vue";
/*!
* vue-router v4.5.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var r;
(function(o) {
  o.pop = "pop", o.push = "push";
})(r || (r = {}));
var c;
(function(o) {
  o.back = "back", o.forward = "forward", o.unknown = "";
})(c || (c = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var s;
(function(o) {
  o[o.aborted = 4] = "aborted", o[o.cancelled = 8] = "cancelled", o[o.duplicated = 16] = "duplicated";
})(s || (s = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const d = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function u(o) {
  return n(d);
}
const h = () => ({
  activeConsumers: e,
  hideAll: () => {
    e.forEach((o) => o.hide());
  },
  showAll: () => {
    e.forEach((o) => o.show());
  },
  toggleAll: () => {
    e.forEach((o) => {
      const { visible: t } = o;
      t.value ? o.hide() : o.show();
    });
  },
  destroyAll: () => {
    e.forEach((o) => {
      o.destroy();
    });
  },
  destroyAllWithResolve: () => {
    e.forEach((o) => {
      o.destroyWithResolve();
    });
  },
  destroyAllWithReject: () => {
    e.forEach((o) => {
      o.destroyWithReject();
    });
  }
}), p = () => {
  const { destroyAll: o } = h(), t = u();
  return l(() => t.path, () => o(), { immediate: !0 });
};
export {
  h as useConsumersManager,
  p as useDestroyAllOnRouteChange
};
