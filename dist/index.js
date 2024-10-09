var He = Object.defineProperty;
var Ge = (e, t, r) => t in e ? He(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Z = (e, t, r) => Ge(e, typeof t != "symbol" ? t + "" : t, r);
import { createVNode as m, render as Q, inject as he, defineComponent as W, provide as U, nextTick as Ke, getCurrentInstance as ve, ref as E, h as me, mergeProps as ye, resolveComponent as k } from "vue";
import { useGlobalComponentSettings as Le, ElDialog as Ve } from "element-plus";
import { Popup as We } from "vant";
class qe {
  constructor() {
    Z(this, "map", /* @__PURE__ */ new WeakMap());
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
const Xe = (e = "") => e.slice(2).toLowerCase(), ee = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, Je = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((n, o) => {
    e = n, t = o;
  }), resolve: e, reject: t };
};
var g = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(g || {});
const ge = Symbol("CommandDialogConsumerInjectKey"), te = Symbol("CommandDialogStackInjectKey"), D = new qe(), be = (e) => ({
  ...e.parent ? be(e.parent) : {},
  ...e.provides
});
function _e(e, t, r) {
  const n = (typeof r.appendTo == "string" ? document.querySelector(r.appendTo) : r.appendTo) || document.body, o = document.createElement("div");
  o.className = "command-commponent-container", n.appendChild(o);
  const a = () => {
    r.visible.value = !1;
  }, s = () => {
    r.visible.value = !0;
  }, i = () => {
    Ke(() => {
      Q(null, o), o.remove();
    });
  }, u = (f = !1) => {
    f ? (d.on(g.destory, i, {
      once: !0,
      callAfterDelay: 3e3
    }), a()) : d.stack.splice(d.stackIndex).forEach((h) => h.destroy(!0));
  }, {
    promise: p,
    resolve: l,
    reject: v
  } = Je(), d = {
    promise: p,
    resolve: l,
    reject: v,
    destroyWithResolve: (f) => {
      l(f), u();
    },
    destroyWithReject: (f) => {
      v(f), u();
    },
    hide: a,
    show: s,
    destroy: u,
    container: o,
    visible: r.visible,
    on: (f, h, Fe = {}) => D.on(d, f, h, Fe),
    once: (f, h) => D.once(d, f, h),
    emit: (f, ...h) => D.emit(d, f, ...h),
    off: (f, h) => D.off(d, f, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, O = m(/* @__PURE__ */ W({
    setup() {
      for (const h in r.provideProps)
        U(h, r.provideProps[h]);
      U(ge, d);
      const f = he(te, []);
      return d.stackIndex = f.length, f.push(d), U(te, f), d.stack = f, () => t;
    }
  }), null, null);
  return O.appContext = (e == null ? void 0 : e.appContext) || O.appContext, O.appContext.provides = {
    ...O.appContext.provides,
    ...be(e)
  }, Q(O, o), d;
}
const $n = (e = !0) => {
  const t = () => e && console.warn(`别调用了欧尼酱~,这会儿没啥实际用途;没有根据CommandDialogInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getCommandDialogConsumer进行了异步调用或条件调用,请在setup中直接调用.
    2.你没有在命令弹窗内展示该组件,这个时候你一般可以忽略该警告消息.`);
  return he(ge, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Dn = (e = !0) => {
  const t = ve(), {
    locale: {
      t: r
    }
  } = Le("message-box");
  return (o, a = {}) => {
    const s = E(e), i = _e(t, me(/* @__PURE__ */ W({
      setup() {
        const u = E(), p = (C) => {
          C(), i.destroy();
        }, l = () => {
          i.emit(g.destory);
        }, v = () => {
          Promise.resolve().then(() => {
            i.componentRef = u;
          });
        };
        return () => m(Ve, ye({
          ref: u,
          modelValue: s.value,
          beforeClose: p,
          onClosed: l,
          onVnodeMounted: v
        }, {
          title: a.title,
          width: a.width,
          ...a.attrs
        }), {
          default: () => o,
          footer: () => m("div", null, [a[ee(g.cancel)] && m(k("el-button"), {
            onClick: () => i.emit(g.cancel)
          }, {
            default: () => [a.cancelBtnText || r("el.messagebox.cancel")]
          }), a[ee(g.confirm)] && m(k("el-button"), {
            type: "primary",
            onClick: () => i.emit(g.confirm)
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
    return Object.entries(a).filter(([u, p]) => u.startsWith("on") && typeof p == "function").forEach(([u, p]) => {
      const l = Xe(u);
      i.on(l, p);
    }), i;
  };
};
var Ce = typeof global == "object" && global && global.Object === Object && global, Ye = typeof self == "object" && self && self.Object === Object && self, T = Ce || Ye || Function("return this")(), I = T.Symbol, Te = Object.prototype, Ze = Te.hasOwnProperty, Qe = Te.toString, w = I ? I.toStringTag : void 0;
function ke(e) {
  var t = Ze.call(e, w), r = e[w];
  try {
    e[w] = void 0;
    var n = !0;
  } catch {
  }
  var o = Qe.call(e);
  return n && (t ? e[w] = r : delete e[w]), o;
}
var et = Object.prototype, tt = et.toString;
function rt(e) {
  return tt.call(e);
}
var nt = "[object Null]", ot = "[object Undefined]", re = I ? I.toStringTag : void 0;
function B(e) {
  return e == null ? e === void 0 ? ot : nt : re && re in Object(e) ? ke(e) : rt(e);
}
function A(e) {
  return e != null && typeof e == "object";
}
var G = Array.isArray;
function _(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function je(e) {
  return e;
}
var at = "[object AsyncFunction]", it = "[object Function]", st = "[object GeneratorFunction]", ut = "[object Proxy]";
function q(e) {
  if (!_(e))
    return !1;
  var t = B(e);
  return t == it || t == st || t == at || t == ut;
}
var F = T["__core-js_shared__"], ne = function() {
  var e = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ct(e) {
  return !!ne && ne in e;
}
var lt = Function.prototype, pt = lt.toString;
function ft(e) {
  if (e != null) {
    try {
      return pt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var dt = /[\\^$.*+?()[\]{}|]/g, ht = /^\[object .+?Constructor\]$/, vt = Function.prototype, mt = Object.prototype, yt = vt.toString, gt = mt.hasOwnProperty, bt = RegExp(
  "^" + yt.call(gt).replace(dt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _t(e) {
  if (!_(e) || ct(e))
    return !1;
  var t = q(e) ? bt : ht;
  return t.test(ft(e));
}
function Ct(e, t) {
  return e == null ? void 0 : e[t];
}
function X(e, t) {
  var r = Ct(e, t);
  return _t(r) ? r : void 0;
}
var oe = Object.create, Tt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!_(t))
      return {};
    if (oe)
      return oe(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function jt(e, t, r) {
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
function Pt(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Ot = 800, wt = 16, xt = Date.now;
function St(e) {
  var t = 0, r = 0;
  return function() {
    var n = xt(), o = wt - (n - r);
    if (r = n, o > 0) {
      if (++t >= Ot)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function At(e) {
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
}(), $t = M ? function(e, t) {
  return M(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: At(t),
    writable: !0
  });
} : je, Dt = St($t), Et = 9007199254740991, It = /^(?:0|[1-9]\d*)$/;
function Pe(e, t) {
  var r = typeof e;
  return t = t ?? Et, !!t && (r == "number" || r != "symbol" && It.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
var Mt = Object.prototype, Bt = Mt.hasOwnProperty;
function Rt(e, t, r) {
  var n = e[t];
  (!(Bt.call(e, t) && R(n, r)) || r === void 0 && !(t in e)) && J(e, t, r);
}
function zt(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], u = void 0;
    u === void 0 && (u = e[i]), o ? J(r, i, u) : Rt(r, i, u);
  }
  return r;
}
var ae = Math.max;
function Nt(e, t, r) {
  return t = ae(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, o = -1, a = ae(n.length - t, 0), s = Array(a); ++o < a; )
      s[o] = n[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = n[o];
    return i[t] = r(s), jt(e, this, i);
  };
}
function Ut(e, t) {
  return Dt(Nt(e, t, je), e + "");
}
var Ft = 9007199254740991;
function Oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ft;
}
function Y(e) {
  return e != null && Oe(e.length) && !q(e);
}
function Ht(e, t, r) {
  if (!_(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Y(r) && Pe(t, r.length) : n == "string" && t in r) ? R(r[t], e) : !1;
}
function Gt(e) {
  return Ut(function(t, r) {
    var n = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, s = o > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Ht(r[0], r[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++n < o; ) {
      var i = r[n];
      i && e(t, i, n, a);
    }
    return t;
  });
}
var Kt = Object.prototype;
function we(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Kt;
  return e === r;
}
function Lt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Vt = "[object Arguments]";
function ie(e) {
  return A(e) && B(e) == Vt;
}
var xe = Object.prototype, Wt = xe.hasOwnProperty, qt = xe.propertyIsEnumerable, K = ie(/* @__PURE__ */ function() {
  return arguments;
}()) ? ie : function(e) {
  return A(e) && Wt.call(e, "callee") && !qt.call(e, "callee");
};
function Xt() {
  return !1;
}
var Se = typeof exports == "object" && exports && !exports.nodeType && exports, se = Se && typeof module == "object" && module && !module.nodeType && module, Jt = se && se.exports === Se, ue = Jt ? T.Buffer : void 0, Yt = ue ? ue.isBuffer : void 0, Ae = Yt || Xt, Zt = "[object Arguments]", Qt = "[object Array]", kt = "[object Boolean]", er = "[object Date]", tr = "[object Error]", rr = "[object Function]", nr = "[object Map]", or = "[object Number]", ar = "[object Object]", ir = "[object RegExp]", sr = "[object Set]", ur = "[object String]", cr = "[object WeakMap]", lr = "[object ArrayBuffer]", pr = "[object DataView]", fr = "[object Float32Array]", dr = "[object Float64Array]", hr = "[object Int8Array]", vr = "[object Int16Array]", mr = "[object Int32Array]", yr = "[object Uint8Array]", gr = "[object Uint8ClampedArray]", br = "[object Uint16Array]", _r = "[object Uint32Array]", c = {};
c[fr] = c[dr] = c[hr] = c[vr] = c[mr] = c[yr] = c[gr] = c[br] = c[_r] = !0;
c[Zt] = c[Qt] = c[lr] = c[kt] = c[pr] = c[er] = c[tr] = c[rr] = c[nr] = c[or] = c[ar] = c[ir] = c[sr] = c[ur] = c[cr] = !1;
function Cr(e) {
  return A(e) && Oe(e.length) && !!c[B(e)];
}
function Tr(e) {
  return function(t) {
    return e(t);
  };
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports, x = $e && typeof module == "object" && module && !module.nodeType && module, jr = x && x.exports === $e, H = jr && Ce.process, ce = function() {
  try {
    var e = x && x.require && x.require("util").types;
    return e || H && H.binding && H.binding("util");
  } catch {
  }
}(), le = ce && ce.isTypedArray, De = le ? Tr(le) : Cr;
function Pr(e, t) {
  var r = G(e), n = !r && K(e), o = !r && !n && Ae(e), a = !r && !n && !o && De(e), s = r || n || o || a, i = s ? Lt(e.length, String) : [], u = i.length;
  for (var p in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    Pe(p, u)) || i.push(p);
  return i;
}
function Or(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function wr(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var xr = Object.prototype, Sr = xr.hasOwnProperty;
function Ar(e) {
  if (!_(e))
    return wr(e);
  var t = we(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Sr.call(e, n)) || r.push(n);
  return r;
}
function Ee(e) {
  return Y(e) ? Pr(e) : Ar(e);
}
var S = X(Object, "create");
function $r() {
  this.__data__ = S ? S(null) : {}, this.size = 0;
}
function Dr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Er = "__lodash_hash_undefined__", Ir = Object.prototype, Mr = Ir.hasOwnProperty;
function Br(e) {
  var t = this.__data__;
  if (S) {
    var r = t[e];
    return r === Er ? void 0 : r;
  }
  return Mr.call(t, e) ? t[e] : void 0;
}
var Rr = Object.prototype, zr = Rr.hasOwnProperty;
function Nr(e) {
  var t = this.__data__;
  return S ? t[e] !== void 0 : zr.call(t, e);
}
var Ur = "__lodash_hash_undefined__";
function Fr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = S && t === void 0 ? Ur : t, this;
}
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
b.prototype.clear = $r;
b.prototype.delete = Dr;
b.prototype.get = Br;
b.prototype.has = Nr;
b.prototype.set = Fr;
function Hr() {
  this.__data__ = [], this.size = 0;
}
function z(e, t) {
  for (var r = e.length; r--; )
    if (R(e[r][0], t))
      return r;
  return -1;
}
var Gr = Array.prototype, Kr = Gr.splice;
function Lr(e) {
  var t = this.__data__, r = z(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Kr.call(t, r, 1), --this.size, !0;
}
function Vr(e) {
  var t = this.__data__, r = z(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Wr(e) {
  return z(this.__data__, e) > -1;
}
function qr(e, t) {
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
y.prototype.clear = Hr;
y.prototype.delete = Lr;
y.prototype.get = Vr;
y.prototype.has = Wr;
y.prototype.set = qr;
var Ie = X(T, "Map");
function Xr() {
  this.size = 0, this.__data__ = {
    hash: new b(),
    map: new (Ie || y)(),
    string: new b()
  };
}
function Jr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function N(e, t) {
  var r = e.__data__;
  return Jr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Yr(e) {
  var t = N(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Zr(e) {
  return N(this, e).get(e);
}
function Qr(e) {
  return N(this, e).has(e);
}
function kr(e, t) {
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
j.prototype.clear = Xr;
j.prototype.delete = Yr;
j.prototype.get = Zr;
j.prototype.has = Qr;
j.prototype.set = kr;
var Me = Or(Object.getPrototypeOf, Object), en = "[object Object]", tn = Function.prototype, rn = Object.prototype, Be = tn.toString, nn = rn.hasOwnProperty, on = Be.call(Object);
function an(e) {
  if (!A(e) || B(e) != en)
    return !1;
  var t = Me(e);
  if (t === null)
    return !0;
  var r = nn.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Be.call(r) == on;
}
function sn() {
  this.__data__ = new y(), this.size = 0;
}
function un(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function cn(e) {
  return this.__data__.get(e);
}
function ln(e) {
  return this.__data__.has(e);
}
var pn = 200;
function fn(e, t) {
  var r = this.__data__;
  if (r instanceof y) {
    var n = r.__data__;
    if (!Ie || n.length < pn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new j(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function P(e) {
  var t = this.__data__ = new y(e);
  this.size = t.size;
}
P.prototype.clear = sn;
P.prototype.delete = un;
P.prototype.get = cn;
P.prototype.has = ln;
P.prototype.set = fn;
var Re = typeof exports == "object" && exports && !exports.nodeType && exports, pe = Re && typeof module == "object" && module && !module.nodeType && module, dn = pe && pe.exports === Re, fe = dn ? T.Buffer : void 0;
fe && fe.allocUnsafe;
function hn(e, t) {
  return e.slice();
}
var de = T.Uint8Array;
function vn(e) {
  var t = new e.constructor(e.byteLength);
  return new de(t).set(new de(e)), t;
}
function mn(e, t) {
  var r = vn(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function yn(e) {
  return typeof e.constructor == "function" && !we(e) ? Tt(Me(e)) : {};
}
function gn(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), s = n(t), i = s.length; i--; ) {
      var u = s[++o];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var bn = gn();
function L(e, t, r) {
  (r !== void 0 && !R(e[t], r) || r === void 0 && !(t in e)) && J(e, t, r);
}
function _n(e) {
  return A(e) && Y(e);
}
function V(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Cn(e) {
  return zt(e, Ee(e));
}
function Tn(e, t, r, n, o, a, s) {
  var i = V(e, r), u = V(t, r), p = s.get(u);
  if (p) {
    L(e, r, p);
    return;
  }
  var l = a ? a(i, u, r + "", e, t, s) : void 0, v = l === void 0;
  if (v) {
    var C = G(u), $ = !C && Ae(u), d = !C && !$ && De(u);
    l = u, C || $ || d ? G(i) ? l = i : _n(i) ? l = Pt(i) : $ ? (v = !1, l = hn(u)) : d ? (v = !1, l = mn(u)) : l = [] : an(u) || K(u) ? (l = i, K(i) ? l = Cn(i) : (!_(i) || q(i)) && (l = yn(u))) : v = !1;
  }
  v && (s.set(u, l), o(l, u, n, a, s), s.delete(u)), L(e, r, l);
}
function ze(e, t, r, n, o) {
  e !== t && bn(t, function(a, s) {
    if (o || (o = new P()), _(a))
      Tn(e, t, s, r, ze, n, o);
    else {
      var i = n ? n(V(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), L(e, s, i);
    }
  }, Ee);
}
var Ne = Gt(function(e, t, r) {
  ze(e, t, r);
});
const jn = {
  overlay: !0,
  round: !0,
  lockScroll: !0,
  closeable: !0,
  closeOnClickOverlay: !1,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, Ue = (e = !0) => {
  const t = ve();
  return (n, o = {}) => {
    const a = E(e), s = _e(t, me(/* @__PURE__ */ W({
      setup() {
        const i = E(), u = () => {
          s.destroy();
        }, p = () => {
          s.emit(g.destory);
        }, l = () => {
          Promise.resolve().then(() => {
            s.componentRef = i;
          });
        };
        return () => m(We, ye({
          ref: i,
          show: a.value,
          onClickCloseIcon: u,
          onClosed: p,
          onVnodeMounted: l
        }, {
          ...jn,
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
}, En = (e = !0) => {
  const t = Ue(e);
  return (r, n = {}) => (Ne(n, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(r, n));
}, Pn = (e = !0) => {
  const t = Ue(e);
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
}, In = (e = !0) => {
  const t = Pn(e);
  return (r, n = {}) => (Ne(n, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(r, n));
};
export {
  ge as CommandDialogConsumerInjectKey,
  _e as CommandDialogProvider,
  te as CommandDialogStackInjectKey,
  g as EVENT_NAME,
  Dn as createElementPlusDialog,
  Ue as createVantUiPopup,
  En as createVantUiPopupOnBottom,
  Pn as createVantUiTitlePopup,
  In as createVantUiTitlePopupOnBottom,
  $n as getCommandDialogConsumer
};
