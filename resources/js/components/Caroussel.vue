<template>
    <div
        class="space-y-3 p-4 lg:flex lg:space-x-3 lg:space-y-0"
        v-if="posts.length != 0"
    >
        <Swiper
            class="h-[400px] w-full"
            :centeredSlides="true"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :modules="modules"
        >
            <SwiperSlide class="relative" v-for="post in posts" :key="post.id">
                <router-link
                    v-if="!token"
                    :to="{
                        name: 'login',
                        params: { redirect: 'not-login' },
                    }"
                >
                    <div
                        class="absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white"
                    >
                        <div>
                            <a
                                href="#"
                                class="rounded py-1 px-2 text-xs capitalize"
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
                        </div>
                        <div>
                            <a href="#" class="text-lg hover:text-primary-blue">
                                {{ post.title }}
                            </a>
                        </div>
                        <div class="flex space-x-2 text-xs">
                            <div class="flex space-x-1">
                                <CalendarIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.date
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <UserIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.user.firstname
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <ChatIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.comments
                                }}</a>
                            </div>
                        </div>
                    </div>
                    <img
                        :src="post.image"
                        :alt="post.title"
                        class="h-full w-full object-cover"
                    />
                </router-link>
                <router-link
                    v-else
                    :to="{
                        name: 'show.post',
                        params: { id: post.id },
                    }"
                >
                    <div
                        class="absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white"
                    >
                        <div>
                            <a
                                href="#"
                                class="rounded py-1 px-2 text-xs capitalize"
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
                        </div>
                        <div>
                            <a href="#" class="text-lg hover:text-primary-blue">
                                {{
                                    post.title.length <= 20
                                        ? post.title
                                        : post.title.substring(0, 19) + "..."
                                }}
                            </a>
                        </div>
                        <div class="flex space-x-2 text-xs">
                            <div class="flex space-x-1">
                                <CalendarIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.date
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <UserIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.user.firstname
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <ChatIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.comments
                                }}</a>
                            </div>
                        </div>
                    </div>
                    <img
                        :src="post.image"
                        :alt="post.title"
                        class="h-full w-full object-cover"
                    />
                </router-link>
            </SwiperSlide>
        </Swiper>
        <div class="grid w-full grid-cols-1 gap-4 md:h-[400px] md:grid-cols-2">
            <div
                class="relative md:h-[190px]"
                v-for="post in posts"
                :key="post.id"
            >
                <router-link
                    v-if="!token"
                    :to="{
                        name: 'login',
                        params: { redirect: 'not-login' },
                    }"
                >
                    <div
                        class="absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover p-4 text-white"
                    >
                        <div>
                            <a href="#" class="text-md hover:text-primary-blue">
                                {{
                                    post.title.length <= 20
                                        ? post.title
                                        : post.title.substring(0, 19) + "..."
                                }}
                            </a>
                        </div>
                        <div class="flex space-x-2 text-xs">
                            <div class="flex space-x-1">
                                <CalendarIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.date
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <ChatIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.comments
                                }}</a>
                            </div>
                        </div>
                    </div>
                    <img
                        :src="post.image"
                        :alt="post.title"
                        class="h-60 w-full object-cover md:h-full"
                    />
                </router-link>
                <router-link
                    v-else
                    :to="{
                        name: 'show.post',
                        params: { id: post.id },
                    }"
                >
                    <div
                        class="absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover p-4 text-white"
                    >
                        <div>
                            <a href="#" class="text-md hover:text-primary-blue">
                                {{
                                    post.title.length <= 20
                                        ? post.title
                                        : post.title.substring(0, 19) + "..."
                                }}
                            </a>
                        </div>
                        <div class="flex space-x-2 text-xs">
                            <div class="flex space-x-1">
                                <CalendarIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.date
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <ChatIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.comments
                                }}</a>
                            </div>
                        </div>
                    </div>
                    <img
                        :src="post.image"
                        :alt="post.title"
                        class="h-60 w-full object-cover md:h-full"
                    />
                </router-link>
            </div>
        </div>
    </div>
    <div v-else-if="loading == 1" class="p-28">
        <svg
            class="mx-auto h-16 w-16 animate-spin text-primary-blue"
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
        class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500"
    >
        <EmojiSadIcon class="h-16 w-16" />
        <span class="mt-2 text-2xl">{{ $t("no-content") }} </span>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import {
    CalendarIcon,
    UserIcon,
    ChatIcon,
    EmojiSadIcon,
} from "@heroicons/vue/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const props = { posts: Array, loading: Number };

const token = localStorage.token;
const posts = ref([]);
const errors = ref("");
const loading = ref(0);
onMounted(async () => {
    errors.value = "";
    loading.value = 1;
    let response = await axios.get("/api/posts-caroussel/" + localStorage.lang);
    posts.value = response.data.data;
    loading.value = 2;
});

const modules = [Autoplay];
</script>
