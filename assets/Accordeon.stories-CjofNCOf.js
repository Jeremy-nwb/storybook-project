import { c as createElementBlock, o as openBlock, a as createBaseVNode, d as defineComponent, r as ref, w as withDirectives, j as createVNode, t as toDisplayString, n as normalizeClass, u as unref, v as vShow } from "./iframe-BuF6-a_E.js";
import { w as within, e as expect, u as userEvent } from "./index-DmOD_NYz.js";
import "./preload-helper-DChMlIcJ.js";
import "./_commonjsHelpers-C7MPfNLY.js";
import "./index-BdOSk9or.js";
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _hoisted_1 = { class: "border rounded-lg overflow-hidden shadow-md" };
const _hoisted_2 = { class: "font-semibold" };
const _hoisted_3 = { class: "p-4 border-t bg-white" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Accordeon",
  props: {
    title: String,
    content: String
  },
  setup(__props) {
    const isOpen = ref(false);
    const toggleAccordion = () => {
      isOpen.value = !isOpen.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("button", {
          onClick: toggleAccordion,
          class: "w-full flex gap-4 justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition cursor-pointer",
          type: "button"
        }, [
          createBaseVNode("p", _hoisted_2, toDisplayString(__props.title), 1),
          createVNode(unref(render), {
            class: normalizeClass(["w-6 h-6 transition-transform", { "rotate-180": isOpen.value }])
          }, null, 8, ["class"])
        ]),
        withDirectives(createBaseVNode("div", _hoisted_3, [
          createBaseVNode("p", null, toDisplayString(__props.content), 1)
        ], 512), [
          [vShow, isOpen.value]
        ])
      ]);
    };
  }
});
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Accordeon", "description": "", "tags": {}, "props": [{ "name": "title", "type": { "name": "string" } }, { "name": "content", "type": { "name": "string" } }], "sourceFiles": ["/home/runner/work/storybook-project/storybook-project/src/components/Accordeon.vue"] };
const meta = {
  title: "Components/Accordeon",
  // Le chemin dans Storybook
  component: _sfc_main,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text"
    },
    content: {
      control: "text"
    }
  }
};
const Default = {
  args: {
    title: "Titre",
    content: "Content accordéon"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: /Titre/i
    });
    const content = canvas.getByText(/Content accordéon/i);
    const contentWrapper = content.closest("div");
    expect(contentWrapper).toHaveStyle("display: none");
    await userEvent.click(button);
    expect(content).toHaveStyle("display: block");
    const chevronIcon = canvasElement.querySelector(".w-6.h-6");
    expect(chevronIcon).toHaveClass("rotate-180");
    await userEvent.click(button);
    expect(contentWrapper).toHaveStyle("display: none");
    expect(chevronIcon).not.toHaveClass("rotate-180");
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Titre',\n    content: 'Content accordéon'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // 🔹 Sélectionner le bouton de l'accordéon (par son texte)\n    const button = await canvas.getByRole('button', {\n      name: /Titre/i\n    });\n\n    // 🔹 Vérifier que le contenu est caché par défaut\n    const content = canvas.getByText(/Content accordéon/i);\n    const contentWrapper = content.closest('div'); // Récupère le premier parent <div>\n    expect(contentWrapper).toHaveStyle('display: none');\n\n    // 🔹 Simuler un clic pour ouvrir l'accordéon\n    await userEvent.click(button);\n\n    // 🔹 Vérifier que le contenu est maintenant visible\n    expect(content).toHaveStyle('display: block');\n\n    // 🔹 Vérifier que l'icône du chevron a tourné (rotation de 180°)\n    const chevronIcon = canvasElement.querySelector('.w-6.h-6');\n    expect(chevronIcon).toHaveClass('rotate-180');\n\n    // 🔹 Simuler un autre clic pour fermer l'accordéon\n    await userEvent.click(button);\n\n    // 🔹 Vérifier que le contenu est de nouveau caché\n    expect(contentWrapper).toHaveStyle('display: none');\n\n    // 🔹 Vérifier que l'icône du chevron est revenu à sa position d'origine\n    expect(chevronIcon).not.toHaveClass('rotate-180');\n  }\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Default"];
export {
  Default,
  __namedExportsOrder,
  meta as default
};
