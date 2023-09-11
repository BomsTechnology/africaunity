<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4">
            <div class="flex w-full justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Edit Tender
                </h1>
            </div>

            <section class="mx-auto w-full bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">
                    Edit a Tender
                </h2>
                <form
                    @submit.prevent="saveTender()"
                    id="tenderform"
                    enctype="multipart/form-data"
                >
                    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="col-span-2">
                            <label class="dark:text-gray-200 text-gray-700"
                                >Title</label
                            >
                            <input
                                required
                                v-model="tender.title"
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
                                v-model="tender.continent_id"
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
                                @change="filteredCountry"
                                v-model="tender.zone_id"
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
                                v-model="tender.country_id"
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

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >City</label
                            >
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
                                    {{ city.name_en }}
                                </option>
                                <option v-else value="null">
                                    Requires {{ $t("country") }}
                                </option>
                            </select>
                        </div>

                        <div class="col-span-2">
                            <label class="dark:text-gray-200 text-gray-700"
                                >Location</label
                            >
                            <input
                                required
                                v-model="tender.location"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div class="">
                            <label class="dark:text-gray-200 text-gray-700"
                                >{{ $t("start-date") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="tender.start_date"
                                type="date"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Company Name</label
                            >
                            <input
                                required
                                v-model="tender.company_name"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Company Email</label
                            >
                            <input
                                required
                                v-model="tender.company_email"
                                type="email"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Company Website</label
                            >
                            <input
                                v-model="tender.company_website"
                                type="url"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Company logo</label
                            >
                            <input
                                ref="file"
                                @change="handelFileObject()"
                                type="file"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div
                            class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            <div>
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Min Price</label
                                >
                                <input
                                    required
                                    v-model="tender.min_price"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Max Price</label
                                >
                                <input
                                    required
                                    v-model="tender.max_price"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div>
                                <label
                                    class="dark:text-gray-200 text-gray-700"
                                    for="es"
                                    >Currency</label
                                >
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
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Languages</label
                            >
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
                                    {{ language.name_en }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Size Company</label
                            >
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

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Level Study</label
                            >
                            <select
                                required
                                v-model="tender.level_study_id"
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

                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Activity Areas</label
                            >
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
                                    {{ activityArea.name_en }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Work Department</label
                            >
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
                                    {{ workDepartment.name_en }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Work Mode</label
                            >
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
                                    {{ workMode.name_en }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Offer Type</label
                            >
                            <select
                                required
                                v-model="tender.offer_type_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Year Experience</label
                            >
                            <select
                                required
                                v-model="tender.year_experience_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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

                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >Description</label
                            >
                            <textarea
                                required
                                type="text"
                                v-model="tender.description"
                                id="pt"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                            >
                            </textarea>
                        </div>
                    </div>

                    <div class="mt-6 flex justify-end">
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
                    </div>
                </form>
            </section>
        </div>
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
import useWorkDepartments from "@/services/workDepartmentServices.js";
import useWorkModes from "@/services/workModeServices.js";
import useYearExperiences from "@/services/yearExperienceServices.js";
import useLanguages from "@/services/languageServices.js";
import useCountries from "@/services/countryServices.js";
import useZones from "@/services/zoneServices.js";
import useContinents from "@/services/continentServices.js";
import useCities from "@/services/cityServices.js";
import { useRouter } from "vue-router";
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

const filteredCity = () => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == tender.value.country_id;
    });
    tender.value.city.id = "";
};

const filteredCountry = () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == tender.value.zone_id;
    });
    tender.value.country.id = "";
    tender.value.city.id = "";
    cityfiltered.value = [];
};

const filteredZone = () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == tender.value.continent_id;
    });
    tender.value.zone.id = "";
    tender.value.country.id = "";
    tender.value.city.id = "";
    cityfiltered.value = [];
    countryFiltered.value = [];
};

onMounted(async () => {
    await getTender(props.id),
        await getCurrencies(),
        await getContinents(),
        await getZones(),
        await getWorkModes(),
        await getWorkDepartments(),
        await getSizeCompanies(),
        await getActivityAreas(),
        await getLanguages(),
        await getCountries(),
        await getCities(),
        (zoneFiltered.value = zones.value.filter((zone) => {
            return zone.continent_id == tender.value.continent_id;
        }));

    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == tender.value.zone_id;
    });

    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == tender.value.country_id;
    });
    tender.value.company_logo = "";
});

const clanguages = ref([]);
const cactivityAreas = ref([]);

const saveTender = async () => {
    let formData = new FormData();
    formData.append("title", tender.value.title);
    formData.append("description", tender.value.description);
    formData.append("start_date", tender.value.start_date);
    formData.append("location", tender.value.location);
    formData.append("company_name", tender.value.company_name);
    formData.append("company_email", tender.value.company_email);
    formData.append("company_website", tender.value.company_website);
    formData.append("company_logo", tender.value.company_logo);
    formData.append("min_price", tender.value.min_price);
    formData.append("max_price", tender.value.max_price);
    formData.append("user_id", tender.value.user_id);
    formData.append("currency_id", tender.value.currency_id);
    formData.append("work_department_id", tender.value.work_department_id);
    formData.append("work_mode_id", tender.value.work_mode_id);
    formData.append("size_company_id", tender.value.size_company_id);
    formData.append("city_id", tender.value.city_id);
    formData.append("zone_id", tender.value.zone_id);
    formData.append("continent_id", tender.value.continent_id);
    formData.append("country_id", tender.value.country_id);
    formData.append("languages", clanguages.value);
    formData.append("activityAreas", cactivityAreas.value);
    formData.append("_method", "PUT");

    await updateTender(formData, props.id);
    if (errors.value == "") {
        router.push({ name: "admin.tender.index" });
    }
};

const handelFileObject = () => {
    tender.value.company_logo = file.value.files[0];
};
</script>