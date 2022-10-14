<script setup>
import { PhotoIcon } from "@heroicons/vue/24/solid";
const items = [1, 2, 3];
</script>
<template>
    <div class="w-full animate-pulse space-x-3 p-4 lg:flex">
        <div class="h-[400px] bg-gray-100 lg:w-1/2">
            <PhotoIcon class="h-full w-full text-gray-200" />
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-1/2">
            <div
                v-for="item in items"
                :key="item"
                class="rounded bg-gray-100 shadow"
            >
                <div class="mx-auto w-full overflow-hidden md:h-[190px]">
                    <PhotoIcon class="h-full w-full text-gray-200" />
                </div>
            </div>
        </div>
    </div>
</template>
