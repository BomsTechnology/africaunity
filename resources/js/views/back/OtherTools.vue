<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold text-primary-blue">
                    Other -
                    <span v-for="(other, index) in others" :key="index">
                        <span v-if="currentOther === index">
                            {{ other }}
                        </span>
                    </span>
                </h1>
                <div>
                    <select
                        @change="changeOther()"
                        v-model="currentOther"
                        class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"
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

            <div class="justify-between lg:flex">
                <div class="bg-white px-6 pt-8 lg:w-[40%]">
                    <div v-if="!isEdit">
                        <h1 class="mb-4 text-2xl font-semibold">
                            <span class="text-primary-blue underline"
                                >Add
                            </span>
                            <span v-for="(other, index) in others" :key="index">
                                <span v-if="currentOther === index">
                                    {{ other }}
                                </span>
                            </span>
                        </h1>
                        <Error v-if="errors != ''">{{ errors }}</Error>
                        <form class="px-8" @submit.prevent="storeItem()">
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >French Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_fr"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >English Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_en"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Espanol Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_es"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Portugues Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_pt"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="mt-6 flex justify-end">
                                <button
                                    v-if="loading == 0"
                                    type="submit"
                                    class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                                >
                                    Save
                                </button>
                                <button
                                    v-if="loading == 1"
                                    type="submit"
                                    disabled
                                    class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"
                                >
                                    <Spin :size="'small'" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-else>
                        <h1 class="mb-4 text-2xl font-semibold">
                            <span class="text-primary-blue underline"
                                >Edit
                            </span>
                            <span v-for="(other, index) in others" :key="index">
                                <span v-if="currentOther === index">
                                    {{ other }}
                                </span>
                            </span>
                        </h1>
                        <Error v-if="errors != ''">{{ errors }}</Error>
                        <form class="px-8" @submit.prevent="saveItem()">
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >French Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_fr"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >English Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_en"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Espanol Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_es"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="">
                                <label class="dark:text-gray-200 text-gray-700"
                                    >Portugues Name</label
                                >
                                <input
                                    required
                                    v-model="item.name_pt"
                                    type="text"
                                    class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                />
                            </div>
                            <div class="mt-6 flex justify-end">
                                <button
                                    v-if="loading == 0"
                                    type="submit"
                                    class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                                >
                                    Save
                                </button>
                                <button
                                    v-if="loading == 1"
                                    type="submit"
                                    disabled
                                    class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"
                                >
                                    <Spin :size="'small'" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="flex flex-col bg-white pt-8 lg:w-[60%]">
                    <div class="overflow-x-auto border">
                        <div
                            class="dark:bg-gray-800 inline-block min-w-full align-middle"
                        >
                            <div class="p-4">
                                <label for="table-search" class="sr-only"
                                    >Search</label
                                >
                                <div class="relative mt-1">
                                    <div
                                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                    >
                                        <svg
                                            class="dark:text-gray-400 h-5 w-5 text-gray-500"
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
                                        class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                                        placeholder="Search for items"
                                    />
                                </div>
                            </div>
                            <Error v-if="errors != ''">{{ errors }}</Error>
                            <div class="overflow-hidden">
                                <table
                                    class="dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"
                                >
                                    <thead class="dark:bg-gray-700 bg-gray-100">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
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
                                        class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"
                                        v-if="filteredItem.length != 0"
                                    >
                                        <tr
                                            v-for="item in filteredItem"
                                            :key="item.id"
                                            class="dark:hover:bg-gray-700 hover:bg-gray-100"
                                        >
                                            <td
                                                class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                                            >
                                                {{ item.name_en }}
                                            </td>
                                            <td
                                                class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"
                                            >
                                                <a
                                                    @click="selectToEdit(item)"
                                                    href="#"
                                                    class="dark:text-blue-500 text-primary-blue hover:underline"
                                                    >Edit</a
                                                >
                                                <a
                                                    @click="deleteItem(item.id)"
                                                    href="#"
                                                    class="dark:text-blue-500 ml-3 text-red-600 hover:underline"
                                                    >Delete</a
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody
                                        class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"
                                        v-else-if="loading == 1"
                                    >
                                        <tr
                                            class="dark:hover:bg-gray-700 hover:bg-gray-100"
                                        >
                                            <td
                                                colspan="2"
                                                class="dark:text-white w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"
                                            >
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
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody
                                        class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"
                                        v-else
                                    >
                                        <tr
                                            class="dark:hover:bg-gray-700 hover:bg-gray-100"
                                        >
                                            <td
                                                colspan="2"
                                                class="dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"
                                            >
                                                NO
                                                <span
                                                    v-for="(
                                                        other, index
                                                    ) in others"
                                                    :key="index"
                                                >
                                                    <span
                                                        v-if="
                                                            currentOther ===
                                                            index
                                                        "
                                                    >
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
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import { PlusCircleIcon } from "@heroicons/vue/24/solid";
import Error from "@/components/Error.vue";
import useLanguages from "@/services/languageServices.js";
import useStatus from "@/services/statusServices.js";
import useBusinessTypes from "@/services/businessTypeServices.js";
import useBusinessSizes from "@/services/businessSizeServices.js";
import useActivityAreas from "@/services/activityAreaServices.js";
import useSizeCompanies from "@/services/sizeCompanyServices.js";
import useLevelStudies from "@/services/levelStudyServices.js";
import useOfferTypes from "@/services/offerTypeServices.js";
import useContractTypes from "@/services/contractTypeServices.js";
import useWorkDepartments from "@/services/workDepartmentServices.js";
import useWorkModes from "@/services/workModeServices.js";
import useYearExperiences from "@/services/yearExperienceServices.js";
import useLegalStatuses from "@/services/legalStatusServices.js";

const {
    languages,
    getLanguages,
    createLanguage,
    destroyLanguage,
    updateLanguage,
    errorsLang,
} = useLanguages();
const {
    status,
    getStatus,
    createStatus,
    updateStatus,
    destroyStatus,
    errorsStatus,
} = useStatus();
const {
    businessTypes,
    getBusinessTypes,
    createBusinessType,
    destroyBusinessType,
    updateBusinessType,
    errorsBT,
} = useBusinessTypes();
const {
    businessSizes,
    getBusinessSizes,
    createBusinessSize,
    destroyBusinessSize,
    updateBusinessSize,
    errorsBS,
} = useBusinessSizes();
const {
    activityAreas,
    getActivityAreas,
    createActivityArea,
    destroyActivityArea,
    updateActivityArea,
    errorsActivy,
} = useActivityAreas();
const {
    legalStatuses,
    getLegalStatuses,
    createLegalStatus,
    destroyLegalStatus,
    updateLegalStatus,
    errorsLegal,
} = useLegalStatuses();
const {
    sizeCompanies,
    getSizeCompanies,
    createSizeCompany,
    destroySizeCompany,
    updateSizeCompany,
    errorsSC,
} = useSizeCompanies();
const {
    levelStudies,
    getLevelStudies,
    createLevelStudy,
    destroyLevelStudy,
    updateLevelStudy,
    errorsLS,
} = useLevelStudies();
const {
    offerTypes,
    getOfferTypes,
    createOfferType,
    destroyOfferType,
    updateOfferType,
    errorsOT,
} = useOfferTypes();
const {
    contractTypes,
    getContractTypes,
    createContractType,
    destroyContractType,
    updateContractType,
    errorsCT,
} = useContractTypes();
const {
    workDepartments,
    getWorkDepartments,
    createWorkDepartment,
    destroyWorkDepartment,
    updateWorkDepartment,
    errorsWD,
} = useWorkDepartments();
const {
    workModes,
    getWorkModes,
    createWorkMode,
    destroyWorkMode,
    updateWorkMode,
    errorsWM,
} = useWorkModes();
const {
    yearExperiences,
    getYearExperiences,
    createYearExperience,
    destroyYearExperience,
    updateYearExperience,
    errorsYE,
} = useYearExperiences();
const searchKey = ref("");
const currentOther = ref(0);
const loading = ref(0);
const items = ref([]);
const errors = ref("");
const isEdit = ref(false);
const id = ref("");
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
    "Contract Type",
    "Size Company",
    "Status",
];
const item = reactive({
    name_fr: "",
    name_en: "",
    name_es: "",
    name_pt: "",
});

onMounted(async () => {
    loading.value = 1;
    await getLanguages();
    errors.value = errorsLang.value;
    items.value = languages.value;
    loading.value = 0;
});

const storeItem = async () => {
    loading.value = 1;
    switch (currentOther.value) {
        case 0:
            await createLanguage({ ...item });
            errors.value = errorsLang.value;
            if (errors.value == "") {
                await getLanguages();
                items.value = languages.value;
            }
            break;
        case 1:
            await createActivityArea({ ...item });
            errors.value = errorsActivy.value;
            if (errors.value == "") {
                await getActivityAreas();
                items.value = activityAreas.value;
            }
            break;
        case 2:
            await createBusinessType({ ...item });
            errors.value = errorsBT.value;
            if (errors.value == "") {
                await getBusinessTypes();
                items.value = businessTypes.value;
            }
            break;
        case 3:
            await createBusinessSize({ ...item });
            errors.value = errorsBS.value;
            if (errors.value == "") {
                await getBusinessSizes();
                items.value = businessSizes.value;
            }
            break;
        case 4:
            await createLegalStatus({ ...item });
            errors.value = errorsLegal.value;
            if (errors.value == "") {
                await getLegalStatuses();
                items.value = legalStatuses.value;
            }
            break;
        case 5:
            await createWorkDepartment({ ...item });
            errors.value = errorsWD.value;
            if (errors.value == "") {
                await getWorkDepartments();
                items.value = workDepartments.value;
            }
            break;
        case 6:
            await createYearExperience({ ...item });
            errors.value = errorsYE.value;
            if (errors.value == "") {
                await getYearExperiences();
                items.value = yearExperiences.value;
            }
            break;
        case 7:
            await createWorkMode({ ...item });
            errors.value = errorsWM.value;
            if (errors.value == "") {
                await getWorkModes();
                items.value = workModes.value;
            }
            break;
        case 8:
            await createLevelStudy({ ...item });
            errors.value = errorsLS.value;
            if (errors.value == "") {
                await getLevelStudies();
                items.value = levelStudies.value;
            }
            break;
        case 9:
            await createOfferType({ ...item });
            errors.value = errorsOT.value;
            if (errors.value == "") {
                await getOfferTypes();
                items.value = offerTypes.value;
            }
            break;
        case 10:
            await createContractType({ ...item });
            errors.value = errorsCT.value;
            if (errors.value == "") {
                await getContractTypes();
                items.value = contractTypes.value;
            }
            break;
        case 11:
            await createSizeCompany({ ...item });
            errors.value = errorsSC.value;
            if (errors.value == "") {
                await getSizeCompanies();
                items.value = sizeCompanies.value;
            }
            break;
        case 12:
            await createStatus({ ...item });
            errors.value = errorsStatus.value;
            if (errors.value == "") {
                await getStatus();
                items.value = status.value;
            }
            break;
    }
    item.name_fr = "";
    item.name_en = "";
    item.name_es = "";
    item.name_pt = "";
    loading.value = 0;
};

const saveItem = async () => {
    loading.value = 1;
    switch (currentOther.value) {
        case 0:
            await updateLanguage(id.value, item);
            errors.value = errorsLang.value;
            if (errors.value == "") {
                await getLanguages();
                items.value = languages.value;
            }
            break;
        case 1:
            await updateActivityArea(id.value, item);
            errors.value = errorsActivy.value;
            if (errors.value == "") {
                await getActivityAreas();
                items.value = activityAreas.value;
            }
            break;
        case 2:
            await updateBusinessType(id.value, item);
            errors.value = errorsBT.value;
            if (errors.value == "") {
                await getBusinessTypes();
                items.value = businessTypes.value;
            }
            break;
        case 3:
            await updateBusinessSize(id.value, item);
            errors.value = errorsBS.value;
            if (errors.value == "") {
                await getBusinessSizes();
                items.value = businessSizes.value;
            }
            break;
        case 4:
            await updateLegalStatus(id.value, item);
            errors.value = errorsLegal.value;
            if (errors.value == "") {
                await getLegalStatuses();
                items.value = legalStatuses.value;
            }
            break;
        case 5:
            await updateWorkDepartment(id.value, item);
            errors.value = errorsWD.value;
            if (errors.value == "") {
                await getWorkDepartments();
                items.value = workDepartments.value;
            }
            break;
        case 6:
            await updateYearExperience(id.value, item);
            errors.value = errorsYE.value;
            if (errors.value == "") {
                await getYearExperiences();
                items.value = yearExperiences.value;
            }
            break;
        case 7:
            await updateWorkMode(id.value, item);
            errors.value = errorsWM.value;
            if (errors.value == "") {
                await getWorkModes();
                items.value = workModes.value;
            }
            break;
        case 8:
            await updateLevelStudy(id.value, item);
            errors.value = errorsLS.value;
            if (errors.value == "") {
                await getLevelStudies();
                items.value = levelStudies.value;
            }
            break;
        case 9:
            await updateOfferType(id.value, item);
            errors.value = errorsOT.value;
            if (errors.value == "") {
                await getOfferTypes();
                items.value = offerTypes.value;
            }
            break;
        case 10:
            await updateContractType(id.value, item);
            errors.value = errorsCT.value;
            if (errors.value == "") {
                await getContractTypes();
                items.value = contractTypes.value;
            }
            break;
        case 11:
            await updateSizeCompany(id.value, item);
            errors.value = errorsSC.value;
            if (errors.value == "") {
                await getSizeCompanies();
                items.value = sizeCompanies.value;
            }
            break;
        case 12:
            await updateStatus(id.value, item);
            errors.value = errorsStatus.value;
            if (errors.value == "") {
                await getStatus();
                items.value = status.value;
            }
            break;
    }
    loading.value = 0;
    item.name_fr = "";
    item.name_en = "";
    item.name_es = "";
    item.name_pt = "";
    id.value = 0;
    isEdit.value = false;
};

const deleteItem = async (id) => {
    if (confirm("I you Sure ?")) {
        loading.value = 1;
        switch (currentOther.value) {
            case 0:
                await destroyLanguage(id);
                errors.value = errorsLang.value;
                if (errors.value == "") {
                    await getLanguages();
                    items.value = languages.value;
                }
                break;
            case 1:
                await destroyActivityArea(id);
                errors.value = errorsActivy.value;
                if (errors.value == "") {
                    await getActivityAreas();
                    items.value = activityAreas.value;
                }
                break;
            case 2:
                await destroyBusinessType(id);
                errors.value = errorsBT.value;
                if (errors.value == "") {
                    await getBusinessTypes();
                    items.value = businessTypes.value;
                }
                break;
            case 3:
                await destroyBusinessSize(id);
                errors.value = errorsBS.value;
                if (errors.value == "") {
                    await getBusinessSizes();
                    items.value = businessSizes.value;
                }
                break;
            case 4:
                await destroyLegalStatus(id);
                errors.value = errorsLegal.value;
                if (errors.value == "") {
                    await getLegalStatuses();
                    items.value = legalStatuses.value;
                }
                break;
            case 5:
                await destroyWorkDepartment(id);
                errors.value = errorsWD.value;
                if (errors.value == "") {
                    await getWorkDepartments();
                    items.value = workDepartments.value;
                }
                break;
            case 6:
                await destroyYearExperience(id);
                errors.value = errorsYE.value;
                if (errors.value == "") {
                    await getYearExperiences();
                    items.value = yearExperiences.value;
                }
                break;
            case 7:
                await destroyWorkMode(id);
                errors.value = errorsWM.value;
                if (errors.value == "") {
                    await getWorkModes();
                    items.value = workModes.value;
                }
                break;
            case 8:
                await destroyLevelStudy(id);
                errors.value = errorsLS.value;
                if (errors.value == "") {
                    await getLevelStudies();
                    items.value = levelStudies.value;
                }
                break;
            case 9:
                await destroyOfferType(id);
                errors.value = errorsOT.value;
                if (errors.value == "") {
                    await getOfferTypes();
                    items.value = offerTypes.value;
                }
                break;
            case 10:
                await destroyContractType(id);
                errors.value = errorsCT.value;
                if (errors.value == "") {
                    await getContractTypes();
                    items.value = contractTypes.value;
                }
                break;
            case 11:
                await destroySizeCompany(id);
                errors.value = errorsSC.value;
                if (errors.value == "") {
                    await getSizeCompanies();
                    items.value = sizeCompanies.value;
                }
                break;
            case 12:
                await destroyStatus(id);
                errors.value = errorsStatus.value;
                if (errors.value == "") {
                    await getStatus();
                    items.value = status.value;
                }
                break;
        }
        loading.value = 0;
    }
};

const changeOther = async () => {
    loading.value = 1;
    switch (currentOther.value) {
        case 0:
            await getLanguages();
            errors.value = errorsLang.value;
            if (errors.value == "") {
                items.value = languages.value;
            }
            break;
        case 1:
            await getActivityAreas();
            errors.value = errorsActivy.value;
            if (errors.value == "") {
                items.value = activityAreas.value;
            }
            break;
        case 2:
            await getBusinessTypes();
            errors.value = errorsBT.value;
            if (errors.value == "") {
                items.value = businessTypes.value;
            }
            break;
        case 3:
            await getBusinessSizes();
            errors.value = errorsBS.value;
            if (errors.value == "") {
                items.value = businessSizes.value;
            }
            break;
        case 4:
            await getLegalStatuses();
            errors.value = errorsLegal.value;
            if (errors.value == "") {
                items.value = legalStatuses.value;
            }
            break;
        case 5:
            await getWorkDepartments();
            errors.value = errorsWD.value;
            if (errors.value == "") {
                items.value = workDepartments.value;
            }
            break;
        case 6:
            await getYearExperiences();
            errors.value = errorsYE.value;
            if (errors.value == "") {
                items.value = yearExperiences.value;
            }
            break;
        case 7:
            await getWorkModes();
            errors.value = errorsWM.value;
            if (errors.value == "") {
                items.value = workModes.value;
            }
            break;
        case 8:
            await getLevelStudies();
            errors.value = errorsLS.value;
            if (errors.value == "") {
                items.value = levelStudies.value;
            }
            break;
        case 9:
            await getOfferTypes();
            errors.value = errorsOT.value;
            if (errors.value == "") {
                items.value = offerTypes.value;
            }
            break;
        case 10:
            await getContractTypes();
            errors.value = errorsCT.value;
            if (errors.value == "") {
                items.value = contractTypes.value;
            }
            break;
        case 11:
            await getSizeCompanies();
            errors.value = errorsSC.value;
            if (errors.value == "") {
                items.value = sizeCompanies.value;
            }
            break;
        case 12:
            await getStatus();
            errors.value = errorsStatus.value;
            if (errors.value == "") {
                items.value = status.value;
            }
            break;
    }
    item.name_fr = "";
    item.name_en = "";
    item.name_es = "";
    item.name_pt = "";
    id.value = 0;
    isEdit.value = false;
    loading.value = 0;
};

const selectToEdit = async (data) => {
    isEdit.value = true;
    id.value = data.id;
    item.name_en = data.name_en;
    item.name_es = data.name_es;
    item.name_pt = data.name_pt;
    item.name_fr = data.name_fr;
};

const filteredItem = computed(() => {
    return items.value.filter((item) => {
        return item.name_en
            .toLowerCase()
            .includes(searchKey.value.toLowerCase());
    });
});
</script>
