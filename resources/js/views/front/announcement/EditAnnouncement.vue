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
                        <label class="text-gray-700">
                            {{ $t("title") }}
                            <span class="text-red-500">*</span>
                        </label>
                        <input
                            required
                            v-model="announcement.title"
                            maxlength="50"
                            type="text"
                            class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
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
                            <label class="text-gray-700" for="pt"
                                >{{ $t("university") }}
                                <span class="text-red-500">*</span>
                            </label>
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
                            <label class="text-gray-700" for="pt"
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
                            <label class="text-gray-700"
                                >{{ $t("contact-phone") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="announcement.phone"
                                type="text"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="text-gray-700"
                                >{{ $t("contact-email") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="announcement.email"
                                type="email"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div v-if="announcement.category_announcement_id != 10">
                            <label class="text-gray-700"
                                >{{ $t("price") }}
                                <span class="text-red-500">*</span>
                            </label>
                            <input
                                required
                                v-model="announcement.price"
                                type="text"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div v-if="announcement.category_announcement_id != 10">
                            <label class="text-gray-700" for="es"
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
                            <label class="text-gray-700">{{
                                $t("adresse")
                            }}</label>
                            <input
                                v-model="announcement.adress"
                                placeholder="Douala Cameroon"
                                type="text"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>

                        <div>
                            <label class="text-gray-700">{{
                                $t("website")
                            }}</label>
                            <input
                                v-model="announcement.website"
                                type="text"
                                class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div class="col-span-2 mt-4">
                        <label class="text-gray-700" for="fr">{{
                            $t("thumbnails")
                        }}</label>
                        <div class="flex items-center space-x-4 py-4">
                            <DropZone v-model="files" :multiple="true" />
                        </div>
                    </div>

                    <div class="col-span-2 mt-4">
                        <label class="text-gray-700" for="pt"
                            >{{ $t("description") }}
                            <span class="text-red-500">*</span>
                        </label>
                        <RichText :key="keyComponent" v-model="announcement.description"/>
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
                        <Spin :size="'small'" />
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
import DropZone from "@/components/media/DropZone.vue";
import { useRouter } from "vue-router";
import RichText from '@/components/RichText.vue';
const router = useRouter();

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});
const files = ref([]);
const keyComponent = ref(0);
const { updateAnnouncement, getAnnouncement, announcement, errors, loading } =
    useAnnouncements();
const { categoryAnnouncements, getCategoryAnnouncements } =
    usecategoryAnnouncements();
const { currencies, getCurrencies } = useCurrencies();
const { universities, getAllUniversities } = useUniversities();
const loadUniv = ref(false);
onMounted(async () => {
    loadUniv.value = true;
    await getAnnouncement(props.id);
    keyComponent.value++;
    files.value = announcement.value.image;
    await getCurrencies();
    await getCategoryAnnouncements();
    let univId = announcement.value.university_id;
    await getAllUniversities();
    announcement.value.university_id = "0";
    announcement.value.university_id = univId;
    loadUniv.value = false;
});
announcement.value.image = "";
const saveAnnouncement = async () => {
    await updateAnnouncement({ ...announcement.value }, props.id);
    if (errors.value == "") {
        router.push({
            name: "ads",
        });
    }
};
</script>
