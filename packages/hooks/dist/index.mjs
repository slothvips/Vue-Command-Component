import { activeConsumers as k } from "@vue-cmd/core";
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const L = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const $ = () => {
}, Xe = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), J = Object.assign, y = Array.isArray, Ze = (e) => he(e) === "[object Map]", et = (e) => he(e) === "[object Set]", m = (e) => typeof e == "function", D = (e) => typeof e == "string", tt = (e) => typeof e == "symbol", v = (e) => e !== null && typeof e == "object", nt = (e) => (v(e) || m(e)) && m(e.then) && m(e.catch), ot = Object.prototype.toString, he = (e) => ot.call(e), rt = (e) => he(e) === "[object Object]", le = (e, t) => !Object.is(e, t);
let Se;
const te = () => Se || (Se = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ge(e) {
  if (y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = D(o) ? lt(o) : ge(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (D(e) || v(e))
    return e;
}
const st = /;(?![^(]*\))/g, it = /:([^]+)/, ct = /\/\*[^]*?\*\//g;
function lt(e) {
  const t = {};
  return e.replace(ct, "").split(st).forEach((n) => {
    if (n) {
      const o = n.split(it);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function _e(e) {
  let t = "";
  if (D(e))
    t = e;
  else if (y(e))
    for (let n = 0; n < e.length; n++) {
      const o = _e(e[n]);
      o && (t += o + " ");
    }
  else if (v(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function me(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let S;
const re = /* @__PURE__ */ new WeakSet();
class at {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, re.has(this) && (re.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ft(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Oe(this), Re(this);
    const t = S;
    S = this;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && S !== this && me(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ie(this), S = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ye(t);
      this.deps = this.depsTail = void 0, Oe(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? re.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ae(this) && this.run();
  }
  get dirty() {
    return ae(this);
  }
}
let be, ve;
function ft(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ve, ve = e;
    return;
  }
  e.next = be, be = e;
}
function Re(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ie(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), ye(o), pt(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function ae(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ut(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ut(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ve) || (e.globalVersion = Ve, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ae(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = S;
  S = e;
  try {
    Re(e);
    const o = e.fn(e._value);
    (t.version === 0 || le(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    S = n, Ie(e), e.flags &= -3;
  }
}
function ye(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      ye(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function pt(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function Oe(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = S;
    S = void 0;
    try {
      t();
    } finally {
      S = n;
    }
  }
}
let Ve = 0;
Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tt)
);
function j(e) {
  return fe(e) ? j(e.__v_raw) : !!(e && e.__v_isReactive);
}
function fe(e) {
  return !!(e && e.__v_isReadonly);
}
function P(e) {
  return !!(e && e.__v_isShallow);
}
function ue(e) {
  return e ? !!e.__v_raw : !1;
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function W(e) {
  return e ? e.__v_isRef === !0 : !1;
}
const B = {}, Q = /* @__PURE__ */ new WeakMap();
let x;
function dt(e, t = !1, n = x) {
  if (n) {
    let o = Q.get(n);
    o || Q.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && me(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function ht(e, t, n = L) {
  const { immediate: o, deep: r, once: s, scheduler: c, augmentJob: l, call: a } = n, g = (p) => {
    (n.onWarn || me)(
      "Invalid watch source: ",
      p,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (p) => r ? p : P(p) || r === !1 || r === 0 ? V(p, 1) : V(p);
  let i, f, u, h, E = !1, K = !1;
  if (W(e) ? (f = () => e.value, E = P(e)) : j(e) ? (f = () => d(e), E = !0) : y(e) ? (K = !0, E = e.some((p) => j(p) || P(p)), f = () => e.map((p) => {
    if (W(p))
      return p.value;
    if (j(p))
      return d(p);
    if (m(p))
      return a ? a(p, 2) : p();
    process.env.NODE_ENV !== "production" && g(p);
  })) : m(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
    if (u)
      try {
        u();
      } finally {
      }
    const p = x;
    x = i;
    try {
      return a ? a(e, 3, [h]) : e(h);
    } finally {
      x = p;
    }
  } : (f = $, process.env.NODE_ENV !== "production" && g(e)), t && r) {
    const p = f, w = r === !0 ? 1 / 0 : r;
    f = () => V(p(), w);
  }
  const T = () => {
    i.stop();
  };
  if (s && t) {
    const p = t;
    t = (...w) => {
      p(...w), T();
    };
  }
  let C = K ? new Array(e.length).fill(B) : B;
  const M = (p) => {
    if (!(!(i.flags & 1) || !i.dirty && !p))
      if (t) {
        const w = i.run();
        if (r || E || (K ? w.some((oe, q) => le(oe, C[q])) : le(w, C))) {
          u && u();
          const oe = x;
          x = i;
          try {
            const q = [
              w,
              // pass undefined as the old value when it's changed for the first time
              C === B ? void 0 : K && C[0] === B ? [] : C,
              h
            ];
            C = w, a ? a(t, 3, q) : (
              // @ts-expect-error
              t(...q)
            );
          } finally {
            x = oe;
          }
        }
      } else
        i.run();
  };
  return l && l(M), i = new at(f), i.scheduler = c ? () => c(M, !1) : M, h = (p) => dt(p, !1, i), u = i.onStop = () => {
    const p = Q.get(i);
    if (p) {
      if (a)
        a(p, 4);
      else
        for (const w of p) w();
      Q.delete(i);
    }
  }, process.env.NODE_ENV !== "production" && (i.onTrack = n.onTrack, i.onTrigger = n.onTrigger), t ? o ? M(!0) : C = i.run() : c ? c(M.bind(null, !0), !0) : i.run(), T.pause = i.pause.bind(i), T.resume = i.resume.bind(i), T.stop = T, T;
}
function V(e, t = 1 / 0, n) {
  if (t <= 0 || !v(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, W(e))
    V(e.value, t, n);
  else if (y(e))
    for (let o = 0; o < e.length; o++)
      V(e[o], t, n);
  else if (et(e) || Ze(e))
    e.forEach((o) => {
      V(o, t, n);
    });
  else if (rt(e)) {
    for (const o in e)
      V(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && V(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const I = [];
function gt(e) {
  I.push(e);
}
function _t() {
  I.pop();
}
let se = !1;
function _(e, ...t) {
  if (se) return;
  se = !0;
  const n = I.length ? I[I.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = mt();
  if (o)
    ne(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var c, l;
          return (l = (c = s.toString) == null ? void 0 : c.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${Ge(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...yt(r)), console.warn(...s);
  }
  se = !1;
}
function mt() {
  let e = I[I.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function yt(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Et(n));
  }), t;
}
function Et({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Ge(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Nt(e.props), s] : [r + s];
}
function Nt(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Te(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Te(e, t, n) {
  return D(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : W(t) ? (t = Te(e, R(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : m(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), n ? t : [`${e}=`, t]);
}
const Ae = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function ne(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Ee(r, t, n);
  }
}
function Fe(e, t, n, o) {
  if (m(e)) {
    const r = ne(e, t, n, o);
    return r && nt(r) && r.catch((s) => {
      Ee(s, t, n);
    }), r;
  }
  if (y(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(Fe(e[s], t, n, o));
    return r;
  } else process.env.NODE_ENV !== "production" && _(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ee(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: c } = t && t.appContext.config || L;
  if (t) {
    let l = t.parent;
    const a = t.proxy, g = process.env.NODE_ENV !== "production" ? Ae[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let i = 0; i < d.length; i++)
          if (d[i](e, a, g) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      ne(s, null, 10, [
        e,
        a,
        g
      ]);
      return;
    }
  }
  wt(e, n, r, o, c);
}
function wt(e, t, n, o = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = Ae[t];
    if (n && gt(n), _(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && _t(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const N = [];
let b = -1;
const H = [];
let O = null, A = 0;
const St = /* @__PURE__ */ Promise.resolve();
let pe = null;
const bt = 100;
function vt(e) {
  let t = b + 1, n = N.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = N[o], s = U(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function $e(e) {
  if (!(e.flags & 1)) {
    const t = U(e), n = N[N.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= U(n) ? N.push(e) : N.splice(vt(t), 0, e), e.flags |= 1, Pe();
  }
}
function Pe() {
  pe || (pe = St.then(We));
}
function He(e) {
  y(e) ? H.push(...e) : O && e.id === -1 ? O.splice(A + 1, 0, e) : e.flags & 1 || (H.push(e), e.flags |= 1), Pe();
}
function Ot(e) {
  if (H.length) {
    const t = [...new Set(H)].sort(
      (n, o) => U(n) - U(o)
    );
    if (H.length = 0, O) {
      O.push(...t);
      return;
    }
    for (O = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), A = 0; A < O.length; A++) {
      const n = O[A];
      process.env.NODE_ENV !== "production" && Me(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    O = null, A = 0;
  }
}
const U = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function We(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Me(e, n) : $;
  try {
    for (b = 0; b < N.length; b++) {
      const n = N[b];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ne(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; b < N.length; b++) {
      const n = N[b];
      n && (n.flags &= -2);
    }
    b = -1, N.length = 0, Ot(e), pe = null, (N.length || H.length) && We(e);
  }
}
function Me(e, t) {
  const n = e.get(t) || 0;
  if (n > bt) {
    const o = t.i, r = o && Ye(o.type);
    return Ee(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const ie = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (te().__VUE_HMR_RUNTIME__ = {
  createRecord: ce(Vt),
  rerender: ce(Dt),
  reload: ce(Ct)
});
const X = /* @__PURE__ */ new Map();
function Vt(e, t) {
  return X.has(e) ? !1 : (X.set(e, {
    initialDef: Z(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Z(e) {
  return Qe(e) ? e.__vccOpts : e;
}
function Dt(e, t) {
  const n = X.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Z(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function Ct(e, t) {
  const n = X.get(e);
  if (!n) return;
  t = Z(t), De(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], c = Z(s.type);
    let l = ie.get(c);
    l || (c !== n.initialDef && De(c, t), ie.set(c, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? $e(() => {
      s.parent.update(), l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(c);
  }
  He(() => {
    ie.clear();
  });
}
function De(e, t) {
  J(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ce(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let F, Y = [];
function je(e, t) {
  var n, o;
  F = e, F ? (F.enabled = !0, Y.forEach(({ event: r, args: s }) => F.emit(r, ...s)), Y = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    je(s, t);
  }), setTimeout(() => {
    F || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Y = []);
  }, 3e3)) : Y = [];
}
let z = null, kt = null;
const xt = (e) => e.__isTeleport;
function Le(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Le(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
te().requestIdleCallback;
te().cancelIdleCallback;
const Rt = Symbol.for("v-ndc"), It = {};
process.env.NODE_ENV !== "production" && (It.ownKeys = (e) => (_(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
let Tt = null;
function Ue(e, t, n = !1) {
  const o = we || z;
  if (o || Tt) {
    let r = o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && m(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && _(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && _("inject() can only be used inside setup() or functional components.");
}
const At = {}, ze = (e) => Object.getPrototypeOf(e) === At, Ft = jt, $t = Symbol.for("v-scx"), Pt = () => {
  {
    const e = Ue($t);
    return e || process.env.NODE_ENV !== "production" && _(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Ht(e, t, n) {
  return process.env.NODE_ENV !== "production" && !m(t) && _(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Wt(e, t, n);
}
function Wt(e, t, n = L) {
  const { immediate: o, deep: r, flush: s, once: c } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && _(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && _(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), c !== void 0 && _(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = J({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = _);
  const a = t && o || !t && s !== "post";
  let g;
  if (de) {
    if (s === "sync") {
      const u = Pt();
      g = u.__watcherHandles || (u.__watcherHandles = []);
    } else if (!a) {
      const u = () => {
      };
      return u.stop = $, u.resume = $, u.pause = $, u;
    }
  }
  const d = we;
  l.call = (u, h, E) => Fe(u, d, h, E);
  let i = !1;
  s === "post" ? l.scheduler = (u) => {
    Ft(u, d && d.suspense);
  } : s !== "sync" && (i = !0, l.scheduler = (u, h) => {
    h ? u() : $e(u);
  }), l.augmentJob = (u) => {
    t && (u.flags |= 4), i && (u.flags |= 2, d && (u.id = d.uid, u.i = d));
  };
  const f = ht(e, t, l);
  return de && (g ? g.push(f) : a && f()), f;
}
const Mt = (e) => e.__isSuspense;
function jt(e, t) {
  t && t.pendingBranch ? y(e) ? t.effects.push(...e) : t.effects.push(e) : He(e);
}
const Je = Symbol.for("v-fgt"), Lt = Symbol.for("v-txt"), Ut = Symbol.for("v-cmt");
function zt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Jt = (...e) => qe(
  ...e
), Ke = ({ key: e }) => e ?? null, G = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? D(e) || W(e) || m(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function Kt(e, t = null, n = null, o = 0, r = null, s = e === Je ? 0 : 1, c = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ke(t),
    ref: t && G(t),
    scopeId: kt,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: z
  };
  return l ? (Ne(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= D(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && _("VNode created with invalid key (NaN). VNode type:", a.type), a;
}
const qt = process.env.NODE_ENV !== "production" ? Jt : qe;
function qe(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Rt) && (process.env.NODE_ENV !== "production" && !e && _(`Invalid vnode type when creating vnode: ${e}.`), e = Ut), zt(e)) {
    const l = ee(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ne(l, n), l.patchFlag = -2, l;
  }
  if (Qe(e) && (e = e.__vccOpts), t) {
    t = Bt(t);
    let { class: l, style: a } = t;
    l && !D(l) && (t.class = _e(l)), v(a) && (ue(a) && !y(a) && (a = J({}, a)), t.style = ge(a));
  }
  const c = D(e) ? 1 : Mt(e) ? 128 : xt(e) ? 64 : v(e) ? 4 : m(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && ue(e) && (e = R(e), _(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Kt(
    e,
    t,
    n,
    o,
    r,
    c,
    s,
    !0
  );
}
function Bt(e) {
  return e ? ue(e) || ze(e) ? J({}, e) : e : null;
}
function ee(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: c, children: l, transition: a } = e, g = t ? Gt(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && Ke(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? y(s) ? s.concat(G(t)) : [s, G(t)] : G(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && c === -1 && y(l) ? l.map(Be) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Je ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ee(e.ssContent),
    ssFallback: e.ssFallback && ee(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && Le(
    d,
    a.clone(d)
  ), d;
}
function Be(e) {
  const t = ee(e);
  return y(e.children) && (t.children = e.children.map(Be)), t;
}
function Yt(e = " ", t = 0) {
  return qt(Lt, null, e, t);
}
function Ne(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (y(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ne(e, r()), r._c && (r._d = !0));
      return;
    } else
      n = 32, !t._ && !ze(t) && (t._ctx = z);
  else m(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Yt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Gt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = _e([t.class, o.class]));
      else if (r === "style")
        t.style = ge([t.style, o.style]);
      else if (Xe(r)) {
        const s = t[r], c = o[r];
        c && s !== c && !(y(s) && s.includes(c)) && (t[r] = s ? [].concat(s, c) : c);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
let we = null;
{
  const e = te(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((c) => c(s)) : r[0](s);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => we = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => de = n
  );
}
let de = !1;
process.env.NODE_ENV;
const Qt = /(?:^|[-_])(\w)/g, Xt = (e) => e.replace(Qt, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ye(e, t = !0) {
  return m(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ge(e, t, n = !1) {
  let o = Ye(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const c in s)
        if (s[c] === t)
          return c;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Xt(o) : n ? "App" : "Anonymous";
}
function Qe(e) {
  return m(e) && "__vccOpts" in e;
}
function Zt() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(i) {
      if (!v(i))
        return null;
      if (i.__isVue)
        return ["div", e, "VueInstance"];
      if (W(i)) {
        const f = i.value;
        return [
          "div",
          {},
          ["span", e, d(i)],
          "<",
          l(f),
          ">"
        ];
      } else {
        if (j(i))
          return [
            "div",
            {},
            ["span", e, P(i) ? "ShallowReactive" : "Reactive"],
            "<",
            l(i),
            `>${fe(i) ? " (readonly)" : ""}`
          ];
        if (fe(i))
          return [
            "div",
            {},
            ["span", e, P(i) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(i),
            ">"
          ];
      }
      return null;
    },
    hasBody(i) {
      return i && i.__isVue;
    },
    body(i) {
      if (i && i.__isVue)
        return [
          "div",
          {},
          ...s(i.$)
        ];
    }
  };
  function s(i) {
    const f = [];
    i.type.props && i.props && f.push(c("props", R(i.props))), i.setupState !== L && f.push(c("setup", i.setupState)), i.data !== L && f.push(c("data", R(i.data)));
    const u = a(i, "computed");
    u && f.push(c("computed", u));
    const h = a(i, "inject");
    return h && f.push(c("injected", h)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: i }]
    ]), f;
  }
  function c(i, f) {
    return f = J({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        i
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((u) => [
          "div",
          {},
          ["span", o, u + ": "],
          l(f[u], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(i, f = !0) {
    return typeof i == "number" ? ["span", t, i] : typeof i == "string" ? ["span", n, JSON.stringify(i)] : typeof i == "boolean" ? ["span", o, i] : v(i) ? ["object", { object: f ? R(i) : i }] : ["span", n, String(i)];
  }
  function a(i, f) {
    const u = i.type;
    if (m(u))
      return;
    const h = {};
    for (const E in i.ctx)
      g(u, E, f) && (h[E] = i.ctx[E]);
    return h;
  }
  function g(i, f, u) {
    const h = i[u];
    if (y(h) && h.includes(f) || v(h) && f in h || i.extends && g(i.extends, f, u) || i.mixins && i.mixins.some((E) => g(E, f, u)))
      return !0;
  }
  function d(i) {
    return P(i) ? "ShallowRef" : i.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function en() {
  Zt();
}
process.env.NODE_ENV !== "production" && en();
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
var Ce;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ce || (Ce = {}));
var ke;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ke || (ke = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var xe;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(xe || (xe = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const tn = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function nn(e) {
  return Ue(tn);
}
const on = () => ({
  activeConsumers: k,
  hideAll: () => {
    k.forEach((e) => e.hide());
  },
  showAll: () => {
    k.forEach((e) => e.show());
  },
  toggleAll: () => {
    k.forEach((e) => {
      const { visible: t } = e;
      t.value ? e.hide() : e.show();
    });
  },
  destroyAll: () => {
    k.forEach((e) => {
      e.destroy();
    });
  },
  destroyAllWithResolve: () => {
    k.forEach((e) => {
      e.destroyWithResolve();
    });
  },
  destroyAllWithReject: () => {
    k.forEach((e) => {
      e.destroyWithReject();
    });
  }
}), sn = () => {
  const { destroyAll: e } = on(), t = nn();
  return Ht(() => t.path, () => e(), { immediate: !0 });
};
export {
  on as useConsumersManager,
  sn as useDestroyAllOnRouteChange
};
