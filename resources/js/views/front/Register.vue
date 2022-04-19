<template>
    <Header />
    <div
        class="lg:flex justify-center items-center md:space-x-6 md:px-12 px-2 py-8"
    >
        <div class="space-y-6 lg:w-[60%] lg:text-left text-center">
            <h1 class="lg:text-5xl text-4xl font-bold text-primary-blue">
                {{ $t("create-account") }}
                <span v-if="type == 'particular'"
                    >PP ({{ $t("pack") }} {{ $t("particular") }})</span
                >
                <span v-else-if="type == 'business1' || type == 'business2'"
                    >PB ({{ $t("pack") }} {{ $t("business") }})</span
                >
                <span v-else>IP ({{ $t("pack") }} {{ $t("politic") }})</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 inline"
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
                    :to="{ name: 'register', params: { type: 'ip' } }"
                    v-if="type != 'ip'"
                    class="text-primary-blue hover:underline"
                >
                    IP ({{ $t("pack") }} {{ $t("politic") }}) ?
                </router-link>
                <router-link
                    :to="{ name: 'register', params: { type: 'business1' } }"
                    v-if="type != 'business1' && type != 'business2'"
                    class="text-primary-blue hover:underline"
                >
                    PB ({{ $t("pack") }} {{ $t("business") }}) ?
                </router-link>
                <router-link
                    :to="{ name: 'register', params: { type: 'particular' } }"
                    v-if="type != 'particular'"
                    class="text-primary-blue hover:underline"
                >
                    PP ({{ $t("pack") }} {{ $t("particular") }}) ?
                </router-link>
            </p>
        </div>
        <div class="lg:w-[40%] p-6">
            <div class="border-t-8 border-primary-blue shadow">
                <div class="px-6 py-6">
                    <h1 class="text-[#242A56] text-3xl text-center font-bold">
                        {{ $t("register") }}
                    </h1>
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <div v-if="loading == 2" class="py-4">
                        <p>
                            {{ $t("msg-a-register") }}
                        </p>
                    </div>
                    <form v-else @submit.prevent="register()" class="py-7" >
                        <span v-if="type == 'particular'">
                            <div class="relative">
                                <span
                                    ><UserIcon
                                        class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                                /></span>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('firstname')"
                                    class="form-input px-3 pr-2 pl-10 w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                            <div class="relative">
                                <span
                                    ><UserIcon
                                        class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                                /></span>
                                <input
                                    type="text"
                                    required
                                    v-model="user.lastname"
                                    :placeholder="$t('lastname')"
                                    class="form-input px-3 pr-2 pl-10 w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
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
                                        class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                                /></span>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('social-reason')"
                                    class="form-input px-3 pr-2 pl-10 w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                        </span>
                        <span v-else>
                            <div class="relative">
                                <span
                                    ><UserIcon
                                        class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                                /></span>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('denomination')"
                                    class="form-input px-3 pr-2 pl-10 w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                        </span>
                        <div class="relative">
                            <span
                                ><MailIcon
                                    class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="email"
                                required
                                v-model="user.email"
                                :placeholder="$t('adresse') + ' ' + $t('email')"
                                class="form-input px-3 pr-2 pl-10 w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div class="relative">
                            <span
                                ><LockClosedIcon
                                    class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                :placeholder="$t('password')"
                                class="form-input px-3 pr-2 pl-10 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div class="relative">
                            <span
                                ><LockClosedIcon
                                    class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="password"
                                required
                                v-model="user.password_confirmation"
                                :placeholder="$t('confirm-password')"
                                class="form-input px-3 pr-2 pl-10 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div class="mt-10">
                            <h3 class="text-primary-blue hover:underline">
                                {{ $t("show-confidentail-politic") }}
                            </h3>
                            <p class="text-gray-400 text-left">
                                <input
                                    type="checkbox"
                                    required
                                    v-model="cpolitic"
                                    class="form-checkbox focus:ring-0 mr-2 text-primary-blue"
                                />
                                {{ $t("confirm-confidentail-politic") }}
                            </p>
                        </div>
                        <div>
                            <button
                            v-if="loading == 0"
                                type="submit"
                                class="text-white text-lg bg-primary-blue px-8 py-2 mt-6 w-full"
                            >
                                {{ $t("register") }}
                            </button>
                            <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white text-lg bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                                <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ $t("register") }}...
                            </button>
                        </div>
                    </form>
                </div>
                <div
                    class="h-16 bg-primary-blue p-4 text-center md:text-md text-sm text-white"
                >
                    {{ $t("already-signup") }}
                    <router-link
                        class="text-[#242A56] hover:underline"
                        :to="{ name: 'login' }"
                    >
                        {{ $t("login") }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Error from "../../components/Error.vue";
import { UserIcon, LockClosedIcon, MailIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted} from "vue";
import router from "../../router";
import useAuth from "../../services/authServices.js"
export default {
    props: {
        type: {
            required: true,
            type: String,
        },
    },
    components: {
        Header,
        Footer,
        Error,
        UserIcon,
        LockClosedIcon,
        MailIcon,
    },
    setup(props) {
        const cuser = localStorage.user ? JSON.parse(localStorage.user) : '';
        onMounted(
            () => {
                if (!types.includes(props.type)) {
                    router.push({ name: "pack" });
                }
                if (localStorage.token) {
                    router.push({name:'compte',  params: {name: cuser.firstname, id : cuser.id }});
                }
            }
        );

        const cpolitic = ref(false);
        const types = ["particular", "ip", "business1", "business2"];
        const user = reactive({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_confirmation: "",
            type: props.type,
        });
        const { createUser , errors, loading } = useAuth();

        const register = async () => {
                if(cpolitic){
                    await createUser({...user});
                }else{
                    errors.value = "Veillez accepter notre politique de confidentialité";
                }
        };

        return {
            user,
            errors,
            register,
            cpolitic,
            loading
        };
    },
};
</script>
