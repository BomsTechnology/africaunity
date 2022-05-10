<template>
    <h1
        class="text-5xl text-primary-blue text-center py-4 capitalize font-bold"
    >
        {{ $t("jobs") }}
    </h1>
    <div class="py-8 lg:px-16 px-6">
        <div class="flex justify-end px-6 py-4">
            <button
                @click="toogleFilter()"
                class="flex justify-start text-sm items-center text-primary-blue hover:underline"
            >
                <ChevronUpIcon v-if="showFilter" class="w-5 h-5" />
                <span v-if="showFilter">{{ $t("hide-filter") }}</span>
                <ChevronDownIcon v-if="!showFilter" class="w-5 h-5" />
                <span v-if="!showFilter">{{ $t("show-filter") }}</span>
            </button>
        </div>
        <div
            class="lg:text-sm text-xs bg-gray-100 px-10 pb-8 pt-4 space-y-3 shadow"
            v-if="showFilter"
        >
            <div class="gap-2 grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <label class="text-gray-700 dark:text-gray-200">{{
                        $t("key-words")
                    }}</label>
                    <input
                        type="text"
                        v-model="searchKey"
                        class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md mt-1 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                    />
                </div>
                <div>
                    <label class="text-gray-700 dark:text-gray-200">
                        {{ $t("activity-area") }}
                    </label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.activity_area"
                        class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
            <div class="gap-2 grid lg:grid-cols-3 grid-cols-1">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es"
                        >{{ $t("work-mode") }}
                    </label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.work_mode"
                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                    <label class="text-gray-700 dark:text-gray-200" for="es"
                        >{{ $t("offer-type") }}
                    </label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.offer_type"
                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                    <label class="text-gray-700 dark:text-gray-200" for="es"
                        >{{ $t("language") }}
                    </label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.language"
                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
            </div>
            <div class="gap-2 grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es"
                        >{{ $t("y-experience") }}
                    </label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.year_experience"
                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                            <span v-else>{{ yearExperience.name_pt }}</span>
                        </option>
                    </select>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es"
                        >{{ $t("level-study") }}
                    </label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.level_study"
                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
            <div class="grid lg:grid-cols-4 grid-cols-1 gap-2">
                <div class="">
                    <label class="text-gray-700" for="es">{{
                        $t("continent")
                    }}</label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.continent"
                        class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                        @change="jobsFilter()"
                        v-model="filterJob.zone"
                        class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="zone in zones"
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
                    </select>
                </div>
                <div class="">
                    <label class="text-gray-700" for="es">{{
                        $t("country")
                    }}</label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.country"
                        class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="country in countries"
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
                    </select>
                </div>
                <div class="">
                    <label class="text-gray-700" for="es">{{
                        $t("city")
                    }}</label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.city"
                        class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="city in cities"
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
                    </select>
                </div>
            </div>
            <div class="gap-2 grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es"
                        >{{ $t("price") }}
                    </label>
                    <input
                        v-model="filterJob.min_price"
                        type="text"
                        class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es"
                        >{{ $t("currency") }}
                    </label>
                    <select
                        @change="jobsFilter()"
                        v-model="filterJob.currency"
                        class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
            </div>
        </div>
        <div class="p-2 bg-primary-blue shadow" v-if="showFilter"></div>
        <div
            class="flex justify-end px-6 py-4"
            v-if="user.type != 'particular' && user.type != 'business1'"
        >
            <router-link
                :to="{
                    name: 'add.job',
                }"
                class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
            >
                <PlusCircleIcon class="w-6 h-6" />
                <p class="text-base leading-4">{{ $t("add") }} Job</p>
            </router-link>
        </div>
        <div v-if="filteredJobOffers.length != 0" class="text-lg">
            <div v-for="jobOffer in filteredJobOffers" :key="jobOffer.id">
                <router-link
                    :to="{
                        name: 'show.job',
                        params: { id: jobOffer.id },
                    }"
                    class="flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"
                >
                    <div class="flex items-center space-x-4">
                        <div class="hidden lg:block">
                            <img
                                v-if="jobOffer.company_logo"
                                :src="jobOffer.company_logo"
                                alt=""
                                class="w-16 h-16 object-cover"
                            />
                            <OfficeBuildingIcon
                                v-else
                                class="w-16 h-16 text-gray-500"
                            />
                        </div>
                        <div>
                            <h1 class="capitalize">{{ jobOffer.title }}</h1>
                            <h2 class="font-bold capitalize text-gray-500">
                                {{ jobOffer.company_name }}
                            </h2>
                        </div>
                        <div
                            class="hidden lg:flex space-x-4 font-light justify-start capitalize text-gray-500"
                        >
                            <h1
                                class="flex items-center justify-center space-x-2"
                            >
                                <LocationMarkerIcon class="w-5 h-5" />
                                <span>
                                    {{ jobOffer.location }}
                                </span>
                            </h1>
                            <h2
                                class="flex items-center justify-start space-x-2"
                            >
                                <CashIcon class="w-5 h-5" />
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
                            Publié le: {{ jobOffer.date }}
                        </h1>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else-if="loading == 1" class="p-28">
            <svg
                class="animate-spin h-16 w-16 mx-auto"
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
        </div>
        <div
            v-else
            class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
        >
            <EmojiSadIcon class="h-16 w-16" />
            <span class="text-2xl mt-2">{{ $t("no-content") }}</span>
        </div>
    </div>
</template>

<script>
import {
    OfficeBuildingIcon,
    EmojiSadIcon,
    LocationMarkerIcon,
    PlusCircleIcon,
    CashIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from "@heroicons/vue/solid";
import useJobOffers from "../../services/jobOfferServices.js";
import useCurrencies from "../../services/currencyServices.js";
import useActivityAreas from "../../services/activityAreaServices.js";
// import useSizeCompanies from "../../services/sizeCompanyServices.js";
import useLevelStudies from "../../services/levelStudyServices.js";
import useOfferTypes from "../../services/offerTypeServices.js";
// import useWorkDepartments from "../../services/workDepartmentServices.js";
import useWorkModes from "../../services/workModeServices.js";
import useYearExperiences from "../../services/yearExperienceServices.js";
import useLanguages from "../../services/languageServices.js";
import useCountries from "../../services/countryServices.js";
import useZones from "../../services/zoneServices.js";
import useContinents from "../../services/continentServices.js";
import useCities from "../../services/cityServices.js";
import { reactive, ref, onMounted } from "vue";
// import router from "../../router";
export default {
    components: {
        OfficeBuildingIcon,
        LocationMarkerIcon,
        PlusCircleIcon,
        EmojiSadIcon,
        CashIcon,
        ChevronUpIcon,
        ChevronDownIcon,
    },

    setup(props) {
        const { currencies, getCurrencies } = useCurrencies();
        const { languages, getLanguages } = useLanguages();
        const { activityAreas, getActivityAreas } = useActivityAreas();
        // const { sizeCompanies, getSizeCompanies } = useSizeCompanies();
        const { levelStudies, getLevelStudies } = useLevelStudies();
        const { offerTypes, getOfferTypes } = useOfferTypes();
        // const { workDepartments, getWorkDepartments } = useWorkDepartments();
        const { workModes, getWorkModes } = useWorkModes();
        const { yearExperiences, getYearExperiences } = useYearExperiences();
        const { countries, getCountries } = useCountries();
        const { zones, getZones } = useZones();
        const { continents, getContinents } = useContinents();
        const { cities, getCities } = useCities();
        const { jobOffers, filterJobs, getJobOffersFront, loading, errors } =
            useJobOffers();
        const user = localStorage.user ? JSON.parse(localStorage.user) : "";
        onMounted(
            getJobOffersFront(),
            getCurrencies(),
            getContinents(),
            getZones(),
            getYearExperiences(),
            getWorkModes(),
            // getWorkDepartments(),
            getLevelStudies(),
            // getSizeCompanies(),
            getOfferTypes(),
            getActivityAreas(),
            getLanguages(),
            getCountries(),
            getCities()
        );
        const searchKey = ref("");
        const showFilter = ref(true);
        const filterJob = reactive({
            country: "",
            continent: "",
            zone: "",
            activity_area: "",
            city: "",
            work_mode: "",
            offer_type: "",
            language: "",
            year_experience: "",
            level_study: "",
            min_price: "",
            currency: "",
        });

        const toogleFilter = () => {
            showFilter.value = !showFilter.value;
        };
        const jobsFilter = async () => {
            await filterJobs({ ...filterJob });
        };
        return {
            jobsFilter,
            toogleFilter,
            showFilter,
            searchKey,
            filterJob,
            currencies,
            languages,
            activityAreas,
            continents,
            // sizeCompanies,
            levelStudies,
            offerTypes,
            // workDepartments,
            workModes,
            yearExperiences,
            countries,
            zones,
            cities,
            user,
            jobOffers,
            loading,
        };
    },

    computed: {
        filteredJobOffers() {
            return this.jobOffers.filter((jobOffer) => {
                let data = "";
                if (this.filterJob.min_price != "")
                    data =
                        jobOffer.title
                            .toLowerCase()
                            .includes(this.searchKey.toLowerCase()) &&
                        parseFloat(jobOffer.max_price) >=
                            parseFloat(this.filterJob.min_price);
                else
                    data = jobOffer.title
                        .toLowerCase()
                        .includes(this.searchKey.toLowerCase());
                return data;
            });
        },
    },
};
</script>
