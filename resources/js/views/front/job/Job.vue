<template>
    <div class="mx-auto w-full bg-white py-4 xl:w-[90%]">
        <h1
            class="py-4 text-center text-5xl font-bold capitalize text-primary-blue"
        >
            {{ $t("jobs") }}
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
                                @change="jobsFilter()"
                                v-model="filterJob.searchKey"
                                class="form-input mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                        </div>
                        <div>
                            <label class="dark:text-gray-200 text-gray-700">
                                {{ $t("activity-area") }}
                            </label>
                            <select
                                @change="jobsFilter()"
                                v-model="filterJob.activity_area"
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
                    <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("work-mode") }}
                            </label>
                            <select
                                @change="jobsFilter()"
                                v-model="filterJob.work_mode"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="workMode in workModes"
                                    :key="workMode.id"
                                    :value="workMode.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        workMode.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        workMode.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        workMode.name_es
                                    }}</span>
                                    <span v-else>{{ workMode.name_pt }}</span>
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("offer-type") }}
                            </label>
                            <select
                                @change="jobsFilter()"
                                v-model="filterJob.offer_type"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="offerType in offerTypes"
                                    :key="offerType.id"
                                    :value="offerType.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        offerType.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        offerType.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        offerType.name_es
                                    }}</span>
                                    <span v-else>{{ offerType.name_pt }}</span>
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("contract-type") }}
                            </label>
                            <select
                                @change="jobsFilter()"
                                v-model="filterJob.contract_type"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="contractType in contractTypes"
                                    :key="contractType.id"
                                    :value="contractType.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        contractType.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        contractType.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        contractType.name_es
                                    }}</span>
                                    <span v-else>{{ contractType.name_pt }}</span>
                                </option>
                            </select>
                        </div>

                       
                    </div>
                    <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("language") + ' ' + $tc("of", 2) + ' ' + $t("work") }}
                            </label>
                            <select
                                @change="jobsFilter()"
                                v-model="filterJob.language"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="language in languages"
                                    :key="language.id"
                                    :value="language.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        language.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        language.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        language.name_es
                                    }}</span>
                                    <span v-else>{{ language.name_pt }}</span>
                                </option>
                            </select>
                        </div>
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("y-experience") }}
                            </label>
                            <select
                                @change="jobsFilter()"
                                v-model="filterJob.year_experience"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="">--------------</option>
                                <option
                                    v-for="yearExperience in yearExperiences"
                                    :key="yearExperience.id"
                                    :value="yearExperience.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        yearExperience.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        yearExperience.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        yearExperience.name_es
                                    }}</span>
                                    <span v-else>{{
                                        yearExperience.name_pt
                                    }}</span>
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("level-study") }}
                            </label>
                            <select
                                @change="jobsFilter()"
                                v-model="filterJob.level_study"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                    </div>
                    <div class="grid grid-cols-1 gap-2 lg:grid-cols-4">
                        <div class="">
                            <label class="text-gray-700" for="es">{{
                                $t("continent")
                            }}</label>
                            <select
                                @change="filteredZone()"
                                v-model="filterJob.continent"
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
                                v-model="filterJob.zone"
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
                                v-model="filterJob.country"
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
                                @change="jobsFilter()"
                                v-model="filterJob.city"
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
                                v-model="filterJob.min_price"
                                @change="jobsFilter()"
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
                                @change="jobsFilter()"
                                v-model="filterJob.currency"
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
                                    @change="jobsFilter()"
                                    v-model="filterJob.recruitment_agency"
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
                        name: 'add.job',
                    }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">{{ $t("add") }} Job</p>
                </router-link>
            </div>
            <Job v-if="loading == 3" />
            <div
                v-else-if="jobOffers.length != 0"
                ref="jobContainer"
                class="text-lg"
            >
                <div v-for="jobOffer in jobOffers" :key="jobOffer.id">
                    <router-link
                        :to="{
                            name: 'show.job',
                            params: { id: jobOffer.id, slug: jobOffer.slug },
                        }"
                        class="flex items-center justify-between border-b border-gray-200 px-2 py-4 hover:bg-gray-100"
                    >
                        <div class="flex items-center space-x-4">
                            <div class="hidden lg:block">
                                <img
                                    v-if="jobOffer.company_logo"
                                    :src="jobOffer.company_logo"
                                    alt=""
                                    class="h-16 w-16 object-cover"
                                />
                                <BuildingOffice2Icon
                                    v-else
                                    class="h-16 w-16 text-gray-500"
                                />
                            </div>
                            <div>
                                <h1 class="capitalize">{{ jobOffer.title }}</h1>
                                <h2 class="font-bold capitalize text-gray-500">
                                    {{ jobOffer.company_name }}
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
                                        {{ jobOffer.location }}
                                    </span>
                                </h1>
                                <h2
                                    class="flex items-center justify-start space-x-2"
                                >
                                    <BanknotesIcon class="h-5 w-5" />
                                    <span>
                                        {{
                                            jobOffer.min_price +
                                            jobOffer.currency.symbol
                                        }}
                                        -
                                        {{
                                            jobOffer.max_price +
                                            jobOffer.currency.symbol
                                        }}
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div class="">
                            <h2 class="font-bold capitalize text-primary-blue">
                                <span v-if="$i18n.locale == 'en'">{{
                                    jobOffer.offer_type.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    jobOffer.offer_type.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    jobOffer.offer_type.name_es
                                }}</span>
                                <span v-else>{{
                                    jobOffer.offer_type.name_pt
                                }}</span>
                            </h2>
                            <h1 class="capitalize">
                                Publié le:
                                {{
                                    new Date(jobOffer.date).toLocaleDateString(
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
            <Job v-if="loading == 1" />
            <NoContent v-if="jobOffers.length == 0 && loading != 1" />
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
import useJobOffers from "@/services/jobOfferServices.js";
import useCurrencies from "@/services/currencyServices.js";
import useActivityAreas from "@/services/activityAreaServices.js";
// import useSizeCompanies from "@/services/sizeCompanyServices.js";
import useLevelStudies from "@/services/levelStudyServices.js";
import useOfferTypes from "@/services/offerTypeServices.js";
// import useWorkDepartments from "@/services/workDepartmentServices.js";
import useWorkModes from "@/services/workModeServices.js";
import useYearExperiences from "@/services/yearExperienceServices.js";
import useContractTypes from "@/services/contractTypeServices.js";
import useLanguages from "@/services/languageServices.js";
import useCountries from "@/services/countryServices.js";
import useZones from "@/services/zoneServices.js";
import useContinents from "@/services/continentServices.js";
import useCities from "@/services/cityServices.js";
import { reactive, ref, onMounted, computed, onUnmounted } from "vue";
import Job from "@/components/skeleton/Job.vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { currencies, getCurrencies } = useCurrencies();
const { languages, getLanguages } = useLanguages();
const { activityAreas, getActivityAreas } = useActivityAreas();
// const { sizeCompanies, getSizeCompanies } = useSizeCompanies();
const { levelStudies, getLevelStudies } = useLevelStudies();
const { offerTypes, getOfferTypes } = useOfferTypes();
const { contractTypes, getContractTypes } = useContractTypes();
// const { workDepartments, getWorkDepartments } = useWorkDepartments();
const { workModes, getWorkModes } = useWorkModes();
const { yearExperiences, getYearExperiences } = useYearExperiences();
const { countries, getCountries } = useCountries();
const { zones, getZones } = useZones();
const { continents, getContinents } = useContinents();
const { cities, getCities } = useCities();
const { jobOffers, filterJobs, getJobOffersFront, loading, isAll, page } =
    useJobOffers();
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const cityfiltered = ref([]);
const jobContainer = ref(null);
const toGet = ref(true);
onMounted(async () => {
    window.addEventListener("scroll", handleScroll);
    await getJobOffersFront();
    await getCurrencies();
    await getContinents();
    await getZones();
    await getYearExperiences();
    await getWorkModes();
    await getContractTypes();
    // await getWorkDepartments();
    await getLevelStudies();
    // await getSizeCompanies();
    await getOfferTypes();
    await getActivityAreas();
    await getLanguages();
    await getCountries();
    await getCities();
});
onUnmounted(async () => {
    page.value = 1;
    window.removeEventListener("scroll", handleScroll);
});

const handleScroll = async (e) => {
    if (jobContainer.value) {
        let element = jobContainer.value;
        if (
            element.getBoundingClientRect().bottom < window.innerHeight &&
            toGet.value &&
            !isAll.value &&
            filterJob.country == "" &&
            filterJob.continent == "" &&
            filterJob.zone == "" &&
            filterJob.activity_area == "" &&
            filterJob.city == "" &&
            filterJob.work_mode == "" &&
            filterJob.offer_type == "" &&
            filterJob.language == "" &&
            filterJob.year_experience == "" &&
            filterJob.level_study == "" &&
            filterJob.min_price == "" &&
            filterJob.contract_type == "" &&
            filterJob.currency == ""
        ) {
            toGet.value = false;
            page.value++;
            await getJobOffersFront();
            toGet.value = true;
        }
    }
};
const showFilter = ref(true);
const filterJob = reactive({
    country: "",
    continent: "",
    zone: "",
    recruitment_agency: "",
    activity_area: "",
    city: "",
    work_mode: "",
    offer_type: "",
    contract_type: "",
    language: "",
    year_experience: "",
    level_study: "",
    min_price: "",
    currency: "",
    searchKey: "",
});

const toogleFilter = () => {
    showFilter.value = !showFilter.value;
};

const jobsFilter = async () => {
    if (
        filterJob.country != "" ||
        filterJob.contract_type != "" ||
        filterJob.continent != "" ||
        filterJob.zone != "" ||
        filterJob.activity_area != "" ||
        filterJob.city != "" ||
        filterJob.work_mode != "" ||
        filterJob.offer_type != "" ||
        filterJob.language != "" ||
        filterJob.year_experience != "" ||
        filterJob.level_study != "" ||
        filterJob.min_price != "" ||
        filterJob.currency != "" ||
        filterJob.searchKey != "" ||
        filterJob.recruitment_agency ||
        !filterJob.recruitment_agency
    ) {
        filterJob.min_price = filterJob.min_price.trim().replaceAll(' ', '')
        await filterJobs({ ...filterJob });
    } else {
        page.value = 1;
        isAll.value = false;
        await getJobOffersFront();
    }
};

const filteredCity = async () => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == filterJob.country;
    });
    filterJob.city = "";
    await jobsFilter();
};

const filteredCountry = async () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == filterJob.zone;
    });
    filterJob.country = "";
    filterJob.city = "";
    cityfiltered.value = [];
    await jobsFilter();
};

const filteredZone = async () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == filterJob.continent;
    });
    filterJob.zone = "";
    filterJob.country = "";
    filterJob.city = "";
    cityfiltered.value = [];
    countryFiltered.value = [];
    await jobsFilter();
};
</script>
