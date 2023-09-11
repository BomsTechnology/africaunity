<template>
    <div class="z-0 w-full bg-white">
        <h1 class="inline-block bg-primary-blue px-2 py-1 text-white">
            {{ $t("filter-article") }}
        </h1>
        <form>
            <div class="space-y-2 border-t-2 border-primary-blue p-4 text-sm">
                <div>
                    <label class="text-gray-500">{{ $t("language") }}</label>
                    <select
                        v-model="filter.lang"
                        class="form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"
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
                        v-model="filter.keywords"
                        :placeholder="$t('key-words')"
                        class="form-input mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div>
                    <label class="text-gray-500">{{ $t("continent") }}</label>
                    <select
                        v-model="filter.continent"
                        @change="filteredZone()"
                        class="form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"
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
                <div>
                    <label class="text-gray-500">{{ $t("zoned") }}</label>
                    <select
                        v-model="filter.zone"
                        @change="filteredCountry()"
                        class="form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"
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
                <div>
                    <label class="text-gray-500">{{ $t("country") }}</label>
                    <select
                        v-model="filter.country"
                        class="form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"
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
                <div>
                    <label class="text-gray-500">{{ $t("ministry") }}</label>
                    <select
                        v-model="filter.ministry"
                        class="form-select mt-1 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
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
                        type="button"
                        @click="sendFilter()"
                        class="mt-3 w-full bg-primary-blue px-8 py-2 text-lg text-white"
                    >
                        {{ $t("filter") }}
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const router = useRouter();
const { locale } = useI18n();
const continents = ref([]);
const zones = ref([]);
const countries = ref([]);
const ministries = ref([]);
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
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

const filter = reactive({
    country: "",
    continent: "",
    ministry: "",
    zone: "",
    lang: "",
    keywords: "",
    type: "article",
});
const filteredZone = () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == filter.continent;
    });
    filter.country = "";
    filter.zone = "";
    countryFiltered.value = [];
};
const filteredCountry = () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == filter.zone;
    });
    filter.country = "";
};
const sendFilter = () => {
    router.replace({
        name: "articles",
        query: {
            lang: filter.lang,
            continent: filter.continent,
            zone: filter.zone,
            country: filter.country,
            ministry: filter.ministry,
            keywords: filter.keywords,
        },
    });
    location.reload;
};
onMounted(async () => {
    filter.lang = localStorage.lang ? localStorage.lang : locale.value;
});
</script>
