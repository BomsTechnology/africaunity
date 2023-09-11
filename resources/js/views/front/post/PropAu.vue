<template>
    <div
        class="mx-auto flex min-h-screen w-full flex-col-reverse bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"
    >
        <div class="lg:w-[70%]">
            <h1
                class="text-center text-5xl font-bold capitalize text-primary-blue"
            >
                {{ $t("propau") }}
            </h1>
            <div class="flex justify-end px-6">
                <router-link
                    :to="{
                        name: 'add.post',
                        params: { type: 'propau' },
                    }"
                    v-if="user.type != 'business1'"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">
                        {{ $tc("add", 2) }} PropAU
                    </p>
                </router-link>
            </div>
            <div v-if="loading == 3">
                <PropAu />
            </div>
            <div
                class="grid gap-8 py-8 lg:grid-cols-2 lg:px-10"
                ref="postsContainer"
                v-else-if="posts.length != 0"
            >
                <div
                    class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md"
                    v-for="post in posts"
                    :key="post.id"
                >
                    <div class="p-6 flex flex-col h-full">
                        <div class="flex flex-col grow">
                            <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id, slug: post.slug },
                                }"
                                class="dark:text-white mt-2 block  transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"
                                >{{
                                    post.title
                                }}</router-link
                            >
                            <ul class=" flex items-center gap-4 my-2 grow flex-wrap">
                                <li
                                    class=" rounded py-1 px-2 text-xs capitalize text-white"
                                    v-for="ministry in post.ministries"
                                    :style="'background:' + ministry.color"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        ministry.name_en.substring(0, 29) + "..."
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        ministry.name_fr.substring(0, 29) + "..."
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        ministry.name_es.substring(0, 29) + "..."
                                    }}</span>
                                    <span v-else>
                                        {{
                                             ministry.name_pt.substring(0, 29) + "..."
                                        }}
                                    </span>
                                </li>
                            </ul>
                            
                        </div>

                        <div
                            class="mt-4 flex items-center justify-between text-sm"
                        >
                            <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id, slug: post.slug },
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
                                <div class="item-center flex space-x-1">
                                    <ChatBubbleOvalLeftEllipsisIcon
                                        class="h-4 w-4 text-gray-500"
                                    />
                                    <a
                                        href="#"
                                        class="text-xs hover:text-primary-blue"
                                        >{{ post.comments }}</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="loading == 1">
                <PropAu />
            </div>
            <NoContent v-if="posts.length == 0 && loading != 1" />
        </div>
        <div class="bg-white lg:w-[30%]">
            <div class="z-0 w-full bg-white">
                <h1 class="inline-block bg-primary-blue px-2 py-1 text-white">
                    {{ $t("filter-propau") }}
                </h1>
                <form @submit.prevent="PostsFilter()">
                    <div
                        class="text-md space-y-2 border-t-2 border-primary-blue p-4"
                    >
                        <div>
                            <label class="text-xs text-gray-500">{{
                                $t("language")
                            }}</label>
                            <select
                                v-model="filter.lang"
                                class="form-select mt-2 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"
                            >
                                <option value="fr">{{ $t("fr") }}</option>
                                <option value="en">{{ $t("en") }}</option>
                                <option value="es">{{ $t("es") }}</option>
                                <option value="pt">{{ $t("pt") }}</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-xs text-gray-500">{{
                                $t("key-words")
                            }}</label>
                            <input
                                type="text"
                                v-model="filter.keywords"
                                :placeholder="$t('key-words')"
                                class="form-input mt-2 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"
                            />
                        </div>
                        <div>
                            <label class="text-xs text-gray-500">{{
                                $t("continent")
                            }}</label>
                            <select
                                v-model="filter.continent"
                                @change="filteredZone()"
                                class="form-select mt-2 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="continent in continents"
                                    :key="continent.id"
                                    :value="continent.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        continent.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        continent.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        continent.name_es
                                    }}</span>
                                    <span v-else>{{ continent.name_pt }}</span>
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="text-xs text-gray-500">{{
                                $t("zoned")
                            }}</label>
                            <select
                                v-model="filter.zone"
                                @change="filteredCountry()"
                                class="form-select mt-2 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-if="zoneFiltered.length != 0"
                                    v-for="zone in zoneFiltered"
                                    :key="zone.id"
                                    :value="zone.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        zone.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        zone.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        zone.name_es
                                    }}</span>
                                    <span v-else>{{ zone.name_pt }}</span>
                                </option>
                                <option v-else value="null">
                                    Requires {{ $t("continent") }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="text-xs text-gray-500">{{
                                $t("country")
                            }}</label>
                            <select
                                v-model="filter.country"
                                class="form-select mt-2 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-if="countryFiltered.length != 0"
                                    v-for="country in countryFiltered"
                                    :key="country.id"
                                    :value="country.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        country.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        country.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        country.name_es
                                    }}</span>
                                    <span v-else>{{ country.name_pt }}</span>
                                </option>
                                <option v-else value="null">
                                    Requires {{ $t("zoned") }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="text-xs text-gray-500">{{
                                $t("ministry")
                            }}</label>
                            <select
                                v-model="filter.ministry"
                                class="form-select mt-2 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="ministry in ministries"
                                    :key="ministry.id"
                                    :value="ministry.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        ministry.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        ministry.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        ministry.name_es
                                    }}</span>
                                    <span v-else>{{ ministry.name_pt }}</span>
                                </option>
                            </select>
                        </div>
                        <div>
                            <button
                                type="submit"
                                v-if="loading == 0 || loading == 2"
                                class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"
                            >
                                {{ $t("filter") }}
                            </button>
                            <button
                                disabled
                                type="submit"
                                v-if="loading == 1"
                                class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"
                            >
                                <svg
                                    class="mr-3 h-5 w-5 animate-spin text-white"
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
                                {{ $t("filter") }}...
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    PlusCircleIcon,
    CalendarIcon,
    UserIcon,
    FaceFrownIcon,
    ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted, onUnmounted } from "vue";
import useCountries from "@/services/countryServices.js";
import useZones from "@/services/zoneServices.js";
import useContinents from "@/services/continentServices.js";
import useMinistries from "@/services/ministryServices.js";

import usePosts from "@/services/postServices.js";
import PropAu from "@/components/skeleton/PropAu.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const router = useRouter();
const { posts, getPosts, filterPost, loading, page, isAll } = usePosts();
const { countries, getCountries } = useCountries();
const { zones, getZones } = useZones();
const { continents, getContinents } = useContinents();
const { ministries, getMinistries } = useMinistries();
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const filter = reactive({
    country: "",
    continent: "",
    ministry: "",
    zone: "",
    keywords: "",
    lang: localStorage.lang,
    type: "propau",
});
const postsContainer = ref(null);
const toGet = ref(true);
onMounted(async () => {
    window.addEventListener("scroll", handleScroll);
    await getPosts("propau", localStorage.lang);
    await getContinents();
    await getZones();
    await getCountries();
    await getMinistries();
});
onUnmounted(async () => {
    page.value = 1;
    window.removeEventListener("scroll", handleScroll);
});
const handleScroll = async (e) => {
    if (postsContainer.value) {
        let element = postsContainer.value;
        if (
            element.getBoundingClientRect().bottom < window.innerHeight &&
            toGet.value &&
            !isAll.value &&
            filter.country == "" &&
            filter.continent == "" &&
            filter.ministry == "" &&
            filter.zone == "" &&
            filter.keywords == ""
        ) {
            toGet.value = false;
            page.value++;
            await getPosts("propau", localStorage.lang);
            toGet.value = true;
        }
    }
};
const filteredZone = () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == filter.continent;
    });
    filter.country = "";
    filter.zone = "";
    countryFiltered.value = [];
};
const filteredCountry = () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == filter.zone;
    });
    filter.country = "";
};

const PostsFilter = async () => {
    if (
        filter.country != "" ||
        filter.continent != "" ||
        filter.ministry != "" ||
        filter.zone != "" ||
        filter.keywords != ""
    ) {
        await filterPost({ ...filter });
    } else {
        page.value = 1;
        isAll.value = false;
        await getPosts("propau", localStorage.lang);
    }
};
</script>
