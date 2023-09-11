<template>
    <div
        class="fixed inset-0 z-40 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-show="open"
    >
        <div
            class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
                @click="toogleModal"
            ></div>

            <span
                class="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
                >&#8203;</span
            >
            <div
                class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
            >
                <!-- Modal content -->
                <div class="relative rounded-lg bg-white py-4 shadow">
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <div
                        v-if="loadingC == 2"
                        class="mx-8 bg-green-50 py-4 px-2 text-green-700"
                    >
                        <p>
                            {{ $t("msg-contact-sucess") }}
                        </p>
                    </div>
                    <form
                        v-else
                        @submit.prevent="sendApply()"
                        class="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
                        action="#"
                    >
                        <h3
                            class="flex items-center justify-center text-xl font-bold text-gray-900 md:text-2xl"
                        >
                            {{ $t("apply") }}
                        </h3>
                        <div class="">
                            <label class="dark:text-gray-200 text-gray-700"
                                >{{ $t("full-name") }}
                                <span class="text-red-500">*</span></label
                            >
                            <input
                                required
                                v-model="apply.name"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div class="">
                            <label class="dark:text-gray-200 text-gray-700"
                                >{{ $t("email") }}
                                <span class="text-red-500">*</span></label
                            >
                            <input
                                required
                                v-model="apply.email"
                                type="email"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div class="">
                            <label class="dark:text-gray-200 text-gray-700"
                                >CV(Pdf | max: 5mo)
                                <span class="text-red-500">*</span></label
                            >
                            <input
                                required
                                ref="file"
                                @change="handelFileObject()"
                                type="file"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label
                                for="report"
                                class="dark:text-gray-300 mb-2 block text-sm font-medium text-gray-900"
                                >Message
                                <span class="text-red-500">*</span></label
                            >
                            <textarea
                                required
                                v-model="apply.message"
                                id="report"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                            >
                            </textarea>
                        </div>

                        <button
                            v-if="loadingC == 0"
                            type="submit"
                            class="dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full rounded-lg bg-primary-blue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            {{ $t("send") }}
                        </button>
                        <button
                            v-else
                            type="submit"
                            disabled
                            class="dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex w-full items-center justify-center rounded-lg bg-blue-300 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            <Spin :size="'small'" />
                        </button>
                    </form>
                    <div v-if="loadingC == 2" class="px-8">
                        <button
                            type="button"
                            @click="toogleModal"
                            class="dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 w-full rounded bg-primary-blue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ExclamationCircleIcon } from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted } from "vue";
import Error from "../components/Error.vue";

const props = defineProps({ open: Boolean, toogleModal: Function, id: String });

const apply = reactive({
    user: JSON.parse(localStorage.user).id,
    job: props.id,
    message: "",
    email: JSON.parse(localStorage.user).email,
    name:
        JSON.parse(localStorage.user).firstname +
        " " +
        (JSON.parse(localStorage.user).lastname
            ? JSON.parse(localStorage.user).lastname
            : ""),
    cv: "",
});
const loadingC = ref(0);
const errors = ref("");
const file = ref(null);
const sendApply = async () => {
    if(apply.cv.size > 5000000){
        errors.value = "Votre fichier est très volimineux";
        return;
    }
    let formData = new FormData();
    formData.append("user", apply.user);
    formData.append("job", apply.job);
    formData.append("message", apply.message);
    formData.append("email", apply.email);
    formData.append("name", apply.name);
    formData.append("cv", apply.cv);

    errors.value = "";
   try {
        loadingC.value = 1;
        await axios.post("/api/jobOffers-apply", formData, {
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
        }else {
            errors.value = e.response.data.message;
        }
    }
};

const handelFileObject = async () => {
    apply.cv = file.value.files[0];
};
</script>
