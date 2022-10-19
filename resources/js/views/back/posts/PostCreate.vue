<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4">
            <div class="flex w-full justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Add {{ type }}
                </h1>
            </div>

            <section class="mx-auto w-full bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">
                    Add a new {{ type }}
                </h2>
                <form
                    @submit.prevent="storePost()"
                    id="postform"
                    enctype="multipart/form-data"
                >
                    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="col-span-2">
                            <label class="dark:text-gray-200 text-gray-700"
                                >Title</label
                            >
                            <input
                                required
                                v-model="post.title"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
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

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Continent</label
                            >
                            <select
                                required
                                v-model="post.continent_id"
                                @change="filteredZone"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="continent in continents"
                                    :key="continent.id"
                                    :value="continent.id"
                                >
                                    {{ continent.name_en }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >Zone</label
                            >
                            <select
                                required
                                v-model="post.zone_id"
                                @change="filteredCountry"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-if="zoneFiltered.length != 0"
                                    v-for="zone in zoneFiltered"
                                    :key="zone.id"
                                    :value="zone.id"
                                >
                                    {{ zone.name_en }}
                                </option>
                                <option v-else value="null">
                                    Select {{ $t("continent") }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Country</label
                            >
                            <select
                                required
                                v-model="post.country_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-if="countryFiltered.length != 0"
                                    v-for="country in countryFiltered"
                                    :value="country.id"
                                >
                                    {{ country.name_en }}
                                </option>
                                <option v-else value="null">
                                    Select {{ $t("zoned") }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >Ministry</label
                            >
                            <select
                                required
                                v-model="post.ministry_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="ministry in ministries"
                                    :key="ministry.id"
                                    :value="ministry.id"
                                >
                                    {{ ministry.name_en }}
                                </option>
                            </select>
                        </div>

                        <div class="col-span-2" v-if="type == 'article'">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="fr"
                                >Image</label
                            >
                            <input
                                required
                                ref="file"
                                @change="handelFileObject()"
                                type="file"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >Content</label
                            >
                            <textarea
                                required
                                v-if="type == 'article'"
                                ref="textarea"
                                class="h-96 w-full"
                            >
                            </textarea>

                            <div v-else>
                                <textarea
                                    required
                                    v-model="post.content"
                                    maxlength="2000"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                                >
                                </textarea>
                                <span class="text-xs font-light text-gray-400"
                                    >{{ post.content.length }} of 2000
                                    Characters</span
                                >
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex flex-col items-end justify-end">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                        >
                            Save
                        </button>
                        <button
                            v-if="loading == 1"
                            type="submit"
                            disabled
                            class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"
                        >
                            <svg
                                class="h-5 w-5 animate-spin text-white"
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
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Error from "@/components/Error.vue";
import usePosts from "@/services/postServices.js";
import useContinents from "@/services/continentServices.js";
import useZones from "@/services/zoneServices.js";
import useCountries from "@/services/countryServices.js";
import useMinistries from "@/services/ministryServices.js";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
    type: {
        required: true,
        type: String,
    },
});
const textarea = ref("");
const msgClick = ref("");
const nbClick = ref(0);
const file = ref(null);
const types = ["article", "propau"];
const user = JSON.parse(localStorage.user);
const { continents, getContinents } = useContinents();
const { zones, getZones } = useZones();
const { countries, getCountries } = useCountries();
const { ministries, getMinistries } = useMinistries();
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
onMounted(async () => {
    if (!types.includes(props.type)) {
        router.push({ name: "admin.dash" });
    }

    if (props.type == "article") {
        sceditor.create(textarea.value, {
            format: "xhtml",
            style: "https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",
            height: 400,
            toolbarExclude:
                "indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",
            icons: "material",
        });
        textarea.value.value == "";
    }
    nbClick.value++;
    await getContinents(),
        await getZones(),
        await getCountries(),
        await getMinistries();
});
const post = reactive({
    title: "",
    type: props.type,
    user_id: user.id,
    language: "fr",
    content: "",
    image: "",
    continent_id: 1,
    zone_id: 1,
    country_id: 1,
    ministry_id: 1,
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
    post.country_id = "";
};
const { createPost, errors, loading } = usePosts();

const storePost = async () => {
    if (props.type == "article") {
        post.content = textarea.value.value;
        if (nbClick.value == 1) {
            nbClick.value++;
            msgClick.value = "please click again";
            return;
        }
    }
    let formData = new FormData();
    formData.append("image", post.image);
    formData.append("title", post.title);
    formData.append("type", post.type);
    formData.append("user_id", post.user_id);
    formData.append("language", post.language);
    formData.append("content", post.content);
    formData.append("continent_id", post.continent_id);
    formData.append("zone_id", post.zone_id);
    formData.append("country_id", post.country_id);
    formData.append("ministry_id", post.ministry_id);

    await createPost(formData);
    if (errors.value == "") {
        if (props.type == "article") {
            router.push({
                name: "admin.post.index",
                params: { type: "article" },
            });
        } else {
            router.push({
                name: "admin.post.index",
                params: { type: "propau" },
            });
        }
    }
};
const handelFileObject = () => {
    post.image = file.value.files[0];
};
</script>
