import './index.css';
var We = Object.defineProperty;
var qe = (e, t, n) => t in e ? We(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var N = (e, t, n) => qe(e, typeof t != "symbol" ? t + "" : t, n);
import { h as ee, defineComponent as P, createVNode as v, render as se, inject as Ce, provide as D, nextTick as Xe, getCurrentInstance as Ze, ref as X, createElementBlock as we, openBlock as Te, createElementVNode as xe, mergeProps as V, watch as Je } from "vue";
import { ElDialog as Pe, ElIcon as ie, ElDrawer as Ye } from "element-plus";
import { Popup as Qe } from "vant";
import { useRoute as ke } from "vue-router";
var M = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(M || {});
class et {
  constructor() {
    N(this, "map", /* @__PURE__ */ new WeakMap());
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
    const s = this.getEventsByConsumer(t, n);
    let a = r;
    o.once && (a = (...i) => {
      r(...i), this.off(t, n, a);
    }), s.add(a), o.callImmediatelyAfterDelay !== void 0 && setTimeout(() => {
      a();
    }, o.callImmediatelyAfterDelay || 0);
  }
  once(t, n, r) {
    this.on(t, n, r, { once: !0 });
  }
  emit(t, n, ...r) {
    this.getEventsByConsumer(t, n).forEach((s) => s(...r));
  }
  off(t, n, r) {
    this.getEventsByConsumer(t, n).delete(r);
  }
}
const Xr = (e = "") => e.slice(2).toLowerCase(), Zr = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, tt = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Jr = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const s = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(s) && s > n && (n = s);
    }
  }), +n;
}, nt = (e) => e == null, rt = (e, t, ...n) => {
  const r = { ...e }, o = (s) => {
    for (const a in s)
      if (s[a] && typeof s[a] == "object") {
        const i = r[a] && typeof r[a] == "object" ? r[a] : {};
        r[a] = rt(i, s[a]);
      } else
        r[a] = s[a];
  };
  return o(t), n.forEach(o), r;
}, Yr = (e) => ee(P({
  setup() {
    return e;
  }
})), Oe = Symbol("CommandComponentConsumerInjectKey"), ue = Symbol("CommandComponentStackInjectKey"), R = new et(), Z = /* @__PURE__ */ new Set(), ot = () => {
  Z.forEach((e) => {
    e.destroy();
  });
}, je = (e) => ({
  ...e.parent ? je(e.parent) : {},
  ...e.provides
});
function at(e, t, n) {
  var ae;
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || ((ae = e.vnode.el) == null ? void 0 : ae.parentElement) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-component-container", r.appendChild(o);
  const s = () => {
    if (h.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !1;
  }, a = () => {
    if (h.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !0;
  }, i = () => {
    Xe(() => {
      se(null, o), o.remove();
    });
  }, {
    promise: u,
    resolve: c,
    reject: l
  } = tt(), d = 3e3, p = (m = !1) => {
    m ? (s(), h.on(M.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: d
    })) : (Z.delete(h), h.stack.splice(h.stackIndex).forEach((_) => _.destroy(!0)), h.destroyed = !0);
  }, y = (m) => {
    c(m), p();
  }, T = (m) => {
    l(m), p();
  }, h = {
    meta: n.meta || {},
    promise: u,
    resolve: c,
    reject: l,
    destroyWithResolve: y,
    destroyWithReject: T,
    hide: s,
    show: a,
    destroy: p,
    container: o,
    visible: n.visible,
    on: (m, g, _ = {}) => R.on(h, m, g, _),
    once: (m, g) => R.once(h, m, g),
    emit: (m, ...g) => R.emit(h, m, ...g),
    off: (m, g) => R.off(h, m, g),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, x = v(/* @__PURE__ */ P({
    setup() {
      for (const _ in n.provideProps)
        D(_, n.provideProps[_]);
      const m = {
        // ...vnode.appContext!.provides,
        ...je(e)
      };
      for (const _ in m)
        D(_, m[_]);
      D(Oe, h);
      const g = Ce(ue, []);
      return h.stackIndex = g.length, g.push(h), D(ue, g), h.stack = g, () => ee(t);
    }
  }), null, null);
  return x.appContext = (e == null ? void 0 : e.appContext) || x.appContext, se(x, o), h.mounted = !0, Z.add(h), h;
}
const Qr = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return Ce(Oe, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Ee = typeof global == "object" && global && global.Object === Object && global, st = typeof self == "object" && self && self.Object === Object && self, O = Ee || st || Function("return this")(), z = O.Symbol, Ae = Object.prototype, it = Ae.hasOwnProperty, ut = Ae.toString, A = z ? z.toStringTag : void 0;
function lt(e) {
  var t = it.call(e, A), n = e[A];
  try {
    e[A] = void 0;
    var r = !0;
  } catch {
  }
  var o = ut.call(e);
  return r && (t ? e[A] = n : delete e[A]), o;
}
var ct = Object.prototype, dt = ct.toString;
function ft(e) {
  return dt.call(e);
}
var pt = "[object Null]", ht = "[object Undefined]", le = z ? z.toStringTag : void 0;
function F(e) {
  return e == null ? e === void 0 ? ht : pt : le && le in Object(e) ? lt(e) : ft(e);
}
function $(e) {
  return e != null && typeof e == "object";
}
var J = Array.isArray;
function w(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Se(e) {
  return e;
}
var mt = "[object AsyncFunction]", vt = "[object Function]", gt = "[object GeneratorFunction]", yt = "[object Proxy]";
function te(e) {
  if (!w(e))
    return !1;
  var t = F(e);
  return t == vt || t == gt || t == mt || t == yt;
}
var W = O["__core-js_shared__"], ce = function() {
  var e = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _t(e) {
  return !!ce && ce in e;
}
var bt = Function.prototype, Ct = bt.toString;
function wt(e) {
  if (e != null) {
    try {
      return Ct.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tt = /[\\^$.*+?()[\]{}|]/g, xt = /^\[object .+?Constructor\]$/, Pt = Function.prototype, Ot = Object.prototype, jt = Pt.toString, Et = Ot.hasOwnProperty, At = RegExp(
  "^" + jt.call(Et).replace(Tt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function St(e) {
  if (!w(e) || _t(e))
    return !1;
  var t = te(e) ? At : xt;
  return t.test(wt(e));
}
function It(e, t) {
  return e == null ? void 0 : e[t];
}
function ne(e, t) {
  var n = It(e, t);
  return St(n) ? n : void 0;
}
var de = Object.create, Mt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!w(t))
      return {};
    if (de)
      return de(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function $t(e, t, n) {
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
function Nt(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Dt = 800, Rt = 16, zt = Date.now;
function Bt(e) {
  var t = 0, n = 0;
  return function() {
    var r = zt(), o = Rt - (r - n);
    if (n = r, o > 0) {
      if (++t >= Dt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Vt(e) {
  return function() {
    return e;
  };
}
var B = function() {
  try {
    var e = ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ft = B ? function(e, t) {
  return B(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Vt(t),
    writable: !0
  });
} : Se, Ut = Bt(Ft), Lt = 9007199254740991, Ht = /^(?:0|[1-9]\d*)$/;
function Ie(e, t) {
  var n = typeof e;
  return t = t ?? Lt, !!t && (n == "number" || n != "symbol" && Ht.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function re(e, t, n) {
  t == "__proto__" && B ? B(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function U(e, t) {
  return e === t || e !== e && t !== t;
}
var Gt = Object.prototype, Kt = Gt.hasOwnProperty;
function Wt(e, t, n) {
  var r = e[t];
  (!(Kt.call(e, t) && U(r, n)) || n === void 0 && !(t in e)) && re(e, t, n);
}
function qt(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var s = -1, a = t.length; ++s < a; ) {
    var i = t[s], u = void 0;
    u === void 0 && (u = e[i]), o ? re(n, i, u) : Wt(n, i, u);
  }
  return n;
}
var fe = Math.max;
function Xt(e, t, n) {
  return t = fe(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = fe(r.length - t, 0), a = Array(s); ++o < s; )
      a[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(a), $t(e, this, i);
  };
}
function Zt(e, t) {
  return Ut(Xt(e, t, Se), e + "");
}
var Jt = 9007199254740991;
function Me(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jt;
}
function oe(e) {
  return e != null && Me(e.length) && !te(e);
}
function Yt(e, t, n) {
  if (!w(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? oe(n) && Ie(t, n.length) : r == "string" && t in n) ? U(n[t], e) : !1;
}
function Qt(e) {
  return Zt(function(t, n) {
    var r = -1, o = n.length, s = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, a && Yt(n[0], n[1], a) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, s);
    }
    return t;
  });
}
var kt = Object.prototype;
function $e(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || kt;
  return e === n;
}
function en(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var tn = "[object Arguments]";
function pe(e) {
  return $(e) && F(e) == tn;
}
var Ne = Object.prototype, nn = Ne.hasOwnProperty, rn = Ne.propertyIsEnumerable, Y = pe(/* @__PURE__ */ function() {
  return arguments;
}()) ? pe : function(e) {
  return $(e) && nn.call(e, "callee") && !rn.call(e, "callee");
};
function on() {
  return !1;
}
var De = typeof exports == "object" && exports && !exports.nodeType && exports, he = De && typeof module == "object" && module && !module.nodeType && module, an = he && he.exports === De, me = an ? O.Buffer : void 0, sn = me ? me.isBuffer : void 0, Re = sn || on, un = "[object Arguments]", ln = "[object Array]", cn = "[object Boolean]", dn = "[object Date]", fn = "[object Error]", pn = "[object Function]", hn = "[object Map]", mn = "[object Number]", vn = "[object Object]", gn = "[object RegExp]", yn = "[object Set]", _n = "[object String]", bn = "[object WeakMap]", Cn = "[object ArrayBuffer]", wn = "[object DataView]", Tn = "[object Float32Array]", xn = "[object Float64Array]", Pn = "[object Int8Array]", On = "[object Int16Array]", jn = "[object Int32Array]", En = "[object Uint8Array]", An = "[object Uint8ClampedArray]", Sn = "[object Uint16Array]", In = "[object Uint32Array]", f = {};
f[Tn] = f[xn] = f[Pn] = f[On] = f[jn] = f[En] = f[An] = f[Sn] = f[In] = !0;
f[un] = f[ln] = f[Cn] = f[cn] = f[wn] = f[dn] = f[fn] = f[pn] = f[hn] = f[mn] = f[vn] = f[gn] = f[yn] = f[_n] = f[bn] = !1;
function Mn(e) {
  return $(e) && Me(e.length) && !!f[F(e)];
}
function $n(e) {
  return function(t) {
    return e(t);
  };
}
var ze = typeof exports == "object" && exports && !exports.nodeType && exports, S = ze && typeof module == "object" && module && !module.nodeType && module, Nn = S && S.exports === ze, q = Nn && Ee.process, ve = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || q && q.binding && q.binding("util");
  } catch {
  }
}(), ge = ve && ve.isTypedArray, Be = ge ? $n(ge) : Mn;
function Dn(e, t) {
  var n = J(e), r = !n && Y(e), o = !n && !r && Re(e), s = !n && !r && !o && Be(e), a = n || r || o || s, i = a ? en(e.length, String) : [], u = i.length;
  for (var c in e)
    a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ie(c, u)) || i.push(c);
  return i;
}
function Rn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function zn(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Bn = Object.prototype, Vn = Bn.hasOwnProperty;
function Fn(e) {
  if (!w(e))
    return zn(e);
  var t = $e(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Vn.call(e, r)) || n.push(r);
  return n;
}
function Ve(e) {
  return oe(e) ? Dn(e) : Fn(e);
}
var I = ne(Object, "create");
function Un() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function Ln(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Hn = "__lodash_hash_undefined__", Gn = Object.prototype, Kn = Gn.hasOwnProperty;
function Wn(e) {
  var t = this.__data__;
  if (I) {
    var n = t[e];
    return n === Hn ? void 0 : n;
  }
  return Kn.call(t, e) ? t[e] : void 0;
}
var qn = Object.prototype, Xn = qn.hasOwnProperty;
function Zn(e) {
  var t = this.__data__;
  return I ? t[e] !== void 0 : Xn.call(t, e);
}
var Jn = "__lodash_hash_undefined__";
function Yn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = I && t === void 0 ? Jn : t, this;
}
function C(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
C.prototype.clear = Un;
C.prototype.delete = Ln;
C.prototype.get = Wn;
C.prototype.has = Zn;
C.prototype.set = Yn;
function Qn() {
  this.__data__ = [], this.size = 0;
}
function L(e, t) {
  for (var n = e.length; n--; )
    if (U(e[n][0], t))
      return n;
  return -1;
}
var kn = Array.prototype, er = kn.splice;
function tr(e) {
  var t = this.__data__, n = L(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : er.call(t, n, 1), --this.size, !0;
}
function nr(e) {
  var t = this.__data__, n = L(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function rr(e) {
  return L(this.__data__, e) > -1;
}
function or(e, t) {
  var n = this.__data__, r = L(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function b(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
b.prototype.clear = Qn;
b.prototype.delete = tr;
b.prototype.get = nr;
b.prototype.has = rr;
b.prototype.set = or;
var Fe = ne(O, "Map");
function ar() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (Fe || b)(),
    string: new C()
  };
}
function sr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function H(e, t) {
  var n = e.__data__;
  return sr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ir(e) {
  var t = H(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ur(e) {
  return H(this, e).get(e);
}
function lr(e) {
  return H(this, e).has(e);
}
function cr(e, t) {
  var n = H(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function j(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
j.prototype.clear = ar;
j.prototype.delete = ir;
j.prototype.get = ur;
j.prototype.has = lr;
j.prototype.set = cr;
var Ue = Rn(Object.getPrototypeOf, Object), dr = "[object Object]", fr = Function.prototype, pr = Object.prototype, Le = fr.toString, hr = pr.hasOwnProperty, mr = Le.call(Object);
function vr(e) {
  if (!$(e) || F(e) != dr)
    return !1;
  var t = Ue(e);
  if (t === null)
    return !0;
  var n = hr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Le.call(n) == mr;
}
function gr() {
  this.__data__ = new b(), this.size = 0;
}
function yr(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function _r(e) {
  return this.__data__.get(e);
}
function br(e) {
  return this.__data__.has(e);
}
var Cr = 200;
function wr(e, t) {
  var n = this.__data__;
  if (n instanceof b) {
    var r = n.__data__;
    if (!Fe || r.length < Cr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new j(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function E(e) {
  var t = this.__data__ = new b(e);
  this.size = t.size;
}
E.prototype.clear = gr;
E.prototype.delete = yr;
E.prototype.get = _r;
E.prototype.has = br;
E.prototype.set = wr;
var He = typeof exports == "object" && exports && !exports.nodeType && exports, ye = He && typeof module == "object" && module && !module.nodeType && module, Tr = ye && ye.exports === He, _e = Tr ? O.Buffer : void 0;
_e && _e.allocUnsafe;
function xr(e, t) {
  return e.slice();
}
var be = O.Uint8Array;
function Pr(e) {
  var t = new e.constructor(e.byteLength);
  return new be(t).set(new be(e)), t;
}
function Or(e, t) {
  var n = Pr(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function jr(e) {
  return typeof e.constructor == "function" && !$e(e) ? Mt(Ue(e)) : {};
}
function Er(e) {
  return function(t, n, r) {
    for (var o = -1, s = Object(t), a = r(t), i = a.length; i--; ) {
      var u = a[++o];
      if (n(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var Ar = Er();
function Q(e, t, n) {
  (n !== void 0 && !U(e[t], n) || n === void 0 && !(t in e)) && re(e, t, n);
}
function Sr(e) {
  return $(e) && oe(e);
}
function k(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Ir(e) {
  return qt(e, Ve(e));
}
function Mr(e, t, n, r, o, s, a) {
  var i = k(e, n), u = k(t, n), c = a.get(u);
  if (c) {
    Q(e, n, c);
    return;
  }
  var l = s ? s(i, u, n + "", e, t, a) : void 0, d = l === void 0;
  if (d) {
    var p = J(u), y = !p && Re(u), T = !p && !y && Be(u);
    l = u, p || y || T ? J(i) ? l = i : Sr(i) ? l = Nt(i) : y ? (d = !1, l = xr(u)) : T ? (d = !1, l = Or(u)) : l = [] : vr(u) || Y(u) ? (l = i, Y(i) ? l = Ir(i) : (!w(i) || te(i)) && (l = jr(u))) : d = !1;
  }
  d && (a.set(u, l), o(l, u, r, s, a), a.delete(u)), Q(e, n, l);
}
function Ge(e, t, n, r, o) {
  e !== t && Ar(t, function(s, a) {
    if (o || (o = new E()), w(s))
      Mr(e, t, a, n, Ge, r, o);
    else {
      var i = r ? r(k(e, a), s, a + "", e, t, o) : void 0;
      i === void 0 && (i = s), Q(e, a, i);
    }
  }, Ve);
}
var Ke = Qt(function(e, t, n) {
  Ge(e, t, n);
});
class G {
  constructor() {
    N(this, "mountNode");
    N(this, "parentInstance");
    this.parentInstance = Ze();
  }
  setMountNode(t) {
    this.mountNode = t;
  }
  createCommand(t) {
    return (n, r = {}) => {
      const o = X(nt(t.visible) ? !0 : !!t.visible);
      return this.createConsumer(n, o, r, t);
    };
  }
  createConsumer(t, n, r, o) {
    const s = {
      value: null
    }, a = P({
      setup: () => {
        const c = X(), l = () => {
          Promise.resolve().then(() => {
            s.value.componentRef = c;
          });
        };
        return () => this.renderComponent(t, {
          componentRef: c,
          visible: n,
          onMounted: l,
          config: r,
          consumer: s
        });
      }
    }), u = {
      ...Ke(o, r),
      visible: n
    };
    return s.value = at(this.parentInstance, ee(a), u), s.value;
  }
}
/*! Element Plus Icons Vue v2.3.1 */
var $r = /* @__PURE__ */ P({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (Te(), we("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      xe("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Nr = $r, Dr = /* @__PURE__ */ P({
  name: "FullScreen",
  __name: "full-screen",
  setup(e) {
    return (t, n) => (Te(), we("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      xe("path", {
        fill: "currentColor",
        d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
      })
    ]));
  }
}), Rr = Dr;
class zr extends G {
  renderComponent(t, n) {
    const {
      componentRef: r,
      visible: o,
      onMounted: s,
      config: a,
      consumer: i
    } = n, u = (l) => {
      l(), i.value.destroy();
    }, c = (...l) => {
      var d, p;
      return i.value.emit(M.destroy), (p = (d = a.attrs) == null ? void 0 : d.onClosed) == null ? void 0 : p.call(d, ...l);
    };
    return v(Pe, V({
      ref: r,
      modelValue: o.value,
      beforeClose: u,
      onVnodeMounted: s,
      title: a.title,
      width: a.width
    }, {
      ...a.attrs
    }, {
      onClosed: c
    }), {
      default: () => t,
      ...a.slots
    });
  }
}
const kr = (e = {}) => {
  const t = new zr();
  return t.setMountNode(e.appendTo), t.createCommand(e);
};
class Br extends G {
  renderComponent(t, n) {
    const {
      componentRef: r,
      visible: o,
      onMounted: s,
      config: a,
      consumer: i
    } = n, u = (d) => {
      d(), i.value.destroy();
    }, c = (...d) => {
      var p, y;
      return i.value.emit(M.destroy), (y = (p = a.attrs) == null ? void 0 : p.onClosed) == null ? void 0 : y.call(p, ...d);
    };
    return v(/* @__PURE__ */ P({
      setup() {
        const d = X(!1);
        return () => {
          var p;
          return v(Pe, V({
            ref: r,
            modelValue: o.value,
            beforeClose: u,
            onVnodeMounted: s,
            title: a.title,
            width: a.width
          }, {
            ...a.attrs
          }, {
            fullscreen: d.value,
            showClose: !1,
            onClosed: c,
            draggable: ((p = a.attrs) == null ? void 0 : p.draggable) === void 0 ? !0 : a.attrs.draggable
          }), {
            header: ({
              titleId: y,
              titleClass: T,
              close: h
            }) => {
              var K, x;
              return (K = a.slots) != null && K.header ? a.slots.header() : v("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }
              }, [v("span", {
                id: y,
                class: T
              }, [a.title || ""]), v("div", {
                class: "flex items-center gap-2.5"
              }, [v("div", {
                class: "cursor-pointer hover:text-[color:var(--el-color-primary)]",
                onClick: () => d.value = !d.value
              }, [v(ie, {
                class: "el-icon--left"
              }, {
                default: () => [v(Rr, null, null)]
              })]), ((x = a.attrs) == null ? void 0 : x.showClose) !== !1 && v("div", {
                class: "cursor-pointer hover:text-[color:var(--el-color-primary)]",
                onClick: h
              }, [v(ie, {
                class: "el-icon--left"
              }, {
                default: () => [v(Nr, null, null)]
              })])])]);
            },
            default: () => t,
            ...a.slots
          });
        };
      }
    }), null, null);
  }
}
const eo = (e = {}) => {
  const t = new Br();
  return t.setMountNode(e.appendTo), t.createCommand(e);
};
class Vr extends G {
  renderComponent(t, n) {
    const {
      componentRef: r,
      visible: o,
      onMounted: s,
      config: a,
      consumer: i
    } = n, u = (l) => {
      l(), i.value.destroy();
    }, c = (...l) => {
      var d, p;
      return i.value.emit(M.destroy), (p = (d = a.attrs) == null ? void 0 : d.onClosed) == null ? void 0 : p.call(d, ...l);
    };
    return v(Ye, V({
      ref: r,
      modelValue: o.value,
      beforeClose: u,
      onVnodeMounted: s
    }, {
      title: a.title,
      ...a.attrs
    }, {
      onClosed: c
    }), {
      default: () => t,
      ...a.slots
    });
  }
}
const to = (e = {}) => {
  const t = new Vr();
  return t.setMountNode(e.appendTo), t.createCommand(e);
}, Fr = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
};
class Ur extends G {
  renderComponent(t, n) {
    const {
      componentRef: r,
      visible: o,
      onMounted: s,
      config: a,
      consumer: i
    } = n, u = () => {
      i.value.destroy();
    };
    return v(Qe, V({
      ref: r,
      show: o.value,
      "onUpdate:show": (c) => o.value = c,
      onClickCloseIcon: u,
      onVnodeMounted: s
    }, {
      ...Fr,
      ...a.attrs
    }), {
      default: () => t,
      ...a.slots
    });
  }
}
const Lr = (e = {}) => {
  const t = new Ur();
  return t.setMountNode(e.appendTo), t.createCommand(e);
}, no = (e = {}) => {
  const t = Lr(e);
  return (n, r = {}) => {
    const o = Ke({}, r, {
      attrs: {
        position: "bottom",
        style: {
          width: "100vw"
        }
      }
    });
    return t(n, o);
  };
}, ro = () => {
  const e = ke();
  Je(
    () => e.path,
    () => {
      ot();
    }
  );
};
export {
  Oe as CommandComponentConsumerInjectKey,
  ue as CommandComponentStackInjectKey,
  at as CommandProviderWithRender,
  et as ConsumerEventBus,
  M as EVENT_NAME,
  Yr as JSXReactive,
  tt as PromiseWithResolvers,
  G as UIComponentAdapter,
  Z as activeConsumers,
  Zr as busName2EventName,
  rt as deepMerge,
  ot as destroyAllConsumer,
  Xr as eventName2BusName,
  Jr as getMaxZIndex,
  nt as isNull,
  ro as useCloseAllOnRouteChange,
  Qr as useConsumer,
  kr as useElementPlusDialog,
  eo as useElementPlusDialogPro,
  to as useElementPlusDrawer,
  Lr as useVantUiPopup,
  no as useVantUiPopupOnBottom
};
