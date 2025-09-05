import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        '@storybook/addon-a11y',
        "@storybook/addon-docs"
    ],
    framework: {
        "name": "@storybook/vue3-vite",
        "options": {}
    },
    async viteFinal(config, { configType }) {
        if (configType === 'PRODUCTION') {
            return mergeConfig(config, {
                // On dit à Vite de générer tous les chemins de manière relative ('./')
                // C'est la méthode la plus fiable pour un déploiement sur GitHub Pages.
                base: './',

                // (Optionnel) On peut garder la minification désactivée pour l'instant
                // pour faciliter le débogage. Vous pourrez la réactiver (en enlevant
                // la section 'build') une fois que tout fonctionnera.
                build: {
                    minify: false,
                    target: 'es2020',
                }
            });
        }
        return config;
    }
};
export default config;
