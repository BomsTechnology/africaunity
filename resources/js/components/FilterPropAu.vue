<template>
    <div class="w-full">
        <h1 class="inline-block bg-primary-blue px-2 py-1 text-white">
            {{ $t("filter-propau") }}
        </h1>
        <form>
            <div class="text-md space-y-2 border-t-2 border-primary-blue p-4">
                <div>
                    <label class="text-gray-500">{{ $t("language") }}</label>
                    <select
                        v-model="lang"
                        class="form-select mt-2 block w-full border-gray-300 px-3 py-2 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option value="fr">{{ $t("fr") }}</option>
                        <option value="en">{{ $t("en") }}</option>
                        <option value="es">{{ $t("es") }}</option>
                        <option value="pt">{{ $t("pt") }}</option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-500">{{ $t("key-words") }}</label>
                    <input
                        type="text"
                        :placeholder="$t('key-words')"
                        class="form-input mt-2 block w-full border-gray-300 px-3 py-2 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div>
                    <label class="text-gray-500">{{ $t("continent") }}</label>
                    <select
                        class="form-select mt-2 block w-full border-gray-300 px-3 py-2 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option value="*">All {{ $t("continent") }}</option>
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
                    <label class="text-gray-500">{{ $t("zoned") }}</label>
                    <select
                        class="form-select mt-2 block w-full border-gray-300 px-3 py-2 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option value="*">All {{ $t("zoned") }}</option>
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
                    <label class="text-gray-500">{{ $t("country") }}</label>
                    <select
                        class="form-select mt-2 block w-full border-gray-300 px-3 py-2 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option value="*">All {{ $t("country") }}</option>
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
                    <label class="text-gray-500">{{ $t("ministry") }}</label>
                    <select
                        class="form-select mt-2 block w-full border-gray-300 px-3 py-2 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option value="*">All {{ $t("ministry") }}</option>
                        <option
                            v-for="ministry in ministries"
                            :key="ministry.id"
                            :value="ministry.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                ministry.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                ministry.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                ministry.name_es
                            }}</span>
                            <span v-else>{{ ministry.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"
                    >
                        {{ $t("filter") }}
                    </button>
                    <!-- <button  disabled type="submit" class="inline-flex items-center justify-center text-white text-lg bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                        <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Login...
                    </button> -->
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const continents = ref([]);
const zones = ref([]);
const countries = ref([]);
const ministries = ref([]);
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const lang = ref("");
onMounted(async () => {
    let response = await axios.get("/api/continents");
    continents.value = response.data.data;

    response = await axios.get("/api/zones");
    zones.value = response.data.data;

    response = await axios.get("/api/countries");
    countries.value = response.data.data;

    response = await axios.get("/api/ministries");
    ministries.value = response.data.data;
});

const filteredZone = () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == post.continent_id;
    });
    post.country_id = "";
    post.zone_id = "";
    countryFiltered.value = [];
};
const filteredCountry = () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == post.zone_id;
    });
    post.country_id = "";
};

onMounted(async () => {
    lang.value = localStorage.lang ? localStorage.lang : locale.value;
});
</script>
