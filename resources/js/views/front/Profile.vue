<template>
    <Header />
   <section class="lg:py-10 p-4 lg:px-20">
        <div class="h-96 relative">
            <div class="h-1/2 bg-gray-50 z-0">

            </div>
            <div class="h-1/2 bg-white z-10 flex lg:justify-end items-center justify-center lg:space-x-3 relative">
                <div class="lg:w-60 lg:h-60 overflow-hidden absolute h-40 w-40 text-center lg:left-4 mb-40 lg:mt-0 -mt-28 bg-white z-10 rounded-full">
                    <img :src="user.avatar" class="w-full h-full bg-cover object-cover" alt="" v-if="user.avatar">
                    <UserCircleIcon v-else class="w-full h-full text-gray-500"/>
                </div>
                <div class="lg:w-[80%] px-8 py-4">
                    <div class="flex lg:justify-between items-center lg:flex-row flex-col lg:mt-0 mt-20">
                        <div>
                            <h1 class="lg:text-3xl text-2xl lg:text-left text-center font-semibold capitalize text-gray-700">{{ user.firstname + ' ' + user.lastname }}</h1>
                            <div class="flex items-center space-x-2 text-sm mt-2">
                                <h2 class="text-primary-blue">marcsigha@gmail.com</h2> 
                                <h2 class="text-gray-400">° 658401181</h2>
                            </div>
                        </div>
                        <div class="space-x-2 flex items-center lg:py-0 py-1">
                            <router-link
                    :to="{
                        name: 'add.post',
                        params: { type: 'article' },
                    }" class="py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue">
                                <PlusCircleIcon class="w-5 h-5"/>
                                <span class="lg:block hidden">Ajouter un article</span>                        
                            </router-link>
                            <a href="#" class="py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue">
                                <PencilIcon class="w-5 h-5"/>
                                <span class="lg:block hidden">Modifier mon profil</span> 
                            </a>
                            <a href="#">
                                <CogIcon class="h-8 w-8 text-gray-600  hover:text-primary-blue" />
                            </a>
                        </div>
                    </div>
                    <div class="text-sm font-light text-gray-500 overflow-y-auto lg:h-24 h-20 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quod reiciendis quae, laudantium officiis nam ducimus nihil tempora dicta magni unde ipsa facilis ipsum animi asperiores, alias itaque facere enim.
                    </div>
                </div>
            </div>
        </div>
        <div class="px-5 py-3 space-x-2 bg-menu flex items-center lg:mt-0 mt-20">
            <button @click="changeTab('profil')" :class="[ open.profil ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <IdentificationIcon class="w-5 h-5"/>
                <span class="lg:block hidden">Profil</span>
            </button>
            <button @click="changeTab('article')" :class="[ open.article ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <NewspaperIcon class="w-5 h-5"/>
                <span class="lg:block hidden">Articles</span>                
            </button>
            <button @click="changeTab('propau')" :class="[ open.propau ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <BookOpenIcon class="w-5 h-5"/>
                <span class="lg:block hidden">PropAU</span>               
            </button>
            <button @click="changeTab('comment')" :class="[ open.comment ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <ChatIcon class="w-5 h-5"/>
                <span class="lg:block hidden">Commentaires</span>               
            </button>
            <button @click="changeTab('job')" :class="[ open.job ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <ChatAltIcon class="w-5 h-5"/>
                <span class="lg:block hidden">Mes Offres d'emploi</span>               
            </button>
            <button @click="changeTab('ads')" :class="[ open.ads ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <SpeakerphoneIcon class="w-5 h-5"/>
                <span class="lg:block hidden">Mes Annonces</span>               
            </button>
        </div>
        <div class=" py-8 px-16" v-if="open.profil">
                Profil
        </div>
         <div v-else-if="open.article">
            <div
                class="grid lg:grid-cols-2 gap-8 px-6 py-8"
                v-if="articles.length != 0"
            >
            
            <div v-for="post in articles"
                    :key="post.id" class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    
                <div class="w-1/3 bg-cover overflow-hidden">
                   <router-link :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"><img :src="post.image" class="w-full h-full bg-cover object-cover" :alt="post.title"></router-link> 
                </div>

                <div class="w-2/3 p-4 md:p-4">
                    <router-link :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"  class="text-2xl font-bold text-gray-800 dark:text-white">{{ post.title }}</router-link>

                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ post.content.substring(0, 19) + "..." }}</p>

                    <div class="flex mt-2 item-center space-x-1">
                        <ChatIcon class="h-4 w-4 text-gray-500" />
                        <a href="#" class="hover:text-primary-blue text-xs"
                            >0</a
                        >

                    </div>

                    <div class="flex justify-between mt-3 item-center">
                        <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }" class="text-sm font-bold text-primary-blue hover:underline">Read More</router-link>
                        <router-link
                                :to="{
                                    name: 'edit.post',
                                    params: { id: post.id, type: post.type},
                                }">
                                        <PencilAltIcon
                                            class="h-5 w-5 hover:text-gray-400 cursor-pointer text-primary-blue"
                                        />
                                        </router-link>
                    </div>
                </div>
            </div>
            </div>
            <h1  v-else class="text-center text-2xl text-gray-500 font-bold italic">NO ARTICLE</h1>
        </div>
         <div class=" py-8 px-16" v-else-if="open.propau">
            <div
                class="grid lg:grid-cols-2 gap-8 px-10 py-8"
                v-if="propau.length != 0"
            >
            <div v-for="post in propau"
                    :key="post.id" class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    
                <div class="w-1/3 bg-cover overflow-hidden">
                   <router-link :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }">
                                <BookOpenIcon class="w-full h-full text-gray-400"/>
                                </router-link> 
                </div>

                <div class="w-2/3 p-4 md:p-4">
                    <router-link :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"  class="text-2xl font-bold text-gray-800 dark:text-white">{{ post.title }}</router-link>

                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ post.content.substring(0, 19) + "..." }}</p>

                    <div class="flex mt-2 item-center space-x-1">
                        <ChatIcon class="h-4 w-4 text-gray-500" />
                        <a href="#" class="hover:text-primary-blue text-xs"
                            >0</a
                        >

                    </div>

                    <div class="flex justify-between mt-3 item-center">
                        <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }" class="text-sm font-bold text-primary-blue hover:underline">Read More</router-link>
                        <router-link
                                :to="{
                                    name: 'edit.post',
                                    params: { id: post.id, type: post.type},
                                }">
                                        <PencilAltIcon
                                            class="h-5 w-5 hover:text-gray-400 cursor-pointer text-primary-blue"
                                        />
                                        </router-link>
                    </div>
                </div>
            </div>
            </div>
            <h1 v-else class="text-center text-2xl text-gray-500 font-bold italic">NO PROPAU</h1>
        </div>
         <div class=" py-8 px-16" v-else-if="open.comment">
                <h1 class="text-center text-2xl text-gray-500 font-bold italic">Comment Comming Soon</h1>
        </div>
         <div class=" py-8 px-16" v-else-if="open.job">
                <h1 class="text-center text-2xl text-gray-500 font-bold italic">Job Comming Soon</h1>
        </div>
         <div class=" py-8 px-16" v-else>
               <h1 class="text-center text-2xl text-gray-500 font-bold italic">Ads Comming Soon</h1>
        </div>

    </section>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { reactive, ref, onMounted} from "vue";
import router from "../../router";
import usePosts from "../../services/postServices.js";
import { CogIcon, PlusCircleIcon, SpeakerphoneIcon, PencilIcon, PencilAltIcon, NewspaperIcon, ChatIcon, ChatAltIcon, BookOpenIcon, IdentificationIcon, UserCircleIcon } from "@heroicons/vue/solid";
export default {
    props: {
        name: {
            required: true,
            type: String,
        },
        id: {
            required: true,
            type: String,
        },
    },
    components:{
        Header,
        Footer,
        PencilAltIcon,
        BookOpenIcon,
        ChatAltIcon,
        ChatIcon,
        NewspaperIcon,
        PencilIcon,
        IdentificationIcon,
        SpeakerphoneIcon,
        CogIcon,
        PlusCircleIcon,
        UserCircleIcon
    },
    setup(props) {
        const user = JSON.parse(localStorage.user);
        const { articles, getPostsUser, propau, loading, errors } = usePosts();
        
        onMounted(                
            ()=>{
                if(!localStorage.token){
                    router.push({ name: "login" });
                }
            },
            getPostsUser(props.id)
        );      

        const open = reactive({
            profil: true,
            article: false,
            propau: false, 
            comment: false,
            job: false,
            ads: false 
        });

        const changeTab = (type) => {
            switch (type){
                case 'profil':
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = true;
                break;
                case 'article':
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.profil = false;
                    open.article = true;
                break;
                case 'propau':
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.article = false;
                    open.profil = false;
                    open.propau = true;
                break;
                case 'comment':
                    open.ads = false;
                    open.job = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.comment = true;
                break;
                case 'job':
                    open.ads = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.job = true;
                break;
                case 'ads':
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.ads = true;
                break;
            }
        }

        return{
            open,
            changeTab,
            user,
            propau,
            articles,
            loading,
            errors
        }
    },
}
</script>
