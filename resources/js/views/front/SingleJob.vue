<template>
    <Header />
    <Apply :toogleModal="()=>{openApply = false}" :open="openApply" :id="id" />
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
                                            class="object-cover h-16 w-16 shadow rounded-full"
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

                        <div class="px-2 flex items-center space-x-3 py-4">
                            <!-- facebook icons -->
                            <!-- <a :href="'https://www.facebook.com/sharer/sharer.php?u='+url" data-network="facebook" target="_blank" rel="noopener noreferrer">
                                <svg fill="#3b5998" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" class="h-6 w-6"><path d="M27,15c0,6.627-5.373,12-12,12S3,21.627,3,15S8.373,3,15,3S27,8.373,27,15z M19.181,8.131C18.877,8.09,18.235,8,17.021,8 C14.486,8,13,9.339,13,12.389V14h-3v3h3v7.799C13.646,24.93,14.315,25,15,25c0.338,0,0.671-0.018,1-0.05V17h2.726l0.428-3H16 v-1.282C16,11.568,16.376,11,17.452,11h1.729V8.131z"/></svg>
                            </a> -->
                            <!-- wathsapp icons -->
                            <a :href="'whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you '+url" >
                                <svg fill="#25D366" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" class="h-6 w-6">    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"/></svg>
                            </a>
                            <!-- twitter icon -->
                            <!-- <a :href="'https://twitter.com/intent/tweet?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you&url='+url" data-network="twitter" target="_blank">
                                <svg fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" class="h-6 w-6">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
                            </a> -->
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
                <h1 class="text-2xl text-primary-blue  font-bold">Job {{ $t('details') }}</h1>
                <div class="text-gray-500 flex items-center space-x-2 text-sm">  
                        <MailIcon class="h-6 w-6" /> 
                        <span>
                            {{ jobOffer.company_email }}
                        </span> 
                    </div>
                <div class="grid lg:grid-cols-2 gap-2 text-sm">
                    <div class="text-gray-500 flex items-center space-x-2" v-if="jobOffer.continent">   
                        <GlobeIcon class="h-6 w-6" /> 
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
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.zone">   
                        <MapIcon class="h-6 w-6" /> 
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
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.country">   
                        <FlagIcon class="h-6 w-6" /> 
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
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.city">   
                        <OfficeBuildingIcon class="h-6 w-6" /> 
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
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.work_department">   
                        <BriefcaseIcon class="h-6 w-6" /> 
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
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.work_mode">   
                        <DesktopComputerIcon class="h-6 w-6" /> 
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
                        <LocationMarkerIcon class="h-6 w-6" /> 
                        <span>
                            {{ jobOffer.location }}
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.year_experience">  
                        <AcademicCapIcon class="h-6 w-6" /> 
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
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.size_company">  
                        <TemplateIcon class="h-6 w-6" /> 
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
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.company_website && jobOffer.company_website != 'null'"> 
                        <GlobeAltIcon class=" h-6 w-6" /> 
                        <span>
                            {{ jobOffer.company_website }} 
                        </span>
                    </div>
                    <div class="text-gray-500 flex items-center space-x-2 " v-if="jobOffer.currency">
                        <CashIcon class=" h-6 w-6" /> 
                        <span>
                            {{ jobOffer.min_price + jobOffer.currency.symbol }} - {{ jobOffer.max_price + jobOffer.currency.symbol }} 
                        </span>
                    </div>
                </div>
                
                <div class="text-gray-500 flex items-center space-x-2 text-sm">   
                    <TranslateIcon class=" h-6 w-6" /> 
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
                <div v-if="user.type == 'particular'">
                    <button type="button" @click="toogleModal()" class="px-3 py-2 bg-primary-blue w-full text-white rounded">
                        {{ $t('apply') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import router from "../../router";
import { reactive, ref, onMounted, onBeforeMount } from "vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Error from "../../components/Error.vue";
import Apply from "../../components/Apply.vue";
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

const openApply = ref(false);
const { jobOffer, getJobOffer, loading, errors } = useJobOffers();
const user = localStorage.user ? JSON.parse(localStorage.user) : '';
const loadingC = ref(0);
const url = window.location.href;
const props = defineProps({
    id: String
})
onBeforeMount
(
    async () => {
        await getJobOffer(props.id)
    }
);
const toogleModal = () => {
    openApply.value = !openApply.value;
}
</script>
