<template>
    <div class="w-full lg:px-20 py-4">
        <div class="py-5 text-center w-full space-y-4">
            <h1 class="text-4xl text-primary-blue font-bold capitalize">
                {{ $t("add") }} {{ type }}
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
            <h1 class="text-xl font-semibold">{{ $t("add") }} {{ type }}</h1>
            <h2 class="text-md font-light text-gray-700">
                {{ $t("good-msg-post") }} !
            </h2>
            <form
                @submit.prevent="storePost()"
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
                            >{{ post.title.length }} of 50 Characters</span
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
                            @change="filteredZone"
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
                            >{{ $t("zoned")
                            }}<span class="text-red-500">*</span></label
                        >
                        <select
                            required
                            @change="filteredCountry"
                            v-model="post.zone_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
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
                                Select {{ $t("continent") }}
                            </option>
                        </select>
                    </div>
                    <div class="lg:col-span-1 col-span-2">
                        <label class="text-gray-700 dark:text-gray-200" for="es"
                            >{{ $t("country")
                            }}<span class="text-red-500">*</span></label
                        >
                        <select
                            required
                            v-model="post.country_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
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
                                Select {{ $t("zoned") }}
                            </option>
                        </select>
                    </div>

                    <div class="lg:col-span-1 col-span-2">
                        <label class="text-gray-700 dark:text-gray-200" for="pt"
                            >{{ $t("ministry")
                            }}<span class="text-red-500">*</span></label
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
                        <input
                            required
                            ref="file"
                            @change="handelFileObject()"
                            type="file"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
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
                                v-model="post.content"
                                maxlength="2000"
                                class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            >
                            </textarea>
                            <span class="text-xs font-light text-gray-400"
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
import { reactive, ref, onMounted, computed } from "vue";
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
    },
    components: {
        Error,
    },
    created() {
        if (JSON.parse(localStorage.user).type == "business1") {
            router.push({ name: "home" });
        }
    },
    setup(props) {
        const types = ["article", "propau"];
        const user = localStorage.user ? JSON.parse(localStorage.user) : "";
        const { continents, getContinents } = useContinents();
        const { zones, getZones } = useZones();
        const { countries, getCountries } = useCountries();
        const { ministries, getMinistries } = useMinistries();
        const textarea = ref("");
        const zoneFiltered = ref([]);
        const countryFiltered = ref([]);
        const post = reactive({
            title: "",
            type: props.type,
            user_id: user.id,
            language: "fr",
            content: "",
            image: "",
            continent_id: "",
            zone_id: "",
            country_id: "",
            ministry_id: "",
        });

        onMounted(async () => {
            if (!types.includes(props.type)) {
                router.push({ name: "home" });
            }

            await getContinents();
            await getZones();
            await getCountries();
            await getMinistries();

            if (props.type == "article") {
                sceditor.create(textarea.value, {
                    format: "bbcode",
                    style: "https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",
                    height: 400,
                    toolbarExclude:
                        "indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",
                    icons: "material",
                });
                textarea.value.value == "";
            }
        });

        const filteredZone = () => {
            zoneFiltered.value = zones.value.filter((zone) => {
                return zone.continent_id == post.continent_id;
            });
            post.country_id = "";
            post.zone_id = "";
            countryFiltered.value = [];
        };
        const filteredCountry = () => {
            countryFiltered.value = countries.value.filter((country) => {
                return country.zone_id == post.zone_id;
            });
        };

        const { createPost, errors, loading } = usePosts();

        const storePost = async () => {
            if (props.type == "article") {
                if (
                    textarea.value.value == "" ||
                    post.content == textarea.value.value
                ) {
                    console.log("click again");
                    return;
                } else {
                    post.content = textarea.value.value;
                }
            }
            let formData = new FormData();
            formData.append("image", post.image);
            formData.append("title", post.title);
            formData.append("type", post.type);
            formData.append("user_id", post.user_id);
            formData.append("language", localStorage.lang);
            formData.append("content", post.content);
            formData.append("continent_id", post.continent_id);
            formData.append("zone_id", post.zone_id);
            formData.append("country_id", post.country_id);
            formData.append("ministry_id", post.ministry_id);

            await createPost(formData);
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
            zoneFiltered,
            countryFiltered,
            filteredZone,
            filteredCountry,
            textarea,
            post,
            loading,
            errors,
            storePost,
            continents,
            zones,
            countries,
            ministries,
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
