var Ue = Object.defineProperty;
var He = (e, t, r) => t in e ? Ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => He(e, typeof t != "symbol" ? t + "" : t, r);
import { h as ye, defineComponent as q, createVNode as me, render as k, inject as be, provide as I, nextTick as Ge, getCurrentInstance as Le, computed as ee, ref as te } from "vue";
var _e = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(_e || {});
class Ke {
  constructor() {
    Q(this, "map", /* @__PURE__ */ new WeakMap());
  }
  getEventsMapByConsumer(t) {
    let r = this.map.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this.map.set(t, r)), r;
  }
  getEventsByConsumer(t, r) {
    const n = this.getEventsMapByConsumer(t);
    let o = n.get(r);
    return o || (o = /* @__PURE__ */ new Set(), n.set(r, o)), o;
  }
  on(t, r, n, o = {}) {
    const a = this.getEventsByConsumer(t, r);
    let u = n;
    o.once && (u = (...i) => {
      n(...i), this.off(t, r, u);
    }), a.add(u), o.callImmediatelyAfterDelay !== void 0 && setTimeout(() => {
      u();
    }, o.callImmediatelyAfterDelay || 0);
  }
  once(t, r, n, o = {}) {
    this.on(t, r, n, {
      ...o,
      once: !0
    });
  }
  emit(t, r, ...n) {
    this.getEventsByConsumer(t, r).forEach((a) => a(...n));
  }
  off(t, r, n) {
    this.getEventsByConsumer(t, r).delete(n);
  }
}
const Cn = (e = "") => e.slice(2).toLowerCase(), jn = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, We = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((n, o) => {
    e = n, t = o;
  }), resolve: e, reject: t };
}, wn = (e) => {
  var n;
  const t = ((n = e.parentElement) == null ? void 0 : n.children) || [];
  let r = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > r && (r = a);
    }
  }), +r;
}, On = (e) => e == null, xn = (e) => typeof e != "function" ? e : ye(q({ render: () => e() })), Pn = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), Te = Symbol("CommandComponentConsumerInjectKey"), re = Symbol("CommandComponentStackInjectKey"), M = new Ke(), ne = /* @__PURE__ */ new Set(), Ce = (e) => ({
  ...e.parent ? Ce(e.parent) : {},
  ...e.provides
});
function qe(e, t, r) {
  var $;
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || (($ = e.vnode.el) == null ? void 0 : $.parentElement) || document.body, o = document.createElement("div");
  o.className = r.customClassName || "command-component-container", n.appendChild(o);
  const a = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    r.visible.value = !1;
  }, u = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    r.visible.value = !0;
  }, i = () => {
    Ge(() => {
      k(null, o), o.remove();
    });
  }, {
    promise: s,
    resolve: d,
    reject: l
  } = We(), v = 3e3, b = (p = !1) => {
    p ? (a(), f.once(_e.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: v
    })) : (ne.delete(f), f.stack.splice(f.stackIndex).forEach((g) => g.destroy(!0)), f.destroyed = !0);
  }, y = (p) => {
    d(p), b();
  }, m = (p) => {
    l(p), b();
  }, f = {
    meta: r.meta || {},
    promise: s,
    resolve: d,
    reject: l,
    destroyWithResolve: y,
    destroyWithReject: m,
    hide: a,
    show: u,
    destroy: b,
    container: o,
    visible: r.visible,
    on: (p, h, g = {}) => M.on(f, p, h, g),
    once: (p, h, g = {}) => M.on(f, p, h, g),
    emit: (p, ...h) => M.emit(f, p, ...h),
    off: (p, h) => M.off(f, p, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, x = me(/* @__PURE__ */ q({
    setup() {
      for (const g in r.provideProps)
        I(g, r.provideProps[g]);
      const p = {
        // ...vnode.appContext!.provides,
        ...Ce(e)
      };
      for (const g in p)
        I(g, p[g]);
      I(Te, f);
      const h = be(re, []);
      return f.stackIndex = h.length, h.push(f), I(re, h), f.stack = h, () => ye(t);
    }
  }), null, null);
  return x.appContext = (e == null ? void 0 : e.appContext) || x.appContext, k(x, o), f.mounted = !0, ne.add(f), f;
}
const An = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return be(Te, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var je = typeof global == "object" && global && global.Object === Object && global, Ve = typeof self == "object" && self && self.Object === Object && self, j = je || Ve || Function("return this")(), N = j.Symbol, we = Object.prototype, Ze = we.hasOwnProperty, Xe = we.toString, P = N ? N.toStringTag : void 0;
function Je(e) {
  var t = Ze.call(e, P), r = e[P];
  try {
    e[P] = void 0;
    var n = !0;
  } catch {
  }
  var o = Xe.call(e);
  return n && (t ? e[P] = r : delete e[P]), o;
}
var Ye = Object.prototype, Qe = Ye.toString;
function ke(e) {
  return Qe.call(e);
}
var et = "[object Null]", tt = "[object Undefined]", oe = N ? N.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? tt : et : oe && oe in Object(e) ? Je(e) : ke(e);
}
function E(e) {
  return e != null && typeof e == "object";
}
var G = Array.isArray;
function C(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Oe(e) {
  return e;
}
var rt = "[object AsyncFunction]", nt = "[object Function]", ot = "[object GeneratorFunction]", at = "[object Proxy]";
function V(e) {
  if (!C(e))
    return !1;
  var t = R(e);
  return t == nt || t == ot || t == rt || t == at;
}
var U = j["__core-js_shared__"], ae = function() {
  var e = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function it(e) {
  return !!ae && ae in e;
}
var st = Function.prototype, ut = st.toString;
function ct(e) {
  if (e != null) {
    try {
      return ut.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ft = /[\\^$.*+?()[\]{}|]/g, lt = /^\[object .+?Constructor\]$/, pt = Function.prototype, dt = Object.prototype, ht = pt.toString, vt = dt.hasOwnProperty, gt = RegExp(
  "^" + ht.call(vt).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yt(e) {
  if (!C(e) || it(e))
    return !1;
  var t = V(e) ? gt : lt;
  return t.test(ct(e));
}
function mt(e, t) {
  return e == null ? void 0 : e[t];
}
function Z(e, t) {
  var r = mt(e, t);
  return yt(r) ? r : void 0;
}
var ie = Object.create, bt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!C(t))
      return {};
    if (ie)
      return ie(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function _t(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function Tt(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Ct = 800, jt = 16, wt = Date.now;
function Ot(e) {
  var t = 0, r = 0;
  return function() {
    var n = wt(), o = jt - (n - r);
    if (r = n, o > 0) {
      if (++t >= Ct)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function xt(e) {
  return function() {
    return e;
  };
}
var D = function() {
  try {
    var e = Z(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Pt = D ? function(e, t) {
  return D(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: xt(t),
    writable: !0
  });
} : Oe, At = Ot(Pt), St = 9007199254740991, Et = /^(?:0|[1-9]\d*)$/;
function xe(e, t) {
  var r = typeof e;
  return t = t ?? St, !!t && (r == "number" || r != "symbol" && Et.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function X(e, t, r) {
  t == "__proto__" && D ? D(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function z(e, t) {
  return e === t || e !== e && t !== t;
}
var $t = Object.prototype, It = $t.hasOwnProperty;
function Mt(e, t, r) {
  var n = e[t];
  (!(It.call(e, t) && z(n, r)) || r === void 0 && !(t in e)) && X(e, t, r);
}
function Nt(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, u = t.length; ++a < u; ) {
    var i = t[a], s = void 0;
    s === void 0 && (s = e[i]), o ? X(r, i, s) : Mt(r, i, s);
  }
  return r;
}
var se = Math.max;
function Dt(e, t, r) {
  return t = se(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = se(n.length - t, 0), u = Array(a); ++o < a; )
      u[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(u), _t(e, this, i);
  };
}
function Rt(e, t) {
  return At(Dt(e, t, Oe), e + "");
}
var zt = 9007199254740991;
function Pe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zt;
}
function J(e) {
  return e != null && Pe(e.length) && !V(e);
}
function Ft(e, t, r) {
  if (!C(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? J(r) && xe(t, r.length) : n == "string" && t in r) ? z(r[t], e) : !1;
}
function Bt(e) {
  return Rt(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, u = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, u && Ft(r[0], r[1], u) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Ut = Object.prototype;
function Ae(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ut;
  return e === r;
}
function Ht(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Gt = "[object Arguments]";
function ue(e) {
  return E(e) && R(e) == Gt;
}
var Se = Object.prototype, Lt = Se.hasOwnProperty, Kt = Se.propertyIsEnumerable, L = ue(/* @__PURE__ */ function() {
  return arguments;
}()) ? ue : function(e) {
  return E(e) && Lt.call(e, "callee") && !Kt.call(e, "callee");
};
function Wt() {
  return !1;
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, ce = Ee && typeof module == "object" && module && !module.nodeType && module, qt = ce && ce.exports === Ee, fe = qt ? j.Buffer : void 0, Vt = fe ? fe.isBuffer : void 0, $e = Vt || Wt, Zt = "[object Arguments]", Xt = "[object Array]", Jt = "[object Boolean]", Yt = "[object Date]", Qt = "[object Error]", kt = "[object Function]", er = "[object Map]", tr = "[object Number]", rr = "[object Object]", nr = "[object RegExp]", or = "[object Set]", ar = "[object String]", ir = "[object WeakMap]", sr = "[object ArrayBuffer]", ur = "[object DataView]", cr = "[object Float32Array]", fr = "[object Float64Array]", lr = "[object Int8Array]", pr = "[object Int16Array]", dr = "[object Int32Array]", hr = "[object Uint8Array]", vr = "[object Uint8ClampedArray]", gr = "[object Uint16Array]", yr = "[object Uint32Array]", c = {};
c[cr] = c[fr] = c[lr] = c[pr] = c[dr] = c[hr] = c[vr] = c[gr] = c[yr] = !0;
c[Zt] = c[Xt] = c[sr] = c[Jt] = c[ur] = c[Yt] = c[Qt] = c[kt] = c[er] = c[tr] = c[rr] = c[nr] = c[or] = c[ar] = c[ir] = !1;
function mr(e) {
  return E(e) && Pe(e.length) && !!c[R(e)];
}
function br(e) {
  return function(t) {
    return e(t);
  };
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, A = Ie && typeof module == "object" && module && !module.nodeType && module, _r = A && A.exports === Ie, H = _r && je.process, le = function() {
  try {
    var e = A && A.require && A.require("util").types;
    return e || H && H.binding && H.binding("util");
  } catch {
  }
}(), pe = le && le.isTypedArray, Me = pe ? br(pe) : mr;
function Tr(e, t) {
  var r = G(e), n = !r && L(e), o = !r && !n && $e(e), a = !r && !n && !o && Me(e), u = r || n || o || a, i = u ? Ht(e.length, String) : [], s = i.length;
  for (var d in e)
    u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    xe(d, s)) || i.push(d);
  return i;
}
function Cr(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function jr(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var wr = Object.prototype, Or = wr.hasOwnProperty;
function xr(e) {
  if (!C(e))
    return jr(e);
  var t = Ae(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Or.call(e, n)) || r.push(n);
  return r;
}
function Ne(e) {
  return J(e) ? Tr(e) : xr(e);
}
var S = Z(Object, "create");
function Pr() {
  this.__data__ = S ? S(null) : {}, this.size = 0;
}
function Ar(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Sr = "__lodash_hash_undefined__", Er = Object.prototype, $r = Er.hasOwnProperty;
function Ir(e) {
  var t = this.__data__;
  if (S) {
    var r = t[e];
    return r === Sr ? void 0 : r;
  }
  return $r.call(t, e) ? t[e] : void 0;
}
var Mr = Object.prototype, Nr = Mr.hasOwnProperty;
function Dr(e) {
  var t = this.__data__;
  return S ? t[e] !== void 0 : Nr.call(t, e);
}
var Rr = "__lodash_hash_undefined__";
function zr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = S && t === void 0 ? Rr : t, this;
}
function T(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = Pr;
T.prototype.delete = Ar;
T.prototype.get = Ir;
T.prototype.has = Dr;
T.prototype.set = zr;
function Fr() {
  this.__data__ = [], this.size = 0;
}
function F(e, t) {
  for (var r = e.length; r--; )
    if (z(e[r][0], t))
      return r;
  return -1;
}
var Br = Array.prototype, Ur = Br.splice;
function Hr(e) {
  var t = this.__data__, r = F(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ur.call(t, r, 1), --this.size, !0;
}
function Gr(e) {
  var t = this.__data__, r = F(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Lr(e) {
  return F(this.__data__, e) > -1;
}
function Kr(e, t) {
  var r = this.__data__, n = F(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = Fr;
_.prototype.delete = Hr;
_.prototype.get = Gr;
_.prototype.has = Lr;
_.prototype.set = Kr;
var De = Z(j, "Map");
function Wr() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (De || _)(),
    string: new T()
  };
}
function qr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function B(e, t) {
  var r = e.__data__;
  return qr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Vr(e) {
  var t = B(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Zr(e) {
  return B(this, e).get(e);
}
function Xr(e) {
  return B(this, e).has(e);
}
function Jr(e, t) {
  var r = B(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function w(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
w.prototype.clear = Wr;
w.prototype.delete = Vr;
w.prototype.get = Zr;
w.prototype.has = Xr;
w.prototype.set = Jr;
var Re = Cr(Object.getPrototypeOf, Object), Yr = "[object Object]", Qr = Function.prototype, kr = Object.prototype, ze = Qr.toString, en = kr.hasOwnProperty, tn = ze.call(Object);
function rn(e) {
  if (!E(e) || R(e) != Yr)
    return !1;
  var t = Re(e);
  if (t === null)
    return !0;
  var r = en.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ze.call(r) == tn;
}
function nn() {
  this.__data__ = new _(), this.size = 0;
}
function on(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function an(e) {
  return this.__data__.get(e);
}
function sn(e) {
  return this.__data__.has(e);
}
var un = 200;
function cn(e, t) {
  var r = this.__data__;
  if (r instanceof _) {
    var n = r.__data__;
    if (!De || n.length < un - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new w(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function O(e) {
  var t = this.__data__ = new _(e);
  this.size = t.size;
}
O.prototype.clear = nn;
O.prototype.delete = on;
O.prototype.get = an;
O.prototype.has = sn;
O.prototype.set = cn;
var Fe = typeof exports == "object" && exports && !exports.nodeType && exports, de = Fe && typeof module == "object" && module && !module.nodeType && module, fn = de && de.exports === Fe, he = fn ? j.Buffer : void 0;
he && he.allocUnsafe;
function ln(e, t) {
  return e.slice();
}
var ve = j.Uint8Array;
function pn(e) {
  var t = new e.constructor(e.byteLength);
  return new ve(t).set(new ve(e)), t;
}
function dn(e, t) {
  var r = pn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function hn(e) {
  return typeof e.constructor == "function" && !Ae(e) ? bt(Re(e)) : {};
}
function vn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), u = n(t), i = u.length; i--; ) {
      var s = u[++o];
      if (r(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var gn = vn();
function K(e, t, r) {
  (r !== void 0 && !z(e[t], r) || r === void 0 && !(t in e)) && X(e, t, r);
}
function yn(e) {
  return E(e) && J(e);
}
function W(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function mn(e) {
  return Nt(e, Ne(e));
}
function bn(e, t, r, n, o, a, u) {
  var i = W(e, r), s = W(t, r), d = u.get(s);
  if (d) {
    K(e, r, d);
    return;
  }
  var l = a ? a(i, s, r + "", e, t, u) : void 0, v = l === void 0;
  if (v) {
    var b = G(s), y = !b && $e(s), m = !b && !y && Me(s);
    l = s, b || y || m ? G(i) ? l = i : yn(i) ? l = Tt(i) : y ? (v = !1, l = ln(s)) : m ? (v = !1, l = dn(s)) : l = [] : rn(s) || L(s) ? (l = i, L(i) ? l = mn(i) : (!C(i) || V(i)) && (l = hn(s))) : v = !1;
  }
  v && (u.set(s, l), o(l, s, n, a, u), u.delete(s)), K(e, r, l);
}
function Be(e, t, r, n, o) {
  e !== t && gn(t, function(a, u) {
    if (o || (o = new O()), C(a))
      bn(e, t, u, r, Be, n, o);
    else {
      var i = n ? n(W(e, u), a, u + "", e, t, o) : void 0;
      i === void 0 && (i = a), K(e, u, i);
    }
  }, Ne);
}
var ge = Bt(function(e, t, r) {
  Be(e, t, r);
});
function Sn(e) {
  const {
    render: t,
    defaultConfig: r = {},
    configTransformer: n
  } = e;
  return function(o) {
    const a = Le();
    return function(i, s) {
      const d = ee(() => {
        const y = typeof o == "function" ? o() : o, m = typeof s == "function" ? s() : s;
        console.log(y, m);
        const f = ge({}, r, y, m);
        return n ? n(f) : f;
      }), l = te(!0), v = {
        value: null
      }, b = /* @__PURE__ */ q({
        setup: () => {
          const y = ee(() => {
            const x = typeof o == "function" ? o() : o, $ = typeof s == "function" ? s() : s, p = ge({}, r, x, $);
            return n ? n(p) : p;
          }), m = te(), Y = {
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
          return () => t(i, Y);
        }
      });
      return v.value = qe(a, me(b, null, null), {
        ...d.value,
        visible: l
      }), v.value;
    };
  };
}
export {
  Te as CommandComponentConsumerInjectKey,
  re as CommandComponentStackInjectKey,
  Ke as ConsumerEventBus,
  _e as EVENT_NAME,
  We as PromiseWithResolvers,
  xn as RxRender,
  ne as activeConsumers,
  jn as busName2EventName,
  qe as commandProviderWithRender,
  Sn as createAdapter,
  Cn as eventName2BusName,
  wn as getMaxZIndex,
  On as isNull,
  An as useConsumer,
  Pn as uuid
};
