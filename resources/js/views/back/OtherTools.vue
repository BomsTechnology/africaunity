<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div
                class=" w-full z-0 h-full p-4"
            >
                <div class="px-8 py-5 bg-white shadow-lg flex justify-between">
                    <h1 class="text-4xl text-primary-blue font-bold">
                        Other - 
                        <span
                            v-for="(other, index) in others"
                            :key="index" 
                        >
                            <span v-if="currentOther === index">
                                {{ other }}
                            </span>
                        </span>
                    </h1>
                    <div>
                        <select
                            @change="changeOther()"
                            v-model="currentOther"
                            class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                        >
                            <option 
                                v-for="(other, index) in others"
                                :key="index" 
                                :value="index"
                            >
                                {{ other }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="lg:flex justify-between">
                    <div class="bg-white pt-8 lg:w-[40%] px-6">
                        <div v-if="!isEdit">
                            <h1 class="text-2xl font-semibold mb-4">
                                <span class="text-primary-blue underline">Add  </span>  
                                <span
                                    v-for="(other, index) in others"
                                    :key="index" 
                                >
                                    <span v-if="currentOther === index">
                                        {{ other }}
                                    </span>
                                </span>
                            </h1>
                            <Error v-if="errors != ''">{{ errors }}</Error>
                            <form class="px-8" @submit.prevent="storeItem()">
                                <div class="">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >French Name</label
                                    >
                                    <input
                                        required
                                        v-model="item.name_fr"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div class="">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >English Name</label
                                    >
                                    <input
                                        required
                                        v-model="item.name_en"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div class="">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >Espanol Name</label
                                    >
                                    <input
                                        required
                                        v-model="item.name_es"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div class="">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >Portugues Name</label
                                    >
                                    <input
                                        required
                                        v-model="item.name_pt"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div class="flex justify-end mt-6">
                                    <button
                                    v-if="loading == 0"
                                        type="submit"
                                        class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none"
                                    >
                                        Save
                                    </button>
                                    <button
                                        v-if="loading == 1"
                                        type="submit"
                                        disabled
                                        class="px-6 py-2 leading-5 text-white rounded bg-blue-300 focus:outline-none"
                                    >
                                        <svg
                                            class="animate-spin h-5 w-5 text-white"
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
                            </form>
                        </div>
                        <div v-else>
                            <h1 class="text-2xl font-semibold mb-4">
                                <span class="text-primary-blue underline">Edit  </span>
                                <span
                                    v-for="(other, index) in others"
                                    :key="index" 
                                >
                                    <span v-if="currentOther === index">
                                        {{ other }}
                                    </span>
                                </span>
                            </h1>
                            <Error v-if="errors != ''">{{ errors }}</Error>
                            <form class="px-8" @submit.prevent="saveItem()">
                                <div class="">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >French Name</label
                                    >
                                    <input
                                        required
                                        v-model="item.name_fr"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div class="">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >English Name</label
                                    >
                                    <input
                                        required
                                        v-model="item.name_en"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div class="">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >Espanol Name</label
                                    >
                                    <input
                                        required
                                        v-model="item.name_es"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div class="">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >Portugues Name</label
                                    >
                                    <input
                                        required
                                        v-model="item.name_pt"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div class="flex justify-end mt-6">
                                    <button
                                    v-if="loading == 0"
                                        type="submit"
                                        class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none"
                                    >
                                        Save
                                    </button>
                                    <button
                                        v-if="loading == 1"
                                        type="submit"
                                        disabled
                                        class="px-6 py-2 leading-5 text-white rounded bg-blue-300 focus:outline-none"
                                    >
                                        <svg
                                            class="animate-spin h-5 w-5 text-white"
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
                            </form>
                        </div>
                    </div>
                    <div class="flex flex-col lg:w-[60%] bg-white pt-8">
                        <div class="overflow-x-auto border">
                            <div
                                class="inline-block min-w-full align-middle dark:bg-gray-800"
                            >
                                <div class="p-4">
                                    <label for="table-search" class="sr-only"
                                        >Search</label
                                    >
                                    <div class="relative mt-1">
                                        <div
                                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                                        >
                                            <svg
                                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <input
                                            v-model="searchKey"
                                            type="text"
                                            id="table-search"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-blue focus:border-primary-blue block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Search for items"
                                        />
                                    </div>
                                </div>
                                <Error v-if="errors != ''">{{ errors }}</Error>
                                <div class="overflow-hidden">
                                    <table
                                        class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                                    >
                                        <thead class="bg-gray-100 dark:bg-gray-700">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                >
                                                    Name
                                                </th>
                                                <th scope="col" class="p-4">
                                                    <span class="sr-only"
                                                        >Edit</span
                                                    >
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                            v-if="filteredItem.length != 0"
                                        >
                                            <tr
                                                v-for="item in filteredItem"
                                                :key="item.id"
                                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td
                                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {{ item.name_en }}
                                                </td>
                                                <td
                                                    class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                                >
                                                    <a
                                                        @click="selectToEdit(item)"
                                                        href="#"
                                                        class="text-primary-blue dark:text-blue-500 hover:underline"
                                                        >Edit</a
                                                    >
                                                    <a
                                                        @click="deleteItem(item.id)"
                                                        href="#"
                                                        class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                                        >Delete</a
                                                    >
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody
                                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                            v-else-if="loading == 1"
                                        >
                                            <tr
                                                
                                                class="hover:bg-gray-100 dark:hover:bg-gray-700 "
                                            >
                                                <td
                                                    colspan="2"
                                                    class=" text-sm w-full font-medium border text-gray-900 whitespace-nowrap  p-16 dark:text-white"
                                                >
                                                    <svg class="animate-spin h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody
                                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                            v-else
                                        >
                                            <tr
                                                
                                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <td
                                                    colspan="2"
                                                    class="py-4 px-6 text-xl font-medium text-gray-900 text-center uppercase whitespace-nowrap dark:text-white"
                                                >
                                                        NO 
                                                        <span
                                                            v-for="(other, index) in others"
                                                            :key="index" 
                                                        >
                                                            <span v-if="currentOther === index">
                                                                {{ other }}
                                                            </span>
                                                        </span>
                                                    </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import Sidebar from "../../components/Sidebar.vue";
import { PlusCircleIcon } from "@heroicons/vue/solid";
import Error from "../../components/Error.vue";
import useLanguages from "../../services/languageServices.js";
import useBusinessTypes from "../../services/businessTypeServices.js";
import useBusinessSizes from "../../services/businessSizeServices.js";
import useActivityAreas from "../../services/activityAreaServices.js";
import useLegalStatuses from "../../services/legalStatusServices.js";
export default {
    components: {
        PlusCircleIcon,
        Sidebar,
        Error
    },
    setup() {
        const { languages, getLanguages, createLanguage, destroyLanguage, updateLanguage, errorsLang } = useLanguages();
        const { businessTypes, getBusinessTypes, createBusinessType, destroyBusinessType, updateBusinessType, errorsBT } = useBusinessTypes();
        const { businessSizes, getBusinessSizes, createBusinessSize, destroyBusinessSize, updateBusinessSize, errorsBS } = useBusinessSizes();
        const { activityAreas, getActivityAreas, createActivityArea, destroyActivityArea, updateActivityArea, errorsActivy } = useActivityAreas();
        const { legalStatuses, getLegalStatuses, createLegalStatus, destroyLegalStatus, updateLegalStatus, errorsLegal } = useLegalStatuses();
        const searchKey = ref("");
        const currentOther = ref(0);
        const loading = ref(0);
        const items = ref([]);
        const errors = ref("");
        const isEdit = ref(false)
        const id = ref('');
        const others = [
            "Language",
            "Activity Area",
            "Businnes Type",
            "Business Size",
            "Legal Status",
            "Work Department",
            "Year Experience",
            "Work Mode",
            "Level Studies",
            "Offer Type",
            "Size Company"
        ];
        const item = reactive({
            name_fr: '',
            name_en: '',
            name_es: '',
            name_pt: ''
        });

        onMounted(
         async () => {
                loading.value = 1; 
                await getLanguages();
                errors.value = errorsLang.value;
                items.value = languages.value;
                loading.value = 0;
            }
        );

        const storeItem = async () => {
            loading.value = 1;
            switch(currentOther.value){
                case 0:
                    await createLanguage({...item});
                    errors.value = errorsLang.value;
                    if(errors.value == ''){
                        await getLanguages();
                        items.value = languages.value;
                    }
                break;
                case 1:
                    await createActivityArea({...item});
                    errors.value = errorsActivy.value;
                    if(errors.value == ''){
                        await getActivityAreas();
                        items.value = activityAreas.value;
                    }
                break;
                case 2:
                    await createBusinessType({...item});
                    errors.value = errorsBT.value;
                    if(errors.value == ''){
                        await getBusinessTypes();
                        items.value = businessTypes.value;
                    }
                break;
                case 3:
                    await createBusinessSize({...item});
                    errors.value = errorsBS.value;
                    if(errors.value == ''){
                        await getBusinessSizes();
                        items.value = businessSizes.value;
                    }
                break;
                case 4:
                    await createLegalStatus({...item});
                    errors.value = errorsLegal.value;
                    if(errors.value == ''){
                        await getLegalStatuses();
                        items.value = legalStatuses.value;
                    }
                break;
            }
            item.name_fr = ''
            item.name_en = ''
            item.name_es = ''
            item.name_pt = ''
            loading.value = 0;
        };

        const saveItem = async () => {     
            loading.value = 1;       
            switch(currentOther.value){
                case 0:
                    await updateLanguage(id.value, item);
                    errors.value = errorsLang.value;
                    if(errors.value == ''){
                        await getLanguages();
                        items.value = languages.value;
                    }
                break;
                case 1:
                    await updateActivityArea(id.value, item);
                    errors.value = errorsActivy.value;
                    if(errors.value == ''){
                        await getActivityAreas();
                        items.value = activityAreas.value;
                    }
                break;
                case 2:
                    await updateBusinessType(id.value, item);
                    errors.value = errorsBT.value;
                    if(errors.value == ''){
                        await getBusinessTypes();
                        items.value = businessTypes.value;
                    }
                break;
                case 3:
                    await updateBusinessSize(id.value, item);
                    errors.value = errorsBS.value;
                    if(errors.value == ''){
                        await getBusinessSizes();
                        items.value = businessSizes.value;
                    }
                break;
                case 4:
                    await updateLegalStatus(id.value, item);
                    errors.value = errorsLegal.value;
                    if(errors.value == ''){
                        await getLegalStatuses();
                        items.value = legalStatuses.value;
                    }
                break;
            }
            loading.value = 0;
            item.name_fr = ''
            item.name_en = ''
            item.name_es = ''
            item.name_pt = ''
            id.value = 0;
            isEdit.value = false;
        };

        const deleteItem = async (id) => {
            if(confirm("I you Sure ?")){
                loading.value = 1;
                switch(currentOther.value){
                    case 0:
                        await destroyLanguage(id)
                        errors.value = errorsLang.value;
                        if(errors.value == ''){
                            await getLanguages();
                            items.value = languages.value;
                        }
                    break;
                    case 1:
                        await destroyActivityArea(id)
                        errors.value = errorsActivy.value;
                        if(errors.value == ''){
                            await getActivityAreas();
                            items.value = activityAreas.value;
                        }
                    break;
                    case 2:
                        await destroyBusinessType(id)
                        errors.value = errorsBT.value;
                        if(errors.value == ''){
                            await getBusinessTypes();
                            items.value = businessTypes.value;
                        }
                    break;
                    case 3:
                        await destroyBusinessSize(id)
                        errors.value = errorsBS.value;
                        if(errors.value == ''){
                            await getBusinessSizes();
                            items.value = businessSizes.value;
                        }
                    break;
                    case 4:
                        await destroyLegalStatus(id)
                        errors.value = errorsLegal.value;
                        if(errors.value == ''){
                            await getLegalStatuses();
                            items.value = legalStatuses.value;
                        }
                    break;
                }
                loading.value = 0;
            }
        };

        const changeOther = async () => {
            loading.value = 1; 
            switch(currentOther.value){
                case 0:                
                    await getLanguages();
                    errors.value = errorsLang.value;
                    if(errors.value == ''){
                        items.value = languages.value;
                    }
                break;
                case 1:                
                    await getActivityAreas();
                    errors.value = errorsActivy.value;
                    if(errors.value == ''){
                        items.value = activityAreas.value;
                    }
                break;
                case 2:                
                    await getBusinessTypes();
                    errors.value = errorsBT.value;
                    if(errors.value == ''){
                        items.value = businessTypes.value;
                    }
                break;
                case 3:                
                    await getBusinessSizes();
                    errors.value = errorsBS.value;
                    if(errors.value == ''){
                        items.value = businessSizes.value;
                    }
                break;
                case 4:                
                    await getLegalStatuses();
                    errors.value = errorsLegal.value;
                    if(errors.value == ''){
                        items.value = legalStatuses.value;
                    }
                break;
            }
            item.name_fr = ''
            item.name_en = ''
            item.name_es = ''
            item.name_pt = ''
            id.value = 0;
            isEdit.value = false;
            loading.value = 0;
        }

        const selectToEdit = async (data) => {
            isEdit.value = true;
            id.value = data.id;
            item.name_en = data.name_en;
            item.name_es = data.name_es;
            item.name_pt = data.name_pt;
            item.name_fr = data.name_fr;
        }

        return {
            loading,
            searchKey,
            currentOther,
            others,
            deleteItem,
            saveItem,
            storeItem,
            items,
            item,
            errors,
            isEdit,
            changeOther,
            selectToEdit
        };
    },

    computed: {
        filteredItem() {
            return this.items.filter((item) => {
                return item.name_en
                    .toLowerCase()
                    .includes(this.searchKey.toLowerCase());
            });
        },
    },
};
</script>
