<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    title: string;
    content: string;
    borderRadius?: string;
}>();

const dynamicContent = ref('Changer le texte');
const changeContent = () => {
    dynamicContent.value = 'Le texte a changé après un clic ! 🎉';
};
</script>

<template>
    <div
        class="shadow-md bg-white overflow-hidden"
        :class="borderRadius"
    >
        <h2 class="text-xl font-bold px-4 py-3 bg-gray-100">{{ title }}</h2>
        <div class="text-gray-600 p-4 flex gap-2 flex-col">
            <div>
                {{ content }}
            </div>
            <div>
                <button
                    @click="changeContent"
                    class="px-4 py-2 bg-blue-500 text-white rounded"
                    type="button"
                >
                    {{ dynamicContent }}
                </button>
            </div>
        </div>
    </div>
</template>
