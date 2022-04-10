<template>
    <Header />
    <div
        class="flex lg:flex-row flex-col p-4 lg:space-x-2 md:space-y-2 text-lg"
    >
        <div class="lg:w-[65%]">
            <div class="py-6 px-4" v-if="jobOffer.length != 0">
                <div 
                    class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                    <!-- Job -->
                    <div class="px-4 flex space-x-4 items-center">
                        <img v-if="jobOffer.company_logo" :src="jobOffer.company_logo" alt="" class="w-28 h-28 object-cover">
                        <OfficeBuildingIcon v-else class="w-28 h-28 text-gray-500" />
                        <span class="text-4xl font-bold text-gray-700">
                            {{ jobOffer.company_name }}
                        </span>
                    </div>   
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="text-sm py-1 px-2 rounded capitalize text-white bg-primary-blue"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.offer_type.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.offer_type.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.offer_type.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.offer_type.name_pt }}</span>
                            </a>
                            <h1
                                class="block mt-2 text-3xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"
                            >
                                {{ jobOffer.title }}
                            </h1>
                            <div class="flex text-xs space-x-2 mt-2 text-gray-500">
                                <div class="flex space-x-1">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ jobOffer.date }}</a
                                    >
                                </div>
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <router-link :to="{name:'compte',  params: { name: jobOffer.user.firstname, id : jobOffer.user.id }}"
                                        href="#"
                                        class="hover:text-primary-blue"
                                        >{{ jobOffer.user.firstname }}</router-link 
                                    >
                                </div>
                            </div>
                            <p
                                class="mt-2 py-4 my-4 text-gray-600 dark:text-gray-400"
                            >
                                {{ jobOffer.description }}
                            </p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <router-link  :to="{name:'compte',  params: { name: jobOffer.user.firstname, id : jobOffer.user.id }}" class="flex items-center">
                                        <img   
                                            v-if="jobOffer.user.avatar"                       
                                            class="object-cover h-10 rounded-full"
                                            :src="jobOffer.user.avatar"
                                        />
                                    
                                    <UserCircleIcon
                                        v-else
                                        class="h-10 w-10 text-gray-700"
                                    />
                                    <span
                                        class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                                        >{{ jobOffer.user.firstname }}</span
                                    >
                                    </router-link>
                                
                                <div class="flex items-center">
                                    <div
                                        class="ml-3"
                                        v-if="user.id == jobOffer.user.id"
                                    >
                                        <router-link
                                :to="{
                                    name: 'edit.job',
                                    params: { id: jobOffer.id},
                                }">
                                        <PencilAltIcon
                                            class="h-5 w-5 text-gray-400 cursor-pointer hover:text-primary-blue"
                                        />
                                        </router-link>
                                    </div>
                                </div>
                            </div>
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
                <span class="text-2xl mt-2">{{ $t('no-content') }}</span>
            </div>
        </div>
        <div class="lg:w-[35%] bg-white py-5">
            <div class="shadow rounded-md py-5 px-10 space-y-3 ">
                <h1 class="text-2xl text-primary-blue  font-bold">Job Détails</h1>
                <div class="grid lg:grid-cols-2 gap-4 ">
                    <div class="text-gray-500 flex items-center space-x-2 ">   
                        <GlobeIcon class="h-8 w-8" /> 
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.continent.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.continent.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.continent.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.continent.name_pt }}</span>  
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">   
                        <MapIcon class="h-8 w-8" /> 
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.zone.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.zone.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.zone.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.zone.name_pt }}</span>
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">   
                        <FlagIcon class="h-8 w-8" /> 
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.country.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.country.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.country.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.country.name_pt }}</span>
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">   
                        <OfficeBuildingIcon class="h-8 w-8" /> 
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.city.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.city.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.city.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.city.name_pt }}</span>
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">   
                        <BriefcaseIcon class="h-8 w-8" /> 
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.work_department.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.work_department.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.work_department.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.work_department.name_pt }}</span>
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">   
                        <DesktopComputerIcon class="h-8 w-8" /> 
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.work_mode.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.work_mode.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.work_mode.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.work_mode.name_pt }}</span>
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 "> 
                        <LocationMarkerIcon class="h-8 w-8" /> 
                        <span>
                            {{ jobOffer.location }}
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">  
                        <MailIcon class="h-8 w-8" /> 
                        <span>
                            {{ jobOffer.company_email }}
                        </span> 
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">  
                        <AcademicCapIcon class="h-8 w-8" /> 
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.year_experience.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.year_experience.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.year_experience.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.year_experience.name_pt }}</span> 
                        </span> 
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">  
                        <TemplateIcon class="h-8 w-8" /> 
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                jobOffer.size_company.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                jobOffer.size_company.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                jobOffer.size_company.name_es
                            }}</span>
                            <span v-else>{{ jobOffer.size_company.name_pt }}</span> 
                        </span> 
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.company_website"> 
                        <GlobeAltIcon class=" h-8 w-8" /> 
                        <span>
                            {{ jobOffer.company_website }} 
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 ">
                        <CashIcon class=" h-8 w-8" /> 
                        <span>
                            {{ jobOffer.min_price + jobOffer.currency.symbol }} - {{ jobOffer.max_price + jobOffer.currency.symbol }} 
                        </span>
                    </div>
                </div>
                <div class="text-gray-500 flex items-center space-x-2 ">   
                    <TranslateIcon class=" h-8 w-8" /> 
                    <span>
                        <ul class="py-1 flex space-x-2">
                                <li v-for="lang in jobOffer.languages" :key="lang.id">
                                    <span v-if="$i18n.locale == 'en'">{{
                                        lang.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        lang.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        lang.name_es
                                    }}</span>
                                    <span v-else>{{ lang.name_pt }}</span>
                                </li>
                            </ul> 
                    </span>
                </div>
            </div>
            <!-- <div class="shadow rounded-md py-5 mt-4">
                <Error v-if="errors != ''">{{ errors }}</Error>
                    <form @submit.prevent="">
                        <div class="px-8">
                            <label class="text-xl text-primary-blue  font-bold" for="pt">Contactez le lanceur d'annonce <span class="text-red-500">*</span></label>
                            <textarea  required type="text"  id="pt" class="block w-full px-4 py-2 mt-2 text-gray-700 h-60 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                            <div class="mt-6">
                                <input type="hidden">
                                <button v-if="loadingC == 0" type="submit" class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-primary-blue focus:outline-none">Envoyer</button>
                                <button v-if="loadingC == 1" type="submit" disabled class="px-6 py-4 text-md leading-5 flex justify-center items-center w-full text-white rounded bg-blue-300 focus:outline-none">
                                    {{ $t('save') }}...
                                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                </button>
                            </div>
                        </div>
                    </form>
            </div> -->
        </div>
    </div>
    <Footer />
</template>

<script>
import router from "../../router";
import { reactive, ref, onMounted } from "vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Error from "../../components/Error.vue";
import {
    DesktopComputerIcon,
    GlobeAltIcon,
    TemplateIcon,
    AcademicCapIcon,
    TranslateIcon,
    MapIcon,
    FlagIcon,
    PlusCircleIcon,
    CalendarIcon,
    UserCircleIcon,
    EmojiSadIcon,
    LocationMarkerIcon,
    PencilAltIcon,
    UserIcon,
    MailIcon,
    PhoneIcon,
    GlobeIcon,
    CashIcon,
    BriefcaseIcon,
    OfficeBuildingIcon
} from "@heroicons/vue/solid";
import useJobOffers from "../../services/jobOfferServices.js";
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    components: {
        DesktopComputerIcon,
        GlobeAltIcon,
        TemplateIcon,
        AcademicCapIcon,
        TranslateIcon,
        MapIcon,
        FlagIcon,
        UserIcon,
        OfficeBuildingIcon,
        PlusCircleIcon,
        LocationMarkerIcon,
        CalendarIcon,
        EmojiSadIcon,
        UserCircleIcon,
        PencilAltIcon,
        Header,
        Footer,
        Error,
        MailIcon,
        PhoneIcon,
        GlobeIcon,
        CashIcon,
        BriefcaseIcon
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login", params: { redirect: 'not-login' }, });
        }
    },
    setup(props) {
        const { jobOffer, getJobOffer, loading, errors } = useJobOffers();
        const user = JSON.parse(localStorage.user);
        const loadingC = ref(0);
        onMounted(
            getJobOffer(props.id)  
        );

        
        return {
            loading,
            errors,
            jobOffer,
            user,
            loadingC
        };
    },
};
</script>
