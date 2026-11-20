const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./zh-CN-DQIDQQWA.js",
      "./vendor-CsyOLyP3.js",
      "./vue-B7Je9h0e.js",
      "./rolldown-runtime-puNP7PS7.js",
      "./vendor-uDFgPAft.css",
      "./en-B667Hz_9.js",
      "./ko-CQaklz2s.js",
      "./ja-BBV4BAhf.js",
      "./ru-BbV_cZd1.js",
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
      (e._sentryDebugIds[t] = `cfca9842-beda-4fe8-a0e0-744e7c21dccc`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-cfca9842-beda-4fe8-a0e0-744e7c21dccc`));
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
      (e._sentryDebugIds[t] = `f42de492-6aa9-4e19-b8db-66d2fe534abc`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-f42de492-6aa9-4e19-b8db-66d2fe534abc`));
  })();
} catch {}
import {
  Ir as e,
  Lr as t,
  Rr as n,
  Vr as r,
  Wr as i,
} from "./vendor-CsyOLyP3.js";
import { a, o, st as s, ut as c } from "./vue-B7Je9h0e.js";
import { n as l, t as u } from "./router-BE9Fjxsm.js";
var d = class {
    api;
    constructor(e) {
      this.api = e;
    }
    get client() {
      return this.api.httpClient;
    }
  },
  f = class extends d {
    async getCurrentSession() {
      return (await this.client.get(`sessions`).json()).user;
    }
    async createBySteam(e) {
      return (
        await this.client
          .post(`sessions`, { json: { user: { steam_ticket: e } } })
          .json()
      ).user;
    }
    async createByDeviceCode(e) {
      return (
        await this.client
          .post(`sessions`, { json: { user: { device_code: e } } })
          .json()
      ).user;
    }
    async createDeviceCode() {
      return (await this.client.post(`sessions/device_codes`).json())
        .device_code;
    }
  },
  p = class extends d {
    async list(e) {
      return (await this.client.get(`api/games/${e}/storylets`).json())
        .storylets;
    }
  },
  m = class extends d {
    async list() {
      return (await this.client.get(`api/games`).json()).games;
    }
    async create() {
      return (await this.client.post(`api/games`).json()).game;
    }
    async load(e) {
      return (await this.client.get(`api/games/${e}`).json()).game;
    }
    async act(e, t) {
      return (await this.client.post(`api/games/${e}/act/${t}`).json()).game;
    }
    async jump(e, t) {
      return (await this.client.post(`api/games/${e}/jump/${t}`).json()).game;
    }
    async copy(e) {
      return (await this.client.post(`api/games/${e}/copy`).json()).game;
    }
  },
  h = `zh-cmn-Hans`,
  g = {
    "zh-cmn-Hans": await l(
      () => import(`./zh-cmn-Hans-DCjjwtGP.js`),
      [],
      import.meta.url,
    ),
    en: await l(() => import(`./en-DVZlxFtR.js`), [], import.meta.url),
    ko: await l(() => import(`./ko-B-7TqOes.js`), [], import.meta.url),
    ja: await l(() => import(`./ja-Cqp0sR9O.js`), [], import.meta.url),
    ru: await l(() => import(`./ru-CUgJJo8E.js`), [], import.meta.url),
  },
  _ = {
    "zh-cmn-Hans": await l(
      () => import(`./zh-CN-DQIDQQWA.js`),
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    ),
    en: await l(
      () => import(`./en-B667Hz_9.js`),
      __vite__mapDeps([5, 1, 2, 3, 4]),
      import.meta.url,
    ),
    ko: await l(
      () => import(`./ko-CQaklz2s.js`),
      __vite__mapDeps([6, 1, 2, 3, 4]),
      import.meta.url,
    ),
    ja: await l(
      () => import(`./ja-BBV4BAhf.js`),
      __vite__mapDeps([7, 1, 2, 3, 4]),
      import.meta.url,
    ),
    ru: await l(
      () => import(`./ru-BbV_cZd1.js`),
      __vite__mapDeps([8, 1, 2, 3, 4]),
      import.meta.url,
    ),
  },
  v = o({ legacy: !1, locale: h, messages: g }),
  y = (e) => v.global.messages.value[e]?._meta?.localized_name || e,
  b = v,
  x = class {
    currentEnvironment;
    _kyClient = null;
    constructor(e) {
      ((this.currentEnvironment = e),
        i(
          {
            link: [
              {
                rel: `dns-prefetch`,
                href: this.currentEnvironment.server.api_base_url,
              },
            ],
          },
          { tagPriority: `low`, mode: `client` },
        ));
    }
    kyClient() {
      return (
        (this._kyClient ||= t.create({
          prefixUrl: this.currentEnvironment.server.api_base_url,
          credentials: `include`,
          retry: {
            limit: 3,
            methods: [
              `get`,
              `post`,
              `put`,
              `head`,
              `delete`,
              `options`,
              `trace`,
            ],
          },
        })),
        this._kyClient
      );
    }
    deviceCodeUrl(e) {
      return `${this.currentEnvironment.server.api_base_url}/auth?auth[user_code]=${e}`;
    }
    get environmentId() {
      return this.currentEnvironment.id;
    }
    get environmentDisplayName() {
      return b.global.t(`environments.${this.currentEnvironment.id}`);
    }
  },
  S = class {
    httpClient;
    sessions;
    storylets;
    saves;
    constructor(e) {
      ((this.httpClient = e.kyClient()),
        (this.sessions = new f(this)),
        (this.storylets = new p(this)),
        (this.saves = new m(this)));
    }
    setLocale(e) {
      this.httpClient = this.httpClient.extend(() => ({
        headers: {
          "Accept-Language": `${e}, ${h};q=0.1`,
          Locale:
            b.global.messages.value[e]._meta.server_locale || e.toLowerCase(),
        },
      }));
    }
  };
const C = 7,
  w = (e) =>
    e
      .split(`_`)
      .map((e) => e.replace(/^a/, ``))
      .join(`_`)
      .toUpperCase(),
  T = (e) =>
    `a` +
    e
      .split(`_`)
      .map((e) => e.replace(/^a/, ``))
      .join(`_a`)
      .toLowerCase(),
  E = (e) => parseInt(e.split(`_`, 2)[0].replaceAll(/\D/g, ``), 10),
  D = (e) => e.replaceAll(`-`, `_`),
  O = async () => globalThis.ipc.readEnvironment();
var k = class {
    localeGetPreferences() {
      return globalThis.ipc.ui.localeGetPreferences();
    }
    uiSignalReady() {
      return globalThis.ipc.ui.signalReady();
    }
    uiGetName() {
      return globalThis.ipc.ui.getName();
    }
    uiGetVersion() {
      return globalThis.ipc.ui.getVersion();
    }
    uiOpenExternal(e) {
      return globalThis.ipc.ui.openExternal(e);
    }
    uiCloseWindow() {
      return globalThis.ipc.ui.closeWindow();
    }
    uiHideWindow() {
      return globalThis.ipc.ui.hideWindow();
    }
    steamGetAuthTicketForWebApi() {
      return globalThis.ipc.steam.getAuthTicketForWebApi();
    }
    achievementIsActivated(e) {
      return globalThis.ipc.steam.achievementIsActivated(e);
    }
    activateAchievement(e) {
      return globalThis.ipc.steam.activateAchievement(e);
    }
    subtitle(e, t) {
      let n = E(e),
        r = w(e);
      return `res://chapter${n}_${D(t)}/subtitles/${r}.vtt`;
    }
    characterPortrait(e, t) {
      return `res://common_neutral/characters/portrait/${e}.png`;
    }
    characterCarouselImage(e, t) {
      return `res://common_neutral/characters/carousel/${e}.png`;
    }
    vrVideo(e, t) {
      return `res://common_neutral/vr/${e}.mp4`;
    }
  },
  A = await O();
const j = r(`globals`, () => {
  let e = new x(A);
  return {
    environmentManager: e,
    api: new S(e),
    hal: new k(),
    sessionId: s(c(n().toString())),
  };
});
var M = !!{
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
}.mixpanel;
const N = (t) => {
    M &&
      (e.init(t, { autocapture: !1, persistence: `localStorage` }),
      e.register({
        environment: {
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
        }.id,
        build: `packaged:release`,
      }));
  },
  P = (t) => {
    !M ||
      !t ||
      t.beforeEach((t, n) => {
        e.track(`Page View`, { page: t.path, title: t.name || t.path });
      });
  },
  F = () => {
    M && e.reset();
  },
  I = (t) => {
    if (M) return e.identify(t);
  },
  L = (t, n) => {
    M && e.people.set(t, n);
  },
  R = (t, n) => {
    M && e.register(t, n);
  },
  z = async (t, n, r, i) => {
    M && e.track(t, n, r, i);
  },
  B = async (e) =>
    new Promise((t) => {
      setTimeout(() => {
        t();
      }, e);
    }),
  V = async (e, ...t) => {
    let n,
      r = new Promise(
        (t, r) => (n = setTimeout(() => r(`Timed out after ${e} ms.`), e)),
      );
    return Promise.race([r, Promise.all(t)]).finally(() => {
      n && clearTimeout(n);
    });
  },
  H = async () => {
    u.options.history.state.back === null ||
    u.options.history.state.back === `/loading`
      ? await u.push(`/`)
      : await u.back();
  },
  U = async (e, t = !1) => {
    t ? await u.replace(e) : await u.push(e);
  },
  W = async (e, t, n = 15e3) => {
    (u.push(`/loading`),
      V(n, t())
        .then(async () => {
          await u.replace(e);
        })
        .catch(async (e) => {
          (console.error(`Navigation failed:`, e), await u.back());
        }));
  },
  G = async (e) => {
    await a(u.resolve(e));
  },
  K = async () => {
    (z(`close_window`), await j().hal.uiCloseWindow());
  },
  q = async () => {
    await j().hal.uiHideWindow();
  },
  J = async () => {
    window.addEventListener(`mouseup`, async (e) => {
      (e.button === 3 || e.button === 4) && e.preventDefault();
    });
  };
export {
  y as C,
  h as S,
  _ as T,
  D as _,
  U as a,
  T as b,
  B as c,
  P as d,
  L as f,
  j as g,
  z as h,
  q as i,
  I as l,
  F as m,
  K as n,
  W as o,
  R as p,
  J as r,
  G as s,
  H as t,
  N as u,
  E as v,
  b as w,
  w as x,
  C as y,
};
//# sourceMappingURL=navigation-D0fhxgIL.js.map
