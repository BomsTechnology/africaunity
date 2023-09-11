<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/24/solid";
import useCategoryPersonalPosts from "@/services/categoryPersonalPostServices.js";
import usePersonalPosts from "@/services/personalPostsServices.js";
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import RichText from '@/components/RichText.vue';

const { locale } = useI18n();
const { getPersonalPost, updatePersonalPost, errors, loading, personalPost } =
    usePersonalPosts();
const { categoryPersonalPosts, getCategoryPersonalPosts } =
    useCategoryPersonalPosts();
const emits = defineEmits(["back"]);
const keyComponent = ref(0);
const file = ref(null);
const props = defineProps({
    user: Object,
    id: [String, Number],
});

onMounted(async () => {
    await getPersonalPost(props.id);
    keyComponent.value++;
    await getCategoryPersonalPosts();
});

const savePost = async () => {
    
    let formData = new FormData();
    formData.append("image", personalPost.value.image);
    formData.append("title", personalPost.value.title);
    formData.append("subtheme", personalPost.value.subtheme);
    formData.append("language", locale.value);
    formData.append("user_id", personalPost.value.user_id);
    formData.append("content", personalPost.value.content);
    formData.append(
        "category_personal_post_id",
        personalPost.value.category_personal_post_id
    );
    formData.append("_method", "PUT");

    await updatePersonalPost(formData, props.id);
    if (errors.value == "") {
        goBack();
    }
};

const handelFileObject = () => {
    personalPost.value.image = file.value.files[0];
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
            {{ $tc("edit", 1) }} Post
        </h1>

        <button
            type="button"
            @click="goBack()"
            class="flex items-center space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
        >
            <span> <ChevronLeftIcon class="h-5 w-5" /></span>
            <span>Back</span>
        </button>
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
            <h1 class="text-xl font-semibold">{{ $tc("add", 2) }} Post</h1>
            <h2 class="text-md font-light text-gray-700">
                {{ $t("good-msg-post") }} !
            </h2>
            <form
                @submit.prevent="savePost()"
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
                            v-model="personalPost.title"
                            maxlength="50"
                            type="text"
                            class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                        <span
                            v-if="personalPost.title"
                            class="text-xs font-light text-gray-400"
                            >{{ personalPost.title.length }} of 50
                            Characters</span
                        >
                    </div>

                    <div class="col-span-2">
                        <label class="dark:text-gray-200 text-gray-700" for="es"
                            >{{ $t("theme") }}
                            <span class="text-red-500">*</span></label
                        >
                        <select
                            required
                            v-model="personalPost.category_personal_post_id"
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
                            v-model="personalPost.subtheme"
                            maxlength="255"
                            type="text"
                            class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                        <span
                            v-if="personalPost.subtheme"
                            class="text-xs font-light text-gray-400"
                            >{{ personalPost.subtheme.length }} of 255
                            Characters</span
                        >
                    </div>

                    <div class="col-span-2">
                        <label class="dark:text-gray-200 text-gray-700" for="fr"
                            >{{ $t("thumbnails") }}
                            <span class="text-red-500">*</span></label
                        >
                        <div class="flex items-center space-x-4 py-4">
                            <img
                                v-if="personalPost.image"
                                :src="
                                    typeof personalPost.image == 'string'
                                        ? personalPost.image
                                        : previewImage(personalPost.image)
                                "
                                @load="
                                    typeof personalPost.image == 'string'
                                        ? ''
                                        : loadImage(personalPost.image)
                                "
                                class="h-16 w-16 rounded-full"
                                :alt="personalPost.title"
                            />
                            <input
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
                        <RichText :key="keyComponent" v-model="personalPost.content"/>
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
