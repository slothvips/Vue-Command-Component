var He = Object.defineProperty;
var Ke = (e, t, r) => t in e ? He(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var te = (e, t, r) => Ke(e, typeof t != "symbol" ? t + "" : t, r);
import { createVNode as g, render as re, inject as ge, defineComponent as N, provide as U, nextTick as Le, getCurrentInstance as q, ref as T, h as Z, mergeProps as X } from "vue";
import { useGlobalComponentSettings as Ve, ElDialog as We, ElButton as ne, ElDrawer as qe } from "element-plus";
import { Popup as Ze } from "vant";
var v = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(v || {});
class Xe {
  constructor() {
    te(this, "map", /* @__PURE__ */ new WeakMap());
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
    let i = n;
    o.once && (i = (...s) => {
      n(...s), this.off(t, r, i);
    }), a.add(i), o.callAfterDelay !== void 0 && setTimeout(() => {
      i();
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
const Je = (e = "") => e.slice(2).toLowerCase(), oe = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Ye = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((n, o) => {
    e = n, t = o;
  }), resolve: e, reject: t };
}, Mn = (e) => {
  var n;
  const t = ((n = e.parentElement) == null ? void 0 : n.children) || [];
  let r = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > r && (r = a);
    }
  }), r;
}, be = Symbol("CommandDialogConsumerInjectKey"), ae = Symbol("CommandDialogStackInjectKey"), I = new Xe(), _e = (e) => ({
  ...e.parent ? _e(e.parent) : {},
  ...e.provides
});
function J(e, t, r) {
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || document.body, o = document.createElement("div");
  o.className = r.customClassName || "command-commponent-container", n.appendChild(o);
  const a = () => {
    r.visible.value = !1;
  }, i = () => {
    r.visible.value = !0;
  }, s = () => {
    Le(() => {
      re(null, o), o.remove();
    });
  }, u = (f = !1) => {
    f ? (d.on(v.destory, s, {
      once: !0,
      callAfterDelay: 3e3
    }), a()) : d.stack.splice(d.stackIndex).forEach((m) => m.destroy(!0));
  }, {
    promise: p,
    resolve: l,
    reject: h
  } = Ye(), d = {
    promise: p,
    resolve: l,
    reject: h,
    destroyWithResolve: (f) => {
      l(f), u();
    },
    destroyWithReject: (f) => {
      h(f), u();
    },
    hide: a,
    show: i,
    destroy: u,
    container: o,
    visible: r.visible,
    on: (f, m, Ge = {}) => I.on(d, f, m, Ge),
    once: (f, m) => I.once(d, f, m),
    emit: (f, ...m) => I.emit(d, f, ...m),
    off: (f, m) => I.off(d, f, m),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, x = g(/* @__PURE__ */ N({
    setup() {
      for (const m in r.provideProps)
        U(m, r.provideProps[m]);
      U(be, d);
      const f = ge(ae, []);
      return d.stackIndex = f.length, f.push(d), U(ae, f), d.stack = f, () => t;
    }
  }), null, null);
  return x.appContext = (e == null ? void 0 : e.appContext) || x.appContext, x.appContext.provides = {
    ...x.appContext.provides,
    ..._e(e)
  }, re(x, o), d;
}
const Qe = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return ge(be, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Nn = (...e) => (console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."), Qe(...e));
let Ce;
const Rn = (e) => {
  Ce = e;
}, zn = (e = !0) => {
  const t = q(), {
    locale: {
      t: r
    }
  } = Ve("message-box");
  return (o, a = {}) => {
    const i = T(e), s = J(t, Z(/* @__PURE__ */ N({
      setup() {
        const u = T(), p = (C) => {
          C(), s.destroy();
        }, l = () => {
          s.emit(v.destory);
        }, h = () => {
          Promise.resolve().then(() => {
            s.componentRef = u;
          });
        };
        return () => g(We, X({
          ref: u,
          modelValue: i.value,
          beforeClose: p,
          onClosed: l,
          onVnodeMounted: h
        }, {
          title: a.title,
          width: a.width,
          ...a.attrs
        }), {
          default: () => o,
          footer: () => g("div", null, [a[oe(v.cancel)] && g(ne, {
            onClick: () => s.emit(v.cancel)
          }, {
            default: () => [a.cancelBtnText || r("el.messagebox.cancel")]
          }), a[oe(v.confirm)] && g(ne, {
            type: "primary",
            onClick: () => s.emit(v.confirm)
          }, {
            default: () => [a.confirmBtnText || r("el.messagebox.confirm")]
          })]),
          ...a.slots
        });
      }
    })), {
      provideProps: a.provideProps || {},
      appendTo: Ce || a.appendTo,
      visible: i
    });
    return Object.entries(a).filter(([u, p]) => u.startsWith("on") && typeof p == "function").forEach(([u, p]) => {
      const l = Je(u);
      s.on(l, p);
    }), s;
  };
};
let Te;
const Bn = (e) => {
  Te = e;
}, Fn = (e = !0) => {
  const t = q();
  return (n, o = {}) => {
    const a = T(e), i = J(t, Z(/* @__PURE__ */ N({
      setup() {
        const s = T(), u = (h) => {
          h(), i.destroy();
        }, p = () => {
          i.emit(v.destory);
        }, l = () => {
          Promise.resolve().then(() => {
            i.componentRef = s;
          });
        };
        return () => g(qe, X({
          ref: s,
          modelValue: a.value,
          beforeClose: u,
          onClosed: p,
          onVnodeMounted: l
        }, {
          title: o.title,
          size: o.size,
          ...o.attrs
        }), {
          default: () => n,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: Te || o.appendTo,
      visible: a
    });
    return i;
  };
};
var Pe = typeof global == "object" && global && global.Object === Object && global, ke = typeof self == "object" && self && self.Object === Object && self, P = Pe || ke || Function("return this")(), D = P.Symbol, we = Object.prototype, et = we.hasOwnProperty, tt = we.toString, O = D ? D.toStringTag : void 0;
function rt(e) {
  var t = et.call(e, O), r = e[O];
  try {
    e[O] = void 0;
    var n = !0;
  } catch {
  }
  var o = tt.call(e);
  return n && (t ? e[O] = r : delete e[O]), o;
}
var nt = Object.prototype, ot = nt.toString;
function at(e) {
  return ot.call(e);
}
var st = "[object Null]", it = "[object Undefined]", se = D ? D.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? it : st : se && se in Object(e) ? rt(e) : at(e);
}
function $(e) {
  return e != null && typeof e == "object";
}
var K = Array.isArray;
function _(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function je(e) {
  return e;
}
var ut = "[object AsyncFunction]", ct = "[object Function]", lt = "[object GeneratorFunction]", pt = "[object Proxy]";
function Y(e) {
  if (!_(e))
    return !1;
  var t = R(e);
  return t == ct || t == lt || t == ut || t == pt;
}
var G = P["__core-js_shared__"], ie = function() {
  var e = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ft(e) {
  return !!ie && ie in e;
}
var dt = Function.prototype, ht = dt.toString;
function mt(e) {
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
var vt = /[\\^$.*+?()[\]{}|]/g, yt = /^\[object .+?Constructor\]$/, gt = Function.prototype, bt = Object.prototype, _t = gt.toString, Ct = bt.hasOwnProperty, Tt = RegExp(
  "^" + _t.call(Ct).replace(vt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pt(e) {
  if (!_(e) || ft(e))
    return !1;
  var t = Y(e) ? Tt : yt;
  return t.test(mt(e));
}
function wt(e, t) {
  return e == null ? void 0 : e[t];
}
function Q(e, t) {
  var r = wt(e, t);
  return Pt(r) ? r : void 0;
}
var ue = Object.create, jt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!_(t))
      return {};
    if (ue)
      return ue(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function xt(e, t, r) {
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
function Et(e) {
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
function It(e) {
  return function() {
    return e;
  };
}
var M = function() {
  try {
    var e = Q(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Dt = M ? function(e, t) {
  return M(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: It(t),
    writable: !0
  });
} : je, Mt = Et(Dt), Nt = 9007199254740991, Rt = /^(?:0|[1-9]\d*)$/;
function xe(e, t) {
  var r = typeof e;
  return t = t ?? Nt, !!t && (r == "number" || r != "symbol" && Rt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function k(e, t, r) {
  t == "__proto__" && M ? M(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function z(e, t) {
  return e === t || e !== e && t !== t;
}
var zt = Object.prototype, Bt = zt.hasOwnProperty;
function Ft(e, t, r) {
  var n = e[t];
  (!(Bt.call(e, t) && z(n, r)) || r === void 0 && !(t in e)) && k(e, t, r);
}
function Ut(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], u = void 0;
    u === void 0 && (u = e[s]), o ? k(r, s, u) : Ft(r, s, u);
  }
  return r;
}
var ce = Math.max;
function Gt(e, t, r) {
  return t = ce(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = ce(n.length - t, 0), i = Array(a); ++o < a; )
      i[o] = n[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = n[o];
    return s[t] = r(i), xt(e, this, s);
  };
}
function Ht(e, t) {
  return Mt(Gt(e, t, je), e + "");
}
var Kt = 9007199254740991;
function Oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Kt;
}
function ee(e) {
  return e != null && Oe(e.length) && !Y(e);
}
function Lt(e, t, r) {
  if (!_(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? ee(r) && xe(t, r.length) : n == "string" && t in r) ? z(r[t], e) : !1;
}
function Vt(e) {
  return Ht(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, i = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && Lt(r[0], r[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var s = r[n];
      s && e(t, s, n, a);
    }
    return t;
  });
}
var Wt = Object.prototype;
function Se(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Wt;
  return e === r;
}
function qt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Zt = "[object Arguments]";
function le(e) {
  return $(e) && R(e) == Zt;
}
var Ae = Object.prototype, Xt = Ae.hasOwnProperty, Jt = Ae.propertyIsEnumerable, L = le(/* @__PURE__ */ function() {
  return arguments;
}()) ? le : function(e) {
  return $(e) && Xt.call(e, "callee") && !Jt.call(e, "callee");
};
function Yt() {
  return !1;
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports, pe = $e && typeof module == "object" && module && !module.nodeType && module, Qt = pe && pe.exports === $e, fe = Qt ? P.Buffer : void 0, kt = fe ? fe.isBuffer : void 0, Ee = kt || Yt, er = "[object Arguments]", tr = "[object Array]", rr = "[object Boolean]", nr = "[object Date]", or = "[object Error]", ar = "[object Function]", sr = "[object Map]", ir = "[object Number]", ur = "[object Object]", cr = "[object RegExp]", lr = "[object Set]", pr = "[object String]", fr = "[object WeakMap]", dr = "[object ArrayBuffer]", hr = "[object DataView]", mr = "[object Float32Array]", vr = "[object Float64Array]", yr = "[object Int8Array]", gr = "[object Int16Array]", br = "[object Int32Array]", _r = "[object Uint8Array]", Cr = "[object Uint8ClampedArray]", Tr = "[object Uint16Array]", Pr = "[object Uint32Array]", c = {};
c[mr] = c[vr] = c[yr] = c[gr] = c[br] = c[_r] = c[Cr] = c[Tr] = c[Pr] = !0;
c[er] = c[tr] = c[dr] = c[rr] = c[hr] = c[nr] = c[or] = c[ar] = c[sr] = c[ir] = c[ur] = c[cr] = c[lr] = c[pr] = c[fr] = !1;
function wr(e) {
  return $(e) && Oe(e.length) && !!c[R(e)];
}
function jr(e) {
  return function(t) {
    return e(t);
  };
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, S = Ie && typeof module == "object" && module && !module.nodeType && module, xr = S && S.exports === Ie, H = xr && Pe.process, de = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || H && H.binding && H.binding("util");
  } catch {
  }
}(), he = de && de.isTypedArray, De = he ? jr(he) : wr;
function Or(e, t) {
  var r = K(e), n = !r && L(e), o = !r && !n && Ee(e), a = !r && !n && !o && De(e), i = r || n || o || a, s = i ? qt(e.length, String) : [], u = s.length;
  for (var p in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    xe(p, u)) || s.push(p);
  return s;
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
var $r = Object.prototype, Er = $r.hasOwnProperty;
function Ir(e) {
  if (!_(e))
    return Ar(e);
  var t = Se(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Er.call(e, n)) || r.push(n);
  return r;
}
function Me(e) {
  return ee(e) ? Or(e) : Ir(e);
}
var A = Q(Object, "create");
function Dr() {
  this.__data__ = A ? A(null) : {}, this.size = 0;
}
function Mr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nr = "__lodash_hash_undefined__", Rr = Object.prototype, zr = Rr.hasOwnProperty;
function Br(e) {
  var t = this.__data__;
  if (A) {
    var r = t[e];
    return r === Nr ? void 0 : r;
  }
  return zr.call(t, e) ? t[e] : void 0;
}
var Fr = Object.prototype, Ur = Fr.hasOwnProperty;
function Gr(e) {
  var t = this.__data__;
  return A ? t[e] !== void 0 : Ur.call(t, e);
}
var Hr = "__lodash_hash_undefined__";
function Kr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = A && t === void 0 ? Hr : t, this;
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
b.prototype.get = Br;
b.prototype.has = Gr;
b.prototype.set = Kr;
function Lr() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var r = e.length; r--; )
    if (z(e[r][0], t))
      return r;
  return -1;
}
var Vr = Array.prototype, Wr = Vr.splice;
function qr(e) {
  var t = this.__data__, r = B(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Wr.call(t, r, 1), --this.size, !0;
}
function Zr(e) {
  var t = this.__data__, r = B(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Xr(e) {
  return B(this.__data__, e) > -1;
}
function Jr(e, t) {
  var r = this.__data__, n = B(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function y(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
y.prototype.clear = Lr;
y.prototype.delete = qr;
y.prototype.get = Zr;
y.prototype.has = Xr;
y.prototype.set = Jr;
var Ne = Q(P, "Map");
function Yr() {
  this.size = 0, this.__data__ = {
    hash: new b(),
    map: new (Ne || y)(),
    string: new b()
  };
}
function Qr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function F(e, t) {
  var r = e.__data__;
  return Qr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function kr(e) {
  var t = F(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function en(e) {
  return F(this, e).get(e);
}
function tn(e) {
  return F(this, e).has(e);
}
function rn(e, t) {
  var r = F(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function w(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
w.prototype.clear = Yr;
w.prototype.delete = kr;
w.prototype.get = en;
w.prototype.has = tn;
w.prototype.set = rn;
var Re = Sr(Object.getPrototypeOf, Object), nn = "[object Object]", on = Function.prototype, an = Object.prototype, ze = on.toString, sn = an.hasOwnProperty, un = ze.call(Object);
function cn(e) {
  if (!$(e) || R(e) != nn)
    return !1;
  var t = Re(e);
  if (t === null)
    return !0;
  var r = sn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ze.call(r) == un;
}
function ln() {
  this.__data__ = new y(), this.size = 0;
}
function pn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function fn(e) {
  return this.__data__.get(e);
}
function dn(e) {
  return this.__data__.has(e);
}
var hn = 200;
function mn(e, t) {
  var r = this.__data__;
  if (r instanceof y) {
    var n = r.__data__;
    if (!Ne || n.length < hn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new w(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function j(e) {
  var t = this.__data__ = new y(e);
  this.size = t.size;
}
j.prototype.clear = ln;
j.prototype.delete = pn;
j.prototype.get = fn;
j.prototype.has = dn;
j.prototype.set = mn;
var Be = typeof exports == "object" && exports && !exports.nodeType && exports, me = Be && typeof module == "object" && module && !module.nodeType && module, vn = me && me.exports === Be, ve = vn ? P.Buffer : void 0;
ve && ve.allocUnsafe;
function yn(e, t) {
  return e.slice();
}
var ye = P.Uint8Array;
function gn(e) {
  var t = new e.constructor(e.byteLength);
  return new ye(t).set(new ye(e)), t;
}
function bn(e, t) {
  var r = gn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function _n(e) {
  return typeof e.constructor == "function" && !Se(e) ? jt(Re(e)) : {};
}
function Cn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), i = n(t), s = i.length; s--; ) {
      var u = i[++o];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Tn = Cn();
function V(e, t, r) {
  (r !== void 0 && !z(e[t], r) || r === void 0 && !(t in e)) && k(e, t, r);
}
function Pn(e) {
  return $(e) && ee(e);
}
function W(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function wn(e) {
  return Ut(e, Me(e));
}
function jn(e, t, r, n, o, a, i) {
  var s = W(e, r), u = W(t, r), p = i.get(u);
  if (p) {
    V(e, r, p);
    return;
  }
  var l = a ? a(s, u, r + "", e, t, i) : void 0, h = l === void 0;
  if (h) {
    var C = K(u), E = !C && Ee(u), d = !C && !E && De(u);
    l = u, C || E || d ? K(s) ? l = s : Pn(s) ? l = Ot(s) : E ? (h = !1, l = yn(u)) : d ? (h = !1, l = bn(u)) : l = [] : cn(u) || L(u) ? (l = s, L(s) ? l = wn(s) : (!_(s) || Y(s)) && (l = _n(u))) : h = !1;
  }
  h && (i.set(u, l), o(l, u, n, a, i), i.delete(u)), V(e, r, l);
}
function Fe(e, t, r, n, o) {
  e !== t && Tn(t, function(a, i) {
    if (o || (o = new j()), _(a))
      jn(e, t, i, r, Fe, n, o);
    else {
      var s = n ? n(W(e, i), a, i + "", e, t, o) : void 0;
      s === void 0 && (s = a), V(e, i, s);
    }
  }, Me);
}
var xn = Vt(function(e, t, r) {
  Fe(e, t, r);
});
let Ue;
const Un = (e) => {
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
  const t = q();
  return (n, o = {}) => {
    const a = T(e), i = J(t, Z(/* @__PURE__ */ N({
      setup() {
        const s = T(), u = () => {
          i.destroy();
        }, p = () => {
          i.emit(v.destory);
        }, l = () => {
          Promise.resolve().then(() => {
            i.componentRef = s;
          });
        };
        return () => g(Ze, X({
          ref: s,
          show: a.value,
          onClickCloseIcon: u,
          onClosed: p,
          onVnodeMounted: l
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
    return i;
  };
}, Gn = (e = !0) => {
  const t = Sn(e);
  return (r, n = {}) => (xn(n, {
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
  ae as CommandDialogStackInjectKey,
  J as CommandProvider,
  Xe as ConsumerEventBus,
  v as EVENT_NAME,
  Ye as PromiseWithResolvers,
  oe as busName2EventName,
  zn as createElementPlusDialog,
  Fn as createElementPlusDrawer,
  Sn as createVantUiPopup,
  Gn as createVantUiPopupOnBottom,
  Je as eventName2BusName,
  Nn as getCommandDialogConsumer,
  Qe as getConsumer,
  Mn as getMaxZIndex,
  Rn as setElementPlusDialogMountNode,
  Bn as setElementPlusDrawerMountNode,
  Un as setVantUiPopupMountNode
};
