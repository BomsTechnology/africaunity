<template>
    <div class="mx-auto min-h-screen w-full bg-white xl:w-[90%]">
        <h1
            class="py-2 text-center text-5xl font-bold capitalize text-primary-blue"
        >
            {{ $t("univerities") }}
        </h1>
        
        <div class="py-8 px-6 lg:px-16 flex lg:flex-row flex-col-reverse gap-5">
            <div class="lg:max-w-[30%] w-full max-w-full sticky top-0">
            <div
                class="space-y-3 px-10 pb-8 pt-4 text-xs lg:border-r lg:text-sm"
            >
                <div class="text-xs lg:text-sm">
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("key-words")
                    }}</label>
                    <input
                        type="text"
                        @change="universitiesFilter()"
                        v-model="filterUniversity.searchKey"
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("continent")
                    }}</label>
                    <select
                        @change="filteredZoneU()"
                        v-model="filterUniversity.continent"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
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
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("zoned")
                    }}</label>
                    <select
                        v-model="filterUniversity.zone"
                        @change="filteredCountryU()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-if="zoneFilteredU.length != 0"
                            v-for="zone in zoneFilteredU"
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
                            Requires {{ $t("continent") }}
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("country")
                    }}</label>
                    <select
                        v-model="filterUniversity.country"
                        @change="filteredCityU()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-if="countryFilteredU.length != 0"
                            v-for="country in countryFilteredU"
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
                            Requires {{ $t("zoned") }}
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("city")
                    }}</label>
                    <select
                        v-model="filterUniversity.city"
                        @change="universitiesFilter()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-if="cityfilteredU.length != 0"
                            v-for="city in cityfilteredU"
                            :key="city.id"
                            :value="city.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                city.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                city.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                city.name_es
                            }}</span>
                            <span v-else>{{ city.name_pt }}</span>
                        </option>
                        <option v-else value="null">
                            Requires {{ $t("country") }}
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">Etablishment Type</label>
                    <select
                        v-model="filterUniversity.legal_status"
                        @change="universitiesFilter()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="legalStatus in legalStatuses"
                            :key="legalStatus.id"
                            :value="legalStatus.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                legalStatus.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                legalStatus.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                legalStatus.name_es
                            }}</span>
                            <span v-else>{{ legalStatus.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">Sector</label>
                    <select
                        v-model="filterUniversity.university_sector"
                        @change="universitiesFilter()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="universitySector in universitySectors"
                            :key="universitySector.id"
                            :value="universitySector.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                universitySector.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                universitySector.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                universitySector.name_es
                            }}</span>
                            <span v-else>{{ universitySector.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">Level Study</label>
                    <select
                        v-model="filterUniversity.level_study"
                        @change="universitiesFilter()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="levelStudy in levelStudies"
                            :key="levelStudy.id"
                            :value="levelStudy.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                levelStudy.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                levelStudy.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                levelStudy.name_es
                            }}</span>
                            <span v-else>{{ levelStudy.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">Required Level</label>
                    <select
                        v-model="filterUniversity.required_level"
                        @change="universitiesFilter()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="levelStudy in levelStudies"
                            :key="levelStudy.id"
                            :value="levelStudy.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                levelStudy.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                levelStudy.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                levelStudy.name_es
                            }}</span>
                            <span v-else>{{ levelStudy.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">Schooling Type</label>
                    <select
                        v-model="filterUniversity.schooling_type"
                        @change="universitiesFilter()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="schoolingType in schoolingTypes"
                            :key="schoolingType.id"
                            :value="schoolingType.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                schoolingType.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                schoolingType.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                schoolingType.name_es
                            }}</span>
                            <span v-else>{{ schoolingType.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">First Day of school</label>
                    <select
                        v-model="filterUniversity.firstday_university"
                        @change="universitiesFilter()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
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
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">Registration Period</label>
                    <select
                        v-model="filterUniversity.registration_period"
                        @change="universitiesFilter()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
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
                <div class="flex items-end text-xs lg:text-sm">
                    <button
                        type="button"
                        @click="universitiesFilter()"
                        class="w-full rounded-md bg-primary-blue px-4 py-2.5 text-white"
                    >
                        {{ $t("search") }}
                    </button>
                </div>
            </div>
        </div>
            <div class="lg:max-w-[70%] w-full max-w-full">
            <div class="flex justify-center py-4">
                <div class="flex items-center p-2 rounded-full shadow-lg bg-white">
                    <button class=" rounded-full lg:p-4 p-2  uppercase text-sm lg:text-lg font-semibold"
                        :class="[
                            filterUniversity.type == 'university' ?
                            'bg-primary-blue text-white' : 'bg-white text-black'
                        ]"
                        @click="toogleType('university')"
                        type="button"
                        >{{ $t("univerities") }}</button>
                    <button :class="[
                            filterUniversity.type == 'training' ?
                            'bg-primary-blue text-white' : 'bg-white text-black'
                        ]"
                        @click="toogleType('training')"
                        type="button" class=" rounded-full lg:p-4 p-2 uppercase text-sm lg:text-lg font-semibold">Traning</button>
                </div>
            </div>
            
            <div
                class="grid grid-cols-1 gap-8 px-10 py-8 md:grid-cols-2 lg:grid-cols-3"
                ref="universityContainer"
                v-if="universities.length != 0"
            >
                <div
                    class="dark:bg-gray-800  rounded-lg bg-white shadow-md"
                    v-for="university in universities"
                    :key="university.id"
                >
                    <router-link
                        :to="{
                            name: 'show.university',
                            params: {
                                id: university.id,
                                slug: university.slug,
                            },
                        }"
                    >
                        <img
                            class="h-44 w-full object-cover"
                            :src="university.image"
                            alt=""
                        />
                    </router-link>
                    <div class="p-6 flex flex-col">
                        <div class=" flex flex-col items-start flex-grow-0">
                            <a
                                href="#"
                                v-if="university.city"
                                class="rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    university.city.name_en +
                                    "-" +
                                    university.country.code_iso
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    university.city.name_fr +
                                    "-" +
                                    university.country.code_iso
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    university.city.name_es +
                                    "-" +
                                    university.country.code_iso
                                }}</span>
                                <span v-else>{{
                                    university.country.name_pt +
                                    "-" +
                                    university.country.code_iso
                                }}</span>
                            </a>
                            <router-link
                                :to="{
                                    name: 'show.university',
                                    params: {
                                        id: university.id,
                                        slug: university.slug,
                                    },
                                }"
                                class="dark:text-white mt-2 flex-grow block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"
                                >{{
                                    university.name
                                }}</router-link
                            >
                        </div>

                        <div
                            class="mt-4 flex items-center justify-between text-sm"
                        >
                            <router-link
                                :to="{
                                    name: 'show.university',
                                    params: {
                                        id: university.id,
                                        slug: university.slug,
                                    },
                                }"
                                class="dark:text-blue-400 text-blue-600 hover:underline"
                                >{{ $t("read-more") }}</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="loading == 1">
                <University />
            </div>
            <NoContent v-if="universities.length == 0 && loading != 1" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed, onUnmounted } from "vue";
import { FaceFrownIcon, PlusCircleIcon } from '@heroicons/vue/24/solid';
import useUniversities from "@/services/universityServices.js";
import useContinents from "@/services/continentServices.js";
import useCountries from "@/services/countryServices.js";
import useCities from "@/services/cityServices.js";
import useZones from "@/services/zoneServices.js";
import useLegalStatuses from "@/services/legalStatusServices.js";
import useUniversitySectors from "@/services/universitySectorServices.js";
import useSchoolingTypes from "@/services/schoolingTypeServices.js";
import useLevelStudies from "@/services/levelStudyServices.js";

import University from "../../../components/skeleton/University.vue";
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
const {
    universities,
    getUniversities,
    loading,
    page,
    isAll,
    filterUniversities,
} = useUniversities();
const { continents, getContinents } = useContinents();
const { countries, getCountries } = useCountries();
const { zones, getZones } = useZones();
const { cities, getCities } = useCities();
const zoneFilteredU = ref([]);
const countryFilteredU = ref([]);
const cityfilteredU = ref([]);
const universityContainer = ref(null);
const toGet = ref(true);
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
onMounted(async () => {
    window.addEventListener("scroll", handleScroll);
    await getUniversities('university');
    await getContinents();
    await getZones();
    await getCountries();
    await getCities();
    await getLegalStatuses();
    await getUniversitySectors();
    await getSchoolingTypes();
    await getLevelStudies();
});

onUnmounted(async () => {
    page.value = 1;
    window.removeEventListener("scroll", handleScroll);
});

const handleScroll = async (e) => {
    if (universityContainer.value) {
        let element = universityContainer.value;
        if (
            element.getBoundingClientRect().bottom < window.innerHeight &&
            toGet.value &&
            !isAll.value &&
            filterUniversity.country == "" &&
            filterUniversity.continent == "" &&
            filterUniversity.city == "" &&
            filterUniversity.zone == "" &&
            filterUniversity.legal_status == "" &&
            filterUniversity.schooling_type == "" &&
            filterUniversity.university_sector == "" &&
            filterUniversity.level_study == "" &&
            filterUniversity.required_level == "" &&
            filterUniversity.firstday_university == "" &&
            filterUniversity.registration_period == "" &&
            filterUniversity.searchKey == ""
        ) {
            toGet.value = false;
            page.value++;
            await getUniversities(filterUniversity.type);
            toGet.value = true;
        }
    }
};

const universitiesFilter = async () => {
    if (
        filterUniversity.legal_status != "" ||
        filterUniversity.schooling_type != "" ||
        filterUniversity.university_sector != "" ||
        filterUniversity.level_study != "" ||
        filterUniversity.required_level != "" ||
        filterUniversity.firstday_university != "" ||
        filterUniversity.registration_period != "" ||
        filterUniversity.country != "" ||
        filterUniversity.continent != "" ||
        filterUniversity.city != "" ||
        filterUniversity.zone != "" ||
        filterUniversity.searchKey != ""
    ) {
        loading.value = 1;
        await filterUniversities({ ...filterUniversity });
        loading.value = 2;
    } else {
        page.value = 1;
        isAll.value = false;
        await getUniversities(filterUniversity.type);
    }
};

const filterUniversity = reactive({
    type: "university",
    country: "",
    continent: "",
    city: "",
    zone: "",
    searchKey: "",
    legal_status: "",
    schooling_type: "",
    university_sector: "",
    level_study: "",
    required_level: "",
    firstday_university: "",
    registration_period: "",
});

const filteredCityU = async () => {
    cityfilteredU.value = cities.value.filter((city) => {
        return city.country_id == filterUniversity.country;
    });
    filterUniversity.city = "";
    await universitiesFilter();
};

const filteredCountryU = async () => {
    countryFilteredU.value = countries.value.filter((country) => {
        return country.zone_id == filterUniversity.zone;
    });
    filterUniversity.country = "";
    filterUniversity.city = "";
    cityfilteredU.value = [];
    await universitiesFilter();
};

const filteredZoneU = async () => {
    zoneFilteredU.value = zones.value.filter((zone) => {
        return zone.continent_id == filterUniversity.continent;
    });

    filterUniversity.zone = "";
    filterUniversity.country = "";
    filterUniversity.city = "";
    cityfilteredU.value = [];
    countryFilteredU.value = [];
    await universitiesFilter();
};

const toogleType = async (type) => {
    filterUniversity.type = type;
    page.value = 1;
        isAll.value = false;
        universities.value = [];
        await getUniversities(filterUniversity.type);
}
</script>
