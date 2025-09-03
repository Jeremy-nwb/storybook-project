import { d as defineComponent, h as computed, c as createElementBlock, t as toDisplayString, i as normalizeStyle, n as normalizeClass, o as openBlock } from "./iframe-hqsTQ9Ar.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    label: {},
    primary: { type: Boolean, default: false },
    size: {},
    backgroundColor: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const classes = computed(() => ({
      "storybook-button": true,
      "storybook-button--primary": props.primary,
      "storybook-button--secondary": !props.primary,
      [`storybook-button--${props.size || "medium"}`]: true
    }));
    const style = computed(() => ({
      backgroundColor: props.backgroundColor
    }));
    const onClick = () => {
      emit("click", 1);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(classes.value),
        onClick,
        style: normalizeStyle(style.value)
      }, toDisplayString(_ctx.label), 7);
    };
  }
});
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Button", "description": "", "tags": {}, "props": [{ "name": "label", "description": "The label of the button", "required": true, "type": { "name": "string" } }, { "name": "primary", "description": "primary or secondary button", "required": false, "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "size", "description": "size of the button", "required": false, "type": { "name": "union", "elements": [{ "name": '"small"' }, { "name": '"medium"' }, { "name": '"large"' }] } }, { "name": "backgroundColor", "description": "background color of the button", "required": false, "type": { "name": "string" } }], "events": [{ "name": "click", "type": { "names": ["number"] } }], "sourceFiles": ["/home/runner/work/storybook-project/storybook-project/src/stories/Button.vue"] };
export {
  _sfc_main as _
};
