<script setup>
import { FaceFrownIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <div
        class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500"
    >
        <FaceFrownIcon class="h-16 w-16" />
        <span class="mt-2 text-2xl">{{ $t("no-content") }} </span>
    </div>
</template>
