<template>
    <div
        class="mx-auto w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"
    >
        <div class="p-6">
            <div class="shadow">
                <div class="px-6 py-6">
                    <h1 class="text-center text-3xl font-bold text-[#242A56]">
                        {{ $t("password-forgot") }}
                    </h1>
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <div
                        v-if="loading == 2"
                        class="mx-8 mt-2 bg-green-50 py-4 px-2 text-green-700"
                    >
                        <p>
                            {{ $t("msg-sucess-send-Fp") }}
                        </p>
                    </div>
                    <form
                        v-else
                        @submit.prevent="sendMailForgot()"
                        class="py-7"
                    >
                        <p class="text-sm font-light">
                            {{ $t("write-email") }}
                        </p>
                        <div class="relative">
                            <span
                                ><EnvelopeIcon
                                    class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                            /></span>
                            <input
                                type="email"
                                required
                                v-model="email.email"
                                :placeholder="$t('adresse') + ' ' + $t('email')"
                                class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                        </div>

                        <div>
                            <button
                                v-if="loading == 0"
                                type="submit"
                                class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"
                            >
                                {{ $t("send") }}
                            </button>
                            <button
                                v-if="loading == 1"
                                disabled
                                type="submit"
                                class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"
                            >
                                <svg
                                    class="mr-3 h-5 w-5 animate-spin text-white"
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
                                {{ $t("send") }}...
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import Error from "@/components/Error.vue";

import { EnvelopeIcon } from "@heroicons/vue/24/solid";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const cuser = localStorage.user ? JSON.parse(localStorage.user) : "";
onMounted(async () => {
    if (localStorage.token) {
        router.push({
            name: "compte",
            params: { slug: cuser.slug, id: cuser.id },
        });
    }
});
const email = reactive({
    email: "",
});
const errors = ref("");
const loading = ref(0);

const sendMailForgot = async () => {
    try {
        errors.value = "";
        loading.value = 1;
        await axios.post("/api/forgot-password", email);
        loading.value = 2;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == 422) {
            for (const key in e.response.data.errors)
                errorsWM.value += e.response.data.errors[key][0] + "\n";
        } else if (e.response.status == 401) {
            errors.value = e.response.data.message;
        }
    }
};
</script>
