const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./MainMenuView-BRabFu1Q.js",
      "./_plugin-vue_export-helper-DVftEge0.js",
      "./vendor-CsyOLyP3.js",
      "./vue-B7Je9h0e.js",
      "./rolldown-runtime-puNP7PS7.js",
      "./vendor-uDFgPAft.css",
      "./navigation-D0fhxgIL.js",
      "./LoadingAnimation-CDiD_LAm.js",
      "./LoadingAnimation-dZANp_9I.css",
      "./BtnNavi-CyVOedxu.js",
      "./BtnNavi-4Bk8aExR.css",
      "./game-BTLGP1Kl.js",
      "./media-CGyxac_o.js",
      "./ui-DN9zXgzf.js",
      "./announcements-CUHuWzqR.js",
      "./MainMenuView-45x4hbHi.css",
      "./LoadingView-Bf97xjnq.js",
      "./LoadingView-BefVSSge.js",
      "./LoadingView-DkTx8jU1.css",
      "./AnnouncementsView-EbY4DI39.js",
      "./BtnWithImg-C29tj1UA.js",
      "./BtnWithImg-BJlsUaS9.css",
      "./关闭高亮-BoZrBZEA.js",
      "./AnnouncementsView-BJJk-0dY.css",
      "./AchievementsView-DDXAt_aF.js",
      "./PageNavBar-CQM5miev.js",
      "./PageNavBar-CYpsmmTe.css",
      "./achievements-q4KXDuPO.js",
      "./AchievementsView-AwGs5zfd.css",
      "./SettingsView-C-hhC2eS.js",
      "./dialog-BMysXRYZ.js",
      "./SettingsView-DGxrRzX2.css",
      "./ChapterView-C1EaLDhk.js",
      "./preload-BwqIQoQP.js",
      "./lock-KXuPJAyk.js",
      "./ChapterView-Bvov20_-.css",
      "./StorylineView-B7Fzlss6.js",
      "./StorylineView-DgjWXAEw.css",
      "./PortfolioView-C8GjVWK-.js",
      "./characters-OTaZOmsV.js",
      "./PortfolioView-BRj61Gla.css",
      "./CharacterView-D6fQrSIC.js",
      "./CharacterView-3Sy2WR3t.css",
      "./PlayerView-0K737eBt.js",
      "./StoryletPlayer-PwJrfDfZ.js",
      "./StoryletPlayer-ClJzgEbD.css",
      "./PlayerView-Df_PpEAP.css",
      "./CreditsView-DLjebp1g.js",
      "./CreditsView-D5-5y4BN.css",
      "./LicenseView-Biyfq0IW.js",
      "./LicenseView-BC-_446n.css",
      "./LeisureModePlayerView-DX8q7g4F.js",
      "./LeisureModePlayerView-CLgll3re.css",
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
      (e._sentryDebugIds[t] = `7b7cc155-77e3-4867-b9f1-789804c5e9ef`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-7b7cc155-77e3-4867-b9f1-789804c5e9ef`));
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
      (e._sentryDebugIds[t] = `d5379ac3-2c83-4b1e-8614-5c1d0a65f423`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-d5379ac3-2c83-4b1e-8614-5c1d0a65f423`));
  })();
} catch {}
import { n as e, r as t } from "./vue-B7Je9h0e.js";
var n = `modulepreload`,
  r = function (e, t) {
    return new URL(e, t).href;
  },
  i = {};
const a = function (e, t, a) {
  let o = Promise.resolve();
  if (t && t.length > 0) {
    let e = document.getElementsByTagName(`link`),
      s = document.querySelector(`meta[property=csp-nonce]`),
      c = s?.nonce || s?.getAttribute(`nonce`);
    function l(e) {
      return Promise.all(
        e.map((e) =>
          Promise.resolve(e).then(
            (e) => ({ status: `fulfilled`, value: e }),
            (e) => ({ status: `rejected`, reason: e }),
          ),
        ),
      );
    }
    o = l(
      t.map((t) => {
        if (((t = r(t, a)), t in i)) return;
        i[t] = !0;
        let o = t.endsWith(`.css`),
          s = o ? `[rel="stylesheet"]` : ``;
        if (a)
          for (let n = e.length - 1; n >= 0; n--) {
            let r = e[n];
            if (r.href === t && (!o || r.rel === `stylesheet`)) return;
          }
        else if (document.querySelector(`link[href="${t}"]${s}`)) return;
        let l = document.createElement(`link`);
        if (
          ((l.rel = o ? `stylesheet` : n),
          o || (l.as = `script`),
          (l.crossOrigin = ``),
          (l.href = t),
          c && l.setAttribute(`nonce`, c),
          document.head.appendChild(l),
          o)
        )
          return new Promise((e, n) => {
            (l.addEventListener(`load`, e),
              l.addEventListener(`error`, () =>
                n(Error(`Unable to preload CSS for ${t}`)),
              ));
          });
      }),
    );
  }
  function s(e) {
    let t = new Event(`vite:preloadError`, { cancelable: !0 });
    if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
      throw e;
  }
  return o.then((t) => {
    for (let e of t || []) e.status === `rejected` && s(e.reason);
    return e().catch(s);
  });
};
var o = e({
  strict: !0,
  history: t(`./`),
  routes: [
    {
      path: `/`,
      name: `main_menu`,
      component: () =>
        a(
          () => import(`./MainMenuView-BRabFu1Q.js`),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
          ]),
          import.meta.url,
        ),
      meta: {
        backgroundAudio: {
          id: `/src/assets/bgm/main_bgm.opus`,
          offsetSecs: 20,
        },
      },
    },
    {
      path: `/loading`,
      name: `loading`,
      component: () =>
        a(
          () => import(`./LoadingView-Bf97xjnq.js`),
          __vite__mapDeps([16, 7, 1, 3, 4, 8, 17, 18]),
          import.meta.url,
        ),
    },
    {
      path: `/announcements`,
      name: `announcements`,
      component: () =>
        a(
          () => import(`./AnnouncementsView-EbY4DI39.js`),
          __vite__mapDeps([19, 1, 2, 3, 4, 5, 6, 20, 21, 14, 22, 23]),
          import.meta.url,
        ),
    },
    {
      path: `/achievements`,
      name: `achievements`,
      component: () =>
        a(
          () => import(`./AchievementsView-DDXAt_aF.js`),
          __vite__mapDeps([24, 1, 2, 3, 4, 5, 25, 6, 12, 26, 7, 8, 27, 28]),
          import.meta.url,
        ),
    },
    {
      path: `/settings`,
      name: `settings`,
      component: () =>
        a(
          () => import(`./SettingsView-C-hhC2eS.js`),
          __vite__mapDeps([29, 1, 2, 3, 4, 5, 6, 25, 12, 26, 30, 13, 14, 31]),
          import.meta.url,
        ),
    },
    {
      path: `/chapters`,
      name: `chapters`,
      component: () =>
        a(
          () => import(`./ChapterView-C1EaLDhk.js`),
          __vite__mapDeps([32, 1, 2, 3, 4, 5, 6, 25, 12, 26, 11, 33, 34, 35]),
          import.meta.url,
        ),
      meta: {
        backgroundAudio: {
          id: `/src/assets/bgm/chapter_select_bgm.opus`,
          offsetSecs: 45,
        },
      },
    },
    {
      path: `/chapters/:id([0-2])`,
      name: `storyline`,
      component: () =>
        a(
          () => import(`./StorylineView-B7Fzlss6.js`),
          __vite__mapDeps([
            36, 1, 2, 3, 4, 5, 6, 25, 12, 26, 20, 21, 7, 8, 11, 33, 22, 37,
          ]),
          import.meta.url,
        ),
      meta: { backgroundAudio: { id: `/src/assets/bgm/chapter012_bgm.opus` } },
    },
    {
      path: `/chapters/:id([3-5])`,
      name: `storyline-3-5`,
      component: () =>
        a(
          () => import(`./StorylineView-B7Fzlss6.js`),
          __vite__mapDeps([
            36, 1, 2, 3, 4, 5, 6, 25, 12, 26, 20, 21, 7, 8, 11, 33, 22, 37,
          ]),
          import.meta.url,
        ),
      meta: {
        backgroundAudio: {
          id: `/src/assets/bgm/chapter345_bgm.opus`,
          offsetSecs: 25,
        },
      },
    },
    {
      path: `/chapters/:id([6-7])`,
      name: `storyline-6-7`,
      component: () =>
        a(
          () => import(`./StorylineView-B7Fzlss6.js`),
          __vite__mapDeps([
            36, 1, 2, 3, 4, 5, 6, 25, 12, 26, 20, 21, 7, 8, 11, 33, 22, 37,
          ]),
          import.meta.url,
        ),
      meta: {
        backgroundAudio: {
          id: `/src/assets/bgm/chapter67_bgm.opus`,
          offsetSecs: 20,
        },
      },
    },
    {
      path: `/portfolios`,
      name: `portfolios`,
      component: () =>
        a(
          () => import(`./PortfolioView-C8GjVWK-.js`),
          __vite__mapDeps([
            38, 1, 2, 3, 4, 5, 6, 25, 12, 26, 20, 21, 39, 11, 33, 40,
          ]),
          import.meta.url,
        ),
      meta: {
        backgroundAudio: {
          id: `/src/assets/bgm/portfolios_bgm.opus`,
          offsetSecs: 4,
        },
      },
    },
    {
      path: `/portfolios/:id`,
      name: `portfolio`,
      component: () =>
        a(
          () => import(`./CharacterView-D6fQrSIC.js`),
          __vite__mapDeps([
            41, 1, 2, 3, 4, 5, 6, 25, 12, 26, 20, 21, 39, 11, 33, 34, 42,
          ]),
          import.meta.url,
        ),
    },
    {
      path: `/player`,
      name: `player`,
      component: () =>
        a(
          () => import(`./PlayerView-0K737eBt.js`),
          __vite__mapDeps([
            43, 1, 2, 3, 4, 5, 6, 25, 12, 26, 7, 8, 9, 10, 44, 27, 11, 30, 13,
            14, 33, 45, 46,
          ]),
          import.meta.url,
        ),
      meta: { backgroundAudio: { id: null } },
    },
    {
      path: `/credits`,
      name: `credits`,
      component: () =>
        a(
          () => import(`./CreditsView-DLjebp1g.js`),
          __vite__mapDeps([47, 1, 2, 3, 4, 5, 6, 20, 21, 22, 48]),
          import.meta.url,
        ),
    },
    {
      path: `/license`,
      name: `license`,
      component: () =>
        a(
          () => import(`./LicenseView-Biyfq0IW.js`),
          __vite__mapDeps([49, 1, 2, 3, 4, 5, 6, 20, 21, 22, 50]),
          import.meta.url,
        ),
    },
    {
      path: `/leisure-mode-player`,
      name: `leisure-mode-player`,
      component: () =>
        a(
          () => import(`./LeisureModePlayerView-DX8q7g4F.js`),
          __vite__mapDeps([
            51, 1, 2, 3, 4, 5, 6, 25, 12, 26, 44, 27, 11, 30, 13, 14, 33, 45,
            52,
          ]),
          import.meta.url,
        ),
      meta: { backgroundAudio: { id: null } },
    },
  ],
});
export { a as n, o as t };
//# sourceMappingURL=router-BE9Fjxsm.js.map
