import { _ as _sfc_main } from "./Header-DGKNzgsv.js";
import "./iframe-BuF6-a_E.js";
import "./preload-helper-DChMlIcJ.js";
import "./Button-CHmi8Ysk.js";
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
    ...LoggedIn.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",
      ...LoggedIn.parameters?.docs?.source
    }
  }
};
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  docs: {
    ...LoggedOut.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    user: null\n  }\n}",
      ...LoggedOut.parameters?.docs?.source
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
