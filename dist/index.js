var Ke = Object.defineProperty;
var Le = (e, t, r) => t in e ? Ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => Le(e, typeof t != "symbol" ? t + "" : t, r);
import { createVNode as b, render as ne, inject as be, defineComponent as N, provide as G, nextTick as Ve, getCurrentInstance as Z, ref as T, h as X, mergeProps as J } from "vue";
import { useGlobalComponentSettings as We, ElDialog as qe, ElButton as oe, ElDrawer as Ze } from "element-plus";
import { Popup as Xe } from "vant";
class Je {
  constructor() {
    re(this, "map", /* @__PURE__ */ new WeakMap());
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
const Ye = (e = "") => e.slice(2).toLowerCase(), ae = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Qe = () => {
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
var v = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(v || {});
const _e = Symbol("CommandDialogConsumerInjectKey"), se = Symbol("CommandDialogStackInjectKey"), E = new Je(), Ce = (e) => ({
  ...e.parent ? Ce(e.parent) : {},
  ...e.provides
});
function Y(e, t, r) {
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || document.body, o = document.createElement("div");
  o.className = "command-commponent-container", n.appendChild(o);
  const a = ke(o);
  o.style.position = "relative", o.style.zIndex = String(Math.max(a + 1, 9999));
  const i = () => {
    r.visible.value = !1;
  }, s = () => {
    r.visible.value = !0;
  }, u = () => {
    Ve(() => {
      ne(null, o), o.remove();
    });
  }, c = (f = !1) => {
    f ? (h.on(v.destory, u, {
      once: !0,
      callAfterDelay: 3e3
    }), i()) : h.stack.splice(h.stackIndex).forEach((m) => m.destroy(!0));
  }, {
    promise: p,
    resolve: d,
    reject: g
  } = Qe(), h = {
    promise: p,
    resolve: d,
    reject: g,
    destroyWithResolve: (f) => {
      d(f), c();
    },
    destroyWithReject: (f) => {
      g(f), c();
    },
    hide: i,
    show: s,
    destroy: c,
    container: o,
    visible: r.visible,
    on: (f, m, He = {}) => E.on(h, f, m, He),
    once: (f, m) => E.once(h, f, m),
    emit: (f, ...m) => E.emit(h, f, ...m),
    off: (f, m) => E.off(h, f, m),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, x = b(/* @__PURE__ */ N({
    setup() {
      for (const m in r.provideProps)
        G(m, r.provideProps[m]);
      G(_e, h);
      const f = be(se, []);
      return h.stackIndex = f.length, f.push(h), G(se, f), h.stack = f, () => t;
    }
  }), null, null);
  return x.appContext = (e == null ? void 0 : e.appContext) || x.appContext, x.appContext.provides = {
    ...x.appContext.provides,
    ...Ce(e)
  }, ne(x, o), h;
}
const et = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return be(_e, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Rn = (...e) => (console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."), et(...e));
let Te;
const Bn = (e) => {
  Te = e;
}, zn = (e = !0) => {
  const t = Z(), {
    locale: {
      t: r
    }
  } = We("message-box");
  return (o, a = {}) => {
    const i = T(e), s = Y(t, X(/* @__PURE__ */ N({
      setup() {
        const u = T(), c = (g) => {
          g(), s.destroy();
        }, p = () => {
          s.emit(v.destory);
        }, d = () => {
          Promise.resolve().then(() => {
            s.componentRef = u;
          });
        };
        return () => b(qe, J({
          ref: u,
          modelValue: i.value,
          beforeClose: c,
          onClosed: p,
          onVnodeMounted: d
        }, {
          title: a.title,
          width: a.width,
          ...a.attrs
        }), {
          default: () => o,
          footer: () => b("div", null, [a[ae(v.cancel)] && b(oe, {
            onClick: () => s.emit(v.cancel)
          }, {
            default: () => [a.cancelBtnText || r("el.messagebox.cancel")]
          }), a[ae(v.confirm)] && b(oe, {
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
      appendTo: Te || a.appendTo,
      visible: i
    });
    return Object.entries(a).filter(([u, c]) => u.startsWith("on") && typeof c == "function").forEach(([u, c]) => {
      const p = Ye(u);
      s.on(p, c);
    }), s;
  };
};
let we;
const Fn = (e) => {
  we = e;
}, Un = (e = !0) => {
  const t = Z();
  return (n, o = {}) => {
    const a = T(e), i = Y(t, X(/* @__PURE__ */ N({
      setup() {
        const s = T(), u = (d) => {
          d(), i.destroy();
        }, c = () => {
          i.emit(v.destory);
        }, p = () => {
          Promise.resolve().then(() => {
            i.componentRef = s;
          });
        };
        return () => b(Ze, J({
          ref: s,
          modelValue: a.value,
          beforeClose: u,
          onClosed: c,
          onVnodeMounted: p
        }, {
          title: o.title,
          width: o.width,
          ...o.attrs
        }), {
          default: () => n,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: we || o.appendTo,
      visible: a
    });
    return i;
  };
};
var Pe = typeof global == "object" && global && global.Object === Object && global, tt = typeof self == "object" && self && self.Object === Object && self, w = Pe || tt || Function("return this")(), D = w.Symbol, je = Object.prototype, rt = je.hasOwnProperty, nt = je.toString, O = D ? D.toStringTag : void 0;
function ot(e) {
  var t = rt.call(e, O), r = e[O];
  try {
    e[O] = void 0;
    var n = !0;
  } catch {
  }
  var o = nt.call(e);
  return n && (t ? e[O] = r : delete e[O]), o;
}
var at = Object.prototype, st = at.toString;
function it(e) {
  return st.call(e);
}
var ut = "[object Null]", ct = "[object Undefined]", ie = D ? D.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? ct : ut : ie && ie in Object(e) ? ot(e) : it(e);
}
function $(e) {
  return e != null && typeof e == "object";
}
var L = Array.isArray;
function C(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function xe(e) {
  return e;
}
var lt = "[object AsyncFunction]", pt = "[object Function]", ft = "[object GeneratorFunction]", dt = "[object Proxy]";
function Q(e) {
  if (!C(e))
    return !1;
  var t = R(e);
  return t == pt || t == ft || t == lt || t == dt;
}
var H = w["__core-js_shared__"], ue = function() {
  var e = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ht(e) {
  return !!ue && ue in e;
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
var gt = /[\\^$.*+?()[\]{}|]/g, bt = /^\[object .+?Constructor\]$/, _t = Function.prototype, Ct = Object.prototype, Tt = _t.toString, wt = Ct.hasOwnProperty, Pt = RegExp(
  "^" + Tt.call(wt).replace(gt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jt(e) {
  if (!C(e) || ht(e))
    return !1;
  var t = Q(e) ? Pt : bt;
  return t.test(yt(e));
}
function xt(e, t) {
  return e == null ? void 0 : e[t];
}
function k(e, t) {
  var r = xt(e, t);
  return jt(r) ? r : void 0;
}
var ce = Object.create, Ot = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!C(t))
      return {};
    if (ce)
      return ce(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function St(e, t, r) {
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
function At(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var $t = 800, It = 16, Et = Date.now;
function Dt(e) {
  var t = 0, r = 0;
  return function() {
    var n = Et(), o = It - (n - r);
    if (r = n, o > 0) {
      if (++t >= $t)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Mt(e) {
  return function() {
    return e;
  };
}
var M = function() {
  try {
    var e = k(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Nt = M ? function(e, t) {
  return M(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Mt(t),
    writable: !0
  });
} : xe, Rt = Dt(Nt), Bt = 9007199254740991, zt = /^(?:0|[1-9]\d*)$/;
function Oe(e, t) {
  var r = typeof e;
  return t = t ?? Bt, !!t && (r == "number" || r != "symbol" && zt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ee(e, t, r) {
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
var Ft = Object.prototype, Ut = Ft.hasOwnProperty;
function Gt(e, t, r) {
  var n = e[t];
  (!(Ut.call(e, t) && B(n, r)) || r === void 0 && !(t in e)) && ee(e, t, r);
}
function Ht(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], u = void 0;
    u === void 0 && (u = e[s]), o ? ee(r, s, u) : Gt(r, s, u);
  }
  return r;
}
var le = Math.max;
function Kt(e, t, r) {
  return t = le(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = le(n.length - t, 0), i = Array(a); ++o < a; )
      i[o] = n[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = n[o];
    return s[t] = r(i), St(e, this, s);
  };
}
function Lt(e, t) {
  return Rt(Kt(e, t, xe), e + "");
}
var Vt = 9007199254740991;
function Se(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vt;
}
function te(e) {
  return e != null && Se(e.length) && !Q(e);
}
function Wt(e, t, r) {
  if (!C(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? te(r) && Oe(t, r.length) : n == "string" && t in r) ? B(r[t], e) : !1;
}
function qt(e) {
  return Lt(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, i = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && Wt(r[0], r[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var s = r[n];
      s && e(t, s, n, a);
    }
    return t;
  });
}
var Zt = Object.prototype;
function Ae(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Zt;
  return e === r;
}
function Xt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Jt = "[object Arguments]";
function pe(e) {
  return $(e) && R(e) == Jt;
}
var $e = Object.prototype, Yt = $e.hasOwnProperty, Qt = $e.propertyIsEnumerable, V = pe(/* @__PURE__ */ function() {
  return arguments;
}()) ? pe : function(e) {
  return $(e) && Yt.call(e, "callee") && !Qt.call(e, "callee");
};
function kt() {
  return !1;
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, fe = Ie && typeof module == "object" && module && !module.nodeType && module, er = fe && fe.exports === Ie, de = er ? w.Buffer : void 0, tr = de ? de.isBuffer : void 0, Ee = tr || kt, rr = "[object Arguments]", nr = "[object Array]", or = "[object Boolean]", ar = "[object Date]", sr = "[object Error]", ir = "[object Function]", ur = "[object Map]", cr = "[object Number]", lr = "[object Object]", pr = "[object RegExp]", fr = "[object Set]", dr = "[object String]", hr = "[object WeakMap]", mr = "[object ArrayBuffer]", vr = "[object DataView]", yr = "[object Float32Array]", gr = "[object Float64Array]", br = "[object Int8Array]", _r = "[object Int16Array]", Cr = "[object Int32Array]", Tr = "[object Uint8Array]", wr = "[object Uint8ClampedArray]", Pr = "[object Uint16Array]", jr = "[object Uint32Array]", l = {};
l[yr] = l[gr] = l[br] = l[_r] = l[Cr] = l[Tr] = l[wr] = l[Pr] = l[jr] = !0;
l[rr] = l[nr] = l[mr] = l[or] = l[vr] = l[ar] = l[sr] = l[ir] = l[ur] = l[cr] = l[lr] = l[pr] = l[fr] = l[dr] = l[hr] = !1;
function xr(e) {
  return $(e) && Se(e.length) && !!l[R(e)];
}
function Or(e) {
  return function(t) {
    return e(t);
  };
}
var De = typeof exports == "object" && exports && !exports.nodeType && exports, S = De && typeof module == "object" && module && !module.nodeType && module, Sr = S && S.exports === De, K = Sr && Pe.process, he = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || K && K.binding && K.binding("util");
  } catch {
  }
}(), me = he && he.isTypedArray, Me = me ? Or(me) : xr;
function Ar(e, t) {
  var r = L(e), n = !r && V(e), o = !r && !n && Ee(e), a = !r && !n && !o && Me(e), i = r || n || o || a, s = i ? Xt(e.length, String) : [], u = s.length;
  for (var c in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Oe(c, u)) || s.push(c);
  return s;
}
function $r(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function Ir(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Er = Object.prototype, Dr = Er.hasOwnProperty;
function Mr(e) {
  if (!C(e))
    return Ir(e);
  var t = Ae(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Dr.call(e, n)) || r.push(n);
  return r;
}
function Ne(e) {
  return te(e) ? Ar(e) : Mr(e);
}
var A = k(Object, "create");
function Nr() {
  this.__data__ = A ? A(null) : {}, this.size = 0;
}
function Rr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Br = "__lodash_hash_undefined__", zr = Object.prototype, Fr = zr.hasOwnProperty;
function Ur(e) {
  var t = this.__data__;
  if (A) {
    var r = t[e];
    return r === Br ? void 0 : r;
  }
  return Fr.call(t, e) ? t[e] : void 0;
}
var Gr = Object.prototype, Hr = Gr.hasOwnProperty;
function Kr(e) {
  var t = this.__data__;
  return A ? t[e] !== void 0 : Hr.call(t, e);
}
var Lr = "__lodash_hash_undefined__";
function Vr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = A && t === void 0 ? Lr : t, this;
}
function _(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = Nr;
_.prototype.delete = Rr;
_.prototype.get = Ur;
_.prototype.has = Kr;
_.prototype.set = Vr;
function Wr() {
  this.__data__ = [], this.size = 0;
}
function z(e, t) {
  for (var r = e.length; r--; )
    if (B(e[r][0], t))
      return r;
  return -1;
}
var qr = Array.prototype, Zr = qr.splice;
function Xr(e) {
  var t = this.__data__, r = z(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Zr.call(t, r, 1), --this.size, !0;
}
function Jr(e) {
  var t = this.__data__, r = z(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Yr(e) {
  return z(this.__data__, e) > -1;
}
function Qr(e, t) {
  var r = this.__data__, n = z(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function y(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
y.prototype.clear = Wr;
y.prototype.delete = Xr;
y.prototype.get = Jr;
y.prototype.has = Yr;
y.prototype.set = Qr;
var Re = k(w, "Map");
function kr() {
  this.size = 0, this.__data__ = {
    hash: new _(),
    map: new (Re || y)(),
    string: new _()
  };
}
function en(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function F(e, t) {
  var r = e.__data__;
  return en(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function tn(e) {
  var t = F(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rn(e) {
  return F(this, e).get(e);
}
function nn(e) {
  return F(this, e).has(e);
}
function on(e, t) {
  var r = F(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
P.prototype.clear = kr;
P.prototype.delete = tn;
P.prototype.get = rn;
P.prototype.has = nn;
P.prototype.set = on;
var Be = $r(Object.getPrototypeOf, Object), an = "[object Object]", sn = Function.prototype, un = Object.prototype, ze = sn.toString, cn = un.hasOwnProperty, ln = ze.call(Object);
function pn(e) {
  if (!$(e) || R(e) != an)
    return !1;
  var t = Be(e);
  if (t === null)
    return !0;
  var r = cn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ze.call(r) == ln;
}
function fn() {
  this.__data__ = new y(), this.size = 0;
}
function dn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function hn(e) {
  return this.__data__.get(e);
}
function mn(e) {
  return this.__data__.has(e);
}
var vn = 200;
function yn(e, t) {
  var r = this.__data__;
  if (r instanceof y) {
    var n = r.__data__;
    if (!Re || n.length < vn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new P(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function j(e) {
  var t = this.__data__ = new y(e);
  this.size = t.size;
}
j.prototype.clear = fn;
j.prototype.delete = dn;
j.prototype.get = hn;
j.prototype.has = mn;
j.prototype.set = yn;
var Fe = typeof exports == "object" && exports && !exports.nodeType && exports, ve = Fe && typeof module == "object" && module && !module.nodeType && module, gn = ve && ve.exports === Fe, ye = gn ? w.Buffer : void 0;
ye && ye.allocUnsafe;
function bn(e, t) {
  return e.slice();
}
var ge = w.Uint8Array;
function _n(e) {
  var t = new e.constructor(e.byteLength);
  return new ge(t).set(new ge(e)), t;
}
function Cn(e, t) {
  var r = _n(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function Tn(e) {
  return typeof e.constructor == "function" && !Ae(e) ? Ot(Be(e)) : {};
}
function wn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), i = n(t), s = i.length; s--; ) {
      var u = i[++o];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Pn = wn();
function W(e, t, r) {
  (r !== void 0 && !B(e[t], r) || r === void 0 && !(t in e)) && ee(e, t, r);
}
function jn(e) {
  return $(e) && te(e);
}
function q(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function xn(e) {
  return Ht(e, Ne(e));
}
function On(e, t, r, n, o, a, i) {
  var s = q(e, r), u = q(t, r), c = i.get(u);
  if (c) {
    W(e, r, c);
    return;
  }
  var p = a ? a(s, u, r + "", e, t, i) : void 0, d = p === void 0;
  if (d) {
    var g = L(u), I = !g && Ee(u), U = !g && !I && Me(u);
    p = u, g || I || U ? L(s) ? p = s : jn(s) ? p = At(s) : I ? (d = !1, p = bn(u)) : U ? (d = !1, p = Cn(u)) : p = [] : pn(u) || V(u) ? (p = s, V(s) ? p = xn(s) : (!C(s) || Q(s)) && (p = Tn(u))) : d = !1;
  }
  d && (i.set(u, p), o(p, u, n, a, i), i.delete(u)), W(e, r, p);
}
function Ue(e, t, r, n, o) {
  e !== t && Pn(t, function(a, i) {
    if (o || (o = new j()), C(a))
      On(e, t, i, r, Ue, n, o);
    else {
      var s = n ? n(q(e, i), a, i + "", e, t, o) : void 0;
      s === void 0 && (s = a), W(e, i, s);
    }
  }, Ne);
}
var Sn = qt(function(e, t, r) {
  Ue(e, t, r);
});
let Ge;
const Gn = (e) => {
  Ge = e;
}, An = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, $n = (e = !0) => {
  const t = Z();
  return (n, o = {}) => {
    const a = T(e), i = Y(t, X(/* @__PURE__ */ N({
      setup() {
        const s = T(), u = () => {
          i.destroy();
        }, c = () => {
          i.emit(v.destory);
        }, p = () => {
          Promise.resolve().then(() => {
            i.componentRef = s;
          });
        };
        return () => b(Xe, J({
          ref: s,
          show: a.value,
          onClickCloseIcon: u,
          onClosed: c,
          onVnodeMounted: p
        }, {
          ...An,
          ...o.attrs
        }), {
          default: () => n,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: Ge || o.appendTo,
      visible: a
    });
    return i;
  };
}, Hn = (e = !0) => {
  const t = $n(e);
  return (r, n = {}) => (Sn(n, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(r, n));
};
export {
  _e as CommandDialogConsumerInjectKey,
  se as CommandDialogStackInjectKey,
  Y as CommandProvider,
  Je as ConsumerEventBus,
  v as EVENT_NAME,
  Qe as PromiseWithResolvers,
  ae as busName2EventName,
  zn as createElementPlusDialog,
  Un as createElementPlusDrawer,
  $n as createVantUiPopup,
  Hn as createVantUiPopupOnBottom,
  Ye as eventName2BusName,
  Rn as getCommandDialogConsumer,
  et as getConsumer,
  ke as getMaxZIndex,
  Bn as setElementPlusDialogMountNode,
  Fn as setElementPlusDrawerMountNode,
  Gn as setVantUiPopupMountNode
};
