<template>
    <div class="relative h-auto w-full xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5 shadow-lg">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Announcement
                </h1>
                <router-link
                    :to="{
                        name: 'admin.announcement.create',
                    }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">Add Announcement</p>
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
                            :items="announcements"
                            alternating
                            :search-field="searchField"
                            :search-value="searchValue"
                            show-index
                            buttons-pagination
                            :loading="loading"
                        >
                            <template #item-image="item">
                                <div class="py-2">
                                    <img
                                        v-if="item.image"
                                        :src="item.image"
                                        alt=""
                                        class="h-12 w-12 rounded-full object-cover"
                                    />
                                    <MegaphoneIcon v-else class="h-12 w-12" />
                                </div>
                            </template>
                            <template #item-title="item">
                                {{
                                    item.title.length <= 30
                                        ? item.title
                                        : item.title.substring(0, 29) + "..."
                                }}
                            </template>
                            <template #item-price="item">
                                {{ item.price }}
                                {{ item.currency.symbol }}
                            </template>
                            <template #item-id="item">
                                <div>
                                    <router-link
                                        :to="{
                                            name: 'admin.announcement.edit',
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
                                        @click="deleteAnnouncement(item.id)"
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
import { PlusCircleIcon, MegaphoneIcon } from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted, computed } from "vue";
import useAnnouncements from "@/services/announcementServices.js";
import Error from "@/components/Error.vue";

const {
    announcements,
    getAnnouncements,
    destroyAnnouncement,
    loading,
    errors,
} = useAnnouncements();

const searchKey = ref("");

onMounted(async () => {
    getAnnouncements();
});

const deleteAnnouncement = async (id) => {
    if (confirm("I you Sure ?")) {
        await destroyAnnouncement(id);
        if (errors.value == "") {
            await getAnnouncements();
        }
    }
};

const searchField = ref("title");
const searchValue = ref("");
const headers = [
    { text: "Image", value: "image" },
    { text: "Title", value: "title" },
    { text: "Author", value: "user.firstname" },
    { text: "Phone", value: "phone" },
    { text: "Price", value: "price" },
    { text: "University", value: "university.name" },
    { text: "Category", value: "category.name" },
    { text: "ACTION", value: "id" },
];
</script>
