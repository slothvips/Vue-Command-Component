import { createVNode as M, mergeProps as et } from "vue";
import { createAdapter as rt } from "@vue-cmd/core";
import { NModal as Tt, NDrawer as mt, NDrawerContent as Ot } from "naive-ui";
var nt = typeof global == "object" && global && global.Object === Object && global, jt = typeof self == "object" && self && self.Object === Object && self, v = nt || jt || Function("return this")(), j = v.Symbol, at = Object.prototype, wt = at.hasOwnProperty, At = at.toString, b = j ? j.toStringTag : void 0;
function xt(t) {
  var e = wt.call(t, b), r = t[b];
  try {
    t[b] = void 0;
    var n = !0;
  } catch {
  }
  var a = At.call(t);
  return n && (e ? t[b] = r : delete t[b]), a;
}
var Pt = Object.prototype, $t = Pt.toString;
function St(t) {
  return $t.call(t);
}
var Ct = "[object Null]", It = "[object Undefined]", B = j ? j.toStringTag : void 0;
function A(t) {
  return t == null ? t === void 0 ? It : Ct : B && B in Object(t) ? xt(t) : St(t);
}
function O(t) {
  return t != null && typeof t == "object";
}
var D = Array.isArray;
function g(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function ot(t) {
  return t;
}
var Et = "[object AsyncFunction]", Mt = "[object Function]", Dt = "[object GeneratorFunction]", zt = "[object Proxy]";
function U(t) {
  if (!g(t))
    return !1;
  var e = A(t);
  return e == Mt || e == Dt || e == Et || e == zt;
}
var I = v["__core-js_shared__"], V = function() {
  var t = /[^.]+$/.exec(I && I.keys && I.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Nt(t) {
  return !!V && V in t;
}
var Ft = Function.prototype, Ut = Ft.toString;
function Rt(t) {
  if (t != null) {
    try {
      return Ut.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Lt = /[\\^$.*+?()[\]{}|]/g, Ht = /^\[object .+?Constructor\]$/, Gt = Function.prototype, Bt = Object.prototype, Vt = Gt.toString, Kt = Bt.hasOwnProperty, qt = RegExp(
  "^" + Vt.call(Kt).replace(Lt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xt(t) {
  if (!g(t) || Nt(t))
    return !1;
  var e = U(t) ? qt : Ht;
  return e.test(Rt(t));
}
function Jt(t, e) {
  return t == null ? void 0 : t[e];
}
function R(t, e) {
  var r = Jt(t, e);
  return Xt(r) ? r : void 0;
}
var K = Object.create, Wt = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!g(e))
      return {};
    if (K)
      return K(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
function Yt(t, e, r) {
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
function Zt(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var Qt = 800, kt = 16, te = Date.now;
function ee(t) {
  var e = 0, r = 0;
  return function() {
    var n = te(), a = kt - (n - r);
    if (r = n, a > 0) {
      if (++e >= Qt)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function re(t) {
  return function() {
    return t;
  };
}
var w = function() {
  try {
    var t = R(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), ne = w ? function(t, e) {
  return w(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: re(e),
    writable: !0
  });
} : ot, ae = ee(ne), oe = 9007199254740991, ie = /^(?:0|[1-9]\d*)$/;
function it(t, e) {
  var r = typeof t;
  return e = e ?? oe, !!e && (r == "number" || r != "symbol" && ie.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function L(t, e, r) {
  e == "__proto__" && w ? w(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function x(t, e) {
  return t === e || t !== t && e !== e;
}
var ue = Object.prototype, se = ue.hasOwnProperty;
function fe(t, e, r) {
  var n = t[e];
  (!(se.call(t, e) && x(n, r)) || r === void 0 && !(e in t)) && L(t, e, r);
}
function ce(t, e, r, n) {
  var a = !r;
  r || (r = {});
  for (var u = -1, o = e.length; ++u < o; ) {
    var i = e[u], s = void 0;
    s === void 0 && (s = t[i]), a ? L(r, i, s) : fe(r, i, s);
  }
  return r;
}
var q = Math.max;
function le(t, e, r) {
  return e = q(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, a = -1, u = q(n.length - e, 0), o = Array(u); ++a < u; )
      o[a] = n[e + a];
    a = -1;
    for (var i = Array(e + 1); ++a < e; )
      i[a] = n[a];
    return i[e] = r(o), Yt(t, this, i);
  };
}
function pe(t, e) {
  return ae(le(t, e, ot), t + "");
}
var de = 9007199254740991;
function ut(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= de;
}
function H(t) {
  return t != null && ut(t.length) && !U(t);
}
function he(t, e, r) {
  if (!g(r))
    return !1;
  var n = typeof e;
  return (n == "number" ? H(r) && it(e, r.length) : n == "string" && e in r) ? x(r[e], t) : !1;
}
function ge(t) {
  return pe(function(e, r) {
    var n = -1, a = r.length, u = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (u = t.length > 3 && typeof u == "function" ? (a--, u) : void 0, o && he(r[0], r[1], o) && (u = a < 3 ? void 0 : u, a = 1), e = Object(e); ++n < a; ) {
      var i = r[n];
      i && t(e, i, n, u);
    }
    return e;
  });
}
var ve = Object.prototype;
function st(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || ve;
  return t === r;
}
function _e(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var ye = "[object Arguments]";
function X(t) {
  return O(t) && A(t) == ye;
}
var ft = Object.prototype, be = ft.hasOwnProperty, Te = ft.propertyIsEnumerable, z = X(/* @__PURE__ */ function() {
  return arguments;
}()) ? X : function(t) {
  return O(t) && be.call(t, "callee") && !Te.call(t, "callee");
};
function me() {
  return !1;
}
var ct = typeof exports == "object" && exports && !exports.nodeType && exports, J = ct && typeof module == "object" && module && !module.nodeType && module, Oe = J && J.exports === ct, W = Oe ? v.Buffer : void 0, je = W ? W.isBuffer : void 0, lt = je || me, we = "[object Arguments]", Ae = "[object Array]", xe = "[object Boolean]", Pe = "[object Date]", $e = "[object Error]", Se = "[object Function]", Ce = "[object Map]", Ie = "[object Number]", Ee = "[object Object]", Me = "[object RegExp]", De = "[object Set]", ze = "[object String]", Ne = "[object WeakMap]", Fe = "[object ArrayBuffer]", Ue = "[object DataView]", Re = "[object Float32Array]", Le = "[object Float64Array]", He = "[object Int8Array]", Ge = "[object Int16Array]", Be = "[object Int32Array]", Ve = "[object Uint8Array]", Ke = "[object Uint8ClampedArray]", qe = "[object Uint16Array]", Xe = "[object Uint32Array]", f = {};
f[Re] = f[Le] = f[He] = f[Ge] = f[Be] = f[Ve] = f[Ke] = f[qe] = f[Xe] = !0;
f[we] = f[Ae] = f[Fe] = f[xe] = f[Ue] = f[Pe] = f[$e] = f[Se] = f[Ce] = f[Ie] = f[Ee] = f[Me] = f[De] = f[ze] = f[Ne] = !1;
function Je(t) {
  return O(t) && ut(t.length) && !!f[A(t)];
}
function We(t) {
  return function(e) {
    return t(e);
  };
}
var pt = typeof exports == "object" && exports && !exports.nodeType && exports, T = pt && typeof module == "object" && module && !module.nodeType && module, Ye = T && T.exports === pt, E = Ye && nt.process, Y = function() {
  try {
    var t = T && T.require && T.require("util").types;
    return t || E && E.binding && E.binding("util");
  } catch {
  }
}(), Z = Y && Y.isTypedArray, dt = Z ? We(Z) : Je;
function Ze(t, e) {
  var r = D(t), n = !r && z(t), a = !r && !n && lt(t), u = !r && !n && !a && dt(t), o = r || n || a || u, i = o ? _e(t.length, String) : [], s = i.length;
  for (var c in t)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    u && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    it(c, s)) || i.push(c);
  return i;
}
function Qe(t, e) {
  return function(r) {
    return t(e(r));
  };
}
function ke(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var tr = Object.prototype, er = tr.hasOwnProperty;
function rr(t) {
  if (!g(t))
    return ke(t);
  var e = st(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !er.call(t, n)) || r.push(n);
  return r;
}
function ht(t) {
  return H(t) ? Ze(t) : rr(t);
}
var m = R(Object, "create");
function nr() {
  this.__data__ = m ? m(null) : {}, this.size = 0;
}
function ar(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var or = "__lodash_hash_undefined__", ir = Object.prototype, ur = ir.hasOwnProperty;
function sr(t) {
  var e = this.__data__;
  if (m) {
    var r = e[t];
    return r === or ? void 0 : r;
  }
  return ur.call(e, t) ? e[t] : void 0;
}
var fr = Object.prototype, cr = fr.hasOwnProperty;
function lr(t) {
  var e = this.__data__;
  return m ? e[t] !== void 0 : cr.call(e, t);
}
var pr = "__lodash_hash_undefined__";
function dr(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = m && e === void 0 ? pr : e, this;
}
function h(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
h.prototype.clear = nr;
h.prototype.delete = ar;
h.prototype.get = sr;
h.prototype.has = lr;
h.prototype.set = dr;
function hr() {
  this.__data__ = [], this.size = 0;
}
function P(t, e) {
  for (var r = t.length; r--; )
    if (x(t[r][0], e))
      return r;
  return -1;
}
var gr = Array.prototype, vr = gr.splice;
function _r(t) {
  var e = this.__data__, r = P(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : vr.call(e, r, 1), --this.size, !0;
}
function yr(t) {
  var e = this.__data__, r = P(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function br(t) {
  return P(this.__data__, t) > -1;
}
function Tr(t, e) {
  var r = this.__data__, n = P(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function d(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
d.prototype.clear = hr;
d.prototype.delete = _r;
d.prototype.get = yr;
d.prototype.has = br;
d.prototype.set = Tr;
var gt = R(v, "Map");
function mr() {
  this.size = 0, this.__data__ = {
    hash: new h(),
    map: new (gt || d)(),
    string: new h()
  };
}
function Or(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function $(t, e) {
  var r = t.__data__;
  return Or(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function jr(t) {
  var e = $(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function wr(t) {
  return $(this, t).get(t);
}
function Ar(t) {
  return $(this, t).has(t);
}
function xr(t, e) {
  var r = $(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function _(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = mr;
_.prototype.delete = jr;
_.prototype.get = wr;
_.prototype.has = Ar;
_.prototype.set = xr;
var vt = Qe(Object.getPrototypeOf, Object), Pr = "[object Object]", $r = Function.prototype, Sr = Object.prototype, _t = $r.toString, Cr = Sr.hasOwnProperty, Ir = _t.call(Object);
function Er(t) {
  if (!O(t) || A(t) != Pr)
    return !1;
  var e = vt(t);
  if (e === null)
    return !0;
  var r = Cr.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && _t.call(r) == Ir;
}
function Mr() {
  this.__data__ = new d(), this.size = 0;
}
function Dr(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function zr(t) {
  return this.__data__.get(t);
}
function Nr(t) {
  return this.__data__.has(t);
}
var Fr = 200;
function Ur(t, e) {
  var r = this.__data__;
  if (r instanceof d) {
    var n = r.__data__;
    if (!gt || n.length < Fr - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new _(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function y(t) {
  var e = this.__data__ = new d(t);
  this.size = e.size;
}
y.prototype.clear = Mr;
y.prototype.delete = Dr;
y.prototype.get = zr;
y.prototype.has = Nr;
y.prototype.set = Ur;
var yt = typeof exports == "object" && exports && !exports.nodeType && exports, Q = yt && typeof module == "object" && module && !module.nodeType && module, Rr = Q && Q.exports === yt, k = Rr ? v.Buffer : void 0;
k && k.allocUnsafe;
function Lr(t, e) {
  return t.slice();
}
var tt = v.Uint8Array;
function Hr(t) {
  var e = new t.constructor(t.byteLength);
  return new tt(e).set(new tt(t)), e;
}
function Gr(t, e) {
  var r = Hr(t.buffer);
  return new t.constructor(r, t.byteOffset, t.length);
}
function Br(t) {
  return typeof t.constructor == "function" && !st(t) ? Wt(vt(t)) : {};
}
function Vr(t) {
  return function(e, r, n) {
    for (var a = -1, u = Object(e), o = n(e), i = o.length; i--; ) {
      var s = o[++a];
      if (r(u[s], s, u) === !1)
        break;
    }
    return e;
  };
}
var Kr = Vr();
function N(t, e, r) {
  (r !== void 0 && !x(t[e], r) || r === void 0 && !(e in t)) && L(t, e, r);
}
function qr(t) {
  return O(t) && H(t);
}
function F(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function Xr(t) {
  return ce(t, ht(t));
}
function Jr(t, e, r, n, a, u, o) {
  var i = F(t, r), s = F(e, r), c = o.get(s);
  if (c) {
    N(t, r, c);
    return;
  }
  var l = u ? u(i, s, r + "", t, e, o) : void 0, p = l === void 0;
  if (p) {
    var S = D(s), C = !S && lt(s), G = !S && !C && dt(s);
    l = s, S || C || G ? D(i) ? l = i : qr(i) ? l = Zt(i) : C ? (p = !1, l = Lr(s)) : G ? (p = !1, l = Gr(s)) : l = [] : Er(s) || z(s) ? (l = i, z(i) ? l = Xr(i) : (!g(i) || U(i)) && (l = Br(s))) : p = !1;
  }
  p && (o.set(s, l), a(l, s, n, u, o), o.delete(s)), N(t, r, l);
}
function bt(t, e, r, n, a) {
  t !== e && Kr(e, function(u, o) {
    if (a || (a = new y()), g(u))
      Jr(t, e, o, r, bt, n, a);
    else {
      var i = n ? n(F(t, o), u, o + "", t, e, a) : void 0;
      i === void 0 && (i = u), N(t, o, i);
    }
  }, ht);
}
var Wr = ge(function(t, e, r) {
  bt(t, e, r);
});
const Yr = (t, {
  componentRef: e,
  visible: r,
  onMounted: n,
  config: a,
  consumer: u
}) => {
  const {
    attrs: o,
    slots: i
  } = a.value, s = () => {
    var c;
    u.value.destroy(), (c = o == null ? void 0 : o.onAfterLeave) == null || c.call(o);
  };
  return M(Tt, et({
    ref: e,
    show: r.value,
    "onUpdate:show": (c) => r.value = c,
    onAfterLeave: s,
    onVnodeMounted: n
  }, a.value.attrs), {
    default: () => t,
    ...i
  });
}, Zr = rt({
  render: Yr,
  defaultConfig: {
    attrs: {
      closable: !0
    }
  }
}), rn = () => {
  const t = Zr();
  return (e, r) => {
    t(e, Wr(r, {
      attrs: {
        title: "接接接接接接接",
        preset: "dialog"
      }
    }));
  };
}, Qr = (t, {
  componentRef: e,
  visible: r,
  onMounted: n,
  config: a,
  consumer: u
}) => {
  const {
    attrs: o,
    slots: i
  } = a.value, {
    drawerAttrs: s,
    contentAttrs: c
  } = o || {
    drawerAttrs: {},
    contentAttrs: {}
  }, l = () => {
    var p;
    u.value.destroy(), (p = o == null ? void 0 : o.onAfterLeave) == null || p.call(o);
  };
  return M(mt, et({
    ref: e,
    show: r.value,
    "onUpdate:show": (p) => r.value = p,
    onAfterLeave: l,
    onVnodeMounted: n
  }, s), {
    default: () => [M(Ot, c, {
      default: () => t,
      ...i
    })]
  });
}, nn = rt({
  render: Qr,
  defaultConfig: {
    attrs: {
      width: 300,
      placement: "right"
    }
  }
});
export {
  rn as useDialog,
  nn as useDrawer,
  Zr as useModal
};
