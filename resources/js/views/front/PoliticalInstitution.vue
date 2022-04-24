<template>
    <Header />
    <h1 class="text-5xl text-primary-blue text-center py-2 capitalize font-bold">{{ $t('ip') }}</h1>
        <div class="pb-8 lg:px-16">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow mt-4">
            <div
                class="lg:text-sm text-xs">
                <label class="text-gray-700 dark:text-gray-200">{{ $t('key-words') }}</label>
                <input
                    type="text"
                    v-model="searchKey"
                    class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                />
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700" for="es">{{ $t('native-country') }}</label>
                <select v-model="filter.native_country" @change.prevent="usersFilter()"  class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                    <option value="">--------------</option>
                    <option v-for="country in countries" :key="country.id" :value="country.id">
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
                <label class="text-gray-700" for="es">{{ $t('residence-country') }}</label>
                <select v-model="filter.residence_country" @change.prevent="usersFilter()"  class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                    <option value="">--------------</option>
                    <option v-for="country in countries" :key="country.id" :value="country.id">
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
                <label class="text-gray-700 dark:text-gray-200">
                    {{ $t('perimetre') }}
                </label>
                <select @change.prevent="usersFilter()" 
                    v-model="filter.business_type"
                    class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
                    <option v-for="businessType in businessTypes" :key="businessType.id" :value="businessType.id">
                        <span v-if="$i18n.locale == 'en'">{{
                            businessType.name_en
                        }}</span>
                        <span v-else-if="$i18n.locale == 'fr'">{{
                            businessType.name_fr
                        }}</span>
                        <span v-else-if="$i18n.locale == 'es'">{{
                            businessType.name_es
                        }}</span>
                        <span v-else>{{ businessType.name_pt }}</span>
                    </option>
                </select>
            </div>
            <div class="lg:text-sm text-xs">
                <label class="text-gray-700">{{ $t('size-institution') }} </label>
                <select v-model="filter.business_size" @change.prevent="usersFilter()"  class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                >
                    <option value="">--------------</option>
                    <option v-for="BusinessSize in businessSizes" :key="BusinessSize.id" :value="BusinessSize.id">
                        <span v-if="$i18n.locale == 'en'">{{
                            BusinessSize.name_en
                        }}</span>
                        <span v-else-if="$i18n.locale == 'fr'">{{
                            BusinessSize.name_fr
                        }}</span>
                        <span v-else-if="$i18n.locale == 'es'">{{
                            BusinessSize.name_es
                        }}</span>
                        <span v-else>{{ BusinessSize.name_pt }}</span>
                    </option>
                </select>
            </div>

        </div>
        <div class="p-2 bg-primary-blue shadow"></div>
        <div
            class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10 py-8"
            v-if="filteredUser.length != 0"
        >
            <div
                v-for="user in filteredUser"
                :key="user.id"
                class="flex flex-col items-center py-2 text-center space-y-5 dark:bg-gray-800 border"
            >
                <router-link   :to="{name:'compte',  params: { name: user.firstname, id : user.id }}" class="flex justify-center flex-col items-center">
                    <img
                        class="object-cover lg:h-44 lg:w-44 rounded-full h-36 w-36"
                        :src="user.avatar"
                        v-if="user.avatar"
                    />
                    <UserCircleIcon v-else class="lg:h-44 lg:w-44 h-36 w-36 text-gray-700" />

                    <h4
                        class="text-gray-700 font-bold capitalize dark:text-gray-300"
                    >
                        {{ user.firstname }}
                    </h4>
                </router-link >
                    <button @click="changeShowDetail(user.id)" class="mt-2" v-if="showDetail.id != user.id">
                        <ChevronDownIcon class="h-8 w-8 text-gray-500" />
                    </button>
                
                <div class="text-center border-t w-full py-3 space-y-3 text-xs" v-if="showDetail.id == user.id && showDetail.state == true">

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

                    <p class="leading-3" v-if="user.detail.business_type_id">
                        <h1 class="font-semibold text-sm">{{ $t('perimetre') }}</h1>
                        <h2 class="font-light">
                                <span v-if="$i18n.locale == 'en'">{{
                                    user.detail.business_type.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    user.detail.business_type.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    user.detail.business_type.name_es
                                }}</span>
                                <span v-else>{{ user.detail.business_type.name_pt }}</span>
                        </h2>
                    </p>

                    <p class="leading-3" v-if="user.detail.business_size_id">
                        <h1 class="font-semibold text-sm">{{ $t('size-institution') }}</h1>
                        <h2 class="font-light">
                            <span v-if="$i18n.locale == 'en'">{{
                                user.detail.business_size.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                user.detail.business_size.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                user.detail.business_size.name_es
                            }}</span>
                            <span v-else>{{ user.detail.business_size.name_pt }}</span>
                        </h2>
                    </p>

                    <button class="mt-2" @click="removeShowDetail()">
                        <ChevronUpIcon class="h-8 w-8 text-gray-500" />
                    </button>

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
    </div>
    <Footer />
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { reactive, ref, onMounted } from "vue";
import { EmojiSadIcon, UserCircleIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import useUsers from "../../services/userServices.js";
import useBusinessTypes from "../../services/businessTypeServices.js";
import useBusinessSizes from "../../services/businessSizeServices.js";
import useCountries from "../../services/countryServices.js";
import router from "../../router";
export default {
    components: {
        UserCircleIcon,
        EmojiSadIcon,
        Header,
        Footer, ChevronDownIcon, ChevronUpIcon
    },
    setup(props) {
        const { businessSizes, getBusinessSizes } = useBusinessSizes();
        const { countries, getCountries } = useCountries();
        const { businessTypes, getBusinessTypes } = useBusinessTypes();
        const { users, getUsersType, filterUsers, errors, loading } = useUsers();
        onMounted(getUsersType("ip"), getBusinessSizes(), getCountries(), getBusinessTypes());
        const searchKey = ref('');
        const filter = reactive({
            native_country:"",
            residence_country:"",
            business_size:"",
            business_type:"",
            type: "ip"
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
            await filterUsers({...filter});
        }

        return {
            usersFilter,
            filter,
            removeShowDetail,
            changeShowDetail,
            showDetail,
            businessTypes,
            countries,
            businessSizes,
            searchKey,
            users,
            errors,
            loading,
        };
    },

    computed: {
        filteredUser() {
            return this.users.filter((user) => {
                return user.firstname
                    .toLowerCase()
                    .includes(this.searchKey.toLowerCase());
            });
        },
    },
    
};
</script>

