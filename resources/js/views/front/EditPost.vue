<template>
    <div class="w-full lg:px-20 py-4">
        <div class="py-5 text-center w-full space-y-4">
            <h1 class="text-4xl text-primary-blue font-bold capitalize">
                {{ $t("edit") }} {{ type }}
            </h1>
            <h2 class="text-md text-gray-700">
                {{ $t("your") }} {{ type }} {{ $t("add-desc-1") }}
            </h2>
            <div
                class="flex lg:flex-row flex-col justify-center items-center lg:space-x-3"
            >
                <h1 class="font-semibold">{{ $t("select-lang") }} :</h1>
                <div class="flex space-x-3 lg:mt-0 mt-3">
                    <button
                        :class="[
                            $i18n.locale != 'fr'
                                ? 'px-3 py-1 rounded-md bg-menu text-white'
                                : 'px-3 py-1 rounded-md bg-primary-blue text-white',
                        ]"
                        @click.prevent="changeLocale('fr')"
                    >
                        {{ $t("fr") }}
                    </button>
                    <button
                        :class="[
                            $i18n.locale != 'en'
                                ? 'px-3 py-1 rounded-md bg-menu text-white'
                                : 'px-3 py-1 rounded-md bg-primary-blue text-white',
                        ]"
                        @click.prevent="changeLocale('en')"
                    >
                        {{ $t("en") }}
                    </button>
                    <button
                        :class="[
                            $i18n.locale != 'es'
                                ? 'px-3 py-1 rounded-md bg-menu text-white'
                                : 'px-3 py-1 rounded-md bg-primary-blue text-white',
                        ]"
                        @click.prevent="changeLocale('es')"
                    >
                        {{ $t("es") }}
                    </button>
                    <button
                        :class="[
                            $i18n.locale != 'pt'
                                ? 'px-3 py-1 rounded-md bg-menu text-white'
                                : 'px-3 py-1 rounded-md bg-primary-blue text-white',
                        ]"
                        @click.prevent="changeLocale('pt')"
                    >
                        {{ $t("pt") }}
                    </button>
                </div>
            </div>
        </div>

        <section class="p-6 bg-white shadow-xl rounded-md mx-auto w-full">
            <Error v-if="errors != ''">{{ errors }}</Error>
            <h1 class="text-xl font-semibold">{{ $t("edit") }} {{ type }}</h1>
            <h2 class="text-md font-light text-gray-700">
                {{ $t("good-msg-post") }} !
            </h2>
            <form
                @submit.prevent="savePost()"
                id="postform"
                enctype="multipart/form-data"
            >
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div class="col-span-2">
                        <label class="text-gray-700 dark:text-gray-200"
                            >{{ $t("title") }}
                            <span class="text-red-500">*</span></label
                        >
                        <input
                            required
                            v-model="post.title"
                            maxlength="50"
                            type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                        <span class="text-xs font-light text-gray-400"
                            >{{ post.title ? post.title.length : 0 }} of 50
                            Characters</span
                        >
                    </div>

                    <div class="lg:col-span-1 col-span-2">
                        <label class="text-gray-700 dark:text-gray-200" for="es"
                            >{{ $t("continent") }}
                            <span class="text-red-500">*</span></label
                        >
                        <select
                            required
                            v-model="post.continent_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
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

                    <div class="lg:col-span-1 col-span-2">
                        <label class="text-gray-700 dark:text-gray-200" for="pt"
                            >{{ $t("zoned") }}
                            <span class="text-red-500">*</span></label
                        >
                        <select
                            required
                            v-model="post.zone_id"
                            name=""
                            id=""
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
                            <option
                                v-for="zone in zones"
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
                        </select>
                    </div>
                    <div class="lg:col-span-1 col-span-2">
                        <label class="text-gray-700 dark:text-gray-200" for="es"
                            >{{ $t("country") }}
                            <span class="text-red-500">*</span></label
                        >
                        <select
                            required
                            v-model="post.country_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
                            <option
                                v-for="country in countries"
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
                        </select>
                    </div>

                    <div class="lg:col-span-1 col-span-2">
                        <label class="text-gray-700 dark:text-gray-200" for="pt"
                            >{{ $t("ministry") }}
                            <span class="text-red-500">*</span></label
                        >
                        <select
                            required
                            v-model="post.ministry_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
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

                    <div class="col-span-2" v-if="type == 'article'">
                        <label class="text-gray-700 dark:text-gray-200" for="fr"
                            >{{ $t("thumbnails") }}
                            <span class="text-red-500">*</span></label
                        >
                        <div class="flex items-center space-x-4 py-4">
                            <img
                                :src="post.image"
                                class="h-16 w-16 rounded-full"
                                :alt="post.title"
                            />
                            <input
                                ref="file"
                                @change="handelFileObject()"
                                type="file"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>

                    <div class="col-span-2">
                        <label class="text-gray-700 dark:text-gray-200" for="pt"
                            >{{ $t("content") }}
                            <span class="text-red-500">*</span></label
                        >
                        <textarea
                            required
                            v-if="type == 'article'"
                            ref="textarea"
                            class="w-full h-96"
                        >
                        </textarea>

                        <div v-else>
                            <textarea
                                required
                                v-if="post.content"
                                v-model="post.content"
                                maxlength="2000"
                                class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            >
                            </textarea>
                            <span
                                v-if="post.content"
                                class="text-xs font-light text-gray-400"
                                >{{ post.content.length }} of 2000
                                Characters</span
                            >
                        </div>
                    </div>
                </div>

                <div class="mt-20">
                    <button
                        v-if="loading == 0"
                        type="submit"
                        class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-primary-blue focus:outline-none"
                    >
                        {{ $t("save") }}
                    </button>
                    <button
                        v-if="loading == 1"
                        type="submit"
                        disabled
                        class="px-6 py-4 text-md leading-5 flex justify-center items-center w-full text-white rounded bg-blue-300 focus:outline-none"
                    >
                        {{ $t("save") }}...
                        <svg
                            class="animate-spin h-5 w-5 text-white"
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
            </form>
        </section>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import Error from "../../components/Error.vue";
import usePosts from "../../services/postServices.js";
import useContinents from "../../services/continentServices.js";
import useZones from "../../services/zoneServices.js";
import useCountries from "../../services/countryServices.js";
import useMinistries from "../../services/ministryServices.js";
import router from "../../router/index.js";

export default {
    props: {
        type: {
            required: true,
            type: String,
        },
        id: {
            required: true,
            type: String,
        },
    },
    components: {
        Error,
    },
    setup(props) {
        const types = ["article", "propau"];
        const user = localStorage.user ? JSON.parse(localStorage.user) : "";
        const { updatePost, getPost, post, errors, loading } = usePosts();
        const { continents, getContinents } = useContinents();
        const { zones, getZones } = useZones();
        const { countries, getCountries } = useCountries();
        const { ministries, getMinistries } = useMinistries();
        const textarea = ref("");
        onMounted(async () => {
            await getPost(props.id);

            if (props.type == "article") {
                textarea.value.value = post.value.content;
                sceditor.create(textarea.value, {
                    format: "bbcode",
                    style: "https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",
                    height: 400,
                    toolbarExclude:
                        "indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",
                    icons: "material",
                });
            }

            if (!types.includes(props.type)) {
                router.push({ name: "home" });
            }

            await getContinents();
            await getZones();
            await getCountries();
            await getMinistries();
        });
        post.value.image = "";
        const savePost = async () => {
            if (props.type == "article") {
                if (post.value.content == textarea.value.value) {
                    console.log("click again");
                    return;
                } else {
                    post.value.content = textarea.value.value;
                    console.log(post.content);
                }
            }

            let formData = new FormData();
            formData.append("image", post.value.image);
            formData.append("title", post.value.title);
            formData.append("type", post.value.type);
            formData.append("user_id", post.value.user_id);
            formData.append("language", post.value.language);
            formData.append("content", post.value.content);
            formData.append("continent_id", post.value.continent_id);
            formData.append("zone_id", post.value.zone_id);
            formData.append("country_id", post.value.country_id);
            formData.append("ministry_id", post.value.ministry_id);
            formData.append("_method", "PUT");

            await updatePost(formData, props.id);
            if (errors.value == "") {
                if (props.type == "article") {
                    router.push({
                        name: "compte",
                        params: {
                            name: user.firstname,
                            id: user.id,
                            redirect: "article",
                        },
                    });
                } else {
                    router.push({
                        name: "compte",
                        params: {
                            name: user.firstname,
                            id: user.id,
                            redirect: "propau",
                        },
                    });
                }
            }
        };
        return {
            textarea,
            post,
            continents,
            zones,
            countries,
            ministries,
            savePost,
            errors,
            loading,
        };
    },
    methods: {
        handelFileObject() {
            this.post.image = this.$refs.file.files[0];
        },
        changeLocale(lang) {
            this.$i18n.locale = lang;
            localStorage.lang = this.$i18n.locale;
        },
    },
};
</script>
