var Le = Object.defineProperty;
var Ve = (e, t, r) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => Ve(e, typeof t != "symbol" ? t + "" : t, r);
import { createVNode as m, render as k, inject as ve, defineComponent as q, provide as F, nextTick as We, getCurrentInstance as me, ref as E, h as ye, mergeProps as ge, resolveComponent as ee } from "vue";
import { useGlobalComponentSettings as qe, ElDialog as Ze } from "element-plus";
import { Popup as Xe } from "vant";
class Je {
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
const Ye = (e = "") => e.slice(2).toLowerCase(), te = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Qe = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((n, o) => {
    e = n, t = o;
  }), resolve: e, reject: t };
}, ke = (e) => {
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
var b = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(b || {});
const be = Symbol("CommandDialogConsumerInjectKey"), re = Symbol("CommandDialogStackInjectKey"), I = new Je(), _e = (e) => ({
  ...e.parent ? _e(e.parent) : {},
  ...e.provides
});
function Ce(e, t, r) {
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || document.body, o = document.createElement("div");
  o.className = "command-commponent-container", n.appendChild(o);
  const a = ke(o);
  o.style.position = "relative", o.style.zIndex = String(Math.max(a + 1, 9999));
  const s = () => {
    r.visible.value = !1;
  }, i = () => {
    r.visible.value = !0;
  }, u = () => {
    We(() => {
      k(null, o), o.remove();
    });
  }, l = (f = !1) => {
    f ? (d.on(b.destory, u, {
      once: !0,
      callAfterDelay: 3e3
    }), s()) : d.stack.splice(d.stackIndex).forEach((h) => h.destroy(!0));
  }, {
    promise: p,
    resolve: v,
    reject: g
  } = Qe(), d = {
    promise: p,
    resolve: v,
    reject: g,
    destroyWithResolve: (f) => {
      v(f), l();
    },
    destroyWithReject: (f) => {
      g(f), l();
    },
    hide: s,
    show: i,
    destroy: l,
    container: o,
    visible: r.visible,
    on: (f, h, Ke = {}) => I.on(d, f, h, Ke),
    once: (f, h) => I.once(d, f, h),
    emit: (f, ...h) => I.emit(d, f, ...h),
    off: (f, h) => I.off(d, f, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, x = m(/* @__PURE__ */ q({
    setup() {
      for (const h in r.provideProps)
        F(h, r.provideProps[h]);
      F(be, d);
      const f = ve(re, []);
      return d.stackIndex = f.length, f.push(d), F(re, f), d.stack = f, () => t;
    }
  }), null, null);
  return x.appContext = (e == null ? void 0 : e.appContext) || x.appContext, x.appContext.provides = {
    ...x.appContext.provides,
    ..._e(e)
  }, k(x, o), d;
}
const Mn = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return ve(be, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
let Te;
const Nn = (e) => {
  Te = e;
}, Bn = (e = !0) => {
  const t = me(), {
    locale: {
      t: r
    }
  } = qe("message-box");
  return (o, a = {}) => {
    const s = E(e), i = Ce(t, ye(/* @__PURE__ */ q({
      setup() {
        const u = E(), l = (g) => {
          g(), i.destroy();
        }, p = () => {
          i.emit(b.destory);
        }, v = () => {
          Promise.resolve().then(() => {
            i.componentRef = u;
          });
        };
        return () => m(Ze, ge({
          ref: u,
          modelValue: s.value,
          beforeClose: l,
          onClosed: p,
          onVnodeMounted: v
        }, {
          title: a.title,
          width: a.width,
          ...a.attrs
        }), {
          default: () => o,
          footer: () => m("div", null, [a[te(b.cancel)] && m(ee("el-button"), {
            onClick: () => i.emit(b.cancel)
          }, {
            default: () => [a.cancelBtnText || r("el.messagebox.cancel")]
          }), a[te(b.confirm)] && m(ee("el-button"), {
            type: "primary",
            onClick: () => i.emit(b.confirm)
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
      const p = Ye(u);
      i.on(p, l);
    }), i;
  };
};
var Pe = typeof global == "object" && global && global.Object === Object && global, et = typeof self == "object" && self && self.Object === Object && self, T = Pe || et || Function("return this")(), D = T.Symbol, je = Object.prototype, tt = je.hasOwnProperty, rt = je.toString, O = D ? D.toStringTag : void 0;
function nt(e) {
  var t = tt.call(e, O), r = e[O];
  try {
    e[O] = void 0;
    var n = !0;
  } catch {
  }
  var o = rt.call(e);
  return n && (t ? e[O] = r : delete e[O]), o;
}
var ot = Object.prototype, at = ot.toString;
function it(e) {
  return at.call(e);
}
var st = "[object Null]", ut = "[object Undefined]", ne = D ? D.toStringTag : void 0;
function N(e) {
  return e == null ? e === void 0 ? ut : st : ne && ne in Object(e) ? nt(e) : it(e);
}
function A(e) {
  return e != null && typeof e == "object";
}
var K = Array.isArray;
function C(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function xe(e) {
  return e;
}
var ct = "[object AsyncFunction]", lt = "[object Function]", pt = "[object GeneratorFunction]", ft = "[object Proxy]";
function Z(e) {
  if (!C(e))
    return !1;
  var t = N(e);
  return t == lt || t == pt || t == ct || t == ft;
}
var H = T["__core-js_shared__"], oe = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dt(e) {
  return !!oe && oe in e;
}
var ht = Function.prototype, vt = ht.toString;
function mt(e) {
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
var yt = /[\\^$.*+?()[\]{}|]/g, gt = /^\[object .+?Constructor\]$/, bt = Function.prototype, _t = Object.prototype, Ct = bt.toString, Tt = _t.hasOwnProperty, Pt = RegExp(
  "^" + Ct.call(Tt).replace(yt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jt(e) {
  if (!C(e) || dt(e))
    return !1;
  var t = Z(e) ? Pt : gt;
  return t.test(mt(e));
}
function xt(e, t) {
  return e == null ? void 0 : e[t];
}
function X(e, t) {
  var r = xt(e, t);
  return jt(r) ? r : void 0;
}
var ae = Object.create, Ot = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!C(t))
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
function St(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var At = 800, $t = 16, It = Date.now;
function Et(e) {
  var t = 0, r = 0;
  return function() {
    var n = It(), o = $t - (n - r);
    if (r = n, o > 0) {
      if (++t >= At)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Dt(e) {
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
}(), Mt = M ? function(e, t) {
  return M(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Dt(t),
    writable: !0
  });
} : xe, Nt = Et(Mt), Bt = 9007199254740991, Rt = /^(?:0|[1-9]\d*)$/;
function Oe(e, t) {
  var r = typeof e;
  return t = t ?? Bt, !!t && (r == "number" || r != "symbol" && Rt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function J(e, t, r) {
  t == "__proto__" && M ? M(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function B(e, t) {
  return e === t || e !== e && t !== t;
}
var zt = Object.prototype, Ut = zt.hasOwnProperty;
function Ft(e, t, r) {
  var n = e[t];
  (!(Ut.call(e, t) && B(n, r)) || r === void 0 && !(t in e)) && J(e, t, r);
}
function Ht(e, t, r, n) {
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
function Kt(e, t) {
  return Nt(Gt(e, t, xe), e + "");
}
var Lt = 9007199254740991;
function we(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lt;
}
function Y(e) {
  return e != null && we(e.length) && !Z(e);
}
function Vt(e, t, r) {
  if (!C(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Y(r) && Oe(t, r.length) : n == "string" && t in r) ? B(r[t], e) : !1;
}
function Wt(e) {
  return Kt(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Vt(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var qt = Object.prototype;
function Se(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || qt;
  return e === r;
}
function Zt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Xt = "[object Arguments]";
function se(e) {
  return A(e) && N(e) == Xt;
}
var Ae = Object.prototype, Jt = Ae.hasOwnProperty, Yt = Ae.propertyIsEnumerable, L = se(/* @__PURE__ */ function() {
  return arguments;
}()) ? se : function(e) {
  return A(e) && Jt.call(e, "callee") && !Yt.call(e, "callee");
};
function Qt() {
  return !1;
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports, ue = $e && typeof module == "object" && module && !module.nodeType && module, kt = ue && ue.exports === $e, ce = kt ? T.Buffer : void 0, er = ce ? ce.isBuffer : void 0, Ie = er || Qt, tr = "[object Arguments]", rr = "[object Array]", nr = "[object Boolean]", or = "[object Date]", ar = "[object Error]", ir = "[object Function]", sr = "[object Map]", ur = "[object Number]", cr = "[object Object]", lr = "[object RegExp]", pr = "[object Set]", fr = "[object String]", dr = "[object WeakMap]", hr = "[object ArrayBuffer]", vr = "[object DataView]", mr = "[object Float32Array]", yr = "[object Float64Array]", gr = "[object Int8Array]", br = "[object Int16Array]", _r = "[object Int32Array]", Cr = "[object Uint8Array]", Tr = "[object Uint8ClampedArray]", Pr = "[object Uint16Array]", jr = "[object Uint32Array]", c = {};
c[mr] = c[yr] = c[gr] = c[br] = c[_r] = c[Cr] = c[Tr] = c[Pr] = c[jr] = !0;
c[tr] = c[rr] = c[hr] = c[nr] = c[vr] = c[or] = c[ar] = c[ir] = c[sr] = c[ur] = c[cr] = c[lr] = c[pr] = c[fr] = c[dr] = !1;
function xr(e) {
  return A(e) && we(e.length) && !!c[N(e)];
}
function Or(e) {
  return function(t) {
    return e(t);
  };
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, w = Ee && typeof module == "object" && module && !module.nodeType && module, wr = w && w.exports === Ee, G = wr && Pe.process, le = function() {
  try {
    var e = w && w.require && w.require("util").types;
    return e || G && G.binding && G.binding("util");
  } catch {
  }
}(), pe = le && le.isTypedArray, De = pe ? Or(pe) : xr;
function Sr(e, t) {
  var r = K(e), n = !r && L(e), o = !r && !n && Ie(e), a = !r && !n && !o && De(e), s = r || n || o || a, i = s ? Zt(e.length, String) : [], u = i.length;
  for (var l in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Oe(l, u)) || i.push(l);
  return i;
}
function Ar(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function $r(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ir = Object.prototype, Er = Ir.hasOwnProperty;
function Dr(e) {
  if (!C(e))
    return $r(e);
  var t = Se(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Er.call(e, n)) || r.push(n);
  return r;
}
function Me(e) {
  return Y(e) ? Sr(e) : Dr(e);
}
var S = X(Object, "create");
function Mr() {
  this.__data__ = S ? S(null) : {}, this.size = 0;
}
function Nr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Br = "__lodash_hash_undefined__", Rr = Object.prototype, zr = Rr.hasOwnProperty;
function Ur(e) {
  var t = this.__data__;
  if (S) {
    var r = t[e];
    return r === Br ? void 0 : r;
  }
  return zr.call(t, e) ? t[e] : void 0;
}
var Fr = Object.prototype, Hr = Fr.hasOwnProperty;
function Gr(e) {
  var t = this.__data__;
  return S ? t[e] !== void 0 : Hr.call(t, e);
}
var Kr = "__lodash_hash_undefined__";
function Lr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = S && t === void 0 ? Kr : t, this;
}
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = Mr;
_.prototype.delete = Nr;
_.prototype.get = Ur;
_.prototype.has = Gr;
_.prototype.set = Lr;
function Vr() {
  this.__data__ = [], this.size = 0;
}
function R(e, t) {
  for (var r = e.length; r--; )
    if (B(e[r][0], t))
      return r;
  return -1;
}
var Wr = Array.prototype, qr = Wr.splice;
function Zr(e) {
  var t = this.__data__, r = R(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : qr.call(t, r, 1), --this.size, !0;
}
function Xr(e) {
  var t = this.__data__, r = R(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Jr(e) {
  return R(this.__data__, e) > -1;
}
function Yr(e, t) {
  var r = this.__data__, n = R(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function y(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
y.prototype.clear = Vr;
y.prototype.delete = Zr;
y.prototype.get = Xr;
y.prototype.has = Jr;
y.prototype.set = Yr;
var Ne = X(T, "Map");
function Qr() {
  this.size = 0, this.__data__ = {
    hash: new _(),
    map: new (Ne || y)(),
    string: new _()
  };
}
function kr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function z(e, t) {
  var r = e.__data__;
  return kr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function en(e) {
  var t = z(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function tn(e) {
  return z(this, e).get(e);
}
function rn(e) {
  return z(this, e).has(e);
}
function nn(e, t) {
  var r = z(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
P.prototype.clear = Qr;
P.prototype.delete = en;
P.prototype.get = tn;
P.prototype.has = rn;
P.prototype.set = nn;
var Be = Ar(Object.getPrototypeOf, Object), on = "[object Object]", an = Function.prototype, sn = Object.prototype, Re = an.toString, un = sn.hasOwnProperty, cn = Re.call(Object);
function ln(e) {
  if (!A(e) || N(e) != on)
    return !1;
  var t = Be(e);
  if (t === null)
    return !0;
  var r = un.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Re.call(r) == cn;
}
function pn() {
  this.__data__ = new y(), this.size = 0;
}
function fn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function dn(e) {
  return this.__data__.get(e);
}
function hn(e) {
  return this.__data__.has(e);
}
var vn = 200;
function mn(e, t) {
  var r = this.__data__;
  if (r instanceof y) {
    var n = r.__data__;
    if (!Ne || n.length < vn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new P(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function j(e) {
  var t = this.__data__ = new y(e);
  this.size = t.size;
}
j.prototype.clear = pn;
j.prototype.delete = fn;
j.prototype.get = dn;
j.prototype.has = hn;
j.prototype.set = mn;
var ze = typeof exports == "object" && exports && !exports.nodeType && exports, fe = ze && typeof module == "object" && module && !module.nodeType && module, yn = fe && fe.exports === ze, de = yn ? T.Buffer : void 0;
de && de.allocUnsafe;
function gn(e, t) {
  return e.slice();
}
var he = T.Uint8Array;
function bn(e) {
  var t = new e.constructor(e.byteLength);
  return new he(t).set(new he(e)), t;
}
function _n(e, t) {
  var r = bn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function Cn(e) {
  return typeof e.constructor == "function" && !Se(e) ? Ot(Be(e)) : {};
}
function Tn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var u = s[++o];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Pn = Tn();
function V(e, t, r) {
  (r !== void 0 && !B(e[t], r) || r === void 0 && !(t in e)) && J(e, t, r);
}
function jn(e) {
  return A(e) && Y(e);
}
function W(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function xn(e) {
  return Ht(e, Me(e));
}
function On(e, t, r, n, o, a, s) {
  var i = W(e, r), u = W(t, r), l = s.get(u);
  if (l) {
    V(e, r, l);
    return;
  }
  var p = a ? a(i, u, r + "", e, t, s) : void 0, v = p === void 0;
  if (v) {
    var g = K(u), $ = !g && Ie(u), U = !g && !$ && De(u);
    p = u, g || $ || U ? K(i) ? p = i : jn(i) ? p = St(i) : $ ? (v = !1, p = gn(u)) : U ? (v = !1, p = _n(u)) : p = [] : ln(u) || L(u) ? (p = i, L(i) ? p = xn(i) : (!C(i) || Z(i)) && (p = Cn(u))) : v = !1;
  }
  v && (s.set(u, p), o(p, u, n, a, s), s.delete(u)), V(e, r, p);
}
function Ue(e, t, r, n, o) {
  e !== t && Pn(t, function(a, s) {
    if (o || (o = new j()), C(a))
      On(e, t, s, r, Ue, n, o);
    else {
      var i = n ? n(W(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), V(e, s, i);
    }
  }, Me);
}
var Fe = Wt(function(e, t, r) {
  Ue(e, t, r);
});
let He;
const Rn = (e) => {
  He = e;
}, wn = {
  overlay: !0,
  round: !0,
  lockScroll: !0,
  closeable: !0,
  closeOnClickOverlay: !1,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, Ge = (e = !0) => {
  const t = me();
  return (n, o = {}) => {
    const a = E(e), s = Ce(t, ye(/* @__PURE__ */ q({
      setup() {
        const i = E(), u = () => {
          s.destroy();
        }, l = () => {
          s.emit(b.destory);
        }, p = () => {
          Promise.resolve().then(() => {
            s.componentRef = i;
          });
        };
        return () => m(Xe, ge({
          ref: i,
          show: a.value,
          onClickCloseIcon: u,
          onClosed: l,
          onVnodeMounted: p
        }, {
          ...wn,
          ...o.attrs
        }), {
          default: () => n,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: He || o.appendTo,
      visible: a
    });
    return s;
  };
}, zn = (e = !0) => {
  const t = Ge(e);
  return (r, n = {}) => (Fe(n, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(r, n));
}, Sn = (e = !0) => {
  const t = Ge(e);
  return (r, n = {}) => {
    const o = m("div", {
      class: "w-full h-full"
    }, [n.title && m("div", {
      class: "vant-popup-title"
    }, [m("div", {
      class: "vant-popup-title-text",
      innerHTML: n.title
    }, null)]), r]);
    return t(o, n);
  };
}, Un = (e = !0) => {
  const t = Sn(e);
  return (r, n = {}) => (Fe(n, {
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
  Ce as CommandDialogProvider,
  re as CommandDialogStackInjectKey,
  b as EVENT_NAME,
  Bn as createElementPlusDialog,
  Ge as createVantUiPopup,
  zn as createVantUiPopupOnBottom,
  Sn as createVantUiTitlePopup,
  Un as createVantUiTitlePopupOnBottom,
  Mn as getCommandDialogConsumer,
  Nn as setElementPlusDialogMountNode,
  Rn as setVantUiPopupMountNode
};
