<template>
<div class="flex">
  <Sidebar/>
  <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
      <div
                class="fixed xl:right-6 xl:top-4 top-20 xl:w-[80%] w-full z-0 h-full p-4"
            >
                <div class="px-8 py-5 bg-white shadow-lg flex justify-between">
                    <h1 class="text-4xl text-primary-blue font-bold">
                       Add Continent
                    </h1>
                </div>

                
    <section class=" p-6 mx-auto bg-white shadow-md">
        <h2 class="text-md font-light text-gray-700">Add a new continent for the 04 languages of the website</h2>
        
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="fr">French</label>
                    <input id="fr" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="en">English</label>
                    <input id="en" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es">Español</label>
                    <input id="es" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="pt">Português</label>
                    <input type="text" id="pt" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button type="submit" class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none">Save</button>
            </div>
        </form>
    </section>
            </div>
  </div>
</div>
</template>

<script>
import Sidebar from "../../../components/Sidebar.vue"
export default {
    components: {
        Sidebar
    },
    setup() {

    },
}
</script>