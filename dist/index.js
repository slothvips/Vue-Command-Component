var Le = Object.defineProperty;
var Ve = (e, t, n) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => Ve(e, typeof t != "symbol" ? t + "" : t, n);
import { createVNode as g, render as oe, inject as ge, defineComponent as N, provide as U, nextTick as We, getCurrentInstance as Z, ref as w, h as X, mergeProps as J, watch as qe } from "vue";
import { useGlobalComponentSettings as Ze, ElDialog as Xe, ElButton as ae, ElDrawer as Je } from "element-plus";
import { Popup as Ye } from "vant";
import { useRoute as Qe } from "vue-router";
var b = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(b || {});
class ke {
  constructor() {
    re(this, "map", /* @__PURE__ */ new WeakMap());
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
    let i = r;
    o.once && (i = (...s) => {
      r(...s), this.off(t, n, i);
    }), a.add(i), o.callAfterDelay !== void 0 && setTimeout(() => {
      i();
    }, o.callAfterDelay || 0);
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
const et = (e = "") => e.slice(2).toLowerCase(), se = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, tt = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Ur = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), n;
}, Y = (e) => e == null, Ce = Symbol("CommandComponentConsumerInjectKey"), ie = Symbol("CommandComponentStackInjectKey"), I = new ke(), K = /* @__PURE__ */ new Set(), nt = () => {
  console.log("destroyAllCommandComponentConsumer"), K.forEach((e) => {
    e.destroy();
  });
}, Te = (e) => ({
  ...e.parent ? Te(e.parent) : {},
  ...e.provides
});
function Q(e, t, n) {
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-commponent-container", r.appendChild(o);
  const a = () => {
    n.visible.value = !1;
  }, i = () => {
    n.visible.value = !0;
  }, s = () => {
    We(() => {
      oe(null, o), o.remove();
    });
  }, u = (f = !1) => {
    f ? (d.on(b.destory, s, {
      once: !0,
      callAfterDelay: 3e3
    }), a()) : (K.delete(d), d.stack.splice(d.stackIndex).forEach((h) => h.destroy(!0)));
  }, {
    promise: l,
    resolve: p,
    reject: m
  } = tt(), y = (f) => {
    p(f), u();
  }, v = (f) => {
    m(f), u();
  }, d = {
    meta: n.meta || {},
    promise: l,
    resolve: p,
    reject: m,
    destroyWithResolve: y,
    destroyWithReject: v,
    hide: a,
    show: i,
    destroy: u,
    container: o,
    visible: n.visible,
    on: (f, h, Ke = {}) => I.on(d, f, h, Ke),
    once: (f, h) => I.once(d, f, h),
    emit: (f, ...h) => I.emit(d, f, ...h),
    off: (f, h) => I.off(d, f, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, O = g(/* @__PURE__ */ N({
    setup() {
      for (const h in n.provideProps)
        U(h, n.provideProps[h]);
      U(Ce, d);
      const f = ge(ie, []);
      return d.stackIndex = f.length, f.push(d), U(ie, f), d.stack = f, () => t;
    }
  }), null, null);
  return O.appContext = (e == null ? void 0 : e.appContext) || O.appContext, O.appContext.provides = {
    ...O.appContext.provides,
    ...Te(e)
  }, oe(O, o), K.add(d), d;
}
const rt = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandComponentConsumerInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return ge(Ce, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Gr = (...e) => (console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."), rt(...e));
let we;
const Hr = (e) => {
  we = e;
}, Kr = (e = {}) => {
  const t = Z(), {
    locale: {
      t: n
    }
  } = Ze("message-box");
  return (o, a = {}) => {
    const i = w(Y(e.immediately) ? !0 : !!e.immediately), s = Q(t, X(/* @__PURE__ */ N({
      setup() {
        const u = w(), l = () => {
          Promise.resolve().then(() => {
            s.componentRef = u;
          });
        }, p = (y) => {
          y(), s.destroy();
        }, m = (...y) => {
          var v, d;
          return s.emit(b.destory), (d = (v = a.attrs) == null ? void 0 : v.onClosed) == null ? void 0 : d.call(v, ...y);
        };
        return () => g(Xe, J({
          ref: u,
          modelValue: i.value,
          beforeClose: p,
          onVnodeMounted: l
        }, {
          title: a.title,
          width: a.width,
          ...a.attrs
        }, {
          onClosed: m
        }), {
          default: () => o,
          footer: () => g("div", null, [a[se(b.cancel)] && g(ae, {
            onClick: () => s.emit(b.cancel)
          }, {
            default: () => [a.cancelBtnText || n("el.messagebox.cancel")]
          }), a[se(b.confirm)] && g(ae, {
            type: "primary",
            onClick: () => s.emit(b.confirm)
          }, {
            default: () => [a.confirmBtnText || n("el.messagebox.confirm")]
          })]),
          ...a.slots
        });
      }
    })), {
      provideProps: a.provideProps || {},
      appendTo: we || a.appendTo,
      visible: i,
      // 优先使用执行动作的meta,其次使用创建时的meta
      meta: {
        ...(e == null ? void 0 : e.meta) || {
          name: "command-element-plus-dialog"
        },
        ...(a == null ? void 0 : a.meta) || {}
      }
    });
    return Object.entries(a).filter(([u, l]) => u.startsWith("on") && typeof l == "function").forEach(([u, l]) => {
      const p = et(u);
      s.on(p, l);
    }), s;
  };
};
let Pe;
const Lr = (e) => {
  Pe = e;
}, Vr = (e = {}) => {
  const t = Z();
  return (r, o = {}) => {
    const a = w(Y(e.immediately) ? !0 : !!e.immediately), i = Q(t, X(/* @__PURE__ */ N({
      setup() {
        const s = (m) => {
          m(), i.destroy();
        }, u = () => {
          i.emit(b.destory);
        }, l = w(), p = () => {
          Promise.resolve().then(() => {
            i.componentRef = l;
          });
        };
        return () => g(Je, J({
          ref: l,
          modelValue: a.value,
          beforeClose: s,
          onClosed: u,
          onVnodeMounted: p
        }, {
          title: o.title,
          size: o.size,
          ...o.attrs
        }), {
          default: () => r,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: Pe || o.appendTo,
      visible: a,
      meta: {
        ...(e == null ? void 0 : e.meta) || {
          name: "command-element-plus-drawer"
        },
        ...(o == null ? void 0 : o.meta) || {}
      }
    });
    return i;
  };
};
var je = typeof global == "object" && global && global.Object === Object && global, ot = typeof self == "object" && self && self.Object === Object && self, P = je || ot || Function("return this")(), M = P.Symbol, xe = Object.prototype, at = xe.hasOwnProperty, st = xe.toString, A = M ? M.toStringTag : void 0;
function it(e) {
  var t = at.call(e, A), n = e[A];
  try {
    e[A] = void 0;
    var r = !0;
  } catch {
  }
  var o = st.call(e);
  return r && (t ? e[A] = n : delete e[A]), o;
}
var ut = Object.prototype, lt = ut.toString;
function ct(e) {
  return lt.call(e);
}
var pt = "[object Null]", dt = "[object Undefined]", ue = M ? M.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? dt : pt : ue && ue in Object(e) ? it(e) : ct(e);
}
function E(e) {
  return e != null && typeof e == "object";
}
var L = Array.isArray;
function T(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Oe(e) {
  return e;
}
var ft = "[object AsyncFunction]", mt = "[object Function]", ht = "[object GeneratorFunction]", vt = "[object Proxy]";
function k(e) {
  if (!T(e))
    return !1;
  var t = R(e);
  return t == mt || t == ht || t == ft || t == vt;
}
var G = P["__core-js_shared__"], le = function() {
  var e = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yt(e) {
  return !!le && le in e;
}
var bt = Function.prototype, _t = bt.toString;
function gt(e) {
  if (e != null) {
    try {
      return _t.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ct = /[\\^$.*+?()[\]{}|]/g, Tt = /^\[object .+?Constructor\]$/, wt = Function.prototype, Pt = Object.prototype, jt = wt.toString, xt = Pt.hasOwnProperty, Ot = RegExp(
  "^" + jt.call(xt).replace(Ct, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function At(e) {
  if (!T(e) || yt(e))
    return !1;
  var t = k(e) ? Ot : Tt;
  return t.test(gt(e));
}
function St(e, t) {
  return e == null ? void 0 : e[t];
}
function ee(e, t) {
  var n = St(e, t);
  return At(n) ? n : void 0;
}
var ce = Object.create, $t = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!T(t))
      return {};
    if (ce)
      return ce(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Et(e, t, n) {
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
function It(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Mt = 800, Dt = 16, Nt = Date.now;
function Rt(e) {
  var t = 0, n = 0;
  return function() {
    var r = Nt(), o = Dt - (r - n);
    if (n = r, o > 0) {
      if (++t >= Mt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function zt(e) {
  return function() {
    return e;
  };
}
var D = function() {
  try {
    var e = ee(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Bt = D ? function(e, t) {
  return D(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zt(t),
    writable: !0
  });
} : Oe, Ft = Rt(Bt), Ut = 9007199254740991, Gt = /^(?:0|[1-9]\d*)$/;
function Ae(e, t) {
  var n = typeof e;
  return t = t ?? Ut, !!t && (n == "number" || n != "symbol" && Gt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function te(e, t, n) {
  t == "__proto__" && D ? D(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function z(e, t) {
  return e === t || e !== e && t !== t;
}
var Ht = Object.prototype, Kt = Ht.hasOwnProperty;
function Lt(e, t, n) {
  var r = e[t];
  (!(Kt.call(e, t) && z(r, n)) || n === void 0 && !(t in e)) && te(e, t, n);
}
function Vt(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], u = void 0;
    u === void 0 && (u = e[s]), o ? te(n, s, u) : Lt(n, s, u);
  }
  return n;
}
var pe = Math.max;
function Wt(e, t, n) {
  return t = pe(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = pe(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), Et(e, this, s);
  };
}
function qt(e, t) {
  return Ft(Wt(e, t, Oe), e + "");
}
var Zt = 9007199254740991;
function Se(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Zt;
}
function ne(e) {
  return e != null && Se(e.length) && !k(e);
}
function Xt(e, t, n) {
  if (!T(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? ne(n) && Ae(t, n.length) : r == "string" && t in n) ? z(n[t], e) : !1;
}
function Jt(e) {
  return qt(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && Xt(n[0], n[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, a);
    }
    return t;
  });
}
var Yt = Object.prototype;
function $e(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Yt;
  return e === n;
}
function Qt(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var kt = "[object Arguments]";
function de(e) {
  return E(e) && R(e) == kt;
}
var Ee = Object.prototype, en = Ee.hasOwnProperty, tn = Ee.propertyIsEnumerable, V = de(/* @__PURE__ */ function() {
  return arguments;
}()) ? de : function(e) {
  return E(e) && en.call(e, "callee") && !tn.call(e, "callee");
};
function nn() {
  return !1;
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, fe = Ie && typeof module == "object" && module && !module.nodeType && module, rn = fe && fe.exports === Ie, me = rn ? P.Buffer : void 0, on = me ? me.isBuffer : void 0, Me = on || nn, an = "[object Arguments]", sn = "[object Array]", un = "[object Boolean]", ln = "[object Date]", cn = "[object Error]", pn = "[object Function]", dn = "[object Map]", fn = "[object Number]", mn = "[object Object]", hn = "[object RegExp]", vn = "[object Set]", yn = "[object String]", bn = "[object WeakMap]", _n = "[object ArrayBuffer]", gn = "[object DataView]", Cn = "[object Float32Array]", Tn = "[object Float64Array]", wn = "[object Int8Array]", Pn = "[object Int16Array]", jn = "[object Int32Array]", xn = "[object Uint8Array]", On = "[object Uint8ClampedArray]", An = "[object Uint16Array]", Sn = "[object Uint32Array]", c = {};
c[Cn] = c[Tn] = c[wn] = c[Pn] = c[jn] = c[xn] = c[On] = c[An] = c[Sn] = !0;
c[an] = c[sn] = c[_n] = c[un] = c[gn] = c[ln] = c[cn] = c[pn] = c[dn] = c[fn] = c[mn] = c[hn] = c[vn] = c[yn] = c[bn] = !1;
function $n(e) {
  return E(e) && Se(e.length) && !!c[R(e)];
}
function En(e) {
  return function(t) {
    return e(t);
  };
}
var De = typeof exports == "object" && exports && !exports.nodeType && exports, S = De && typeof module == "object" && module && !module.nodeType && module, In = S && S.exports === De, H = In && je.process, he = function() {
  try {
    var e = S && S.require && S.require("util").types;
    return e || H && H.binding && H.binding("util");
  } catch {
  }
}(), ve = he && he.isTypedArray, Ne = ve ? En(ve) : $n;
function Mn(e, t) {
  var n = L(e), r = !n && V(e), o = !n && !r && Me(e), a = !n && !r && !o && Ne(e), i = n || r || o || a, s = i ? Qt(e.length, String) : [], u = s.length;
  for (var l in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ae(l, u)) || s.push(l);
  return s;
}
function Dn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function Nn(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Rn = Object.prototype, zn = Rn.hasOwnProperty;
function Bn(e) {
  if (!T(e))
    return Nn(e);
  var t = $e(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !zn.call(e, r)) || n.push(r);
  return n;
}
function Re(e) {
  return ne(e) ? Mn(e) : Bn(e);
}
var $ = ee(Object, "create");
function Fn() {
  this.__data__ = $ ? $(null) : {}, this.size = 0;
}
function Un(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Gn = "__lodash_hash_undefined__", Hn = Object.prototype, Kn = Hn.hasOwnProperty;
function Ln(e) {
  var t = this.__data__;
  if ($) {
    var n = t[e];
    return n === Gn ? void 0 : n;
  }
  return Kn.call(t, e) ? t[e] : void 0;
}
var Vn = Object.prototype, Wn = Vn.hasOwnProperty;
function qn(e) {
  var t = this.__data__;
  return $ ? t[e] !== void 0 : Wn.call(t, e);
}
var Zn = "__lodash_hash_undefined__";
function Xn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $ && t === void 0 ? Zn : t, this;
}
function C(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
C.prototype.clear = Fn;
C.prototype.delete = Un;
C.prototype.get = Ln;
C.prototype.has = qn;
C.prototype.set = Xn;
function Jn() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var n = e.length; n--; )
    if (z(e[n][0], t))
      return n;
  return -1;
}
var Yn = Array.prototype, Qn = Yn.splice;
function kn(e) {
  var t = this.__data__, n = B(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Qn.call(t, n, 1), --this.size, !0;
}
function er(e) {
  var t = this.__data__, n = B(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function tr(e) {
  return B(this.__data__, e) > -1;
}
function nr(e, t) {
  var n = this.__data__, r = B(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function _(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_.prototype.clear = Jn;
_.prototype.delete = kn;
_.prototype.get = er;
_.prototype.has = tr;
_.prototype.set = nr;
var ze = ee(P, "Map");
function rr() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (ze || _)(),
    string: new C()
  };
}
function or(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function F(e, t) {
  var n = e.__data__;
  return or(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ar(e) {
  var t = F(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sr(e) {
  return F(this, e).get(e);
}
function ir(e) {
  return F(this, e).has(e);
}
function ur(e, t) {
  var n = F(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function j(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
j.prototype.clear = rr;
j.prototype.delete = ar;
j.prototype.get = sr;
j.prototype.has = ir;
j.prototype.set = ur;
var Be = Dn(Object.getPrototypeOf, Object), lr = "[object Object]", cr = Function.prototype, pr = Object.prototype, Fe = cr.toString, dr = pr.hasOwnProperty, fr = Fe.call(Object);
function mr(e) {
  if (!E(e) || R(e) != lr)
    return !1;
  var t = Be(e);
  if (t === null)
    return !0;
  var n = dr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Fe.call(n) == fr;
}
function hr() {
  this.__data__ = new _(), this.size = 0;
}
function vr(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function yr(e) {
  return this.__data__.get(e);
}
function br(e) {
  return this.__data__.has(e);
}
var _r = 200;
function gr(e, t) {
  var n = this.__data__;
  if (n instanceof _) {
    var r = n.__data__;
    if (!ze || r.length < _r - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new j(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function x(e) {
  var t = this.__data__ = new _(e);
  this.size = t.size;
}
x.prototype.clear = hr;
x.prototype.delete = vr;
x.prototype.get = yr;
x.prototype.has = br;
x.prototype.set = gr;
var Ue = typeof exports == "object" && exports && !exports.nodeType && exports, ye = Ue && typeof module == "object" && module && !module.nodeType && module, Cr = ye && ye.exports === Ue, be = Cr ? P.Buffer : void 0;
be && be.allocUnsafe;
function Tr(e, t) {
  return e.slice();
}
var _e = P.Uint8Array;
function wr(e) {
  var t = new e.constructor(e.byteLength);
  return new _e(t).set(new _e(e)), t;
}
function Pr(e, t) {
  var n = wr(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function jr(e) {
  return typeof e.constructor == "function" && !$e(e) ? $t(Be(e)) : {};
}
function xr(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var u = i[++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Or = xr();
function W(e, t, n) {
  (n !== void 0 && !z(e[t], n) || n === void 0 && !(t in e)) && te(e, t, n);
}
function Ar(e) {
  return E(e) && ne(e);
}
function q(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Sr(e) {
  return Vt(e, Re(e));
}
function $r(e, t, n, r, o, a, i) {
  var s = q(e, n), u = q(t, n), l = i.get(u);
  if (l) {
    W(e, n, l);
    return;
  }
  var p = a ? a(s, u, n + "", e, t, i) : void 0, m = p === void 0;
  if (m) {
    var y = L(u), v = !y && Me(u), d = !y && !v && Ne(u);
    p = u, y || v || d ? L(s) ? p = s : Ar(s) ? p = It(s) : v ? (m = !1, p = Tr(u)) : d ? (m = !1, p = Pr(u)) : p = [] : mr(u) || V(u) ? (p = s, V(s) ? p = Sr(s) : (!T(s) || k(s)) && (p = jr(u))) : m = !1;
  }
  m && (i.set(u, p), o(p, u, r, a, i), i.delete(u)), W(e, n, p);
}
function Ge(e, t, n, r, o) {
  e !== t && Or(t, function(a, i) {
    if (o || (o = new x()), T(a))
      $r(e, t, i, n, Ge, r, o);
    else {
      var s = r ? r(q(e, i), a, i + "", e, t, o) : void 0;
      s === void 0 && (s = a), W(e, i, s);
    }
  }, Re);
}
var Er = Jt(function(e, t, n) {
  Ge(e, t, n);
});
let He;
const Wr = (e) => {
  He = e;
}, Ir = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, Mr = (e = {}) => {
  const t = Z();
  return (r, o = {}) => {
    const a = w(Y(e.immediately) ? !0 : !!e.immediately), i = Q(t, X(/* @__PURE__ */ N({
      setup() {
        const s = () => {
          i.destroy();
        }, u = () => {
          i.emit(b.destory);
        }, l = w(), p = () => {
          Promise.resolve().then(() => {
            i.componentRef = l;
          });
        };
        return () => g(Ye, J({
          ref: l,
          show: a.value,
          onClickCloseIcon: s,
          onClosed: u,
          onVnodeMounted: p
        }, {
          ...Ir,
          ...o.attrs
        }), {
          default: () => r,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: He || o.appendTo,
      visible: a,
      meta: {
        ...(e == null ? void 0 : e.meta) || {
          name: "command-vant-ui-popup"
        },
        ...(o == null ? void 0 : o.meta) || {}
      }
    });
    return i;
  };
}, qr = (e = {}) => {
  const t = Mr(e);
  return (n, r = {}) => (Er(r, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(n, r));
}, Zr = () => {
  const e = Qe();
  qe(
    () => e.path,
    () => {
      console.log("路由变化,关闭所有存在的弹窗"), nt();
    }
  );
};
export {
  Ce as CommandComponentConsumerInjectKey,
  ie as CommandComponentStackInjectKey,
  Q as CommandProvider,
  ke as ConsumerEventBus,
  b as EVENT_NAME,
  tt as PromiseWithResolvers,
  K as activeCommandComponentConsumers,
  se as busName2EventName,
  Kr as createElementPlusDialog,
  Vr as createElementPlusDrawer,
  Mr as createVantUiPopup,
  qr as createVantUiPopupOnBottom,
  nt as destroyAllCommandComponentConsumer,
  et as eventName2BusName,
  Gr as getCommandDialogConsumer,
  rt as getConsumer,
  Ur as getMaxZIndex,
  Y as isNull,
  Hr as setElementPlusDialogMountNode,
  Lr as setElementPlusDrawerMountNode,
  Wr as setVantUiPopupMountNode,
  Zr as useAfterRouteChangeCloseAllCommandComponent
};
