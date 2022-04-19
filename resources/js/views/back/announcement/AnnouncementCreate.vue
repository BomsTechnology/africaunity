<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div class="w-full z-0 p-4">
                <div
                    class="px-8 py-5 bg-white shadow-lg flex w-full justify-between"
                >
                    <h1 class="text-4xl text-primary-blue font-bold capitalize">
                        Add Announcement
                    </h1>
                </div>

                <section class="p-6 mx-auto bg-white shadow-md w-full">
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <h2 class="text-md font-light text-gray-700">
                        Add a new Announcement
                    </h2>
                    <form
                        @submit.prevent="storeAnnouncement()"
                        id="announcementform"
                        enctype="multipart/form-data"
                    >
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Title</label
                                >
                                <input
                                    required
                                    v-model="announcement.title"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="pt"
                                    >University</label
                                >
                                <select
                                    required
                                    v-model="announcement.university_id"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                >
                                    <option
                                        v-for="university in universities"
                                        :key="university.id"
                                        :value="university.id"
                                    >
                                        {{ university.name }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="pt"
                                    >Category</label
                                >
                                <select
                                    required
                                    v-model="announcement.category_announcement_id"
                                    name=""
                                    id=""
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
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
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Contact Phone</label
                                >
                                <input
                                    required
                                    v-model="announcement.phone"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Contact Adress Email</label
                                >
                                <input
                                    required
                                    v-model="announcement.email"
                                    type="email"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Price</label
                                >
                                <input
                                    required
                                    v-model="announcement.price"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="es"
                                    >Currency</label
                                >
                                <select
                                    required
                                    v-model="announcement.currency_id"
                                    class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                >
                                    <option
                                        v-for="currency in currencies"
                                        :key="currency.id"
                                        :value="currency.id"
                                    >
                                        {{ currency.symbol + ' ' + currency.name }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Address</label
                                >
                                <input
                                    v-model="announcement.adress"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            
                            <div>
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Website</label
                                >
                                <input
                                    v-model="announcement.website"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="fr"
                                    >Image</label
                                >
                                <input
                                    required
                                    ref="file"
                                    @change="handelFileObject()"
                                    type="file"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="pt"
                                    >Description</label
                                >
                                <textarea
                                    required
                                    type="text"
                                    v-model="announcement.description"
                                    id="pt"
                                    class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                >
                                </textarea>
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
import useAnnouncements from "../../../services/announcementServices.js";
import usecategoryAnnouncements from "../../../services/categoryAnnouncementServices.js";
import useCurrencies from "../../../services/currencyServices.js";
import useUniversities from "../../../services/universityServices.js";
import router from "../../../router/index.js";
export default {
    components: {
        Sidebar,
        Error,
    },
    setup(props) {
        const user = JSON.parse(localStorage.user);
        const { categoryAnnouncements, getCategoryAnnouncements } = usecategoryAnnouncements();
        const { currencies, getCurrencies } = useCurrencies();
        const { universities, getUniversities } = useUniversities();
        onMounted(
            getCategoryAnnouncements(),
            getCurrencies(),
            getUniversities()
        );
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
            formData.append("category_announcement_id", announcement.category_announcement_id);
            formData.append("currency_id", announcement.currency_id);
            formData.append("university_id", announcement.university_id);

            await createAnnouncement(formData);
            router.push({
                name: "admin.announcement.index",
            });
        };
        return {
            announcement,
            loading,
            errors,
            storeAnnouncement,
            categoryAnnouncements,
            currencies,
            universities,
        };
    },
    methods: {
        handelFileObject() {
            this.announcement.image = this.$refs.file.files[0];
        },
    },
};
</script>
