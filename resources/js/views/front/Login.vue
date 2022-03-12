<template>
    <Header />
    <div class="lg:flex justify-center items-center md:space-x-6 md:px-12 px-2 py-8">
        <div class="space-y-6 lg:w-[60%] lg:text-left text-center">
            <h1
                class="lg:text-5xl text-4xl font-bold text-primary-blue"
            >
                <span>{{ $t("login-welcome-msg") }}
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
                </span>
            </h1>
            <p>{{ $t("login-desc") }}</p>
        </div>
        <div class="lg:w-[40%] p-6">
            <div class="border-t-8 border-primary-blue shadow">
                <div class="px-6 py-6">
                    <h1 class="text-[#242A56] text-3xl text-center font-bold">
                        {{ $t("login") }}
                    </h1>
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <form @submit.prevent="login" class="py-7">
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

                        <div>
                            <button type="submit" class="text-white text-lg bg-primary-blue px-8 py-2 mt-6 w-full">{{ $t("login") }}</button>
                        </div>

                        <div class="pt-6 text-center">
                            <router-link class="text-gray-400 hover:underline" :to="{name:'pack'}"> {{ $t("password-forgot") }} ? </router-link> 
                        </div>

                    </form>
                </div>
                <div class="h-16 bg-primary-blue p-4 text-center md:text-md text-sm text-white">
                        {{ $t("no-signup") }}  <router-link class="text-[#242A56] hover:underline" :to="{name:'pack'}"> {{ $t("register") }} </router-link> 
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { reactive, ref, onMounted} from "vue";
import Error from "../../components/Error.vue";
import useAuth from "../../services/authServices.js"
import { MailIcon, LockClosedIcon } from '@heroicons/vue/solid';
export default {
    components: {
        Header,
        Footer,
        MailIcon,
        Error,
        LockClosedIcon
    },
    setup(props) {
        
        const user = reactive({
            email: "",
            password: "",
        });
        const { loginUser , errors, loading } = useAuth();

        const login = async () => {
                await loginUser({...user});
        };

        return {
            user,
            errors,
            login,
            loading
        };
    },
};
</script>
