<template>
    <NotLogin :open="openNotLogin" :toogleModal="toogleModal" />
    <VerifyOK :open="openVerifyOK" :toogleModal="toogleModal" />
    <div
        class="mx-auto w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"
    >
        <div class="space-y-6 text-center lg:w-[60%] lg:text-left">
            <h1 class="text-4xl font-bold text-primary-blue lg:text-5xl">
                <span
                    >{{ $t("login-welcome-msg") }}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline h-10 w-10"
                        viewBox="0 0 36 36"
                    >
                        <circle fill="#FFCC4D" cx="18" cy="18" r="18" />
                        <path
                            fill="#664500"
                            d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379.055-.217-.043-.442-.237-.554-.195-.111-.439-.078-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855C11.256 23.05 11.128 23 11 23c-.084 0-.169.021-.246.064-.196.112-.294.339-.239.557z"
                        />
                        <ellipse
                            fill="#664500"
                            cx="12"
                            cy="13.5"
                            rx="2.5"
                            ry="3.5"
                        />
                        <ellipse
                            fill="#664500"
                            cx="24"
                            cy="13.5"
                            rx="2.5"
                            ry="3.5"
                        />
                    </svg>
                </span>
            </h1>
            <p>{{ $t("login-desc") }}</p>
        </div>
        <div class="p-6 lg:w-[40%]">
            <div class="border-t-8 border-primary-blue shadow">
                <div class="md:text-md p-4 text-center text-sm text-gray-500">
                    {{ $t("no-signup") }}
                    <router-link
                        class="text-[#242A56] hover:underline font-bold"
                        :to="{ name: 'pack' }"
                    >
                        {{ $t("register") }}
                    </router-link>
                </div>
                <div class="px-6 py-2">
                    <h1 class="text-center text-3xl font-bold text-[#242A56]">
                        {{ $t("login") }}
                    </h1>
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <form @submit.prevent="(e) => login(e)" class="py-7">
                        <div class="relative">
                            <span
                                ><EnvelopeIcon
                                    class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                            /></span>
                            <input
                                type="email"
                                required
                                v-model="user.email"
                                :placeholder="$t('adresse') + ' ' + $t('email')"
                                name="email"
                                class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                        </div>
                        <div class="relative">
                            <span
                                ><LockClosedIcon
                                    class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                            /></span>
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                required
                                v-model="user.password"
                                :placeholder="$t('password')"
                                name="password"
                                class="form-input mt-3 block w-full border-gray-400 px-5 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                            <span
                                @click="showPassword = !showPassword"
                                class="cursor-pointer"
                            >
                                <EyeIcon
                                    v-if="!showPassword"
                                    class="absolute right-2 top-2 h-6 w-6 text-gray-400"
                                />
                                <EyeSlashIcon
                                    v-else
                                    class="absolute right-2 top-2 h-6 w-6 text-primary-blue"
                                />
                            </span>
                        </div>
                        <ReCaptcha />
                        <div>
                            <button
                                v-if="loading == 0"
                                type="submit"
                                class="mt-4 w-full bg-primary-blue px-8 py-2 text-lg text-white"
                            >
                                {{ $t("login") }}
                            </button>
                            <button
                                v-if="loading == 1"
                                disabled
                                type="submit"
                                class="mt-4 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"
                            >
                                <Spin :size="'small'" />
                            </button>
                        </div>

                        <div class="pt-6 text-center">
                            <router-link
                                class="text-gray-400 hover:underline"
                                :to="{ name: 'forgot.password' }"
                            >
                                {{ $t("password-forgot") }} ?
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Error from "@/components/Error.vue";
import useAuth from "@/services/authServices.js";
import {
    EnvelopeIcon,
    LockClosedIcon,
    EyeIcon,
    EyeSlashIcon,
} from "@heroicons/vue/24/solid";
import NotLogin from "@/components/NotLogin.vue";
import VerifyOK from "@/components/VerifyOK.vue";
import { useRouter } from "vue-router";
import Spin from "@/components/utils/Spin.vue";
import ReCaptcha from "@/components/ReCaptcha.vue";
const router = useRouter();
const props = defineProps({
    redirect: {
        required: false,
        type: String,
    },
});

const cuser = localStorage.user ? JSON.parse(localStorage.user) : "";
const openNotLogin = ref(false);
const openVerifyOK = ref(false);
const showPassword = ref(false);
const user = reactive({
    email: "",
    password: "",
    recaptcha: "",
});

const toogleModal = () => {
    openNotLogin.value = false;
    openVerifyOK.value = false;
};

const { loginUser, errors, loading } = useAuth();

onMounted(async () => {
    if (props.redirect == "not-login") {
        openNotLogin.value = true;
    } else if (props.redirect == "verif-ok") {
        openVerifyOK.value = true;
    }

    if (localStorage.token) {
        router.push({
            name: "compte",
            params: { slug: cuser.slug, id: cuser.id },
        });
    }
});

const login = async (e) => {
    let recaptcha = document.querySelector('textarea[name=g-recaptcha-response]');
    user.recaptcha = recaptcha ? recaptcha.value : '';
    await loginUser({ ...user });
    if (errors.value == "") {
        location.href = window.location.origin;
    }
};
</script>
