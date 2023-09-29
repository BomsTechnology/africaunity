<template>
    <div
        class="fixed inset-0 z-40 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-show="open"
    >
        <div
            class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
                style=" backdrop-filter: blur(5px);"
                @click="toogleModal"
            ></div>

            <span
                class="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
                >&#8203;</span
            >
            <div
                class="inline-block transform overflow-hidden rounded-lg bg-white text-left  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg align-middle"
            >
                <!-- Modal content -->
                <div class="relative rounded-lg bg-white py-4 shadow">
                    <div class="relative mx-2">
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <MagnifyingGlassIcon
                                class="h-5 w-5 text-gray-500"
                            />
                        </div>
                        <input
                            type="text"
                            @input="searchUser"
                            v-model="search"
                            class="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Rechercher..."
                            required
                        />
                    </div>

                    <div class="max-h-96 overflow-y-auto">
                        <div v-if="loading" class="py-10">
                            <Spin />
                        </div>
                        <div
                            v-else-if="users && users.length != 0"
                            class="mt-10 flex flex-col"
                        >
                            <div
                                v-for="user in users"
                                :key="user.id"
                                @click="conversationSelect(user)"
                                class="flex cursor-pointer items-center gap-3 bg-white px-4 py-2 hover:bg-gray-100"
                            >
                                <template v-if="loginUser.id != user.id">
                                    <div
                                    class="block h-32 w-32 overflow-hidden rounded-full shadow lg:h-20 lg:w-20"
                                >
                                    <img
                                        :src="user.avatar"
                                        class="h-full w-full bg-cover object-cover"
                                        alt=""
                                        v-if="user.avatar"
                                    />
                                    <UserCircleIcon
                                        v-else
                                        class="h-full w-full text-gray-500"
                                    />
                                </div>
                                <div>
                                    <h2>
                                        <span>{{ user.firstname }}</span>
                                        <span v-if="user.lastname">{{
                                            " " + user.lastname
                                        }}</span>
                                    </h2>
                                    <p class="text-xs font-light lg:text-sm">
                                        {{ user.email }}
                                    </p>
                                </div>
                                </template>
                            </div>
                        </div>
                        <div v-else-if="search.length != 0 && isSearch">
                            <NoContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import useUsers from "@/services/userServices.js";
import NoContent from "./utils/NoContent.vue";

const { filterUserConversation, loading, users, errors } = useUsers();

const loginUser =  JSON.parse(localStorage.user);
const props = defineProps({ open: Boolean, toogleModal: Function, conversationSelect: Function });
const search = ref("");
const isSearch = ref(false);
const searchTimeout = ref(null);
const searchUser = async () => {
    if(searchTimeout.value) clearTimeout(searchTimeout.value);
    searchTimeout.value = setTimeout(async () => {
        isSearch.value = true;
        await filterUserConversation(search.value);
    }, 1000);
};
</script>
