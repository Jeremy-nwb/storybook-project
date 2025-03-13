import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y'
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  viteFinal: (config) => {
    // Assurez-vous que `base` est bien configuré pour fonctionner avec GitHub Pages
    config.base = '/storybook-project/'; // Remplace par ton propre dépôt
    return config;
  }
};
export default config;
