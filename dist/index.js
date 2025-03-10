var Le = Object.defineProperty;
var We = (e, t, n) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => We(e, typeof t != "symbol" ? t + "" : t, n);
import { createVNode as _, render as oe, inject as Ce, defineComponent as R, provide as U, nextTick as qe, getCurrentInstance as Z, ref as w, h as X, mergeProps as J, watch as Ze } from "vue";
import { useGlobalComponentSettings as Xe, ElDialog as Je, ElButton as ae, ElDrawer as Ye } from "element-plus";
import { Popup as Qe } from "vant";
import { useRoute as ke } from "vue-router";
var b = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(b || {});
class et {
  constructor() {
    re(this, "map", /* @__PURE__ */ new WeakMap());
  }
  getEventsMapByConsumer(t) {
    let n = this.map.get(t);
    return n || (n = /* @__PURE__ */ new Map(), this.map.set(t, n)), n;
  }
  getEventsByConsumer(t, n) {
    const r = this.getEventsMapByConsumer(t);
    let o = r.get(n);
    return o || (o = /* @__PURE__ */ new Set(), r.set(n, o)), o;
  }
  on(t, n, r, o = {}) {
    const a = this.getEventsByConsumer(t, n);
    let i = r;
    o.once && (i = (...s) => {
      r(...s), this.off(t, n, i);
    }), a.add(i), o.callAfterDelay !== void 0 && setTimeout(() => {
      i();
    }, o.callAfterDelay || 0);
  }
  once(t, n, r) {
    this.on(t, n, r, { once: !0 });
  }
  emit(t, n, ...r) {
    this.getEventsByConsumer(t, n).forEach((a) => a(...r));
  }
  off(t, n, r) {
    this.getEventsByConsumer(t, n).delete(r);
  }
}
const tt = (e = "") => e.slice(2).toLowerCase(), se = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, nt = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Hr = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), n;
}, Y = (e) => e == null, ie = (e, t, ...n) => {
  const r = { ...e };
  for (const o in t)
    if (t[o] && typeof t[o] == "object") {
      const a = e[o] && typeof e[o] == "object" ? e[o] : {};
      r[o] = ie(a, t[o]);
    } else
      r[o] = t[o];
  if (n.length > 0)
    for (const o of n)
      Object.assign(r, ie(r, o));
  return r;
}, Te = Symbol("CommandComponentConsumerInjectKey"), ue = Symbol("CommandComponentStackInjectKey"), I = new et(), K = /* @__PURE__ */ new Set(), rt = () => {
  console.log("destroyAllCommandComponentConsumer"), K.forEach((e) => {
    e.destroy();
  });
}, we = (e) => ({
  ...e.parent ? we(e.parent) : {},
  ...e.provides
});
function Q(e, t, n) {
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-commponent-container", r.appendChild(o);
  const a = () => {
    n.visible.value = !1;
  }, i = () => {
    n.visible.value = !0;
  }, s = () => {
    qe(() => {
      oe(null, o), o.remove();
    });
  }, u = (f = !1) => {
    f ? (d.on(b.destory, s, {
      once: !0,
      callAfterDelay: 3e3
    }), a()) : (K.delete(d), d.stack.splice(d.stackIndex).forEach((h) => h.destroy(!0)));
  }, {
    promise: l,
    resolve: p,
    reject: m
  } = nt(), y = (f) => {
    p(f), u();
  }, v = (f) => {
    m(f), u();
  }, d = {
    meta: n.meta || {},
    promise: l,
    resolve: p,
    reject: m,
    destroyWithResolve: y,
    destroyWithReject: v,
    hide: a,
    show: i,
    destroy: u,
    container: o,
    visible: n.visible,
    on: (f, h, Ve = {}) => I.on(d, f, h, Ve),
    once: (f, h) => I.once(d, f, h),
    emit: (f, ...h) => I.emit(d, f, ...h),
    off: (f, h) => I.off(d, f, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, x = _(/* @__PURE__ */ R({
    setup() {
      for (const h in n.provideProps)
        U(h, n.provideProps[h]);
      U(Te, d);
      const f = Ce(ue, []);
      return d.stackIndex = f.length, f.push(d), U(ue, f), d.stack = f, () => t;
    }
  }), null, null);
  return x.appContext = (e == null ? void 0 : e.appContext) || x.appContext, x.appContext.provides = {
    ...x.appContext.provides,
    ...we(e)
  }, oe(x, o), K.add(d), d;
}
const ot = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandComponentConsumerInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return Ce(Te, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Kr = (...e) => (console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."), ot(...e));
let Pe;
const Vr = (e) => {
  Pe = e;
}, Lr = (e = {}) => {
  const t = Z(), {
    locale: {
      t: n
    }
  } = Xe("message-box");
  return (o, a = {}) => {
    const i = w(Y(e.immediately) ? !0 : !!e.immediately), s = Q(t, X(/* @__PURE__ */ R({
      setup() {
        const u = w(), l = () => {
          Promise.resolve().then(() => {
            s.componentRef = u;
          });
        }, p = (y) => {
          y(), s.destroy();
        }, m = (...y) => {
          var v, d;
          return s.emit(b.destory), (d = (v = a.attrs) == null ? void 0 : v.onClosed) == null ? void 0 : d.call(v, ...y);
        };
        return () => _(Je, J({
          ref: u,
          modelValue: i.value,
          beforeClose: p,
          onVnodeMounted: l
        }, {
          title: a.title,
          width: a.width,
          ...a.attrs
        }, {
          onClosed: m
        }), {
          default: () => o,
          footer: () => _("div", null, [a[se(b.cancel)] && _(ae, {
            onClick: () => s.emit(b.cancel)
          }, {
            default: () => [a.cancelBtnText || n("el.messagebox.cancel")]
          }), a[se(b.confirm)] && _(ae, {
            type: "primary",
            onClick: () => s.emit(b.confirm)
          }, {
            default: () => [a.confirmBtnText || n("el.messagebox.confirm")]
          })]),
          ...a.slots
        });
      }
    })), {
      provideProps: a.provideProps || {},
      appendTo: Pe || a.appendTo,
      visible: i,
      // 优先使用执行动作的meta,其次使用创建时的meta
      meta: {
        ...(e == null ? void 0 : e.meta) || {
          name: "command-element-plus-dialog"
        },
        ...(a == null ? void 0 : a.meta) || {}
      }
    });
    return Object.entries(a).filter(([u, l]) => u.startsWith("on") && typeof l == "function").forEach(([u, l]) => {
      const p = tt(u);
      s.on(p, l);
    }), s;
  };
};
let je;
const Wr = (e) => {
  je = e;
}, qr = (e = {}) => {
  const t = Z();
  return (r, o = {}) => {
    const a = w(Y(e.immediately) ? !0 : !!e.immediately), i = Q(t, X(/* @__PURE__ */ R({
      setup() {
        const s = (m) => {
          m(), i.destroy();
        }, u = () => {
          i.emit(b.destory);
        }, l = w(), p = () => {
          Promise.resolve().then(() => {
            i.componentRef = l;
          });
        };
        return () => _(Ye, J({
          ref: l,
          modelValue: a.value,
          beforeClose: s,
          onClosed: u,
          onVnodeMounted: p
        }, {
          title: o.title,
          size: o.size,
          ...o.attrs
        }), {
          default: () => r,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: je || o.appendTo,
      visible: a,
      meta: {
        ...(e == null ? void 0 : e.meta) || {
          name: "command-element-plus-drawer"
        },
        ...(o == null ? void 0 : o.meta) || {}
      }
    });
    return i;
  };
};
var Oe = typeof global == "object" && global && global.Object === Object && global, at = typeof self == "object" && self && self.Object === Object && self, P = Oe || at || Function("return this")(), M = P.Symbol, xe = Object.prototype, st = xe.hasOwnProperty, it = xe.toString, A = M ? M.toStringTag : void 0;
function ut(e) {
  var t = st.call(e, A), n = e[A];
  try {
    e[A] = void 0;
    var r = !0;
  } catch {
  }
  var o = it.call(e);
  return r && (t ? e[A] = n : delete e[A]), o;
}
var lt = Object.prototype, ct = lt.toString;
function pt(e) {
  return ct.call(e);
}
var dt = "[object Null]", ft = "[object Undefined]", le = M ? M.toStringTag : void 0;
function N(e) {
  return e == null ? e === void 0 ? ft : dt : le && le in Object(e) ? ut(e) : pt(e);
}
function E(e) {
  return e != null && typeof e == "object";
}
var V = Array.isArray;
function T(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ae(e) {
  return e;
}
var mt = "[object AsyncFunction]", ht = "[object Function]", vt = "[object GeneratorFunction]", yt = "[object Proxy]";
function k(e) {
  if (!T(e))
    return !1;
  var t = N(e);
  return t == ht || t == vt || t == mt || t == yt;
}
var G = P["__core-js_shared__"], ce = function() {
  var e = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function bt(e) {
  return !!ce && ce in e;
}
var gt = Function.prototype, _t = gt.toString;
function Ct(e) {
  if (e != null) {
    try {
      return _t.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tt = /[\\^$.*+?()[\]{}|]/g, wt = /^\[object .+?Constructor\]$/, Pt = Function.prototype, jt = Object.prototype, Ot = Pt.toString, xt = jt.hasOwnProperty, At = RegExp(
  "^" + Ot.call(xt).replace(Tt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function St(e) {
  if (!T(e) || bt(e))
    return !1;
  var t = k(e) ? At : wt;
  return t.test(Ct(e));
}
function $t(e, t) {
  return e == null ? void 0 : e[t];
}
function ee(e, t) {
  var n = $t(e, t);
  return St(n) ? n : void 0;
}
var pe = Object.create, Et = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!T(t))
      return {};
    if (pe)
      return pe(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function It(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Mt(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Dt = 800, Rt = 16, Nt = Date.now;
function zt(e) {
  var t = 0, n = 0;
  return function() {
    var r = Nt(), o = Rt - (r - n);
    if (n = r, o > 0) {
      if (++t >= Dt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Bt(e) {
  return function() {
    return e;
  };
}
var D = function() {
  try {
    var e = ee(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ft = D ? function(e, t) {
  return D(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Bt(t),
    writable: !0
  });
} : Ae, Ut = zt(Ft), Gt = 9007199254740991, Ht = /^(?:0|[1-9]\d*)$/;
function Se(e, t) {
  var n = typeof e;
  return t = t ?? Gt, !!t && (n == "number" || n != "symbol" && Ht.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function te(e, t, n) {
  t == "__proto__" && D ? D(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function z(e, t) {
  return e === t || e !== e && t !== t;
}
var Kt = Object.prototype, Vt = Kt.hasOwnProperty;
function Lt(e, t, n) {
  var r = e[t];
  (!(Vt.call(e, t) && z(r, n)) || n === void 0 && !(t in e)) && te(e, t, n);
}
function Wt(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], u = void 0;
    u === void 0 && (u = e[s]), o ? te(n, s, u) : Lt(n, s, u);
  }
  return n;
}
var de = Math.max;
function qt(e, t, n) {
  return t = de(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = de(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), It(e, this, s);
  };
}
function Zt(e, t) {
  return Ut(qt(e, t, Ae), e + "");
}
var Xt = 9007199254740991;
function $e(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Xt;
}
function ne(e) {
  return e != null && $e(e.length) && !k(e);
}
function Jt(e, t, n) {
  if (!T(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? ne(n) && Se(t, n.length) : r == "string" && t in n) ? z(n[t], e) : !1;
}
function Yt(e) {
  return Zt(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && Jt(n[0], n[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, a);
    }
    return t;
  });
}
var Qt = Object.prototype;
function Ee(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Qt;
  return e === n;
}
function kt(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var en = "[object Arguments]";
function fe(e) {
  return E(e) && N(e) == en;
}
var Ie = Object.prototype, tn = Ie.hasOwnProperty, nn = Ie.propertyIsEnumerable, L = fe(/* @__PURE__ */ function() {
  return arguments;
}()) ? fe : function(e) {
  return E(e) && tn.call(e, "callee") && !nn.call(e, "callee");
};
function rn() {
  return !1;
}
var Me = typeof exports == "object" && exports && !exports.nodeType && exports, me = Me && typeof module == "object" && module && !module.nodeType && module, on = me && me.exports === Me, he = on ? P.Buffer : void 0, an = he ? he.isBuffer : void 0, De = an || rn, sn = "[object Arguments]", un = "[object Array]", ln = "[object Boolean]", cn = "[object Date]", pn = "[object Error]", dn = "[object Function]", fn = "[object Map]", mn = "[object Number]", hn = "[object Object]", vn = "[object RegExp]", yn = "[object Set]", bn = "[object String]", gn = "[object WeakMap]", _n = "[object ArrayBuffer]", Cn = "[object DataView]", Tn = "[object Float32Array]", wn = "[object Float64Array]", Pn = "[object Int8Array]", jn = "[object Int16Array]", On = "[object Int32Array]", xn = "[object Uint8Array]", An = "[object Uint8ClampedArray]", Sn = "[object Uint16Array]", $n = "[object Uint32Array]", c = {};
c[Tn] = c[wn] = c[Pn] = c[jn] = c[On] = c[xn] = c[An] = c[Sn] = c[$n] = !0;
c[sn] = c[un] = c[_n] = c[ln] = c[Cn] = c[cn] = c[pn] = c[dn] = c[fn] = c[mn] = c[hn] = c[vn] = c[yn] = c[bn] = c[gn] = !1;
function En(e) {
  return E(e) && $e(e.length) && !!c[N(e)];
}
function In(e) {
  return function(t) {
    return e(t);
  };
}
var Re = typeof exports == "object" && exports && !exports.nodeType && exports, S = Re && typeof module == "object" && module && !module.nodeType && module, Mn = S && S.exports === Re, H = Mn && Oe.process, ve = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || H && H.binding && H.binding("util");
  } catch {
  }
}(), ye = ve && ve.isTypedArray, Ne = ye ? In(ye) : En;
function Dn(e, t) {
  var n = V(e), r = !n && L(e), o = !n && !r && De(e), a = !n && !r && !o && Ne(e), i = n || r || o || a, s = i ? kt(e.length, String) : [], u = s.length;
  for (var l in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Se(l, u)) || s.push(l);
  return s;
}
function Rn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function Nn(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var zn = Object.prototype, Bn = zn.hasOwnProperty;
function Fn(e) {
  if (!T(e))
    return Nn(e);
  var t = Ee(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Bn.call(e, r)) || n.push(r);
  return n;
}
function ze(e) {
  return ne(e) ? Dn(e) : Fn(e);
}
var $ = ee(Object, "create");
function Un() {
  this.__data__ = $ ? $(null) : {}, this.size = 0;
}
function Gn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Hn = "__lodash_hash_undefined__", Kn = Object.prototype, Vn = Kn.hasOwnProperty;
function Ln(e) {
  var t = this.__data__;
  if ($) {
    var n = t[e];
    return n === Hn ? void 0 : n;
  }
  return Vn.call(t, e) ? t[e] : void 0;
}
var Wn = Object.prototype, qn = Wn.hasOwnProperty;
function Zn(e) {
  var t = this.__data__;
  return $ ? t[e] !== void 0 : qn.call(t, e);
}
var Xn = "__lodash_hash_undefined__";
function Jn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $ && t === void 0 ? Xn : t, this;
}
function C(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
C.prototype.clear = Un;
C.prototype.delete = Gn;
C.prototype.get = Ln;
C.prototype.has = Zn;
C.prototype.set = Jn;
function Yn() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var n = e.length; n--; )
    if (z(e[n][0], t))
      return n;
  return -1;
}
var Qn = Array.prototype, kn = Qn.splice;
function er(e) {
  var t = this.__data__, n = B(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : kn.call(t, n, 1), --this.size, !0;
}
function tr(e) {
  var t = this.__data__, n = B(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function nr(e) {
  return B(this.__data__, e) > -1;
}
function rr(e, t) {
  var n = this.__data__, r = B(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function g(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
g.prototype.clear = Yn;
g.prototype.delete = er;
g.prototype.get = tr;
g.prototype.has = nr;
g.prototype.set = rr;
var Be = ee(P, "Map");
function or() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (Be || g)(),
    string: new C()
  };
}
function ar(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function F(e, t) {
  var n = e.__data__;
  return ar(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function sr(e) {
  var t = F(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ir(e) {
  return F(this, e).get(e);
}
function ur(e) {
  return F(this, e).has(e);
}
function lr(e, t) {
  var n = F(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function j(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
j.prototype.clear = or;
j.prototype.delete = sr;
j.prototype.get = ir;
j.prototype.has = ur;
j.prototype.set = lr;
var Fe = Rn(Object.getPrototypeOf, Object), cr = "[object Object]", pr = Function.prototype, dr = Object.prototype, Ue = pr.toString, fr = dr.hasOwnProperty, mr = Ue.call(Object);
function hr(e) {
  if (!E(e) || N(e) != cr)
    return !1;
  var t = Fe(e);
  if (t === null)
    return !0;
  var n = fr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ue.call(n) == mr;
}
function vr() {
  this.__data__ = new g(), this.size = 0;
}
function yr(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function br(e) {
  return this.__data__.get(e);
}
function gr(e) {
  return this.__data__.has(e);
}
var _r = 200;
function Cr(e, t) {
  var n = this.__data__;
  if (n instanceof g) {
    var r = n.__data__;
    if (!Be || r.length < _r - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new j(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function O(e) {
  var t = this.__data__ = new g(e);
  this.size = t.size;
}
O.prototype.clear = vr;
O.prototype.delete = yr;
O.prototype.get = br;
O.prototype.has = gr;
O.prototype.set = Cr;
var Ge = typeof exports == "object" && exports && !exports.nodeType && exports, be = Ge && typeof module == "object" && module && !module.nodeType && module, Tr = be && be.exports === Ge, ge = Tr ? P.Buffer : void 0;
ge && ge.allocUnsafe;
function wr(e, t) {
  return e.slice();
}
var _e = P.Uint8Array;
function Pr(e) {
  var t = new e.constructor(e.byteLength);
  return new _e(t).set(new _e(e)), t;
}
function jr(e, t) {
  var n = Pr(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function Or(e) {
  return typeof e.constructor == "function" && !Ee(e) ? Et(Fe(e)) : {};
}
function xr(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var u = i[++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Ar = xr();
function W(e, t, n) {
  (n !== void 0 && !z(e[t], n) || n === void 0 && !(t in e)) && te(e, t, n);
}
function Sr(e) {
  return E(e) && ne(e);
}
function q(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function $r(e) {
  return Wt(e, ze(e));
}
function Er(e, t, n, r, o, a, i) {
  var s = q(e, n), u = q(t, n), l = i.get(u);
  if (l) {
    W(e, n, l);
    return;
  }
  var p = a ? a(s, u, n + "", e, t, i) : void 0, m = p === void 0;
  if (m) {
    var y = V(u), v = !y && De(u), d = !y && !v && Ne(u);
    p = u, y || v || d ? V(s) ? p = s : Sr(s) ? p = Mt(s) : v ? (m = !1, p = wr(u)) : d ? (m = !1, p = jr(u)) : p = [] : hr(u) || L(u) ? (p = s, L(s) ? p = $r(s) : (!T(s) || k(s)) && (p = Or(u))) : m = !1;
  }
  m && (i.set(u, p), o(p, u, r, a, i), i.delete(u)), W(e, n, p);
}
function He(e, t, n, r, o) {
  e !== t && Ar(t, function(a, i) {
    if (o || (o = new O()), T(a))
      Er(e, t, i, n, He, r, o);
    else {
      var s = r ? r(q(e, i), a, i + "", e, t, o) : void 0;
      s === void 0 && (s = a), W(e, i, s);
    }
  }, ze);
}
var Ir = Yt(function(e, t, n) {
  He(e, t, n);
});
let Ke;
const Zr = (e) => {
  Ke = e;
}, Mr = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, Dr = (e = {}) => {
  const t = Z();
  return (r, o = {}) => {
    const a = w(Y(e.immediately) ? !0 : !!e.immediately), i = Q(t, X(/* @__PURE__ */ R({
      setup() {
        const s = () => {
          i.destroy();
        }, u = () => {
          i.emit(b.destory);
        }, l = w(), p = () => {
          Promise.resolve().then(() => {
            i.componentRef = l;
          });
        };
        return () => _(Qe, J({
          ref: l,
          show: a.value,
          onClickCloseIcon: s,
          onClosed: u,
          onVnodeMounted: p
        }, {
          ...Mr,
          ...o.attrs
        }), {
          default: () => r,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: Ke || o.appendTo,
      visible: a,
      meta: {
        ...(e == null ? void 0 : e.meta) || {
          name: "command-vant-ui-popup"
        },
        ...(o == null ? void 0 : o.meta) || {}
      }
    });
    return i;
  };
}, Xr = (e = {}) => {
  const t = Dr(e);
  return (n, r = {}) => (Ir(r, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(n, r));
}, Rr = () => {
  const e = ke();
  Ze(
    () => e.path,
    () => {
      console.log("路由变化,关闭所有存在的弹窗"), rt();
    }
  );
}, Jr = function() {
  return console.warn(
    "useAfterRouteChangeCloseAllCommandComponent is deprecated (because its name is not elegant enough =.=), please use useCloseAllOnRouteChange instead, their functions are exactly the same"
  ), Rr();
};
export {
  Te as CommandComponentConsumerInjectKey,
  ue as CommandComponentStackInjectKey,
  Q as CommandProvider,
  et as ConsumerEventBus,
  b as EVENT_NAME,
  nt as PromiseWithResolvers,
  K as activeCommandComponentConsumers,
  se as busName2EventName,
  Lr as createElementPlusDialog,
  qr as createElementPlusDrawer,
  Dr as createVantUiPopup,
  Xr as createVantUiPopupOnBottom,
  ie as deepMerge,
  rt as destroyAllCommandComponentConsumer,
  tt as eventName2BusName,
  Kr as getCommandDialogConsumer,
  ot as getConsumer,
  Hr as getMaxZIndex,
  Y as isNull,
  Vr as setElementPlusDialogMountNode,
  Wr as setElementPlusDrawerMountNode,
  Zr as setVantUiPopupMountNode,
  Jr as useAfterRouteChangeCloseAllCommandComponent,
  Rr as useCloseAllOnRouteChange
};
