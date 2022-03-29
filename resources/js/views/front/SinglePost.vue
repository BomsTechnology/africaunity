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
                    <!-- Post -->
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
                                    <router-link :to="{name:'compte',  params: { name: post.user.firstname, id : post.user.id }}"
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ post.user.firstname }}</router-link 
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
                                <router-link  :to="{name:'compte',  params: { name: post.user.firstname, id : post.user.id }}" class="flex items-center">
                                        <img   
                                            v-if="post.user.avatar"                       
                                            class="object-cover h-10 rounded-full"
                                            :src="post.user.avatar"
                                        />
                                    
                                    <UserCircleIcon
                                        v-else
                                        class="h-10 w-10 text-gray-700"
                                    />
                                    <span
                                        class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                                        >{{ post.user.firstname }}</span
                                    >
                                    </router-link>
                                
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
                    <!-- Comments -->
                    <div class="mt-4 px-8 py-4" v-if="comments.length != 0">
                        <div class="flex border-b py-4" v-for="comment in comments" :key="comment.id">
                            <div>
                                <router-link  v-if="token != ''" :to="{name:'compte',  params: { name: comment.user.firstname, id : comment.user.id }}">
                                <div class="md:w-20 md:h-20 w-12 h-12 rounded-full shadow overflow-hidden">
                                    <img :src="user.avatar" class="w-full h-full bg-cover object-cover" alt="" v-if="user.avatar">
                                    <UserCircleIcon v-else class="w-full h-full text-gray-500"/>
                                </div>
                                <h1 class="mt-2 text-center font-bold hover:underline">{{ comment.user.firstname }}</h1>
                                </router-link>
                                <h3 class="font-light text-center text-sm">{{ comment.date }}</h3>
                            </div>
                            
                            <div class="ml-2 w-full p-2">
                                {{ comment.content }}
                            </div>
                        </div>
                    </div>
                    <!-- Add Comment -->
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <form @submit.prevent="storeComment()">
                        <div class="mt-4 px-8 py-4">
                            <label class="text-gray-700 dark:text-gray-200" for="pt">Laisser un Commentaire <span class="text-red-500">*</span></label>
                            <textarea v-model="comment.content" required type="text"  id="pt" class="block w-full px-4 py-2 mt-2 text-gray-700 h-60 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                            <div class="mt-6">
                                <input type="hidden" v-model="comment.post_id">
                                <button v-if="loadingC == 0" type="submit" class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-primary-blue focus:outline-none">{{ $t('save') }}</button>
                                <button v-if="loadingC == 1" type="submit" disabled class="px-6 py-4 text-md leading-5 flex justify-center items-center w-full text-white rounded bg-blue-300 focus:outline-none">
                                    {{ $t('save') }}...
                                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                </button>
                            </div>
                        </div>
                    </form>
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
import useComments from "../../services/commentServices.js";
import Error from "../../components/Error.vue";
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
        Error
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login" });
        }
    },
    setup(props) {
        const { post, getPost2, loading } = usePosts();
        const { createComment, errors, comments, getCommentsPost } = useComments();
        const user = JSON.parse(localStorage.user);
        const comment = reactive({
            user_id: user.id,
            post_id: '',
            content: '',
        });
        onMounted(
            async () => {
                await getPost2(props.id);
                await getCommentsPost(props.id);
                comment.post_id = post.value.id;
            },  
        );

        
        
        const loadingC = ref(0);
        const storeComment = async () => {
            loadingC.value = 1;
            await createComment({...comment});
            loadingC.value = 0;
            comment.content = "";
            await getCommentsPost(props.id);
        }
        return {
            loading,
            loadingC,
            storeComment,
            comments,
            errors,
            post,
            comment,
            user,
        };
    },
};
</script>
