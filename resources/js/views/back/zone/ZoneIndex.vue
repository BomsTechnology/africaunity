<template>
    <div class="relative h-auto w-full xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5 shadow-lg">
                <h1 class="text-4xl font-bold text-primary-blue">Zone</h1>
                <router-link
                    :to="{ name: 'admin.zone.create' }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">Add zone</p>
                </router-link>
            </div>

            <div class="flex flex-col bg-white pt-8">
                <div class="overflow-x-auto shadow-lg">
                    <div
                        class="dark:bg-gray-800 inline-block min-w-full align-middle"
                    >
                        <div class="p-4">
                            <label for="table-search" class="sr-only"
                                >Search</label
                            >
                            <div class="relative mt-1">
                                <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                >
                                    <svg
                                        class="dark:text-gray-400 h-5 w-5 text-gray-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    v-model="searchValue"
                                    type="text"
                                    id="table-search"
                                    class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                        <Error v-if="errors != ''">{{ errors }}</Error>
                        <EasyDataTable
                            :headers="headers"
                            :items="zones"
                            alternating
                            :search-field="searchField"
                            :search-value="searchValue"
                            show-index
                            buttons-pagination
                            :loading="loading"
                        >
                            <template #item-id="item">
                                <div>
                                    <router-link
                                        :to="{
                                            name: 'admin.zone.edit',
                                            params: {
                                                id: item.id,
                                            },
                                        }"
                                        href="#"
                                        class="dark:text-blue-500 text-primary-blue hover:underline"
                                        >Edit</router-link
                                    >
                                    <button
                                        @click="deleteZone(item.id)"
                                        type="button"
                                        class="dark:text-blue-500 ml-3 text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { PlusCircleIcon } from "@heroicons/vue/24/solid";
import useZones from "@/services/zoneServices.js";
import Error from "@/components/Error.vue";

const { zones, getZones, destroyZone, loading, errors } = useZones();

onMounted(async () => {
    await getZones();
});

const deleteZone = async (id) => {
    if (confirm("I you Sure ?")) {
        await destroyZone(id);
        if (errors.value == "") {
            await getZones();
        }
    }
};

const searchField = ref("name_en");
const searchValue = ref("");

const headers = [
    { text: "Name", value: "name_en" },
    { text: "ACTION", value: "id" },
];
</script>
