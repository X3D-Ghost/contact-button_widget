import { openBlock as a, createElementBlock as s, renderSlot as _, createVNode as C, createElementVNode as c, toDisplayString as m, ref as h, Fragment as $, renderList as x, normalizeClass as L, createCommentVNode as b, onMounted as D, mergeProps as M, createStaticVNode as E, withDirectives as y, vShow as k, createBlock as g, resolveDynamicComponent as j, unref as P, withCtx as v, createTextVNode as V, createSlots as W, pushScopeId as N, popScopeId as z, createApp as F } from "vue";
const f = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, Y = ["innerHTML"], A = {
  __name: "ContactIcon",
  props: {
    icon: String
  },
  setup(e) {
    const t = {
      vk: `<circle cx="25" cy="25" r="24" stroke="#B2B2B2"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.177 31.7173C26.177 31.7173 26.6101 31.6701 26.832 31.4362C27.0351 31.2219 27.028 30.8174 27.028 30.8174C27.028 30.8174 27.001 28.9289 27.8943 28.6501C28.7747 28.3758 29.9051 30.4764 31.1048 31.2841C32.011 31.8948 32.6989 31.7611 32.6989 31.7611L35.9046 31.7173C35.9046 31.7173 37.5809 31.6159 36.7862 30.322C36.7204 30.216 36.3225 29.3645 34.4033 27.6154C32.3925 25.7844 32.6625 26.0806 35.0829 22.9131C36.5573 20.9842 37.1465 19.8066 36.9622 19.3031C36.7873 18.8215 35.7027 18.9494 35.7027 18.9494L32.0943 18.9713C32.0943 18.9713 31.8267 18.9355 31.6283 19.0519C31.4346 19.166 31.309 19.4322 31.309 19.4322C31.309 19.4322 30.7385 20.9243 29.9767 22.1941C28.3697 24.8719 27.7276 25.0136 27.4647 24.8477C26.8531 24.4594 27.0057 23.2899 27.0057 22.4591C27.0057 19.8631 27.4072 18.7811 26.2251 18.5011C25.8331 18.4078 25.5443 18.3467 24.5407 18.3364C23.253 18.3237 22.1636 18.341 21.5462 18.6371C21.1353 18.8341 20.8184 19.2743 21.0121 19.2997C21.2504 19.3308 21.7904 19.4425 22.0768 19.8251C22.4465 20.3194 22.4336 21.4278 22.4336 21.4278C22.4336 21.4278 22.6461 24.4836 21.9371 24.8627C21.4511 25.1231 20.7844 24.5919 19.3511 22.1618C18.6175 20.9174 18.0634 19.5416 18.0634 19.5416C18.0634 19.5416 17.9566 19.2847 17.7653 19.1464C17.534 18.9793 17.2112 18.9275 17.2112 18.9275L13.7824 18.9494C13.7824 18.9494 13.2671 18.9632 13.0781 19.1833C12.9102 19.378 13.0652 19.7824 13.0652 19.7824C13.0652 19.7824 15.7498 25.9481 18.79 29.0556C21.5779 31.904 24.7426 31.7173 24.7426 31.7173H26.177Z" fill="#B2B2B2"></path>
        `,
      ok: `<circle cx="24" cy="25" r="24" stroke="#B2B2B2"></circle>
            <path d="M22.7935 28.9022C20.905 28.7108 19.1964 28.2542 17.7376 27.13C17.5527 26.9877 17.3679 26.8551 17.203 26.698C16.5585 26.0942 16.4986 25.402 17.0032 24.6902C17.4378 24.0815 18.1622 23.9195 18.9166 24.268C19.0665 24.3367 19.2064 24.4202 19.3363 24.5135C22.0641 26.3495 25.806 26.3986 28.5388 24.5969C28.8086 24.3907 29.0984 24.2238 29.4331 24.1404C30.0876 23.9735 30.6971 24.2091 31.0468 24.7687C31.4465 25.4118 31.4415 26.0353 30.9469 26.5311C30.1925 27.2969 29.2832 27.8468 28.274 28.2346C27.3148 28.5979 26.2707 28.7795 25.2365 28.9022C25.3914 29.0692 25.4663 29.1526 25.5612 29.2459C26.9651 30.6352 28.3789 32.0196 29.7828 33.4138C30.2624 33.885 30.3573 34.4741 30.0976 35.024C29.8078 35.6278 29.1683 36.0254 28.5338 35.9861C28.1341 35.9567 27.8194 35.7603 27.5446 35.4854C26.4855 34.4398 25.4014 33.4088 24.3622 32.3386C24.0624 32.0294 23.9126 32.0883 23.6478 32.3583C22.5786 33.4383 21.4945 34.4987 20.4054 35.5591C19.9158 36.0303 19.3313 36.1187 18.7617 35.8487C18.1572 35.5591 17.7725 34.9552 17.8025 34.3465C17.8225 33.9341 18.0273 33.615 18.3171 33.3352C19.706 31.9705 21.0998 30.6008 22.4837 29.2312C22.5786 29.1428 22.6636 29.0446 22.7935 28.9022Z" fill="#B2B2B2"></path>
            <path d="M23.9531 24.1453C20.5758 24.1354 17.803 21.3863 17.823 18.0579C17.843 14.7001 20.6108 11.9902 24.023 12C27.4402 12.0098 30.188 14.759 30.168 18.1512C30.153 21.4698 27.3653 24.16 23.9531 24.1453ZM27.0206 18.0677C27.0156 16.4183 25.6767 15.1026 24.003 15.1026C22.3094 15.1026 20.9605 16.4379 20.9755 18.1021C20.9855 19.7516 22.3344 21.0525 24.018 21.0476C25.6916 21.0427 27.0256 19.7172 27.0206 18.0677Z" fill="#B2B2B2"></path>
        `,
      dzen: `<circle cx="25" cy="25" r="24" stroke="#B2B2B2"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7572 13H22C17.7574 13 15.636 13 14.318 14.318C13 15.636 13 17.7574 13 22V24.7572C17.9364 24.7004 20.6993 24.3773 22.5383 22.5383C24.3773 20.6993 24.7004 17.9364 24.7572 13ZM13 25.4738V28C13 32.2426 13 34.364 14.318 35.682C15.636 37 17.7574 37 22 37H24.7543C24.6899 32.208 24.3484 29.5028 22.5383 27.6926C20.6993 25.8537 17.9364 25.5306 13 25.4738ZM25.4767 37H28C32.2426 37 34.364 37 35.682 35.682C37 34.364 37 32.2426 37 28V25.4767C32.208 25.5411 29.5028 25.8825 27.6926 27.6926C25.8825 29.5028 25.5411 32.208 25.4767 37ZM37 24.7542C32.208 24.6899 29.5028 24.3484 27.6926 22.5383C25.8537 20.6993 25.5306 17.9364 25.4738 13H28C32.2426 13 34.364 13 35.682 14.318C37 15.636 37 17.7574 37 22V24.7542Z" fill="#B2B2B2"></path>
        `,
      yt: `<circle cx="25" cy="25" r="24" stroke="#B2B2B2"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.3765 17.5175C35.4092 17.8022 36.2225 18.6412 36.4985 19.7067C37 21.6376 37 25.6667 37 25.6667C37 25.6667 37 29.6955 36.4985 31.6267C36.2225 32.6921 35.4092 33.5311 34.3765 33.816C32.505 34.3333 25 34.3333 25 34.3333C25 34.3333 17.495 34.3333 15.6234 33.816C14.5907 33.5311 13.7774 32.6921 13.5014 31.6267C13 29.6955 13 25.6667 13 25.6667C13 25.6667 13 21.6376 13.5014 19.7067C13.7774 18.6412 14.5907 17.8022 15.6234 17.5175C17.495 17 25 17 25 17C25 17 32.505 17 34.3765 17.5175ZM28.6 25.6668L22.6 21.6222V29.7111L28.6 25.6668Z" fill="#B2B2B2"></path>
        `,
      call: `<circle cx="25" cy="25" r="24" stroke="#B2B2B2"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3331 24.3334C21.6771 27.0691 23.2918 28.7318 25.9331 30.1334L28.1825 28.3741C28.4345 28.1131 28.8078 28.0261 29.1345 28.1421C30.1798 28.4998 31.3091 28.6931 32.4665 28.6931C32.9798 28.6931 33.3998 29.1281 33.3998 29.6598V33.0334C33.3998 33.5651 32.9798 34.0001 32.4665 34.0001C23.7025 34.0001 16.5998 26.6438 16.5998 17.5668C16.5998 17.0351 17.0198 16.6001 17.5331 16.6001H20.7998C21.3131 16.6001 21.7331 17.0351 21.7331 17.5668C21.7331 18.7751 21.9198 19.9351 22.2651 21.0178C22.3678 21.3561 22.2931 21.7331 22.0318 22.0038L20.3331 24.3334Z" fill="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"></path>
        `,
      "call-request": `<circle cx="25" cy="25" r="24" stroke="#B2B2B2"></circle>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3331 24.3334C21.6771 27.0691 23.2918 28.7318 25.9331 30.1334L28.1825 28.3741C28.4345 28.1131 28.8078 28.0261 29.1345 28.1421C30.1798 28.4998 31.3091 28.6931 32.4665 28.6931C32.9798 28.6931 33.3998 29.1281 33.3998 29.6598V33.0334C33.3998 33.5651 32.9798 34.0001 32.4665 34.0001C23.7025 34.0001 16.5998 26.6438 16.5998 17.5668C16.5998 17.0351 17.0198 16.6001 17.5331 16.6001H20.7998C21.3131 16.6001 21.7331 17.0351 21.7331 17.5668C21.7331 18.7751 21.9198 19.9351 22.2651 21.0178C22.3678 21.3561 22.2931 21.7331 22.0318 22.0038L20.3331 24.3334Z" fill="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M34.3533 17.6669C34.5486 17.4716 34.5486 17.1551 34.3533 16.9598C34.1581 16.7645 33.8415 16.7646 33.6462 16.9598L34.3533 17.6669ZM26.4999 24.3135C26.4999 24.5896 26.7237 24.8135 26.9999 24.8135L31.4999 24.8134C31.776 24.8134 31.9999 24.5895 31.9999 24.3134C31.9999 24.0373 31.776 23.8134 31.4999 23.8134L27.4999 23.8135L27.4998 19.8135C27.4998 19.5373 27.2759 19.3135 26.9998 19.3135C26.7237 19.3135 26.4998 19.5373 26.4998 19.8135L26.4999 24.3135ZM33.6462 16.9598L26.6463 23.9599L27.3534 24.667L34.3533 17.6669L33.6462 16.9598Z" fill="#B2B2B2"></path>
        `,
      ask: `<circle cx="25" cy="25" r="24" stroke="#B2B2B2"></circle>
            <path d="M35 36.25H15C14.3096 36.25 13.75 35.6904 13.75 35V15C13.75 14.3096 14.3096 13.75 15 13.75H28H35C35.6904 13.75 36.25 14.3096 36.25 15V22V35C36.25 35.6904 35.6904 36.25 35 36.25Z" fill="#B2B2B2" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M30.3334 19.6667L19.6667 30.3334M30.3334 19.6667H23.8148M30.3334 19.6667V25.5927" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        `
    };
    return (n, o) => (a(), s("svg", {
      width: "50",
      height: "50",
      class: "contact-widget__icon",
      viewBox: "0 0 50 50",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      innerHTML: t[e.icon]
    }, null, 8, Y));
  }
}, U = /* @__PURE__ */ f(A, [["__scopeId", "data-v-329eba39"]]);
const X = ["href", "title"], q = { class: "contact-link__text" }, O = {
  __name: "ContactLink",
  props: {
    label: String,
    href: String,
    type: String
  },
  setup(e) {
    return (t, n) => (a(), s("a", {
      href: e.href,
      target: "_blank",
      class: "feedback-type contact-link",
      title: e.label
    }, [
      _(t.$slots, "before-icon", {}, void 0, !0),
      _(t.$slots, "default", { class: "contact-link__icon" }, () => [
        C(U, { icon: e.type }, null, 8, ["icon"])
      ], !0),
      _(t.$slots, "after-icon", {}, void 0, !0),
      c("span", q, m(e.label), 1)
    ], 8, X));
  }
}, w = /* @__PURE__ */ f(O, [["__scopeId", "data-v-f87dbdd4"]]);
const G = { class: "contact-widget__tabs-wrapper" }, J = {
  key: 0,
  class: "contact-widget__tabs"
}, K = ["onClick"], Q = { class: "contact-widget__tab-content-wrapper" }, R = {
  __name: "ContactTabs",
  props: {
    tabs: Array,
    showTabs: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = h(0);
    return (n, o) => (a(), s("div", G, [
      e.showTabs ? (a(), s("div", J, [
        (a(!0), s($, null, x(e.tabs, (l, d) => (a(), s("button", {
          class: L(["contact-widget__tab", { "is-active": t.value === d }]),
          onClick: (p) => t.value = d
        }, m(l), 11, K))), 256))
      ])) : b("", !0),
      c("div", Q, [
        (a(!0), s($, null, x(e.tabs, (l, d) => (a(), s("div", {
          class: L(["contact-widget__tab-content", { "is-active": t.value === d }])
        }, [
          _(n.$slots, `content-${d}`, {}, void 0, !0)
        ], 2))), 256))
      ])
    ]));
  }
}, e2 = /* @__PURE__ */ f(R, [["__scopeId", "data-v-26e4ce83"]]);
const t2 = {
  id: "cw-popup",
  class: "contact-widget__popup popup-feedback popup-feedback-parent"
}, n2 = {
  __name: "ContactPopup",
  setup(e) {
    const t = h();
    return D(() => {
      n(document.getElementById("cw-popup"));
      function n(o) {
        let l = 0, d = 0, p = 0, r = 0;
        document.getElementById("cw-popup__header") ? document.getElementById("cw-popup__header").onmousedown = u : o.onmousedown = u;
        function u(i) {
          i = i || window.event, i.preventDefault(), p = i.clientX, r = i.clientY, document.onmouseup = T, document.onmousemove = Z;
        }
        function Z(i) {
          i = i || window.event, i.preventDefault(), l = p - i.clientX, d = r - i.clientY, p = i.clientX, r = i.clientY, o.style.top = o.offsetTop - d + "px", o.style.left = o.offsetLeft - l + "px";
        }
        function T() {
          document.onmouseup = null, document.onmousemove = null;
        }
      }
    }), (n, o) => (a(), s("div", t2, [
      c("div", {
        id: "cw-popup__header",
        class: "contact-widget__popup-header",
        ref: t.value,
        draggable: "true"
      }, [
        _(n.$slots, "header", {}, void 0, !0)
      ], 512),
      _(n.$slots, "default", {}, void 0, !0),
      _(n.$slots, "footer", {}, void 0, !0)
    ]));
  }
}, o2 = /* @__PURE__ */ f(n2, [["__scopeId", "data-v-cb169cad"]]);
const a2 = { class: "contact-input__wrapper" }, c2 = ["for"], l2 = ["id", "type"], s2 = ["id"], d2 = { class: "contact-input__caption" }, i2 = {
  __name: "ContactInput",
  props: {
    label: String,
    caption: String,
    type: String,
    id: String
  },
  setup(e) {
    return (t, n) => (a(), s("div", a2, [
      c("label", {
        for: e.id,
        class: "contact-input__label"
      }, m(e.label), 9, c2),
      e.type !== "textarea" ? (a(), s("input", M({ key: 0 }, t.$attrs, {
        id: e.id,
        type: e.type,
        class: "contact-input"
      }), null, 16, l2)) : b("", !0),
      e.type === "textarea" ? (a(), s("textarea", M({ key: 1 }, t.$attrs, {
        name: "",
        id: e.id,
        cols: "30",
        rows: "5",
        class: "contact-input contact-input_textarea"
      }), `
		`, 16, s2)) : b("", !0),
      c("span", d2, m(e.caption), 1)
    ]));
  }
}, B = /* @__PURE__ */ f(i2, [["__scopeId", "data-v-44ecd7a7"]]);
const r2 = { class: "contact-form__wrapper" }, u2 = {
  method: "post",
  class: "contact-form",
  novalidate: "novalidate"
}, _2 = /* @__PURE__ */ E('<div class="checkbox js-input js-parent-input-error" data-related-checkbox=".js-text-confirmation" data-v-d6baf611><input value="Y" type="checkbox" checked readonly data-v-d6baf611><label class="checkbox__label" for="callback-chx-4" data-v-d6baf611><span class="checkbox__text" data-v-d6baf611> Я даю согласие на обработку персональных данных </span></label><div class="input__message" data-v-d6baf611></div></div>', 1), p2 = { class: "btn-wrap" }, C2 = {
  class: "cw-button",
  id: "callback-submit",
  type: "submit"
}, v2 = {
  __name: "ContactForm",
  props: {
    buttonText: {
      type: String,
      default: "Отправить"
    }
  },
  setup(e) {
    const t = h({
      name: "",
      phone: "",
      message: ""
    });
    return (n, o) => (a(), s("div", r2, [
      c("form", u2, [
        C(B, {
          id: "contact-name",
          label: "Ваше имя",
          modelValue: t.value.name,
          "onUpdate:modelValue": o[0] || (o[0] = (l) => t.value.name = l)
        }, null, 8, ["modelValue"]),
        C(B, {
          id: "contact-phone",
          label: "Ваш Телефон",
          placeholder: "+7 (___) ___-__-__",
          modelValue: t.value.phone,
          "onUpdate:modelValue": o[1] || (o[1] = (l) => t.value.phone = l)
        }, null, 8, ["modelValue"]),
        C(B, {
          id: "contact-message",
          type: "textarea",
          label: "Ваше сообщение",
          modelValue: t.value.message,
          "onUpdate:modelValue": o[2] || (o[2] = (l) => t.value.message = l)
        }, null, 8, ["modelValue"]),
        _2,
        c("div", p2, [
          c("button", C2, m(e.buttonText), 1)
        ])
      ])
    ]));
  }
}, S = /* @__PURE__ */ f(v2, [["__scopeId", "data-v-d6baf611"]]);
const I = (e) => (N("data-v-ac13bb24"), e = e(), z(), e), f2 = /* @__PURE__ */ I(() => /* @__PURE__ */ c("svg", {
  width: "22",
  height: "21",
  viewBox: "0 0 22 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ c("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M22 3.25596C22 1.46296 20.548 0 18.744 0H3.25596C1.46296 0 0 1.45196 0 3.25596V12.7551C0 14.5481 1.45196 16.011 3.25596 16.011H17.6L21.1099 20.3896C21.4053 20.7582 22 20.5492 22 20.0768V3.25596ZM3.96973 6C3.96973 5.44772 4.41744 5 4.96973 5H16.9697C17.522 5 17.9697 5.44772 17.9697 6C17.9697 6.55228 17.522 7 16.9697 7H4.96973C4.41744 7 3.96973 6.55228 3.96973 6ZM4.96973 9C4.41744 9 3.96973 9.44771 3.96973 10C3.96973 10.5523 4.41744 11 4.96973 11H12.9697C13.522 11 13.9697 10.5523 13.9697 10C13.9697 9.44771 13.522 9 12.9697 9H4.96973Z",
    fill: "white"
  })
], -1)), h2 = { class: "contact-widget__header" }, m2 = { class: "contact-widget__body main-block main-block--policies js-main-policies" }, b2 = { class: "contact-widget__footer" }, g2 = /* @__PURE__ */ I(() => /* @__PURE__ */ c("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [
  /* @__PURE__ */ c("path", { d: "M2 1L1 2l21 21 1-1L2 1z" }),
  /* @__PURE__ */ c("path", { d: "M1 22l1 1L23 2l-1-1L1 22z" })
], -1)), w2 = [
  g2
], y2 = {
  __name: "ContactWidget",
  props: {
    socials: Array,
    widgetType: String,
    widgetStyle: {
      // type: String,
      default: "neomorphism"
    },
    needTabs: Boolean
  },
  setup(e) {
    const t = e, n = h(!1);
    h(1);
    const o = t.widgetType === "popup" && o2, l = [
      "Написать",
      "Позвонить",
      "Соц сети"
    ], d = h(null);
    return (p, r) => (a(), s("div", {
      class: L(["contact-widget", `style_${e.widgetStyle}`])
    }, [
      y(c("button", {
        class: "contact-button",
        onClick: r[0] || (r[0] = (u) => n.value = !n.value)
      }, [
        _(p.$slots, "button_content", {}, () => [
          f2
        ], !0)
      ], 512), [
        [k, !n.value]
      ]),
      y((a(), g(j(P(o)), null, {
        header: v(() => [
          c("div", h2, [
            _(p.$slots, "header", {}, () => [
              V(" Связь с нами ")
            ], !0)
          ])
        ]),
        footer: v(() => [
          c("div", b2, [
            _(p.$slots, "footer", {}, () => [
              V(" Сделано разработчиком ")
            ], !0)
          ])
        ]),
        default: v(() => [
          c("div", m2, [
            y(C(e2, { tabs: l }, W({
              "content-0": v(() => [
                C(w, {
                  label: "Задать вопрос",
                  type: "ask",
                  onClick: r[1] || (r[1] = (u) => d.value = "call")
                })
              ]),
              "content-1": v(() => [
                C(w, {
                  href: "tel:88003330999",
                  label: "Позвонить",
                  type: "call"
                }),
                C(w, {
                  label: "Заказать обратный звонок",
                  type: "call-request",
                  onClick: r[2] || (r[2] = (u) => d.value = "message")
                })
              ]),
              _: 2
            }, [
              e.socials ? {
                name: "content-2",
                fn: v(() => [
                  (a(!0), s($, null, x(e.socials, (u) => (a(), g(w, {
                    href: u.url,
                    label: u.title,
                    type: u.type
                  }, {
                    default: v(() => [
                      _(p.$slots, `social-${u.type}`, {}, void 0, !0)
                    ]),
                    _: 2
                  }, 1032, ["href", "label", "type"]))), 256))
                ]),
                key: "0"
              } : void 0
            ]), 1536), [
              [k, !d.value]
            ]),
            d.value === "call" ? (a(), g(S, {
              key: 0,
              class: "contact-widget__form"
            })) : b("", !0),
            d.value === "message" ? (a(), g(S, {
              key: 1,
              class: "contact-widget__form"
            })) : b("", !0)
          ]),
          c("button", {
            class: "popup__close close-feedback contact-widget__button_close",
            onClick: r[3] || (r[3] = (u) => n.value = !1)
          }, w2)
        ]),
        _: 3
      }, 512)), [
        [k, n.value]
      ])
    ], 2));
  }
}, H = /* @__PURE__ */ f(y2, [["__scopeId", "data-v-ac13bb24"]]), k2 = {
  install: (e, t) => {
    if (console.log("contactWidgetPlugin"), e.component("contact-widget", H, t), t.needMount) {
      const n = document.createElement("div");
      e.mount(n), document.body.appendChild(n), F(H, t).mount(t.rootContainer || n);
    }
  }
};
window.contactWidgetPlugin = k2;
export {
  H as ContactWidget,
  k2 as contactWidgetPlugin,
  k2 as default
};
