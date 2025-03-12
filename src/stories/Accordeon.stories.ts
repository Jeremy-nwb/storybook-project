import Accordeon from '../components/Accordeon.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Accordeon> = {
    title: 'Components/Accordeon', // Le chemin dans Storybook
    component: Accordeon,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Accordeon>;

export const Default: Story = {
    args: {
        title: 'Titre',
        content: 'Content accordéon',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // 🔹 Sélectionner le bouton de l'accordéon (par son texte)
        const button = await canvas.getByRole('button', { name: /Titre/i });

        // 🔹 Vérifier que le contenu est caché par défaut
        const content = canvas.getByText(/Content accordéon/i);
        const contentWrapper = content.closest('div'); // Récupère le premier parent <div>
        expect(contentWrapper).toHaveStyle('display: none');

        // 🔹 Simuler un clic pour ouvrir l'accordéon
        await userEvent.click(button);

        // 🔹 Vérifier que le contenu est maintenant visible
        expect(content).toHaveStyle('display: block');

        // 🔹 Vérifier que l'icône du chevron a tourné (rotation de 180°)
        const chevronIcon = canvasElement.querySelector('.w-6.h-6');
        expect(chevronIcon).toHaveClass('rotate-180');

        // 🔹 Simuler un autre clic pour fermer l'accordéon
        await userEvent.click(button);

        // 🔹 Vérifier que le contenu est de nouveau caché
        expect(contentWrapper).toHaveStyle('display: none');

        // 🔹 Vérifier que l'icône du chevron est revenu à sa position d'origine
        expect(chevronIcon).not.toHaveClass('rotate-180');
    },
};
