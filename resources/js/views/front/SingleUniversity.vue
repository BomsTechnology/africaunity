<template>
    <Header />
    <div
        class="px-20 text-lg"
    >
        <div>
            <div class="py-6 px-4" v-if="university.length != 0">
                <div 
                    class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                    <!-- University -->
                    <img
                        class="object-cover w-full h-96"
                        :src="university.image"
                        alt=""
                    />
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="text-xs py-1 px-2 rounded capitalize text-white bg-primary-blue"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    university.city.name_en+ '-' + university.country.code_iso
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    university.city.name_fr+ '-' + university.country.code_iso
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    university.city.name_es + '-' + university.country.code_iso
                                }}</span>
                                <span v-else>{{ university.country.name_pt+ '-' + university.country.code_iso }}</span>
                            </a>
                            <h1
                                class="block mt-2 text-3xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"
                            >
                                {{ university.name }}
                            </h1>

                            <p
                                class="mt-2 py-4 my-4 text-gray-600 dark:text-gray-400"
                            >
                                {{ university.description }}
                            </p>
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
            <h1 class="text-3xl text-primary-blue text-center py-2  font-bold">{{ $t('ads-university') }} {{ university.name }}</h1>
            <div class="flex justify-end px-6">
                <router-link
                    :to="{
                        name: 'add.ads',
                    }"
                    class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">{{ $t('add') }} {{ $t('ads') }}</p>
                </router-link>
            </div>
    <div class="py-8">
        <div
                class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10 py-8"
                v-if="announcements.length != 0"
            >           
            <div class="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" v-for="announcement in announcements"
                                            :key="announcement.id">
                
                <router-link
                                :to="{
                                    name: 'show.ads',
                                    params: { id: announcement.id },
                                }">
                <img class="object-cover w-full h-48 mt-2 rounded-t-lg" v-if="announcement.image" :src="announcement.image" :alt="announcement.title">
                <div v-else class=" overflow-hidden w-full h-48 mt-2 rounded-t-lg bg-gray-50 py-10">
                    <SpeakerphoneIcon  class=" h-full w-full text-gray-500" />
                </div>
                </router-link>
                <div class="px-4 py-2 space-y-2">
                    <a
                        href="#"
                        class="text-xs py-1 px-2 mt-2 rounded capitalize text-white bg-primary-blue"
                    >
                        {{ announcement.category.name }}
                            </a>
                            <router-link
                                :to="{
                                    name: 'show.ads',
                                    params: { id: announcement.id },
                                }">
                    <h1 class="text-2xl font-bold text-gray-800 capitalize hover:underline">{{ announcement.title }}</h1>
                    </router-link>
                    
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {{ announcement.description.substring(0, 19) + "..." }}
                    </p>
                </div>
                <div class="flex items-center justify-between px-4 py-2 bg-gray-900 h-10">
                    <h1 class="text-lg font-bold text-white" v-if="announcement.price && announcement.price != 'null'">
                        {{ announcement.price }} {{ announcement.currency.symbol }}
                    </h1>
                    <div
                                class="flex items-center text-xs space-x-2 text-white"
                            >
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <router-link   :to="{name:'compte',  params: { name: announcement.user.firstname, id : announcement.user.id }}"
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ announcement.user.firstname }}</router-link
                                    >
                                </div>
                                <div class="flex space-x-1">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ announcement.date }}</a
                                    >
                                </div>
                            </div>
                </div>
            </div>
        </div>
        <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">{{ $t('no-content') }} </span>
        </div>
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
import {EmojiSadIcon, PlusCircleIcon, SpeakerphoneIcon, CalendarIcon, UserIcon} from "@heroicons/vue/solid";
import useUniversities from "../../services/universityServices.js";
import useAnnouncements from "../../services/announcementServices.js";
import Error from "../../components/Error.vue";
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    components: {
        EmojiSadIcon,
        PlusCircleIcon,
        SpeakerphoneIcon,
        Header,
        Footer,
        Error,
        CalendarIcon, UserIcon
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login", params: { redirect: 'not-login' }, });
        }
    },
    setup(props) {
        const { university, getUniversity2, loading } = useUniversities();
        const user = JSON.parse(localStorage.user);
        const { announcements, getAnnouncementsUniversity} = useAnnouncements();
        onMounted(
            async () => {
                await getUniversity2(props.id);
                await getAnnouncementsUniversity(props.id);
            },  
        );
        
        return {
            loading,
            university,
            announcements,
            user,
        };
    },
};
</script>
