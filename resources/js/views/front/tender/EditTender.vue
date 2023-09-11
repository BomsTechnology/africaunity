<template>
    <div class="mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]">
        <div class="w-full space-y-4 py-5 text-center">
            <h1 class="text-4xl font-bold capitalize text-primary-blue">
                {{ $t("edit") }} Appel d'offre
            </h1>
        </div>

        <section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">
            <Error v-if="errors != ''">{{ errors }}</Error>
            <h1 class="text-xl font-semibold">{{ $t("edit") }} Appel d'offer_type</h1>
            <h2 class="text-md font-light text-gray-700">
                {{ $t("good-msg-post") }} !
            </h2>
            <form
                @submit.prevent="saveTender()"
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
                                v-if="tender.continent"
                                required
                                @change="filteredZone"
                                v-model="tender.continent.id"
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
                                v-if="tender.zone"
                                @change="filteredCountry"
                                v-model="tender.zone.id"
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
                                v-if="tender.country"
                                @change="filteredCity"
                                v-model="tender.country.id"
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
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("city") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="tender.city"
                                v-model="tender.city.id"
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
                            <label class=" text-gray-700">{{
                                $t("company-logo")
                            }}</label>
                            <div class="flex items-center space-x-4 py-4">
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
                                    class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
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
                                >{{ $t("salary") }}  Min
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
                                >{{ $t("salary") }} Max 
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
                                v-if="tender.currency"
                                v-model="tender.currency.id"
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
                            v-model="clanguages"
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
                            v-model="cactivityAreas"
                            class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                                >{{ $t("size-company") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="tender.size_company"
                                v-model="tender.size_company.id"
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
                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("work-dept") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-if="tender.work_department"
                                v-model="tender.work_department.id"
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
                                v-if="tender.work_mode"
                                v-model="tender.work_mode.id"
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
import { useRouter } from "vue-router";
import RichText from '@/components/RichText.vue';
const router = useRouter();

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});
const file = ref(null);
const { updateTender, getTender, tender, errors, loading } =
    useTenders();
const { currencies, getCurrencies } = useCurrencies();
const { languages, getLanguages } = useLanguages();
const { activityAreas, getActivityAreas } = useActivityAreas();
const { sizeCompanies, getSizeCompanies } = useSizeCompanies();
const { levelStudies, getLevelStudies } = useLevelStudies();
const { offerTypes, getOfferTypes } = useOfferTypes();
const { contractTypes, getContractTypes } = useContractTypes();
const { workDepartments, getWorkDepartments } = useWorkDepartments();
const { workModes, getWorkModes } = useWorkModes();
const { yearExperiences, getYearExperiences } = useYearExperiences();
const { countries, getCountries } = useCountries();
const { zones, getZones } = useZones();
const { continents, getContinents } = useContinents();
const { cities, getCities } = useCities();
const clanguages = ref([]);
const cactivityAreas = ref([]);
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const cityfiltered = ref([]);
const keyComponent = ref(0);

const filteredCity = (reset = true) => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == tender.value.country.id;
    });
    if(reset) {tender.value.city.id = "";}
};

const filteredCountry = (reset = true) => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == tender.value.zone.id;
    });
    if(reset){tender.value.country.id = "";
    tender.value.city.id = "";
    cityfiltered.value = [];}
};

const filteredZone = (reset = true) => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == tender.value.continent.id;
    });
    if(reset) {tender.value.zone.id = "";
    tender.value.country.id = "";
    tender.value.city.id = "";
    cityfiltered.value = [];
    countryFiltered.value = [];}
};

onMounted(async () => {
    await getTender(props.id);
    keyComponent.value++;
    
    for (const item of tender.value.activity_areas) {
        cactivityAreas.value.push(item.id);
    }
    for (const item of tender.value.languages) {
        clanguages.value.push(item.id);
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

    tender.value.company_logo = "";
});

const saveTender = async () => {
    let formData = new FormData();
    formData.append("title", tender.value.title);
    formData.append("description", tender.value.description);
    formData.append("location", tender.value.location);
    formData.append("reference", tender.value.reference);
    formData.append("company_name", tender.value.company_name);
    formData.append("company_email", tender.value.company_email);
    formData.append("company_website", tender.value.company_website);
    formData.append("company_logo", tender.value.company_logo);
    formData.append("min_price", tender.value.min_price);
    formData.append("max_price", tender.value.max_price);
    formData.append("end_date", tender.value.end_date);
    formData.append("user_id", tender.value.user.id);
    formData.append("currency_id", tender.value.currency.id);
    formData.append("work_department_id", tender.value.work_department.id);
    formData.append("work_mode_id", tender.value.work_mode.id);
    formData.append("size_company_id", tender.value.size_company.id);
    formData.append("city_id", tender.value.city.id);
    formData.append("zone_id", tender.value.zone.id);
    formData.append("continent_id", tender.value.continent.id);
    formData.append("country_id", tender.value.country.id);
    formData.append("languages", clanguages.value);
    formData.append("activityAreas", cactivityAreas.value);
    formData.append("_method", "PUT");

    await updateTender(formData, props.id);

    if (errors.value == "") {
        router.push({
            name: "tenders",
        });
    }
};

const handelFileObject = () => {
    tender.value.company_logo = file.value.files[0];
};
function previewImage(file) {
    return URL.createObjectURL(file);
}
function loadImage(file) {
    return URL.revokeObjectURL(file);
}
</script>