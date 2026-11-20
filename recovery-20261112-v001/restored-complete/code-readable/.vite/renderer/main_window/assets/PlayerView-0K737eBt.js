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
      (e._sentryDebugIds[t] = `32ca5e56-1f5e-4165-876e-4acf80ee879e`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-32ca5e56-1f5e-4165-876e-4acf80ee879e`));
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
      (e._sentryDebugIds[t] = `e27f6a90-b3e1-43c6-996b-6517796e3fa3`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-e27f6a90-b3e1-43c6-996b-6517796e3fa3`));
  })();
} catch {}
import { Hr as e } from "./vendor-CsyOLyP3.js";
import {
  C as t,
  D as n,
  E as r,
  G as i,
  M as a,
  N as o,
  O as s,
  T as c,
  U as l,
  W as u,
  X as d,
  ct as f,
  f as p,
  ht as m,
  k as h,
  m as g,
  s as _,
} from "./vue-B7Je9h0e.js";
import { t as v } from "./_plugin-vue_export-helper-DVftEge0.js";
import { a as y, t as b } from "./navigation-D0fhxgIL.js";
import { t as x } from "./game-BTLGP1Kl.js";
import { t as S } from "./LoadingAnimation-CDiD_LAm.js";
import { n as C } from "./media-CGyxac_o.js";
import { t as w } from "./PageNavBar-CQM5miev.js";
import { t as T } from "./StoryletPlayer-PwJrfDfZ.js";
import { t as E } from "./BtnNavi-CyVOedxu.js";
var D = { class: `player-view game ui-font` },
  O = { key: 1, class: `loading vertical` },
  k = { key: 2, class: `pause-menu` },
  A = { id: `menu` },
  j = v(
    o({
      __name: `PlayerView`,
      setup(o) {
        let { t: v } = _(),
          j = x(),
          {
            currentPlayerInstructionId: M,
            playerInstructions: N,
            currentChapterId: P,
          } = e(j),
          F = c(() => N.value.slice(0, 3)),
          I = C(),
          L = g(),
          R = async () => {
            (await j.progressVideo(),
              N.value.length === 0 &&
                (console.debug(`No more instructions`), await b()));
          };
        l(async () => {
          I.setUiBackgroundAudio(null);
          try {
            await j.startVideo();
          } catch (e) {
            (console.error(`Failed to start video playback`, e), await b());
            return;
          }
          if (j.playerInstructions.length === 0) {
            (console.error(`No instructions to play`), await b());
            return;
          }
        });
        let z = f(!1),
          { escape: B } = p(),
          V = async () => {
            z.value = !z.value;
          };
        return (
          d(B, async (e) => {
            e && (I.setUiEffectAudio1(`esc`), await V());
          }),
          (e, o) => (
            u(),
            h(`div`, D, [
              m(N).length === 0 ? (u(), n(w, { key: 0 })) : s(``, !0),
              (u(!0),
              h(
                t,
                null,
                i(
                  F.value,
                  (e, t) => (
                    u(),
                    n(
                      T,
                      {
                        ref_for: !0,
                        ref: m(L).set,
                        key: e.videoId,
                        instruction: e,
                        "show-video-js-controls": !1,
                        "show-controls": !0,
                        play: t === m(M),
                        pause: z.value,
                        onDone: R,
                        onBack: m(b),
                      },
                      null,
                      8,
                      [`instruction`, `play`, `pause`, `onBack`],
                    )
                  ),
                ),
                128,
              )),
              m(N).length === 0 ? (u(), h(`div`, O, [a(S)])) : s(``, !0),
              z.value
                ? (u(),
                  h(`div`, k, [
                    r(`div`, A, [
                      a(
                        E,
                        {
                          text: m(v)(`ui.continue_game`),
                          onPointerenter: (o[0] ||= async () => {
                            m(I).setUiEffectAudio1(`音效12`);
                          }),
                          onClick: (o[1] ||= async () => {
                            (m(I).setUiEffectAudio1(`音效7`), await V());
                          }),
                        },
                        null,
                        8,
                        [`text`],
                      ),
                      a(
                        E,
                        {
                          text: m(v)(`ui.to_storyline`),
                          onPointerenter: (o[2] ||= async () => {
                            m(I).setUiEffectAudio1(`音效12`);
                          }),
                          onClick: (o[3] ||= async () => {
                            (m(I).setUiEffectAudio1(`音效7`),
                              await m(y)(`/chapters/${m(P)}`, !0));
                          }),
                        },
                        null,
                        8,
                        [`text`],
                      ),
                      a(
                        E,
                        {
                          text: m(v)(`ui.settings`),
                          onPointerenter: (o[4] ||= async () => {
                            m(I).setUiEffectAudio1(`音效12`);
                          }),
                          onClick: (o[5] ||= async () => {
                            (m(I).setUiEffectAudio1(`音效7`),
                              await m(y)(`/settings`));
                          }),
                        },
                        null,
                        8,
                        [`text`],
                      ),
                    ]),
                  ]))
                : s(``, !0),
            ])
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-74465310`]],
  );
export { j as default };
//# sourceMappingURL=PlayerView-0K737eBt.js.map
