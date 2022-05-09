<template>
    <Header />

    <section class="bg-white">
        <div class="container px-6 py-8 mx-auto">
            <div class="text-center">
                    <h2 class="text-4xl uppercase font-bold ">{{ $t("create-account") }}</h2>
                    <p class="mt-4 text-gray-500">{{ $t("register-desc") }}.</p>
            </div>


                <div class="grid gap-6 mt-16 -mx-6 px-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">

                    <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg  shadow hover:bg-gray-50 ">
                        <div class="text-center">
                            <p class="text-3xl font-semibold text-gray-800 uppercase">{{ $t("pack") }} <br/> {{ $t("particular") }}</p>
                            <h4 class="mt-2 text-gray-600 dark:text-gray-400">({{ $t("physical-person") }})</h4>
                            <p class="mt-4 text-gray-500 ">{{ $t("essential-features") }}</p>
                            <h4 class="mt-2 text-5xl font-semibold text-gray-800 uppercase">{{ $t("free") }}</h4>
                            <p class="mt-4 text-gray-500 ">{{ $t("unlimited") }}</p>

                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc1") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc2") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc3") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc4") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc5") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc6") }}</span>
                            </div>
                        </div>
                        <router-link :to="{name:'register', params: { type : 'particular' }}" class="w-full block text-center px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary-blue rounded-md hover:bg-primary-blue focus:outline-none focus:bg-primary-blue">
                            {{ $t("register") }} 
                        </router-link>
                    </div>

                     <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg  shadow hover:bg-gray-50 ">
                        <div class="text-center">
                            <p class="text-3xl font-semibold text-gray-800 uppercase">{{ $t("pack") }} <br/> PRO</p>
                            <h4 class="mt-2 text-gray-600  dark:text-gray-400">({{ $t("corporation") }})</h4>
                            <p class="mt-4 text-gray-500 ">{{ $t("essential-features") }}</p>
                            <h4 class="mt-2 text-5xl font-semibold text-gray-800 uppercase ">{{ $t("free") }}</h4>
                            <p class="mt-4 text-gray-500 ">{{ $t("unlimited") }}</p>
                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc1") }}</span>
                            </div>

                            <div class="flex items-center">
                                <BanIcon class="w-5 h-5 text-red-500"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc2") }}</span>
                            </div>

                            <div class="flex items-center">
                                <BanIcon class="w-5 h-5 text-red-500"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc3") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc4") }}</span>
                            </div>

                            <div class="flex items-center">
                                <BanIcon class="w-5 h-5 text-red-500"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc8") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc7") }}</span>
                            </div>
                        </div>

                        <router-link :to="{name:'register', params: { type : 'business1' }}" class="w-full block text-center px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary-blue rounded-md hover:bg-primary-blue focus:outline-none focus:bg-primary-blue">
                            {{ $t("register") }}
                        </router-link>
                    </div>
                    <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg  bg-primary-blue shadow">
                        <div class="text-center">
                            <p class="text-3xl font-semibold text-white uppercase">{{ $t("pack") }} <br/> {{ $t("business") }}</p>
                            <h4 class="mt-2 text-gray-100 dark:text-gray-400">({{ $t("corporation") }})</h4>
                            <p class="mt-4 text-gray-100 ">{{ $t("advanced-features") }}</p>
                            <h4 class="mt-2 text-5xl font-semibold text-white animate-pulse">$50.00</h4>
                            <p class="mt-4 text-gray-100 ">/ {{ $t("year") }}</p>
                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-white"/>

                                <span class="mx-4 text-gray-100 ">{{ $t("plan-desc1") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-white"/>

                                <span class="mx-4 text-gray-100 ">{{ $t("plan-desc2") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-white"/>

                                <span class="mx-4 text-gray-100 ">{{ $t("plan-desc3") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-white"/>

                                <span class="mx-4 text-gray-100 ">{{ $t("plan-desc4") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-white"/>

                                <span class="mx-4 text-gray-100 ">{{ $t("plan-desc8") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-white"/>

                                <span class="mx-4 text-gray-100 ">{{ $t("plan-desc7") }}</span>
                            </div>
                        </div>
                        <!-- <stripe-checkout
                            ref="checkoutRef"
                            mode="subscription"
                            :pk="publishableKey"
                            :sessionId="sessionId"
                        /> -->
                        <!-- <button @click="submit" class="w-full block text-center px-4 py-2 mt-10 font-medium tracking-wide text-primary-blue capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-white focus:outline-none focus:bg-white">
                            {{ $t("register") }}
                        </button> -->
                        <button disabled class="w-full block text-center px-4 py-2 mt-10 font-medium tracking-wide text-primary-blue capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-white focus:outline-none focus:bg-white">
                            {{ $t("register") }}
                        </button>
                        <!-- <router-link  :to="{name:'register', params: { type : 'business2' }}" class="w-full block text-center px-4 py-2 mt-10 font-medium tracking-wide text-primary-blue capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-white focus:outline-none focus:bg-white">
                            {{ $t("register") }}
                        </router-link> -->
                    </div>
                    <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg  bg-white shadow hover:bg-gray-50 ">
                        <div class="text-center">
                            <p class="text-3xl font-semibold text-gray-800 uppercase">{{ $t("pack") }} <br/> {{ $t("politic") }}</p>
                            <h4 class="mt-2 text-gray-600 dark:text-gray-400">({{ $t("ip") }})</h4>
                            <p class="mt-4 text-gray-500 ">{{ $t("essential-features") }}</p>
                            <h4 class="mt-2 text-5xl font-semibold text-gray-800 uppercase ">{{ $t("free") }}</h4>
                            <p class="mt-4 text-gray-500 ">{{ $t("unlimited") }}</p>
                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc1") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc2") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc3") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc4") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc8") }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="w-5 h-5 text-primary-blue"/>

                                <span class="mx-4 text-gray-700 ">{{ $t("plan-desc7") }}</span>
                            </div>
                        </div>

                        <router-link :to="{name:'register', params: { type : 'ip' }}" class="w-full block text-center px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary-blue rounded-md hover:bg-primary-blue focus:outline-none focus:bg-primary-blue">
                            {{ $t("register") }}
                        </router-link>
                    </div>


                </div>

        </div>
    </section>
    <div class="h-16  p-4 text-center mb-4 md:text-md text-lg">
            {{ $t("already-signup") }}  <router-link class="text-primary-blue hover:underline" :to="{name:'login'}"> {{ $t("login") }} </router-link>
    </div>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { CheckCircleIcon, BanIcon } from '@heroicons/vue/solid';
import { StripeCheckout  } from "@vue-stripe/vue-stripe";
import axios from "axios";
import { onMounted, ref } from 'vue';
export default {
    components:{
        StripeCheckout,
        Header,
        Footer,
        BanIcon,
        CheckCircleIcon
    },
    setup(props) {
        const checkoutRef = ref(null)
        const publishableKey = "pk_test_51KtYynFJTg08EEU2sYHLN0LKrnZTuJCazai8jmokQ2096V7IXYjX2XsdGi7xh5jOgSCz5nnn7YfJS5afTtEHRSxk00EUEcmhsj";
        const sessionId = ref(null);

        onMounted(
            // console.log('yo')
            async () => {
               try{
                   let response = await axios.get('api/getSession');
                   sessionId.value = response.data.id;
                   console.log(response.data);
               }catch(e){
                   console.log('error')
               }
               

            }
        )

        const submit  = () => {
            // checkoutRef.redirectToCheckout();
            console.log(checkoutRef)
        }

        return{
            submit,
            publishableKey,
            sessionId,
            checkoutRef,
        }
    },
}
</script>
