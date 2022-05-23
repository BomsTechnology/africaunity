<template>
    <h1 class="text-5xl text-primary-blue text-center capitalize font-bold">
        {{ $t("contact") }}
    </h1>
    <div class="py-8 lg:px-36">
        <section class="p-6 bg-white shadow-xl rounded-md mx-auto w-full">
            <Error v-if="errors != ''">{{ errors }}</Error>
            <div
                v-if="loading == 2"
                class="py-4 px-2 bg-green-50 text-green-700"
            >
                <p>
                    {{ $t("msg-contact-sucess") }}
                </p>
            </div>
            <div v-else>
                <h2 class="text-md font-light text-gray-700">
                    {{ $t("contact-msg") }} !
                </h2>
                <form @submit.prevent="sendContact()" id="contactform">
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div class="col-span-2">
                            <label class="text-gray-700 dark:text-gray-200"
                                >{{ $t("full-name") }}
                                <span class="text-red-500">*</span></label
                            >
                            <input
                                required
                                v-model="contact.name"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div class="col-span-2">
                            <label class="text-gray-700 dark:text-gray-200"
                                >{{ $t("email") }}
                                <span class="text-red-500">*</span></label
                            >
                            <input
                                required
                                v-model="contact.email"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div class="col-span-2">
                            <label
                                class="text-gray-700 dark:text-gray-200"
                                for="pt"
                                >{{ $t("about-title")
                                }}<span class="text-red-500">*</span></label
                            >
                            <select
                                @change="checkAbout()"
                                required
                                v-model="contact.about"
                                name=""
                                id=""
                                class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                            >
                                <option value="1">
                                    {{ $t("contact-about-1") }}
                                </option>
                                <option value="2">
                                    {{ $t("contact-about-2") }}
                                </option>
                                <option value="3">
                                    {{ $t("contact-about-3") }}
                                </option>
                                <option value="4">
                                    {{ $t("contact-about-4") }}
                                </option>
                                <option value="5">
                                    {{ $t("contact-about-5") }}
                                </option>
                            </select>
                        </div>

                        <div class="col-span-2" v-if="show_city">
                            <label class="text-gray-700 dark:text-gray-200"
                                >{{ $t("city") }}
                                <span class="text-red-500">*</span></label
                            >
                            <input
                                v-model="contact.city"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div class="col-span-2">
                            <label
                                class="text-gray-700 dark:text-gray-200"
                                for="pt"
                                >{{ $t("content") }}
                                <span class="text-red-500">*</span></label
                            >
                            <textarea
                                required
                                v-model="contact.content"
                                id="pt"
                                class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            >
                            </textarea>
                        </div>
                    </div>

                    <div class="mt-6">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-primary-blue focus:outline-none"
                        >
                            {{ $t("send") }}
                        </button>
                        <button
                            v-if="loading == 1"
                            type="submit"
                            disabled
                            class="px-6 py-4 text-md leading-5 flex justify-center items-center w-full text-white rounded bg-blue-300 focus:outline-none"
                        >
                            {{ $t("send") }}...
                            <svg
                                class="animate-spin h-5 w-5 text-white"
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
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import Error from "../../components/Error.vue";
import router from "../../router/index.js";
import { reactive, ref, onMounted } from "vue";
export default {
    components: {
        Error,
    },
    setup(props) {
        const show_city = ref(false);
        const loading = ref(0);
        const errors = ref("");
        const contact = reactive({
            name: "",
            email: "",
            about: "",
            city: "",
            content: "",
        });

        const checkAbout = () => {
            if (contact.about == 4) {
                show_city.value = true;
            }
        };

        const sendContact = async () => {
            errors.value = "";
            try {
                loading.value = 1;
                await axios.post("/api/send-contact", contact);
                loading.value = 2;
            } catch (e) {
                if (e.response.status == 422) {
                    loading.value = 0;
                    for (const key in e.response.data.errors)
                        errors.value += e.response.data.errors[key][0] + "\n";
                } else {
                    errors.value = e.response.data.message;
                }
            }
        };

        return {
            errors,
            loading,
            show_city,
            checkAbout,
            sendContact,
            contact,
        };
    },
};
</script>
