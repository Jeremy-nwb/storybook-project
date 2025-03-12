<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

// 🔹 Définition des props pour personnaliser le titre et le contenu
defineProps({
    title: String,
    content: String,
});

// 🔹 Gère l'état d'ouverture/fermeture
const isOpen = ref(false);

// 🔹 Fonction pour basculer l'état de l'accordéon
const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="border rounded-lg overflow-hidden shadow-md">
        <button
            @click="toggleAccordion"
            class="w-full flex gap-4 justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
            type="button"
        >
            <p class="font-semibold">{{ title }}</p>
            <ChevronDownIcon :class="['w-6 h-6 transition-transform', { 'rotate-180': isOpen }]" />
        </button>

        <div
            v-show="isOpen"
            class="p-4 border-t bg-white"
        >
            <p>{{ content }}</p>
        </div>
    </div>
</template>
