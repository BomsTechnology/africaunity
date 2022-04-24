<template>
    <Header />
    <div
        class="flex lg:flex-row flex-col-reverse p-4 lg:space-x-2 md:space-y-2 text-lg"
    >
        <div class="lg:w-[70%]">
            <h1
                class="text-5xl text-primary-blue text-center capitalize font-bold"
            >
                {{ $t("articles") }}
            </h1>
            <div class="flex justify-end px-6">
                <router-link
                    :to="{
                        name: 'add.post',
                        params: { type: 'article' },
                    }"
                    v-if="(user.type != 'business1')"
                    class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">{{ $t('add') }} Article</p>
                </router-link>
            </div>
            <div
                class="grid lg:grid-cols-2 gap-8 lg:px-10 py-8"
                v-if="posts.length != 0"
            >
                <div
                    class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                    v-for="post in posts"
                    :key="post.id"
                >
                    <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }">
                    <img
                        class="object-cover w-full h-44"
                        :src="post.image"
                        alt=""
                    />
                    </router-link>
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
                                >{{ post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "..." }}</router-link
                            >
                            <!-- <p
                                class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                                {{ post.content.substring(0, 19) + "..." }}
                            </p> -->
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
                                >{{ $t('read-more') }}</router-link
                            >

                            <div
                                class="flex items-center text-xs space-x-2 text-gray-500"
                            >
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <router-link   :to="{name:'compte',  params: { name: post.user.firstname, id : post.user.id }}"
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ post.user.firstname }}</router-link
                                    >
                                </div>
                                <div class="hidden lg:flex space-x-1">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ post.date }}</a
                                    >
                                </div>
                                <div class="flex item-center space-x-1">
                        <ChatIcon class="h-4 w-4 text-gray-500" />
                        <a href="#" class="hover:text-primary-blue text-xs"
                            >{{ post.comments }}</a
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
            <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">{{ $t('no-content') }} </span>
            </div>
        </div>
        <div class="lg:w-[30%] bg-white">
            <div class="w-full z-0 bg-white">
        <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
            {{ $t("filter-article") }}
        </h1>
        <form @submit.prevent="PostsFilter()">
            <div class="border-t-2 space-y-1 border-primary-blue text-md p-4">
                <div>
                    <label class="text-gray-500 text-xs">{{
                        $t("language")
                    }}</label>
                    <select
                        v-model="filter.lang"
                        
                        class="form-select px-3 text-xs py-2 w-full mt-1  border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="fr">{{ $t("fr") }}</option>
                        <option value="en">{{ $t("en") }}</option>
                        <option value="es">{{ $t("es") }}</option>
                        <option value="pt">{{ $t("pt") }}</option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-500 text-xs">{{ $t("key-words") }}</label>
                    <input
                        type="text"
                        v-model="filter.keywords"
                        :placeholder="$t('key-words')"
                        class="form-input px-3 py-2 w-full text-xs mt-1 border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                    />
                </div>
                <div>
                    <label class="text-gray-500 text-xs">{{ $t("continent") }}</label>
                    <select
                        v-model="filter.continent"
                        
                        class="form-select px-3 py-2 w-full mt-1 text-xs border-gray-300  focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="">--------------</option>
                        <option v-for="continent in continents" :key="continent.id" :value="continent.id">
                            <span v-if="$i18n.locale == 'en'">{{ continent.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ continent.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ continent.name_es }}</span> 
                            <span v-else>{{ continent.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-500 text-xs">{{ $t("zoned") }}</label>
                    <select
                        v-model="filter.zone"
                        
                        class="form-select px-3 py-2 w-full mt-1 text-xs border-gray-300  focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="">--------------</option>
                        <option v-for="zone in zones" :key="zone.id" :value="zone.id">
                            <span v-if="$i18n.locale == 'en'">{{ zone.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ zone.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ zone.name_es }}</span> 
                            <span v-else>{{ zone.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-500 text-xs">{{ $t("country") }}</label>
                    <select
                        v-model="filter.country"
              
                        class="form-select px-3 py-2 w-full mt-1 text-xs border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="">--------------</option>
                        <option v-for="country in countries" :key="country.id" :value="country.id">
                            <span v-if="$i18n.locale == 'en'">{{ country.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ country.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ country.name_es }}</span> 
                            <span v-else>{{ country.name_pt }}</span> 
                        </option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-500 text-xs">{{ $t("ministry") }}</label>
                    <select
                        v-model="filter.ministry"
                        
                        class="form-select px-3 py-2 w-full mt-1 text-xs  border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="">--------------</option>
                        <option v-for="ministry in ministries" :key="ministry.id" :value="ministry.id">
                            <span v-if="$i18n.locale == 'en'">{{ ministry.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ ministry.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ ministry.name_es }}</span> 
                            <span v-else>{{ ministry.name_pt }}</span> 
                        </option>
                    </select>
                </div>
                <div>
                    <button type="submit" v-if="loading == 0 || loading == 2" class="text-white text-lg bg-primary-blue px-8 py-2 mt-3 w-full">{{ $t("filter") }}</button>
                    <button  disabled type="submit" v-if="loading == 1" class="inline-flex items-center justify-center text-white text-lg bg-blue-300 cursor-wait px-8 py-2 mt-3 w-full">
                        <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ $t("filter") }}...
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

import { reactive, ref, onMounted, computed } from "vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import useCountries from "../../services/countryServices.js";
import useZones from "../../services/zoneServices.js";
import useContinents from "../../services/continentServices.js";
import useMinistries from "../../services/ministryServices.js";
import { useRoute } from "vue-router";
import {
    PlusCircleIcon,
    CalendarIcon,
    UserIcon,
    EmojiSadIcon,
    ChatIcon,
} from "@heroicons/vue/solid";

import usePosts from "../../services/postServices.js";
export default {
    components: {
        ChatIcon,
        PlusCircleIcon,
        UserIcon,
        CalendarIcon,
        EmojiSadIcon,
        Header,
        Footer,
    },
    setup(props) {
        const route = useRoute();
        const { posts, getPosts, filterPost, loading, errors } = usePosts();
        const { countries, getCountries } = useCountries();
        const { zones, getZones } = useZones();
        const { continents, getContinents } = useContinents();
        const { ministries, getMinistries } = useMinistries();
        const user = localStorage.user ? JSON.parse(localStorage.user) : '';
        const filter = reactive({
            country: "",
            continent:  "",
            ministry: "",
            zone: "",
            keywords: "",
            lang: localStorage.lang ,
            type:"article",
        });
        onMounted(
            async () => {
                if("lang" in route.query){
                    filter.continent = route.query.continent;
                    filter.zone = route.query.zone;
                    filter.ministry = route.query.ministry;
                    filter.keywords = route.query.keywords;
                    filter.country = route.query.country;
                    filter.lang = route.query.lang;
                    await filterPost({...filter});
                }else{
                    await getPosts("article", localStorage.lang)
                }
                await getContinents();
                await getZones();
                await getCountries();
                await getMinistries();
            }
        );

        const PostsFilter =  async () => {
            await filterPost({...filter});
        };

        return {
            PostsFilter,
            ministries,
            countries,
            zones,
            continents,
            filter,
            user,
            loading,
            errors,
            posts,
        };
    },
};

</script>
