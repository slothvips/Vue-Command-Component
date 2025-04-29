var Fe = Object.defineProperty;
var Ve = (e, t, n) => t in e ? Fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => Ve(e, typeof t != "symbol" ? t + "" : t, n);
import { createVNode as D, defineComponent as ye, render as ne, inject as ge, provide as I, h as be, nextTick as He, getCurrentInstance as Ge, ref as re, mergeProps as X, watch as Le } from "vue";
import { ElDialog as Ke, ElDrawer as We } from "element-plus";
import { Popup as qe } from "vant";
import { useRoute as Ze } from "vue-router";
var R = /* @__PURE__ */ ((e) => (e.destroy = "destroy", e))(R || {});
class Xe {
  constructor() {
    S(this, "map", /* @__PURE__ */ new WeakMap());
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
const Br = (e = "") => e.slice(2).toLowerCase(), Fr = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Je = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Vr = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const s = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(s) && s > n && (n = s);
    }
  }), +n;
}, Ye = (e) => e == null, Qe = (e, t, ...n) => {
  const r = { ...e }, o = (s) => {
    for (const a in s)
      if (s[a] && typeof s[a] == "object") {
        const i = r[a] && typeof r[a] == "object" ? r[a] : {};
        r[a] = Qe(i, s[a]);
      } else
        r[a] = s[a];
  };
  return o(t), n.forEach(o), r;
}, _e = Symbol("CommandComponentConsumerInjectKey"), oe = Symbol("CommandComponentStackInjectKey"), $ = new Xe(), L = /* @__PURE__ */ new Set(), ke = () => {
  L.forEach((e) => {
    e.destroy();
  });
}, Ce = (e) => ({
  ...e.parent ? Ce(e.parent) : {},
  ...e.provides
});
function et(e, t, n) {
  var te;
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || ((te = e.vnode.el) == null ? void 0 : te.parentElement) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-component-container", r.appendChild(o);
  const s = () => {
    if (d.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !1;
  }, a = () => {
    if (d.destroyed) throw new Error("Consumer has been destroyed");
    n.visible.value = !0;
  }, i = () => {
    He(() => {
      ne(null, o), o.remove();
    });
  }, {
    promise: u,
    resolve: f,
    reject: c
  } = Je(), p = 3e3, m = (h = !1) => {
    h ? (s(), d.on(R.destroy, i, {
      once: !0,
      callImmediatelyAfterDelay: p
    })) : (L.delete(d), d.stack.splice(d.stackIndex).forEach((y) => y.destroy(!0)), d.destroyed = !0);
  }, O = (h) => {
    f(h), m();
  }, E = (h) => {
    c(h), m();
  }, d = {
    meta: n.meta || {},
    promise: u,
    resolve: f,
    reject: c,
    destroyWithResolve: O,
    destroyWithReject: E,
    hide: s,
    show: a,
    destroy: m,
    container: o,
    visible: n.visible,
    on: (h, v, y = {}) => $.on(d, h, v, y),
    once: (h, v) => $.once(d, h, v),
    emit: (h, ...v) => $.emit(d, h, ...v),
    off: (h, v) => $.off(d, h, v),
    stack: [],
    stackIndex: -1,
    componentRef: void 0,
    mounted: !1,
    destroyed: !1
  }, V = D(/* @__PURE__ */ ye({
    setup() {
      for (const y in n.provideProps)
        I(y, n.provideProps[y]);
      const h = {
        // ...vnode.appContext!.provides,
        ...Ce(e)
      };
      for (const y in h)
        I(y, h[y]);
      I(_e, d);
      const v = ge(oe, []);
      return d.stackIndex = v.length, v.push(d), I(oe, v), d.stack = v, () => be(t);
    }
  }), null, null);
  return V.appContext = (e == null ? void 0 : e.appContext) || V.appContext, ne(V, o), d.mounted = !0, L.add(d), d;
}
const Hr = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: useConsumer(false)`);
  return ge(_e, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Te = typeof global == "object" && global && global.Object === Object && global, tt = typeof self == "object" && self && self.Object === Object && self, C = Te || tt || Function("return this")(), M = C.Symbol, we = Object.prototype, nt = we.hasOwnProperty, rt = we.toString, j = M ? M.toStringTag : void 0;
function ot(e) {
  var t = nt.call(e, j), n = e[j];
  try {
    e[j] = void 0;
    var r = !0;
  } catch {
  }
  var o = rt.call(e);
  return r && (t ? e[j] = n : delete e[j]), o;
}
var at = Object.prototype, st = at.toString;
function it(e) {
  return st.call(e);
}
var ut = "[object Null]", ct = "[object Undefined]", ae = M ? M.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? ct : ut : ae && ae in Object(e) ? ot(e) : it(e);
}
function A(e) {
  return e != null && typeof e == "object";
}
var K = Array.isArray;
function _(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Oe(e) {
  return e;
}
var lt = "[object AsyncFunction]", ft = "[object Function]", dt = "[object GeneratorFunction]", pt = "[object Proxy]";
function J(e) {
  if (!_(e))
    return !1;
  var t = z(e);
  return t == ft || t == dt || t == lt || t == pt;
}
var H = C["__core-js_shared__"], se = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ht(e) {
  return !!se && se in e;
}
var mt = Function.prototype, vt = mt.toString;
function yt(e) {
  if (e != null) {
    try {
      return vt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var gt = /[\\^$.*+?()[\]{}|]/g, bt = /^\[object .+?Constructor\]$/, _t = Function.prototype, Ct = Object.prototype, Tt = _t.toString, wt = Ct.hasOwnProperty, Ot = RegExp(
  "^" + Tt.call(wt).replace(gt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jt(e) {
  if (!_(e) || ht(e))
    return !1;
  var t = J(e) ? Ot : bt;
  return t.test(yt(e));
}
function Pt(e, t) {
  return e == null ? void 0 : e[t];
}
function Y(e, t) {
  var n = Pt(e, t);
  return jt(n) ? n : void 0;
}
var ie = Object.create, xt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!_(t))
      return {};
    if (ie)
      return ie(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function At(e, t, n) {
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
function Et(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var St = 800, It = 16, $t = Date.now;
function Mt(e) {
  var t = 0, n = 0;
  return function() {
    var r = $t(), o = It - (r - n);
    if (n = r, o > 0) {
      if (++t >= St)
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
var N = function() {
  try {
    var e = Y(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Dt = N ? function(e, t) {
  return N(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Nt(t),
    writable: !0
  });
} : Oe, Rt = Mt(Dt), zt = 9007199254740991, Ut = /^(?:0|[1-9]\d*)$/;
function je(e, t) {
  var n = typeof e;
  return t = t ?? zt, !!t && (n == "number" || n != "symbol" && Ut.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Q(e, t, n) {
  t == "__proto__" && N ? N(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function U(e, t) {
  return e === t || e !== e && t !== t;
}
var Bt = Object.prototype, Ft = Bt.hasOwnProperty;
function Vt(e, t, n) {
  var r = e[t];
  (!(Ft.call(e, t) && U(r, n)) || n === void 0 && !(t in e)) && Q(e, t, n);
}
function Ht(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var s = -1, a = t.length; ++s < a; ) {
    var i = t[s], u = void 0;
    u === void 0 && (u = e[i]), o ? Q(n, i, u) : Vt(n, i, u);
  }
  return n;
}
var ue = Math.max;
function Gt(e, t, n) {
  return t = ue(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = ue(r.length - t, 0), a = Array(s); ++o < s; )
      a[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(a), At(e, this, i);
  };
}
function Lt(e, t) {
  return Rt(Gt(e, t, Oe), e + "");
}
var Kt = 9007199254740991;
function Pe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Kt;
}
function k(e) {
  return e != null && Pe(e.length) && !J(e);
}
function Wt(e, t, n) {
  if (!_(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? k(n) && je(t, n.length) : r == "string" && t in n) ? U(n[t], e) : !1;
}
function qt(e) {
  return Lt(function(t, n) {
    var r = -1, o = n.length, s = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, a && Wt(n[0], n[1], a) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, s);
    }
    return t;
  });
}
var Zt = Object.prototype;
function xe(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Zt;
  return e === n;
}
function Xt(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Jt = "[object Arguments]";
function ce(e) {
  return A(e) && z(e) == Jt;
}
var Ae = Object.prototype, Yt = Ae.hasOwnProperty, Qt = Ae.propertyIsEnumerable, W = ce(/* @__PURE__ */ function() {
  return arguments;
}()) ? ce : function(e) {
  return A(e) && Yt.call(e, "callee") && !Qt.call(e, "callee");
};
function kt() {
  return !1;
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, le = Ee && typeof module == "object" && module && !module.nodeType && module, en = le && le.exports === Ee, fe = en ? C.Buffer : void 0, tn = fe ? fe.isBuffer : void 0, Se = tn || kt, nn = "[object Arguments]", rn = "[object Array]", on = "[object Boolean]", an = "[object Date]", sn = "[object Error]", un = "[object Function]", cn = "[object Map]", ln = "[object Number]", fn = "[object Object]", dn = "[object RegExp]", pn = "[object Set]", hn = "[object String]", mn = "[object WeakMap]", vn = "[object ArrayBuffer]", yn = "[object DataView]", gn = "[object Float32Array]", bn = "[object Float64Array]", _n = "[object Int8Array]", Cn = "[object Int16Array]", Tn = "[object Int32Array]", wn = "[object Uint8Array]", On = "[object Uint8ClampedArray]", jn = "[object Uint16Array]", Pn = "[object Uint32Array]", l = {};
l[gn] = l[bn] = l[_n] = l[Cn] = l[Tn] = l[wn] = l[On] = l[jn] = l[Pn] = !0;
l[nn] = l[rn] = l[vn] = l[on] = l[yn] = l[an] = l[sn] = l[un] = l[cn] = l[ln] = l[fn] = l[dn] = l[pn] = l[hn] = l[mn] = !1;
function xn(e) {
  return A(e) && Pe(e.length) && !!l[z(e)];
}
function An(e) {
  return function(t) {
    return e(t);
  };
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, P = Ie && typeof module == "object" && module && !module.nodeType && module, En = P && P.exports === Ie, G = En && Te.process, de = function() {
  try {
    var e = P && P.require && P.require("util").types;
    return e || G && G.binding && G.binding("util");
  } catch {
  }
}(), pe = de && de.isTypedArray, $e = pe ? An(pe) : xn;
function Sn(e, t) {
  var n = K(e), r = !n && W(e), o = !n && !r && Se(e), s = !n && !r && !o && $e(e), a = n || r || o || s, i = a ? Xt(e.length, String) : [], u = i.length;
  for (var f in e)
    a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    je(f, u)) || i.push(f);
  return i;
}
function In(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function $n(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Mn = Object.prototype, Nn = Mn.hasOwnProperty;
function Dn(e) {
  if (!_(e))
    return $n(e);
  var t = xe(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Nn.call(e, r)) || n.push(r);
  return n;
}
function Me(e) {
  return k(e) ? Sn(e) : Dn(e);
}
var x = Y(Object, "create");
function Rn() {
  this.__data__ = x ? x(null) : {}, this.size = 0;
}
function zn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Un = "__lodash_hash_undefined__", Bn = Object.prototype, Fn = Bn.hasOwnProperty;
function Vn(e) {
  var t = this.__data__;
  if (x) {
    var n = t[e];
    return n === Un ? void 0 : n;
  }
  return Fn.call(t, e) ? t[e] : void 0;
}
var Hn = Object.prototype, Gn = Hn.hasOwnProperty;
function Ln(e) {
  var t = this.__data__;
  return x ? t[e] !== void 0 : Gn.call(t, e);
}
var Kn = "__lodash_hash_undefined__";
function Wn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = x && t === void 0 ? Kn : t, this;
}
function b(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
b.prototype.clear = Rn;
b.prototype.delete = zn;
b.prototype.get = Vn;
b.prototype.has = Ln;
b.prototype.set = Wn;
function qn() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var n = e.length; n--; )
    if (U(e[n][0], t))
      return n;
  return -1;
}
var Zn = Array.prototype, Xn = Zn.splice;
function Jn(e) {
  var t = this.__data__, n = B(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Xn.call(t, n, 1), --this.size, !0;
}
function Yn(e) {
  var t = this.__data__, n = B(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Qn(e) {
  return B(this.__data__, e) > -1;
}
function kn(e, t) {
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
g.prototype.clear = qn;
g.prototype.delete = Jn;
g.prototype.get = Yn;
g.prototype.has = Qn;
g.prototype.set = kn;
var Ne = Y(C, "Map");
function er() {
  this.size = 0, this.__data__ = {
    hash: new b(),
    map: new (Ne || g)(),
    string: new b()
  };
}
function tr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function F(e, t) {
  var n = e.__data__;
  return tr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function nr(e) {
  var t = F(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rr(e) {
  return F(this, e).get(e);
}
function or(e) {
  return F(this, e).has(e);
}
function ar(e, t) {
  var n = F(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function T(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
T.prototype.clear = er;
T.prototype.delete = nr;
T.prototype.get = rr;
T.prototype.has = or;
T.prototype.set = ar;
var De = In(Object.getPrototypeOf, Object), sr = "[object Object]", ir = Function.prototype, ur = Object.prototype, Re = ir.toString, cr = ur.hasOwnProperty, lr = Re.call(Object);
function fr(e) {
  if (!A(e) || z(e) != sr)
    return !1;
  var t = De(e);
  if (t === null)
    return !0;
  var n = cr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Re.call(n) == lr;
}
function dr() {
  this.__data__ = new g(), this.size = 0;
}
function pr(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function hr(e) {
  return this.__data__.get(e);
}
function mr(e) {
  return this.__data__.has(e);
}
var vr = 200;
function yr(e, t) {
  var n = this.__data__;
  if (n instanceof g) {
    var r = n.__data__;
    if (!Ne || r.length < vr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new T(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function w(e) {
  var t = this.__data__ = new g(e);
  this.size = t.size;
}
w.prototype.clear = dr;
w.prototype.delete = pr;
w.prototype.get = hr;
w.prototype.has = mr;
w.prototype.set = yr;
var ze = typeof exports == "object" && exports && !exports.nodeType && exports, he = ze && typeof module == "object" && module && !module.nodeType && module, gr = he && he.exports === ze, me = gr ? C.Buffer : void 0;
me && me.allocUnsafe;
function br(e, t) {
  return e.slice();
}
var ve = C.Uint8Array;
function _r(e) {
  var t = new e.constructor(e.byteLength);
  return new ve(t).set(new ve(e)), t;
}
function Cr(e, t) {
  var n = _r(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function Tr(e) {
  return typeof e.constructor == "function" && !xe(e) ? xt(De(e)) : {};
}
function wr(e) {
  return function(t, n, r) {
    for (var o = -1, s = Object(t), a = r(t), i = a.length; i--; ) {
      var u = a[++o];
      if (n(s[u], u, s) === !1)
        break;
    }
    return t;
  };
}
var Or = wr();
function q(e, t, n) {
  (n !== void 0 && !U(e[t], n) || n === void 0 && !(t in e)) && Q(e, t, n);
}
function jr(e) {
  return A(e) && k(e);
}
function Z(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Pr(e) {
  return Ht(e, Me(e));
}
function xr(e, t, n, r, o, s, a) {
  var i = Z(e, n), u = Z(t, n), f = a.get(u);
  if (f) {
    q(e, n, f);
    return;
  }
  var c = s ? s(i, u, n + "", e, t, a) : void 0, p = c === void 0;
  if (p) {
    var m = K(u), O = !m && Se(u), E = !m && !O && $e(u);
    c = u, m || O || E ? K(i) ? c = i : jr(i) ? c = Et(i) : O ? (p = !1, c = br(u)) : E ? (p = !1, c = Cr(u)) : c = [] : fr(u) || W(u) ? (c = i, W(i) ? c = Pr(i) : (!_(i) || J(i)) && (c = Tr(u))) : p = !1;
  }
  p && (a.set(u, c), o(c, u, r, s, a), a.delete(u)), q(e, n, c);
}
function Ue(e, t, n, r, o) {
  e !== t && Or(t, function(s, a) {
    if (o || (o = new w()), _(s))
      xr(e, t, a, n, Ue, r, o);
    else {
      var i = r ? r(Z(e, a), s, a + "", e, t, o) : void 0;
      i === void 0 && (i = s), q(e, a, i);
    }
  }, Me);
}
var Be = qt(function(e, t, n) {
  Ue(e, t, n);
});
class ee {
  constructor() {
    S(this, "mountNode");
    S(this, "parentInstance");
    this.parentInstance = Ge();
  }
  setMountNode(t) {
    this.mountNode = t;
  }
  createCommand(t) {
    return (n, r = {}) => {
      const o = re(Ye(t.visible) ? !0 : !!t.visible);
      return this.createConsumer(n, o, r, t);
    };
  }
  createConsumer(t, n, r, o) {
    const s = {
      value: null
    }, a = ye({
      setup: () => {
        const f = re(), c = () => {
          Promise.resolve().then(() => {
            s.value.componentRef = f;
          });
        };
        return () => this.renderComponent(t, {
          componentRef: f,
          visible: n.value,
          onMounted: c,
          config: r,
          consumer: s
        });
      }
    }), u = {
      ...Be(o, r),
      visible: n
    };
    return s.value = et(this.parentInstance, be(a), u), s.value;
  }
}
class Ar extends ee {
  renderComponent(t, n) {
    const {
      componentRef: r,
      visible: o,
      onMounted: s,
      config: a,
      consumer: i
    } = n, u = (c) => {
      c(), i.value.destroy();
    }, f = (...c) => {
      var p, m;
      return i.value.emit(R.destroy), (m = (p = a.attrs) == null ? void 0 : p.onClosed) == null ? void 0 : m.call(p, ...c);
    };
    return D(Ke, X({
      ref: r,
      modelValue: o,
      beforeClose: u,
      onVnodeMounted: s,
      title: a.title,
      width: a.width
    }, {
      ...a.attrs
    }, {
      onClosed: f
    }), {
      default: () => t,
      ...a.slots
    });
  }
}
const Gr = (e = {}) => {
  const t = new Ar();
  return t.setMountNode(e.appendTo), t.createCommand(e);
};
class Er extends ee {
  renderComponent(t, n) {
    const {
      componentRef: r,
      visible: o,
      onMounted: s,
      config: a,
      consumer: i
    } = n, u = (c) => {
      c(), i.value.destroy();
    }, f = (...c) => {
      var p, m;
      return i.value.emit(R.destroy), (m = (p = a.attrs) == null ? void 0 : p.onClosed) == null ? void 0 : m.call(p, ...c);
    };
    return D(We, X({
      ref: r,
      modelValue: o,
      beforeClose: u,
      onVnodeMounted: s
    }, {
      title: a.title,
      ...a.attrs
    }, {
      onClosed: f
    }), {
      default: () => t,
      ...a.slots
    });
  }
}
const Lr = (e = {}) => {
  const t = new Er();
  return t.setMountNode(e.appendTo), t.createCommand(e);
}, Sr = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
};
class Ir extends ee {
  renderComponent(t, n) {
    const {
      componentRef: r,
      visible: o,
      onMounted: s,
      config: a,
      consumer: i
    } = n;
    return D(qe, X({
      ref: r,
      show: o,
      onClickCloseIcon: () => {
        i.value.destroy();
      },
      onVnodeMounted: s
    }, {
      ...Sr,
      ...a.attrs
    }), {
      default: () => t,
      ...a.slots
    });
  }
}
const $r = (e = {}) => {
  const t = new Ir();
  return t.setMountNode(e.appendTo), t.createCommand(e);
}, Kr = (e = {}) => {
  const t = $r(e);
  return (n, r = {}) => {
    const o = Be({}, r, {
      attrs: {
        position: "bottom",
        style: {
          width: "100vw"
        }
      }
    });
    return t(n, o);
  };
}, Wr = () => {
  const e = Ze();
  Le(
    () => e.path,
    () => {
      console.log("路由变化,关闭所有存在的弹窗"), ke();
    }
  );
};
export {
  _e as CommandComponentConsumerInjectKey,
  oe as CommandComponentStackInjectKey,
  et as CommandProviderWithRender,
  Xe as ConsumerEventBus,
  R as EVENT_NAME,
  Je as PromiseWithResolvers,
  L as activeConsumers,
  Fr as busName2EventName,
  Qe as deepMerge,
  ke as destroyAllConsumer,
  Br as eventName2BusName,
  Vr as getMaxZIndex,
  Ye as isNull,
  Wr as useCloseAllOnRouteChange,
  Hr as useConsumer,
  Gr as useElementPlusDialog,
  Lr as useElementPlusDrawer,
  $r as useVantUiPopup,
  Kr as useVantUiPopupOnBottom
};
