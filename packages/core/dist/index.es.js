var Ve = Object.defineProperty, We = Object.defineProperties;
var qe = Object.getOwnPropertyDescriptors;
var se = Object.getOwnPropertySymbols;
var Ze = Object.prototype.hasOwnProperty, Xe = Object.prototype.propertyIsEnumerable;
var V = (e, t, r) => t in e ? Ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, T = (e, t) => {
  for (var r in t || (t = {}))
    Ze.call(t, r) && V(e, r, t[r]);
  if (se)
    for (var r of se(t))
      Xe.call(t, r) && V(e, r, t[r]);
  return e;
}, W = (e, t) => We(e, qe(t));
var ue = (e, t, r) => V(e, typeof t != "symbol" ? t + "" : t, r);
import { h as F, defineComponent as te, version as Je, render as D, getCurrentInstance as X, createVNode as we, Teleport as Ye, inject as Oe, provide as R, nextTick as Qe, computed as ce, ref as fe } from "vue";
var xe = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(xe || {});
class ke {
  constructor() {
    ue(this, "map", /* @__PURE__ */ new WeakMap());
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
    this.on(t, r, n, W(T({}, o), {
      once: !0
    }));
  }
  emit(t, r, ...n) {
    this.getEventsByConsumer(t, r).forEach((a) => a(...n));
  }
  off(t, r, n) {
    this.getEventsByConsumer(t, r).delete(n);
  }
}
const $n = (e = "") => e.slice(2).toLowerCase(), In = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, et = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((n, o) => {
    e = n, t = o;
  }), resolve: e, reject: t };
}, Mn = (e) => {
  var n;
  const t = ((n = e.parentElement) == null ? void 0 : n.children) || [];
  let r = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > r && (r = a);
    }
  }), +r;
}, Nn = (e) => e == null, Dn = (e) => typeof e != "function" ? e : F(te({ render: () => e() })), Rn = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), Pe = () => parseInt(Je.split(".")[0]) >= 3, Ae = Symbol("CommandComponentConsumerInjectKey"), le = Symbol("CommandComponentStackInjectKey"), z = new ke(), pe = /* @__PURE__ */ new Set(), J = (e) => T(T({}, e.parent ? J(e.parent) : {}), e.provides);
function tt(e, t, r) {
  var M;
  if (!Pe())
    throw new Error("Vue 3.0 or higher is required");
  e || D(F({
    setup() {
      return e = X(), () => null;
    }
  }), document.body);
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || ((M = e.vnode.el) == null ? void 0 : M.parentElement) || document.body, o = document.createElement("div");
  o.className = r.customClassName || "command-component-container";
  const a = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    r.visible.value = !1;
  }, u = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    r.visible.value = !0;
  }, i = () => {
    Qe(() => {
      D(null, o), o.remove();
    });
  }, {
    promise: s,
    resolve: d,
    reject: l
  } = et(), h = 3e3, v = (p = !1) => {
    p ? (a(), f.once(xe.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: h
    })) : (pe.delete(f), f.stack.splice(f.stackIndex).forEach((_) => _.destroy(!0)), f.destroyed = !0);
  }, m = (p) => {
    d(p), v();
  }, g = (p) => {
    l(p), v();
  }, f = {
    meta: r.meta || {},
    promise: s,
    resolve: d,
    reject: l,
    destroyWithResolve: m,
    destroyWithReject: g,
    hide: a,
    show: u,
    destroy: v,
    container: o,
    visible: r.visible,
    on: (p, y, _ = {}) => z.on(f, p, y, _),
    once: (p, y, _ = {}) => z.on(f, p, y, _),
    emit: (p, ...y) => z.emit(f, p, ...y),
    off: (p, y) => z.off(f, p, y),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, w = we(/* @__PURE__ */ te({
    setup() {
      const p = X();
      for (const P in r.provideProps)
        R(P, r.provideProps[P]);
      const y = T(T({}, J(p)), J(e)), _ = [...Object.getOwnPropertySymbols(y), ...Object.keys(y)];
      for (const P of _)
        R(P, y[P]);
      R(Ae, f);
      const N = Oe(le, []);
      return f.stackIndex = N.length, N.push(f), R(le, N), f.stack = N, () => F(t);
    }
  }), null, null);
  return w.appContext = (e == null ? void 0 : e.appContext) || w.appContext, r.fragment ? (Object.assign(o.style, {
    display: "none",
    position: "absolute",
    pointerEvents: "none"
  }), document.head.appendChild(o), D(F(Ye, {
    to: n
  }, w), o)) : (n.appendChild(o), D(w, o)), (r.immediate === void 0 || r.immediate) && f.show(), f.mounted = !0, pe.add(f), f;
}
const zn = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return Oe(Ae, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Se = typeof global == "object" && global && global.Object === Object && global, rt = typeof self == "object" && self && self.Object === Object && self, $ = Se || rt || Function("return this")(), B = $.Symbol, Ee = Object.prototype, nt = Ee.hasOwnProperty, ot = Ee.toString, A = B ? B.toStringTag : void 0;
function at(e) {
  var t = nt.call(e, A), r = e[A];
  try {
    e[A] = void 0;
    var n = !0;
  } catch (a) {
  }
  var o = ot.call(e);
  return n && (t ? e[A] = r : delete e[A]), o;
}
var it = Object.prototype, st = it.toString;
function ut(e) {
  return st.call(e);
}
var ct = "[object Null]", ft = "[object Undefined]", de = B ? B.toStringTag : void 0;
function H(e) {
  return e == null ? e === void 0 ? ft : ct : de && de in Object(e) ? at(e) : ut(e);
}
function I(e) {
  return e != null && typeof e == "object";
}
var Y = Array.isArray;
function j(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function $e(e) {
  return e;
}
var lt = "[object AsyncFunction]", pt = "[object Function]", dt = "[object GeneratorFunction]", ht = "[object Proxy]";
function re(e) {
  if (!j(e))
    return !1;
  var t = H(e);
  return t == pt || t == dt || t == lt || t == ht;
}
var q = $["__core-js_shared__"], he = function() {
  var e = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yt(e) {
  return !!he && he in e;
}
var vt = Function.prototype, mt = vt.toString;
function gt(e) {
  if (e != null) {
    try {
      return mt.call(e);
    } catch (t) {
    }
    try {
      return e + "";
    } catch (t) {
    }
  }
  return "";
}
var bt = /[\\^$.*+?()[\]{}|]/g, _t = /^\[object .+?Constructor\]$/, Tt = Function.prototype, Ct = Object.prototype, jt = Tt.toString, wt = Ct.hasOwnProperty, Ot = RegExp(
  "^" + jt.call(wt).replace(bt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xt(e) {
  if (!j(e) || yt(e))
    return !1;
  var t = re(e) ? Ot : _t;
  return t.test(gt(e));
}
function Pt(e, t) {
  return e == null ? void 0 : e[t];
}
function ne(e, t) {
  var r = Pt(e, t);
  return xt(r) ? r : void 0;
}
var ye = Object.create, At = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!j(t))
      return {};
    if (ye)
      return ye(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function St(e, t, r) {
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
function Et(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var $t = 800, It = 16, Mt = Date.now;
function Nt(e) {
  var t = 0, r = 0;
  return function() {
    var n = Mt(), o = It - (n - r);
    if (r = n, o > 0) {
      if (++t >= $t)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Dt(e) {
  return function() {
    return e;
  };
}
var U = function() {
  try {
    var e = ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (t) {
  }
}(), Rt = U ? function(e, t) {
  return U(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Dt(t),
    writable: !0
  });
} : $e, zt = Nt(Rt), Ft = 9007199254740991, Bt = /^(?:0|[1-9]\d*)$/;
function Ie(e, t) {
  var r = typeof e;
  return t = t == null ? Ft : t, !!t && (r == "number" || r != "symbol" && Bt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function oe(e, t, r) {
  t == "__proto__" && U ? U(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function G(e, t) {
  return e === t || e !== e && t !== t;
}
var Ut = Object.prototype, Ht = Ut.hasOwnProperty;
function Gt(e, t, r) {
  var n = e[t];
  (!(Ht.call(e, t) && G(n, r)) || r === void 0 && !(t in e)) && oe(e, t, r);
}
function Lt(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, u = t.length; ++a < u; ) {
    var i = t[a], s = void 0;
    s === void 0 && (s = e[i]), o ? oe(r, i, s) : Gt(r, i, s);
  }
  return r;
}
var ve = Math.max;
function Kt(e, t, r) {
  return t = ve(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = ve(n.length - t, 0), u = Array(a); ++o < a; )
      u[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(u), St(e, this, i);
  };
}
function Vt(e, t) {
  return zt(Kt(e, t, $e), e + "");
}
var Wt = 9007199254740991;
function Me(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wt;
}
function ae(e) {
  return e != null && Me(e.length) && !re(e);
}
function qt(e, t, r) {
  if (!j(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? ae(r) && Ie(t, r.length) : n == "string" && t in r) ? G(r[t], e) : !1;
}
function Zt(e) {
  return Vt(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, u = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, u && qt(r[0], r[1], u) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Xt = Object.prototype;
function Ne(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Xt;
  return e === r;
}
function Jt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Yt = "[object Arguments]";
function me(e) {
  return I(e) && H(e) == Yt;
}
var De = Object.prototype, Qt = De.hasOwnProperty, kt = De.propertyIsEnumerable, Q = me(/* @__PURE__ */ function() {
  return arguments;
}()) ? me : function(e) {
  return I(e) && Qt.call(e, "callee") && !kt.call(e, "callee");
};
function er() {
  return !1;
}
var Re = typeof exports == "object" && exports && !exports.nodeType && exports, ge = Re && typeof module == "object" && module && !module.nodeType && module, tr = ge && ge.exports === Re, be = tr ? $.Buffer : void 0, rr = be ? be.isBuffer : void 0, ze = rr || er, nr = "[object Arguments]", or = "[object Array]", ar = "[object Boolean]", ir = "[object Date]", sr = "[object Error]", ur = "[object Function]", cr = "[object Map]", fr = "[object Number]", lr = "[object Object]", pr = "[object RegExp]", dr = "[object Set]", hr = "[object String]", yr = "[object WeakMap]", vr = "[object ArrayBuffer]", mr = "[object DataView]", gr = "[object Float32Array]", br = "[object Float64Array]", _r = "[object Int8Array]", Tr = "[object Int16Array]", Cr = "[object Int32Array]", jr = "[object Uint8Array]", wr = "[object Uint8ClampedArray]", Or = "[object Uint16Array]", xr = "[object Uint32Array]", c = {};
c[gr] = c[br] = c[_r] = c[Tr] = c[Cr] = c[jr] = c[wr] = c[Or] = c[xr] = !0;
c[nr] = c[or] = c[vr] = c[ar] = c[mr] = c[ir] = c[sr] = c[ur] = c[cr] = c[fr] = c[lr] = c[pr] = c[dr] = c[hr] = c[yr] = !1;
function Pr(e) {
  return I(e) && Me(e.length) && !!c[H(e)];
}
function Ar(e) {
  return function(t) {
    return e(t);
  };
}
var Fe = typeof exports == "object" && exports && !exports.nodeType && exports, S = Fe && typeof module == "object" && module && !module.nodeType && module, Sr = S && S.exports === Fe, Z = Sr && Se.process, _e = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || Z && Z.binding && Z.binding("util");
  } catch (t) {
  }
}(), Te = _e && _e.isTypedArray, Be = Te ? Ar(Te) : Pr;
function Er(e, t) {
  var r = Y(e), n = !r && Q(e), o = !r && !n && ze(e), a = !r && !n && !o && Be(e), u = r || n || o || a, i = u ? Jt(e.length, String) : [], s = i.length;
  for (var d in e)
    u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Ie(d, s)) || i.push(d);
  return i;
}
function $r(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function Ir(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Mr = Object.prototype, Nr = Mr.hasOwnProperty;
function Dr(e) {
  if (!j(e))
    return Ir(e);
  var t = Ne(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Nr.call(e, n)) || r.push(n);
  return r;
}
function Ue(e) {
  return ae(e) ? Er(e) : Dr(e);
}
var E = ne(Object, "create");
function Rr() {
  this.__data__ = E ? E(null) : {}, this.size = 0;
}
function zr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Fr = "__lodash_hash_undefined__", Br = Object.prototype, Ur = Br.hasOwnProperty;
function Hr(e) {
  var t = this.__data__;
  if (E) {
    var r = t[e];
    return r === Fr ? void 0 : r;
  }
  return Ur.call(t, e) ? t[e] : void 0;
}
var Gr = Object.prototype, Lr = Gr.hasOwnProperty;
function Kr(e) {
  var t = this.__data__;
  return E ? t[e] !== void 0 : Lr.call(t, e);
}
var Vr = "__lodash_hash_undefined__";
function Wr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = E && t === void 0 ? Vr : t, this;
}
function C(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
C.prototype.clear = Rr;
C.prototype.delete = zr;
C.prototype.get = Hr;
C.prototype.has = Kr;
C.prototype.set = Wr;
function qr() {
  this.__data__ = [], this.size = 0;
}
function L(e, t) {
  for (var r = e.length; r--; )
    if (G(e[r][0], t))
      return r;
  return -1;
}
var Zr = Array.prototype, Xr = Zr.splice;
function Jr(e) {
  var t = this.__data__, r = L(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Xr.call(t, r, 1), --this.size, !0;
}
function Yr(e) {
  var t = this.__data__, r = L(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Qr(e) {
  return L(this.__data__, e) > -1;
}
function kr(e, t) {
  var r = this.__data__, n = L(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
b.prototype.clear = qr;
b.prototype.delete = Jr;
b.prototype.get = Yr;
b.prototype.has = Qr;
b.prototype.set = kr;
var He = ne($, "Map");
function en() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (He || b)(),
    string: new C()
  };
}
function tn(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function K(e, t) {
  var r = e.__data__;
  return tn(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function rn(e) {
  var t = K(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function nn(e) {
  return K(this, e).get(e);
}
function on(e) {
  return K(this, e).has(e);
}
function an(e, t) {
  var r = K(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function O(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
O.prototype.clear = en;
O.prototype.delete = rn;
O.prototype.get = nn;
O.prototype.has = on;
O.prototype.set = an;
var Ge = $r(Object.getPrototypeOf, Object), sn = "[object Object]", un = Function.prototype, cn = Object.prototype, Le = un.toString, fn = cn.hasOwnProperty, ln = Le.call(Object);
function pn(e) {
  if (!I(e) || H(e) != sn)
    return !1;
  var t = Ge(e);
  if (t === null)
    return !0;
  var r = fn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Le.call(r) == ln;
}
function dn() {
  this.__data__ = new b(), this.size = 0;
}
function hn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function yn(e) {
  return this.__data__.get(e);
}
function vn(e) {
  return this.__data__.has(e);
}
var mn = 200;
function gn(e, t) {
  var r = this.__data__;
  if (r instanceof b) {
    var n = r.__data__;
    if (!He || n.length < mn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new O(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function x(e) {
  var t = this.__data__ = new b(e);
  this.size = t.size;
}
x.prototype.clear = dn;
x.prototype.delete = hn;
x.prototype.get = yn;
x.prototype.has = vn;
x.prototype.set = gn;
var bn = typeof exports == "object" && exports && !exports.nodeType && exports;
bn && typeof module == "object" && module && !module.nodeType && module;
function _n(e, t) {
  return e.slice();
}
var Ce = $.Uint8Array;
function Tn(e) {
  var t = new e.constructor(e.byteLength);
  return new Ce(t).set(new Ce(e)), t;
}
function Cn(e, t) {
  var r = Tn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function jn(e) {
  return typeof e.constructor == "function" && !Ne(e) ? At(Ge(e)) : {};
}
function wn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), u = n(t), i = u.length; i--; ) {
      var s = u[++o];
      if (r(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var On = wn();
function k(e, t, r) {
  (r !== void 0 && !G(e[t], r) || r === void 0 && !(t in e)) && oe(e, t, r);
}
function xn(e) {
  return I(e) && ae(e);
}
function ee(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Pn(e) {
  return Lt(e, Ue(e));
}
function An(e, t, r, n, o, a, u) {
  var i = ee(e, r), s = ee(t, r), d = u.get(s);
  if (d) {
    k(e, r, d);
    return;
  }
  var l = a ? a(i, s, r + "", e, t, u) : void 0, h = l === void 0;
  if (h) {
    var v = Y(s), m = !v && ze(s), g = !v && !m && Be(s);
    l = s, v || m || g ? Y(i) ? l = i : xn(i) ? l = Et(i) : m ? (h = !1, l = _n(s)) : g ? (h = !1, l = Cn(s)) : l = [] : pn(s) || Q(s) ? (l = i, Q(i) ? l = Pn(i) : (!j(i) || re(i)) && (l = jn(s))) : h = !1;
  }
  h && (u.set(s, l), o(l, s, n, a, u), u.delete(s)), k(e, r, l);
}
function Ke(e, t, r, n, o) {
  e !== t && On(t, function(a, u) {
    if (o || (o = new x()), j(a))
      An(e, t, u, r, Ke, n, o);
    else {
      var i = n ? n(ee(e, u), a, u + "", e, t, o) : void 0;
      i === void 0 && (i = a), k(e, u, i);
    }
  }, Ue);
}
var je = Zt(function(e, t, r) {
  Ke(e, t, r);
});
function Fn(e) {
  if (!Pe())
    throw new Error("Vue 3.0 or higher is required");
  const {
    render: t,
    defaultConfig: r = {},
    configTransformer: n
  } = e;
  return function(o) {
    const a = X();
    return function(i, s) {
      const d = ce(() => {
        const m = typeof o == "function" ? o() : o, g = typeof s == "function" ? s() : s, f = je({}, r, m, g);
        return n ? n(f) : f;
      }), l = fe(!1), h = {
        value: null
      }, v = /* @__PURE__ */ te({
        setup: () => {
          const m = ce(() => {
            const w = typeof o == "function" ? o() : o, M = typeof s == "function" ? s() : s, p = je({}, r, w, M);
            return n ? n(p) : p;
          }), g = fe(), ie = {
            componentRef: g,
            onMounted: () => {
              Promise.resolve().then(() => {
                h.value.componentRef = g;
              });
            },
            config: m,
            consumer: h,
            visible: l
          };
          return () => t(i, ie);
        }
      });
      return h.value = tt(a, we(v, null, null), W(T({}, d.value), {
        visible: l
      })), h.value;
    };
  };
}
export {
  Ae as CommandComponentConsumerInjectKey,
  le as CommandComponentStackInjectKey,
  ke as ConsumerEventBus,
  xe as EVENT_NAME,
  et as PromiseWithResolvers,
  Dn as RxRender,
  pe as activeConsumers,
  In as busName2EventName,
  tt as commandProviderWithRender,
  Fn as createAdapter,
  $n as eventName2BusName,
  Mn as getMaxZIndex,
  Nn as isNull,
  Pe as isVue3OrHigher,
  zn as useConsumer,
  Rn as uuid
};
