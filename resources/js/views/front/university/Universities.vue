<template>
    <div class="mx-auto min-h-screen w-full bg-white xl:w-[90%]">
        <h1
            class="py-2 text-center text-5xl font-bold capitalize text-primary-blue"
        >
            {{ $t("univerities") }}
        </h1>
        
        <div class="py-8 lg:px-16">
            <div class="flex justify-end py-4">
                <router-link
                    :to="{
                        name: 'add.ads',
                    }"
                    v-if="user.type == 'particular' || user.type == 'admin'"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">
                        {{ $tc("add", 2) }} {{ $t("ads") }}
                    </p>
                </router-link>
            </div>
            <div
                class="grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-4"
            >
                <div class="text-xs lg:text-sm">
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("key-words")
                    }}</label>
                    <input
                        type="text"
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
            <div class="bg-primary-blue p-2 shadow"></div>
            <div v-if="loading == 3">
                <University />
            </div>
            <div
                class="grid grid-cols-1 gap-8 px-10 py-8 md:grid-cols-2 lg:grid-cols-4"
                ref="universityContainer"
                v-else-if="universities.length != 0"
            >
                <div
                    class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md"
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
                    <div class="p-6">
                        <div>
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
                                class="dark:text-white mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"
                                >{{
                                    university.name.length <= 30
                                        ? university.name
                                        : university.name.substring(0, 27) +
                                          "..."
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
</template>

<script setup>
import { reactive, ref, onMounted, computed, onUnmounted } from "vue";
import { FaceFrownIcon, PlusCircleIcon } from '@heroicons/vue/24/solid';
import useUniversities from "@/services/universityServices.js";
import useContinents from "@/services/continentServices.js";
import useCountries from "@/services/countryServices.js";
import useCities from "@/services/cityServices.js";
import useZones from "@/services/zoneServices.js";
import University from "../../../components/skeleton/University.vue";
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
    await getUniversities();
    await getContinents();
    await getZones();
    await getCountries();
    await getCities();
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
            filterUniversity.searchKey == ""
        ) {
            toGet.value = false;
            page.value++;
            await getUniversities();
            toGet.value = true;
        }
    }
};

const universitiesFilter = async () => {
    if (
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
        await getUniversities();
    }
};

const filterUniversity = reactive({
    country: "",
    continent: "",
    city: "",
    zone: "",
    searchKey: "",
});

const filteredCityU = async () => {
    cityfilteredU.value = cities.value.filter((city) => {
        return city.country_id == filterUniversity.country;
    });
    filterUniversity.city = "";
};

const filteredCountryU = async () => {
    countryFilteredU.value = countries.value.filter((country) => {
        return country.zone_id == filterUniversity.zone;
    });
    filterUniversity.country = "";
    filterUniversity.city = "";
    cityfilteredU.value = [];
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
};
</script>
