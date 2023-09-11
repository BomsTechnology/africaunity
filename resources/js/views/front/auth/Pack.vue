<template>
    <div class="mx-auto min-h-screen w-full bg-white xl:w-[90%]">
        <section class="">
            <div class="container mx-auto px-6 py-8">
                <div class="text-center">
                    <h2 class="text-4xl font-bold uppercase">
                        {{ $t("create-account") }}
                    </h2>
                    <p class="mt-4 text-gray-500">{{ $t("register-desc") }}.</p>
                </div>

                <div
                    class="mx-auto max-w-6xl mt-16 grid gap-6 px-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
                >
                    <div
                        class="transform rounded-lg px-6 py-4 shadow transition-colors duration-200 hover:bg-gray-50"
                    >
                        <div class="text-center">
                            <p
                                class="text-3xl font-semibold uppercase text-gray-800"
                            >
                                {{ $t("pack") }} <br />
                                {{ $t("particular") }}
                            </p>
                            <h4 class="dark:text-gray-400 mt-2 text-gray-600">
                                ({{ $t("physical-person") }})
                            </h4>
                            <p class="mt-4 text-gray-500">
                                {{ $t("essential-features") }}
                            </p>
                            <h4
                                class="mt-2 text-5xl font-semibold uppercase text-gray-800"
                            >
                                {{ $t("free") }}
                            </h4>
                            <p class="mt-4 text-gray-500">
                                {{ $t("unlimited") }}
                            </p>
                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc1")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc2")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc3")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc4")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc5")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc6")
                                }}</span>
                            </div>
                        </div>
                        <a 
                                href="/register/particular"
                            class="mt-10 block w-full transform rounded-md bg-primary-blue px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"
                        >
                            {{ $t("register") }}
                        </a>
                    </div>

                    <!--   <div
                        class="transform rounded-lg px-6 py-4 shadow transition-colors duration-200 hover:bg-gray-50"
                    >
                        <div class="text-center">
                            <p
                                class="text-3xl font-semibold uppercase text-gray-800"
                            >
                                {{ $t("pack") }} <br />
                                PRO
                            </p>
                            <h4 class="dark:text-gray-400 mt-2 text-gray-600">
                                ({{ $t("corporation") }})
                            </h4>
                            <p class="mt-4 text-gray-500">
                                {{ $t("essential-features") }}
                            </p>
                            <h4
                                class="mt-2 text-5xl font-semibold uppercase text-gray-800"
                            >
                                {{ $t("free") }}
                            </h4>
                            <p class="mt-4 text-gray-500">
                                {{ $t("unlimited") }}
                            </p>
                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc1")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <NoSymbolIcon class="h-5 w-5 text-red-500" />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc2")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <NoSymbolIcon class="h-5 w-5 text-red-500" />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc3")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc4")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <NoSymbolIcon class="h-5 w-5 text-red-500" />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc8")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc7")
                                }}</span>
                            </div>
                        </div>

                        <router-link
                            :to="{
                                name: 'register',
                                params: { type: 'business1' },
                            }"
                            class="mt-10 block w-full transform rounded-md bg-primary-blue px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"
                        >
                            {{ $t("register") }}
                        </router-link>
                    </div>-->

                    <div
                        class="transform rounded-lg bg-primary-blue px-6 py-4 shadow transition-colors duration-200"
                    >
                        <div class="text-center">
                            <p
                                class="text-3xl font-semibold uppercase text-white"
                            >
                                {{ $t("pack") }} <br />
                                {{ $t("business") }}
                            </p>
                            <h4 class="dark:text-gray-400 mt-2 text-gray-100">
                                ({{ $t("corporation") }})
                            </h4>
                            <p class="mt-4 text-gray-100">
                                {{ $t("advanced-features") }}
                            </p>
                            <h4
                                class="mt-2 animate-pulse text-5xl font-semibold uppercase text-white"
                            >
                                {{ $t("free") }}
                            </h4>
                            <p class="mt-4 text-gray-100">
                                / {{ $t("recruiter") }}
                            </p>
                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <CheckCircleIcon class="h-5 w-5 text-white" />

                                <span class="mx-4 text-gray-100">{{
                                    $t("plan-desc1")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="h-5 w-5 text-white" />

                                <span class="mx-4 text-gray-100">{{
                                    $t("plan-desc2")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="h-5 w-5 text-white" />

                                <span class="mx-4 text-gray-100">{{
                                    $t("plan-desc3")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="h-5 w-5 text-white" />

                                <span class="mx-4 text-gray-100">{{
                                    $t("plan-desc4")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="h-5 w-5 text-white" />

                                <span class="mx-4 text-gray-100">{{
                                    $t("plan-desc8")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon class="h-5 w-5 text-white" />

                                <span class="mx-4 text-gray-100">{{
                                    $t("plan-desc7")
                                }}</span>
                            </div>
                        </div>

                        <a href="/register/business2"
                            class="mt-10 block w-full transform rounded-md bg-white px-4 py-2 text-center font-medium capitalize tracking-wide text-primary-blue transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                        >
                            {{ $t("register") }}
                        </a>
                    </div>
                    <div
                        class="transform rounded-lg bg-white px-6 py-4 shadow transition-colors duration-200 hover:bg-gray-50"
                    >
                        <div class="text-center">
                            <p
                                class="text-3xl font-semibold uppercase text-gray-800"
                            >
                                {{ $t("pack") }} <br />
                                {{ $t("politic") }}
                            </p>
                            <h4 class="dark:text-gray-400 mt-2 text-gray-600">
                                ({{ $t("ip") }})
                            </h4>
                            <p class="mt-4 text-gray-500">
                                {{ $t("essential-features") }}
                            </p>
                            <h4
                                class="mt-2 text-5xl font-semibold uppercase text-gray-800"
                            >
                                {{ $t("free") }}
                            </h4>
                            <p class="mt-4 text-gray-500">
                                {{ $t("unlimited") }}
                            </p>
                        </div>

                        <div class="mt-8 space-y-8">
                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc1")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc2")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc3")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc4")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc8")
                                }}</span>
                            </div>

                            <div class="flex items-center">
                                <CheckCircleIcon
                                    class="h-5 w-5 text-primary-blue"
                                />

                                <span class="mx-4 text-gray-700">{{
                                    $t("plan-desc7")
                                }}</span>
                            </div>
                        </div>

                        <a href="/register/ip"
                            class="mt-10 block w-full transform rounded-md bg-primary-blue px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"
                        >
                            {{ $t("register") }}
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div class="md:text-md mb-4 h-16 p-4 text-center text-lg">
            {{ $t("already-signup") }}
            <a href="/login"
            >
                {{ $t("login") }}
        </a>
        </div>
    </div>
</template>

<script setup>
import { CheckCircleIcon, NoSymbolIcon } from "@heroicons/vue/24/solid";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import axios from "axios";
import { onMounted, ref } from "vue";

const checkoutRef = ref(null);
const publishableKey =
    "pk_test_51KtYynFJTg08EEU2sYHLN0LKrnZTuJCazai8jmokQ2096V7IXYjX2XsdGi7xh5jOgSCz5nnn7YfJS5afTtEHRSxk00EUEcmhsj";
const sessionId = ref(null);

onMounted(async () => {
    // try {
    //     let response = await axios.get("api/getSession");
    //     sessionId.value = response.data.id;
    //     console.log(response.data);
    // } catch (e) {
    //     console.log("error");
    // }
});

const submit = () => {
    // checkoutRef.redirectToCheckout();
    console.log(checkoutRef);
};
</script>
