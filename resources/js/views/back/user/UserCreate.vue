<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div class="w-full z-0 p-4">
                <div
                    class="px-8 py-5 bg-white shadow-lg flex w-full justify-between"
                >
                    <h1 class="text-4xl text-primary-blue font-bold capitalize">
                        Add User
                    </h1>
                </div>

                <section class="p-6 mx-auto bg-white shadow-md w-full">
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <h2 class="text-md font-light text-gray-700">
                        Add a new User
                    </h2>
                    <form
                        @submit.prevent="storeUser()"
                        id="userform"
                    >
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="en"
                                    >Type</label
                                >
                                <select
                                    required
                                    v-model="user.type"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                >
                                    <option value="particular">particular</option>
                                    <option value="admin">admin</option>
                                    <option value="business1">business 1 </option>
                                    <option value="business2">business 2</option>
                                    <option value="ip">Institution politic</option>
                                </select>
                            </div>

                            <span class="col-span-2" v-if="user.type == 'particular'">
                            <div class="col-span-2">
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('firstname')"
                                    class="form-input px-3 pr-2  w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                            <div class="col-span-2">
                                <input
                                    type="text"
                                    required
                                    v-model="user.lastname"
                                    :placeholder="$t('lastname')"
                                    class="form-input px-3 pr-2  w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                        </span>
                        <span class="col-span-2"
                            v-else-if="
                                user.type == 'business1' || type == 'business2'
                            "
                        >
                            <div class="col-span-2">
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('social-reason')"
                                    class="form-input px-3 pr-2  w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                        </span>
                        <span v-else class="col-span-2">
                            <div class="col-span-2">
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('denomination')"
                                    class="form-input px-3 pr-2  w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                        </span>
                        <div class="col-span-2">
                            <input
                                type="email"
                                required
                                v-model="user.email"
                                :placeholder="$t('adresse') + ' ' + $t('email')"
                                class="form-input px-3 pr-2  w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div class="col-span-2">
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                :placeholder="$t('password')"
                                class="form-input px-3 pr-2 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div class="col-span-2">
                            <input
                                type="password"
                                required
                                v-model="user.password_confirmation"
                                :placeholder="$t('confirm-password')"
                                class="form-input px-3 pr-2 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>



                        </div>

                        <div class="flex justify-end mt-6">
                            <button
                                v-if="loading == 0"
                                type="submit"
                                class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none"
                            >
                                Save
                            </button>
                            <button
                                v-if="loading == 1"
                                type="submit"
                                disabled
                                class="px-6 py-2 leading-5 text-white rounded bg-blue-300 focus:outline-none"
                            >
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
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../../../components/Sidebar.vue";
import { reactive, ref, onMounted } from "vue";
import Error from "../../../components/Error.vue";
import useUsers from "../../../services/userServices.js";
import router from "../../../router/index.js";
export default {
    components: {
        Sidebar,
        Error,
    },
    setup(props) {

        // onMounted(
        // );
        const user = reactive({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_confirmation: "",
            type: "particular",
        });
        const { createUser, errors, loading } = useUsers();

        const storeUser = async () => {

            await createUser({...user});
            if (errors.value == "") {
                router.push({
                    name: "admin.user.index",
                });
            } 
        };
        return {
            user,
            loading,
            errors,
            storeUser,
        };
    },
};
</script>
