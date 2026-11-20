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
      (e._sentryDebugIds[t] = `1d17ee76-29d1-4749-85a1-83cf786f3a60`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-1d17ee76-29d1-4749-85a1-83cf786f3a60`));
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
      (e._sentryDebugIds[t] = `e746acf6-4a5f-4a5e-9e2d-722eef8d7f7f`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-e746acf6-4a5f-4a5e-9e2d-722eef8d7f7f`));
  })();
} catch {}
import {
  E as e,
  N as t,
  W as n,
  ht as r,
  k as i,
  s as a,
} from "./vue-B7Je9h0e.js";
import { t as o } from "./_plugin-vue_export-helper-DVftEge0.js";
var s = `` + new URL(`loading-Cv7e8uIL.webp`, import.meta.url).href,
  c = { class: `loading-animation` },
  l = [`src`, `aria-label`],
  u = o(
    t({
      __name: `LoadingAnimation`,
      setup(t) {
        let { t: o } = a();
        return (t, a) => (
          n(),
          i(`div`, c, [
            e(
              `img`,
              { src: r(s), "aria-label": r(o)(`ui.loading`) },
              null,
              8,
              l,
            ),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-5eb457dd`]],
  );
export { u as t };
//# sourceMappingURL=LoadingAnimation-CDiD_LAm.js.map
