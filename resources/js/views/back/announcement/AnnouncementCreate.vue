<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4">
            <div class="flex w-full justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Add Announcement
                </h1>
            </div>

            <section class="mx-auto w-full bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">
                    Add a new Announcement
                </h2>
                <form
                    @submit.prevent="storeAnnouncement()"
                    id="announcementform"
                    enctype="multipart/form-data"
                >
                    <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div class="col-span-2">
                            <label class="dark:text-gray-200 text-gray-700"
                                >Title</label
                            >
                            <input
                                required
                                v-model="announcement.title"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >University</label
                            >
                            <SelectFilter
                                v-model="announcement.university_id"
                                :data="universities"
                                :placeholder="'Select University'"
                                :required="false"
                                :resetField="true"
                                :loading="loadUniv"
                                :className="'w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm'"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >Category</label
                            >
                            <select
                                required
                                v-model="announcement.category_announcement_id"
                                name=""
                                id=""
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="category_announcement in categoryAnnouncements"
                                    :key="category_announcement.id"
                                    :value="category_announcement.id"
                                >
                                    {{ category_announcement.name }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Contact Phone</label
                            >
                            <input
                                required
                                v-model="announcement.phone"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Contact Adress Email</label
                            >
                            <input
                                required
                                v-model="announcement.email"
                                type="email"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Price</label
                            >
                            <input
                                required
                                v-model="announcement.price"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >Currency</label
                            >
                            <select
                                required
                                v-model="announcement.currency_id"
                                class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                            >
                                <option
                                    v-for="currency in currencies"
                                    :key="currency.id"
                                    :value="currency.id"
                                >
                                    {{ currency.symbol + " " + currency.name }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Address</label
                            >
                            <input
                                v-model="announcement.adress"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >Website</label
                            >
                            <input
                                v-model="announcement.website"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="fr"
                                >Image</label
                            >
                            <input
                                required
                                ref="file"
                                @change="handelFileObject()"
                                type="file"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >Description</label
                            >
                            <textarea
                                required
                                type="text"
                                v-model="announcement.description"
                                id="pt"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                            >
                            </textarea>
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
import useAnnouncements from "@/services/announcementServices.js";
import usecategoryAnnouncements from "@/services/categoryAnnouncementServices.js";
import useCurrencies from "@/services/currencyServices.js";
import useUniversities from "@/services/universityServices.js";
import { useRouter } from "vue-router";
const router = useRouter();
const file = ref(null);
const user = JSON.parse(localStorage.user);
const { categoryAnnouncements, getCategoryAnnouncements } =
    usecategoryAnnouncements();
const { currencies, getCurrencies } = useCurrencies();
const { universities, getAllUniversities } = useUniversities();
const loadUniv = ref(false);
onMounted(async () => {
    loadUniv.value = true;
    await getCategoryAnnouncements();
    await getCurrencies();
    await getAllUniversities();
    loadUniv.value = false;
});
const announcement = reactive({
    title: "",
    user_id: user.id,
    description: "",
    price: "",
    image: "",
    adress: "",
    website: "",
    email: "",
    phone: "",
    category_announcement_id: 1,
    currency_id: 1,
    university_id: 1,
});
const { createAnnouncement, errors, loading } = useAnnouncements();

const storeAnnouncement = async () => {
    let formData = new FormData();
    formData.append("image", announcement.image);
    formData.append("title", announcement.title);
    formData.append("description", announcement.description);
    formData.append("price", announcement.price);
    formData.append("adress", announcement.adress);
    formData.append("website", announcement.website);
    formData.append("email", announcement.email);
    formData.append("phone", announcement.phone);
    formData.append("user_id", announcement.user_id);
    formData.append(
        "category_announcement_id",
        announcement.category_announcement_id
    );
    formData.append("currency_id", announcement.currency_id);
    formData.append("university_id", announcement.university_id);

    await createAnnouncement(formData);
    if (errors.value == "") {
        router.push({
            name: "admin.announcement.index",
        });
    }
};
const handelFileObject = async () => {
    announcement.image = file.value.files[0];
};
</script>
