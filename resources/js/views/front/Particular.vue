<template>
    <div class="mx-auto min-h-screen w-full bg-white xl:w-[90%]">
    <h1
        class="text-5xl text-primary-blue py-2 text-center capitalize font-bold"
    >
        {{ $t("particular") }}
    </h1>
    <div class="pb-8 lg:px-16">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow mt-4">
            <div
                class="lg:text-sm text-xs">
                <label class="text-gray-700 dark:text-gray-200">{{ $t('firstname') }} </label>
                <input
                    type="text"
                    v-model="filter.searchKey"
                    class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                />
            </div>
            <div
                class="lg:text-sm text-xs">
                <label class="text-gray-700 dark:text-gray-200"> {{ $t('email') }}</label>
                <input
                    type="text"
                    v-model="filter.email"
                    class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                />
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700 dark:text-gray-200">{{ $t('status') }}</label>
                <select v-model="filter.status"  class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
                    <option v-for="st in status" :value="st.id" :key="st.id"><span v-if="$i18n.locale == 'en'">{{
                                st.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                st.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                st.name_es
                            }}</span>
                            <span v-else>{{ st.name_pt }}</span></option>
                </select>
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{ $t('native-country') }}</label>
                <SelectFilter
                        v-model="filter.native_country"
                        :data="countries"
                        :placeholder="'Select Country'"
                        :required="false"
                        :resetField="true"

                        :className="'form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue'"
                    />
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{ $t('residence-country') }}</label>
                 <SelectFilter
                        v-model="filter.residence_country"
                        :data="countries"
                        :placeholder="'Select Country'"
                        :required="false"
                        :resetField="true"
                        :className="'form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue'"
                    />
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700 dark:text-gray-200">
                    {{ $t('activity-area') }}
                </label>
                <select 
                    v-model="filter.activity_area"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
                    <option v-for="activity in activityAreas" :key="activity.id" :value="activity.id">
                        <span v-if="$i18n.locale == 'en'">{{
                                activity.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                activity.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                activity.name_es
                            }}</span>
                            <span v-else>{{ activity.name_pt }}</span>
                    </option>
                </select>
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700">{{ $t('speak-language') }} </label>
                <select v-model="filter.language"   class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
                    <option v-for="language in languages" :key="language.id" :value="language.id">
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
            <div class=" text-xs lg:text-sm">
                <label class="text-gray-700 opacity-0 ">{{ $t('search') }} </label>
                    <button
                        type="button"
                        @click="usersFilter()"
                        class="w-full rounded-md mt-1 bg-primary-blue px-4 py-2.5 text-white"
                    >
                        {{ $t("search") }}
                    </button>
                </div>
        </div>
        <div class="p-2 bg-primary-blue shadow"></div>
        <div v-if="loading == 3">
            <Profile />
        </div>
        <div
            ref="userContainer"
            class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10 py-8"
            v-else-if="users.length != 0"
        >
            <div
                v-for="user in users"
                :key="user.id"
                class="flex flex-col items-center py-2 text-center space-y-5 dark:bg-gray-800 border"
            >
                    <router-link   :to="{name:'compte',  params: { slug: user.slug, id : user.id }}" class="flex justify-center flex-col items-center">
                    <img
                        class="object-cover lg:h-44 lg:w-44 rounded-full h-36 w-36"
                        :src="user.avatar"
                        v-if="user.avatar"
                    />
                    <UserCircleIcon v-else class="lg:h-44 lg:w-44 h-36 w-36 text-gray-700" />

                    <h4
                        class="text-gray-700 font-bold capitalize dark:text-gray-300"
                    >
                        {{ user.firstname }} {{ user.lastname }}
                    </h4>
                    </router-link>

                    <button @click="changeShowDetail(user.id)" class="mt-2" v-if="showDetail.id != user.id">
                        <ChevronDownIcon class="h-8 w-8 text-gray-500" />
                    </button>
                <div class="text-center border-t w-full py-3 space-y-3 text-xs" v-if="showDetail.id == user.id && showDetail.state == true">
                    <p class="leading-3">
                        <h1 class="font-semibold text-sm">{{ $t('status') }}</h1>
                        <h2 class="font-light" v-if="user.detail.status">
                           <span v-if="$i18n.locale == 'en'">{{
                                user.detail.status.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                user.detail.status.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                user.detail.status.name_es
                            }}</span>
                            <span v-else>{{ user.detail.status.name_pt }}</span>
                        </h2>
                    </p>

                    <p class="leading-3">
                        <h1 class="font-semibold text-sm">{{ $t('adresse') + ' ' + $t('email') }}</h1>
                        <h2 class="font-light text-primary-blue">
                            {{ user.email }}
                        </h2>
                    </p>

                    <p class="leading-3" v-if="user.detail.native_country">
                        <h1 class="font-semibold text-sm">{{ $t('native-country') }}</h1>
                        <h2 class="font-light">
                            <span v-if="$i18n.locale == 'en'">{{
                                user.detail.country_native.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                user.detail.country_native.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                user.detail.country_native.name_es
                            }}</span>
                            <span v-else>{{ user.detail.country_native.name_pt }}</span>
                        </h2>
                    </p>

                    <p class="leading-3" v-if="user.detail.residence_country">
                        <h1 class="font-semibold text-sm">{{ $t('residence-country') }}</h1>
                        <h2 class="font-light">
                            <span v-if="$i18n.locale == 'en'">{{
                                user.detail.country_residence.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                user.detail.country_residence.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                user.detail.country_residence.name_es
                            }}</span>
                            <span v-else>{{ user.detail.country_residence.name_pt }}</span>
                        </h2>
                    </p>

                    <p class="leading-3" v-if="user.detail.languages.length != 0">
                        <h1 class="font-semibold text-sm">{{ $t('speak-language') }}</h1>
                        <h2 class="font-light" v-for="language in languages" :key="language.id">
                            <span v-for="lang in user.detail.languages" :key="lang.id">
                                <span v-if="lang.id === language.id">
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
                                </span>
                            </span>
                        </h2>
                    </p>

                    <p class="leading-3" v-if="user.detail.activity_areas.length != 0">
                        <h1 class="font-semibold text-sm">{{ $t('activity-area') }}</h1>
                        <h2 class="font-light" v-for="activityArea in activityAreas" :key="activityArea.id">
                            <span v-for="activity_area in user.detail.activity_areas" :key="activity_area.id">
                                <span v-if="activity_area.id === activityArea.id">
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
                                </span>
                            </span>
                        </h2>
                    </p>

                    <button class="mt-2" @click="removeShowDetail()">
                        <ChevronUpIcon class="h-8 w-8 text-gray-500" />
                    </button>

                </div>
                

            </div>
        </div>
        <div v-if="loading == 1">
            <Profile />
        </div>
        <div
           v-if="users.length == 0 && loading != 1"
            class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
        >
            <FaceFrownIcon class="h-16 w-16" />
            <span class="text-2xl mt-2">{{ $t("no-content") }} </span>
        </div>
    </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed, onUnmounted } from "vue";
import { FaceFrownIcon, UserCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid';
import useUsers from "@/services/userServices.js";
import useLanguages from "@/services/languageServices.js";
import useActivityAreas from "@/services/activityAreaServices.js";

import useCountries from "@/services/countryServices.js";
import Profile from "@/components/skeleton/Profile.vue";
import useStatus from "@/services/statusServices.js";
const {
    status,
    getStatus,
    errorsStatus,
} = useStatus();
const { languages, getLanguages } = useLanguages();
const { countries, getCountries } = useCountries();
const { activityAreas, getActivityAreas } = useActivityAreas();
const { users, getUsersType, filterUsers, page, isAll, loading } = useUsers();
 const userContainer = ref(null);
const toGet = ref(true);
onMounted(async () => {
    window.addEventListener("scroll", handleScroll);
    await getUsersType("particular"); 
    await getStatus();
    await getLanguages(); 
    await getCountries(); 
    await getActivityAreas();
});
onUnmounted(async () => {
    page.value = 1;
    window.removeEventListener("scroll", handleScroll);
});

const handleScroll = async (e) => {
    if(userContainer.value){let element = userContainer.value;
    if (
        element.getBoundingClientRect().bottom < window.innerHeight  &&
        toGet.value &&
        !isAll.value && (
    filter.searchKey == "" &&
    filter.email == "" &&
    filter.native_country == "" &&
    filter.status == "" &&
    filter.residence_country == "" &&
    filter.language == "" &&
    filter.activity_area == "" 
    )
    ) {
        toGet.value = false;
        page.value++;
        await getUsersType("particular");
        toGet.value = true;
    }}
};
const filter = reactive({
    searchKey:"",
    email:"",
    native_country:"",
    status: "",
    residence_country:"",
    language:"",
    activity_area:"",
    type: "particular"
});
const showDetail = reactive({
    id: "",
    state: false
});
const changeShowDetail = (id) => {
    showDetail.id = id;
    showDetail.state = true;
};
const removeShowDetail = () => {
    showDetail.id = '';
    showDetail.state = false;
};
const usersFilter = async () => {
    if(
    filter.searchKey != "" ||
    filter.email != "" ||
    filter.native_country != "" ||
    filter.status != "" ||
    filter.residence_country != "" ||
    filter.language != "" ||
    filter.activity_area != "" 
    ){await filterUsers({...filter});}else{
        page.value = 1;
        isAll.value = false;
        await getUsersType("particular");
    }
}


</script>
