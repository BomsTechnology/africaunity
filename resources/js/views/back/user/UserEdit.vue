<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4">
            <div class="flex w-full justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Edit User
                </h1>
            </div>

            <section class="mx-auto w-full bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">
                    Edit a new User
                </h2>
                <form @submit.prevent="saveUser()" id="userform">
                    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="en"
                                >Type</label
                            >
                            <select
                                required
                                v-model="user.type"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option value="particular">particular</option>
                                <option value="admin">admin</option>
                                <option value="business1">business 1</option>
                                <option value="business2">business 2</option>
                                <option value="ip">Institution politic</option>
                            </select>
                        </div>

                        <span
                            class="col-span-2"
                            v-if="user.type == 'particular'"
                        >
                            <div class="col-span-2">
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    :placeholder="$t('firstname')"
                                    class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                            <div class="col-span-2">
                                <input
                                    type="text"
                                    required
                                    v-model="user.lastname"
                                    :placeholder="$t('lastname')"
                                    class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                        </span>
                        <span
                            class="col-span-2"
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
                                    class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
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
                                    class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                        </span>
                        <div class="col-span-2">
                            <input
                                type="email"
                                required
                                v-model="user.email"
                                :placeholder="$t('adresse') + ' ' + $t('email')"
                                class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                        </div>
                        <div class="col-span-2">
                            <input
                                type="password"
                                v-model="user.password"
                                :placeholder="$t('password')"
                                class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                            />
                        </div>
                    </div>

                    <div class="mt-6 flex justify-end">
                        <button
                            v-if="loading == 0"
                            type="submit"
                            class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                        >
                            Save
                        </button>
                        <button
                            v-if="loading == 1"
                            type="submit"
                            disabled
                            class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"
                        >
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
            </section>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Error from "@/components/Error.vue";
import useUsers from "@/services/userServices.js";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
    id: {
        required: true,
    },
});
const { updateUser2, getUser, user, errors, loading } = useUsers();

onMounted(async () => {
    await getUser(props.id);
});

const saveUser = async () => {
    await updateUser2();
    if (errors.value == "") {
        router.push({
            name: "admin.user.index",
        });
    }
};
</script>
