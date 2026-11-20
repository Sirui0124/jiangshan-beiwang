const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./router-BQNMVyvQ.js",
      "./router-BE9Fjxsm.js",
      "./vue-B7Je9h0e.js",
      "./rolldown-runtime-puNP7PS7.js",
    ]),
) => i.map((i) => d[i]);
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
      (e._sentryDebugIds[t] = `7512d023-a98b-41cd-aba7-29fdd683a14c`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-7512d023-a98b-41cd-aba7-29fdd683a14c`));
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
      (e._sentryDebugIds[t] = `92cd5903-7706-4972-9339-cd2cc3964d77`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-92cd5903-7706-4972-9339-cd2cc3964d77`));
  })();
} catch {}
import {
  $r as e,
  Br as t,
  Gr as n,
  Hr as r,
  Jr as i,
  Kr as a,
  Qr as ee,
  Ur as o,
  Xr as s,
  Zr as c,
  ci as l,
  ei as u,
  ii as d,
  ni as f,
  oi as p,
  qr as m,
  ri as h,
  si as g,
  ti as _,
  ui as v,
  zr as y,
} from "./vendor-CsyOLyP3.js";
import {
  D as b,
  E as x,
  M as S,
  N as C,
  O as w,
  Q as T,
  U as E,
  W as D,
  X as te,
  _ as ne,
  d as re,
  f as ie,
  ht as O,
  k,
  q as A,
  s as j,
  t as M,
  v as N,
  vt as P,
  w as F,
} from "./vue-B7Je9h0e.js";
import { t as I } from "./_plugin-vue_export-helper-DVftEge0.js";
import {
  d as L,
  f as R,
  g as z,
  n as B,
  r as V,
  u as H,
  w as U,
} from "./navigation-D0fhxgIL.js";
import { n as W } from "./router-BE9Fjxsm.js";
import { s as G, t as K } from "./game-BTLGP1Kl.js";
import { n as q, t as ae } from "./ui-DN9zXgzf.js";
import { t as J } from "./dialog-BMysXRYZ.js";
import "./LoadingAnimation-CDiD_LAm.js";
import { t as oe } from "./LoadingView-BefVSSge.js";
import { n as se } from "./media-CGyxac_o.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var ce = { id: `moat` },
  le = { id: `content-box` },
  ue = { id: `content` },
  de = { key: 2, class: `global-alert-overlay` },
  fe = [`aria-label`],
  pe = { class: `global-alert-message` },
  me = { class: `global-alert-actions` },
  Y = [`aria-label`],
  he = [`aria-label`],
  ge = I(
    C({
      __name: `App`,
      setup(e) {
        let t = z(),
          n = ae(),
          i = G(),
          a = K(),
          { loading: ee } = r(a),
          { t: o } = j(),
          s = J(),
          {
            isAlertOpen: c,
            alertTitle: l,
            alertMessage: u,
            alertConfirmText: d,
            alertCancelText: f,
            alertShowCancel: p,
          } = r(s),
          m = ie()[`Ctrl+Shift+F`];
        te(m, async (e) => {
          e && (console.warn(`User feedback`), q());
        });
        let h = async () => {
          ((n.appName = await t.hal.uiGetName()),
            (n.appVersion = await t.hal.uiGetVersion()));
          try {
            (await i.login(!0),
              await a.speculativeSyncSave(),
              a.setConnected(!0));
          } catch (e) {
            (console.error(`Error during initial sync`, e),
              await s.showAlert({ message: `请检查网络连接并重试。` }),
              B());
          }
        };
        return (
          re(`unhandledrejection`, async (e) => {
            (await s.showAlert({ message: `请检查网络连接并重试。` }), B());
          }),
          E(async () => {
            let e = h();
            await Promise.allSettled([e, t.hal.uiSignalReady()]);
          }),
          (e, t) => (
            D(),
            k(`div`, ce, [
              x(`div`, le, [
                x(`div`, ue, [
                  S(O(M), null, {
                    default: T(({ Component: e, route: t }) => [
                      e
                        ? (D(),
                          b(
                            ne,
                            {
                              key: 0,
                              name: t.meta.transition || `fade`,
                              mode: `out-in`,
                              "enter-active-class": `transition-opacity`,
                              "leave-active-class": `transition-opacity`,
                              "enter-from-class": `opacity-0`,
                              "leave-to-class": `opacity-0`,
                              duration: { enter: 100, leave: 100 },
                            },
                            {
                              default: T(() => [
                                (D(),
                                b(
                                  F,
                                  null,
                                  {
                                    fallback: T(() => [S(oe)]),
                                    default: T(() => [(D(), b(A(e)))]),
                                    _: 2,
                                  },
                                  1024,
                                )),
                              ]),
                              _: 2,
                            },
                            1032,
                            [`name`],
                          ))
                        : w(``, !0),
                    ]),
                    _: 1,
                  }),
                ]),
                w(``, !0),
                w(``, !0),
                O(c)
                  ? (D(),
                    k(`div`, de, [
                      x(
                        `div`,
                        {
                          class: `global-alert-dialog`,
                          role: `dialog`,
                          "aria-modal": `true`,
                          "aria-label": O(l) || O(o)(`ui.close_dialog`),
                        },
                        [
                          (t[2] ||= x(
                            `div`,
                            { class: `global-alert-title` },
                            null,
                            -1,
                          )),
                          x(`div`, pe, P(O(u)), 1),
                          x(`div`, me, [
                            O(p)
                              ? (D(),
                                k(
                                  `button`,
                                  {
                                    key: 0,
                                    class: `global-alert-button global-alert-button--secondary`,
                                    "aria-label": O(o)(`ui.close_dialog`),
                                    onClick: (t[0] ||= (e) =>
                                      O(s).cancelAlert()),
                                  },
                                  P(O(f) || O(o)(`ui.close_dialog`)),
                                  9,
                                  Y,
                                ))
                              : w(``, !0),
                            x(
                              `button`,
                              {
                                class: `global-alert-button`,
                                "aria-label": O(o)(`ui.close_dialog`),
                                onClick: (t[1] ||= (e) => O(s).confirmAlert()),
                              },
                              P(O(d) || O(o)(`ui.close_dialog`)),
                              9,
                              he,
                            ),
                          ]),
                        ],
                        8,
                        fe,
                      ),
                    ]))
                  : w(``, !0),
              ]),
            ])
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-71c2fe69`]],
  );
(s(
  {
    tracesSampleRate: 1e-4,
    replaysSessionSampleRate: 1e-5,
    replaysOnErrorSampleRate: 0.001,
    attachStacktrace: !0,
    tracePropagationTargets: [
      `localhost`,
      ...({
        id: `production`,
        server: {
          api_base_url: `https://prod.beifa.shyingyou.cn`,
          auth: { steam: { identity: `production` } },
        },
        sentry: {
          DSN: `https://cf9f4cb5025dda2786ab5f0f8183473c@o4505193156902912.ingest.us.sentry.io/4509638738313216`,
          HTTP_REPORT_ENDPOINT: `https://o4505193156902912.ingest.us.sentry.io/api/4509638738313216/security/?sentry_key=cf9f4cb5025dda2786ab5f0f8183473c`,
          tracePropagationTargets: [`shyingyou.cn`],
        },
        mixpanel: { token: `42ba1da4c332834d2313c0c92fa9fc57` },
      }.sentry?.tracePropagationTargets || []),
    ],
    integrations: [
      g({ levels: [`error`, `warn`, `assert`] }),
      f(),
      ee(),
      c(),
      _(),
      p(),
      e(),
      h(),
    ],
  },
  m,
),
  l(u()),
  l(d({ autoInject: !1, colorScheme: `system`, showBranding: !1 })),
  {
    id: `production`,
    server: {
      api_base_url: `https://prod.beifa.shyingyou.cn`,
      auth: { steam: { identity: `production` } },
    },
    sentry: {
      DSN: `https://cf9f4cb5025dda2786ab5f0f8183473c@o4505193156902912.ingest.us.sentry.io/4509638738313216`,
      HTTP_REPORT_ENDPOINT: `https://o4505193156902912.ingest.us.sentry.io/api/4509638738313216/security/?sentry_key=cf9f4cb5025dda2786ab5f0f8183473c`,
      tracePropagationTargets: [`shyingyou.cn`],
    },
    mixpanel: { token: `42ba1da4c332834d2313c0c92fa9fc57` },
  }.mixpanel?.token &&
    H(
      {
        id: `production`,
        server: {
          api_base_url: `https://prod.beifa.shyingyou.cn`,
          auth: { steam: { identity: `production` } },
        },
        sentry: {
          DSN: `https://cf9f4cb5025dda2786ab5f0f8183473c@o4505193156902912.ingest.us.sentry.io/4509638738313216`,
          HTTP_REPORT_ENDPOINT: `https://o4505193156902912.ingest.us.sentry.io/api/4509638738313216/security/?sentry_key=cf9f4cb5025dda2786ab5f0f8183473c`,
          tracePropagationTargets: [`shyingyou.cn`],
        },
        mixpanel: { token: `42ba1da4c332834d2313c0c92fa9fc57` },
      }.mixpanel.token,
    ),
  await V());
var X = N(ge);
l(i({ app: X, tracingOptions: { trackComponents: !0 } }));
var _e = o();
X.use(_e);
var Z = t();
(Z.use(n()), Z.use(y), X.use(Z));
var Q = z();
(v(`sessionId`, Q.sessionId), R(`session`, { id: Q.sessionId }));
var ve = se();
(X.use(U), v(`server_config`, Q.environmentManager.environmentId));
var $ = (
  await W(
    async () => {
      let { default: e } = await import(`./router-BQNMVyvQ.js`);
      return { default: e };
    },
    __vite__mapDeps([0, 1, 2, 3]),
    import.meta.url,
  )
).default;
(l(a({ router: $ })),
  L($),
  ve.hookVueRouter($),
  $.onError((e) => {
    console.error(`Router error`, e);
  }),
  X.use($),
  X.mount(`#app`));
//# sourceMappingURL=index-DqaUc-Mf.js.map
