import { createVNode as tt, mergeProps as et } from "vue";
import { createAdapter as rt } from "@vue-cmd/core";
import { NModal as Tt, NDrawer as mt } from "naive-ui";
var nt = typeof global == "object" && global && global.Object === Object && global, Ot = typeof self == "object" && self && self.Object === Object && self, g = nt || Ot || Function("return this")(), j = g.Symbol, at = Object.prototype, jt = at.hasOwnProperty, wt = at.toString, b = j ? j.toStringTag : void 0;
function At(t) {
  var e = jt.call(t, b), r = t[b];
  try {
    t[b] = void 0;
    var n = !0;
  } catch {
  }
  var a = wt.call(t);
  return n && (e ? t[b] = r : delete t[b]), a;
}
var xt = Object.prototype, Pt = xt.toString;
function $t(t) {
  return Pt.call(t);
}
var St = "[object Null]", Ct = "[object Undefined]", G = j ? j.toStringTag : void 0;
function A(t) {
  return t == null ? t === void 0 ? Ct : St : G && G in Object(t) ? At(t) : $t(t);
}
function O(t) {
  return t != null && typeof t == "object";
}
var M = Array.isArray;
function h(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function ot(t) {
  return t;
}
var It = "[object AsyncFunction]", Et = "[object Function]", Mt = "[object GeneratorFunction]", zt = "[object Proxy]";
function N(t) {
  if (!h(t))
    return !1;
  var e = A(t);
  return e == Et || e == Mt || e == It || e == zt;
}
var I = g["__core-js_shared__"], B = function() {
  var t = /[^.]+$/.exec(I && I.keys && I.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Dt(t) {
  return !!B && B in t;
}
var Ft = Function.prototype, Nt = Ft.toString;
function Ut(t) {
  if (t != null) {
    try {
      return Nt.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Rt = /[\\^$.*+?()[\]{}|]/g, Lt = /^\[object .+?Constructor\]$/, Ht = Function.prototype, Gt = Object.prototype, Bt = Ht.toString, Vt = Gt.hasOwnProperty, Kt = RegExp(
  "^" + Bt.call(Vt).replace(Rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qt(t) {
  if (!h(t) || Dt(t))
    return !1;
  var e = N(t) ? Kt : Lt;
  return e.test(Ut(t));
}
function Xt(t, e) {
  return t == null ? void 0 : t[e];
}
function U(t, e) {
  var r = Xt(t, e);
  return qt(r) ? r : void 0;
}
var V = Object.create, Jt = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!h(e))
      return {};
    if (V)
      return V(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
function Wt(t, e, r) {
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
function Yt(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var Zt = 800, Qt = 16, kt = Date.now;
function te(t) {
  var e = 0, r = 0;
  return function() {
    var n = kt(), a = Qt - (n - r);
    if (r = n, a > 0) {
      if (++e >= Zt)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function ee(t) {
  return function() {
    return t;
  };
}
var w = function() {
  try {
    var t = U(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), re = w ? function(t, e) {
  return w(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ee(e),
    writable: !0
  });
} : ot, ne = te(re), ae = 9007199254740991, oe = /^(?:0|[1-9]\d*)$/;
function it(t, e) {
  var r = typeof t;
  return e = e ?? ae, !!e && (r == "number" || r != "symbol" && oe.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function R(t, e, r) {
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
var ie = Object.prototype, ue = ie.hasOwnProperty;
function se(t, e, r) {
  var n = t[e];
  (!(ue.call(t, e) && x(n, r)) || r === void 0 && !(e in t)) && R(t, e, r);
}
function fe(t, e, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, u = e.length; ++i < u; ) {
    var o = e[i], s = void 0;
    s === void 0 && (s = t[o]), a ? R(r, o, s) : se(r, o, s);
  }
  return r;
}
var K = Math.max;
function ce(t, e, r) {
  return e = K(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, a = -1, i = K(n.length - e, 0), u = Array(i); ++a < i; )
      u[a] = n[e + a];
    a = -1;
    for (var o = Array(e + 1); ++a < e; )
      o[a] = n[a];
    return o[e] = r(u), Wt(t, this, o);
  };
}
function le(t, e) {
  return ne(ce(t, e, ot), t + "");
}
var pe = 9007199254740991;
function ut(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pe;
}
function L(t) {
  return t != null && ut(t.length) && !N(t);
}
function de(t, e, r) {
  if (!h(r))
    return !1;
  var n = typeof e;
  return (n == "number" ? L(r) && it(e, r.length) : n == "string" && e in r) ? x(r[e], t) : !1;
}
function he(t) {
  return le(function(e, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, u = a > 2 ? r[2] : void 0;
    for (i = t.length > 3 && typeof i == "function" ? (a--, i) : void 0, u && de(r[0], r[1], u) && (i = a < 3 ? void 0 : i, a = 1), e = Object(e); ++n < a; ) {
      var o = r[n];
      o && t(e, o, n, i);
    }
    return e;
  });
}
var ge = Object.prototype;
function st(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || ge;
  return t === r;
}
function ve(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var _e = "[object Arguments]";
function q(t) {
  return O(t) && A(t) == _e;
}
var ft = Object.prototype, ye = ft.hasOwnProperty, be = ft.propertyIsEnumerable, z = q(/* @__PURE__ */ function() {
  return arguments;
}()) ? q : function(t) {
  return O(t) && ye.call(t, "callee") && !be.call(t, "callee");
};
function Te() {
  return !1;
}
var ct = typeof exports == "object" && exports && !exports.nodeType && exports, X = ct && typeof module == "object" && module && !module.nodeType && module, me = X && X.exports === ct, J = me ? g.Buffer : void 0, Oe = J ? J.isBuffer : void 0, lt = Oe || Te, je = "[object Arguments]", we = "[object Array]", Ae = "[object Boolean]", xe = "[object Date]", Pe = "[object Error]", $e = "[object Function]", Se = "[object Map]", Ce = "[object Number]", Ie = "[object Object]", Ee = "[object RegExp]", Me = "[object Set]", ze = "[object String]", De = "[object WeakMap]", Fe = "[object ArrayBuffer]", Ne = "[object DataView]", Ue = "[object Float32Array]", Re = "[object Float64Array]", Le = "[object Int8Array]", He = "[object Int16Array]", Ge = "[object Int32Array]", Be = "[object Uint8Array]", Ve = "[object Uint8ClampedArray]", Ke = "[object Uint16Array]", qe = "[object Uint32Array]", f = {};
f[Ue] = f[Re] = f[Le] = f[He] = f[Ge] = f[Be] = f[Ve] = f[Ke] = f[qe] = !0;
f[je] = f[we] = f[Fe] = f[Ae] = f[Ne] = f[xe] = f[Pe] = f[$e] = f[Se] = f[Ce] = f[Ie] = f[Ee] = f[Me] = f[ze] = f[De] = !1;
function Xe(t) {
  return O(t) && ut(t.length) && !!f[A(t)];
}
function Je(t) {
  return function(e) {
    return t(e);
  };
}
var pt = typeof exports == "object" && exports && !exports.nodeType && exports, T = pt && typeof module == "object" && module && !module.nodeType && module, We = T && T.exports === pt, E = We && nt.process, W = function() {
  try {
    var t = T && T.require && T.require("util").types;
    return t || E && E.binding && E.binding("util");
  } catch {
  }
}(), Y = W && W.isTypedArray, dt = Y ? Je(Y) : Xe;
function Ye(t, e) {
  var r = M(t), n = !r && z(t), a = !r && !n && lt(t), i = !r && !n && !a && dt(t), u = r || n || a || i, o = u ? ve(t.length, String) : [], s = o.length;
  for (var c in t)
    u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    it(c, s)) || o.push(c);
  return o;
}
function Ze(t, e) {
  return function(r) {
    return t(e(r));
  };
}
function Qe(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var ke = Object.prototype, tr = ke.hasOwnProperty;
function er(t) {
  if (!h(t))
    return Qe(t);
  var e = st(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !tr.call(t, n)) || r.push(n);
  return r;
}
function ht(t) {
  return L(t) ? Ye(t) : er(t);
}
var m = U(Object, "create");
function rr() {
  this.__data__ = m ? m(null) : {}, this.size = 0;
}
function nr(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var ar = "__lodash_hash_undefined__", or = Object.prototype, ir = or.hasOwnProperty;
function ur(t) {
  var e = this.__data__;
  if (m) {
    var r = e[t];
    return r === ar ? void 0 : r;
  }
  return ir.call(e, t) ? e[t] : void 0;
}
var sr = Object.prototype, fr = sr.hasOwnProperty;
function cr(t) {
  var e = this.__data__;
  return m ? e[t] !== void 0 : fr.call(e, t);
}
var lr = "__lodash_hash_undefined__";
function pr(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = m && e === void 0 ? lr : e, this;
}
function d(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
d.prototype.clear = rr;
d.prototype.delete = nr;
d.prototype.get = ur;
d.prototype.has = cr;
d.prototype.set = pr;
function dr() {
  this.__data__ = [], this.size = 0;
}
function P(t, e) {
  for (var r = t.length; r--; )
    if (x(t[r][0], e))
      return r;
  return -1;
}
var hr = Array.prototype, gr = hr.splice;
function vr(t) {
  var e = this.__data__, r = P(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : gr.call(e, r, 1), --this.size, !0;
}
function _r(t) {
  var e = this.__data__, r = P(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function yr(t) {
  return P(this.__data__, t) > -1;
}
function br(t, e) {
  var r = this.__data__, n = P(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function p(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
p.prototype.clear = dr;
p.prototype.delete = vr;
p.prototype.get = _r;
p.prototype.has = yr;
p.prototype.set = br;
var gt = U(g, "Map");
function Tr() {
  this.size = 0, this.__data__ = {
    hash: new d(),
    map: new (gt || p)(),
    string: new d()
  };
}
function mr(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function $(t, e) {
  var r = t.__data__;
  return mr(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Or(t) {
  var e = $(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function jr(t) {
  return $(this, t).get(t);
}
function wr(t) {
  return $(this, t).has(t);
}
function Ar(t, e) {
  var r = $(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function v(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
v.prototype.clear = Tr;
v.prototype.delete = Or;
v.prototype.get = jr;
v.prototype.has = wr;
v.prototype.set = Ar;
var vt = Ze(Object.getPrototypeOf, Object), xr = "[object Object]", Pr = Function.prototype, $r = Object.prototype, _t = Pr.toString, Sr = $r.hasOwnProperty, Cr = _t.call(Object);
function Ir(t) {
  if (!O(t) || A(t) != xr)
    return !1;
  var e = vt(t);
  if (e === null)
    return !0;
  var r = Sr.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && _t.call(r) == Cr;
}
function Er() {
  this.__data__ = new p(), this.size = 0;
}
function Mr(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function zr(t) {
  return this.__data__.get(t);
}
function Dr(t) {
  return this.__data__.has(t);
}
var Fr = 200;
function Nr(t, e) {
  var r = this.__data__;
  if (r instanceof p) {
    var n = r.__data__;
    if (!gt || n.length < Fr - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new v(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function _(t) {
  var e = this.__data__ = new p(t);
  this.size = e.size;
}
_.prototype.clear = Er;
_.prototype.delete = Mr;
_.prototype.get = zr;
_.prototype.has = Dr;
_.prototype.set = Nr;
var yt = typeof exports == "object" && exports && !exports.nodeType && exports, Z = yt && typeof module == "object" && module && !module.nodeType && module, Ur = Z && Z.exports === yt, Q = Ur ? g.Buffer : void 0;
Q && Q.allocUnsafe;
function Rr(t, e) {
  return t.slice();
}
var k = g.Uint8Array;
function Lr(t) {
  var e = new t.constructor(t.byteLength);
  return new k(e).set(new k(t)), e;
}
function Hr(t, e) {
  var r = Lr(t.buffer);
  return new t.constructor(r, t.byteOffset, t.length);
}
function Gr(t) {
  return typeof t.constructor == "function" && !st(t) ? Jt(vt(t)) : {};
}
function Br(t) {
  return function(e, r, n) {
    for (var a = -1, i = Object(e), u = n(e), o = u.length; o--; ) {
      var s = u[++a];
      if (r(i[s], s, i) === !1)
        break;
    }
    return e;
  };
}
var Vr = Br();
function D(t, e, r) {
  (r !== void 0 && !x(t[e], r) || r === void 0 && !(e in t)) && R(t, e, r);
}
function Kr(t) {
  return O(t) && L(t);
}
function F(t, e) {
  if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
    return t[e];
}
function qr(t) {
  return fe(t, ht(t));
}
function Xr(t, e, r, n, a, i, u) {
  var o = F(t, r), s = F(e, r), c = u.get(s);
  if (c) {
    D(t, r, c);
    return;
  }
  var l = i ? i(o, s, r + "", t, e, u) : void 0, y = l === void 0;
  if (y) {
    var S = M(s), C = !S && lt(s), H = !S && !C && dt(s);
    l = s, S || C || H ? M(o) ? l = o : Kr(o) ? l = Yt(o) : C ? (y = !1, l = Rr(s)) : H ? (y = !1, l = Hr(s)) : l = [] : Ir(s) || z(s) ? (l = o, z(o) ? l = qr(o) : (!h(o) || N(o)) && (l = Gr(s))) : y = !1;
  }
  y && (u.set(s, l), a(l, s, n, i, u), u.delete(s)), D(t, r, l);
}
function bt(t, e, r, n, a) {
  t !== e && Vr(e, function(i, u) {
    if (a || (a = new _()), h(i))
      Xr(t, e, u, r, bt, n, a);
    else {
      var o = n ? n(F(t, u), i, u + "", t, e, a) : void 0;
      o === void 0 && (o = i), D(t, u, o);
    }
  }, ht);
}
var Jr = he(function(t, e, r) {
  bt(t, e, r);
});
const Wr = (t, {
  componentRef: e,
  visible: r,
  onMounted: n,
  config: a,
  consumer: i
}) => {
  const {
    attrs: u,
    slots: o
  } = a.value, s = () => {
    var c;
    i.value.destroy(), (c = u == null ? void 0 : u.onAfterLeave) == null || c.call(u);
  };
  return tt(Tt, et({
    ref: e,
    show: r.value,
    "onUpdate:show": (c) => r.value = c,
    onAfterLeave: s,
    onVnodeMounted: n
  }, a.value.attrs), {
    default: () => t,
    ...o
  });
}, Yr = rt({
  render: Wr,
  defaultConfig: {
    attrs: {
      closable: !0
    }
  }
}), en = () => {
  const t = Yr();
  return (e, r) => {
    t(e, Jr(r, {
      attrs: {
        preset: "dialog"
      }
    }));
  };
}, Zr = (t, {
  componentRef: e,
  visible: r,
  onMounted: n,
  config: a,
  consumer: i
}) => {
  const u = (s) => {
    s || i.value.destroy();
  }, o = () => {
    i.value.destroy();
  };
  return tt(mt, et({
    ref: e,
    show: r.value,
    onUpdateShow: u,
    onAfterLeave: o,
    onVnodeMounted: n,
    width: 300,
    placement: "right"
  }, a.value.attrs), {
    default: () => t,
    ...a.value.slots
  });
}, rn = rt({
  render: Zr,
  defaultConfig: {
    attrs: {
      width: 300,
      placement: "right"
    }
  }
});
export {
  en as useDialog,
  rn as useDrawer,
  Yr as useModal
};
