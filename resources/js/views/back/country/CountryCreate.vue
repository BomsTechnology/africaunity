<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div class="w-full z-0 h-full p-4">
                <div class="px-8 py-5 bg-white shadow-lg flex justify-between">
                    <h1 class="text-4xl text-primary-blue font-bold">
                        Add Country
                    </h1>
                </div>

                <section class="p-6 mx-auto bg-white shadow-md">
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <h2 class="text-md font-light text-gray-700">
                        Add a new country for the 04 languages of the website
                    </h2>
                    <form @submit.prevent="storeCountry()">
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="fr"
                                    >Country Code</label
                                >
                                <input
                                    id="fr"
                                    v-model="country.code_iso"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div class="">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Continent
                                </label>
                                <select
                                    required
                                    v-model="country.continent_id"
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
                            <div class="">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Zone
                                </label>
                                <select
                                    required
                                    v-model="country.zone_id"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                >
                                    <option
                                        v-if="filteredZone.length != 0"
                                        v-for="zone in filteredZone"
                                        :key="zone.id"
                                        :value="zone.id"
                                    >
                                        {{ zone.name_en }}
                                    </option>
                                    <option v-else value="null">
                                        Select continent
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="fr"
                                    >French</label
                                >
                                <input
                                    id="fr"
                                    v-model="country.name_fr"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="en"
                                    >English</label
                                >
                                <input
                                    id="en"
                                    v-model="country.name_en"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Español</label
                                >
                                <input
                                    id="es"
                                    v-model="country.name_es"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="pt"
                                    >Português</label
                                >
                                <input
                                    type="text"
                                    v-model="country.name_pt"
                                    id="pt"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
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
import { reactive, onMounted } from "vue";
import Error from "../../../components/Error.vue";
import useCountries from "../../../services/countryServices.js";
import useContinents from "../../../services/continentServices.js";
import useZones from "../../../services/zoneServices.js";
export default {
    components: {
        Sidebar,
        Error,
    },
    setup() {
        const country = reactive({
            code_iso: "",
            name_fr: "",
            name_en: "",
            name_es: "",
            name_pt: "",
            zone_id: "",
            continent_id: "",
        });
        const { continents, getContinents } = useContinents();
        const { zones, getZones } = useZones();
        const { createCountry, errors, loading } = useCountries();

        onMounted(getContinents(), getZones());

        const storeCountry = async () => {
            await createCountry({ ...country });
        };

        return {
            zones,
            continents,
            country,
            loading,
            errors,
            storeCountry,
        };
    },

    computed: {
        filteredZone() {
            return this.zones.filter((zone) => {
                return zone.continent_id == this.country.continent_id;
            });
        },
    },
};
</script>
