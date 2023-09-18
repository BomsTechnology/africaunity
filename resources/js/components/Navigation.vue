<template>
    <div
        class="text-md relative z-10 flex w-full justify-between border-t-4 border-primary-blue bg-menu px-4 pb-2 font-semibold"
    >
        <nav class="hidden lg:flex">
            <router-link
                :to="{ name: 'home' }"
                class="flex items-start justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <HomeIcon class="h-6 w-6" />
            </router-link>

            <div
                class="relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                @mouseleave="open.post = false"
            >
                <div
                    class="flex cursor-pointer items-center justify-center"
                    @mouseover="open.post = true"
                >
                    <span class="">Publication </span>
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </div>
                <div
                    v-show="open.post"
                    class="absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"
                >
                    <router-link
                        :to="{ name: 'articles' }"
                        class="px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("articles") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'propau' }"
                        class="px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("propau") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'blog' }"
                        class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        Blog
                    </router-link>
                </div>
            </div>

            <div
                @mouseleave="open.profile = false"
                class="relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <span
                    @mouseover="open.profile = true"
                    class="flex cursor-pointer items-center justify-center"
                >
                    {{ $t("profile") }}
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </span>
                <div
                    v-show="open.profile"
                    class="absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"
                >
                    <router-link
                        :to="{ name: 'particular' }"
                        class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("particular") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'establishment' }"
                        class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("establishment") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'ip' }"
                        class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("ip") }}
                    </router-link>
                </div>
            </div>

            <a
                :href="`/events?date=${currYear}-${
                    currMonth + 1
                }-${currdate}&profile=&enterType=&continent=&country=&zone=&city=&ministry=&activityArea=&eventType=&eventMode=`"
                class="flex items-start justify-center px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                Evenements
            </a>

            <div
                class="relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                @mouseleave="open.event = false"
            >
                <div
                    @mouseover="open.event = true"
                    class="flex cursor-pointer items-center justify-center"
                >
                    <span>{{ $t("univerities") }}</span>
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </div>

                <div
                    v-show="open.event"
                    class="absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"
                >
                    <router-link
                        :to="{ name: 'universities' }"
                        class="px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        <span class="">Liste </span>
                    </router-link>
                    <router-link
                        :to="{ name: 'ads' }"
                        class="px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        <span class="">{{ $t("ads-s") }} </span>
                    </router-link>
                </div>
            </div>

            <div
                class="relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                @mouseleave="open.jobs = false"
            >
                <div
                    @mouseover="open.jobs = true"
                    class="flex cursor-pointer items-center justify-center"
                >
                    <span>{{ $t("jobs") }}</span>
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </div>

                <div
                    v-show="open.jobs"
                    class="absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"
                >
                    <router-link
                        :to="{ name: 'jobs' }"
                        class="px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        <span class="">Offre d'emploi </span>
                    </router-link>
                    <router-link
                        :to="{ name: 'tenders' }"
                        class="px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        <span class="">Appel d'offre </span>
                    </router-link>
                </div>
            </div>

            <router-link
                :to="{ name: 'contact' }"
                class="px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                {{ $t("contact") }}
            </router-link>

            <router-link
                @mouseleave="open.logout = false"
                v-if="token"
                :to="{
                    name: 'compte',
                    params: { slug: user.slug, id: user.id },
                }"
                class="relative mx-2 bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"
            >
                <div
                    @mouseover="open.logout = true"
                    class="flex items-start space-x-2"
                >
                    <span v-if="user.avatar">
                        <img
                            :src="user.avatar"
                            alt=""
                            class="h-7 w-7 rounded-full border object-cover shadow"
                        />
                    </span>
                    <UserCircleIcon v-else class="h-8 w-8 text-white" />
                    <span>{{ user.firstname }}</span>
                    <span><ChevronDownIcon class="h-5 w-5" /></span>
                </div>
                <div
                    v-show="open.logout"
                    class="absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2"
                >
                    <button
                        type="button"
                        @click.prevent="logout()"
                        class="flex items-center px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("logout") }}
                        <svg
                            v-if="loading == 1"
                            class="ml-3 h-5 w-5 animate-spin text-white"
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
                    </button>
                </div>
            </router-link>
            <a
                href="/login"
                v-else
                class="mx-2 flex bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"
            >
                {{ $t("login") }}
            </a>

            <div
                @mouseleave="open.lang = false"
                class="relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <label
                    @mouseover="open.lang = true"
                    class="flex cursor-pointer items-center justify-center"
                >
                    <span v-if="$i18n.locale == 'fr'">
                        {{ $t("fr") }}
                    </span>
                    <span v-else-if="$i18n.locale == 'en'">
                        {{ $t("en") }}
                    </span>
                    <span v-else-if="$i18n.locale == 'es'">
                        {{ $t("es") }}
                    </span>
                    <span v-else>
                        {{ $t("pt") }}
                    </span>
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </label>
                <div
                    v-show="open.lang"
                    class="absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2"
                >
                    <a
                        href="#"
                        v-if="$i18n.locale != 'fr'"
                        @click.prevent="changeLocale('fr')"
                        class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("fr") }}
                    </a>
                    <a
                        href="#"
                        v-if="$i18n.locale != 'en'"
                        @click.prevent="changeLocale('en')"
                        class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("en") }}
                    </a>
                    <a
                        href="#"
                        v-if="$i18n.locale != 'es'"
                        @click.prevent="changeLocale('es')"
                        class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("es") }}
                    </a>
                    <a
                        href="#"
                        v-if="$i18n.locale != 'pt'"
                        @click.prevent="changeLocale('pt')"
                        class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("pt") }}
                    </a>
                </div>
            </div>
        </nav>

        <nav class="z-50 flex lg:hidden">
            <button
                type="button"
                @click.prevent="changeRoute('home')"
                class="flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <HomeIcon class="h-6 w-6" />
            </button>
            <button
                type="button"
                @click="open.menu = !open.menu"
                class="flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <Bars3Icon class="h-6 w-6" />
            </button>
            <div
                v-show="open.menu"
                class="absolute mx-auto mt-12 flex w-[90%] flex-col justify-center border border-menu bg-white shadow-md"
            >
                <div class="relative py-2 px-3 uppercase text-menu">
                    <span class="flex cursor-pointer items-center">
                        <span>Publication</span>
                        <ChevronDownIcon class="ml-2 h-5 w-5" />
                    </span>
                    <div class="mt-2 flex flex-col py-2">
                        <a
                            href="#"
                            @click.prevent="changeRoute('articles')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("articles") }}
                        </a>
                        <a
                            href="#"
                            @click.prevent="changeRoute('propau')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("propau") }}
                        </a>
                        <a
                            href="#"
                            type="button"
                            @click.prevent="changeRoute('blog')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("blog") }}
                        </a>
                    </div>
                </div>

                <div class="relative py-2 px-3 uppercase text-menu">
                    <span class="flex cursor-pointer items-center">
                        {{ $t("profile") }}
                        <ChevronDownIcon class="ml-2 h-5 w-5" />
                    </span>
                    <div class="mt-2 flex flex-col py-2">
                        <a
                            href="#"
                            @click.prevent="changeRoute('particular')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("particular") }}
                        </a>
                        <a
                            href="#"
                            @click.prevent="changeRoute('establishment')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("establishment") }}
                        </a>
                        <a
                            href="#"
                            type="button"
                            @click.prevent="changeRoute('ip')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("ip") }}
                        </a>
                    </div>
                </div>

                <a
                    :href="`/events?date=${currYear}-${
                        currMonth + 1
                    }-${currdate}&profile=&enterType=&continent=&country=&zone=&city=&ministry=&activityArea=&eventType=&eventMode=`"
                    class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                >
                    Evenements
                </a>

                <div class="relative py-2 px-3 uppercase text-menu">
                    <div class="flex cursor-pointer items-center">
                        {{ $t("universities") }}
                        <ChevronDownIcon class="ml-2 h-5 w-5" />
                    </div>
                    <div class="mt-2 flex flex-col py-2">
                        <a
                            href="#"
                            @click.prevent="changeRoute('universities')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            List
                        </a>
                        <a
                            href="#"
                            @click.prevent="changeRoute('ads')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("ads") }}
                        </a>
                    </div>
                </div>

                <div class="relative py-2 px-3 uppercase text-menu">
                    <div class="flex cursor-pointer items-center">
                        {{ $t("jobs") }}
                        <ChevronDownIcon class="ml-2 h-5 w-5" />
                    </div>
                    <div class="mt-2 flex flex-col py-2">
                        <a
                            href="#"
                            @click.prevent="changeRoute('jobs')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            Offre d'emploi
                        </a>
                        <a
                            href="#"
                            @click.prevent="changeRoute('tenders')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            Appel d'Offre
                        </a>
                    </div>
                </div>

                <a
                    href="#"
                    @click.prevent="changeRoute('contact')"
                    class="px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                >
                    {{ $t("contact") }}
                </a>

                <a
                    href="#"
                    v-if="token"
                    @click.prevent="
                        changeRoute('compte', user.firstname, user.id)
                    "
                >
                    <div
                        class="flex items-center space-x-2 bg-primary-blue px-3 py-2 text-sm uppercase text-white transition-colors duration-200"
                    >
                        <span v-if="user.avatar">
                            <img
                                :src="user.avatar"
                                class="h-16 w-16 rounded-full border shadow"
                                alt=""
                            />
                        </span>
                        <UserCircleIcon v-else class="h-8 w-8 text-white" />
                        <span>{{ user.firstname }} {{ user.lastname }}</span>
                    </div>
                    <div class="flex flex-col py-2">
                        <a
                            href="#"
                            @click.prevent="logout()"
                            class="flex items-center px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("logout") }}
                            <svg
                                v-if="loading == 1"
                                class="ml-3 h-5 w-5 animate-spin"
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
                        </a>
                    </div>
                </a>
                <a
                    href="/login"
                    v-else
                    class="bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"
                >
                    {{ $t("login") }}
                </a>

                <div class="relative py-2 px-3 uppercase text-menu">
                    <label class="flex cursor-pointer items-center">
                        <span v-if="$i18n.locale == 'fr'">
                            {{ $t("fr") }}
                        </span>
                        <span v-else-if="$i18n.locale == 'en'">
                            {{ $t("en") }}
                        </span>
                        <span v-else-if="$i18n.locale == 'es'">
                            {{ $t("es") }}
                        </span>
                        <span v-else>
                            {{ $t("pt") }}
                        </span>
                        <ChevronDownIcon class="ml-2 h-5 w-5" />
                    </label>
                    <div class="mt-2 flex flex-col py-2">
                        <a
                            href="#"
                            v-if="$i18n.locale != 'fr'"
                            @click.prevent="changeLocale('fr')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("fr") }}
                        </a>
                        <a
                            href="#"
                            v-if="$i18n.locale != 'en'"
                            @click.prevent="changeLocale('en')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("en") }}
                        </a>
                        <a
                            href="#"
                            v-if="$i18n.locale != 'es'"
                            @click.prevent="changeLocale('es')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("es") }}
                        </a>
                        <a
                            href="#"
                            v-if="$i18n.locale != 'pt'"
                            @click.prevent="changeLocale('pt')"
                            class="duration-200hover:text-white px-3 py-2 text-sm uppercase text-menu transition-colors hover:bg-primary-blue"
                        >
                            {{ $t("pt") }}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import {
    HomeIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    UserCircleIcon,
} from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted, watch } from "vue";
import axios from "axios";
import router from "../router";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const user = ref("");
const token = ref("");
const errors = ref("");
const loading = ref(0);
const url = window.location.origin;

let date = new Date(),
    currYear = date.getFullYear(),
    currdate = date.getDate(),
    currMonth = date.getMonth();
onMounted(async () => {
    if (localStorage.token) {
        user.value = JSON.parse(localStorage.user);
        token.value = localStorage.token;
    }
});
const open = reactive({
    lang: false,
    profile: false,
    event: false,
    post: false,
    menu: false,
    logout: false,
    jobs: false,
});

const logout = async () => {
    try {
        loading.value = 1;
        await axios.post(
            "/api/logout",
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        loading.value = 2;
        location.href = "/";
    } catch (e) {
        loading.value = 0;
        if (e.response.status == 401) {
            location.href = "/";
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
        }
    }
};

const changeRoute = (route, firstname = "", id = "") => {
    if (firstname != "" && id != "") {
        router.push({
            name: route,
            params: {
                slug: firstname.toLocaleLowerCase,
                id: id,
            },
        });
    } else {
        router.push({ name: route });
    }
    open.menu = false;
};

const changeLocale = async (lang) => {
    locale.value = lang;
    localStorage.lang = locale.value;
    location.reload();
};
onMounted(async () => {
    if (localStorage.lang) {
        locale.value = localStorage.lang;
    } else {
        localStorage.lang = locale.value;
    }
});
</script>

<style scoped>
.router-link-active {
    background: #289dcc;
}
</style>
