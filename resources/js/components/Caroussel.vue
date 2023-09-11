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
                    :to="{
                        name: 'show.post',
                        params: { id: post.id, slug: post.slug },
                    }"
                >
                    <div
                        class="absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white"
                    >
                        <div>
                            <ul class=" flex items-center gap-4 flex-wrap">
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
                        <div>
                            <a href="#" class="text-lg hover:text-primary-blue">
                                {{
                                    post.title.length <= 30
                                        ? post.title
                                        : post.title.substring(0, 29) + "..."
                                }}
                            </a>
                        </div>
                        <div class="flex space-x-2 text-xs">
                            <div class="flex space-x-1">
                                <CalendarIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    new Date(post.date).toLocaleDateString(
                                        "fr-FR",
                                        {
                                            day: "numeric",
                                            year: "numeric",
                                            month: "long",
                                        }
                                    )
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <UserIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    post.user.firstname
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <ChatBubbleOvalLeftEllipsisIcon
                                    class="h-4 w-4"
                                />
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
                    :to="{
                        name: 'show.post',
                        params: { id: post.id, slug: post.slug },
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
                                    new Date(post.date).toLocaleDateString(
                                        "fr-FR",
                                        {
                                            day: "numeric",
                                            year: "numeric",
                                            month: "long",
                                        }
                                    )
                                }}</a>
                            </div>
                            <div class="flex space-x-1">
                                <ChatBubbleOvalLeftEllipsisIcon
                                    class="h-4 w-4"
                                />
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
    <div v-else-if="loading == 1">
        <Slider />
    </div>
    <NoContent v-else />
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import {
    CalendarIcon,
    UserIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    FaceFrownIcon,
} from "@heroicons/vue/24/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import Slider from "./skeleton/Slider.vue";

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
