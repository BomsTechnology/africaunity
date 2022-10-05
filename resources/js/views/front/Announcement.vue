<script setup>
import { reactive, ref, onMounted, computed, onUnmounted } from "vue";
import {
    EmojiSadIcon,
    UserIcon,
    CalendarIcon,
    PlusCircleIcon,
    SpeakerphoneIcon,
} from "@heroicons/vue/solid";
import useAnnouncements from "@/services/announcementServices.js";
import useUniversities from "@/services/universityServices.js";
import usecategoryAnnouncements from "@/services/categoryAnnouncementServices.js";
import useContinents from "@/services/continentServices.js";
import useCountries from "@/services/countryServices.js";
import useCities from "@/services/cityServices.js";
import useZones from "@/services/zoneServices.js";
import SelectFilter from "@/components/SelectFilter.vue";
import Ads from "../../components/skeleton/Ads.vue";
const { universities, getAllUniversities } = useUniversities();
const { announcements, getAnnouncements, loading, page, isAll } =
    useAnnouncements();
const { continents, getContinents } = useContinents();
const { countries, getCountries } = useCountries();
const { categoryAnnouncements, getCategoryAnnouncements } =
    usecategoryAnnouncements();
const { zones, getZones } = useZones();
const { cities, getCities } = useCities();
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const zoneFilteredA = ref([]);
const countryFilteredA = ref([]);
const cityfilteredA = ref([]);
const universityfilteredA = ref([]);
const adsContainer = ref(null);
const toGet = ref(true);
onMounted(async () => {
    window.addEventListener("scroll", handleScroll);
    await getAnnouncements();
    await getContinents();
    await getZones();
    await getCountries();
    await getCategoryAnnouncements();
    await getCities();
    getAllUniversities();
});

onUnmounted(async () => {
    page.value = 1;
    window.removeEventListener("scroll", handleScroll);
});

const handleScroll = async (e) => {
    let element = adsContainer.value;
    if (
        element.getBoundingClientRect().bottom < window.innerHeight &&
        toGet.value &&
        !isAll.value
    ) {
        toGet.value = false;
        page.value++;
        await getAnnouncements();
        toGet.value = true;
    }
};

const filterAds = reactive({
    searchKey: "",
    category: "",
    country: "",
    continent: "",
    university: "",
    city: "",
    zone: "",
});

const filteredUnivCityA = () => {
    universityfilteredA.value = universities.value.filter((university) => {
        return (
            university.continent.id == filterAds.continent &&
            university.zone.id == filterAds.zone &&
            university.country.id == filterAds.country &&
            university.city.id == filterAds.city
        );
    });
};

const filteredCityA = () => {
    cityfilteredA.value = cities.value.filter((city) => {
        return city.country_id == filterAds.country;
    });
    universityfilteredA.value = universities.value.filter((university) => {
        return (
            university.continent.id == filterAds.continent &&
            university.zone.id == filterAds.zone &&
            university.country.id == filterAds.country
        );
    });
    filterAds.city = "";
};

const filteredCountryA = () => {
    countryFilteredA.value = countries.value.filter((country) => {
        return country.zone_id == filterAds.zone;
    });
    universityfilteredA.value = universities.value.filter((university) => {
        return (
            university.continent.id == filterAds.continent &&
            university.zone.id == filterAds.zone
        );
    });
    filterAds.country = "";
    filterAds.city = "";
    cityfilteredA.value = [];
};

const filteredZoneA = () => {
    zoneFilteredA.value = zones.value.filter((zone) => {
        return zone.continent_id == filterAds.continent;
    });
    universityfilteredA.value = universities.value.filter((university) => {
        return university.continent.id == filterAds.continent;
    });
    filterAds.zone = "";
    filterAds.country = "";
    filterAds.city = "";
    cityfilteredA.value = [];
    countryFilteredA.value = [];
};

const filteredAnnouncement = computed(() => {
    return announcements.value.filter((announcement) => {
        let data = "";
        if (
            filterAds.continent != "" &&
            filterAds.zone != "" &&
            filterAds.country != "" &&
            filterAds.city != "" &&
            filterAds.university != "" &&
            filterAds.category != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.city.id == filterAds.city &&
                announcement.university.country.id == filterAds.country &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.zone.id == filterAds.zone &&
                announcement.university.id == filterAds.university &&
                announcement.category.id == filterAds.category;
        else if (
            filterAds.continent != "" &&
            filterAds.zone != "" &&
            filterAds.country != "" &&
            filterAds.city != "" &&
            filterAds.university != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.city.id == filterAds.city &&
                announcement.university.country.id == filterAds.country &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.zone.id == filterAds.zone &&
                announcement.university.id == filterAds.university;
        else if (
            filterAds.continent != "" &&
            filterAds.zone != "" &&
            filterAds.country != "" &&
            filterAds.university != "" &&
            filterAds.category != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.zone.id == filterAds.zone &&
                announcement.university.country.id == filterAds.country &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.id == filterAds.university &&
                announcement.category.id == filterAds.category;
        else if (
            filterAds.continent != "" &&
            filterAds.zone != "" &&
            filterAds.country != "" &&
            filterAds.city != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.city.id == filterAds.city &&
                announcement.university.country.id == filterAds.country &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.zone.id == filterAds.zone;
        else if (
            filterAds.continent != "" &&
            filterAds.zone != "" &&
            filterAds.university != "" &&
            filterAds.category != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.zone.id == filterAds.zone &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.id == filterAds.university &&
                announcement.category.id == filterAds.category;
        else if (
            filterAds.continent != "" &&
            filterAds.zone != "" &&
            filterAds.country != "" &&
            filterAds.university != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.country.id == filterAds.country &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.zone.id == filterAds.zone &&
                announcement.university.id == filterAds.university;
        else if (
            filterAds.continent != "" &&
            filterAds.zone != "" &&
            filterAds.country != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.country.id == filterAds.country &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.zone.id == filterAds.zone;
        else if (
            filterAds.continent != "" &&
            filterAds.university != "" &&
            filterAds.category != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.category.id == filterAds.category &&
                announcement.university.id == filterAds.university &&
                announcement.university.continent.id == filterAds.continent;
        else if (
            filterAds.continent != "" &&
            filterAds.zone != "" &&
            filterAds.university != ""
        )
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.zone.id == filterAds.zone &&
                announcement.university.id == filterAds.university;
        else if (filterAds.continent != "" && filterAds.category != "")
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.category.id == filterAds.category &&
                announcement.university.continent.id == filterAds.continent;
        else if (filterAds.continent != "" && filterAds.university != "")
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.id == filterAds.university &&
                announcement.university.continent.id == filterAds.continent;
        else if (filterAds.continent != "" && filterAds.zone != "")
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.continent.id == filterAds.continent &&
                announcement.university.zone.id == filterAds.zone;
        else if (filterAds.continent != "")
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.university.continent.id == filterAds.continent;
        else if (filterAds.category != "")
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.category.id == filterAds.category;
        else
            data = announcement.title
                .toLowerCase()
                .includes(filterAds.searchKey.toLowerCase());
        return data;
    });
});
</script>
<template>
    <div class="mx-auto min-h-screen w-full bg-white xl:w-[90%]">
        <h1
            class="py-2 text-center text-5xl font-bold capitalize text-primary-blue"
        >
            {{ $t("ads") }}
        </h1>
        <div class="py-8 lg:px-16">
            <div
                class="mt-4 grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-3"
            >
                <div class="text-xs lg:text-sm">
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("key-words")
                    }}</label>
                    <input
                        type="text"
                        v-model="filterAds.searchKey"
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("category")
                    }}</label>
                    <select
                        v-model="filterAds.category"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="category_announcement in categoryAnnouncements"
                            :key="category_announcement.id"
                            :value="category_announcement.id"
                        >
                            {{ category_announcement.name }}
                        </option>
                    </select>
                </div>
                <div class="divSelect2 text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("university")
                    }}</label>
                    <SelectFilter
                        v-model="filterAds.university"
                        :data="universityfilteredA"
                        :placeholder="'Select University'"
                        :required="false"
                        :resetField="true"
                        :className="'w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm'"
                    />
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("continent")
                    }}</label>
                    <select
                        v-model="filterAds.continent"
                        @change="filteredZoneA()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("zoned")
                    }}</label>
                    <select
                        v-model="filterAds.zone"
                        @change="filteredCountryA()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-if="zoneFilteredA.length != 0"
                            v-for="country in zoneFilteredA"
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
                            Select {{ $t("continent") }}
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("country")
                    }}</label>
                    <select
                        v-model="filterAds.country"
                        @change="filteredCityA()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-if="countryFilteredA.length != 0"
                            v-for="country in countryFilteredA"
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
                            Select {{ $t("zoned") }}
                        </option>
                    </select>
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("city")
                    }}</label>
                    <select
                        v-model="filterAds.city"
                        @change="filteredUnivCityA()"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-if="cityfilteredA.length != 0"
                            v-for="city in cityfilteredA"
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
                            Select {{ $t("country") }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="bg-primary-blue p-2 shadow"></div>
            <div class="flex justify-end py-4">
                <router-link
                    :to="{
                        name: 'add.ads',
                    }"
                    v-if="user.type == 'particular' || user.type == 'admin'"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">
                        {{ $t("add") }} {{ $t("ads") }}
                    </p>
                </router-link>
            </div>
            <div class="py-8">
                <div
                    ref="adsContainer"
                    class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    v-if="filteredAnnouncement.length != 0"
                >
                    <div
                        class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-lg"
                        v-for="announcement in filteredAnnouncement"
                        :key="announcement.id"
                    >
                        <router-link
                            :to="{
                                name: 'show.ads',
                                params: { id: announcement.id },
                            }"
                        >
                            <img
                                class="mt-2 h-48 w-full rounded-t-lg object-cover"
                                v-if="announcement.image"
                                :src="announcement.image"
                                :alt="announcement.title"
                            />
                            <div
                                v-else
                                class="mt-2 h-48 w-full overflow-hidden rounded-t-lg bg-gray-50 py-10"
                            >
                                <SpeakerphoneIcon
                                    class="h-full w-full text-gray-500"
                                />
                            </div>
                        </router-link>
                        <div class="space-y-2 px-4 py-2">
                            <a
                                href="#"
                                class="mt-2 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"
                            >
                                {{
                                    announcement.category.name.length <= 30
                                        ? announcement.category.name
                                        : announcement.category.name.substring(
                                              0,
                                              25
                                          ) + "..."
                                }}
                            </a>
                            <router-link
                                :to="{
                                    name: 'show.ads',
                                    params: { id: announcement.id },
                                }"
                            >
                                <h1
                                    class="text-2xl font-bold capitalize text-gray-800 hover:underline"
                                >
                                    {{
                                        announcement.title.length <= 20
                                            ? announcement.title
                                            : announcement.title.substring(
                                                  0,
                                                  19
                                              ) + "..."
                                    }}
                                </h1>
                            </router-link>

                            <p
                                class="dark:text-gray-400 mt-2 text-sm text-gray-600"
                            >
                                {{
                                    announcement.description.substring(0, 19) +
                                    "..."
                                }}
                            </p>
                        </div>
                        <div
                            class="flex h-10 items-center justify-between bg-gray-900 px-4 py-2"
                        >
                            <h1
                                class="text-lg font-bold text-white"
                                v-if="
                                    announcement.price &&
                                    announcement.price != 'null'
                                "
                            >
                                {{ announcement.price }}
                                {{ announcement.currency.symbol }}
                            </h1>
                            <div
                                class="flex items-center space-x-2 text-xs text-white"
                            >
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <router-link
                                        :to="{
                                            name: 'compte',
                                            params: {
                                                name: announcement.user
                                                    .firstname,
                                                id: announcement.user.id,
                                            },
                                        }"
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{
                                            announcement.user.firstname
                                        }}</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="loading == 1">
                    <Ads />
                </div>
                <div
                    v-if="filteredAnnouncement.length == 0 && loading != 1"
                    class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500"
                >
                    <EmojiSadIcon class="h-16 w-16" />
                    <span class="mt-2 text-2xl">{{ $t("no-content") }} </span>
                </div>
            </div>
        </div>
    </div>
</template>
