<script setup>
import usePersonalPosts from "@/services/personalPostsServices.js";
import useCategoryPersonalPosts from "@/services/categoryPersonalPostServices.js";
import { ref, onMounted, computed } from "vue";
import {
    PencilSquareIcon,
    PlusCircleIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
    user: Object,
    modelValue: {
        type: [String, Number],
    },
});
const emits = defineEmits(["Update:modelValue", "create", "edit", "single"]);
const { personalPosts, loading, destroyPersonalPost, getPersonalPostsUser } =
    usePersonalPosts();
    const { categoryPersonalPosts, getCategoryPersonalPosts } =
    useCategoryPersonalPosts();
const searchKey = ref("");
const theme = ref("");
const loginUser = ref("");
const langPost = ref("");
loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
onMounted(async function () {
    await getPersonalPostsUser(props.user.id);
    await getCategoryPersonalPosts();
});

const filteredPost = computed(() => {
    return personalPosts.value.filter((post) => {
        
         if (theme.value != "" && langPost.value != "") {
            return (
               (post.title
                    .toLowerCase()
                    .includes(searchKey.value.toLowerCase()) || post.content
                .toLowerCase()
                .includes(searchKey.value.toLowerCase())) &&
                post.category_personal_post_id == theme.value &&
                post.language == langPost.value
            );
        }else if (langPost.value != "") {
            return (
               (post.title
                    .toLowerCase()
                    .includes(searchKey.value.toLowerCase()) || post.content
                .toLowerCase()
                .includes(searchKey.value.toLowerCase())) &&
                post.language == langPost.value
            );
        }else if (theme.value != "") {
            return (
               (post.title
                    .toLowerCase()
                    .includes(searchKey.value.toLowerCase()) || post.content
                .toLowerCase()
                .includes(searchKey.value.toLowerCase())) &&
                post.category_personal_post_id == theme.value
            );
        } else {
            return post.title
                .toLowerCase()
                .includes(searchKey.value.toLowerCase()) || post.content
                .toLowerCase()
                .includes(searchKey.value.toLowerCase());
        }
    });
});

const deletePost = async (id) => {
    const deleteId = [id];
    if (confirm("I you Sure ?")) {
        await destroyPersonalPost(deleteId);
        await getPersonalPostsUser(props.user.id);
    }
};

function goToCreate() {
    emits("create");
}

function goToSingle(id) {
    emits("update:modelValue", `${id}`);
    emits("single");
}

function goToEdit(id) {
    emits("update:modelValue", `${id}`);
    emits("edit");
}
</script>

<template>
    <div>
        <div v-if="loading == 1" class="py-6">
            <Spin />
        </div>
        <div v-else>
            <h1
                class="text-center text-2xl font-bold text-gray-500 sm:text-4xl"
            >
                {{ $t("personal-blog") }}
            </h1>


            <div
                class="mt-8 flex flex-col-reverse items-center justify-between px-6 py-2 space-x-4 w-full lg:flex-row"
            >
                <div class="items-center lg:w-5/6 w-full space-y-2 lg:space-y-0 space-x-0 lg:space-x-2 flex lg:flex-row flex-col">
                    <div class="">
                        <div class="relative lg:w-auto w-full">
                            <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <svg
                                    class="h-5 w-5 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search"
                                v-model="searchKey"
                                class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div class="lg:w-1/4 w-full">
                        <select
                            v-model="langPost"
                            class="form-select block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pr-8 pl-4 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option value="">Select Language</option>
                            <option value="fr">{{ $t("fr") }}</option>
                            <option value="en">{{ $t("en") }}</option>
                            <option value="es">{{ $t("es") }}</option>
                            <option value="pt">{{ $t("pt") }}</option>
                        </select>
                    </div>
                    <div class="lg:w-1/4 w-full">
                        <select
                        v-model="theme"
                        class="form-select block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pr-8 pl-4 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                                >
                                    <option value="">Select theme</option>
                                    <option
                                        v-for="category in categoryPersonalPosts"
                                        :key="category.id"
                                        :value="category.id"
                                    >
                                        <span v-if="$i18n.locale == 'en'">{{
                                            category.name_en
                                        }}</span>
                                        <span v-else-if="$i18n.locale == 'fr'">{{
                                            category.name_fr
                                        }}</span>
                                        <span v-else-if="$i18n.locale == 'es'">{{
                                            category.name_es
                                        }}</span>
                                        <span v-else>{{ category.name_pt }}</span>
                                    </option>
                                </select>
                    </div>
                </div>
                <div class="lg:w-2/6 w-full justify-center flex lg:justify-end ">
                    <button
                    type="button"
                    v-if="user.id == loginUser.id"
                    @click="goToCreate()"
                    class="flex items-center space-x-3 rounded bg-primary-blue px-3 py-2 text-white lg:mb-0"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">{{ $tc("add", 1) }} Post</p>
                </button>
                </div>
            
            </div>

            <div
                class="grid gap-8 px-6 py-8 lg:grid-cols-2"
                v-if="filteredPost.length != 0"
            >
                <div
                    v-for="post in filteredPost"
                    :key="post.id"
                    class="mx-auto flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg"
                >
                    <div class="w-1/3 overflow-hidden bg-cover">
                        <a href="#" @click.prevent="goToSingle(post.id)"
                            ><img
                                :src="post.image"
                                class="h-full w-full bg-cover object-cover"
                                :alt="post.title"
                        /></a>
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <a
                            href="#"
                            @click.prevent="goToSingle(post.id)"
                            class="text-2xl font-bold text-gray-800"
                        >
                            {{
                                post.title.length <= 20
                                    ? post.title
                                    : post.title.substring(0, 19) + "..."
                            }}</a
                        >

                        <div class="mt-2">
                            <span
                                v-if="post.category_personal_post"
                                class="text-sm text-primary-blue"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    post.category_personal_post.name_en
                                        .length <= 20
                                        ? post.category_personal_post.name_en
                                        : post.category_personal_post.name_en.substring(
                                              0,
                                              19
                                          ) + "..."
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    post.category_personal_post.name_fr
                                        .length <= 20
                                        ? post.category_personal_post.name_fr
                                        : post.category_personal_post.name_fr.substring(
                                              0,
                                              19
                                          ) + "..."
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    post.category_personal_post.name_es
                                        .length <= 20
                                        ? post.category_personal_post.name_es
                                        : post.category_personal_post.name_es.substring(
                                              0,
                                              19
                                          ) + "..."
                                }}</span>
                                <span v-else>{{
                                    post.category_personal_post.name_pt
                                        .length <= 20
                                        ? post.category_personal_post.name_pt
                                        : post.category_personal_post.name_pt.substring(
                                              0,
                                              19
                                          ) + "..."
                                }}</span></span
                            >
                        </div>
                        <div class="">
                            <span class="text-xs">
                                <span v-if="post.subtheme">{{
                                    post.subtheme
                                }}</span>
                            </span>
                        </div>

                        <div class="item-center mt-3 flex justify-between">
                            <a
                                href="#"
                                @click.prevent="goToSingle(post.id)"
                                class="text-sm font-bold text-primary-blue hover:underline"
                                >{{ $t("read-more") }}
                            </a>
                            <div
                                class="flex space-x-2"
                                v-if="user.id == loginUser.id"
                            >
                                <button
                                    type="button"
                                    @click="goToEdit(post.id)"
                                >
                                    <PencilSquareIcon
                                        class="h-5 w-5 cursor-pointer text-primary-blue hover:text-gray-400"
                                    />
                                </button>

                                <button
                                    @click="deletePost(post.id)"
                                    class="text-red-600 hover:underline"
                                >
                                    <TrashIcon
                                        class="h-5 w-5 cursor-pointer text-red-400 hover:text-red-700"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NoContent v-else />
        </div>
    </div>
</template>
