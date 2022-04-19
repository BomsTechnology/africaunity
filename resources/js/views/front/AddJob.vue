<template>
    <Header />
    <div class=" w-full lg:px-20 py-4">
        <div class=" py-5 text-center w-full space-y-4">
            <h1 class="text-4xl  text-primary-blue font-bold capitalize">
                {{ $t('add') }} Job
            </h1>
        </div>

                
    <section class=" p-6 bg-white shadow-xl rounded-md mx-auto  w-full">
        <Error v-if="errors != ''">{{ errors }}</Error>
        <h1 class="text-xl font-semibold">{{ $t('add') }} Job</h1>
        <h2 class="text-md font-light text-gray-700">{{ $t('good-msg-post') }} ! </h2>
        <form
            @submit.prevent="storeJobOffer()"
            id="jobOfferform"
            enctype="multipart/form-data"
        >
            <div class="mt-4">
                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200"
                        >{{ $t('title') }} 
                        <span class="text-red-500">*</span>
                        </label
                    >
                    <input
                        required
                        v-model="jobOffer.title"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
                    <div>
                        <label
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('continent') }}
                            <span class="text-red-500">*</span>
                            </label
                        >
                        <select
                            required
                            v-model="jobOffer.continent_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
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

                    <div>
                        <label
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('zoned') }}
                            <span class="text-red-500">*</span>
                            </label
                        >
                        <select
                            required
                            v-model="jobOffer.zone_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
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

                    <div>
                        <label
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('country') }}
                            <span class="text-red-500">*</span>
                            </label
                        >
                        <select
                            required
                            v-model="jobOffer.country_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
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

                    <div>
                        <label
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('city') }}
                            <span class="text-red-500">*</span>
                            </label
                        >
                        <select
                            required
                            v-model="jobOffer.city_id"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
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
                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200"
                        >{{ $t('location') }}
                        <span class="text-red-500">*</span>
                        </label
                    >
                    <input
                        required
                        v-model="jobOffer.location"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            >{{ $t('company-name') }}
                            <span class="text-red-500">*</span>
                            </label
                        >
                        <input
                            required
                            v-model="jobOffer.company_name"
                            type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            >{{ $t('company-email') }}
                            <span class="text-red-500">*</span>
                            </label
                        >
                        <input
                            required
                            v-model="jobOffer.company_email"
                            type="email"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            >{{ $t('company-website') }}</label
                        >
                        <input
                            v-model="jobOffer.company_website"
                            type="url"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            >{{ $t('company-logo') }}</label
                        >
                        <input
                            ref="file"
                            @change="handelFileObject()"
                            type="file"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-3 mt-4">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            >Min {{ $t('price') }}
                            <span class="text-red-500">*</span>
                            </label
                        >
                        <input
                            required
                            v-model="jobOffer.min_price"
                            type="text"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200"
                            >Max {{ $t('price') }}
                            <span class="text-red-500">*</span>
                            </label
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
                            >{{ $t('currency') }}
                            <span class="text-red-500">*</span>
                            </label
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
                                {{ currency.symbol + ' ' + currency.name }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="col-span-2 mt-4">
                    <label
                        class="text-gray-700 dark:text-gray-200"
                        for="es"
                        >{{ $t('language') }}
                        <span class="text-red-500">*</span>
                        </label
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
                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
                    <div>
                        <label
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('size-company') }}
                            <span class="text-red-500">*</span>
                            </label
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
                            >{{ $t('level-study') }}
                            <span class="text-red-500">*</span>
                            </label
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
                <div class="col-span-2 mt-4">
                    <label
                        class="text-gray-700 dark:text-gray-200"
                        for="es"
                        >{{ $t('activity-area') }}
                        <span class="text-red-500">*</span>
                        </label
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
                            <span v-if="$i18n.locale == 'en'">{{
                                    activityArea.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    activityArea.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    activityArea.name_es
                                }}</span>
                                <span v-else>{{ activityArea.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
                    <div>
                        <label
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('work-dept') }}
                            <span class="text-red-500">*</span>
                            </label
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
                                <span v-if="$i18n.locale == 'en'">{{
                                    workDepartment.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    workDepartment.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    workDepartment.name_es
                                }}</span>
                                <span v-else>{{ workDepartment.name_pt }}</span>
                            </option>
                        </select>
                    </div>

                    <div>
                        <label
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('work-mode') }}
                            <span class="text-red-500">*</span>
                            </label
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
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('offer-type') }}
                            <span class="text-red-500">*</span>
                            </label
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
                            class="text-gray-700 dark:text-gray-200"
                            for="es"
                            >{{ $t('y-experience') }}
                            <span class="text-red-500">*</span>
                            </label
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
                </div>
                
                <div class="col-span-2 mt-4">
                    <label
                        class="text-gray-700 dark:text-gray-200"
                        for="pt"
                        >{{ $t('description') }}
                        <span class="text-red-500">*</span>
                        </label
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

            <div class="mt-6">
                <button v-if="loading == 0" type="submit" class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-primary-blue focus:outline-none">{{ $t('save') }}</button>
                <button v-if="loading == 1" type="submit" disabled class="px-6 py-4 text-md leading-5 flex justify-center items-center w-full text-white rounded bg-blue-300 focus:outline-none">
                    {{ $t('save') }}...
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                </button>
            </div>
        </form>
    </section>
    </div>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { reactive, ref, onMounted } from "vue";
import Error from "../../components/Error.vue";
import useJobOffers from "../../services/jobOfferServices.js";
import useCurrencies from "../../services/currencyServices.js";
import useActivityAreas from "../../services/activityAreaServices.js";
import useSizeCompanies from "../../services/sizeCompanyServices.js";
import useLevelStudies from "../../services/levelStudyServices.js";
import useOfferTypes from "../../services/offerTypeServices.js";
import useWorkDepartments from "../../services/workDepartmentServices.js";
import useWorkModes from "../../services/workModeServices.js";
import useYearExperiences from "../../services/yearExperienceServices.js";
import useLanguages from "../../services/languageServices.js";
import useCountries from "../../services/countryServices.js";
import useZones from "../../services/zoneServices.js";
import useContinents from "../../services/continentServices.js";
import useCities from "../../services/cityServices.js";
import router from "../../router/index.js";
export default {
    components:{
        Header,
        Footer,
        Error
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login", params: { redirect: 'not-login' }, });
        }else if((JSON.parse(localStorage.user).type == 'business1') || (JSON.parse(localStorage.user).type == 'particular')){
                router.push({ name: "home"});
        }
    },
    setup(props) {
        const user = localStorage.user ? JSON.parse(localStorage.user) : '';
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
            getCities(),
        );

        const jobOffer = reactive({
            title: "",
            description: "",
            location: "",
            company_name: "",
            company_email: user.email,
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
            if(errors.value == ''){
                router.push({
                    name: "jobs",
                });
            }
        };
        return {
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
}
</script>