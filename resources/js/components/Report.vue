

<template>
    <div class="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-show="open">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="toogleModal"></div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow py-4">
            <Error v-if="errors != ''">{{ errors }}</Error>
            <div v-if="loadingC == 2" class="py-4 px-2 bg-green-50 text-green-700 mx-8">
                <p>
                    {{ $t("msg-contact-sucess") }}
                </p>
            </div>
            <form v-else @submit.prevent="sendReport()" class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900  flex items-center justify-center">
                 <span class="p-2 bg-yellow-100 text-yellow-700 rounded-full mr-2"><ExclamationCircleIcon class="h-5 w-5 "/></span> {{ $t('report') }}
                </h3>
                <div>
                    <label for="report" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('report-msg') }} <span class="text-red-500">*</span></label>
                    <textarea required v-model="report.content" id="report" class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </textarea>
                </div>

                <button v-if="loadingC == 0" type="submit" class="w-full text-white bg-primary-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ $t('send') }}</button>
                <button v-else type="submit" disabled class="w-full text-white bg-blue-300 flex justify-center items-center focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {{ $t('send') }}...
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </button>
            </form>
            <div v-if="loadingC == 2" class="px-8">
                <button  type="button" @click="toogleModal" class="w-full text-white bg-primary-blue focus:ring-4 focus:outline-none focus:ring-blue-300 mt-2 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OK</button>
            </div>
        </div>

    </div>
    
  </div>
</div>
</template>

<script>
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted } from "vue";
import Error from "../components/Error.vue";
export default {
    props: ["open", "toogleModal", "id", "type"],
    components: {
        Error,
        ExclamationCircleIcon,
    },
    setup(props) {
        const report = reactive({
            user: JSON.parse(localStorage.user).id,
            reported: props.id,
            content: "",
        });
        const loadingC = ref(0);
        const errors = ref("");
        const sendReport = async () => {
            errors.value = "";
            try {
                loadingC.value = 1;
                if(props.type == 'post'){
                    await axios.post("/api/post-report", report, {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                    });
                }else{
                    await axios.post("/api/users-report", report, {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                    });
                }
                loadingC.value = 2;
            } catch (e) {
                if (e.response.status == 422) {
                    loadingC.value = 0;
                    for (const key in e.response.data.errors)
                        errors.value += e.response.data.errors[key][0] + "\n";
                }
            }
        };

        return {
            errors,
            loadingC,
            report,
            sendReport,
        };
    },
};
</script>
