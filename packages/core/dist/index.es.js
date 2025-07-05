var He = Object.defineProperty, Ge = Object.defineProperties;
var Le = Object.getOwnPropertyDescriptors;
var te = Object.getOwnPropertySymbols;
var Ke = Object.prototype.hasOwnProperty, We = Object.prototype.propertyIsEnumerable;
var H = (e, t, n) => t in e ? He(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, j = (e, t) => {
  for (var n in t || (t = {}))
    Ke.call(t, n) && H(e, n, t[n]);
  if (te)
    for (var n of te(t))
      We.call(t, n) && H(e, n, t[n]);
  return e;
}, G = (e, t) => Ge(e, Le(t));
var ne = (e, t, n) => H(e, typeof t != "symbol" ? t + "" : t, n);
import { h as be, defineComponent as X, createVNode as _e, render as re, inject as Te, provide as M, nextTick as qe, getCurrentInstance as Ve, computed as oe, ref as ae } from "vue";
var Ce = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(Ce || {});
class Ze {
  constructor() {
    ne(this, "map", /* @__PURE__ */ new WeakMap());
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
    this.on(t, n, r, G(j({}, o), {
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
const xr = (e = "") => e.slice(2).toLowerCase(), Pr = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Xe = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Ar = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), +n;
}, Sr = (e) => e == null, Er = (e) => typeof e != "function" ? e : be(X({ render: () => e() })), $r = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), je = Symbol("CommandComponentConsumerInjectKey"), ie = Symbol("CommandComponentStackInjectKey"), N = new Ze(), se = /* @__PURE__ */ new Set(), we = (e) => j(j({}, e.parent ? we(e.parent) : {}), e.provides);
function Je(e, t, n) {
  var I;
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || ((I = e.vnode.el) == null ? void 0 : I.parentElement) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-component-container", r.appendChild(o);
  const a = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !1;
  }, u = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !0;
  }, i = () => {
    qe(() => {
      re(null, o), o.remove();
    });
  }, {
    promise: s,
    resolve: d,
    reject: l
  } = Xe(), v = 3e3, b = (p = !1) => {
    p ? (a(), f.once(Ce.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: v
    })) : (se.delete(f), f.stack.splice(f.stackIndex).forEach((g) => g.destroy(!0)), f.destroyed = !0);
  }, y = (p) => {
    d(p), b();
  }, m = (p) => {
    l(p), b();
  }, f = {
    meta: n.meta || {},
    promise: s,
    resolve: d,
    reject: l,
    destroyWithResolve: y,
    destroyWithReject: m,
    hide: a,
    show: u,
    destroy: b,
    container: o,
    visible: n.visible,
    on: (p, h, g = {}) => N.on(f, p, h, g),
    once: (p, h, g = {}) => N.on(f, p, h, g),
    emit: (p, ...h) => N.emit(f, p, ...h),
    off: (p, h) => N.off(f, p, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, x = _e(/* @__PURE__ */ X({
    setup() {
      for (const g in n.provideProps)
        M(g, n.provideProps[g]);
      const p = j({}, we(e));
      for (const g in p)
        M(g, p[g]);
      M(je, f);
      const h = Te(ie, []);
      return f.stackIndex = h.length, h.push(f), M(ie, h), f.stack = h, () => be(t);
    }
  }), null, null);
  return x.appContext = (e == null ? void 0 : e.appContext) || x.appContext, re(x, o), f.mounted = !0, se.add(f), f;
}
const Ir = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return Te(je, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Oe = typeof global == "object" && global && global.Object === Object && global, Ye = typeof self == "object" && self && self.Object === Object && self, E = Oe || Ye || Function("return this")(), D = E.Symbol, xe = Object.prototype, Qe = xe.hasOwnProperty, ke = xe.toString, P = D ? D.toStringTag : void 0;
function et(e) {
  var t = Qe.call(e, P), n = e[P];
  try {
    e[P] = void 0;
    var r = !0;
  } catch (a) {
  }
  var o = ke.call(e);
  return r && (t ? e[P] = n : delete e[P]), o;
}
var tt = Object.prototype, nt = tt.toString;
function rt(e) {
  return nt.call(e);
}
var ot = "[object Null]", at = "[object Undefined]", ue = D ? D.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? at : ot : ue && ue in Object(e) ? et(e) : rt(e);
}
function $(e) {
  return e != null && typeof e == "object";
}
var W = Array.isArray;
function C(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Pe(e) {
  return e;
}
var it = "[object AsyncFunction]", st = "[object Function]", ut = "[object GeneratorFunction]", ct = "[object Proxy]";
function J(e) {
  if (!C(e))
    return !1;
  var t = z(e);
  return t == st || t == ut || t == it || t == ct;
}
var L = E["__core-js_shared__"], ce = function() {
  var e = /[^.]+$/.exec(L && L.keys && L.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ft(e) {
  return !!ce && ce in e;
}
var lt = Function.prototype, pt = lt.toString;
function dt(e) {
  if (e != null) {
    try {
      return pt.call(e);
    } catch (t) {
    }
    try {
      return e + "";
    } catch (t) {
    }
  }
  return "";
}
var ht = /[\\^$.*+?()[\]{}|]/g, vt = /^\[object .+?Constructor\]$/, gt = Function.prototype, yt = Object.prototype, mt = gt.toString, bt = yt.hasOwnProperty, _t = RegExp(
  "^" + mt.call(bt).replace(ht, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tt(e) {
  if (!C(e) || ft(e))
    return !1;
  var t = J(e) ? _t : vt;
  return t.test(dt(e));
}
function Ct(e, t) {
  return e == null ? void 0 : e[t];
}
function Y(e, t) {
  var n = Ct(e, t);
  return Tt(n) ? n : void 0;
}
var fe = Object.create, jt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!C(t))
      return {};
    if (fe)
      return fe(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function wt(e, t, n) {
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
function Ot(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var xt = 800, Pt = 16, At = Date.now;
function St(e) {
  var t = 0, n = 0;
  return function() {
    var r = At(), o = Pt - (r - n);
    if (n = r, o > 0) {
      if (++t >= xt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Et(e) {
  return function() {
    return e;
  };
}
var R = function() {
  try {
    var e = Y(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (t) {
  }
}(), $t = R ? function(e, t) {
  return R(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Et(t),
    writable: !0
  });
} : Pe, It = St($t), Mt = 9007199254740991, Nt = /^(?:0|[1-9]\d*)$/;
function Ae(e, t) {
  var n = typeof e;
  return t = t == null ? Mt : t, !!t && (n == "number" || n != "symbol" && Nt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Q(e, t, n) {
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
var Dt = Object.prototype, Rt = Dt.hasOwnProperty;
function zt(e, t, n) {
  var r = e[t];
  (!(Rt.call(e, t) && F(r, n)) || n === void 0 && !(t in e)) && Q(e, t, n);
}
function Ft(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, u = t.length; ++a < u; ) {
    var i = t[a], s = void 0;
    s === void 0 && (s = e[i]), o ? Q(n, i, s) : zt(n, i, s);
  }
  return n;
}
var le = Math.max;
function Bt(e, t, n) {
  return t = le(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = le(r.length - t, 0), u = Array(a); ++o < a; )
      u[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(u), wt(e, this, i);
  };
}
function Ut(e, t) {
  return It(Bt(e, t, Pe), e + "");
}
var Ht = 9007199254740991;
function Se(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ht;
}
function k(e) {
  return e != null && Se(e.length) && !J(e);
}
function Gt(e, t, n) {
  if (!C(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? k(n) && Ae(t, n.length) : r == "string" && t in n) ? F(n[t], e) : !1;
}
function Lt(e) {
  return Ut(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, u = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, u && Gt(n[0], n[1], u) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var Kt = Object.prototype;
function Ee(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Kt;
  return e === n;
}
function Wt(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var qt = "[object Arguments]";
function pe(e) {
  return $(e) && z(e) == qt;
}
var $e = Object.prototype, Vt = $e.hasOwnProperty, Zt = $e.propertyIsEnumerable, q = pe(/* @__PURE__ */ function() {
  return arguments;
}()) ? pe : function(e) {
  return $(e) && Vt.call(e, "callee") && !Zt.call(e, "callee");
};
function Xt() {
  return !1;
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, de = Ie && typeof module == "object" && module && !module.nodeType && module, Jt = de && de.exports === Ie, he = Jt ? E.Buffer : void 0, Yt = he ? he.isBuffer : void 0, Me = Yt || Xt, Qt = "[object Arguments]", kt = "[object Array]", en = "[object Boolean]", tn = "[object Date]", nn = "[object Error]", rn = "[object Function]", on = "[object Map]", an = "[object Number]", sn = "[object Object]", un = "[object RegExp]", cn = "[object Set]", fn = "[object String]", ln = "[object WeakMap]", pn = "[object ArrayBuffer]", dn = "[object DataView]", hn = "[object Float32Array]", vn = "[object Float64Array]", gn = "[object Int8Array]", yn = "[object Int16Array]", mn = "[object Int32Array]", bn = "[object Uint8Array]", _n = "[object Uint8ClampedArray]", Tn = "[object Uint16Array]", Cn = "[object Uint32Array]", c = {};
c[hn] = c[vn] = c[gn] = c[yn] = c[mn] = c[bn] = c[_n] = c[Tn] = c[Cn] = !0;
c[Qt] = c[kt] = c[pn] = c[en] = c[dn] = c[tn] = c[nn] = c[rn] = c[on] = c[an] = c[sn] = c[un] = c[cn] = c[fn] = c[ln] = !1;
function jn(e) {
  return $(e) && Se(e.length) && !!c[z(e)];
}
function wn(e) {
  return function(t) {
    return e(t);
  };
}
var Ne = typeof exports == "object" && exports && !exports.nodeType && exports, A = Ne && typeof module == "object" && module && !module.nodeType && module, On = A && A.exports === Ne, K = On && Oe.process, ve = function() {
  try {
    var e = A && A.require && A.require("util").types;
    return e || K && K.binding && K.binding("util");
  } catch (t) {
  }
}(), ge = ve && ve.isTypedArray, De = ge ? wn(ge) : jn;
function xn(e, t) {
  var n = W(e), r = !n && q(e), o = !n && !r && Me(e), a = !n && !r && !o && De(e), u = n || r || o || a, i = u ? Wt(e.length, String) : [], s = i.length;
  for (var d in e)
    u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Ae(d, s)) || i.push(d);
  return i;
}
function Pn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function An(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Sn = Object.prototype, En = Sn.hasOwnProperty;
function $n(e) {
  if (!C(e))
    return An(e);
  var t = Ee(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !En.call(e, r)) || n.push(r);
  return n;
}
function Re(e) {
  return k(e) ? xn(e) : $n(e);
}
var S = Y(Object, "create");
function In() {
  this.__data__ = S ? S(null) : {}, this.size = 0;
}
function Mn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nn = "__lodash_hash_undefined__", Dn = Object.prototype, Rn = Dn.hasOwnProperty;
function zn(e) {
  var t = this.__data__;
  if (S) {
    var n = t[e];
    return n === Nn ? void 0 : n;
  }
  return Rn.call(t, e) ? t[e] : void 0;
}
var Fn = Object.prototype, Bn = Fn.hasOwnProperty;
function Un(e) {
  var t = this.__data__;
  return S ? t[e] !== void 0 : Bn.call(t, e);
}
var Hn = "__lodash_hash_undefined__";
function Gn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = S && t === void 0 ? Hn : t, this;
}
function T(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
T.prototype.clear = In;
T.prototype.delete = Mn;
T.prototype.get = zn;
T.prototype.has = Un;
T.prototype.set = Gn;
function Ln() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var n = e.length; n--; )
    if (F(e[n][0], t))
      return n;
  return -1;
}
var Kn = Array.prototype, Wn = Kn.splice;
function qn(e) {
  var t = this.__data__, n = B(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Wn.call(t, n, 1), --this.size, !0;
}
function Vn(e) {
  var t = this.__data__, n = B(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Zn(e) {
  return B(this.__data__, e) > -1;
}
function Xn(e, t) {
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
_.prototype.clear = Ln;
_.prototype.delete = qn;
_.prototype.get = Vn;
_.prototype.has = Zn;
_.prototype.set = Xn;
var ze = Y(E, "Map");
function Jn() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (ze || _)(),
    string: new T()
  };
}
function Yn(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var n = e.__data__;
  return Yn(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Qn(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function kn(e) {
  return U(this, e).get(e);
}
function er(e) {
  return U(this, e).has(e);
}
function tr(e, t) {
  var n = U(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function w(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
w.prototype.clear = Jn;
w.prototype.delete = Qn;
w.prototype.get = kn;
w.prototype.has = er;
w.prototype.set = tr;
var Fe = Pn(Object.getPrototypeOf, Object), nr = "[object Object]", rr = Function.prototype, or = Object.prototype, Be = rr.toString, ar = or.hasOwnProperty, ir = Be.call(Object);
function sr(e) {
  if (!$(e) || z(e) != nr)
    return !1;
  var t = Fe(e);
  if (t === null)
    return !0;
  var n = ar.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Be.call(n) == ir;
}
function ur() {
  this.__data__ = new _(), this.size = 0;
}
function cr(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function fr(e) {
  return this.__data__.get(e);
}
function lr(e) {
  return this.__data__.has(e);
}
var pr = 200;
function dr(e, t) {
  var n = this.__data__;
  if (n instanceof _) {
    var r = n.__data__;
    if (!ze || r.length < pr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new w(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function O(e) {
  var t = this.__data__ = new _(e);
  this.size = t.size;
}
O.prototype.clear = ur;
O.prototype.delete = cr;
O.prototype.get = fr;
O.prototype.has = lr;
O.prototype.set = dr;
var hr = typeof exports == "object" && exports && !exports.nodeType && exports;
hr && typeof module == "object" && module && !module.nodeType && module;
function vr(e, t) {
  return e.slice();
}
var ye = E.Uint8Array;
function gr(e) {
  var t = new e.constructor(e.byteLength);
  return new ye(t).set(new ye(e)), t;
}
function yr(e, t) {
  var n = gr(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function mr(e) {
  return typeof e.constructor == "function" && !Ee(e) ? jt(Fe(e)) : {};
}
function br(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), u = r(t), i = u.length; i--; ) {
      var s = u[++o];
      if (n(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var _r = br();
function V(e, t, n) {
  (n !== void 0 && !F(e[t], n) || n === void 0 && !(t in e)) && Q(e, t, n);
}
function Tr(e) {
  return $(e) && k(e);
}
function Z(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Cr(e) {
  return Ft(e, Re(e));
}
function jr(e, t, n, r, o, a, u) {
  var i = Z(e, n), s = Z(t, n), d = u.get(s);
  if (d) {
    V(e, n, d);
    return;
  }
  var l = a ? a(i, s, n + "", e, t, u) : void 0, v = l === void 0;
  if (v) {
    var b = W(s), y = !b && Me(s), m = !b && !y && De(s);
    l = s, b || y || m ? W(i) ? l = i : Tr(i) ? l = Ot(i) : y ? (v = !1, l = vr(s)) : m ? (v = !1, l = yr(s)) : l = [] : sr(s) || q(s) ? (l = i, q(i) ? l = Cr(i) : (!C(i) || J(i)) && (l = mr(s))) : v = !1;
  }
  v && (u.set(s, l), o(l, s, r, a, u), u.delete(s)), V(e, n, l);
}
function Ue(e, t, n, r, o) {
  e !== t && _r(t, function(a, u) {
    if (o || (o = new O()), C(a))
      jr(e, t, u, n, Ue, r, o);
    else {
      var i = r ? r(Z(e, u), a, u + "", e, t, o) : void 0;
      i === void 0 && (i = a), V(e, u, i);
    }
  }, Re);
}
var me = Lt(function(e, t, n) {
  Ue(e, t, n);
});
function Mr(e) {
  const {
    render: t,
    defaultConfig: n = {},
    configTransformer: r
  } = e;
  return function(o) {
    const a = Ve();
    return function(i, s) {
      const d = oe(() => {
        const y = typeof o == "function" ? o() : o, m = typeof s == "function" ? s() : s;
        console.log(y, m);
        const f = me({}, n, y, m);
        return r ? r(f) : f;
      }), l = ae(!0), v = {
        value: null
      }, b = /* @__PURE__ */ X({
        setup: () => {
          const y = oe(() => {
            const x = typeof o == "function" ? o() : o, I = typeof s == "function" ? s() : s, p = me({}, n, x, I);
            return r ? r(p) : p;
          }), m = ae(), ee = {
            componentRef: m,
            onMounted: () => {
              Promise.resolve().then(() => {
                v.value.componentRef = m;
              });
            },
            config: y,
            consumer: v,
            visible: l
          };
          return () => t(i, ee);
        }
      });
      return v.value = Je(a, _e(b, null, null), G(j({}, d.value), {
        visible: l
      })), v.value;
    };
  };
}
export {
  je as CommandComponentConsumerInjectKey,
  ie as CommandComponentStackInjectKey,
  Ze as ConsumerEventBus,
  Ce as EVENT_NAME,
  Xe as PromiseWithResolvers,
  Er as RxRender,
  se as activeConsumers,
  Pr as busName2EventName,
  Je as commandProviderWithRender,
  Mr as createAdapter,
  xr as eventName2BusName,
  Ar as getMaxZIndex,
  Sr as isNull,
  Ir as useConsumer,
  $r as uuid
};
