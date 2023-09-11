<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted } from "vue";
import useCategoryPersonalPosts from "@/services/categoryPersonalPostServices.js";
import usePersonalPosts from "@/services/personalPostsServices.js";
import { useI18n } from "vue-i18n";
import RichText from '@/components/RichText.vue';

const { locale } = useI18n();
const { createPersonalPost, errors, loading } = usePersonalPosts();
const { categoryPersonalPosts, getCategoryPersonalPosts } =
    useCategoryPersonalPosts();
const props = defineProps({
    user: Object,
});

const emits = defineEmits(["back"]);

const file = ref(null);
const post = reactive({
    title: "",
    user_id: props.user.id,
    content: "",
    image: "",
    subtheme: "",
    language: locale.value,
    category_personal_post_id: "",
});

onMounted(async () => {
    await getCategoryPersonalPosts();
});

const storePost = async () => {
    
    let formData = new FormData();
    formData.append("image", post.image);
    formData.append("title", post.title);
    formData.append("subtheme", post.subtheme);
    formData.append("language", locale.value);
    formData.append("user_id", post.user_id);
    formData.append("content", post.content);
    formData.append(
        "category_personal_post_id",
        post.category_personal_post_id
    );

   await createPersonalPost(formData);
    if (errors.value == "") {
        goBack();
    }
};

const handelFileObject = () => {
    post.image = file.value.files[0];
};

const changeLocale = (lang) => {
    locale.value = lang;
    localStorage.lang = locale.value;
};
function previewImage(file) {
    return URL.createObjectURL(file);
}
function loadImage(file) {
    return URL.revokeObjectURL(file);
}

function goBack() {
    emits("back");
}
</script>

<template>
    <div>
        <h1 class="text-center text-2xl font-bold text-gray-500 sm:text-4xl">
            {{ $tc("add", 1) }} Post
        </h1>
        <div class="mt-8">
            <button
                type="button"
                @click="goBack()"
                class="flex items-center space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
            >
                <span> <ChevronLeftIcon class="w- h-5" /></span>
                <span>Back</span>
            </button>
        </div>
        <section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">
            <div
                class="flex flex-col items-center justify-center lg:flex-row lg:space-x-3 mb-4"
            >
                <h1 class="font-semibold">{{ $t("select-lang") }} :</h1>
                <div
                    class="mt-3 inline-flex w-full justify-center space-x-3 text-xs lg:mt-0 lg:text-sm"
                >
                    <button
                        :class="[
                            $i18n.locale != 'fr'
                                ? 'rounded-md bg-menu px-3 py-1 text-white'
                                : 'rounded-md bg-primary-blue px-3 py-1 text-white',
                        ]"
                        @click.prevent="changeLocale('fr')"
                    >
                        {{ $t("fr") }}
                    </button>
                    <button
                        :class="[
                            $i18n.locale != 'en'
                                ? 'rounded-md bg-menu px-3 py-1 text-white'
                                : 'rounded-md bg-primary-blue px-3 py-1 text-white',
                        ]"
                        @click.prevent="changeLocale('en')"
                    >
                        {{ $t("en") }}
                    </button>
                    <button
                        :class="[
                            $i18n.locale != 'es'
                                ? 'rounded-md bg-menu px-3 py-1 text-white'
                                : 'rounded-md bg-primary-blue px-3 py-1 text-white',
                        ]"
                        @click.prevent="changeLocale('es')"
                    >
                        {{ $t("es") }}
                    </button>
                    <button
                        :class="[
                            $i18n.locale != 'pt'
                                ? 'rounded-md bg-menu px-3 py-1 text-white'
                                : 'rounded-md bg-primary-blue px-3 py-1 text-white',
                        ]"
                        @click.prevent="changeLocale('pt')"
                    >
                        {{ $t("pt") }}
                    </button>
                </div>
            </div>
            <Error v-if="errors != ''">{{ errors }}</Error>
            <h1 class="text-xl font-semibold">{{ $tc("add", 1) }} Post</h1>
            <h2 class="text-md font-light text-gray-700">
                {{ $t("good-msg-post") }} !
            </h2>
            <form
                @submit.prevent="storePost()"
                id="postform"
                enctype="multipart/form-data"
            >
                <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div class="col-span-2">
                        <label class="dark:text-gray-200 text-gray-700"
                            >{{ $t("title") }}
                            <span class="text-red-500">*</span></label
                        >
                        <input
                            required
                            v-model="post.title"
                            maxlength="50"
                            type="text"
                            class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                        <span class="text-xs font-light text-gray-400"
                            >{{ post.title.length }} of 50 Characters</span
                        >
                    </div>

                    <div class="col-span-2">
                        <label class="dark:text-gray-200 text-gray-700" for="es"
                            >{{ $t("theme") }}
                            <span class="text-red-500">*</span></label
                        >
                        <select
                            required
                            v-model="post.category_personal_post_id"
                            class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option
                                v-for="categoryPersonalPost in categoryPersonalPosts"
                                :key="categoryPersonalPost.id"
                                :value="categoryPersonalPost.id"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    categoryPersonalPost.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    categoryPersonalPost.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    categoryPersonalPost.name_es
                                }}</span>
                                <span v-else>{{
                                    categoryPersonalPost.name_pt
                                }}</span>
                            </option>
                        </select>
                    </div>

                    <div class="col-span-2">
                        <label class="dark:text-gray-200 text-gray-700">{{
                            $t("subtheme")
                        }}</label>
                        <input
                            v-model="post.subtheme"
                            maxlength="255"
                            type="text"
                            class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                        <span class="text-xs font-light text-gray-400"
                            >{{ post.subtheme.length }} of 255 Characters</span
                        >
                    </div>

                    <div class="col-span-2">
                        <label class="dark:text-gray-200 text-gray-700" for="fr"
                            >{{ $t("thumbnails") }}
                            <span class="text-red-500">*</span></label
                        >
                        <div class="flex items-center space-x-4 py-4">
                            <img
                                v-if="post.image"
                                :src="
                                    typeof post.image == 'string'
                                        ? post.image
                                        : previewImage(post.image)
                                "
                                @load="
                                    typeof post.image == 'string'
                                        ? ''
                                        : loadImage(post.image)
                                "
                                class="h-16 w-16 rounded-full"
                                :alt="post.title"
                            />
                            <input
                                required
                                ref="file"
                                @change="handelFileObject()"
                                accept="image/*"
                                type="file"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div class="col-span-2">
                        <label class="dark:text-gray-200 text-gray-700" for="pt"
                            >{{ $t("content") }}
                            <span class="text-red-500">*</span></label
                        >
                        <RichText  v-model="post.content"/>
                    </div>
                </div>

                <div class="mt-20">
                    <button
                        v-if="loading == 0"
                        type="submit"
                        class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"
                    >
                        {{ $t("save") }}
                    </button>
                    <button
                        v-if="loading == 1"
                        type="submit"
                        disabled
                        class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"
                    >
                        <Spin :size="'small'" />
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>
