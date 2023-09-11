<template>
    <div class="mx-auto w-full bg-white py-4 xl:w-[90%]">
        <h1
            class="py-4 text-center text-5xl font-bold capitalize text-primary-blue"
        >
            {{ $t("appel d'offre") }}
        </h1>
        <div class="py-8 px-6 lg:px-16">
            <div class="flex justify-end px-6 py-4">
                <button
                    @click="toogleFilter()"
                    class="flex items-center justify-start text-sm text-primary-blue hover:underline"
                >
                    <ChevronUpIcon v-if="showFilter" class="h-5 w-5" />
                    <span v-if="showFilter">{{ $t("hide-filter") }}</span>
                    <ChevronDownIcon v-if="!showFilter" class="h-5 w-5" />
                    <span v-if="!showFilter">{{ $t("show-filter") }}</span>
                </button>
            </div>
            <Transition
                enter-active-class=" transition-all  "
                enter-from-class=" opacity-0  -translate-y-full"
                enter-to-class="  opacity-1 translate-y-0"
                leave-active-class=""
                leave-from-class=""
                leave-to-class=""
            >
                <div
                    class="space-y-3 bg-gray-100 px-10 pb-8 pt-4 text-xs shadow lg:text-sm"
                    v-if="showFilter"
                >
                    <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
                        <div>
                            <label class="dark:text-gray-200 text-gray-700">{{
                                $t("key-words")
                            }}</label>
                            <input
                                type="text"
                                @change="tendersFilter()"
                                v-model="filterTender.searchKey"
                                class="form-input mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                        </div>
                        <div>
                            <label class="dark:text-gray-200 text-gray-700">
                                {{ $t("activity-area") }}
                            </label>
                            <select
                                @change="tendersFilter()"
                                v-model="filterTender.activity_area"
                                class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="activity in activityAreas"
                                    :key="activity.id"
                                    :value="activity.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        activity.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        activity.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        activity.name_es
                                    }}</span>
                                    <span v-else>{{ activity.name_pt }}</span>
                                </option>
                            </select>
                        </div>
                    </div>
                    
                    
                    <div class="grid grid-cols-1 gap-2 lg:grid-cols-4">
                        <div class="">
                            <label class="text-gray-700" for="es">{{
                                $t("continent")
                            }}</label>
                            <select
                                @change="filteredZone()"
                                v-model="filterTender.continent"
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
                        <div class="">
                            <label class="text-gray-700" for="es">{{
                                $t("zoned")
                            }}</label>
                            <select
                                @change="filteredCountry()"
                                v-model="filterTender.zone"
                                class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
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
                                    Requires {{ $t("continent") }}
                                </option>
                            </select>
                        </div>
                        <div class="">
                            <label class="text-gray-700" for="es">{{
                                $t("country")
                            }}</label>
                            <select
                                @change="filteredCity()"
                                v-model="filterTender.country"
                                class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
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
                                    Requires {{ $t("zoned") }}
                                </option>
                            </select>
                        </div>
                        <div class="">
                            <label class="text-gray-700" for="es">{{
                                $t("city")
                            }}</label>
                            <select
                                @change="tendersFilter()"
                                v-model="filterTender.city"
                                class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-if="cityfiltered.length != 0"
                                    v-for="city in cityfiltered"
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
                    </div>
                    <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("salary") }} Min.
                            </label>
                            <input
                                v-model="filterTender.min_price"
                                @change="tendersFilter()"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("currency") }}
                            </label>
                            <select
                                @change="tendersFilter()"
                                v-model="filterTender.currency"
                                class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="currency in currencies"
                                    :key="currency.id"
                                    :value="currency.id"
                                >
                                    {{ currency.symbol + " " + currency.name }}
                                </option>
                            </select>
                        </div>
                        <div class="flex items-end justify-center py-3">
                            <div>
                                <input
                                    type="checkbox"
                                    id="recruitment-agency"
                                    class="mr-3"
                                    @change="tendersFilter()"
                                    v-model="filterTender.recruitment_agency"
                                />
                                <label
                                    class="text-sm text-gray-700"
                                    for="recruitment-agency"
                                    >{{ $t("recruitment-agency") }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <div class="bg-primary-blue p-2 shadow" v-if="showFilter"></div>
            <div
                class="flex justify-end px-6 py-4"
                v-if="user.type != 'particular' && user.type != 'business1'"
            >
                <router-link
                    :to="{
                        name: 'add.tender',
                    }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">{{ $t("add") }} Appel </p>
                </router-link>
            </div>
            <Tender v-if="loading == 3" />
            <div
                v-else-if="tenders.length != 0"
                ref="tenderContainer"
                class="text-lg"
            >
                <div v-for="tender in tenders" :key="tender.id">
                    <router-link
                        :to="{
                            name: 'show.tender',
                            params: { id: tender.id, slug: tender.slug },
                        }"
                        class="flex items-center justify-between border-b border-gray-200 px-2 py-4 hover:bg-gray-100"
                    >
                        <div class="flex items-center space-x-4">
                            <div class="hidden lg:block">
                                <img
                                    v-if="tender.company_logo"
                                    :src="tender.company_logo"
                                    alt=""
                                    class="h-16 w-16 object-cover"
                                />
                                <BuildingOffice2Icon
                                    v-else
                                    class="h-16 w-16 text-gray-500"
                                />
                            </div>
                            <div>
                                <h1 class="capitalize">{{ tender.title }}</h1>
                                <h2 class="font-bold capitalize text-gray-500">
                                    {{ tender.company_name }}
                                </h2>
                            </div>
                            <div
                                class="hidden justify-start space-x-4 font-light capitalize text-gray-500 lg:flex"
                            >
                                <h1
                                    class="flex items-center justify-center space-x-2"
                                >
                                    <MapPinIcon class="h-5 w-5" />
                                    <span>
                                        {{ tender.location }}
                                    </span>
                                </h1>
                                <h2
                                v-if="tender.currency"
                                    class="flex items-center justify-start space-x-2"
                                >
                                    <BanknotesIcon class="h-5 w-5" />
                                    <span>
                                        {{
                                            tender.min_price +
                                            tender.currency.symbol
                                        }}
                                        -
                                        {{
                                            tender.max_price +
                                            tender.currency.symbol
                                        }}
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div class="">
                            
                            <h1 class="capitalize">
                                Publié le:
                                {{
                                    new Date(tender.date).toLocaleDateString(
                                        locale,
                                        {
                                            day: "numeric",
                                            year: "numeric",
                                            month: "long",
                                        }
                                    )
                                }}
                            </h1>
                        </div>
                    </router-link>
                </div>
            </div>
            <Tender v-if="loading == 1" />
            <NoContent v-if="tenders.length == 0 && loading != 1" />
        </div>
    </div>
</template>

<script setup>
import {
    BuildingOffice2Icon,
    FaceFrownIcon,
    MapPinIcon,
    PlusCircleIcon,
    BanknotesIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from "@heroicons/vue/24/solid";
import useTenders from "@/services/tenderServices.js";
import useCurrencies from "@/services/currencyServices.js";
import useActivityAreas from "@/services/activityAreaServices.js";

import useCountries from "@/services/countryServices.js";
import useZones from "@/services/zoneServices.js";
import useContinents from "@/services/continentServices.js";
import useCities from "@/services/cityServices.js";
import { reactive, ref, onMounted, computed, onUnmounted } from "vue";
import Tender from "@/components/skeleton/Tender.vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { currencies, getCurrencies } = useCurrencies();
const { activityAreas, getActivityAreas } = useActivityAreas();
const { zones, getZones } = useZones();
const { continents, getContinents } = useContinents();
const { countries, getCountries } = useCountries();
const { cities, getCities } = useCities();
const { tenders, filterTenders, getTendersFront, loading, isAll, page } =
    useTenders();
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const cityfiltered = ref([]);
const tenderContainer = ref(null);
const toGet = ref(true);
onMounted(async () => {
    window.addEventListener("scroll", handleScroll);
    await getTendersFront();
    await getCurrencies();
    await getContinents();
    await getZones();;
    await getActivityAreas();
    await getCountries();
    await getCities();
});
onUnmounted(async () => {
    page.value = 1;
    window.removeEventListener("scroll", handleScroll);
});

const handleScroll = async (e) => {
    if (tenderContainer.value) {
        let element = tenderContainer.value;
        if (
            element.getBoundingClientRect().bottom < window.innerHeight &&
            toGet.value &&
            !isAll.value &&
            filterTender.country == "" &&
            filterTender.continent == "" &&
            filterTender.zone == "" &&
            filterTender.activity_area == "" &&
            filterTender.city == "" &&
            filterTender.min_price == "" &&
            filterTender.currency == ""
        ) {
            toGet.value = false;
            page.value++;
            await getTendersFront();
            toGet.value = true;
        }
    }
};
const showFilter = ref(true);
const filterTender = reactive({
    country: "",
    continent: "",
    zone: "",
    activity_area: "",
    city: "",
    min_price: "",
    currency: "",
    searchKey: "",
});

const toogleFilter = () => {
    showFilter.value = !showFilter.value;
};

const tendersFilter = async () => {
    if (
        filterTender.country != "" ||
        filterTender.continent != "" ||
        filterTender.zone != "" ||
        filterTender.activity_area != "" ||
        filterTender.city != "" ||
        filterTender.min_price != "" ||
        filterTender.currency != "" ||
        filterTender.searchKey != "" 
    ) {
        filterTender.min_price = filterTender.min_price.trim().replaceAll(' ', '')
        await filterTenders({ ...filterTender });
    } else {
        page.value = 1;
        isAll.value = false;
        await getTendersFront();
    }
};

const filteredCity = async () => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == filterTender.country;
    });
    filterTender.city = "";
    await tendersFilter();
};

const filteredCountry = async () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == filterTender.zone;
    });
    filterTender.country = "";
    filterTender.city = "";
    cityfiltered.value = [];
    await tendersFilter();
};

const filteredZone = async () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == filterTender.continent;
    });
    filterTender.zone = "";
    filterTender.country = "";
    filterTender.city = "";
    cityfiltered.value = [];
    countryFiltered.value = [];
    await tendersFilter();
};
</script>