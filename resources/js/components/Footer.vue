<template>
    <footer
        class="text-md mx-auto w-full bg-[#303440] px-6 py-8 text-[#b1b6b6] xl:w-[90%]"
    >
        <div
            class="mb-8 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between"
        >
            <div>
                <h1 class="inline-block bg-primary-blue px-2 py-1 text-white">
                    {{ $t("about-title") }}
                </h1>
                <div
                    class="border-t-2 border-primary-blue py-4 text-justify md:w-96"
                >
                    <p>
                        {{ $t("about-text") }}
                    </p>
                </div>
            </div>
            <div>
                <h1 class="inline-block bg-primary-blue px-2 py-1 text-white">
                    {{ $t("post-calendar") }}
                </h1>
                <div
                    class="border-t-2 border-primary-blue py-4 text-justify lg:w-96"
                >
                    <div>
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
        <div class="py-6 text-center lg:text-left">
            <p>
                Copyright © 2022
                <a :href="path" class="underline hover:text-white"
                    >AfricaUnity</a
                >
                | All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script setup>
import Calendar from "./PostCalendar.vue";
const path = window.location.origin;
</script>
