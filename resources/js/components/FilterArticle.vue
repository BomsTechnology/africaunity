<template>
    <div class="w-full z-0 bg-white">
        <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
            {{ $t("filter-article") }}
        </h1>
        <form>
            <div class="border-t-2 space-y-2 border-primary-blue text-sm p-4">
                <div>
                    <label class="text-gray-500">{{
                        $t("language")
                    }}</label>
                    <select
                        v-model="filter.lang"
                        
                        class="form-select px-3 text-xs w-full mt-2  border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
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
                        class="form-input px-3 text-xs w-full mt-2 border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                    />
                </div>
                <div>
                    <label class="text-gray-500">{{ $t("continent") }}</label>
                    <select
                        v-model="filter.continent"
                        
                        class="form-select px-3 text-xs w-full mt-2 border-gray-300  focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="">--------------</option>
                        <option v-for="continent in continents" :key="continent.id" :value="continent.id">
                            <span v-if="$i18n.locale == 'en'">{{ continent.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ continent.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ continent.name_es }}</span> 
                            <span v-else>{{ continent.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-500">{{ $t("zoned") }}</label>
                    <select
                        v-model="filter.zone"
                        
                        class="form-select px-3 text-xs w-full mt-2 border-gray-300  focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="">--------------</option>
                        <option v-for="zone in zones" :key="zone.id" :value="zone.id">
                            <span v-if="$i18n.locale == 'en'">{{ zone.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ zone.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ zone.name_es }}</span> 
                            <span v-else>{{ zone.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-500">{{ $t("country") }}</label>
                    <select
                        v-model="filter.country"
              
                        class="form-select px-3 text-xs w-full mt-2 border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="">--------------</option>
                        <option v-for="country in countries" :key="country.id" :value="country.id">
                            <span v-if="$i18n.locale == 'en'">{{ country.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ country.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ country.name_es }}</span> 
                            <span v-else>{{ country.name_pt }}</span> 
                        </option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-500">{{ $t("ministry") }}</label>
                    <select
                        v-model="filter.ministry"
                        
                        class="form-select px-3 text-xs  w-full mt-1  border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                    >
                        <option value="">--------------</option>
                        <option v-for="ministry in ministries" :key="ministry.id" :value="ministry.id">
                            <span v-if="$i18n.locale == 'en'">{{ ministry.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ ministry.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ ministry.name_es }}</span> 
                            <span v-else>{{ ministry.name_pt }}</span> 
                        </option>
                    </select>
                </div>
                <div>
                    <button type="button" @click="sendFilter()" class="text-white text-lg bg-primary-blue px-8 py-2 mt-3 w-full">{{ $t("filter") }}</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, ref, onMounted} from "vue";
import router from "../router/index.js";
export default {
    setup() {
        const continents = ref([]);
        const zones = ref([]);
        const countries = ref([]);
        const ministries = ref([]);
        onMounted(
            async () => {
                    let response = await axios.get('/api/continents');
                    continents.value = response.data.data;

                    response = await axios.get('/api/zones');
                    zones.value = response.data.data;

                    response = await axios.get('/api/countries');
                    countries.value = response.data.data;

                    response = await axios.get('/api/ministries');
                    ministries.value = response.data.data;
            }
        );

        const filter = reactive({
            country:"",
            continent: "",
            ministry:"",
            zone:"",
            lang:"",
            keywords: "",
            type:"article",
        });

        const sendFilter = () => {
            router.replace({
                name: "articles",
                query: { lang: filter.lang, continent: filter.continent, zone: filter.zone, country: filter.country, ministry: filter.ministry, keywords: filter.keywords,  },
            });
            location.reload;
        } 

        return{
            sendFilter,
            filter,
            continents,
            zones,
            countries,
            ministries,
        }
    },
    mounted() {
        this.filter.lang = localStorage.lang ? localStorage.lang : this.$i18n.locale;
    },
};
</script>
