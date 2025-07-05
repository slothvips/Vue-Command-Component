var Tt = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var mt = Object.prototype.hasOwnProperty, Ot = Object.prototype.propertyIsEnumerable;
var K = (t, e, r) => e in t ? Tt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, I = (t, e) => {
  for (var r in e || (e = {}))
    mt.call(e, r) && K(t, r, e[r]);
  if (V)
    for (var r of V(e))
      Ot.call(e, r) && K(t, r, e[r]);
  return t;
};
import { createVNode as D, mergeProps as rt } from "vue";
import { createAdapter as nt } from "@vue-cmd/core";
import { NModal as jt, NDrawer as wt, NDrawerContent as At } from "naive-ui";
var at = typeof global == "object" && global && global.Object === Object && global, Pt = typeof self == "object" && self && self.Object === Object && self, m = at || Pt || Function("return this")(), j = m.Symbol, ot = Object.prototype, xt = ot.hasOwnProperty, St = ot.toString, y = j ? j.toStringTag : void 0;
function $t(t) {
  var e = xt.call(t, y), r = t[y];
  try {
    t[y] = void 0;
    var n = !0;
  } catch (s) {
  }
  var a = St.call(t);
  return n && (e ? t[y] = r : delete t[y]), a;
}
var Ct = Object.prototype, It = Ct.toString;
function Et(t) {
  return It.call(t);
}
var Mt = "[object Null]", Dt = "[object Undefined]", q = j ? j.toStringTag : void 0;
function A(t) {
  return t == null ? t === void 0 ? Dt : Mt : q && q in Object(t) ? $t(t) : Et(t);
}
function O(t) {
  return t != null && typeof t == "object";
}
var z = Array.isArray;
function g(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function it(t) {
  return t;
}
var zt = "[object AsyncFunction]", Nt = "[object Function]", Ft = "[object GeneratorFunction]", Rt = "[object Proxy]";
function U(t) {
  if (!g(t))
    return !1;
  var e = A(t);
  return e == Nt || e == Ft || e == zt || e == Rt;
}
var E = m["__core-js_shared__"], X = function() {
  var t = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ut(t) {
  return !!X && X in t;
}
var Lt = Function.prototype, Ht = Lt.toString;
function Gt(t) {
  if (t != null) {
    try {
      return Ht.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var Bt = /[\\^$.*+?()[\]{}|]/g, Vt = /^\[object .+?Constructor\]$/, Kt = Function.prototype, qt = Object.prototype, Xt = Kt.toString, Jt = qt.hasOwnProperty, Wt = RegExp(
  "^" + Xt.call(Jt).replace(Bt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yt(t) {
  if (!g(t) || Ut(t))
    return !1;
  var e = U(t) ? Wt : Vt;
  return e.test(Gt(t));
}
function Zt(t, e) {
  return t == null ? void 0 : t[e];
}
function L(t, e) {
  var r = Zt(t, e);
  return Yt(r) ? r : void 0;
}
var J = Object.create, Qt = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!g(e))
      return {};
    if (J)
      return J(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
function kt(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
function te(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var ee = 800, re = 16, ne = Date.now;
function ae(t) {
  var e = 0, r = 0;
  return function() {
    var n = ne(), a = re - (n - r);
    if (r = n, a > 0) {
      if (++e >= ee)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function oe(t) {
  return function() {
    return t;
  };
}
var w = function() {
  try {
    var t = L(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {
  }
}(), ie = w ? function(t, e) {
  return w(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: oe(e),
    writable: !0
  });
} : it, se = ae(ie), ue = 9007199254740991, fe = /^(?:0|[1-9]\d*)$/;
function st(t, e) {
  var r = typeof t;
  return e = e == null ? ue : e, !!e && (r == "number" || r != "symbol" && fe.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function H(t, e, r) {
  e == "__proto__" && w ? w(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function P(t, e) {
  return t === e || t !== t && e !== e;
}
var ce = Object.prototype, le = ce.hasOwnProperty;
function pe(t, e, r) {
  var n = t[e];
  (!(le.call(t, e) && P(n, r)) || r === void 0 && !(e in t)) && H(t, e, r);
}
function de(t, e, r, n) {
  var a = !r;
  r || (r = {});
  for (var s = -1, o = e.length; ++s < o; ) {
    var i = e[s], u = void 0;
    u === void 0 && (u = t[i]), a ? H(r, i, u) : pe(r, i, u);
  }
  return r;
}
var W = Math.max;
function he(t, e, r) {
  return e = W(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, a = -1, s = W(n.length - e, 0), o = Array(s); ++a < s; )
      o[a] = n[e + a];
    a = -1;
    for (var i = Array(e + 1); ++a < e; )
      i[a] = n[a];
    return i[e] = r(o), kt(t, this, i);
  };
}
function ge(t, e) {
  return se(he(t, e, it), t + "");
}
var ve = 9007199254740991;
function ut(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ve;
}
function G(t) {
  return t != null && ut(t.length) && !U(t);
}
function _e(t, e, r) {
  if (!g(r))
    return !1;
  var n = typeof e;
  return (n == "number" ? G(r) && st(e, r.length) : n == "string" && e in r) ? P(r[e], t) : !1;
}
function ye(t) {
  return ge(function(e, r) {
    var n = -1, a = r.length, s = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && _e(r[0], r[1], o) && (s = a < 3 ? void 0 : s, a = 1), e = Object(e); ++n < a; ) {
      var i = r[n];
      i && t(e, i, n, s);
    }
    return e;
  });
}
var be = Object.prototype;
function ft(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || be;
  return t === r;
}
function Te(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var me = "[object Arguments]";
function Y(t) {
  return O(t) && A(t) == me;
}
var ct = Object.prototype, Oe = ct.hasOwnProperty, je = ct.propertyIsEnumerable, N = Y(/* @__PURE__ */ function() {
  return arguments;
}()) ? Y : function(t) {
  return O(t) && Oe.call(t, "callee") && !je.call(t, "callee");
};
function we() {
  return !1;
}
var lt = typeof exports == "object" && exports && !exports.nodeType && exports, Z = lt && typeof module == "object" && module && !module.nodeType && module, Ae = Z && Z.exports === lt, Q = Ae ? m.Buffer : void 0, Pe = Q ? Q.isBuffer : void 0, pt = Pe || we, xe = "[object Arguments]", Se = "[object Array]", $e = "[object Boolean]", Ce = "[object Date]", Ie = "[object Error]", Ee = "[object Function]", Me = "[object Map]", De = "[object Number]", ze = "[object Object]", Ne = "[object RegExp]", Fe = "[object Set]", Re = "[object String]", Ue = "[object WeakMap]", Le = "[object ArrayBuffer]", He = "[object DataView]", Ge = "[object Float32Array]", Be = "[object Float64Array]", Ve = "[object Int8Array]", Ke = "[object Int16Array]", qe = "[object Int32Array]", Xe = "[object Uint8Array]", Je = "[object Uint8ClampedArray]", We = "[object Uint16Array]", Ye = "[object Uint32Array]", f = {};
f[Ge] = f[Be] = f[Ve] = f[Ke] = f[qe] = f[Xe] = f[Je] = f[We] = f[Ye] = !0;
f[xe] = f[Se] = f[Le] = f[$e] = f[He] = f[Ce] = f[Ie] = f[Ee] = f[Me] = f[De] = f[ze] = f[Ne] = f[Fe] = f[Re] = f[Ue] = !1;
function Ze(t) {
  return O(t) && ut(t.length) && !!f[A(t)];
}
function Qe(t) {
  return function(e) {
    return t(e);
  };
}
var dt = typeof exports == "object" && exports && !exports.nodeType && exports, b = dt && typeof module == "object" && module && !module.nodeType && module, ke = b && b.exports === dt, M = ke && at.process, k = function() {
  try {
    var t = b && b.require && b.require("util").types;
    return t || M && M.binding && M.binding("util");
  } catch (e) {
  }
}(), tt = k && k.isTypedArray, ht = tt ? Qe(tt) : Ze;
function tr(t, e) {
  var r = z(t), n = !r && N(t), a = !r && !n && pt(t), s = !r && !n && !a && ht(t), o = r || n || a || s, i = o ? Te(t.length, String) : [], u = i.length;
  for (var c in t)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    st(c, u)) || i.push(c);
  return i;
}
function er(t, e) {
  return function(r) {
    return t(e(r));
  };
}
function rr(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var nr = Object.prototype, ar = nr.hasOwnProperty;
function or(t) {
  if (!g(t))
    return rr(t);
  var e = ft(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !ar.call(t, n)) || r.push(n);
  return r;
}
function gt(t) {
  return G(t) ? tr(t) : or(t);
}
var T = L(Object, "create");
function ir() {
  this.__data__ = T ? T(null) : {}, this.size = 0;
}
function sr(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var ur = "__lodash_hash_undefined__", fr = Object.prototype, cr = fr.hasOwnProperty;
function lr(t) {
  var e = this.__data__;
  if (T) {
    var r = e[t];
    return r === ur ? void 0 : r;
  }
  return cr.call(e, t) ? e[t] : void 0;
}
var pr = Object.prototype, dr = pr.hasOwnProperty;
function hr(t) {
  var e = this.__data__;
  return T ? e[t] !== void 0 : dr.call(e, t);
}
var gr = "__lodash_hash_undefined__";
function vr(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = T && e === void 0 ? gr : e, this;
}
function h(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
h.prototype.clear = ir;
h.prototype.delete = sr;
h.prototype.get = lr;
h.prototype.has = hr;
h.prototype.set = vr;
function _r() {
  this.__data__ = [], this.size = 0;
}
function x(t, e) {
  for (var r = t.length; r--; )
    if (P(t[r][0], e))
      return r;
  return -1;
}
var yr = Array.prototype, br = yr.splice;
function Tr(t) {
  var e = this.__data__, r = x(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : br.call(e, r, 1), --this.size, !0;
}
function mr(t) {
  var e = this.__data__, r = x(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Or(t) {
  return x(this.__data__, t) > -1;
}
function jr(t, e) {
  var r = this.__data__, n = x(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function d(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
d.prototype.clear = _r;
d.prototype.delete = Tr;
d.prototype.get = mr;
d.prototype.has = Or;
d.prototype.set = jr;
var vt = L(m, "Map");
function wr() {
  this.size = 0, this.__data__ = {
    hash: new h(),
    map: new (vt || d)(),
    string: new h()
  };
}
function Ar(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function S(t, e) {
  var r = t.__data__;
  return Ar(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Pr(t) {
  var e = S(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function xr(t) {
  return S(this, t).get(t);
}
function Sr(t) {
  return S(this, t).has(t);
}
function $r(t, e) {
  var r = S(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function v(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
v.prototype.clear = wr;
v.prototype.delete = Pr;
v.prototype.get = xr;
v.prototype.has = Sr;
v.prototype.set = $r;
var _t = er(Object.getPrototypeOf, Object), Cr = "[object Object]", Ir = Function.prototype, Er = Object.prototype, yt = Ir.toString, Mr = Er.hasOwnProperty, Dr = yt.call(Object);
function zr(t) {
  if (!O(t) || A(t) != Cr)
    return !1;
  var e = _t(t);
  if (e === null)
    return !0;
  var r = Mr.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && yt.call(r) == Dr;
}
function Nr() {
  this.__data__ = new d(), this.size = 0;
}
function Fr(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function Rr(t) {
  return this.__data__.get(t);
}
function Ur(t) {
  return this.__data__.has(t);
}
var Lr = 200;
function Hr(t, e) {
  var r = this.__data__;
  if (r instanceof d) {
    var n = r.__data__;
    if (!vt || n.length < Lr - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new v(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function _(t) {
  var e = this.__data__ = new d(t);
  this.size = e.size;
}
_.prototype.clear = Nr;
_.prototype.delete = Fr;
_.prototype.get = Rr;
_.prototype.has = Ur;
_.prototype.set = Hr;
var Gr = typeof exports == "object" && exports && !exports.nodeType && exports;
Gr && typeof module == "object" && module && !module.nodeType && module;
function Br(t, e) {
  return t.slice();
}
var et = m.Uint8Array;
function Vr(t) {
  var e = new t.constructor(t.byteLength);
  return new et(e).set(new et(t)), e;
}
function Kr(t, e) {
  var r = Vr(t.buffer);
  return new t.constructor(r, t.byteOffset, t.length);
}
function qr(t) {
  return typeof t.constructor == "function" && !ft(t) ? Qt(_t(t)) : {};
}
function Xr(t) {
  return function(e, r, n) {
    for (var a = -1, s = Object(e), o = n(e), i = o.length; i--; ) {
      var u = o[++a];
      if (r(s[u], u, s) === !1)
        break;
    }
    return e;
  };
}
var Jr = Xr();
function F(t, e, r) {
  (r !== void 0 && !P(t[e], r) || r === void 0 && !(e in t)) && H(t, e, r);
}
function Wr(t) {
  return O(t) && G(t);
}
function R(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function Yr(t) {
  return de(t, gt(t));
}
function Zr(t, e, r, n, a, s, o) {
  var i = R(t, r), u = R(e, r), c = o.get(u);
  if (c) {
    F(t, r, c);
    return;
  }
  var l = s ? s(i, u, r + "", t, e, o) : void 0, p = l === void 0;
  if (p) {
    var $ = z(u), C = !$ && pt(u), B = !$ && !C && ht(u);
    l = u, $ || C || B ? z(i) ? l = i : Wr(i) ? l = te(i) : C ? (p = !1, l = Br(u)) : B ? (p = !1, l = Kr(u)) : l = [] : zr(u) || N(u) ? (l = i, N(i) ? l = Yr(i) : (!g(i) || U(i)) && (l = qr(u))) : p = !1;
  }
  p && (o.set(u, l), a(l, u, n, s, o), o.delete(u)), F(t, r, l);
}
function bt(t, e, r, n, a) {
  t !== e && Jr(e, function(s, o) {
    if (a || (a = new _()), g(s))
      Zr(t, e, o, r, bt, n, a);
    else {
      var i = n ? n(R(t, o), s, o + "", t, e, a) : void 0;
      i === void 0 && (i = s), F(t, o, i);
    }
  }, gt);
}
var Qr = ye(function(t, e, r) {
  bt(t, e, r);
});
const kr = (t, {
  componentRef: e,
  visible: r,
  onMounted: n,
  config: a,
  consumer: s
}) => {
  const {
    attrs: o,
    slots: i
  } = a.value, u = () => {
    var c;
    s.value.destroy(), (c = o == null ? void 0 : o.onAfterLeave) == null || c.call(o);
  };
  return D(jt, rt({
    ref: e,
    show: r.value,
    "onUpdate:show": (c) => r.value = c,
    onAfterLeave: u,
    onVnodeMounted: n
  }, a.value.attrs), I({
    default: () => t
  }, i));
}, tn = nt({
  render: kr,
  defaultConfig: {
    attrs: {
      closable: !0
    }
  }
}), sn = () => {
  const t = tn();
  return (e, r) => {
    t(e, Qr(r, {
      attrs: {
        title: "接接接接接接接",
        preset: "dialog"
      }
    }));
  };
}, en = (t, {
  componentRef: e,
  visible: r,
  onMounted: n,
  config: a,
  consumer: s
}) => {
  const {
    attrs: o,
    slots: i
  } = a.value, {
    drawerAttrs: u,
    contentAttrs: c
  } = o || {
    drawerAttrs: {},
    contentAttrs: {}
  }, l = () => {
    var p;
    s.value.destroy(), (p = o == null ? void 0 : o.onAfterLeave) == null || p.call(o);
  };
  return D(wt, rt({
    ref: e,
    show: r.value,
    "onUpdate:show": (p) => r.value = p,
    onAfterLeave: l,
    onVnodeMounted: n
  }, u), {
    default: () => [D(At, c, I({
      default: () => t
    }, i))]
  });
}, un = nt({
  render: en,
  defaultConfig: {
    attrs: {
      width: 300,
      placement: "right"
    }
  }
});
export {
  sn as useDialog,
  un as useDrawer,
  tn as useModal
};
