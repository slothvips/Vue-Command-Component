var qe = Object.defineProperty;
var Ze = (e, t, n) => t in e ? qe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var oe = (e, t, n) => Ze(e, typeof t != "symbol" ? t + "" : t, n);
import { createVNode as g, render as ae, inject as Z, defineComponent as M, provide as V, nextTick as Xe, getCurrentInstance as X, ref as T, h as J, mergeProps as Y, watch as Je } from "vue";
import { useGlobalComponentSettings as Ye, ElDialog as Qe, ElButton as se, ElDrawer as ke } from "element-plus";
import { Popup as et } from "vant";
var b = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(b || {});
class tt {
  constructor() {
    oe(this, "map", /* @__PURE__ */ new WeakMap());
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
const nt = (e = "") => e.slice(2).toLowerCase(), ie = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, rt = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Hr = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), n;
}, Q = (e) => e == null, Pe = Symbol("CommandComponentConsumerInjectKey"), ue = Symbol("CommandComponentStackInjectKey"), I = new tt(), H = /* @__PURE__ */ new Set(), ot = () => {
  console.log("destroyAllCommandComponentConsumer"), H.forEach((e) => {
    e.destroy();
  });
}, Oe = (e) => ({
  ...e.parent ? Oe(e.parent) : {},
  ...e.provides
});
function k(e, t, n) {
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-commponent-container", r.appendChild(o);
  const a = () => {
    n.visible.value = !1;
  }, i = () => {
    n.visible.value = !0;
  }, s = () => {
    Xe(() => {
      ae(null, o), o.remove();
    });
  }, u = (f = !1) => {
    f ? (d.on(b.destory, s, {
      once: !0,
      callAfterDelay: 3e3
    }), a()) : (H.delete(d), d.stack.splice(d.stackIndex).forEach((h) => h.destroy(!0)));
  }, {
    promise: l,
    resolve: p,
    reject: m
  } = rt(), y = (f) => {
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
    on: (f, h, We = {}) => I.on(d, f, h, We),
    once: (f, h) => I.once(d, f, h),
    emit: (f, ...h) => I.emit(d, f, ...h),
    off: (f, h) => I.off(d, f, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, x = g(/* @__PURE__ */ M({
    setup() {
      for (const h in n.provideProps)
        V(h, n.provideProps[h]);
      V(Pe, d);
      const f = Z(ue, []);
      return d.stackIndex = f.length, f.push(d), V(ue, f), d.stack = f, () => t;
    }
  }), null, null);
  return x.appContext = (e == null ? void 0 : e.appContext) || x.appContext, x.appContext.provides = {
    ...x.appContext.provides,
    ...Oe(e)
  }, ae(x, o), H.add(d), d;
}
const at = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandComponentConsumerInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return Z(Pe, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Kr = (...e) => (console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."), at(...e));
let je;
const Lr = (e) => {
  je = e;
}, Wr = (e = {}) => {
  const t = X(), {
    locale: {
      t: n
    }
  } = Ye("message-box");
  return (o, a = {}) => {
    const i = T(Q(e.immediately) ? !0 : !!e.immediately), s = k(t, J(/* @__PURE__ */ M({
      setup() {
        const u = T(), l = () => {
          Promise.resolve().then(() => {
            s.componentRef = u;
          });
        }, p = (y) => {
          y(), s.destroy();
        }, m = (...y) => {
          var v, d;
          return s.emit(b.destory), (d = (v = a.attrs) == null ? void 0 : v.onClosed) == null ? void 0 : d.call(v, ...y);
        };
        return () => g(Qe, Y({
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
          footer: () => g("div", null, [a[ie(b.cancel)] && g(se, {
            onClick: () => s.emit(b.cancel)
          }, {
            default: () => [a.cancelBtnText || n("el.messagebox.cancel")]
          }), a[ie(b.confirm)] && g(se, {
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
      appendTo: je || a.appendTo,
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
      const p = nt(u);
      s.on(p, l);
    }), s;
  };
};
let xe;
const qr = (e) => {
  xe = e;
}, Zr = (e = {}) => {
  const t = X();
  return (r, o = {}) => {
    const a = T(Q(e.immediately) ? !0 : !!e.immediately), i = k(t, J(/* @__PURE__ */ M({
      setup() {
        const s = (m) => {
          m(), i.destroy();
        }, u = () => {
          i.emit(b.destory);
        }, l = T(), p = () => {
          Promise.resolve().then(() => {
            i.componentRef = l;
          });
        };
        return () => g(ke, Y({
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
      appendTo: xe || o.appendTo,
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
var Se = typeof global == "object" && global && global.Object === Object && global, st = typeof self == "object" && self && self.Object === Object && self, P = Se || st || Function("return this")(), D = P.Symbol, Ee = Object.prototype, it = Ee.hasOwnProperty, ut = Ee.toString, S = D ? D.toStringTag : void 0;
function lt(e) {
  var t = it.call(e, S), n = e[S];
  try {
    e[S] = void 0;
    var r = !0;
  } catch {
  }
  var o = ut.call(e);
  return r && (t ? e[S] = n : delete e[S]), o;
}
var ct = Object.prototype, pt = ct.toString;
function dt(e) {
  return pt.call(e);
}
var ft = "[object Null]", mt = "[object Undefined]", le = D ? D.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? mt : ft : le && le in Object(e) ? lt(e) : dt(e);
}
function $(e) {
  return e != null && typeof e == "object";
}
var K = Array.isArray;
function w(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ae(e) {
  return e;
}
var ht = "[object AsyncFunction]", vt = "[object Function]", yt = "[object GeneratorFunction]", bt = "[object Proxy]";
function ee(e) {
  if (!w(e))
    return !1;
  var t = R(e);
  return t == vt || t == yt || t == ht || t == bt;
}
var F = P["__core-js_shared__"], ce = function() {
  var e = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _t(e) {
  return !!ce && ce in e;
}
var gt = Function.prototype, Ct = gt.toString;
function wt(e) {
  if (e != null) {
    try {
      return Ct.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tt = /[\\^$.*+?()[\]{}|]/g, Pt = /^\[object .+?Constructor\]$/, Ot = Function.prototype, jt = Object.prototype, xt = Ot.toString, St = jt.hasOwnProperty, Et = RegExp(
  "^" + xt.call(St).replace(Tt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function At(e) {
  if (!w(e) || _t(e))
    return !1;
  var t = ee(e) ? Et : Pt;
  return t.test(wt(e));
}
function $t(e, t) {
  return e == null ? void 0 : e[t];
}
function te(e, t) {
  var n = $t(e, t);
  return At(n) ? n : void 0;
}
var pe = Object.create, It = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!w(t))
      return {};
    if (pe)
      return pe(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Dt(e, t, n) {
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
function Nt(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Mt = 800, Rt = 16, zt = Date.now;
function Bt(e) {
  var t = 0, n = 0;
  return function() {
    var r = zt(), o = Rt - (r - n);
    if (n = r, o > 0) {
      if (++t >= Mt)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ut(e) {
  return function() {
    return e;
  };
}
var N = function() {
  try {
    var e = te(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Vt = N ? function(e, t) {
  return N(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ut(t),
    writable: !0
  });
} : Ae, Ft = Bt(Vt), Gt = 9007199254740991, Ht = /^(?:0|[1-9]\d*)$/;
function $e(e, t) {
  var n = typeof e;
  return t = t ?? Gt, !!t && (n == "number" || n != "symbol" && Ht.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ne(e, t, n) {
  t == "__proto__" && N ? N(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function z(e, t) {
  return e === t || e !== e && t !== t;
}
var Kt = Object.prototype, Lt = Kt.hasOwnProperty;
function Wt(e, t, n) {
  var r = e[t];
  (!(Lt.call(e, t) && z(r, n)) || n === void 0 && !(t in e)) && ne(e, t, n);
}
function qt(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], u = void 0;
    u === void 0 && (u = e[s]), o ? ne(n, s, u) : Wt(n, s, u);
  }
  return n;
}
var de = Math.max;
function Zt(e, t, n) {
  return t = de(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = de(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), Dt(e, this, s);
  };
}
function Xt(e, t) {
  return Ft(Zt(e, t, Ae), e + "");
}
var Jt = 9007199254740991;
function Ie(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jt;
}
function re(e) {
  return e != null && Ie(e.length) && !ee(e);
}
function Yt(e, t, n) {
  if (!w(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? re(n) && $e(t, n.length) : r == "string" && t in n) ? z(n[t], e) : !1;
}
function Qt(e) {
  return Xt(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && Yt(n[0], n[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, a);
    }
    return t;
  });
}
var kt = Object.prototype;
function De(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || kt;
  return e === n;
}
function en(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var tn = "[object Arguments]";
function fe(e) {
  return $(e) && R(e) == tn;
}
var Ne = Object.prototype, nn = Ne.hasOwnProperty, rn = Ne.propertyIsEnumerable, L = fe(/* @__PURE__ */ function() {
  return arguments;
}()) ? fe : function(e) {
  return $(e) && nn.call(e, "callee") && !rn.call(e, "callee");
};
function on() {
  return !1;
}
var Me = typeof exports == "object" && exports && !exports.nodeType && exports, me = Me && typeof module == "object" && module && !module.nodeType && module, an = me && me.exports === Me, he = an ? P.Buffer : void 0, sn = he ? he.isBuffer : void 0, Re = sn || on, un = "[object Arguments]", ln = "[object Array]", cn = "[object Boolean]", pn = "[object Date]", dn = "[object Error]", fn = "[object Function]", mn = "[object Map]", hn = "[object Number]", vn = "[object Object]", yn = "[object RegExp]", bn = "[object Set]", _n = "[object String]", gn = "[object WeakMap]", Cn = "[object ArrayBuffer]", wn = "[object DataView]", Tn = "[object Float32Array]", Pn = "[object Float64Array]", On = "[object Int8Array]", jn = "[object Int16Array]", xn = "[object Int32Array]", Sn = "[object Uint8Array]", En = "[object Uint8ClampedArray]", An = "[object Uint16Array]", $n = "[object Uint32Array]", c = {};
c[Tn] = c[Pn] = c[On] = c[jn] = c[xn] = c[Sn] = c[En] = c[An] = c[$n] = !0;
c[un] = c[ln] = c[Cn] = c[cn] = c[wn] = c[pn] = c[dn] = c[fn] = c[mn] = c[hn] = c[vn] = c[yn] = c[bn] = c[_n] = c[gn] = !1;
function In(e) {
  return $(e) && Ie(e.length) && !!c[R(e)];
}
function Dn(e) {
  return function(t) {
    return e(t);
  };
}
var ze = typeof exports == "object" && exports && !exports.nodeType && exports, E = ze && typeof module == "object" && module && !module.nodeType && module, Nn = E && E.exports === ze, G = Nn && Se.process, ve = function() {
  try {
    var e = E && E.require && E.require("util").types;
    return e || G && G.binding && G.binding("util");
  } catch {
  }
}(), ye = ve && ve.isTypedArray, Be = ye ? Dn(ye) : In;
function Mn(e, t) {
  var n = K(e), r = !n && L(e), o = !n && !r && Re(e), a = !n && !r && !o && Be(e), i = n || r || o || a, s = i ? en(e.length, String) : [], u = s.length;
  for (var l in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    $e(l, u)) || s.push(l);
  return s;
}
function Rn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function zn(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Bn = Object.prototype, Un = Bn.hasOwnProperty;
function Vn(e) {
  if (!w(e))
    return zn(e);
  var t = De(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Un.call(e, r)) || n.push(r);
  return n;
}
function Ue(e) {
  return re(e) ? Mn(e) : Vn(e);
}
var A = te(Object, "create");
function Fn() {
  this.__data__ = A ? A(null) : {}, this.size = 0;
}
function Gn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Hn = "__lodash_hash_undefined__", Kn = Object.prototype, Ln = Kn.hasOwnProperty;
function Wn(e) {
  var t = this.__data__;
  if (A) {
    var n = t[e];
    return n === Hn ? void 0 : n;
  }
  return Ln.call(t, e) ? t[e] : void 0;
}
var qn = Object.prototype, Zn = qn.hasOwnProperty;
function Xn(e) {
  var t = this.__data__;
  return A ? t[e] !== void 0 : Zn.call(t, e);
}
var Jn = "__lodash_hash_undefined__";
function Yn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = A && t === void 0 ? Jn : t, this;
}
function C(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
C.prototype.clear = Fn;
C.prototype.delete = Gn;
C.prototype.get = Wn;
C.prototype.has = Xn;
C.prototype.set = Yn;
function Qn() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var n = e.length; n--; )
    if (z(e[n][0], t))
      return n;
  return -1;
}
var kn = Array.prototype, er = kn.splice;
function tr(e) {
  var t = this.__data__, n = B(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : er.call(t, n, 1), --this.size, !0;
}
function nr(e) {
  var t = this.__data__, n = B(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function rr(e) {
  return B(this.__data__, e) > -1;
}
function or(e, t) {
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
_.prototype.clear = Qn;
_.prototype.delete = tr;
_.prototype.get = nr;
_.prototype.has = rr;
_.prototype.set = or;
var Ve = te(P, "Map");
function ar() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (Ve || _)(),
    string: new C()
  };
}
function sr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var n = e.__data__;
  return sr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ir(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ur(e) {
  return U(this, e).get(e);
}
function lr(e) {
  return U(this, e).has(e);
}
function cr(e, t) {
  var n = U(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function O(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
O.prototype.clear = ar;
O.prototype.delete = ir;
O.prototype.get = ur;
O.prototype.has = lr;
O.prototype.set = cr;
var Fe = Rn(Object.getPrototypeOf, Object), pr = "[object Object]", dr = Function.prototype, fr = Object.prototype, Ge = dr.toString, mr = fr.hasOwnProperty, hr = Ge.call(Object);
function vr(e) {
  if (!$(e) || R(e) != pr)
    return !1;
  var t = Fe(e);
  if (t === null)
    return !0;
  var n = mr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ge.call(n) == hr;
}
function yr() {
  this.__data__ = new _(), this.size = 0;
}
function br(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function _r(e) {
  return this.__data__.get(e);
}
function gr(e) {
  return this.__data__.has(e);
}
var Cr = 200;
function wr(e, t) {
  var n = this.__data__;
  if (n instanceof _) {
    var r = n.__data__;
    if (!Ve || r.length < Cr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new O(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function j(e) {
  var t = this.__data__ = new _(e);
  this.size = t.size;
}
j.prototype.clear = yr;
j.prototype.delete = br;
j.prototype.get = _r;
j.prototype.has = gr;
j.prototype.set = wr;
var He = typeof exports == "object" && exports && !exports.nodeType && exports, be = He && typeof module == "object" && module && !module.nodeType && module, Tr = be && be.exports === He, _e = Tr ? P.Buffer : void 0;
_e && _e.allocUnsafe;
function Pr(e, t) {
  return e.slice();
}
var ge = P.Uint8Array;
function Or(e) {
  var t = new e.constructor(e.byteLength);
  return new ge(t).set(new ge(e)), t;
}
function jr(e, t) {
  var n = Or(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function xr(e) {
  return typeof e.constructor == "function" && !De(e) ? It(Fe(e)) : {};
}
function Sr(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var u = i[++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Er = Sr();
function W(e, t, n) {
  (n !== void 0 && !z(e[t], n) || n === void 0 && !(t in e)) && ne(e, t, n);
}
function Ar(e) {
  return $(e) && re(e);
}
function q(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function $r(e) {
  return qt(e, Ue(e));
}
function Ir(e, t, n, r, o, a, i) {
  var s = q(e, n), u = q(t, n), l = i.get(u);
  if (l) {
    W(e, n, l);
    return;
  }
  var p = a ? a(s, u, n + "", e, t, i) : void 0, m = p === void 0;
  if (m) {
    var y = K(u), v = !y && Re(u), d = !y && !v && Be(u);
    p = u, y || v || d ? K(s) ? p = s : Ar(s) ? p = Nt(s) : v ? (m = !1, p = Pr(u)) : d ? (m = !1, p = jr(u)) : p = [] : vr(u) || L(u) ? (p = s, L(s) ? p = $r(s) : (!w(s) || ee(s)) && (p = xr(u))) : m = !1;
  }
  m && (i.set(u, p), o(p, u, r, a, i), i.delete(u)), W(e, n, p);
}
function Ke(e, t, n, r, o) {
  e !== t && Er(t, function(a, i) {
    if (o || (o = new j()), w(a))
      Ir(e, t, i, n, Ke, r, o);
    else {
      var s = r ? r(q(e, i), a, i + "", e, t, o) : void 0;
      s === void 0 && (s = a), W(e, i, s);
    }
  }, Ue);
}
var Dr = Qt(function(e, t, n) {
  Ke(e, t, n);
});
let Le;
const Xr = (e) => {
  Le = e;
}, Nr = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, Mr = (e = {}) => {
  const t = X();
  return (r, o = {}) => {
    const a = T(Q(e.immediately) ? !0 : !!e.immediately), i = k(t, J(/* @__PURE__ */ M({
      setup() {
        const s = () => {
          i.destroy();
        }, u = () => {
          i.emit(b.destory);
        }, l = T(), p = () => {
          Promise.resolve().then(() => {
            i.componentRef = l;
          });
        };
        return () => g(et, Y({
          ref: l,
          show: a.value,
          onClickCloseIcon: s,
          onClosed: u,
          onVnodeMounted: p
        }, {
          ...Nr,
          ...o.attrs
        }), {
          default: () => r,
          ...o.slots
        });
      }
    })), {
      provideProps: o.provideProps || {},
      appendTo: Le || o.appendTo,
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
}, Jr = (e = {}) => {
  const t = Mr(e);
  return (n, r = {}) => (Dr(r, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(n, r));
};
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Ce;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ce || (Ce = {}));
var we;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(we || (we = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Te;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Te || (Te = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const Rr = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function zr(e) {
  return Z(Rr);
}
const Yr = () => {
  const e = zr();
  Je(
    () => e.path,
    () => {
      console.log("路由变化,关闭所有存在的弹窗"), ot();
    }
  );
};
export {
  Pe as CommandComponentConsumerInjectKey,
  ue as CommandComponentStackInjectKey,
  k as CommandProvider,
  tt as ConsumerEventBus,
  b as EVENT_NAME,
  rt as PromiseWithResolvers,
  H as activeCommandComponentConsumers,
  ie as busName2EventName,
  Wr as createElementPlusDialog,
  Zr as createElementPlusDrawer,
  Mr as createVantUiPopup,
  Jr as createVantUiPopupOnBottom,
  ot as destroyAllCommandComponentConsumer,
  nt as eventName2BusName,
  Kr as getCommandDialogConsumer,
  at as getConsumer,
  Hr as getMaxZIndex,
  Q as isNull,
  Lr as setElementPlusDialogMountNode,
  qr as setElementPlusDrawerMountNode,
  Xr as setVantUiPopupMountNode,
  Yr as useAfterRouteChangeCloseAllCommandComponent
};
