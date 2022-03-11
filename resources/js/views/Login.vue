<template>
    <Header />
    <div class="flex items-center space-x-6 px-12 py-16">
        <div class="space-y-6 w-[60%]">
            <h1
                class="text-5xl font-bold flex space-x-6 items-center text-primary-blue"
            >
                <span>{{ $t("login-welcome-msg") }}</span>
                <span class="block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10"
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
        <div class="w-[40%] p-6">
            <div class="border-t-4 border-primary-blue shadow">
                <div class="px-6 py-6">
                    <h1 class="text-[#242A56] text-3xl text-center font-bold">
                        {{ $t("login") }}
                    </h1>
                    <form class="py-7">
                        <div class="relative">
                            <span><UserIcon class="absolute h-6 w-6 mt-2 ml-2 text-gray-300"/></span>
                            <input
                                type="text"
                                :placeholder="$t('key-words')"
                                class="form-input px-3 pr-2 pl-10 w-full border-gray-300 mt-2 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div class="relative">
                            <span><LockClosedIcon class="absolute h-6 w-6 mt-2 ml-2 text-gray-300"/></span>
                            <input
                                type="text"
                                :placeholder="$t('key-words')"
                                class="form-input px-3 pr-2 pl-10 w-full mt-3 border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </form>
                </div>
                <div class="h-16 bg-primary-blue p-4">
                    {{ $t("no-signup") }} {{ $t("register") }}
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { UserIcon, LockClosedIcon } from '@heroicons/vue/solid';
export default {
    components: {
        Header,
        Footer,
        UserIcon,
        LockClosedIcon
    },
    data() {
        return {};
    },
    setup(props) {},
    methods: {},
    computed() {},
    mounted() {},
};
</script>
