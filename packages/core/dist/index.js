var Fe = Object.defineProperty;
var Be = (e, t, r) => t in e ? Fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ee = (e, t, r) => Be(e, typeof t != "symbol" ? t + "" : t, r);
import { h as Z, defineComponent as X, createVNode as Ue, render as te, inject as me, provide as I, nextTick as He, getCurrentInstance as Ge, ref as re } from "vue";
var ge = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(ge || {});
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
const Cn = (e = "") => e.slice(2).toLowerCase(), jn = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Ke = () => {
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
}, We = (e) => e == null, On = (e) => typeof e != "function" ? e : Z(X({ render: () => e() })), be = Symbol("CommandComponentConsumerInjectKey"), ne = Symbol("CommandComponentStackInjectKey"), M = new Le(), L = /* @__PURE__ */ new Set(), xn = () => {
  L.forEach((e) => {
    e.destroy();
  });
}, _e = (e) => ({
  ...e.parent ? _e(e.parent) : {},
  ...e.provides
});
function qe(e, t, r) {
  var $;
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || (($ = e.vnode.el) == null ? void 0 : $.parentElement) || document.body, o = document.createElement("div");
  o.className = r.customClassName || "command-component-container", n.appendChild(o);
  const a = () => {
    if (l.destroyed) throw new Error("Consumer has been destroyed");
    r.visible.value = !1;
  }, s = () => {
    if (l.destroyed) throw new Error("Consumer has been destroyed");
    r.visible.value = !0;
  }, i = () => {
    He(() => {
      te(null, o), o.remove();
    });
  }, {
    promise: u,
    resolve: p,
    reject: f
  } = Ke(), y = 3e3, v = (d = !1) => {
    d ? (a(), l.on(ge.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: y
    })) : (L.delete(l), l.stack.splice(l.stackIndex).forEach((m) => m.destroy(!0)), l.destroyed = !0);
  }, b = (d) => {
    p(d), v();
  }, O = (d) => {
    f(d), v();
  }, l = {
    meta: r.meta || {},
    promise: u,
    resolve: p,
    reject: f,
    destroyWithResolve: b,
    destroyWithReject: O,
    hide: a,
    show: s,
    destroy: v,
    container: o,
    visible: r.visible,
    on: (d, h, m = {}) => M.on(l, d, h, m),
    once: (d, h) => M.once(l, d, h),
    emit: (d, ...h) => M.emit(l, d, ...h),
    off: (d, h) => M.off(l, d, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, E = Ue(/* @__PURE__ */ X({
    setup() {
      for (const m in r.provideProps)
        I(m, r.provideProps[m]);
      const d = {
        // ...vnode.appContext!.provides,
        ..._e(e)
      };
      for (const m in d)
        I(m, d[m]);
      I(be, l);
      const h = me(ne, []);
      return l.stackIndex = h.length, h.push(l), I(ne, h), l.stack = h, () => Z(t);
    }
  }), null, null);
  return E.appContext = (e == null ? void 0 : e.appContext) || E.appContext, te(E, o), l.mounted = !0, L.add(l), l;
}
const Pn = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return me(be, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Te = typeof global == "object" && global && global.Object === Object && global, Ve = typeof self == "object" && self && self.Object === Object && self, C = Te || Ve || Function("return this")(), N = C.Symbol, Ce = Object.prototype, Ze = Ce.hasOwnProperty, Xe = Ce.toString, x = N ? N.toStringTag : void 0;
function Je(e) {
  var t = Ze.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var n = !0;
  } catch {
  }
  var o = Xe.call(e);
  return n && (t ? e[x] = r : delete e[x]), o;
}
var Ye = Object.prototype, Qe = Ye.toString;
function ke(e) {
  return Qe.call(e);
}
var et = "[object Null]", tt = "[object Undefined]", oe = N ? N.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? tt : et : oe && oe in Object(e) ? Je(e) : ke(e);
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
var rt = "[object AsyncFunction]", nt = "[object Function]", ot = "[object GeneratorFunction]", at = "[object Proxy]";
function J(e) {
  if (!T(e))
    return !1;
  var t = z(e);
  return t == nt || t == ot || t == rt || t == at;
}
var H = C["__core-js_shared__"], ae = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
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
var ft = /[\\^$.*+?()[\]{}|]/g, lt = /^\[object .+?Constructor\]$/, pt = Function.prototype, dt = Object.prototype, ht = pt.toString, vt = dt.hasOwnProperty, yt = RegExp(
  "^" + ht.call(vt).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mt(e) {
  if (!T(e) || it(e))
    return !1;
  var t = J(e) ? yt : lt;
  return t.test(ct(e));
}
function gt(e, t) {
  return e == null ? void 0 : e[t];
}
function Y(e, t) {
  var r = gt(e, t);
  return mt(r) ? r : void 0;
}
var ie = Object.create, bt = /* @__PURE__ */ function() {
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
var R = function() {
  try {
    var e = Y(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Pt = R ? function(e, t) {
  return R(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: xt(t),
    writable: !0
  });
} : je, At = Ot(Pt), St = 9007199254740991, Et = /^(?:0|[1-9]\d*)$/;
function we(e, t) {
  var r = typeof e;
  return t = t ?? St, !!t && (r == "number" || r != "symbol" && Et.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
var $t = Object.prototype, It = $t.hasOwnProperty;
function Mt(e, t, r) {
  var n = e[t];
  (!(It.call(e, t) && D(n, r)) || r === void 0 && !(t in e)) && Q(e, t, r);
}
function Nt(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], u = void 0;
    u === void 0 && (u = e[i]), o ? Q(r, i, u) : Mt(r, i, u);
  }
  return r;
}
var se = Math.max;
function Rt(e, t, r) {
  return t = se(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = se(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), _t(e, this, i);
  };
}
function zt(e, t) {
  return At(Rt(e, t, je), e + "");
}
var Dt = 9007199254740991;
function Oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Dt;
}
function k(e) {
  return e != null && Oe(e.length) && !J(e);
}
function Ft(e, t, r) {
  if (!T(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? k(r) && we(t, r.length) : n == "string" && t in r) ? D(r[t], e) : !1;
}
function Bt(e) {
  return zt(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Ft(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Ut = Object.prototype;
function xe(e) {
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
  return S(e) && z(e) == Gt;
}
var Pe = Object.prototype, Lt = Pe.hasOwnProperty, Kt = Pe.propertyIsEnumerable, W = ue(/* @__PURE__ */ function() {
  return arguments;
}()) ? ue : function(e) {
  return S(e) && Lt.call(e, "callee") && !Kt.call(e, "callee");
};
function Wt() {
  return !1;
}
var Ae = typeof exports == "object" && exports && !exports.nodeType && exports, ce = Ae && typeof module == "object" && module && !module.nodeType && module, qt = ce && ce.exports === Ae, fe = qt ? C.Buffer : void 0, Vt = fe ? fe.isBuffer : void 0, Se = Vt || Wt, Zt = "[object Arguments]", Xt = "[object Array]", Jt = "[object Boolean]", Yt = "[object Date]", Qt = "[object Error]", kt = "[object Function]", er = "[object Map]", tr = "[object Number]", rr = "[object Object]", nr = "[object RegExp]", or = "[object Set]", ar = "[object String]", ir = "[object WeakMap]", sr = "[object ArrayBuffer]", ur = "[object DataView]", cr = "[object Float32Array]", fr = "[object Float64Array]", lr = "[object Int8Array]", pr = "[object Int16Array]", dr = "[object Int32Array]", hr = "[object Uint8Array]", vr = "[object Uint8ClampedArray]", yr = "[object Uint16Array]", mr = "[object Uint32Array]", c = {};
c[cr] = c[fr] = c[lr] = c[pr] = c[dr] = c[hr] = c[vr] = c[yr] = c[mr] = !0;
c[Zt] = c[Xt] = c[sr] = c[Jt] = c[ur] = c[Yt] = c[Qt] = c[kt] = c[er] = c[tr] = c[rr] = c[nr] = c[or] = c[ar] = c[ir] = !1;
function gr(e) {
  return S(e) && Oe(e.length) && !!c[z(e)];
}
function br(e) {
  return function(t) {
    return e(t);
  };
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, P = Ee && typeof module == "object" && module && !module.nodeType && module, _r = P && P.exports === Ee, G = _r && Te.process, le = function() {
  try {
    var e = P && P.require && P.require("util").types;
    return e || G && G.binding && G.binding("util");
  } catch {
  }
}(), pe = le && le.isTypedArray, $e = pe ? br(pe) : gr;
function Tr(e, t) {
  var r = K(e), n = !r && W(e), o = !r && !n && Se(e), a = !r && !n && !o && $e(e), s = r || n || o || a, i = s ? Ht(e.length, String) : [], u = i.length;
  for (var p in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    we(p, u)) || i.push(p);
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
  if (!T(e))
    return jr(e);
  var t = xe(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Or.call(e, n)) || r.push(n);
  return r;
}
function Ie(e) {
  return k(e) ? Tr(e) : xr(e);
}
var A = Y(Object, "create");
function Pr() {
  this.__data__ = A ? A(null) : {}, this.size = 0;
}
function Ar(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Sr = "__lodash_hash_undefined__", Er = Object.prototype, $r = Er.hasOwnProperty;
function Ir(e) {
  var t = this.__data__;
  if (A) {
    var r = t[e];
    return r === Sr ? void 0 : r;
  }
  return $r.call(t, e) ? t[e] : void 0;
}
var Mr = Object.prototype, Nr = Mr.hasOwnProperty;
function Rr(e) {
  var t = this.__data__;
  return A ? t[e] !== void 0 : Nr.call(t, e);
}
var zr = "__lodash_hash_undefined__";
function Dr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = A && t === void 0 ? zr : t, this;
}
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = Pr;
_.prototype.delete = Ar;
_.prototype.get = Ir;
_.prototype.has = Rr;
_.prototype.set = Dr;
function Fr() {
  this.__data__ = [], this.size = 0;
}
function F(e, t) {
  for (var r = e.length; r--; )
    if (D(e[r][0], t))
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
function g(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
g.prototype.clear = Fr;
g.prototype.delete = Hr;
g.prototype.get = Gr;
g.prototype.has = Lr;
g.prototype.set = Kr;
var Me = Y(C, "Map");
function Wr() {
  this.size = 0, this.__data__ = {
    hash: new _(),
    map: new (Me || g)(),
    string: new _()
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
function j(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
j.prototype.clear = Wr;
j.prototype.delete = Vr;
j.prototype.get = Zr;
j.prototype.has = Xr;
j.prototype.set = Jr;
var Ne = Cr(Object.getPrototypeOf, Object), Yr = "[object Object]", Qr = Function.prototype, kr = Object.prototype, Re = Qr.toString, en = kr.hasOwnProperty, tn = Re.call(Object);
function rn(e) {
  if (!S(e) || z(e) != Yr)
    return !1;
  var t = Ne(e);
  if (t === null)
    return !0;
  var r = en.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Re.call(r) == tn;
}
function nn() {
  this.__data__ = new g(), this.size = 0;
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
  if (r instanceof g) {
    var n = r.__data__;
    if (!Me || n.length < un - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new j(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function w(e) {
  var t = this.__data__ = new g(e);
  this.size = t.size;
}
w.prototype.clear = nn;
w.prototype.delete = on;
w.prototype.get = an;
w.prototype.has = sn;
w.prototype.set = cn;
var ze = typeof exports == "object" && exports && !exports.nodeType && exports, de = ze && typeof module == "object" && module && !module.nodeType && module, fn = de && de.exports === ze, he = fn ? C.Buffer : void 0;
he && he.allocUnsafe;
function ln(e, t) {
  return e.slice();
}
var ve = C.Uint8Array;
function pn(e) {
  var t = new e.constructor(e.byteLength);
  return new ve(t).set(new ve(e)), t;
}
function dn(e, t) {
  var r = pn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function hn(e) {
  return typeof e.constructor == "function" && !xe(e) ? bt(Ne(e)) : {};
}
function vn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var u = s[++o];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var yn = vn();
function q(e, t, r) {
  (r !== void 0 && !D(e[t], r) || r === void 0 && !(t in e)) && Q(e, t, r);
}
function mn(e) {
  return S(e) && k(e);
}
function V(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function gn(e) {
  return Nt(e, Ie(e));
}
function bn(e, t, r, n, o, a, s) {
  var i = V(e, r), u = V(t, r), p = s.get(u);
  if (p) {
    q(e, r, p);
    return;
  }
  var f = a ? a(i, u, r + "", e, t, s) : void 0, y = f === void 0;
  if (y) {
    var v = K(u), b = !v && Se(u), O = !v && !b && $e(u);
    f = u, v || b || O ? K(i) ? f = i : mn(i) ? f = Tt(i) : b ? (y = !1, f = ln(u)) : O ? (y = !1, f = dn(u)) : f = [] : rn(u) || W(u) ? (f = i, W(i) ? f = gn(i) : (!T(i) || J(i)) && (f = hn(u))) : y = !1;
  }
  y && (s.set(u, f), o(f, u, n, a, s), s.delete(u)), q(e, r, f);
}
function De(e, t, r, n, o) {
  e !== t && yn(t, function(a, s) {
    if (o || (o = new w()), T(a))
      bn(e, t, s, r, De, n, o);
    else {
      var i = n ? n(V(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), q(e, s, i);
    }
  }, Ie);
}
var ye = Bt(function(e, t, r) {
  De(e, t, r);
});
function An(e) {
  const { render: t, defaultConfig: r = {}, mountNode: n, configTransformer: o } = e;
  return function(a = {}) {
    const s = Ge();
    return function(u, p = {}) {
      let f = ye({}, r, p);
      o && (f = o(f, a));
      const y = re(We(a.visible) ? !0 : !!a.visible), v = {
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
            config: f,
            consumer: v
          };
          return () => t(u, $);
        }
      }), l = {
        ...ye(a, {
          appendTo: n || a.appendTo
        }),
        ...f,
        visible: y
      };
      return v.value = qe(s, Z(b), l), v.value;
    };
  };
}
export {
  be as CommandComponentConsumerInjectKey,
  ne as CommandComponentStackInjectKey,
  qe as CommandProviderWithRender,
  Le as ConsumerEventBus,
  ge as EVENT_NAME,
  Ke as PromiseWithResolvers,
  On as RxRender,
  L as activeConsumers,
  jn as busName2EventName,
  An as createAdapter,
  xn as destroyAllConsumer,
  Cn as eventName2BusName,
  wn as getMaxZIndex,
  We as isNull,
  Pn as useConsumer
};
