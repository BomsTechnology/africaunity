<template>
    <div>
        <form  @submit.prevent="saveDetail()" class="py-7" >
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div v-if="user.type == 'particular'" class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('status') }} <span class="text-red-500">*</span></label>
                            <select
                                v-model="detail.status"
                                required
                                class="form-input px-3 pr-2  w-full mt-3 placeholder:text-gray-400 text-gray-700 bg-white border border-gray-200 rounded-md  focus:ring-primary-blue focus:border-primary-blue block"
                            >
                                <option value="1">{{ $t('actif') }}</option>
                                <option value="0">{{ $t('no-actif') }}</option>
                            </select>
                        </div>
                        <div  
                            v-else-if="
                                user.type == 'business1' || user.type == 'business2'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('social-object') }}</label>
                            <textarea v-model="detail.social_object" class="block w-full px-4 py-2 h-20 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>
                        <div v-else class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('goal-attribution') }}</label>
                            <textarea v-model="detail.goal_attribution"  class="block w-full px-4 py-2 h-20 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>
                        <div class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('adresse') + ' ' + $t('email') }} <span class="text-red-500">*</span></label>
                            <input
                                type="email"
                                v-model="user.email"
                                required
                                disabled
                                class="form-input px-3 pr-2  w-full text-gray-500 bg-white border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div  
                            v-if="user.type == 'particular'"
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('diplome-certification') }}</label>
                            <textarea v-model="detail.goal_attribution" class="block w-full px-4 py-2 h-20 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>
                        <div  
                            class="relative col-span-2">
                            <label  class="text-gray-700 dark:text-gray-200">{{ $t('presentation') }}</label>
                            <textarea maxlength="500"  v-model="detail.presentation" class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                            <span class="text-xs font-light text-gray-400">{{ detail.presentation ? detail.presentation.length : 0 }} of 500 Characters</span>
                        </div>
                        <div
                            v-if="
                                user.type == 'business1' || user.type == 'business2' || user.type == 'ip'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('name-responsable') }}<span class="text-red-500">*</span></label>
                            <input
                                type="text"
                                v-model="detail.name_responsible"
                                required
                                class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div
                            v-if="
                                user.type == 'business1' || user.type == 'business2' || user.type == 'ip'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('adresse') }}</label>
                            <input
                                type="text"
                                v-model="detail.adress"
                                required
                                class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div v-if="user.type == 'particular'"  class="relative">
                                <label class="text-gray-700 dark:text-gray-200">{{ $t('sex') }} <span class="text-red-500">*</span></label>
                                <select 
                                    v-model="detail.sex"
                                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                >
                                    <option value="1">{{ $t('male') }}</option>
                                    <option value="2">{{ $t('female') }}</option>
                                </select>
                            </div>
                            <div class="relative">
                                <label class="text-gray-700 dark:text-gray-200">{{ $t('phone-number') }}<span class="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    v-model="detail.phone_number"
                                    required
                                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                            <div v-if="user.type != 'particular'" class="relative">
                                <label class="text-gray-700 dark:text-gray-200">{{ $t('phone-number') }} 2</label>
                                <input
                                    type="text"
                                    v-model="detail.phone_number_2"
                                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div class="relative" v-if="user.type == 'particular' || user.type == 'ip'">
                                <label class="text-gray-700 dark:text-gray-200">
                                    <span>{{ $t('native-country') }}</span> 
                                    <span class="text-red-500"> *</span>
                                </label>
                                <select 
                                    v-model="detail.native_country"
                                    required class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                                    <option v-for="country in countries" :key="country.id" :value="country.id">
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
                            <div  :class="[user.type == 'particular' || user.type == 'ip' ? '' : 'col-span-2']">
                                <label class="text-gray-700 dark:text-gray-200">
                                    <span v-if="user.type == 'particular' || user.type == 'ip'">{{ $t('residence-country') }}</span>
                                    <span v-else>{{ $t('social-country') }}</span>
                                    <span class="text-red-500"> *</span>
                                </label>
                                <select 
                                    v-model="detail.residence_country"
                                    required class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                                    <option v-for="country in countries" :key="country.id" :value="country.id">
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
                        <div v-if="user.type != 'particular'" class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div class="relative">
                                <label class="text-gray-700 dark:text-gray-200">
                                    <span v-if="user.type == 'ip'">{{ $t('perimetre') }}</span>
                                    <span v-else>{{ $t('type-company') }}</span> 
                                    <span class="text-red-500"> *</span>
                                </label>
                                <select
                                    v-model="detail.business_type_id"
                                    required
                                    class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                >
                                    <option v-for="businessType in businessTypes" :key="businessType.id" :value="businessType.id">
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
                                <label class="text-gray-700 dark:text-gray-200">
                                    <span v-if="user.type == 'ip'">{{ $t('size-institution') }}</span>
                                    <span v-else>{{ $t('size-company') }}</span>
                                    <span class="text-red-500"> *</span>
                                </label>
                                <select
                                    v-model="detail.business_size_id"
                                    required
                                    class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                >
                                    <option v-for="BusinessSize in businessSizes" :key="BusinessSize.id" :value="BusinessSize.id">
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
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('speak-language') }} <span class="text-red-500"> *</span></label>
                            <select
                                multiple
                                size="4"
                                required
                                v-model="langs"
                                class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            >
                                <option v-for="language in languages" :key="language.id" :value="language.id">
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
                            v-if="
                                user.type == 'business1' || user.type == 'business2'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('legal-status') }}<span class="text-red-500"> *</span></label>
                            <select
                                v-model="detail.legal_status_id"
                                required
                                class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            >
                                <option v-for="legalStatus in legalStatuses" :key="legalStatus.id" :value="legalStatus.id">
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
                        <div
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">
                                <span v-if="user.type == 'particular'">{{ $t('birth-date') }}</span>
                                <span v-else>{{ $t('create-date') }}</span>
                                <span class="text-red-500"> *</span>
                            </label>
                            <input
                                type="date"
                                v-model="detail.navite_date"
                                required
                                class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div  class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div class="relative">
                                <label class="text-gray-700 dark:text-gray-200">
                                    {{ $t('website') }}
                                </label>
                                <input
                                    v-model="detail.website"
                                    type="text"
                                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                            <div class="relative">
                                <label class="text-gray-700 dark:text-gray-200">
                                    Youtube
                                </label>
                                <input
                                    type="text"
                                    v-model="detail.youtube"
                                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                        </div>
                        <div
                        v-if="user.type != 'ip'"
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">
                                {{ $t('activity-area') }}
                                <span class="text-red-500"> *</span>
                            </label>
                            <select
                                multiple
                                size="4"
                                required
                                v-model="area_activities"
                                class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            >
                                <option v-for="activity in activityAreas" :key="activity.id" :value="activity.id">
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
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('o-activity') }}</label>
                            <textarea v-model="detail.other_activity" class="block w-full px-4 py-2 h-20 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>
                        <div  
                            v-if="user.type == 'particular'"
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">{{ $t('rsearch-p') }}</label>
                            <textarea v-model="detail.search_partner" class="block w-full px-4 py-2 h-20 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>


                        <div class="col-span-2">
                            <button
                                v-if="loading == 0"
                                type="submit"
                                class="text-white text-lg bg-primary-blue px-8 py-2 mt-6 w-full"
                            >
                                {{ $t("save") }}
                            </button>
                            <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white text-lg bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                                <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ $t("save") }}...
                            </button>
                        </div>
            </div>
        </form>
    </div>
</template>

<script>
import Error from "./Error.vue";
import { UserIcon, LockClosedIcon, MailIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted} from "vue";

export default {
    props: [
            'user', 
            'detail', 
            'languages',
            'businessTypes',
            'businessSizes',
            'activityAreas',
            'legalStatuses',
            'countries'
            ],
    components: {
        Error,
        UserIcon,
        LockClosedIcon,
        MailIcon,
    },
    setup(props) {
        const area_activities = ref([]);
        const langs = ref([]);
        const loading = ref(0);

        onMounted(
           async () => {
                for(const item of props.detail.activity_areas){
                    area_activities.value.push(item.id)
                }
                for(const item of props.detail.languages){
                    langs.value.push(item.id)
                }
            }
        )

        const saveDetail = async () => {
            loading.value = 1;
            props.detail.activity_areas = area_activities.value;
            props.detail.languages = langs.value;
            await axios.put('/api/details/' + props.detail.id, props.detail, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            location.reload()
        }

        return{
            langs,
            area_activities,
            loading,    
            saveDetail
        }
    },
}
</script>