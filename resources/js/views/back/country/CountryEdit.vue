<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold text-primary-blue">
                    Edit Country
                </h1>
            </div>

            <section class="mx-auto bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">Edit a country</h2>
                <form @submit.prevent="saveCountry()">
                    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="fr"
                                >Country Code</label
                            >
                            <input
                                id="fr"
                                v-model="country.code_iso"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Continent
                            </label>
                            <select
                                v-if="country.zone"
                                required
                                v-model="country.zone.continent_id"
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
                        <div class="">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Zone
                            </label>
                            <select
                                required
                                v-model="country.zone_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                                class="dark:text-gray-200 text-gray-700"
                                for="fr"
                                >French</label
                            >
                            <input
                                id="fr"
                                v-model="country.name_fr"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="en"
                                >English</label
                            >
                            <input
                                id="en"
                                v-model="country.name_en"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Español</label
                            >
                            <input
                                id="es"
                                v-model="country.name_es"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >Português</label
                            >
                            <input
                                type="text"
                                v-model="country.name_pt"
                                id="pt"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div class="mt-6 flex justify-end">
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
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted, ref, computed } from "vue";
import Error from "@/components/Error.vue";
import useCountries from "@/services/countryServices.js";
import useContinents from "@/services/continentServices.js";
import useZones from "@/services/zoneServices.js";

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});

const { continents, getContinents } = useContinents();
const { zones, getZones } = useZones();
const { updateCountry, getCountry, errors, loading, country } = useCountries();

onMounted(async () => {
    await getCountry(props.id);
    await getContinents();
    await getZones();
    
});

const saveCountry = async () => {
    await updateCountry(props.id);
};

const filteredZone = computed(() => {
        return zones.value.filter((zone) => {
            return zone.continent_id == country?.value.zone?.continent_id;
        });
});
</script>
