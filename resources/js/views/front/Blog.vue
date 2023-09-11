<template>
    <div class="mx-auto flex min-h-screen w-full  bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]">
        <div v-if="loading == 1" class="py-6 w-full">
            <Spin />
        </div>
        <div v-else class="w-full">

            <h1
                class="text-center text-5xl font-bold capitalize text-primary-blue"
            >
            {{ $t("personal-blog") }} Post
            </h1>


            <div
                class="mt-8 flex flex-col-reverse items-center justify-between px-6 py-2 space-x-4 w-full lg:flex-row"
            >
                <div class="items-center w-full space-y-2 lg:space-y-0 space-x-0 lg:space-x-2 flex lg:flex-row flex-col">
                    <div class="">
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
                                v-model="searchKey"
                                class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div class=" w-full">
                        <select
                            v-model="langPost"
                            @change="changeLocale()"
                            class="form-select block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pr-8 pl-4 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option value="" disabled>Select Language</option>
                            <option value="fr">{{ $t("fr") }}</option>
                            <option value="en">{{ $t("en") }}</option>
                            <option value="es">{{ $t("es") }}</option>
                            <option value="pt">{{ $t("pt") }}</option>
                        </select>
                    </div>
                    <div class=" w-full">
                        <select
                        v-model="theme"
                        class="form-select block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pr-8 pl-4 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                                >
                                    <option value="">Select theme</option>
                                    <option
                                        v-for="category in categoryPersonalPosts"
                                        :key="category.id"
                                        :value="category.id"
                                    >
                                        <span v-if="$i18n.locale == 'en'">{{
                                            category.name_en
                                        }}</span>
                                        <span v-else-if="$i18n.locale == 'fr'">{{
                                            category.name_fr
                                        }}</span>
                                        <span v-else-if="$i18n.locale == 'es'">{{
                                            category.name_es
                                        }}</span>
                                        <span v-else>{{ category.name_pt }}</span>
                                    </option>
                                </select>
                    </div>
                </div>
                <div class="lg:w-2/6 w-full justify-center flex lg:justify-end ">
                    <router-link
                    :to="{
                    name: 'compte',
                    params: { slug: user.slug, id: user.id },
                    query: {
                        'personal_post': 'create'
                    },
                    hash: '#personal_post'
                }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">
                        {{ $tc("add", 1) }} Post
                    </p>
                </router-link>
                </div>
            
            </div>

            <div
                class="grid gap-8 px-6 py-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
                v-if="filteredPost.length != 0"
            >

            <div
                    class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md"
                    v-for="post in filteredPost"
                    :key="post.id"
                >
                    <router-link
                        :to="{
                            name: 'compte',
                            params: { id: post.user.id, slug: post.user.slug },
                            query: {
                                personal_post: post.id
                            },
                            hash: '#personal_post'
                            
                        }"
                    >
                        <img
                            v-if="post.image"
                            class="h-44 w-full object-cover"
                            :src="post.image"
                            alt=""
                        />
                        <BookOpenIcon
                            v-else
                            class="h-44 w-full text-gray-500"
                        />
                    </router-link>
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="rounded py-1 px-2 text-xs capitalize text-white bg-primary-blue"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    post.category_personal_post.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    post.category_personal_post.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    post.category_personal_post.name_es
                                }}</span>
                                <span v-else>{{ post.category_personal_post.name_pt }}</span>
                            </a>
                            <router-link
                                :to="{
                                    name: 'compte',
                                    params: { id: post.user.id, slug: post.user.slug },
                                    query: {
                                        personal_post: post.id
                                    },
                                    hash: '#personal_post'
                                }"
                                class="dark:text-white mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"
                                >{{
                                    post.title.length <= 20
                                        ? post.title
                                        : post.title.substring(0, 19) + "..."
                                }}</router-link
                            >
                        </div>

                        <div
                            class="mt-4 flex items-center justify-between text-sm"
                        >
                            <router-link
                                :to="{
                                    name: 'compte',
                                    params: { id: post.user.id, slug: post.user.slug },
                                    query: {
                                        personal_post: post.id
                                    },
                                    hash: '#personal_post'
                                }"
                                class="dark:text-blue-400 text-blue-600 hover:underline"
                                >{{ $t("read-more") }}</router-link
                            >

                            <div
                                class="flex items-center space-x-2 text-xs text-gray-500"
                            >
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <router-link
                                        :to="{
                                            name: 'compte',
                                            params: {
                                                slug: post.user.slug,
                                                id: post.user.id,
                                            },
                                        }"
                                        class="hover:text-primary-blue"
                                        >{{ post.user.firstname }}</router-link
                                    >
                                </div>
                                <div class="hidden space-x-1 lg:flex">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a href="#" class="hover:text-primary-blue">{{
                                        new Date(post.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a>
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            <NoContent v-else />
        </div>
    </div>
</template>

<script setup>
import usePersonalPosts from "@/services/personalPostsServices.js";
import useCategoryPersonalPosts from "@/services/categoryPersonalPostServices.js";
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { BookOpenIcon, UserIcon, CalendarIcon, PlusCircleIcon } from '@heroicons/vue/24/solid';

const { locale } = useI18n();
const user = ref(JSON.parse(localStorage.user));
const { personalPosts, loading, getPersonalPostsLang } =
    usePersonalPosts();
    const { categoryPersonalPosts, getCategoryPersonalPosts } =
    useCategoryPersonalPosts();
const searchKey = ref("");
const theme = ref("");
const langPost = ref("");
onMounted(async function () {
   langPost.value = locale.value;
   await getPersonalPostsLang(langPost.value);
    await getCategoryPersonalPosts();
});

const filteredPost = computed(() => {
    return personalPosts.value.filter((post) => {
        
         if (theme.value != "" && langPost.value != "") {
            return (
               (post.title
                    .toLowerCase()
                    .includes(searchKey.value.toLowerCase()) || post.content
                .toLowerCase()
                .includes(searchKey.value.toLowerCase())) &&
                post.category_personal_post_id == theme.value &&
                post.language == langPost.value
            );
        }else if (langPost.value != "") {
            return (
               (post.title
                    .toLowerCase()
                    .includes(searchKey.value.toLowerCase()) || post.content
                .toLowerCase()
                .includes(searchKey.value.toLowerCase())) &&
                post.language == langPost.value
            );
        }else if (theme.value != "") {
            return (
               (post.title
                    .toLowerCase()
                    .includes(searchKey.value.toLowerCase()) || post.content
                .toLowerCase()
                .includes(searchKey.value.toLowerCase())) &&
                post.category_personal_post_id == theme.value
            );
        } else {
            return post.title
                .toLowerCase()
                .includes(searchKey.value.toLowerCase()) || post.content
                .toLowerCase()
                .includes(searchKey.value.toLowerCase());
        }
    });
});
const changeLocale = async () => {
    locale.value = langPost.value;
    localStorage.lang = locale;
    await getPersonalPostsLang(locale.value);
};
</script>

