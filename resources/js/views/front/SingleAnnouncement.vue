<template>
    <div
        class="mx-auto flex min-h-screen w-full flex-col bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"
    >
        <div class="lg:w-[70%]">
            <div class="py-6 px-4" v-if="announcement.length != 0">
                <div
                    class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md"
                >
                    <!-- Announcement -->
                    <img
                        v-if="announcement.image"
                        class="h-96 w-full object-cover"
                        :src="announcement.image"
                        alt=""
                    />
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"
                            >
                                {{ announcement.category.name }}
                            </a>
                            <h1
                                class="dark:text-white mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"
                            >
                                {{ announcement.title }}
                            </h1>
                            <div
                                class="mt-2 flex space-x-2 text-xs text-gray-500"
                            >
                                <div class="flex space-x-1">
                                    <CalendarIcon class="h-4 w-4" />
                                    <a href="#" class="hover:text-primary-blue">
                                        {{
                                            new Date(
                                                announcement.date
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
                            <p
                                class="dark:text-gray-400 my-4 mt-2 py-4 text-gray-600"
                            >
                                {{ announcement.description }}
                            </p>
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <router-link
                                    :to="{
                                        name: 'compte',
                                        params: {
                                            slug: announcement.user.slug,
                                            id: announcement.user.id,
                                        },
                                    }"
                                    class="flex items-center"
                                >
                                    <img
                                        v-if="announcement.user.avatar"
                                        class="h-16 w-16 rounded-full object-cover shadow"
                                        :src="announcement.user.avatar"
                                    />

                                    <UserCircleIcon
                                        v-else
                                        class="h-10 w-10 text-gray-700"
                                    />
                                    <span
                                        class="dark:text-gray-200 mx-2 font-semibold text-gray-700"
                                        >{{ announcement.user.firstname }}</span
                                    >
                                </router-link>

                                <div class="flex items-center">
                                    <div
                                        class="ml-3"
                                        v-if="user.id == announcement.user.id"
                                    >
                                        <router-link
                                            :to="{
                                                name: 'edit.ads',
                                                params: { id: announcement.id },
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
                            <!-- facebook icons -->
                            <!-- <a :href="'https://www.facebook.com/sharer/sharer.php?u='+url" data-network="facebook" target="_blank" rel="noopener noreferrer">
                                <svg fill="#3b5998" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" class="h-6 w-6"><path d="M27,15c0,6.627-5.373,12-12,12S3,21.627,3,15S8.373,3,15,3S27,8.373,27,15z M19.181,8.131C18.877,8.09,18.235,8,17.021,8 C14.486,8,13,9.339,13,12.389V14h-3v3h3v7.799C13.646,24.93,14.315,25,15,25c0.338,0,0.671-0.018,1-0.05V17h2.726l0.428-3H16 v-1.282C16,11.568,16.376,11,17.452,11h1.729V8.131z"/></svg>
                            </a> -->
                            <!-- wathsapp icons -->
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
                            <!-- twitter icon -->
                            <!-- <a :href="'https://twitter.com/intent/tweet?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you&url='+url" data-network="twitter" target="_blank">
                                <svg fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" class="h-6 w-6">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
                            </a> -->
                        </div>
                    </div>
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
            <div
                v-else
                class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500"
            >
                <FaceFrownIcon class="h-16 w-16" />
                <span class="mt-2 text-2xl">{{ $t("no-content") }}</span>
            </div>
        </div>
        <div class="bg-white py-5 lg:w-[30%]">
            <div class="space-y-3 rounded-md py-5 px-10 shadow">
                <h1 class="text-2xl font-bold text-primary-blue">
                    {{ $t("details") }}
                </h1>
                <div
                    class="flex items-center space-x-2 text-gray-500"
                    v-if="announcement.university"
                >
                    <MapPinIcon class="h-8 w-8" />
                    <span>{{ announcement.university.name }}</span>
                </div>
                <div
                    class="flex items-center space-x-2 text-gray-500"
                    v-if="announcement.email"
                >
                    <EnvelopeIcon class="h-8 w-8" />
                    <span>{{ announcement.email }}</span>
                </div>
                <div
                    class="flex items-center space-x-2 text-gray-500"
                    v-if="announcement.phone"
                >
                    <PhoneIcon class="h-8 w-8" />
                    <span>{{ announcement.phone }} </span>
                </div>
                <div
                    class="flex items-center space-x-2 text-gray-500"
                    v-if="
                        announcement.website && announcement.website != 'null'
                    "
                >
                    <GlobeEuropeAfricaIcon class="h-8 w-8" />
                    <span>{{ announcement.website }} </span>
                </div>
                <div
                    class="flex items-center space-x-2 text-gray-500"
                    v-if="announcement.adress && announcement.adress != 'null'"
                >
                    <BriefcaseIcon class="h-8 w-8" />
                    <span>{{ announcement.adress }} </span>
                </div>
                <div
                    class="flex items-center space-x-2 text-gray-500"
                    v-if="announcement.currency && announcement.price != 'null'"
                >
                    <BanknotesIcon class="h-8 w-8" />
                    <span
                        >{{ announcement.price }}
                        {{ announcement.currency.symbol }}
                    </span>
                </div>
            </div>
            <div class="mt-4 rounded-md py-5 shadow">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <div
                    v-if="loadingC == 2"
                    class="bg-green-50 py-4 px-2 text-green-700"
                >
                    <p>
                        {{ $t("msg-contact-sucess") }}
                    </p>
                </div>
                <form v-else @submit.prevent="sendContact()">
                    <div class="px-8">
                        <label
                            class="text-xl font-bold text-primary-blue"
                            for="pt"
                            >{{ $t("contact-ads") }}
                            <span class="text-red-500">*</span></label
                        >
                        <textarea
                            v-model="contact.content"
                            required
                            type="text"
                            id="pt"
                            class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-60 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                        >
                        </textarea>

                        <div class="mt-6">
                            <input type="hidden" />
                            <button
                                v-if="loadingC == 0"
                                type="submit"
                                class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"
                            >
                                {{ $t("send") }}
                            </button>
                            <button
                                v-if="loadingC == 1"
                                type="submit"
                                disabled
                                class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"
                            >
                                {{ $t("send") }}...
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
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Error from "@/components/Error.vue";
import {
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
} from "@heroicons/vue/24/solid";
import useAnnouncements from "@/services/announcementServices.js";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const router = useRouter();
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

const url = window.location.href;
const { announcement, getAnnouncement2, loading, errors } = useAnnouncements();
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const loadingC = ref(0);
onMounted(async () => {
    await getAnnouncement2(props.id);
});

const contact = reactive({
    user: user.id,
    ads: props.id,
    content: "",
});

const sendContact = async () => {
    errors.value = "";
    try {
        loadingC.value = 1;
        await axios.post("/api/announcement-send-contact", contact, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loadingC.value = 2;
    } catch (e) {
        if (e.response.status == 422) {
            loadingC.value = 0;
            for (const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + "\n";
        }
    }
};
</script>
