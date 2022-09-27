<template>
    <div class="flex h-screen items-center justify-center">
        <div class="w-full max-w-sm rounded-md bg-white p-6 shadow-md">
            <div class="flex items-center justify-center space-x-2">
                <h1
                    class="text-center text-3xl font-semibold text-primary-blue"
                >
                    AfricaUnity
                </h1>
            </div>
            <h1 class="text-md text-center font-light text-[#242A56]">
                login to acces the admin panel
            </h1>
            <Error v-if="errors != ''">{{ errors }}</Error>
            <form @submit.prevent="login" class="mt-6">
                <div>
                    <label for="username" class="block text-sm text-gray-800"
                        >Username or E-mail</label
                    >
                    <input
                        type="text"
                        v-model="user.email"
                        class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between">
                        <label
                            for="password"
                            class="block text-sm text-gray-800"
                            >Password</label
                        >
                        <!-- <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a> -->
                    </div>

                    <input
                        type="password"
                        v-model="user.password"
                        class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                </div>

                <div class="mt-6">
                    <button
                        v-if="loading == 0"
                        type="submit"
                        class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"
                    >
                        Login
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
                        Login...
                    </button>
                </div>

                <p
                    class="font-mone py-2 text-center text-sm italic text-primary-blue underline"
                >
                    Powered By GNO Solutions
                </p>
            </form>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue";
import Error from "@/components/Error.vue";
import useAuth from "@/services/authServices.js";
import router from "@/router";
import axios from "axios";

const user = reactive({
    email: "",
    password: "",
});
const { loginAdmin, errors, loading } = useAuth();

const login = async () => {
    await loginAdmin({ ...user });
};

const verifAdmin = async () => {
    if (localStorage.token && localStorage.token != "") {
        var u = JSON.parse(localStorage.user);

        try {
            let response = await axios.post("/api/verif-admin", { id: u.id });
            router.push({ name: "admin.dash" });
        } catch (e) {
            errors.value = "Your not a admin";
        }
    }
};
onMounted(async () => {
    verifAdmin();
});
</script>
