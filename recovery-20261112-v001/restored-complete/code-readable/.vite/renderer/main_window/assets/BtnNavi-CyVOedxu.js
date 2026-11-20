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
      (e._sentryDebugIds[t] = `057d8037-f37f-4ea8-8cd3-3607c8efd49a`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-057d8037-f37f-4ea8-8cd3-3607c8efd49a`));
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
      (e._sentryDebugIds[t] = `f3ba44f6-c24a-4aae-92b6-e96aa21b60d0`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-f3ba44f6-c24a-4aae-92b6-e96aa21b60d0`));
  })();
} catch {}
import {
  N as e,
  T as t,
  V as n,
  W as r,
  _t as i,
  ct as a,
  k as o,
  vt as s,
} from "./vue-B7Je9h0e.js";
import { t as c } from "./_plugin-vue_export-helper-DVftEge0.js";
var l = 15,
  u = 30,
  d = c(
    e({
      __name: `BtnNavi`,
      props: { text: {} },
      emits: [`click`, `preload`, `pointerenter`],
      setup(e, { emit: c }) {
        let d = c,
          f = a(0),
          p = a(0),
          m = null,
          h = 0,
          g = t(() => (f.value / (l - 1)) * 100),
          _ = t(() => ({
            backgroundPosition: `center ${g.value}%`,
            backgroundSize: `100% 1500%`,
          }));
        function v(e) {
          if (((h ||= e), e - h >= u))
            if (((h = e), f.value < p.value)) f.value += 1;
            else if (f.value > p.value) --f.value;
            else {
              m = null;
              return;
            }
          m = requestAnimationFrame(v);
        }
        function y(e) {
          ((p.value = e), (m ??= ((h = 0), requestAnimationFrame(v))));
        }
        function b() {
          (d(`pointerenter`), y(l - 1));
        }
        function x() {
          y(0);
        }
        return (
          n(() => {
            m != null && cancelAnimationFrame(m);
          }),
          (t, n) => (
            r(),
            o(
              `button`,
              {
                class: `btn-navi`,
                style: i(_.value),
                onClickPassive: (n[0] ||= (e) => d(`click`)),
                onPointerenterPassive: b,
                onPointerleavePassive: x,
                onMousedownPassive: (n[1] ||= (e) => d(`preload`)),
                onTouchstartPassive: (n[2] ||= (e) => d(`preload`)),
              },
              s(e.text),
              37,
            )
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-717e8c2b`]],
  );
export { d as t };
//# sourceMappingURL=BtnNavi-CyVOedxu.js.map
