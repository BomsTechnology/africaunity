<script setup>
import { useRoute } from "vue-router";
import { PhotographIcon } from "@heroicons/vue/solid";

const items = [1, 2, 3, 4, 5, 6];
</script>
<template>
    <div class="animate-pulse">
        <div
            class="grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-2 lg:grid-cols-4"
        >
            <div
                v-for="item in items"
                :key="item"
                class="h-80 rounded bg-gray-100 shadow"
            >
                <div class="mx-auto h-44 w-32 overflow-hidden">
                    <PhotographIcon class="h-full w-full text-gray-200" />
                </div>
                <div class="flex flex-col items-start justify-center p-6">
                    <div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div>
                    <div
                        class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"
                    ></div>
                    <div
                        class="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200"
                    ></div>
                    <div
                        class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
