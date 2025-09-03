var _a, _b, _c, _d, _e, _f;
import { _ as _sfc_main } from "./Header-BL0xQgAw.js";
import "./iframe-hqsTQ9Ar.js";
import "./preload-helper-BbOs9S9B.js";
import "./Button-Brt7ZDSc.js";
const { fn } = __STORYBOOK_MODULE_TEST__;
const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Example/Header",
  component: _sfc_main,
  render: (args) => ({
    components: {
      MyHeader: _sfc_main
    },
    setup() {
      return {
        args
      };
    },
    template: '<my-header :user="args.user" />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen"
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn()
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"]
};
const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe"
    }
  }
};
const LoggedOut = {
  args: {
    user: null
  }
};
LoggedIn.parameters = {
  ...LoggedIn.parameters,
  docs: {
    ...(_a = LoggedIn.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",
      ...(_c = (_b = LoggedIn.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  docs: {
    ...(_d = LoggedOut.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    user: null\n  }\n}",
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
