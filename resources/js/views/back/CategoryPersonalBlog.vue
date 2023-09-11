<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold text-primary-blue">
                    Category Personal Blog
                </h1>
            </div>

            <div class="justify-between lg:flex">
                <div class="bg-white px-6 pt-8 lg:w-[40%]">
                    <div v-if="!isEdit">
                        <h1 class="mb-4 text-2xl font-semibold">
                            <span class="text-primary-blue underline"
                                >Add
                            </span>
                            <span>Category Personal Blog</span>
                        </h1>
                        <Error v-if="errors != ''">{{ errors }}</Error>
                        <form class="px-8" @submit.prevent="storeItem()">
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >French Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_fr"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >English Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_en"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Espanol Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_es"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Portugues Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_pt"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="mt-6 flex justify-end">
                                <button
                                    v-if="loading == 0"
                                    type="submit"
                                    class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                                >
                                    Save
                                </button>
                                <button
                                    v-if="loading == 1"
                                    type="submit"
                                    disabled
                                    class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"
                                >
                                    <Spin :size="'small'" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-else>
                        <h1 class="mb-4 text-2xl font-semibold">
                            <span class="text-primary-blue underline"
                                >Edit
                            </span>
                            <span>Category Personal Blog</span>
                        </h1>
                        <Error v-if="errors != ''">{{ errors }}</Error>
                        <form class="px-8" @submit.prevent="saveItem()">
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >French Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_fr"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >English Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_en"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Espanol Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_es"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Portugues Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_pt"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="mt-6 flex justify-end">
                                <button
                                    v-if="loading == 0"
                                    type="submit"
                                    class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                                >
                                    Save
                                </button>
                                <button
                                    v-if="loading == 1"
                                    type="submit"
                                    disabled
                                    class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"
                                >
                                    <Spin :size="'small'" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="flex flex-col bg-white pt-8 lg:w-[60%]">
                    <div class="overflow-x-auto border">
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
                                        v-model="searchKey"
                                        type="text"
                                        id="table-search"
                                        class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                                        placeholder="Search for items"
                                    />
                                </div>
                            </div>
                            <Error v-if="errors != ''">{{ errors }}</Error>
                            <div class="overflow-hidden">
                                <table
                                    class="dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"
                                >
                                    <thead class="dark:bg-gray-700 bg-gray-100">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                            >
                                                Name
                                            </th>
                                            <th scope="col" class="p-4">
                                                <span class="sr-only"
                                                    >Edit</span
                                                >
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"
                                        v-if="filteredItem.length != 0"
                                    >
                                        <tr
                                            v-for="item in filteredItem"
                                            :key="item.id"
                                            class="dark:hover:bg-gray-700 hover:bg-gray-100"
                                        >
                                            <td
                                                class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                            >
                                                {{ item.name_en }}
                                            </td>
                                            <td
                                                class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"
                                            >
                                                <a
                                                    @click="selectToEdit(item)"
                                                    href="#"
                                                    class="dark:text-blue-500 text-primary-blue hover:underline"
                                                    >Edit</a
                                                >
                                                <a
                                                    @click="deleteItem(item.id)"
                                                    href="#"
                                                    class="dark:text-blue-500 ml-3 text-red-600 hover:underline"
                                                    >Delete</a
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody
                                        class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"
                                        v-else-if="loading == 1"
                                    >
                                        <tr
                                            class="dark:hover:bg-gray-700 hover:bg-gray-100"
                                        >
                                            <td
                                                colspan="2"
                                                class="dark:text-white w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"
                                            >
                                                <Spin :size="'big'" />
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody
                                        class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"
                                        v-else
                                    >
                                        <tr
                                            class="dark:hover:bg-gray-700 hover:bg-gray-100"
                                        >
                                            <td
                                                colspan="2"
                                                class="dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"
                                            >
                                                No Category
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import Error from "@/components/Error.vue";

import useCategoryPersonalPosts from "@/services/categoryPersonalPostServices.js";

const {
    categoryPersonalPosts,
    updateCategoryPersonalPost,
    getCategoryPersonalPosts,
    createCategoryPersonalPost,
    destroyCategoryPersonalPost,
    loading,
    errors,
} = useCategoryPersonalPosts();

const searchKey = ref("");
const isEdit = ref(false);
const id = ref("");

const item = reactive({
    name_fr: "",
    name_en: "",
    name_es: "",
    name_pt: "",
});

onMounted(async () => {
    await getCategoryPersonalPosts();
});

const storeItem = async () => {
    loading.value = 1;
    await createCategoryPersonalPost({ ...item });
    await getCategoryPersonalPosts();
    item.name_fr = "";
    item.name_en = "";
    item.name_es = "";
    item.name_pt = "";
    loading.value = 0;
};

const saveItem = async () => {
    loading.value = 1;
    await updateCategoryPersonalPost({ ...item }, id.value);
    await getCategoryPersonalPosts();
    loading.value = 0;
    item.name_fr = "";
    item.name_en = "";
    item.name_es = "";
    item.name_pt = "";
    id.value = 0;
    isEdit.value = false;
};

const deleteItem = async (id) => {
    if (confirm("I you Sure ?")) {
        loading.value = 1;
        await destroyCategoryPersonalPost(id);
        await getCategoryPersonalPosts();
        loading.value = 0;
    }
};

const selectToEdit = async (data) => {
    isEdit.value = true;
    id.value = data.id;
    item.name_en = data.name_en;
    item.name_es = data.name_es;
    item.name_pt = data.name_pt;
    item.name_fr = data.name_fr;
};

const filteredItem = computed(() => {
    return categoryPersonalPosts.value.filter((item) => {
        return item.name_en
            .toLowerCase()
            .includes(searchKey.value.toLowerCase());
    });
});
</script>
