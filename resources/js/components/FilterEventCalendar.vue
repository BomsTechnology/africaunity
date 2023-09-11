<script setup>
import { ref, onMounted, reactive, watch } from 'vue';
import { useRouter } from "vue-router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import useZones from "@/services/zoneServices.js";
import useCities from "@/services/cityServices.js";
import useCountries from "@/services/countryServices.js";
import useContinents from "@/services/continentServices.js";
import useMinistries from "@/services/ministryServices.js";
import useActivityAreas from "@/services/activityAreaServices.js";
import useDemonstrationModes from "@/services/demonstrationModeServices.js";
import useDemonstrationTypes from "@/services/demonstrationTypeServices.js";
import useDemonstrationNiches from "@/services/demonstrationNicheServices.js";
import useDemonstrations from "@/services/demonstrationServices.js";


const props = defineProps({
    date: [String, Date],
    profile: [String],
    enterType: [String],
    continent: [String, Number],
    ministry: [String, Number],
    activityArea: [String, Number],
    zone: [String, Number],
    country: [String, Number],
    city: [String, Number],
    eventType: [String, Number],
    eventMode: [String, Number],
    eventNiche: [String, Number, Array],
});

const cityfiltered = ref([]);
const zoneFiltered = ref([]);
const countryFiltered = ref([]);
const { zones, getZones } = useZones();
const { cities, getCities } = useCities();
const { countries, getCountries } = useCountries();
const { continents, getContinents } = useContinents();
const { ministries, getMinistries } = useMinistries();
const { activityAreas, getActivityAreas } = useActivityAreas();
const { demonstrations, getDemonstrations } = useDemonstrations();
const { demonstrationTypes, getDemonstrationTypes } = useDemonstrationTypes();
const { demonstrationModes, getDemonstrationModes } = useDemonstrationModes();
const { demonstrationNiches, getDemonstrationNiches } = useDemonstrationNiches();

const filterData = reactive({
    date: '',
    profile: '',
    country_id: '',
    ministry_id: '',
    activity_area_id: '',
    zone_id: '',
    city_id: '',
    continent_id: '',
    enter_type: '',
    demonstration_type_id: '',
    demonstration_mode_id: '',
    demonstration_niche_id: '',
});
const daysTag = ref(null);
const currentDate = ref(null);
const router = useRouter();
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

onMounted(async function () {
    date = new Date(`${props.date}`);
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

    filterData.date = props.date;
    filterData.profile = props.profile;
    filterData.country_id = props.country;
    filterData.zone_id = props.zone;
    filterData.city_id = props.city;
    filterData.continent_id = props.continent;
    filterData.enter_type = props.enterType;
    filterData.ministry_id = props.ministry;
    filterData.activity_area_id = props.activityArea;
    filterData.demonstration_type_id = props.eventType;
    filterData.demonstration_mode_id = props.eventMode;
    filterData.demonstration_niche_id = props.eventNiche;

    await getDemonstrations();

    renderCalendar();
    setItemsDays();

    await getDemonstrationTypes();
    await getDemonstrationModes();
    await getDemonstrationNiches();
    await getMinistries();
    await getActivityAreas();
    await getContinents();
    await getZones();
    await getCountries();
    await getCities();

    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == props.continent;
    });

    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == props.zone;
    });

    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == props.country;
    });
});

watch(props, async function (newProps, oldProps) {
    date = new Date(`${newProps.date}`);
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

    filterData.date = newProps.date;
    filterData.profile = newProps.profile;
    filterData.country_id = newProps.country;
    filterData.zone_id = newProps.zone;
    filterData.city_id = newProps.city;
    filterData.continent_id = newProps.continent;
    filterData.enter_type = newProps.enterType;
    filterData.ministry_id = newProps.ministry;
    filterData.activity_area_id = newProps.activityArea;
    filterData.demonstration_type_id = newProps.eventType;
    filterData.demonstration_mode_id = newProps.eventMode;
    filterData.demonstration_niche_id = newProps.eventNiche ;

    renderCalendar();
    setItemsDays();

    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == newProps.continent;
    });

    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == newProps.zone;
    });

    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == newProps.country;
    });
});

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(
            currYear,
            currMonth,
            lastDateofMonth
        ).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive nob-days-items">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
            i === date.getDate() &&
            currMonth === date.getMonth() &&
            currYear === date.getFullYear()
                ? "active"
                : "";


                let size =  demonstrations.value.filter((demonstration) =>{
                let cmdate = (currMonth + 1 < 10) && (i < 10) ? `${currYear}-0${currMonth + 1}-0${i}` 
                            : (currMonth + 1 < 10) ? `${currYear}-0${currMonth + 1}-${i}` 
                            : (i < 10) ? `${currYear}-${currMonth + 1}-0${i}` : `${currYear}-${currMonth + 1}-${i}` ;
                        return   demonstration.start_date <= cmdate && demonstration.end_date >= cmdate;
                });
             
            let havePub = size.length > 0  ? "have-pub" : "";


        liTag += `<li class="${isToday} ${havePub} days-items">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive nop-days-items">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.value.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.value.innerHTML = liTag;
};

async function nextMonth() {
    currMonth = currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
    setItemsDays();
}

async function prevMonth() {
    currMonth = currMonth - 1;
    if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
    setItemsDays();
}

async function setItemsDays() {
    let days_items = document.querySelectorAll("#eventcalendar .days-items");
    for (let i = 0; i < days_items.length; i++) {
        days_items[i].addEventListener("click", function (e) {
            e.preventDefault();
            router.push({
                name: "events",
                query: {
                    date: `${currYear}-${currMonth + 1}-${
                        e.target.innerHTML
                    }`,
                    enterType: filterData.enter_type,
                    continent: filterData.continent_id,
                    country: filterData.country_id,
                    zone: filterData.zone_id,
                    city:filterData.city_id,
                    ministry:filterData.ministry_id,
                    activityArea:filterData.activity_area_id,
                    eventType:filterData.demonstration_type_id,
                    eventMode:filterData.demonstration_mode_id,
                    eventNiche:filterData.demonstration_niche_id,
                },
            });
        });
    }

    let nop_days_items = document.querySelectorAll("#eventcalendar .nop-days-items");
    for (let i = 0; i < nop_days_items.length; i++) {
        nop_days_items[i].addEventListener("click", function (e) {
            e.preventDefault();
            router.push({
                name: "events",
                query: {
                    date: `${currYear}-${currMonth + 2}-${
                        e.target.innerHTML
                    }`,
                    enterType: filterData.enter_type,
                    continent: filterData.continent_id,
                    country: filterData.country_id,
                    zone: filterData.zone_id,
                    city:filterData.city_id,
                    ministry:filterData.ministry_id,
                    activityArea:filterData.activity_area_id,
                    eventType:filterData.demonstration_type_id,
                    eventMode:filterData.demonstration_mode_id,
                    eventNiche:filterData.demonstration_niche_id,
                },
            });
        });
    }

    let nob_days_items = document.querySelectorAll("#eventcalendar .nob-days-items");
    for (let i = 0; i < nob_days_items.length; i++) {
        nob_days_items[i].addEventListener("click", function (e) {
            e.preventDefault();
            router.push({
                name: "events",
                query: {
                    date: `${currYear}-${currMonth}-${
                        e.target.innerHTML
                    }`,
                    enterType: filterData.enter_type,
                    continent: filterData.continent_id,
                    country: filterData.country_id,
                    zone: filterData.zone_id,
                    city:filterData.city_id,
                    ministry:filterData.ministry_id,
                    activityArea:filterData.activity_area_id,
                    eventType:filterData.demonstration_type_id,
                    eventMode:filterData.demonstration_mode_id,
                    eventNiche:filterData.demonstration_niche_id,
                },
            });
        });
    }
}

async function filter () {
    router.push({
                name: "events",
                query: {
                    date: filterData.date,
                    profile: filterData.profile,
                    enterType: filterData.enter_type,
                    continent: filterData.continent_id,
                    country: filterData.country_id,
                    zone: filterData.zone_id,
                    city:filterData.city_id,
                    ministry:filterData.ministry_id,
                    activityArea:filterData.activity_area_id,
                    eventType:filterData.demonstration_type_id,
                    eventMode:filterData.demonstration_mode_id,
                    eventNiche:filterData.demonstration_niche_id,
                },
            });
}

const filteredCity = () => {
    cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == filterData.country_id;
    });
    filterData.city_id = "";
    filter();
};

const filteredCountry = () => {
    countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == filterData.zone_id;
    });
    filterData.country_id = "";
    filterData.city_id = "";
    cityfiltered.value = [];
    filter();
};

const filteredZone = () => {
    zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == filterData.continent_id;
    });
    filterData.zone_id = "";
    filterData.country_id = "";
    filterData.city_id = "";
    cityfiltered.value = [];
    countryFiltered.value = [];
    filter();
};
</script>

<template>
    <div id="eventcalendar">

    <div class="wrapper">
        <header>
            
            <div class="icons">
                <span id="prev" @click="prevMonth()"
                    ><ChevronLeftIcon class="h-5 w-5"
                /></span>
                <p class="current-date" ref="currentDate"></p>
                <span id="next" @click="nextMonth()"
                    ><ChevronRightIcon class="h-5 w-5"
                /></span>
            </div>
        </header>
        <div class="calendar">
            <ul class="weeks">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul class="days" ref="daysTag"></ul>
        </div>
    </div>

    <div class="px-4">

        <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("profile") }}</label>
        <select name="" id="" v-model="filterData.profile" @change="filter" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
           <option value=""></option>
           <option value="particular">{{ $t("particular") }}</option>
           <option value="business2">{{ $t("establishment") }}</option>
           <option value="ip">{{ $t("ip") }}</option>  
        </select>
        </div>

        <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("event-type") }}</label>
        <select name="" id="" v-model="filterData.demonstration_type_id" @change="filter" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
           <option value=""></option>
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

    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("event-mode") }}</label>
        <select name="" id="" v-model="filterData.demonstration_mode_id" @change="filter" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
            <option value=""></option>
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

    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("niche") }}</label>
        <select name="" id=""  v-model="filterData.demonstration_niche_id" @change="filter" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
            <option value=""></option>
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

    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("enter-type") }}</label>
        <select name="" id="" v-model="filterData.enter_type" @change="filter" class="form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
            <option value=""></option>
            <option value="paying">{{ $t("paying") }}</option>
            <option value="free">{{ $t("free") }}</option>
        </select>
    </div>
    
    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("continent") }}</label>
        <select name="" id="" v-model="filterData.continent_id"   @change="filteredZone()" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
            <option value=""></option>
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
    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("zoned") }}</label>
        <select name="" id="" v-model="filterData.zone_id" @change="filteredCountry()" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
            <option value=""></option>
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
    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("country") }}</label>
        <select name="" id=""  @change="filteredCity()"
                                v-model="filterData.country_id" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
                                <option value=""></option>
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
    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("city") }}</label>
        <select name="" id=""  v-model="filterData.city_id" @change="filter" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
            <option value=""></option>
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
    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("ministry") }}</label>
        <select name="" id=""  v-model="filterData.ministry_id" @change="filter" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
            <option value=""></option>
            <option
                                    v-if="ministries.length != 0"
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
    <div class="mt-4">
        <label for="" class=" text-sm text-gray-500">{{ $t("activity-area") }}</label>
        <select name="" id=""  v-model="filterData.activity_area_id" @change="filter" class=" form-select block mt-1 !border-gray-200 text-gray-800 rounded text-sm  outline-0 ring-0 w-full">
            <option value=""></option>
            <option
                                    v-if="activityAreas.length != 0"
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
</div>
</div>
</template>

<style>
#eventcalendar .wrapper {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 10px;
}
#eventcalendar .wrapper header {
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;
}
#eventcalendar  header .icons {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
#eventcalendar  header .icons span {
    height: 38px;
    width: 38px;
    margin: 0 1px;
    cursor: pointer;
    color: #878787;
    text-align: center;
    line-height: 38px;
    font-size: 1.9rem;
    user-select: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#eventcalendar  .icons span:last-child {
    margin-right: -10px;
}
#eventcalendar  header .icons span:hover {
    background: #f2f2f2;
}
#eventcalendar  header .current-date {
    font-size: 1.25rem;
    font-weight: 500;
}
#eventcalendar  .calendar {
    padding: 15px;
}
#eventcalendar  .calendar ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
}
#eventcalendar  .calendar .days {
    margin-bottom: 5px;
}
#eventcalendar  .calendar li {
    color: #333;
    width: calc(100% / 7);
    font-size: 0.875rem;
}

#eventcalendar  .calendar .weeks {
    border-bottom: 1px solid #f2f2f2;
    padding: 5px 0;
}
#eventcalendar  .calendar .weeks li {
    font-weight: 500;
    cursor: default;
    
}
#eventcalendar  .calendar .days li {
    z-index: 1;
    cursor: pointer;
    position: relative;
    margin-top: 20px;
}
#eventcalendar  .days li.inactive {
    color: #aaa;
}
#eventcalendar  .days li.active {
    color: #fff;
}
#eventcalendar   .days li::before {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    height: 40px;
    width: 40px;
    z-index: -1;
   
    transform: translate(-50%, -50%);
}
#eventcalendar  .days li.active::before {
    background: #289dcc;
}
#eventcalendar  .days li.active.have-pub::before {
    background: #289dcc;
}
#eventcalendar  .days li.have-pub::before {
    background: #f2f2f2;
}
#eventcalendar  .days li:not(.active):hover::before {
    background: #f2f2f2;
}
</style>
