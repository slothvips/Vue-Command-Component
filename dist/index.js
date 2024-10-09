var Ge = Object.defineProperty;
var Ke = (e, t, r) => t in e ? Ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => Ke(e, typeof t != "symbol" ? t + "" : t, r);
import { createVNode as m, render as k, inject as ve, defineComponent as q, provide as F, nextTick as Le, getCurrentInstance as me, ref as E, h as ye, mergeProps as ge, resolveComponent as ee } from "vue";
import { useGlobalComponentSettings as Ve, ElDialog as We } from "element-plus";
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
var b = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(b || {});
const be = Symbol("CommandDialogConsumerInjectKey"), re = Symbol("CommandDialogStackInjectKey"), I = new Ze(), _e = (e) => ({
  ...e.parent ? _e(e.parent) : {},
  ...e.provides
});
function Ce(e, t, r) {
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || document.body, o = document.createElement("div");
  o.className = "command-commponent-container", n.appendChild(o);
  const a = Ye(o);
  o.style.position = "relative", o.style.zIndex = String(a + 1);
  const s = () => {
    r.visible.value = !1;
  }, i = () => {
    r.visible.value = !0;
  }, u = () => {
    Le(() => {
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
  } = Je(), d = {
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
    on: (f, h, He = {}) => I.on(d, f, h, He),
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
const En = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return ve(be, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Dn = (e = !0) => {
  const t = me(), {
    locale: {
      t: r
    }
  } = Ve("message-box");
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
        return () => m(We, ge({
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
      appendTo: a.appendTo,
      visible: s
    });
    return Object.entries(a).filter(([u, l]) => u.startsWith("on") && typeof l == "function").forEach(([u, l]) => {
      const p = Xe(u);
      i.on(p, l);
    }), i;
  };
};
var Te = typeof global == "object" && global && global.Object === Object && global, Qe = typeof self == "object" && self && self.Object === Object && self, T = Te || Qe || Function("return this")(), D = T.Symbol, je = Object.prototype, ke = je.hasOwnProperty, et = je.toString, O = D ? D.toStringTag : void 0;
function tt(e) {
  var t = ke.call(e, O), r = e[O];
  try {
    e[O] = void 0;
    var n = !0;
  } catch {
  }
  var o = et.call(e);
  return n && (t ? e[O] = r : delete e[O]), o;
}
var rt = Object.prototype, nt = rt.toString;
function ot(e) {
  return nt.call(e);
}
var at = "[object Null]", it = "[object Undefined]", ne = D ? D.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? it : at : ne && ne in Object(e) ? tt(e) : ot(e);
}
function A(e) {
  return e != null && typeof e == "object";
}
var K = Array.isArray;
function C(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Pe(e) {
  return e;
}
var st = "[object AsyncFunction]", ut = "[object Function]", ct = "[object GeneratorFunction]", lt = "[object Proxy]";
function Z(e) {
  if (!C(e))
    return !1;
  var t = z(e);
  return t == ut || t == ct || t == st || t == lt;
}
var H = T["__core-js_shared__"], oe = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pt(e) {
  return !!oe && oe in e;
}
var ft = Function.prototype, dt = ft.toString;
function ht(e) {
  if (e != null) {
    try {
      return dt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vt = /[\\^$.*+?()[\]{}|]/g, mt = /^\[object .+?Constructor\]$/, yt = Function.prototype, gt = Object.prototype, bt = yt.toString, _t = gt.hasOwnProperty, Ct = RegExp(
  "^" + bt.call(_t).replace(vt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tt(e) {
  if (!C(e) || pt(e))
    return !1;
  var t = Z(e) ? Ct : mt;
  return t.test(ht(e));
}
function jt(e, t) {
  return e == null ? void 0 : e[t];
}
function X(e, t) {
  var r = jt(e, t);
  return Tt(r) ? r : void 0;
}
var ae = Object.create, Pt = /* @__PURE__ */ function() {
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
var wt = 800, St = 16, At = Date.now;
function $t(e) {
  var t = 0, r = 0;
  return function() {
    var n = At(), o = St - (n - r);
    if (r = n, o > 0) {
      if (++t >= wt)
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
    var e = X(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Et = M ? function(e, t) {
  return M(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: It(t),
    writable: !0
  });
} : Pe, Dt = $t(Et), Mt = 9007199254740991, zt = /^(?:0|[1-9]\d*)$/;
function xe(e, t) {
  var r = typeof e;
  return t = t ?? Mt, !!t && (r == "number" || r != "symbol" && zt.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
var Bt = Object.prototype, Rt = Bt.hasOwnProperty;
function Nt(e, t, r) {
  var n = e[t];
  (!(Rt.call(e, t) && B(n, r)) || r === void 0 && !(t in e)) && J(e, t, r);
}
function Ut(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], u = void 0;
    u === void 0 && (u = e[i]), o ? J(r, i, u) : Nt(r, i, u);
  }
  return r;
}
var ie = Math.max;
function Ft(e, t, r) {
  return t = ie(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = ie(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), xt(e, this, i);
  };
}
function Ht(e, t) {
  return Dt(Ft(e, t, Pe), e + "");
}
var Gt = 9007199254740991;
function Oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Gt;
}
function Y(e) {
  return e != null && Oe(e.length) && !Z(e);
}
function Kt(e, t, r) {
  if (!C(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Y(r) && xe(t, r.length) : n == "string" && t in r) ? B(r[t], e) : !1;
}
function Lt(e) {
  return Ht(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Kt(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Vt = Object.prototype;
function we(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Vt;
  return e === r;
}
function Wt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var qt = "[object Arguments]";
function se(e) {
  return A(e) && z(e) == qt;
}
var Se = Object.prototype, Zt = Se.hasOwnProperty, Xt = Se.propertyIsEnumerable, L = se(/* @__PURE__ */ function() {
  return arguments;
}()) ? se : function(e) {
  return A(e) && Zt.call(e, "callee") && !Xt.call(e, "callee");
};
function Jt() {
  return !1;
}
var Ae = typeof exports == "object" && exports && !exports.nodeType && exports, ue = Ae && typeof module == "object" && module && !module.nodeType && module, Yt = ue && ue.exports === Ae, ce = Yt ? T.Buffer : void 0, Qt = ce ? ce.isBuffer : void 0, $e = Qt || Jt, kt = "[object Arguments]", er = "[object Array]", tr = "[object Boolean]", rr = "[object Date]", nr = "[object Error]", or = "[object Function]", ar = "[object Map]", ir = "[object Number]", sr = "[object Object]", ur = "[object RegExp]", cr = "[object Set]", lr = "[object String]", pr = "[object WeakMap]", fr = "[object ArrayBuffer]", dr = "[object DataView]", hr = "[object Float32Array]", vr = "[object Float64Array]", mr = "[object Int8Array]", yr = "[object Int16Array]", gr = "[object Int32Array]", br = "[object Uint8Array]", _r = "[object Uint8ClampedArray]", Cr = "[object Uint16Array]", Tr = "[object Uint32Array]", c = {};
c[hr] = c[vr] = c[mr] = c[yr] = c[gr] = c[br] = c[_r] = c[Cr] = c[Tr] = !0;
c[kt] = c[er] = c[fr] = c[tr] = c[dr] = c[rr] = c[nr] = c[or] = c[ar] = c[ir] = c[sr] = c[ur] = c[cr] = c[lr] = c[pr] = !1;
function jr(e) {
  return A(e) && Oe(e.length) && !!c[z(e)];
}
function Pr(e) {
  return function(t) {
    return e(t);
  };
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, w = Ie && typeof module == "object" && module && !module.nodeType && module, xr = w && w.exports === Ie, G = xr && Te.process, le = function() {
  try {
    var e = w && w.require && w.require("util").types;
    return e || G && G.binding && G.binding("util");
  } catch {
  }
}(), pe = le && le.isTypedArray, Ee = pe ? Pr(pe) : jr;
function Or(e, t) {
  var r = K(e), n = !r && L(e), o = !r && !n && $e(e), a = !r && !n && !o && Ee(e), s = r || n || o || a, i = s ? Wt(e.length, String) : [], u = i.length;
  for (var l in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    xe(l, u)) || i.push(l);
  return i;
}
function wr(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function Sr(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Ar = Object.prototype, $r = Ar.hasOwnProperty;
function Ir(e) {
  if (!C(e))
    return Sr(e);
  var t = we(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !$r.call(e, n)) || r.push(n);
  return r;
}
function De(e) {
  return Y(e) ? Or(e) : Ir(e);
}
var S = X(Object, "create");
function Er() {
  this.__data__ = S ? S(null) : {}, this.size = 0;
}
function Dr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mr = "__lodash_hash_undefined__", zr = Object.prototype, Br = zr.hasOwnProperty;
function Rr(e) {
  var t = this.__data__;
  if (S) {
    var r = t[e];
    return r === Mr ? void 0 : r;
  }
  return Br.call(t, e) ? t[e] : void 0;
}
var Nr = Object.prototype, Ur = Nr.hasOwnProperty;
function Fr(e) {
  var t = this.__data__;
  return S ? t[e] !== void 0 : Ur.call(t, e);
}
var Hr = "__lodash_hash_undefined__";
function Gr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = S && t === void 0 ? Hr : t, this;
}
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = Er;
_.prototype.delete = Dr;
_.prototype.get = Rr;
_.prototype.has = Fr;
_.prototype.set = Gr;
function Kr() {
  this.__data__ = [], this.size = 0;
}
function R(e, t) {
  for (var r = e.length; r--; )
    if (B(e[r][0], t))
      return r;
  return -1;
}
var Lr = Array.prototype, Vr = Lr.splice;
function Wr(e) {
  var t = this.__data__, r = R(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Vr.call(t, r, 1), --this.size, !0;
}
function qr(e) {
  var t = this.__data__, r = R(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Zr(e) {
  return R(this.__data__, e) > -1;
}
function Xr(e, t) {
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
y.prototype.clear = Kr;
y.prototype.delete = Wr;
y.prototype.get = qr;
y.prototype.has = Zr;
y.prototype.set = Xr;
var Me = X(T, "Map");
function Jr() {
  this.size = 0, this.__data__ = {
    hash: new _(),
    map: new (Me || y)(),
    string: new _()
  };
}
function Yr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function N(e, t) {
  var r = e.__data__;
  return Yr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Qr(e) {
  var t = N(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function kr(e) {
  return N(this, e).get(e);
}
function en(e) {
  return N(this, e).has(e);
}
function tn(e, t) {
  var r = N(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function j(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
j.prototype.clear = Jr;
j.prototype.delete = Qr;
j.prototype.get = kr;
j.prototype.has = en;
j.prototype.set = tn;
var ze = wr(Object.getPrototypeOf, Object), rn = "[object Object]", nn = Function.prototype, on = Object.prototype, Be = nn.toString, an = on.hasOwnProperty, sn = Be.call(Object);
function un(e) {
  if (!A(e) || z(e) != rn)
    return !1;
  var t = ze(e);
  if (t === null)
    return !0;
  var r = an.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Be.call(r) == sn;
}
function cn() {
  this.__data__ = new y(), this.size = 0;
}
function ln(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function pn(e) {
  return this.__data__.get(e);
}
function fn(e) {
  return this.__data__.has(e);
}
var dn = 200;
function hn(e, t) {
  var r = this.__data__;
  if (r instanceof y) {
    var n = r.__data__;
    if (!Me || n.length < dn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new j(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function P(e) {
  var t = this.__data__ = new y(e);
  this.size = t.size;
}
P.prototype.clear = cn;
P.prototype.delete = ln;
P.prototype.get = pn;
P.prototype.has = fn;
P.prototype.set = hn;
var Re = typeof exports == "object" && exports && !exports.nodeType && exports, fe = Re && typeof module == "object" && module && !module.nodeType && module, vn = fe && fe.exports === Re, de = vn ? T.Buffer : void 0;
de && de.allocUnsafe;
function mn(e, t) {
  return e.slice();
}
var he = T.Uint8Array;
function yn(e) {
  var t = new e.constructor(e.byteLength);
  return new he(t).set(new he(e)), t;
}
function gn(e, t) {
  var r = yn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function bn(e) {
  return typeof e.constructor == "function" && !we(e) ? Pt(ze(e)) : {};
}
function _n(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var u = s[++o];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Cn = _n();
function V(e, t, r) {
  (r !== void 0 && !B(e[t], r) || r === void 0 && !(t in e)) && J(e, t, r);
}
function Tn(e) {
  return A(e) && Y(e);
}
function W(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function jn(e) {
  return Ut(e, De(e));
}
function Pn(e, t, r, n, o, a, s) {
  var i = W(e, r), u = W(t, r), l = s.get(u);
  if (l) {
    V(e, r, l);
    return;
  }
  var p = a ? a(i, u, r + "", e, t, s) : void 0, v = p === void 0;
  if (v) {
    var g = K(u), $ = !g && $e(u), U = !g && !$ && Ee(u);
    p = u, g || $ || U ? K(i) ? p = i : Tn(i) ? p = Ot(i) : $ ? (v = !1, p = mn(u)) : U ? (v = !1, p = gn(u)) : p = [] : un(u) || L(u) ? (p = i, L(i) ? p = jn(i) : (!C(i) || Z(i)) && (p = bn(u))) : v = !1;
  }
  v && (s.set(u, p), o(p, u, n, a, s), s.delete(u)), V(e, r, p);
}
function Ne(e, t, r, n, o) {
  e !== t && Cn(t, function(a, s) {
    if (o || (o = new P()), C(a))
      Pn(e, t, s, r, Ne, n, o);
    else {
      var i = n ? n(W(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), V(e, s, i);
    }
  }, De);
}
var Ue = Lt(function(e, t, r) {
  Ne(e, t, r);
});
const xn = {
  overlay: !0,
  round: !0,
  lockScroll: !0,
  closeable: !0,
  closeOnClickOverlay: !1,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, Fe = (e = !0) => {
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
        return () => m(qe, ge({
          ref: i,
          show: a.value,
          onClickCloseIcon: u,
          onClosed: l,
          onVnodeMounted: p
        }, {
          ...xn,
          ...o.attrs
        }), {
          default: () => n,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: o.appendTo,
      visible: a
    });
    return s;
  };
}, Mn = (e = !0) => {
  const t = Fe(e);
  return (r, n = {}) => (Ue(n, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(r, n));
}, On = (e = !0) => {
  const t = Fe(e);
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
}, zn = (e = !0) => {
  const t = On(e);
  return (r, n = {}) => (Ue(n, {
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
  Dn as createElementPlusDialog,
  Fe as createVantUiPopup,
  Mn as createVantUiPopupOnBottom,
  On as createVantUiTitlePopup,
  zn as createVantUiTitlePopupOnBottom,
  En as getCommandDialogConsumer
};
