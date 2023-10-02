<template>
    <div
        class="text-md relative z-10 flex w-full justify-between border-t-4 border-primary-blue bg-menu px-4 pb-2 font-semibold"
    >
        <nav class="hidden w-full lg:flex">
            <router-link
                :to="{ name: 'home' }"
                class="flex items-start justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <HomeIcon class="h-6 w-6" />
            </router-link>

            <div
                class="group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <div class="flex cursor-pointer items-center justify-center">
                    <span class="">Publication </span>
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </div>
                <div
                    class="absolute left-0 z-40 mt-2 hidden w-60 flex-col bg-menu py-2 group-hover:flex"
                >
                    <router-link
                        :to="{ name: 'articles' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("articles") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'propau' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("propau") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'blog' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        Blog
                    </router-link>
                </div>
            </div>

            <div
                class="group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <span class="flex cursor-pointer items-center justify-center">
                    {{ $t("profile") }}
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </span>
                <div
                    class="absolute left-0 z-40 mt-2 hidden w-60 flex-col bg-menu py-2 group-hover:flex"
                >
                    <router-link
                        :to="{ name: 'particular' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("particular") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'establishment' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("establishment") }}
                    </router-link>
                    <router-link
                        :to="{ name: 'ip' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
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
                class="group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <div class="flex cursor-pointer items-center justify-center">
                    <span>{{ $t("univerities") }}</span>
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </div>

                <div
                    class="absolute left-0 z-40 mt-2 hidden w-60 flex-col bg-menu py-2 group-hover:flex"
                >
                    <router-link
                        :to="{ name: 'universities' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        <span class="">Liste </span>
                    </router-link>
                    <router-link
                        :to="{ name: 'ads' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        <span class="">{{ $t("ads-s") }} </span>
                    </router-link>
                </div>
            </div>

            <div
                class="group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <div class="flex cursor-pointer items-center justify-center">
                    <span>{{ $t("jobs") }}</span>
                    <ChevronDownIcon class="ml-2 h-5 w-5" />
                </div>

                <div
                    class="absolute left-0 z-40 mt-2 hidden w-60 flex-col bg-menu py-2 group-hover:flex"
                >
                    <router-link
                        :to="{ name: 'jobs' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        <span class="">Offre d'emploi </span>
                    </router-link>
                    <router-link
                        :to="{ name: 'tenders' }"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        <span class="">Appel d'offre </span>
                    </router-link>
                </div>
            </div>
            <router-link
                :to="{ name: 'chat' }"
                class="flex items-center px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <span>Messagerie</span>
                <span
                    v-if="unRead > 0"
                    class="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"
                >
                    <span>{{ unRead }}</span>
                </span>
            </router-link>

            <router-link
                :to="{ name: 'contact' }"
                class="px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                {{ $t("contact") }}
            </router-link>

            <router-link
                v-if="token"
                :to="{
                    name: 'compte',
                    params: { slug: user.slug, id: user.id },
                }"
                class="group relative mx-2 block bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"
            >
                <div class="flex items-start space-x-2">
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
                    class="absolute left-0 z-40 mt-2 hidden w-48 flex-col bg-menu py-2 group-hover:flex"
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
                class="group relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
            >
                <div class="flex cursor-pointer items-center justify-center">
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
                </div>
                <div
                    class="absolute left-0 -z-10 mt-2 hidden w-48 flex-col bg-menu py-2 group-hover:flex"
                >
                    <span
                        v-if="$i18n.locale != 'fr'"
                        @click.prevent="changeLocale('fr')"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("fr") }}
                    </span>
                    <span
                        v-if="$i18n.locale != 'en'"
                        @click.prevent="changeLocale('en')"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("en") }}
                    </span>
                    <span
                        v-if="$i18n.locale != 'es'"
                        @click.prevent="changeLocale('es')"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("es") }}
                    </span>
                    <span
                        v-if="$i18n.locale != 'pt'"
                        @click.prevent="changeLocale('pt')"
                        class="block px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                    >
                        {{ $t("pt") }}
                    </span>
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
                class="absolute top-full left-0 mx-auto flex w-full flex-col justify-center border bg-white shadow-md transition-transform duration-1000"
                :class="[open.menu ? 'translate-x-0' : '-translate-x-full']"
            >
                <div class="relative py-2 px-3 uppercase text-menu">
                    <span
                        class="flex cursor-pointer items-center justify-between"
                        @click="open.post = !open.post"
                    >
                        <span class="text-sm">Publication</span>
                        <span
                            class="transition-all duration-500"
                            :class="[
                                open.post ? ' rotate-[180deg]' : 'rotate-0',
                            ]"
                            ><ChevronDownIcon class="ml-2 h-5 w-5"
                        /></span>
                    </span>
                    <div
                        class="flex flex-col overflow-hidden transition-all duration-700"
                        :class="[open.post ? 'max-h-[500px]' : 'max-h-0']"
                    >
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
                    <span
                        class="flex cursor-pointer items-center justify-between"
                        @click="open.profile = !open.profile"
                    >
                        <span class="text-sm"> {{ $t("profile") }} </span>
                        <span
                            class="transition-all duration-500"
                            :class="[
                                open.profile ? ' rotate-[180deg]' : 'rotate-0',
                            ]"
                            ><ChevronDownIcon class="ml-2 h-5 w-5"
                        /></span>
                    </span>
                    <div
                        class="flex flex-col overflow-hidden transition-all duration-700"
                        :class="[open.profile ? 'max-h-[500px]' : 'max-h-0']"
                    >
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
                    <div
                        class="flex cursor-pointer items-center justify-between"
                        @click="open.event = !open.event"
                    >
                        <span class="text-sm"> {{ $t("universities") }} </span>
                        <span
                            class="transition-all duration-500"
                            :class="[
                                open.event ? ' rotate-[180deg]' : 'rotate-0',
                            ]"
                        >
                            <ChevronDownIcon class="ml-2 h-5 w-5" />
                        </span>
                    </div>
                    <div
                        class="flex flex-col overflow-hidden transition-all duration-700"
                        :class="[open.event ? 'max-h-[500px]' : 'max-h-0']"
                    >
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
                    <div
                        class="flex cursor-pointer items-center justify-between"
                        @click="open.jobs = !open.jobs"
                    >
                        <span class="text-sm"> {{ $t("jobs") }}</span>
                        <span
                            class="transition-all duration-500"
                            :class="[
                                open.jobs ? ' rotate-[180deg]' : 'rotate-0',
                            ]"
                        >
                            <ChevronDownIcon class="ml-2 h-5 w-5"
                        /></span>
                    </div>
                    <div
                        class="flex flex-col overflow-hidden transition-all duration-700"
                        :class="[open.jobs ? 'max-h-[500px]' : 'max-h-0']"
                    >
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
                    @click.prevent="changeRoute('chat')"
                    class="flex justify-between px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                >
                    <span>Messagerie</span>
                    <span
                        v-if="unRead > 0"
                        class="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"
                    >
                        <span>{{ unRead }}</span>
                    </span>
                </a>
                <a
                    href="#"
                    @click.prevent="changeRoute('contact')"
                    class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
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
                                class="h-8 w-8 rounded-full border shadow"
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
                            class="flex items-center px-8 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
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
                    class="bg-primary-blue px-3 py-2 text-sm uppercase text-white transition-colors duration-200"
                >
                    {{ $t("login") }}
                </a>

                <div class="relative py-2 px-3 uppercase text-menu">
                    <label
                        class="flex cursor-pointer items-center justify-between text-sm"
                        @click="open.lang = !open.lang"
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
                        <span
                            class="transition-all duration-500"
                            :class="[
                                open.lang ? ' rotate-[180deg]' : 'rotate-0',
                            ]"
                        >
                            <ChevronDownIcon class="ml-2 h-5 w-5"
                        /></span>
                    </label>
                    <div
                        class="flex flex-col overflow-hidden transition-all duration-700"
                        :class="[open.lang ? 'max-h-[500px]' : 'max-h-0']"
                    >
                        <span
                            v-if="$i18n.locale != 'fr'"
                            @click.prevent="changeLocale('fr')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("fr") }}
                        </span>
                        <span
                            v-if="$i18n.locale != 'en'"
                            @click.prevent="changeLocale('en')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("en") }}
                        </span>
                        <span
                            v-if="$i18n.locale != 'es'"
                            @click.prevent="changeLocale('es')"
                            class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"
                        >
                            {{ $t("es") }}
                        </span>
                        <span
                            v-if="$i18n.locale != 'pt'"
                            @click.prevent="changeLocale('pt')"
                            class="duration-200hover:text-white px-3 py-2 text-sm uppercase text-menu transition-colors hover:bg-primary-blue"
                        >
                            {{ $t("pt") }}
                        </span>
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
import useChats from "@/services/chatServices";
import { reactive, ref, onMounted, watch, computed } from "vue";
import axios from "axios";
import router from "../router";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const user = ref("");
const token = ref("");
const errors = ref("");
const loading = ref(0);
const url = window.location.origin;

const { getConversationsUser, conversations } = useChats();

let date = new Date(),
    currYear = date.getFullYear(),
    currdate = date.getDate(),
    currMonth = date.getMonth();
onMounted(async () => {
    if (localStorage.lang) {
        locale.value = localStorage.lang;
    } else {
        localStorage.lang = locale.value;
    }
    if (localStorage.token) {
        user.value = JSON.parse(localStorage.user);
        token.value = localStorage.token;
        await getConversationsUser(user.value.id);
        window.Echo.channel(`chat.${user.value.id}`).listen(
            ".chat-update",
            async (e) => {
                await getConversationsUser(user.value.id);
            }
        );
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

const unRead = computed(() => {
    if (conversations.value) {
        if (conversations.value.length == 1) {
            return conversations.value[0].nbUnRead;
        } else {
            return conversations.value.reduce((convA, convB) => {
                console.log(convB.nbUnRead);
                return convA.nbUnRead + convB.nbUnRead;
            }, 0);
        }
    } else {
        return 0;
    }
});
</script>

<style scoped>
.router-link-active {
    background: #289dcc;
}
</style>
