<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div class="w-full z-0 p-4">
                <div
                    class="px-8 py-5 bg-white shadow-lg flex w-full justify-between"
                >
                    <h1 class="text-4xl text-primary-blue font-bold capitalize">
                        Add JobOffer
                    </h1>
                </div>

                <section class="p-6 mx-auto bg-white shadow-md w-full">
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <h2 class="text-md font-light text-gray-700">
                        Add a new JobOffer
                    </h2>
                    <form
                        @submit.prevent="storeJobOffer()"
                        id="jobOfferform"
                        enctype="multipart/form-data"
                    >
                        <div class=" ">
                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Title</label
                                >
                                <input
                                    required
                                    v-model="jobOffer.title"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div
                                class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4"
                            >
                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >Continent</label
                                    >
                                    <select
                                        required
                                        @change="filteredZone"
                                        v-model="jobOffer.continent_id"
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
                                        v-model="jobOffer.zone_id"
                                        @change="filteredCountry"
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
                                        v-model="jobOffer.country_id"
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
                                        for="es"
                                        >City</label
                                    >
                                    <select
                                        required
                                        v-model="jobOffer.city_id"
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
                            </div>
                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Location</label
                                >
                                <input
                                    required
                                    v-model="jobOffer.location"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div
                                class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"
                            >
                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        >Company Name</label
                                    >
                                    <input
                                        required
                                        v-model="jobOffer.company_name"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        >Company Email</label
                                    >
                                    <input
                                        required
                                        v-model="jobOffer.company_email"
                                        type="email"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        >Company Website</label
                                    >
                                    <input
                                        v-model="jobOffer.company_website"
                                        type="url"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        >Company logo</label
                                    >
                                    <input
                                        ref="file"
                                        @change="handelFileObject()"
                                        type="file"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>
                            <div
                                class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-3 mt-4"
                            >
                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        >Min Price</label
                                    >
                                    <input
                                        required
                                        v-model="jobOffer.min_price"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        >Max Price</label
                                    >
                                    <input
                                        required
                                        v-model="jobOffer.max_price"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >Currency</label
                                    >
                                    <select
                                        required
                                        v-model="jobOffer.currency_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="currency in currencies"
                                            :key="currency.id"
                                            :value="currency.id"
                                        >
                                            {{
                                                currency.symbol +
                                                " " +
                                                currency.name
                                            }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Languages</label
                                >
                                <select
                                    required
                                    multiple
                                    v-model="jobOffer.languages"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                >
                                    <option
                                        v-for="language in languages"
                                        :key="language.id"
                                        :value="language.id"
                                    >
                                        {{ language.name_en }}
                                    </option>
                                </select>
                            </div>
                            <div
                                class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4"
                            >
                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >Size Company</label
                                    >
                                    <select
                                        required
                                        v-model="jobOffer.size_company_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="sizeCompany in sizeCompanies"
                                            :key="sizeCompany.id"
                                            :value="sizeCompany.id"
                                        >
                                            {{ sizeCompany.name_en }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >Level Study</label
                                    >
                                    <select
                                        required
                                        v-model="jobOffer.level_study_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                            </div>
                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Activity Areas</label
                                >
                                <select
                                    required
                                    multiple
                                    v-model="jobOffer.activityAreas"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                >
                                    <option
                                        v-for="activityArea in activityAreas"
                                        :key="activityArea.id"
                                        :value="activityArea.id"
                                    >
                                        {{ activityArea.name_en }}
                                    </option>
                                </select>
                            </div>
                            <div
                                class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4"
                            >
                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >Work Department</label
                                    >
                                    <select
                                        required
                                        v-model="jobOffer.work_department_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="workDepartment in workDepartments"
                                            :key="workDepartment.id"
                                            :value="workDepartment.id"
                                        >
                                            {{ workDepartment.name_en }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >Work Mode</label
                                    >
                                    <select
                                        required
                                        v-model="jobOffer.work_mode_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="workMode in workModes"
                                            :key="workMode.id"
                                            :value="workMode.id"
                                        >
                                            {{ workMode.name_en }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >Offer Type</label
                                    >
                                    <select
                                        required
                                        v-model="jobOffer.offer_type_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="offerType in offerTypes"
                                            :key="offerType.id"
                                            :value="offerType.id"
                                        >
                                            {{ offerType.name_en }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >Year Experience</label
                                    >
                                    <select
                                        required
                                        v-model="jobOffer.year_experience_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="yearExperience in yearExperiences"
                                            :key="yearExperience.id"
                                            :value="yearExperience.id"
                                        >
                                            {{ yearExperience.name_en }}
                                        </option>
                                    </select>
                                </div>
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
                                    v-model="jobOffer.description"
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
import useJobOffers from "../../../services/jobOfferServices.js";
import useCurrencies from "../../../services/currencyServices.js";
import useActivityAreas from "../../../services/activityAreaServices.js";
import useSizeCompanies from "../../../services/sizeCompanyServices.js";
import useLevelStudies from "../../../services/levelStudyServices.js";
import useOfferTypes from "../../../services/offerTypeServices.js";
import useWorkDepartments from "../../../services/workDepartmentServices.js";
import useWorkModes from "../../../services/workModeServices.js";
import useYearExperiences from "../../../services/yearExperienceServices.js";
import useLanguages from "../../../services/languageServices.js";
import useCountries from "../../../services/countryServices.js";
import useZones from "../../../services/zoneServices.js";
import useContinents from "../../../services/continentServices.js";
import useCities from "../../../services/cityServices.js";
import router from "../../../router/index.js";
export default {
    components: {
        Sidebar,
        Error,
    },
    setup(props) {
        const user = JSON.parse(localStorage.user);
        const { currencies, getCurrencies } = useCurrencies();
        const { languages, getLanguages } = useLanguages();
        const { activityAreas, getActivityAreas } = useActivityAreas();
        const { sizeCompanies, getSizeCompanies } = useSizeCompanies();
        const { levelStudies, getLevelStudies } = useLevelStudies();
        const { offerTypes, getOfferTypes } = useOfferTypes();
        const { workDepartments, getWorkDepartments } = useWorkDepartments();
        const { workModes, getWorkModes } = useWorkModes();
        const { yearExperiences, getYearExperiences } = useYearExperiences();
        const { countries, getCountries } = useCountries();
        const { zones, getZones } = useZones();
        const { continents, getContinents } = useContinents();
        const { cities, getCities } = useCities();
        const zoneFiltered = ref([]);
        const countryFiltered = ref([]);
        const cityfiltered = ref([]);
        onMounted(
            getCurrencies(),
            getContinents(),
            getZones(),
            getYearExperiences(),
            getWorkModes(),
            getWorkDepartments(),
            getLevelStudies(),
            getSizeCompanies(),
            getOfferTypes(),
            getActivityAreas(),
            getLanguages(),
            getCountries(),
            getCities()
        );
        const jobOffer = reactive({
            title: "",
            description: "",
            location: "",
            company_name: "",
            company_email: "",
            company_website: "",
            company_logo: "",
            min_price: "",
            max_price: "",
            user_id: user.id,
            currency_id: "",
            year_experience_id: "",
            work_department_id: "",
            work_mode_id: "",
            size_company_id: "",
            offer_type_id: "",
            level_study_id: "",
            city_id: "",
            zone_id: "",
            continent_id: "",
            country_id: "",
            languages: [],
            activityAreas: [],
        });
        const { createJobOffer, errors, loading } = useJobOffers();
        const filteredCity = () => {
            cityfiltered.value = cities.value.filter((city) => {
                return city.country_id == jobOffer.country_id;
            });
            jobOffer.city_id = "";
        };

        const filteredCountry = () => {
            countryFiltered.value = countries.value.filter((country) => {
                return country.zone_id == jobOffer.zone_id;
            });
            jobOffer.country_id = "";
            jobOffer.city_id = "";
            cityfiltered.value = [];
        };

        const filteredZone = () => {
            zoneFiltered.value = zones.value.filter((zone) => {
                return zone.continent_id == jobOffer.continent_id;
            });
            jobOffer.zone_id = "";
            jobOffer.country_id = "";
            jobOffer.city_id = "";
            cityfiltered.value = [];
            countryFiltered.value = [];
        };
        const storeJobOffer = async () => {
            let formData = new FormData();
            formData.append("title", jobOffer.title);
            formData.append("description", jobOffer.description);
            formData.append("location", jobOffer.location);
            formData.append("company_name", jobOffer.company_name);
            formData.append("company_email", jobOffer.company_email);
            formData.append("company_website", jobOffer.company_website);
            formData.append("company_logo", jobOffer.company_logo);
            formData.append("min_price", jobOffer.min_price);
            formData.append("max_price", jobOffer.max_price);
            formData.append("user_id", jobOffer.user_id);
            formData.append("currency_id", jobOffer.currency_id);
            formData.append("year_experience_id", jobOffer.year_experience_id);
            formData.append("work_department_id", jobOffer.work_department_id);
            formData.append("work_mode_id", jobOffer.work_mode_id);
            formData.append("size_company_id", jobOffer.size_company_id);
            formData.append("offer_type_id", jobOffer.offer_type_id);
            formData.append("level_study_id", jobOffer.level_study_id);
            formData.append("city_id", jobOffer.city_id);
            formData.append("zone_id", jobOffer.zone_id);
            formData.append("continent_id", jobOffer.continent_id);
            formData.append("country_id", jobOffer.country_id);
            formData.append("languages", jobOffer.languages);
            formData.append("activityAreas", jobOffer.activityAreas);

            await createJobOffer(formData);
            if (errors.value == "") {
                router.push({
                    name: "admin.jobOffer.index",
                });
            }
        };
        return {
            cityfiltered,
            zoneFiltered,
            countryFiltered,
            filteredZone,
            filteredCountry,
            filteredCity,
            jobOffer,
            loading,
            errors,
            storeJobOffer,
            currencies,
            languages,
            activityAreas,
            continents,
            sizeCompanies,
            levelStudies,
            offerTypes,
            workDepartments,
            workModes,
            yearExperiences,
            countries,
            zones,
            cities,
        };
    },
    methods: {
        handelFileObject() {
            this.jobOffer.company_logo = this.$refs.file.files[0];
        },
    },
};
</script>
