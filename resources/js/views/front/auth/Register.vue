<template>
    <div
        class="mx-auto min-h-screen w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"
    >
        <div class="space-y-6 text-center lg:w-[60%] lg:text-left">
            <h1 class="text-4xl font-bold text-primary-blue lg:text-5xl">
                {{ $t("create-account") }}
                <span v-if="type == 'particular'"
                    >PP ({{ $t("pack") }} {{ $t("particular") }})</span
                >
                <span v-else-if="type == 'business1'"
                    >PB ({{ $t("pack") }} PRO)</span
                >
                <span v-else-if="type == 'business2'"
                    >PB ({{ $t("pack") }} {{ $t("business") }})</span
                >
                <span v-else>IP ({{ $t("pack") }} {{ $t("politic") }})</span>
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
            </h1>
            <p>{{ $t("register-free-desc") }}</p>

            <p>
                {{ $t("create-other-account") }}
                <router-link
                    v-if="type != 'ip'"
                    :to="{ name: 'register', params: { type: 'ip' } }"
                    class="text-primary-blue hover:underline"
                >
                    IP ({{ $t("pack") }} {{ $t("politic") }}) ?
                </router-link>
                <router-link
                    v-if="type != 'business2'"
                    :to="{ name: 'register', params: { type: 'business2' } }"
                    class="text-primary-blue hover:underline"
                >
                    PB ({{ $t("pack") }} Business) ?
                </router-link>
                <router-link
                    v-if="type != 'particular'"
                    :to="{ name: 'register', params: { type: 'particular' } }"
                    class="text-primary-blue hover:underline"
                >
                    PP ({{ $t("pack") }} {{ $t("particular") }}) ?
                </router-link>
            </p>
        </div>
        <div class="p-6 lg:w-[40%]">
            <div class="border-t-8 border-primary-blue shadow">
                <div
                    class="md:text-md h-16 p-4 text-center text-sm text-gray-500"
                >
                    {{ $t("already-signup") }}
                    <a href="/login"
                    >
                        {{ $t("login") }}
                    </a>
                </div>
                <div class="px-6 py-2">
                    <h1 class="text-center text-3xl font-bold text-[#242A56]">
                        {{ $t("register") }}
                    </h1>
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <div v-if="loading == 2" class="py-4 text-justify">
                        <p>
                            {{ $t("msg-a-register") }}
                        </p>
                    </div>
                    <form v-else @submit.prevent="register()" class="py-7">
                        <span v-if="type == 'particular'">
                            <div class="relative">
                                <span
                                    ><UserIcon
                                        class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                                /></span>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('firstname')"
                                    class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                            <div class="relative">
                                <span
                                    ><UserIcon
                                        class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                                /></span>
                                <input
                                    type="text"
                                    required
                                    v-model="user.lastname"
                                    :placeholder="$t('lastname')"
                                    class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                        </span>
                        <span
                            v-else-if="
                                type == 'business1' || type == 'business2'
                            "
                        >
                            <div class="relative">
                                <span
                                    ><UserIcon
                                        class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                                /></span>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('social-reason')"
                                    class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                        </span>
                        <span v-else>
                            <div class="relative">
                                <span
                                    ><UserIcon
                                        class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                                /></span>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('denomination')"
                                    class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                        </span>
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
                                class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                        </div>
                        <div class="relative">
                            <span
                                ><LockClosedIcon
                                    class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                            /></span>
                            <input
                                :type="showPassword1 ? 'text' : 'password'"
                                required
                                v-model="user.password"
                                :placeholder="$t('password')"
                                class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                            <span
                                @click="showPassword1 = !showPassword1"
                                class="cursor-pointer"
                            >
                                <EyeIcon
                                    v-if="!showPassword1"
                                    class="absolute right-2 top-2 h-6 w-6 text-gray-400"
                                />
                                <EyeSlashIcon
                                    v-else
                                    class="absolute right-2 top-2 h-6 w-6 text-primary-blue"
                                />
                            </span>
                        </div>

                        <div class="relative">
                            <span
                                ><LockClosedIcon
                                    class="absolute mt-2 ml-2 h-6 w-6 text-gray-400"
                            /></span>
                            <input
                                :type="showPassword2 ? 'text' : 'password'"
                                required
                                v-model="user.password_confirmation"
                                :placeholder="$t('confirm-password')"
                                class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                            <span
                                @click="showPassword2 = !showPassword2"
                                class="cursor-pointer"
                            >
                                <EyeIcon
                                    v-if="!showPassword2"
                                    class="absolute right-2 top-2 h-6 w-6 text-gray-400"
                                />
                                <EyeSlashIcon
                                    v-else
                                    class="absolute right-2 top-2 h-6 w-6 text-primary-blue"
                                />
                            </span>
                        </div>
                        <ReCaptcha />
                        <div class="mt-10">
                            <h3 class="text-primary-blue hover:underline">
                                {{ $t("show-confidentail-politic") }}
                            </h3>
                            <p class="text-left text-gray-400">
                                <input
                                    type="checkbox"
                                    required
                                    v-model="cpolitic"
                                    class="form-checkbox mr-2 text-primary-blue focus:ring-0"
                                />
                                {{ $t("confirm-confidentail-politic") }}
                            </p>
                        </div>
                        <div>
                            <button
                                v-if="loading == 0"
                                type="submit"
                                class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"
                            >
                                {{ $t("register") }}
                            </button>
                            <button
                                v-if="loading == 1"
                                disabled
                                type="submit"
                                class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"
                            >
                                <Spin :size="'small'" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Error from "@/components/Error.vue";
import {
    UserIcon,
    LockClosedIcon,
    EnvelopeIcon,
    EyeIcon,
    EyeSlashIcon,
} from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted } from "vue";

import ReCaptcha from "@/components/ReCaptcha.vue";
import useAuth from "@/services/authServices.js";
import { useRouter } from "vue-router";
import Spin from '@/components/utils/Spin.vue';
const router = useRouter();
const props = defineProps({
    type: {
        required: true,
        type: String,
    },
});
const showPassword1 = ref(false);
const showPassword2 = ref(false);
const cuser = localStorage.user ? JSON.parse(localStorage.user) : "";
onMounted(async () => {
    if (!types.includes(props.type)) {
        router.push({ name: "pack" });
    }
    if (localStorage.token) {
        router.push({
            name: "compte",
            params: { slug: cuser.slug, id: cuser.id },
        });
    }
});

const cpolitic = ref(false);
const types = ["particular", "ip", "business1", "business2"];
const user = reactive({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
    type: props.type,
    recaptcha: "",
});
const { createUser, errors, loading } = useAuth();

const register = async () => {
    if (cpolitic) {
        let recaptcha = document.querySelector('textarea[name=g-recaptcha-response]');
        user.recaptcha = recaptcha ? recaptcha.value : '';
        await createUser({ ...user });
    } else {
        errors.value = "Veillez accepter notre politique de confidentialité";
    }
};
</script>
