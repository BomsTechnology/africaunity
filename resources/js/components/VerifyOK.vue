<template>
    <div
        class="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-show="open"
    >
        <div
            class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
                @click="toogleModal"
            ></div>

            <span
                class="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
                >&#8203;</span
            >
            <div
                class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
            >
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div
                        class="sm:flex sm:flex-col sm:items-center sm:justify-center"
                    >
                        <div
                            class="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-20 sm:w-20"
                        >
                            <EmojiHappyIcon class="h-16 w-16 text-green-600" />
                        </div>
                        <div
                            class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                        >
                            <div class="py-4">
                                <p
                                    class="text-md text-center font-semibold text-gray-500"
                                >
                                    {{ $t("modal-verif-ok") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:items-center sm:justify-center sm:px-6"
                >
                    <button
                        type="button"
                        @click="toogleModal"
                        class="mt-3 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { EmojiHappyIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
    open: Boolean,
    toogleModal: Function,
});
</script>
