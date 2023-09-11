<template>
    <Report
        :open="openReport"
        :toogleModal="toogleModal"
        :id="id"
        :type="'University'"
    />
    <div class="mx-auto min-h-screen w-full bg-white px-20 text-lg xl:w-[90%]">
        <div>
            <div class="py-6 px-4" v-if="university.length != 0">
                <div class="overflow-hidden rounded-lg bg-white shadow-md">
                    <!-- University -->
                    <img
                        class="h-96 w-full object-cover"
                        :src="university.image"
                        :alt="university.name"
                    />
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    university.city.name_en +
                                    "-" +
                                    university.country.code_iso
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    university.city.name_fr +
                                    "-" +
                                    university.country.code_iso
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    university.city.name_es +
                                    "-" +
                                    university.country.code_iso
                                }}</span>
                                <span v-else>{{
                                    university.country.name_pt +
                                    "-" +
                                    university.country.code_iso
                                }}</span>
                            </a>
                            <h1
                                class="mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"
                            >
                                {{ university.name }}
                            </h1>

                            <p
                                class="my-4 mt-2 py-4 text-gray-600"
                                v-html="university.description"
                            ></p>
                        </div>
                        <div>
                            <button
                                @click="toogleModal()"
                                class="flex cursor-pointer items-center space-x-2 rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-400 hover:border-white hover:bg-yellow-300 hover:text-white"
                            >
                                <ExclamationCircleIcon
                                    class="h-5 w-5"
                                />
                                <span class="hidden lg:block">{{
                                    $t("report")
                                }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="loading == 1" class="p-28">
                <Spin />
            </div>
            <NoContent v-else />
            <h1 class="py-2 text-center text-3xl font-bold text-primary-blue">
                {{ $t("ads-university") }} {{ university.name }}
            </h1>
            <div class="flex justify-end px-6">
                <router-link
                    v-if="user.type == 'particular' || user.type == 'admin'"
                    :to="{
                        name: 'add.ads',
                    }"
                    class="flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
                >
                    <PlusCircleIcon class="h-6 w-6" />
                    <p class="text-base leading-4">
                        {{ $tc("add", 2) }} {{ $t("ads") }}
                    </p>
                </router-link>
            </div>
            <div
                class="mt-4 grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-3"
            >
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700">{{ $t("key-words") }}</label>
                    <input
                        type="text"
                        v-model="filterAds.searchKey"
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div class="text-xs lg:text-sm">
                    <label class="text-gray-700" for="es">{{
                        $t("category")
                    }}</label>
                    <select
                        v-model="filterAds.category"
                        class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                    >
                        <option value="">--------------</option>
                        <option
                            v-for="category_announcement in categoryAnnouncements"
                            :key="category_announcement.id"
                            :value="category_announcement.id"
                        >
                            {{ category_announcement.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="bg-primary-blue p-2 shadow"></div>
            <div class="py-8">
                <div
                    class="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10"
                    v-if="filteredAnnouncement.length != 0"
                >
                    <div
                        class="relative overflow-hidden rounded-lg shadow-lg"
                        v-for="announcement in filteredAnnouncement"
                        :key="announcement.id"
                    >
                        <router-link
                            :to="{
                                name: 'show.ads',
                                params: {
                                    id: announcement.id,
                                    slug: announcement.slug,
                                },
                            }"
                        >
                            <div class="relative">
                                <div
                                    v-if="announcement.image[0]"
                                    class="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 p-2 text-center text-sm text-white"
                                >
                                    <span>{{ announcement.image.length }}</span>
                                </div>
                                <img
                                    class="h-48 w-full rounded-t-lg object-cover"
                                    v-if="announcement.image[0]"
                                    :src="announcement.image[0]"
                                    :alt="announcement.title"
                                />
                                <div
                                    v-else
                                    class="h-48 w-full overflow-hidden rounded-t-lg bg-gray-50 py-10"
                                >
                                    <MegaphoneIcon
                                        class="h-full w-full text-gray-500"
                                    />
                                </div>
                            </div>
                        </router-link>
                        <div class="space-y-2 px-4 py-2">
                            <a
                                href="#"
                                class="mt-2 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"
                            >
                                {{
                                    announcement.category.name.length <= 30
                                        ? announcement.category.name
                                        : announcement.category.name.substring(
                                              0,
                                              25
                                          ) + "..."
                                }}
                            </a>
                            <router-link
                                :to="{
                                    name: 'show.ads',
                                    params: {
                                        id: announcement.id,
                                        slug: announcement.slug,
                                    },
                                }"
                            >
                                <h1
                                    class="text-2xl font-bold capitalize text-gray-800 hover:underline"
                                >
                                    {{
                                        announcement.title.length <= 20
                                            ? announcement.title
                                            : announcement.title.substring(
                                                  0,
                                                  19
                                              ) + "..."
                                    }}
                                </h1>
                            </router-link>

                            <p class="mt-2 text-sm text-gray-600">
                                {{
                                    announcement.description.substring(0, 19) +
                                    "..."
                                }}
                            </p>
                        </div>
                        <div
                            class="flex h-10 items-center justify-between bg-gray-900 px-4 py-2"
                        >
                            <h1
                                class="text-lg font-bold text-white"
                                v-if="
                                    announcement.price &&
                                    announcement.price != 'null'
                                "
                            >
                                {{ announcement.price }}
                                {{ announcement.currency.symbol }}
                            </h1>
                            <div
                                class="flex items-center space-x-2 text-xs text-white"
                            >
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <router-link
                                        :to="{
                                            name: 'compte',
                                            params: {
                                                slug: announcement.user.slug,
                                                id: announcement.user.id,
                                            },
                                        }"
                                        class="hover:text-primary-blue"
                                        >{{
                                            announcement.user.firstname
                                        }}</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NoContent v-else />
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import {
    PlusCircleIcon,
    MegaphoneIcon,
    UserIcon,
    ExclamationCircleIcon,
} from "@heroicons/vue/24/solid";
import useUniversities from "@/services/universityServices.js";
import useAnnouncements from "@/services/announcementServices.js";
import usecategoryAnnouncements from "@/services/categoryAnnouncementServices.js";
import { useI18n } from "vue-i18n";
import Report from '@/components/Report.vue';
const { locale } = useI18n();
const props = defineProps({
    id: {
        required: true,
        type: String,
    },
    slug: {
        required: false,
        type: String,
    },
});
const openReport = ref(false);
const { university, getUniversity2, loading } = useUniversities();
const { categoryAnnouncements, getCategoryAnnouncements } =
    usecategoryAnnouncements();
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const { announcements, getAnnouncementsUniversity } = useAnnouncements();
onMounted(async () => {
    await getUniversity2(props.id);
    await getAnnouncementsUniversity(props.id);
    await getCategoryAnnouncements();
});
const filterAds = reactive({
    searchKey: "",
    category: "",
});

const filteredAnnouncement = computed(() => {
    return announcements.value.filter((announcement) => {
        let data = "";
        if (filterAds.category != "")
            data =
                announcement.title
                    .toLowerCase()
                    .includes(filterAds.searchKey.toLowerCase()) &&
                announcement.category.id == filterAds.category;
        else
            data = announcement.title
                .toLowerCase()
                .includes(filterAds.searchKey.toLowerCase());
        return data;
    });
});

const toogleModal = () => {
    openReport.value = !openReport.value;
};
</script>
