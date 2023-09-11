<template>
    <div class="relative w-full xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold text-primary-blue">
                    Add Currency
                </h1>
            </div>

            <section class="mx-auto bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">
                    Add a new Currency
                </h2>
                <form @submit.prevent="storeCurrency()">
                    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="fr"
                                >Symbol</label
                            >
                            <input
                                id="fr"
                                v-model="currency.symbol"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="en"
                                >Name</label
                            >
                            <input
                                id="en"
                                v-model="currency.name"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div class="mt-6 flex justify-end">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                        >
                            Save
                        </button>
                        <button
                            v-if="loading == 1"
                            type="submit"
                            disabled
                            class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"
                        >
                            <Spin :size="'small'" />
                        </button>
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import Error from "@/components/Error.vue";
import useCurrencies from "@/services/currencyServices.js";

const currency = reactive({
    symbol: "",
    name: "",
});
const { createCurrency, errors, loading } = useCurrencies();

const storeCurrency = async () => {
    await createCurrency({ ...currency });
};
</script>
