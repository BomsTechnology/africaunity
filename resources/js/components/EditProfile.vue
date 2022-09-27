<template>
    <div>
        <form @submit.prevent="saveDetail()" class="py-7">
            <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700"
                        >{{ $t("status") }}
                        <span class="text-red-500">*</span></label
                    >
                    <select
                        v-model="detail.status"
                        required
                        class="form-input mt-3 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option value="1">{{ $t("actif") }}</option>
                        <option value="0">{{ $t("no-actif") }}</option>
                    </select>
                </div>
                <div
                    v-else-if="
                        user.type == 'business1' || user.type == 'business2'
                    "
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("social-object")
                    }}</label>
                    <textarea
                        v-model="detail.social_object"
                        class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>
                <div v-else class="relative col-span-2">
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("goal-attribution")
                    }}</label>
                    <textarea
                        v-model="detail.goal_attribution"
                        class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>
                <div class="relative col-span-2">
                    <label class="dark:text-gray-200 text-gray-700">
                        {{ $t("adresse") + " " + $t("email") }}
                        <span class="text-red-500">*</span>
                        <span class="ml-4">
                            <input type="checkbox" v-model="user.hide_email" />
                            <span class="text-xs font-light">Masquer</span>
                        </span>
                    </label>
                    <input
                        type="email"
                        v-model="user.email"
                        required
                        disabled
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-500 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("diplome-certification")
                    }}</label>
                    <textarea
                        v-model="detail.goal_attribution"
                        class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>
                <div class="relative col-span-2">
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("presentation")
                    }}</label>
                    <textarea
                        maxlength="500"
                        v-model="detail.presentation"
                        class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                    <span class="text-xs font-light text-gray-400"
                        >{{
                            detail.presentation ? detail.presentation.length : 0
                        }}
                        of 500 Characters</span
                    >
                </div>
                <div
                    v-if="
                        user.type == 'business1' ||
                        user.type == 'business2' ||
                        user.type == 'ip'
                    "
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700"
                        >{{ $t("name-responsable")
                        }}<span class="text-red-500">*</span></label
                    >
                    <input
                        type="text"
                        v-model="detail.name_responsible"
                        required
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div
                    v-if="
                        user.type == 'business1' ||
                        user.type == 'business2' ||
                        user.type == 'ip'
                    "
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("adresse")
                    }}</label>
                    <input
                        type="text"
                        v-model="detail.adress"
                        required
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div v-if="user.type == 'particular'" class="relative">
                        <label class="dark:text-gray-200 text-gray-700"
                            >{{ $t("sex") }}
                            <span class="text-red-500">*</span></label
                        >
                        <select
                            v-model="detail.sex"
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        >
                            <option value="1">{{ $t("male") }}</option>
                            <option value="2">{{ $t("female") }}</option>
                        </select>
                    </div>
                    <div class="relative">
                        <label class="dark:text-gray-200 text-gray-700"
                            >{{ $t("phone-number")
                            }}<span class="text-red-500">*</span></label
                        >
                        <input
                            type="text"
                            v-model="detail.phone_number"
                            required
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        />
                    </div>
                    <div v-if="user.type != 'particular'" class="relative">
                        <label class="dark:text-gray-200 text-gray-700"
                            >{{ $t("phone-number") }} 2</label
                        >
                        <input
                            type="text"
                            v-model="detail.phone_number_2"
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        />
                    </div>
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div
                        class="relative"
                        v-if="user.type == 'particular' || user.type == 'ip'"
                    >
                        <label class="dark:text-gray-200 text-gray-700">
                            <span>{{ $t("native-country") }}</span>
                            <span class="text-red-500"> *</span>
                        </label>
                        <select
                            v-model="detail.native_country"
                            required
                            class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option
                                v-for="country in countries"
                                :key="country.id"
                                :value="country.id"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    country.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    country.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    country.name_es
                                }}</span>
                                <span v-else>{{ country.name_pt }}</span>
                            </option>
                        </select>
                    </div>
                    <div
                        :class="[
                            user.type == 'particular' || user.type == 'ip'
                                ? ''
                                : 'col-span-2',
                        ]"
                    >
                        <label class="dark:text-gray-200 text-gray-700">
                            <span
                                v-if="
                                    user.type == 'particular' ||
                                    user.type == 'ip'
                                "
                                >{{ $t("residence-country") }}</span
                            >
                            <span v-else>{{ $t("social-country") }}</span>
                            <span class="text-red-500"> *</span>
                        </label>
                        <select
                            v-model="detail.residence_country"
                            required
                            class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
                        >
                            <option
                                v-for="country in countries"
                                :key="country.id"
                                :value="country.id"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    country.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    country.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    country.name_es
                                }}</span>
                                <span v-else>{{ country.name_pt }}</span>
                            </option>
                        </select>
                    </div>
                </div>
                <div
                    v-if="user.type != 'particular'"
                    class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"
                >
                    <div class="relative">
                        <label class="dark:text-gray-200 text-gray-700">
                            <span v-if="user.type == 'ip'">{{
                                $t("perimetre")
                            }}</span>
                            <span v-else>{{ $t("type-company") }}</span>
                            <span class="text-red-500"> *</span>
                        </label>
                        <select
                            v-model="detail.business_type_id"
                            required
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        >
                            <option
                                v-for="businessType in businessTypes"
                                :key="businessType.id"
                                :value="businessType.id"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    businessType.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    businessType.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    businessType.name_es
                                }}</span>
                                <span v-else>{{ businessType.name_pt }}</span>
                            </option>
                        </select>
                    </div>
                    <div class="relative">
                        <label class="dark:text-gray-200 text-gray-700">
                            <span v-if="user.type == 'ip'">{{
                                $t("size-institution")
                            }}</span>
                            <span v-else>{{ $t("size-company") }}</span>
                            <span class="text-red-500"> *</span>
                        </label>
                        <select
                            v-model="detail.business_size_id"
                            required
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        >
                            <option
                                v-for="BusinessSize in businessSizes"
                                :key="BusinessSize.id"
                                :value="BusinessSize.id"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    BusinessSize.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    BusinessSize.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    BusinessSize.name_es
                                }}</span>
                                <span v-else>{{ BusinessSize.name_pt }}</span>
                            </option>
                        </select>
                    </div>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700"
                        >{{ $t("speak-language") }}
                        <span class="hidden text-xs font-light lg:inline-block"
                            >({{ $t("maintain-crtl") }})</span
                        >
                        <span class="text-red-500"> *</span></label
                    >
                    <select
                        multiple
                        size="4"
                        required
                        v-model="langs"
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option
                            v-for="language in languages"
                            :key="language.id"
                            :value="language.id"
                        >
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
                        </option>
                    </select>
                </div>
                <div
                    v-if="user.type == 'business1' || user.type == 'business2'"
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700"
                        >{{ $t("legal-status")
                        }}<span class="text-red-500"> *</span></label
                    >
                    <select
                        v-model="detail.legal_status_id"
                        required
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option
                            v-for="legalStatus in legalStatuses"
                            :key="legalStatus.id"
                            :value="legalStatus.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                legalStatus.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                legalStatus.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                legalStatus.name_es
                            }}</span>
                            <span v-else>{{ legalStatus.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div class="relative col-span-2">
                    <label class="dark:text-gray-200 text-gray-700">
                        <span v-if="user.type == 'particular'">{{
                            $t("birth-date")
                        }}</span>
                        <span v-else>{{ $t("create-date") }}</span>
                        <span class="text-red-500"> *</span>
                    </label>
                    <input
                        type="date"
                        v-model="detail.navite_date"
                        required
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div class="relative">
                        <label class="dark:text-gray-200 text-gray-700">
                            {{ $t("website") }}
                        </label>
                        <input
                            v-model="detail.website"
                            type="url"
                            placeholder="https://www.monsite.com"
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        />
                    </div>
                    <div class="relative">
                        <label class="dark:text-gray-200 text-gray-700">
                            Youtube
                        </label>
                        <input
                            type="url"
                            v-model="detail.youtube"
                            placeholder="https://youtu.be/m0N965nXmXY"
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        />
                    </div>
                </div>
                <div v-if="user.type != 'ip'" class="relative col-span-2">
                    <label class="dark:text-gray-200 text-gray-700">
                        {{ $t("activity-area") }}
                        <span class="hidden text-xs font-light lg:inline-block"
                            >({{ $t("maintain-crtl") }})</span
                        >
                        <span class="text-red-500"> *</span>
                    </label>
                    <select
                        multiple
                        size="4"
                        required
                        v-model="area_activities"
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option
                            v-for="activity in activityAreas"
                            :key="activity.id"
                            :value="activity.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                activity.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                activity.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                activity.name_es
                            }}</span>
                            <span v-else>{{ activity.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("o-activity")
                    }}</label>
                    <textarea
                        v-model="detail.other_activity"
                        class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="dark:text-gray-200 text-gray-700">{{
                        $t("rsearch-p")
                    }}</label>
                    <textarea
                        v-model="detail.search_partner"
                        class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>

                <div class="col-span-2">
                    <button
                        v-if="loading == 0"
                        type="submit"
                        class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"
                    >
                        {{ $t("save") }}
                    </button>
                    <button
                        v-if="loading == 1"
                        disabled
                        type="submit"
                        class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"
                    >
                        <svg
                            class="mr-3 h-5 w-5 animate-spin text-white"
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
                        {{ $t("save") }}...
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import Error from "./Error.vue";
import { UserIcon, LockClosedIcon, MailIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted } from "vue";

const props = defineProps({
    user: Object,
    detail: Object,
    languages: Array,
    businessTypes: Array,
    businessSizes: Array,
    activityAreas: Array,
    legalStatuses: Array,
    countries: Array,
});
const area_activities = ref([]);
const langs = ref([]);
const loading = ref(0);

onMounted(async () => {
    for (const item of props.detail.activity_areas) {
        area_activities.value.push(item.id);
    }
    for (const item of props.detail.languages) {
        langs.value.push(item.id);
    }
});

const saveDetail = async () => {
    loading.value = 1;
    props.detail.activity_areas = area_activities.value;
    props.detail.languages = langs.value;
    props.detail.hideEmail = props.user.hide_email;
    await axios.put("/api/details/" + props.detail.id, props.detail, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        },
    });
    loading.value = 2;
    location.reload();
};
</script>
