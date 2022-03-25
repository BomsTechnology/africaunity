<template>
    <Header />
    <div
        class="flex lg:flex-row flex-col p-4 lg:space-x-2 md:space-y-2 text-lg"
    >
        <div class="lg:w-[70%]">
            <div class="py-6 px-4" v-if="post.length != 0">
                <div 
                    class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                    <img
                        class="object-cover w-full h-96"
                        :src="post.image"
                        v-if="post.type == 'article'"
                        alt=""
                    />
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
                            <h1
                                class="block mt-2 text-3xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"
                            >
                                {{ post.title }}
                            </h1>
                            <div class="flex text-xs space-x-2 mt-2 text-gray-500">
                                <div class="flex space-x-1">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ post.date }}</a
                                    >
                                </div>
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <a
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ post.user.firstname }}</a
                                    >
                                </div>
                                <div class="flex space-x-1">
                                    <ChatIcon class="h-4 w-4" />
                                    <a href="#" class="hover:text-primary-blue"
                                        >0</a
                                    >
                                </div>
                            </div>
                            <p
                                class="mt-2 py-4 my-4 text-gray-600 dark:text-gray-400"
                            >
                                {{ post.content }}
                            </p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <img
                                        v-if="post.user.avatar"
                                        class="object-cover h-10 rounded-full"
                                        :src="post.user.avatar"
                                    />
                                    <UserCircleIcon
                                        v-else
                                        class="h-10 w-10 text-gray-700"
                                    />
                                    <a
                                        href="#"
                                        class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                                        >{{ post.user.firstname }}</a
                                    >
                                </div>
                                <div class="flex items-center">
                                    <div>
                                        <ExclamationCircleIcon
                                            class="h-5 w-5 text-gray-400 cursor-pointer hover:text-red-300"
                                        />
                                    </div>
                                    <div
                                        class="ml-3"
                                        v-if="user.id == post.user.id"
                                    >
                                        <router-link
                                :to="{
                                    name: 'edit.post',
                                    params: { id: post.id, type: post.type},
                                }">
                                        <PencilAltIcon
                                            class="h-5 w-5 text-gray-400 cursor-pointer hover:text-primary-blue"
                                        />
                                        </router-link>
                                    </div>
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
            <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">NO CONTENT </span>
            </div>
        </div>
        <div class="lg:w-[30%] bg-white">
            <FilterArticle />
        </div>
    </div>
    <Footer />
</template>

<script>
import router from "../../router";
import { reactive, ref, onMounted } from "vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import FilterArticle from "../../components/FilterArticle.vue";
import {
    PlusCircleIcon,
    CalendarIcon,
    UserCircleIcon,
    EmojiSadIcon,
    ExclamationCircleIcon,
    PencilAltIcon,
    UserIcon,
    ChatIcon,
} from "@heroicons/vue/solid";
import usePosts from "../../services/postServices.js";

export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    components: {
        ChatIcon,
        UserIcon,
        PlusCircleIcon,
        UserCircleIcon,
        CalendarIcon,
        EmojiSadIcon,
        ExclamationCircleIcon,
        PencilAltIcon,
        Header,
        Footer,
        FilterArticle,
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login" });
        }
    },
    setup(props) {
        const { post, getPost2, loading, errors } = usePosts();
        onMounted( 
        getPost2(props.id),  
        );

        const user = JSON.parse(localStorage.user);

        return {
            loading,
            errors,
            post,
            user,
        };
    },
};
</script>
