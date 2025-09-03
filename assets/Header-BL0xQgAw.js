import { d as defineComponent, c as createElementBlock, a as createBaseVNode, b as createStaticVNode, e as createCommentVNode, f as createBlock, g as createTextVNode, t as toDisplayString, o as openBlock } from "./iframe-hqsTQ9Ar.js";
import { _ as _sfc_main$1 } from "./Button-Brt7ZDSc.js";
const _hoisted_1 = { class: "storybook-header" };
const _hoisted_2 = {
  key: 0,
  class: "welcome"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  props: {
    user: {}
  },
  emits: ["createAccount", "login", "logout"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[5] || (_cache[5] = createStaticVNode('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>', 1)),
          createBaseVNode("div", null, [
            _ctx.user ? (openBlock(), createElementBlock("span", _hoisted_2, [
              _cache[3] || (_cache[3] = createTextVNode("Welcome, ", -1)),
              createBaseVNode("b", null, toDisplayString(_ctx.user.name), 1),
              _cache[4] || (_cache[4] = createTextVNode("!", -1))
            ])) : createCommentVNode("", true),
            _ctx.user ? (openBlock(), createBlock(_sfc_main$1, {
              key: 1,
              size: "small",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("logout")),
              label: "Log out"
            })) : createCommentVNode("", true),
            !_ctx.user ? (openBlock(), createBlock(_sfc_main$1, {
              key: 2,
              size: "small",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("login")),
              label: "Log in"
            })) : createCommentVNode("", true),
            !_ctx.user ? (openBlock(), createBlock(_sfc_main$1, {
              key: 3,
              primary: "",
              size: "small",
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("createAccount")),
              label: "Sign up"
            })) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Header", "description": "", "tags": {}, "props": [{ "name": "user", "required": true, "type": { "name": "union", "elements": [{ "name": "{ name: string }" }, { "name": "null" }] } }], "events": [{ "name": "logout" }, { "name": "login" }, { "name": "createAccount" }], "sourceFiles": ["/home/runner/work/storybook-project/storybook-project/src/stories/Header.vue"] };
export {
  _sfc_main as _
};
