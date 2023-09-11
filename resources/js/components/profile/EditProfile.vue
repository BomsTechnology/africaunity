<template>
    <div>
        <h1 class="text-center text-2xl font-bold text-gray-500">
            {{ $t("edit") }} {{ $t("your") }} {{ $t("profile") }}
        </h1>
        <form @submit.prevent="saveDetail()" class="py-7">
            <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="text-gray-700"
                        >{{ $t("status") }}
                        <span class="text-red-500">*</span></label
                    >
                    <select
                        v-model="detail.status_id"
                        required
                        class="form-input mt-3 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    >
                        <option
                            v-for="st in status"
                            :value="st.id"
                            :key="st.id"
                        >
                            <span v-if="$i18n.locale == 'en'">{{
                                st.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                st.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                st.name_es
                            }}</span>
                            <span v-else>{{ st.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div
                    v-else-if="
                        user.type == 'business1' || user.type == 'business2'
                    "
                    class="relative col-span-2"
                >
                    <label class="text-gray-700">{{
                        $t("social-object")
                    }}</label>
                    <textarea
                        v-model="detail.social_object"
                        class="mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>
                <div v-else class="relative col-span-2">
                    <label class="text-gray-700">{{
                        $t("goal-attribution")
                    }}</label>
                    <textarea
                        v-model="detail.goal_attribution"
                        class="mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>
                <div class="relative col-span-2">
                    <label class="text-gray-700">
                        {{ $t("adresse") + " " + $t("email") }}
                        <span class="text-red-500">*</span>
                        <span class="ml-4">
                            <input type="checkbox" v-model="user.hide_email" />
                            <span class="ml-2 text-xs font-light">Masquer</span>
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
                    <label class="text-gray-700">{{
                        $t("diplome-certification")
                    }}</label>
                    <textarea
                        v-model="detail.goal_attribution"
                        class="mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>
                <div class="relative col-span-2">
                    <label class="text-gray-700">{{
                        $t("presentation")
                    }}</label>
                    <textarea
                        :maxlength="user.type == 'business1' ||
                        user.type == 'business2' ? '2500' :'500'"
                        v-model="detail.presentation"
                        class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                    <span class="text-xs font-light text-gray-400"
                        >{{
                            detail.presentation ? detail.presentation.length : 0
                        }}
                        of <span v-if="user.type == 'business1' ||
                        user.type == 'business2'">2500</span> <span v-else>500</span>  Characters</span
                    >
                </div>
                <div class="relative col-span-2" v-if="user.type == 'particular'" >
                    <label class="text-gray-700">Curriculum vitæ</label>
                    <input
                        ref="file"
                        @change="handelFileObject"
                        accept="pdf"
                        type="file"
                        class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />
                    <span class="text-xs font-light text-gray-400"
                        >Veuillez uploader votre cv (pdf | 5mo max)
                    </span>
                </div>
                <div
                    v-if="
                        user.type == 'business1' ||
                        user.type == 'business2' ||
                        user.type == 'ip'
                    "
                    class="relative col-span-2"
                >
                    <label class="text-gray-700"
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
                    <label class="text-gray-700">{{ $t("adresse") }}</label>
                    <input
                        type="text"
                        v-model="detail.adress"
                        required
                        class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                    />
                </div>
                <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div v-if="user.type == 'particular'" class="relative">
                        <label class="text-gray-700"
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
                        <label class="text-gray-700"
                            >{{ $t("phone-number")
                            }}<span class="text-red-500">*</span>
                            <span class="ml-4">
                                <input
                                    type="checkbox"
                                    v-model="user.hide_phone"
                                />
                                <span class="ml-2 text-xs font-light"
                                    >Masquer</span
                                >
                            </span>
                        </label>
                        <input
                            type="text"
                            v-model="detail.phone_number"
                            required
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        />
                    </div>
                    <div v-if="user.type != 'particular'" class="relative">
                        <label class="text-gray-700"
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
                        v-if="
                            user.type != 'business1' && user.type != 'business2'
                        "
                    >
                        <label class="text-gray-700">
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
                            user.type != 'business1' && user.type != 'business2'
                                ? ''
                                : 'col-span-2',
                        ]"
                    >
                        <label class="text-gray-700">
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
                    :class="[
                        user.type != 'particular' && user.type != 'ip'
                            ? 'col-span-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
                            : 'col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2',
                    ]"
                >
                    <div class="relative">
                        <label class="text-gray-700">
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
                        <label class="text-gray-700">
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
                    <div class="relative" v-if="user.type != 'ip'">
                        <label class="text-gray-700">
                            <span>{{ $t("recruitment-agency") }}</span>
                            <span class="text-red-500"> *</span>
                        </label>
                        <div class="mt-2 flex items-center space-x-4 py-2">
                            <div>
                                <input
                                    type="radio"
                                    id="yes"
                                    value="1"
                                    v-model="user.recruitment_agency"
                                />
                                <label for="yes" class="ml-2">{{
                                    $tc("yes-no", 1)
                                }}</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="no"
                                    value="0"
                                    v-model="user.recruitment_agency"
                                />
                                <label for="no" class="ml-2">{{
                                    $tc("yes-no", 2)
                                }}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="text-gray-700"
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
                    <label class="text-gray-700"
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
                    <label class="text-gray-700">
                        <span v-if="user.type == 'particular'">{{
                            $t("birth-date")
                        }}</span>
                        <span v-else>{{ $t("create-date") }}</span>
                        <span class="mr-2 text-red-500"> *</span>
                        <input
                            type="checkbox"
                            v-if="user.type == 'particular'"
                            v-model="user.hide_birthday"
                        />
                        <span
                            v-if="user.type == 'particular'"
                            class="ml-2 text-xs font-light"
                            >Masquer</span
                        >
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
                        <label class="text-gray-700">
                            {{ $t("website") }}
                        </label>
                        <input
                            v-model="detail.website"
                            type="text"
                            placeholder="https://www.monsite.com"
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        />
                    </div>
                    <div class="relative">
                        <label class="text-gray-700"> Youtube </label>
                        <input
                            type="text"
                            v-model="detail.youtube"
                            placeholder="https://youtu.be/m0N965nXmXY"
                            class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                        />
                    </div>
                </div>
                <div v-if="user.type != 'ip'" class="relative col-span-2">
                    <label class="text-gray-700">
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
                    <label class="text-gray-700">{{ $t("o-activity") }}</label>
                    <textarea
                        v-model="detail.other_activity"
                        class="mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                    >
                    </textarea>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="text-gray-700">{{ $t("rsearch-p") }}</label>
                    <textarea
                        v-model="detail.search_partner"
                        class="mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
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
                        <Spin :size="'small'" />
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

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
const area_activities = ref([]);
const langs = ref([]);
const loading = ref(0);
const file = ref(null);
onMounted(async () => {
    for (const item of props.detail.activity_areas) {
        area_activities.value.push(item.id);
    }
    for (const item of props.detail.languages) {
        langs.value.push(item.id);
    }
});

const handelFileObject = () => {
    props.detail.cv_path = file.value.files[0];
};

const saveDetail = async () => {
    loading.value = 1;
    let formData = new FormData();

    formData.append("cv_path", props.detail.cv_path);
    formData.append("activity_areas", area_activities.value);
    formData.append("languages", langs.value);
    formData.append("hideEmail", props.user.hide_email);
    formData.append("hidePhone", props.user.hide_phone);
    formData.append("hideBirthday", props.user.hide_birthday);
    formData.append("recruitmentAgency", props.user.recruitment_agency);
    formData.append("status_id", props.detail.status_id);
    formData.append("social_object", props.detail.social_object);
    formData.append("goal_attribution", props.detail.goal_attribution);
    formData.append("presentation", props.detail.presentation);
    formData.append("name_responsible", props.detail.name_responsible);
    formData.append("sex", props.detail.sex ? props.detail.sex : 1);
    formData.append("adress", props.detail.adress);
    formData.append("phone_number", props.detail.phone_number);
    formData.append("phone_number_2", props.detail.phone_number_2);
    formData.append("navite_date", props.detail.navite_date);
    formData.append("website", props.detail.website);
    formData.append("youtube", props.detail.youtube);
    formData.append("other_activity", props.detail.other_activity);
    formData.append("search_partner", props.detail.search_partner);
    formData.append("business_type_id", props.detail.business_type_id);
    formData.append("business_size_id", props.detail.business_size_id);
    formData.append("legal_status_id", props.detail.legal_status_id);
    formData.append("native_country", props.detail.native_country);
    formData.append("residence_country", props.detail.residence_country);
    formData.append("_method", "PUT");

    await axios.post("/api/details/" + props.detail.id, formData, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        },
    });
    loading.value = 0;
    location.reload();
};
</script>
