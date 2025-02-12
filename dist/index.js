var Le = Object.defineProperty;
var Ve = (e, t, n) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => Ve(e, typeof t != "symbol" ? t + "" : t, n);
import { createVNode as g, render as oe, inject as ge, defineComponent as N, provide as U, nextTick as We, getCurrentInstance as Z, ref as w, h as X, mergeProps as J } from "vue";
import { useGlobalComponentSettings as qe, ElDialog as Ze, ElButton as ae, ElDrawer as Xe } from "element-plus";
import { Popup as Je } from "vant";
var b = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(b || {});
class Ye {
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
const Qe = (e = "") => e.slice(2).toLowerCase(), se = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, ke = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, zr = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), n;
}, Y = (e) => e == null, Ce = Symbol("CommandComponentConsumerInjectKey"), ie = Symbol("CommandComponentStackInjectKey"), I = new Ye(), K = /* @__PURE__ */ new Set(), Br = () => {
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
  } = ke(), y = (f) => {
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
const et = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandComponentConsumerInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return ge(Ce, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Rr = (...e) => (console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."), et(...e));
let we;
const Fr = (e) => {
  we = e;
}, Ur = (e = {}) => {
  const t = Z(), {
    locale: {
      t: n
    }
  } = qe("message-box");
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
        return () => g(Ze, J({
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
      const p = Qe(u);
      s.on(p, l);
    }), s;
  };
};
let Pe;
const Gr = (e) => {
  Pe = e;
}, Hr = (e = {}) => {
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
        return () => g(Xe, J({
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
var je = typeof global == "object" && global && global.Object === Object && global, tt = typeof self == "object" && self && self.Object === Object && self, P = je || tt || Function("return this")(), M = P.Symbol, xe = Object.prototype, nt = xe.hasOwnProperty, rt = xe.toString, S = M ? M.toStringTag : void 0;
function ot(e) {
  var t = nt.call(e, S), n = e[S];
  try {
    e[S] = void 0;
    var r = !0;
  } catch {
  }
  var o = rt.call(e);
  return r && (t ? e[S] = n : delete e[S]), o;
}
var at = Object.prototype, st = at.toString;
function it(e) {
  return st.call(e);
}
var ut = "[object Null]", lt = "[object Undefined]", ue = M ? M.toStringTag : void 0;
function z(e) {
  return e == null ? e === void 0 ? lt : ut : ue && ue in Object(e) ? ot(e) : it(e);
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
var ct = "[object AsyncFunction]", pt = "[object Function]", dt = "[object GeneratorFunction]", ft = "[object Proxy]";
function k(e) {
  if (!T(e))
    return !1;
  var t = z(e);
  return t == pt || t == dt || t == ct || t == ft;
}
var G = P["__core-js_shared__"], le = function() {
  var e = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mt(e) {
  return !!le && le in e;
}
var ht = Function.prototype, vt = ht.toString;
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
var bt = /[\\^$.*+?()[\]{}|]/g, _t = /^\[object .+?Constructor\]$/, gt = Function.prototype, Ct = Object.prototype, Tt = gt.toString, wt = Ct.hasOwnProperty, Pt = RegExp(
  "^" + Tt.call(wt).replace(bt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jt(e) {
  if (!T(e) || mt(e))
    return !1;
  var t = k(e) ? Pt : _t;
  return t.test(yt(e));
}
function xt(e, t) {
  return e == null ? void 0 : e[t];
}
function ee(e, t) {
  var n = xt(e, t);
  return jt(n) ? n : void 0;
}
var ce = Object.create, Ot = /* @__PURE__ */ function() {
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
function St(e, t, n) {
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
function At(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var $t = 800, Et = 16, It = Date.now;
function Mt(e) {
  var t = 0, n = 0;
  return function() {
    var r = It(), o = Et - (r - n);
    if (n = r, o > 0) {
      if (++t >= $t)
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
var D = function() {
  try {
    var e = ee(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Nt = D ? function(e, t) {
  return D(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Dt(t),
    writable: !0
  });
} : Oe, zt = Mt(Nt), Bt = 9007199254740991, Rt = /^(?:0|[1-9]\d*)$/;
function Se(e, t) {
  var n = typeof e;
  return t = t ?? Bt, !!t && (n == "number" || n != "symbol" && Rt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function te(e, t, n) {
  t == "__proto__" && D ? D(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function B(e, t) {
  return e === t || e !== e && t !== t;
}
var Ft = Object.prototype, Ut = Ft.hasOwnProperty;
function Gt(e, t, n) {
  var r = e[t];
  (!(Ut.call(e, t) && B(r, n)) || n === void 0 && !(t in e)) && te(e, t, n);
}
function Ht(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], u = void 0;
    u === void 0 && (u = e[s]), o ? te(n, s, u) : Gt(n, s, u);
  }
  return n;
}
var pe = Math.max;
function Kt(e, t, n) {
  return t = pe(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = pe(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), St(e, this, s);
  };
}
function Lt(e, t) {
  return zt(Kt(e, t, Oe), e + "");
}
var Vt = 9007199254740991;
function Ae(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Vt;
}
function ne(e) {
  return e != null && Ae(e.length) && !k(e);
}
function Wt(e, t, n) {
  if (!T(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? ne(n) && Se(t, n.length) : r == "string" && t in n) ? B(n[t], e) : !1;
}
function qt(e) {
  return Lt(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, i = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, i && Wt(n[0], n[1], i) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, a);
    }
    return t;
  });
}
var Zt = Object.prototype;
function $e(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Zt;
  return e === n;
}
function Xt(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Jt = "[object Arguments]";
function de(e) {
  return E(e) && z(e) == Jt;
}
var Ee = Object.prototype, Yt = Ee.hasOwnProperty, Qt = Ee.propertyIsEnumerable, V = de(/* @__PURE__ */ function() {
  return arguments;
}()) ? de : function(e) {
  return E(e) && Yt.call(e, "callee") && !Qt.call(e, "callee");
};
function kt() {
  return !1;
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, fe = Ie && typeof module == "object" && module && !module.nodeType && module, en = fe && fe.exports === Ie, me = en ? P.Buffer : void 0, tn = me ? me.isBuffer : void 0, Me = tn || kt, nn = "[object Arguments]", rn = "[object Array]", on = "[object Boolean]", an = "[object Date]", sn = "[object Error]", un = "[object Function]", ln = "[object Map]", cn = "[object Number]", pn = "[object Object]", dn = "[object RegExp]", fn = "[object Set]", mn = "[object String]", hn = "[object WeakMap]", vn = "[object ArrayBuffer]", yn = "[object DataView]", bn = "[object Float32Array]", _n = "[object Float64Array]", gn = "[object Int8Array]", Cn = "[object Int16Array]", Tn = "[object Int32Array]", wn = "[object Uint8Array]", Pn = "[object Uint8ClampedArray]", jn = "[object Uint16Array]", xn = "[object Uint32Array]", c = {};
c[bn] = c[_n] = c[gn] = c[Cn] = c[Tn] = c[wn] = c[Pn] = c[jn] = c[xn] = !0;
c[nn] = c[rn] = c[vn] = c[on] = c[yn] = c[an] = c[sn] = c[un] = c[ln] = c[cn] = c[pn] = c[dn] = c[fn] = c[mn] = c[hn] = !1;
function On(e) {
  return E(e) && Ae(e.length) && !!c[z(e)];
}
function Sn(e) {
  return function(t) {
    return e(t);
  };
}
var De = typeof exports == "object" && exports && !exports.nodeType && exports, A = De && typeof module == "object" && module && !module.nodeType && module, An = A && A.exports === De, H = An && je.process, he = function() {
  try {
    var e = A && A.require && A.require("util").types;
    return e || H && H.binding && H.binding("util");
  } catch {
  }
}(), ve = he && he.isTypedArray, Ne = ve ? Sn(ve) : On;
function $n(e, t) {
  var n = L(e), r = !n && V(e), o = !n && !r && Me(e), a = !n && !r && !o && Ne(e), i = n || r || o || a, s = i ? Xt(e.length, String) : [], u = s.length;
  for (var l in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Se(l, u)) || s.push(l);
  return s;
}
function En(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function In(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Mn = Object.prototype, Dn = Mn.hasOwnProperty;
function Nn(e) {
  if (!T(e))
    return In(e);
  var t = $e(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Dn.call(e, r)) || n.push(r);
  return n;
}
function ze(e) {
  return ne(e) ? $n(e) : Nn(e);
}
var $ = ee(Object, "create");
function zn() {
  this.__data__ = $ ? $(null) : {}, this.size = 0;
}
function Bn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Rn = "__lodash_hash_undefined__", Fn = Object.prototype, Un = Fn.hasOwnProperty;
function Gn(e) {
  var t = this.__data__;
  if ($) {
    var n = t[e];
    return n === Rn ? void 0 : n;
  }
  return Un.call(t, e) ? t[e] : void 0;
}
var Hn = Object.prototype, Kn = Hn.hasOwnProperty;
function Ln(e) {
  var t = this.__data__;
  return $ ? t[e] !== void 0 : Kn.call(t, e);
}
var Vn = "__lodash_hash_undefined__";
function Wn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $ && t === void 0 ? Vn : t, this;
}
function C(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
C.prototype.clear = zn;
C.prototype.delete = Bn;
C.prototype.get = Gn;
C.prototype.has = Ln;
C.prototype.set = Wn;
function qn() {
  this.__data__ = [], this.size = 0;
}
function R(e, t) {
  for (var n = e.length; n--; )
    if (B(e[n][0], t))
      return n;
  return -1;
}
var Zn = Array.prototype, Xn = Zn.splice;
function Jn(e) {
  var t = this.__data__, n = R(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Xn.call(t, n, 1), --this.size, !0;
}
function Yn(e) {
  var t = this.__data__, n = R(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Qn(e) {
  return R(this.__data__, e) > -1;
}
function kn(e, t) {
  var n = this.__data__, r = R(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function _(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_.prototype.clear = qn;
_.prototype.delete = Jn;
_.prototype.get = Yn;
_.prototype.has = Qn;
_.prototype.set = kn;
var Be = ee(P, "Map");
function er() {
  this.size = 0, this.__data__ = {
    hash: new C(),
    map: new (Be || _)(),
    string: new C()
  };
}
function tr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function F(e, t) {
  var n = e.__data__;
  return tr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function nr(e) {
  var t = F(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rr(e) {
  return F(this, e).get(e);
}
function or(e) {
  return F(this, e).has(e);
}
function ar(e, t) {
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
j.prototype.clear = er;
j.prototype.delete = nr;
j.prototype.get = rr;
j.prototype.has = or;
j.prototype.set = ar;
var Re = En(Object.getPrototypeOf, Object), sr = "[object Object]", ir = Function.prototype, ur = Object.prototype, Fe = ir.toString, lr = ur.hasOwnProperty, cr = Fe.call(Object);
function pr(e) {
  if (!E(e) || z(e) != sr)
    return !1;
  var t = Re(e);
  if (t === null)
    return !0;
  var n = lr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Fe.call(n) == cr;
}
function dr() {
  this.__data__ = new _(), this.size = 0;
}
function fr(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function mr(e) {
  return this.__data__.get(e);
}
function hr(e) {
  return this.__data__.has(e);
}
var vr = 200;
function yr(e, t) {
  var n = this.__data__;
  if (n instanceof _) {
    var r = n.__data__;
    if (!Be || r.length < vr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new j(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function x(e) {
  var t = this.__data__ = new _(e);
  this.size = t.size;
}
x.prototype.clear = dr;
x.prototype.delete = fr;
x.prototype.get = mr;
x.prototype.has = hr;
x.prototype.set = yr;
var Ue = typeof exports == "object" && exports && !exports.nodeType && exports, ye = Ue && typeof module == "object" && module && !module.nodeType && module, br = ye && ye.exports === Ue, be = br ? P.Buffer : void 0;
be && be.allocUnsafe;
function _r(e, t) {
  return e.slice();
}
var _e = P.Uint8Array;
function gr(e) {
  var t = new e.constructor(e.byteLength);
  return new _e(t).set(new _e(e)), t;
}
function Cr(e, t) {
  var n = gr(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function Tr(e) {
  return typeof e.constructor == "function" && !$e(e) ? Ot(Re(e)) : {};
}
function wr(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var u = i[++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Pr = wr();
function W(e, t, n) {
  (n !== void 0 && !B(e[t], n) || n === void 0 && !(t in e)) && te(e, t, n);
}
function jr(e) {
  return E(e) && ne(e);
}
function q(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function xr(e) {
  return Ht(e, ze(e));
}
function Or(e, t, n, r, o, a, i) {
  var s = q(e, n), u = q(t, n), l = i.get(u);
  if (l) {
    W(e, n, l);
    return;
  }
  var p = a ? a(s, u, n + "", e, t, i) : void 0, m = p === void 0;
  if (m) {
    var y = L(u), v = !y && Me(u), d = !y && !v && Ne(u);
    p = u, y || v || d ? L(s) ? p = s : jr(s) ? p = At(s) : v ? (m = !1, p = _r(u)) : d ? (m = !1, p = Cr(u)) : p = [] : pr(u) || V(u) ? (p = s, V(s) ? p = xr(s) : (!T(s) || k(s)) && (p = Tr(u))) : m = !1;
  }
  m && (i.set(u, p), o(p, u, r, a, i), i.delete(u)), W(e, n, p);
}
function Ge(e, t, n, r, o) {
  e !== t && Pr(t, function(a, i) {
    if (o || (o = new x()), T(a))
      Or(e, t, i, n, Ge, r, o);
    else {
      var s = r ? r(q(e, i), a, i + "", e, t, o) : void 0;
      s === void 0 && (s = a), W(e, i, s);
    }
  }, ze);
}
var Sr = qt(function(e, t, n) {
  Ge(e, t, n);
});
let He;
const Kr = (e) => {
  He = e;
}, Ar = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, $r = (e = {}) => {
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
        return () => g(Je, J({
          ref: l,
          show: a.value,
          onClickCloseIcon: s,
          onClosed: u,
          onVnodeMounted: p
        }, {
          ...Ar,
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
}, Lr = (e = {}) => {
  const t = $r(e);
  return (n, r = {}) => (Sr(r, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(n, r));
};
export {
  Ce as CommandComponentConsumerInjectKey,
  ie as CommandComponentStackInjectKey,
  Q as CommandProvider,
  Ye as ConsumerEventBus,
  b as EVENT_NAME,
  ke as PromiseWithResolvers,
  K as activeCommandComponentConsumers,
  se as busName2EventName,
  Ur as createElementPlusDialog,
  Hr as createElementPlusDrawer,
  $r as createVantUiPopup,
  Lr as createVantUiPopupOnBottom,
  Br as destroyAllCommandComponentConsumer,
  Qe as eventName2BusName,
  Rr as getCommandDialogConsumer,
  et as getConsumer,
  zr as getMaxZIndex,
  Y as isNull,
  Fr as setElementPlusDialogMountNode,
  Gr as setElementPlusDrawerMountNode,
  Kr as setVantUiPopupMountNode
};
