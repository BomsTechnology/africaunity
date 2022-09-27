<template>
    <div class="relative h-auto w-full xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5 shadow-lg">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    {{ type }}
                </h1>
                <router-link
                    :to="{
                        name: 'admin.post.create',
                        params: { type: type },
                    }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">Add {{ type }}</p>
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
                                    v-model="searchKey"
                                    class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                        <div class="overflow-hidden">
                            <table
                                class="dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"
                            >
                                <thead class="dark:bg-gray-700 bg-gray-100">
                                    <tr>
                                        <th
                                            v-if="type == 'article'"
                                            scope="col"
                                            class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                        >
                                            Author
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                        >
                                            Language
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                        >
                                            Continent
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                        >
                                            Zone
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                        >
                                            Country
                                        </th>
                                        <th
                                            scope="col"
                                            class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                                        >
                                            Ministry
                                        </th>
                                        <th scope="col" class="p-4">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"
                                    v-if="filteredPost.length != 0"
                                >
                                    <tr
                                        v-for="post in filteredPost"
                                        :key="post.id"
                                        class="dark:hover:bg-gray-700 hover:bg-gray-100"
                                    >
                                        <td
                                            v-if="type == 'article'"
                                            class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                        >
                                            <img
                                                :src="post.image"
                                                alt=""
                                                class="h-16 w-16 rounded-full object-cover"
                                            />
                                        </td>
                                        <td
                                            class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {{
                                                post.title.length <= 20
                                                    ? post.title
                                                    : post.title.substring(
                                                          0,
                                                          19
                                                      ) + "..."
                                            }}
                                        </td>
                                        <td
                                            class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {{ post.user.firstname }}
                                        </td>
                                        <td
                                            class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {{ post.language }}
                                        </td>
                                        <td
                                            class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {{ post.continent.name_en }}
                                        </td>
                                        <td
                                            class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {{ post.zone.name_en }}
                                        </td>
                                        <td
                                            class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {{ post.country.name_en }}
                                        </td>
                                        <td
                                            class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                        >
                                            {{
                                                post.ministry.name_en <= 20
                                                    ? post.ministry.name_en
                                                    : post.ministry.name_en.substring(
                                                          0,
                                                          19
                                                      ) + "..."
                                            }}
                                        </td>
                                        <td
                                            class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"
                                        >
                                            <router-link
                                                :to="{
                                                    name: 'admin.post.edit',
                                                    params: {
                                                        type: type,
                                                        id: post.id,
                                                    },
                                                }"
                                                href="#"
                                                class="dark:text-blue-500 text-primary-blue hover:underline"
                                                >Edit</router-link
                                            >
                                            <a
                                                @click="deletePost(post.id)"
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
                                            v-if="type == 'article'"
                                            colspan="9"
                                            class="w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"
                                        >
                                            <svg
                                                class="mx-auto h-16 w-16 animate-spin"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    class="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    stroke-width="4"
                                                ></circle>
                                                <path
                                                    class="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td
                                            v-else
                                            colspan="8"
                                            class="w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"
                                        >
                                            <svg
                                                class="mx-auto h-16 w-16 animate-spin"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    class="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    stroke-width="4"
                                                ></circle>
                                                <path
                                                    class="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
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
                                            v-if="type == 'article'"
                                            colspan="9"
                                            class="whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"
                                        >
                                            NO {{ type }}
                                        </td>
                                        <td
                                            v-else
                                            colspan="8"
                                            class="whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"
                                        >
                                            NO {{ type }}
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
</template>

<script setup>
import { PlusCircleIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted, computed } from "vue";
import router from "@/router";
import usePosts from "@/services/postServices.js";
import Error from "@/components/Error.vue";

const { posts, getPostsAll, destroyPost, loading, errors } = usePosts();
const props = defineProps({
    type: {
        required: true,
        type: String,
    },
});
const searchKey = ref("");

const types = ["article", "propau"];
onMounted(async () => {
    if (!types.includes(props.type)) {
        router.push({ name: "admin.dash" });
    }
}, getPostsAll(props.type));

const deletePost = async (id) => {
    if (confirm("I you Sure ?")) {
        await destroyPost(id);
        if (errors.value == "") {
            await getPostsAll(props.type);
        }
    }
};

const filteredPost = computed(() => {
    return posts.value.filter((post) => {
        return post.title.toLowerCase().includes(searchKey.value.toLowerCase());
    });
});
</script>
