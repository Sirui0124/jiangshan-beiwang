((function () {
  try {
    var e =
      typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : typeof globalThis < `u`
            ? globalThis
            : typeof self < `u`
              ? self
              : {};
    e.SENTRY_RELEASE = { id: `40a167f5927668c5c0cb74f2fa9fea4891d58042` };
  } catch {}
})(),
  (function () {
    try {
      var e =
        typeof window < `u`
          ? window
          : typeof global < `u`
            ? global
            : typeof globalThis < `u`
              ? globalThis
              : typeof self < `u`
                ? self
                : {};
      e.SENTRY_RELEASE = { id: `40a167f5927668c5c0cb74f2fa9fea4891d58042` };
    } catch {}
  })());
try {
  (function () {
    var e =
        typeof window < `u`
          ? window
          : typeof global < `u`
            ? global
            : typeof globalThis < `u`
              ? globalThis
              : typeof self < `u`
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = `7f0bb5a8-eae8-42ee-8eda-795f189d224a`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-7f0bb5a8-eae8-42ee-8eda-795f189d224a`));
  })();
} catch {}
try {
  (function () {
    var e =
        typeof window < `u`
          ? window
          : typeof global < `u`
            ? global
            : typeof globalThis < `u`
              ? globalThis
              : typeof self < `u`
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = `422c0096-be9a-42db-8271-f07f59a03c4e`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-422c0096-be9a-42db-8271-f07f59a03c4e`));
  })();
} catch {}
import { n as e } from "./rolldown-runtime-puNP7PS7.js";
function t(e) {
  let t = Object.create(null);
  for (let n of e.split(`,`)) t[n] = 1;
  return (e) => e in t;
}
var n = {},
  r = [],
  i = () => {},
  a = () => !1,
  o = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  s = (e) => e.startsWith(`onUpdate:`),
  c = Object.assign,
  l = (e, t) => {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  u = Object.prototype.hasOwnProperty,
  d = (e, t) => u.call(e, t),
  f = Array.isArray,
  p = (e) => C(e) === `[object Map]`,
  m = (e) => C(e) === `[object Set]`,
  h = (e) => C(e) === `[object Date]`,
  g = (e) => C(e) === `[object RegExp]`,
  _ = (e) => typeof e == `function`,
  v = (e) => typeof e == `string`,
  y = (e) => typeof e == `symbol`,
  b = (e) => typeof e == `object` && !!e,
  x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch),
  S = Object.prototype.toString,
  C = (e) => S.call(e),
  w = (e) => C(e).slice(8, -1),
  T = (e) => C(e) === `[object Object]`,
  E = (e) => v(e) && e !== `NaN` && e[0] !== `-` && `` + parseInt(e, 10) === e,
  D = t(
    `,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`,
  ),
  O = (e) => {
    let t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  ee = /-\w/g,
  k = O((e) => e.replace(ee, (e) => e.slice(1).toUpperCase())),
  te = /\B([A-Z])/g,
  A = O((e) => e.replace(te, `-$1`).toLowerCase()),
  ne = O((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  re = O((e) => (e ? `on${ne(e)}` : ``)),
  j = (e, t) => !Object.is(e, t),
  ie = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  ae = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  oe = (e) => {
    let t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  se = (e) => {
    let t = v(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  },
  ce,
  le = () =>
    (ce ||=
      typeof globalThis < `u`
        ? globalThis
        : typeof self < `u`
          ? self
          : typeof window < `u`
            ? window
            : typeof global < `u`
              ? global
              : {}),
  ue = t(
    `Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol`,
  );
function de(e) {
  if (f(e)) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
      let r = e[n],
        i = v(r) ? he(r) : de(r);
      if (i) for (let e in i) t[e] = i[e];
    }
    return t;
  } else if (v(e) || b(e)) return e;
}
var fe = /;(?![^(]*\))/g,
  pe = /:([^]+)/,
  me = /\/\*[^]*?\*\//g;
function he(e) {
  let t = {};
  return (
    e
      .replace(me, ``)
      .split(fe)
      .forEach((e) => {
        if (e) {
          let n = e.split(pe);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function ge(e) {
  let t = ``;
  if (v(e)) t = e;
  else if (f(e))
    for (let n = 0; n < e.length; n++) {
      let r = ge(e[n]);
      r && (t += r + ` `);
    }
  else if (b(e)) for (let n in e) e[n] && (t += n + ` `);
  return t.trim();
}
function _e(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return (t && !v(t) && (e.class = ge(t)), n && (e.style = de(n)), e);
}
var ve = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,
  ye = t(ve);
ve + ``;
function be(e) {
  return !!e || e === ``;
}
function xe(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = Se(e[r], t[r]);
  return n;
}
function Se(e, t) {
  if (e === t) return !0;
  let n = h(e),
    r = h(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = y(e)), (r = y(t)), n || r)) return e === t;
  if (((n = f(e)), (r = f(t)), n || r)) return n && r ? xe(e, t) : !1;
  if (((n = b(e)), (r = b(t)), n || r)) {
    if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (let n in e) {
      let r = e.hasOwnProperty(n),
        i = t.hasOwnProperty(n);
      if ((r && !i) || (!r && i) || !Se(e[n], t[n])) return !1;
    }
  }
  return String(e) === String(t);
}
function Ce(e, t) {
  return e.findIndex((e) => Se(e, t));
}
var we = (e) => !!(e && e.__v_isRef === !0),
  M = (e) =>
    v(e)
      ? e
      : e == null
        ? ``
        : f(e) || (b(e) && (e.toString === S || !_(e.toString)))
          ? we(e)
            ? M(e.value)
            : JSON.stringify(e, Te, 2)
          : String(e),
  Te = (e, t) =>
    we(t)
      ? Te(e, t.value)
      : p(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (e, [t, n], r) => ((e[Ee(t, r) + ` =>`] = n), e),
              {},
            ),
          }
        : m(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) }
          : y(t)
            ? Ee(t)
            : b(t) && !f(t) && !T(t)
              ? String(t)
              : t,
  Ee = (e, t = ``) => (y(e) ? `Symbol(${e.description ?? t})` : e);
function De(e) {
  return e == null
    ? `initial`
    : typeof e == `string`
      ? e === ``
        ? ` `
        : e
      : String(e);
}
var Oe,
  ke = class {
    constructor(e = !1) {
      ((this.detached = e),
        (this._active = !0),
        (this._on = 0),
        (this.effects = []),
        (this.cleanups = []),
        (this._isPaused = !1),
        (this.parent = Oe),
        !e && Oe && (this.index = (Oe.scopes ||= []).push(this) - 1));
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = !0;
        let e, t;
        if (this.scopes)
          for (e = 0, t = this.scopes.length; e < t; e++)
            this.scopes[e].pause();
        for (e = 0, t = this.effects.length; e < t; e++)
          this.effects[e].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = !1;
        let e, t;
        if (this.scopes)
          for (e = 0, t = this.scopes.length; e < t; e++)
            this.scopes[e].resume();
        for (e = 0, t = this.effects.length; e < t; e++)
          this.effects[e].resume();
      }
    }
    run(e) {
      if (this._active) {
        let t = Oe;
        try {
          return ((Oe = this), e());
        } finally {
          Oe = t;
        }
      }
    }
    on() {
      ++this._on === 1 && ((this.prevScope = Oe), (Oe = this));
    }
    off() {
      this._on > 0 &&
        --this._on === 0 &&
        ((Oe = this.prevScope), (this.prevScope = void 0));
    }
    stop(e) {
      if (this._active) {
        this._active = !1;
        let t, n;
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
        for (
          this.effects.length = 0, t = 0, n = this.cleanups.length;
          t < n;
          t++
        )
          this.cleanups[t]();
        if (((this.cleanups.length = 0), this.scopes)) {
          for (t = 0, n = this.scopes.length; t < n; t++)
            this.scopes[t].stop(!0);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !e) {
          let e = this.parent.scopes.pop();
          e &&
            e !== this &&
            ((this.parent.scopes[this.index] = e), (e.index = this.index));
        }
        this.parent = void 0;
      }
    }
  };
function Ae(e) {
  return new ke(e);
}
function je() {
  return Oe;
}
function Me(e, t = !1) {
  Oe && Oe.cleanups.push(e);
}
var N,
  Ne = new WeakSet(),
  Pe = class {
    constructor(e) {
      ((this.fn = e),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 5),
        (this.next = void 0),
        (this.cleanup = void 0),
        (this.scheduler = void 0),
        Oe && Oe.active && Oe.effects.push(this));
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 &&
        ((this.flags &= -65),
        Ne.has(this) && (Ne.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Re(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      ((this.flags |= 2), $e(this), Ve(this));
      let e = N,
        t = Ye;
      ((N = this), (Ye = !0));
      try {
        return this.fn();
      } finally {
        (He(this), (N = e), (Ye = t), (this.flags &= -3));
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let e = this.deps; e; e = e.nextDep) Ge(e);
        ((this.deps = this.depsTail = void 0),
          $e(this),
          this.onStop && this.onStop(),
          (this.flags &= -2));
      }
    }
    trigger() {
      this.flags & 64
        ? Ne.add(this)
        : this.scheduler
          ? this.scheduler()
          : this.runIfDirty();
    }
    runIfDirty() {
      Ue(this) && this.run();
    }
    get dirty() {
      return Ue(this);
    }
  },
  Fe = 0,
  Ie,
  Le;
function Re(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = Le), (Le = e));
    return;
  }
  ((e.next = Ie), (Ie = e));
}
function ze() {
  Fe++;
}
function Be() {
  if (--Fe > 0) return;
  if (Le) {
    let e = Le;
    for (Le = void 0; e; ) {
      let t = e.next;
      ((e.next = void 0), (e.flags &= -9), (e = t));
    }
  }
  let e;
  for (; Ie; ) {
    let t = Ie;
    for (Ie = void 0; t; ) {
      let n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (t) {
          e ||= t;
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ve(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function He(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    let e = r.prevDep;
    (r.version === -1 ? (r === n && (n = e), Ge(r), Ke(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = e));
  }
  ((e.deps = t), (e.depsTail = n));
}
function Ue(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (We(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function We(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === et) ||
    ((e.globalVersion = et),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Ue(e)))
  )
    return;
  e.flags |= 2;
  let t = e.dep,
    n = N,
    r = Ye;
  ((N = e), (Ye = !0));
  try {
    Ve(e);
    let n = e.fn(e._value);
    (t.version === 0 || j(n, e._value)) &&
      ((e.flags |= 128), (e._value = n), t.version++);
  } catch (e) {
    throw (t.version++, e);
  } finally {
    ((N = n), (Ye = r), He(e), (e.flags &= -3));
  }
}
function Ge(e, t = !1) {
  let { dep: n, prevSub: r, nextSub: i } = e;
  if (
    (r && ((r.nextSub = i), (e.prevSub = void 0)),
    i && ((i.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let e = n.computed.deps; e; e = e.nextDep) Ge(e, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ke(e) {
  let { prevDep: t, nextDep: n } = e;
  (t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0)));
}
function qe(e, t) {
  e.effect instanceof Pe && (e = e.effect.fn);
  let n = new Pe(e);
  t && c(n, t);
  try {
    n.run();
  } catch (e) {
    throw (n.stop(), e);
  }
  let r = n.run.bind(n);
  return ((r.effect = n), r);
}
function Je(e) {
  e.effect.stop();
}
var Ye = !0,
  Xe = [];
function Ze() {
  (Xe.push(Ye), (Ye = !1));
}
function Qe() {
  let e = Xe.pop();
  Ye = e === void 0 ? !0 : e;
}
function $e(e) {
  let { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    let e = N;
    N = void 0;
    try {
      t();
    } finally {
      N = e;
    }
  }
}
var et = 0,
  tt = class {
    constructor(e, t) {
      ((this.sub = e),
        (this.dep = t),
        (this.version = t.version),
        (this.nextDep =
          this.prevDep =
          this.nextSub =
          this.prevSub =
          this.prevActiveLink =
            void 0));
    }
  },
  nt = class {
    constructor(e) {
      ((this.computed = e),
        (this.version = 0),
        (this.activeLink = void 0),
        (this.subs = void 0),
        (this.map = void 0),
        (this.key = void 0),
        (this.sc = 0),
        (this.__v_skip = !0));
    }
    track(e) {
      if (!N || !Ye || N === this.computed) return;
      let t = this.activeLink;
      if (t === void 0 || t.sub !== N)
        ((t = this.activeLink = new tt(N, this)),
          N.deps
            ? ((t.prevDep = N.depsTail),
              (N.depsTail.nextDep = t),
              (N.depsTail = t))
            : (N.deps = N.depsTail = t),
          rt(t));
      else if (t.version === -1 && ((t.version = this.version), t.nextDep)) {
        let e = t.nextDep;
        ((e.prevDep = t.prevDep),
          t.prevDep && (t.prevDep.nextDep = e),
          (t.prevDep = N.depsTail),
          (t.nextDep = void 0),
          (N.depsTail.nextDep = t),
          (N.depsTail = t),
          N.deps === t && (N.deps = e));
      }
      return t;
    }
    trigger(e) {
      (this.version++, et++, this.notify(e));
    }
    notify(e) {
      ze();
      try {
        for (let e = this.subs; e; e = e.prevSub)
          e.sub.notify() && e.sub.dep.notify();
      } finally {
        Be();
      }
    }
  };
function rt(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    let t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let e = t.deps; e; e = e.nextDep) rt(e);
    }
    let n = e.dep.subs;
    (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
  }
}
var it = new WeakMap(),
  at = Symbol(``),
  ot = Symbol(``),
  st = Symbol(``);
function ct(e, t, n) {
  if (Ye && N) {
    let t = it.get(e);
    t || it.set(e, (t = new Map()));
    let r = t.get(n);
    (r || (t.set(n, (r = new nt())), (r.map = t), (r.key = n)), r.track());
  }
}
function lt(e, t, n, r, i, a) {
  let o = it.get(e);
  if (!o) {
    et++;
    return;
  }
  let s = (e) => {
    e && e.trigger();
  };
  if ((ze(), t === `clear`)) o.forEach(s);
  else {
    let i = f(e),
      a = i && E(n);
    if (i && n === `length`) {
      let e = Number(r);
      o.forEach((t, n) => {
        (n === `length` || n === st || (!y(n) && n >= e)) && s(t);
      });
    } else
      switch (
        ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(st)), t)
      ) {
        case `add`:
          i ? a && s(o.get(`length`)) : (s(o.get(at)), p(e) && s(o.get(ot)));
          break;
        case `delete`:
          i || (s(o.get(at)), p(e) && s(o.get(ot)));
          break;
        case `set`:
          p(e) && s(o.get(at));
          break;
      }
  }
  Be();
}
function ut(e, t) {
  let n = it.get(e);
  return n && n.get(t);
}
function dt(e) {
  let t = P(e);
  return t === e ? t : (ct(t, `iterate`, st), en(e) ? t : t.map(rn));
}
function ft(e) {
  return (ct((e = P(e)), `iterate`, st), e);
}
function pt(e, t) {
  return $t(e) ? (Qt(e) ? an(rn(t)) : an(t)) : rn(t);
}
var mt = {
  __proto__: null,
  [Symbol.iterator]() {
    return ht(this, Symbol.iterator, (e) => pt(this, e));
  },
  concat(...e) {
    return dt(this).concat(...e.map((e) => (f(e) ? dt(e) : e)));
  },
  entries() {
    return ht(this, `entries`, (e) => ((e[1] = pt(this, e[1])), e));
  },
  every(e, t) {
    return _t(this, `every`, e, t, void 0, arguments);
  },
  filter(e, t) {
    return _t(
      this,
      `filter`,
      e,
      t,
      (e) => e.map((e) => pt(this, e)),
      arguments,
    );
  },
  find(e, t) {
    return _t(this, `find`, e, t, (e) => pt(this, e), arguments);
  },
  findIndex(e, t) {
    return _t(this, `findIndex`, e, t, void 0, arguments);
  },
  findLast(e, t) {
    return _t(this, `findLast`, e, t, (e) => pt(this, e), arguments);
  },
  findLastIndex(e, t) {
    return _t(this, `findLastIndex`, e, t, void 0, arguments);
  },
  forEach(e, t) {
    return _t(this, `forEach`, e, t, void 0, arguments);
  },
  includes(...e) {
    return yt(this, `includes`, e);
  },
  indexOf(...e) {
    return yt(this, `indexOf`, e);
  },
  join(e) {
    return dt(this).join(e);
  },
  lastIndexOf(...e) {
    return yt(this, `lastIndexOf`, e);
  },
  map(e, t) {
    return _t(this, `map`, e, t, void 0, arguments);
  },
  pop() {
    return bt(this, `pop`);
  },
  push(...e) {
    return bt(this, `push`, e);
  },
  reduce(e, ...t) {
    return vt(this, `reduce`, e, t);
  },
  reduceRight(e, ...t) {
    return vt(this, `reduceRight`, e, t);
  },
  shift() {
    return bt(this, `shift`);
  },
  some(e, t) {
    return _t(this, `some`, e, t, void 0, arguments);
  },
  splice(...e) {
    return bt(this, `splice`, e);
  },
  toReversed() {
    return dt(this).toReversed();
  },
  toSorted(e) {
    return dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return bt(this, `unshift`, e);
  },
  values() {
    return ht(this, `values`, (e) => pt(this, e));
  },
};
function ht(e, t, n) {
  let r = ft(e),
    i = r[t]();
  return (
    r !== e &&
      !en(e) &&
      ((i._next = i.next),
      (i.next = () => {
        let e = i._next();
        return (e.done || (e.value = n(e.value)), e);
      })),
    i
  );
}
var gt = Array.prototype;
function _t(e, t, n, r, i, a) {
  let o = ft(e),
    s = o !== e && !en(e),
    c = o[t];
  if (c !== gt[t]) {
    let t = c.apply(e, a);
    return s ? rn(t) : t;
  }
  let l = n;
  o !== e &&
    (s
      ? (l = function (t, r) {
          return n.call(this, pt(e, t), r, e);
        })
      : n.length > 2 &&
        (l = function (t, r) {
          return n.call(this, t, r, e);
        }));
  let u = c.call(o, l, r);
  return s && i ? i(u) : u;
}
function vt(e, t, n, r) {
  let i = ft(e),
    a = n;
  return (
    i !== e &&
      (en(e)
        ? n.length > 3 &&
          (a = function (t, r, i) {
            return n.call(this, t, r, i, e);
          })
        : (a = function (t, r, i) {
            return n.call(this, t, pt(e, r), i, e);
          })),
    i[t](a, ...r)
  );
}
function yt(e, t, n) {
  let r = P(e);
  ct(r, `iterate`, st);
  let i = r[t](...n);
  return (i === -1 || i === !1) && tn(n[0])
    ? ((n[0] = P(n[0])), r[t](...n))
    : i;
}
function bt(e, t, n = []) {
  (Ze(), ze());
  let r = P(e)[t].apply(e, n);
  return (Be(), Qe(), r);
}
var xt = t(`__proto__,__v_isRef,__isVue`),
  St = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== `arguments` && e !== `caller`)
      .map((e) => Symbol[e])
      .filter(y),
  );
function Ct(e) {
  y(e) || (e = String(e));
  let t = P(this);
  return (ct(t, `has`, e), t.hasOwnProperty(e));
}
var wt = class {
    constructor(e = !1, t = !1) {
      ((this._isReadonly = e), (this._isShallow = t));
    }
    get(e, t, n) {
      if (t === `__v_skip`) return e.__v_skip;
      let r = this._isReadonly,
        i = this._isShallow;
      if (t === `__v_isReactive`) return !r;
      if (t === `__v_isReadonly`) return r;
      if (t === `__v_isShallow`) return i;
      if (t === `__v_raw`)
        return n === (r ? (i ? Wt : Ut) : i ? Ht : Vt).get(e) ||
          Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
          ? e
          : void 0;
      let a = f(e);
      if (!r) {
        let e;
        if (a && (e = mt[t])) return e;
        if (t === `hasOwnProperty`) return Ct;
      }
      let o = Reflect.get(e, t, F(e) ? e : n);
      if ((y(t) ? St.has(t) : xt(t)) || (r || ct(e, `get`, t), i)) return o;
      if (F(o)) {
        let e = a && E(t) ? o : o.value;
        return r && b(e) ? Yt(e) : e;
      }
      return b(o) ? (r ? Yt(o) : qt(o)) : o;
    }
  },
  Tt = class extends wt {
    constructor(e = !1) {
      super(!1, e);
    }
    set(e, t, n, r) {
      let i = e[t],
        a = f(e) && E(t);
      if (!this._isShallow) {
        let e = $t(i);
        if ((!en(n) && !$t(n) && ((i = P(i)), (n = P(n))), !a && F(i) && !F(n)))
          return (e || (i.value = n), !0);
      }
      let o = a ? Number(t) < e.length : d(e, t),
        s = Reflect.set(e, t, n, F(e) ? e : r);
      return (
        e === P(r) &&
          (o ? j(n, i) && lt(e, `set`, t, n, i) : lt(e, `add`, t, n)),
        s
      );
    }
    deleteProperty(e, t) {
      let n = d(e, t),
        r = e[t],
        i = Reflect.deleteProperty(e, t);
      return (i && n && lt(e, `delete`, t, void 0, r), i);
    }
    has(e, t) {
      let n = Reflect.has(e, t);
      return ((!y(t) || !St.has(t)) && ct(e, `has`, t), n);
    }
    ownKeys(e) {
      return (ct(e, `iterate`, f(e) ? `length` : at), Reflect.ownKeys(e));
    }
  },
  Et = class extends wt {
    constructor(e = !1) {
      super(!0, e);
    }
    set(e, t) {
      return !0;
    }
    deleteProperty(e, t) {
      return !0;
    }
  },
  Dt = new Tt(),
  Ot = new Et(),
  kt = new Tt(!0),
  At = new Et(!0),
  jt = (e) => e,
  Mt = (e) => Reflect.getPrototypeOf(e);
function Nt(e, t, n) {
  return function (...r) {
    let i = this.__v_raw,
      a = P(i),
      o = p(a),
      s = e === `entries` || (e === Symbol.iterator && o),
      c = e === `keys` && o,
      l = i[e](...r),
      u = n ? jt : t ? an : rn;
    return (
      !t && ct(a, `iterate`, c ? ot : at),
      {
        next() {
          let { value: e, done: t } = l.next();
          return t
            ? { value: e, done: t }
            : { value: s ? [u(e[0]), u(e[1])] : u(e), done: t };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Pt(e) {
  return function (...t) {
    return e === `delete` ? !1 : e === `clear` ? void 0 : this;
  };
}
function Ft(e, t) {
  let n = {
    get(n) {
      let r = this.__v_raw,
        i = P(r),
        a = P(n);
      e || (j(n, a) && ct(i, `get`, n), ct(i, `get`, a));
      let { has: o } = Mt(i),
        s = t ? jt : e ? an : rn;
      if (o.call(i, n)) return s(r.get(n));
      if (o.call(i, a)) return s(r.get(a));
      r !== i && r.get(n);
    },
    get size() {
      let t = this.__v_raw;
      return (!e && ct(P(t), `iterate`, at), t.size);
    },
    has(t) {
      let n = this.__v_raw,
        r = P(n),
        i = P(t);
      return (
        e || (j(t, i) && ct(r, `has`, t), ct(r, `has`, i)),
        t === i ? n.has(t) : n.has(t) || n.has(i)
      );
    },
    forEach(n, r) {
      let i = this,
        a = i.__v_raw,
        o = P(a),
        s = t ? jt : e ? an : rn;
      return (
        !e && ct(o, `iterate`, at),
        a.forEach((e, t) => n.call(r, s(e), s(t), i))
      );
    },
  };
  return (
    c(
      n,
      e
        ? {
            add: Pt(`add`),
            set: Pt(`set`),
            delete: Pt(`delete`),
            clear: Pt(`clear`),
          }
        : {
            add(e) {
              !t && !en(e) && !$t(e) && (e = P(e));
              let n = P(this);
              return (
                Mt(n).has.call(n, e) || (n.add(e), lt(n, `add`, e, e)),
                this
              );
            },
            set(e, n) {
              !t && !en(n) && !$t(n) && (n = P(n));
              let r = P(this),
                { has: i, get: a } = Mt(r),
                o = i.call(r, e);
              o ||= ((e = P(e)), i.call(r, e));
              let s = a.call(r, e);
              return (
                r.set(e, n),
                o ? j(n, s) && lt(r, `set`, e, n, s) : lt(r, `add`, e, n),
                this
              );
            },
            delete(e) {
              let t = P(this),
                { has: n, get: r } = Mt(t),
                i = n.call(t, e);
              i ||= ((e = P(e)), n.call(t, e));
              let a = r ? r.call(t, e) : void 0,
                o = t.delete(e);
              return (i && lt(t, `delete`, e, void 0, a), o);
            },
            clear() {
              let e = P(this),
                t = e.size !== 0,
                n = e.clear();
              return (t && lt(e, `clear`, void 0, void 0, void 0), n);
            },
          },
    ),
    [`keys`, `values`, `entries`, Symbol.iterator].forEach((r) => {
      n[r] = Nt(r, e, t);
    }),
    n
  );
}
function It(e, t) {
  let n = Ft(e, t);
  return (t, r, i) =>
    r === `__v_isReactive`
      ? !e
      : r === `__v_isReadonly`
        ? e
        : r === `__v_raw`
          ? t
          : Reflect.get(d(n, r) && r in t ? n : t, r, i);
}
var Lt = { get: It(!1, !1) },
  Rt = { get: It(!1, !0) },
  zt = { get: It(!0, !1) },
  Bt = { get: It(!0, !0) },
  Vt = new WeakMap(),
  Ht = new WeakMap(),
  Ut = new WeakMap(),
  Wt = new WeakMap();
function Gt(e) {
  switch (e) {
    case `Object`:
    case `Array`:
      return 1;
    case `Map`:
    case `Set`:
    case `WeakMap`:
    case `WeakSet`:
      return 2;
    default:
      return 0;
  }
}
function Kt(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gt(w(e));
}
function qt(e) {
  return $t(e) ? e : Zt(e, !1, Dt, Lt, Vt);
}
function Jt(e) {
  return Zt(e, !1, kt, Rt, Ht);
}
function Yt(e) {
  return Zt(e, !0, Ot, zt, Ut);
}
function Xt(e) {
  return Zt(e, !0, At, Bt, Wt);
}
function Zt(e, t, n, r, i) {
  if (!b(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  let a = Kt(e);
  if (a === 0) return e;
  let o = i.get(e);
  if (o) return o;
  let s = new Proxy(e, a === 2 ? r : n);
  return (i.set(e, s), s);
}
function Qt(e) {
  return $t(e) ? Qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
function en(e) {
  return !!(e && e.__v_isShallow);
}
function tn(e) {
  return e ? !!e.__v_raw : !1;
}
function P(e) {
  let t = e && e.__v_raw;
  return t ? P(t) : e;
}
function nn(e) {
  return (
    !d(e, `__v_skip`) && Object.isExtensible(e) && ae(e, `__v_skip`, !0),
    e
  );
}
var rn = (e) => (b(e) ? qt(e) : e),
  an = (e) => (b(e) ? Yt(e) : e);
function F(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function on(e) {
  return cn(e, !1);
}
function sn(e) {
  return cn(e, !0);
}
function cn(e, t) {
  return F(e) ? e : new ln(e, t);
}
var ln = class {
  constructor(e, t) {
    ((this.dep = new nt()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = t ? e : P(e)),
      (this._value = t ? e : rn(e)),
      (this.__v_isShallow = t));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(e) {
    let t = this._rawValue,
      n = this.__v_isShallow || en(e) || $t(e);
    ((e = n ? e : P(e)),
      j(e, t) &&
        ((this._rawValue = e),
        (this._value = n ? e : rn(e)),
        this.dep.trigger()));
  }
};
function un(e) {
  e.dep && e.dep.trigger();
}
function dn(e) {
  return F(e) ? e.value : e;
}
function fn(e) {
  return _(e) ? e() : dn(e);
}
var pn = {
  get: (e, t, n) => (t === `__v_raw` ? e : dn(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    let i = e[t];
    return F(i) && !F(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function mn(e) {
  return Qt(e) ? e : new Proxy(e, pn);
}
var hn = class {
  constructor(e) {
    ((this.__v_isRef = !0), (this._value = void 0));
    let t = (this.dep = new nt()),
      { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
    ((this._get = n), (this._set = r));
  }
  get value() {
    return (this._value = this._get());
  }
  set value(e) {
    this._set(e);
  }
};
function gn(e) {
  return new hn(e);
}
function _n(e) {
  let t = f(e) ? Array(e.length) : {};
  for (let n in e) t[n] = xn(e, n);
  return t;
}
var vn = class {
    constructor(e, t, n) {
      ((this._object = e),
        (this._key = t),
        (this._defaultValue = n),
        (this.__v_isRef = !0),
        (this._value = void 0),
        (this._raw = P(e)));
      let r = !0,
        i = e;
      if (!f(e) || !E(String(t)))
        do r = !tn(i) || en(i);
        while (r && (i = i.__v_raw));
      this._shallow = r;
    }
    get value() {
      let e = this._object[this._key];
      return (
        this._shallow && (e = dn(e)),
        (this._value = e === void 0 ? this._defaultValue : e)
      );
    }
    set value(e) {
      if (this._shallow && F(this._raw[this._key])) {
        let t = this._object[this._key];
        if (F(t)) {
          t.value = e;
          return;
        }
      }
      this._object[this._key] = e;
    }
    get dep() {
      return ut(this._raw, this._key);
    }
  },
  yn = class {
    constructor(e) {
      ((this._getter = e),
        (this.__v_isRef = !0),
        (this.__v_isReadonly = !0),
        (this._value = void 0));
    }
    get value() {
      return (this._value = this._getter());
    }
  };
function bn(e, t, n) {
  return F(e)
    ? e
    : _(e)
      ? new yn(e)
      : b(e) && arguments.length > 1
        ? xn(e, t, n)
        : on(e);
}
function xn(e, t, n) {
  return new vn(e, t, n);
}
var Sn = class {
  constructor(e, t, n) {
    ((this.fn = e),
      (this.setter = t),
      (this._value = void 0),
      (this.dep = new nt(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = et - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !t),
      (this.isSSR = n));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && N !== this))
      return (Re(this, !0), !0);
  }
  get value() {
    let e = this.dep.track();
    return (We(this), e && (e.version = this.dep.version), this._value);
  }
  set value(e) {
    this.setter && this.setter(e);
  }
};
function Cn(e, t, n = !1) {
  let r, i;
  return (_(e) ? (r = e) : ((r = e.get), (i = e.set)), new Sn(r, i, n));
}
var wn = { GET: `get`, HAS: `has`, ITERATE: `iterate` },
  Tn = { SET: `set`, ADD: `add`, DELETE: `delete`, CLEAR: `clear` },
  En = {},
  Dn = new WeakMap(),
  On = void 0;
function kn() {
  return On;
}
function An(e, t = !1, n = On) {
  if (n) {
    let t = Dn.get(n);
    (t || Dn.set(n, (t = [])), t.push(e));
  }
}
function jn(e, t, r = n) {
  let {
      immediate: a,
      deep: o,
      once: s,
      scheduler: c,
      augmentJob: u,
      call: d,
    } = r,
    p = (e) => (o ? e : en(e) || o === !1 || o === 0 ? Mn(e, 1) : Mn(e)),
    m,
    h,
    g,
    v,
    y = !1,
    b = !1;
  if (
    (F(e)
      ? ((h = () => e.value), (y = en(e)))
      : Qt(e)
        ? ((h = () => p(e)), (y = !0))
        : f(e)
          ? ((b = !0),
            (y = e.some((e) => Qt(e) || en(e))),
            (h = () =>
              e.map((e) => {
                if (F(e)) return e.value;
                if (Qt(e)) return p(e);
                if (_(e)) return d ? d(e, 2) : e();
              })))
          : (h = _(e)
              ? t
                ? d
                  ? () => d(e, 2)
                  : e
                : () => {
                    if (g) {
                      Ze();
                      try {
                        g();
                      } finally {
                        Qe();
                      }
                    }
                    let t = On;
                    On = m;
                    try {
                      return d ? d(e, 3, [v]) : e(v);
                    } finally {
                      On = t;
                    }
                  }
              : i),
    t && o)
  ) {
    let e = h,
      t = o === !0 ? 1 / 0 : o;
    h = () => Mn(e(), t);
  }
  let x = je(),
    S = () => {
      (m.stop(), x && x.active && l(x.effects, m));
    };
  if (s && t) {
    let e = t;
    t = (...t) => {
      (e(...t), S());
    };
  }
  let C = b ? Array(e.length).fill(En) : En,
    w = (e) => {
      if (!(!(m.flags & 1) || (!m.dirty && !e)))
        if (t) {
          let e = m.run();
          if (o || y || (b ? e.some((e, t) => j(e, C[t])) : j(e, C))) {
            g && g();
            let n = On;
            On = m;
            try {
              let n = [e, C === En ? void 0 : b && C[0] === En ? [] : C, v];
              ((C = e), d ? d(t, 3, n) : t(...n));
            } finally {
              On = n;
            }
          }
        } else m.run();
    };
  return (
    u && u(w),
    (m = new Pe(h)),
    (m.scheduler = c ? () => c(w, !1) : w),
    (v = (e) => An(e, !1, m)),
    (g = m.onStop =
      () => {
        let e = Dn.get(m);
        if (e) {
          if (d) d(e, 4);
          else for (let t of e) t();
          Dn.delete(m);
        }
      }),
    t ? (a ? w(!0) : (C = m.run())) : c ? c(w.bind(null, !0), !0) : m.run(),
    (S.pause = m.pause.bind(m)),
    (S.resume = m.resume.bind(m)),
    (S.stop = S),
    S
  );
}
function Mn(e, t = 1 / 0, n) {
  if (
    t <= 0 ||
    !b(e) ||
    e.__v_skip ||
    ((n ||= new Map()), (n.get(e) || 0) >= t)
  )
    return e;
  if ((n.set(e, t), t--, F(e))) Mn(e.value, t, n);
  else if (f(e)) for (let r = 0; r < e.length; r++) Mn(e[r], t, n);
  else if (m(e) || p(e))
    e.forEach((e) => {
      Mn(e, t, n);
    });
  else if (T(e)) {
    for (let r in e) Mn(e[r], t, n);
    for (let r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Mn(e[r], t, n);
  }
  return e;
}
var Nn = [];
function Pn(e) {
  Nn.push(e);
}
function Fn() {
  Nn.pop();
}
function In(e, t) {}
var Ln = {
    SETUP_FUNCTION: 0,
    0: `SETUP_FUNCTION`,
    RENDER_FUNCTION: 1,
    1: `RENDER_FUNCTION`,
    NATIVE_EVENT_HANDLER: 5,
    5: `NATIVE_EVENT_HANDLER`,
    COMPONENT_EVENT_HANDLER: 6,
    6: `COMPONENT_EVENT_HANDLER`,
    VNODE_HOOK: 7,
    7: `VNODE_HOOK`,
    DIRECTIVE_HOOK: 8,
    8: `DIRECTIVE_HOOK`,
    TRANSITION_HOOK: 9,
    9: `TRANSITION_HOOK`,
    APP_ERROR_HANDLER: 10,
    10: `APP_ERROR_HANDLER`,
    APP_WARN_HANDLER: 11,
    11: `APP_WARN_HANDLER`,
    FUNCTION_REF: 12,
    12: `FUNCTION_REF`,
    ASYNC_COMPONENT_LOADER: 13,
    13: `ASYNC_COMPONENT_LOADER`,
    SCHEDULER: 14,
    14: `SCHEDULER`,
    COMPONENT_UPDATE: 15,
    15: `COMPONENT_UPDATE`,
    APP_UNMOUNT_CLEANUP: 16,
    16: `APP_UNMOUNT_CLEANUP`,
  },
  Rn = {
    sp: `serverPrefetch hook`,
    bc: `beforeCreate hook`,
    c: `created hook`,
    bm: `beforeMount hook`,
    m: `mounted hook`,
    bu: `beforeUpdate hook`,
    u: `updated`,
    bum: `beforeUnmount hook`,
    um: `unmounted hook`,
    a: `activated hook`,
    da: `deactivated hook`,
    ec: `errorCaptured hook`,
    rtc: `renderTracked hook`,
    rtg: `renderTriggered hook`,
    0: `setup function`,
    1: `render function`,
    2: `watcher getter`,
    3: `watcher callback`,
    4: `watcher cleanup function`,
    5: `native event handler`,
    6: `component event handler`,
    7: `vnode hook`,
    8: `directive hook`,
    9: `transition hook`,
    10: `app errorHandler`,
    11: `app warnHandler`,
    12: `ref function`,
    13: `async component loader`,
    14: `scheduler flush`,
    15: `component update`,
    16: `app unmount cleanup function`,
  };
function zn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (e) {
    Vn(e, t, n);
  }
}
function Bn(e, t, n, r) {
  if (_(e)) {
    let i = zn(e, t, n, r);
    return (
      i &&
        x(i) &&
        i.catch((e) => {
          Vn(e, t, n);
        }),
      i
    );
  }
  if (f(e)) {
    let i = [];
    for (let a = 0; a < e.length; a++) i.push(Bn(e[a], t, n, r));
    return i;
  }
}
function Vn(e, t, r, i = !0) {
  let a = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: s } =
      (t && t.appContext.config) || n;
  if (t) {
    let n = t.parent,
      i = t.proxy,
      a = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; n; ) {
      let t = n.ec;
      if (t) {
        for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
      }
      n = n.parent;
    }
    if (o) {
      (Ze(), zn(o, null, 10, [e, i, a]), Qe());
      return;
    }
  }
  Hn(e, r, a, i, s);
}
function Hn(e, t, n, r = !0, i = !1) {
  if (i) throw e;
  console.error(e);
}
var Un = [],
  Wn = -1,
  Gn = [],
  Kn = null,
  qn = 0,
  Jn = Promise.resolve(),
  Yn = null;
function Xn(e) {
  let t = Yn || Jn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zn(e) {
  let t = Wn + 1,
    n = Un.length;
  for (; t < n; ) {
    let r = (t + n) >>> 1,
      i = Un[r],
      a = rr(i);
    a < e || (a === e && i.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Qn(e) {
  if (!(e.flags & 1)) {
    let t = rr(e),
      n = Un[Un.length - 1];
    (!n || (!(e.flags & 2) && t >= rr(n)) ? Un.push(e) : Un.splice(Zn(t), 0, e),
      (e.flags |= 1),
      $n());
  }
}
function $n() {
  Yn ||= Jn.then(ir);
}
function er(e) {
  (f(e)
    ? Gn.push(...e)
    : Kn && e.id === -1
      ? Kn.splice(qn + 1, 0, e)
      : e.flags & 1 || (Gn.push(e), (e.flags |= 1)),
    $n());
}
function tr(e, t, n = Wn + 1) {
  for (; n < Un.length; n++) {
    let t = Un[n];
    if (t && t.flags & 2) {
      if (e && t.id !== e.uid) continue;
      (Un.splice(n, 1),
        n--,
        t.flags & 4 && (t.flags &= -2),
        t(),
        t.flags & 4 || (t.flags &= -2));
    }
  }
}
function nr(e) {
  if (Gn.length) {
    let e = [...new Set(Gn)].sort((e, t) => rr(e) - rr(t));
    if (((Gn.length = 0), Kn)) {
      Kn.push(...e);
      return;
    }
    for (Kn = e, qn = 0; qn < Kn.length; qn++) {
      let e = Kn[qn];
      (e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), (e.flags &= -2));
    }
    ((Kn = null), (qn = 0));
  }
}
var rr = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ir(e) {
  try {
    for (Wn = 0; Wn < Un.length; Wn++) {
      let e = Un[Wn];
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2),
        zn(e, e.i, e.i ? 15 : 14),
        e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Wn < Un.length; Wn++) {
      let e = Un[Wn];
      e && (e.flags &= -2);
    }
    ((Wn = -1),
      (Un.length = 0),
      nr(e),
      (Yn = null),
      (Un.length || Gn.length) && ir(e));
  }
}
var ar,
  or = [];
function sr(e, t) {
  ((ar = e),
    ar
      ? ((ar.enabled = !0),
        or.forEach(({ event: e, args: t }) => ar.emit(e, ...t)),
        (or = []))
      : typeof window < `u` &&
          window.HTMLElement &&
          !window.navigator?.userAgent?.includes(`jsdom`)
        ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
            t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
            sr(e, t);
          }),
          setTimeout(() => {
            ar || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (or = []));
          }, 3e3))
        : (or = []));
}
var cr = null,
  lr = null;
function ur(e) {
  let t = cr;
  return ((cr = e), (lr = (e && e.type.__scopeId) || null), t);
}
function dr(e) {
  lr = e;
}
function fr() {
  lr = null;
}
var pr = (e) => mr;
function mr(e, t = cr, n) {
  if (!t || e._n) return e;
  let r = (...n) => {
    r._d && is(-1);
    let i = ur(t),
      a;
    try {
      a = e(...n);
    } finally {
      (ur(i), r._d && is(1));
    }
    return a;
  };
  return ((r._n = !0), (r._c = !0), (r._d = !0), r);
}
function hr(e, t) {
  if (cr === null) return e;
  let r = Ks(cr),
    i = (e.dirs ||= []);
  for (let e = 0; e < t.length; e++) {
    let [a, o, s, c = n] = t[e];
    a &&
      (_(a) && (a = { mounted: a, updated: a }),
      a.deep && Mn(o),
      i.push({
        dir: a,
        instance: r,
        value: o,
        oldValue: void 0,
        arg: s,
        modifiers: c,
      }));
  }
  return e;
}
function gr(e, t, n, r) {
  let i = e.dirs,
    a = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    let s = i[o];
    a && (s.oldValue = a[o].value);
    let c = s.dir[r];
    c && (Ze(), Bn(c, n, 8, [e.el, s, e, t]), Qe());
  }
}
var _r = Symbol(`_vte`),
  vr = (e) => e.__isTeleport,
  yr = (e) => e && (e.disabled || e.disabled === ``),
  br = (e) => e && (e.defer || e.defer === ``),
  xr = (e) => typeof SVGElement < `u` && e instanceof SVGElement,
  Sr = (e) => typeof MathMLElement == `function` && e instanceof MathMLElement,
  Cr = (e, t) => {
    let n = e && e.to;
    return v(n) ? (t ? t(n) : null) : n;
  },
  wr = {
    name: `Teleport`,
    __isTeleport: !0,
    process(e, t, n, r, i, a, o, s, c, l) {
      let {
          mc: u,
          pc: d,
          pbc: f,
          o: { insert: p, querySelector: m, createText: h, createComment: g },
        } = l,
        _ = yr(t.props),
        { shapeFlag: v, children: y, dynamicChildren: b } = t;
      if (e == null) {
        let e = (t.el = h(``)),
          l = (t.anchor = h(``));
        (p(e, n, r), p(l, n, r));
        let d = (e, t) => {
            v & 16 && u(y, e, t, i, a, o, s, c);
          },
          f = () => {
            let e = (t.target = Cr(t.props, m)),
              n = kr(e, t, h, p);
            e &&
              (o !== `svg` && xr(e)
                ? (o = `svg`)
                : o !== `mathml` && Sr(e) && (o = `mathml`),
              i &&
                i.isCE &&
                (
                  i.ce._teleportTargets || (i.ce._teleportTargets = new Set())
                ).add(e),
              _ || (d(e, n), Or(t, !1)));
          };
        (_ && (d(n, l), Or(t, !0)),
          br(t.props)
            ? ((t.el.__isMounted = !1),
              I(() => {
                (f(), delete t.el.__isMounted);
              }, a))
            : f());
      } else {
        if (br(t.props) && e.el.__isMounted === !1) {
          I(() => {
            wr.process(e, t, n, r, i, a, o, s, c, l);
          }, a);
          return;
        }
        ((t.el = e.el), (t.targetStart = e.targetStart));
        let u = (t.anchor = e.anchor),
          p = (t.target = e.target),
          h = (t.targetAnchor = e.targetAnchor),
          g = yr(e.props),
          v = g ? n : p,
          y = g ? u : h;
        if (
          (o === `svg` || xr(p)
            ? (o = `svg`)
            : (o === `mathml` || Sr(p)) && (o = `mathml`),
          b
            ? (f(e.dynamicChildren, b, v, i, a, o, s), Po(e, t, !0))
            : c || d(e, t, v, y, i, a, o, s, !1),
          _)
        )
          g
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Tr(t, n, u, l, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          let e = (t.target = Cr(t.props, m));
          e && Tr(t, e, null, l, 0);
        } else g && Tr(t, p, h, l, 1);
        Or(t, _);
      }
    },
    remove(e, t, n, { um: r, o: { remove: i } }, a) {
      let {
        shapeFlag: o,
        children: s,
        anchor: c,
        targetStart: l,
        targetAnchor: u,
        target: d,
        props: f,
      } = e;
      if ((d && (i(l), i(u)), a && i(c), o & 16)) {
        let e = a || !yr(f);
        for (let i = 0; i < s.length; i++) {
          let a = s[i];
          r(a, t, n, e, !!a.dynamicChildren);
        }
      }
    },
    move: Tr,
    hydrate: Er,
  };
function Tr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
  a === 0 && r(e.targetAnchor, t, n);
  let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e,
    d = a === 2;
  if ((d && r(o, t, n), (!d || yr(u)) && c & 16))
    for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
  d && r(s, t, n);
}
function Er(
  e,
  t,
  n,
  r,
  i,
  a,
  {
    o: {
      nextSibling: o,
      parentNode: s,
      querySelector: c,
      insert: l,
      createText: u,
    },
  },
  d,
) {
  function f(e, t, c, l) {
    ((t.anchor = d(o(e), t, s(e), n, r, i, a)),
      (t.targetStart = c),
      (t.targetAnchor = l));
  }
  let p = (t.target = Cr(t.props, c)),
    m = yr(t.props);
  if (p) {
    let s = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (m) f(e, t, s, s && o(s));
      else {
        t.anchor = o(e);
        let c = s;
        for (; c; ) {
          if (c && c.nodeType === 8) {
            if (c.data === `teleport start anchor`) t.targetStart = c;
            else if (c.data === `teleport anchor`) {
              ((t.targetAnchor = c),
                (p._lpa = t.targetAnchor && o(t.targetAnchor)));
              break;
            }
          }
          c = o(c);
        }
        (t.targetAnchor || kr(p, t, u, l), d(s && o(s), t, p, n, r, i, a));
      }
    Or(t, m);
  } else m && t.shapeFlag & 16 && f(e, t, e, o(e));
  return t.anchor && o(t.anchor);
}
var Dr = wr;
function Or(e, t) {
  let n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (
      t
        ? ((r = e.el), (i = e.anchor))
        : ((r = e.targetStart), (i = e.targetAnchor));
      r && r !== i;

    )
      (r.nodeType === 1 && r.setAttribute(`data-v-owner`, n.uid),
        (r = r.nextSibling));
    n.ut();
  }
}
function kr(e, t, n, r) {
  let i = (t.targetStart = n(``)),
    a = (t.targetAnchor = n(``));
  return ((i[_r] = a), e && (r(i, e), r(a, e)), a);
}
var Ar = Symbol(`_leaveCb`),
  jr = Symbol(`_enterCb`);
function Mr() {
  let e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    ji(() => {
      e.isMounted = !0;
    }),
    Pi(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
var Nr = [Function, Array],
  Pr = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Nr,
    onEnter: Nr,
    onAfterEnter: Nr,
    onEnterCancelled: Nr,
    onBeforeLeave: Nr,
    onLeave: Nr,
    onAfterLeave: Nr,
    onLeaveCancelled: Nr,
    onBeforeAppear: Nr,
    onAppear: Nr,
    onAfterAppear: Nr,
    onAppearCancelled: Nr,
  },
  Fr = (e) => {
    let t = e.subTree;
    return t.component ? Fr(t.component) : t;
  },
  Ir = {
    name: `BaseTransition`,
    props: Pr,
    setup(e, { slots: t }) {
      let n = ks(),
        r = Mr();
      return () => {
        let i = t.default && Wr(t.default(), !0);
        if (!i || !i.length) return;
        let a = Lr(i),
          o = P(e),
          { mode: s } = o;
        if (r.isLeaving) return Vr(a);
        let c = Hr(a);
        if (!c) return Vr(a);
        let l = Br(c, o, r, n, (e) => (l = e));
        c.type !== R && Ur(c, l);
        let u = n.subTree && Hr(n.subTree);
        if (u && u.type !== R && !ls(u, c) && Fr(n).type !== R) {
          let e = Br(u, o, r, n);
          if ((Ur(u, e), s === `out-in` && c.type !== R))
            return (
              (r.isLeaving = !0),
              (e.afterLeave = () => {
                ((r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete e.afterLeave,
                  (u = void 0));
              }),
              Vr(a)
            );
          s === `in-out` && c.type !== R
            ? (e.delayLeave = (e, t, n) => {
                let i = zr(r, u);
                ((i[String(u.key)] = u),
                  (e[Ar] = () => {
                    (t(),
                      (e[Ar] = void 0),
                      delete l.delayedLeave,
                      (u = void 0));
                  }),
                  (l.delayedLeave = () => {
                    (n(), delete l.delayedLeave, (u = void 0));
                  }));
              })
            : (u = void 0);
        } else u &&= void 0;
        return a;
      };
    },
  };
function Lr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (let n of e)
      if (n.type !== R) {
        t = n;
        break;
      }
  }
  return t;
}
var Rr = Ir;
function zr(e, t) {
  let { leavingVNodes: n } = e,
    r = n.get(t.type);
  return (r || ((r = Object.create(null)), n.set(t.type, r)), r);
}
function Br(e, t, n, r, i) {
  let {
      appear: a,
      mode: o,
      persisted: s = !1,
      onBeforeEnter: c,
      onEnter: l,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: p,
      onLeave: m,
      onAfterLeave: h,
      onLeaveCancelled: g,
      onBeforeAppear: _,
      onAppear: v,
      onAfterAppear: y,
      onAppearCancelled: b,
    } = t,
    x = String(e.key),
    S = zr(n, e),
    C = (e, t) => {
      e && Bn(e, r, 9, t);
    },
    w = (e, t) => {
      let n = t[1];
      (C(e, t),
        f(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n());
    },
    T = {
      mode: o,
      persisted: s,
      beforeEnter(t) {
        let r = c;
        if (!n.isMounted)
          if (a) r = _ || c;
          else return;
        t[Ar] && t[Ar](!0);
        let i = S[x];
        (i && ls(e, i) && i.el[Ar] && i.el[Ar](), C(r, [t]));
      },
      enter(e) {
        let t = l,
          r = u,
          i = d;
        if (!n.isMounted)
          if (a) ((t = v || l), (r = y || u), (i = b || d));
          else return;
        let o = !1,
          s = (e[jr] = (t) => {
            o ||
              ((o = !0),
              C(t ? i : r, [e]),
              T.delayedLeave && T.delayedLeave(),
              (e[jr] = void 0));
          });
        t ? w(t, [e, s]) : s();
      },
      leave(t, r) {
        let i = String(e.key);
        if ((t[jr] && t[jr](!0), n.isUnmounting)) return r();
        C(p, [t]);
        let a = !1,
          o = (t[Ar] = (n) => {
            a ||
              ((a = !0),
              r(),
              C(n ? g : h, [t]),
              (t[Ar] = void 0),
              S[i] === e && delete S[i]);
          });
        ((S[i] = e), m ? w(m, [t, o]) : o());
      },
      clone(e) {
        let a = Br(e, t, n, r, i);
        return (i && i(a), a);
      },
    };
  return T;
}
function Vr(e) {
  if (yi(e)) return ((e = gs(e)), (e.children = null), e);
}
function Hr(e) {
  if (!yi(e)) return vr(e.type) && e.children ? Lr(e.children) : e;
  if (e.component) return e.component.subTree;
  let { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && _(n.default)) return n.default();
  }
}
function Ur(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Ur(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Wr(e, t = !1, n) {
  let r = [],
    i = 0;
  for (let a = 0; a < e.length; a++) {
    let o = e[a],
      s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
    o.type === L
      ? (o.patchFlag & 128 && i++, (r = r.concat(Wr(o.children, t, s))))
      : (t || o.type !== R) && r.push(s == null ? o : gs(o, { key: s }));
  }
  if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
  return r;
}
function Gr(e, t) {
  return _(e) ? (() => c({ name: e.name }, t, { setup: e }))() : e;
}
function Kr() {
  let e = ks();
  return e
    ? (e.appContext.config.idPrefix || `v`) + `-` + e.ids[0] + e.ids[1]++
    : ``;
}
function qr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + `-`, 0, 0];
}
function Jr(e) {
  let t = ks(),
    r = sn(null);
  if (t) {
    let i = t.refs === n ? (t.refs = {}) : t.refs;
    Object.defineProperty(i, e, {
      enumerable: !0,
      get: () => r.value,
      set: (e) => (r.value = e),
    });
  }
  return r;
}
var Yr = new WeakMap();
function Xr(e, t, r, i, o = !1) {
  if (f(e)) {
    e.forEach((e, n) => Xr(e, t && (f(t) ? t[n] : t), r, i, o));
    return;
  }
  if (gi(i) && !o) {
    i.shapeFlag & 512 &&
      i.type.__asyncResolved &&
      i.component.subTree.component &&
      Xr(e, t, r, i.component.subTree);
    return;
  }
  let s = i.shapeFlag & 4 ? Ks(i.component) : i.el,
    c = o ? null : s,
    { i: u, r: p } = e,
    m = t && t.r,
    h = u.refs === n ? (u.refs = {}) : u.refs,
    g = u.setupState,
    y = P(g),
    b = g === n ? a : (e) => d(y, e),
    x = (e) => !0;
  if (m != null && m !== p) {
    if ((Zr(t), v(m))) ((h[m] = null), b(m) && (g[m] = null));
    else if (F(m)) {
      x(m) && (m.value = null);
      let e = t;
      e.k && (h[e.k] = null);
    }
  }
  if (_(p)) zn(p, u, 12, [c, h]);
  else {
    let t = v(p),
      n = F(p);
    if (t || n) {
      let i = () => {
        if (e.f) {
          let n = t ? (b(p) ? g[p] : h[p]) : x(p) || !e.k ? p.value : h[e.k];
          if (o) f(n) && l(n, s);
          else if (f(n)) n.includes(s) || n.push(s);
          else if (t) ((h[p] = [s]), b(p) && (g[p] = h[p]));
          else {
            let t = [s];
            (x(p) && (p.value = t), e.k && (h[e.k] = t));
          }
        } else
          t
            ? ((h[p] = c), b(p) && (g[p] = c))
            : n && (x(p) && (p.value = c), e.k && (h[e.k] = c));
      };
      if (c) {
        let t = () => {
          (i(), Yr.delete(e));
        };
        ((t.id = -1), Yr.set(e, t), I(t, r));
      } else (Zr(e), i());
    }
  }
}
function Zr(e) {
  let t = Yr.get(e);
  t && ((t.flags |= 8), Yr.delete(e));
}
var Qr = !1,
  $r = () => {
    Qr ||= (console.error(`Hydration completed but contains mismatches.`), !0);
  },
  ei = (e) => e.namespaceURI.includes(`svg`) && e.tagName !== `foreignObject`,
  ti = (e) => e.namespaceURI.includes(`MathML`),
  ni = (e) => {
    if (e.nodeType === 1) {
      if (ei(e)) return `svg`;
      if (ti(e)) return `mathml`;
    }
  },
  ri = (e) => e.nodeType === 8;
function ii(e) {
  let {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: i,
        nextSibling: a,
        parentNode: s,
        remove: c,
        insert: l,
        createComment: u,
      },
    } = e,
    d = (e, t) => {
      if (!t.hasChildNodes()) {
        (n(null, e, t), nr(), (t._vnode = e));
        return;
      }
      (f(t.firstChild, e, null, null, null), nr(), (t._vnode = e));
    },
    f = (n, r, o, c, u, d = !1) => {
      d ||= !!r.dynamicChildren;
      let b = ri(n) && n.data === `[`,
        x = () => g(n, r, o, c, u, b),
        { type: S, ref: C, shapeFlag: w, patchFlag: T } = r,
        E = n.nodeType;
      ((r.el = n), T === -2 && ((d = !1), (r.dynamicChildren = null)));
      let D = null;
      switch (S) {
        case Zo:
          E === 3
            ? (n.data !== r.children && ($r(), (n.data = r.children)),
              (D = a(n)))
            : r.children === ``
              ? (l((r.el = i(``)), s(n), n), (D = n))
              : (D = x());
          break;
        case R:
          y(n)
            ? ((D = a(n)), v((r.el = n.content.firstChild), n, o))
            : (D = E !== 8 || b ? x() : a(n));
          break;
        case Qo:
          if ((b && ((n = a(n)), (E = n.nodeType)), E === 1 || E === 3)) {
            D = n;
            let e = !r.children.length;
            for (let t = 0; t < r.staticCount; t++)
              (e && (r.children += D.nodeType === 1 ? D.outerHTML : D.data),
                t === r.staticCount - 1 && (r.anchor = D),
                (D = a(D)));
            return b ? a(D) : D;
          } else x();
          break;
        case L:
          D = b ? h(n, r, o, c, u, d) : x();
          break;
        default:
          if (w & 1)
            D =
              (E !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) &&
              !y(n)
                ? x()
                : p(n, r, o, c, u, d);
          else if (w & 6) {
            r.slotScopeIds = u;
            let e = s(n);
            if (
              ((D = b
                ? _(n)
                : ri(n) && n.data === `teleport start`
                  ? _(n, n.data, `teleport end`)
                  : a(n)),
              t(r, e, null, o, c, ni(e), d),
              gi(r) && !r.type.__asyncResolved)
            ) {
              let t;
              (b
                ? ((t = z(L)), (t.anchor = D ? D.previousSibling : e.lastChild))
                : (t = n.nodeType === 3 ? _s(``) : z(`div`)),
                (t.el = n),
                (r.component.subTree = t));
            }
          } else
            w & 64
              ? (D = E === 8 ? r.type.hydrate(n, r, o, c, u, d, e, m) : x())
              : w & 128 &&
                (D = r.type.hydrate(n, r, o, c, ni(s(n)), u, d, e, f));
      }
      return (C != null && Xr(C, null, c, r), D);
    },
    p = (e, t, n, i, a, s) => {
      s ||= !!t.dynamicChildren;
      let {
          type: l,
          props: u,
          patchFlag: d,
          shapeFlag: f,
          dirs: p,
          transition: h,
        } = t,
        g = l === `input` || l === `option`;
      if (g || d !== -1) {
        p && gr(t, null, n, `created`);
        let l = !1;
        if (y(e)) {
          l = No(null, h) && n && n.vnode.props && n.vnode.props.appear;
          let r = e.content.firstChild;
          if (l) {
            let e = r.getAttribute(`class`);
            (e && (r.$cls = e), h.beforeEnter(r));
          }
          (v(r, e, n), (t.el = e = r));
        }
        if (f & 16 && !(u && (u.innerHTML || u.textContent))) {
          let r = m(e.firstChild, t, e, n, i, a, s);
          for (; r; ) {
            si(e, 1) || $r();
            let t = r;
            ((r = r.nextSibling), c(t));
          }
        } else if (f & 8) {
          let n = t.children;
          n[0] ===
            `
` &&
            (e.tagName === `PRE` || e.tagName === `TEXTAREA`) &&
            (n = n.slice(1));
          let { textContent: r } = e;
          r !== n &&
            r !==
              n.replace(
                /\r\n|\r/g,
                `
`,
              ) &&
            (si(e, 0) || $r(), (e.textContent = t.children));
        }
        if (u) {
          if (g || !s || d & 48) {
            let t = e.tagName.includes(`-`);
            for (let i in u)
              ((g && (i.endsWith(`value`) || i === `indeterminate`)) ||
                (o(i) && !D(i)) ||
                i[0] === `.` ||
                t) &&
                r(e, i, null, u[i], void 0, n);
          } else if (u.onClick) r(e, `onClick`, null, u.onClick, void 0, n);
          else if (d & 4 && Qt(u.style)) for (let e in u.style) u.style[e];
        }
        let _;
        ((_ = u && u.onVnodeBeforeMount) && ws(_, n, t),
          p && gr(t, null, n, `beforeMount`),
          ((_ = u && u.onVnodeMounted) || p || l) &&
            Jo(() => {
              (_ && ws(_, n, t),
                l && h.enter(e),
                p && gr(t, null, n, `mounted`));
            }, i));
      }
      return e.nextSibling;
    },
    m = (e, t, r, o, s, c, u) => {
      u ||= !!t.dynamicChildren;
      let d = t.children,
        p = d.length;
      for (let t = 0; t < p; t++) {
        let m = u ? d[t] : (d[t] = bs(d[t])),
          h = m.type === Zo;
        e
          ? (h &&
              !u &&
              t + 1 < p &&
              bs(d[t + 1]).type === Zo &&
              (l(i(e.data.slice(m.children.length)), r, a(e)),
              (e.data = m.children)),
            (e = f(e, m, o, s, c, u)))
          : h && !m.children
            ? l((m.el = i(``)), r)
            : (si(r, 1) || $r(), n(null, m, r, null, o, s, ni(r), c));
      }
      return e;
    },
    h = (e, t, n, r, i, o) => {
      let { slotScopeIds: c } = t;
      c && (i = i ? i.concat(c) : c);
      let d = s(e),
        f = m(a(e), t, d, n, r, i, o);
      return f && ri(f) && f.data === `]`
        ? a((t.anchor = f))
        : ($r(), l((t.anchor = u(`]`)), d, f), f);
    },
    g = (e, t, r, i, o, l) => {
      if ((si(e.parentElement, 1) || $r(), (t.el = null), l)) {
        let t = _(e);
        for (;;) {
          let n = a(e);
          if (n && n !== t) c(n);
          else break;
        }
      }
      let u = a(e),
        d = s(e);
      return (
        c(e),
        n(null, t, d, u, r, i, ni(d), o),
        r && ((r.vnode.el = t.el), co(r, t.el)),
        u
      );
    },
    _ = (e, t = `[`, n = `]`) => {
      let r = 0;
      for (; e; )
        if (((e = a(e)), e && ri(e) && (e.data === t && r++, e.data === n))) {
          if (r === 0) return a(e);
          r--;
        }
      return e;
    },
    v = (e, t, n) => {
      let r = t.parentNode;
      r && r.replaceChild(e, t);
      let i = n;
      for (; i; )
        (i.vnode.el === t && (i.vnode.el = i.subTree.el = e), (i = i.parent));
    },
    y = (e) => e.nodeType === 1 && e.tagName === `TEMPLATE`;
  return [d, f];
}
var ai = `data-allow-mismatch`,
  oi = { 0: `text`, 1: `children`, 2: `class`, 3: `style`, 4: `attribute` };
function si(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(ai); ) e = e.parentElement;
  let n = e && e.getAttribute(ai);
  if (n == null) return !1;
  if (n === ``) return !0;
  {
    let e = n.split(`,`);
    return t === 0 && e.includes(`children`) ? !0 : e.includes(oi[t]);
  }
}
var ci = le().requestIdleCallback || ((e) => setTimeout(e, 1)),
  li = le().cancelIdleCallback || ((e) => clearTimeout(e)),
  ui =
    (e = 1e4) =>
    (t) => {
      let n = ci(t, { timeout: e });
      return () => li(n);
    };
function di(e) {
  let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(),
    { innerHeight: a, innerWidth: o } = window;
  return (
    ((t > 0 && t < a) || (r > 0 && r < a)) &&
    ((n > 0 && n < o) || (i > 0 && i < o))
  );
}
var fi = (e) => (t, n) => {
    let r = new IntersectionObserver((e) => {
      for (let n of e)
        if (n.isIntersecting) {
          (r.disconnect(), t());
          break;
        }
    }, e);
    return (
      n((e) => {
        if (e instanceof Element) {
          if (di(e)) return (t(), r.disconnect(), !1);
          r.observe(e);
        }
      }),
      () => r.disconnect()
    );
  },
  pi = (e) => (t) => {
    if (e) {
      let n = matchMedia(e);
      if (n.matches) t();
      else
        return (
          n.addEventListener(`change`, t, { once: !0 }),
          () => n.removeEventListener(`change`, t)
        );
    }
  },
  mi =
    (e = []) =>
    (t, n) => {
      v(e) && (e = [e]);
      let r = !1,
        i = (e) => {
          r ||
            ((r = !0),
            a(),
            t(),
            e.target.dispatchEvent(new e.constructor(e.type, e)));
        },
        a = () => {
          n((t) => {
            for (let n of e) t.removeEventListener(n, i);
          });
        };
      return (
        n((t) => {
          for (let n of e) t.addEventListener(n, i, { once: !0 });
        }),
        a
      );
    };
function hi(e, t) {
  if (ri(e) && e.data === `[`) {
    let n = 1,
      r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break;
      } else if (ri(r))
        if (r.data === `]`) {
          if (--n === 0) break;
        } else r.data === `[` && n++;
      r = r.nextSibling;
    }
  } else t(e);
}
var gi = (e) => !!e.type.__asyncLoader;
function _i(e) {
  _(e) && (e = { loader: e });
  let {
      loader: t,
      loadingComponent: n,
      errorComponent: r,
      delay: i = 200,
      hydrate: a,
      timeout: o,
      suspensible: s = !0,
      onError: c,
    } = e,
    l = null,
    u,
    d = 0,
    f = () => (d++, (l = null), p()),
    p = () => {
      let e;
      return (
        l ||
        (e = l =
          t()
            .catch((e) => {
              if (((e = e instanceof Error ? e : Error(String(e))), c))
                return new Promise((t, n) => {
                  c(
                    e,
                    () => t(f()),
                    () => n(e),
                    d + 1,
                  );
                });
              throw e;
            })
            .then((t) =>
              e !== l && l
                ? l
                : (t &&
                    (t.__esModule || t[Symbol.toStringTag] === `Module`) &&
                    (t = t.default),
                  (u = t),
                  t),
            ))
      );
    };
  return Gr({
    name: `AsyncComponentWrapper`,
    __asyncLoader: p,
    __asyncHydrate(e, t, n) {
      let r = !1;
      (t.bu ||= []).push(() => (r = !0));
      let i = () => {
          r || n();
        },
        o = a
          ? () => {
              let n = a(i, (t) => hi(e, t));
              n && (t.bum ||= []).push(n);
            }
          : i;
      u ? o() : p().then(() => !t.isUnmounted && o());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      let e = Os;
      if ((qr(e), u)) return () => vi(u, e);
      let t = (t) => {
        ((l = null), Vn(t, e, 13, !r));
      };
      if ((s && e.suspense) || Fs)
        return p()
          .then((t) => () => vi(t, e))
          .catch((e) => (t(e), () => (r ? z(r, { error: e }) : null)));
      let a = on(!1),
        c = on(),
        d = on(!!i);
      return (
        i &&
          setTimeout(() => {
            d.value = !1;
          }, i),
        o != null &&
          setTimeout(() => {
            if (!a.value && !c.value) {
              let e = Error(`Async component timed out after ${o}ms.`);
              (t(e), (c.value = e));
            }
          }, o),
        p()
          .then(() => {
            ((a.value = !0),
              e.parent && yi(e.parent.vnode) && e.parent.update());
          })
          .catch((e) => {
            (t(e), (c.value = e));
          }),
        () => {
          if (a.value && u) return vi(u, e);
          if (c.value && r) return z(r, { error: c.value });
          if (n && !d.value) return vi(n, e);
        }
      );
    },
  });
}
function vi(e, t) {
  let { ref: n, props: r, children: i, ce: a } = t.vnode,
    o = z(e, r, i);
  return ((o.ref = n), (o.ce = a), delete t.vnode.ce, o);
}
var yi = (e) => e.type.__isKeepAlive,
  bi = {
    name: `KeepAlive`,
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      let n = ks(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          let e = t.default && t.default();
          return e && e.length === 1 ? e[0] : e;
        };
      let i = new Map(),
        a = new Set(),
        o = null,
        s = n.suspense,
        {
          renderer: {
            p: c,
            m: l,
            um: u,
            o: { createElement: d },
          },
        } = r,
        f = d(`div`);
      ((r.activate = (e, t, n, r, i) => {
        let a = e.component;
        (l(e, t, n, 0, s),
          c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i),
          I(() => {
            ((a.isDeactivated = !1), a.a && ie(a.a));
            let t = e.props && e.props.onVnodeMounted;
            t && ws(t, a.parent, e);
          }, s));
      }),
        (r.deactivate = (e) => {
          let t = e.component;
          (Lo(t.m),
            Lo(t.a),
            l(e, f, null, 1, s),
            I(() => {
              t.da && ie(t.da);
              let n = e.props && e.props.onVnodeUnmounted;
              (n && ws(n, t.parent, e), (t.isDeactivated = !0));
            }, s));
        }));
      function p(e) {
        (Ei(e), u(e, n, s, !0));
      }
      function m(e) {
        i.forEach((t, n) => {
          let r = qs(t.type);
          r && !e(r) && h(n);
        });
      }
      function h(e) {
        let t = i.get(e);
        (t && (!o || !ls(t, o)) ? p(t) : o && Ei(o), i.delete(e), a.delete(e));
      }
      Ka(
        () => [e.include, e.exclude],
        ([e, t]) => {
          (e && m((t) => xi(e, t)), t && m((e) => !xi(t, e)));
        },
        { flush: `post`, deep: !0 },
      );
      let g = null,
        _ = () => {
          g != null &&
            (Ro(n.subTree.type)
              ? I(() => {
                  i.set(g, Di(n.subTree));
                }, n.subTree.suspense)
              : i.set(g, Di(n.subTree)));
        };
      return (
        ji(_),
        Ni(_),
        Pi(() => {
          i.forEach((e) => {
            let { subTree: t, suspense: r } = n,
              i = Di(t);
            if (e.type === i.type && e.key === i.key) {
              Ei(i);
              let e = i.component.da;
              e && I(e, r);
              return;
            }
            p(e);
          });
        }),
        () => {
          if (((g = null), !t.default)) return (o = null);
          let n = t.default(),
            r = n[0];
          if (n.length > 1) return ((o = null), n);
          if (!cs(r) || (!(r.shapeFlag & 4) && !(r.shapeFlag & 128)))
            return ((o = null), r);
          let s = Di(r);
          if (s.type === R) return ((o = null), s);
          let c = s.type,
            l = qs(gi(s) ? s.type.__asyncResolved || {} : c),
            { include: u, exclude: d, max: f } = e;
          if ((u && (!l || !xi(u, l))) || (d && l && xi(d, l)))
            return ((s.shapeFlag &= -257), (o = s), r);
          let p = s.key == null ? c : s.key,
            m = i.get(p);
          return (
            s.el && ((s = gs(s)), r.shapeFlag & 128 && (r.ssContent = s)),
            (g = p),
            m
              ? ((s.el = m.el),
                (s.component = m.component),
                s.transition && Ur(s, s.transition),
                (s.shapeFlag |= 512),
                a.delete(p),
                a.add(p))
              : (a.add(p),
                f && a.size > parseInt(f, 10) && h(a.values().next().value)),
            (s.shapeFlag |= 256),
            (o = s),
            Ro(r.type) ? r : s
          );
        }
      );
    },
  };
function xi(e, t) {
  return f(e)
    ? e.some((e) => xi(e, t))
    : v(e)
      ? e.split(`,`).includes(t)
      : g(e)
        ? ((e.lastIndex = 0), e.test(t))
        : !1;
}
function Si(e, t) {
  wi(e, `a`, t);
}
function Ci(e, t) {
  wi(e, `da`, t);
}
function wi(e, t, n = Os) {
  let r = (e.__wdc ||= () => {
    let t = n;
    for (; t; ) {
      if (t.isDeactivated) return;
      t = t.parent;
    }
    return e();
  });
  if ((Oi(t, r, n), n)) {
    let e = n.parent;
    for (; e && e.parent; )
      (yi(e.parent.vnode) && Ti(r, t, n, e), (e = e.parent));
  }
}
function Ti(e, t, n, r) {
  let i = Oi(t, e, r, !0);
  Fi(() => {
    l(r[t], i);
  }, n);
}
function Ei(e) {
  ((e.shapeFlag &= -257), (e.shapeFlag &= -513));
}
function Di(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Oi(e, t, n = Os, r = !1) {
  if (n) {
    let i = n[e] || (n[e] = []),
      a = (t.__weh ||= (...r) => {
        Ze();
        let i = Ms(n),
          a = Bn(t, n, e, r);
        return (i(), Qe(), a);
      });
    return (r ? i.unshift(a) : i.push(a), a);
  }
}
var ki =
    (e) =>
    (t, n = Os) => {
      (!Fs || e === `sp`) && Oi(e, (...e) => t(...e), n);
    },
  Ai = ki(`bm`),
  ji = ki(`m`),
  Mi = ki(`bu`),
  Ni = ki(`u`),
  Pi = ki(`bum`),
  Fi = ki(`um`),
  Ii = ki(`sp`),
  Li = ki(`rtg`),
  Ri = ki(`rtc`);
function zi(e, t = Os) {
  Oi(`ec`, e, t);
}
var Bi = `components`,
  Vi = `directives`;
function Hi(e, t) {
  return Ki(Bi, e, !0, t) || e;
}
var Ui = Symbol.for(`v-ndc`);
function Wi(e) {
  return v(e) ? Ki(Bi, e, !1) || e : e || Ui;
}
function Gi(e) {
  return Ki(Vi, e);
}
function Ki(e, t, n = !0, r = !1) {
  let i = cr || Os;
  if (i) {
    let n = i.type;
    if (e === Bi) {
      let e = qs(n, !1);
      if (e && (e === t || e === k(t) || e === ne(k(t)))) return n;
    }
    let a = qi(i[e] || n[e], t) || qi(i.appContext[e], t);
    return !a && r ? n : a;
  }
}
function qi(e, t) {
  return e && (e[t] || e[k(t)] || e[ne(k(t))]);
}
function Ji(e, t, n, r) {
  let i,
    a = n && n[r],
    o = f(e);
  if (o || v(e)) {
    let n = o && Qt(e),
      r = !1,
      s = !1;
    (n && ((r = !en(e)), (s = $t(e)), (e = ft(e))), (i = Array(e.length)));
    for (let n = 0, o = e.length; n < o; n++)
      i[n] = t(r ? (s ? an(rn(e[n])) : rn(e[n])) : e[n], n, void 0, a && a[n]);
  } else if (typeof e == `number`) {
    i = Array(e);
    for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
  } else if (b(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
    else {
      let n = Object.keys(e);
      i = Array(n.length);
      for (let r = 0, o = n.length; r < o; r++) {
        let o = n[r];
        i[r] = t(e[o], o, r, a && a[r]);
      }
    }
  else i = [];
  return (n && (n[r] = i), i);
}
function Yi(e, t) {
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (f(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...e) => {
              let t = r.fn(...e);
              return (t && (t.key = r.key), t);
            }
          : r.fn);
  }
  return e;
}
function Xi(e, t, n = {}, r, i) {
  if (cr.ce || (cr.parent && gi(cr.parent) && cr.parent.ce)) {
    let e = Object.keys(n).length > 0;
    return (
      t !== `default` && (n.name = t),
      ts(),
      ss(L, null, [z(`slot`, n, r && r())], e ? -2 : 64)
    );
  }
  let a = e[t];
  (a && a._c && (a._d = !1), ts());
  let o = a && Zi(a(n)),
    s = n.key || (o && o.key),
    c = ss(
      L,
      { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? `_fb` : ``) },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2,
    );
  return (
    !i && c.scopeId && (c.slotScopeIds = [c.scopeId + `-s`]),
    a && a._c && (a._d = !0),
    c
  );
}
function Zi(e) {
  return e.some((e) =>
    cs(e) ? !(e.type === R || (e.type === L && !Zi(e.children))) : !0,
  )
    ? e
    : null;
}
function Qi(e, t) {
  let n = {};
  for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : re(r)] = e[r];
  return n;
}
var $i = (e) => (e ? (Ps(e) ? Ks(e) : $i(e.parent)) : null),
  ea = c(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $i(e.parent),
    $root: (e) => $i(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wa(e),
    $forceUpdate: (e) =>
      (e.f ||= () => {
        Qn(e.update);
      }),
    $nextTick: (e) => (e.n ||= Xn.bind(e.proxy)),
    $watch: (e) => Ja.bind(e),
  }),
  ta = (e, t) => e !== n && !e.__isScriptSetup && d(e, t),
  na = {
    get({ _: e }, t) {
      if (t === `__v_skip`) return !0;
      let {
        ctx: r,
        setupState: i,
        data: a,
        props: o,
        accessCache: s,
        type: c,
        appContext: l,
      } = e;
      if (t[0] !== `$`) {
        let e = s[t];
        if (e !== void 0)
          switch (e) {
            case 1:
              return i[t];
            case 2:
              return a[t];
            case 4:
              return r[t];
            case 3:
              return o[t];
          }
        else if (ta(i, t)) return ((s[t] = 1), i[t]);
        else if (a !== n && d(a, t)) return ((s[t] = 2), a[t]);
        else if (d(o, t)) return ((s[t] = 3), o[t]);
        else if (r !== n && d(r, t)) return ((s[t] = 4), r[t]);
        else ya && (s[t] = 0);
      }
      let u = ea[t],
        f,
        p;
      if (u) return (t === `$attrs` && ct(e.attrs, `get`, ``), u(e));
      if ((f = c.__cssModules) && (f = f[t])) return f;
      if (r !== n && d(r, t)) return ((s[t] = 4), r[t]);
      if (((p = l.config.globalProperties), d(p, t))) return p[t];
    },
    set({ _: e }, t, r) {
      let { data: i, setupState: a, ctx: o } = e;
      return ta(a, t)
        ? ((a[t] = r), !0)
        : i !== n && d(i, t)
          ? ((i[t] = r), !0)
          : d(e.props, t) || (t[0] === `$` && t.slice(1) in e)
            ? !1
            : ((o[t] = r), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: r,
          ctx: i,
          appContext: a,
          props: o,
          type: s,
        },
      },
      c,
    ) {
      let l;
      return !!(
        r[c] ||
        (e !== n && c[0] !== `$` && d(e, c)) ||
        ta(t, c) ||
        d(o, c) ||
        d(i, c) ||
        d(ea, c) ||
        d(a.config.globalProperties, c) ||
        ((l = s.__cssModules) && l[c])
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get == null
          ? d(n, `value`) && this.set(e, t, n.value, null)
          : (e._.accessCache[t] = 0),
        Reflect.defineProperty(e, t, n)
      );
    },
  },
  ra = c({}, na, {
    get(e, t) {
      if (t !== Symbol.unscopables) return na.get(e, t, e);
    },
    has(e, t) {
      return t[0] !== `_` && !ue(t);
    },
  });
function ia() {
  return null;
}
function aa() {
  return null;
}
function oa(e) {}
function sa(e) {}
function ca() {
  return null;
}
function la() {}
function ua(e, t) {
  return null;
}
function da() {
  return pa(`useSlots`).slots;
}
function fa() {
  return pa(`useAttrs`).attrs;
}
function pa(e) {
  let t = ks();
  return (t.setupContext ||= Gs(t));
}
function ma(e) {
  return f(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
}
function ha(e, t) {
  let n = ma(e);
  for (let e in t) {
    if (e.startsWith(`__skip`)) continue;
    let r = n[e];
    (r
      ? f(r) || _(r)
        ? (r = n[e] = { type: r, default: t[e] })
        : (r.default = t[e])
      : r === null && (r = n[e] = { default: t[e] }),
      r && t[`__skip_${e}`] && (r.skipFactory = !0));
  }
  return n;
}
function ga(e, t) {
  return !e || !t ? e || t : f(e) && f(t) ? e.concat(t) : c({}, ma(e), ma(t));
}
function _a(e, t) {
  let n = {};
  for (let r in e)
    t.includes(r) ||
      Object.defineProperty(n, r, { enumerable: !0, get: () => e[r] });
  return n;
}
function va(e) {
  let t = ks(),
    n = e();
  return (
    Ns(),
    x(n) &&
      (n = n.catch((e) => {
        throw (Ms(t), e);
      })),
    [n, () => Ms(t)]
  );
}
var ya = !0;
function ba(e) {
  let t = wa(e),
    n = e.proxy,
    r = e.ctx;
  ((ya = !1), t.beforeCreate && Sa(t.beforeCreate, e, `bc`));
  let {
    data: a,
    computed: o,
    methods: s,
    watch: c,
    provide: l,
    inject: u,
    created: d,
    beforeMount: p,
    mounted: m,
    beforeUpdate: h,
    updated: g,
    activated: v,
    deactivated: y,
    beforeDestroy: x,
    beforeUnmount: S,
    destroyed: C,
    unmounted: w,
    render: T,
    renderTracked: E,
    renderTriggered: D,
    errorCaptured: O,
    serverPrefetch: ee,
    expose: k,
    inheritAttrs: te,
    components: A,
    directives: ne,
    filters: re,
  } = t;
  if ((u && xa(u, r, null), s))
    for (let e in s) {
      let t = s[e];
      _(t) && (r[e] = t.bind(n));
    }
  if (a) {
    let t = a.call(n, n);
    b(t) && (e.data = qt(t));
  }
  if (((ya = !0), o))
    for (let e in o) {
      let t = o[e],
        a = B({
          get: _(t) ? t.bind(n, n) : _(t.get) ? t.get.bind(n, n) : i,
          set: !_(t) && _(t.set) ? t.set.bind(n) : i,
        });
      Object.defineProperty(r, e, {
        enumerable: !0,
        configurable: !0,
        get: () => a.value,
        set: (e) => (a.value = e),
      });
    }
  if (c) for (let e in c) Ca(c[e], r, n, e);
  if (l) {
    let e = _(l) ? l.call(n) : l;
    Reflect.ownKeys(e).forEach((t) => {
      Ra(t, e[t]);
    });
  }
  d && Sa(d, e, `c`);
  function j(e, t) {
    f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (j(Ai, p),
    j(ji, m),
    j(Mi, h),
    j(Ni, g),
    j(Si, v),
    j(Ci, y),
    j(zi, O),
    j(Ri, E),
    j(Li, D),
    j(Pi, S),
    j(Fi, w),
    j(Ii, ee),
    f(k))
  )
    if (k.length) {
      let t = (e.exposed ||= {});
      k.forEach((e) => {
        Object.defineProperty(t, e, {
          get: () => n[e],
          set: (t) => (n[e] = t),
          enumerable: !0,
        });
      });
    } else e.exposed ||= {};
  (T && e.render === i && (e.render = T),
    te != null && (e.inheritAttrs = te),
    A && (e.components = A),
    ne && (e.directives = ne),
    ee && qr(e));
}
function xa(e, t, n = i) {
  for (let n in (f(e) && (e = ka(e)), e)) {
    let r = e[n],
      i;
    ((i = b(r)
      ? `default` in r
        ? za(r.from || n, r.default, !0)
        : za(r.from || n)
      : za(r)),
      F(i)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (e) => (i.value = e),
          })
        : (t[n] = i));
  }
}
function Sa(e, t, n) {
  Bn(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ca(e, t, n, r) {
  let i = r.includes(`.`) ? Ya(n, r) : () => n[r];
  if (v(e)) {
    let n = t[e];
    _(n) && Ka(i, n);
  } else if (_(e)) Ka(i, e.bind(n));
  else if (b(e))
    if (f(e)) e.forEach((e) => Ca(e, t, n, r));
    else {
      let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
      _(r) && Ka(i, r, e);
    }
}
function wa(e) {
  let t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: i,
      optionsCache: a,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    s = a.get(t),
    c;
  return (
    s
      ? (c = s)
      : !i.length && !n && !r
        ? (c = t)
        : ((c = {}),
          i.length && i.forEach((e) => Ta(c, e, o, !0)),
          Ta(c, t, o)),
    b(t) && a.set(t, c),
    c
  );
}
function Ta(e, t, n, r = !1) {
  let { mixins: i, extends: a } = t;
  for (let o in (a && Ta(e, a, n, !0),
  i && i.forEach((t) => Ta(e, t, n, !0)),
  t))
    if (!(r && o === `expose`)) {
      let r = Ea[o] || (n && n[o]);
      e[o] = r ? r(e[o], t[o]) : t[o];
    }
  return e;
}
var Ea = {
  data: Da,
  props: Ma,
  emits: Ma,
  methods: ja,
  computed: ja,
  beforeCreate: Aa,
  created: Aa,
  beforeMount: Aa,
  mounted: Aa,
  beforeUpdate: Aa,
  updated: Aa,
  beforeDestroy: Aa,
  beforeUnmount: Aa,
  destroyed: Aa,
  unmounted: Aa,
  activated: Aa,
  deactivated: Aa,
  errorCaptured: Aa,
  serverPrefetch: Aa,
  components: ja,
  directives: ja,
  watch: Na,
  provide: Da,
  inject: Oa,
};
function Da(e, t) {
  return t
    ? e
      ? function () {
          return c(
            _(e) ? e.call(this, this) : e,
            _(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Oa(e, t) {
  return ja(ka(e), ka(t));
}
function ka(e) {
  if (f(e)) {
    let t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Aa(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ja(e, t) {
  return e ? c(Object.create(null), e, t) : t;
}
function Ma(e, t) {
  return e
    ? f(e) && f(t)
      ? [...new Set([...e, ...t])]
      : c(Object.create(null), ma(e), ma(t ?? {}))
    : t;
}
function Na(e, t) {
  if (!e) return t;
  if (!t) return e;
  let n = c(Object.create(null), e);
  for (let r in t) n[r] = Aa(e[r], t[r]);
  return n;
}
function Pa() {
  return {
    app: null,
    config: {
      isNativeTag: a,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
var Fa = 0;
function Ia(e, t) {
  return function (n, r = null) {
    (_(n) || (n = c({}, n)), r != null && !b(r) && (r = null));
    let i = Pa(),
      a = new WeakSet(),
      o = [],
      s = !1,
      l = (i.app = {
        _uid: Fa++,
        _component: n,
        _props: r,
        _container: null,
        _context: i,
        _instance: null,
        version: $s,
        get config() {
          return i.config;
        },
        set config(e) {},
        use(e, ...t) {
          return (
            a.has(e) ||
              (e && _(e.install)
                ? (a.add(e), e.install(l, ...t))
                : _(e) && (a.add(e), e(l, ...t))),
            l
          );
        },
        mixin(e) {
          return (i.mixins.includes(e) || i.mixins.push(e), l);
        },
        component(e, t) {
          return t ? ((i.components[e] = t), l) : i.components[e];
        },
        directive(e, t) {
          return t ? ((i.directives[e] = t), l) : i.directives[e];
        },
        mount(a, o, c) {
          if (!s) {
            let u = l._ceVNode || z(n, r);
            return (
              (u.appContext = i),
              c === !0 ? (c = `svg`) : c === !1 && (c = void 0),
              o && t ? t(u, a) : e(u, a, c),
              (s = !0),
              (l._container = a),
              (a.__vue_app__ = l),
              Ks(u.component)
            );
          }
        },
        onUnmount(e) {
          o.push(e);
        },
        unmount() {
          s &&
            (Bn(o, l._instance, 16),
            e(null, l._container),
            delete l._container.__vue_app__);
        },
        provide(e, t) {
          return ((i.provides[e] = t), l);
        },
        runWithContext(e) {
          let t = La;
          La = l;
          try {
            return e();
          } finally {
            La = t;
          }
        },
      });
    return l;
  };
}
var La = null;
function Ra(e, t) {
  if (Os) {
    let n = Os.provides,
      r = Os.parent && Os.parent.provides;
    (r === n && (n = Os.provides = Object.create(r)), (n[e] = t));
  }
}
function za(e, t, n = !1) {
  let r = ks();
  if (r || La) {
    let i = La
      ? La._context.provides
      : r
        ? r.parent == null || r.ce
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
  }
}
function Ba() {
  return !!(ks() || La);
}
var Va = Symbol.for(`v-scx`),
  Ha = () => za(Va);
function Ua(e, t) {
  return qa(e, null, t);
}
function Wa(e, t) {
  return qa(e, null, { flush: `post` });
}
function Ga(e, t) {
  return qa(e, null, { flush: `sync` });
}
function Ka(e, t, n) {
  return qa(e, t, n);
}
function qa(e, t, r = n) {
  let { immediate: a, deep: o, flush: s, once: l } = r,
    u = c({}, r),
    d = (t && a) || (!t && s !== `post`),
    f;
  if (Fs) {
    if (s === `sync`) {
      let e = Ha();
      f = e.__watcherHandles ||= [];
    } else if (!d) {
      let e = () => {};
      return ((e.stop = i), (e.resume = i), (e.pause = i), e);
    }
  }
  let p = Os;
  u.call = (e, t, n) => Bn(e, p, t, n);
  let m = !1;
  (s === `post`
    ? (u.scheduler = (e) => {
        I(e, p && p.suspense);
      })
    : s !== `sync` &&
      ((m = !0),
      (u.scheduler = (e, t) => {
        t ? e() : Qn(e);
      })),
    (u.augmentJob = (e) => {
      (t && (e.flags |= 4),
        m && ((e.flags |= 2), p && ((e.id = p.uid), (e.i = p))));
    }));
  let h = jn(e, t, u);
  return (Fs && (f ? f.push(h) : d && h()), h);
}
function Ja(e, t, n) {
  let r = this.proxy,
    i = v(e) ? (e.includes(`.`) ? Ya(r, e) : () => r[e]) : e.bind(r, r),
    a;
  _(t) ? (a = t) : ((a = t.handler), (n = t));
  let o = Ms(this),
    s = qa(i, a.bind(r), n);
  return (o(), s);
}
function Ya(e, t) {
  let n = t.split(`.`);
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
function Xa(e, t, r = n) {
  let i = ks(),
    a = k(t),
    o = A(t),
    s = Za(e, a),
    c = gn((s, c) => {
      let l,
        u = n,
        d;
      return (
        Ga(() => {
          let t = e[a];
          j(l, t) && ((l = t), c());
        }),
        {
          get() {
            return (s(), r.get ? r.get(l) : l);
          },
          set(e) {
            let s = r.set ? r.set(e) : e;
            if (!j(s, l) && !(u !== n && j(e, u))) return;
            let f = i.vnode.props;
            ((f &&
              (t in f || a in f || o in f) &&
              (`onUpdate:${t}` in f ||
                `onUpdate:${a}` in f ||
                `onUpdate:${o}` in f)) ||
              ((l = e), c()),
              i.emit(`update:${t}`, s),
              j(e, s) && j(e, u) && !j(s, d) && c(),
              (u = e),
              (d = s));
          },
        }
      );
    });
  return (
    (c[Symbol.iterator] = () => {
      let e = 0;
      return {
        next() {
          return e < 2 ? { value: e++ ? s || n : c, done: !1 } : { done: !0 };
        },
      };
    }),
    c
  );
}
var Za = (e, t) =>
  t === `modelValue` || t === `model-value`
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${k(t)}Modifiers`] || e[`${A(t)}Modifiers`];
function Qa(e, t, ...r) {
  if (e.isUnmounted) return;
  let i = e.vnode.props || n,
    a = r,
    o = t.startsWith(`update:`),
    s = o && Za(i, t.slice(7));
  s &&
    (s.trim && (a = r.map((e) => (v(e) ? e.trim() : e))),
    s.number && (a = r.map(oe)));
  let c,
    l = i[(c = re(t))] || i[(c = re(k(t)))];
  (!l && o && (l = i[(c = re(A(t)))]), l && Bn(l, e, 6, a));
  let u = i[c + `Once`];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    ((e.emitted[c] = !0), Bn(u, e, 6, a));
  }
}
var $a = new WeakMap();
function eo(e, t, n = !1) {
  let r = n ? $a : t.emitsCache,
    i = r.get(e);
  if (i !== void 0) return i;
  let a = e.emits,
    o = {},
    s = !1;
  if (!_(e)) {
    let r = (e) => {
      let n = eo(e, t, !0);
      n && ((s = !0), c(o, n));
    };
    (!n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r));
  }
  return !a && !s
    ? (b(e) && r.set(e, null), null)
    : (f(a) ? a.forEach((e) => (o[e] = null)) : c(o, a),
      b(e) && r.set(e, o),
      o);
}
function to(e, t) {
  return !e || !o(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, ``)),
      d(e, t[0].toLowerCase() + t.slice(1)) || d(e, A(t)) || d(e, t));
}
function no(e) {
  let {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: i,
      propsOptions: [a],
      slots: o,
      attrs: c,
      emit: l,
      render: u,
      renderCache: d,
      props: f,
      data: p,
      setupState: m,
      ctx: h,
      inheritAttrs: g,
    } = e,
    _ = ur(e),
    v,
    y;
  try {
    if (n.shapeFlag & 4) {
      let e = i || r,
        t = e;
      ((v = bs(u.call(t, e, d, f, m, p, h))), (y = c));
    } else {
      let e = t;
      ((v = bs(
        e.length > 1 ? e(f, { attrs: c, slots: o, emit: l }) : e(f, null),
      )),
        (y = t.props ? c : io(c)));
    }
  } catch (t) {
    (($o.length = 0), Vn(t, e, 1), (v = z(R)));
  }
  let b = v;
  if (y && g !== !1) {
    let e = Object.keys(y),
      { shapeFlag: t } = b;
    e.length &&
      t & 7 &&
      (a && e.some(s) && (y = ao(y, a)), (b = gs(b, y, !1, !0)));
  }
  return (
    n.dirs &&
      ((b = gs(b, null, !1, !0)),
      (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Ur(b, n.transition),
    (v = b),
    ur(_),
    v
  );
}
function ro(e, t = !0) {
  let n;
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (cs(r)) {
      if (r.type !== R || r.children === `v-if`) {
        if (n) return;
        n = r;
      }
    } else return;
  }
  return n;
}
var io = (e) => {
    let t;
    for (let n in e)
      (n === `class` || n === `style` || o(n)) && ((t ||= {})[n] = e[n]);
    return t;
  },
  ao = (e, t) => {
    let n = {};
    for (let r in e) (!s(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function oo(e, t, n) {
  let { props: r, children: i, component: a } = e,
    { props: o, children: s, patchFlag: c } = t,
    l = a.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return r ? so(r, o, l) : !!o;
    if (c & 8) {
      let e = t.dynamicProps;
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (o[n] !== r[n] && !to(l, n)) return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable)
      ? !0
      : r === o
        ? !1
        : r
          ? o
            ? so(r, o, l)
            : !0
          : !!o;
  return !1;
}
function so(e, t, n) {
  let r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < r.length; i++) {
    let a = r[i];
    if (t[a] !== e[a] && !to(n, a)) return !0;
  }
  return !1;
}
function co({ vnode: e, parent: t }, n) {
  for (; t; ) {
    let r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      (((e = t.vnode).el = n), (t = t.parent));
    else break;
  }
}
var lo = {},
  uo = () => Object.create(lo),
  fo = (e) => Object.getPrototypeOf(e) === lo;
function po(e, t, n, r = !1) {
  let i = {},
    a = uo();
  for (let n in ((e.propsDefaults = Object.create(null)),
  ho(e, t, i, a),
  e.propsOptions[0]))
    n in i || (i[n] = void 0);
  (n ? (e.props = r ? i : Jt(i)) : e.type.props ? (e.props = i) : (e.props = a),
    (e.attrs = a));
}
function mo(e, t, n, r) {
  let {
      props: i,
      attrs: a,
      vnode: { patchFlag: o },
    } = e,
    s = P(i),
    [c] = e.propsOptions,
    l = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      let n = e.vnode.dynamicProps;
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (to(e.emitsOptions, o)) continue;
        let u = t[o];
        if (c)
          if (d(a, o)) u !== a[o] && ((a[o] = u), (l = !0));
          else {
            let t = k(o);
            i[t] = go(c, s, t, u, e, !1);
          }
        else u !== a[o] && ((a[o] = u), (l = !0));
      }
    }
  } else {
    ho(e, t, i, a) && (l = !0);
    let r;
    for (let a in s)
      (!t || (!d(t, a) && ((r = A(a)) === a || !d(t, r)))) &&
        (c
          ? n &&
            (n[a] !== void 0 || n[r] !== void 0) &&
            (i[a] = go(c, s, a, void 0, e, !0))
          : delete i[a]);
    if (a !== s) for (let e in a) (!t || !d(t, e)) && (delete a[e], (l = !0));
  }
  l && lt(e.attrs, `set`, ``);
}
function ho(e, t, r, i) {
  let [a, o] = e.propsOptions,
    s = !1,
    c;
  if (t)
    for (let n in t) {
      if (D(n)) continue;
      let l = t[n],
        u;
      a && d(a, (u = k(n)))
        ? !o || !o.includes(u)
          ? (r[u] = l)
          : ((c ||= {})[u] = l)
        : to(e.emitsOptions, n) ||
          ((!(n in i) || l !== i[n]) && ((i[n] = l), (s = !0)));
    }
  if (o) {
    let t = P(r),
      i = c || n;
    for (let n = 0; n < o.length; n++) {
      let s = o[n];
      r[s] = go(a, t, s, i[s], e, !d(i, s));
    }
  }
  return s;
}
function go(e, t, n, r, i, a) {
  let o = e[n];
  if (o != null) {
    let e = d(o, `default`);
    if (e && r === void 0) {
      let e = o.default;
      if (o.type !== Function && !o.skipFactory && _(e)) {
        let { propsDefaults: a } = i;
        if (n in a) r = a[n];
        else {
          let o = Ms(i);
          ((r = a[n] = e.call(null, t)), o());
        }
      } else r = e;
      i.ce && i.ce._setProp(n, r);
    }
    o[0] && (a && !e ? (r = !1) : o[1] && (r === `` || r === A(n)) && (r = !0));
  }
  return r;
}
var _o = new WeakMap();
function vo(e, t, i = !1) {
  let a = i ? _o : t.propsCache,
    o = a.get(e);
  if (o) return o;
  let s = e.props,
    l = {},
    u = [],
    p = !1;
  if (!_(e)) {
    let n = (e) => {
      p = !0;
      let [n, r] = vo(e, t, !0);
      (c(l, n), r && u.push(...r));
    };
    (!i && t.mixins.length && t.mixins.forEach(n),
      e.extends && n(e.extends),
      e.mixins && e.mixins.forEach(n));
  }
  if (!s && !p) return (b(e) && a.set(e, r), r);
  if (f(s))
    for (let e = 0; e < s.length; e++) {
      let t = k(s[e]);
      yo(t) && (l[t] = n);
    }
  else if (s)
    for (let e in s) {
      let t = k(e);
      if (yo(t)) {
        let n = s[e],
          r = (l[t] = f(n) || _(n) ? { type: n } : c({}, n)),
          i = r.type,
          a = !1,
          o = !0;
        if (f(i))
          for (let e = 0; e < i.length; ++e) {
            let t = i[e],
              n = _(t) && t.name;
            if (n === `Boolean`) {
              a = !0;
              break;
            } else n === `String` && (o = !1);
          }
        else a = _(i) && i.name === `Boolean`;
        ((r[0] = a), (r[1] = o), (a || d(r, `default`)) && u.push(t));
      }
    }
  let m = [l, u];
  return (b(e) && a.set(e, m), m);
}
function yo(e) {
  return e[0] !== `$` && !D(e);
}
var bo = (e) => e === `_` || e === `_ctx` || e === `$stable`,
  xo = (e) => (f(e) ? e.map(bs) : [bs(e)]),
  So = (e, t, n) => {
    if (t._n) return t;
    let r = mr((...e) => xo(t(...e)), n);
    return ((r._c = !1), r);
  },
  Co = (e, t, n) => {
    let r = e._ctx;
    for (let n in e) {
      if (bo(n)) continue;
      let i = e[n];
      if (_(i)) t[n] = So(n, i, r);
      else if (i != null) {
        let e = xo(i);
        t[n] = () => e;
      }
    }
  },
  wo = (e, t) => {
    let n = xo(t);
    e.slots.default = () => n;
  },
  To = (e, t, n) => {
    for (let r in t) (n || !bo(r)) && (e[r] = t[r]);
  },
  Eo = (e, t, n) => {
    let r = (e.slots = uo());
    if (e.vnode.shapeFlag & 32) {
      let e = t._;
      e ? (To(r, t, n), n && ae(r, `_`, e, !0)) : Co(t, r);
    } else t && wo(e, t);
  },
  Do = (e, t, r) => {
    let { vnode: i, slots: a } = e,
      o = !0,
      s = n;
    if (i.shapeFlag & 32) {
      let e = t._;
      (e
        ? r && e === 1
          ? (o = !1)
          : To(a, t, r)
        : ((o = !t.$stable), Co(t, a)),
        (s = t));
    } else t && (wo(e, t), (s = { default: 1 }));
    if (o) for (let e in a) !bo(e) && s[e] == null && delete a[e];
  },
  I = Jo;
function Oo(e) {
  return Ao(e);
}
function ko(e) {
  return Ao(e, ii);
}
function Ao(e, t) {
  let a = le();
  a.__VUE__ = !0;
  let {
      insert: o,
      remove: s,
      patchProp: c,
      createElement: l,
      createText: u,
      createComment: d,
      setText: f,
      setElementText: p,
      parentNode: m,
      nextSibling: h,
      setScopeId: g = i,
      insertStaticContent: _,
    } = e,
    v = (
      e,
      t,
      n,
      r = null,
      i = null,
      a = null,
      o = void 0,
      s = null,
      c = !!t.dynamicChildren,
    ) => {
      if (e === t) return;
      (e && !ls(e, t) && ((r = _e(e)), fe(e, i, a, !0), (e = null)),
        t.patchFlag === -2 && ((c = !1), (t.dynamicChildren = null)));
      let { type: l, ref: u, shapeFlag: d } = t;
      switch (l) {
        case Zo:
          y(e, t, n, r);
          break;
        case R:
          b(e, t, n, r);
          break;
        case Qo:
          e ?? x(t, n, r, o);
          break;
        case L:
          A(e, t, n, r, i, a, o, s, c);
          break;
        default:
          d & 1
            ? w(e, t, n, r, i, a, o, s, c)
            : d & 6
              ? ne(e, t, n, r, i, a, o, s, c)
              : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, be);
      }
      u != null && i
        ? Xr(u, e && e.ref, a, t || e, !t)
        : u == null && e && e.ref != null && Xr(e.ref, null, a, e, !0);
    },
    y = (e, t, n, r) => {
      if (e == null) o((t.el = u(t.children)), n, r);
      else {
        let n = (t.el = e.el);
        t.children !== e.children && f(n, t.children);
      }
    },
    b = (e, t, n, r) => {
      e == null ? o((t.el = d(t.children || ``)), n, r) : (t.el = e.el);
    },
    x = (e, t, n, r) => {
      [e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
    },
    S = ({ el: e, anchor: t }, n, r) => {
      let i;
      for (; e && e !== t; ) ((i = h(e)), o(e, n, r), (e = i));
      o(t, n, r);
    },
    C = ({ el: e, anchor: t }) => {
      let n;
      for (; e && e !== t; ) ((n = h(e)), s(e), (e = n));
      s(t);
    },
    w = (e, t, n, r, i, a, o, s, c) => {
      if (
        (t.type === `svg` ? (o = `svg`) : t.type === `math` && (o = `mathml`),
        e == null)
      )
        T(t, n, r, i, a, o, s, c);
      else {
        let n = e.el && e.el._isVueCE ? e.el : null;
        try {
          (n && n._beginPatch(), ee(e, t, i, a, o, s, c));
        } finally {
          n && n._endPatch();
        }
      }
    },
    T = (e, t, n, r, i, a, s, u) => {
      let d,
        f,
        { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
      if (
        ((d = e.el = l(e.type, a, m && m.is, m)),
        h & 8
          ? p(d, e.children)
          : h & 16 && O(e.children, d, null, r, i, jo(e, a), s, u),
        _ && gr(e, null, r, `created`),
        E(d, e, e.scopeId, s, r),
        m)
      ) {
        for (let e in m) e !== `value` && !D(e) && c(d, e, null, m[e], a, r);
        (`value` in m && c(d, `value`, null, m.value, a),
          (f = m.onVnodeBeforeMount) && ws(f, r, e));
      }
      _ && gr(e, null, r, `beforeMount`);
      let v = No(i, g);
      (v && g.beforeEnter(d),
        o(d, t, n),
        ((f = m && m.onVnodeMounted) || v || _) &&
          I(() => {
            (f && ws(f, r, e), v && g.enter(d), _ && gr(e, null, r, `mounted`));
          }, i));
    },
    E = (e, t, n, r, i) => {
      if ((n && g(e, n), r)) for (let t = 0; t < r.length; t++) g(e, r[t]);
      if (i) {
        let n = i.subTree;
        if (
          t === n ||
          (Ro(n.type) && (n.ssContent === t || n.ssFallback === t))
        ) {
          let t = i.vnode;
          E(e, t, t.scopeId, t.slotScopeIds, i.parent);
        }
      }
    },
    O = (e, t, n, r, i, a, o, s, c = 0) => {
      for (let l = c; l < e.length; l++)
        v(null, (e[l] = s ? xs(e[l]) : bs(e[l])), t, n, r, i, a, o, s);
    },
    ee = (e, t, r, i, a, o, s) => {
      let l = (t.el = e.el),
        { patchFlag: u, dynamicChildren: d, dirs: f } = t;
      u |= e.patchFlag & 16;
      let m = e.props || n,
        h = t.props || n,
        g;
      if (
        (r && Mo(r, !1),
        (g = h.onVnodeBeforeUpdate) && ws(g, r, t, e),
        f && gr(t, e, r, `beforeUpdate`),
        r && Mo(r, !0),
        ((m.innerHTML && h.innerHTML == null) ||
          (m.textContent && h.textContent == null)) &&
          p(l, ``),
        d
          ? k(e.dynamicChildren, d, l, r, i, jo(t, a), o)
          : s || se(e, t, l, null, r, i, jo(t, a), o, !1),
        u > 0)
      ) {
        if (u & 16) te(l, m, h, r, a);
        else if (
          (u & 2 && m.class !== h.class && c(l, `class`, null, h.class, a),
          u & 4 && c(l, `style`, m.style, h.style, a),
          u & 8)
        ) {
          let e = t.dynamicProps;
          for (let t = 0; t < e.length; t++) {
            let n = e[t],
              i = m[n],
              o = h[n];
            (o !== i || n === `value`) && c(l, n, i, o, a, r);
          }
        }
        u & 1 && e.children !== t.children && p(l, t.children);
      } else !s && d == null && te(l, m, h, r, a);
      ((g = h.onVnodeUpdated) || f) &&
        I(() => {
          (g && ws(g, r, t, e), f && gr(t, e, r, `updated`));
        }, i);
    },
    k = (e, t, n, r, i, a, o) => {
      for (let s = 0; s < t.length; s++) {
        let c = e[s],
          l = t[s];
        v(
          c,
          l,
          c.el && (c.type === L || !ls(c, l) || c.shapeFlag & 198)
            ? m(c.el)
            : n,
          null,
          r,
          i,
          a,
          o,
          !0,
        );
      }
    },
    te = (e, t, r, i, a) => {
      if (t !== r) {
        if (t !== n)
          for (let n in t) !D(n) && !(n in r) && c(e, n, t[n], null, a, i);
        for (let n in r) {
          if (D(n)) continue;
          let o = r[n],
            s = t[n];
          o !== s && n !== `value` && c(e, n, s, o, a, i);
        }
        `value` in r && c(e, `value`, t.value, r.value, a);
      }
    },
    A = (e, t, n, r, i, a, s, c, l) => {
      let d = (t.el = e ? e.el : u(``)),
        f = (t.anchor = e ? e.anchor : u(``)),
        { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
      (h && (c = c ? c.concat(h) : h),
        e == null
          ? (o(d, n, r), o(f, n, r), O(t.children || [], n, f, i, a, s, c, l))
          : p > 0 && p & 64 && m && e.dynamicChildren
            ? (k(e.dynamicChildren, m, n, i, a, s, c),
              (t.key != null || (i && t === i.subTree)) && Po(e, t, !0))
            : se(e, t, n, f, i, a, s, c, l));
    },
    ne = (e, t, n, r, i, a, o, s, c) => {
      ((t.slotScopeIds = s),
        e == null
          ? t.shapeFlag & 512
            ? i.ctx.activate(t, n, r, o, c)
            : re(t, n, r, i, a, o, c)
          : j(e, t, c));
    },
    re = (e, t, n, r, i, a, o) => {
      let s = (e.component = Ds(e, r, i));
      if ((yi(e) && (s.ctx.renderer = be), Is(s, !1, o), s.asyncDep)) {
        if ((i && i.registerDep(s, ae, o), !e.el)) {
          let r = (s.subTree = z(R));
          (b(null, r, t, n), (e.placeholder = r.el));
        }
      } else ae(s, e, t, n, i, a, o);
    },
    j = (e, t, n) => {
      let r = (t.component = e.component);
      if (oo(e, t, n))
        if (r.asyncDep && !r.asyncResolved) {
          oe(r, t, n);
          return;
        } else ((r.next = t), r.update());
      else ((t.el = e.el), (r.vnode = t));
    },
    ae = (e, t, n, r, i, a, o) => {
      let s = () => {
        if (e.isMounted) {
          let { next: t, bu: n, u: r, parent: c, vnode: l } = e;
          {
            let n = Io(e);
            if (n) {
              (t && ((t.el = l.el), oe(e, t, o)),
                n.asyncDep.then(() => {
                  e.isUnmounted || s();
                }));
              return;
            }
          }
          let u = t,
            d;
          (Mo(e, !1),
            t ? ((t.el = l.el), oe(e, t, o)) : (t = l),
            n && ie(n),
            (d = t.props && t.props.onVnodeBeforeUpdate) && ws(d, c, t, l),
            Mo(e, !0));
          let f = no(e),
            p = e.subTree;
          ((e.subTree = f),
            v(p, f, m(p.el), _e(p), e, i, a),
            (t.el = f.el),
            u === null && co(e, f.el),
            r && I(r, i),
            (d = t.props && t.props.onVnodeUpdated) &&
              I(() => ws(d, c, t, l), i));
        } else {
          let o,
            { el: s, props: c } = t,
            { bm: l, m: u, parent: d, root: f, type: p } = e,
            m = gi(t);
          if (
            (Mo(e, !1),
            l && ie(l),
            !m && (o = c && c.onVnodeBeforeMount) && ws(o, d, t),
            Mo(e, !0),
            s && Se)
          ) {
            let t = () => {
              ((e.subTree = no(e)), Se(s, e.subTree, e, i, null));
            };
            m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
          } else {
            f.ce && f.ce._def.shadowRoot !== !1 && f.ce._injectChildStyle(p);
            let o = (e.subTree = no(e));
            (v(null, o, n, r, e, i, a), (t.el = o.el));
          }
          if ((u && I(u, i), !m && (o = c && c.onVnodeMounted))) {
            let e = t;
            I(() => ws(o, d, e), i);
          }
          ((t.shapeFlag & 256 ||
            (d && gi(d.vnode) && d.vnode.shapeFlag & 256)) &&
            e.a &&
            I(e.a, i),
            (e.isMounted = !0),
            (t = n = r = null));
        }
      };
      e.scope.on();
      let c = (e.effect = new Pe(s));
      e.scope.off();
      let l = (e.update = c.run.bind(c)),
        u = (e.job = c.runIfDirty.bind(c));
      ((u.i = e), (u.id = e.uid), (c.scheduler = () => Qn(u)), Mo(e, !0), l());
    },
    oe = (e, t, n) => {
      t.component = e;
      let r = e.vnode.props;
      ((e.vnode = t),
        (e.next = null),
        mo(e, t.props, r, n),
        Do(e, t.children, n),
        Ze(),
        tr(e),
        Qe());
    },
    se = (e, t, n, r, i, a, o, s, c = !1) => {
      let l = e && e.children,
        u = e ? e.shapeFlag : 0,
        d = t.children,
        { patchFlag: f, shapeFlag: m } = t;
      if (f > 0) {
        if (f & 128) {
          ue(l, d, n, r, i, a, o, s, c);
          return;
        } else if (f & 256) {
          ce(l, d, n, r, i, a, o, s, c);
          return;
        }
      }
      m & 8
        ? (u & 16 && ge(l, i, a), d !== l && p(n, d))
        : u & 16
          ? m & 16
            ? ue(l, d, n, r, i, a, o, s, c)
            : ge(l, i, a, !0)
          : (u & 8 && p(n, ``), m & 16 && O(d, n, r, i, a, o, s, c));
    },
    ce = (e, t, n, i, a, o, s, c, l) => {
      ((e ||= r), (t ||= r));
      let u = e.length,
        d = t.length,
        f = Math.min(u, d),
        p;
      for (p = 0; p < f; p++) {
        let r = (t[p] = l ? xs(t[p]) : bs(t[p]));
        v(e[p], r, n, null, a, o, s, c, l);
      }
      u > d ? ge(e, a, o, !0, !1, f) : O(t, n, i, a, o, s, c, l, f);
    },
    ue = (e, t, n, i, a, o, s, c, l) => {
      let u = 0,
        d = t.length,
        f = e.length - 1,
        p = d - 1;
      for (; u <= f && u <= p; ) {
        let r = e[u],
          i = (t[u] = l ? xs(t[u]) : bs(t[u]));
        if (ls(r, i)) v(r, i, n, null, a, o, s, c, l);
        else break;
        u++;
      }
      for (; u <= f && u <= p; ) {
        let r = e[f],
          i = (t[p] = l ? xs(t[p]) : bs(t[p]));
        if (ls(r, i)) v(r, i, n, null, a, o, s, c, l);
        else break;
        (f--, p--);
      }
      if (u > f) {
        if (u <= p) {
          let e = p + 1,
            r = e < d ? t[e].el : i;
          for (; u <= p; )
            (v(null, (t[u] = l ? xs(t[u]) : bs(t[u])), n, r, a, o, s, c, l),
              u++);
        }
      } else if (u > p) for (; u <= f; ) (fe(e[u], a, o, !0), u++);
      else {
        let m = u,
          h = u,
          g = new Map();
        for (u = h; u <= p; u++) {
          let e = (t[u] = l ? xs(t[u]) : bs(t[u]));
          e.key != null && g.set(e.key, u);
        }
        let _,
          y = 0,
          b = p - h + 1,
          x = !1,
          S = 0,
          C = Array(b);
        for (u = 0; u < b; u++) C[u] = 0;
        for (u = m; u <= f; u++) {
          let r = e[u];
          if (y >= b) {
            fe(r, a, o, !0);
            continue;
          }
          let i;
          if (r.key != null) i = g.get(r.key);
          else
            for (_ = h; _ <= p; _++)
              if (C[_ - h] === 0 && ls(r, t[_])) {
                i = _;
                break;
              }
          i === void 0
            ? fe(r, a, o, !0)
            : ((C[i - h] = u + 1),
              i >= S ? (S = i) : (x = !0),
              v(r, t[i], n, null, a, o, s, c, l),
              y++);
        }
        let w = x ? Fo(C) : r;
        for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
          let e = h + u,
            r = t[e],
            f = t[e + 1],
            p = e + 1 < d ? f.el || f.placeholder : i;
          C[u] === 0
            ? v(null, r, n, p, a, o, s, c, l)
            : x && (_ < 0 || u !== w[_] ? de(r, n, p, 2) : _--);
        }
      }
    },
    de = (e, t, n, r, i = null) => {
      let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
      if (d & 6) {
        de(e.component.subTree, t, n, r);
        return;
      }
      if (d & 128) {
        e.suspense.move(t, n, r);
        return;
      }
      if (d & 64) {
        c.move(e, t, n, be);
        return;
      }
      if (c === L) {
        o(a, t, n);
        for (let e = 0; e < u.length; e++) de(u[e], t, n, r);
        o(e.anchor, t, n);
        return;
      }
      if (c === Qo) {
        S(e, t, n);
        return;
      }
      if (r !== 2 && d & 1 && l)
        if (r === 0) (l.beforeEnter(a), o(a, t, n), I(() => l.enter(a), i));
        else {
          let { leave: r, delayLeave: i, afterLeave: c } = l,
            u = () => {
              e.ctx.isUnmounted ? s(a) : o(a, t, n);
            },
            d = () => {
              (a._isLeaving && a[Ar](!0),
                r(a, () => {
                  (u(), c && c());
                }));
            };
          i ? i(a, u, d) : d();
        }
      else o(a, t, n);
    },
    fe = (e, t, n, r = !1, i = !1) => {
      let {
        type: a,
        props: o,
        ref: s,
        children: c,
        dynamicChildren: l,
        shapeFlag: u,
        patchFlag: d,
        dirs: f,
        cacheIndex: p,
      } = e;
      if (
        (d === -2 && (i = !1),
        s != null && (Ze(), Xr(s, null, n, e, !0), Qe()),
        p != null && (t.renderCache[p] = void 0),
        u & 256)
      ) {
        t.ctx.deactivate(e);
        return;
      }
      let m = u & 1 && f,
        h = !gi(e),
        g;
      if ((h && (g = o && o.onVnodeBeforeUnmount) && ws(g, t, e), u & 6))
        he(e.component, n, r);
      else {
        if (u & 128) {
          e.suspense.unmount(n, r);
          return;
        }
        (m && gr(e, null, t, `beforeUnmount`),
          u & 64
            ? e.type.remove(e, t, n, be, r)
            : l && !l.hasOnce && (a !== L || (d > 0 && d & 64))
              ? ge(l, t, n, !1, !0)
              : ((a === L && d & 384) || (!i && u & 16)) && ge(c, t, n),
          r && pe(e));
      }
      ((h && (g = o && o.onVnodeUnmounted)) || m) &&
        I(() => {
          (g && ws(g, t, e), m && gr(e, null, t, `unmounted`));
        }, n);
    },
    pe = (e) => {
      let { type: t, el: n, anchor: r, transition: i } = e;
      if (t === L) {
        me(n, r);
        return;
      }
      if (t === Qo) {
        C(e);
        return;
      }
      let a = () => {
        (s(n), i && !i.persisted && i.afterLeave && i.afterLeave());
      };
      if (e.shapeFlag & 1 && i && !i.persisted) {
        let { leave: t, delayLeave: r } = i,
          o = () => t(n, a);
        r ? r(e.el, a, o) : o();
      } else a();
    },
    me = (e, t) => {
      let n;
      for (; e !== t; ) ((n = h(e)), s(e), (e = n));
      s(t);
    },
    he = (e, t, n) => {
      let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
      (Lo(c),
        Lo(l),
        r && ie(r),
        i.stop(),
        a && ((a.flags |= 8), fe(o, e, t, n)),
        s && I(s, t),
        I(() => {
          e.isUnmounted = !0;
        }, t));
    },
    ge = (e, t, n, r = !1, i = !1, a = 0) => {
      for (let o = a; o < e.length; o++) fe(e[o], t, n, r, i);
    },
    _e = (e) => {
      if (e.shapeFlag & 6) return _e(e.component.subTree);
      if (e.shapeFlag & 128) return e.suspense.next();
      let t = h(e.anchor || e.el),
        n = t && t[_r];
      return n ? h(n) : t;
    },
    ve = !1,
    ye = (e, t, n) => {
      (e == null
        ? t._vnode && fe(t._vnode, null, null, !0)
        : v(t._vnode || null, e, t, null, null, null, n),
        (t._vnode = e),
        (ve ||= ((ve = !0), tr(), nr(), !1)));
    },
    be = {
      p: v,
      um: fe,
      m: de,
      r: pe,
      mt: re,
      mc: O,
      pc: se,
      pbc: k,
      n: _e,
      o: e,
    },
    xe,
    Se;
  return (
    t && ([xe, Se] = t(be)),
    { render: ye, hydrate: xe, createApp: Ia(ye, xe) }
  );
}
function jo({ type: e, props: t }, n) {
  return (n === `svg` && e === `foreignObject`) ||
    (n === `mathml` &&
      e === `annotation-xml` &&
      t &&
      t.encoding &&
      t.encoding.includes(`html`))
    ? void 0
    : n;
}
function Mo({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function No(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Po(e, t, n = !1) {
  let r = e.children,
    i = t.children;
  if (f(r) && f(i))
    for (let e = 0; e < r.length; e++) {
      let t = r[e],
        a = i[e];
      (a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[e] = xs(i[e])), (a.el = t.el)),
        !n && a.patchFlag !== -2 && Po(t, a)),
        a.type === Zo && a.patchFlag !== -1 && (a.el = t.el),
        a.type === R && !a.el && (a.el = t.el));
    }
}
function Fo(e) {
  let t = e.slice(),
    n = [0],
    r,
    i,
    a,
    o,
    s,
    c = e.length;
  for (r = 0; r < c; r++) {
    let c = e[r];
    if (c !== 0) {
      if (((i = n[n.length - 1]), e[i] < c)) {
        ((t[r] = i), n.push(r));
        continue;
      }
      for (a = 0, o = n.length - 1; a < o; )
        ((s = (a + o) >> 1), e[n[s]] < c ? (a = s + 1) : (o = s));
      c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), (n[a] = r));
    }
  }
  for (a = n.length, o = n[a - 1]; a-- > 0; ) ((n[a] = o), (o = t[o]));
  return n;
}
function Io(e) {
  let t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Io(t);
}
function Lo(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
var Ro = (e) => e.__isSuspense,
  zo = 0,
  Bo = {
    name: `Suspense`,
    __isSuspense: !0,
    process(e, t, n, r, i, a, o, s, c, l) {
      if (e == null) Ho(t, n, r, i, a, o, s, c, l);
      else {
        if (a && a.deps > 0 && !e.suspense.isInFallback) {
          ((t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el));
          return;
        }
        Uo(e, t, n, r, i, o, s, c, l);
      }
    },
    hydrate: Go,
    normalize: Ko,
  };
function Vo(e, t) {
  let n = e.props && e.props[t];
  _(n) && n();
}
function Ho(e, t, n, r, i, a, o, s, c) {
  let {
      p: l,
      o: { createElement: u },
    } = c,
    d = u(`div`),
    f = (e.suspense = Wo(e, i, r, t, d, n, a, o, s, c));
  (l(null, (f.pendingBranch = e.ssContent), d, null, r, f, a, o),
    f.deps > 0
      ? (Vo(e, `onPending`),
        Vo(e, `onFallback`),
        l(null, e.ssFallback, t, n, r, null, a, o),
        Yo(f, e.ssFallback))
      : f.resolve(!1, !0));
}
function Uo(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
  let d = (t.suspense = e.suspense);
  ((d.vnode = t), (t.el = e.el));
  let f = t.ssContent,
    p = t.ssFallback,
    { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
  if (h)
    ((d.pendingBranch = f),
      ls(h, f)
        ? (c(h, f, d.hiddenContainer, null, i, d, a, o, s),
          d.deps <= 0
            ? d.resolve()
            : g && (_ || (c(m, p, n, r, i, null, a, o, s), Yo(d, p))))
        : ((d.pendingId = zo++),
          _ ? ((d.isHydrating = !1), (d.activeBranch = h)) : l(h, i, d),
          (d.deps = 0),
          (d.effects.length = 0),
          (d.hiddenContainer = u(`div`)),
          g
            ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s),
              d.deps <= 0
                ? d.resolve()
                : (c(m, p, n, r, i, null, a, o, s), Yo(d, p)))
            : m && ls(m, f)
              ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0))
              : (c(null, f, d.hiddenContainer, null, i, d, a, o, s),
                d.deps <= 0 && d.resolve())));
  else if (m && ls(m, f)) (c(m, f, n, r, i, d, a, o, s), Yo(d, f));
  else if (
    (Vo(t, `onPending`),
    (d.pendingBranch = f),
    f.shapeFlag & 512
      ? (d.pendingId = f.component.suspenseId)
      : (d.pendingId = zo++),
    c(null, f, d.hiddenContainer, null, i, d, a, o, s),
    d.deps <= 0)
  )
    d.resolve();
  else {
    let { timeout: e, pendingId: t } = d;
    e > 0
      ? setTimeout(() => {
          d.pendingId === t && d.fallback(p);
        }, e)
      : e === 0 && d.fallback(p);
  }
}
function Wo(e, t, n, r, i, a, o, s, c, l, u = !1) {
  let {
      p: d,
      m: f,
      um: p,
      n: m,
      o: { parentNode: h, remove: g },
    } = l,
    _,
    v = Xo(e);
  v && t && t.pendingBranch && ((_ = t.pendingId), t.deps++);
  let y = e.props ? se(e.props.timeout) : void 0,
    b = a,
    x = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: o,
      container: r,
      hiddenContainer: i,
      deps: 0,
      pendingId: zo++,
      timeout: typeof y == `number` ? y : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !u,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(e = !1, n = !1) {
        let {
            vnode: r,
            activeBranch: i,
            pendingBranch: o,
            pendingId: s,
            effects: c,
            parentComponent: l,
            container: u,
            isInFallback: d,
          } = x,
          g = !1;
        (x.isHydrating
          ? (x.isHydrating = !1)
          : e ||
            ((g = i && o.transition && o.transition.mode === `out-in`),
            g &&
              (i.transition.afterLeave = () => {
                s === x.pendingId &&
                  (f(o, u, a === b ? m(i) : a, 0),
                  er(c),
                  d && r.ssFallback && (r.ssFallback.el = null));
              }),
            i &&
              (h(i.el) === u && (a = m(i)),
              p(i, l, x, !0),
              !g && d && r.ssFallback && I(() => (r.ssFallback.el = null), x)),
            g || f(o, u, a, 0)),
          Yo(x, o),
          (x.pendingBranch = null),
          (x.isInFallback = !1));
        let y = x.parent,
          S = !1;
        for (; y; ) {
          if (y.pendingBranch) {
            (y.effects.push(...c), (S = !0));
            break;
          }
          y = y.parent;
        }
        (!S && !g && er(c),
          (x.effects = []),
          v &&
            t &&
            t.pendingBranch &&
            _ === t.pendingId &&
            (t.deps--, t.deps === 0 && !n && t.resolve()),
          Vo(r, `onResolve`));
      },
      fallback(e) {
        if (!x.pendingBranch) return;
        let {
          vnode: t,
          activeBranch: n,
          parentComponent: r,
          container: i,
          namespace: a,
        } = x;
        Vo(t, `onFallback`);
        let o = m(n),
          l = () => {
            x.isInFallback && (d(null, e, i, o, r, null, a, s, c), Yo(x, e));
          },
          u = e.transition && e.transition.mode === `out-in`;
        (u && (n.transition.afterLeave = l),
          (x.isInFallback = !0),
          p(n, r, null, !0),
          u || l());
      },
      move(e, t, n) {
        (x.activeBranch && f(x.activeBranch, e, t, n), (x.container = e));
      },
      next() {
        return x.activeBranch && m(x.activeBranch);
      },
      registerDep(e, t, n) {
        let r = !!x.pendingBranch;
        r && x.deps++;
        let i = e.vnode.el;
        e.asyncDep
          .catch((t) => {
            Vn(t, e, 0);
          })
          .then((a) => {
            if (e.isUnmounted || x.isUnmounted || x.pendingId !== e.suspenseId)
              return;
            e.asyncResolved = !0;
            let { vnode: s } = e;
            (Rs(e, a, !1), i && (s.el = i));
            let c = !i && e.subTree.el;
            (t(e, s, h(i || e.subTree.el), i ? null : m(e.subTree), x, o, n),
              c && ((s.placeholder = null), g(c)),
              co(e, s.el),
              r && --x.deps === 0 && x.resolve());
          });
      },
      unmount(e, t) {
        ((x.isUnmounted = !0),
          x.activeBranch && p(x.activeBranch, n, e, t),
          x.pendingBranch && p(x.pendingBranch, n, e, t));
      },
    };
  return x;
}
function Go(e, t, n, r, i, a, o, s, c) {
  let l = (t.suspense = Wo(
      t,
      r,
      n,
      e.parentNode,
      document.createElement(`div`),
      null,
      i,
      a,
      o,
      s,
      !0,
    )),
    u = c(e, (l.pendingBranch = t.ssContent), n, l, a, o);
  return (l.deps === 0 && l.resolve(!1, !0), u);
}
function Ko(e) {
  let { shapeFlag: t, children: n } = e,
    r = t & 32;
  ((e.ssContent = qo(r ? n.default : n)),
    (e.ssFallback = r ? qo(n.fallback) : z(R)));
}
function qo(e) {
  let t;
  if (_(e)) {
    let n = rs && e._c;
    (n && ((e._d = !1), ts()), (e = e()), n && ((e._d = !0), (t = es), ns()));
  }
  return (
    f(e) && (e = ro(e)),
    (e = bs(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)),
    e
  );
}
function Jo(e, t) {
  t && t.pendingBranch
    ? f(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : er(e);
}
function Yo(e, t) {
  e.activeBranch = t;
  let { vnode: n, parentComponent: r } = e,
    i = t.el;
  for (; !i && t.component; ) ((t = t.component.subTree), (i = t.el));
  ((n.el = i), r && r.subTree === n && ((r.vnode.el = i), co(r, i)));
}
function Xo(e) {
  let t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
var L = Symbol.for(`v-fgt`),
  Zo = Symbol.for(`v-txt`),
  R = Symbol.for(`v-cmt`),
  Qo = Symbol.for(`v-stc`),
  $o = [],
  es = null;
function ts(e = !1) {
  $o.push((es = e ? null : []));
}
function ns() {
  ($o.pop(), (es = $o[$o.length - 1] || null));
}
var rs = 1;
function is(e, t = !1) {
  ((rs += e), e < 0 && es && t && (es.hasOnce = !0));
}
function as(e) {
  return (
    (e.dynamicChildren = rs > 0 ? es || r : null),
    ns(),
    rs > 0 && es && es.push(e),
    e
  );
}
function os(e, t, n, r, i, a) {
  return as(ps(e, t, n, r, i, a, !0));
}
function ss(e, t, n, r, i) {
  return as(z(e, t, n, r, i, !0));
}
function cs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ls(e, t) {
  return e.type === t.type && e.key === t.key;
}
function us(e) {}
var ds = ({ key: e }) => e ?? null,
  fs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == `number` && (e = `` + e),
    e == null ? null : v(e) || F(e) || _(e) ? { i: cr, r: e, k: t, f: !!n } : e
  );
function ps(
  e,
  t = null,
  n = null,
  r = 0,
  i = null,
  a = e === L ? 0 : 1,
  o = !1,
  s = !1,
) {
  let c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ds(t),
    ref: t && fs(t),
    scopeId: lr,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: cr,
  };
  return (
    s
      ? (Ss(c, n), a & 128 && e.normalize(c))
      : n && (c.shapeFlag |= v(n) ? 8 : 16),
    rs > 0 &&
      !o &&
      es &&
      (c.patchFlag > 0 || a & 6) &&
      c.patchFlag !== 32 &&
      es.push(c),
    c
  );
}
var z = ms;
function ms(e, t = null, n = null, r = 0, i = null, a = !1) {
  if (((!e || e === Ui) && (e = R), cs(e))) {
    let r = gs(e, t, !0);
    return (
      n && Ss(r, n),
      rs > 0 &&
        !a &&
        es &&
        (r.shapeFlag & 6 ? (es[es.indexOf(e)] = r) : es.push(r)),
      (r.patchFlag = -2),
      r
    );
  }
  if ((Js(e) && (e = e.__vccOpts), t)) {
    t = hs(t);
    let { class: e, style: n } = t;
    (e && !v(e) && (t.class = ge(e)),
      b(n) && (tn(n) && !f(n) && (n = c({}, n)), (t.style = de(n))));
  }
  let o = v(e) ? 1 : Ro(e) ? 128 : vr(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
  return ps(e, t, n, r, i, o, a, !0);
}
function hs(e) {
  return e ? (tn(e) || fo(e) ? c({}, e) : e) : null;
}
function gs(e, t, n = !1, r = !1) {
  let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e,
    l = t ? Cs(i || {}, t) : i,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: l,
      key: l && ds(l),
      ref:
        t && t.ref
          ? n && a
            ? f(a)
              ? a.concat(fs(t))
              : [a, fs(t)]
            : fs(t)
          : a,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: s,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== L ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && gs(e.ssContent),
      ssFallback: e.ssFallback && gs(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (c && r && Ur(u, c.clone(u)), u);
}
function _s(e = ` `, t = 0) {
  return z(Zo, null, e, t);
}
function vs(e, t) {
  let n = z(Qo, null, e);
  return ((n.staticCount = t), n);
}
function ys(e = ``, t = !1) {
  return t ? (ts(), ss(R, null, e)) : z(R, null, e);
}
function bs(e) {
  return e == null || typeof e == `boolean`
    ? z(R)
    : f(e)
      ? z(L, null, e.slice())
      : cs(e)
        ? xs(e)
        : z(Zo, null, String(e));
}
function xs(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : gs(e);
}
function Ss(e, t) {
  let n = 0,
    { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (f(t)) n = 16;
  else if (typeof t == `object`)
    if (r & 65) {
      let n = t.default;
      n && (n._c && (n._d = !1), Ss(e, n()), n._c && (n._d = !0));
      return;
    } else {
      n = 32;
      let r = t._;
      !r && !fo(t)
        ? (t._ctx = cr)
        : r === 3 &&
          cr &&
          (cr.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    _(t)
      ? ((t = { default: t, _ctx: cr }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [_s(t)])) : (n = 8));
  ((e.children = t), (e.shapeFlag |= n));
}
function Cs(...e) {
  let t = {};
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    for (let e in r)
      if (e === `class`)
        t.class !== r.class && (t.class = ge([t.class, r.class]));
      else if (e === `style`) t.style = de([t.style, r.style]);
      else if (o(e)) {
        let n = t[e],
          i = r[e];
        i &&
          n !== i &&
          !(f(n) && n.includes(i)) &&
          (t[e] = n ? [].concat(n, i) : i);
      } else e !== `` && (t[e] = r[e]);
  }
  return t;
}
function ws(e, t, n, r = null) {
  Bn(e, t, 7, [n, r]);
}
var Ts = Pa(),
  Es = 0;
function Ds(e, t, r) {
  let i = e.type,
    a = (t ? t.appContext : e.appContext) || Ts,
    o = {
      uid: Es++,
      vnode: e,
      type: i,
      parent: t,
      appContext: a,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new ke(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(a.provides),
      ids: t ? t.ids : [``, 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: vo(i, a),
      emitsOptions: eo(i, a),
      emit: null,
      emitted: null,
      propsDefaults: n,
      inheritAttrs: i.inheritAttrs,
      ctx: n,
      data: n,
      props: n,
      attrs: n,
      slots: n,
      refs: n,
      setupState: n,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Qa.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
var Os = null,
  ks = () => Os || cr,
  As,
  js;
{
  let e = le(),
    t = (t, n) => {
      let r;
      return (
        (r = e[t]) || (r = e[t] = []),
        r.push(n),
        (e) => {
          r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
        }
      );
    };
  ((As = t(`__VUE_INSTANCE_SETTERS__`, (e) => (Os = e))),
    (js = t(`__VUE_SSR_SETTERS__`, (e) => (Fs = e))));
}
var Ms = (e) => {
    let t = Os;
    return (
      As(e),
      e.scope.on(),
      () => {
        (e.scope.off(), As(t));
      }
    );
  },
  Ns = () => {
    (Os && Os.scope.off(), As(null));
  };
function Ps(e) {
  return e.vnode.shapeFlag & 4;
}
var Fs = !1;
function Is(e, t = !1, n = !1) {
  t && js(t);
  let { props: r, children: i } = e.vnode,
    a = Ps(e);
  (po(e, r, a, t), Eo(e, i, n || t));
  let o = a ? Ls(e, t) : void 0;
  return (t && js(!1), o);
}
function Ls(e, t) {
  let n = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, na)));
  let { setup: r } = n;
  if (r) {
    Ze();
    let n = (e.setupContext = r.length > 1 ? Gs(e) : null),
      i = Ms(e),
      a = zn(r, e, 0, [e.props, n]),
      o = x(a);
    if ((Qe(), i(), (o || e.sp) && !gi(e) && qr(e), o)) {
      if ((a.then(Ns, Ns), t))
        return a
          .then((n) => {
            Rs(e, n, t);
          })
          .catch((t) => {
            Vn(t, e, 0);
          });
      e.asyncDep = a;
    } else Rs(e, a, t);
  } else Us(e, t);
}
function Rs(e, t, n) {
  (_(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : b(t) && (e.setupState = mn(t)),
    Us(e, n));
}
var zs, Bs;
function Vs(e) {
  ((zs = e),
    (Bs = (e) => {
      e.render._rc && (e.withProxy = new Proxy(e.ctx, ra));
    }));
}
var Hs = () => !zs;
function Us(e, t, n) {
  let r = e.type;
  if (!e.render) {
    if (!t && zs && !r.render) {
      let t = r.template || wa(e).template;
      if (t) {
        let { isCustomElement: n, compilerOptions: i } = e.appContext.config,
          { delimiters: a, compilerOptions: o } = r,
          s = c(c({ isCustomElement: n, delimiters: a }, i), o);
        r.render = zs(t, s);
      }
    }
    ((e.render = r.render || i), Bs && Bs(e));
  }
  {
    let t = Ms(e);
    Ze();
    try {
      ba(e);
    } finally {
      (Qe(), t());
    }
  }
}
var Ws = {
  get(e, t) {
    return (ct(e, `get`, ``), e[t]);
  },
};
function Gs(e) {
  return {
    attrs: new Proxy(e.attrs, Ws),
    slots: e.slots,
    emit: e.emit,
    expose: (t) => {
      e.exposed = t || {};
    },
  };
}
function Ks(e) {
  return e.exposed
    ? (e.exposeProxy ||= new Proxy(mn(nn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in ea) return ea[n](e);
        },
        has(e, t) {
          return t in e || t in ea;
        },
      }))
    : e.proxy;
}
function qs(e, t = !0) {
  return _(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Js(e) {
  return _(e) && `__vccOpts` in e;
}
var B = (e, t) => Cn(e, t, Fs);
function Ys(e, t, n) {
  try {
    is(-1);
    let r = arguments.length;
    return r === 2
      ? b(t) && !f(t)
        ? cs(t)
          ? z(e, null, [t])
          : z(e, t)
        : z(e, null, t)
      : (r > 3
          ? (n = Array.prototype.slice.call(arguments, 2))
          : r === 3 && cs(n) && (n = [n]),
        z(e, t, n));
  } finally {
    is(1);
  }
}
function Xs() {
  return;
  function e(t, n, r) {
    let i = t[r];
    if (
      (f(i) && i.includes(n)) ||
      (b(i) && n in i) ||
      (t.extends && e(t.extends, n, r)) ||
      (t.mixins && t.mixins.some((t) => e(t, n, r)))
    )
      return !0;
  }
}
function Zs(e, t, n, r) {
  let i = n[r];
  if (i && Qs(i, e)) return i;
  let a = t();
  return ((a.memo = e.slice()), (a.cacheIndex = r), (n[r] = a));
}
function Qs(e, t) {
  let n = e.memo;
  if (n.length != t.length) return !1;
  for (let e = 0; e < n.length; e++) if (j(n[e], t[e])) return !1;
  return (rs > 0 && es && es.push(e), !0);
}
var $s = `3.5.25`,
  ec = i,
  tc = Rn,
  nc = ar,
  rc = sr,
  ic = {
    createComponentInstance: Ds,
    setupComponent: Is,
    renderComponentRoot: no,
    setCurrentRenderingInstance: ur,
    isVNode: cs,
    normalizeVNode: bs,
    getComponentPublicInstance: Ks,
    ensureValidVNode: Zi,
    pushWarningContext: Pn,
    popWarningContext: Fn,
  },
  ac = void 0,
  oc = typeof window < `u` && window.trustedTypes;
if (oc)
  try {
    ac = oc.createPolicy(`vue`, { createHTML: (e) => e });
  } catch {}
var sc = ac ? (e) => ac.createHTML(e) : (e) => e,
  cc = `http://www.w3.org/2000/svg`,
  lc = `http://www.w3.org/1998/Math/MathML`,
  uc = typeof document < `u` ? document : null,
  dc = uc && uc.createElement(`template`),
  fc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      let t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      let i =
        t === `svg`
          ? uc.createElementNS(cc, e)
          : t === `mathml`
            ? uc.createElementNS(lc, e)
            : n
              ? uc.createElement(e, { is: n })
              : uc.createElement(e);
      return (
        e === `select` &&
          r &&
          r.multiple != null &&
          i.setAttribute(`multiple`, r.multiple),
        i
      );
    },
    createText: (e) => uc.createTextNode(e),
    createComment: (e) => uc.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => uc.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, ``);
    },
    insertStaticContent(e, t, n, r, i, a) {
      let o = n ? n.previousSibling : t.lastChild;
      if (i && (i === a || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === a || !(i = i.nextSibling));

        );
      else {
        dc.innerHTML = sc(
          r === `svg`
            ? `<svg>${e}</svg>`
            : r === `mathml`
              ? `<math>${e}</math>`
              : e,
        );
        let i = dc.content;
        if (r === `svg` || r === `mathml`) {
          let e = i.firstChild;
          for (; e.firstChild; ) i.appendChild(e.firstChild);
          i.removeChild(e);
        }
        t.insertBefore(i, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  pc = `transition`,
  mc = `animation`,
  hc = Symbol(`_vtc`),
  gc = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  _c = c({}, Pr, gc),
  vc = ((e) => ((e.displayName = `Transition`), (e.props = _c), e))(
    (e, { slots: t }) => Ys(Rr, xc(e), t),
  ),
  yc = (e, t = []) => {
    f(e) ? e.forEach((e) => e(...t)) : e && e(...t);
  },
  bc = (e) => (e ? (f(e) ? e.some((e) => e.length > 1) : e.length > 1) : !1);
function xc(e) {
  let t = {};
  for (let n in e) n in gc || (t[n] = e[n]);
  if (e.css === !1) return t;
  let {
      name: n = `v`,
      type: r,
      duration: i,
      enterFromClass: a = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: s = `${n}-enter-to`,
      appearFromClass: l = a,
      appearActiveClass: u = o,
      appearToClass: d = s,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    h = Sc(i),
    g = h && h[0],
    _ = h && h[1],
    {
      onBeforeEnter: v,
      onEnter: y,
      onEnterCancelled: b,
      onLeave: x,
      onLeaveCancelled: S,
      onBeforeAppear: C = v,
      onAppear: w = y,
      onAppearCancelled: T = b,
    } = t,
    E = (e, t, n, r) => {
      ((e._enterCancelled = r), Tc(e, t ? d : s), Tc(e, t ? u : o), n && n());
    },
    D = (e, t) => {
      ((e._isLeaving = !1), Tc(e, f), Tc(e, m), Tc(e, p), t && t());
    },
    O = (e) => (t, n) => {
      let i = e ? w : y,
        o = () => E(t, e, n);
      (yc(i, [t, o]),
        Ec(() => {
          (Tc(t, e ? l : a), wc(t, e ? d : s), bc(i) || Oc(t, r, g, o));
        }));
    };
  return c(t, {
    onBeforeEnter(e) {
      (yc(v, [e]), wc(e, a), wc(e, o));
    },
    onBeforeAppear(e) {
      (yc(C, [e]), wc(e, l), wc(e, u));
    },
    onEnter: O(!1),
    onAppear: O(!0),
    onLeave(e, t) {
      e._isLeaving = !0;
      let n = () => D(e, t);
      (wc(e, f),
        e._enterCancelled ? (wc(e, p), Mc(e)) : (Mc(e), wc(e, p)),
        Ec(() => {
          e._isLeaving && (Tc(e, f), wc(e, m), bc(x) || Oc(e, r, _, n));
        }),
        yc(x, [e, n]));
    },
    onEnterCancelled(e) {
      (E(e, !1, void 0, !0), yc(b, [e]));
    },
    onAppearCancelled(e) {
      (E(e, !0, void 0, !0), yc(T, [e]));
    },
    onLeaveCancelled(e) {
      (D(e), yc(S, [e]));
    },
  });
}
function Sc(e) {
  if (e == null) return null;
  if (b(e)) return [Cc(e.enter), Cc(e.leave)];
  {
    let t = Cc(e);
    return [t, t];
  }
}
function Cc(e) {
  return se(e);
}
function wc(e, t) {
  (t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
    (e[hc] || (e[hc] = new Set())).add(t));
}
function Tc(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
  let n = e[hc];
  n && (n.delete(t), n.size || (e[hc] = void 0));
}
function Ec(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
var Dc = 0;
function Oc(e, t, n, r) {
  let i = (e._endId = ++Dc),
    a = () => {
      i === e._endId && r();
    };
  if (n != null) return setTimeout(a, n);
  let { type: o, timeout: s, propCount: c } = kc(e, t);
  if (!o) return r();
  let l = o + `end`,
    u = 0,
    d = () => {
      (e.removeEventListener(l, f), a());
    },
    f = (t) => {
      t.target === e && ++u >= c && d();
    };
  (setTimeout(() => {
    u < c && d();
  }, s + 1),
    e.addEventListener(l, f));
}
function kc(e, t) {
  let n = window.getComputedStyle(e),
    r = (e) => (n[e] || ``).split(`, `),
    i = r(`${pc}Delay`),
    a = r(`${pc}Duration`),
    o = Ac(i, a),
    s = r(`${mc}Delay`),
    c = r(`${mc}Duration`),
    l = Ac(s, c),
    u = null,
    d = 0,
    f = 0;
  t === pc
    ? o > 0 && ((u = pc), (d = o), (f = a.length))
    : t === mc
      ? l > 0 && ((u = mc), (d = l), (f = c.length))
      : ((d = Math.max(o, l)),
        (u = d > 0 ? (o > l ? pc : mc) : null),
        (f = u ? (u === pc ? a.length : c.length) : 0));
  let p =
    u === pc &&
    /\b(?:transform|all)(?:,|$)/.test(r(`${pc}Property`).toString());
  return { type: u, timeout: d, propCount: f, hasTransform: p };
}
function Ac(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((t, n) => jc(t) + jc(e[n])));
}
function jc(e) {
  return e === `auto` ? 0 : Number(e.slice(0, -1).replace(`,`, `.`)) * 1e3;
}
function Mc(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Nc(e, t, n) {
  let r = e[hc];
  (r && (t = (t ? [t, ...r] : [...r]).join(` `)),
    t == null
      ? e.removeAttribute(`class`)
      : n
        ? e.setAttribute(`class`, t)
        : (e.className = t));
}
var Pc = Symbol(`_vod`),
  Fc = Symbol(`_vsh`),
  Ic = {
    name: `show`,
    beforeMount(e, { value: t }, { transition: n }) {
      ((e[Pc] = e.style.display === `none` ? `` : e.style.display),
        n && t ? n.beforeEnter(e) : Lc(e, t));
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Lc(e, !0), r.enter(e))
            : r.leave(e, () => {
                Lc(e, !1);
              })
          : Lc(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Lc(e, t);
    },
  };
function Lc(e, t) {
  ((e.style.display = t ? e[Pc] : `none`), (e[Fc] = !t));
}
function Rc() {
  Ic.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: `none` } };
  };
}
var zc = Symbol(``);
function Bc(e) {
  let t = ks();
  if (!t) return;
  let n = (t.ut = (n = e(t.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${t.uid}"]`),
      ).forEach((e) => Hc(e, n));
    }),
    r = () => {
      let r = e(t.proxy);
      (t.ce ? Hc(t.ce, r) : Vc(t.subTree, r), n(r));
    };
  (Mi(() => {
    er(r);
  }),
    ji(() => {
      Ka(r, i, { flush: `post` });
      let e = new MutationObserver(r);
      (e.observe(t.subTree.el.parentNode, { childList: !0 }),
        Fi(() => e.disconnect()));
    }));
}
function Vc(e, t) {
  if (e.shapeFlag & 128) {
    let n = e.suspense;
    ((e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          Vc(n.activeBranch, t);
        }));
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Hc(e.el, t);
  else if (e.type === L) e.children.forEach((e) => Vc(e, t));
  else if (e.type === Qo) {
    let { el: n, anchor: r } = e;
    for (; n && (Hc(n, t), n !== r); ) n = n.nextSibling;
  }
}
function Hc(e, t) {
  if (e.nodeType === 1) {
    let n = e.style,
      r = ``;
    for (let e in t) {
      let i = De(t[e]);
      (n.setProperty(`--${e}`, i), (r += `--${e}: ${i};`));
    }
    n[zc] = r;
  }
}
var Uc = /(?:^|;)\s*display\s*:/;
function Wc(e, t, n) {
  let r = e.style,
    i = v(n),
    a = !1;
  if (n && !i) {
    if (t)
      if (v(t))
        for (let e of t.split(`;`)) {
          let t = e.slice(0, e.indexOf(`:`)).trim();
          n[t] ?? Kc(r, t, ``);
        }
      else for (let e in t) n[e] ?? Kc(r, e, ``);
    for (let e in n) (e === `display` && (a = !0), Kc(r, e, n[e]));
  } else if (i) {
    if (t !== n) {
      let e = r[zc];
      (e && (n += `;` + e), (r.cssText = n), (a = Uc.test(n)));
    }
  } else t && e.removeAttribute(`style`);
  Pc in e && ((e[Pc] = a ? r.display : ``), e[Fc] && (r.display = `none`));
}
var Gc = /\s*!important$/;
function Kc(e, t, n) {
  if (f(n)) n.forEach((n) => Kc(e, t, n));
  else if (((n ??= ``), t.startsWith(`--`))) e.setProperty(t, n);
  else {
    let r = Yc(e, t);
    Gc.test(n)
      ? e.setProperty(A(r), n.replace(Gc, ``), `important`)
      : (e[r] = n);
  }
}
var qc = [`Webkit`, `Moz`, `ms`],
  Jc = {};
function Yc(e, t) {
  let n = Jc[t];
  if (n) return n;
  let r = k(t);
  if (r !== `filter` && r in e) return (Jc[t] = r);
  r = ne(r);
  for (let n = 0; n < qc.length; n++) {
    let i = qc[n] + r;
    if (i in e) return (Jc[t] = i);
  }
  return t;
}
var Xc = `http://www.w3.org/1999/xlink`;
function Zc(e, t, n, r, i, a = ye(t)) {
  r && t.startsWith(`xlink:`)
    ? n == null
      ? e.removeAttributeNS(Xc, t.slice(6, t.length))
      : e.setAttributeNS(Xc, t, n)
    : n == null || (a && !be(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? `` : y(n) ? String(n) : n);
}
function Qc(e, t, n, r, i) {
  if (t === `innerHTML` || t === `textContent`) {
    n != null && (e[t] = t === `innerHTML` ? sc(n) : n);
    return;
  }
  let a = e.tagName;
  if (t === `value` && a !== `PROGRESS` && !a.includes(`-`)) {
    let r = a === `OPTION` ? e.getAttribute(`value`) || `` : e.value,
      i = n == null ? (e.type === `checkbox` ? `on` : ``) : String(n);
    ((r !== i || !(`_value` in e)) && (e.value = i),
      n ?? e.removeAttribute(t),
      (e._value = n));
    return;
  }
  let o = !1;
  if (n === `` || n == null) {
    let r = typeof e[t];
    r === `boolean`
      ? (n = be(n))
      : n == null && r === `string`
        ? ((n = ``), (o = !0))
        : r === `number` && ((n = 0), (o = !0));
  }
  try {
    e[t] = n;
  } catch {}
  o && e.removeAttribute(i || t);
}
function $c(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function el(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
var tl = Symbol(`_vei`);
function nl(e, t, n, r, i = null) {
  let a = e[tl] || (e[tl] = {}),
    o = a[t];
  if (r && o) o.value = r;
  else {
    let [n, s] = il(t);
    r ? $c(e, n, (a[t] = cl(r, i)), s) : o && (el(e, n, o, s), (a[t] = void 0));
  }
}
var rl = /(?:Once|Passive|Capture)$/;
function il(e) {
  let t;
  if (rl.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(rl)); )
      ((e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0));
  }
  return [e[2] === `:` ? e.slice(3) : A(e.slice(2)), t];
}
var al = 0,
  ol = Promise.resolve(),
  sl = () => (al ||= (ol.then(() => (al = 0)), Date.now()));
function cl(e, t) {
  let n = (e) => {
    if (!e._vts) e._vts = Date.now();
    else if (e._vts <= n.attached) return;
    Bn(ll(e, n.value), t, 5, [e]);
  };
  return ((n.value = e), (n.attached = sl()), n);
}
function ll(e, t) {
  if (f(t)) {
    let n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        (n.call(e), (e._stopped = !0));
      }),
      t.map((e) => (t) => !t._stopped && e && e(t))
    );
  } else return t;
}
var ul = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  dl = (e, t, n, r, i, a) => {
    let c = i === `svg`;
    t === `class`
      ? Nc(e, r, c)
      : t === `style`
        ? Wc(e, n, r)
        : o(t)
          ? s(t) || nl(e, t, n, r, a)
          : (
                t[0] === `.`
                  ? ((t = t.slice(1)), !0)
                  : t[0] === `^`
                    ? ((t = t.slice(1)), !1)
                    : fl(e, t, r, c)
              )
            ? (Qc(e, t, r),
              !e.tagName.includes(`-`) &&
                (t === `value` || t === `checked` || t === `selected`) &&
                Zc(e, t, r, c, a, t !== `value`))
            : e._isVueCE && (/[A-Z]/.test(t) || !v(r))
              ? Qc(e, k(t), r, a, t)
              : (t === `true-value`
                  ? (e._trueValue = r)
                  : t === `false-value` && (e._falseValue = r),
                Zc(e, t, r, c));
  };
function fl(e, t, n, r) {
  if (r)
    return !!(
      t === `innerHTML` ||
      t === `textContent` ||
      (t in e && ul(t) && _(n))
    );
  if (
    t === `spellcheck` ||
    t === `draggable` ||
    t === `translate` ||
    t === `autocorrect` ||
    (t === `sandbox` && e.tagName === `IFRAME`) ||
    t === `form` ||
    (t === `list` && e.tagName === `INPUT`) ||
    (t === `type` && e.tagName === `TEXTAREA`)
  )
    return !1;
  if (t === `width` || t === `height`) {
    let t = e.tagName;
    if (t === `IMG` || t === `VIDEO` || t === `CANVAS` || t === `SOURCE`)
      return !1;
  }
  return ul(t) && v(n) ? !1 : t in e;
}
var pl = {};
function ml(e, t, n) {
  let r = Gr(e, t);
  T(r) && (r = c({}, r, t));
  class i extends _l {
    constructor(e) {
      super(r, e, n);
    }
  }
  return ((i.def = r), i);
}
var hl = (e, t) => ml(e, t, ou),
  gl = typeof HTMLElement < `u` ? HTMLElement : class {},
  _l = class e extends gl {
    constructor(e, t = {}, n = au) {
      (super(),
        (this._def = e),
        (this._props = t),
        (this._createApp = n),
        (this._isVueCE = !0),
        (this._instance = null),
        (this._app = null),
        (this._nonce = this._def.nonce),
        (this._connected = !1),
        (this._resolved = !1),
        (this._patching = !1),
        (this._dirty = !1),
        (this._numberProps = null),
        (this._styleChildren = new WeakSet()),
        (this._ob = null),
        this.shadowRoot && n !== au
          ? (this._root = this.shadowRoot)
          : e.shadowRoot === !1
            ? (this._root = this)
            : (this.attachShadow(c({}, e.shadowRootOptions, { mode: `open` })),
              (this._root = this.shadowRoot)));
    }
    connectedCallback() {
      if (!this.isConnected) return;
      (!this.shadowRoot && !this._resolved && this._parseSlots(),
        (this._connected = !0));
      let t = this;
      for (; (t &&= t.parentNode || t.host); )
        if (t instanceof e) {
          this._parent = t;
          break;
        }
      this._instance ||
        (this._resolved
          ? this._mount(this._def)
          : t && t._pendingResolve
            ? (this._pendingResolve = t._pendingResolve.then(() => {
                ((this._pendingResolve = void 0), this._resolveDef());
              }))
            : this._resolveDef());
    }
    _setParent(e = this._parent) {
      e &&
        ((this._instance.parent = e._instance), this._inheritParentContext(e));
    }
    _inheritParentContext(e = this._parent) {
      e &&
        this._app &&
        Object.setPrototypeOf(
          this._app._context.provides,
          e._instance.provides,
        );
    }
    disconnectedCallback() {
      ((this._connected = !1),
        Xn(() => {
          this._connected ||
            ((this._ob &&= (this._ob.disconnect(), null)),
            this._app && this._app.unmount(),
            this._instance && (this._instance.ce = void 0),
            (this._app = this._instance = null),
            (this._teleportTargets &&=
              (this._teleportTargets.clear(), void 0)));
        }));
    }
    _processMutations(e) {
      for (let t of e) this._setAttr(t.attributeName);
    }
    _resolveDef() {
      if (this._pendingResolve) return;
      for (let e = 0; e < this.attributes.length; e++)
        this._setAttr(this.attributes[e].name);
      ((this._ob = new MutationObserver(this._processMutations.bind(this))),
        this._ob.observe(this, { attributes: !0 }));
      let e = (e, t = !1) => {
          ((this._resolved = !0), (this._pendingResolve = void 0));
          let { props: n, styles: r } = e,
            i;
          if (n && !f(n))
            for (let e in n) {
              let t = n[e];
              (t === Number || (t && t.type === Number)) &&
                (e in this._props && (this._props[e] = se(this._props[e])),
                ((i ||= Object.create(null))[k(e)] = !0));
            }
          ((this._numberProps = i),
            this._resolveProps(e),
            this.shadowRoot && this._applyStyles(r),
            this._mount(e));
        },
        t = this._def.__asyncLoader;
      t
        ? (this._pendingResolve = t().then((t) => {
            ((t.configureApp = this._def.configureApp), e((this._def = t), !0));
          }))
        : e(this._def);
    }
    _mount(e) {
      ((this._app = this._createApp(e)),
        this._inheritParentContext(),
        e.configureApp && e.configureApp(this._app),
        (this._app._ceVNode = this._createVNode()),
        this._app.mount(this._root));
      let t = this._instance && this._instance.exposed;
      if (t)
        for (let e in t)
          d(this, e) || Object.defineProperty(this, e, { get: () => dn(t[e]) });
    }
    _resolveProps(e) {
      let { props: t } = e,
        n = f(t) ? t : Object.keys(t || {});
      for (let e of Object.keys(this))
        e[0] !== `_` && n.includes(e) && this._setProp(e, this[e]);
      for (let e of n.map(k))
        Object.defineProperty(this, e, {
          get() {
            return this._getProp(e);
          },
          set(t) {
            this._setProp(e, t, !0, !this._patching);
          },
        });
    }
    _setAttr(e) {
      if (e.startsWith(`data-v-`)) return;
      let t = this.hasAttribute(e),
        n = t ? this.getAttribute(e) : pl,
        r = k(e);
      (t && this._numberProps && this._numberProps[r] && (n = se(n)),
        this._setProp(r, n, !1, !0));
    }
    _getProp(e) {
      return this._props[e];
    }
    _setProp(e, t, n = !0, r = !1) {
      if (
        t !== this._props[e] &&
        ((this._dirty = !0),
        t === pl
          ? delete this._props[e]
          : ((this._props[e] = t),
            e === `key` && this._app && (this._app._ceVNode.key = t)),
        r && this._instance && this._update(),
        n)
      ) {
        let n = this._ob;
        (n && (this._processMutations(n.takeRecords()), n.disconnect()),
          t === !0
            ? this.setAttribute(A(e), ``)
            : typeof t == `string` || typeof t == `number`
              ? this.setAttribute(A(e), t + ``)
              : t || this.removeAttribute(A(e)),
          n && n.observe(this, { attributes: !0 }));
      }
    }
    _update() {
      let e = this._createVNode();
      (this._app && (e.appContext = this._app._context), ru(e, this._root));
    }
    _createVNode() {
      let e = {};
      this.shadowRoot ||
        (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
      let t = z(this._def, c(e, this._props));
      return (
        this._instance ||
          (t.ce = (e) => {
            ((this._instance = e), (e.ce = this), (e.isCE = !0));
            let t = (e, t) => {
              this.dispatchEvent(
                new CustomEvent(
                  e,
                  T(t[0]) ? c({ detail: t }, t[0]) : { detail: t },
                ),
              );
            };
            ((e.emit = (e, ...n) => {
              (t(e, n), A(e) !== e && t(A(e), n));
            }),
              this._setParent());
          }),
        t
      );
    }
    _applyStyles(e, t) {
      if (!e) return;
      if (t) {
        if (t === this._def || this._styleChildren.has(t)) return;
        this._styleChildren.add(t);
      }
      let n = this._nonce;
      for (let t = e.length - 1; t >= 0; t--) {
        let r = document.createElement(`style`);
        (n && r.setAttribute(`nonce`, n),
          (r.textContent = e[t]),
          this.shadowRoot.prepend(r));
      }
    }
    _parseSlots() {
      let e = (this._slots = {}),
        t;
      for (; (t = this.firstChild); ) {
        let n = (t.nodeType === 1 && t.getAttribute(`slot`)) || `default`;
        ((e[n] || (e[n] = [])).push(t), this.removeChild(t));
      }
    }
    _renderSlots() {
      let e = this._getSlots(),
        t = this._instance.type.__scopeId;
      for (let n = 0; n < e.length; n++) {
        let r = e[n],
          i = r.getAttribute(`name`) || `default`,
          a = this._slots[i],
          o = r.parentNode;
        if (a)
          for (let e of a) {
            if (t && e.nodeType === 1) {
              let n = t + `-s`,
                r = document.createTreeWalker(e, 1);
              e.setAttribute(n, ``);
              let i;
              for (; (i = r.nextNode()); ) i.setAttribute(n, ``);
            }
            o.insertBefore(e, r);
          }
        else for (; r.firstChild; ) o.insertBefore(r.firstChild, r);
        o.removeChild(r);
      }
    }
    _getSlots() {
      let e = [this];
      this._teleportTargets && e.push(...this._teleportTargets);
      let t = new Set();
      for (let n of e) {
        let e = n.querySelectorAll(`slot`);
        for (let n = 0; n < e.length; n++) t.add(e[n]);
      }
      return Array.from(t);
    }
    _injectChildStyle(e) {
      this._applyStyles(e.styles, e);
    }
    _beginPatch() {
      ((this._patching = !0), (this._dirty = !1));
    }
    _endPatch() {
      ((this._patching = !1), this._dirty && this._instance && this._update());
    }
    _removeChildStyle(e) {}
  };
function vl(e) {
  let t = ks();
  return (t && t.ce) || null;
}
function yl() {
  let e = vl();
  return e && e.shadowRoot;
}
function bl(e = `$style`) {
  {
    let t = ks();
    if (!t) return n;
    let r = t.type.__cssModules;
    return (r && r[e]) || n;
  }
}
var xl = new WeakMap(),
  Sl = new WeakMap(),
  Cl = Symbol(`_moveCb`),
  wl = Symbol(`_enterCb`),
  Tl = ((e) => (delete e.props.mode, e))({
    name: `TransitionGroup`,
    props: c({}, _c, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      let n = ks(),
        r = Mr(),
        i,
        a;
      return (
        Ni(() => {
          if (!i.length) return;
          let t = e.moveClass || `${e.name || `v`}-move`;
          if (!kl(i[0].el, n.vnode.el, t)) {
            i = [];
            return;
          }
          (i.forEach(El), i.forEach(Dl));
          let r = i.filter(Ol);
          (Mc(n.vnode.el),
            r.forEach((e) => {
              let n = e.el,
                r = n.style;
              (wc(n, t),
                (r.transform = r.webkitTransform = r.transitionDuration = ``));
              let i = (n[Cl] = (e) => {
                (e && e.target !== n) ||
                  ((!e || e.propertyName.endsWith(`transform`)) &&
                    (n.removeEventListener(`transitionend`, i),
                    (n[Cl] = null),
                    Tc(n, t)));
              });
              n.addEventListener(`transitionend`, i);
            }),
            (i = []));
        }),
        () => {
          let o = P(e),
            s = xc(o),
            c = o.tag || L;
          if (((i = []), a))
            for (let e = 0; e < a.length; e++) {
              let t = a[e];
              t.el &&
                t.el instanceof Element &&
                (i.push(t),
                Ur(t, Br(t, s, r, n)),
                xl.set(t, { left: t.el.offsetLeft, top: t.el.offsetTop }));
            }
          a = t.default ? Wr(t.default()) : [];
          for (let e = 0; e < a.length; e++) {
            let t = a[e];
            t.key != null && Ur(t, Br(t, s, r, n));
          }
          return z(c, null, a);
        }
      );
    },
  });
function El(e) {
  let t = e.el;
  (t[Cl] && t[Cl](), t[wl] && t[wl]());
}
function Dl(e) {
  Sl.set(e, { left: e.el.offsetLeft, top: e.el.offsetTop });
}
function Ol(e) {
  let t = xl.get(e),
    n = Sl.get(e),
    r = t.left - n.left,
    i = t.top - n.top;
  if (r || i) {
    let t = e.el.style;
    return (
      (t.transform = t.webkitTransform = `translate(${r}px,${i}px)`),
      (t.transitionDuration = `0s`),
      e
    );
  }
}
function kl(e, t, n) {
  let r = e.cloneNode(),
    i = e[hc];
  (i &&
    i.forEach((e) => {
      e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
    }),
    n.split(/\s+/).forEach((e) => e && r.classList.add(e)),
    (r.style.display = `none`));
  let a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(r);
  let { hasTransform: o } = kc(r);
  return (a.removeChild(r), o);
}
var Al = (e) => {
  let t = e.props[`onUpdate:modelValue`] || !1;
  return f(t) ? (e) => ie(t, e) : t;
};
function jl(e) {
  e.target.composing = !0;
}
function Ml(e) {
  let t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event(`input`)));
}
var Nl = Symbol(`_assign`);
function Pl(e, t, n) {
  return (t && (e = e.trim()), n && (e = oe(e)), e);
}
var Fl = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
      e[Nl] = Al(i);
      let a = r || (i.props && i.props.type === `number`);
      ($c(e, t ? `change` : `input`, (t) => {
        t.target.composing || e[Nl](Pl(e.value, n, a));
      }),
        (n || a) &&
          $c(e, `change`, () => {
            e.value = Pl(e.value, n, a);
          }),
        t ||
          ($c(e, `compositionstart`, jl),
          $c(e, `compositionend`, Ml),
          $c(e, `change`, Ml)));
    },
    mounted(e, { value: t }) {
      e.value = t ?? ``;
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } },
      o,
    ) {
      if (((e[Nl] = Al(o)), e.composing)) return;
      let s =
          (a || e.type === `number`) && !/^0\d/.test(e.value)
            ? oe(e.value)
            : e.value,
        c = t ?? ``;
      s !== c &&
        ((document.activeElement === e &&
          e.type !== `range` &&
          ((r && t === n) || (i && e.value.trim() === c))) ||
          (e.value = c));
    },
  },
  Il = {
    deep: !0,
    created(e, t, n) {
      ((e[Nl] = Al(n)),
        $c(e, `change`, () => {
          let t = e._modelValue,
            n = Vl(e),
            r = e.checked,
            i = e[Nl];
          if (f(t)) {
            let e = Ce(t, n),
              a = e !== -1;
            if (r && !a) i(t.concat(n));
            else if (!r && a) {
              let n = [...t];
              (n.splice(e, 1), i(n));
            }
          } else if (m(t)) {
            let e = new Set(t);
            (r ? e.add(n) : e.delete(n), i(e));
          } else i(Hl(e, r));
        }));
    },
    mounted: Ll,
    beforeUpdate(e, t, n) {
      ((e[Nl] = Al(n)), Ll(e, t, n));
    },
  };
function Ll(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let i;
  if (f(t)) i = Ce(t, r.props.value) > -1;
  else if (m(t)) i = t.has(r.props.value);
  else {
    if (t === n) return;
    i = Se(t, Hl(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
var Rl = {
    created(e, { value: t }, n) {
      ((e.checked = Se(t, n.props.value)),
        (e[Nl] = Al(n)),
        $c(e, `change`, () => {
          e[Nl](Vl(e));
        }));
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      ((e[Nl] = Al(r)), t !== n && (e.checked = Se(t, r.props.value)));
    },
  },
  zl = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      let i = m(t);
      ($c(e, `change`, () => {
        let t = Array.prototype.filter
          .call(e.options, (e) => e.selected)
          .map((e) => (n ? oe(Vl(e)) : Vl(e)));
        (e[Nl](e.multiple ? (i ? new Set(t) : t) : t[0]),
          (e._assigning = !0),
          Xn(() => {
            e._assigning = !1;
          }));
      }),
        (e[Nl] = Al(r)));
    },
    mounted(e, { value: t }) {
      Bl(e, t);
    },
    beforeUpdate(e, t, n) {
      e[Nl] = Al(n);
    },
    updated(e, { value: t }) {
      e._assigning || Bl(e, t);
    },
  };
function Bl(e, t) {
  let n = e.multiple,
    r = f(t);
  if (!(n && !r && !m(t))) {
    for (let i = 0, a = e.options.length; i < a; i++) {
      let a = e.options[i],
        o = Vl(a);
      if (n)
        if (r) {
          let e = typeof o;
          e === `string` || e === `number`
            ? (a.selected = t.some((e) => String(e) === String(o)))
            : (a.selected = Ce(t, o) > -1);
        } else a.selected = t.has(o);
      else if (Se(Vl(a), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Vl(e) {
  return `_value` in e ? e._value : e.value;
}
function Hl(e, t) {
  let n = t ? `_trueValue` : `_falseValue`;
  return n in e ? e[n] : t;
}
var Ul = {
  created(e, t, n) {
    Gl(e, t, n, null, `created`);
  },
  mounted(e, t, n) {
    Gl(e, t, n, null, `mounted`);
  },
  beforeUpdate(e, t, n, r) {
    Gl(e, t, n, r, `beforeUpdate`);
  },
  updated(e, t, n, r) {
    Gl(e, t, n, r, `updated`);
  },
};
function Wl(e, t) {
  switch (e) {
    case `SELECT`:
      return zl;
    case `TEXTAREA`:
      return Fl;
    default:
      switch (t) {
        case `checkbox`:
          return Il;
        case `radio`:
          return Rl;
        default:
          return Fl;
      }
  }
}
function Gl(e, t, n, r, i) {
  let a = Wl(e.tagName, n.props && n.props.type)[i];
  a && a(e, t, n, r);
}
function Kl() {
  ((Fl.getSSRProps = ({ value: e }) => ({ value: e })),
    (Rl.getSSRProps = ({ value: e }, t) => {
      if (t.props && Se(t.props.value, e)) return { checked: !0 };
    }),
    (Il.getSSRProps = ({ value: e }, t) => {
      if (f(e)) {
        if (t.props && Ce(e, t.props.value) > -1) return { checked: !0 };
      } else if (m(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 };
      } else if (e) return { checked: !0 };
    }),
    (Ul.getSSRProps = (e, t) => {
      if (typeof t.type != `string`) return;
      let n = Wl(t.type.toUpperCase(), t.props && t.props.type);
      if (n.getSSRProps) return n.getSSRProps(e, t);
    }));
}
var ql = [`ctrl`, `shift`, `alt`, `meta`],
  Jl = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => `button` in e && e.button !== 0,
    middle: (e) => `button` in e && e.button !== 1,
    right: (e) => `button` in e && e.button !== 2,
    exact: (e, t) => ql.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Yl = (e, t) => {
    let n = (e._withMods ||= {}),
      r = t.join(`.`);
    return (
      n[r] ||
      (n[r] = (n, ...r) => {
        for (let e = 0; e < t.length; e++) {
          let r = Jl[t[e]];
          if (r && r(n, t)) return;
        }
        return e(n, ...r);
      })
    );
  },
  Xl = {
    esc: `escape`,
    space: ` `,
    up: `arrow-up`,
    left: `arrow-left`,
    right: `arrow-right`,
    down: `arrow-down`,
    delete: `backspace`,
  },
  Zl = (e, t) => {
    let n = (e._withKeys ||= {}),
      r = t.join(`.`);
    return (
      n[r] ||
      (n[r] = (n) => {
        if (!(`key` in n)) return;
        let r = A(n.key);
        if (t.some((e) => e === r || Xl[e] === r)) return e(n);
      })
    );
  },
  Ql = c({ patchProp: dl }, fc),
  $l,
  eu = !1;
function tu() {
  return ($l ||= Oo(Ql));
}
function nu() {
  return (($l = eu ? $l : ko(Ql)), (eu = !0), $l);
}
var ru = (...e) => {
    tu().render(...e);
  },
  iu = (...e) => {
    nu().hydrate(...e);
  },
  au = (...e) => {
    let t = tu().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (e) => {
        let r = cu(e);
        if (!r) return;
        let i = t._component;
        (!_(i) && !i.render && !i.template && (i.template = r.innerHTML),
          r.nodeType === 1 && (r.textContent = ``));
        let a = n(r, !1, su(r));
        return (
          r instanceof Element &&
            (r.removeAttribute(`v-cloak`), r.setAttribute(`data-v-app`, ``)),
          a
        );
      }),
      t
    );
  },
  ou = (...e) => {
    let t = nu().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (e) => {
        let t = cu(e);
        if (t) return n(t, !0, su(t));
      }),
      t
    );
  };
function su(e) {
  if (e instanceof SVGElement) return `svg`;
  if (typeof MathMLElement == `function` && e instanceof MathMLElement)
    return `mathml`;
}
function cu(e) {
  return v(e) ? document.querySelector(e) : e;
}
var lu = !1,
  uu = () => {
    lu || ((lu = !0), Kl(), Rc());
  },
  du = e(
    {
      BaseTransition: () => Rr,
      BaseTransitionPropsValidators: () => Pr,
      Comment: () => R,
      DeprecationTypes: () => null,
      EffectScope: () => ke,
      ErrorCodes: () => Ln,
      ErrorTypeStrings: () => tc,
      Fragment: () => L,
      KeepAlive: () => bi,
      ReactiveEffect: () => Pe,
      Static: () => Qo,
      Suspense: () => Bo,
      Teleport: () => Dr,
      Text: () => Zo,
      TrackOpTypes: () => wn,
      Transition: () => vc,
      TransitionGroup: () => Tl,
      TriggerOpTypes: () => Tn,
      VueElement: () => _l,
      assertNumber: () => In,
      callWithAsyncErrorHandling: () => Bn,
      callWithErrorHandling: () => zn,
      camelize: () => k,
      capitalize: () => ne,
      cloneVNode: () => gs,
      compatUtils: () => null,
      compile: () => fu,
      computed: () => B,
      createApp: () => au,
      createBlock: () => ss,
      createCommentVNode: () => ys,
      createElementBlock: () => os,
      createElementVNode: () => ps,
      createHydrationRenderer: () => ko,
      createPropsRestProxy: () => _a,
      createRenderer: () => Oo,
      createSSRApp: () => ou,
      createSlots: () => Yi,
      createStaticVNode: () => vs,
      createTextVNode: () => _s,
      createVNode: () => z,
      customRef: () => gn,
      defineAsyncComponent: () => _i,
      defineComponent: () => Gr,
      defineCustomElement: () => ml,
      defineEmits: () => aa,
      defineExpose: () => oa,
      defineModel: () => la,
      defineOptions: () => sa,
      defineProps: () => ia,
      defineSSRCustomElement: () => hl,
      defineSlots: () => ca,
      devtools: () => nc,
      effect: () => qe,
      effectScope: () => Ae,
      getCurrentInstance: () => ks,
      getCurrentScope: () => je,
      getCurrentWatcher: () => kn,
      getTransitionRawChildren: () => Wr,
      guardReactiveProps: () => hs,
      h: () => Ys,
      handleError: () => Vn,
      hasInjectionContext: () => Ba,
      hydrate: () => iu,
      hydrateOnIdle: () => ui,
      hydrateOnInteraction: () => mi,
      hydrateOnMediaQuery: () => pi,
      hydrateOnVisible: () => fi,
      initCustomFormatter: () => Xs,
      initDirectivesForSSR: () => uu,
      inject: () => za,
      isMemoSame: () => Qs,
      isProxy: () => tn,
      isReactive: () => Qt,
      isReadonly: () => $t,
      isRef: () => F,
      isRuntimeOnly: () => Hs,
      isShallow: () => en,
      isVNode: () => cs,
      markRaw: () => nn,
      mergeDefaults: () => ha,
      mergeModels: () => ga,
      mergeProps: () => Cs,
      nextTick: () => Xn,
      nodeOps: () => fc,
      normalizeClass: () => ge,
      normalizeProps: () => _e,
      normalizeStyle: () => de,
      onActivated: () => Si,
      onBeforeMount: () => Ai,
      onBeforeUnmount: () => Pi,
      onBeforeUpdate: () => Mi,
      onDeactivated: () => Ci,
      onErrorCaptured: () => zi,
      onMounted: () => ji,
      onRenderTracked: () => Ri,
      onRenderTriggered: () => Li,
      onScopeDispose: () => Me,
      onServerPrefetch: () => Ii,
      onUnmounted: () => Fi,
      onUpdated: () => Ni,
      onWatcherCleanup: () => An,
      openBlock: () => ts,
      patchProp: () => dl,
      popScopeId: () => fr,
      provide: () => Ra,
      proxyRefs: () => mn,
      pushScopeId: () => dr,
      queuePostFlushCb: () => er,
      reactive: () => qt,
      readonly: () => Yt,
      ref: () => on,
      registerRuntimeCompiler: () => Vs,
      render: () => ru,
      renderList: () => Ji,
      renderSlot: () => Xi,
      resolveComponent: () => Hi,
      resolveDirective: () => Gi,
      resolveDynamicComponent: () => Wi,
      resolveFilter: () => null,
      resolveTransitionHooks: () => Br,
      setBlockTracking: () => is,
      setDevtoolsHook: () => rc,
      setTransitionHooks: () => Ur,
      shallowReactive: () => Jt,
      shallowReadonly: () => Xt,
      shallowRef: () => sn,
      ssrContextKey: () => Va,
      ssrUtils: () => ic,
      stop: () => Je,
      toDisplayString: () => M,
      toHandlerKey: () => re,
      toHandlers: () => Qi,
      toRaw: () => P,
      toRef: () => bn,
      toRefs: () => _n,
      toValue: () => fn,
      transformVNodeArgs: () => us,
      triggerRef: () => un,
      unref: () => dn,
      useAttrs: () => fa,
      useCssModule: () => bl,
      useCssVars: () => Bc,
      useHost: () => vl,
      useId: () => Kr,
      useModel: () => Xa,
      useSSRContext: () => Ha,
      useShadowRoot: () => yl,
      useSlots: () => da,
      useTemplateRef: () => Jr,
      useTransitionState: () => Mr,
      vModelCheckbox: () => Il,
      vModelDynamic: () => Ul,
      vModelRadio: () => Rl,
      vModelSelect: () => zl,
      vModelText: () => Fl,
      vShow: () => Ic,
      version: () => $s,
      warn: () => ec,
      watch: () => Ka,
      watchEffect: () => Ua,
      watchPostEffect: () => Wa,
      watchSyncEffect: () => Ga,
      withAsyncContext: () => va,
      withCtx: () => mr,
      withDefaults: () => ua,
      withDirectives: () => hr,
      withKeys: () => Zl,
      withMemo: () => Zs,
      withModifiers: () => Yl,
      withScopeId: () => pr,
    },
    1,
  ),
  fu = () => {};
function pu(e) {
  return je() ? (Me(e), !0) : !1;
}
var mu = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var hu = Object.prototype.toString,
  gu = (e) => hu.call(e) === `[object Object]`,
  _u = () => {};
function vu(e, t) {
  function n(...n) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, n), { fn: t, thisArg: this, args: n }),
      )
        .then(r)
        .catch(i);
    });
  }
  return n;
}
function yu(e, t = {}) {
  let n,
    r,
    i = _u,
    a = (e) => {
      (clearTimeout(e), i(), (i = _u));
    },
    o;
  return (s) => {
    let c = fn(e),
      l = fn(t.maxWait);
    return (
      n && a(n),
      c <= 0 || (l !== void 0 && l <= 0)
        ? ((r &&= (a(r), void 0)), Promise.resolve(s()))
        : new Promise((e, u) => {
            ((i = t.rejectOnCancel ? u : e),
              (o = s),
              l &&
                !r &&
                (r = setTimeout(() => {
                  (n && a(n), (r = void 0), e(o()));
                }, l)),
              (n = setTimeout(() => {
                (r && a(r), (r = void 0), e(s()));
              }, c)));
          })
    );
  };
}
function bu(e) {
  return Array.isArray(e) ? e : [e];
}
function xu(e, t = 200, n = {}) {
  return vu(yu(t, n), e);
}
function Su(e, t, n = {}) {
  let { immediate: r = !0, immediateCallback: i = !1 } = n,
    a = sn(!1),
    o;
  function s() {
    o &&= (clearTimeout(o), void 0);
  }
  function c() {
    ((a.value = !1), s());
  }
  function l(...n) {
    (i && e(),
      s(),
      (a.value = !0),
      (o = setTimeout(() => {
        ((a.value = !1), (o = void 0), e(...n));
      }, fn(t))));
  }
  return (
    r && ((a.value = !0), mu && l()),
    pu(c),
    { isPending: Xt(a), start: l, stop: c }
  );
}
function Cu(e, t, n) {
  return Ka(e, t, { ...n, immediate: !0 });
}
function wu(e, t, n) {
  let r;
  r = F(n) ? { evaluating: n } : n || {};
  let {
      lazy: i = !1,
      flush: a = `pre`,
      evaluating: o = void 0,
      shallow: s = !0,
      onError: c = globalThis.reportError ?? _u,
    } = r,
    l = sn(!i),
    u = s ? sn(t) : on(t),
    d = 0;
  return (
    Ua(
      async (t) => {
        if (!l.value) return;
        d++;
        let n = d,
          r = !1;
        o &&
          Promise.resolve().then(() => {
            o.value = !0;
          });
        try {
          let i = await e((e) => {
            t(() => {
              (o && (o.value = !1), r || e());
            });
          });
          n === d && (u.value = i);
        } catch (e) {
          c(e);
        } finally {
          (o && n === d && (o.value = !1), (r = !0));
        }
      },
      { flush: a },
    ),
    i ? B(() => ((l.value = !0), u.value)) : u
  );
}
var Tu = mu ? window : void 0;
(mu && window.document, mu && window.navigator, mu && window.location);
function Eu(e) {
  let t = fn(e);
  return t?.$el ?? t;
}
function Du(...e) {
  let t = [],
    n = () => {
      (t.forEach((e) => e()), (t.length = 0));
    },
    r = (e, t, n, r) => (
      e.addEventListener(t, n, r),
      () => e.removeEventListener(t, n, r)
    ),
    i = B(() => {
      let t = bu(fn(e[0])).filter((e) => e != null);
      return t.every((e) => typeof e != `string`) ? t : void 0;
    }),
    a = Cu(
      () => [
        i.value?.map((e) => Eu(e)) ?? [Tu].filter((e) => e != null),
        bu(fn(i.value ? e[1] : e[0])),
        bu(dn(i.value ? e[2] : e[1])),
        fn(i.value ? e[3] : e[2]),
      ],
      ([e, i, a, o]) => {
        if ((n(), !e?.length || !i?.length || !a?.length)) return;
        let s = gu(o) ? { ...o } : o;
        t.push(
          ...e.flatMap((e) => i.flatMap((t) => a.map((n) => r(e, t, n, s)))),
        );
      },
      { flush: `post` },
    );
  return (
    pu(n),
    () => {
      (a(), n());
    }
  );
}
function Ou(e) {
  return typeof e == `function`
    ? e
    : typeof e == `string`
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0;
}
function ku(...e) {
  let t,
    n,
    r = {};
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (r = e[2]))
    : e.length === 2
      ? typeof e[1] == `object`
        ? ((t = !0), (n = e[0]), (r = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]));
  let {
      target: i = Tu,
      eventName: a = `keydown`,
      passive: o = !1,
      dedupe: s = !1,
    } = r,
    c = Ou(t);
  return Du(
    i,
    a,
    (e) => {
      (e.repeat && fn(s)) || (c(e) && n(e));
    },
    o,
  );
}
function Au(e, t, n = {}) {
  return ku(e, t, { ...n, eventName: `keydown` });
}
var ju = {
  ctrl: `control`,
  command: `meta`,
  cmd: `meta`,
  option: `alt`,
  up: `arrowup`,
  down: `arrowdown`,
  left: `arrowleft`,
  right: `arrowright`,
};
function Mu(e = {}) {
  let {
      reactive: t = !1,
      target: n = Tu,
      aliasMap: r = ju,
      passive: i = !0,
      onEventFired: a = _u,
    } = e,
    o = qt(new Set()),
    s = {
      toJSON() {
        return {};
      },
      current: o,
    },
    c = t ? qt(s) : s,
    l = new Set(),
    u = new Set(),
    d = new Set();
  function f(e, n) {
    e in c && (t ? (c[e] = n) : (c[e].value = n));
  }
  function p() {
    o.clear();
    for (let e of d) f(e, !1);
  }
  function m(e, t) {
    let n = e.key?.toLowerCase(),
      r = [e.code?.toLowerCase(), n].filter(Boolean);
    n && (t ? o.add(n) : o.delete(n));
    for (let e of r) (d.add(e), f(e, t));
    if (n === `shift` && !t) {
      let e = Array.from(u),
        t = e.indexOf(`shift`);
      (e.forEach((e, n) => {
        n >= t && (o.delete(e), f(e, !1));
      }),
        u.clear());
    } else
      typeof e.getModifierState == `function` &&
        e.getModifierState(`Shift`) &&
        t &&
        [...o, ...r].forEach((e) => u.add(e));
    n === `meta` && !t
      ? (l.forEach((e) => {
          (o.delete(e), f(e, !1));
        }),
        l.clear())
      : typeof e.getModifierState == `function` &&
        e.getModifierState(`Meta`) &&
        t &&
        [...o, ...r].forEach((e) => l.add(e));
  }
  (Du(n, `keydown`, (e) => (m(e, !0), a(e)), { passive: i }),
    Du(n, `keyup`, (e) => (m(e, !1), a(e)), { passive: i }),
    Du(`blur`, p, { passive: i }),
    Du(`focus`, p, { passive: i }));
  let h = new Proxy(c, {
    get(e, n, i) {
      if (typeof n != `string`) return Reflect.get(e, n, i);
      if (((n = n.toLowerCase()), n in r && (n = r[n]), !(n in c)))
        if (/[+_-]/.test(n)) {
          let e = n.split(/[+_-]/g).map((e) => e.trim());
          c[n] = B(() => e.map((e) => fn(h[e])).every(Boolean));
        } else c[n] = sn(!1);
      let a = Reflect.get(e, n, i);
      return t ? fn(a) : a;
    },
  });
  return h;
}
var Nu = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) =>
    e instanceof MouseEvent ? [e.movementX, e.movementY] : null,
};
function Pu(e = {}) {
  let {
      type: t = `page`,
      touch: n = !0,
      resetOnTouchEnds: r = !1,
      initialValue: i = { x: 0, y: 0 },
      window: a = Tu,
      target: o = a,
      scroll: s = !0,
      eventFilter: c,
    } = e,
    l = null,
    u = 0,
    d = 0,
    f = sn(i.x),
    p = sn(i.y),
    m = sn(null),
    h = typeof t == `function` ? t : Nu[t],
    g = (e) => {
      let t = h(e);
      ((l = e),
        t && (([f.value, p.value] = t), (m.value = `mouse`)),
        a && ((u = a.scrollX), (d = a.scrollY)));
    },
    _ = (e) => {
      if (e.touches.length > 0) {
        let t = h(e.touches[0]);
        t && (([f.value, p.value] = t), (m.value = `touch`));
      }
    },
    v = () => {
      if (!l || !a) return;
      let e = h(l);
      l instanceof MouseEvent &&
        e &&
        ((f.value = e[0] + a.scrollX - u), (p.value = e[1] + a.scrollY - d));
    },
    y = () => {
      ((f.value = i.x), (p.value = i.y));
    },
    b = c ? (e) => c(() => g(e), {}) : (e) => g(e),
    x = c ? (e) => c(() => _(e), {}) : (e) => _(e),
    S = c ? () => c(() => v(), {}) : () => v();
  if (o) {
    let e = { passive: !0 };
    (Du(o, [`mousemove`, `dragover`], b, e),
      n &&
        t !== `movement` &&
        (Du(o, [`touchstart`, `touchmove`], x, e),
        r && Du(o, `touchend`, y, e)),
      s && t === `page` && Du(a, `scroll`, S, e));
  }
  return { x: f, y: p, sourceType: m };
}
function Fu() {
  let e = on([]);
  return (
    (e.value.set = (t) => {
      t && e.value.push(t);
    }),
    Mi(() => {
      e.value.length = 0;
    }),
    e
  );
}
function Iu(e, t) {
  typeof console < `u` &&
    (console.warn(`[intlify] ` + e), t && console.warn(t.stack));
}
var Lu = typeof window < `u`,
  Ru = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  zu = (e, t, n) => Bu({ l: e, k: t, s: n }),
  Bu = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, `\\u2028`)
      .replace(/\u2029/g, `\\u2029`)
      .replace(/\u0027/g, `\\u0027`),
  V = (e) => typeof e == `number` && isFinite(e),
  Vu = (e) => ed(e) === `[object Date]`,
  Hu = (e) => ed(e) === `[object RegExp]`,
  Uu = (e) => Y(e) && Object.keys(e).length === 0,
  H = Object.assign,
  Wu = Object.create,
  U = (e = null) => Wu(e),
  Gu,
  Ku = () =>
    (Gu ||=
      typeof globalThis < `u`
        ? globalThis
        : typeof self < `u`
          ? self
          : typeof window < `u`
            ? window
            : typeof global < `u`
              ? global
              : U());
function qu(e) {
  return e
    .replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&apos;`)
    .replace(/\//g, `&#x2F;`)
    .replace(/=/g, `&#x3D;`);
}
function Ju(e) {
  return e
    .replace(/&(?![a-zA-Z0-9#]{2,6};)/g, `&amp;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&apos;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`);
}
function Yu(e) {
  return (
    (e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${Ju(n)}"`)),
    (e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${Ju(n)}'`)),
    /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) &&
      (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, `$1&#111;n$3`)),
    [
      /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
      /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi,
    ].forEach((t) => {
      e = e.replace(t, `$1javascript&#58;`);
    }),
    e
  );
}
var Xu = Object.prototype.hasOwnProperty;
function Zu(e, t) {
  return Xu.call(e, t);
}
var W = Array.isArray,
  G = (e) => typeof e == `function`,
  K = (e) => typeof e == `string`,
  q = (e) => typeof e == `boolean`,
  J = (e) => typeof e == `object` && !!e,
  Qu = (e) => J(e) && G(e.then) && G(e.catch),
  $u = Object.prototype.toString,
  ed = (e) => $u.call(e),
  Y = (e) => ed(e) === `[object Object]`,
  td = (e) =>
    e == null
      ? ``
      : W(e) || (Y(e) && e.toString === $u)
        ? JSON.stringify(e, null, 2)
        : String(e);
function nd(e, t = ``) {
  return e.reduce((e, n, r) => (r === 0 ? e + n : e + t + n), ``);
}
var rd = (e) => !J(e) || W(e);
function id(e, t) {
  if (rd(e) || rd(t)) throw Error(`Invalid value`);
  let n = [{ src: e, des: t }];
  for (; n.length; ) {
    let { src: e, des: t } = n.pop();
    Object.keys(e).forEach((r) => {
      r !== `__proto__` &&
        (J(e[r]) && !J(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : U()),
        rd(t[r]) || rd(e[r])
          ? (t[r] = e[r])
          : n.push({ src: e[r], des: t[r] }));
    });
  }
}
function ad(e, t, n) {
  return { line: e, column: t, offset: n };
}
function od(e, t, n) {
  let r = { start: e, end: t };
  return (n != null && (r.source = n), r);
}
var X = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
};
(X.EXPECTED_TOKEN,
  X.INVALID_TOKEN_IN_PLACEHOLDER,
  X.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,
  X.UNKNOWN_ESCAPE_SEQUENCE,
  X.INVALID_UNICODE_ESCAPE_SEQUENCE,
  X.UNBALANCED_CLOSING_BRACE,
  X.UNTERMINATED_CLOSING_BRACE,
  X.EMPTY_PLACEHOLDER,
  X.NOT_ALLOW_NEST_PLACEHOLDER,
  X.INVALID_LINKED_FORMAT,
  X.MUST_HAVE_MESSAGES_IN_PLURAL,
  X.UNEXPECTED_EMPTY_LINKED_MODIFIER,
  X.UNEXPECTED_EMPTY_LINKED_KEY,
  X.UNEXPECTED_LEXICAL_ANALYSIS,
  X.UNHANDLED_CODEGEN_NODE_TYPE,
  X.UNHANDLED_MINIFIER_NODE_TYPE);
function sd(e, t, n = {}) {
  let { domain: r, messages: i, args: a } = n,
    o = e,
    s = SyntaxError(String(o));
  return ((s.code = e), t && (s.location = t), (s.domain = r), s);
}
function cd(e) {
  throw e;
}
var ld = ` `,
  ud = `\r`,
  dd = `
`,
  fd = `\u2028`,
  pd = `\u2029`;
function md(e) {
  let t = e,
    n = 0,
    r = 1,
    i = 1,
    a = 0,
    o = (e) => t[e] === ud && t[e + 1] === dd,
    s = (e) => t[e] === dd,
    c = (e) => t[e] === pd,
    l = (e) => t[e] === fd,
    u = (e) => o(e) || s(e) || c(e) || l(e),
    d = () => n,
    f = () => r,
    p = () => i,
    m = () => a,
    h = (e) => (o(e) || c(e) || l(e) ? dd : t[e]),
    g = () => h(n),
    _ = () => h(n + a);
  function v() {
    return ((a = 0), u(n) && (r++, (i = 0)), o(n) && n++, n++, i++, t[n]);
  }
  function y() {
    return (o(n + a) && a++, a++, t[n + a]);
  }
  function b() {
    ((n = 0), (r = 1), (i = 1), (a = 0));
  }
  function x(e = 0) {
    a = e;
  }
  function S() {
    let e = n + a;
    for (; e !== n; ) v();
    a = 0;
  }
  return {
    index: d,
    line: f,
    column: p,
    peekOffset: m,
    charAt: h,
    currentChar: g,
    currentPeek: _,
    next: v,
    peek: y,
    reset: b,
    resetPeek: x,
    skipToPeek: S,
  };
}
var hd = void 0,
  gd = `'`,
  _d = `tokenizer`;
function vd(e, t = {}) {
  let n = t.location !== !1,
    r = md(e),
    i = () => r.index(),
    a = () => ad(r.line(), r.column(), r.index()),
    o = a(),
    s = i(),
    c = {
      currentType: 13,
      offset: s,
      startLoc: o,
      endLoc: o,
      lastType: 13,
      lastOffset: s,
      lastStartLoc: o,
      lastEndLoc: o,
      braceNest: 0,
      inLinked: !1,
      text: ``,
    },
    l = () => c,
    { onError: u } = t;
  function d(e, t, r, ...i) {
    let a = l();
    ((t.column += r),
      (t.offset += r),
      u && u(sd(e, n ? od(a.startLoc, t) : null, { domain: _d, args: i })));
  }
  function f(e, t, r) {
    ((e.endLoc = a()), (e.currentType = t));
    let i = { type: t };
    return (
      n && (i.loc = od(e.startLoc, e.endLoc)),
      r != null && (i.value = r),
      i
    );
  }
  let p = (e) => f(e, 13);
  function m(e, t) {
    return e.currentChar() === t
      ? (e.next(), t)
      : (d(X.EXPECTED_TOKEN, a(), 0, t), ``);
  }
  function h(e) {
    let t = ``;
    for (; e.currentPeek() === ld || e.currentPeek() === dd; )
      ((t += e.currentPeek()), e.peek());
    return t;
  }
  function g(e) {
    let t = h(e);
    return (e.skipToPeek(), t);
  }
  function _(e) {
    if (e === hd) return !1;
    let t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || t === 95;
  }
  function v(e) {
    if (e === hd) return !1;
    let t = e.charCodeAt(0);
    return t >= 48 && t <= 57;
  }
  function y(e, t) {
    let { currentType: n } = t;
    if (n !== 2) return !1;
    h(e);
    let r = _(e.currentPeek());
    return (e.resetPeek(), r);
  }
  function b(e, t) {
    let { currentType: n } = t;
    if (n !== 2) return !1;
    h(e);
    let r = v(e.currentPeek() === `-` ? e.peek() : e.currentPeek());
    return (e.resetPeek(), r);
  }
  function x(e, t) {
    let { currentType: n } = t;
    if (n !== 2) return !1;
    h(e);
    let r = e.currentPeek() === gd;
    return (e.resetPeek(), r);
  }
  function S(e, t) {
    let { currentType: n } = t;
    if (n !== 7) return !1;
    h(e);
    let r = e.currentPeek() === `.`;
    return (e.resetPeek(), r);
  }
  function C(e, t) {
    let { currentType: n } = t;
    if (n !== 8) return !1;
    h(e);
    let r = _(e.currentPeek());
    return (e.resetPeek(), r);
  }
  function w(e, t) {
    let { currentType: n } = t;
    if (!(n === 7 || n === 11)) return !1;
    h(e);
    let r = e.currentPeek() === `:`;
    return (e.resetPeek(), r);
  }
  function T(e, t) {
    let { currentType: n } = t;
    if (n !== 9) return !1;
    let r = () => {
        let t = e.currentPeek();
        return t === `{`
          ? _(e.peek())
          : t === `@` || t === `|` || t === `:` || t === `.` || t === ld || !t
            ? !1
            : t === dd
              ? (e.peek(), r())
              : D(e, !1);
      },
      i = r();
    return (e.resetPeek(), i);
  }
  function E(e) {
    h(e);
    let t = e.currentPeek() === `|`;
    return (e.resetPeek(), t);
  }
  function D(e, t = !0) {
    let n = (t = !1, r = ``) => {
        let i = e.currentPeek();
        return i === `{` || i === `@` || !i
          ? t
          : i === `|`
            ? !(r === ld || r === dd)
            : i === ld
              ? (e.peek(), n(!0, ld))
              : i === dd
                ? (e.peek(), n(!0, dd))
                : !0;
      },
      r = n();
    return (t && e.resetPeek(), r);
  }
  function O(e, t) {
    let n = e.currentChar();
    return n === hd ? hd : t(n) ? (e.next(), n) : null;
  }
  function ee(e) {
    let t = e.charCodeAt(0);
    return (
      (t >= 97 && t <= 122) ||
      (t >= 65 && t <= 90) ||
      (t >= 48 && t <= 57) ||
      t === 95 ||
      t === 36
    );
  }
  function k(e) {
    return O(e, ee);
  }
  function te(e) {
    let t = e.charCodeAt(0);
    return (
      (t >= 97 && t <= 122) ||
      (t >= 65 && t <= 90) ||
      (t >= 48 && t <= 57) ||
      t === 95 ||
      t === 36 ||
      t === 45
    );
  }
  function A(e) {
    return O(e, te);
  }
  function ne(e) {
    let t = e.charCodeAt(0);
    return t >= 48 && t <= 57;
  }
  function re(e) {
    return O(e, ne);
  }
  function j(e) {
    let t = e.charCodeAt(0);
    return (
      (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)
    );
  }
  function ie(e) {
    return O(e, j);
  }
  function ae(e) {
    let t = ``,
      n = ``;
    for (; (t = re(e)); ) n += t;
    return n;
  }
  function oe(e) {
    let t = ``;
    for (;;) {
      let n = e.currentChar();
      if (n === `{` || n === `}` || n === `@` || n === `|` || !n) break;
      if (n === ld || n === dd)
        if (D(e)) ((t += n), e.next());
        else if (E(e)) break;
        else ((t += n), e.next());
      else ((t += n), e.next());
    }
    return t;
  }
  function se(e) {
    g(e);
    let t = ``,
      n = ``;
    for (; (t = A(e)); ) n += t;
    let r = e.currentChar();
    if (r && r !== `}` && r !== hd && r !== ld && r !== dd && r !== `　`) {
      let t = me(e);
      return (d(X.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t);
    }
    return (
      e.currentChar() === hd && d(X.UNTERMINATED_CLOSING_BRACE, a(), 0),
      n
    );
  }
  function ce(e) {
    g(e);
    let t = ``;
    return (
      e.currentChar() === `-` ? (e.next(), (t += `-${ae(e)}`)) : (t += ae(e)),
      e.currentChar() === hd && d(X.UNTERMINATED_CLOSING_BRACE, a(), 0),
      t
    );
  }
  function le(e) {
    return e !== gd && e !== dd;
  }
  function ue(e) {
    (g(e), m(e, `'`));
    let t = ``,
      n = ``;
    for (; (t = O(e, le)); ) t === `\\` ? (n += de(e)) : (n += t);
    let r = e.currentChar();
    return r === dd || r === hd
      ? (d(X.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0),
        r === dd && (e.next(), m(e, `'`)),
        n)
      : (m(e, `'`), n);
  }
  function de(e) {
    let t = e.currentChar();
    switch (t) {
      case `\\`:
      case `'`:
        return (e.next(), `\\${t}`);
      case `u`:
        return fe(e, t, 4);
      case `U`:
        return fe(e, t, 6);
      default:
        return (d(X.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), ``);
    }
  }
  function fe(e, t, n) {
    m(e, t);
    let r = ``;
    for (let i = 0; i < n; i++) {
      let n = ie(e);
      if (!n) {
        d(
          X.INVALID_UNICODE_ESCAPE_SEQUENCE,
          a(),
          0,
          `\\${t}${r}${e.currentChar()}`,
        );
        break;
      }
      r += n;
    }
    return `\\${t}${r}`;
  }
  function pe(e) {
    return e !== `{` && e !== `}` && e !== ld && e !== dd;
  }
  function me(e) {
    g(e);
    let t = ``,
      n = ``;
    for (; (t = O(e, pe)); ) n += t;
    return n;
  }
  function he(e) {
    let t = ``,
      n = ``;
    for (; (t = k(e)); ) n += t;
    return n;
  }
  function ge(e) {
    let t = (n) => {
      let r = e.currentChar();
      return r === `{` ||
        r === `@` ||
        r === `|` ||
        r === `(` ||
        r === `)` ||
        !r ||
        r === ld
        ? n
        : ((n += r), e.next(), t(n));
    };
    return t(``);
  }
  function _e(e) {
    g(e);
    let t = m(e, `|`);
    return (g(e), t);
  }
  function ve(e, t) {
    let n = null;
    switch (e.currentChar()) {
      case `{`:
        return (
          t.braceNest >= 1 && d(X.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0),
          e.next(),
          (n = f(t, 2, `{`)),
          g(e),
          t.braceNest++,
          n
        );
      case `}`:
        return (
          t.braceNest > 0 &&
            t.currentType === 2 &&
            d(X.EMPTY_PLACEHOLDER, a(), 0),
          e.next(),
          (n = f(t, 3, `}`)),
          t.braceNest--,
          t.braceNest > 0 && g(e),
          t.inLinked && t.braceNest === 0 && (t.inLinked = !1),
          n
        );
      case `@`:
        return (
          t.braceNest > 0 && d(X.UNTERMINATED_CLOSING_BRACE, a(), 0),
          (n = ye(e, t) || p(t)),
          (t.braceNest = 0),
          n
        );
      default: {
        let r = !0,
          i = !0,
          o = !0;
        if (E(e))
          return (
            t.braceNest > 0 && d(X.UNTERMINATED_CLOSING_BRACE, a(), 0),
            (n = f(t, 1, _e(e))),
            (t.braceNest = 0),
            (t.inLinked = !1),
            n
          );
        if (
          t.braceNest > 0 &&
          (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)
        )
          return (
            d(X.UNTERMINATED_CLOSING_BRACE, a(), 0),
            (t.braceNest = 0),
            be(e, t)
          );
        if ((r = y(e, t))) return ((n = f(t, 4, se(e))), g(e), n);
        if ((i = b(e, t))) return ((n = f(t, 5, ce(e))), g(e), n);
        if ((o = x(e, t))) return ((n = f(t, 6, ue(e))), g(e), n);
        if (!r && !i && !o)
          return (
            (n = f(t, 12, me(e))),
            d(X.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value),
            g(e),
            n
          );
        break;
      }
    }
    return n;
  }
  function ye(e, t) {
    let { currentType: n } = t,
      r = null,
      i = e.currentChar();
    switch (
      ((n === 7 || n === 8 || n === 11 || n === 9) &&
        (i === dd || i === ld) &&
        d(X.INVALID_LINKED_FORMAT, a(), 0),
      i)
    ) {
      case `@`:
        return (e.next(), (r = f(t, 7, `@`)), (t.inLinked = !0), r);
      case `.`:
        return (g(e), e.next(), f(t, 8, `.`));
      case `:`:
        return (g(e), e.next(), f(t, 9, `:`));
      default:
        return E(e)
          ? ((r = f(t, 1, _e(e))), (t.braceNest = 0), (t.inLinked = !1), r)
          : S(e, t) || w(e, t)
            ? (g(e), ye(e, t))
            : C(e, t)
              ? (g(e), f(t, 11, he(e)))
              : T(e, t)
                ? (g(e), i === `{` ? ve(e, t) || r : f(t, 10, ge(e)))
                : (n === 7 && d(X.INVALID_LINKED_FORMAT, a(), 0),
                  (t.braceNest = 0),
                  (t.inLinked = !1),
                  be(e, t));
    }
  }
  function be(e, t) {
    let n = { type: 13 };
    if (t.braceNest > 0) return ve(e, t) || p(t);
    if (t.inLinked) return ye(e, t) || p(t);
    switch (e.currentChar()) {
      case `{`:
        return ve(e, t) || p(t);
      case `}`:
        return (d(X.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, `}`));
      case `@`:
        return ye(e, t) || p(t);
      default:
        if (E(e))
          return (
            (n = f(t, 1, _e(e))),
            (t.braceNest = 0),
            (t.inLinked = !1),
            n
          );
        if (D(e)) return f(t, 0, oe(e));
        break;
    }
    return n;
  }
  function xe() {
    let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
    return (
      (c.lastType = e),
      (c.lastOffset = t),
      (c.lastStartLoc = n),
      (c.lastEndLoc = o),
      (c.offset = i()),
      (c.startLoc = a()),
      r.currentChar() === hd ? f(c, 13) : be(r, c)
    );
  }
  return { nextToken: xe, currentOffset: i, currentPosition: a, context: l };
}
var yd = `parser`,
  bd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function xd(e, t, n) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\'`:
      return `'`;
    default: {
      let e = parseInt(t || n, 16);
      return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : `�`;
    }
  }
}
function Sd(e = {}) {
  let t = e.location !== !1,
    { onError: n } = e;
  function r(e, r, i, a, ...o) {
    let s = e.currentPosition();
    ((s.offset += a),
      (s.column += a),
      n && n(sd(r, t ? od(i, s) : null, { domain: yd, args: o })));
  }
  function i(e, n, r) {
    let i = { type: e };
    return (
      t && ((i.start = n), (i.end = n), (i.loc = { start: r, end: r })),
      i
    );
  }
  function a(e, n, r, i) {
    t && ((e.end = n), e.loc && (e.loc.end = r));
  }
  function o(e, t) {
    let n = e.context(),
      r = i(3, n.offset, n.startLoc);
    return ((r.value = t), a(r, e.currentOffset(), e.currentPosition()), r);
  }
  function s(e, t) {
    let { lastOffset: n, lastStartLoc: r } = e.context(),
      o = i(5, n, r);
    return (
      (o.index = parseInt(t, 10)),
      e.nextToken(),
      a(o, e.currentOffset(), e.currentPosition()),
      o
    );
  }
  function c(e, t) {
    let { lastOffset: n, lastStartLoc: r } = e.context(),
      o = i(4, n, r);
    return (
      (o.key = t),
      e.nextToken(),
      a(o, e.currentOffset(), e.currentPosition()),
      o
    );
  }
  function l(e, t) {
    let { lastOffset: n, lastStartLoc: r } = e.context(),
      o = i(9, n, r);
    return (
      (o.value = t.replace(bd, xd)),
      e.nextToken(),
      a(o, e.currentOffset(), e.currentPosition()),
      o
    );
  }
  function u(e) {
    let t = e.nextToken(),
      n = e.context(),
      { lastOffset: o, lastStartLoc: s } = n,
      c = i(8, o, s);
    return t.type === 11
      ? (t.value ??
          r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, Cd(t)),
        (c.value = t.value || ``),
        a(c, e.currentOffset(), e.currentPosition()),
        { node: c })
      : (r(e, X.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0),
        (c.value = ``),
        a(c, o, s),
        { nextConsumeToken: t, node: c });
  }
  function d(e, t) {
    let n = e.context(),
      r = i(7, n.offset, n.startLoc);
    return ((r.value = t), a(r, e.currentOffset(), e.currentPosition()), r);
  }
  function f(e) {
    let t = e.context(),
      n = i(6, t.offset, t.startLoc),
      o = e.nextToken();
    if (o.type === 8) {
      let t = u(e);
      ((n.modifier = t.node), (o = t.nextConsumeToken || e.nextToken()));
    }
    switch (
      (o.type !== 9 &&
        r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(o)),
      (o = e.nextToken()),
      o.type === 2 && (o = e.nextToken()),
      o.type)
    ) {
      case 10:
        (o.value ??
          r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(o)),
          (n.key = d(e, o.value || ``)));
        break;
      case 4:
        (o.value ??
          r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(o)),
          (n.key = c(e, o.value || ``)));
        break;
      case 5:
        (o.value ??
          r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(o)),
          (n.key = s(e, o.value || ``)));
        break;
      case 6:
        (o.value ??
          r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(o)),
          (n.key = l(e, o.value || ``)));
        break;
      default: {
        r(e, X.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
        let s = e.context(),
          c = i(7, s.offset, s.startLoc);
        return (
          (c.value = ``),
          a(c, s.offset, s.startLoc),
          (n.key = c),
          a(n, s.offset, s.startLoc),
          { nextConsumeToken: o, node: n }
        );
      }
    }
    return (a(n, e.currentOffset(), e.currentPosition()), { node: n });
  }
  function p(e) {
    let t = e.context(),
      n = i(
        2,
        t.currentType === 1 ? e.currentOffset() : t.offset,
        t.currentType === 1 ? t.endLoc : t.startLoc,
      );
    n.items = [];
    let u = null;
    do {
      let i = u || e.nextToken();
      switch (((u = null), i.type)) {
        case 0:
          (i.value ??
            r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(i)),
            n.items.push(o(e, i.value || ``)));
          break;
        case 5:
          (i.value ??
            r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(i)),
            n.items.push(s(e, i.value || ``)));
          break;
        case 4:
          (i.value ??
            r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(i)),
            n.items.push(c(e, i.value || ``)));
          break;
        case 6:
          (i.value ??
            r(e, X.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Cd(i)),
            n.items.push(l(e, i.value || ``)));
          break;
        case 7: {
          let t = f(e);
          (n.items.push(t.node), (u = t.nextConsumeToken || null));
          break;
        }
      }
    } while (t.currentType !== 13 && t.currentType !== 1);
    return (
      a(
        n,
        t.currentType === 1 ? t.lastOffset : e.currentOffset(),
        t.currentType === 1 ? t.lastEndLoc : e.currentPosition(),
      ),
      n
    );
  }
  function m(e, t, n, o) {
    let s = e.context(),
      c = o.items.length === 0,
      l = i(1, t, n);
    ((l.cases = []), l.cases.push(o));
    do {
      let t = p(e);
      ((c ||= t.items.length === 0), l.cases.push(t));
    } while (s.currentType !== 13);
    return (
      c && r(e, X.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0),
      a(l, e.currentOffset(), e.currentPosition()),
      l
    );
  }
  function h(e) {
    let t = e.context(),
      { offset: n, startLoc: r } = t,
      i = p(e);
    return t.currentType === 13 ? i : m(e, n, r, i);
  }
  function g(n) {
    let o = vd(n, H({}, e)),
      s = o.context(),
      c = i(0, s.offset, s.startLoc);
    return (
      t && c.loc && (c.loc.source = n),
      (c.body = h(o)),
      e.onCacheKey && (c.cacheKey = e.onCacheKey(n)),
      s.currentType !== 13 &&
        r(
          o,
          X.UNEXPECTED_LEXICAL_ANALYSIS,
          s.lastStartLoc,
          0,
          n[s.offset] || ``,
        ),
      a(c, o.currentOffset(), o.currentPosition()),
      c
    );
  }
  return { parse: g };
}
function Cd(e) {
  if (e.type === 13) return `EOF`;
  let t = (e.value || ``).replace(/\r?\n/gu, `\\n`);
  return t.length > 10 ? t.slice(0, 9) + `…` : t;
}
function wd(e, t = {}) {
  let n = { ast: e, helpers: new Set() };
  return { context: () => n, helper: (e) => (n.helpers.add(e), e) };
}
function Td(e, t) {
  for (let n = 0; n < e.length; n++) Ed(e[n], t);
}
function Ed(e, t) {
  switch (e.type) {
    case 1:
      (Td(e.cases, t), t.helper(`plural`));
      break;
    case 2:
      Td(e.items, t);
      break;
    case 6:
      (Ed(e.key, t), t.helper(`linked`), t.helper(`type`));
      break;
    case 5:
      (t.helper(`interpolate`), t.helper(`list`));
      break;
    case 4:
      (t.helper(`interpolate`), t.helper(`named`));
      break;
  }
}
function Dd(e, t = {}) {
  let n = wd(e);
  (n.helper(`normalize`), e.body && Ed(e.body, n));
  let r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Od(e) {
  let t = e.body;
  return (t.type === 2 ? kd(t) : t.cases.forEach((e) => kd(e)), e);
}
function kd(e) {
  if (e.items.length === 1) {
    let t = e.items[0];
    (t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value);
  } else {
    let t = [];
    for (let n = 0; n < e.items.length; n++) {
      let r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = nd(t);
      for (let t = 0; t < e.items.length; t++) {
        let n = e.items[t];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
function Ad(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      let t = e;
      (Ad(t.body), (t.b = t.body), delete t.body);
      break;
    }
    case 1: {
      let t = e,
        n = t.cases;
      for (let e = 0; e < n.length; e++) Ad(n[e]);
      ((t.c = n), delete t.cases);
      break;
    }
    case 2: {
      let t = e,
        n = t.items;
      for (let e = 0; e < n.length; e++) Ad(n[e]);
      ((t.i = n),
        delete t.items,
        t.static && ((t.s = t.static), delete t.static));
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      let t = e;
      t.value && ((t.v = t.value), delete t.value);
      break;
    }
    case 6: {
      let t = e;
      (Ad(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (Ad(t.modifier), (t.m = t.modifier), delete t.modifier));
      break;
    }
    case 5: {
      let t = e;
      ((t.i = t.index), delete t.index);
      break;
    }
    case 4: {
      let t = e;
      ((t.k = t.key), delete t.key);
      break;
    }
    default:
  }
  delete e.type;
}
function jd(e, t) {
  let { sourceMap: n, filename: r, breakLineCode: i, needIndent: a } = t,
    o = t.location !== !1,
    s = {
      filename: r,
      code: ``,
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: i,
      needIndent: a,
      indentLevel: 0,
    };
  o && e.loc && (s.source = e.loc.source);
  let c = () => s;
  function l(e, t) {
    s.code += e;
  }
  function u(e, t = !0) {
    let n = t ? i : ``;
    l(a ? n + `  `.repeat(e) : n);
  }
  function d(e = !0) {
    let t = ++s.indentLevel;
    e && u(t);
  }
  function f(e = !0) {
    let t = --s.indentLevel;
    e && u(t);
  }
  function p() {
    u(s.indentLevel);
  }
  return {
    context: c,
    push: l,
    indent: d,
    deindent: f,
    newline: p,
    helper: (e) => `_${e}`,
    needIndent: () => s.needIndent,
  };
}
function Md(e, t) {
  let { helper: n } = e;
  (e.push(`${n(`linked`)}(`),
    Id(e, t.key),
    t.modifier
      ? (e.push(`, `), Id(e, t.modifier), e.push(`, _type`))
      : e.push(`, undefined, _type`),
    e.push(`)`));
}
function Nd(e, t) {
  let { helper: n, needIndent: r } = e;
  (e.push(`${n(`normalize`)}([`), e.indent(r()));
  let i = t.items.length;
  for (let n = 0; n < i && (Id(e, t.items[n]), n !== i - 1); n++) e.push(`, `);
  (e.deindent(r()), e.push(`])`));
}
function Pd(e, t) {
  let { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    (e.push(`${n(`plural`)}([`), e.indent(r()));
    let i = t.cases.length;
    for (let n = 0; n < i && (Id(e, t.cases[n]), n !== i - 1); n++)
      e.push(`, `);
    (e.deindent(r()), e.push(`])`));
  }
}
function Fd(e, t) {
  t.body ? Id(e, t.body) : e.push(`null`);
}
function Id(e, t) {
  let { helper: n } = e;
  switch (t.type) {
    case 0:
      Fd(e, t);
      break;
    case 1:
      Pd(e, t);
      break;
    case 2:
      Nd(e, t);
      break;
    case 6:
      Md(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(`interpolate`)}(${n(`list`)}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(`interpolate`)}(${n(`named`)}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
  }
}
var Ld = (e, t = {}) => {
  let n = K(t.mode) ? t.mode : `normal`,
    r = K(t.filename) ? t.filename : `message.intl`,
    i = !!t.sourceMap,
    a =
      t.breakLineCode == null
        ? n === `arrow`
          ? `;`
          : `
`
        : t.breakLineCode,
    o = t.needIndent ? t.needIndent : n !== `arrow`,
    s = e.helpers || [],
    c = jd(e, {
      mode: n,
      filename: r,
      sourceMap: i,
      breakLineCode: a,
      needIndent: o,
    });
  (c.push(n === `normal` ? `function __msg__ (ctx) {` : `(ctx) => {`),
    c.indent(o),
    s.length > 0 &&
      (c.push(
        `const { ${nd(
          s.map((e) => `${e}: _${e}`),
          `, `,
        )} } = ctx`,
      ),
      c.newline()),
    c.push(`return `),
    Id(c, e),
    c.deindent(o),
    c.push(`}`),
    delete e.helpers);
  let { code: l, map: u } = c.context();
  return { ast: e, code: l, map: u ? u.toJSON() : void 0 };
};
function Rd(e, t = {}) {
  let n = H({}, t),
    r = !!n.jit,
    i = !!n.minify,
    a = n.optimize == null ? !0 : n.optimize,
    o = Sd(n).parse(e);
  return r
    ? (a && Od(o), i && Ad(o), { ast: o, code: `` })
    : (Dd(o, n), Ld(o, n));
}
function zd() {
  (typeof __INTLIFY_PROD_DEVTOOLS__ != `boolean` &&
    (Ku().__INTLIFY_PROD_DEVTOOLS__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != `boolean` &&
      (Ku().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1));
}
function Bd(e) {
  return J(e) && Xd(e) === 0 && (Zu(e, `b`) || Zu(e, `body`));
}
var Vd = [`b`, `body`];
function Hd(e) {
  return rf(e, Vd);
}
var Ud = [`c`, `cases`];
function Wd(e) {
  return rf(e, Ud, []);
}
var Gd = [`s`, `static`];
function Kd(e) {
  return rf(e, Gd);
}
var qd = [`i`, `items`];
function Jd(e) {
  return rf(e, qd, []);
}
var Yd = [`t`, `type`];
function Xd(e) {
  return rf(e, Yd);
}
var Zd = [`v`, `value`];
function Qd(e, t) {
  let n = rf(e, Zd);
  if (n != null) return n;
  throw of(t);
}
var $d = [`m`, `modifier`];
function ef(e) {
  return rf(e, $d);
}
var tf = [`k`, `key`];
function nf(e) {
  let t = rf(e, tf);
  if (t) return t;
  throw of(6);
}
function rf(e, t, n) {
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (Zu(e, r) && e[r] != null) return e[r];
  }
  return n;
}
var af = [...Vd, ...Ud, ...Gd, ...qd, ...tf, ...$d, ...Zd, ...Yd];
function of(e) {
  return Error(`unhandled node type: ${e}`);
}
function sf(e) {
  return (t) => cf(t, e);
}
function cf(e, t) {
  let n = Hd(t);
  if (n == null) throw of(0);
  if (Xd(n) === 1) {
    let t = Wd(n);
    return e.plural(t.reduce((t, n) => [...t, lf(e, n)], []));
  } else return lf(e, n);
}
function lf(e, t) {
  let n = Kd(t);
  if (n != null) return e.type === `text` ? n : e.normalize([n]);
  {
    let n = Jd(t).reduce((t, n) => [...t, uf(e, n)], []);
    return e.normalize(n);
  }
}
function uf(e, t) {
  let n = Xd(t);
  switch (n) {
    case 3:
      return Qd(t, n);
    case 9:
      return Qd(t, n);
    case 4: {
      let r = t;
      if (Zu(r, `k`) && r.k) return e.interpolate(e.named(r.k));
      if (Zu(r, `key`) && r.key) return e.interpolate(e.named(r.key));
      throw of(n);
    }
    case 5: {
      let r = t;
      if (Zu(r, `i`) && V(r.i)) return e.interpolate(e.list(r.i));
      if (Zu(r, `index`) && V(r.index)) return e.interpolate(e.list(r.index));
      throw of(n);
    }
    case 6: {
      let n = t,
        r = ef(n),
        i = nf(n);
      return e.linked(uf(e, i), r ? uf(e, r) : void 0, e.type);
    }
    case 7:
      return Qd(t, n);
    case 8:
      return Qd(t, n);
    default:
      throw Error(`unhandled node on format message part: ${n}`);
  }
}
var df = (e) => e,
  ff = U();
function pf(e, t = {}) {
  let n = !1,
    r = t.onError || cd;
  return (
    (t.onError = (e) => {
      ((n = !0), r(e));
    }),
    { ...Rd(e, t), detectError: n }
  );
}
function mf(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && K(e)) {
    q(t.warnHtmlMessage) && t.warnHtmlMessage;
    let n = (t.onCacheKey || df)(e),
      r = ff[n];
    if (r) return r;
    let { ast: i, detectError: a } = pf(e, { ...t, location: !1, jit: !0 }),
      o = sf(i);
    return a ? o : (ff[n] = o);
  } else {
    let t = e.cacheKey;
    return t ? ff[t] || (ff[t] = sf(e)) : sf(e);
  }
}
var hf = null;
function gf(e) {
  hf = e;
}
function _f(e, t, n) {
  hf &&
    hf.emit(`i18n:init`, {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: n,
    });
}
var vf = yf(`function:translate`);
function yf(e) {
  return (t) => hf && hf.emit(e, t);
}
var bf = {
  INVALID_ARGUMENT: 17,
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23,
};
function xf(e) {
  return sd(e, null, void 0);
}
(bf.INVALID_ARGUMENT,
  bf.INVALID_DATE_ARGUMENT,
  bf.INVALID_ISO_DATE_ARGUMENT,
  bf.NOT_SUPPORT_NON_STRING_MESSAGE,
  bf.NOT_SUPPORT_LOCALE_PROMISE_VALUE,
  bf.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION,
  bf.NOT_SUPPORT_LOCALE_TYPE);
function Sf(e, t) {
  return t.locale == null ? wf(e.locale) : wf(t.locale);
}
var Cf;
function wf(e) {
  if (K(e)) return e;
  if (G(e)) {
    if (e.resolvedOnce && Cf != null) return Cf;
    if (e.constructor.name === `Function`) {
      let t = e();
      if (Qu(t)) throw xf(bf.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (Cf = t);
    } else throw xf(bf.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw xf(bf.NOT_SUPPORT_LOCALE_TYPE);
}
function Tf(e, t, n) {
  return [
    ...new Set([n, ...(W(t) ? t : J(t) ? Object.keys(t) : K(t) ? [t] : [n])]),
  ];
}
function Ef(e, t, n) {
  let r = K(n) ? n : Hf,
    i = e;
  i.__localeChainCache ||= new Map();
  let a = i.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let e = [n];
    for (; W(e); ) e = Df(a, e, t);
    let o = W(t) || !Y(t) ? t : t.default ? t.default : null;
    ((e = K(o) ? [o] : o),
      W(e) && Df(a, e, !1),
      i.__localeChainCache.set(r, a));
  }
  return a;
}
function Df(e, t, n) {
  let r = !0;
  for (let i = 0; i < t.length && q(r); i++) {
    let a = t[i];
    K(a) && (r = Of(e, t[i], n));
  }
  return r;
}
function Of(e, t, n) {
  let r,
    i = t.split(`-`);
  do ((r = kf(e, i.join(`-`), n)), i.splice(-1, 1));
  while (i.length && r === !0);
  return r;
}
function kf(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== `!`;
    let i = t.replace(/!/g, ``);
    (e.push(i), (W(n) || Y(n)) && n[i] && (r = n[i]));
  }
  return r;
}
var Af = [];
((Af[0] = { w: [0], i: [3, 0], "[": [4], o: [7] }),
  (Af[1] = { w: [1], ".": [2], "[": [4], o: [7] }),
  (Af[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
  (Af[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1],
  }),
  (Af[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0],
  }),
  (Af[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
  (Af[6] = { '"': [4, 0], o: 8, l: [6, 0] }));
var jf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Mf(e) {
  return jf.test(e);
}
function Nf(e) {
  let t = e.charCodeAt(0);
  return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39)
    ? e.slice(1, -1)
    : e;
}
function Pf(e) {
  if (e == null) return `o`;
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return `i`;
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return `w`;
  }
  return `i`;
}
function Ff(e) {
  let t = e.trim();
  return e.charAt(0) === `0` && isNaN(parseInt(e))
    ? !1
    : Mf(t)
      ? Nf(t)
      : `*` + t;
}
function If(e) {
  let t = [],
    n = -1,
    r = 0,
    i = 0,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f = [];
  ((f[0] = () => {
    o === void 0 ? (o = s) : (o += s);
  }),
    (f[1] = () => {
      o !== void 0 && (t.push(o), (o = void 0));
    }),
    (f[2] = () => {
      (f[0](), i++);
    }),
    (f[3] = () => {
      if (i > 0) (i--, (r = 4), f[0]());
      else {
        if (((i = 0), o === void 0 || ((o = Ff(o)), o === !1))) return !1;
        f[1]();
      }
    }));
  function p() {
    let t = e[n + 1];
    if ((r === 5 && t === `'`) || (r === 6 && t === `"`))
      return (n++, (s = `\\` + t), f[0](), !0);
  }
  for (; r !== null; )
    if ((n++, (a = e[n]), !(a === `\\` && p()))) {
      if (
        ((c = Pf(a)),
        (d = Af[r]),
        (l = d[c] || d.l || 8),
        l === 8 ||
          ((r = l[0]),
          l[1] !== void 0 && ((u = f[l[1]]), u && ((s = a), u() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
var Lf = new Map();
function Rf(e, t) {
  return J(e) ? e[t] : null;
}
function zf(e, t) {
  if (!J(e)) return null;
  let n = Lf.get(t);
  if ((n || ((n = If(t)), n && Lf.set(t, n)), !n)) return null;
  let r = n.length,
    i = e,
    a = 0;
  for (; a < r; ) {
    let e = n[a];
    if (af.includes(e) && Bd(i)) return null;
    let t = i[e];
    if (t === void 0 || G(i)) return null;
    ((i = t), a++);
  }
  return i;
}
var Bf = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
};
(Bf.NOT_FOUND_KEY,
  Bf.FALLBACK_TO_TRANSLATE,
  Bf.CANNOT_FORMAT_NUMBER,
  Bf.FALLBACK_TO_NUMBER_FORMAT,
  Bf.CANNOT_FORMAT_DATE,
  Bf.FALLBACK_TO_DATE_FORMAT,
  Bf.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER);
var Vf = `11.2.2`,
  Hf = `en-US`,
  Uf = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Wf() {
  return {
    upper: (e, t) =>
      t === `text` && K(e)
        ? e.toUpperCase()
        : t === `vnode` && J(e) && `__v_isVNode` in e
          ? e.children.toUpperCase()
          : e,
    lower: (e, t) =>
      t === `text` && K(e)
        ? e.toLowerCase()
        : t === `vnode` && J(e) && `__v_isVNode` in e
          ? e.children.toLowerCase()
          : e,
    capitalize: (e, t) =>
      t === `text` && K(e)
        ? Uf(e)
        : t === `vnode` && J(e) && `__v_isVNode` in e
          ? Uf(e.children)
          : e,
  };
}
var Gf;
function Kf(e) {
  Gf = e;
}
var qf;
function Jf(e) {
  qf = e;
}
var Yf;
function Xf(e) {
  Yf = e;
}
var Zf = null,
  Qf = () => Zf,
  $f = null,
  ep = (e) => {
    $f = e;
  },
  tp = () => $f,
  np = 0;
function rp(e = {}) {
  let t = G(e.onWarn) ? e.onWarn : Iu,
    n = K(e.version) ? e.version : Vf,
    r = K(e.locale) || G(e.locale) ? e.locale : Hf,
    i = G(r) ? Hf : r,
    a =
      W(e.fallbackLocale) ||
      Y(e.fallbackLocale) ||
      K(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : i,
    o = Y(e.messages) ? e.messages : ip(i),
    s = Y(e.datetimeFormats) ? e.datetimeFormats : ip(i),
    c = Y(e.numberFormats) ? e.numberFormats : ip(i),
    l = H(U(), e.modifiers, Wf()),
    u = e.pluralRules || U(),
    d = G(e.missing) ? e.missing : null,
    f = q(e.missingWarn) || Hu(e.missingWarn) ? e.missingWarn : !0,
    p = q(e.fallbackWarn) || Hu(e.fallbackWarn) ? e.fallbackWarn : !0,
    m = !!e.fallbackFormat,
    h = !!e.unresolving,
    g = G(e.postTranslation) ? e.postTranslation : null,
    _ = Y(e.processor) ? e.processor : null,
    v = q(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    y = !!e.escapeParameter,
    b = G(e.messageCompiler) ? e.messageCompiler : Gf,
    x = G(e.messageResolver) ? e.messageResolver : qf || Rf,
    S = G(e.localeFallbacker) ? e.localeFallbacker : Yf || Tf,
    C = J(e.fallbackContext) ? e.fallbackContext : void 0,
    w = e,
    T = J(w.__datetimeFormatters) ? w.__datetimeFormatters : new Map(),
    E = J(w.__numberFormatters) ? w.__numberFormatters : new Map(),
    D = J(w.__meta) ? w.__meta : {};
  np++;
  let O = {
    version: n,
    cid: np,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: l,
    pluralRules: u,
    missing: d,
    missingWarn: f,
    fallbackWarn: p,
    fallbackFormat: m,
    unresolving: h,
    postTranslation: g,
    processor: _,
    warnHtmlMessage: v,
    escapeParameter: y,
    messageCompiler: b,
    messageResolver: x,
    localeFallbacker: S,
    fallbackContext: C,
    onWarn: t,
    __meta: D,
  };
  return (
    (O.datetimeFormats = s),
    (O.numberFormats = c),
    (O.__datetimeFormatters = T),
    (O.__numberFormatters = E),
    __INTLIFY_PROD_DEVTOOLS__ && _f(O, n, D),
    O
  );
}
var ip = (e) => ({ [e]: U() });
function ap(e, t, n, r, i) {
  let { missing: a, onWarn: o } = e;
  if (a !== null) {
    let r = a(e, n, t, i);
    return K(r) ? r : t;
  } else return t;
}
function op(e, t, n) {
  let r = e;
  ((r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t));
}
function sp(e, t) {
  return e === t ? !1 : e.split(`-`)[0] === t.split(`-`)[0];
}
function cp(e, t) {
  let n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++) if (sp(e, t[r])) return !0;
  return !1;
}
var lp = typeof Intl < `u`;
(lp && Intl.DateTimeFormat, lp && Intl.NumberFormat);
function up(e, ...t) {
  let {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: i,
      onWarn: a,
      localeFallbacker: o,
    } = e,
    { __datetimeFormatters: s } = e,
    [c, l, u, d] = fp(...t),
    f = q(u.missingWarn) ? u.missingWarn : e.missingWarn;
  q(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  let p = !!u.part,
    m = Sf(e, u),
    h = o(e, i, m);
  if (!K(c) || c === ``) return new Intl.DateTimeFormat(m, d).format(l);
  let g = {},
    _,
    v = null;
  for (
    let t = 0;
    t < h.length && ((_ = h[t]), (g = n[_] || {}), (v = g[c]), !Y(v));
    t++
  )
    ap(e, c, _, f, `datetime format`);
  if (!Y(v) || !K(_)) return r ? -1 : c;
  let y = `${_}__${c}`;
  Uu(d) || (y = `${y}__${JSON.stringify(d)}`);
  let b = s.get(y);
  return (
    b || ((b = new Intl.DateTimeFormat(_, H({}, v, d))), s.set(y, b)),
    p ? b.formatToParts(l) : b.format(l)
  );
}
var dp = [
  `localeMatcher`,
  `weekday`,
  `era`,
  `year`,
  `month`,
  `day`,
  `hour`,
  `minute`,
  `second`,
  `timeZoneName`,
  `formatMatcher`,
  `hour12`,
  `timeZone`,
  `dateStyle`,
  `timeStyle`,
  `calendar`,
  `dayPeriod`,
  `numberingSystem`,
  `hourCycle`,
  `fractionalSecondDigits`,
];
function fp(...e) {
  let [t, n, r, i] = e,
    a = U(),
    o = U(),
    s;
  if (K(t)) {
    let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!e) throw xf(bf.INVALID_ISO_DATE_ARGUMENT);
    let n = e[3]
      ? e[3].trim().startsWith(`T`)
        ? `${e[1].trim()}${e[3].trim()}`
        : `${e[1].trim()}T${e[3].trim()}`
      : e[1].trim();
    s = new Date(n);
    try {
      s.toISOString();
    } catch {
      throw xf(bf.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Vu(t)) {
    if (isNaN(t.getTime())) throw xf(bf.INVALID_DATE_ARGUMENT);
    s = t;
  } else if (V(t)) s = t;
  else throw xf(bf.INVALID_ARGUMENT);
  return (
    K(n)
      ? (a.key = n)
      : Y(n) &&
        Object.keys(n).forEach((e) => {
          dp.includes(e) ? (o[e] = n[e]) : (a[e] = n[e]);
        }),
    K(r) ? (a.locale = r) : Y(r) && (o = r),
    Y(i) && (o = i),
    [a.key || ``, s, a, o]
  );
}
function pp(e, t, n) {
  let r = e;
  for (let e in n) {
    let n = `${t}__${e}`;
    r.__datetimeFormatters.has(n) && r.__datetimeFormatters.delete(n);
  }
}
function mp(e, ...t) {
  let {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: i,
      onWarn: a,
      localeFallbacker: o,
    } = e,
    { __numberFormatters: s } = e,
    [c, l, u, d] = gp(...t),
    f = q(u.missingWarn) ? u.missingWarn : e.missingWarn;
  q(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  let p = !!u.part,
    m = Sf(e, u),
    h = o(e, i, m);
  if (!K(c) || c === ``) return new Intl.NumberFormat(m, d).format(l);
  let g = {},
    _,
    v = null;
  for (
    let t = 0;
    t < h.length && ((_ = h[t]), (g = n[_] || {}), (v = g[c]), !Y(v));
    t++
  )
    ap(e, c, _, f, `number format`);
  if (!Y(v) || !K(_)) return r ? -1 : c;
  let y = `${_}__${c}`;
  Uu(d) || (y = `${y}__${JSON.stringify(d)}`);
  let b = s.get(y);
  return (
    b || ((b = new Intl.NumberFormat(_, H({}, v, d))), s.set(y, b)),
    p ? b.formatToParts(l) : b.format(l)
  );
}
var hp = [
  `localeMatcher`,
  `style`,
  `currency`,
  `currencyDisplay`,
  `currencySign`,
  `useGrouping`,
  `minimumIntegerDigits`,
  `minimumFractionDigits`,
  `maximumFractionDigits`,
  `minimumSignificantDigits`,
  `maximumSignificantDigits`,
  `compactDisplay`,
  `notation`,
  `signDisplay`,
  `unit`,
  `unitDisplay`,
  `roundingMode`,
  `roundingPriority`,
  `roundingIncrement`,
  `trailingZeroDisplay`,
];
function gp(...e) {
  let [t, n, r, i] = e,
    a = U(),
    o = U();
  if (!V(t)) throw xf(bf.INVALID_ARGUMENT);
  let s = t;
  return (
    K(n)
      ? (a.key = n)
      : Y(n) &&
        Object.keys(n).forEach((e) => {
          hp.includes(e) ? (o[e] = n[e]) : (a[e] = n[e]);
        }),
    K(r) ? (a.locale = r) : Y(r) && (o = r),
    Y(i) && (o = i),
    [a.key || ``, s, a, o]
  );
}
function _p(e, t, n) {
  let r = e;
  for (let e in n) {
    let n = `${t}__${e}`;
    r.__numberFormatters.has(n) && r.__numberFormatters.delete(n);
  }
}
var vp = (e) => e,
  yp = (e) => ``,
  bp = `text`,
  xp = (e) => (e.length === 0 ? `` : nd(e)),
  Sp = td;
function Cp(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function wp(e) {
  let t = V(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (V(e.named.count) || V(e.named.n))
    ? V(e.named.count)
      ? e.named.count
      : V(e.named.n)
        ? e.named.n
        : t
    : t;
}
function Tp(e, t) {
  ((t.count ||= e), (t.n ||= e));
}
function Ep(e = {}) {
  let t = e.locale,
    n = wp(e),
    r = J(e.pluralRules) && K(t) && G(e.pluralRules[t]) ? e.pluralRules[t] : Cp,
    i = J(e.pluralRules) && K(t) && G(e.pluralRules[t]) ? Cp : void 0,
    a = (e) => e[r(n, e.length, i)],
    o = e.list || [],
    s = (e) => o[e],
    c = e.named || U();
  V(e.pluralIndex) && Tp(n, c);
  let l = (e) => c[e];
  function u(t, n) {
    return (
      (G(e.messages)
        ? e.messages(t, !!n)
        : J(e.messages)
          ? e.messages[t]
          : !1) || (e.parent ? e.parent.message(t) : yp)
    );
  }
  let d = (t) => (e.modifiers ? e.modifiers[t] : vp),
    f = Y(e.processor) && G(e.processor.normalize) ? e.processor.normalize : xp,
    p =
      Y(e.processor) && G(e.processor.interpolate)
        ? e.processor.interpolate
        : Sp,
    m = {
      list: s,
      named: l,
      plural: a,
      linked: (e, ...t) => {
        let [n, r] = t,
          i = `text`,
          a = ``;
        t.length === 1
          ? J(n)
            ? ((a = n.modifier || a), (i = n.type || i))
            : K(n) && (a = n || a)
          : t.length === 2 && (K(n) && (a = n || a), K(r) && (i = r || i));
        let o = u(e, !0)(m),
          s = i === `vnode` && W(o) && a ? o[0] : o;
        return a ? d(a)(s, i) : s;
      },
      message: u,
      type: Y(e.processor) && K(e.processor.type) ? e.processor.type : bp,
      interpolate: p,
      normalize: f,
      values: H(U(), o, c),
    };
  return m;
}
var Dp = () => ``,
  Op = (e) => G(e);
function kp(e, ...t) {
  let {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: i,
      messageCompiler: a,
      fallbackLocale: o,
      messages: s,
    } = e,
    [c, l] = Pp(...t),
    u = q(l.missingWarn) ? l.missingWarn : e.missingWarn,
    d = q(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn,
    f = q(l.escapeParameter) ? l.escapeParameter : e.escapeParameter,
    p = !!l.resolvedMessage,
    m =
      K(l.default) || q(l.default)
        ? q(l.default)
          ? a
            ? c
            : () => c
          : l.default
        : n
          ? a
            ? c
            : () => c
          : null,
    h = n || (m != null && (K(m) || G(m))),
    g = Sf(e, l);
  f && Ap(l);
  let [_, v, y] = p ? [c, g, s[g] || U()] : jp(e, c, g, o, d, u),
    b = _,
    x = c;
  if (
    (!p && !(K(b) || Bd(b) || Op(b)) && h && ((b = m), (x = b)),
    !p && (!(K(b) || Bd(b) || Op(b)) || !K(v)))
  )
    return i ? -1 : c;
  let S = !1,
    C = Op(b)
      ? b
      : Mp(e, c, v, b, x, () => {
          S = !0;
        });
  if (S) return b;
  let w = Np(e, C, Ep(Ip(e, v, y, l))),
    T = r ? r(w, c) : w;
  if ((f && K(T) && (T = Yu(T)), __INTLIFY_PROD_DEVTOOLS__)) {
    let t = {
      timestamp: Date.now(),
      key: K(c) ? c : Op(b) ? b.key : ``,
      locale: v || (Op(b) ? b.locale : ``),
      format: K(b) ? b : Op(b) ? b.source : ``,
      message: T,
    };
    ((t.meta = H({}, e.__meta, Qf() || {})), vf(t));
  }
  return T;
}
function Ap(e) {
  W(e.list)
    ? (e.list = e.list.map((e) => (K(e) ? qu(e) : e)))
    : J(e.named) &&
      Object.keys(e.named).forEach((t) => {
        K(e.named[t]) && (e.named[t] = qu(e.named[t]));
      });
}
function jp(e, t, n, r, i, a) {
  let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e,
    u = l(e, r, n),
    d = U(),
    f,
    p = null;
  for (
    let n = 0;
    n < u.length &&
    ((f = u[n]),
    (d = o[f] || U()),
    (p = c(d, t)) === null && (p = d[t]),
    !(K(p) || Bd(p) || Op(p)));
    n++
  )
    if (!cp(f, u)) {
      let n = ap(e, t, f, a, `translate`);
      n !== t && (p = n);
    }
  return [p, f, d];
}
function Mp(e, t, n, r, i, a) {
  let { messageCompiler: o, warnHtmlMessage: s } = e;
  if (Op(r)) {
    let e = r;
    return ((e.locale = e.locale || n), (e.key = e.key || t), e);
  }
  if (o == null) {
    let e = () => r;
    return ((e.locale = n), (e.key = t), e);
  }
  let c = o(r, Fp(e, n, i, r, s, a));
  return ((c.locale = n), (c.key = t), (c.source = r), c);
}
function Np(e, t, n) {
  return t(n);
}
function Pp(...e) {
  let [t, n, r] = e,
    i = U();
  if (!K(t) && !V(t) && !Op(t) && !Bd(t)) throw xf(bf.INVALID_ARGUMENT);
  let a = V(t) ? String(t) : (Op(t), t);
  return (
    V(n)
      ? (i.plural = n)
      : K(n)
        ? (i.default = n)
        : Y(n) && !Uu(n)
          ? (i.named = n)
          : W(n) && (i.list = n),
    V(r) ? (i.plural = r) : K(r) ? (i.default = r) : Y(r) && H(i, r),
    [a, i]
  );
}
function Fp(e, t, n, r, i, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: i,
    onError: (e) => {
      throw (a && a(e), e);
    },
    onCacheKey: (e) => zu(t, n, e),
  };
}
function Ip(e, t, n, r) {
  let {
      modifiers: i,
      pluralRules: a,
      messageResolver: o,
      fallbackLocale: s,
      fallbackWarn: c,
      missingWarn: l,
      fallbackContext: u,
    } = e,
    d = {
      locale: t,
      modifiers: i,
      pluralRules: a,
      messages: (r, i) => {
        let a = o(n, r);
        if (a == null && (u || i)) {
          let [, , n] = jp(u || e, r, t, s, c, l);
          a = o(n, r);
        }
        if (K(a) || Bd(a)) {
          let n = !1,
            i = Mp(e, r, t, a, r, () => {
              n = !0;
            });
          return n ? Dp : i;
        } else if (Op(a)) return a;
        else return Dp;
      },
    };
  return (
    e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    V(r.plural) && (d.pluralIndex = r.plural),
    d
  );
}
zd();
var Lp = `11.2.2`;
function Rp() {
  (typeof __VUE_I18N_FULL_INSTALL__ != `boolean` &&
    (Ku().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != `boolean` &&
      (Ku().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != `boolean` &&
      (Ku().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != `boolean` &&
      (Ku().__INTLIFY_PROD_DEVTOOLS__ = !1));
}
var Z = {
  UNEXPECTED_RETURN_TYPE: 24,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32,
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34,
};
function zp(e, ...t) {
  return sd(e, null, void 0);
}
(Z.UNEXPECTED_RETURN_TYPE,
  Z.INVALID_ARGUMENT,
  Z.MUST_BE_CALL_SETUP_TOP,
  Z.NOT_INSTALLED,
  Z.UNEXPECTED_ERROR,
  Z.REQUIRED_VALUE,
  Z.INVALID_VALUE,
  Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,
  Z.NOT_INSTALLED_WITH_PROVIDE,
  Z.NOT_COMPATIBLE_LEGACY_VUE_I18N,
  Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
var Bp = Ru(`__translateVNode`),
  Vp = Ru(`__datetimeParts`),
  Hp = Ru(`__numberParts`),
  Up = Ru(`__setPluralRules`);
Ru(`__intlifyMeta`);
var Wp = Ru(`__injectWithOption`),
  Gp = Ru(`__dispose`),
  Kp = {
    FALLBACK_TO_ROOT: 8,
    NOT_FOUND_PARENT_SCOPE: 9,
    IGNORE_OBJ_FLATTEN: 10,
    DEPRECATE_LEGACY_MODE: 11,
    DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 12,
    DUPLICATE_USE_I18N_CALLING: 13,
  };
(Kp.FALLBACK_TO_ROOT,
  Kp.NOT_FOUND_PARENT_SCOPE,
  Kp.IGNORE_OBJ_FLATTEN,
  Kp.DEPRECATE_LEGACY_MODE,
  Kp.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE,
  Kp.DUPLICATE_USE_I18N_CALLING);
function qp(e) {
  if (!J(e) || Bd(e)) return e;
  for (let t in e)
    if (Zu(e, t))
      if (!t.includes(`.`)) J(e[t]) && qp(e[t]);
      else {
        let n = t.split(`.`),
          r = n.length - 1,
          i = e,
          a = !1;
        for (let e = 0; e < r; e++) {
          if (n[e] === `__proto__`) throw Error(`unsafe key: ${n[e]}`);
          if ((n[e] in i || (i[n[e]] = U()), !J(i[n[e]]))) {
            a = !0;
            break;
          }
          i = i[n[e]];
        }
        if (
          (a ||
            (Bd(i)
              ? af.includes(n[r]) || delete e[t]
              : ((i[n[r]] = e[t]), delete e[t])),
          !Bd(i))
        ) {
          let e = i[n[r]];
          J(e) && qp(e);
        }
      }
  return e;
}
function Jp(e, t) {
  let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t,
    o = Y(n) ? n : W(r) ? U() : { [e]: U() };
  if (
    (W(r) &&
      r.forEach((e) => {
        if (`locale` in e && `resource` in e) {
          let { locale: t, resource: n } = e;
          t ? ((o[t] = o[t] || U()), id(n, o[t])) : id(n, o);
        } else K(e) && id(JSON.parse(e), o);
      }),
    i == null && a)
  )
    for (let e in o) Zu(o, e) && qp(o[e]);
  return o;
}
function Yp(e) {
  return e.type;
}
function Xp(e, t, n) {
  let r = J(t.messages) ? t.messages : U();
  `__i18nGlobal` in n &&
    (r = Jp(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  let i = Object.keys(r);
  if (
    (i.length &&
      i.forEach((t) => {
        e.mergeLocaleMessage(t, r[t]);
      }),
    J(t.datetimeFormats))
  ) {
    let n = Object.keys(t.datetimeFormats);
    n.length &&
      n.forEach((n) => {
        e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
      });
  }
  if (J(t.numberFormats)) {
    let n = Object.keys(t.numberFormats);
    n.length &&
      n.forEach((n) => {
        e.mergeNumberFormat(n, t.numberFormats[n]);
      });
  }
}
function Zp(e) {
  return z(Zo, null, e, 0);
}
function Qp() {
  if (!(`currentInstance` in du)) return ks();
}
var $p = () => [],
  em = () => !1,
  tm = 0;
function nm(e) {
  return (t, n, r, i) => e(n, r, Qp() || void 0, i);
}
function rm(e = {}) {
  let { __root: t, __injectWithOption: n } = e,
    r = t === void 0,
    i = e.flatJson,
    a = Lu ? on : sn,
    o = q(e.inheritLocale) ? e.inheritLocale : !0,
    s = a(t && o ? t.locale.value : K(e.locale) ? e.locale : Hf),
    c = a(
      t && o
        ? t.fallbackLocale.value
        : K(e.fallbackLocale) ||
            W(e.fallbackLocale) ||
            Y(e.fallbackLocale) ||
            e.fallbackLocale === !1
          ? e.fallbackLocale
          : s.value,
    ),
    l = a(Jp(s.value, e)),
    u = a(Y(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }),
    d = a(Y(e.numberFormats) ? e.numberFormats : { [s.value]: {} }),
    f = t
      ? t.missingWarn
      : q(e.missingWarn) || Hu(e.missingWarn)
        ? e.missingWarn
        : !0,
    p = t
      ? t.fallbackWarn
      : q(e.fallbackWarn) || Hu(e.fallbackWarn)
        ? e.fallbackWarn
        : !0,
    m = t ? t.fallbackRoot : q(e.fallbackRoot) ? e.fallbackRoot : !0,
    h = !!e.fallbackFormat,
    g = G(e.missing) ? e.missing : null,
    _ = G(e.missing) ? nm(e.missing) : null,
    v = G(e.postTranslation) ? e.postTranslation : null,
    y = t ? t.warnHtmlMessage : q(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    b = !!e.escapeParameter,
    x = t ? t.modifiers : Y(e.modifiers) ? e.modifiers : {},
    S = e.pluralRules || (t && t.pluralRules),
    C;
  ((C = (() => {
    r && ep(null);
    let t = {
      version: Lp,
      locale: s.value,
      fallbackLocale: c.value,
      messages: l.value,
      modifiers: x,
      pluralRules: S,
      missing: _ === null ? void 0 : _,
      missingWarn: f,
      fallbackWarn: p,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: v === null ? void 0 : v,
      warnHtmlMessage: y,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: `vue` },
    };
    ((t.datetimeFormats = u.value),
      (t.numberFormats = d.value),
      (t.__datetimeFormatters = Y(C) ? C.__datetimeFormatters : void 0),
      (t.__numberFormatters = Y(C) ? C.__numberFormatters : void 0));
    let n = rp(t);
    return (r && ep(n), n);
  })()),
    op(C, s.value, c.value));
  function w() {
    return [s.value, c.value, l.value, u.value, d.value];
  }
  let T = B({
      get: () => s.value,
      set: (e) => {
        ((C.locale = e), (s.value = e));
      },
    }),
    E = B({
      get: () => c.value,
      set: (e) => {
        ((C.fallbackLocale = e), (c.value = e), op(C, s.value, e));
      },
    }),
    D = B(() => l.value),
    O = B(() => u.value),
    ee = B(() => d.value);
  function k() {
    return G(v) ? v : null;
  }
  function te(e) {
    ((v = e), (C.postTranslation = e));
  }
  function A() {
    return g;
  }
  function ne(e) {
    (e !== null && (_ = nm(e)), (g = e), (C.missing = _));
  }
  let re = (e, n, i, a, o, s) => {
    w();
    let c;
    try {
      (__INTLIFY_PROD_DEVTOOLS__,
        r || (C.fallbackContext = t ? tp() : void 0),
        (c = e(C)));
    } finally {
      (__INTLIFY_PROD_DEVTOOLS__, r || (C.fallbackContext = void 0));
    }
    if (
      (i !== `translate exists` && V(c) && c === -1) ||
      (i === `translate exists` && !c)
    ) {
      let [e, r] = n();
      return t && m ? a(t) : o(e);
    } else if (s(c)) return c;
    else throw zp(Z.UNEXPECTED_RETURN_TYPE);
  };
  function j(...e) {
    return re(
      (t) => Reflect.apply(kp, null, [t, ...e]),
      () => Pp(...e),
      `translate`,
      (t) => Reflect.apply(t.t, t, [...e]),
      (e) => e,
      (e) => K(e),
    );
  }
  function ie(...e) {
    let [t, n, r] = e;
    if (r && !J(r)) throw zp(Z.INVALID_ARGUMENT);
    return j(t, n, H({ resolvedMessage: !0 }, r || {}));
  }
  function ae(...e) {
    return re(
      (t) => Reflect.apply(up, null, [t, ...e]),
      () => fp(...e),
      `datetime format`,
      (t) => Reflect.apply(t.d, t, [...e]),
      () => ``,
      (e) => K(e) || W(e),
    );
  }
  function oe(...e) {
    return re(
      (t) => Reflect.apply(mp, null, [t, ...e]),
      () => gp(...e),
      `number format`,
      (t) => Reflect.apply(t.n, t, [...e]),
      () => ``,
      (e) => K(e) || W(e),
    );
  }
  function se(e) {
    return e.map((e) => (K(e) || V(e) || q(e) ? Zp(String(e)) : e));
  }
  let ce = { normalize: se, interpolate: (e) => e, type: `vnode` };
  function le(...e) {
    return re(
      (t) => {
        let n,
          r = t;
        try {
          ((r.processor = ce), (n = Reflect.apply(kp, null, [r, ...e])));
        } finally {
          r.processor = null;
        }
        return n;
      },
      () => Pp(...e),
      `translate`,
      (t) => t[Bp](...e),
      (e) => [Zp(e)],
      (e) => W(e),
    );
  }
  function ue(...e) {
    return re(
      (t) => Reflect.apply(mp, null, [t, ...e]),
      () => gp(...e),
      `number format`,
      (t) => t[Hp](...e),
      $p,
      (e) => K(e) || W(e),
    );
  }
  function de(...e) {
    return re(
      (t) => Reflect.apply(up, null, [t, ...e]),
      () => fp(...e),
      `datetime format`,
      (t) => t[Vp](...e),
      $p,
      (e) => K(e) || W(e),
    );
  }
  function fe(e) {
    ((S = e), (C.pluralRules = S));
  }
  function pe(e, t) {
    return re(
      () => {
        if (!e) return !1;
        let n = ge(K(t) ? t : s.value),
          r = C.messageResolver(n, e);
        return Bd(r) || Op(r) || K(r);
      },
      () => [e],
      `translate exists`,
      (n) => Reflect.apply(n.te, n, [e, t]),
      em,
      (e) => q(e),
    );
  }
  function me(e) {
    let t = null,
      n = Ef(C, c.value, s.value);
    for (let r = 0; r < n.length; r++) {
      let i = l.value[n[r]] || {},
        a = C.messageResolver(i, e);
      if (a != null) {
        t = a;
        break;
      }
    }
    return t;
  }
  function he(e) {
    return me(e) ?? ((t && t.tm(e)) || {});
  }
  function ge(e) {
    return l.value[e] || {};
  }
  function _e(e, t) {
    if (i) {
      let n = { [e]: t };
      for (let e in n) Zu(n, e) && qp(n[e]);
      t = n[e];
    }
    ((l.value[e] = t), (C.messages = l.value));
  }
  function ve(e, t) {
    l.value[e] = l.value[e] || {};
    let n = { [e]: t };
    if (i) for (let e in n) Zu(n, e) && qp(n[e]);
    ((t = n[e]), id(t, l.value[e]), (C.messages = l.value));
  }
  function ye(e) {
    return u.value[e] || {};
  }
  function be(e, t) {
    ((u.value[e] = t), (C.datetimeFormats = u.value), pp(C, e, t));
  }
  function xe(e, t) {
    ((u.value[e] = H(u.value[e] || {}, t)),
      (C.datetimeFormats = u.value),
      pp(C, e, t));
  }
  function Se(e) {
    return d.value[e] || {};
  }
  function Ce(e, t) {
    ((d.value[e] = t), (C.numberFormats = d.value), _p(C, e, t));
  }
  function we(e, t) {
    ((d.value[e] = H(d.value[e] || {}, t)),
      (C.numberFormats = d.value),
      _p(C, e, t));
  }
  (tm++,
    t &&
      Lu &&
      (Ka(t.locale, (e) => {
        o && ((s.value = e), (C.locale = e), op(C, s.value, c.value));
      }),
      Ka(t.fallbackLocale, (e) => {
        o && ((c.value = e), (C.fallbackLocale = e), op(C, s.value, c.value));
      })));
  let M = {
    id: tm,
    locale: T,
    fallbackLocale: E,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(e) {
      ((o = e),
        e &&
          t &&
          ((s.value = t.locale.value),
          (c.value = t.fallbackLocale.value),
          op(C, s.value, c.value)));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: D,
    get modifiers() {
      return x;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(e) {
      ((f = e), (C.missingWarn = f));
    },
    get fallbackWarn() {
      return p;
    },
    set fallbackWarn(e) {
      ((p = e), (C.fallbackWarn = p));
    },
    get fallbackRoot() {
      return m;
    },
    set fallbackRoot(e) {
      m = e;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(e) {
      ((h = e), (C.fallbackFormat = h));
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(e) {
      ((y = e), (C.warnHtmlMessage = e));
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(e) {
      ((b = e), (C.escapeParameter = e));
    },
    t: j,
    getLocaleMessage: ge,
    setLocaleMessage: _e,
    mergeLocaleMessage: ve,
    getPostTranslationHandler: k,
    setPostTranslationHandler: te,
    getMissingHandler: A,
    setMissingHandler: ne,
    [Up]: fe,
  };
  return (
    (M.datetimeFormats = O),
    (M.numberFormats = ee),
    (M.rt = ie),
    (M.te = pe),
    (M.tm = he),
    (M.d = ae),
    (M.n = oe),
    (M.getDateTimeFormat = ye),
    (M.setDateTimeFormat = be),
    (M.mergeDateTimeFormat = xe),
    (M.getNumberFormat = Se),
    (M.setNumberFormat = Ce),
    (M.mergeNumberFormat = we),
    (M[Wp] = n),
    (M[Bp] = le),
    (M[Vp] = de),
    (M[Hp] = ue),
    M
  );
}
function im(e) {
  let t = K(e.locale) ? e.locale : Hf,
    n =
      K(e.fallbackLocale) ||
      W(e.fallbackLocale) ||
      Y(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : t,
    r = G(e.missing) ? e.missing : void 0,
    i =
      q(e.silentTranslationWarn) || Hu(e.silentTranslationWarn)
        ? !e.silentTranslationWarn
        : !0,
    a =
      q(e.silentFallbackWarn) || Hu(e.silentFallbackWarn)
        ? !e.silentFallbackWarn
        : !0,
    o = q(e.fallbackRoot) ? e.fallbackRoot : !0,
    s = !!e.formatFallbackMessages,
    c = Y(e.modifiers) ? e.modifiers : {},
    l = e.pluralizationRules,
    u = G(e.postTranslation) ? e.postTranslation : void 0,
    d = K(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== `off` : !0,
    f = !!e.escapeParameterHtml,
    p = q(e.sync) ? e.sync : !0,
    m = e.messages;
  if (Y(e.sharedMessages)) {
    let t = e.sharedMessages;
    m = Object.keys(t).reduce(
      (e, n) => (H(e[n] || (e[n] = {}), t[n]), e),
      m || {},
    );
  }
  let { __i18n: h, __root: g, __injectWithOption: _ } = e,
    v = e.datetimeFormats,
    y = e.numberFormats,
    b = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: m,
    flatJson: b,
    datetimeFormats: v,
    numberFormats: y,
    missing: r,
    missingWarn: i,
    fallbackWarn: a,
    fallbackRoot: o,
    fallbackFormat: s,
    modifiers: c,
    pluralRules: l,
    postTranslation: u,
    warnHtmlMessage: d,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    __i18n: h,
    __root: g,
    __injectWithOption: _,
  };
}
function am(e = {}) {
  let t = rm(im(e)),
    { __extender: n } = e,
    r = {
      id: t.id,
      get locale() {
        return t.locale.value;
      },
      set locale(e) {
        t.locale.value = e;
      },
      get fallbackLocale() {
        return t.fallbackLocale.value;
      },
      set fallbackLocale(e) {
        t.fallbackLocale.value = e;
      },
      get messages() {
        return t.messages.value;
      },
      get datetimeFormats() {
        return t.datetimeFormats.value;
      },
      get numberFormats() {
        return t.numberFormats.value;
      },
      get availableLocales() {
        return t.availableLocales;
      },
      get missing() {
        return t.getMissingHandler();
      },
      set missing(e) {
        t.setMissingHandler(e);
      },
      get silentTranslationWarn() {
        return q(t.missingWarn) ? !t.missingWarn : t.missingWarn;
      },
      set silentTranslationWarn(e) {
        t.missingWarn = q(e) ? !e : e;
      },
      get silentFallbackWarn() {
        return q(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
      },
      set silentFallbackWarn(e) {
        t.fallbackWarn = q(e) ? !e : e;
      },
      get modifiers() {
        return t.modifiers;
      },
      get formatFallbackMessages() {
        return t.fallbackFormat;
      },
      set formatFallbackMessages(e) {
        t.fallbackFormat = e;
      },
      get postTranslation() {
        return t.getPostTranslationHandler();
      },
      set postTranslation(e) {
        t.setPostTranslationHandler(e);
      },
      get sync() {
        return t.inheritLocale;
      },
      set sync(e) {
        t.inheritLocale = e;
      },
      get warnHtmlInMessage() {
        return t.warnHtmlMessage ? `warn` : `off`;
      },
      set warnHtmlInMessage(e) {
        t.warnHtmlMessage = e !== `off`;
      },
      get escapeParameterHtml() {
        return t.escapeParameter;
      },
      set escapeParameterHtml(e) {
        t.escapeParameter = e;
      },
      get pluralizationRules() {
        return t.pluralRules || {};
      },
      __composer: t,
      t(...e) {
        return Reflect.apply(t.t, t, [...e]);
      },
      rt(...e) {
        return Reflect.apply(t.rt, t, [...e]);
      },
      te(e, n) {
        return t.te(e, n);
      },
      tm(e) {
        return t.tm(e);
      },
      getLocaleMessage(e) {
        return t.getLocaleMessage(e);
      },
      setLocaleMessage(e, n) {
        t.setLocaleMessage(e, n);
      },
      mergeLocaleMessage(e, n) {
        t.mergeLocaleMessage(e, n);
      },
      d(...e) {
        return Reflect.apply(t.d, t, [...e]);
      },
      getDateTimeFormat(e) {
        return t.getDateTimeFormat(e);
      },
      setDateTimeFormat(e, n) {
        t.setDateTimeFormat(e, n);
      },
      mergeDateTimeFormat(e, n) {
        t.mergeDateTimeFormat(e, n);
      },
      n(...e) {
        return Reflect.apply(t.n, t, [...e]);
      },
      getNumberFormat(e) {
        return t.getNumberFormat(e);
      },
      setNumberFormat(e, n) {
        t.setNumberFormat(e, n);
      },
      mergeNumberFormat(e, n) {
        t.mergeNumberFormat(e, n);
      },
    };
  return ((r.__extender = n), r);
}
function om(e, t, n) {
  return {
    beforeCreate() {
      let r = Qp();
      if (!r) throw zp(Z.UNEXPECTED_ERROR);
      let i = this.$options;
      if (i.i18n) {
        let r = i.i18n;
        if (
          (i.__i18n && (r.__i18n = i.__i18n),
          (r.__root = t),
          this === this.$root)
        )
          this.$i18n = sm(e, r);
        else {
          ((r.__injectWithOption = !0),
            (r.__extender = n.__vueI18nExtend),
            (this.$i18n = am(r)));
          let e = this.$i18n;
          e.__extender && (e.__disposer = e.__extender(this.$i18n));
        }
      } else if (i.__i18n)
        if (this === this.$root) this.$i18n = sm(e, i);
        else {
          this.$i18n = am({
            __i18n: i.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t,
          });
          let e = this.$i18n;
          e.__extender && (e.__disposer = e.__extender(this.$i18n));
        }
      else this.$i18n = e;
      (i.__i18nGlobal && Xp(t, i, i),
        (this.$t = (...e) => this.$i18n.t(...e)),
        (this.$rt = (...e) => this.$i18n.rt(...e)),
        (this.$te = (e, t) => this.$i18n.te(e, t)),
        (this.$d = (...e) => this.$i18n.d(...e)),
        (this.$n = (...e) => this.$i18n.n(...e)),
        (this.$tm = (e) => this.$i18n.tm(e)),
        n.__setInstance(r, this.$i18n));
    },
    mounted() {},
    unmounted() {
      let e = Qp();
      if (!e) throw zp(Z.UNEXPECTED_ERROR);
      let t = this.$i18n;
      (delete this.$t,
        delete this.$rt,
        delete this.$te,
        delete this.$d,
        delete this.$n,
        delete this.$tm,
        t.__disposer &&
          (t.__disposer(), delete t.__disposer, delete t.__extender),
        n.__deleteInstance(e),
        delete this.$i18n);
    },
  };
}
function sm(e, t) {
  ((e.locale = t.locale || e.locale),
    (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
    (e.missing = t.missing || e.missing),
    (e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn),
    (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
    (e.formatFallbackMessages =
      t.formatFallbackMessages || e.formatFallbackMessages),
    (e.postTranslation = t.postTranslation || e.postTranslation),
    (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
    (e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
    (e.sync = t.sync || e.sync),
    e.__composer[Up](t.pluralizationRules || e.pluralizationRules));
  let n = Jp(e.locale, { messages: t.messages, __i18n: t.__i18n });
  return (
    Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])),
    t.datetimeFormats &&
      Object.keys(t.datetimeFormats).forEach((n) =>
        e.mergeDateTimeFormat(n, t.datetimeFormats[n]),
      ),
    t.numberFormats &&
      Object.keys(t.numberFormats).forEach((n) =>
        e.mergeNumberFormat(n, t.numberFormats[n]),
      ),
    e
  );
}
var cm = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === `parent` || e === `global`,
    default: `parent`,
  },
  i18n: { type: Object },
};
function lm({ slots: e }, t) {
  return t.length === 1 && t[0] === `default`
    ? (e.default ? e.default() : []).reduce(
        (e, t) => [...e, ...(t.type === L ? t.children : [t])],
        [],
      )
    : t.reduce((t, n) => {
        let r = e[n];
        return (r && (t[n] = r()), t);
      }, U());
}
function um() {
  return L;
}
var dm = Gr({
  name: `i18n-t`,
  props: H(
    {
      keypath: { type: String, required: !0 },
      plural: { type: [Number, String], validator: (e) => V(e) || !isNaN(e) },
    },
    cm,
  ),
  setup(e, t) {
    let { slots: n, attrs: r } = t,
      i = e.i18n || Sm({ useScope: e.scope, __useComponent: !0 });
    return () => {
      let a = Object.keys(n).filter((e) => e[0] !== `_`),
        o = U();
      (e.locale && (o.locale = e.locale),
        e.plural !== void 0 && (o.plural = K(e.plural) ? +e.plural : e.plural));
      let s = lm(t, a),
        c = i[Bp](e.keypath, s, o),
        l = H(U(), r);
      return Ys(K(e.tag) || J(e.tag) ? e.tag : um(), l, c);
    };
  },
});
function fm(e) {
  return W(e) && !K(e[0]);
}
function pm(e, t, n, r) {
  let { slots: i, attrs: a } = t;
  return () => {
    let t = { part: !0 },
      o = U();
    (e.locale && (t.locale = e.locale),
      K(e.format)
        ? (t.key = e.format)
        : J(e.format) &&
          (K(e.format.key) && (t.key = e.format.key),
          (o = Object.keys(e.format).reduce(
            (t, r) => (n.includes(r) ? H(U(), t, { [r]: e.format[r] }) : t),
            U(),
          ))));
    let s = r(e.value, t, o),
      c = [t.key];
    W(s)
      ? (c = s.map((e, t) => {
          let n = i[e.type],
            r = n ? n({ [e.type]: e.value, index: t, parts: s }) : [e.value];
          return (fm(r) && (r[0].key = `${e.type}-${t}`), r);
        }))
      : K(s) && (c = [s]);
    let l = H(U(), a);
    return Ys(K(e.tag) || J(e.tag) ? e.tag : um(), l, c);
  };
}
var mm = Gr({
  name: `i18n-n`,
  props: H(
    {
      value: { type: Number, required: !0 },
      format: { type: [String, Object] },
    },
    cm,
  ),
  setup(e, t) {
    let n = e.i18n || Sm({ useScope: e.scope, __useComponent: !0 });
    return pm(e, t, hp, (...e) => n[Hp](...e));
  },
});
function hm(e, t) {
  let n = e;
  if (e.mode === `composition`) return n.__getInstance(t) || e.global;
  {
    let r = n.__getInstance(t);
    return r == null ? e.global.__composer : r.__composer;
  }
}
function gm(e) {
  let t = (t) => {
    let { instance: n, value: r } = t;
    if (!n || !n.$) throw zp(Z.UNEXPECTED_ERROR);
    let i = hm(e, n.$),
      a = _m(r);
    return [Reflect.apply(i.t, i, [...vm(a)]), i];
  };
  return {
    created: (n, r) => {
      let [i, a] = t(r);
      (Lu &&
        e.global === a &&
        (n.__i18nWatcher = Ka(a.locale, () => {
          r.instance && r.instance.$forceUpdate();
        })),
        (n.__composer = a),
        (n.textContent = i));
    },
    unmounted: (e) => {
      (Lu &&
        e.__i18nWatcher &&
        (e.__i18nWatcher(), (e.__i18nWatcher = void 0), delete e.__i18nWatcher),
        e.__composer && ((e.__composer = void 0), delete e.__composer));
    },
    beforeUpdate: (e, { value: t }) => {
      if (e.__composer) {
        let n = e.__composer,
          r = _m(t);
        e.textContent = Reflect.apply(n.t, n, [...vm(r)]);
      }
    },
    getSSRProps: (e) => {
      let [n] = t(e);
      return { textContent: n };
    },
  };
}
function _m(e) {
  if (K(e)) return { path: e };
  if (Y(e)) {
    if (!(`path` in e)) throw zp(Z.REQUIRED_VALUE, `path`);
    return e;
  } else throw zp(Z.INVALID_VALUE);
}
function vm(e) {
  let { path: t, locale: n, args: r, choice: i, plural: a } = e,
    o = {},
    s = r || {};
  return (
    K(n) && (o.locale = n),
    V(i) && (o.plural = i),
    V(a) && (o.plural = a),
    [t, s, o]
  );
}
function ym(e, t, ...n) {
  let r = Y(n[0]) ? n[0] : {};
  ((!q(r.globalInstall) || r.globalInstall) &&
    ([dm.name, `I18nT`].forEach((t) => e.component(t, dm)),
    [mm.name, `I18nN`].forEach((t) => e.component(t, mm)),
    [Nm.name, `I18nD`].forEach((t) => e.component(t, Nm))),
    e.directive(`t`, gm(t)));
}
var bm = Ru(`global-vue-i18n`);
function xm(e = {}) {
  let t =
      __VUE_I18N_LEGACY_API__ && q(e.legacy)
        ? e.legacy
        : __VUE_I18N_LEGACY_API__,
    n = q(e.globalInjection) ? e.globalInjection : !0,
    r = new Map(),
    [i, a] = Cm(e, t),
    o = Ru(``);
  function s(e) {
    return r.get(e) || null;
  }
  function c(e, t) {
    r.set(e, t);
  }
  function l(e) {
    r.delete(e);
  }
  let u = {
    get mode() {
      return __VUE_I18N_LEGACY_API__ && t ? `legacy` : `composition`;
    },
    async install(e, ...r) {
      if (
        ((e.__VUE_I18N_SYMBOL__ = o),
        e.provide(e.__VUE_I18N_SYMBOL__, u),
        Y(r[0]))
      ) {
        let e = r[0];
        ((u.__composerExtend = e.__composerExtend),
          (u.__vueI18nExtend = e.__vueI18nExtend));
      }
      let i = null;
      (!t && n && (i = Mm(e, u.global)),
        __VUE_I18N_FULL_INSTALL__ && ym(e, u, ...r),
        __VUE_I18N_LEGACY_API__ && t && e.mixin(om(a, a.__composer, u)));
      let s = e.unmount;
      e.unmount = () => {
        (i && i(), u.dispose(), s());
      };
    },
    get global() {
      return a;
    },
    dispose() {
      i.stop();
    },
    __instances: r,
    __getInstance: s,
    __setInstance: c,
    __deleteInstance: l,
  };
  return u;
}
function Sm(e = {}) {
  let t = Qp();
  if (t == null) throw zp(Z.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw zp(Z.NOT_INSTALLED);
  let n = wm(t),
    r = Em(n),
    i = Yp(t),
    a = Tm(e, i);
  if (a === `global`) return (Xp(r, e, i), r);
  if (a === `parent`) {
    let i = Dm(n, t, e.__useComponent);
    return ((i ??= r), i);
  }
  let o = n,
    s = o.__getInstance(t);
  if (s == null) {
    let n = H({}, e);
    (`__i18n` in i && (n.__i18n = i.__i18n),
      r && (n.__root = r),
      (s = rm(n)),
      o.__composerExtend && (s[Gp] = o.__composerExtend(s)),
      km(o, t, s),
      o.__setInstance(t, s));
  }
  return s;
}
function Cm(e, t) {
  let n = Ae(),
    r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => am(e)) : n.run(() => rm(e));
  if (r == null) throw zp(Z.UNEXPECTED_ERROR);
  return [n, r];
}
function wm(e) {
  let t = za(e.isCE ? bm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) throw zp(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
  return t;
}
function Tm(e, t) {
  return Uu(e)
    ? `__i18n` in t
      ? `local`
      : `global`
    : e.useScope
      ? e.useScope
      : `local`;
}
function Em(e) {
  return e.mode === `composition` ? e.global : e.global.__composer;
}
function Dm(e, t, n = !1) {
  let r = null,
    i = t.root,
    a = Om(t, n);
  for (; a != null; ) {
    let t = e;
    if (e.mode === `composition`) r = t.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      let e = t.__getInstance(a);
      e != null && ((r = e.__composer), n && r && !r[Wp] && (r = null));
    }
    if (r != null || i === a) break;
    a = a.parent;
  }
  return r;
}
function Om(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function km(e, t, n) {
  (ji(() => {}, t),
    Fi(() => {
      let r = n;
      e.__deleteInstance(t);
      let i = r[Gp];
      i && (i(), delete r[Gp]);
    }, t));
}
var Am = [`locale`, `fallbackLocale`, `availableLocales`],
  jm = [`t`, `rt`, `d`, `n`, `tm`, `te`];
function Mm(e, t) {
  let n = Object.create(null);
  return (
    Am.forEach((e) => {
      let r = Object.getOwnPropertyDescriptor(t, e);
      if (!r) throw zp(Z.UNEXPECTED_ERROR);
      let i = F(r.value)
        ? {
            get() {
              return r.value.value;
            },
            set(e) {
              r.value.value = e;
            },
          }
        : {
            get() {
              return r.get && r.get();
            },
          };
      Object.defineProperty(n, e, i);
    }),
    (e.config.globalProperties.$i18n = n),
    jm.forEach((n) => {
      let r = Object.getOwnPropertyDescriptor(t, n);
      if (!r || !r.value) throw zp(Z.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${n}`, r);
    }),
    () => {
      (delete e.config.globalProperties.$i18n,
        jm.forEach((t) => {
          delete e.config.globalProperties[`$${t}`];
        }));
    }
  );
}
var Nm = Gr({
  name: `i18n-d`,
  props: H(
    {
      value: { type: [Number, Date], required: !0 },
      format: { type: [String, Object] },
    },
    cm,
  ),
  setup(e, t) {
    let n = e.i18n || Sm({ useScope: e.scope, __useComponent: !0 });
    return pm(e, t, dp, (...e) => n[Vp](...e));
  },
});
if ((Rp(), Kf(mf), Jf(zf), Xf(Ef), __INTLIFY_PROD_DEVTOOLS__)) {
  let e = Ku();
  ((e.__INTLIFY__ = !0), gf(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__));
}
var Pm = typeof document < `u`;
function Fm(e) {
  return (
    typeof e == `object` ||
    `displayName` in e ||
    `props` in e ||
    `__vccOpts` in e
  );
}
function Im(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === `Module` ||
    (e.default && Fm(e.default))
  );
}
var Q = Object.assign;
function Lm(e, t) {
  let n = {};
  for (let r in t) {
    let i = t[r];
    n[r] = zm(i) ? i.map(e) : e(i);
  }
  return n;
}
var Rm = () => {},
  zm = Array.isArray;
function Bm(e, t) {
  let n = {};
  for (let r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
var Vm = /#/g,
  Hm = /&/g,
  Um = /\//g,
  Wm = /=/g,
  Gm = /\?/g,
  Km = /\+/g,
  qm = /%5B/g,
  Jm = /%5D/g,
  Ym = /%5E/g,
  Xm = /%60/g,
  Zm = /%7B/g,
  Qm = /%7C/g,
  $m = /%7D/g,
  eh = /%20/g;
function th(e) {
  return e == null
    ? ``
    : encodeURI(`` + e)
        .replace(Qm, `|`)
        .replace(qm, `[`)
        .replace(Jm, `]`);
}
function nh(e) {
  return th(e).replace(Zm, `{`).replace($m, `}`).replace(Ym, `^`);
}
function rh(e) {
  return th(e)
    .replace(Km, `%2B`)
    .replace(eh, `+`)
    .replace(Vm, `%23`)
    .replace(Hm, `%26`)
    .replace(Xm, "`")
    .replace(Zm, `{`)
    .replace($m, `}`)
    .replace(Ym, `^`);
}
function ih(e) {
  return rh(e).replace(Wm, `%3D`);
}
function ah(e) {
  return th(e).replace(Vm, `%23`).replace(Gm, `%3F`);
}
function oh(e) {
  return ah(e).replace(Um, `%2F`);
}
function sh(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent(`` + e);
  } catch {}
  return `` + e;
}
var ch = /\/$/,
  lh = (e) => e.replace(ch, ``);
function uh(e, t, n = `/`) {
  let r,
    i = {},
    a = ``,
    o = ``,
    s = t.indexOf(`#`),
    c = t.indexOf(`?`);
  return (
    (c = s >= 0 && c > s ? -1 : c),
    c >= 0 &&
      ((r = t.slice(0, c)),
      (a = t.slice(c, s > 0 ? s : t.length)),
      (i = e(a.slice(1)))),
    s >= 0 && ((r ||= t.slice(0, s)), (o = t.slice(s, t.length))),
    (r = vh(r ?? t, n)),
    { fullPath: r + a + o, path: r, query: i, hash: sh(o) }
  );
}
function dh(e, t) {
  let n = t.query ? e(t.query) : ``;
  return t.path + (n && `?`) + n + (t.hash || ``);
}
function fh(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || `/`;
}
function ph(e, t, n) {
  let r = t.matched.length - 1,
    i = n.matched.length - 1;
  return (
    r > -1 &&
    r === i &&
    mh(t.matched[r], n.matched[i]) &&
    hh(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function mh(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function hh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (!gh(e[n], t[n])) return !1;
  return !0;
}
function gh(e, t) {
  return zm(e) ? _h(e, t) : zm(t) ? _h(t, e) : e === t;
}
function _h(e, t) {
  return zm(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : e.length === 1 && e[0] === t;
}
function vh(e, t) {
  if (e.startsWith(`/`)) return e;
  if (!e) return t;
  let n = t.split(`/`),
    r = e.split(`/`),
    i = r[r.length - 1];
  (i === `..` || i === `.`) && r.push(``);
  let a = n.length - 1,
    o,
    s;
  for (o = 0; o < r.length; o++)
    if (((s = r[o]), s !== `.`))
      if (s === `..`) a > 1 && a--;
      else break;
  return n.slice(0, a).join(`/`) + `/` + r.slice(o).join(`/`);
}
var yh = {
    path: `/`,
    name: void 0,
    params: {},
    query: {},
    hash: ``,
    fullPath: `/`,
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  bh = (function (e) {
    return ((e.pop = `pop`), (e.push = `push`), e);
  })({}),
  xh = (function (e) {
    return ((e.back = `back`), (e.forward = `forward`), (e.unknown = ``), e);
  })({});
function Sh(e) {
  if (!e)
    if (Pm) {
      let t = document.querySelector(`base`);
      ((e = (t && t.getAttribute(`href`)) || `/`),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ``)));
    } else e = `/`;
  return (e[0] !== `/` && e[0] !== `#` && (e = `/` + e), lh(e));
}
var Ch = /^[^#]+#/;
function wh(e, t) {
  return e.replace(Ch, `#`) + t;
}
function Th(e, t) {
  let n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
var Eh = () => ({ left: window.scrollX, top: window.scrollY });
function Dh(e) {
  let t;
  if (`el` in e) {
    let n = e.el,
      r = typeof n == `string` && n.startsWith(`#`),
      i =
        typeof n == `string`
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    t = Th(i, e);
  } else t = e;
  `scrollBehavior` in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left == null ? window.scrollX : t.left,
        t.top == null ? window.scrollY : t.top,
      );
}
function Oh(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
var kh = new Map();
function Ah(e, t) {
  kh.set(e, t);
}
function jh(e) {
  let t = kh.get(e);
  return (kh.delete(e), t);
}
function Mh(e) {
  return typeof e == `string` || (e && typeof e == `object`);
}
function Nh(e) {
  return typeof e == `string` || typeof e == `symbol`;
}
var $ = (function (e) {
    return (
      (e[(e.MATCHER_NOT_FOUND = 1)] = `MATCHER_NOT_FOUND`),
      (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = `NAVIGATION_GUARD_REDIRECT`),
      (e[(e.NAVIGATION_ABORTED = 4)] = `NAVIGATION_ABORTED`),
      (e[(e.NAVIGATION_CANCELLED = 8)] = `NAVIGATION_CANCELLED`),
      (e[(e.NAVIGATION_DUPLICATED = 16)] = `NAVIGATION_DUPLICATED`),
      e
    );
  })({}),
  Ph = Symbol(``);
($.MATCHER_NOT_FOUND,
  $.NAVIGATION_GUARD_REDIRECT,
  $.NAVIGATION_ABORTED,
  $.NAVIGATION_CANCELLED,
  $.NAVIGATION_DUPLICATED);
function Fh(e, t) {
  return Q(Error(), { type: e, [Ph]: !0 }, t);
}
function Ih(e, t) {
  return e instanceof Error && Ph in e && (t == null || !!(e.type & t));
}
function Lh(e) {
  let t = {};
  if (e === `` || e === `?`) return t;
  let n = (e[0] === `?` ? e.slice(1) : e).split(`&`);
  for (let e = 0; e < n.length; ++e) {
    let r = n[e].replace(Km, ` `),
      i = r.indexOf(`=`),
      a = sh(i < 0 ? r : r.slice(0, i)),
      o = i < 0 ? null : sh(r.slice(i + 1));
    if (a in t) {
      let e = t[a];
      (zm(e) || (e = t[a] = [e]), e.push(o));
    } else t[a] = o;
  }
  return t;
}
function Rh(e) {
  let t = ``;
  for (let n in e) {
    let r = e[n];
    if (((n = ih(n)), r == null)) {
      r !== void 0 && (t += (t.length ? `&` : ``) + n);
      continue;
    }
    (zm(r) ? r.map((e) => e && rh(e)) : [r && rh(r)]).forEach((e) => {
      e !== void 0 &&
        ((t += (t.length ? `&` : ``) + n), e != null && (t += `=` + e));
    });
  }
  return t;
}
function zh(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    r !== void 0 &&
      (t[n] = zm(r)
        ? r.map((e) => (e == null ? null : `` + e))
        : r == null
          ? r
          : `` + r);
  }
  return t;
}
var Bh = Symbol(``),
  Vh = Symbol(``),
  Hh = Symbol(``),
  Uh = Symbol(``),
  Wh = Symbol(``);
function Gh() {
  let e = [];
  function t(t) {
    return (
      e.push(t),
      () => {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Kh(e, t, n, r, i, a = (e) => e()) {
  let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () =>
    new Promise((s, c) => {
      let l = (e) => {
          e === !1
            ? c(Fh($.NAVIGATION_ABORTED, { from: n, to: t }))
            : e instanceof Error
              ? c(e)
              : Mh(e)
                ? c(Fh($.NAVIGATION_GUARD_REDIRECT, { from: t, to: e }))
                : (o &&
                    r.enterCallbacks[i] === o &&
                    typeof e == `function` &&
                    o.push(e),
                  s());
        },
        u = a(() => e.call(r && r.instances[i], t, n, l)),
        d = Promise.resolve(u);
      (e.length < 3 && (d = d.then(l)), d.catch((e) => c(e)));
    });
}
function qh(e, t, n, r, i = (e) => e()) {
  let a = [];
  for (let o of e)
    for (let e in o.components) {
      let s = o.components[e];
      if (!(t !== `beforeRouteEnter` && !o.instances[e]))
        if (Fm(s)) {
          let c = (s.__vccOpts || s)[t];
          c && a.push(Kh(c, n, r, o, e, i));
        } else {
          let c = s();
          a.push(() =>
            c.then((a) => {
              if (!a)
                throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
              let s = Im(a) ? a.default : a;
              ((o.mods[e] = a), (o.components[e] = s));
              let c = (s.__vccOpts || s)[t];
              return c && Kh(c, n, r, o, e, i)();
            }),
          );
        }
    }
  return a;
}
function Jh(e) {
  return e.matched.every((e) => e.redirect)
    ? Promise.reject(Error(`Cannot load a route that redirects.`))
    : Promise.all(
        e.matched.map(
          (e) =>
            e.components &&
            Promise.all(
              Object.keys(e.components).reduce((t, n) => {
                let r = e.components[n];
                return (
                  typeof r == `function` &&
                    !(`displayName` in r) &&
                    t.push(
                      r().then((t) => {
                        if (!t)
                          return Promise.reject(
                            Error(
                              `Couldn't resolve component "${n}" at "${e.path}". Ensure you passed a function that returns a promise.`,
                            ),
                          );
                        let r = Im(t) ? t.default : t;
                        ((e.mods[n] = t), (e.components[n] = r));
                      }),
                    ),
                  t
                );
              }, []),
            ),
        ),
      ).then(() => e);
}
function Yh(e, t) {
  let n = [],
    r = [],
    i = [],
    a = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < a; o++) {
    let a = t.matched[o];
    a && (e.matched.find((e) => mh(e, a)) ? r.push(a) : n.push(a));
    let s = e.matched[o];
    s && (t.matched.find((e) => mh(e, s)) || i.push(s));
  }
  return [n, r, i];
}
var Xh = () => location.protocol + `//` + location.host;
function Zh(e, t) {
  let { pathname: n, search: r, hash: i } = t,
    a = e.indexOf(`#`);
  if (a > -1) {
    let t = i.includes(e.slice(a)) ? e.slice(a).length : 1,
      n = i.slice(t);
    return (n[0] !== `/` && (n = `/` + n), fh(n, ``));
  }
  return fh(n, e) + r + i;
}
function Qh(e, t, n, r) {
  let i = [],
    a = [],
    o = null,
    s = ({ state: a }) => {
      let s = Zh(e, location),
        c = n.value,
        l = t.value,
        u = 0;
      if (a) {
        if (((n.value = s), (t.value = a), o && o === c)) {
          o = null;
          return;
        }
        u = l ? a.position - l.position : 0;
      } else r(s);
      i.forEach((e) => {
        e(n.value, c, {
          delta: u,
          type: bh.pop,
          direction: u ? (u > 0 ? xh.forward : xh.back) : xh.unknown,
        });
      });
    };
  function c() {
    o = n.value;
  }
  function l(e) {
    i.push(e);
    let t = () => {
      let t = i.indexOf(e);
      t > -1 && i.splice(t, 1);
    };
    return (a.push(t), t);
  }
  function u() {
    if (document.visibilityState === `hidden`) {
      let { history: e } = window;
      if (!e.state) return;
      e.replaceState(Q({}, e.state, { scroll: Eh() }), ``);
    }
  }
  function d() {
    for (let e of a) e();
    ((a = []),
      window.removeEventListener(`popstate`, s),
      window.removeEventListener(`pagehide`, u),
      document.removeEventListener(`visibilitychange`, u));
  }
  return (
    window.addEventListener(`popstate`, s),
    window.addEventListener(`pagehide`, u),
    document.addEventListener(`visibilitychange`, u),
    { pauseListeners: c, listen: l, destroy: d }
  );
}
function $h(e, t, n, r = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? Eh() : null,
  };
}
function eg(e) {
  let { history: t, location: n } = window,
    r = { value: Zh(e, n) },
    i = { value: t.state };
  i.value ||
    a(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function a(r, a, o) {
    let s = e.indexOf(`#`),
      c =
        s > -1
          ? (n.host && document.querySelector(`base`) ? e : e.slice(s)) + r
          : Xh() + e + r;
    try {
      (t[o ? `replaceState` : `pushState`](a, ``, c), (i.value = a));
    } catch (e) {
      (console.error(e), n[o ? `replace` : `assign`](c));
    }
  }
  function o(e, n) {
    (a(
      e,
      Q({}, t.state, $h(i.value.back, e, i.value.forward, !0), n, {
        position: i.value.position,
      }),
      !0,
    ),
      (r.value = e));
  }
  function s(e, n) {
    let o = Q({}, i.value, t.state, { forward: e, scroll: Eh() });
    (a(o.current, o, !0),
      a(e, Q({}, $h(r.value, e, null), { position: o.position + 1 }, n), !1),
      (r.value = e));
  }
  return { location: r, state: i, push: s, replace: o };
}
function tg(e) {
  e = Sh(e);
  let t = eg(e),
    n = Qh(e, t.state, t.location, t.replace);
  function r(e, t = !0) {
    (t || n.pauseListeners(), history.go(e));
  }
  let i = Q(
    { location: ``, base: e, go: r, createHref: wh.bind(null, e) },
    t,
    n,
  );
  return (
    Object.defineProperty(i, `location`, {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, `state`, {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  );
}
function ng(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ``),
    e.includes(`#`) || (e += `#`),
    tg(e)
  );
}
var rg = (function (e) {
    return (
      (e[(e.Static = 0)] = `Static`),
      (e[(e.Param = 1)] = `Param`),
      (e[(e.Group = 2)] = `Group`),
      e
    );
  })({}),
  ig = (function (e) {
    return (
      (e[(e.Static = 0)] = `Static`),
      (e[(e.Param = 1)] = `Param`),
      (e[(e.ParamRegExp = 2)] = `ParamRegExp`),
      (e[(e.ParamRegExpEnd = 3)] = `ParamRegExpEnd`),
      (e[(e.EscapeNext = 4)] = `EscapeNext`),
      e
    );
  })(ig || {}),
  ag = { type: rg.Static, value: `` },
  og = /[a-zA-Z0-9_]/;
function sg(e) {
  if (!e) return [[]];
  if (e === `/`) return [[ag]];
  if (!e.startsWith(`/`)) throw Error(`Invalid path "${e}"`);
  function t(e) {
    throw Error(`ERR (${n})/"${l}": ${e}`);
  }
  let n = ig.Static,
    r = n,
    i = [],
    a;
  function o() {
    (a && i.push(a), (a = []));
  }
  let s = 0,
    c,
    l = ``,
    u = ``;
  function d() {
    l &&=
      (n === ig.Static
        ? a.push({ type: rg.Static, value: l })
        : n === ig.Param || n === ig.ParamRegExp || n === ig.ParamRegExpEnd
          ? (a.length > 1 &&
              (c === `*` || c === `+`) &&
              t(
                `A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`,
              ),
            a.push({
              type: rg.Param,
              value: l,
              regexp: u,
              repeatable: c === `*` || c === `+`,
              optional: c === `*` || c === `?`,
            }))
          : t(`Invalid state to consume buffer`),
      ``);
  }
  function f() {
    l += c;
  }
  for (; s < e.length; ) {
    if (((c = e[s++]), c === `\\` && n !== ig.ParamRegExp)) {
      ((r = n), (n = ig.EscapeNext));
      continue;
    }
    switch (n) {
      case ig.Static:
        c === `/` ? (l && d(), o()) : c === `:` ? (d(), (n = ig.Param)) : f();
        break;
      case ig.EscapeNext:
        (f(), (n = r));
        break;
      case ig.Param:
        c === `(`
          ? (n = ig.ParamRegExp)
          : og.test(c)
            ? f()
            : (d(),
              (n = ig.Static),
              c !== `*` && c !== `?` && c !== `+` && s--);
        break;
      case ig.ParamRegExp:
        c === `)`
          ? u[u.length - 1] == `\\`
            ? (u = u.slice(0, -1) + c)
            : (n = ig.ParamRegExpEnd)
          : (u += c);
        break;
      case ig.ParamRegExpEnd:
        (d(),
          (n = ig.Static),
          c !== `*` && c !== `?` && c !== `+` && s--,
          (u = ``));
        break;
      default:
        t(`Unknown state`);
        break;
    }
  }
  return (
    n === ig.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`),
    d(),
    o(),
    i
  );
}
var cg = `[^/]+?`,
  lg = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ug = (function (e) {
    return (
      (e[(e._multiplier = 10)] = `_multiplier`),
      (e[(e.Root = 90)] = `Root`),
      (e[(e.Segment = 40)] = `Segment`),
      (e[(e.SubSegment = 30)] = `SubSegment`),
      (e[(e.Static = 40)] = `Static`),
      (e[(e.Dynamic = 20)] = `Dynamic`),
      (e[(e.BonusCustomRegExp = 10)] = `BonusCustomRegExp`),
      (e[(e.BonusWildcard = -50)] = `BonusWildcard`),
      (e[(e.BonusRepeatable = -20)] = `BonusRepeatable`),
      (e[(e.BonusOptional = -8)] = `BonusOptional`),
      (e[(e.BonusStrict = 0.7000000000000001)] = `BonusStrict`),
      (e[(e.BonusCaseSensitive = 0.25)] = `BonusCaseSensitive`),
      e
    );
  })(ug || {}),
  dg = /[.+*?^${}()[\]/\\]/g;
function fg(e, t) {
  let n = Q({}, lg, t),
    r = [],
    i = n.start ? `^` : ``,
    a = [];
  for (let t of e) {
    let e = t.length ? [] : [ug.Root];
    n.strict && !t.length && (i += `/`);
    for (let r = 0; r < t.length; r++) {
      let o = t[r],
        s = ug.Segment + (n.sensitive ? ug.BonusCaseSensitive : 0);
      if (o.type === rg.Static)
        (r || (i += `/`), (i += o.value.replace(dg, `\\$&`)), (s += ug.Static));
      else if (o.type === rg.Param) {
        let { value: e, repeatable: n, optional: c, regexp: l } = o;
        a.push({ name: e, repeatable: n, optional: c });
        let u = l || cg;
        if (u !== cg) {
          s += ug.BonusCustomRegExp;
          try {
            `${u}`;
          } catch (t) {
            throw Error(
              `Invalid custom RegExp for param "${e}" (${u}): ` + t.message,
            );
          }
        }
        let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
        (r || (d = c && t.length < 2 ? `(?:/${d})` : `/` + d),
          c && (d += `?`),
          (i += d),
          (s += ug.Dynamic),
          c && (s += ug.BonusOptional),
          n && (s += ug.BonusRepeatable),
          u === `.*` && (s += ug.BonusWildcard));
      }
      e.push(s);
    }
    r.push(e);
  }
  if (n.strict && n.end) {
    let e = r.length - 1;
    r[e][r[e].length - 1] += ug.BonusStrict;
  }
  (n.strict || (i += `/?`),
    n.end ? (i += `$`) : n.strict && !i.endsWith(`/`) && (i += `(?:/|$)`));
  let o = new RegExp(i, n.sensitive ? `` : `i`);
  function s(e) {
    let t = e.match(o),
      n = {};
    if (!t) return null;
    for (let e = 1; e < t.length; e++) {
      let r = t[e] || ``,
        i = a[e - 1];
      n[i.name] = r && i.repeatable ? r.split(`/`) : r;
    }
    return n;
  }
  function c(t) {
    let n = ``,
      r = !1;
    for (let i of e) {
      ((!r || !n.endsWith(`/`)) && (n += `/`), (r = !1));
      for (let e of i)
        if (e.type === rg.Static) n += e.value;
        else if (e.type === rg.Param) {
          let { value: a, repeatable: o, optional: s } = e,
            c = a in t ? t[a] : ``;
          if (zm(c) && !o)
            throw Error(
              `Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`,
            );
          let l = zm(c) ? c.join(`/`) : c;
          if (!l)
            if (s)
              i.length < 2 &&
                (n.endsWith(`/`) ? (n = n.slice(0, -1)) : (r = !0));
            else throw Error(`Missing required param "${a}"`);
          n += l;
        }
    }
    return n || `/`;
  }
  return { re: o, score: r, keys: a, parse: s, stringify: c };
}
function pg(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    let r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === ug.Static + ug.Segment
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === ug.Static + ug.Segment
        ? 1
        : -1
      : 0;
}
function mg(e, t) {
  let n = 0,
    r = e.score,
    i = t.score;
  for (; n < r.length && n < i.length; ) {
    let e = pg(r[n], i[n]);
    if (e) return e;
    n++;
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (hg(r)) return 1;
    if (hg(i)) return -1;
  }
  return i.length - r.length;
}
function hg(e) {
  let t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
var gg = { strict: !1, end: !0, sensitive: !1 };
function _g(e, t, n) {
  let r = Q(fg(sg(e.path), n), {
    record: e,
    parent: t,
    children: [],
    alias: [],
  });
  return (t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r);
}
function vg(e, t) {
  let n = [],
    r = new Map();
  t = Bm(gg, t);
  function i(e) {
    return r.get(e);
  }
  function a(e, n, r) {
    let i = !r,
      s = bg(e);
    s.aliasOf = r && r.record;
    let l = Bm(t, e),
      u = [s];
    if (`alias` in e) {
      let t = typeof e.alias == `string` ? [e.alias] : e.alias;
      for (let e of t)
        u.push(
          bg(
            Q({}, s, {
              components: r ? r.record.components : s.components,
              path: e,
              aliasOf: r ? r.record : s,
            }),
          ),
        );
    }
    let d, f;
    for (let t of u) {
      let { path: u } = t;
      if (n && u[0] !== `/`) {
        let e = n.record.path,
          r = e[e.length - 1] === `/` ? `` : `/`;
        t.path = n.record.path + (u && r + u);
      }
      if (
        ((d = _g(t, n, l)),
        r
          ? r.alias.push(d)
          : ((f ||= d),
            f !== d && f.alias.push(d),
            i && e.name && !Sg(d) && o(e.name)),
        Eg(d) && c(d),
        s.children)
      ) {
        let e = s.children;
        for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
      }
      r ||= d;
    }
    return f
      ? () => {
          o(f);
        }
      : Rm;
  }
  function o(e) {
    if (Nh(e)) {
      let t = r.get(e);
      t &&
        (r.delete(e),
        n.splice(n.indexOf(t), 1),
        t.children.forEach(o),
        t.alias.forEach(o));
    } else {
      let t = n.indexOf(e);
      t > -1 &&
        (n.splice(t, 1),
        e.record.name && r.delete(e.record.name),
        e.children.forEach(o),
        e.alias.forEach(o));
    }
  }
  function s() {
    return n;
  }
  function c(e) {
    let t = wg(e, n);
    (n.splice(t, 0, e), e.record.name && !Sg(e) && r.set(e.record.name, e));
  }
  function l(e, t) {
    let i,
      a = {},
      o,
      s;
    if (`name` in e && e.name) {
      if (((i = r.get(e.name)), !i))
        throw Fh($.MATCHER_NOT_FOUND, { location: e });
      ((s = i.record.name),
        (a = Q(
          yg(
            t.params,
            i.keys
              .filter((e) => !e.optional)
              .concat(i.parent ? i.parent.keys.filter((e) => e.optional) : [])
              .map((e) => e.name),
          ),
          e.params &&
            yg(
              e.params,
              i.keys.map((e) => e.name),
            ),
        )),
        (o = i.stringify(a)));
    } else if (e.path != null)
      ((o = e.path),
        (i = n.find((e) => e.re.test(o))),
        i && ((a = i.parse(o)), (s = i.record.name)));
    else {
      if (((i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path))), !i))
        throw Fh($.MATCHER_NOT_FOUND, { location: e, currentLocation: t });
      ((s = i.record.name),
        (a = Q({}, t.params, e.params)),
        (o = i.stringify(a)));
    }
    let c = [],
      l = i;
    for (; l; ) (c.unshift(l.record), (l = l.parent));
    return { name: s, path: o, params: a, matched: c, meta: Cg(c) };
  }
  e.forEach((e) => a(e));
  function u() {
    ((n.length = 0), r.clear());
  }
  return {
    addRoute: a,
    resolve: l,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: s,
    getRecordMatcher: i,
  };
}
function yg(e, t) {
  let n = {};
  for (let r of t) r in e && (n[r] = e[r]);
  return n;
}
function bg(e) {
  let t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: xg(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      `components` in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return (Object.defineProperty(t, `mods`, { value: {} }), t);
}
function xg(e) {
  let t = {},
    n = e.props || !1;
  if (`component` in e) t.default = n;
  else for (let r in e.components) t[r] = typeof n == `object` ? n[r] : n;
  return t;
}
function Sg(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Cg(e) {
  return e.reduce((e, t) => Q(e, t.meta), {});
}
function wg(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    let i = (n + r) >> 1;
    mg(e, t[i]) < 0 ? (r = i) : (n = i + 1);
  }
  let i = Tg(e);
  return (i && (r = t.lastIndexOf(i, r - 1)), r);
}
function Tg(e) {
  let t = e;
  for (; (t = t.parent); ) if (Eg(t) && mg(e, t) === 0) return t;
}
function Eg({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function Dg(e) {
  let t = za(Hh),
    n = za(Uh),
    r = B(() => {
      let n = dn(e.to);
      return t.resolve(n);
    }),
    i = B(() => {
      let { matched: e } = r.value,
        { length: t } = e,
        i = e[t - 1],
        a = n.matched;
      if (!i || !a.length) return -1;
      let o = a.findIndex(mh.bind(null, i));
      if (o > -1) return o;
      let s = Mg(e[t - 2]);
      return t > 1 && Mg(i) === s && a[a.length - 1].path !== s
        ? a.findIndex(mh.bind(null, e[t - 2]))
        : o;
    }),
    a = B(() => i.value > -1 && jg(n.params, r.value.params)),
    o = B(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        hh(n.params, r.value.params),
    );
  function s(n = {}) {
    if (Ag(n)) {
      let n = t[dn(e.replace) ? `replace` : `push`](dn(e.to)).catch(Rm);
      return (
        e.viewTransition &&
          typeof document < `u` &&
          `startViewTransition` in document &&
          document.startViewTransition(() => n),
        n
      );
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: B(() => r.value.href),
    isActive: a,
    isExactActive: o,
    navigate: s,
  };
}
function Og(e) {
  return e.length === 1 ? e[0] : e;
}
var kg = Gr({
  name: `RouterLink`,
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: `page` },
    viewTransition: Boolean,
  },
  useLink: Dg,
  setup(e, { slots: t }) {
    let n = qt(Dg(e)),
      { options: r } = za(Hh),
      i = B(() => ({
        [Ng(e.activeClass, r.linkActiveClass, `router-link-active`)]:
          n.isActive,
        [Ng(
          e.exactActiveClass,
          r.linkExactActiveClass,
          `router-link-exact-active`,
        )]: n.isExactActive,
      }));
    return () => {
      let r = t.default && Og(t.default(n));
      return e.custom
        ? r
        : Ys(
            `a`,
            {
              "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
              href: n.href,
              onClick: n.navigate,
              class: i.value,
            },
            r,
          );
    };
  },
});
function Ag(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      let t = e.currentTarget.getAttribute(`target`);
      if (/\b_blank\b/i.test(t)) return;
    }
    return (e.preventDefault && e.preventDefault(), !0);
  }
}
function jg(e, t) {
  for (let n in t) {
    let r = t[n],
      i = e[n];
    if (typeof r == `string`) {
      if (r !== i) return !1;
    } else if (!zm(i) || i.length !== r.length || r.some((e, t) => e !== i[t]))
      return !1;
  }
  return !0;
}
function Mg(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ``;
}
var Ng = (e, t, n) => e ?? t ?? n,
  Pg = Gr({
    name: `RouterView`,
    inheritAttrs: !1,
    props: { name: { type: String, default: `default` }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      let r = za(Wh),
        i = B(() => e.route || r.value),
        a = za(Vh, 0),
        o = B(() => {
          let e = dn(a),
            { matched: t } = i.value,
            n;
          for (; (n = t[e]) && !n.components; ) e++;
          return e;
        }),
        s = B(() => i.value.matched[o.value]);
      (Ra(
        Vh,
        B(() => o.value + 1),
      ),
        Ra(Bh, s),
        Ra(Wh, i));
      let c = on();
      return (
        Ka(
          () => [c.value, s.value, e.name],
          ([e, t, n], [r, i, a]) => {
            (t &&
              ((t.instances[n] = e),
              i &&
                i !== t &&
                e &&
                e === r &&
                (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards),
                t.updateGuards.size || (t.updateGuards = i.updateGuards))),
              e &&
                t &&
                (!i || !mh(t, i) || !r) &&
                (t.enterCallbacks[n] || []).forEach((t) => t(e)));
          },
          { flush: `post` },
        ),
        () => {
          let r = i.value,
            a = e.name,
            o = s.value,
            l = o && o.components[a];
          if (!l) return Fg(n.default, { Component: l, route: r });
          let u = o.props[a],
            d = Ys(
              l,
              Q(
                {},
                u
                  ? u === !0
                    ? r.params
                    : typeof u == `function`
                      ? u(r)
                      : u
                  : null,
                t,
                {
                  onVnodeUnmounted: (e) => {
                    e.component.isUnmounted && (o.instances[a] = null);
                  },
                  ref: c,
                },
              ),
            );
          return Fg(n.default, { Component: d, route: r }) || d;
        }
      );
    },
  });
function Fg(e, t) {
  if (!e) return null;
  let n = e(t);
  return n.length === 1 ? n[0] : n;
}
var Ig = Pg;
function Lg(e) {
  let t = vg(e.routes, e),
    n = e.parseQuery || Lh,
    r = e.stringifyQuery || Rh,
    i = e.history,
    a = Gh(),
    o = Gh(),
    s = Gh(),
    c = sn(yh),
    l = yh;
  Pm &&
    e.scrollBehavior &&
    `scrollRestoration` in history &&
    (history.scrollRestoration = `manual`);
  let u = Lm.bind(null, (e) => `` + e),
    d = Lm.bind(null, oh),
    f = Lm.bind(null, sh);
  function p(e, n) {
    let r, i;
    return (
      Nh(e) ? ((r = t.getRecordMatcher(e)), (i = n)) : (i = e),
      t.addRoute(i, r)
    );
  }
  function m(e) {
    let n = t.getRecordMatcher(e);
    n && t.removeRoute(n);
  }
  function h() {
    return t.getRoutes().map((e) => e.record);
  }
  function g(e) {
    return !!t.getRecordMatcher(e);
  }
  function _(e, a) {
    if (((a = Q({}, a || c.value)), typeof e == `string`)) {
      let r = uh(n, e, a.path),
        o = t.resolve({ path: r.path }, a),
        s = i.createHref(r.fullPath);
      return Q(r, o, {
        params: f(o.params),
        hash: sh(r.hash),
        redirectedFrom: void 0,
        href: s,
      });
    }
    let o;
    if (e.path != null) o = Q({}, e, { path: uh(n, e.path, a.path).path });
    else {
      let t = Q({}, e.params);
      for (let e in t) t[e] ?? delete t[e];
      ((o = Q({}, e, { params: d(t) })), (a.params = d(a.params)));
    }
    let s = t.resolve(o, a),
      l = e.hash || ``;
    s.params = u(f(s.params));
    let p = dh(r, Q({}, e, { hash: nh(l), path: s.path })),
      m = i.createHref(p);
    return Q(
      { fullPath: p, hash: l, query: r === Rh ? zh(e.query) : e.query || {} },
      s,
      { redirectedFrom: void 0, href: m },
    );
  }
  function v(e) {
    return typeof e == `string` ? uh(n, e, c.value.path) : Q({}, e);
  }
  function y(e, t) {
    if (l !== e) return Fh($.NAVIGATION_CANCELLED, { from: t, to: e });
  }
  function b(e) {
    return C(e);
  }
  function x(e) {
    return b(Q(v(e), { replace: !0 }));
  }
  function S(e, t) {
    let n = e.matched[e.matched.length - 1];
    if (n && n.redirect) {
      let { redirect: r } = n,
        i = typeof r == `function` ? r(e, t) : r;
      return (
        typeof i == `string` &&
          ((i = i.includes(`?`) || i.includes(`#`) ? (i = v(i)) : { path: i }),
          (i.params = {})),
        Q(
          {
            query: e.query,
            hash: e.hash,
            params: i.path == null ? e.params : {},
          },
          i,
        )
      );
    }
  }
  function C(e, t) {
    let n = (l = _(e)),
      i = c.value,
      a = e.state,
      o = e.force,
      s = e.replace === !0,
      u = S(n, i);
    if (u)
      return C(
        Q(v(u), {
          state: typeof u == `object` ? Q({}, a, u.state) : a,
          force: o,
          replace: s,
        }),
        t || n,
      );
    let d = n;
    d.redirectedFrom = t;
    let f;
    return (
      !o &&
        ph(r, i, n) &&
        ((f = Fh($.NAVIGATION_DUPLICATED, { to: d, from: i })),
        ae(i, i, !0, !1)),
      (f ? Promise.resolve(f) : E(d, i))
        .catch((e) =>
          Ih(e)
            ? Ih(e, $.NAVIGATION_GUARD_REDIRECT)
              ? e
              : ie(e)
            : re(e, d, i),
        )
        .then((e) => {
          if (e) {
            if (Ih(e, $.NAVIGATION_GUARD_REDIRECT))
              return C(
                Q({ replace: s }, v(e.to), {
                  state: typeof e.to == `object` ? Q({}, a, e.to.state) : a,
                  force: o,
                }),
                t || d,
              );
          } else e = O(d, i, !0, s, a);
          return (D(d, i, e), e);
        })
    );
  }
  function w(e, t) {
    let n = y(e, t);
    return n ? Promise.reject(n) : Promise.resolve();
  }
  function T(e) {
    let t = ce.values().next().value;
    return t && typeof t.runWithContext == `function`
      ? t.runWithContext(e)
      : e();
  }
  function E(e, t) {
    let n,
      [r, i, s] = Yh(e, t);
    n = qh(r.reverse(), `beforeRouteLeave`, e, t);
    for (let i of r)
      i.leaveGuards.forEach((r) => {
        n.push(Kh(r, e, t));
      });
    let c = w.bind(null, e, t);
    return (
      n.push(c),
      ue(n)
        .then(() => {
          n = [];
          for (let r of a.list()) n.push(Kh(r, e, t));
          return (n.push(c), ue(n));
        })
        .then(() => {
          n = qh(i, `beforeRouteUpdate`, e, t);
          for (let r of i)
            r.updateGuards.forEach((r) => {
              n.push(Kh(r, e, t));
            });
          return (n.push(c), ue(n));
        })
        .then(() => {
          n = [];
          for (let r of s)
            if (r.beforeEnter)
              if (zm(r.beforeEnter))
                for (let i of r.beforeEnter) n.push(Kh(i, e, t));
              else n.push(Kh(r.beforeEnter, e, t));
          return (n.push(c), ue(n));
        })
        .then(
          () => (
            e.matched.forEach((e) => (e.enterCallbacks = {})),
            (n = qh(s, `beforeRouteEnter`, e, t, T)),
            n.push(c),
            ue(n)
          ),
        )
        .then(() => {
          n = [];
          for (let r of o.list()) n.push(Kh(r, e, t));
          return (n.push(c), ue(n));
        })
        .catch((e) => (Ih(e, $.NAVIGATION_CANCELLED) ? e : Promise.reject(e)))
    );
  }
  function D(e, t, n) {
    s.list().forEach((r) => T(() => r(e, t, n)));
  }
  function O(e, t, n, r, a) {
    let o = y(e, t);
    if (o) return o;
    let s = t === yh,
      l = Pm ? history.state : {};
    (n &&
      (r || s
        ? i.replace(e.fullPath, Q({ scroll: s && l && l.scroll }, a))
        : i.push(e.fullPath, a)),
      (c.value = e),
      ae(e, t, n, s),
      ie());
  }
  let ee;
  function k() {
    ee ||= i.listen((e, t, n) => {
      if (!le.listening) return;
      let r = _(e),
        a = S(r, le.currentRoute.value);
      if (a) {
        C(Q(a, { replace: !0, force: !0 }), r).catch(Rm);
        return;
      }
      l = r;
      let o = c.value;
      (Pm && Ah(Oh(o.fullPath, n.delta), Eh()),
        E(r, o)
          .catch((e) =>
            Ih(e, $.NAVIGATION_ABORTED | $.NAVIGATION_CANCELLED)
              ? e
              : Ih(e, $.NAVIGATION_GUARD_REDIRECT)
                ? (C(Q(v(e.to), { force: !0 }), r)
                    .then((e) => {
                      Ih(e, $.NAVIGATION_ABORTED | $.NAVIGATION_DUPLICATED) &&
                        !n.delta &&
                        n.type === bh.pop &&
                        i.go(-1, !1);
                    })
                    .catch(Rm),
                  Promise.reject())
                : (n.delta && i.go(-n.delta, !1), re(e, r, o)),
          )
          .then((e) => {
            ((e ||= O(r, o, !1)),
              e &&
                (n.delta && !Ih(e, $.NAVIGATION_CANCELLED)
                  ? i.go(-n.delta, !1)
                  : n.type === bh.pop &&
                    Ih(e, $.NAVIGATION_ABORTED | $.NAVIGATION_DUPLICATED) &&
                    i.go(-1, !1)),
              D(r, o, e));
          })
          .catch(Rm));
    });
  }
  let te = Gh(),
    A = Gh(),
    ne;
  function re(e, t, n) {
    ie(e);
    let r = A.list();
    return (
      r.length ? r.forEach((r) => r(e, t, n)) : console.error(e),
      Promise.reject(e)
    );
  }
  function j() {
    return ne && c.value !== yh
      ? Promise.resolve()
      : new Promise((e, t) => {
          te.add([e, t]);
        });
  }
  function ie(e) {
    return (
      ne ||
        ((ne = !e),
        k(),
        te.list().forEach(([t, n]) => (e ? n(e) : t())),
        te.reset()),
      e
    );
  }
  function ae(t, n, r, i) {
    let { scrollBehavior: a } = e;
    if (!Pm || !a) return Promise.resolve();
    let o =
      (!r && jh(Oh(t.fullPath, 0))) ||
      ((i || !r) && history.state && history.state.scroll) ||
      null;
    return Xn()
      .then(() => a(t, n, o))
      .then((e) => e && Dh(e))
      .catch((e) => re(e, t, n));
  }
  let oe = (e) => i.go(e),
    se,
    ce = new Set(),
    le = {
      currentRoute: c,
      listening: !0,
      addRoute: p,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: g,
      getRoutes: h,
      resolve: _,
      options: e,
      push: b,
      replace: x,
      go: oe,
      back: () => oe(-1),
      forward: () => oe(1),
      beforeEach: a.add,
      beforeResolve: o.add,
      afterEach: s.add,
      onError: A.add,
      isReady: j,
      install(e) {
        (e.component(`RouterLink`, kg),
          e.component(`RouterView`, Ig),
          (e.config.globalProperties.$router = le),
          Object.defineProperty(e.config.globalProperties, `$route`, {
            enumerable: !0,
            get: () => dn(c),
          }),
          Pm &&
            !se &&
            c.value === yh &&
            ((se = !0), b(i.location).catch((e) => {})));
        let t = {};
        for (let e in yh)
          Object.defineProperty(t, e, {
            get: () => c.value[e],
            enumerable: !0,
          });
        (e.provide(Hh, le), e.provide(Uh, Jt(t)), e.provide(Wh, c));
        let n = e.unmount;
        (ce.add(e),
          (e.unmount = function () {
            (ce.delete(e),
              ce.size < 1 &&
                ((l = yh),
                ee && ee(),
                (ee = null),
                (c.value = yh),
                (se = !1),
                (ne = !1)),
              n());
          }));
      },
    };
  function ue(e) {
    return e.reduce((e, t) => e.then(() => T(t)), Promise.resolve());
  }
  return le;
}
function Rg(e) {
  return za(Uh);
}
export {
  hr as $,
  vs as A,
  Si as B,
  L as C,
  ss as D,
  ps as E,
  Ba as F,
  Ji as G,
  Ci as H,
  za as I,
  Xa as J,
  Xi as K,
  ga as L,
  z as M,
  Gr as N,
  ys as O,
  ks as P,
  mr as Q,
  Cs as R,
  Yl as S,
  B as T,
  ji as U,
  Pi as V,
  ts as W,
  Ka as X,
  Jr as Y,
  Ua as Z,
  vc as _,
  de as _t,
  Jh as a,
  Me as at,
  Fl as b,
  wu as c,
  on as ct,
  Du as d,
  P as dt,
  Ae as et,
  Mu as f,
  bn as ft,
  Su as g,
  ge as gt,
  xu as h,
  dn as ht,
  Rg as i,
  nn as it,
  _s as j,
  os as k,
  Au as l,
  Jt as lt,
  Fu as m,
  fn as mt,
  Lg as n,
  Qt as nt,
  xm as o,
  qt as ot,
  Pu as p,
  _n as pt,
  Wi as q,
  ng as r,
  F as rt,
  Sm as s,
  Yt as st,
  Ig as t,
  je as tt,
  ku as u,
  sn as ut,
  au as v,
  M as vt,
  Bo as w,
  Ic as x,
  Bc as y,
  Xn as z,
};
//# sourceMappingURL=vue-B7Je9h0e.js.map
