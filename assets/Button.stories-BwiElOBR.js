var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { _ as _sfc_main } from "./Button-Brt7ZDSc.js";
import "./iframe-hqsTQ9Ar.js";
import "./preload-helper-BbOs9S9B.js";
const { fn } = __STORYBOOK_MODULE_TEST__;
const meta = {
  title: "Example/Button",
  component: _sfc_main,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"]
    },
    backgroundColor: {
      control: "color"
    }
  },
  args: {
    primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn()
  }
};
const Primary = {
  args: {
    primary: true,
    label: "Button"
  }
};
const Secondary = {
  args: {
    primary: false,
    label: "Button"
  }
};
const Large = {
  args: {
    label: "Button",
    size: "large"
  }
};
const Small = {
  args: {
    label: "Button",
    size: "small"
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...(_d = Secondary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    primary: false,\n    label: 'Button'\n  }\n}",
      ...(_f = (_e = Secondary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...(_g = Large.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Button',\n    size: 'large'\n  }\n}",
      ...(_i = (_h = Large.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...(_j = Small.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Button',\n    size: 'small'\n  }\n}",
      ...(_l = (_k = Small.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Secondary", "Large", "Small"];
export {
  Large,
  Primary,
  Secondary,
  Small,
  __namedExportsOrder,
  meta as default
};
