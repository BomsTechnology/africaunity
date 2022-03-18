<template>
<div class="flex">
  <Sidebar/>
  <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
      <div
                class="fixed xl:right-6 xl:top-4 top-20 xl:w-[80%] w-full z-0 h-full p-4"
            >
                <div class="px-8 py-5 bg-white shadow-lg flex justify-between">
                    <h1 class="text-4xl text-primary-blue font-bold">
                       Edit Country
                    </h1>
                </div>

                
    <section class=" p-6 mx-auto bg-white shadow-md">
        <Error v-if="errors != ''">{{ errors }}</Error>
        <h2 class="text-md font-light text-gray-700">Edit a country</h2>
        <form @submit.prevent="saveCountry()">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="fr">Country Code</label>
                    <input id="fr" v-model="country.code_iso" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="fr">French</label>
                    <input id="fr" v-model="country.name_fr" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="en">English</label>
                    <input id="en" v-model="country.name_en" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es">Español</label>
                    <input id="es" v-model="country.name_es" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="pt">Português</label>
                    <input type="text" v-model="country.name_pt" id="pt" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
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
import { reactive, onMounted } from "vue";
import Error from "../../../components/Error.vue";
import useCountries from "../../../services/countryServices.js";
export default {
    props: {
          id : {
              required: true,
              type: String
          }
      },
    components: {
        Sidebar,
        Error,
    },
    setup(props) {
        const { updateCountry, getCountry , errors, loading, country } = useCountries();
        onMounted(getCountry(props.id));     

        const saveCountry = async () => {
            await updateCountry(props.id);
        }

        return{
            country,
            loading,
            errors,
            saveCountry,
        }

    },
}
</script>