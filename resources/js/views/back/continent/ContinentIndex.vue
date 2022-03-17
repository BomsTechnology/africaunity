<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div
                class="fixed xl:right-6 xl:top-4 top-20 xl:w-[80%] w-full z-0 h-full p-4"
            >
                <div class="px-8 py-5 bg-white shadow-lg flex justify-between">
                    <h1 class="text-4xl text-primary-blue font-bold">
                        Continent
                    </h1>
                    <router-link
                        :to="{ name: 'admin.continent.create' }"
                        class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add Continent</p>
                    </router-link>
                </div>

                <div class="flex flex-col bg-white pt-8">
                    <div class="overflow-x-auto shadow-lg">
                        <div
                            class="inline-block min-w-full align-middle dark:bg-gray-800"
                        >
                            <div class="p-4">
                                <label for="table-search" class="sr-only"
                                    >Search</label
                                >
                                <div class="relative mt-1">
                                    <div
                                        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                                    >
                                        <svg
                                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search for items"
                                    />
                                </div>
                            </div>
                            <div class="overflow-hidden">
                                <table
                                    class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                                >
                                    <thead class="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" class="p-4">
                                                <div class="flex items-center">
                                                    <input
                                                        id="checkbox-search-all"
                                                        type="checkbox"
                                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        for="checkbox-search-all"
                                                        class="sr-only"
                                                        >checkbox</label
                                                    >
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Product Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Category
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Price
                                            </th>
                                            <th scope="col" class="p-4">
                                                <span class="sr-only"
                                                    >Edit</span
                                                >
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                    >
                                        <tr
                                            class="hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <td class="p-4 w-4">
                                                <div class="flex items-center">
                                                    <input
                                                        id="checkbox-search-1"
                                                        type="checkbox"
                                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        for="checkbox-search-1"
                                                        class="sr-only"
                                                        >checkbox</label
                                                    >
                                                </div>
                                            </td>
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                Apple Imac 27"
                                            </td>
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                            >
                                                Desktop PC
                                            </td>
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                $1999
                                            </td>
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                            >
                                                <a
                                                    href="#"
                                                    class="text-blue-600 dark:text-blue-500 hover:underline"
                                                    >Edit</a
                                                >
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

<script>
import Sidebar from "../../../components/Sidebar.vue";
import { PlusCircleIcon } from "@heroicons/vue/solid";
export default {
    components: {
        PlusCircleIcon,
        Sidebar,
    },
    setup() {},
};
</script>
