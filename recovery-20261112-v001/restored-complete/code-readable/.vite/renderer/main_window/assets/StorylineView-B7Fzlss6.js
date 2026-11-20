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
      (e._sentryDebugIds[t] = `48abdc24-f3d0-4d42-b090-91ed63a83242`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-48abdc24-f3d0-4d42-b090-91ed63a83242`));
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
      (e._sentryDebugIds[t] = `15d7970d-9097-4646-b5c0-22480da974f6`),
      (e._sentryDebugIdIdentifier = `sentry-dbid-15d7970d-9097-4646-b5c0-22480da974f6`));
  })();
} catch {}
import { Hr as e, Wr as t, t as n } from "./vendor-CsyOLyP3.js";
import {
  C as r,
  D as i,
  E as a,
  G as o,
  M as s,
  N as c,
  O as l,
  R as u,
  T as d,
  U as f,
  V as p,
  W as m,
  X as h,
  Y as g,
  ct as _,
  gt as v,
  h as y,
  ht as b,
  i as ee,
  k as x,
  lt as S,
  s as C,
  vt as w,
  y as T,
  z as E,
} from "./vue-B7Je9h0e.js";
import { t as D } from "./_plugin-vue_export-helper-DVftEge0.js";
import {
  a as te,
  b as ne,
  c as re,
  h as ie,
  o as ae,
  v as O,
  x as k,
} from "./navigation-D0fhxgIL.js";
import {
  i as oe,
  n as se,
  o as ce,
  r as le,
  t as ue,
} from "./game-BTLGP1Kl.js";
import { t as de } from "./LoadingAnimation-CDiD_LAm.js";
import { n as fe } from "./media-CGyxac_o.js";
import { t as A } from "./PageNavBar-CQM5miev.js";
import { t as j } from "./BtnWithImg-C29tj1UA.js";
import { n as M, t as pe } from "./关闭高亮-BoZrBZEA.js";
import { t as me } from "./preload-BwqIQoQP.js";
const N = [
  {
    老皇帝的认可度: { max: 3, min: 0, default: 0 },
    司空正的愧疚: { max: 1, min: 0, default: 0 },
  },
  {
    老皇帝的认可度: { max: 5, min: -2, default: 0 },
    司空正的愧疚: { max: 4, min: -3, default: 0 },
  },
  { 祖坤好感度: { max: 8, min: -1, default: 0 } },
  { 军心: { max: 3, min: 0, default: 0 } },
  {},
  { 军心: { max: 5, min: 0, default: 0 } },
  {},
  {},
];
var P = { class: `progress-bar` },
  he = D(
    c({
      __name: `ProgressBar`,
      props: { normalSrc: String, highlightedSrc: String, ratio: Number },
      setup(e) {
        T((e) => ({
          v07c9518e: n.value,
          v09d2b782: i.value,
          v05fcee55: r.value,
        }));
        let t = e,
          n = d(() => `url(${t.normalSrc})`),
          r = d(() => `url(${t.highlightedSrc})`),
          i = d(() => (t.ratio || 0) * 100 + `%` || `auto`);
        return (e, t) => (
          m(),
          x(`div`, P, [...(t[0] ||= [a(`div`, { class: `bar` }, null, -1)])])
        );
      },
    }),
    [[`__scopeId`, `data-v-010da313`]],
  ),
  ge = `` + new URL(`说明页面-BOVzz24f.webp`, import.meta.url).href,
  F = { class: `about vertical` },
  I = { class: `nav horizontal` },
  L = { class: `content-frame` },
  R = [`src`],
  z = D(
    c({
      __name: `Help`,
      emits: [`close`],
      setup(e, { emit: t }) {
        let n = t,
          { t: r } = C();
        return (e, t) => (
          m(),
          x(`div`, F, [
            a(`div`, I, [
              a(`h1`, null, w(b(r)(`ui.storyline_help`)), 1),
              (t[1] ||= a(`div`, { class: `separator` }, null, -1)),
              s(
                j,
                {
                  "normal-src": b(M),
                  "highlighted-src": b(pe),
                  onClick: (t[0] ||= (e) => n(`close`)),
                },
                null,
                8,
                [`normal-src`, `highlighted-src`],
              ),
            ]),
            a(`div`, L, [
              a(
                `img`,
                {
                  src: b(ge),
                  "aria-label": `Boss does not care about accessibility`,
                },
                null,
                8,
                R,
              ),
            ]),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-0c89a143`]],
  ),
  B = `data:image/webp;base64,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`,
  V = `` + new URL(`章节跳转-CnplLAXm.webp`, import.meta.url).href,
  H = `` + new URL(`章节跳转高亮-C4aFIkT2.webp`, import.meta.url).href,
  U = `` + new URL(`角标-BXwCAxQM.svg`, import.meta.url).href,
  W = `` + new URL(`金色-Jj2Umjps.webp`, import.meta.url).href,
  G = `` + new URL(`银色-D3xylvFS.webp`, import.meta.url).href,
  _e = D(
    c({
      __name: `EndingAnchor`,
      props: {
        x: { type: Number, default: 0 },
        y: { type: Number, default: 0 },
        disabled: { type: Boolean, default: !1 },
        icon: { type: String, default: `bronze` },
      },
      emits: [`click`, `pointerenter`],
      setup(e, { emit: t }) {
        T((e) => ({
          v404cfe36: i.value,
          v404cfe34: a.value,
          v007d0ef8: u.value,
        }));
        let n = t,
          r = e,
          i = d(() => `${r.x}px`),
          a = d(() => `${r.y}px`),
          o = d(() => {
            switch (r.icon) {
              case `bronze`:
                return B;
              case `silver`:
                return G;
              case `gold`:
                return W;
              case `chapter-in`:
                return V;
              case `chapter-out`:
                return V;
              default:
                return U;
            }
          }),
          c = d(() => {
            switch (r.icon) {
              case `bronze`:
                return B;
              case `silver`:
                return G;
              case `gold`:
                return W;
              case `chapter-in`:
                return H;
              case `chapter-out`:
                return H;
              default:
                return U;
            }
          }),
          l = d(() => r.icon === `chapter-out`),
          u = d(() => {
            switch (r.icon) {
              case `bronze`:
                return `translate(-50%, -50%)`;
              case `chapter-in`:
                return `translate(-90%, -50%)`;
              case `chapter-out`:
                return `translate(-10%, -50%)`;
              default:
                return `translate(-50%, -50%)`;
            }
          }),
          f = async () => {
            r.disabled || n(`click`);
          },
          p = async () => {
            r.disabled || n(`pointerenter`);
          };
        return (e, t) => (
          m(),
          x(
            `div`,
            {
              class: v([`storylet-anchor`, { disabled: r.disabled }]),
              onClickPassive: f,
              onPointerenterPassive: p,
            },
            [
              s(
                j,
                {
                  "normal-src": o.value,
                  "highlighted-src": c.value,
                  invert: l.value,
                  width: `6em`,
                  height: `6em`,
                },
                null,
                8,
                [`normal-src`, `highlighted-src`, `invert`],
              ),
            ],
            34,
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-7bae4197`]],
  ),
  K = `` + new URL(`点-D4Z2mVCy.svg`, import.meta.url).href,
  q = [`src`],
  ve = D(
    c({
      __name: `StoryletAnchorWithoutPreview`,
      props: {
        x: { type: Number, default: 0 },
        y: { type: Number, default: 0 },
        disabled: { type: Boolean, default: !1 },
      },
      emits: [`click`, `pointerenter`],
      setup(e, { emit: t }) {
        T((e) => ({ v994acd00: i.value, v994accfe: o.value }));
        let n = t,
          r = e,
          i = d(() => `${r.x}px`),
          o = d(() => `${r.y}px`),
          s = d(() =>
            r.disabled ? `storylet-anchor disabled` : `storylet-anchor`,
          ),
          c = async () => {
            r.disabled || n(`click`);
          },
          l = async () => {
            r.disabled || n(`pointerenter`);
          };
        return (e, t) => (
          m(),
          x(
            `div`,
            { class: v(s.value), onClickPassive: c, onPointerenterPassive: l },
            [a(`img`, { src: b(K) }, null, 8, q)],
            34,
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-1ebb7079`]],
  ),
  ye = `` + new URL(`color_bar_1-7vm64O7A.webp`, import.meta.url).href,
  be = `` + new URL(`祥云-CdsvXEc0.webp`, import.meta.url).href,
  J = [`src`],
  Y = { class: `preview` },
  X = [`src`],
  xe = [`src`],
  Z = { class: `title` },
  Se = D(
    c({
      __name: `StoryletAnchorWithPreview`,
      props: {
        x: { type: Number, default: 0 },
        y: { type: Number, default: 0 },
        title: { type: String, default: `` },
        disabledTitle: { type: String, default: `` },
        imageUrl: { type: String, default: ye },
        icon: { type: String, default: `` },
        keyNode: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
      },
      emits: [`click`, `pointerenter`],
      setup(e, { emit: t }) {
        T((e) => ({ v02960b25: s.value, v02960b26: c.value }));
        let n = t,
          r = e,
          i = { normal: U, silver: G, gold: W },
          o = d(() => i[r.icon] || null),
          s = d(() => `${r.x}px`),
          c = d(() => `${r.y}px`),
          u = async () => {
            r.disabled || n(`click`);
          },
          f = async () => {
            r.disabled || n(`pointerenter`);
          };
        return (e, t) => (
          m(),
          x(
            `div`,
            {
              class: v([`btn-storylet`, { disabled: r.disabled }]),
              onClickPassive: u,
              onPointerenterPassive: f,
            },
            [
              o.value
                ? (m(),
                  x(
                    `img`,
                    { key: 0, src: o.value, class: `ending-icon` },
                    null,
                    8,
                    J,
                  ))
                : l(``, !0),
              a(`div`, Y, [
                a(`img`, { src: r.imageUrl, class: `preview` }, null, 8, X),
                r.keyNode
                  ? (m(),
                    x(
                      `img`,
                      { key: 0, src: b(be), class: `key-icon` },
                      null,
                      8,
                      xe,
                    ))
                  : l(``, !0),
              ]),
              a(`div`, Z, w(r.disabled ? r.disabledTitle : r.title), 1),
            ],
            34,
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-06663579`]],
  ),
  Ce = class extends EventTarget {
    _paddingXRatio;
    _paddingYRatio;
    _minScale = 1;
    _maxScale = 1.6;
    _defaultScale = 1;
    _scaleFactor = 1;
    _dragCursorCSS = `grab`;
    _container;
    _containerWidth = 0;
    _containerHeight = 0;
    _containerOriginalCursor = `auto`;
    _element;
    _elementWidth = 0;
    _elementHeight = 0;
    _elementScale = 1;
    _elementOriginalCursor = `auto`;
    _resizeListener;
    _animatable;
    _pointerEventCache = [];
    _pointerEventProcessingPaused = !1;
    _dragCenterX = 0;
    _dragCenterY = 0;
    _pointerDown = !1;
    _dragThresholdPx = 3;
    _dragStartEvent = new Event(`dragstart`);
    _dragEndEvent = new Event(`dragend`);
    _inDrag = !1;
    get inDrag() {
      return this._inDrag;
    }
    set inDrag(e) {
      this._inDrag !== e &&
        ((this._inDrag = e),
        e
          ? this.dispatchEvent(this._dragStartEvent)
          : this.dispatchEvent(this._dragEndEvent));
    }
    _inResize = !1;
    _resizeLength = 0;
    constructor(e, t, r = 0, i = 0) {
      (super(),
        (this._paddingXRatio = r),
        (this._paddingYRatio = i),
        (this._container = t),
        (this._container.onresize = this._updateContainerSize.bind(this)),
        this._updateContainerSize(),
        (this._container.style.touchAction = `none`),
        this._container.addEventListener(
          `selectstart`,
          this._onSelectStart.bind(this),
        ),
        this._container.addEventListener(
          `pointerdown`,
          this._onPointerDeviceDown.bind(this),
        ),
        this._container.addEventListener(
          `pointermove`,
          this._onPointerDeviceMove.bind(this),
        ),
        this._container.addEventListener(
          `pointerleave`,
          this._onPointerDeviceUp.bind(this),
        ),
        this._container.addEventListener(
          `pointerup`,
          this._onPointerDeviceUp.bind(this),
        ),
        this._container.addEventListener(
          `pointercancel`,
          this._onPointerDeviceUp.bind(this),
        ),
        this._container.addEventListener(
          `pointerover`,
          this._onHover.bind(this),
        ),
        this._container.addEventListener(`wheel`, this._onWheel.bind(this), {
          passive: !0,
        }),
        (this._element = e),
        (this._element.style.transformOrigin = `top left`),
        (this._element.onresize = this._updateElementSize.bind(this)),
        this._updateElementSize(),
        (this._animatable = n(this._element, {
          x: { duration: 0 },
          y: { duration: 0 },
          scale: { duration: 0 },
        })),
        this._updateScaleFactor(),
        this.setScaleAbsolute(this._defaultScale),
        (this._resizeListener = this._onWindowResize.bind(this)),
        globalThis.addEventListener(`resize`, this._resizeListener));
    }
    async _updateScaleFactor() {
      let e = this._scaleFactor,
        t = Math.max(
          this._containerWidth / this._elementWidth,
          this._containerHeight / this._elementHeight,
        );
      t === 1 / 0 ||
        t === 0 ||
        ((this._scaleFactor = t),
        (this._minScale = (this._minScale / e) * this._scaleFactor),
        (this._defaultScale = (this._defaultScale / e) * this._scaleFactor),
        this._animatable && this.setScaleAbsolute(this._elementScale));
    }
    async _updateContainerSize() {
      ((this._containerWidth = this._container.clientWidth),
        (this._containerHeight = this._container.clientHeight),
        await this._updateScaleFactor());
    }
    async _updateElementSize() {
      ((this._elementWidth = this._element.clientWidth),
        (this._elementHeight = this._element.clientHeight),
        await this._updateScaleFactor());
    }
    async _onWindowResize() {
      (await this._updateElementSize(), await this._updateContainerSize());
    }
    _hardLimitX(e) {
      let t = this._paddingXRatio * this._elementWidth,
        n = t,
        r =
          this._containerWidth -
          (this._elementWidth - 2 * t) * this._elementScale;
      return Math.max(Math.min(e, n), r);
    }
    _hardLimitY(e) {
      let t = this._paddingYRatio * this._elementHeight,
        n = t,
        r =
          this._containerHeight -
          (this._elementHeight - 2 * t) * this._elementScale;
      return Math.max(Math.min(e, n), r);
    }
    _onRelease() {
      (this.setXRelative(0), this.setYRelative(0));
    }
    get AnimeJsAnimatable() {
      return this._animatable;
    }
    setXAbsolute(e) {
      this._animatable.x(this._hardLimitX(e));
    }
    setXRelative(e) {
      e !== 0 && this.setXAbsolute(this._animatable.x() + e);
    }
    setYAbsolute(e) {
      this._animatable.y(this._hardLimitY(e));
    }
    setYRelative(e) {
      e !== 0 && this.setYAbsolute(this._animatable.y() + e);
    }
    _hardLimitScale(e) {
      return Math.max(this._minScale, Math.min(this._maxScale, e));
    }
    setScaleAbsolute(e) {
      ((this._elementScale = this._hardLimitScale(e)),
        this._animatable.scale(this._elementScale));
    }
    setScaleRelative(e, t = 0, n = 0) {
      if (e === 0) return;
      let r = this._elementScale,
        i = r * Math.exp(e * 0.1);
      (this.setScaleAbsolute(i),
        this.setXRelative((-t * (this._elementScale - r)) / this._elementScale),
        this.setYRelative(
          (-n * (this._elementScale - r)) / this._elementScale,
        ));
    }
    async _onSelectStart(e) {
      e.preventDefault();
    }
    async _onWheel(e) {
      let t = 0;
      ((e.deltaY < 0 || e.deltaZ < 0) && (t = 1),
        (e.deltaY > 0 || e.deltaZ > 0) && (t = -1));
      let n = e.deltaX,
        r = 1;
      switch (e.deltaMode) {
        case WheelEvent.DOM_DELTA_PIXEL:
          r = 1 / 3;
          break;
        case WheelEvent.DOM_DELTA_LINE:
          r = 1;
          break;
        case WheelEvent.DOM_DELTA_PAGE:
          r = 3;
          break;
      }
      let i = this._element.getBoundingClientRect(),
        a = e.clientX - i.left,
        o = e.clientY - i.top;
      (this.setScaleRelative(t * r, a, o), this.setXRelative(-n * r));
    }
    _getStyle(e, t) {
      let n = globalThis.getComputedStyle(e)[t];
      for (; !n && ((e = e.parentElement), e); )
        n = globalThis.getComputedStyle(e)[t];
      return n;
    }
    async _onPointerDeviceDown(e) {
      (this._pointerEventCache.length === 0 &&
        ((this._containerOriginalCursor = this._getStyle(
          this._container,
          `cursor`,
        )),
        (this._container.style.cursor = this._dragCursorCSS),
        (this._elementOriginalCursor = this._getStyle(this._element, `cursor`)),
        (this._element.style.cursor = this._dragCursorCSS)),
        this._pointerEventCache.push(e),
        (this._pointerDown = !0),
        (this._dragCenterX = e.clientX),
        (this._dragCenterY = e.clientY));
      let t = e.target;
      t?.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId);
    }
    async _onPointerDeviceMove(e) {
      if (!this._pointerDown || this._pointerEventProcessingPaused) return;
      let t = e.clientX - this._dragCenterX,
        n = e.clientY - this._dragCenterY;
      (this.setXRelative(t),
        this.setYRelative(n),
        (this._dragCenterX = e.clientX),
        (this._dragCenterY = e.clientY),
        (Math.abs(t) > this._dragThresholdPx ||
          Math.abs(n) > this._dragThresholdPx) &&
          (this.inDrag = !0));
    }
    async _onPointerDeviceUp(e) {
      let t = this._pointerEventCache.findIndex(
        (t) => t.pointerId === e.pointerId,
      );
      (t !== -1 && this._pointerEventCache.splice(t, 1),
        this._pointerEventCache.length === 0 &&
          ((this._pointerDown = !1),
          (this.inDrag = !1),
          (this._container.style.cursor = this._containerOriginalCursor),
          (this._element.style.cursor = this._elementOriginalCursor)));
    }
    async _onPointerDeviceLeave(e) {
      this._pointerEventProcessingPaused = !0;
    }
    async _onPointerDeviceEnter(e) {
      this._pointerEventProcessingPaused = !1;
    }
    async _onHover(e) {}
    stop() {
      (globalThis.removeEventListener(`resize`, this._resizeListener),
        this._animatable.revert());
    }
    setCenter(e, t) {
      (this.setXAbsolute(this._containerWidth / 2 - e * this._elementScale),
        this.setYAbsolute(this._containerHeight / 2 - t * this._elementScale));
    }
  },
  we = `` + new URL(`0-BZ3A8zb8.svg`, import.meta.url).href,
  Te = `` + new URL(`1-C2RGVoPy.svg`, import.meta.url).href,
  Ee = `` + new URL(`2-me1vNRp0.svg`, import.meta.url).href,
  De = `` + new URL(`3-Cj2tqi2W.svg`, import.meta.url).href,
  Oe = `` + new URL(`4-y0lvZXWn.svg`, import.meta.url).href,
  ke = `` + new URL(`5-DCCQnmhR.svg`, import.meta.url).href,
  Ae = `` + new URL(`6-DTbIrXqH.svg`, import.meta.url).href,
  je = `` + new URL(`7-5_j-nu5T.svg`, import.meta.url).href,
  Me = `` + new URL(`0-CEM8arE3.jpg`, import.meta.url).href,
  Ne = `` + new URL(`1-CI4KGX4J.jpg`, import.meta.url).href,
  Pe = `` + new URL(`2-FYkbUHI0.jpg`, import.meta.url).href,
  Fe = `` + new URL(`3-CCcnffp3.jpg`, import.meta.url).href,
  Ie = `` + new URL(`4-B0X82W_m.jpg`, import.meta.url).href,
  Le = `` + new URL(`5-B4nNNWVQ.jpg`, import.meta.url).href,
  Re = `` + new URL(`6-CPlsjnh-.jpg`, import.meta.url).href,
  ze = `` + new URL(`7-DTtA-VA5.jpg`, import.meta.url).href,
  Be = { ref: `bounding-box`, class: `bounding-box` },
  Ve = { ref: `background`, class: `background` },
  He = `fill:none;fill-rule:nonzero;stroke:#918375;stroke-width:2px;filter:drop-shadow(0 0 5px #edb26b);`,
  Ue = `
  <defs>
    <linearGradient id="possibleTimelineLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#918375FF"/>
      <stop offset="90%" stop-color="#91837500"/>
    </linearGradient>
  </defs>
`,
  We = `fill:none;fill-rule:nonzero;stroke:url(#possibleTimelineLineGradient);stroke-width:2px;filter:drop-shadow(0 0 5px #edb26b);`,
  Q = D(
    c({
      __name: `StorylineMap`,
      props: { chapterId: { type: Number, required: !0 } },
      setup(n, { expose: c }) {
        T((e) => ({ v3aab4aba: A.value }));
        let l = {
            "/src/assets/images/storylines/0.svg": we,
            "/src/assets/images/storylines/1.svg": Te,
            "/src/assets/images/storylines/2.svg": Ee,
            "/src/assets/images/storylines/3.svg": De,
            "/src/assets/images/storylines/4.svg": Oe,
            "/src/assets/images/storylines/5.svg": ke,
            "/src/assets/images/storylines/6.svg": Ae,
            "/src/assets/images/storylines/7.svg": je,
          },
          ee = {
            "/src/assets/images/storylines/0.jpg": Me,
            "/src/assets/images/storylines/1.jpg": Ne,
            "/src/assets/images/storylines/2.jpg": Pe,
            "/src/assets/images/storylines/3.jpg": Fe,
            "/src/assets/images/storylines/4.jpg": Ie,
            "/src/assets/images/storylines/5.jpg": Le,
            "/src/assets/images/storylines/6.jpg": Re,
            "/src/assets/images/storylines/7.jpg": ze,
          },
          w = {};
        for (let [e, t] of Object.entries(l)) {
          let n = e.match(/\/(\d+)\.svg$/);
          if (n) {
            let e = Number(n[1]);
            Number.isNaN(e) || (w[e] = t);
          }
        }
        let D = {};
        for (let [e, t] of Object.entries(ee)) {
          let n = e.match(/\/(\d+)\.jpg$/);
          if (n) {
            let e = Number(n[1]);
            Number.isNaN(e) || (D[e] = t);
          }
        }
        let A = d(() => `url(${D[P.chapterId]})`),
          { t: j } = C(),
          M = ue(),
          { chapterCurrentVideo: pe } = e(M),
          N = fe(),
          P = n,
          he = (e) =>
            `res://chapter${O(e)}_neutral/node_thumbnails/${ne(e)}.webp`,
          ge = (e) => {
            (e.documentElement.setAttribute(`buffered-rendering`, `static`),
              e.documentElement.setAttribute(
                `color-rendering`,
                `optimizeSpeed`,
              ),
              e.documentElement.setAttribute(
                `shape-rendering`,
                `optimizeSpeed`,
              ),
              e.documentElement.setAttribute(`text-rendering`, `optimizeSpeed`),
              e.documentElement.setAttribute(
                `image-rendering`,
                `optimizeSpeed`,
              ));
          },
          F = S([]),
          I = S([]),
          L = S([]),
          R = new DOMParser(),
          z = g(`bounding-box`),
          B = g(`storyline`),
          V = g(`nodes`),
          H = g(`background`),
          U = null,
          W = _(!1),
          G = _(!1),
          K = async () => {
            G.value = !0;
          },
          q = async () => {
            await y(async () => {
              G.value = !1;
            }, 100)();
          },
          ye = t({}, { mode: `client` }),
          be = async (e) => {
            let t = await fetch(e);
            if (!t.ok)
              throw Error(`Failed to fetch ${e}: ${t.status} ${t.statusText}`);
            return await t.text();
          },
          J = async (e) => {
            if (Number.isNaN(e)) return;
            if (
              ((W.value = !1),
              await Y(),
              !z.value || !B.value || !V.value || !H.value)
            )
              throw Error(`refs not ready`);
            let t = ``,
              n = w[e];
            if (n) t = await be(n);
            else {
              console.error(`No storyline SVG found for chapter`, e);
              return;
            }
            let r = R.parseFromString(t, `image/svg+xml`);
            (ge(r),
              r.documentElement.appendChild(
                R.parseFromString(Ue, `image/svg+xml`).documentElement,
              ),
              r.querySelectorAll(`circle, ellipse`).forEach((e) => {
                let t = e.parentElement?.id;
                if (!t) {
                  (console.debug(`Malformed anchor id:`, e.parentElement || e),
                    e.parentElement?.removeChild(e));
                  return;
                }
                switch (e.getAttribute(`fill`)) {
                  case `#FF0000`:
                    {
                      let n = k(t),
                        r = {
                          x: parseFloat(e.getAttribute(`cx`) || `0`),
                          y: parseFloat(e.getAttribute(`cy`) || `0`),
                          id: n,
                          title: ``,
                          imageUrl: ``,
                          icon: `bronze`,
                          disabled: !0,
                          keyNode: oe(n),
                        };
                      M.watchedVideos.includes(n) && I.push(r);
                    }
                    break;
                  case `#00FFAA`:
                    {
                      let n = O(t),
                        r = !M.chapterUnlocked[n],
                        i = {
                          x: parseFloat(e.getAttribute(`cx`) || `0`),
                          y: parseFloat(e.getAttribute(`cy`) || `0`),
                          id: t,
                          title: ``,
                          imageUrl: ``,
                          icon: `chapter-in`,
                          keyNode: !1,
                          disabled: r,
                        };
                      r || L.push(i);
                    }
                    break;
                  case `#FF00EA`:
                    {
                      let n = O(t),
                        r = !M.chapterUnlocked[n],
                        i = {
                          x: parseFloat(e.getAttribute(`cx`) || `0`),
                          y: parseFloat(e.getAttribute(`cy`) || `0`),
                          id: t,
                          title: ``,
                          imageUrl: ``,
                          icon: `chapter-out`,
                          keyNode: !1,
                          disabled: r,
                        };
                      r || L.push(i);
                    }
                    break;
                  default:
                    break;
                }
                e.parentElement?.removeChild(e);
              }),
              r.querySelectorAll(`text`).forEach((e) => {
                let t = e,
                  n = e.firstChild;
                n && (t = n);
                let r = k(t.textContent),
                  i = ne(t.textContent),
                  a = ce(i),
                  o = {
                    x: parseFloat(t.getAttribute(`x`) || `0`),
                    y: parseFloat(t.getAttribute(`y`) || `0`),
                    id: r,
                    title: j(`nodes.${i}.title`),
                    imageUrl: he(i),
                    icon: a || `bronze`,
                    disabled: !M.rewindableVideos.includes(r),
                    keyNode: oe(r),
                  };
                (M.watchedVideos.includes(r) &&
                  (a === `bronze` ? L.push(o) : F.push(o)),
                  e.parentElement?.removeChild(e));
              }),
              me(
                F.map((e) => e.imageUrl),
                ye,
              ),
              r.querySelectorAll(`path`).forEach((e) => {
                let t = (e.getAttribute(`serif:id`) || e.id)
                  .toLowerCase()
                  .split(`,`, 2)
                  .map(k);
                if (t.length < 2) {
                  console.debug(`Malformed line id:`, e);
                  return;
                }
                t.reduce(
                  (e, t) => e && M.videosOnCurrentTimeline.includes(t),
                  !0,
                )
                  ? ((e.style = He), e.removeAttribute(`serif:id`))
                  : t.reduce((e, t) => e && M.watchedVideos.includes(t), !0)
                    ? e.removeAttribute(`serif:id`)
                    : M.videosOnCurrentTimeline.includes(t[0])
                      ? ((e.style = We), e.removeAttribute(`serif:id`))
                      : e.parentElement?.removeChild(e);
              }),
              (H.value.innerHTML = r.documentElement.outerHTML),
              (U = new Ce(B.value, z.value)),
              U.addEventListener(`dragstart`, K),
              U.addEventListener(`dragend`, q),
              await Z(),
              (W.value = !0),
              await E());
          },
          Y = async () => {
            ((W.value = !1),
              await E(),
              await re(300),
              (U &&=
                (U.removeEventListener(`dragstart`, K),
                U.removeEventListener(`dragend`, q),
                await U.stop(),
                null)),
              F.splice(0, F.length),
              I.splice(0, I.length),
              L.splice(0, L.length));
          };
        (h(
          () => P.chapterId,
          async (e, t) => {
            e !== t && (await J(e));
          },
        ),
          f(async () => {
            await J(P.chapterId);
          }),
          p(async () => {
            await Y();
          }));
        let X = async (e) => {
            let t = F.find((t) => t.id === e);
            return (
              (t ||= I.find((t) => t.id === e)),
              (t ||= L.find((t) => t.id === e)),
              t
            );
          },
          xe = async (e) => {
            let t = await X(e);
            if (!t) {
              let n = se(e);
              if (!n) {
                console.error(`Failed to get storyletId from videoId`, e);
                return;
              }
              let r = le(n) || [];
              for (let e of r) if (((t = await X(e)), t)) break;
            }
            t
              ? U?.setCenter(t.x, t.y)
              : console.debug(`No anchor found for videoId`, e);
          },
          Z = async () => {
            let e = pe.value[P.chapterId];
            if (((e ||= F[0]?.id), !e)) {
              console.debug(`No storylet to move to`);
              return;
            }
            await xe(e);
          };
        c({ moveToCurrentVideo: Z });
        let Q = async (e) => {
            G.value ||
              (N.setUiEffectAudio1(`音效3`),
              await Y(),
              e.startsWith(`chapter`)
                ? await te(`/chapters/${O(e)}`, !0)
                : (ie(`navigate_to_storylet`, {
                    chapter: P.chapterId,
                    node: e,
                  }),
                  await ae(`/player`, async () => {
                    await M.rewindSave(e);
                  })));
          },
          $ = async () => {
            G.value || N.setUiEffectAudio1(`音效11`);
          };
        return (e, t) => (
          m(),
          x(
            `div`,
            Be,
            [
              a(
                `div`,
                {
                  ref_key: `storyline`,
                  ref: B,
                  class: v([`storyline`, { hidden: !W.value }]),
                },
                [
                  a(
                    `div`,
                    { ref_key: `nodes`, ref: V, class: `nodes` },
                    [
                      (m(!0),
                      x(
                        r,
                        null,
                        o(
                          b(F),
                          (e) => (
                            m(),
                            i(
                              Se,
                              u({ key: e.id }, { ref_for: !0 }, e, {
                                onClick: (t) => Q(e.id),
                                onPointerenter: $,
                              }),
                              null,
                              16,
                              [`onClick`],
                            )
                          ),
                        ),
                        128,
                      )),
                      (m(!0),
                      x(
                        r,
                        null,
                        o(
                          b(I),
                          (e) => (
                            m(),
                            i(
                              ve,
                              u({ key: e.id }, { ref_for: !0 }, e, {
                                onPointerenter: $,
                              }),
                              null,
                              16,
                            )
                          ),
                        ),
                        128,
                      )),
                      (m(!0),
                      x(
                        r,
                        null,
                        o(
                          b(L),
                          (e) => (
                            m(),
                            i(
                              _e,
                              u({ key: e.id }, { ref_for: !0 }, e, {
                                onClick: (t) => Q(e.id),
                                onPointerenter: $,
                              }),
                              null,
                              16,
                              [`onClick`],
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    512,
                  ),
                  a(`div`, Ve, null, 512),
                ],
                2,
              ),
              a(
                `div`,
                { class: v([`loading vertical`, { hidden: W.value }]) },
                [s(de)],
                2,
              ),
            ],
            512,
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-00e1dfae`]],
  ),
  $ = { class: `storyline-value-display` },
  Ge = { key: 0 },
  Ke = { class: `value` },
  qe = D(
    c({
      __name: `StorylineValueDisplay`,
      props: { chapterId: { type: Number, required: !0 } },
      setup(e) {
        let { t } = C(),
          n = e;
        return (e, i) => (
          m(),
          x(`div`, $, [
            a(`table`, null, [
              a(`tbody`, null, [
                Object.keys(b(N)[n.chapterId] ?? {}).length > 0
                  ? (m(), x(`tr`, Ge, ` 本章节请留意： `))
                  : l(``, !0),
                (m(!0),
                x(
                  r,
                  null,
                  o(
                    b(N)[n.chapterId],
                    (e, n) => (
                      m(),
                      x(`tr`, { key: n }, [
                        a(`td`, Ke, w(b(t)(`values.${n}`)), 1),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-a8b35cbb`]],
  ),
  Je = `data:image/webp;base64,UklGRrwGAABXRUJQVlA4WAoAAAAQAAAAbgAAbgAAQUxQSA8CAAABkFXbbt1aG4IgCIohFIIhmEHDoGaQMKgZ5DDwZaAyEAR99JXY0n19RcQEYGy+lLp2EXsW2e+1JILTqdzVjtV7Sd5QXtXO1XsmP9Jdbcg1uUBXtXEl82x0VRt85ZnoqjbhjacpanNKniN1m1d4PLrZ3NfRuNvswkMVtfm1DHQzH6+j0G5e7jQEd/NTeAAW81T4NBbzVfgkFvNW+BQS87fTGbt5vJ9wNZ9vhxXzuhzE6pbyMWJ+dzriap7fDmDzPX0nzvWvsnlfvmBxT+mzm/m/fMQWoNInWwS2fMAWotK7HIMt7yQIfZMsyvRqC+P+gixMpacch+WnFsj6pIEogGSRJqCEUoAWSgM0FAVZrJyCuZRgSg2mtmDWPZj+CEbCsf8pH8FIOD2Yny2YVoOpJZhyCSZxMAQNRYEWSgNKKAVIoSQAGogCwBZIe8qB5CfSOOgJLYwVL1MY6RU0CMHbJYj8jjQGfoclhBUfkkbAn2AJoOJjUveEP0NxL+Pb7pzg6+Qcf4fq2oIDqTsmOJTVLeVjUNwqOLo6teD43aUfnEjdIaEzwOKOMM5lcUYYZ7O4IozzWRzpjBFpd+OHMOjiRMW4RR3QgpFZpuuMwZfJKmF4lol6wpRZJtGCWbnOoAthYt5G04UwOWcZSBeCh2kbQ1uCm5SbnqRbJjibStODtJUEpymV2n4ejxePx6+tlgtjbABWUDgghgQAABAZAJ0BKm8AbwA+kTqbSKWjIqElVA44sBIJZQDJ+DmsxOFqBDnTsd/1kjZvRbw/BzSRzUfH79a8A5BlvocvD9uPcwSj1jABfcwVBDhPonLw8wDASg0nAL0qGIlNwYn0Ye2EgVpx6wv3Yg7yH6hQNigFWJCqiWD2gsLB/5KYTIu79LaUANd6//W421ypwB6PJ7Bbrr7Xo9uzZQ8uF5QkrKuKL2Ioq7vE7NCfE5JXSA4YlIB+htEnCOGuHv/dFoJ4w1JX6LtHBEF3b0/7mDk1mKQAAP77nNsD/3lEk76kHJz63+MBf6V5w10lp6uFOdVjcMAnP2PJPbnEc7/69LsvqbgsKoDUh/8gmcnQagOnHdc2E3Cj6+3sJP08E0XSiZ2LcJv2pfCnafCyirsQg2tiZ+H37XSaOHnvZKvLvyZO2ZR3KPP1VBWQA+oJ9VVn/IIOocD95FcYdNC7PryCZGSRNz7ldyQ6V3v6oSaBxKJ1rL9DD7LoQMvkQlYAZzcTJKIVefTWuedydlHpANS4FIDy7l+alvv985NwhAUtkSLiQUUPS0IrOdN1uYIU2oVdedpGC8JA0UjG4YrmioHKLqyzVLnQhgsX6VgGm8ypAdkm3VTApmv4+4tmkh9MzqxzkBQ+hgfKd6YaE8ppBOrIDFQkFPTnPEe0qfcYPM/k/aqIpw/3DRbDek1h58NEVbEplDrqD9lzKaTofW2gtfWgc7T3JExdBNovCUNGCLkt/jLGzqZAPWOfLKRn3CGy5MWLhsCuiY4dFDOr5RcdDlUtfg6QfS173a3GF6JZn4kKWblv/U8gtyNrqGmMppF/L9mjmAyMRk3S+fhe8eCqI8nkU1AmWbYVGUxbJ/3ttu8GLGs+/8k5Mjx84M2l0k48ha0636vhwNidr0teNAZnkrQ1I3n3xUvSXkmRj8bmloZhCFCySly+CmITgj2arIcMQwB6or4zTQAVoBNWNAXsGTPYOwmK3U3dQK+YX/kzP47+GkUns/3iE1Gaxd1y3II5KbpAfmItzIWTfR3Xqanm9xETtfbqBDe6UdO1ZbJtliqKDx9ZZzuu9B53q9sY5YK0HaTGBbRMK15/jtwPEwauLdA9Z4A8GeHydYuvuXWiGHV4wBQ5gwr172hZpD6Lb6upWErkFCT4Bh875srpOowHaPFn1H+hePCpQMDklHnUuIFwRJHcGMfryWqE/XAX/N8BX2RsCroETANblL41yURq2Amn/bzOyu1Lfkmogxy7VNfZAnHH2Qc/YRjQ9H9BpRw+9wu0jOcMz4MHHRyPXXs9RFaJmbasGIm7s5UpejbQOdMDlYPouqCaA4GTBCQUAAQPKjjML1RlHupxF9gJH9J5zCOGQz/RIquF8PpwdTTzHAVE1MF/bwPK0v/DFwE/o/uZKM/q8t0JCSPWJlckmE3zXx0Z+aYQ3jgr5EDlg0rxoSCnkQId8Ni57bWbCVbpRKVKP+UAfPOcXNN+S+KgbAXB3IeMFtJUAHI/giIleDF0QDnSYFco1ybyl4CYQDDiYe57/7wQf+7m0/49O4AAAA==`,
  Ye = `data:image/webp;base64,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`,
  Xe = `data:image/webp;base64,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`,
  Ze = `data:image/webp;base64,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`,
  Qe = `` + new URL(`进度条-BIhCdlL3.webp`, import.meta.url).href,
  $e = `` + new URL(`进度条底色-DU6ZDwJf.webp`, import.meta.url).href,
  et = { class: `game ui-font` },
  tt = { class: `overlay` },
  nt = { key: 0, class: `value-display` },
  rt = { class: `controls vertical` },
  it = { class: `buttons horizontal` },
  at = { key: 0, class: `progress` },
  ot = { class: `small` },
  st = { key: 0, class: `progress-bar` },
  ct = { key: 1, class: `help` },
  lt = D(
    c({
      __name: `StorylineView`,
      setup(t) {
        let { t: n } = C(),
          r = ee(),
          { chapterUnlocked: i, chapterProgress: o } = e(ue()),
          c = d(() => parseInt(r.params.id)),
          u = async () => {
            Number.isNaN(c.value) ||
              i.value[c.value] ||
              (console.warn(
                `Attempted to access locked chapter ${c.value}, redirecting to chapter selection`,
              ),
              te(`/chapters`));
          };
        (f(async () => {
          await u();
        }),
          h(c, async () => {
            await u();
          }));
        let p = g(`map`),
          v = async () => {
            await p.value?.moveToCurrentVideo();
          },
          y = _(!1),
          S = async () => {
            y.value = !0;
          },
          T = async () => {
            y.value = !1;
          };
        return (e, t) => (
          m(),
          x(`div`, et, [
            s(A, { location: `/chapters` }),
            s(Q, { ref_key: `map`, ref: p, "chapter-id": c.value }, null, 8, [
              `chapter-id`,
            ]),
            a(`div`, tt, [
              (m(),
              x(`div`, nt, [
                s(qe, { "chapter-id": c.value }, null, 8, [`chapter-id`]),
              ])),
              a(`div`, rt, [
                a(`div`, it, [
                  s(
                    j,
                    {
                      "normal-src": b(Xe),
                      "highlighted-src": b(Ze),
                      height: `1ic`,
                      onClick: v,
                    },
                    null,
                    8,
                    [`normal-src`, `highlighted-src`],
                  ),
                  s(
                    j,
                    {
                      "normal-src": b(Je),
                      "highlighted-src": b(Ye),
                      height: `1ic`,
                      onClick: S,
                    },
                    null,
                    8,
                    [`normal-src`, `highlighted-src`],
                  ),
                  (t[0] ||= a(`div`, { class: `separator` }, null, -1)),
                  (m(),
                  x(`div`, at, [
                    a(`span`, ot, w(b(n)(`ui.current_progress`)), 1),
                    a(
                      `span`,
                      null,
                      w(((b(o)[c.value] || 0) * 100).toFixed(0)) + `%`,
                      1,
                    ),
                  ])),
                ]),
                (m(),
                x(`div`, st, [
                  s(
                    he,
                    {
                      "normal-src": b($e),
                      "highlighted-src": b(Qe),
                      ratio: b(o)[c.value],
                    },
                    null,
                    8,
                    [`normal-src`, `highlighted-src`, `ratio`],
                  ),
                ])),
              ]),
              y.value ? (m(), x(`div`, ct, [s(z, { onClose: T })])) : l(``, !0),
            ]),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-a858bc9b`]],
  );
export { lt as default };
//# sourceMappingURL=StorylineView-B7Fzlss6.js.map
