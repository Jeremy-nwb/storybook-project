import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    "stories": [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        '@storybook/addon-a11y',
        "@storybook/addon-docs"
    ],
    "framework": {
        "name": "@storybook/vue3-vite",
        "options": {}
    },
    async viteFinal(config, { configType }) {
        // Applique le chemin de base uniquement pour le build de PRODUCTION
        if (configType === 'PRODUCTION') {
            return mergeConfig(config, {
                base: '/storybook-project/',
            });
        }
        return config;
    }
};
export default config;
