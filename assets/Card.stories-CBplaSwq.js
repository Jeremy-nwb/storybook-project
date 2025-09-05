var _a, _b, _c, _d, _e, _f;
import { d as defineComponent, r as ref, c as createElementBlock, a as createBaseVNode, t as toDisplayString, n as normalizeClass, o as openBlock } from "./iframe-DqFFGcXv.js";
import { w as within, u as userEvent, e as expect } from "./index-D1MQ82HR.js";
import "./preload-helper-BbOs9S9B.js";
import "./_commonjsHelpers-C7MPfNLY.js";
import "./index-BdOSk9or.js";
const _hoisted_1 = { class: "text-xl font-bold px-4 py-3 bg-gray-100" };
const _hoisted_2 = { class: "text-gray-600 p-4 flex gap-2 flex-col" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    title: {},
    content: {},
    borderRadius: {}
  },
  setup(__props) {
    const dynamicContent = ref("Changer le texte");
    const changeContent = () => {
      dynamicContent.value = "Le texte a changé après un clic ! 🎉";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["shadow-md bg-white overflow-hidden", _ctx.borderRadius])
      }, [
        createBaseVNode("h2", _hoisted_1, toDisplayString(_ctx.title), 1),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, toDisplayString(_ctx.content), 1),
          createBaseVNode("div", null, [
            createBaseVNode("button", {
              onClick: changeContent,
              class: "px-4 py-2 bg-blue-500 text-white rounded",
              type: "button"
            }, toDisplayString(dynamicContent.value), 1)
          ])
        ])
      ], 2);
    };
  }
});
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Card", "description": "", "tags": {}, "props": [{ "name": "title", "required": true, "type": { "name": "string" } }, { "name": "content", "required": true, "type": { "name": "string" } }, { "name": "borderRadius", "required": false, "type": { "name": "string" } }], "sourceFiles": ["/home/runner/work/storybook-project/storybook-project/src/components/Card.vue"] };
const meta = {
  title: "Components/Card",
  // Le chemin dans Storybook
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text"
    },
    content: {
      control: "text"
    },
    borderRadius: {
      control: {
        type: "select"
      },
      // On utilise un select au lieu d'un champ texte
      options: ["rounded-none", "rounded", "rounded-lg", "rounded-full"]
    }
  }
};
const Default = {
  args: {
    title: "Ma première card test",
    content: "Ceci est un test de composant Storybook !",
    borderRadius: "rounded-none"
  }
};
const InteractiveTest = {
  args: {
    title: "Carte interactive",
    content: "Clique sur le bouton pour changer le texte",
    borderRadius: "rounded"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: /Changer le texte/i
    });
    await userEvent.click(button);
    const updatedText = await canvas.findByText(/Le texte a changé après un clic ! 🎉/i);
    expect(updatedText).toBeInTheDocument();
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Ma première card test',\n    content: 'Ceci est un test de composant Storybook !',\n    borderRadius: 'rounded-none'\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
InteractiveTest.parameters = {
  ...InteractiveTest.parameters,
  docs: {
    ...(_d = InteractiveTest.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Carte interactive',\n    content: 'Clique sur le bouton pour changer le texte',\n    borderRadius: 'rounded'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // 🔹 Sélectionner le bouton par son texte\n    const button = await canvas.getByRole('button', {\n      name: /Changer le texte/i\n    });\n\n    // 🔹 Simuler un clic\n    await userEvent.click(button);\n\n    // 🔹 Vérifier que le texte a changé après le clic\n    const updatedText = await canvas.findByText(/Le texte a changé après un clic ! 🎉/i);\n    expect(updatedText).toBeInTheDocument();\n  }\n}",
      ...(_f = (_e = InteractiveTest.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "InteractiveTest"];
export {
  Default,
  InteractiveTest,
  __namedExportsOrder,
  meta as default
};
