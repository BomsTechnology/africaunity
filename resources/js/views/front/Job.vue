<template>
    <Header />
    <h1 class="text-5xl text-primary-blue text-center py-4 capitalize font-bold">{{ $t('jobs') }}</h1>
    <div class=" py-8 lg:px-16 px-6">
        <div class="p-8 h-20 bg-gray-100">

        </div>
        <div class="p-2 bg-primary-blue"></div>
        <div class="flex justify-end px-6 py-4" v-if="(user.type != 'particular' && user.type != 'business1')">
                <router-link
                    :to="{
                        name: 'add.job',
                    }"
                    class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">{{ $t('add') }} Job</p>
                </router-link>
            </div>
        <div v-if="jobOffers.length != 0" class="text-lg">

            <div 
                v-for="jobOffer in jobOffers"
                :key="jobOffer.id"
                >
                <router-link 
                :to="{
                    name: 'show.job',
                    params: { id: jobOffer.id },
                    }"
                    class="flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"
                >
                    <div class="flex items-center space-x-4 ">
                        <div class="hidden lg:block">
                            <img v-if="jobOffer.company_logo" :src="jobOffer.company_logo" alt="" class="w-16 h-16 object-cover">
                            <OfficeBuildingIcon v-else class="w-16 h-16 text-gray-500" />
                        </div>
                        <div>
                            <h1 class="capitalize">{{ jobOffer.title }}</h1>
                            <h2 class="font-bold capitalize text-gray-500">{{ jobOffer.company_name }}</h2>
                        </div>
                        <div class="hidden lg:flex space-x-4 font-light justify-start capitalize text-gray-500">
                            <h1 class="flex items-center justify-center space-x-2">
                                <LocationMarkerIcon class="w-5 h-5" />
                                <span>
                                    {{ jobOffer.location }}
                                </span>
                            </h1>
                            <h2 class="flex items-center justify-start space-x-2">
                                <CashIcon class="w-5 h-5" />
                                <span>
                                    {{ jobOffer.min_price + jobOffer.currency.symbol }} - {{ jobOffer.max_price + jobOffer.currency.symbol }}
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div class="">
                        <h2 class="font-bold capitalize text-primary-blue">
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
                        </h2>
                        <h1 class="capitalize">Publié le: {{ jobOffer.date }}</h1>
                    </div>
                </router-link>
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
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { OfficeBuildingIcon, EmojiSadIcon , LocationMarkerIcon, PlusCircleIcon, CashIcon} from "@heroicons/vue/solid";
import useJobOffers from "../../services/jobOfferServices.js";
import { reactive, ref, onMounted} from "vue";
import router from "../../router";
export default {
    components:{
        Header,
        Footer,
        OfficeBuildingIcon,
        LocationMarkerIcon,
        PlusCircleIcon,
        EmojiSadIcon,
        CashIcon
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login", params: { redirect: 'not-login' }, });
        }
    },
    setup(props) {
        const { jobOffers, getJobOffers, loading, errors } = useJobOffers();
        const user = JSON.parse(localStorage.user);
        onMounted(getJobOffers());

        return{
            user,
            jobOffers,
            loading,
        }
    },
}
</script>
