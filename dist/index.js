var He = Object.defineProperty;
var Ke = (e, t, r) => t in e ? He(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => Ke(e, typeof t != "symbol" ? t + "" : t, r);
import { createVNode as C, render as k, inject as ve, defineComponent as q, provide as U, nextTick as Le, getCurrentInstance as me, ref as E, h as ge, mergeProps as ye } from "vue";
import { useGlobalComponentSettings as We, ElDialog as Ve, ElButton as ee } from "element-plus";
import { Popup as qe } from "vant";
class Ze {
  constructor() {
    Q(this, "map", /* @__PURE__ */ new WeakMap());
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
    }), a.add(s), o.callAfterDelay !== void 0 && setTimeout(() => {
      s();
    }, o.callAfterDelay || 0);
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
const Xe = (e = "") => e.slice(2).toLowerCase(), te = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Je = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((n, o) => {
    e = n, t = o;
  }), resolve: e, reject: t };
}, Ye = (e) => {
  var n;
  const t = ((n = e.parentElement) == null ? void 0 : n.children) || [];
  let r = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > r && (r = a);
    }
  }), r;
};
var y = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(y || {});
const be = Symbol("CommandDialogConsumerInjectKey"), re = Symbol("CommandDialogStackInjectKey"), I = new Ze(), _e = (e) => ({
  ...e.parent ? _e(e.parent) : {},
  ...e.provides
});
function Ce(e, t, r) {
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || document.body, o = document.createElement("div");
  o.className = "command-commponent-container", n.appendChild(o);
  const a = Ye(o);
  o.style.position = "relative", o.style.zIndex = String(Math.max(a + 1, 9999));
  const s = () => {
    r.visible.value = !1;
  }, i = () => {
    r.visible.value = !0;
  }, u = () => {
    Le(() => {
      k(null, o), o.remove();
    });
  }, l = (p = !1) => {
    p ? (d.on(y.destory, u, {
      once: !0,
      callAfterDelay: 3e3
    }), s()) : d.stack.splice(d.stackIndex).forEach((h) => h.destroy(!0));
  }, {
    promise: f,
    resolve: v,
    reject: g
  } = Je(), d = {
    promise: f,
    resolve: v,
    reject: g,
    destroyWithResolve: (p) => {
      v(p), l();
    },
    destroyWithReject: (p) => {
      g(p), l();
    },
    hide: s,
    show: i,
    destroy: l,
    container: o,
    visible: r.visible,
    on: (p, h, Ge = {}) => I.on(d, p, h, Ge),
    once: (p, h) => I.once(d, p, h),
    emit: (p, ...h) => I.emit(d, p, ...h),
    off: (p, h) => I.off(d, p, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, P = C(/* @__PURE__ */ q({
    setup() {
      for (const h in r.provideProps)
        U(h, r.provideProps[h]);
      U(be, d);
      const p = ve(re, []);
      return d.stackIndex = p.length, p.push(d), U(re, p), d.stack = p, () => t;
    }
  }), null, null);
  return P.appContext = (e == null ? void 0 : e.appContext) || P.appContext, P.appContext.provides = {
    ...P.appContext.provides,
    ..._e(e)
  }, k(P, o), d;
}
const Qe = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return ve(be, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Mn = (...e) => (console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."), Qe(...e));
let Te;
const Bn = (e) => {
  Te = e;
}, Nn = (e = !0) => {
  const t = me(), {
    locale: {
      t: r
    }
  } = We("message-box");
  return (o, a = {}) => {
    const s = E(e), i = Ce(t, ge(/* @__PURE__ */ q({
      setup() {
        const u = E(), l = (g) => {
          g(), i.destroy();
        }, f = () => {
          i.emit(y.destory);
        }, v = () => {
          Promise.resolve().then(() => {
            i.componentRef = u;
          });
        };
        return () => C(Ve, ye({
          ref: u,
          modelValue: s.value,
          beforeClose: l,
          onClosed: f,
          onVnodeMounted: v
        }, {
          title: a.title,
          width: a.width,
          ...a.attrs
        }), {
          default: () => o,
          footer: () => C("div", null, [a[te(y.cancel)] && C(ee, {
            onClick: () => i.emit(y.cancel)
          }, {
            default: () => [a.cancelBtnText || r("el.messagebox.cancel")]
          }), a[te(y.confirm)] && C(ee, {
            type: "primary",
            onClick: () => i.emit(y.confirm)
          }, {
            default: () => [a.confirmBtnText || r("el.messagebox.confirm")]
          })]),
          ...a.slots
        });
      }
    })), {
      provideProps: a.provideProps || {},
      appendTo: Te || a.appendTo,
      visible: s
    });
    return Object.entries(a).filter(([u, l]) => u.startsWith("on") && typeof l == "function").forEach(([u, l]) => {
      const f = Xe(u);
      i.on(f, l);
    }), i;
  };
};
var je = typeof global == "object" && global && global.Object === Object && global, ke = typeof self == "object" && self && self.Object === Object && self, T = je || ke || Function("return this")(), D = T.Symbol, xe = Object.prototype, et = xe.hasOwnProperty, tt = xe.toString, w = D ? D.toStringTag : void 0;
function rt(e) {
  var t = et.call(e, w), r = e[w];
  try {
    e[w] = void 0;
    var n = !0;
  } catch {
  }
  var o = tt.call(e);
  return n && (t ? e[w] = r : delete e[w]), o;
}
var nt = Object.prototype, ot = nt.toString;
function at(e) {
  return ot.call(e);
}
var it = "[object Null]", st = "[object Undefined]", ne = D ? D.toStringTag : void 0;
function B(e) {
  return e == null ? e === void 0 ? st : it : ne && ne in Object(e) ? rt(e) : at(e);
}
function A(e) {
  return e != null && typeof e == "object";
}
var K = Array.isArray;
function _(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Pe(e) {
  return e;
}
var ut = "[object AsyncFunction]", ct = "[object Function]", lt = "[object GeneratorFunction]", ft = "[object Proxy]";
function Z(e) {
  if (!_(e))
    return !1;
  var t = B(e);
  return t == ct || t == lt || t == ut || t == ft;
}
var G = T["__core-js_shared__"], oe = function() {
  var e = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pt(e) {
  return !!oe && oe in e;
}
var dt = Function.prototype, ht = dt.toString;
function vt(e) {
  if (e != null) {
    try {
      return ht.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var mt = /[\\^$.*+?()[\]{}|]/g, gt = /^\[object .+?Constructor\]$/, yt = Function.prototype, bt = Object.prototype, _t = yt.toString, Ct = bt.hasOwnProperty, Tt = RegExp(
  "^" + _t.call(Ct).replace(mt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jt(e) {
  if (!_(e) || pt(e))
    return !1;
  var t = Z(e) ? Tt : gt;
  return t.test(vt(e));
}
function xt(e, t) {
  return e == null ? void 0 : e[t];
}
function X(e, t) {
  var r = xt(e, t);
  return jt(r) ? r : void 0;
}
var ae = Object.create, Pt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!_(t))
      return {};
    if (ae)
      return ae(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function wt(e, t, r) {
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
function Ot(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var St = 800, At = 16, $t = Date.now;
function It(e) {
  var t = 0, r = 0;
  return function() {
    var n = $t(), o = At - (n - r);
    if (r = n, o > 0) {
      if (++t >= St)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Et(e) {
  return function() {
    return e;
  };
}
var M = function() {
  try {
    var e = X(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Dt = M ? function(e, t) {
  return M(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Et(t),
    writable: !0
  });
} : Pe, Mt = It(Dt), Bt = 9007199254740991, Nt = /^(?:0|[1-9]\d*)$/;
function we(e, t) {
  var r = typeof e;
  return t = t ?? Bt, !!t && (r == "number" || r != "symbol" && Nt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function J(e, t, r) {
  t == "__proto__" && M ? M(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function N(e, t) {
  return e === t || e !== e && t !== t;
}
var Rt = Object.prototype, zt = Rt.hasOwnProperty;
function Ft(e, t, r) {
  var n = e[t];
  (!(zt.call(e, t) && N(n, r)) || r === void 0 && !(t in e)) && J(e, t, r);
}
function Ut(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], u = void 0;
    u === void 0 && (u = e[i]), o ? J(r, i, u) : Ft(r, i, u);
  }
  return r;
}
var ie = Math.max;
function Gt(e, t, r) {
  return t = ie(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = ie(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), wt(e, this, i);
  };
}
function Ht(e, t) {
  return Mt(Gt(e, t, Pe), e + "");
}
var Kt = 9007199254740991;
function Oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Kt;
}
function Y(e) {
  return e != null && Oe(e.length) && !Z(e);
}
function Lt(e, t, r) {
  if (!_(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Y(r) && we(t, r.length) : n == "string" && t in r) ? N(r[t], e) : !1;
}
function Wt(e) {
  return Ht(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Lt(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Vt = Object.prototype;
function Se(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Vt;
  return e === r;
}
function qt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Zt = "[object Arguments]";
function se(e) {
  return A(e) && B(e) == Zt;
}
var Ae = Object.prototype, Xt = Ae.hasOwnProperty, Jt = Ae.propertyIsEnumerable, L = se(/* @__PURE__ */ function() {
  return arguments;
}()) ? se : function(e) {
  return A(e) && Xt.call(e, "callee") && !Jt.call(e, "callee");
};
function Yt() {
  return !1;
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports, ue = $e && typeof module == "object" && module && !module.nodeType && module, Qt = ue && ue.exports === $e, ce = Qt ? T.Buffer : void 0, kt = ce ? ce.isBuffer : void 0, Ie = kt || Yt, er = "[object Arguments]", tr = "[object Array]", rr = "[object Boolean]", nr = "[object Date]", or = "[object Error]", ar = "[object Function]", ir = "[object Map]", sr = "[object Number]", ur = "[object Object]", cr = "[object RegExp]", lr = "[object Set]", fr = "[object String]", pr = "[object WeakMap]", dr = "[object ArrayBuffer]", hr = "[object DataView]", vr = "[object Float32Array]", mr = "[object Float64Array]", gr = "[object Int8Array]", yr = "[object Int16Array]", br = "[object Int32Array]", _r = "[object Uint8Array]", Cr = "[object Uint8ClampedArray]", Tr = "[object Uint16Array]", jr = "[object Uint32Array]", c = {};
c[vr] = c[mr] = c[gr] = c[yr] = c[br] = c[_r] = c[Cr] = c[Tr] = c[jr] = !0;
c[er] = c[tr] = c[dr] = c[rr] = c[hr] = c[nr] = c[or] = c[ar] = c[ir] = c[sr] = c[ur] = c[cr] = c[lr] = c[fr] = c[pr] = !1;
function xr(e) {
  return A(e) && Oe(e.length) && !!c[B(e)];
}
function Pr(e) {
  return function(t) {
    return e(t);
  };
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, O = Ee && typeof module == "object" && module && !module.nodeType && module, wr = O && O.exports === Ee, H = wr && je.process, le = function() {
  try {
    var e = O && O.require && O.require("util").types;
    return e || H && H.binding && H.binding("util");
  } catch {
  }
}(), fe = le && le.isTypedArray, De = fe ? Pr(fe) : xr;
function Or(e, t) {
  var r = K(e), n = !r && L(e), o = !r && !n && Ie(e), a = !r && !n && !o && De(e), s = r || n || o || a, i = s ? qt(e.length, String) : [], u = i.length;
  for (var l in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    we(l, u)) || i.push(l);
  return i;
}
function Sr(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function Ar(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var $r = Object.prototype, Ir = $r.hasOwnProperty;
function Er(e) {
  if (!_(e))
    return Ar(e);
  var t = Se(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ir.call(e, n)) || r.push(n);
  return r;
}
function Me(e) {
  return Y(e) ? Or(e) : Er(e);
}
var S = X(Object, "create");
function Dr() {
  this.__data__ = S ? S(null) : {}, this.size = 0;
}
function Mr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Br = "__lodash_hash_undefined__", Nr = Object.prototype, Rr = Nr.hasOwnProperty;
function zr(e) {
  var t = this.__data__;
  if (S) {
    var r = t[e];
    return r === Br ? void 0 : r;
  }
  return Rr.call(t, e) ? t[e] : void 0;
}
var Fr = Object.prototype, Ur = Fr.hasOwnProperty;
function Gr(e) {
  var t = this.__data__;
  return S ? t[e] !== void 0 : Ur.call(t, e);
}
var Hr = "__lodash_hash_undefined__";
function Kr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = S && t === void 0 ? Hr : t, this;
}
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
b.prototype.clear = Dr;
b.prototype.delete = Mr;
b.prototype.get = zr;
b.prototype.has = Gr;
b.prototype.set = Kr;
function Lr() {
  this.__data__ = [], this.size = 0;
}
function R(e, t) {
  for (var r = e.length; r--; )
    if (N(e[r][0], t))
      return r;
  return -1;
}
var Wr = Array.prototype, Vr = Wr.splice;
function qr(e) {
  var t = this.__data__, r = R(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Vr.call(t, r, 1), --this.size, !0;
}
function Zr(e) {
  var t = this.__data__, r = R(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Xr(e) {
  return R(this.__data__, e) > -1;
}
function Jr(e, t) {
  var r = this.__data__, n = R(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function m(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = Lr;
m.prototype.delete = qr;
m.prototype.get = Zr;
m.prototype.has = Xr;
m.prototype.set = Jr;
var Be = X(T, "Map");
function Yr() {
  this.size = 0, this.__data__ = {
    hash: new b(),
    map: new (Be || m)(),
    string: new b()
  };
}
function Qr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function z(e, t) {
  var r = e.__data__;
  return Qr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function kr(e) {
  var t = z(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function en(e) {
  return z(this, e).get(e);
}
function tn(e) {
  return z(this, e).has(e);
}
function rn(e, t) {
  var r = z(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function j(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
j.prototype.clear = Yr;
j.prototype.delete = kr;
j.prototype.get = en;
j.prototype.has = tn;
j.prototype.set = rn;
var Ne = Sr(Object.getPrototypeOf, Object), nn = "[object Object]", on = Function.prototype, an = Object.prototype, Re = on.toString, sn = an.hasOwnProperty, un = Re.call(Object);
function cn(e) {
  if (!A(e) || B(e) != nn)
    return !1;
  var t = Ne(e);
  if (t === null)
    return !0;
  var r = sn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Re.call(r) == un;
}
function ln() {
  this.__data__ = new m(), this.size = 0;
}
function fn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function pn(e) {
  return this.__data__.get(e);
}
function dn(e) {
  return this.__data__.has(e);
}
var hn = 200;
function vn(e, t) {
  var r = this.__data__;
  if (r instanceof m) {
    var n = r.__data__;
    if (!Be || n.length < hn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new j(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function x(e) {
  var t = this.__data__ = new m(e);
  this.size = t.size;
}
x.prototype.clear = ln;
x.prototype.delete = fn;
x.prototype.get = pn;
x.prototype.has = dn;
x.prototype.set = vn;
var ze = typeof exports == "object" && exports && !exports.nodeType && exports, pe = ze && typeof module == "object" && module && !module.nodeType && module, mn = pe && pe.exports === ze, de = mn ? T.Buffer : void 0;
de && de.allocUnsafe;
function gn(e, t) {
  return e.slice();
}
var he = T.Uint8Array;
function yn(e) {
  var t = new e.constructor(e.byteLength);
  return new he(t).set(new he(e)), t;
}
function bn(e, t) {
  var r = yn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function _n(e) {
  return typeof e.constructor == "function" && !Se(e) ? Pt(Ne(e)) : {};
}
function Cn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var u = s[++o];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Tn = Cn();
function W(e, t, r) {
  (r !== void 0 && !N(e[t], r) || r === void 0 && !(t in e)) && J(e, t, r);
}
function jn(e) {
  return A(e) && Y(e);
}
function V(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function xn(e) {
  return Ut(e, Me(e));
}
function Pn(e, t, r, n, o, a, s) {
  var i = V(e, r), u = V(t, r), l = s.get(u);
  if (l) {
    W(e, r, l);
    return;
  }
  var f = a ? a(i, u, r + "", e, t, s) : void 0, v = f === void 0;
  if (v) {
    var g = K(u), $ = !g && Ie(u), F = !g && !$ && De(u);
    f = u, g || $ || F ? K(i) ? f = i : jn(i) ? f = Ot(i) : $ ? (v = !1, f = gn(u)) : F ? (v = !1, f = bn(u)) : f = [] : cn(u) || L(u) ? (f = i, L(i) ? f = xn(i) : (!_(i) || Z(i)) && (f = _n(u))) : v = !1;
  }
  v && (s.set(u, f), o(f, u, n, a, s), s.delete(u)), W(e, r, f);
}
function Fe(e, t, r, n, o) {
  e !== t && Tn(t, function(a, s) {
    if (o || (o = new x()), _(a))
      Pn(e, t, s, r, Fe, n, o);
    else {
      var i = n ? n(V(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), W(e, s, i);
    }
  }, Me);
}
var wn = Wt(function(e, t, r) {
  Fe(e, t, r);
});
let Ue;
const Rn = (e) => {
  Ue = e;
}, On = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, Sn = (e = !0) => {
  const t = me();
  return (n, o = {}) => {
    const a = E(e), s = Ce(t, ge(/* @__PURE__ */ q({
      setup() {
        const i = E(), u = () => {
          s.destroy();
        }, l = () => {
          s.emit(y.destory);
        }, f = () => {
          Promise.resolve().then(() => {
            s.componentRef = i;
          });
        };
        return () => C(qe, ye({
          ref: i,
          show: a.value,
          onClickCloseIcon: u,
          onClosed: l,
          onVnodeMounted: f
        }, {
          ...On,
          ...o.attrs
        }), {
          default: () => n,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: Ue || o.appendTo,
      visible: a
    });
    return s;
  };
}, zn = (e = !0) => {
  const t = Sn(e);
  return (r, n = {}) => (wn(n, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(r, n));
};
export {
  be as CommandDialogConsumerInjectKey,
  re as CommandDialogStackInjectKey,
  Ce as CommandProvider,
  Ze as ConsumerEventBus,
  y as EVENT_NAME,
  Je as PromiseWithResolvers,
  te as busName2EventName,
  Nn as createElementPlusDialog,
  Sn as createVantUiPopup,
  zn as createVantUiPopupOnBottom,
  Xe as eventName2BusName,
  Mn as getCommandDialogConsumer,
  Qe as getConsumer,
  Ye as getMaxZIndex,
  Bn as setElementPlusDialogMountNode,
  Rn as setVantUiPopupMountNode
};
