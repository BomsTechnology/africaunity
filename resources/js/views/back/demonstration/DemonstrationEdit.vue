<script setup>
import { useRouter } from "vue-router";
import { reactive, ref, onMounted } from "vue";
import useZones from "@/services/zoneServices.js";
import useCities from "@/services/cityServices.js";
import useCountries from "@/services/countryServices.js";
import useCurrencies from "@/services/currencyServices.js";
import useContinents from "@/services/continentServices.js";
import useDemonstrations from "@/services/demonstrationServices.js";
import useDemonstrationModes from "@/services/demonstrationModeServices.js";
import useDemonstrationTypes from "@/services/demonstrationTypeServices.js";
import useDemonstrationNiches from "@/services/demonstrationNicheServices.js";

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});

const file = ref(null);
const router = useRouter();
const cityfiltered = ref([]);
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const { zones, getZones } = useZones();
const { cities, getCities } = useCities();
const { countries, getCountries } = useCountries();
const { currencies, getCurrencies } = useCurrencies();
const { continents, getContinents } = useContinents();
const { errors, loading, demonstration, getDemonstration, updateDemonstration} = useDemonstrations();
const { demonstrationTypes, getDemonstrationTypes } = useDemonstrationTypes();
const { demonstrationModes, getDemonstrationModes } = useDemonstrationModes();
const { demonstrationNiches, getDemonstrationNiches } = useDemonstrationNiches();
const user = localStorage.user ? JSON.parse(localStorage.user) : "";


onMounted(async () => {
    await getDemonstration(props.id);
    await getDemonstrationTypes();
    await getDemonstrationModes();
    await getDemonstrationNiches();
    await getCurrencies();
    await getContinents();
    await getZones();
    await getCountries();
    await getCities();

    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == demonstration.value.continent_id;
    });

    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == demonstration.value.zone_id;
    });

    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == demonstration.value.country_id;
    });
    
});

const saveDemonstration = async () => {
    let formData = new FormData();
    formData.append("title", demonstration.value.title);
    formData.append("description", demonstration.value.description);
    formData.append("price", demonstration.value.price);
    formData.append("image", demonstration.value.image);
    formData.append("email", demonstration.value.email);
    formData.append("hourly", demonstration.value.hourly);
    formData.append("start_date", demonstration.value.start_date);
    formData.append("end_date", demonstration.value.end_date);
    formData.append("phone", demonstration.value.phone);
    formData.append("enter_type", demonstration.value.enter_type);
    formData.append("user_id", demonstration.value.user_id);
    formData.append("currency_id", demonstration.value.currency_id);
    formData.append("place_link", demonstration.value.place_link);
    formData.append("demonstration_type_id", demonstration.value.demonstration_type_id);
    formData.append("demonstration_mode_id", demonstration.value.demonstration_mode_id);
    formData.append("demonstration_niche_id", demonstration.value.demonstration_niche_id);
    formData.append("city_id", demonstration.value.city_id);
    formData.append("zone_id", demonstration.value.zone_id);
    formData.append("continent_id", demonstration.value.continent_id);
    formData.append("country_id", demonstration.value.country_id);
    formData.append("_method", "PUT");
    await updateDemonstration(formData, props.id);
    if (errors.value == "") {
        router.push({
            name: "admin.event.index",
        });
    }
};

const filteredCity = () => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == demonstration.country_id;
    });
    demonstration.city_id = "";
};

const filteredCountry = () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == demonstration.zone_id;
    });
    demonstration.country_id = "";
    demonstration.city_id = "";
    cityfiltered.value = [];
};

const filteredZone = () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == demonstration.continent_id;
    });
    demonstration.zone_id = "";
    demonstration.country_id = "";
    demonstration.city_id = "";
    cityfiltered.value = [];
    countryFiltered.value = [];
};

const handelFileObject = async () => {
    demonstration.value.image = file.value.files[0];
};

function previewImage(file) {
    return URL.createObjectURL(file);
}

function loadImage(file) {
    return URL.revokeObjectURL(file);
}
</script>

<template>
    <div>
        <h1 class="text-center text-2xl font-bold text-gray-500 sm:text-4xl">
            {{ $tc("edit", 1) }} Demonstration
        </h1>

        <section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">
            <Error v-if="errors != ''">{{ errors }}</Error>

            <form
                @submit.prevent="saveDemonstration()"
                id="postform"
                enctype="multipart/form-data"
            >
            <div class="mt-4">
                    <div class="col-span-2">
                        <label class="text-gray-700">
                            {{ $t("title") }}
                            <span class="text-red-500">*</span>
                        </label>
                        <input
                            required
                            v-model="demonstration.title"
                            maxlength="50"
                            type="text"
                            class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                        <span class="text-xs font-light text-gray-400"
                            >{{
                                demonstration.title
                                    ? demonstration.title.length
                                    : 0
                            }}
                            of 50 Characters</span
                        >
                    </div>

                    <div
                        class="col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >

                    <div>
                            <label class="text-gray-700" for="pt"
                                >{{ $t("event-type") }}
                                <span class="text-red-500">*</span></label
                            >
                            <select
                                required
                                v-model="demonstration.demonstration_type_id"
                                name=""
                                id=""
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                            <option
                                    v-for="demonstrationType in demonstrationTypes"
                                    :key="demonstrationType.id"
                                    :value="demonstrationType.id"
                                >
                                <span v-if="$i18n.locale == 'en'">{{
                                        demonstrationType.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        demonstrationType.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        demonstrationType.name_es
                                    }}</span>
                                    <span v-else>{{ demonstrationType.name_pt }}</span>
                                </option> 
                            </select>
                        </div>

                        <div>
                            <label class="text-gray-700" for="pt"
                                >{{ $t("event-mode") }}
                                <span class="text-red-500">*</span></label
                            >
                            <select
                                required
                                v-model="demonstration.demonstration_mode_id"
                                name=""
                                id=""
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                            <option
                                    v-for="demonstrationMode in demonstrationModes"
                                    :key="demonstrationMode.id"
                                    :value="demonstrationMode.id"
                                >
                                <span v-if="$i18n.locale == 'en'">{{
                                        demonstrationMode.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        demonstrationMode.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        demonstrationMode.name_es
                                    }}</span>
                                    <span v-else>{{ demonstrationMode.name_pt }}</span>
                                </option> 
                            </select>
                        </div>                    

                        <div>
                            <label
                                class=" text-gray-700"
                                for="es"
                                >{{ $t("continent") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <select
                                required
                                v-model="demonstration.continent_id"
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
                                v-model="demonstration.zone_id"
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
                                v-model="demonstration.country_id"
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
                                v-model="demonstration.city_id"
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

                        <div class="sm:col-span-2">
                            <label class="text-gray-700" for="pt"
                                >{{ $t("location-link") }}
                                <span class="text-red-500">*</span></label
                            >
                            <input
                            required
                            v-model="demonstration.place_link"
                            type="text"
                            class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                        </div>

                        <div class=" sm:col-span-2">
                            <label class="text-gray-700">{{ $t("enter-type") }}<span class="text-red-500">*</span></label>
                            <select
                                required
                                v-model="demonstration.enter_type"
                                name=""
                                id=""
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                           <option value="free">Gratuit</option>
                           <option value="paying">Payant</option>
                            </select>
                        </div>


                        <div >
                            <label class="text-gray-700"
                                >{{ $t("price") }}
                               
                            </label>
                            <input
                                
                                v-model="demonstration.price"
                                type="text"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div >
                            <label class="text-gray-700" for="es"
                                >{{ $t("currency") }}
                              
                            </label>
                            <select
                                
                                v-model="demonstration.currency_id"
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

                        

                        <div>
                            <label class="text-gray-700">{{ $t("start-date") }} <span class="text-red-500">*</span></label>
                            <input
                                v-model="demonstration.start_date"
                                type="date"
                                required
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="text-gray-700">{{ $t("end-date") }} <span class="text-red-500">*</span></label>
                            <input
                                v-model="demonstration.end_date"
                                type="date"
                                required
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>


                        <div>
                            <label class="text-gray-700">{{ $t("niche") }}  <span class="text-red-500">*</span></label>
                            <select
                                required
                                v-model="demonstration.demonstration_niche_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                             <option
                                    v-for="demonstrationNiche in demonstrationNiches"
                                    :key="demonstrationNiche.id"
                                    :value="demonstrationNiche.id"
                                >
                                <span v-if="$i18n.locale == 'en'">{{
                                        demonstrationNiche.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        demonstrationNiche.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        demonstrationNiche.name_es
                                    }}</span>
                                    <span v-else>{{ demonstrationNiche.name_pt }}</span>
                                </option> 
                            </select>
                        </div>

                        <div>
                            <label class="text-gray-700">{{ $t("hour") }}  <span class="text-red-500">*</span></label>
                            <input
                                v-model="demonstration.hourly"
                                type="time"
                                required
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="text-gray-700"
                                >{{ $t("contact-phone") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="demonstration.phone"
                                type="text"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="text-gray-700"
                                >{{ $t("contact-email") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="demonstration.email"
                                type="email"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        
                    </div>
                    <div class="sm:col-span-2 mt-4">
                        <label class="text-gray-700" for="fr">{{
                            $t("thumbnails")
                        }}</label>
                       <div class="flex items-center space-x-4 py-4">
                            <img
                                v-if="demonstration.image"
                                :src="
                                    typeof demonstration.image == 'string'
                                        ? demonstration.image
                                        : previewImage(demonstration.image)
                                "
                                @load="
                                    typeof demonstration.image == 'string'
                                        ? ''
                                        : loadImage(demonstration.image)
                                "
                                class="h-16 w-16 rounded-full"
                                :alt="demonstration.title"
                            />
                            <input
                                
                                ref="file"
                                @change="handelFileObject()"
                                accept="image/*"
                                type="file"
                                class=" mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div class="sm:col-span-2 mt-4">
                        <label class="text-gray-700" for="pt"
                            >{{ $t("description") }}
                            <span class="text-red-500">*</span>
                        </label>
                        <textarea
                            required
                            type="text"
                            v-model="demonstration.description"
                            id="pt"
                            class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                        >
                        </textarea>
                    </div>
                </div>

                <div class="mt-20">
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
                        {{ $t("save") }}...
                        <Spin :size="'small'" />
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>
