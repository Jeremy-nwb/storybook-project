import { _ as _sfc_main } from "./Button-CHmi8Ysk.js";
import "./iframe-BuF6-a_E.js";
import "./preload-helper-DChMlIcJ.js";
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
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...Secondary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    primary: false,\n    label: 'Button'\n  }\n}",
      ...Secondary.parameters?.docs?.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Button',\n    size: 'large'\n  }\n}",
      ...Large.parameters?.docs?.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...Small.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Button',\n    size: 'small'\n  }\n}",
      ...Small.parameters?.docs?.source
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
