var Le = Object.defineProperty;
var Ve = (e, t, n) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var M = (e, t, n) => Ve(e, typeof t != "symbol" ? t + "" : t, n);
import { createVNode as _, render as ae, inject as _e, defineComponent as z, provide as G, nextTick as We, getCurrentInstance as J, ref as P, h as Y, mergeProps as Q, watch as qe } from "vue";
import { ElDialog as Ze, ElButton as se, ElDrawer as Xe } from "element-plus";
import { Popup as Je } from "vant";
import { useRoute as Ye } from "vue-router";
var C = /* @__PURE__ */ ((e) => (e.confirm = "confirm", e.cancel = "cancel", e.destory = "destory", e))(C || {});
class Qe {
  constructor() {
    M(this, "map", /* @__PURE__ */ new WeakMap());
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
    let s = r;
    o.once && (s = (...i) => {
      r(...i), this.off(t, n, s);
    }), a.add(s), o.callAfterDelay !== void 0 && setTimeout(() => {
      s();
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
const ke = (e = "") => e.slice(2).toLowerCase(), Kr = (e = "") => `on${e.charAt(0).toUpperCase()}${e.slice(1)}`, et = () => {
  let e = () => {
  }, t = () => {
  };
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}, Lr = (e) => {
  var r;
  const t = ((r = e.parentElement) == null ? void 0 : r.children) || [];
  let n = 0;
  return Array.from(t).forEach((o) => {
    if (o !== e) {
      const a = parseInt(window.getComputedStyle(o).zIndex);
      !isNaN(a) && a > n && (n = a);
    }
  }), +n;
}, k = (e) => e == null, tt = (e, t, ...n) => {
  const r = { ...e }, o = (a) => {
    for (const s in a)
      if (a[s] && typeof a[s] == "object") {
        const i = r[s] && typeof r[s] == "object" ? r[s] : {};
        r[s] = tt(i, a[s]);
      } else
        r[s] = a[s];
  };
  return o(t), n.forEach(o), r;
}, Ce = Symbol("CommandComponentConsumerInjectKey"), ie = Symbol("CommandComponentStackInjectKey"), N = new Qe(), V = /* @__PURE__ */ new Set(), nt = () => {
  V.forEach((e) => {
    e.destroy();
  });
}, Te = (e) => ({
  ...e.parent ? Te(e.parent) : {},
  ...e.provides
});
function ee(e, t, n) {
  const r = (typeof n.appendTo == "string" ? document.querySelector(n.appendTo) : n.appendTo) || document.body, o = document.createElement("div");
  o.className = n.customClassName || "command-commponent-container", r.appendChild(o);
  const a = () => {
    n.visible.value = !1;
  }, s = () => {
    n.visible.value = !0;
  }, i = () => {
    We(() => {
      ae(null, o), o.remove();
    });
  }, u = 3e3, {
    promise: c,
    resolve: p,
    reject: m
  } = et(), v = (d = !1) => {
    d ? (f.on(C.destory, i, {
      once: !0,
      callAfterDelay: u
    }), a()) : (V.delete(f), f.stack.splice(f.stackIndex).forEach((h) => h.destroy(!0)));
  }, y = (d) => {
    p(d), v();
  }, g = (d) => {
    m(d), v();
  }, f = {
    meta: n.meta || {},
    promise: c,
    resolve: p,
    reject: m,
    destroyWithResolve: y,
    destroyWithReject: g,
    hide: a,
    show: s,
    destroy: v,
    container: o,
    visible: n.visible,
    on: (d, h, Ke = {}) => N.on(f, d, h, Ke),
    once: (d, h) => N.once(f, d, h),
    emit: (d, ...h) => N.emit(f, d, ...h),
    off: (d, h) => N.off(f, d, h),
    stack: [],
    stackIndex: -1,
    componentRef: void 0
  }, A = _(/* @__PURE__ */ z({
    setup() {
      for (const h in n.provideProps)
        G(h, n.provideProps[h]);
      G(Ce, f);
      const d = _e(ie, []);
      return f.stackIndex = d.length, d.push(f), G(ie, d), f.stack = d, () => t;
    }
  }), null, null);
  return A.appContext = (e == null ? void 0 : e.appContext) || A.appContext, A.appContext.provides = {
    ...A.appContext.provides,
    ...Te(e)
  }, ae(A, o), V.add(f), f;
}
const rt = (e = !0) => {
  const t = () => e && console.warn(`没有根据CommandComponentConsumerInjectKey接收到注入数据.原因可能有两个:
    1.你可能对getConsumer进行了异步调用或条件调用,请在setup顶层中直接调用.
    2.你没有(或者你根本不需要)在命令弹窗内展示该组件,这个时候你一般可以通过warn参数忽略该警告消息.`);
  return _e(Ce, () => new Proxy({}, {
    get: () => t,
    apply: t
  }), !0);
}, Vr = (e = !0) => (console.warn("Warning: This API will be deprecated in the future, please use `getConsumer` instead."), rt(e));
class ot {
  constructor() {
    M(this, "mountNode");
    M(this, "parentInstance");
    this.parentInstance = J();
  }
  /**
   * 设置挂载点
   */
  setMountNode(t) {
    this.mountNode = t;
  }
  /**
   * 创建命令式组件
   */
  createCommand(t = {}) {
    return (n, r = {}) => {
      const o = P(k(t.immediately) ? !0 : !!t.immediately), a = this.createConsumer(n, o, r, t);
      return this.bindEvents(a, r), a;
    };
  }
  createConsumer(t, n, r, o) {
    let a;
    const s = z({
      setup: () => {
        const i = P(), u = () => {
          Promise.resolve().then(() => {
            a && (a.componentRef = i);
          });
        };
        return () => this.renderComponent(t, {
          ref: i,
          visible: n.value,
          onMounted: u,
          config: r,
          consumer: a
        });
      }
    });
    return a = ee(this.parentInstance, Y(s), {
      provideProps: r.provideProps || {},
      appendTo: this.mountNode || r.appendTo,
      visible: n,
      meta: {
        ...(o == null ? void 0 : o.meta) || { name: this.getDefaultName() },
        ...(r == null ? void 0 : r.meta) || {}
      }
    }), a;
  }
  bindEvents(t, n) {
    Object.entries(n).filter(([r, o]) => r.startsWith("on") && typeof o == "function").forEach(([r, o]) => {
      const a = ke(r);
      t.on(a, o);
    });
  }
}
class at extends ot {
  getDefaultName() {
    return "command-element-plus-dialog";
  }
  renderComponent(t, n) {
    const r = "确认", o = "取消", {
      ref: a,
      visible: s,
      onMounted: i,
      config: u,
      consumer: c
    } = n, p = (v) => {
      v(), c.destroy();
    }, m = (...v) => {
      var y, g;
      return c.emit(C.destory), (g = (y = u.attrs) == null ? void 0 : y.onClosed) == null ? void 0 : g.call(y, ...v);
    };
    return _(Ze, Q({
      ref: a,
      modelValue: s,
      beforeClose: p,
      onVnodeMounted: i
    }, {
      title: u.title,
      width: u.width,
      ...u.attrs
    }, {
      onClosed: m
    }), {
      default: () => t,
      footer: () => _("div", null, [u.onCancel && _(se, {
        onClick: () => c.emit(C.cancel)
      }, {
        default: () => [u.cancelBtnText || o]
      }), u.onConfirm && _(se, {
        type: "primary",
        onClick: () => c.emit(C.confirm)
      }, {
        default: () => [u.confirmBtnText || r]
      })]),
      ...u.slots
    });
  }
}
let we;
const Wr = (e) => {
  we = e;
}, qr = (e = {}) => {
  const t = new at();
  return t.setMountNode(we), t.createCommand(e);
};
let Pe;
const Zr = (e) => {
  Pe = e;
}, Xr = (e = {}) => {
  const t = J();
  return (r, o = {}) => {
    const a = P(k(e.immediately) ? !0 : !!e.immediately), s = ee(t, Y(/* @__PURE__ */ z({
      setup() {
        const i = (m) => {
          m(), s.destroy();
        }, u = () => {
          s.emit(C.destory);
        }, c = P(), p = () => {
          Promise.resolve().then(() => {
            s.componentRef = c;
          });
        };
        return () => _(Xe, Q({
          ref: c,
          modelValue: a.value,
          beforeClose: i,
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
    return s;
  };
};
var Oe = typeof global == "object" && global && global.Object === Object && global, st = typeof self == "object" && self && self.Object === Object && self, O = Oe || st || Function("return this")(), D = O.Symbol, je = Object.prototype, it = je.hasOwnProperty, ut = je.toString, S = D ? D.toStringTag : void 0;
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
var ft = "[object Null]", mt = "[object Undefined]", ue = D ? D.toStringTag : void 0;
function B(e) {
  return e == null ? e === void 0 ? mt : ft : ue && ue in Object(e) ? lt(e) : dt(e);
}
function $(e) {
  return e != null && typeof e == "object";
}
var W = Array.isArray;
function w(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function xe(e) {
  return e;
}
var ht = "[object AsyncFunction]", vt = "[object Function]", yt = "[object GeneratorFunction]", bt = "[object Proxy]";
function te(e) {
  if (!w(e))
    return !1;
  var t = B(e);
  return t == vt || t == yt || t == ht || t == bt;
}
var K = O["__core-js_shared__"], le = function() {
  var e = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function gt(e) {
  return !!le && le in e;
}
var _t = Function.prototype, Ct = _t.toString;
function Tt(e) {
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
var wt = /[\\^$.*+?()[\]{}|]/g, Pt = /^\[object .+?Constructor\]$/, Ot = Function.prototype, jt = Object.prototype, xt = Ot.toString, At = jt.hasOwnProperty, St = RegExp(
  "^" + xt.call(At).replace(wt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Et(e) {
  if (!w(e) || gt(e))
    return !1;
  var t = te(e) ? St : Pt;
  return t.test(Tt(e));
}
function It(e, t) {
  return e == null ? void 0 : e[t];
}
function ne(e, t) {
  var n = It(e, t);
  return Et(n) ? n : void 0;
}
var ce = Object.create, $t = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!w(t))
      return {};
    if (ce)
      return ce(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Mt(e, t, n) {
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
var Dt = 800, Rt = 16, zt = Date.now;
function Bt(e) {
  var t = 0, n = 0;
  return function() {
    var r = zt(), o = Rt - (r - n);
    if (n = r, o > 0) {
      if (++t >= Dt)
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
var R = function() {
  try {
    var e = ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ft = R ? function(e, t) {
  return R(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ut(t),
    writable: !0
  });
} : xe, Ht = Bt(Ft), Gt = 9007199254740991, Kt = /^(?:0|[1-9]\d*)$/;
function Ae(e, t) {
  var n = typeof e;
  return t = t ?? Gt, !!t && (n == "number" || n != "symbol" && Kt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function re(e, t, n) {
  t == "__proto__" && R ? R(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function U(e, t) {
  return e === t || e !== e && t !== t;
}
var Lt = Object.prototype, Vt = Lt.hasOwnProperty;
function Wt(e, t, n) {
  var r = e[t];
  (!(Vt.call(e, t) && U(r, n)) || n === void 0 && !(t in e)) && re(e, t, n);
}
function qt(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], u = void 0;
    u === void 0 && (u = e[i]), o ? re(n, i, u) : Wt(n, i, u);
  }
  return n;
}
var pe = Math.max;
function Zt(e, t, n) {
  return t = pe(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = pe(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Mt(e, this, i);
  };
}
function Xt(e, t) {
  return Ht(Zt(e, t, xe), e + "");
}
var Jt = 9007199254740991;
function Se(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jt;
}
function oe(e) {
  return e != null && Se(e.length) && !te(e);
}
function Yt(e, t, n) {
  if (!w(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? oe(n) && Ae(t, n.length) : r == "string" && t in n) ? U(n[t], e) : !1;
}
function Qt(e) {
  return Xt(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && Yt(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var kt = Object.prototype;
function Ee(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || kt;
  return e === n;
}
function en(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var tn = "[object Arguments]";
function de(e) {
  return $(e) && B(e) == tn;
}
var Ie = Object.prototype, nn = Ie.hasOwnProperty, rn = Ie.propertyIsEnumerable, q = de(/* @__PURE__ */ function() {
  return arguments;
}()) ? de : function(e) {
  return $(e) && nn.call(e, "callee") && !rn.call(e, "callee");
};
function on() {
  return !1;
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports, fe = $e && typeof module == "object" && module && !module.nodeType && module, an = fe && fe.exports === $e, me = an ? O.Buffer : void 0, sn = me ? me.isBuffer : void 0, Me = sn || on, un = "[object Arguments]", ln = "[object Array]", cn = "[object Boolean]", pn = "[object Date]", dn = "[object Error]", fn = "[object Function]", mn = "[object Map]", hn = "[object Number]", vn = "[object Object]", yn = "[object RegExp]", bn = "[object Set]", gn = "[object String]", _n = "[object WeakMap]", Cn = "[object ArrayBuffer]", Tn = "[object DataView]", wn = "[object Float32Array]", Pn = "[object Float64Array]", On = "[object Int8Array]", jn = "[object Int16Array]", xn = "[object Int32Array]", An = "[object Uint8Array]", Sn = "[object Uint8ClampedArray]", En = "[object Uint16Array]", In = "[object Uint32Array]", l = {};
l[wn] = l[Pn] = l[On] = l[jn] = l[xn] = l[An] = l[Sn] = l[En] = l[In] = !0;
l[un] = l[ln] = l[Cn] = l[cn] = l[Tn] = l[pn] = l[dn] = l[fn] = l[mn] = l[hn] = l[vn] = l[yn] = l[bn] = l[gn] = l[_n] = !1;
function $n(e) {
  return $(e) && Se(e.length) && !!l[B(e)];
}
function Mn(e) {
  return function(t) {
    return e(t);
  };
}
var Ne = typeof exports == "object" && exports && !exports.nodeType && exports, E = Ne && typeof module == "object" && module && !module.nodeType && module, Nn = E && E.exports === Ne, L = Nn && Oe.process, he = function() {
  try {
    var e = E && E.require && E.require("util").types;
    return e || L && L.binding && L.binding("util");
  } catch {
  }
}(), ve = he && he.isTypedArray, De = ve ? Mn(ve) : $n;
function Dn(e, t) {
  var n = W(e), r = !n && q(e), o = !n && !r && Me(e), a = !n && !r && !o && De(e), s = n || r || o || a, i = s ? en(e.length, String) : [], u = i.length;
  for (var c in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ae(c, u)) || i.push(c);
  return i;
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
function Fn(e) {
  if (!w(e))
    return zn(e);
  var t = Ee(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Un.call(e, r)) || n.push(r);
  return n;
}
function Re(e) {
  return oe(e) ? Dn(e) : Fn(e);
}
var I = ne(Object, "create");
function Hn() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function Gn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Kn = "__lodash_hash_undefined__", Ln = Object.prototype, Vn = Ln.hasOwnProperty;
function Wn(e) {
  var t = this.__data__;
  if (I) {
    var n = t[e];
    return n === Kn ? void 0 : n;
  }
  return Vn.call(t, e) ? t[e] : void 0;
}
var qn = Object.prototype, Zn = qn.hasOwnProperty;
function Xn(e) {
  var t = this.__data__;
  return I ? t[e] !== void 0 : Zn.call(t, e);
}
var Jn = "__lodash_hash_undefined__";
function Yn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = I && t === void 0 ? Jn : t, this;
}
function T(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
T.prototype.clear = Hn;
T.prototype.delete = Gn;
T.prototype.get = Wn;
T.prototype.has = Xn;
T.prototype.set = Yn;
function Qn() {
  this.__data__ = [], this.size = 0;
}
function F(e, t) {
  for (var n = e.length; n--; )
    if (U(e[n][0], t))
      return n;
  return -1;
}
var kn = Array.prototype, er = kn.splice;
function tr(e) {
  var t = this.__data__, n = F(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : er.call(t, n, 1), --this.size, !0;
}
function nr(e) {
  var t = this.__data__, n = F(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function rr(e) {
  return F(this.__data__, e) > -1;
}
function or(e, t) {
  var n = this.__data__, r = F(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function b(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
b.prototype.clear = Qn;
b.prototype.delete = tr;
b.prototype.get = nr;
b.prototype.has = rr;
b.prototype.set = or;
var ze = ne(O, "Map");
function ar() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (ze || b)(),
    string: new T()
  };
}
function sr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function H(e, t) {
  var n = e.__data__;
  return sr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ir(e) {
  var t = H(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ur(e) {
  return H(this, e).get(e);
}
function lr(e) {
  return H(this, e).has(e);
}
function cr(e, t) {
  var n = H(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function j(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
j.prototype.clear = ar;
j.prototype.delete = ir;
j.prototype.get = ur;
j.prototype.has = lr;
j.prototype.set = cr;
var Be = Rn(Object.getPrototypeOf, Object), pr = "[object Object]", dr = Function.prototype, fr = Object.prototype, Ue = dr.toString, mr = fr.hasOwnProperty, hr = Ue.call(Object);
function vr(e) {
  if (!$(e) || B(e) != pr)
    return !1;
  var t = Be(e);
  if (t === null)
    return !0;
  var n = mr.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ue.call(n) == hr;
}
function yr() {
  this.__data__ = new b(), this.size = 0;
}
function br(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function gr(e) {
  return this.__data__.get(e);
}
function _r(e) {
  return this.__data__.has(e);
}
var Cr = 200;
function Tr(e, t) {
  var n = this.__data__;
  if (n instanceof b) {
    var r = n.__data__;
    if (!ze || r.length < Cr - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new j(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function x(e) {
  var t = this.__data__ = new b(e);
  this.size = t.size;
}
x.prototype.clear = yr;
x.prototype.delete = br;
x.prototype.get = gr;
x.prototype.has = _r;
x.prototype.set = Tr;
var Fe = typeof exports == "object" && exports && !exports.nodeType && exports, ye = Fe && typeof module == "object" && module && !module.nodeType && module, wr = ye && ye.exports === Fe, be = wr ? O.Buffer : void 0;
be && be.allocUnsafe;
function Pr(e, t) {
  return e.slice();
}
var ge = O.Uint8Array;
function Or(e) {
  var t = new e.constructor(e.byteLength);
  return new ge(t).set(new ge(e)), t;
}
function jr(e, t) {
  var n = Or(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function xr(e) {
  return typeof e.constructor == "function" && !Ee(e) ? $t(Be(e)) : {};
}
function Ar(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), i = s.length; i--; ) {
      var u = s[++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var Sr = Ar();
function Z(e, t, n) {
  (n !== void 0 && !U(e[t], n) || n === void 0 && !(t in e)) && re(e, t, n);
}
function Er(e) {
  return $(e) && oe(e);
}
function X(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Ir(e) {
  return qt(e, Re(e));
}
function $r(e, t, n, r, o, a, s) {
  var i = X(e, n), u = X(t, n), c = s.get(u);
  if (c) {
    Z(e, n, c);
    return;
  }
  var p = a ? a(i, u, n + "", e, t, s) : void 0, m = p === void 0;
  if (m) {
    var v = W(u), y = !v && Me(u), g = !v && !y && De(u);
    p = u, v || y || g ? W(i) ? p = i : Er(i) ? p = Nt(i) : y ? (m = !1, p = Pr(u)) : g ? (m = !1, p = jr(u)) : p = [] : vr(u) || q(u) ? (p = i, q(i) ? p = Ir(i) : (!w(i) || te(i)) && (p = xr(u))) : m = !1;
  }
  m && (s.set(u, p), o(p, u, r, a, s), s.delete(u)), Z(e, n, p);
}
function He(e, t, n, r, o) {
  e !== t && Sr(t, function(a, s) {
    if (o || (o = new x()), w(a))
      $r(e, t, s, n, He, r, o);
    else {
      var i = r ? r(X(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), Z(e, s, i);
    }
  }, Re);
}
var Mr = Qt(function(e, t, n) {
  He(e, t, n);
});
let Ge;
const Jr = (e) => {
  Ge = e;
}, Nr = {
  round: !0,
  lockScroll: !0,
  closeable: !0,
  style: {
    backgroundColor: "#fff",
    color: "#000"
  }
}, Dr = (e = {}) => {
  const t = J();
  return (r, o = {}) => {
    const a = P(k(e.immediately) ? !0 : !!e.immediately), s = ee(t, Y(/* @__PURE__ */ z({
      setup() {
        const i = () => {
          s.destroy();
        }, u = () => {
          s.emit(C.destory);
        }, c = P(), p = () => {
          Promise.resolve().then(() => {
            s.componentRef = c;
          });
        };
        return () => _(Je, Q({
          ref: c,
          show: a.value,
          onClickCloseIcon: i,
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
      appendTo: Ge || o.appendTo,
      visible: a,
      meta: {
        ...(e == null ? void 0 : e.meta) || {
          name: "command-vant-ui-popup"
        },
        ...(o == null ? void 0 : o.meta) || {}
      }
    });
    return s;
  };
}, Yr = (e = {}) => {
  const t = Dr(e);
  return (n, r = {}) => (Mr(r, {
    attrs: {
      position: "bottom",
      style: {
        width: "100vw"
      }
    }
  }), t(n, r));
}, Rr = () => {
  const e = Ye();
  qe(
    () => e.path,
    () => {
      console.log("路由变化,关闭所有存在的弹窗"), nt();
    }
  );
}, Qr = function() {
  return console.warn(
    "useAfterRouteChangeCloseAllCommandComponent is deprecated (because its name is not elegant enough =.=), please use useCloseAllOnRouteChange instead, their functions are exactly the same"
  ), Rr();
};
export {
  Ce as CommandComponentConsumerInjectKey,
  ie as CommandComponentStackInjectKey,
  ee as CommandProvider,
  Qe as ConsumerEventBus,
  C as EVENT_NAME,
  et as PromiseWithResolvers,
  V as activeCommandComponentConsumers,
  Kr as busName2EventName,
  qr as createElementPlusDialog,
  Xr as createElementPlusDrawer,
  Dr as createVantUiPopup,
  Yr as createVantUiPopupOnBottom,
  tt as deepMerge,
  nt as destroyAllCommandComponentConsumer,
  ke as eventName2BusName,
  Vr as getCommandDialogConsumer,
  rt as getConsumer,
  Lr as getMaxZIndex,
  k as isNull,
  Wr as setElementPlusDialogMountNode,
  Zr as setElementPlusDrawerMountNode,
  Jr as setVantUiPopupMountNode,
  Qr as useAfterRouteChangeCloseAllCommandComponent,
  Rr as useCloseAllOnRouteChange
};
