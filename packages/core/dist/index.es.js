var Le = Object.defineProperty, Ke = Object.defineProperties;
var We = Object.getOwnPropertyDescriptors;
var ie = Object.getOwnPropertySymbols;
var qe = Object.prototype.hasOwnProperty, Ve = Object.prototype.propertyIsEnumerable;
var K = (e, t, n) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, T = (e, t) => {
  for (var n in t || (t = {}))
    qe.call(t, n) && K(e, n, t[n]);
  if (ie)
    for (var n of ie(t))
      Ve.call(t, n) && K(e, n, t[n]);
  return e;
}, W = (e, t) => Ke(e, We(t));
var se = (e, t, n) => K(e, typeof t != "symbol" ? t + "" : t, n);
import { h as z, defineComponent as ee, render as N, getCurrentInstance as Z, createVNode as je, Teleport as Ze, inject as we, provide as D, nextTick as Xe, computed as ue, ref as ce } from "vue";
var Oe = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(Oe || {});
class Je {
  constructor() {
    se(this, "map", /* @__PURE__ */ new WeakMap());
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
    this.on(t, n, r, W(T({}, o), {
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
const Ar = (e = "") => e.slice(2).toLowerCase(), Sr = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Ye = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Er = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), +n;
}, $r = (e) => e == null, Ir = (e) => typeof e != "function" ? e : z(ee({ render: () => e() })), Mr = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), xe = Symbol("CommandComponentConsumerInjectKey"), fe = Symbol("CommandComponentStackInjectKey"), R = new Je(), le = /* @__PURE__ */ new Set(), X = (e) => T(T({}, e.parent ? X(e.parent) : {}), e.provides);
function Qe(e, t, n) {
  var M;
  e || N(z({
    setup() {
      return e = Z(), () => null;
    }
  }), document.body);
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || ((M = e.vnode.el) == null ? void 0 : M.parentElement) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-component-container";
  const a = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !1;
  }, u = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !0;
  }, i = () => {
    Xe(() => {
      N(null, o), o.remove();
    });
  }, {
    promise: s,
    resolve: d,
    reject: l
  } = Ye(), h = 3e3, m = (p = !1) => {
    p ? (a(), f.once(Oe.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: h
    })) : (le.delete(f), f.stack.splice(f.stackIndex).forEach((y) => y.destroy(!0)), f.destroyed = !0);
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
    on: (p, v, y = {}) => R.on(f, p, v, y),
    once: (p, v, y = {}) => R.on(f, p, v, y),
    emit: (p, ...v) => R.emit(f, p, ...v),
    off: (p, v) => R.off(f, p, v),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, w = je(/* @__PURE__ */ ee({
    setup() {
      const p = Z();
      for (const P in n.provideProps)
        D(P, n.provideProps[P]);
      const v = T(T({}, X(p)), X(e));
      for (const P in v)
        D(P, v[P]);
      D(xe, f);
      const y = we(fe, []);
      return f.stackIndex = y.length, y.push(f), D(fe, y), f.stack = y, () => z(t);
    }
  }), null, null);
  return w.appContext = (e == null ? void 0 : e.appContext) || w.appContext, n.fragment ? (Object.assign(o.style, {
    display: "none",
    position: "absolute",
    pointerEvents: "none"
  }), document.head.appendChild(o), N(z(Ze, {
    to: r
  }, w), o)) : (r.appendChild(o), N(w, o)), (n.immediate === void 0 || n.immediate) && f.show(), f.mounted = !0, le.add(f), f;
}
const Nr = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return we(xe, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Pe = typeof global == "object" && global && global.Object === Object && global, ke = typeof self == "object" && self && self.Object === Object && self, $ = Pe || ke || Function("return this")(), F = $.Symbol, Ae = Object.prototype, et = Ae.hasOwnProperty, tt = Ae.toString, A = F ? F.toStringTag : void 0;
function nt(e) {
  var t = et.call(e, A), n = e[A];
  try {
    e[A] = void 0;
    var r = !0;
  } catch (a) {
  }
  var o = tt.call(e);
  return r && (t ? e[A] = n : delete e[A]), o;
}
var rt = Object.prototype, ot = rt.toString;
function at(e) {
  return ot.call(e);
}
var it = "[object Null]", st = "[object Undefined]", pe = F ? F.toStringTag : void 0;
function U(e) {
  return e == null ? e === void 0 ? st : it : pe && pe in Object(e) ? nt(e) : at(e);
}
function I(e) {
  return e != null && typeof e == "object";
}
var J = Array.isArray;
function j(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Se(e) {
  return e;
}
var ut = "[object AsyncFunction]", ct = "[object Function]", ft = "[object GeneratorFunction]", lt = "[object Proxy]";
function te(e) {
  if (!j(e))
    return !1;
  var t = U(e);
  return t == ct || t == ft || t == ut || t == lt;
}
var q = $["__core-js_shared__"], de = function() {
  var e = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pt(e) {
  return !!de && de in e;
}
var dt = Function.prototype, ht = dt.toString;
function vt(e) {
  if (e != null) {
    try {
      return ht.call(e);
    } catch (t) {
    }
    try {
      return e + "";
    } catch (t) {
    }
  }
  return "";
}
var yt = /[\\^$.*+?()[\]{}|]/g, mt = /^\[object .+?Constructor\]$/, gt = Function.prototype, bt = Object.prototype, _t = gt.toString, Tt = bt.hasOwnProperty, Ct = RegExp(
  "^" + _t.call(Tt).replace(yt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jt(e) {
  if (!j(e) || pt(e))
    return !1;
  var t = te(e) ? Ct : mt;
  return t.test(vt(e));
}
function wt(e, t) {
  return e == null ? void 0 : e[t];
}
function ne(e, t) {
  var n = wt(e, t);
  return jt(n) ? n : void 0;
}
var he = Object.create, Ot = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!j(t))
      return {};
    if (he)
      return he(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function xt(e, t, n) {
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
function Pt(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var At = 800, St = 16, Et = Date.now;
function $t(e) {
  var t = 0, n = 0;
  return function() {
    var r = Et(), o = St - (r - n);
    if (n = r, o > 0) {
      if (++t >= At)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function It(e) {
  return function() {
    return e;
  };
}
var B = function() {
  try {
    var e = ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (t) {
  }
}(), Mt = B ? function(e, t) {
  return B(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: It(t),
    writable: !0
  });
} : Se, Nt = $t(Mt), Dt = 9007199254740991, Rt = /^(?:0|[1-9]\d*)$/;
function Ee(e, t) {
  var n = typeof e;
  return t = t == null ? Dt : t, !!t && (n == "number" || n != "symbol" && Rt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function re(e, t, n) {
  t == "__proto__" && B ? B(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function H(e, t) {
  return e === t || e !== e && t !== t;
}
var zt = Object.prototype, Ft = zt.hasOwnProperty;
function Bt(e, t, n) {
  var r = e[t];
  (!(Ft.call(e, t) && H(r, n)) || n === void 0 && !(t in e)) && re(e, t, n);
}
function Ut(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, u = t.length; ++a < u; ) {
    var i = t[a], s = void 0;
    s === void 0 && (s = e[i]), o ? re(n, i, s) : Bt(n, i, s);
  }
  return n;
}
var ve = Math.max;
function Ht(e, t, n) {
  return t = ve(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ve(r.length - t, 0), u = Array(a); ++o < a; )
      u[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(u), xt(e, this, i);
  };
}
function Gt(e, t) {
  return Nt(Ht(e, t, Se), e + "");
}
var Lt = 9007199254740991;
function $e(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lt;
}
function oe(e) {
  return e != null && $e(e.length) && !te(e);
}
function Kt(e, t, n) {
  if (!j(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? oe(n) && Ee(t, n.length) : r == "string" && t in n) ? H(n[t], e) : !1;
}
function Wt(e) {
  return Gt(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, u = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, u && Kt(n[0], n[1], u) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var qt = Object.prototype;
function Ie(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || qt;
  return e === n;
}
function Vt(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Zt = "[object Arguments]";
function ye(e) {
  return I(e) && U(e) == Zt;
}
var Me = Object.prototype, Xt = Me.hasOwnProperty, Jt = Me.propertyIsEnumerable, Y = ye(/* @__PURE__ */ function() {
  return arguments;
}()) ? ye : function(e) {
  return I(e) && Xt.call(e, "callee") && !Jt.call(e, "callee");
};
function Yt() {
  return !1;
}
var Ne = typeof exports == "object" && exports && !exports.nodeType && exports, me = Ne && typeof module == "object" && module && !module.nodeType && module, Qt = me && me.exports === Ne, ge = Qt ? $.Buffer : void 0, kt = ge ? ge.isBuffer : void 0, De = kt || Yt, en = "[object Arguments]", tn = "[object Array]", nn = "[object Boolean]", rn = "[object Date]", on = "[object Error]", an = "[object Function]", sn = "[object Map]", un = "[object Number]", cn = "[object Object]", fn = "[object RegExp]", ln = "[object Set]", pn = "[object String]", dn = "[object WeakMap]", hn = "[object ArrayBuffer]", vn = "[object DataView]", yn = "[object Float32Array]", mn = "[object Float64Array]", gn = "[object Int8Array]", bn = "[object Int16Array]", _n = "[object Int32Array]", Tn = "[object Uint8Array]", Cn = "[object Uint8ClampedArray]", jn = "[object Uint16Array]", wn = "[object Uint32Array]", c = {};
c[yn] = c[mn] = c[gn] = c[bn] = c[_n] = c[Tn] = c[Cn] = c[jn] = c[wn] = !0;
c[en] = c[tn] = c[hn] = c[nn] = c[vn] = c[rn] = c[on] = c[an] = c[sn] = c[un] = c[cn] = c[fn] = c[ln] = c[pn] = c[dn] = !1;
function On(e) {
  return I(e) && $e(e.length) && !!c[U(e)];
}
function xn(e) {
  return function(t) {
    return e(t);
  };
}
var Re = typeof exports == "object" && exports && !exports.nodeType && exports, S = Re && typeof module == "object" && module && !module.nodeType && module, Pn = S && S.exports === Re, V = Pn && Pe.process, be = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || V && V.binding && V.binding("util");
  } catch (t) {
  }
}(), _e = be && be.isTypedArray, ze = _e ? xn(_e) : On;
function An(e, t) {
  var n = J(e), r = !n && Y(e), o = !n && !r && De(e), a = !n && !r && !o && ze(e), u = n || r || o || a, i = u ? Vt(e.length, String) : [], s = i.length;
  for (var d in e)
    u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Ee(d, s)) || i.push(d);
  return i;
}
function Sn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function En(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var $n = Object.prototype, In = $n.hasOwnProperty;
function Mn(e) {
  if (!j(e))
    return En(e);
  var t = Ie(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !In.call(e, r)) || n.push(r);
  return n;
}
function Fe(e) {
  return oe(e) ? An(e) : Mn(e);
}
var E = ne(Object, "create");
function Nn() {
  this.__data__ = E ? E(null) : {}, this.size = 0;
}
function Dn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Rn = "__lodash_hash_undefined__", zn = Object.prototype, Fn = zn.hasOwnProperty;
function Bn(e) {
  var t = this.__data__;
  if (E) {
    var n = t[e];
    return n === Rn ? void 0 : n;
  }
  return Fn.call(t, e) ? t[e] : void 0;
}
var Un = Object.prototype, Hn = Un.hasOwnProperty;
function Gn(e) {
  var t = this.__data__;
  return E ? t[e] !== void 0 : Hn.call(t, e);
}
var Ln = "__lodash_hash_undefined__";
function Kn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = E && t === void 0 ? Ln : t, this;
}
function C(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
C.prototype.clear = Nn;
C.prototype.delete = Dn;
C.prototype.get = Bn;
C.prototype.has = Gn;
C.prototype.set = Kn;
function Wn() {
  this.__data__ = [], this.size = 0;
}
function G(e, t) {
  for (var n = e.length; n--; )
    if (H(e[n][0], t))
      return n;
  return -1;
}
var qn = Array.prototype, Vn = qn.splice;
function Zn(e) {
  var t = this.__data__, n = G(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Vn.call(t, n, 1), --this.size, !0;
}
function Xn(e) {
  var t = this.__data__, n = G(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Jn(e) {
  return G(this.__data__, e) > -1;
}
function Yn(e, t) {
  var n = this.__data__, r = G(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function _(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_.prototype.clear = Wn;
_.prototype.delete = Zn;
_.prototype.get = Xn;
_.prototype.has = Jn;
_.prototype.set = Yn;
var Be = ne($, "Map");
function Qn() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (Be || _)(),
    string: new C()
  };
}
function kn(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function L(e, t) {
  var n = e.__data__;
  return kn(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function er(e) {
  var t = L(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function tr(e) {
  return L(this, e).get(e);
}
function nr(e) {
  return L(this, e).has(e);
}
function rr(e, t) {
  var n = L(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function O(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
O.prototype.clear = Qn;
O.prototype.delete = er;
O.prototype.get = tr;
O.prototype.has = nr;
O.prototype.set = rr;
var Ue = Sn(Object.getPrototypeOf, Object), or = "[object Object]", ar = Function.prototype, ir = Object.prototype, He = ar.toString, sr = ir.hasOwnProperty, ur = He.call(Object);
function cr(e) {
  if (!I(e) || U(e) != or)
    return !1;
  var t = Ue(e);
  if (t === null)
    return !0;
  var n = sr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && He.call(n) == ur;
}
function fr() {
  this.__data__ = new _(), this.size = 0;
}
function lr(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function pr(e) {
  return this.__data__.get(e);
}
function dr(e) {
  return this.__data__.has(e);
}
var hr = 200;
function vr(e, t) {
  var n = this.__data__;
  if (n instanceof _) {
    var r = n.__data__;
    if (!Be || r.length < hr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new O(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function x(e) {
  var t = this.__data__ = new _(e);
  this.size = t.size;
}
x.prototype.clear = fr;
x.prototype.delete = lr;
x.prototype.get = pr;
x.prototype.has = dr;
x.prototype.set = vr;
var yr = typeof exports == "object" && exports && !exports.nodeType && exports;
yr && typeof module == "object" && module && !module.nodeType && module;
function mr(e, t) {
  return e.slice();
}
var Te = $.Uint8Array;
function gr(e) {
  var t = new e.constructor(e.byteLength);
  return new Te(t).set(new Te(e)), t;
}
function br(e, t) {
  var n = gr(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function _r(e) {
  return typeof e.constructor == "function" && !Ie(e) ? Ot(Ue(e)) : {};
}
function Tr(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), u = r(t), i = u.length; i--; ) {
      var s = u[++o];
      if (n(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var Cr = Tr();
function Q(e, t, n) {
  (n !== void 0 && !H(e[t], n) || n === void 0 && !(t in e)) && re(e, t, n);
}
function jr(e) {
  return I(e) && oe(e);
}
function k(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function wr(e) {
  return Ut(e, Fe(e));
}
function Or(e, t, n, r, o, a, u) {
  var i = k(e, n), s = k(t, n), d = u.get(s);
  if (d) {
    Q(e, n, d);
    return;
  }
  var l = a ? a(i, s, n + "", e, t, u) : void 0, h = l === void 0;
  if (h) {
    var m = J(s), g = !m && De(s), b = !m && !g && ze(s);
    l = s, m || g || b ? J(i) ? l = i : jr(i) ? l = Pt(i) : g ? (h = !1, l = mr(s)) : b ? (h = !1, l = br(s)) : l = [] : cr(s) || Y(s) ? (l = i, Y(i) ? l = wr(i) : (!j(i) || te(i)) && (l = _r(s))) : h = !1;
  }
  h && (u.set(s, l), o(l, s, r, a, u), u.delete(s)), Q(e, n, l);
}
function Ge(e, t, n, r, o) {
  e !== t && Cr(t, function(a, u) {
    if (o || (o = new x()), j(a))
      Or(e, t, u, n, Ge, r, o);
    else {
      var i = r ? r(k(e, u), a, u + "", e, t, o) : void 0;
      i === void 0 && (i = a), Q(e, u, i);
    }
  }, Fe);
}
var Ce = Wt(function(e, t, n) {
  Ge(e, t, n);
});
function Dr(e) {
  const {
    render: t,
    defaultConfig: n = {},
    configTransformer: r
  } = e;
  return function(o) {
    const a = Z();
    return function(i, s) {
      const d = ue(() => {
        const g = typeof o == "function" ? o() : o, b = typeof s == "function" ? s() : s, f = Ce({}, n, g, b);
        return r ? r(f) : f;
      }), l = ce(!1), h = {
        value: null
      }, m = /* @__PURE__ */ ee({
        setup: () => {
          const g = ue(() => {
            const w = typeof o == "function" ? o() : o, M = typeof s == "function" ? s() : s, p = Ce({}, n, w, M);
            return r ? r(p) : p;
          }), b = ce(), ae = {
            componentRef: b,
            onMounted: () => {
              Promise.resolve().then(() => {
                h.value.componentRef = b;
              });
            },
            config: g,
            consumer: h,
            visible: l
          };
          return () => t(i, ae);
        }
      });
      return h.value = Qe(a, je(m, null, null), W(T({}, d.value), {
        visible: l
      })), h.value;
    };
  };
}
export {
  xe as CommandComponentConsumerInjectKey,
  fe as CommandComponentStackInjectKey,
  Je as ConsumerEventBus,
  Oe as EVENT_NAME,
  Ye as PromiseWithResolvers,
  Ir as RxRender,
  le as activeConsumers,
  Sr as busName2EventName,
  Qe as commandProviderWithRender,
  Dr as createAdapter,
  Ar as eventName2BusName,
  Er as getMaxZIndex,
  $r as isNull,
  Nr as useConsumer,
  Mr as uuid
};
