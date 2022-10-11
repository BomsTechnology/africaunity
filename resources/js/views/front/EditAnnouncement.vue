<template>
    <div class="mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]">
        <div class="w-full space-y-4 py-5 text-center">
            <h1 class="text-4xl font-bold capitalize text-primary-blue">
                {{ $t("edit") }} {{ $t("ads") }}
            </h1>
        </div>

        <section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">
            <Error v-if="errors != ''">{{ errors }}</Error>
            <h1 class="text-xl font-semibold">
                {{ $t("edit") }} {{ $t("ads") }}
            </h1>
            <h2 class="text-md font-light text-gray-700">
                {{ $t("good-msg-post") }} !
            </h2>

            <form
                @submit.prevent="saveAnnouncement()"
                id="announcementform"
                enctype="multipart/form-data"
            >
                <div class="mt-4">
                    <div class="col-span-2">
                        <label class="dark:text-gray-200 text-gray-700">
                            {{ $t("title") }}
                            <span class="text-red-500">*</span>
                        </label>
                        <input
                            required
                            v-model="announcement.title"
                            maxlength="50"
                            type="text"
                            class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                        <span class="text-xs font-light text-gray-400"
                            >{{
                                announcement.title
                                    ? announcement.title.length
                                    : 0
                            }}
                            of 50 Characters</span
                        >
                    </div>
                    <div
                        class="divSelect2 col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >{{ $t("university") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <Select2
                                v-model="announcement.university_id"
                                :options="universities"
                                :id="'select2'"
                                :settings="{
                                    width: '100%',
                                }"
                            />
                        </div>

                        <div>
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >{{ $t("category") }}
                                <span class="text-red-500">*</span></label
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
                                >{{ $t("contact-phone") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="announcement.phone"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700"
                                >{{ $t("contact-email") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="announcement.email"
                                type="email"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div v-if="announcement.category_announcement_id != 10">
                            <label class="dark:text-gray-200 text-gray-700"
                                >{{ $t("price") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="announcement.price"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div v-if="announcement.category_announcement_id != 10">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="es"
                                >{{ $t("currency") }}
                                <span class="text-red-500">*</span>
                            </label>
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
                            <label class="dark:text-gray-200 text-gray-700">{{
                                $t("adresse")
                            }}</label>
                            <input
                                v-model="announcement.adress"
                                placeholder="Douala Cameroon"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="dark:text-gray-200 text-gray-700">{{
                                $t("website")
                            }}</label>
                            <input
                                v-model="announcement.website"
                                type="text"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div class="col-span-2 mt-4">
                        <label
                            class="dark:text-gray-200 text-gray-700"
                            for="fr"
                            >{{ $t("thumbnails") }}</label
                        >
                        <div class="flex items-center space-x-4 py-4">
                            <img
                                v-if="announcement.image"
                                :src="announcement.image"
                                class="h-16 w-16 rounded-full"
                                :alt="announcement.title"
                            />
                            <input
                                ref="file"
                                @change="handelFileObject()"
                                type="file"
                                class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div class="col-span-2 mt-4">
                        <label class="dark:text-gray-200 text-gray-700" for="pt"
                            >{{ $t("description") }}
                            <span class="text-red-500">*</span>
                        </label>
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
                <div class="mt-6">
                    <button
                        v-if="loading == 0"
                        type="submit"
                        class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"
                    >
                        {{ $t("save") }}
                    </button>
                    <button
                        v-if="loading == 1"
                        type="submit"
                        disabled
                        class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"
                    >
                        {{ $t("save") }}...
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

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});
const file = ref(null);
const { updateAnnouncement, getAnnouncement, announcement, errors, loading } =
    useAnnouncements();
const { categoryAnnouncements, getCategoryAnnouncements } =
    usecategoryAnnouncements();
const { currencies, getCurrencies } = useCurrencies();
const { universities, getUniversities } = useUniversities();

onMounted(async () => {
    await getAnnouncement(props.id);
    await getCategoryAnnouncements();
    await getCurrencies();
    await getUniversities();
});
announcement.value.image = "";
const saveAnnouncement = async () => {
    let formData = new FormData();
    formData.append("image", announcement.value.image);
    formData.append("title", announcement.value.title);
    formData.append("description", announcement.value.description);
    formData.append("price", announcement.value.price);
    formData.append("adress", announcement.value.adress);
    formData.append("website", announcement.value.website);
    formData.append("email", announcement.value.email);
    formData.append("phone", announcement.value.phone);
    formData.append("user_id", announcement.value.user_id);
    formData.append(
        "category_announcement_id",
        announcement.value.category_announcement_id
    );
    formData.append("currency_id", announcement.value.currency_id);
    formData.append("university_id", announcement.value.university_id);
    formData.append("_method", "PUT");

    await updateAnnouncement(formData, props.id);
    if (errors.value == "") {
        router.push({
            name: "universities",
        });
    }
};

const handelFileObject = () => {
    announcement.image = file.value.files[0];
};
</script>
