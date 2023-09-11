<script setup>
import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    user: Object,
    detail: Object,
    status: Object,
    languages: Array,
    businessTypes: Array,
    businessSizes: Array,
    activityAreas: Array,
    legalStatuses: Array,
    countries: Array,
});

const url = window.location.href;
</script>

<template>
    <div>
        <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div
                v-if="user.type == 'particular'"
                class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
                <div class="relative border-b py-2">
                    <label class="text-md py-1 font-semibold text-gray-700">{{
                        $t("firstname")
                    }}</label>
                    <p class="mt-1 rounded-lg border p-2 shadow">
                        {{ user.firstname }}
                    </p>
                </div>
                <div class="relative border-b py-2">
                    <label class="text-md py-1 font-semibold text-gray-700">{{
                        $t("lastname")
                    }}</label>
                    <p class="mt-1 rounded-lg border p-2 shadow">
                        {{ user.lastname }}
                    </p>
                </div>
            </div>
            <div
                v-else-if="user.type == 'business1' || user.type == 'business2'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("social-reason")
                }}</label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ user.firstname }}
                </p>
            </div>
            <div v-else class="relative col-span-2 border-b py-2">
                <label class="text-md py-1 font-semibold text-gray-700"
                    >{{ $t("denomination") }}
                </label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ user.firstname }}
                </p>
            </div>
            <div v-if="user.type == 'particular'" class="relative col-span-2">
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("status")
                }}</label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    <span v-if="$i18n.locale == 'en'">{{
                        detail.status.name_en
                    }}</span>
                    <span v-else-if="$i18n.locale == 'fr'">{{
                        detail.status.name_fr
                    }}</span>
                    <span v-else-if="$i18n.locale == 'es'">{{
                        detail.status.name_es
                    }}</span>
                    <span v-else>{{ detail.status.name_pt }}</span>
                </p>
            </div>
            <div
                v-else-if="user.type == 'business1' || user.type == 'business2'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("social-object")
                }}</label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ detail.social_object }}
                </p>
            </div>
            <div
                v-else-if="user.type == 'ip'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("goal-attribution")
                }}</label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ detail.goal_attribution }}
                </p>
            </div>
            <div
                class="relative col-span-2 border-b py-2"
                v-if="!user.hide_email"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("adresse") + " " + $t("email")
                }}</label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ user.email }}
                </p>
            </div>
            <div
                v-if="user.type == 'particular'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("diplome-certification")
                }}</label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ detail.goal_attribution }}
                </p>
            </div>
            <div class="relative col-span-2 border-b py-2" v-if="user.type == 'particular' && detail.cv_path">
                <label class="text-md py-1 font-semibold text-gray-700"
                    >Curriculum vitæ</label
                >
                <p  class="mt-1 rounded-lg border p-2 shadow flex items-center space-x-4 flex-wrap">
                    <a
                        :href="detail.cv_path"
                        class="text-primary-blue hover:underline"
                        target="_blank"
                        >{{ user.firstname + ' ' +  user.lastname }}</a
                    >
                    <div class=" flex items-center space-x-2">
                        <span> <a
                        :href="detail.cv_path"
                        class="hover:text-primary-blue hover:underline"
                        target="_blank"> <EyeIcon class=" w-5 h-5"/></a
                    ></span>
                        <span> <a
                        :href="detail.cv_path"
                        class="hover:text-primary-blue hover:underline"
                        
                        :download="user.email"
                        target="_blank"> <ArrowDownTrayIcon class=" w-5 h-5"/></a
                    ></span>
                    </div>
                </p>
            </div>
            <div
                v-if="
                    user.type == 'business1' ||
                    user.type == 'business2' ||
                    user.type == 'ip'
                "
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("name-responsable")
                }}</label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ detail.name_responsible }}
                </p>
            </div>
            <div
                v-if="
                    user.type == 'business1' ||
                    user.type == 'business2' ||
                    user.type == 'ip'
                "
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("adresse")
                }}</label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ detail.adress }}
                </p>
            </div>
            <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div
                    v-if="user.type == 'particular'"
                    class="relative border-b py-2"
                >
                    <label class="text-md py-1 font-semibold text-gray-700">{{
                        $t("sex")
                    }}</label>
                    <p class="mt-1 rounded-lg border p-2 shadow">
                        <span v-if="detail.sex == 1">{{ $t("male") }}</span>
                        <span v-else>{{ $t("female") }}</span>
                    </p>
                </div>
                <div v-if="!user.hide_phone" class="relative border-b py-2">
                    <label class="text-md py-1 font-semibold text-gray-700">{{
                        $t("phone-number")
                    }}</label>
                    <p class="mt-1 rounded-lg border p-2 shadow">
                        {{ detail.phone_number }}
                    </p>
                </div>
                <div
                    v-if="user.type != 'particular' && !user.hide_phone"
                    class="relative border-b py-2"
                >
                    <label class="text-md py-1 font-semibold text-gray-700"
                        >{{ $t("phone-number") }} 2</label
                    >
                    <p class="mt-1 rounded-lg border p-2 shadow">
                        {{ detail.phone_number_2 }}
                    </p>
                </div>
            </div>
            <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div
                    class="relative border-b py-2"
                    v-if="user.type == 'particular' || user.type == 'ip'"
                >
                    <label class="text-md py-1 font-semibold text-gray-700">
                        <span>{{ $t("native-country") }}</span>
                    </label>
                    <ul class="mt-1 rounded-lg border p-2 shadow">
                        <li v-if="detail.country_native">
                            <span v-if="$i18n.locale == 'en'">{{
                                detail.country_native.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                detail.country_native.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                detail.country_native.name_es
                            }}</span>
                            <span v-else>{{
                                detail.country_native.name_pt
                            }}</span>
                        </li>
                    </ul>
                </div>
                <div
                    :class="[
                        user.type == 'particular' || user.type == 'ip'
                            ? 'border-b py-2'
                            : 'col-span-2 border-b py-2',
                    ]"
                >
                    <label class="text-md py-1 font-semibold text-gray-700">
                        <span
                            v-if="
                                user.type == 'particular' || user.type == 'ip'
                            "
                            >{{ $t("residence-country") }}</span
                        >
                        <span v-else>{{ $t("social-country") }}</span>
                    </label>
                    <ul class="mt-1 rounded-lg border p-2 shadow">
                        <li v-if="detail.country_residence">
                            <span v-if="$i18n.locale == 'en'">{{
                                detail.country_residence.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                detail.country_residence.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                detail.country_residence.name_es
                            }}</span>
                            <span v-else>{{
                                detail.country_residence.name_pt
                            }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                v-if="user.type != 'particular'"
                class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
                <div class="relative border-b py-2">
                    <label class="text-md py-1 font-semibold text-gray-700">
                        <span v-if="user.type == 'ip'">{{
                            $t("perimetre")
                        }}</span>
                        <span v-else>{{ $t("type-company") }}</span>
                    </label>
                    <ul class="mt-1 rounded-lg border p-2 shadow">
                        <li v-if="detail.business_type">
                            <span v-if="$i18n.locale == 'en'">{{
                                detail.business_type.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                detail.business_type.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                detail.business_type.name_es
                            }}</span>
                            <span v-else>{{
                                detail.business_type.name_pt
                            }}</span>
                        </li>
                    </ul>
                </div>
                <div class="relative border-b py-2">
                    <label class="text-md py-1 font-semibold text-gray-700">
                        <span v-if="user.type == 'ip'">{{
                            $t("size-institution")
                        }}</span>
                        <span v-else>{{ $t("size-company") }}</span>
                    </label>
                    <ul class="mt-1 rounded-lg border p-2 shadow">
                        <li v-if="detail.business_size">
                            <span v-if="$i18n.locale == 'en'">{{
                                detail.business_size.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                detail.business_size.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                detail.business_size.name_es
                            }}</span>
                            <span v-else>{{
                                detail.business_size.name_pt
                            }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                v-if="user.type == 'particular'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("speak-language")
                }}</label>
                <ul class="mt-1 rounded-lg border p-2 shadow">
                    <li v-for="language in languages" :key="language.id">
                        <span v-for="lang in detail.languages" :key="lang.id">
                            <span v-if="lang.id === language.id">
                                <span v-if="$i18n.locale == 'en'">{{
                                    language.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    language.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    language.name_es
                                }}</span>
                                <span v-else>{{ language.name_pt }}</span>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div
                v-if="user.type == 'business1' || user.type == 'business2'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">{{
                    $t("legal-status")
                }}</label>
                <ul class="mt-1 rounded-lg border p-2 shadow">
                    <li v-if="detail.legal_status">
                        <span v-if="$i18n.locale == 'en'">{{
                            detail.legal_status.name_en
                        }}</span>
                        <span v-else-if="$i18n.locale == 'fr'">{{
                            detail.legal_status.name_fr
                        }}</span>
                        <span v-else-if="$i18n.locale == 'es'">{{
                            detail.legal_status.name_es
                        }}</span>
                        <span v-else>{{ detail.legal_status.name_pt }}</span>
                    </li>
                </ul>
            </div>
            <div
                class="relative col-span-2 border-b py-2"
                v-if="!user.hide_birthday"
            >
                <label class="text-md py-1 font-semibold text-gray-700">
                    <span v-if="user.type == 'particular'">{{
                        $t("birth-date")
                    }}</span>
                    <span v-else>{{ $t("create-date") }}</span>
                </label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ detail.navite_date }}
                </p>
            </div>
            <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="relative border-b py-2">
                    <label class="text-md py-1 font-semibold text-gray-700">
                        {{ $t("website") }}
                    </label>
                    <p class="mt-1 rounded-lg border p-2 shadow">
                        <a
                        v-if="detail.website"
                            target="_blank"
                            class="block py-1 italic text-primary-blue hover:underline break-words"
                            :href="'https://' + detail.website.replaceAll('https://','').replaceAll('http://','')"
                            >{{ detail.website }}</a
                        >
                    </p>
                </div>
                <div class="relative border-b py-2">
                    <label class="text-md py-1 font-semibold text-gray-700">
                        Youtube
                    </label>
                    <p class="mt-1 rounded-lg border p-2 shadow">
                        <a
                            v-if="detail.youtube"
                            target="_blank"
                            class="block py-1 italic hover:underline"
                            :href="'https://' + detail.youtube.replaceAll('https://','').replaceAll('http://','')"
                            >Youtube</a
                        >
                    </p>
                </div>
            </div>
            <div
                v-if="user.type != 'ip'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">
                    {{ $t("activity-area") }}
                </label>
                <ul class="mt-1 rounded-lg border p-2 shadow">
                    <li
                        v-for="activityArea in activityAreas"
                        :key="activityArea.id"
                    >
                        <span
                            v-for="activity_area in detail.activity_areas"
                            :key="activity_area.id"
                        >
                            <span v-if="activity_area.id === activityArea.id">
                                <span v-if="$i18n.locale == 'en'">{{
                                    activityArea.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    activityArea.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    activityArea.name_es
                                }}</span>
                                <span v-else>{{ activityArea.name_pt }}</span>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div
                v-if="user.type == 'particular'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">
                    {{ $t("o-activity") }}
                </label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ detail.other_activity }}
                </p>
            </div>
            <div
                v-if="user.type == 'particular'"
                class="relative col-span-2 border-b py-2"
            >
                <label class="text-md py-1 font-semibold text-gray-700">
                    {{ $t("rsearch-p") }}
                </label>
                <p class="mt-1 rounded-lg border p-2 shadow">
                    {{ detail.search_partner }}
                </p>
            </div>
            <div class="flex items-center space-x-3 px-2 py-4">
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
            </div>
        </div>
    </div>
</template>
