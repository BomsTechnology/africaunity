<script setup>
import useTenders from "@/services/tenderServices.js";
import { onMounted, ref, computed } from "vue";
import { FaceFrownIcon, PlusCircleIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
    user: Object,
});
const searchJob = ref("");
const stateJob = ref("");
const loginUser = ref("");
loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
const { tenders, getTendersUser, destroyTender, markFilled, loading } =
    useTenders();

onMounted(async function () {
    await getTendersUser(props.user.id);
});

const deleteTender = async (id) => {
    const deleteId = [id];
    if (confirm("I you Sure ?")) {
        await destroyTender(deleteId);
        await getTendersUser(props.user.id);
    }
};

const mark = async (id) => {
    const deleteId = [id];
    if (confirm("I you Sure ?")) {
        await markFilled(deleteId);
        await getTendersUser(props.user.id);
    }
};

const filteredJob = computed(() => {
    return tenders.value.filter((tender) => {
        if(stateJob.value != ""){
            return (tender.title
            .toLowerCase()
            .includes(searchJob.value.toLowerCase()) || tender.description
            .toLowerCase()
            .includes(searchJob.value.toLowerCase())) && tender.status == stateJob.value;
        }else{
            return (tender.title
            .toLowerCase()
            .includes(searchJob.value.toLowerCase()) || tender.description
            .toLowerCase()
            .includes(searchJob.value.toLowerCase()));
        }
    });
});
</script>
<template>
    <div>
        <div v-if="loading == 1" class="py-6">
            <Spin />
        </div>
        <div v-else>

            <div
            class="flex flex-col-reverse items-center justify-between px-6 py-2 space-x-4 w-full lg:flex-row"
            >
                <div class="items-center lg:w-5/6 w-full space-y-2 lg:space-y-0 space-x-0 lg:space-x-2 flex lg:flex-row flex-col">
                    <div>
                        <div class="relative lg:w-auto w-full">
                            <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <svg
                                    class="h-5 w-5 text-gray-500"
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
                                v-model="searchJob"
                                class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div class="lg:w-1/4 w-full">
                        <select
                            v-model="stateJob"
                            class="form-select block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pr-8 pl-4 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option value="">Select {{ $t("status") }}</option>
                            <option value="3">{{ $t("provided") }}</option>
                            <option value="1">{{ $t("in-progress") }}</option>
                        </select>
                    </div>
                </div>
                <div class="lg:w-2/6 w-full justify-center flex lg:justify-end ">
                    <router-link
                        v-if="user.id == loginUser.id"
                            :to="{
                                name: 'add.job',
                            }"
                            class="mb-2 flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white lg:mb-0"
                        >
                        <PlusCircleIcon class="h-6 w-6" />
                        <p class="text-base leading-4">{{ $tc("add") }} Job</p>
                    </router-link>
                </div>
            </div>

            
            <div class="overflow-x-auto">
                <table class="min-w-full table-fixed divide-y divide-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                            >
                                {{ $t("my-jobs") }}
                            </th>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                            >
                                {{ $t("status") }}
                            </th>
                            <th
                                v-if="user.id == loginUser.id"
                                scope="col"
                                class="p-4"
                            >
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        class="divide-y divide-gray-200 bg-white"
                        v-if="filteredJob.length != 0"
                    >
                        <tr
                            v-for="tender in filteredJob"
                            :key="tender.id"
                            class="hover:bg-gray-100"
                        >
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <router-link
                                    :to="{
                                        name: 'show.job',
                                        params: { id: tender.id , slug: tender.slug },
                                    }"
                                    class="hover:underline"
                                    >{{ tender.title }}</router-link
                                >
                            </td>
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <span
                                    v-if="tender.status == 3"
                                    class="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700"
                                    >{{ $t("provided") }}</span
                                >
                                <span
                                    v-else-if="tender.status == 1"
                                    class="rounded-full bg-yellow-50 px-2 py-1 text-xs text-yellow-700"
                                    >{{ $t("in-progress") }}</span
                                >
                            </td>
                            <td
                                v-if="user.id == loginUser.id"
                                class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"
                            >
                                <div class="flex">
                                    <router-link
                                        :to="{
                                            name: 'edit.tender',
                                            params: { id: tender.id },
                                        }"
                                        class="text-primary-blue hover:underline"
                                    >
                                     
                                        {{ $t("modify") }}
                                    </router-link>
                                    <button
                                        @click="deleteTender(tender.id)"
                                        class="ml-3 text-red-600 hover:underline"
                                    >
                                    
                                        <span>
                                            {{ $t("delete") }}
                                        </span>
                                    </button>
                                    <button
                                        @click="mark(tender.id)"
                                        class="relative ml-3 text-purple-600 hover:underline"
                                    >
                                  
                                        <span v-if="tender.status != 3">
                                            {{ $t("mark-provided") }}
                                        </span>
                                        <span v-else-if="tender.status != 1">
                                            {{ $t("mark-progress") }}
                                        </span>
                                    </button>
                                    <router-link
                                        :to="{
                                            name: 'add.tender',
                                            params: {
                                                duplicate: 'duplicate'  
                                            },
                                            query: {
                                               title: tender.title, 
                                               description: tender.description, 
                                               end_date: tender.end_date, 
                                               location: tender.location, 
                                               reference: tender.reference, 
                                               company_name: tender.company_name, 
                                               company_email: tender.company_email, 
                                               company_logo: tender.company_logo, 
                                               min_price: tender.min_price, 
                                               max_price: tender.max_price, 
                                               currency_id: tender.currency.id, 
                                               work_department_id: tender.work_department.id, 
                                               work_mode_id: tender.work_mode.id, 
                                               size_company_id: tender.size_company.id, 
                                               city_id: tender.city.id, 
                                               zone_id: tender.zone.id, 
                                               continent_id: tender.continent.id, 
                                               country_id: tender.country.id, 
                                               activity_areas: JSON.stringify(tender.activity_areas), 
                                               languages: JSON.stringify(tender.languages), 
                                            }
                                        }"
                                        class="relative ml-3 text-pink-600 hover:underline"
                                    >
                                        <span>
                                            {{ $t("duplicate") }}
                                        </span>
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="divide-y divide-gray-200 bg-white" v-else>
                        <tr class="hover:bg-gray-100">
                            <td
                                colspan="3"
                                class="whitespace-nowrap py-4 px-6 text-center text-xl font-medium text-gray-900"
                            >
                                <NoContent />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
