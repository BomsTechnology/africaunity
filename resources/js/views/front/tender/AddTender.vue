<template>
    <div class="mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]">
        <div class="w-full space-y-4 py-5 text-center">
            <h1 class="text-4xl font-bold text-primary-blue">
                {{ $t("add") }} Appel d'offre
            </h1>
        </div>

        <section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">
            <Error v-if="errors != ''">{{ errors }}</Error>
            <h1 class="text-xl font-semibold">{{ $t("add") }} Appel d'offre</h1>
            <h2 class="text-md font-light text-gray-700">
                {{ $t("good-msg-post") }} !
            </h2>
            <form
                @submit.prevent="storeTender()"
                id="tenderform"
                enctype="multipart/form-data"
            >
                <div class="mt-4">
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div class="col-span-1">
                            <label class=" text-gray-700"
                                >{{ $t("title") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.title"
                                maxlength="50"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                            <span class="text-xs font-light text-gray-400"
                                >{{ tender.title ? tender.title.length : 0 }} of
                                50 Characters</span
                            >
                        </div>

                        <div class="col-span-1">
                            <label class=" text-gray-700"
                                >Reference
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.reference"
                                maxlength="10"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                            <span class="text-xs font-light text-gray-400"
                                >{{ tender.reference ? tender.reference.length : 0 }} of
                                10 Characters</span
                            >
                        </div>
                    </div>
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("continent") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-model="tender.continent_id"
                                @change="filteredZone()"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("zoned") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-model="tender.zone_id"
                                @change="filteredCountry()"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
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

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("country") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                @change="filteredCity()"
                                v-model="tender.country_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
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

                        <div>
                            <label
                                class="d text-gray-700"
                                for="es"
                                >{{ $t("city") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-model="tender.city_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
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
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div class="">
                            <label class=" text-gray-700"
                                >{{ $t("location") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.location"
                                type="text"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div class="">
                            <label class=" text-gray-700"
                                >{{ $t("start-date") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.end_date"
                                type="date"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div>
                            <label class=" text-gray-700"
                                >{{ $t("company-name") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.company_name"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class=" text-gray-700"
                                >{{ $t("company-email") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.company_email"
                                type="email"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class=" text-gray-700">{{
                                $t("company-website")
                            }}</label>
                            <input
                                v-model="tender.company_website"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="text-gray-700">{{
                                $t("company-logo")
                            }}</label>
                            <div class="mt-2 flex items-center space-x-4">
                                <img
                                    v-if="tender.company_logo"
                                    :src="
                                        typeof tender.company_logo == 'string'
                                            ? tender.company_logo
                                            : previewImage(
                                                  tender.company_logo
                                              )
                                    "
                                    @load="
                                        typeof tender.company_logo == 'string'
                                            ? ''
                                            : loadImage(tender.company_logo)
                                    "
                                    class="h-16 w-16 rounded-full"
                                    :alt="tender.title"
                                />
                                <input
                                    ref="file"
                                    @change="handelFileObject()"
                                    type="file"
                                    class=" block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <span class="text-xs font-light text-gray-500"
                                    >(Format: png, jpg, jpeg, webp | max: 500*500)</span
                                >
                        </div>
                    </div>
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        <div>
                            <label class=" text-gray-700"
                                >{{ $tc("salary", 2) }} Min
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.min_price"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class=" text-gray-700"
                                >{{ $tc("salary", 2) }} Max
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.max_price"
                                type="text"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("currency") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-model="tender.currency_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
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

                    <div class="col-span-2 mt-4">
                        <label class=" text-gray-700" for="es"
                            >{{ $t("language") + ' ' + $tc("of", 2) + ' ' + $t("work") }}
                            <span
                                class="hidden text-xs font-light lg:inline-block"
                                >({{ $t("maintain-crtl") }})</span
                            >
                            <span class="text-red-500">*</span>
                        </label>
                        <select
                            required
                            multiple
                            v-model="tender.languages"
                            class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        
                    </div>
                    <div class="col-span-2 mt-4">
                        <label class=" text-gray-700" for="es"
                            >{{ $t("activity-area") }}
                            <span
                                class="hidden text-xs font-light lg:inline-block"
                                >({{ $t("maintain-crtl") }})</span
                            >
                            <span class="text-red-500">*</span>
                        </label>
                        <select
                            required
                            multiple
                            v-model="tender.activityAreas"
                            class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("work-dept") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-model="tender.work_department_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                                    <span v-else>{{
                                        workDepartment.name_pt
                                    }}</span>
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("work-mode") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-model="tender.work_mode_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("size-company") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-model="tender.size_company_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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

                       
                    </div>

                    <div class="col-span-2 mt-4">
                        <label class=" text-gray-700 mb-2" for="pt"
                            >{{ $t("description") }}
                            <span class="text-red-500">*</span>
                        </label>
                        <RichText :key="keyComponent" v-model="tender.description"/>
                    </div>
                </div>

                <div class="mt-6">
                    <button
                        v-if="loading == 0"
                        type="submit"
                        class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"
                    >
                        {{ $t("save") }}
                    </button>
                    <button
                        v-if="loading == 1"
                        type="submit"
                        disabled
                        class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"
                    >
                        <Spin :size="'small'" />
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Error from "@/components/Error.vue";
import useTenders from "@/services/tenderServices.js";
import useCurrencies from "@/services/currencyServices.js";
import useActivityAreas from "@/services/activityAreaServices.js";
import useSizeCompanies from "@/services/sizeCompanyServices.js";
import useLevelStudies from "@/services/levelStudyServices.js";
import useOfferTypes from "@/services/offerTypeServices.js";
import useContractTypes from "@/services/contractTypeServices.js";
import useWorkDepartments from "@/services/workDepartmentServices.js";
import useWorkModes from "@/services/workModeServices.js";
import useYearExperiences from "@/services/yearExperienceServices.js";
import useLanguages from "@/services/languageServices.js";
import useCountries from "@/services/countryServices.js";
import useZones from "@/services/zoneServices.js";
import useContinents from "@/services/continentServices.js";
import useCities from "@/services/cityServices.js";
import { useRouter, useRoute } from "vue-router";
import RichText from "@/components/RichText.vue";

const router = useRouter();
const route = useRoute();

const props = defineProps({
    duplicate: String,
});

const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const { currencies, getCurrencies } = useCurrencies();
const { languages, getLanguages } = useLanguages();
const { activityAreas, getActivityAreas } = useActivityAreas();
const { sizeCompanies, getSizeCompanies } = useSizeCompanies();
const { workDepartments, getWorkDepartments } = useWorkDepartments();
const { workModes, getWorkModes } = useWorkModes();
const { countries, getCountries } = useCountries();
const { zones, getZones } = useZones();
const { continents, getContinents } = useContinents();
const { cities, getCities } = useCities();
const { createTender, errors, loading } = useTenders();
const keyComponent = ref(0);


const tender = reactive({
    title: "",
    description: " ",
    location: "",
    company_name: "",
    company_email: user.email,
    company_website: "",
    company_logo: "",
    min_price: "",
    max_price: "",
    user_id: user.id,
    currency_id: "",
    end_date: "",
    work_department_id: "",
    work_mode_id: "",
    size_company_id: "",
   
    reference: "",
    city_id: "",
    zone_id: "",
    continent_id: "",
    country_id: "",
    languages: [],
    activityAreas: [],
});

const file = ref(null);
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const cityfiltered = ref([]);

onMounted(async () => {
    if (props.duplicate) {
        try {
            tender.title = route.query.title;
            tender.description = route.query.description;
            tender.end_date = route.query.end_date;
            tender.location = route.query.location;
            tender.reference = route.query.reference;
            tender.company_name = route.query.company_name;
            tender.company_email = route.query.company_email;
            tender.company_logo = route.query.company_logo;
            tender.min_price = route.query.min_price.trim().replaceAll(' ', '');
            tender.max_price = route.query.max_price.trim().replaceAll(' ', '');
            tender.currency_id = route.query.currency_id;
            tender.work_department_id = route.query.work_department_id;
            tender.work_mode_id = route.query.work_mode_id;
            tender.size_company_id = route.query.size_company_id;
            tender.city_id = route.query.city_id;
            tender.zone_id = route.query.zone_id;
            tender.continent_id = route.query.continent_id;
            tender.country_id = route.query.country_id;
            keyComponent.value++;

            let activity_areas  = JSON.parse(route.query.activity_areas);
            let languages  = JSON.parse(route.query.languages);

           for (const item of activity_areas) {
                tender.activityAreas.push(item.id);
            }

            for (const item of languages) {
                tender.languages.push(item.id);
            }

        } catch (e) {
            router.push({ name: "home" });
        }

    }
    
    
    await getContinents();

    await getZones();
    filteredZone(false);

    await getCountries();
    filteredCountry(false);

    await getCities();
    filteredCity(false);

    await getCurrencies();
    await getWorkModes();
    await getWorkDepartments();
    await getSizeCompanies();
    await getActivityAreas();
    await getLanguages();

});

const filteredCity = (reset = true) => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == tender.country_id;
    });
    if(reset){tender.city_id = "";}
};

const filteredCountry = (reset = true) => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == tender.zone_id;
    });
   if(reset){ tender.country_id = "";
    tender.city_id = "";
    cityfiltered.value = [];}
};

const filteredZone = (reset = true) => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == tender.continent_id;
    });
    if(reset){tender.zone_id = "";
    tender.country_id = "";
    tender.city_id = "";
    cityfiltered.value = [];
    countryFiltered.value = [];}
};

const storeTender = async () => {

    let formData = new FormData();
    formData.append("title", tender.title);
    formData.append("description", tender.description);
    formData.append("location", tender.location);
    formData.append("reference", tender.reference);
    formData.append("company_name", tender.company_name);
    formData.append("company_email", tender.company_email);
    formData.append("company_website", tender.company_website);
    formData.append("end_date", tender.end_date);
    formData.append("company_logo", tender.company_logo);
    formData.append("min_price", tender.min_price.trim().replaceAll(' ', ''));
    formData.append("max_price", tender.max_price.trim().replaceAll(' ', ''));
    formData.append("user_id", tender.user_id);
    formData.append("currency_id", tender.currency_id);
    formData.append("work_department_id", tender.work_department_id);
    formData.append("work_mode_id", tender.work_mode_id);
    formData.append("size_company_id", tender.size_company_id);
    formData.append("city_id", tender.city_id);
    formData.append("zone_id", tender.zone_id);
    formData.append("continent_id", tender.continent_id);
    formData.append("country_id", tender.country_id);
    formData.append("languages", tender.languages);
    formData.append("activityAreas", tender.activityAreas);

    await createTender(formData);
    if (errors.value == "") {
        router.push({
            name: "tenders",
        });
    }
};

const handelFileObject = async () => {
    tender.company_logo = file.value.files[0];
};

function previewImage(file) {
    return URL.createObjectURL(file);
}
function loadImage(file) {
    return URL.revokeObjectURL(file);
}
</script>