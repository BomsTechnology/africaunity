<script setup>
import {
    UserGroupIcon,
    BuildingLibraryIcon,
    NewspaperIcon,
    BriefcaseIcon,
    MegaphoneIcon,
} from "@heroicons/vue/24/solid";
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { UserCircleIcon, BookOpenIcon } from "@heroicons/vue/24/solid";

const router = useRouter();
const errors = ref("");
const data = ref([]);
const loading = ref(0);

onMounted(async () => {
    try {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/dash-data", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        data.value = response.data.data;
        loading.value = 2;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == 422) {
            for (const key in e.response.data.errors)
                errorsWM.value += e.response.data.errors[key][0] + "\n";
        } else if (e.response.status == 401) {
            errors.value = e.response.data.message;
        }
    }
});
</script>
<template>
    <div class="relative h-screen w-full bg-white p-4 shadow-lg xl:mt-0 xl:p-4">
        <h1 class="text-3xl font-bold text-primary-blue">Dashboard</h1>
        <div class="flex h-screen flex-col space-y-4">
            <div class="mt-4 grid h-1/2 grid-cols-2 gap-8 lg:grid-cols-3">
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-blue-500 shadow"
                >
                    <div><UserGroupIcon class="h-12 w-12" /></div>
                    <div
                        class="flex flex-col items-center justify-center text-center text-2xl font-bold"
                    >
                        <h2 v-if="loading == 2">{{ data.users }}</h2>
                        <div v-else>
                            <svg
                                class="h-5 w-5 animate-spin"
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
                        </div>
                        <h1>Users</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 shadow"
                >
                    <div><NewspaperIcon class="h-12 w-12" /></div>
                    <div
                        class="flex flex-col items-center justify-center text-center text-2xl font-bold"
                    >
                        <h2 v-if="loading == 2">{{ data.articles }}</h2>
                        <div v-else>
                            <svg
                                class="h-5 w-5 animate-spin"
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
                        </div>
                        <h1>Articles</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-emerald-500 shadow"
                >
                    <div><NewspaperIcon class="h-12 w-12" /></div>
                    <div
                        class="flex flex-col items-center justify-center text-center text-2xl font-bold"
                    >
                        <h2 v-if="loading == 2">{{ data.propau }}</h2>
                        <div v-else>
                            <svg
                                class="h-5 w-5 animate-spin"
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
                        </div>
                        <h1>PropAu</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-amber-500 shadow"
                >
                    <div><BuildingLibraryIcon class="h-12 w-12" /></div>
                    <div
                        class="flex flex-col items-center justify-center text-center text-2xl font-bold"
                    >
                        <h2 v-if="loading == 2">{{ data.universities }}</h2>
                        <div v-else>
                            <svg
                                class="h-5 w-5 animate-spin"
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
                        </div>
                        <h1>Universities</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-pink-500 shadow"
                >
                    <div><MegaphoneIcon class="h-12 w-12" /></div>
                    <div
                        class="flex flex-col items-center justify-center text-center text-2xl font-bold"
                    >
                        <h2 v-if="loading == 2">{{ data.ads }}</h2>
                        <div v-else>
                            <svg
                                class="h-5 w-5 animate-spin"
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
                        </div>
                        <h1>Ads</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-indigo-500 shadow"
                >
                    <div><BriefcaseIcon class="h-12 w-12" /></div>
                    <div
                        class="flex flex-col items-center justify-center text-center text-2xl font-bold"
                    >
                        <h2 v-if="loading == 2">{{ data.jobs }}</h2>
                        <div v-else>
                            <svg
                                class="h-5 w-5 animate-spin"
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
                        </div>
                        <h1>Job Offer</h1>
                    </div>
                </div>
            </div>
            <div class="h-1/2 space-y-8 py-8 lg:flex lg:space-x-8 lg:space-y-0">
                <div
                    class="h-full w-full overflow-hidden rounded-lg bg-white p-2 shadow-lg"
                >
                    <h1 class="text-2xl font-bold underline">
                        Utilisateurs Récents
                    </h1>
                    <div class="h-full overflow-auto py-4">
                        <router-link
                            :to="{
                                name: 'compte',
                                params: { slug: user.slug, id: user.id },
                            }"
                            v-for="user in data.recents_users"
                            :key="user.id"
                            class="flex items-center space-x-4 border-b py-6 hover:bg-gray-50"
                        >
                            <div>
                                <img
                                    :src="user.avatar"
                                    v-if="user.avatar"
                                    alt=""
                                    class="h-12 w-12 rounded-full object-cover"
                                />
                                <UserCircleIcon
                                    v-else
                                    class="h-12 w-12 text-gray-700"
                                />
                            </div>
                            <div>
                                <h2 class="font-bold">{{ user.firstname }}</h2>
                                <h3 class="text-sm">{{ user.email }}</h3>
                                <h4 class="text-xs text-primary-blue">
                                    {{ user.type }}
                                </h4>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div
                    class="h-full w-full overflow-hidden rounded-lg bg-white p-2 shadow-lg"
                >
                    <h1 class="text-2xl font-bold underline">
                        Publications Récentes
                    </h1>
                    <div class="h-full overflow-y-auto py-4">
                        <router-link
                            :to="{
                                name: 'show.post',
                                params: { id: post.id, slug: post.slug },
                            }"
                            v-for="post in data.recents_posts"
                            :key="post.id"
                            class="flex items-center space-x-4 border-b py-6 hover:bg-gray-50"
                        >
                            <div>
                                <img
                                    :src="post.image"
                                    v-if="post.image"
                                    alt=""
                                    class="h-12 w-12 rounded-full object-cover"
                                />
                                <BookOpenIcon
                                    v-else
                                    class="h-12 w-12 text-gray-700"
                                />
                            </div>
                            <div>
                                <h2 class="">{{ post.title }}</h2>
                                <h3 class="text-sm">
                                    {{ post.user.firstname }}
                                </h3>
                                <h4 v-if="post.ministry" class="text-xs text-primary-blue">
                                    {{ post.ministry.name_en }}
                                </h4>
                            </div> </router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
