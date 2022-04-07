<template>
    <div>
        <form  @submit.prevent="saveDetail()" class="py-7" >
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div v-if="user.type == 'particular'" class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">Statut <span class="text-red-500">*</span></label>
                            <select
                                v-model="detail.status"
                                required
                                class="form-input px-3 pr-2  w-full mt-3 placeholder:text-gray-400 text-gray-700 bg-white border border-gray-200 rounded-md  focus:ring-primary-blue focus:border-primary-blue block"
                            >
                                <option value="1">Actif</option>
                                <option value="0">Non Actif</option>
                            </select>
                        </div>
                        <div  
                            v-else-if="
                                user.type == 'business1' || user.type == 'business2'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">Objet Social</label>
                            <textarea v-model="detail.social_object" class="block w-full px-4 py-2 h-20 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>
                        <div v-else class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">But - Attribution</label>
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
                            <label class="text-gray-700 dark:text-gray-200">Diplome et Certification</label>
                            <textarea v-model="detail.goal_attribution" class="block w-full px-4 py-2 h-20 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>
                        <div  
                            class="relative col-span-2">
                            <label  class="text-gray-700 dark:text-gray-200">Présentation</label>
                            <textarea  v-model="detail.presentation" class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>
                        <div
                            v-if="
                                user.type == 'business1' || user.type == 'business2' || user.type == 'ip'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">Nom - Prénom du Responsable <span class="text-red-500">*</span></label>
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
                            <label class="text-gray-700 dark:text-gray-200">Adresse</label>
                            <input
                                type="text"
                                v-model="detail.adress"
                                required
                                class="form-input px-3 pr-2  w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div v-if="user.type == 'particular'"  class="relative">
                                <label class="text-gray-700 dark:text-gray-200">Sexe <span class="text-red-500">*</span></label>
                                <select 
                                    v-model="detail.sex"
                                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                >
                                    <option value="1">Homme</option>
                                    <option value="2">Femme</option>
                                </select>
                            </div>
                            <div class="relative">
                                <label class="text-gray-700 dark:text-gray-200">Numéro de Téléphone <span class="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    v-model="detail.phone_number"
                                    required
                                    class="form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md  mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>
                            <div v-if="user.type != 'particular'" class="relative">
                                <label class="text-gray-700 dark:text-gray-200">Numéro de Téléphone 2</label>
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
                                    <span>Pays d'origine</span> 
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
                                    <span v-if="user.type == 'particular' || user.type == 'ip'">Pays de Résidence</span>
                                    <span v-else>Pays siege social</span>
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
                                    <span v-if="user.type == 'ip'">Périmètre</span>
                                    <span v-else>Type Entreprise</span> 
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
                                    <span v-if="user.type == 'ip'">Taille Institution</span>
                                    <span v-else>Taille Entreprise</span>
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
                            <label class="text-gray-700 dark:text-gray-200">Langues parlées <span class="text-red-500"> *</span></label>
                            <select
                                multiple
                                size="4"
                                required
                                v-model="detail.languages"
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
                            <label class="text-gray-700 dark:text-gray-200">Forme Juridique <span class="text-red-500"> *</span></label>
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
                                <span v-if="user.type == 'particular'">Date de naissance</span>
                                <span v-else>Date de création</span>
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
                                    Site Web
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
                                Secteur d'activité
                                <span class="text-red-500"> *</span>
                            </label>
                            <select
                                multiple
                                size="4"
                                required
                                v-model="detail.activity_areas"
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
                            <label class="text-gray-700 dark:text-gray-200">Autres Activités</label>
                            <textarea v-model="detail.other_activity" class="block w-full px-4 py-2 h-20 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            </textarea>
                        </div>
                        <div  
                            v-if="user.type == 'particular'"
                            class="relative col-span-2">
                            <label class="text-gray-700 dark:text-gray-200">Recherche partenariat</label>
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
        
        const loading = ref(0);

        const saveDetail = async () => {
            loading.value = 1;
            await axios.put('/api/details/' + props.detail.id, props.detail, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            location.reload()
        }

        return{
            loading,    
            saveDetail
        }
    },
}
</script>