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
      (e._sentryDebugIds[t] = `56a1d496-de0d-4248-ae4f-7a9c7e79d303`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-56a1d496-de0d-4248-ae4f-7a9c7e79d303`));
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
      (e._sentryDebugIds[t] = `f1f5541c-030e-4d75-9d1f-27b2f0cd09ab`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-f1f5541c-030e-4d75-9d1f-27b2f0cd09ab`));
  })();
} catch {}
import { Vr as e } from "./vendor-CsyOLyP3.js";
import { ct as t } from "./vue-B7Je9h0e.js";
const n = e(`dialog`, () => {
  let e = t(!1),
    n = t(null),
    r = t(``),
    i = t(null),
    a = t(null),
    o = t(!1),
    s = null;
  return {
    isAlertOpen: e,
    alertTitle: n,
    alertMessage: r,
    alertConfirmText: i,
    alertCancelText: a,
    alertShowCancel: o,
    showAlert: (t) => (
      (r.value = t.message),
      (i.value = t.confirmText ?? null),
      (a.value = t.cancelText ?? null),
      (o.value = t.showCancel ?? !!a.value),
      (e.value = !0),
      new Promise((e) => {
        s = e;
      })
    ),
    confirmAlert: () => {
      if (!e.value) return;
      e.value = !1;
      let t = s;
      ((s = null), t?.(!0));
    },
    cancelAlert: () => {
      if (!e.value) return;
      e.value = !1;
      let t = s;
      ((s = null), t?.(!1));
    },
  };
});
export { n as t };
//# sourceMappingURL=dialog-BMysXRYZ.js.map
