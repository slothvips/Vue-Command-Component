var He = Object.defineProperty, Ge = Object.defineProperties;
var Le = Object.getOwnPropertyDescriptors;
var re = Object.getOwnPropertySymbols;
var Ke = Object.prototype.hasOwnProperty, We = Object.prototype.propertyIsEnumerable;
var H = (e, t, n) => t in e ? He(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, w = (e, t) => {
  for (var n in t || (t = {}))
    Ke.call(t, n) && H(e, n, t[n]);
  if (re)
    for (var n of re(t))
      We.call(t, n) && H(e, n, t[n]);
  return e;
}, G = (e, t) => Ge(e, Le(t));
var oe = (e, t, n) => H(e, typeof t != "symbol" ? t + "" : t, n);
import { h as q, defineComponent as Y, createVNode as _e, render as L, Teleport as qe, inject as Te, provide as M, nextTick as Ve, getCurrentInstance as Ze, computed as ae, ref as ie } from "vue";
var Ce = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(Ce || {});
class Xe {
  constructor() {
    oe(this, "map", /* @__PURE__ */ new WeakMap());
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
    let u = r;
    o.once && (u = (...i) => {
      r(...i), this.off(t, n, u);
    }), a.add(u), o.callImmediatelyAfterDelay !== void 0 && setTimeout(() => {
      u();
    }, o.callImmediatelyAfterDelay || 0);
  }
  once(t, n, r, o = {}) {
    this.on(t, n, r, G(w({}, o), {
      once: !0
    }));
  }
  emit(t, n, ...r) {
    this.getEventsByConsumer(t, n).forEach((a) => a(...r));
  }
  off(t, n, r) {
    this.getEventsByConsumer(t, n).delete(r);
  }
}
const Pr = (e = "") => e.slice(2).toLowerCase(), Ar = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Je = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Sr = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), +n;
}, Er = (e) => e == null, $r = (e) => typeof e != "function" ? e : q(Y({ render: () => e() })), Ir = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), je = Symbol("CommandComponentConsumerInjectKey"), se = Symbol("CommandComponentStackInjectKey"), N = new Xe(), ue = /* @__PURE__ */ new Set(), we = (e) => w(w({}, e.parent ? we(e.parent) : {}), e.provides);
function Ye(e, t, n) {
  var I;
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || ((I = e.vnode.el) == null ? void 0 : I.parentElement) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-component-container";
  const a = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !1;
  }, u = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !0;
  }, i = () => {
    Ve(() => {
      L(null, o), o.remove();
    });
  }, {
    promise: s,
    resolve: d,
    reject: l
  } = Je(), v = 3e3, m = (p = !1) => {
    p ? (a(), f.once(Ce.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: v
    })) : (ue.delete(f), f.stack.splice(f.stackIndex).forEach((y) => y.destroy(!0)), f.destroyed = !0);
  }, g = (p) => {
    d(p), m();
  }, b = (p) => {
    l(p), m();
  }, f = {
    meta: n.meta || {},
    promise: s,
    resolve: d,
    reject: l,
    destroyWithResolve: g,
    destroyWithReject: b,
    hide: a,
    show: u,
    destroy: m,
    container: o,
    visible: n.visible,
    on: (p, h, y = {}) => N.on(f, p, h, y),
    once: (p, h, y = {}) => N.on(f, p, h, y),
    emit: (p, ...h) => N.emit(f, p, ...h),
    off: (p, h) => N.off(f, p, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, j = _e(/* @__PURE__ */ Y({
    setup() {
      for (const y in n.provideProps)
        M(y, n.provideProps[y]);
      const p = w({}, we(e));
      for (const y in p)
        M(y, p[y]);
      M(je, f);
      const h = Te(se, []);
      return f.stackIndex = h.length, h.push(f), M(se, h), f.stack = h, () => q(t);
    }
  }), null, null);
  return j.appContext = (e == null ? void 0 : e.appContext) || j.appContext, n.fragment ? (Object.assign(o.style, {
    display: "none",
    position: "absolute",
    pointerEvents: "none"
  }), document.head.appendChild(o), L(q(qe, {
    to: r
  }, j), o)) : (r.appendChild(o), L(j, o)), (n.immediate === void 0 || n.immediate) && f.show(), f.mounted = !0, ue.add(f), f;
}
const Mr = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return Te(je, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Oe = typeof global == "object" && global && global.Object === Object && global, Qe = typeof self == "object" && self && self.Object === Object && self, E = Oe || Qe || Function("return this")(), D = E.Symbol, xe = Object.prototype, ke = xe.hasOwnProperty, et = xe.toString, P = D ? D.toStringTag : void 0;
function tt(e) {
  var t = ke.call(e, P), n = e[P];
  try {
    e[P] = void 0;
    var r = !0;
  } catch (a) {
  }
  var o = et.call(e);
  return r && (t ? e[P] = n : delete e[P]), o;
}
var nt = Object.prototype, rt = nt.toString;
function ot(e) {
  return rt.call(e);
}
var at = "[object Null]", it = "[object Undefined]", ce = D ? D.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? it : at : ce && ce in Object(e) ? tt(e) : ot(e);
}
function $(e) {
  return e != null && typeof e == "object";
}
var V = Array.isArray;
function C(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Pe(e) {
  return e;
}
var st = "[object AsyncFunction]", ut = "[object Function]", ct = "[object GeneratorFunction]", ft = "[object Proxy]";
function Q(e) {
  if (!C(e))
    return !1;
  var t = z(e);
  return t == ut || t == ct || t == st || t == ft;
}
var K = E["__core-js_shared__"], fe = function() {
  var e = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function lt(e) {
  return !!fe && fe in e;
}
var pt = Function.prototype, dt = pt.toString;
function ht(e) {
  if (e != null) {
    try {
      return dt.call(e);
    } catch (t) {
    }
    try {
      return e + "";
    } catch (t) {
    }
  }
  return "";
}
var vt = /[\\^$.*+?()[\]{}|]/g, yt = /^\[object .+?Constructor\]$/, mt = Function.prototype, gt = Object.prototype, bt = mt.toString, _t = gt.hasOwnProperty, Tt = RegExp(
  "^" + bt.call(_t).replace(vt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ct(e) {
  if (!C(e) || lt(e))
    return !1;
  var t = Q(e) ? Tt : yt;
  return t.test(ht(e));
}
function jt(e, t) {
  return e == null ? void 0 : e[t];
}
function k(e, t) {
  var n = jt(e, t);
  return Ct(n) ? n : void 0;
}
var le = Object.create, wt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!C(t))
      return {};
    if (le)
      return le(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Ot(e, t, n) {
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
function xt(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Pt = 800, At = 16, St = Date.now;
function Et(e) {
  var t = 0, n = 0;
  return function() {
    var r = St(), o = At - (r - n);
    if (n = r, o > 0) {
      if (++t >= Pt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function $t(e) {
  return function() {
    return e;
  };
}
var R = function() {
  try {
    var e = k(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (t) {
  }
}(), It = R ? function(e, t) {
  return R(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: $t(t),
    writable: !0
  });
} : Pe, Mt = Et(It), Nt = 9007199254740991, Dt = /^(?:0|[1-9]\d*)$/;
function Ae(e, t) {
  var n = typeof e;
  return t = t == null ? Nt : t, !!t && (n == "number" || n != "symbol" && Dt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ee(e, t, n) {
  t == "__proto__" && R ? R(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function F(e, t) {
  return e === t || e !== e && t !== t;
}
var Rt = Object.prototype, zt = Rt.hasOwnProperty;
function Ft(e, t, n) {
  var r = e[t];
  (!(zt.call(e, t) && F(r, n)) || n === void 0 && !(t in e)) && ee(e, t, n);
}
function Bt(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, u = t.length; ++a < u; ) {
    var i = t[a], s = void 0;
    s === void 0 && (s = e[i]), o ? ee(n, i, s) : Ft(n, i, s);
  }
  return n;
}
var pe = Math.max;
function Ut(e, t, n) {
  return t = pe(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = pe(r.length - t, 0), u = Array(a); ++o < a; )
      u[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(u), Ot(e, this, i);
  };
}
function Ht(e, t) {
  return Mt(Ut(e, t, Pe), e + "");
}
var Gt = 9007199254740991;
function Se(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Gt;
}
function te(e) {
  return e != null && Se(e.length) && !Q(e);
}
function Lt(e, t, n) {
  if (!C(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? te(n) && Ae(t, n.length) : r == "string" && t in n) ? F(n[t], e) : !1;
}
function Kt(e) {
  return Ht(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, u = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, u && Lt(n[0], n[1], u) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var Wt = Object.prototype;
function Ee(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Wt;
  return e === n;
}
function qt(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Vt = "[object Arguments]";
function de(e) {
  return $(e) && z(e) == Vt;
}
var $e = Object.prototype, Zt = $e.hasOwnProperty, Xt = $e.propertyIsEnumerable, Z = de(/* @__PURE__ */ function() {
  return arguments;
}()) ? de : function(e) {
  return $(e) && Zt.call(e, "callee") && !Xt.call(e, "callee");
};
function Jt() {
  return !1;
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, he = Ie && typeof module == "object" && module && !module.nodeType && module, Yt = he && he.exports === Ie, ve = Yt ? E.Buffer : void 0, Qt = ve ? ve.isBuffer : void 0, Me = Qt || Jt, kt = "[object Arguments]", en = "[object Array]", tn = "[object Boolean]", nn = "[object Date]", rn = "[object Error]", on = "[object Function]", an = "[object Map]", sn = "[object Number]", un = "[object Object]", cn = "[object RegExp]", fn = "[object Set]", ln = "[object String]", pn = "[object WeakMap]", dn = "[object ArrayBuffer]", hn = "[object DataView]", vn = "[object Float32Array]", yn = "[object Float64Array]", mn = "[object Int8Array]", gn = "[object Int16Array]", bn = "[object Int32Array]", _n = "[object Uint8Array]", Tn = "[object Uint8ClampedArray]", Cn = "[object Uint16Array]", jn = "[object Uint32Array]", c = {};
c[vn] = c[yn] = c[mn] = c[gn] = c[bn] = c[_n] = c[Tn] = c[Cn] = c[jn] = !0;
c[kt] = c[en] = c[dn] = c[tn] = c[hn] = c[nn] = c[rn] = c[on] = c[an] = c[sn] = c[un] = c[cn] = c[fn] = c[ln] = c[pn] = !1;
function wn(e) {
  return $(e) && Se(e.length) && !!c[z(e)];
}
function On(e) {
  return function(t) {
    return e(t);
  };
}
var Ne = typeof exports == "object" && exports && !exports.nodeType && exports, A = Ne && typeof module == "object" && module && !module.nodeType && module, xn = A && A.exports === Ne, W = xn && Oe.process, ye = function() {
  try {
    var e = A && A.require && A.require("util").types;
    return e || W && W.binding && W.binding("util");
  } catch (t) {
  }
}(), me = ye && ye.isTypedArray, De = me ? On(me) : wn;
function Pn(e, t) {
  var n = V(e), r = !n && Z(e), o = !n && !r && Me(e), a = !n && !r && !o && De(e), u = n || r || o || a, i = u ? qt(e.length, String) : [], s = i.length;
  for (var d in e)
    u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Ae(d, s)) || i.push(d);
  return i;
}
function An(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function Sn(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var En = Object.prototype, $n = En.hasOwnProperty;
function In(e) {
  if (!C(e))
    return Sn(e);
  var t = Ee(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !$n.call(e, r)) || n.push(r);
  return n;
}
function Re(e) {
  return te(e) ? Pn(e) : In(e);
}
var S = k(Object, "create");
function Mn() {
  this.__data__ = S ? S(null) : {}, this.size = 0;
}
function Nn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Dn = "__lodash_hash_undefined__", Rn = Object.prototype, zn = Rn.hasOwnProperty;
function Fn(e) {
  var t = this.__data__;
  if (S) {
    var n = t[e];
    return n === Dn ? void 0 : n;
  }
  return zn.call(t, e) ? t[e] : void 0;
}
var Bn = Object.prototype, Un = Bn.hasOwnProperty;
function Hn(e) {
  var t = this.__data__;
  return S ? t[e] !== void 0 : Un.call(t, e);
}
var Gn = "__lodash_hash_undefined__";
function Ln(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = S && t === void 0 ? Gn : t, this;
}
function T(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
T.prototype.clear = Mn;
T.prototype.delete = Nn;
T.prototype.get = Fn;
T.prototype.has = Hn;
T.prototype.set = Ln;
function Kn() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var n = e.length; n--; )
    if (F(e[n][0], t))
      return n;
  return -1;
}
var Wn = Array.prototype, qn = Wn.splice;
function Vn(e) {
  var t = this.__data__, n = B(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : qn.call(t, n, 1), --this.size, !0;
}
function Zn(e) {
  var t = this.__data__, n = B(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Xn(e) {
  return B(this.__data__, e) > -1;
}
function Jn(e, t) {
  var n = this.__data__, r = B(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function _(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_.prototype.clear = Kn;
_.prototype.delete = Vn;
_.prototype.get = Zn;
_.prototype.has = Xn;
_.prototype.set = Jn;
var ze = k(E, "Map");
function Yn() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (ze || _)(),
    string: new T()
  };
}
function Qn(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var n = e.__data__;
  return Qn(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function kn(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function er(e) {
  return U(this, e).get(e);
}
function tr(e) {
  return U(this, e).has(e);
}
function nr(e, t) {
  var n = U(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function O(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
O.prototype.clear = Yn;
O.prototype.delete = kn;
O.prototype.get = er;
O.prototype.has = tr;
O.prototype.set = nr;
var Fe = An(Object.getPrototypeOf, Object), rr = "[object Object]", or = Function.prototype, ar = Object.prototype, Be = or.toString, ir = ar.hasOwnProperty, sr = Be.call(Object);
function ur(e) {
  if (!$(e) || z(e) != rr)
    return !1;
  var t = Fe(e);
  if (t === null)
    return !0;
  var n = ir.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Be.call(n) == sr;
}
function cr() {
  this.__data__ = new _(), this.size = 0;
}
function fr(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function lr(e) {
  return this.__data__.get(e);
}
function pr(e) {
  return this.__data__.has(e);
}
var dr = 200;
function hr(e, t) {
  var n = this.__data__;
  if (n instanceof _) {
    var r = n.__data__;
    if (!ze || r.length < dr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new O(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function x(e) {
  var t = this.__data__ = new _(e);
  this.size = t.size;
}
x.prototype.clear = cr;
x.prototype.delete = fr;
x.prototype.get = lr;
x.prototype.has = pr;
x.prototype.set = hr;
var vr = typeof exports == "object" && exports && !exports.nodeType && exports;
vr && typeof module == "object" && module && !module.nodeType && module;
function yr(e, t) {
  return e.slice();
}
var ge = E.Uint8Array;
function mr(e) {
  var t = new e.constructor(e.byteLength);
  return new ge(t).set(new ge(e)), t;
}
function gr(e, t) {
  var n = mr(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function br(e) {
  return typeof e.constructor == "function" && !Ee(e) ? wt(Fe(e)) : {};
}
function _r(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), u = r(t), i = u.length; i--; ) {
      var s = u[++o];
      if (n(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var Tr = _r();
function X(e, t, n) {
  (n !== void 0 && !F(e[t], n) || n === void 0 && !(t in e)) && ee(e, t, n);
}
function Cr(e) {
  return $(e) && te(e);
}
function J(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function jr(e) {
  return Bt(e, Re(e));
}
function wr(e, t, n, r, o, a, u) {
  var i = J(e, n), s = J(t, n), d = u.get(s);
  if (d) {
    X(e, n, d);
    return;
  }
  var l = a ? a(i, s, n + "", e, t, u) : void 0, v = l === void 0;
  if (v) {
    var m = V(s), g = !m && Me(s), b = !m && !g && De(s);
    l = s, m || g || b ? V(i) ? l = i : Cr(i) ? l = xt(i) : g ? (v = !1, l = yr(s)) : b ? (v = !1, l = gr(s)) : l = [] : ur(s) || Z(s) ? (l = i, Z(i) ? l = jr(i) : (!C(i) || Q(i)) && (l = br(s))) : v = !1;
  }
  v && (u.set(s, l), o(l, s, r, a, u), u.delete(s)), X(e, n, l);
}
function Ue(e, t, n, r, o) {
  e !== t && Tr(t, function(a, u) {
    if (o || (o = new x()), C(a))
      wr(e, t, u, n, Ue, r, o);
    else {
      var i = r ? r(J(e, u), a, u + "", e, t, o) : void 0;
      i === void 0 && (i = a), X(e, u, i);
    }
  }, Re);
}
var be = Kt(function(e, t, n) {
  Ue(e, t, n);
});
function Nr(e) {
  const {
    render: t,
    defaultConfig: n = {},
    configTransformer: r
  } = e;
  return function(o) {
    const a = Ze();
    return function(i, s) {
      const d = ae(() => {
        const g = typeof o == "function" ? o() : o, b = typeof s == "function" ? s() : s, f = be({}, n, g, b);
        return r ? r(f) : f;
      }), l = ie(!1), v = {
        value: null
      }, m = /* @__PURE__ */ Y({
        setup: () => {
          const g = ae(() => {
            const j = typeof o == "function" ? o() : o, I = typeof s == "function" ? s() : s, p = be({}, n, j, I);
            return r ? r(p) : p;
          }), b = ie(), ne = {
            componentRef: b,
            onMounted: () => {
              Promise.resolve().then(() => {
                v.value.componentRef = b;
              });
            },
            config: g,
            consumer: v,
            visible: l
          };
          return () => t(i, ne);
        }
      });
      return v.value = Ye(a, _e(m, null, null), G(w({}, d.value), {
        visible: l
      })), v.value;
    };
  };
}
export {
  je as CommandComponentConsumerInjectKey,
  se as CommandComponentStackInjectKey,
  Xe as ConsumerEventBus,
  Ce as EVENT_NAME,
  Je as PromiseWithResolvers,
  $r as RxRender,
  ue as activeConsumers,
  Ar as busName2EventName,
  Ye as commandProviderWithRender,
  Nr as createAdapter,
  Pr as eventName2BusName,
  Sr as getMaxZIndex,
  Er as isNull,
  Mr as useConsumer,
  Ir as uuid
};
