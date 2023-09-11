<template>
    <div class="relative h-auto min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Reporting
                </h1>
            </div>
            <div class="items-center justify-between lg:flex">
                <div class="items-end space-x-2 p-4 lg:flex">
                    <div>
                        <label for="">Filter by:</label>
                        <select
                            v-model="searchField"
                            class="form-select mt-2 block w-32 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option value="firstname">Name</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
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
                <div class="">
                    <button
                        type="button"
                        title="delete"
                        @click="deleteReportings()"
                        class="flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                        <TrashIcon class="h-6 w-6" />
                        <span class="hidden text-sm font-thin lg:block"
                            >Delete</span
                        >
                    </button>
                </div>
            </div>
            <EasyDataTable
                v-model:items-selected="itemsSelected"
                :headers="headers"
                :items="reportings"
                alternating
                :search-field="searchField"
                :search-value="searchValue"
                show-index
                buttons-pagination
                :loading="loading"
            >
                <template #item-user="item">
                    <router-link
                            :to="{
                                name: 'compte',
                                params: { slug: item.user.slug, id: item.user.id },
                            }"
                            class="flex items-center gap-2 py-3 text-indigo-600 hover:underline"
                            v-if="item.user"
                        >
                            <img
                                :src="item.user.avatar"
                                v-if="item.user.avatar"
                                alt=""
                                class="h-12 w-12 rounded-full object-cover"
                            />
                            <UserCircleIcon v-else class="h-12 w-12 text-gray-700" />
                            <span class="block">{{ item.user.firstname }}</span>
                    </router-link>
                </template>
                <template #expand="item">
                    <div
                        class="p-4"
                        v-html="item.content"
                    ></div>
                </template>
                
            </EasyDataTable>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { TrashIcon, UserCircleIcon } from '@heroicons/vue/24/solid';
import useReportings from "@/services/reportingServices.js";

const { reportings, getReportings, destroyReporting, loading, errors } =
    useReportings();
const itemsSelected = ref([]);
const searchField = ref("firstname");
const searchValue = ref("");
onMounted(async () => {
    await getReportings();
});

const deleteReportings = async () => {
    if (itemsSelected.value.length != 0) {
        const deleteIds = ref([]);
        itemsSelected.value.forEach((d) => {
            deleteIds.value.push(d.id);
        });
        if (confirm("I you Sure ?")) {
            await destroyReporting(deleteIds.value);
            if (errors.value == "") {
                await getReportings();
                itemsSelected.value = [];
            }
        }
    }
};

const headers = [
    { text: "USER REPORT", value: "user" },
    { text: "Type", value: "type" },
    { text: "REPORTED", value: "reported" },
];
</script>
