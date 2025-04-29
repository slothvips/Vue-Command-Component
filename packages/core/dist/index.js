var Be = Object.defineProperty;
var Ve = (e, t, n) => t in e ? Be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var S = (e, t, n) => Ve(e, typeof t != "symbol" ? t + "" : t, n);
import { createVNode as D, defineComponent as ve, render as te, inject as ye, provide as I, h as ge, nextTick as He, getCurrentInstance as Ge, ref as ne, mergeProps as X, watch as Le } from "vue";
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
    const a = this.getEventsByConsumer(t, n);
    let s = r;
    o.once && (s = (...i) => {
      r(...i), this.off(t, n, s);
    }), a.add(s), o.callImmediatelyAfterDelay !== void 0 && setTimeout(() => {
      s();
    }, o.callImmediatelyAfterDelay || 0);
  }
  once(t, n, r) {
    this.on(t, n, r, { once: !0 });
  }
  emit(t, n, ...r) {
    this.getEventsByConsumer(t, n).forEach((a) => a(...r));
  }
  off(t, n, r) {
    this.getEventsByConsumer(t, n).delete(r);
  }
}
const Ur = (e = "") => e.slice(2).toLowerCase(), Br = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Je = () => {
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
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), +n;
}, Ye = (e) => e == null, Qe = (e, t, ...n) => {
  const r = { ...e }, o = (a) => {
    for (const s in a)
      if (a[s] && typeof a[s] == "object") {
        const i = r[s] && typeof r[s] == "object" ? r[s] : {};
        r[s] = Qe(i, a[s]);
      } else
        r[s] = a[s];
  };
  return o(t), n.forEach(o), r;
}, be = Symbol("CommandComponentConsumerInjectKey"), re = Symbol("CommandComponentStackInjectKey"), $ = new Xe(), L = /* @__PURE__ */ new Set(), ke = () => {
  L.forEach((e) => {
    e.destroy();
  });
}, _e = (e) => ({
  ...e.parent ? _e(e.parent) : {},
  ...e.provides
});
function et(e, t, n) {
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || e.vnode.el.parentElement || document.body, o = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || document.body, a = document.createElement("div");
  a.className = n.customClassName || "command-component-container";
  try {
    r.appendChild(a);
  } catch {
    console.warn("function appendChild call error. Fallback to  maybe document.body."), o.appendChild(a);
  }
  const s = () => {
    n.visible.value = !1;
  }, i = () => {
    n.visible.value = !0;
  }, u = () => {
    He(() => {
      te(null, a), a.remove();
    });
  }, {
    promise: d,
    resolve: c,
    reject: f
  } = Je(), v = 3e3, b = (p = !1) => {
    p ? (s(), h.on(R.destroy, u, {
      once: !0,
      callImmediatelyAfterDelay: v
    })) : (L.delete(h), h.stack.splice(h.stackIndex).forEach((y) => y.destroy(!0)));
  }, E = (p) => {
    c(p), b();
  }, Ue = (p) => {
    f(p), b();
  }, h = {
    meta: n.meta || {},
    promise: d,
    resolve: c,
    reject: f,
    destroyWithResolve: E,
    destroyWithReject: Ue,
    hide: s,
    show: i,
    destroy: b,
    container: a,
    visible: n.visible,
    on: (p, m, y = {}) => $.on(h, p, m, y),
    once: (p, m) => $.once(h, p, m),
    emit: (p, ...m) => $.emit(h, p, ...m),
    off: (p, m) => $.off(h, p, m),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, V = D(/* @__PURE__ */ ve({
    setup() {
      for (const y in n.provideProps)
        I(y, n.provideProps[y]);
      const p = {
        // ...vnode.appContext!.provides,
        ..._e(e)
      };
      for (const y in p)
        I(y, p[y]);
      I(be, h);
      const m = ye(re, []);
      return h.stackIndex = m.length, m.push(h), I(re, m), h.stack = m, () => ge(t);
    }
  }), null, null);
  return V.appContext = (e == null ? void 0 : e.appContext) || V.appContext, te(V, a), L.add(h), h;
}
const Hr = (e = !0) => {
  const t = () => e && console.warn(`Failed to get Consumer instance. Please note:
    1. This function needs to be called directly in the setup top level.
    2. Make sure to display this component inside a command dialog, or you can ignore this warning message by using warn parameter: getConsumer(false)`);
  return ye(be, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
var Ce = typeof global == "object" && global && global.Object === Object && global, tt = typeof self == "object" && self && self.Object === Object && self, T = Ce || tt || Function("return this")(), M = T.Symbol, Te = Object.prototype, nt = Te.hasOwnProperty, rt = Te.toString, j = M ? M.toStringTag : void 0;
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
var ut = "[object Null]", ct = "[object Undefined]", oe = M ? M.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? ct : ut : oe && oe in Object(e) ? ot(e) : it(e);
}
function A(e) {
  return e != null && typeof e == "object";
}
var K = Array.isArray;
function C(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function we(e) {
  return e;
}
var lt = "[object AsyncFunction]", dt = "[object Function]", ft = "[object GeneratorFunction]", pt = "[object Proxy]";
function J(e) {
  if (!C(e))
    return !1;
  var t = z(e);
  return t == dt || t == ft || t == lt || t == pt;
}
var H = T["__core-js_shared__"], ae = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ht(e) {
  return !!ae && ae in e;
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
  if (!C(e) || ht(e))
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
var se = Object.create, xt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!C(t))
      return {};
    if (se)
      return se(t);
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
} : we, Rt = Mt(Dt), zt = 9007199254740991, Ft = /^(?:0|[1-9]\d*)$/;
function Oe(e, t) {
  var n = typeof e;
  return t = t ?? zt, !!t && (n == "number" || n != "symbol" && Ft.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Q(e, t, n) {
  t == "__proto__" && N ? N(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function F(e, t) {
  return e === t || e !== e && t !== t;
}
var Ut = Object.prototype, Bt = Ut.hasOwnProperty;
function Vt(e, t, n) {
  var r = e[t];
  (!(Bt.call(e, t) && F(r, n)) || n === void 0 && !(t in e)) && Q(e, t, n);
}
function Ht(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], u = void 0;
    u === void 0 && (u = e[i]), o ? Q(n, i, u) : Vt(n, i, u);
  }
  return n;
}
var ie = Math.max;
function Gt(e, t, n) {
  return t = ie(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ie(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), At(e, this, i);
  };
}
function Lt(e, t) {
  return Rt(Gt(e, t, we), e + "");
}
var Kt = 9007199254740991;
function je(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Kt;
}
function k(e) {
  return e != null && je(e.length) && !J(e);
}
function Wt(e, t, n) {
  if (!C(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? k(n) && Oe(t, n.length) : r == "string" && t in n) ? F(n[t], e) : !1;
}
function qt(e) {
  return Lt(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Wt(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var Zt = Object.prototype;
function Pe(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Zt;
  return e === n;
}
function Xt(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Jt = "[object Arguments]";
function ue(e) {
  return A(e) && z(e) == Jt;
}
var xe = Object.prototype, Yt = xe.hasOwnProperty, Qt = xe.propertyIsEnumerable, W = ue(/* @__PURE__ */ function() {
  return arguments;
}()) ? ue : function(e) {
  return A(e) && Yt.call(e, "callee") && !Qt.call(e, "callee");
};
function kt() {
  return !1;
}
var Ae = typeof exports == "object" && exports && !exports.nodeType && exports, ce = Ae && typeof module == "object" && module && !module.nodeType && module, en = ce && ce.exports === Ae, le = en ? T.Buffer : void 0, tn = le ? le.isBuffer : void 0, Ee = tn || kt, nn = "[object Arguments]", rn = "[object Array]", on = "[object Boolean]", an = "[object Date]", sn = "[object Error]", un = "[object Function]", cn = "[object Map]", ln = "[object Number]", dn = "[object Object]", fn = "[object RegExp]", pn = "[object Set]", hn = "[object String]", mn = "[object WeakMap]", vn = "[object ArrayBuffer]", yn = "[object DataView]", gn = "[object Float32Array]", bn = "[object Float64Array]", _n = "[object Int8Array]", Cn = "[object Int16Array]", Tn = "[object Int32Array]", wn = "[object Uint8Array]", On = "[object Uint8ClampedArray]", jn = "[object Uint16Array]", Pn = "[object Uint32Array]", l = {};
l[gn] = l[bn] = l[_n] = l[Cn] = l[Tn] = l[wn] = l[On] = l[jn] = l[Pn] = !0;
l[nn] = l[rn] = l[vn] = l[on] = l[yn] = l[an] = l[sn] = l[un] = l[cn] = l[ln] = l[dn] = l[fn] = l[pn] = l[hn] = l[mn] = !1;
function xn(e) {
  return A(e) && je(e.length) && !!l[z(e)];
}
function An(e) {
  return function(t) {
    return e(t);
  };
}
var Se = typeof exports == "object" && exports && !exports.nodeType && exports, P = Se && typeof module == "object" && module && !module.nodeType && module, En = P && P.exports === Se, G = En && Ce.process, de = function() {
  try {
    var e = P && P.require && P.require("util").types;
    return e || G && G.binding && G.binding("util");
  } catch {
  }
}(), fe = de && de.isTypedArray, Ie = fe ? An(fe) : xn;
function Sn(e, t) {
  var n = K(e), r = !n && W(e), o = !n && !r && Ee(e), a = !n && !r && !o && Ie(e), s = n || r || o || a, i = s ? Xt(e.length, String) : [], u = i.length;
  for (var d in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Oe(d, u)) || i.push(d);
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
  if (!C(e))
    return $n(e);
  var t = Pe(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Nn.call(e, r)) || n.push(r);
  return n;
}
function $e(e) {
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
var Fn = "__lodash_hash_undefined__", Un = Object.prototype, Bn = Un.hasOwnProperty;
function Vn(e) {
  var t = this.__data__;
  if (x) {
    var n = t[e];
    return n === Fn ? void 0 : n;
  }
  return Bn.call(t, e) ? t[e] : void 0;
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
function _(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_.prototype.clear = Rn;
_.prototype.delete = zn;
_.prototype.get = Vn;
_.prototype.has = Ln;
_.prototype.set = Wn;
function qn() {
  this.__data__ = [], this.size = 0;
}
function U(e, t) {
  for (var n = e.length; n--; )
    if (F(e[n][0], t))
      return n;
  return -1;
}
var Zn = Array.prototype, Xn = Zn.splice;
function Jn(e) {
  var t = this.__data__, n = U(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Xn.call(t, n, 1), --this.size, !0;
}
function Yn(e) {
  var t = this.__data__, n = U(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Qn(e) {
  return U(this.__data__, e) > -1;
}
function kn(e, t) {
  var n = this.__data__, r = U(n, e);
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
var Me = Y(T, "Map");
function er() {
  this.size = 0, this.__data__ = {
    hash: new _(),
    map: new (Me || g)(),
    string: new _()
  };
}
function tr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function B(e, t) {
  var n = e.__data__;
  return tr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function nr(e) {
  var t = B(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rr(e) {
  return B(this, e).get(e);
}
function or(e) {
  return B(this, e).has(e);
}
function ar(e, t) {
  var n = B(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function w(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
w.prototype.clear = er;
w.prototype.delete = nr;
w.prototype.get = rr;
w.prototype.has = or;
w.prototype.set = ar;
var Ne = In(Object.getPrototypeOf, Object), sr = "[object Object]", ir = Function.prototype, ur = Object.prototype, De = ir.toString, cr = ur.hasOwnProperty, lr = De.call(Object);
function dr(e) {
  if (!A(e) || z(e) != sr)
    return !1;
  var t = Ne(e);
  if (t === null)
    return !0;
  var n = cr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && De.call(n) == lr;
}
function fr() {
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
    if (!Me || r.length < vr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new w(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function O(e) {
  var t = this.__data__ = new g(e);
  this.size = t.size;
}
O.prototype.clear = fr;
O.prototype.delete = pr;
O.prototype.get = hr;
O.prototype.has = mr;
O.prototype.set = yr;
var Re = typeof exports == "object" && exports && !exports.nodeType && exports, pe = Re && typeof module == "object" && module && !module.nodeType && module, gr = pe && pe.exports === Re, he = gr ? T.Buffer : void 0;
he && he.allocUnsafe;
function br(e, t) {
  return e.slice();
}
var me = T.Uint8Array;
function _r(e) {
  var t = new e.constructor(e.byteLength);
  return new me(t).set(new me(e)), t;
}
function Cr(e, t) {
  var n = _r(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function Tr(e) {
  return typeof e.constructor == "function" && !Pe(e) ? xt(Ne(e)) : {};
}
function wr(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), i = s.length; i--; ) {
      var u = s[++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Or = wr();
function q(e, t, n) {
  (n !== void 0 && !F(e[t], n) || n === void 0 && !(t in e)) && Q(e, t, n);
}
function jr(e) {
  return A(e) && k(e);
}
function Z(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Pr(e) {
  return Ht(e, $e(e));
}
function xr(e, t, n, r, o, a, s) {
  var i = Z(e, n), u = Z(t, n), d = s.get(u);
  if (d) {
    q(e, n, d);
    return;
  }
  var c = a ? a(i, u, n + "", e, t, s) : void 0, f = c === void 0;
  if (f) {
    var v = K(u), b = !v && Ee(u), E = !v && !b && Ie(u);
    c = u, v || b || E ? K(i) ? c = i : jr(i) ? c = Et(i) : b ? (f = !1, c = br(u)) : E ? (f = !1, c = Cr(u)) : c = [] : dr(u) || W(u) ? (c = i, W(i) ? c = Pr(i) : (!C(i) || J(i)) && (c = Tr(u))) : f = !1;
  }
  f && (s.set(u, c), o(c, u, r, a, s), s.delete(u)), q(e, n, c);
}
function ze(e, t, n, r, o) {
  e !== t && Or(t, function(a, s) {
    if (o || (o = new O()), C(a))
      xr(e, t, s, n, ze, r, o);
    else {
      var i = r ? r(Z(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), q(e, s, i);
    }
  }, $e);
}
var Fe = qt(function(e, t, n) {
  ze(e, t, n);
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
      const o = ne(Ye(t.visible) ? !0 : !!t.visible);
      return this.createConsumer(n, o, r, t);
    };
  }
  createConsumer(t, n, r, o) {
    const a = {
      value: null
    }, s = ve({
      setup: () => {
        const d = ne(), c = () => {
          Promise.resolve().then(() => {
            a.value.componentRef = d;
          });
        };
        return () => this.renderComponent(t, {
          componentRef: d,
          visible: n.value,
          onMounted: c,
          config: r,
          consumer: a
        });
      }
    }), u = {
      ...Fe(o, r),
      visible: n
    };
    return a.value = et(this.parentInstance, ge(s), u), a.value;
  }
}
class Ar extends ee {
  renderComponent(t, n) {
    const {
      componentRef: r,
      visible: o,
      onMounted: a,
      config: s,
      consumer: i
    } = n, u = (c) => {
      c(), i.value.destroy();
    }, d = (...c) => {
      var f, v;
      return i.value.emit(R.destroy), (v = (f = s.attrs) == null ? void 0 : f.onClosed) == null ? void 0 : v.call(f, ...c);
    };
    return D(Ke, X({
      ref: r,
      modelValue: o,
      beforeClose: u,
      onVnodeMounted: a,
      title: s.title,
      width: s.width
    }, {
      ...s.attrs
    }, {
      onClosed: d
    }), {
      default: () => t,
      ...s.slots
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
      onMounted: a,
      config: s,
      consumer: i
    } = n, u = (c) => {
      c(), i.value.destroy();
    }, d = (...c) => {
      var f, v;
      return i.value.emit(R.destroy), (v = (f = s.attrs) == null ? void 0 : f.onClosed) == null ? void 0 : v.call(f, ...c);
    };
    return D(We, X({
      ref: r,
      modelValue: o,
      beforeClose: u,
      onVnodeMounted: a
    }, {
      title: s.title,
      ...s.attrs
    }, {
      onClosed: d
    }), {
      default: () => t,
      ...s.slots
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
      onMounted: a,
      config: s,
      consumer: i
    } = n;
    return D(qe, X({
      ref: r,
      show: o,
      onClickCloseIcon: () => {
        i.value.destroy();
      },
      onVnodeMounted: a
    }, {
      ...Sr,
      ...s.attrs
    }), {
      default: () => t,
      ...s.slots
    });
  }
}
const $r = (e = {}) => {
  const t = new Ir();
  return t.setMountNode(e.appendTo), t.createCommand(e);
}, Kr = (e = {}) => {
  const t = $r(e);
  return (n, r = {}) => {
    const o = Fe({}, r, {
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
  be as CommandComponentConsumerInjectKey,
  re as CommandComponentStackInjectKey,
  et as CommandProviderWithRender,
  Xe as ConsumerEventBus,
  R as EVENT_NAME,
  Je as PromiseWithResolvers,
  L as activeConsumers,
  Br as busName2EventName,
  Qe as deepMerge,
  ke as destroyAllConsumer,
  Ur as eventName2BusName,
  Hr as getConsumer,
  Vr as getMaxZIndex,
  Ye as isNull,
  Wr as useCloseAllOnRouteChange,
  Gr as useElementPlusDialog,
  Lr as useElementPlusDrawer,
  $r as useVantUiPopup,
  Kr as useVantUiPopupOnBottom
};
