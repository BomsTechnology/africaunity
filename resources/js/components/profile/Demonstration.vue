<script setup>
import useDemonstrations from "@/services/demonstrationServices.js";
import { onMounted, ref, computed } from "vue";

import {
    TrashIcon,
    PlusCircleIcon,
    PencilSquareIcon,
ArrowPathIcon,
} from "@heroicons/vue/24/solid";
import NoContent from "../utils/NoContent.vue";
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
const props = defineProps({
    user: Object,
});
const { demonstrations, getDemonstrationsUser, destroyDemonstration,markedDemonstration, loading } =
    useDemonstrations();
const searchAds = ref("");
const loginUser = ref("");
loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
onMounted(async function () {
    await getDemonstrationsUser(props.user.id);
});

const deleteDemonstration = async (id) => {
    const deleteId = [id];
    if (confirm("I you Sure ?")) {
        await destroyDemonstration(deleteId);
        await getDemonstrationsUser(props.user.id);
    }
};

const markDemonstration = async (id) => {
    await markedDemonstration(id);
    await getDemonstrationsUser(props.user.id);
};

const filteredDemonstration = computed(() => {
    return demonstrations.value.filter((demonstration) => {
        return demonstration.title
            .toLowerCase()
            .includes(searchAds.value.toLowerCase());
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
                class="flex flex-col-reverse items-center justify-between px-6 py-2 lg:flex-row"
            >
                <div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
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
                            v-model="searchAds"
                            class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <router-link
                v-if="user.id == loginUser.id"
                    :to="{
                        name: 'add.events',
                    }"
                    class="mb-2 flex items-center space-x-3 rounded bg-primary-blue px-3 py-2 text-white lg:mb-0"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">
                        {{ $tc("add", 1) }}  {{ $tc("events", 1) }}
                    </p>
                </router-link>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full table-fixed divide-y divide-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                            >
                            {{ $tc("events", 2) }}
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
                        v-if="filteredDemonstration.length != 0"
                    >
                        <tr
                            v-for="demonstration in filteredDemonstration"
                            :key="demonstration.id"
                            class="hover:bg-gray-100"
                        >
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <router-link
                                    :to="{
                                        name: 'show.events',
                                        params: { id: demonstration.id, slug: demonstration.slug },
                                    }"
                                    class="hover:underline"
                                    >{{ demonstration.title }}</router-link
                                >
                            </td>
                            <td
                                v-if="user.id == loginUser.id"
                                class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"
                            >
                                <div class="flex">
                                    <router-link
                                        :to="{
                                            name: 'edit.events',
                                            params: { id: demonstration.id },
                                        }"
                                        class="text-primary-blue hover:underline relative group"
                                    >
                                        <PencilSquareIcon
                                            class="h-5 w-5 cursor-pointer text-blue-400 hover:text-blue-700"
                                        />
                                        <span class=" absolute px-2 py-1 text-white z-10 rounded-full bg-black/70 -top-6 text-xs group-hover:block hidden">
                                            {{ $t("modify") }}  </span>
                                    </router-link>
                                    <!-- <button
                                        @click="
                                            markDemonstration(demonstration.id)
                                        "
                                        class="ml-3 text-purple-600 hover:underline relative group"
                                    >
                                        <CheckCircleIcon
                                            v-if="demonstration.status != 3"
                                            class="h-5 w-5 cursor-pointer text-purple-400 hover:text-purple-700"
                                        />
                                        <ArrowPathIcon
                                            v-else
                                            class="h-5 w-5 cursor-pointer text-purple-400 hover:text-purple-700"
                                        />
                                        <span class=" absolute px-2 py-1 text-white z-10 rounded-full bg-black/70 -top-6 text-xs group-hover:block hidden">
                                            <span v-if="demonstration.status != 3">{{ $t("mark-provided") }}</span>
                                            <span v-else>{{ $t("mark-progress") }}</span>
                                        </span>
                                    </button> -->
                                    <button
                                        @click="
                                            deleteDemonstration(demonstration.id)
                                        "
                                        class="ml-3 text-red-600 hover:underline relative group"
                                    >
                                        <TrashIcon
                                            class="h-5 w-5 cursor-pointer text-red-400 hover:text-red-700"
                                        />
                                        <span class=" absolute px-2 py-1 text-white z-10 rounded-full bg-black/70 -top-6 text-xs group-hover:block hidden">
                                            {{ $t("delete") }}  </span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="divide-y divide-gray-200 bg-white" v-else>
                        <tr class="hover:bg-gray-100">
                            <td
                                colspan="5"
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
