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
      (e._sentryDebugIds[t] = `cb0dc947-007d-4a2c-8611-452397eba01e`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-cb0dc947-007d-4a2c-8611-452397eba01e`));
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
      (e._sentryDebugIds[t] = `52bcfd8a-0fab-4c6f-ac25-fcfc2970e294`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-52bcfd8a-0fab-4c6f-ac25-fcfc2970e294`));
  })();
} catch {}
import { Hr as e } from "./vendor-CsyOLyP3.js";
import {
  $ as t,
  C as n,
  E as r,
  G as i,
  J as a,
  K as o,
  L as s,
  M as c,
  N as l,
  W as u,
  b as d,
  ht as f,
  k as p,
  rt as m,
  s as h,
  vt as g,
} from "./vue-B7Je9h0e.js";
import { t as _ } from "./_plugin-vue_export-helper-DVftEge0.js";
import { C as v, n as y } from "./navigation-D0fhxgIL.js";
import { t as b } from "./ui-DN9zXgzf.js";
import { t as x } from "./dialog-BMysXRYZ.js";
import { n as S } from "./media-CGyxac_o.js";
import { t as C } from "./PageNavBar-CQM5miev.js";
var w = { class: `slider horizontal` },
  T = [`min`, `max`, `step`, `disabled`, `aria-label`],
  E = _(
    l({
      __name: `VolumeSlider`,
      props: s(
        {
          min: Number,
          max: Number,
          step: Number,
          disabled: Boolean,
          label: String,
        },
        { modelValue: {}, modelModifiers: {} },
      ),
      emits: [`update:modelValue`],
      setup(e) {
        let n = a(e, `modelValue`),
          i = e;
        return (e, a) => (
          u(),
          p(`div`, w, [
            o(e.$slots, `default`, {}, void 0, !0),
            t(
              r(
                `input`,
                {
                  "onUpdate:modelValue": (a[0] ||= (e) => (n.value = e)),
                  type: `range`,
                  min: i.min,
                  max: i.max,
                  step: i.step,
                  disabled: i.disabled,
                  "aria-label": i.label,
                },
                null,
                8,
                T,
              ),
              [[d, n.value]],
            ),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-08190531`]],
  ),
  D = { class: `settings game ui-font` },
  O = { class: `container` },
  k = [`value`],
  A = [`value`],
  j = _(
    l({
      __name: `SettingsView`,
      setup(t) {
        let { t: a } = h(),
          {
            masterVolume: o,
            playerVolume: s,
            uiEffectVolume: l,
            uiBackgroundMusicVolume: d,
          } = e(S()),
          { userLocale: _, locale: w, allLocales: T } = e(b()),
          j = x(),
          M = async (e) => {
            ((_.value = e.target.value),
              await j.showAlert({
                message: a(`ui.locale_change_warning`),
                confirmText: a(`ui.confirm`),
                showCancel: !1,
              }),
              await y());
          };
        return (e, t) => (
          u(),
          p(`div`, D, [
            c(C),
            r(`div`, O, [
              r(`table`, null, [
                r(`tbody`, null, [
                  r(`tr`, null, [
                    r(`td`, null, [
                      r(`label`, null, g(f(a)(`ui.volume_main`)), 1),
                    ]),
                    r(`td`, null, [
                      c(
                        E,
                        {
                          modelValue: f(o),
                          "onUpdate:modelValue": (t[0] ||= (e) =>
                            m(o) ? (o.value = e) : null),
                          min: 0,
                          max: 1,
                          step: 0.01,
                          label: f(a)(`ui.volume_main`),
                        },
                        null,
                        8,
                        [`modelValue`, `label`],
                      ),
                    ]),
                  ]),
                  r(`tr`, null, [
                    r(`td`, null, [
                      r(`label`, null, g(f(a)(`ui.volume_video`)), 1),
                    ]),
                    r(`td`, null, [
                      c(
                        E,
                        {
                          modelValue: f(s),
                          "onUpdate:modelValue": (t[1] ||= (e) =>
                            m(s) ? (s.value = e) : null),
                          min: 0,
                          max: 1,
                          step: 0.01,
                          label: f(a)(`ui.volume_video`),
                        },
                        null,
                        8,
                        [`modelValue`, `label`],
                      ),
                    ]),
                  ]),
                  r(`tr`, null, [
                    r(`td`, null, [
                      r(`label`, null, g(f(a)(`ui.volume_bgm`)), 1),
                    ]),
                    r(`td`, null, [
                      c(
                        E,
                        {
                          modelValue: f(d),
                          "onUpdate:modelValue": (t[2] ||= (e) =>
                            m(d) ? (d.value = e) : null),
                          min: 0,
                          max: 1,
                          step: 0.01,
                          label: f(a)(`ui.volume_bgm`),
                        },
                        null,
                        8,
                        [`modelValue`, `label`],
                      ),
                    ]),
                  ]),
                  r(`tr`, null, [
                    r(`td`, null, [
                      r(`label`, null, g(f(a)(`ui.volume_efx`)), 1),
                    ]),
                    r(`td`, null, [
                      c(
                        E,
                        {
                          modelValue: f(l),
                          "onUpdate:modelValue": (t[3] ||= (e) =>
                            m(l) ? (l.value = e) : null),
                          min: 0,
                          max: 1,
                          step: 0.01,
                          label: f(a)(`ui.volume_efx`),
                        },
                        null,
                        8,
                        [`modelValue`, `label`],
                      ),
                    ]),
                  ]),
                  r(`tr`, null, [
                    r(`td`, null, [
                      r(`label`, null, g(f(a)(`ui.ui_language`)), 1),
                    ]),
                    r(`td`, null, [
                      r(
                        `select`,
                        { id: `locale`, value: f(w), onChangePassive: M },
                        [
                          (u(!0),
                          p(
                            n,
                            null,
                            i(
                              f(T),
                              (e) => (
                                u(),
                                p(
                                  `option`,
                                  { key: e, value: e },
                                  g(f(v)(e)),
                                  9,
                                  A,
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        40,
                        k,
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-d643a26a`]],
  );
export { j as default };
//# sourceMappingURL=SettingsView-C-hhC2eS.js.map
