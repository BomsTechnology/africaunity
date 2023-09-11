<template>
    <Apply
        :toogleModal="
            () => {
                openApply = false;
            }
        "
        :open="openApply"
        :id="id"
    />
        <Report
        :open="openReport"
        :toogleModal="toogleModalReport"
        :id="id"
        :type="'Job'"
    />
    <div
        class="mx-auto flex min-h-screen w-full flex-col bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"
    >
        <div class="lg:w-[65%]">
            <div class="py-6 px-4" v-if="tender.length != 0">
                <div
                    class=" overflow-hidden rounded-lg bg-white shadow-md"
                >
                    <!-- Job -->
                    <div class="flex items-center space-x-4 px-4">
                        <img
                            v-if="tender.company_logo"
                            :src="tender.company_logo"
                            alt=""
                            class="h-28 w-28 object-cover"
                        />
                        <BuildingOffice2Icon
                            v-else
                            class="h-28 w-28 text-gray-500"
                        />
                        <span class="text-4xl font-bold text-gray-700">
                            {{ tender.company_name }}
                        </span>
                    </div>
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="rounded bg-primary-blue py-1 px-2 text-sm capitalize text-white"
                            >
                                <span>&nbsp; #{{ tender.reference}}</span> 
                            </a>

                            <h1
                                class=" mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"
                            >
                                {{ tender.title }}
                            </h1>
                            <div
                                class="mt-2 flex space-x-2 text-xs text-gray-500"
                            >
                                <div class="flex space-x-1">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a href="#" class="hover:text-primary-blue">
                                        {{
                                            new Date(
                                                tender.date
                                            ).toLocaleDateString(locale, {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            })
                                        }}</a
                                    >
                                </div>
                                <div class="flex space-x-1">
                                    <UserIcon class="h-4 w-4" />
                                    <router-link
                                        :to="{
                                            name: 'compte',
                                            params: {
                                                slug: tender.user.slug,
                                                id: tender.user.id,
                                            },
                                        }"
                                        class="hover:text-primary-blue"
                                        >{{
                                            tender.user.firstname
                                        }}</router-link
                                    >
                                </div>
                            </div>
                            <p
                                class=" my-4 mt-2 py-4 text-gray-600 break-words"
                                v-html="tender.description"
                            >
                                
                            </p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <router-link
                                    :to="{
                                        name: 'compte',
                                        params: {
                                            slug: tender.user.slug,
                                            id: tender.user.id,
                                        },
                                    }"
                                    class="flex items-center"
                                >
                                    <img
                                        v-if="tender.user.avatar"
                                        class="h-16 w-16 rounded-full object-cover shadow"
                                        :src="tender.user.avatar"
                                    />

                                    <UserCircleIcon
                                        v-else
                                        class="h-10 w-10 text-gray-700"
                                    />
                                    <span
                                        class=" mx-2 font-semibold text-gray-700"
                                        >{{ tender.user.firstname }}</span
                                    >
                                </router-link>

                                <div class="flex items-center">
                                    <div>
                                        <button
                                            @click="toogleModalReport()"
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
                                    <div
                                        class="ml-3"
                                        v-if="user.id == tender.user.id"
                                    >
                                        <router-link
                                            :to="{
                                                name: 'edit.tender',
                                                params: { id: tender.id },
                                            }"
                                        >
                                            <PencilSquareIcon
                                                class="h-5 w-5 cursor-pointer text-gray-400 hover:text-primary-blue"
                                            />
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center space-x-3 px-2 py-4">
                            <a
                                :href="
                                    'whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you ' +
                                    url
                                "
                            >
                                <svg
                                    fill="#25D366"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30 30"
                                    class="h-6 w-6"
                                >
                                    <path
                                        d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Comments -->
                    <div class="mt-4 px-8 py-4" v-if="tenderComments.length != 0">
                        <div
                            class="flex border-b py-4"
                            v-for="comment in tenderComments"
                            :key="comment.id"
                        >
                            <div>
                                <router-link
                                    :to="{
                                        name: 'compte',
                                        params: {
                                            slug: comment.user.slug,
                                            id: comment.user.id,
                                        },
                                    }"
                                >
                                    <div
                                        class="h-10 w-10 overflow-hidden rounded-full shadow md:h-20 md:w-20"
                                    >
                                        <img
                                            :src="comment.user.avatar"
                                            class="h-full w-full bg-cover object-cover"
                                            alt=""
                                            v-if="comment.user.avatar"
                                        />
                                        <UserCircleIcon
                                            v-else
                                            class="h-full w-full text-gray-500"
                                        />
                                    </div>
                                    <h1
                                        class="mt-2 text-center text-xs font-bold hover:underline lg:text-sm"
                                    >
                                        {{ comment.user.firstname }}
                                    </h1>
                                </router-link>
                                <h3
                                    class="text-center text-xs font-light lg:text-sm"
                                >
                                    {{
                                        new Date(
                                            comment.date
                                        ).toLocaleDateString(locale, {
                                            day: "numeric",
                                            year: "numeric",
                                            month: "long",
                                        })
                                    }}
                                </h3>
                            </div>

                            <div class="ml-2 w-full p-2 text-xs lg:text-lg">
                                {{ comment.content }}
                            </div>
                        </div>
                    </div>
                    <!-- Add Comment -->
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <form @submit.prevent="storeComment()">
                        <div class="mt-4 px-8 py-4">
                            <label class="text-gray-700" for="pt"
                                >Laisser un Commentaire
                                <span class="text-red-500">*</span></label
                            >
                            <textarea
                                v-model="comment.content"
                                required
                                type="text"
                                id="pt"
                                class="mt-2 block h-60 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                            >
                            </textarea>
                            <div class="mt-6">
                                <input
                                    type="hidden"
                                    v-model="comment.post_id"
                                />
                                <button
                                    v-if="loadingC == 0"
                                    type="submit"
                                    class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"
                                >
                                    {{ $t("save") }}
                                </button>
                                <button
                                    v-if="loadingC == 1"
                                    type="submit"
                                    disabled
                                    class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"
                                >
                                    <Spin :size="'small'" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div v-else-if="loading == 1" class="p-28">
                <svg
                    class="mx-auto h-16 w-16 animate-spin"
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
            </div>
            <NoContent v-else />
        </div>
        <div class="bg-white py-5 lg:w-[35%]">
            <div class="space-y-3 rounded-md py-5 px-10 shadow">
                <h1 class="text-2xl font-bold text-primary-blue">
                    Job {{ $t("details") }}
                </h1>
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                    <EnvelopeIcon class="h-6 w-6" />
                    <span>
                        {{ tender.company_email }}
                    </span>
                </div>
                <div class="grid gap-2 text-sm lg:grid-cols-2">
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="tender.continent"
                    >
                        <GlobeEuropeAfricaIcon class="h-6 w-6" />
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                tender.continent.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                tender.continent.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                tender.continent.name_es
                            }}</span>
                            <span v-else>{{ tender.continent.name_pt }}</span>
                        </span>
                    </div>
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="tender.zone"
                    >
                        <MapIcon class="h-6 w-6" />
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                tender.zone.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                tender.zone.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                tender.zone.name_es
                            }}</span>
                            <span v-else>{{ tender.zone.name_pt }}</span>
                        </span>
                    </div>
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="tender.country"
                    >
                        <FlagIcon class="h-6 w-6" />
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                tender.country.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                tender.country.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                tender.country.name_es
                            }}</span>
                            <span v-else>{{ tender.country.name_pt }}</span>
                        </span>
                    </div>
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="tender.city"
                    >
                        <BuildingOffice2Icon class="h-6 w-6" />
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                tender.city.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                tender.city.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                tender.city.name_es
                            }}</span>
                            <span v-else>{{ tender.city.name_pt }}</span>
                        </span>
                    </div>
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="tender.work_department"
                    >
                        <BriefcaseIcon class="h-6 w-6" />
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                tender.work_department.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                tender.work_department.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                tender.work_department.name_es
                            }}</span>
                            <span v-else>{{
                                tender.work_department.name_pt
                            }}</span>
                        </span>
                    </div>
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="tender.work_mode"
                    >
                        <ComputerDesktopIcon class="h-6 w-6" />
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                tender.work_mode.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                tender.work_mode.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                tender.work_mode.name_es
                            }}</span>
                            <span v-else>{{ tender.work_mode.name_pt }}</span>
                        </span>
                    </div>
                    <div class="flex items-center space-x-2 text-gray-500">
                        <MapPinIcon class="h-6 w-6" />
                        <span>
                            {{ tender.location }}
                        </span>
                    </div>
                    
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="tender.size_company"
                    >
                        <Squares2X2Icon class="h-6 w-6" />
                        <span>
                            <span v-if="$i18n.locale == 'en'">{{
                                tender.size_company.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                tender.size_company.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                tender.size_company.name_es
                            }}</span>
                            <span v-else>{{
                                tender.size_company.name_pt
                            }}</span>
                        </span>
                    </div>
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="
                            tender.company_website &&
                            tender.company_website != 'null'
                        "
                    >
                        <GlobeAltIcon class="h-6 w-6" />
                        <span>
                            {{ tender.company_website }}
                        </span>
                    </div>
                    <div
                        class="flex items-center space-x-2 text-gray-500"
                        v-if="tender.currency"
                    >
                        <BanknotesIcon class="h-6 w-6" />
                        <span>
                            {{ tender.min_price + tender.currency.symbol }}
                            -
                            {{ tender.max_price + tender.currency.symbol }}
                        </span>
                    </div>
                </div>

                <div class="flex items-center space-x-2 text-sm text-gray-500">
                    <LanguageIcon class="h-6 w-6" />
                    <span>
                        <ul class="flex space-x-2 py-1">
                            <li
                                v-for="lang in tender.languages"
                                :key="lang.id"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    lang.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    lang.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    lang.name_es
                                }}</span>
                                <span v-else>{{ lang.name_pt }}</span>
                            </li>
                        </ul>
                    </span>
                </div>
                <div class="flex items-center space-x-2 text-sm text-gray-500">
                    <CalendarIcon class="h-6 w-6" />
                    <span class="text-sm text-gray-500" v-if="tender.end_date">
                        {{
                            new Date(tender.end_date).toLocaleDateString(
                                locale,
                                {
                                    day: "numeric",
                                    year: "numeric",
                                    month: "long",
                                }
                            )
                        }}</span
                    >
                </div>
                <div v-if="user.type == 'particular' || user.type == 'admin'">
                    <!-- <button
                        type="button"
                        @click="toogleModal()"
                        class="w-full rounded bg-primary-blue px-3 py-2 text-white"
                    >
                        {{ $t("apply") }}
                    </button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeMount } from "vue";
import Error from "@/components/Error.vue";
import Apply from "@/components/Apply.vue";
import {
    ComputerDesktopIcon,
    GlobeAltIcon,
    Squares2X2Icon,
    AcademicCapIcon,
    LanguageIcon,
    MapIcon,
    FlagIcon,
    PlusCircleIcon,
    CalendarIcon,
    UserCircleIcon,
    FaceFrownIcon,
    MapPinIcon,
    PencilSquareIcon,
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    GlobeEuropeAfricaIcon,
    BanknotesIcon,
    BriefcaseIcon,
    BuildingOffice2Icon,
} from "@heroicons/vue/24/solid";
import useTenders from "@/services/tenderServices.js";
import useTenderComments from "@/services/tenderCommentServices.js";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import Report from '@/components/Report.vue';
import { ExclamationCircleIcon } from '@heroicons/vue/24/solid';

const {
    createTenderComment,
    errorsCmtAds,
    tenderComments,
    getTenderCommentsPost,
} = useTenderComments();
const { locale } = useI18n();
const router = useRouter();
const openApply = ref(false);
const { tender, getTender, loading, errors } = useTenders();
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const loadingC = ref(0);
const url = window.location.href;
const openReport = ref(false);
const comment = reactive({
    user_id: user.id,
    tender_id: "",
    content: "",
});
const props = defineProps({
    id: String,
    slug: {
        required: false,
        type: String,
    },
});
onBeforeMount(async () => {
    await getTender(props.id);
    await getTenderCommentsPost(props.id);
    comment.tender_id = tender.value.id;
});

const storeComment = async () => {
    loadingC.value = 1;
    await createTenderComment({ ...comment });
    loadingC.value = 0;
    comment.content = "";
    await getTenderCommentsPost(props.id);
};

const toogleModal = () => {
    openApply.value = !openApply.value;
};
const toogleModalReport = () => {
    openReport.value = !openReport.value;
};
</script>