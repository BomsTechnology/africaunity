<template>
    <h1
        class="text-5xl text-primary-blue text-center py-2 capitalize font-bold"
    >
        {{ $t("univerities") }}
    </h1>
    <div class="py-8 lg:px-16">
        <div
            class="grid lg:grid-cols-4 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow"
        >
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700 dark:text-gray-200">{{
                    $t("key-words")
                }}</label>
                <input
                    type="text"
                    v-model="filterUniversity.searchKey"
                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                />
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{
                    $t("continent")
                }}</label>
                <select
                    v-model="filterUniversity.continent"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{
                    $t("country")
                }}</label>
                <select
                    v-model="filterUniversity.country"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
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
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{ $t("city") }}</label>
                <select
                    v-model="filterUniversity.city"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
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
        <div class="p-2 bg-primary-blue shadow"></div>
        <div class="flex justify-center py-2" v-if="universities.length > 8">
            <button
                @click="toogleShowAllU()"
                class="flex justify-start text-sm items-center text-primary-blue hover:underline"
            >
                <ChevronUpIcon v-if="showAllU" class="w-5 h-5" />
                <span v-if="showAllU">{{ $t("hide-more") }}</span>
                <ChevronDownIcon v-if="!showAllU" class="w-5 h-5" />
                <span v-if="!showAllU">{{ $t("show-more") }}</span>
            </button>
        </div>
        <div
            class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-10 py-8"
            v-if="filteredUniversity.length != 0"
        >
            <div
                class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                v-for="university in filteredUniversity"
                :key="university.id"
            >
                <router-link
                    :to="{
                        name: 'show.university',
                        params: { id: university.id },
                    }"
                >
                    <img
                        class="object-cover w-full h-44"
                        :src="university.image"
                        alt=""
                    />
                </router-link>
                <div class="p-6">
                    <div>
                        <a
                            href="#"
                            class="text-xs py-1 px-2 rounded capitalize text-white bg-primary-blue"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                university.city.name_en +
                                "-" +
                                university.country.code_iso
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                university.city.name_fr +
                                "-" +
                                university.country.code_iso
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                university.city.name_es +
                                "-" +
                                university.country.code_iso
                            }}</span>
                            <span v-else>{{
                                university.country.name_pt +
                                "-" +
                                university.country.code_iso
                            }}</span>
                        </a>
                        <router-link
                            :to="{
                                name: 'show.university',
                                params: { id: university.id },
                            }"
                            href="#"
                            class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
                            >{{
                                university.name.length <= 30
                                    ? university.name
                                    : university.name.substring(0, 27) + "..."
                            }}</router-link
                        >
                        <p
                            class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                            {{
                                university.description.substring(0, 19) + "..."
                            }}
                        </p>
                    </div>

                    <div class="flex items-center justify-between mt-4 text-sm">
                        <router-link
                            :to="{
                                name: 'show.university',
                                params: { id: university.id },
                            }"
                            class="text-blue-600 dark:text-blue-400 hover:underline"
                            >{{ $t("read-more") }}</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="loading == 1" class="p-28">
            <svg
                class="animate-spin h-16 w-16 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                ></circle>
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        </div>
        <div
            v-else
            class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
        >
            <EmojiSadIcon class="h-16 w-16" />
            <span class="text-2xl mt-2">{{ $t("no-content") }} </span>
        </div>
        <div class="flex justify-center" v-if="universities.length > 8">
            <button
                @click="toogleShowAllU()"
                class="flex justify-start text-sm items-center text-primary-blue hover:underline"
            >
                <ChevronUpIcon v-if="showAllU" class="w-5 h-5" />
                <span v-if="showAllU">{{ $t("hide-more") }}</span>
                <ChevronDownIcon v-if="!showAllU" class="w-5 h-5" />
                <span v-if="!showAllU">{{ $t("show-more") }}</span>
            </button>
        </div>
    </div>
    <h1
        class="text-5xl text-primary-blue text-center py-2 capitalize font-bold"
    >
        {{ $t("ads") }}
    </h1>
    <div class="py-8 lg:px-16">
        <div
            class="grid lg:grid-cols-3 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow mt-4"
        >
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700 dark:text-gray-200">{{
                    $t("key-words")
                }}</label>
                <input
                    type="text"
                    v-model="filterAds.searchKey"
                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                />
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{
                    $t("univerities")
                }}</label>
                <select
                    v-model="filterAds.university"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
                    <option
                        v-for="university in universities"
                        :key="university.id"
                        :value="university.id"
                    >
                        {{ university.name }}
                    </option>
                </select>
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{
                    $t("category")
                }}</label>
                <select
                    v-model="filterAds.category"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{
                    $t("continent")
                }}</label>
                <select
                    v-model="filterAds.continent"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{
                    $t("country")
                }}</label>
                <select
                    v-model="filterAds.country"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
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
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{ $t("city") }}</label>
                <select
                    v-model="filterAds.city"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
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
        <div class="p-2 bg-primary-blue shadow"></div>
        <div class="flex justify-end py-4">
            <router-link
                :to="{
                    name: 'add.ads',
                }"
                v-if="user.type == 'particular' || user.type == 'admin'"
                class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
            >
                <PlusCircleIcon class="w-6 h-6" />
                <p class="text-base leading-4">
                    {{ $t("add") }} {{ $t("ads") }}
                </p>
            </router-link>
        </div>
        <div class="py-8 px-10">
            <div
                class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-10 py-8"
                v-if="filteredAnnouncement.length != 0"
            >
                <div
                    class="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
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
                            class="object-cover w-full h-48 mt-2 rounded-t-lg"
                            v-if="announcement.image"
                            :src="announcement.image"
                            :alt="announcement.title"
                        />
                        <div
                            v-else
                            class="overflow-hidden w-full h-48 mt-2 rounded-t-lg bg-gray-50 py-10"
                        >
                            <SpeakerphoneIcon
                                class="h-full w-full text-gray-500"
                            />
                        </div>
                    </router-link>
                    <div class="px-4 py-2 space-y-2">
                        <a
                            href="#"
                            class="text-xs py-1 px-2 mt-2 rounded capitalize text-white bg-primary-blue"
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
                                class="text-2xl font-bold text-gray-800 capitalize hover:underline"
                            >
                                {{
                                    announcement.title.length <= 20
                                        ? announcement.title
                                        : announcement.title.substring(0, 19) +
                                          "..."
                                }}
                            </h1>
                        </router-link>

                        <p
                            class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                            {{
                                announcement.description.substring(0, 19) +
                                "..."
                            }}
                        </p>
                    </div>
                    <div
                        class="flex items-center justify-between px-4 py-2 bg-gray-900 h-10"
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
                            class="flex items-center text-xs space-x-2 text-white"
                        >
                            <div class="flex space-x-1">
                                <UserIcon class="h-4 w-4" />
                                <router-link
                                    :to="{
                                        name: 'compte',
                                        params: {
                                            name: announcement.user.firstname,
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
                            <div class="hidden lg:flex space-x-1">
                                <CalendarIcon class="h-4 w-4" />
                                <a href="#" class="hover:text-primary-blue">{{
                                    announcement.date
                                }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">{{ $t("no-content") }} </span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import {
    EmojiSadIcon,
    UserIcon,
    CalendarIcon,
    PlusCircleIcon,
    SpeakerphoneIcon,
    ChevronUpIcon,
    ChevronDownIcon,
} from "@heroicons/vue/solid";
import useUniversities from "../../services/universityServices.js";
import useAnnouncements from "../../services/announcementServices.js";
import usecategoryAnnouncements from "../../services/categoryAnnouncementServices.js";
import useContinents from "../../services/continentServices.js";
import useCountries from "../../services/countryServices.js";
import useCities from "../../services/cityServices.js";
export default {
    components: {
        EmojiSadIcon,
        UserIcon,
        CalendarIcon,
        PlusCircleIcon,
        SpeakerphoneIcon,
        ChevronUpIcon,
        ChevronDownIcon,
    },
    setup(props) {
        const {
            universities,
            minUniversities,
            getUniversities,
            loading,
            errors,
        } = useUniversities();
        const { announcements, getAnnouncements } = useAnnouncements();
        const { continents, getContinents } = useContinents();
        const { countries, getCountries } = useCountries();
        const { categoryAnnouncements, getCategoryAnnouncements } =
            usecategoryAnnouncements();
        const { cities, getCities } = useCities();
        const user = localStorage.user ? JSON.parse(localStorage.user) : "";
        const showAllU = ref(false);
        onMounted(
            getUniversities(),
            getAnnouncements(),
            getContinents(),
            getCountries(),
            getCategoryAnnouncements(),
            getCities()
        );
        const filterAds = reactive({
            searchKey: "",
            university: "",
            category: "",
            country: "",
            continent: "",
            city: "",
        });
        const filterUniversity = reactive({
            country: "",
            continent: "",
            city: "",
            searchKey: "",
        });
        const toogleShowAllU = () => {
            showAllU.value = !showAllU.value;
        };

        return {
            showAllU,
            toogleShowAllU,
            minUniversities,
            cities,
            continents,
            countries,
            categoryAnnouncements,
            filterUniversity,
            filterAds,
            user,
            universities,
            announcements,
            loading,
            errors,
        };
    },

    computed: {
        filteredAnnouncement() {
            return this.announcements.filter((announcement) => {
                let data = "";
                if (
                    this.filterAds.country != "" &&
                    this.filterAds.continent != "" &&
                    this.filterAds.city != "" &&
                    this.filterAds.university != "" &&
                    this.filterAds.category != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id ==
                            this.filterAds.city &&
                        announcement.university.country.id ==
                            this.filterAds.country &&
                        announcement.university.continent.id ==
                            this.filterAds.continent &&
                        announcement.category.id == this.filterAds.category &&
                        announcement.university.id == this.filterAds.university;
                else if (
                    this.filterAds.country != "" &&
                    this.filterAds.continent != "" &&
                    this.filterAds.city != "" &&
                    this.filterAds.university != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id ==
                            this.filterAds.city &&
                        announcement.university.country.id ==
                            this.filterAds.country &&
                        announcement.university.continent.id ==
                            this.filterAds.continent &&
                        announcement.university.id == this.filterAds.university;
                else if (
                    this.filterAds.continent != "" &&
                    this.filterAds.city != "" &&
                    this.filterAds.university != "" &&
                    this.filterAds.category != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id ==
                            this.filterAds.city &&
                        announcement.university.continent.id ==
                            this.filterAds.continent &&
                        announcement.category.id == this.filterAds.category &&
                        announcement.university.id == this.filterAds.university;
                else if (
                    this.filterAds.continent != "" &&
                    this.filterAds.city != "" &&
                    this.filterAds.university != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id ==
                            this.filterAds.city &&
                        announcement.university.continent.id ==
                            this.filterAds.continent &&
                        announcement.university.id == this.filterAds.university;
                else if (
                    this.filterAds.country != "" &&
                    this.filterAds.continent != "" &&
                    this.filterAds.city != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id ==
                            this.filterAds.city &&
                        announcement.university.country.id ==
                            this.filterAds.country &&
                        announcement.university.continent.id ==
                            this.filterAds.continent;
                else if (
                    this.filterAds.city != "" &&
                    this.filterAds.university != "" &&
                    this.filterAds.category != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id ==
                            this.filterAds.city &&
                        announcement.category.id == this.filterAds.category &&
                        announcement.university.id == this.filterAds.university;
                else if (
                    this.filterAds.city != "" &&
                    this.filterAds.university != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id ==
                            this.filterAds.city &&
                        announcement.university.id == this.filterAds.university;
                else if (
                    this.filterAds.country != "" &&
                    this.filterAds.continent != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.country.id ==
                            this.filterAds.country &&
                        announcement.university.continent.id ==
                            this.filterAds.continent;
                else if (
                    this.filterAds.continent != "" &&
                    this.filterAds.city != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id ==
                            this.filterAds.city &&
                        announcement.university.continent.id ==
                            this.filterAds.continent;
                else if (
                    this.filterAds.university != "" &&
                    this.filterAds.category != ""
                )
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.category.id == this.filterAds.category &&
                        announcement.university.id == this.filterAds.university;
                else if (this.filterAds.country != "")
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.country.id ==
                            this.filterAds.country;
                else if (this.filterAds.city != "")
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.city.id == this.filterAds.city;
                else if (this.filterAds.continent != "")
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.continent.id ==
                            this.filterAds.continent;
                else if (this.filterAds.university != "")
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.university.id == this.filterAds.university;
                else if (this.filterAds.category != "")
                    data =
                        announcement.title
                            .toLowerCase()
                            .includes(this.filterAds.searchKey.toLowerCase()) &&
                        announcement.category.id == this.filterAds.category;
                else
                    data = announcement.title
                        .toLowerCase()
                        .includes(this.filterAds.searchKey.toLowerCase());
                return data;
            });
        },
        filteredUniversity() {
            if (
                this.filterUniversity.searchKey != "" ||
                this.filterUniversity.country != "" ||
                this.filterUniversity.continent != "" ||
                this.filterUniversity.city != ""
            ) {
                return this.universities.filter((university) => {
                    let data = "";
                    if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.continent != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.continent.id ==
                                this.filterUniversity.continent &&
                            university.city.id == this.filterUniversity.city;
                    else if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.continent != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.continent.id ==
                                this.filterUniversity.continent;
                    else if (
                        this.filterUniversity.continent != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.continent.id ==
                                this.filterUniversity.continent &&
                            university.city.id == this.filterUniversity.city;
                    else if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.city.id == this.filterUniversity.city;
                    else if (this.filterUniversity.country != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country;
                    else if (this.filterUniversity.city != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.city.id == this.filterUniversity.city;
                    else if (this.filterUniversity.continent != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.continent.id ==
                                this.filterUniversity.continent;
                    else
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) && university;
                    return data;
                });
            } else if (this.showAllU) {
                return this.universities.filter((university) => {
                    let data = "";
                    if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.continent != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.continent.id ==
                                this.filterUniversity.continent &&
                            university.city.id == this.filterUniversity.city;
                    else if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.continent != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.continent.id ==
                                this.filterUniversity.continent;
                    else if (
                        this.filterUniversity.continent != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.continent.id ==
                                this.filterUniversity.continent &&
                            university.city.id == this.filterUniversity.city;
                    else if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.city.id == this.filterUniversity.city;
                    else if (this.filterUniversity.country != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country;
                    else if (this.filterUniversity.city != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.city.id == this.filterUniversity.city;
                    else if (this.filterUniversity.continent != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.continent.id ==
                                this.filterUniversity.continent;
                    else
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) && university;
                    return data;
                });
            } else {
                return this.minUniversities.filter((university) => {
                    let data = "";
                    if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.continent != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.continent.id ==
                                this.filterUniversity.continent &&
                            university.city.id == this.filterUniversity.city;
                    else if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.continent != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.continent.id ==
                                this.filterUniversity.continent;
                    else if (
                        this.filterUniversity.continent != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.continent.id ==
                                this.filterUniversity.continent &&
                            university.city.id == this.filterUniversity.city;
                    else if (
                        this.filterUniversity.country != "" &&
                        this.filterUniversity.city != ""
                    )
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country &&
                            university.city.id == this.filterUniversity.city;
                    else if (this.filterUniversity.country != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.country.id ==
                                this.filterUniversity.country;
                    else if (this.filterUniversity.city != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.city.id == this.filterUniversity.city;
                    else if (this.filterUniversity.continent != "")
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) &&
                            university.continent.id ==
                                this.filterUniversity.continent;
                    else
                        data =
                            university.name
                                .toLowerCase()
                                .includes(
                                    this.filterUniversity.searchKey.toLowerCase()
                                ) && university;
                    return data;
                });
            }
        },
    },
};
</script>
