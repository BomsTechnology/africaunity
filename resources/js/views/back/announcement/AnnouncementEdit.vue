<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4">
            <div class="flex w-full justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Edit Announcement
                </h1>
            </div>

            <section class="mx-auto w-full bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">
                    Add a new Announcement
                </h2>
                <form
                    @submit.prevent="saveAnnouncement()"
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
                            <DropZone v-model="files" :multiple="true" />
                        </div>

                        <div class="col-span-2">
                            <label
                                class="dark:text-gray-200 text-gray-700"
                                for="pt"
                                >Description</label
                            >
                            <RichText :key="keyComponent" v-model="announcement.description"/>
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
                            <Spin :size="'small'" />
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
import RichText from '@/components/RichText.vue';
import DropZone from '@/components/media/DropZone.vue';
const router = useRouter();

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});
const files = ref([]);
const loadUniv = ref(false);
const { updateAnnouncement, getAnnouncement, announcement, errors, loading } =
    useAnnouncements();
const { categoryAnnouncements, getCategoryAnnouncements } =
    usecategoryAnnouncements();
const { currencies, getCurrencies } = useCurrencies();
const { universities, getAllUniversities } = useUniversities();
const keyComponent = ref(0);
onMounted(async () => {
    loadUniv.value = true;
    await getAnnouncement(props.id);
    files.value = announcement.value.image;
    keyComponent.value++;
    await getCategoryAnnouncements();
    await getCurrencies();
    let univId = announcement.value.university_id;
    await getAllUniversities();
    announcement.value.university_id = "0";
    announcement.value.university_id = univId;
    loadUniv.value = false;
    announcement.value.image = "";
});

const saveAnnouncement = async () => {
    await updateAnnouncement({ ...announcement.value }, props.id);
    if (errors.value == "") {
        router.push({ name: "admin.announcement.index" });
    }
};

const handelFileObject = async () => {
    announcement.value.image = file.value.files[0];
};
</script>
