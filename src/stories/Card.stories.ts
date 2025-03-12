import Card from '../components/Card.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
    title: 'Components/Card', // Le chemin dans Storybook
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        content: { control: 'text' },
        borderRadius: {
            control: { type: 'select' }, // On utilise un select au lieu d'un champ texte
            options: ['rounded-none', 'rounded', 'rounded-lg', 'rounded-full'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'Ma première card test',
        content: 'Ceci est un test de composant Storybook !',
        borderRadius: 'rounded-none',
    },
};

export const InteractiveTest: Story = {
    args: {
        title: 'Carte interactive',
        content: 'Clique sur le bouton pour changer le texte',
        borderRadius: 'rounded',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // 🔹 Sélectionner le bouton par son texte
        const button = await canvas.getByRole('button', { name: /Changer le texte/i });

        // 🔹 Simuler un clic
        await userEvent.click(button);

        // 🔹 Vérifier que le texte a changé après le clic
        const updatedText = await canvas.findByText(/Le texte a changé après un clic ! 🎉/i);
        expect(updatedText).toBeInTheDocument();
    },
};
