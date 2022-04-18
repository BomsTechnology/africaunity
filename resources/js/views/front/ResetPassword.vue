<template>
    <Header />
    <div class="lg:flex justify-center items-center md:space-x-6 md:px-12 px-2 py-8">
        <div class="p-6">
            <div class=" shadow">
                <div class="px-6 py-6">
                    <h1 class="text-[#242A56] text-3xl text-center font-bold">
                        {{ $t('change-password') }}
                    </h1>
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <form  @submit.prevent="login" class="py-7">
                        <div class="relative">
                            <span
                                ><LockClosedIcon
                                    class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                :placeholder="$t('new-password')"
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
                                v-model="user.password"
                                :placeholder="$t('confirm-password')"
                                class="form-input px-3 pr-2 pl-10 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>


                        <div>
                            <button v-if="loading == 0" type="submit" class="text-white text-lg bg-primary-blue px-8 py-2 mt-6 w-full">{{ $t("update") }}</button>
                            <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white text-lg bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                                <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ $t("update") }}...
                            </button>
                        </div>
                    </form>
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
import router from "../../router";
import { LockClosedIcon } from '@heroicons/vue/solid';
export default {
    components: {
        Header,
        Footer,
        Error,
        LockClosedIcon,
    },
    setup(props) {
        const cuser = localStorage.user ? JSON.parse(localStorage.user) : '';
        const user = reactive({
            email: "",
            password: "",
        });

        const { loginUser , errors, loading } = useAuth();

        onMounted( 
            () => {
            if (localStorage.token) {
                router.push({name:'compte',  params: {name: cuser.firstname, id : cuser.id }});
            }
        });

        const login = async () => {
                await loginUser({...user});
                if(errors.value == ''){
                    router.push({ name: "home" });
                }               
        };

        return {
            user,
            errors,
            login,
            loading,
        };
    },
};
</script>
