<template>
    <div class="relative h-auto w-full xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5 shadow-lg">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    JobOffer
                </h1>
                <router-link
                    :to="{
                        name: 'admin.jobOffer.create',
                    }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">Add JobOffer</p>
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
                                    type="text"
                                    id="table-search"
                                    v-model="searchValue"
                                    class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                        <EasyDataTable
                            :headers="headers"
                            :items="jobOffers"
                            alternating
                            :search-field="searchField"
                            :search-value="searchValue"
                            show-index
                            buttons-pagination
                            :loading="loading"
                        >
                            <template #item-company_logo="item">
                                <div class="py-2">
                                    <img
                                        v-if="item.company_logo"
                                        :src="item.company_logo"
                                        alt=""
                                        class="h-12 w-12 rounded-full object-cover"
                                    />
                                    <OfficeBuildingIcon
                                        v-else
                                        class="h-12 w-12"
                                    />
                                </div>
                            </template>
                            <template #item-title="item">
                                {{
                                    item.title.length <= 30
                                        ? item.title
                                        : item.title.substring(0, 29) + "..."
                                }}
                            </template>
                            <template #item-min_price="item">
                                {{ item.min_price }}
                                {{ item.currency.symbol }} -
                                {{ item.max_price }}
                                {{ item.currency.symbol }}
                            </template>
                            <template #item-id="item">
                                <div>
                                    <router-link
                                        :to="{
                                            name: 'admin.jobOffer.edit',
                                            params: {
                                                type: type,
                                                id: item.id,
                                            },
                                        }"
                                        class="dark:text-blue-500 text-primary-blue hover:underline"
                                        >Edit</router-link
                                    >
                                    <button
                                        type="button"
                                        @click="deleteJobOffer(item.id)"
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
import { PlusCircleIcon, OfficeBuildingIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted, computed } from "vue";
import useJobOffers from "@/services/jobOfferServices.js";
import Error from "@/components/Error.vue";

const { jobOffers, getJobOffers, destroyJobOffer, loading, errors } =
    useJobOffers();

onMounted(async () => {
    await getJobOffers();
});

const deleteJobOffer = async (id) => {
    if (confirm("I you Sure ?")) {
        await destroyJobOffer(id);
        if (errors.value == "") {
            await getJobOffers();
        }
    }
};

const searchField = ref("title");
const searchValue = ref("");
const headers = [
    { text: "Company Logo", value: "company_logo" },
    { text: "Title", value: "title" },
    { text: "Author", value: "user.firstname" },
    { text: "Company Name", value: "company_name" },
    { text: "Company Email", value: "company_email" },
    { text: "Price", value: "min_price" },
    { text: "ACTION", value: "id" },
];
</script>
