var He = Object.defineProperty;
var Ke = (e, t, r) => t in e ? He(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Q = (e, t, r) => Ke(e, typeof t != "symbol" ? t + "" : t, r);
import { createVNode as C, render as k, inject as ve, defineComponent as q, provide as U, nextTick as Le, getCurrentInstance as me, ref as E, h as ge, mergeProps as ye, resolveComponent as ee } from "vue";
import { useGlobalComponentSettings as We, ElDialog as Ve } from "element-plus";
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
const Dn = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return ve(be, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
};
let Te;
const Mn = (e) => {
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
          footer: () => C("div", null, [a[te(y.cancel)] && C(ee("el-button"), {
            onClick: () => i.emit(y.cancel)
          }, {
            default: () => [a.cancelBtnText || r("el.messagebox.cancel")]
          }), a[te(y.confirm)] && C(ee("el-button"), {
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
var je = typeof global == "object" && global && global.Object === Object && global, Qe = typeof self == "object" && self && self.Object === Object && self, T = je || Qe || Function("return this")(), D = T.Symbol, xe = Object.prototype, ke = xe.hasOwnProperty, et = xe.toString, O = D ? D.toStringTag : void 0;
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
function N(e) {
  return e == null ? e === void 0 ? it : at : ne && ne in Object(e) ? tt(e) : ot(e);
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
var st = "[object AsyncFunction]", ut = "[object Function]", ct = "[object GeneratorFunction]", lt = "[object Proxy]";
function Z(e) {
  if (!_(e))
    return !1;
  var t = N(e);
  return t == ut || t == ct || t == st || t == lt;
}
var G = T["__core-js_shared__"], oe = function() {
  var e = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ft(e) {
  return !!oe && oe in e;
}
var pt = Function.prototype, dt = pt.toString;
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
var vt = /[\\^$.*+?()[\]{}|]/g, mt = /^\[object .+?Constructor\]$/, gt = Function.prototype, yt = Object.prototype, bt = gt.toString, _t = yt.hasOwnProperty, Ct = RegExp(
  "^" + bt.call(_t).replace(vt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tt(e) {
  if (!_(e) || ft(e))
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
var ae = Object.create, xt = /* @__PURE__ */ function() {
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
function Pt(e, t, r) {
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
} : Pe, Dt = $t(Et), Mt = 9007199254740991, Nt = /^(?:0|[1-9]\d*)$/;
function Oe(e, t) {
  var r = typeof e;
  return t = t ?? Mt, !!t && (r == "number" || r != "symbol" && Nt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function J(e, t, r) {
  t == "__proto__" && M ? M(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function R(e, t) {
  return e === t || e !== e && t !== t;
}
var Rt = Object.prototype, zt = Rt.hasOwnProperty;
function Bt(e, t, r) {
  var n = e[t];
  (!(zt.call(e, t) && R(n, r)) || r === void 0 && !(t in e)) && J(e, t, r);
}
function Ft(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], u = void 0;
    u === void 0 && (u = e[i]), o ? J(r, i, u) : Bt(r, i, u);
  }
  return r;
}
var ie = Math.max;
function Ut(e, t, r) {
  return t = ie(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = ie(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), Pt(e, this, i);
  };
}
function Gt(e, t) {
  return Dt(Ut(e, t, Pe), e + "");
}
var Ht = 9007199254740991;
function we(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ht;
}
function Y(e) {
  return e != null && we(e.length) && !Z(e);
}
function Kt(e, t, r) {
  if (!_(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Y(r) && Oe(t, r.length) : n == "string" && t in r) ? R(r[t], e) : !1;
}
function Lt(e) {
  return Gt(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Kt(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Wt = Object.prototype;
function Se(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Wt;
  return e === r;
}
function Vt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var qt = "[object Arguments]";
function se(e) {
  return A(e) && N(e) == qt;
}
var Ae = Object.prototype, Zt = Ae.hasOwnProperty, Xt = Ae.propertyIsEnumerable, L = se(/* @__PURE__ */ function() {
  return arguments;
}()) ? se : function(e) {
  return A(e) && Zt.call(e, "callee") && !Xt.call(e, "callee");
};
function Jt() {
  return !1;
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports, ue = $e && typeof module == "object" && module && !module.nodeType && module, Yt = ue && ue.exports === $e, ce = Yt ? T.Buffer : void 0, Qt = ce ? ce.isBuffer : void 0, Ie = Qt || Jt, kt = "[object Arguments]", er = "[object Array]", tr = "[object Boolean]", rr = "[object Date]", nr = "[object Error]", or = "[object Function]", ar = "[object Map]", ir = "[object Number]", sr = "[object Object]", ur = "[object RegExp]", cr = "[object Set]", lr = "[object String]", fr = "[object WeakMap]", pr = "[object ArrayBuffer]", dr = "[object DataView]", hr = "[object Float32Array]", vr = "[object Float64Array]", mr = "[object Int8Array]", gr = "[object Int16Array]", yr = "[object Int32Array]", br = "[object Uint8Array]", _r = "[object Uint8ClampedArray]", Cr = "[object Uint16Array]", Tr = "[object Uint32Array]", c = {};
c[hr] = c[vr] = c[mr] = c[gr] = c[yr] = c[br] = c[_r] = c[Cr] = c[Tr] = !0;
c[kt] = c[er] = c[pr] = c[tr] = c[dr] = c[rr] = c[nr] = c[or] = c[ar] = c[ir] = c[sr] = c[ur] = c[cr] = c[lr] = c[fr] = !1;
function jr(e) {
  return A(e) && we(e.length) && !!c[N(e)];
}
function xr(e) {
  return function(t) {
    return e(t);
  };
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, w = Ee && typeof module == "object" && module && !module.nodeType && module, Pr = w && w.exports === Ee, H = Pr && je.process, le = function() {
  try {
    var e = w && w.require && w.require("util").types;
    return e || H && H.binding && H.binding("util");
  } catch {
  }
}(), fe = le && le.isTypedArray, De = fe ? xr(fe) : jr;
function Or(e, t) {
  var r = K(e), n = !r && L(e), o = !r && !n && Ie(e), a = !r && !n && !o && De(e), s = r || n || o || a, i = s ? Vt(e.length, String) : [], u = i.length;
  for (var l in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Oe(l, u)) || i.push(l);
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
  if (!_(e))
    return Sr(e);
  var t = Se(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !$r.call(e, n)) || r.push(n);
  return r;
}
function Me(e) {
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
var Mr = "__lodash_hash_undefined__", Nr = Object.prototype, Rr = Nr.hasOwnProperty;
function zr(e) {
  var t = this.__data__;
  if (S) {
    var r = t[e];
    return r === Mr ? void 0 : r;
  }
  return Rr.call(t, e) ? t[e] : void 0;
}
var Br = Object.prototype, Fr = Br.hasOwnProperty;
function Ur(e) {
  var t = this.__data__;
  return S ? t[e] !== void 0 : Fr.call(t, e);
}
var Gr = "__lodash_hash_undefined__";
function Hr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = S && t === void 0 ? Gr : t, this;
}
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
b.prototype.clear = Er;
b.prototype.delete = Dr;
b.prototype.get = zr;
b.prototype.has = Ur;
b.prototype.set = Hr;
function Kr() {
  this.__data__ = [], this.size = 0;
}
function z(e, t) {
  for (var r = e.length; r--; )
    if (R(e[r][0], t))
      return r;
  return -1;
}
var Lr = Array.prototype, Wr = Lr.splice;
function Vr(e) {
  var t = this.__data__, r = z(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Wr.call(t, r, 1), --this.size, !0;
}
function qr(e) {
  var t = this.__data__, r = z(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Zr(e) {
  return z(this.__data__, e) > -1;
}
function Xr(e, t) {
  var r = this.__data__, n = z(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function m(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = Kr;
m.prototype.delete = Vr;
m.prototype.get = qr;
m.prototype.has = Zr;
m.prototype.set = Xr;
var Ne = X(T, "Map");
function Jr() {
  this.size = 0, this.__data__ = {
    hash: new b(),
    map: new (Ne || m)(),
    string: new b()
  };
}
function Yr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function B(e, t) {
  var r = e.__data__;
  return Yr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Qr(e) {
  var t = B(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function kr(e) {
  return B(this, e).get(e);
}
function en(e) {
  return B(this, e).has(e);
}
function tn(e, t) {
  var r = B(this, e), n = r.size;
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
var Re = wr(Object.getPrototypeOf, Object), rn = "[object Object]", nn = Function.prototype, on = Object.prototype, ze = nn.toString, an = on.hasOwnProperty, sn = ze.call(Object);
function un(e) {
  if (!A(e) || N(e) != rn)
    return !1;
  var t = Re(e);
  if (t === null)
    return !0;
  var r = an.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ze.call(r) == sn;
}
function cn() {
  this.__data__ = new m(), this.size = 0;
}
function ln(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function fn(e) {
  return this.__data__.get(e);
}
function pn(e) {
  return this.__data__.has(e);
}
var dn = 200;
function hn(e, t) {
  var r = this.__data__;
  if (r instanceof m) {
    var n = r.__data__;
    if (!Ne || n.length < dn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new j(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function x(e) {
  var t = this.__data__ = new m(e);
  this.size = t.size;
}
x.prototype.clear = cn;
x.prototype.delete = ln;
x.prototype.get = fn;
x.prototype.has = pn;
x.prototype.set = hn;
var Be = typeof exports == "object" && exports && !exports.nodeType && exports, pe = Be && typeof module == "object" && module && !module.nodeType && module, vn = pe && pe.exports === Be, de = vn ? T.Buffer : void 0;
de && de.allocUnsafe;
function mn(e, t) {
  return e.slice();
}
var he = T.Uint8Array;
function gn(e) {
  var t = new e.constructor(e.byteLength);
  return new he(t).set(new he(e)), t;
}
function yn(e, t) {
  var r = gn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function bn(e) {
  return typeof e.constructor == "function" && !Se(e) ? xt(Re(e)) : {};
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
function W(e, t, r) {
  (r !== void 0 && !R(e[t], r) || r === void 0 && !(t in e)) && J(e, t, r);
}
function Tn(e) {
  return A(e) && Y(e);
}
function V(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function jn(e) {
  return Ft(e, Me(e));
}
function xn(e, t, r, n, o, a, s) {
  var i = V(e, r), u = V(t, r), l = s.get(u);
  if (l) {
    W(e, r, l);
    return;
  }
  var f = a ? a(i, u, r + "", e, t, s) : void 0, v = f === void 0;
  if (v) {
    var g = K(u), $ = !g && Ie(u), F = !g && !$ && De(u);
    f = u, g || $ || F ? K(i) ? f = i : Tn(i) ? f = Ot(i) : $ ? (v = !1, f = mn(u)) : F ? (v = !1, f = yn(u)) : f = [] : un(u) || L(u) ? (f = i, L(i) ? f = jn(i) : (!_(i) || Z(i)) && (f = bn(u))) : v = !1;
  }
  v && (s.set(u, f), o(f, u, n, a, s), s.delete(u)), W(e, r, f);
}
function Fe(e, t, r, n, o) {
  e !== t && Cn(t, function(a, s) {
    if (o || (o = new x()), _(a))
      xn(e, t, s, r, Fe, n, o);
    else {
      var i = n ? n(V(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), W(e, s, i);
    }
  }, Me);
}
var Pn = Lt(function(e, t, r) {
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
}, wn = (e = !0) => {
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
  const t = wn(e);
  return (r, n = {}) => (Pn(n, {
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
  Ze as ConsumerEventBus,
  y as EVENT_NAME,
  Je as PromiseWithResolvers,
  te as busName2EventName,
  Nn as createElementPlusDialog,
  wn as createVantUiPopup,
  zn as createVantUiPopupOnBottom,
  Xe as eventName2BusName,
  Dn as getCommandDialogConsumer,
  Ye as getMaxZIndex,
  Mn as setElementPlusDialogMountNode,
  Rn as setVantUiPopupMountNode
};
