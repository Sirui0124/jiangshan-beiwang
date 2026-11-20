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
      (e._sentryDebugIds[t] = `c556d289-5a59-4039-a17c-3a6b3e87da4f`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-c556d289-5a59-4039-a17c-3a6b3e87da4f`));
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
      (e._sentryDebugIds[t] = `254112d7-4a8e-4abc-853e-92ebe43c67a5`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-254112d7-4a8e-4abc-853e-92ebe43c67a5`));
  })();
} catch {}
import "./vendor-CsyOLyP3.js";
import {
  C as e,
  D as t,
  G as n,
  M as r,
  N as i,
  O as a,
  U as o,
  W as s,
  ct as c,
  ht as l,
  k as u,
  s as d,
  vt as f,
} from "./vue-B7Je9h0e.js";
import { t as p } from "./_plugin-vue_export-helper-DVftEge0.js";
import { t as m } from "./achievements-q4KXDuPO.js";
import { t as h } from "./LoadingAnimation-CDiD_LAm.js";
import { t as g } from "./PageNavBar-CQM5miev.js";
var _ = { class: `achievements-view game ui-font` },
  v = { key: 1 },
  y = { key: 0 },
  b = { key: 1 },
  x = p(
    i({
      __name: `AchievementsView`,
      setup(i) {
        let p = m(),
          { t: x } = d(),
          S = c(!0);
        return (
          o(async () => {
            ((S.value = !0), await p.refreshAchievements(), (S.value = !1));
          }),
          (i, o) => (
            s(),
            u(`div`, _, [
              r(g, { location: `/` }),
              S.value ? (s(), t(h, { key: 0 })) : a(``, !0),
              S.value
                ? a(``, !0)
                : (s(),
                  u(`dl`, v, [
                    (s(!0),
                    u(
                      e,
                      null,
                      n(
                        l(p).achievements,
                        (t, n) => (
                          s(),
                          u(
                            e,
                            { key: n },
                            [
                              t
                                ? (s(),
                                  u(
                                    `dt`,
                                    y,
                                    f(l(x)(`achievements.${String(n)}.name`)),
                                    1,
                                  ))
                                : a(``, !0),
                              t
                                ? (s(),
                                  u(
                                    `dd`,
                                    b,
                                    f(
                                      l(x)(
                                        `achievements.${String(n)}.description`,
                                      ),
                                    ),
                                    1,
                                  ))
                                : a(``, !0),
                            ],
                            64,
                          )
                        ),
                      ),
                      128,
                    )),
                  ])),
            ])
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-1d2ace5d`]],
  );
export { x as default };
//# sourceMappingURL=AchievementsView-DDXAt_aF.js.map
