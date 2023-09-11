<script setup>
import { PhotoIcon } from "@heroicons/vue/24/solid";

const items = [1, 2, 3];
</script>

<template>
    <div class=" animate-pulse space-y-6 mt-4">
                <div class="md:flex space-y-2 py-4 bg-gray-50" v-for="item in items"
                :key="item">
                    <div class="md:w-[20%]">
                        <PhotoIcon class="h-60 w-full text-gray-200" />
                    </div>
                    <div class="md:w-[60%] px-4 flex flex-col md:justify-between">
                        <div class="text-left">
                            <div class="mb-4 h-5 w-96 rounded-md bg-gray-200"></div>
                            <div class="mb-4 h-5 w-60 mt-1 rounded-md bg-gray-200"></div>
                        </div>
                        <div class="flex space-x-2 my-6 md:my-0">
                            <div class="h-10 w-10 rounded-full bg-gray-200">
                                
                            </div>
                            <div class="">
                                <div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div>
                                <div class="mb-4 h-5 w-72 rounded-md bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-[20%]">
                        <div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div>
                    </div>
                </div>
            </div>
</template>