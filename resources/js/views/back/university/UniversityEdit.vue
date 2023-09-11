<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4">
            <div class="flex w-full justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Edit University
                </h1>
            </div>

            <section class="mx-auto w-full bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">
                    Edit University
                </h2>
                <form
                    @submit.prevent="saveUniversity()"
                    id="universityform"
                    enctype="multipart/form-data"
                >
                    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="col-span-2">
                            <label class="dark:text-gray-200 text-gray-700"
                                >Name</label
                            >
                            <input
                                required
                                v-model="university.name"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Continent</label
                            >
                            <select
                                required
                                @change="filteredZone"
                                v-model="university.continent_id"
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
                                for="es"
                                >Zone</label
                            >
                            <select
                                required
                                @change="filteredCountry"
                                v-model="university.zone_id"
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
                                    Requires {{ $t("continent") }}
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
                                @change="filteredCity"
                                v-model="university.country_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-if="countryFiltered.length != 0"
                                    v-for="country in countryFiltered"
                                    :key="country.id"
                                    :value="country.id"
                                >
                                    {{ country.name_en }}
                                </option>
                                <option v-else value="null">
                                    Requires {{ $t("zoned") }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >City</label
                            >
                            <select
                                required
                                v-model="university.city_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-if="cityfiltered.length != 0"
                                    v-for="city in cityfiltered"
                                    :key="city.id"
                                    :value="city.id"
                                >
                                    {{ city.name_en }}
                                </option>
                                <option v-else value="null">
                                    Requires {{ $t("country") }}
                                </option>
                            </select>
                        </div>

                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="fr"
                                >Image</label
                            >
                            <input
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
                                >Description</label
                            >

                            <textarea
                                required
                                ref="textarea"
                                class="h-96 w-full"
                            >
                            </textarea>
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
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Error from "@/components/Error.vue";
import useUniversities from "@/services/universityServices.js";
import useContinents from "@/services/continentServices.js";
import useCountries from "@/services/countryServices.js";
import useZones from "@/services/zoneServices.js";
import useCities from "@/services/cityServices.js";
import { useRouter } from "vue-router";
const router = useRouter();
const textarea = ref("");
const msgClick = ref("");
const nbClick = ref(0);
const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});

const { updateUniversity, getUniversity, university, errors, loading } =
    useUniversities();
const { continents, getContinents } = useContinents();
const { countries, getCountries } = useCountries();
const { cities, getCities } = useCities();
const { zones, getZones } = useZones();
const file = ref(null);
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const cityfiltered = ref([]);

const filteredCity = () => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == university.value.country_id;
    });
    university.value.city_id = "";
};

const filteredCountry = () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == university.value.zone_id;
    });
    university.value.country_id = "";
    university.value.city_id = "";
    cityfiltered.value = [];
};

const filteredZone = () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == university.value.continent_id;
    });
    university.value.zone_id = "";
    university.value.country_id = "";
    university.value.city_id = "";
    cityfiltered.value = [];
    countryFiltered.value = [];
};
onMounted(async () => {
    await getUniversity(props.id);
    textarea.value.value = university.value.description;
    sceditor.create(textarea.value, {
        format: "bbcode",
        style: "https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",
        height: 400,
        toolbarExclude:
            "indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",
        icons: "material",
    });
    nbClick.value++;
    await getContinents();
    await getCountries();
    await getCities();
    await getZones();
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == university.value.continent_id;
    });
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == university.value.zone_id;
    });
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == university.value.country_id;
    });
    university.value.image = "";
});

const saveUniversity = async () => {
    university.value.description = textarea.value.value;
    if (nbClick.value == 1) {
        nbClick.value++;
        msgClick.value = "please click again";
        return;
    }

    let formData = new FormData();
    formData.append("image", university.value.image);
    formData.append("name", university.value.name);
    formData.append("description", university.value.description);
    formData.append("continent_id", university.value.continent_id);
    formData.append("country_id", university.value.country_id);
    formData.append("city_id", university.value.city_id);
    formData.append("zone_id", university.value.zone_id);
    formData.append("_method", "PUT");

    await updateUniversity(formData, props.id);

    if (errors.value == "") {
        router.push({
            name: "admin.university.index",
        });
    }
};

const handelFileObject = async () => {
    university.value.image = file.value.files[0];
};
</script>
