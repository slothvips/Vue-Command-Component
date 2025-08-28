var Ke = Object.defineProperty, Ve = Object.defineProperties;
var We = Object.getOwnPropertyDescriptors;
var ie = Object.getOwnPropertySymbols;
var qe = Object.prototype.hasOwnProperty, Ze = Object.prototype.propertyIsEnumerable;
var K = (e, t, r) => t in e ? Ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, T = (e, t) => {
  for (var r in t || (t = {}))
    qe.call(t, r) && K(e, r, t[r]);
  if (ie)
    for (var r of ie(t))
      Ze.call(t, r) && K(e, r, t[r]);
  return e;
}, V = (e, t) => Ve(e, We(t));
var se = (e, t, r) => K(e, typeof t != "symbol" ? t + "" : t, r);
import { h as z, defineComponent as ee, version as Xe, render as N, getCurrentInstance as Z, createVNode as we, Teleport as Je, inject as je, provide as D, nextTick as Ye, computed as ue, ref as ce } from "vue";
var Oe = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(Oe || {});
class Qe {
  constructor() {
    se(this, "map", /* @__PURE__ */ new WeakMap());
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
    this.on(t, r, n, V(T({}, o), {
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
const En = (e = "") => e.slice(2).toLowerCase(), $n = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, ke = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((n, o) => {
    e = n, t = o;
  }), resolve: e, reject: t };
}, In = (e) => {
  var n;
  const t = ((n = e.parentElement) == null ? void 0 : n.children) || [];
  let r = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > r && (r = a);
    }
  }), +r;
}, Mn = (e) => e == null, Nn = (e) => typeof e != "function" ? e : z(ee({ render: () => e() })), Dn = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), xe = () => parseInt(Xe.split(".")[0]) >= 3, Pe = Symbol("CommandComponentConsumerInjectKey"), fe = Symbol("CommandComponentStackInjectKey"), R = new Qe(), le = /* @__PURE__ */ new Set(), X = (e) => T(T({}, e.parent ? X(e.parent) : {}), e.provides);
function et(e, t, r) {
  var M;
  if (!xe())
    throw new Error("Vue 3.0 or higher is required");
  e || N(z({
    setup() {
      return e = Z(), () => null;
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
    Ye(() => {
      N(null, o), o.remove();
    });
  }, {
    promise: s,
    resolve: d,
    reject: l
  } = ke(), h = 3e3, y = (p = !1) => {
    p ? (a(), f.once(Oe.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: h
    })) : (le.delete(f), f.stack.splice(f.stackIndex).forEach((m) => m.destroy(!0)), f.destroyed = !0);
  }, g = (p) => {
    d(p), y();
  }, b = (p) => {
    l(p), y();
  }, f = {
    meta: r.meta || {},
    promise: s,
    resolve: d,
    reject: l,
    destroyWithResolve: g,
    destroyWithReject: b,
    hide: a,
    show: u,
    destroy: y,
    container: o,
    visible: r.visible,
    on: (p, v, m = {}) => R.on(f, p, v, m),
    once: (p, v, m = {}) => R.on(f, p, v, m),
    emit: (p, ...v) => R.emit(f, p, ...v),
    off: (p, v) => R.off(f, p, v),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, j = we(/* @__PURE__ */ ee({
    setup() {
      const p = Z();
      for (const P in r.provideProps)
        D(P, r.provideProps[P]);
      const v = T(T({}, X(p)), X(e));
      for (const P in v)
        D(P, v[P]);
      D(Pe, f);
      const m = je(fe, []);
      return f.stackIndex = m.length, m.push(f), D(fe, m), f.stack = m, () => z(t);
    }
  }), null, null);
  return j.appContext = (e == null ? void 0 : e.appContext) || j.appContext, r.fragment ? (Object.assign(o.style, {
    display: "none",
    position: "absolute",
    pointerEvents: "none"
  }), document.head.appendChild(o), N(z(Je, {
    to: n
  }, j), o)) : (n.appendChild(o), N(j, o)), (r.immediate === void 0 || r.immediate) && f.show(), f.mounted = !0, le.add(f), f;
}
const Rn = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return je(Pe, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Ae = typeof global == "object" && global && global.Object === Object && global, tt = typeof self == "object" && self && self.Object === Object && self, $ = Ae || tt || Function("return this")(), F = $.Symbol, Se = Object.prototype, rt = Se.hasOwnProperty, nt = Se.toString, A = F ? F.toStringTag : void 0;
function ot(e) {
  var t = rt.call(e, A), r = e[A];
  try {
    e[A] = void 0;
    var n = !0;
  } catch (a) {
  }
  var o = nt.call(e);
  return n && (t ? e[A] = r : delete e[A]), o;
}
var at = Object.prototype, it = at.toString;
function st(e) {
  return it.call(e);
}
var ut = "[object Null]", ct = "[object Undefined]", pe = F ? F.toStringTag : void 0;
function U(e) {
  return e == null ? e === void 0 ? ct : ut : pe && pe in Object(e) ? ot(e) : st(e);
}
function I(e) {
  return e != null && typeof e == "object";
}
var J = Array.isArray;
function w(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ee(e) {
  return e;
}
var ft = "[object AsyncFunction]", lt = "[object Function]", pt = "[object GeneratorFunction]", dt = "[object Proxy]";
function te(e) {
  if (!w(e))
    return !1;
  var t = U(e);
  return t == lt || t == pt || t == ft || t == dt;
}
var W = $["__core-js_shared__"], de = function() {
  var e = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ht(e) {
  return !!de && de in e;
}
var vt = Function.prototype, mt = vt.toString;
function yt(e) {
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
var gt = /[\\^$.*+?()[\]{}|]/g, bt = /^\[object .+?Constructor\]$/, _t = Function.prototype, Tt = Object.prototype, Ct = _t.toString, wt = Tt.hasOwnProperty, jt = RegExp(
  "^" + Ct.call(wt).replace(gt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ot(e) {
  if (!w(e) || ht(e))
    return !1;
  var t = te(e) ? jt : bt;
  return t.test(yt(e));
}
function xt(e, t) {
  return e == null ? void 0 : e[t];
}
function re(e, t) {
  var r = xt(e, t);
  return Ot(r) ? r : void 0;
}
var he = Object.create, Pt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!w(t))
      return {};
    if (he)
      return he(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function At(e, t, r) {
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
function St(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Et = 800, $t = 16, It = Date.now;
function Mt(e) {
  var t = 0, r = 0;
  return function() {
    var n = It(), o = $t - (n - r);
    if (r = n, o > 0) {
      if (++t >= Et)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Nt(e) {
  return function() {
    return e;
  };
}
var B = function() {
  try {
    var e = re(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (t) {
  }
}(), Dt = B ? function(e, t) {
  return B(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Nt(t),
    writable: !0
  });
} : Ee, Rt = Mt(Dt), zt = 9007199254740991, Ft = /^(?:0|[1-9]\d*)$/;
function $e(e, t) {
  var r = typeof e;
  return t = t == null ? zt : t, !!t && (r == "number" || r != "symbol" && Ft.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ne(e, t, r) {
  t == "__proto__" && B ? B(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function H(e, t) {
  return e === t || e !== e && t !== t;
}
var Bt = Object.prototype, Ut = Bt.hasOwnProperty;
function Ht(e, t, r) {
  var n = e[t];
  (!(Ut.call(e, t) && H(n, r)) || r === void 0 && !(t in e)) && ne(e, t, r);
}
function Gt(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, u = t.length; ++a < u; ) {
    var i = t[a], s = void 0;
    s === void 0 && (s = e[i]), o ? ne(r, i, s) : Ht(r, i, s);
  }
  return r;
}
var ve = Math.max;
function Lt(e, t, r) {
  return t = ve(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = ve(n.length - t, 0), u = Array(a); ++o < a; )
      u[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(u), At(e, this, i);
  };
}
function Kt(e, t) {
  return Rt(Lt(e, t, Ee), e + "");
}
var Vt = 9007199254740991;
function Ie(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vt;
}
function oe(e) {
  return e != null && Ie(e.length) && !te(e);
}
function Wt(e, t, r) {
  if (!w(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? oe(r) && $e(t, r.length) : n == "string" && t in r) ? H(r[t], e) : !1;
}
function qt(e) {
  return Kt(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, u = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, u && Wt(r[0], r[1], u) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Zt = Object.prototype;
function Me(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Zt;
  return e === r;
}
function Xt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Jt = "[object Arguments]";
function me(e) {
  return I(e) && U(e) == Jt;
}
var Ne = Object.prototype, Yt = Ne.hasOwnProperty, Qt = Ne.propertyIsEnumerable, Y = me(/* @__PURE__ */ function() {
  return arguments;
}()) ? me : function(e) {
  return I(e) && Yt.call(e, "callee") && !Qt.call(e, "callee");
};
function kt() {
  return !1;
}
var De = typeof exports == "object" && exports && !exports.nodeType && exports, ye = De && typeof module == "object" && module && !module.nodeType && module, er = ye && ye.exports === De, ge = er ? $.Buffer : void 0, tr = ge ? ge.isBuffer : void 0, Re = tr || kt, rr = "[object Arguments]", nr = "[object Array]", or = "[object Boolean]", ar = "[object Date]", ir = "[object Error]", sr = "[object Function]", ur = "[object Map]", cr = "[object Number]", fr = "[object Object]", lr = "[object RegExp]", pr = "[object Set]", dr = "[object String]", hr = "[object WeakMap]", vr = "[object ArrayBuffer]", mr = "[object DataView]", yr = "[object Float32Array]", gr = "[object Float64Array]", br = "[object Int8Array]", _r = "[object Int16Array]", Tr = "[object Int32Array]", Cr = "[object Uint8Array]", wr = "[object Uint8ClampedArray]", jr = "[object Uint16Array]", Or = "[object Uint32Array]", c = {};
c[yr] = c[gr] = c[br] = c[_r] = c[Tr] = c[Cr] = c[wr] = c[jr] = c[Or] = !0;
c[rr] = c[nr] = c[vr] = c[or] = c[mr] = c[ar] = c[ir] = c[sr] = c[ur] = c[cr] = c[fr] = c[lr] = c[pr] = c[dr] = c[hr] = !1;
function xr(e) {
  return I(e) && Ie(e.length) && !!c[U(e)];
}
function Pr(e) {
  return function(t) {
    return e(t);
  };
}
var ze = typeof exports == "object" && exports && !exports.nodeType && exports, S = ze && typeof module == "object" && module && !module.nodeType && module, Ar = S && S.exports === ze, q = Ar && Ae.process, be = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || q && q.binding && q.binding("util");
  } catch (t) {
  }
}(), _e = be && be.isTypedArray, Fe = _e ? Pr(_e) : xr;
function Sr(e, t) {
  var r = J(e), n = !r && Y(e), o = !r && !n && Re(e), a = !r && !n && !o && Fe(e), u = r || n || o || a, i = u ? Xt(e.length, String) : [], s = i.length;
  for (var d in e)
    u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    $e(d, s)) || i.push(d);
  return i;
}
function Er(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function $r(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ir = Object.prototype, Mr = Ir.hasOwnProperty;
function Nr(e) {
  if (!w(e))
    return $r(e);
  var t = Me(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Mr.call(e, n)) || r.push(n);
  return r;
}
function Be(e) {
  return oe(e) ? Sr(e) : Nr(e);
}
var E = re(Object, "create");
function Dr() {
  this.__data__ = E ? E(null) : {}, this.size = 0;
}
function Rr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zr = "__lodash_hash_undefined__", Fr = Object.prototype, Br = Fr.hasOwnProperty;
function Ur(e) {
  var t = this.__data__;
  if (E) {
    var r = t[e];
    return r === zr ? void 0 : r;
  }
  return Br.call(t, e) ? t[e] : void 0;
}
var Hr = Object.prototype, Gr = Hr.hasOwnProperty;
function Lr(e) {
  var t = this.__data__;
  return E ? t[e] !== void 0 : Gr.call(t, e);
}
var Kr = "__lodash_hash_undefined__";
function Vr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = E && t === void 0 ? Kr : t, this;
}
function C(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
C.prototype.clear = Dr;
C.prototype.delete = Rr;
C.prototype.get = Ur;
C.prototype.has = Lr;
C.prototype.set = Vr;
function Wr() {
  this.__data__ = [], this.size = 0;
}
function G(e, t) {
  for (var r = e.length; r--; )
    if (H(e[r][0], t))
      return r;
  return -1;
}
var qr = Array.prototype, Zr = qr.splice;
function Xr(e) {
  var t = this.__data__, r = G(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Zr.call(t, r, 1), --this.size, !0;
}
function Jr(e) {
  var t = this.__data__, r = G(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Yr(e) {
  return G(this.__data__, e) > -1;
}
function Qr(e, t) {
  var r = this.__data__, n = G(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = Wr;
_.prototype.delete = Xr;
_.prototype.get = Jr;
_.prototype.has = Yr;
_.prototype.set = Qr;
var Ue = re($, "Map");
function kr() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (Ue || _)(),
    string: new C()
  };
}
function en(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function L(e, t) {
  var r = e.__data__;
  return en(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function tn(e) {
  var t = L(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rn(e) {
  return L(this, e).get(e);
}
function nn(e) {
  return L(this, e).has(e);
}
function on(e, t) {
  var r = L(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function O(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
O.prototype.clear = kr;
O.prototype.delete = tn;
O.prototype.get = rn;
O.prototype.has = nn;
O.prototype.set = on;
var He = Er(Object.getPrototypeOf, Object), an = "[object Object]", sn = Function.prototype, un = Object.prototype, Ge = sn.toString, cn = un.hasOwnProperty, fn = Ge.call(Object);
function ln(e) {
  if (!I(e) || U(e) != an)
    return !1;
  var t = He(e);
  if (t === null)
    return !0;
  var r = cn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ge.call(r) == fn;
}
function pn() {
  this.__data__ = new _(), this.size = 0;
}
function dn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function hn(e) {
  return this.__data__.get(e);
}
function vn(e) {
  return this.__data__.has(e);
}
var mn = 200;
function yn(e, t) {
  var r = this.__data__;
  if (r instanceof _) {
    var n = r.__data__;
    if (!Ue || n.length < mn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new O(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function x(e) {
  var t = this.__data__ = new _(e);
  this.size = t.size;
}
x.prototype.clear = pn;
x.prototype.delete = dn;
x.prototype.get = hn;
x.prototype.has = vn;
x.prototype.set = yn;
var gn = typeof exports == "object" && exports && !exports.nodeType && exports;
gn && typeof module == "object" && module && !module.nodeType && module;
function bn(e, t) {
  return e.slice();
}
var Te = $.Uint8Array;
function _n(e) {
  var t = new e.constructor(e.byteLength);
  return new Te(t).set(new Te(e)), t;
}
function Tn(e, t) {
  var r = _n(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function Cn(e) {
  return typeof e.constructor == "function" && !Me(e) ? Pt(He(e)) : {};
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
var jn = wn();
function Q(e, t, r) {
  (r !== void 0 && !H(e[t], r) || r === void 0 && !(t in e)) && ne(e, t, r);
}
function On(e) {
  return I(e) && oe(e);
}
function k(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function xn(e) {
  return Gt(e, Be(e));
}
function Pn(e, t, r, n, o, a, u) {
  var i = k(e, r), s = k(t, r), d = u.get(s);
  if (d) {
    Q(e, r, d);
    return;
  }
  var l = a ? a(i, s, r + "", e, t, u) : void 0, h = l === void 0;
  if (h) {
    var y = J(s), g = !y && Re(s), b = !y && !g && Fe(s);
    l = s, y || g || b ? J(i) ? l = i : On(i) ? l = St(i) : g ? (h = !1, l = bn(s)) : b ? (h = !1, l = Tn(s)) : l = [] : ln(s) || Y(s) ? (l = i, Y(i) ? l = xn(i) : (!w(i) || te(i)) && (l = Cn(s))) : h = !1;
  }
  h && (u.set(s, l), o(l, s, n, a, u), u.delete(s)), Q(e, r, l);
}
function Le(e, t, r, n, o) {
  e !== t && jn(t, function(a, u) {
    if (o || (o = new x()), w(a))
      Pn(e, t, u, r, Le, n, o);
    else {
      var i = n ? n(k(e, u), a, u + "", e, t, o) : void 0;
      i === void 0 && (i = a), Q(e, u, i);
    }
  }, Be);
}
var Ce = qt(function(e, t, r) {
  Le(e, t, r);
});
function zn(e) {
  if (!xe())
    throw new Error("Vue 3.0 or higher is required");
  const {
    render: t,
    defaultConfig: r = {},
    configTransformer: n
  } = e;
  return function(o) {
    const a = Z();
    return function(i, s) {
      const d = ue(() => {
        const g = typeof o == "function" ? o() : o, b = typeof s == "function" ? s() : s, f = Ce({}, r, g, b);
        return n ? n(f) : f;
      }), l = ce(!1), h = {
        value: null
      }, y = /* @__PURE__ */ ee({
        setup: () => {
          const g = ue(() => {
            const j = typeof o == "function" ? o() : o, M = typeof s == "function" ? s() : s, p = Ce({}, r, j, M);
            return n ? n(p) : p;
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
      return h.value = et(a, we(y, null, null), V(T({}, d.value), {
        visible: l
      })), h.value;
    };
  };
}
export {
  Pe as CommandComponentConsumerInjectKey,
  fe as CommandComponentStackInjectKey,
  Qe as ConsumerEventBus,
  Oe as EVENT_NAME,
  ke as PromiseWithResolvers,
  Nn as RxRender,
  le as activeConsumers,
  $n as busName2EventName,
  et as commandProviderWithRender,
  zn as createAdapter,
  En as eventName2BusName,
  In as getMaxZIndex,
  Mn as isNull,
  xe as isVue3OrHigher,
  Rn as useConsumer,
  Dn as uuid
};
