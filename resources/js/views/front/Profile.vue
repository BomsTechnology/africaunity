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
                            <h1 class="lg:text-3xl text-2xl lg:text-left text-center font-semibold capitalize text-gray-700"> <span>{{ user.firstname }}</span> <span v-if="user.type ==  'particular'">{{ user.lastname }}</span> </h1>
                            <div class="flex items-center space-x-2 text-sm mt-2">
                                <h2 class="text-primary-blue">{{ user.email }}</h2> 
                                <h2 class="text-gray-400">° 9999999</h2>
                            </div>
                        </div>
                        <div class="space-x-2 flex items-center lg:py-0 py-1" v-if="user.id == loginUser.id">
                            <router-link
                    :to="{
                        name: 'add.post',
                        params: { type: 'article' },
                    }" class="py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue">
                                <PlusCircleIcon class="w-5 h-5"/>
                                <span class="lg:block hidden">{{ $t('add') }} {{ $t('articles') }}</span>                        
                            </router-link>
                            <a href="#" class="py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue">
                                <PencilIcon class="w-5 h-5"/>
                                <span class="lg:block hidden">{{ $t('edit') }} {{ $t('profile') }}</span> 
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
                <span class="lg:block hidden">{{ $t('profile') }}</span>
            </button>
            <button @click="changeTab('article')" :class="[ open.article ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <NewspaperIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('articles') }}</span>                
            </button>
            <button @click="changeTab('propau')" :class="[ open.propau ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <BookOpenIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('propau') }}</span>               
            </button>
            <button @click="changeTab('comment')" :class="[ open.comment ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <ChatIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('comments') }}</span>               
            </button>
            <button v-if="user.id == loginUser.id" @click="changeTab('job')" :class="[ open.job ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <ChatAltIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('my-jobs') }}</span>               
            </button>
            <button v-if="user.id == loginUser.id" @click="changeTab('ads')" :class="[ open.ads ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <SpeakerphoneIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('my-ads') }}</span>               
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
                <div class="overflow-hidden">
                    <table
                        class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                    >
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Post
                                </th>
                                <th
                                    scope="col"
                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Comment
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
                            v-if="comments.length != 0"
                        >
                            <tr
                                v-for="comment in comments"
                                :key="comment.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: comment.post.id },
                                    }"
                                    class="hover:underline"
                                    >{{ comment.post.title }}</router-link> 
                                </td>
                                <td
                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <span v-if="modifyComment.id == '' || modifyComment.id != comment.id">{{ comment.content }}</span>
                                    <form v-if="modifyComment.id != '' && modifyComment.id == comment.id" @submit.prevent="saveComment()">
                                        <textarea required v-model="modifyComment.content" type="text" id="pt" class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        </textarea>
                                        <div class="flex justify-end mt-6">
                                            <button
                                                type="submit"
                                                class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </td>
                                <td
                                    class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <div class="flex">
                                        <button
                                            @click="selectComment(comment)"
                                            class="text-primary-blue dark:text-blue-500 hover:underline"
                                            >
                                            <PencilAltIcon
                                                    class="h-5 w-5 hover:text-blue-700 cursor-pointer text-blue-400"
                                                />
                                            </button
                                        >
                                        <button
                                            @click="deleteComment(comment.id)"
                                            class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                            >
                                                <TrashIcon
                                                    class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                                />
                                            </button
                                        >
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            v-else
                        >
                            <tr
                                
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    colspan="5"
                                    class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                                >
                                    NO COMMENT
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
         <div class=" py-8 px-16" v-else-if="open.job">
                <h1 class="text-center text-2xl text-gray-500 font-bold italic">Job Comming Soon</h1>
        </div>
         <div class=" py-8 px-16" v-else>
             <div class="flex justify-end px-6">
                <router-link
                    :to="{
                        name: 'add.ads',
                    }"
                    class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">{{ $t('add') }} Annonce</p>
                </router-link>
            </div>
                <div class="overflow-hidden">
                    <table
                        class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                    >
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    Ads
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
                            v-if="announcements.length != 0"
                        >
                            <tr
                                v-for="announcement in announcements"
                                :key="announcement.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <router-link 
                                    :to="{
                                        name: 'show.ads',
                                        params: { id: announcement.id },
                                    }"
                                    class="hover:underline"
                                    >{{ announcement.title }}</router-link> 
                                </td>
                                <td
                                    class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <div class="flex">
                                        <router-link
                                :to="{
                                    name: 'edit.ads',
                                    params: { id: announcement.id},
                                }"
                                            class="text-primary-blue dark:text-blue-500 hover:underline"
                                            >
                                            <PencilAltIcon
                                                    class="h-5 w-5 hover:text-blue-700 cursor-pointer text-blue-400"
                                                />
                                            </router-link
                                        >
                                        <button
                                            @click="deleteAnnouncement(announcement.id)"
                                            class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                            >
                                                <TrashIcon
                                                    class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                                />
                                            </button
                                        >
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            v-else
                        >
                            <tr
                                
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    colspan="5"
                                    class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                                >
                                    NO ADS
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
import useUsers from "../../services/userServices.js";
import useComments from "../../services/commentServices.js";
import useAnnouncements from "../../services/announcementServices.js";
import { CogIcon, TrashIcon, PlusCircleIcon, SpeakerphoneIcon, PencilIcon, PencilAltIcon, NewspaperIcon, ChatIcon, ChatAltIcon, BookOpenIcon, IdentificationIcon, UserCircleIcon } from "@heroicons/vue/solid";
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
        TrashIcon,
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
        const loginUser = JSON.parse(localStorage.user);
        const { articles, getPostsUser, propau, loading, errors } = usePosts();
        const { user, getUser, } = useUsers();
        const { comments, getCommentsUser, destroyComment, updateComment} = useComments();
        const { announcements, getAnnouncementsUser, destroyAnnouncement} = useAnnouncements();
        onMounted(                
            async () => {
                await getUser(props.id);
                await getPostsUser(props.id);
                await getCommentsUser(props.id);
                await getAnnouncementsUser(props.id);
            }
            
        );      

        const deleteComment = async (id) => {
            if(confirm("I you Sure ?")){
                await destroyComment(id)
                await getCommentsUser(props.id);
            }
        };

        const deleteAnnouncement = async (id) => {
            if(confirm("I you Sure ?")){
                await destroyAnnouncement(id)
                await getAnnouncementsUser(props.id);
            }
        };

        const modifyComment = reactive({
            id: '',
            user_id: '',
            post_id: '',
            content: '',
        });
        
        const selectComment = (comment) => {
            modifyComment.id = comment.id;
            modifyComment.content = comment.content;
            modifyComment.user_id = comment.user.id;
            modifyComment.post_id = comment.post.id;
        }

        const saveComment = async () => {
            await updateComment(modifyComment);
            modifyComment.id = '';
            modifyComment.content = '';
            modifyComment.user_id = '';
            modifyComment.post_id = '';
            await getCommentsUser(props.id);
        }

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
            deleteAnnouncement,
            changeTab,
            deleteComment,
            announcements,
            user,
            loginUser,
            propau,
            articles,
            loading,
            errors,
            comments,
            modifyComment,
            selectComment,
            saveComment,
        }
    },
}
</script>
