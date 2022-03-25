<template>
    <Header />
    <div
        class="flex lg:flex-row flex-col-reverse p-4 lg:space-x-2 md:space-y-2 text-lg"
    >
        <div class="lg:w-[70%]">
            <h1
                class="text-5xl text-primary-blue text-center capitalize font-bold"
            >
                {{ $t("propau") }}
            </h1>
            <div class="flex justify-end px-6">
                <router-link
                    :to="{
                        name: 'add.post',
                        params: { type: 'propau' },
                    }"
                    class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Add PropAU</p>
                </router-link>
            </div>
            <div
                class="grid lg:grid-cols-2 gap-8 px-10 py-8"
                v-if="posts.length != 0"
            >
                <div
                    class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                    v-for="post in posts"
                    :key="post.id"
                >
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="text-xs py-1 px-2 rounded capitalize text-white"
                                :style="'background:' + post.ministry.color"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    post.ministry.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    post.ministry.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    post.ministry.name_es
                                }}</span>
                                <span v-else>{{ post.country.name_pt }}</span>
                            </a>
                            <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"
                                href="#"
                                class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
                                >{{ post.title }}</router-link
                            >
                            <p
                                class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                                {{ post.content.substring(0, 19) + "..." }}
                            </p>
                        </div>

                        <div
                            class="flex items-center justify-between mt-4 text-sm"
                        >
                            <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"
                                class="text-blue-600 dark:text-blue-400 hover:underline"
                                >Read more</router-link
                            >

                            <div
                                class="flex items-center text-xs space-x-2 text-gray-500"
                            >
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <a
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ post.user.firstname }}</a
                                    >
                                </div>
                                <div class="flex space-x-1">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ post.date }}</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="loading == 1" class="p-28">
                <svg
                                                    class="animate-spin h-16 w-16 mx-auto"
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
            <div v-else class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse">
                <EmojiSadIcon class="h-16 w-16" /> <span class="text-2xl mt-2">NO CONTENT </span>
            </div>
        </div>
        <div class="lg:w-[30%] bg-white">
            <FilterPropAu />
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import FilterPropAu from "../../components/FilterPropAu.vue";
import { PlusCircleIcon, CalendarIcon, UserIcon, EmojiSadIcon} from "@heroicons/vue/solid";
import { reactive, ref, onMounted } from "vue";
import router from "../../router";
import usePosts from "../../services/postServices.js";
export default {
    components: {
        PlusCircleIcon,
        UserIcon,
        CalendarIcon,
        EmojiSadIcon,
        Header,
        Footer,
        FilterPropAu,
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login" });
        }
    },
    setup(props) {
        const { posts, getPosts, loading, errors } = usePosts();
        onMounted(() => {
            if (!localStorage.token) {
                router.push({ name: "login" });
            }
        }, getPosts("propau", localStorage.lang));

        console.log(posts.value);

        return {
            loading,
            errors,
            posts,
        };
    },
};
</script>
