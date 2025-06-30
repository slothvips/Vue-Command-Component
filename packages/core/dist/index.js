var Fe = Object.defineProperty;
var Be = (e, t, r) => t in e ? Fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ee = (e, t, r) => Be(e, typeof t != "symbol" ? t + "" : t, r);
import { h as Z, defineComponent as X, createVNode as Ue, render as te, inject as ge, provide as I, nextTick as He, getCurrentInstance as Ge, ref as re } from "vue";
var me = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(me || {});
class Le {
  constructor() {
    ee(this, "map", /* @__PURE__ */ new WeakMap());
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
    let s = n;
    o.once && (s = (...i) => {
      n(...i), this.off(t, r, s);
    }), a.add(s), o.callImmediatelyAfterDelay !== void 0 && setTimeout(() => {
      s();
    }, o.callImmediatelyAfterDelay || 0);
  }
  once(t, r, n) {
    this.on(t, r, n, { once: !0 });
  }
  emit(t, r, ...n) {
    this.getEventsByConsumer(t, r).forEach((a) => a(...n));
  }
  off(t, r, n) {
    this.getEventsByConsumer(t, r).delete(n);
  }
}
const Tn = (e = "") => e.slice(2).toLowerCase(), Cn = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Ke = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((n, o) => {
    e = n, t = o;
  }), resolve: e, reject: t };
}, jn = (e) => {
  var n;
  const t = ((n = e.parentElement) == null ? void 0 : n.children) || [];
  let r = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > r && (r = a);
    }
  }), +r;
}, wn = (e) => e == null, On = (e) => typeof e != "function" ? e : Z(X({ render: () => e() })), be = Symbol("CommandComponentConsumerInjectKey"), ne = Symbol("CommandComponentStackInjectKey"), M = new Le(), L = /* @__PURE__ */ new Set(), xn = () => {
  L.forEach((e) => {
    e.destroy();
  });
}, _e = (e) => ({
  ...e.parent ? _e(e.parent) : {},
  ...e.provides
});
function We(e, t, r) {
  var $;
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || (($ = e.vnode.el) == null ? void 0 : $.parentElement) || document.body, o = document.createElement("div");
  o.className = r.customClassName || "command-component-container", n.appendChild(o);
  const a = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    r.visible.value = !1;
  }, s = () => {
    if (f.destroyed) throw new Error("Consumer has been destroyed");
    r.visible.value = !0;
  }, i = () => {
    He(() => {
      te(null, o), o.remove();
    });
  }, {
    promise: u,
    resolve: p,
    reject: l
  } = Ke(), y = 3e3, v = (d = !1) => {
    d ? (a(), f.on(me.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: y
    })) : (L.delete(f), f.stack.splice(f.stackIndex).forEach((g) => g.destroy(!0)), f.destroyed = !0);
  }, b = (d) => {
    p(d), v();
  }, O = (d) => {
    l(d), v();
  }, f = {
    meta: r.meta || {},
    promise: u,
    resolve: p,
    reject: l,
    destroyWithResolve: b,
    destroyWithReject: O,
    hide: a,
    show: s,
    destroy: v,
    container: o,
    visible: r.visible,
    on: (d, h, g = {}) => M.on(f, d, h, g),
    once: (d, h) => M.once(f, d, h),
    emit: (d, ...h) => M.emit(f, d, ...h),
    off: (d, h) => M.off(f, d, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, E = Ue(/* @__PURE__ */ X({
    setup() {
      for (const g in r.provideProps)
        I(g, r.provideProps[g]);
      const d = {
        // ...vnode.appContext!.provides,
        ..._e(e)
      };
      for (const g in d)
        I(g, d[g]);
      I(be, f);
      const h = ge(ne, []);
      return f.stackIndex = h.length, h.push(f), I(ne, h), f.stack = h, () => Z(t);
    }
  }), null, null);
  return E.appContext = (e == null ? void 0 : e.appContext) || E.appContext, te(E, o), f.mounted = !0, L.add(f), f;
}
const Pn = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return ge(be, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Te = typeof global == "object" && global && global.Object === Object && global, qe = typeof self == "object" && self && self.Object === Object && self, C = Te || qe || Function("return this")(), N = C.Symbol, Ce = Object.prototype, Ve = Ce.hasOwnProperty, Ze = Ce.toString, x = N ? N.toStringTag : void 0;
function Xe(e) {
  var t = Ve.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var n = !0;
  } catch {
  }
  var o = Ze.call(e);
  return n && (t ? e[x] = r : delete e[x]), o;
}
var Je = Object.prototype, Ye = Je.toString;
function Qe(e) {
  return Ye.call(e);
}
var ke = "[object Null]", et = "[object Undefined]", oe = N ? N.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? et : ke : oe && oe in Object(e) ? Xe(e) : Qe(e);
}
function S(e) {
  return e != null && typeof e == "object";
}
var K = Array.isArray;
function T(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function je(e) {
  return e;
}
var tt = "[object AsyncFunction]", rt = "[object Function]", nt = "[object GeneratorFunction]", ot = "[object Proxy]";
function J(e) {
  if (!T(e))
    return !1;
  var t = z(e);
  return t == rt || t == nt || t == tt || t == ot;
}
var H = C["__core-js_shared__"], ae = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function at(e) {
  return !!ae && ae in e;
}
var it = Function.prototype, st = it.toString;
function ut(e) {
  if (e != null) {
    try {
      return st.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ct = /[\\^$.*+?()[\]{}|]/g, ft = /^\[object .+?Constructor\]$/, lt = Function.prototype, pt = Object.prototype, dt = lt.toString, ht = pt.hasOwnProperty, vt = RegExp(
  "^" + dt.call(ht).replace(ct, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yt(e) {
  if (!T(e) || at(e))
    return !1;
  var t = J(e) ? vt : ft;
  return t.test(ut(e));
}
function gt(e, t) {
  return e == null ? void 0 : e[t];
}
function Y(e, t) {
  var r = gt(e, t);
  return yt(r) ? r : void 0;
}
var ie = Object.create, mt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!T(t))
      return {};
    if (ie)
      return ie(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function bt(e, t, r) {
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
function _t(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Tt = 800, Ct = 16, jt = Date.now;
function wt(e) {
  var t = 0, r = 0;
  return function() {
    var n = jt(), o = Ct - (n - r);
    if (r = n, o > 0) {
      if (++t >= Tt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ot(e) {
  return function() {
    return e;
  };
}
var R = function() {
  try {
    var e = Y(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), xt = R ? function(e, t) {
  return R(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ot(t),
    writable: !0
  });
} : je, Pt = wt(xt), At = 9007199254740991, St = /^(?:0|[1-9]\d*)$/;
function we(e, t) {
  var r = typeof e;
  return t = t ?? At, !!t && (r == "number" || r != "symbol" && St.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Q(e, t, r) {
  t == "__proto__" && R ? R(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function D(e, t) {
  return e === t || e !== e && t !== t;
}
var Et = Object.prototype, $t = Et.hasOwnProperty;
function It(e, t, r) {
  var n = e[t];
  (!($t.call(e, t) && D(n, r)) || r === void 0 && !(t in e)) && Q(e, t, r);
}
function Mt(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], u = void 0;
    u === void 0 && (u = e[i]), o ? Q(r, i, u) : It(r, i, u);
  }
  return r;
}
var se = Math.max;
function Nt(e, t, r) {
  return t = se(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = se(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), bt(e, this, i);
  };
}
function Rt(e, t) {
  return Pt(Nt(e, t, je), e + "");
}
var zt = 9007199254740991;
function Oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zt;
}
function k(e) {
  return e != null && Oe(e.length) && !J(e);
}
function Dt(e, t, r) {
  if (!T(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? k(r) && we(t, r.length) : n == "string" && t in r) ? D(r[t], e) : !1;
}
function Ft(e) {
  return Rt(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Dt(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Bt = Object.prototype;
function xe(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Bt;
  return e === r;
}
function Ut(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ht = "[object Arguments]";
function ue(e) {
  return S(e) && z(e) == Ht;
}
var Pe = Object.prototype, Gt = Pe.hasOwnProperty, Lt = Pe.propertyIsEnumerable, W = ue(/* @__PURE__ */ function() {
  return arguments;
}()) ? ue : function(e) {
  return S(e) && Gt.call(e, "callee") && !Lt.call(e, "callee");
};
function Kt() {
  return !1;
}
var Ae = typeof exports == "object" && exports && !exports.nodeType && exports, ce = Ae && typeof module == "object" && module && !module.nodeType && module, Wt = ce && ce.exports === Ae, fe = Wt ? C.Buffer : void 0, qt = fe ? fe.isBuffer : void 0, Se = qt || Kt, Vt = "[object Arguments]", Zt = "[object Array]", Xt = "[object Boolean]", Jt = "[object Date]", Yt = "[object Error]", Qt = "[object Function]", kt = "[object Map]", er = "[object Number]", tr = "[object Object]", rr = "[object RegExp]", nr = "[object Set]", or = "[object String]", ar = "[object WeakMap]", ir = "[object ArrayBuffer]", sr = "[object DataView]", ur = "[object Float32Array]", cr = "[object Float64Array]", fr = "[object Int8Array]", lr = "[object Int16Array]", pr = "[object Int32Array]", dr = "[object Uint8Array]", hr = "[object Uint8ClampedArray]", vr = "[object Uint16Array]", yr = "[object Uint32Array]", c = {};
c[ur] = c[cr] = c[fr] = c[lr] = c[pr] = c[dr] = c[hr] = c[vr] = c[yr] = !0;
c[Vt] = c[Zt] = c[ir] = c[Xt] = c[sr] = c[Jt] = c[Yt] = c[Qt] = c[kt] = c[er] = c[tr] = c[rr] = c[nr] = c[or] = c[ar] = !1;
function gr(e) {
  return S(e) && Oe(e.length) && !!c[z(e)];
}
function mr(e) {
  return function(t) {
    return e(t);
  };
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, P = Ee && typeof module == "object" && module && !module.nodeType && module, br = P && P.exports === Ee, G = br && Te.process, le = function() {
  try {
    var e = P && P.require && P.require("util").types;
    return e || G && G.binding && G.binding("util");
  } catch {
  }
}(), pe = le && le.isTypedArray, $e = pe ? mr(pe) : gr;
function _r(e, t) {
  var r = K(e), n = !r && W(e), o = !r && !n && Se(e), a = !r && !n && !o && $e(e), s = r || n || o || a, i = s ? Ut(e.length, String) : [], u = i.length;
  for (var p in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    we(p, u)) || i.push(p);
  return i;
}
function Tr(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function Cr(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var jr = Object.prototype, wr = jr.hasOwnProperty;
function Or(e) {
  if (!T(e))
    return Cr(e);
  var t = xe(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !wr.call(e, n)) || r.push(n);
  return r;
}
function Ie(e) {
  return k(e) ? _r(e) : Or(e);
}
var A = Y(Object, "create");
function xr() {
  this.__data__ = A ? A(null) : {}, this.size = 0;
}
function Pr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ar = "__lodash_hash_undefined__", Sr = Object.prototype, Er = Sr.hasOwnProperty;
function $r(e) {
  var t = this.__data__;
  if (A) {
    var r = t[e];
    return r === Ar ? void 0 : r;
  }
  return Er.call(t, e) ? t[e] : void 0;
}
var Ir = Object.prototype, Mr = Ir.hasOwnProperty;
function Nr(e) {
  var t = this.__data__;
  return A ? t[e] !== void 0 : Mr.call(t, e);
}
var Rr = "__lodash_hash_undefined__";
function zr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = A && t === void 0 ? Rr : t, this;
}
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = xr;
_.prototype.delete = Pr;
_.prototype.get = $r;
_.prototype.has = Nr;
_.prototype.set = zr;
function Dr() {
  this.__data__ = [], this.size = 0;
}
function F(e, t) {
  for (var r = e.length; r--; )
    if (D(e[r][0], t))
      return r;
  return -1;
}
var Fr = Array.prototype, Br = Fr.splice;
function Ur(e) {
  var t = this.__data__, r = F(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Br.call(t, r, 1), --this.size, !0;
}
function Hr(e) {
  var t = this.__data__, r = F(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Gr(e) {
  return F(this.__data__, e) > -1;
}
function Lr(e, t) {
  var r = this.__data__, n = F(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function m(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = Dr;
m.prototype.delete = Ur;
m.prototype.get = Hr;
m.prototype.has = Gr;
m.prototype.set = Lr;
var Me = Y(C, "Map");
function Kr() {
  this.size = 0, this.__data__ = {
    hash: new _(),
    map: new (Me || m)(),
    string: new _()
  };
}
function Wr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function B(e, t) {
  var r = e.__data__;
  return Wr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function qr(e) {
  var t = B(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Vr(e) {
  return B(this, e).get(e);
}
function Zr(e) {
  return B(this, e).has(e);
}
function Xr(e, t) {
  var r = B(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function j(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
j.prototype.clear = Kr;
j.prototype.delete = qr;
j.prototype.get = Vr;
j.prototype.has = Zr;
j.prototype.set = Xr;
var Ne = Tr(Object.getPrototypeOf, Object), Jr = "[object Object]", Yr = Function.prototype, Qr = Object.prototype, Re = Yr.toString, kr = Qr.hasOwnProperty, en = Re.call(Object);
function tn(e) {
  if (!S(e) || z(e) != Jr)
    return !1;
  var t = Ne(e);
  if (t === null)
    return !0;
  var r = kr.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Re.call(r) == en;
}
function rn() {
  this.__data__ = new m(), this.size = 0;
}
function nn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function on(e) {
  return this.__data__.get(e);
}
function an(e) {
  return this.__data__.has(e);
}
var sn = 200;
function un(e, t) {
  var r = this.__data__;
  if (r instanceof m) {
    var n = r.__data__;
    if (!Me || n.length < sn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new j(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function w(e) {
  var t = this.__data__ = new m(e);
  this.size = t.size;
}
w.prototype.clear = rn;
w.prototype.delete = nn;
w.prototype.get = on;
w.prototype.has = an;
w.prototype.set = un;
var ze = typeof exports == "object" && exports && !exports.nodeType && exports, de = ze && typeof module == "object" && module && !module.nodeType && module, cn = de && de.exports === ze, he = cn ? C.Buffer : void 0;
he && he.allocUnsafe;
function fn(e, t) {
  return e.slice();
}
var ve = C.Uint8Array;
function ln(e) {
  var t = new e.constructor(e.byteLength);
  return new ve(t).set(new ve(e)), t;
}
function pn(e, t) {
  var r = ln(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function dn(e) {
  return typeof e.constructor == "function" && !xe(e) ? mt(Ne(e)) : {};
}
function hn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var u = s[++o];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var vn = hn();
function q(e, t, r) {
  (r !== void 0 && !D(e[t], r) || r === void 0 && !(t in e)) && Q(e, t, r);
}
function yn(e) {
  return S(e) && k(e);
}
function V(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function gn(e) {
  return Mt(e, Ie(e));
}
function mn(e, t, r, n, o, a, s) {
  var i = V(e, r), u = V(t, r), p = s.get(u);
  if (p) {
    q(e, r, p);
    return;
  }
  var l = a ? a(i, u, r + "", e, t, s) : void 0, y = l === void 0;
  if (y) {
    var v = K(u), b = !v && Se(u), O = !v && !b && $e(u);
    l = u, v || b || O ? K(i) ? l = i : yn(i) ? l = _t(i) : b ? (y = !1, l = fn(u)) : O ? (y = !1, l = pn(u)) : l = [] : tn(u) || W(u) ? (l = i, W(i) ? l = gn(i) : (!T(i) || J(i)) && (l = dn(u))) : y = !1;
  }
  y && (s.set(u, l), o(l, u, n, a, s), s.delete(u)), q(e, r, l);
}
function De(e, t, r, n, o) {
  e !== t && vn(t, function(a, s) {
    if (o || (o = new w()), T(a))
      mn(e, t, s, r, De, n, o);
    else {
      var i = n ? n(V(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), q(e, s, i);
    }
  }, Ie);
}
var ye = Ft(function(e, t, r) {
  De(e, t, r);
});
function An(e) {
  const { render: t, defaultConfig: r = {}, appendTo: n, configTransformer: o } = e;
  return function(a = {}) {
    const s = Ge();
    return function(u, p = {}) {
      const l = ye({}, r, p), y = re(!0), v = {
        value: null
      }, b = X({
        setup: () => {
          const U = re(), $ = {
            componentRef: U,
            visible: y,
            onMounted: () => {
              Promise.resolve().then(() => {
                v.value.componentRef = U;
              });
            },
            config: l,
            consumer: v
          };
          return () => t(u, $);
        }
      });
      let f = {
        ...ye(a, {
          appendTo: n || a.appendTo
        }),
        ...l,
        visible: y
      };
      return o && (f = o(f, a)), v.value = We(s, Z(b), f), v.value;
    };
  };
}
export {
  be as CommandComponentConsumerInjectKey,
  ne as CommandComponentStackInjectKey,
  We as CommandProviderWithRender,
  Le as ConsumerEventBus,
  me as EVENT_NAME,
  Ke as PromiseWithResolvers,
  On as RxRender,
  L as activeConsumers,
  Cn as busName2EventName,
  An as createAdapter,
  xn as destroyAllConsumer,
  Tn as eventName2BusName,
  jn as getMaxZIndex,
  wn as isNull,
  Pn as useConsumer
};
