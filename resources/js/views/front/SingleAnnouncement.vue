<template>
    <Header />
    <div
        class="flex lg:flex-row flex-col p-4 lg:space-x-2 md:space-y-2 text-lg"
    >
        <div class="lg:w-[70%]">
            <div class="py-6 px-4" v-if="announcement.length != 0">
                <div 
                    class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                    <!-- Announcement -->
                    <img
                    v-if="announcement.image"
                        class="object-cover w-full h-96"
                        :src="announcement.image"
                        alt=""
                    />
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="text-xs py-1 px-2 rounded capitalize text-white bg-primary-blue"
                            >
                                {{ announcement.category.name }}
                            </a>
                            <h1
                                class="block mt-2 text-3xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"
                            >
                                {{ announcement.title }}
                            </h1>
                            <div class="flex text-xs space-x-2 mt-2 text-gray-500">
                                <div class="flex space-x-1">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ announcement.date }}</a
                                    >
                                </div>
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <router-link :to="{name:'compte',  params: { name: announcement.user.firstname, id : announcement.user.id }}"
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ announcement.user.firstname }}</router-link 
                                    >
                                </div>
                            </div>
                            <p
                                class="mt-2 py-4 my-4 text-gray-600 dark:text-gray-400"
                            >
                                {{ announcement.description }}
                            </p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <router-link  :to="{name:'compte',  params: { name: announcement.user.firstname, id : announcement.user.id }}" class="flex items-center">
                                        <img   
                                            v-if="announcement.user.avatar"                       
                                            class="object-cover h-10 rounded-full"
                                            :src="announcement.user.avatar"
                                        />
                                    
                                    <UserCircleIcon
                                        v-else
                                        class="h-10 w-10 text-gray-700"
                                    />
                                    <span
                                        class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                                        >{{ announcement.user.firstname }}</span
                                    >
                                    </router-link>
                                
                                <div class="flex items-center">
                                    <div
                                        class="ml-3"
                                        v-if="user.id == announcement.user.id"
                                    >
                                        <router-link
                                :to="{
                                    name: 'edit.ads',
                                    params: { id: announcement.id},
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
                <span class="text-2xl mt-2">{{ $t('no-content') }}</span>
            </div>
        </div>
        <div class="lg:w-[30%] bg-white py-5">
            <div class="shadow rounded-md py-5 px-10 space-y-3 ">
                <h1 class="text-2xl text-primary-blue  font-bold">Contact Détails</h1>
                <div class="text-gray-500 flex items-center space-x-2 "> <LocationMarkerIcon class="h-8 w-8" /> <span>{{ announcement.university.name }}</span></div>
                <div class="text-gray-500 flex items-center space-x-2 ">  <MailIcon class="h-8 w-8" /> <span>{{ announcement.email }}</span> </div>
                <div class="text-gray-500 flex items-center space-x-2 ">  <PhoneIcon class="h-8 w-8" /> <span>{{ announcement.phone }} </span> </div>
                <div class="text-gray-500 flex items-center space-x-2 " v-if="announcement.website != 'null'"> <GlobeIcon class=" h-8 w-8" /> <span>{{ announcement.website }} </span></div>
                <div class="text-gray-500 flex items-center space-x-2 " v-if="announcement.adress != 'null'">   <BriefcaseIcon class="h-8 w-8" /> <span>{{ announcement.adress }} </span></div>
                <div class="text-gray-500 flex items-center space-x-2 ">   <CashIcon class=" h-8 w-8" /> <span>{{ announcement.price }} {{ announcement.currency.symbol }} </span></div>
            </div>
            <div class="shadow rounded-md py-5 mt-4">
                <Error v-if="errors != ''">{{ errors }}</Error>
                    <form @submit.prevent="">
                        <div class="px-8">
                            <label class="text-xl text-primary-blue  font-bold" for="pt">Contactez le lanceur d'annonce <span class="text-red-500">*</span></label>
                            <textarea  required type="text"  id="pt" class="block w-full px-4 py-2 mt-2 text-gray-700 h-60 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                            <div class="mt-6">
                                <input type="hidden">
                                <button v-if="loadingC == 0" type="submit" class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-primary-blue focus:outline-none">Envoyer</button>
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
    </div>
    <Footer />
</template>

<script>
import router from "../../router";
import { reactive, ref, onMounted } from "vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Error from "../../components/Error.vue";
import {
    PlusCircleIcon,
    CalendarIcon,
    UserCircleIcon,
    EmojiSadIcon,
    LocationMarkerIcon,
    PencilAltIcon,
    UserIcon,
    MailIcon,
    PhoneIcon,
    GlobeIcon,
    CashIcon,
    BriefcaseIcon
} from "@heroicons/vue/solid";
import useAnnouncements from "../../services/announcementServices.js";
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    components: {
        UserIcon,
        PlusCircleIcon,
        LocationMarkerIcon,
        CalendarIcon,
        EmojiSadIcon,
        UserCircleIcon,
        PencilAltIcon,
        Header,
        Footer,
        Error,
        MailIcon,
        PhoneIcon,
        GlobeIcon,
        CashIcon,
        BriefcaseIcon
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login", params: { redirect: 'not-login' }, });
        }
    },
    setup(props) {
        const { announcement, getAnnouncement2, loading, errors } = useAnnouncements();
        const user = JSON.parse(localStorage.user);
        const loadingC = ref(0);
        onMounted(
            getAnnouncement2(props.id)  
        );

        
        return {
            loading,
            errors,
            announcement,
            user,
            loadingC
        };
    },
};
</script>
