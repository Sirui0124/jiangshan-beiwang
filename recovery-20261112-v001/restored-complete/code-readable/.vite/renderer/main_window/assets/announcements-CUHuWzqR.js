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
      (e._sentryDebugIds[t] = `dcac2e7b-67ec-488f-a557-4de974fd770e`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-dcac2e7b-67ec-488f-a557-4de974fd770e`));
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
      (e._sentryDebugIds[t] = `2e273482-204d-4e66-9987-f94ee8f2453a`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-2e273482-204d-4e66-9987-f94ee8f2453a`));
  })();
} catch {}
import { r as e } from "./rolldown-runtime-puNP7PS7.js";
import { Fr as t, Pr as n, Vr as r } from "./vendor-CsyOLyP3.js";
import { ct as i, s as a } from "./vue-B7Je9h0e.js";
var o = e(t(), 1);
const s = async (e) => {
    switch (e.type) {
      case `text`:
        return e.content;
      case `markdown`:
        let t = await n.parse(e.content);
        return o.default.sanitize(t);
      case `html`:
        return o.default.sanitize(e.content);
      case `iframe`:
        return new URL(e.content).href;
    }
  },
  c = r(`announcements`, () => {
    let { t: e } = a(),
      t = i([]);
    return {
      announcements: t,
      reloadAnnouncements: async () => {
        t.value = [
          {
            id: `1`,
            title: e(`announcements.1.title`),
            type: `markdown`,
            content: e(`announcements.1.content`),
            createdAt: new Date(`2025-09-25T12:00:00Z`),
          },
        ];
      },
    };
  });
export { c as n, s as t };
//# sourceMappingURL=announcements-CUHuWzqR.js.map
