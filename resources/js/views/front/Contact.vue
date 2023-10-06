<template>
    <div class="mx-auto min-h-screen w-full bg-white xl:w-[90%] py-8">
        <h1 class="text-center text-5xl font-bold capitalize text-primary-blue">
            {{ $t("contact") }}
        </h1>
        <div class="py-8 lg:px-36">
            <section class="mx-auto w-full rounded-md bg-white p-6 max-w-[800px] ">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <div
                    v-if="loading == 2"
                    class="bg-green-50 py-4 px-2 text-green-700"
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
                        <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div class="col-span-2">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >{{ $t("full-name") }}
                                    <span class="text-red-500">*</span></label
                                >
                                <input
                                    required
                                    v-model="contact.name"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div class="col-span-2">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >{{ $t("email") }}
                                    <span class="text-red-500">*</span></label
                                >
                                <input
                                    required
                                    v-model="contact.email"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div class="col-span-2">
                                <label
                                    class="dark:text-gray-200 text-gray-700"
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
                                    class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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
                                <label class="dark:text-gray-200 text-gray-700"
                                    >{{ $t("city") }}
                                    <span class="text-red-500">*</span></label
                                >
                                <input
                                    v-model="contact.city"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>

                            <div class="col-span-2">
                                <label
                                    class="dark:text-gray-200 text-gray-700"
                                    for="pt"
                                    >{{ $t("content") }}
                                    <span class="text-red-500">*</span></label
                                >
                                <textarea
                                    required
                                    v-model="contact.content"
                                    id="pt"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                                >
                                </textarea>
                            </div>
                        </div>

                        <div class="mt-6">
                            <button
                                v-if="loading == 0"
                                type="submit"
                                class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"
                            >
                                {{ $t("send") }}
                            </button>
                            <button
                                v-if="loading == 1"
                                type="submit"
                                disabled
                                class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"
                            >
                                {{ $t("send") }}...
                                <svg
                                    class="h-5 w-5 animate-spin text-white"
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
    </div>
</template>

<script setup>
import Error from "@/components/Error.vue";
import router from "@/router/index.js";
import { reactive, ref, onMounted } from "vue";

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
</script>
