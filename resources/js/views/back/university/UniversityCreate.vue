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
                    @submit.prevent="storeUniversity()"
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
                                v-model="university.zone_id"
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

                        <div class="">
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

                        <div class="">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                >Etablishment Type</label
                            >
                            <select
                                required
                                v-model="university.legal_status_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="legalStatus in legalStatuses"
                                    :key="legalStatus.id"
                                    :value="legalStatus.id"
                                >
                                    {{ legalStatus.name_en }}
                                </option>
                            </select>
                        </div>

                        <div class="">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                >Sector</label
                            >
                            <select
                                required
                                v-model="university.university_sector_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="universitySector in universitySectors"
                                    :key="universitySector.id"
                                    :value="universitySector.id"
                                >
                                    {{ universitySector.name_en }}
                                </option>
                            </select>
                        </div>

                        <div class="">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                >Level Study</label
                            >
                            <select
                                required
                                v-model="university.level_study_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                            <option
                                    v-for="levelStudy in levelStudies"
                                    :key="levelStudy.id"
                                    :value="levelStudy.id"
                                >
                                    {{ levelStudy.name_en }}
                                </option>
                            </select>
                        </div>

                        <div class="">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                >Required Level</label
                            >
                            <select
                                required
                                v-model="university.required_level"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="levelStudy in levelStudies"
                                    :key="levelStudy.id"
                                    :value="levelStudy.id"
                                >
                                    {{ levelStudy.name_en }}
                                </option>
                            </select>
                        </div>

                        <div class="">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                >Registration Period</label
                            >
                            <select
                                required
                                v-model="university.registration_period"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="june">June</option>
                                <option value="july">July </option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </div>

                        <div class="">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                >Firstday of School</label
                            >
                            <select
                                required
                                v-model="university.firstday_university"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                            <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="june">June</option>
                                <option value="july">July </option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </div>

                        <div class="">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                >Schooling Type</label
                            >
                            <select
                                required
                                v-model="university.schooling_type_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="schoolingType in schoolingTypes"
                                    :key="schoolingType.id"
                                    :value="schoolingType.id"
                                >
                                    {{ schoolingType.name_en }}
                                </option>
                            </select>
                        </div>

                        <div class="">
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
                                >Description</label
                            >
                            <RichText
                            v-model="university.description"
                        />
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
import useCities from "@/services/cityServices.js";
import useLegalStatuses from "@/services/legalStatusServices.js";
import useUniversitySectors from "@/services/universitySectorServices.js";
import useSchoolingTypes from "@/services/schoolingTypeServices.js";
import useLevelStudies from "@/services/levelStudyServices.js";

import useZones from "@/services/zoneServices.js";
import { useRouter } from "vue-router";
import RichText from '@/components/RichText.vue';
const router = useRouter();
const { continents, getContinents } = useContinents();
const { countries, getCountries } = useCountries();
const { cities, getCities } = useCities();
const { zones, getZones } = useZones();
const { legalStatuses, getLegalStatuses } = useLegalStatuses();
const {
    levelStudies,
    getLevelStudies
} = useLevelStudies();
const {
    universitySectors,
    getUniversitySectors
} = useUniversitySectors();
const {
    schoolingTypes,
    getSchoolingTypes
} = useSchoolingTypes();

const msgClick = ref("");
const props = defineProps({
    type: {
        required: true,
        type: String,
    },
})

onMounted(async () => {
    await getZones();
    await getContinents();
    await getCountries();
    await getCities();
    await getLegalStatuses();
    await getUniversitySectors();
    await getSchoolingTypes();
    await getLevelStudies();
});
const university = reactive({
    name: "",
    description: "",
    image: "",
    continent_id: "",
    country_id: "",
    city_id: "",
    zone_id: "",
    legal_status_id: "",
    schooling_type_id: "",
    university_sector_id: "",
    level_study_id: "",
    required_level: "",
    firstday_university: "",
    registration_period: "",

});

const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const file = ref(null);
const cityfiltered = ref([]);

const filteredCity = () => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == university.country_id;
    });
    university.city_id = "";
};

const filteredCountry = () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == university.zone_id;
    });
    university.country_id = "";
    university.city_id = "";
    cityfiltered.value = [];
};

const filteredZone = () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == university.continent_id;
    });
    university.zone_id = "";
    university.country_id = "";
    university.city_id = "";
    cityfiltered.value = [];
    countryFiltered.value = [];
};
const { createUniversity, errors, loading } = useUniversities();

const storeUniversity = async () => {
    let formData = new FormData();
    formData.append("type", props.type);
    formData.append("image", university.image);
    formData.append("name", university.name);
    formData.append("description", university.description);
    formData.append("continent_id", university.continent_id);
    formData.append("country_id", university.country_id);
    formData.append("city_id", university.city_id);
    formData.append("zone_id", university.zone_id);
    formData.append("legal_status_id", university.legal_status_id);
    formData.append("schooling_type_id", university.schooling_type_id);
    formData.append("university_sector_id", university.university_sector_id);
    formData.append("level_study_id", university.level_study_id);
    formData.append("required_level", university.required_level);
    formData.append("firstday_university", university.firstday_university);
    formData.append("registration_period", university.registration_period);
   
    await createUniversity(formData);
    if (errors.value == "") {
        router.push({
            name: "admin.university.index",
        });
    }
};

const handelFileObject = async () => {
    university.image = file.value.files[0];
};
</script>
