

<template>
    <div class="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-show="open">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="toogleModal"></div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow py-4">
            <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900  flex items-center justify-center">
                 <span class="p-2 bg-yellow-100 text-yellow-700 rounded-full mr-2"><ExclamationCircleIcon class="h-5 w-5 "/></span> {{ $t('report') }} {{ $t('the-post') }}
                </h3>
                <div>
                    <label for="report" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('report-msg') }} <span class="text-red-500">*</span></label>
                    <textarea required v-model="report.content" id="report" class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </textarea>
                </div>

                <button type="submit" class="w-full text-white bg-primary-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{ $t('send') }}</button>
            </form>
        </div>

    </div>
    
  </div>
</div>
</template>

<script>
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted } from "vue";
export default {
    props: ["open", "toogleModal", "id"],
    components: {
        ExclamationCircleIcon,
    },
    setup(props) {
        const report = reactive({
            user: JSON.parse(localStorage.user).id,
            post: props.id,
            content: "",
        });
        const loadingC = ref(0);
        const errors = ref("");
        const sendReport = async () => {
            errors.value = "";
            try {
                loadingC.value = 1;
                await axios.post("/api/post-report", report, {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                });
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
            report,
            sendReport,
        };
    },
};
</script>
