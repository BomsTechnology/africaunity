<template>
<div class="flex">
  <Sidebar/>
  <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
      <div
                class=" w-full z-0 h-full p-4"
            >
                <div class="px-8 py-5 bg-white shadow-lg flex justify-between">
                    <h1 class="text-4xl text-primary-blue font-bold">
                       Add Currency
                    </h1>
                </div>

                
    <section class=" p-6 mx-auto bg-white shadow-md">
        <Error v-if="errors != ''">{{ errors }}</Error>
        <h2 class="text-md font-light text-gray-700">Add a new Currency</h2>
        <form @submit.prevent="storeCurrency()">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="fr">Symbol</label>
                    <input id="fr" v-model="currency.symbol" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="en">Name</label>
                    <input id="en" v-model="currency.name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

            </div>

            <div class="flex justify-end mt-6">
                <button v-if="loading == 0" type="submit" class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none">Save</button>
                <button v-if="loading == 1" type="submit" disabled class="px-6 py-2 leading-5 text-white rounded bg-blue-300 focus:outline-none">
                    <svg class="animate-spin  h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                </button>
            </div>
        </form>
    </section>
            </div>
  </div>
</div>
</template>

<script>
import Sidebar from "../../../components/Sidebar.vue";
import { reactive } from "vue";
import Error from "../../../components/Error.vue";
import useCurrencies from "../../../services/currencyServices.js"
export default {
    components: {
        Sidebar,
        Error,
    },
    setup() {
        const currency = reactive({
            symbol: '',
            name: '',
        });
        const { createCurrency , errors, loading } = useCurrencies();

        const storeCurrency = async () => {
            await createCurrency({...currency});
        }

        return{
            currency,
            loading,
            errors,
            storeCurrency,
        }

    },
}
</script>