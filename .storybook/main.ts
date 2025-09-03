import type { StorybookConfig } from '@storybook/vue3-vite';

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
        if (configType === 'PRODUCTION') {
            // On garde la configuration de base
            config.base = '/storybook-project/';

            // On ajoute cette nouvelle configuration pour forcer les chemins relatifs
            config.build = {
                ...config.build,
                assetsDir: '', // Les assets seront à la racine du build
            };
        }
        return config;
    }
};
export default config;
