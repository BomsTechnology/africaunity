<script setup>
import { useRouter } from "vue-router";
import { reactive, ref, onMounted } from "vue";
import useCategoryPersonalPosts from "@/services/categoryPersonalPostServices.js";
import usePersonalPosts from "@/services/personalPostsServices.js";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const { createPersonalPost, errors, loading } = usePersonalPosts();
const { categoryPersonalPosts, getCategoryPersonalPosts } =
    useCategoryPersonalPosts();
const user = JSON.parse(localStorage.user);
const router = useRouter();
const emits = defineEmits(["back"]);
const nbClick = ref(0);
const textarea = ref(null);
const msgClick = ref("");
const file = ref(null);
const post = reactive({
    title: "",
    user_id: user.id,
    content: "",
    image: "",
    subtheme: "",
    language: "fr",
    category_personal_post_id: "",
});

onMounted(async () => {
    sceditor.create(textarea.value, {
        format: "xhtml",
        style: "https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",
        height: 400,
        toolbarExclude:
            "indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",
        icons: "material",
    });
    textarea.value.value == "";

    nbClick.value++;

    await getCategoryPersonalPosts();
});

const storePost = async () => {
    post.content = textarea.value.value;
    if (nbClick.value == 1) {
        nbClick.value++;
        msgClick.value = "please click again";
        return;
    }
    let formData = new FormData();
    formData.append("image", post.image);
    formData.append("title", post.title);
    formData.append("subtheme", post.subtheme);
    formData.append("user_id", post.user_id);
    formData.append("language", post.language);
    formData.append("content", post.content);
    formData.append(
        "category_personal_post_id",
        post.category_personal_post_id
    );

    await createPersonalPost(formData);
    if (errors.value == "") {
        router.push({
            name: "admin.personal-post.index",
        });
    }
};

const handelFileObject = () => {
    post.image = file.value.files[0];
};

function previewImage(file) {
    return URL.createObjectURL(file);
}
function loadImage(file) {
    return URL.revokeObjectURL(file);
}
</script>

<template>
    <div>
        <h1 class="text-center text-2xl font-bold text-gray-500 sm:text-4xl">
            {{ $tc("add", 1) }} Post
        </h1>

        <section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">
            <Error v-if="errors != ''">{{ errors }}</Error>

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
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="en"
                                >Language</label
                            >
                            <select
                                required
                                v-model="post.language"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="fr">French</option>
                                <option value="en">English</option>
                                <option value="es">Espanol</option>
                                <option value="pt">Portugues</option>
                            </select>
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
                        <textarea required ref="textarea" class="h-96 w-full">
                        </textarea>
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
                        {{ $t("save") }}...
                        <Spin :size="'small'" />
                    </button>
                    <Transition
                        enter-active-class=" transition-all  "
                        enter-from-class=" opacity-0  -translate-y-10"
                        enter-to-class="  opacity-1 translate-y-0"
                        leave-active-class=""
                        leave-from-class=""
                        leave-to-class=""
                    >
                        <span
                            v-if="msgClick != ''"
                            class="text-xs font-light italic"
                        >
                            {{ msgClick }}
                        </span>
                    </Transition>
                </div>
            </form>
        </section>
    </div>
</template>
