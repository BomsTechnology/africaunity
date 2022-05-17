<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div class="w-full z-0 p-4">
                <div
                    class="px-8 py-5 bg-white shadow-lg flex w-full justify-between"
                >
                    <h1 class="text-4xl text-primary-blue font-bold capitalize">
                        Edit University
                    </h1>
                </div>

                <section class="p-6 mx-auto bg-white shadow-md w-full">
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <h2 class="text-md font-light text-gray-700">
                        Edit University
                    </h2>
                    <form
                        @submit.prevent="saveUniversity()"
                        id="universityform"
                        enctype="multipart/form-data"
                    >
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Name</label
                                >
                                <input
                                    required
                                    v-model="university.name"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Continent</label
                                >
                                <select
                                    required
                                    @change="filteredZone"
                                    v-model="university.continent_id"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Zone</label
                                >
                                <select
                                    required
                                    @change="filteredCountry"
                                    v-model="university.zone_id"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Country</label
                                >
                                <select
                                    required
                                    @change="filteredCity"
                                    v-model="university.country_id"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                                        Select {{ $t("zoned") }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="pt"
                                    >City</label
                                >
                                <select
                                    required
                                    v-model="university.city_id"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                                        Select {{ $t("country") }}
                                    </option>
                                </select>
                            </div>

                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="fr"
                                    >Image</label
                                >
                                <input
                                    ref="file"
                                    @change="handelFileObject()"
                                    type="file"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="pt"
                                    >Description</label
                                >
                                <textarea
                                    required
                                    type="text"
                                    v-model="university.description"
                                    id="pt"
                                    class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                >
                                </textarea>
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button
                                v-if="loading == 0"
                                type="submit"
                                class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none"
                            >
                                Save
                            </button>
                            <button
                                v-if="loading == 1"
                                type="submit"
                                disabled
                                class="px-6 py-2 leading-5 text-white rounded bg-blue-300 focus:outline-none"
                            >
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
        </div>
    </div>
</template>

<script>
import Sidebar from "../../../components/Sidebar.vue";
import { reactive, ref, onMounted } from "vue";
import Error from "../../../components/Error.vue";
import useUniversities from "../../../services/universityServices.js";
import useContinents from "../../../services/continentServices.js";
import useCountries from "../../../services/countryServices.js";
import useZones from "../../../services/zoneServices.js";
import useCities from "../../../services/cityServices.js";
import router from "../../../router/index.js";
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    components: {
        Sidebar,
        Error,
    },
    setup(props) {
        const { updateUniversity, getUniversity, university, errors, loading } =
            useUniversities();
        const { continents, getContinents } = useContinents();
        const { countries, getCountries } = useCountries();
        const { cities, getCities } = useCities();
        const { zones, getZones } = useZones();

        const zoneFiltered = ref([]);
        const countryFiltered = ref([]);
        const cityfiltered = ref([]);

        const filteredCity = () => {
            cityfiltered.value = cities.value.filter((city) => {
                return city.country_id == university.value.country_id;
            });
        };

        const filteredCountry = () => {
            countryFiltered.value = countries.value.filter((country) => {
                return country.zone_id == university.value.zone_id;
            });
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
            cityfiltered.value = [];
        };
        onMounted(async () => {
            await getUniversity(props.id);
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
        });

        const saveUniversity = async () => {
            let formData = new FormData();
            formData.append("image", university.value.image);
            formData.append("name", university.value.name);
            formData.append("description", university.value.description);
            formData.append("continent_id", university.value.continent_id);
            formData.append("country_id", university.value.country_id);
            formData.append("city_id", university.value.city_id);
            formData.append("_method", "PUT");

            await updateUniversity(formData, props.id);

            router.push({
                name: "admin.university.index",
            });
        };

        return {
            cityfiltered,
            zoneFiltered,
            countryFiltered,
            filteredZone,
            filteredCountry,
            filteredCity,
            university,
            continents,
            countries,
            cities,
            saveUniversity,
            errors,
            loading,
        };
    },
    methods: {
        handelFileObject() {
            this.university.image = this.$refs.file.files[0];
        },
    },
};
</script>
