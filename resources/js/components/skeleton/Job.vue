<script setup>
import { PhotographIcon } from "@heroicons/vue/solid";

const items = [1, 2, 3, 4];
</script>
<template>
    <div class="animate-pulse">
        <div class="space-y-3 py-8">
            <div
                v-for="item in items"
                :key="item"
                class="flex items-center rounded bg-gray-100 shadow"
            >
                <div class="mx-auto h-16 w-16 overflow-hidden">
                    <PhotographIcon class="h-full w-full text-gray-200" />
                </div>
                <div class="flex w-5/6 flex-col items-start justify-center p-6">
                    <div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div>
                    <div
                        class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"
                    ></div>
                    <div class="flex w-full items-center justify-between">
                        <div
                            class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"
                        ></div>
                        <div
                            class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
