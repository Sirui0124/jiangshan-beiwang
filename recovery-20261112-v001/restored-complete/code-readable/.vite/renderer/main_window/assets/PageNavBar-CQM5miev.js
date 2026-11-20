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
      (e._sentryDebugIds[t] = `42a8bdbc-be32-4479-b35c-8334eb704d77`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-42a8bdbc-be32-4479-b35c-8334eb704d77`));
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
      (e._sentryDebugIds[t] = `3de74195-c7a3-4d46-8325-8cdedc9e84ec`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-3de74195-c7a3-4d46-8325-8cdedc9e84ec`));
  })();
} catch {}
import {
  E as e,
  M as t,
  N as n,
  W as r,
  gt as i,
  ht as a,
  k as o,
  s,
  vt as c,
  y as l,
} from "./vue-B7Je9h0e.js";
import { t as u } from "./_plugin-vue_export-helper-DVftEge0.js";
import { a as d, t as f } from "./navigation-D0fhxgIL.js";
import { n as p } from "./media-CGyxac_o.js";
var m = { class: `btn-text` },
  h = u(
    n({
      __name: `BtnWithArrow`,
      props: {
        content: { type: String, required: !0 },
        right: { type: Boolean, required: !1, default: !1 },
        fontSize: { type: String, required: !1, default: `2em` },
      },
      emits: { click: (e) => e },
      setup(t, { emit: n }) {
        l((e) => ({ d8316d0e: a.fontSize }));
        let a = t,
          s = n,
          u = async (e) => {
            s(`click`, e);
          };
        return (t, n) => (
          r(),
          o(
            `button`,
            {
              class: i([`btn-arrow horizontal`, { right: a.right }]),
              onClick: u,
            },
            [
              (n[0] ||= e(
                `img`,
                {
                  class: `arrow-default`,
                  src: `data:image/webp;base64,UklGRtwCAABXRUJQVlA4WAoAAAAQAAAATAAAQQAAQUxQSAICAAABkFVrW95KrwQkIAEJcTBIwMHEQXHQOEgcEAepA46Drw4+Ce9FUvh6yvxeRcQE4P9Pd5cyDHdTKvMggvA8BjdXnhc3gkl4fkwYYeJlwgjdnWdZMMJJeNbDj+DO6yPh893Ba5nx+Tfl9XHHx4fKl7L7j0vKhoQP9zfl6yqwTjF6776BVzauWzIJ5UmSWvfytlnZKpuzmAtb6+TfUdjpYZiKXumJrMHMFXbOMAxFrnSrx1NEVGejSdgpwaIor2p0mDahUn5YuMLe+oBhZP2iKrk4nIOSrKEvKrs1WySqcJVnxsukJPceV2go3mIlVfMjonEhKbFtElpmWO6VDA7NTkgeTTNtVxNRcuuA1zZ/0Dib/Ix6FPTulNiQaL2apCS6+R5MzjXAfxmJSUgk5y4gtQDVRk0QKilT39KGxYTOBBtJaXPeJ9+BUC1mm0SSW1OqcXY9cFn7VhsnJFnDK59TWWGY+sQG8cTHPodT0rkc0QJ+6VptkJUkFwBIh65yiDMBQk81wk5SqbVoXVdqdTBftEV5N0LipVC01urxxthCcjKC307K+jiSw1uTNK1WgI/bnnMODm/PDZU3s2/9fEHSDSBIQx4A/PaK8wCAJFeqYQTw9YIUPwIg6wWrGwKQLlj8GJAvKH4MyF8nShwDsCnP0yCQ9SRuEJg2khnjzCwY6eSH8k8eVlA4ILQAAABwBwCdASpNAEIAPn04k0ekpCGhOFrpWJAPiWcAzgStMbn1P3hTxG/x08oSp/4tNC7zFfvWt7nuMMizqIqksCEMguoRAAD++neH/+l/Vnpxuo4f3/yUJpYbcrNv6YvMxwNl7r/8bjn/cJf1zHf/RhIR9uYcVuLuOwFL/7Pf/3///77P//35bl6Wr8YSfXOxWpJb5rO90zLDAcCZFQJMH+tXYE123H/72plBD/kn4ooSyX0AAAA=`,
                },
                null,
                -1,
              )),
              (n[1] ||= e(
                `img`,
                {
                  class: `arrow-highlighted`,
                  src: `data:image/webp;base64,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`,
                },
                null,
                -1,
              )),
              e(`span`, m, c(a.content), 1),
            ],
            2,
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-3c49e7f4`]],
  ),
  g = { class: `nav` },
  _ = u(
    n({
      __name: `PageNavBar`,
      props: { location: { type: String, required: !1, default: `` } },
      setup(e) {
        let n = e,
          { t: i } = s(),
          c = p(),
          l = async (e) => {
            (e.stopPropagation(),
              c.setUiEffectAudio1(`音效7`),
              n.location === `` ? await f() : await d(n.location));
          };
        return (e, n) => (
          r(),
          o(`div`, g, [
            t(h, { content: a(i)(`ui.back`), onClickPassive: l }, null, 8, [
              `content`,
            ]),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-e2b752bc`]],
  );
export { h as n, _ as t };
//# sourceMappingURL=PageNavBar-CQM5miev.js.map
