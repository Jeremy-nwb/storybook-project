var _a, _b, _c, _d, _e, _f;
import { d as defineComponent, r as ref, c as createElementBlock, o as openBlock, j as createVNode, b as createStaticVNode } from "./iframe-hqsTQ9Ar.js";
import { _ as _sfc_main$1 } from "./Header-BL0xQgAw.js";
import "./preload-helper-BbOs9S9B.js";
import "./Button-Brt7ZDSc.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Page",
  setup(__props) {
    const user = ref(null);
    const onLogin = () => {
      user.value = { name: "Jane Doe" };
    };
    const onLogout = () => {
      user.value = null;
    };
    const onCreateAccount = () => {
      user.value = { name: "Jane Doe" };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", null, [
        createVNode(_sfc_main$1, {
          user: user.value,
          onLogin,
          onLogout,
          onCreateAccount
        }, null, 8, ["user"]),
        _cache[0] || (_cache[0] = createStaticVNode('<section class="storybook-page"><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a> . Read more in the <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a> . </p><div class="tip-wrapper"><span class="tip">Tip</span> Adjust the width of the canvas with the <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg> Viewports addon in the toolbar </div></section>', 1))
      ]);
    };
  }
});
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Page", "description": "", "tags": {}, "sourceFiles": ["/home/runner/work/storybook-project/storybook-project/src/stories/Page.vue"] };
const { expect, userEvent, within } = __STORYBOOK_MODULE_TEST__;
const meta = {
  title: "Example/Page",
  component: _sfc_main,
  render: () => ({
    components: {
      MyPage: _sfc_main
    },
    template: "<my-page />"
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen"
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"]
};
const LoggedIn = {
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole("button", {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
};
const LoggedOut = {};
LoggedIn.parameters = {
  ...LoggedIn.parameters,
  docs: {
    ...(_a = LoggedIn.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  play: async ({\n    canvasElement\n  }: any) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",
      ...(_c = (_b = LoggedIn.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  docs: {
    ...(_d = LoggedOut.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{}",
      ...(_f = (_e = LoggedOut.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["LoggedIn", "LoggedOut"];
export {
  LoggedIn,
  LoggedOut,
  __namedExportsOrder,
  meta as default
};
