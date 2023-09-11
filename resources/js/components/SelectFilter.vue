<script setup>
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import { computed, reactive, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
    placeholder: {
        type: String,
        default: "Select item",
    },
    required: {
        type: Boolean,
        default: true,
    },
    subCategory: {
        type: Boolean,
        default: false,
    },
    className: {
        type: String,
        default: "",
    },
    data: {
        type: Array,
    },
    modelValue: {
        type: [String, Number, Array],
    },
    resetField: {
        type: Boolean,
        default: false,
    },
    handled: {
        type: Boolean,
        default: false,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue", "resetValue", "handle"]);

const open = ref(false);
const search = ref("");
const itemModal = ref(null);
const subCategory = ref(false);
const selectItem = reactive({
    id: "",
    name: "",
});

function toNormalForm(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const filteredData = computed(() => {
    let data = props.data.filter((item) => 
        toNormalForm(item.name.toLowerCase()).includes(toNormalForm(search.value.toLowerCase()))
    );
    if (data.length != 0) {
        subCategory.value = props.subCategory;
        return data;
    } else if (props.subCategory) {
        subCategory.value = false;
        data = props.data.filter((item) =>
        toNormalForm(item.name.toLowerCase()).includes(toNormalForm(search.value.toLowerCase()))
        );
        if (data.length != 0) {
            return data;
        } else {
            data = [];
            for (let i = 0; i < props.data.length; i++) {
                if (props.data[i].children.length != 0) {
                    props.data[i].children.forEach((element) => {
                        if (
                            toNormalForm(element.name
                                .toLowerCase())
                                .includes(toNormalForm(search.value.toLowerCase()))
                        ) {
                            data.push(element);
                        }
                    });
                }
            }
            return data;
        }
    } else {
        return [];
    }
});

async function changeValue(item) {
    if (typeof props.modelValue == "string" || !props.multiple) {
        selectItem.id = item.id;
        selectItem.name = item.name;
        emit("update:modelValue", `${item.id}`);
    } else {
        props.modelValue.push(item.id);
        emit("update:modelValue", props.modelValue);
    }
    open.value = false;
    if (props.handled) emit("handle");
}

async function resetValue() {
    emit("update:modelValue", "");
    selectItem.id = "";
    selectItem.name = "";
    search.value = "";
    open.value = false;
    if (props.handled) emit("handle");
}

watch(props, async (newProps, oldProps) => {
    if (newProps.modelValue) {
        if (!props.subCategory) {
            let currentData = newProps.data.find(
                (item) => item.id == newProps.modelValue
            );
            if (currentData) {
                selectItem.id = currentData.id;
                selectItem.name = currentData.name;
            }
        } else {
            for (let i = 0; i < newProps.data.length; i++) {
                if (newProps.data[i].id == newProps.modelValue) {
                    selectItem.id = newProps.data[i].id;
                    selectItem.name = newProps.data[i].name;
                    i = newProps.data.length;
                } else if (newProps.data[i].children.length != 0) {
                    newProps.data[i].children.forEach((element) => {
                        if (element.id == newProps.modelValue) {
                            selectItem.id = element.id;
                            selectItem.name = element.name;
                            i = newProps.data.length;
                        }
                    });
                }
            }
        }
        if (props.handled) emit("handle");
    } else {
        resetValue();
    }
});

onClickOutside(itemModal, () => {
    open.value = false;
});
</script>
<template>
    <div class="relative">
        <span
            @click="open = !open"
            class="absolute right-3 top-1/4 cursor-pointer"
            ><ChevronDownIcon v-if="!open" class="h-5 w-5 text-gray-400" />
            <ChevronUpIcon v-else class="h-5 w-5 text-gray-400"
        /></span>
        <!-- <input
            readonly
            :required="required"
            
            :placeholder="placeholder"
            
        /> -->
        <span
            :class="className + ' cursor-pointer min-h-[2.75rem]'"
            @click="open = !open"
            @keydown.enter="changeValue(filteredData[0])"
        >
            <span>{{ selectItem.name }}</span>
        </span>
        <div
            ref="itemModal"
            v-show="open"
            class="absolute top-full z-50 w-full rounded-b bg-white shadow"
        >
            <input
                type="text"
                v-model="search"
                class="container mx-auto my-2 block w-[95%] border border-gray-300 py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <div class="mt-4 h-48 w-full overflow-y-auto text-sm">
                <span
                    v-if="resetField && !loading"
                    @click="resetValue()"
                    class="block w-full cursor-pointer py-2 px-3 text-gray-400 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"
                >
                    {{ placeholder }}
                </span>
                <div
                    v-if="loading"
                    class="flex h-full w-full items-center justify-center"
                >
                    <svg
                        class="h-7 w-7 animate-spin text-primary-blue"
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
                <template
                    v-else-if="filteredData.length != 0 && subCategory"
                    v-for="(item, index) in filteredData"
                    :key="index"
                >
                    <span
                        class="block w-full bg-gray-50 px-3 py-2 font-bold text-gray-900"
                    >
                        <span> {{ item.name }}</span>
                    </span>
                    <div>
                        <span
                            @click="changeValue(item)"
                            :class="[
                                selectItem.id == item.id
                                    ? 'block w-full cursor-pointer bg-blue-400 py-2 pr-3 pl-8 font-semibold text-white hover:bg-gray-100 hover:text-gray-900'
                                    : 'block w-full cursor-pointer py-2 pr-3 pl-8 hover:bg-gray-100 hover:font-semibold hover:text-gray-900',
                            ]"
                        >
                            <span class="mr-2" v-if="multiple">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    class="cursor-pointer border"
                                />
                            </span>
                            <span> {{ item.name }}</span>
                        </span>
                        <span
                            v-if="item.children.length != 0"
                            v-for="subitem in item.children"
                            :key="subitem.id"
                            @click="changeValue(subitem)"
                            :class="[
                                selectItem.id == subitem.id
                                    ? 'block w-full cursor-pointer bg-blue-400 py-2 pr-3 pl-8 font-semibold text-white hover:bg-gray-100 hover:text-gray-900'
                                    : 'block w-full cursor-pointer py-2 pr-3 pl-8 hover:bg-gray-100 hover:font-semibold hover:text-gray-900',
                            ]"
                        >
                            <span class="mr-2" v-if="multiple">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    class="cursor-pointer border"
                                />
                            </span>
                            <span>{{ subitem.name }}</span>
                        </span>
                    </div>
                </template>
                <span
                    v-else-if="filteredData.length != 0"
                    v-for="(item, index) in filteredData"
                    :key="item.id"
                    @click="changeValue(item)"
                    :class="[
                        selectItem.id == item.id ||
                        (selectItem.id == '' && index == 0)
                            ? 'block w-full cursor-pointer bg-blue-400 px-3 py-2 font-semibold text-white hover:bg-gray-100 hover:text-gray-900'
                            : 'block w-full cursor-pointer px-3 py-2 hover:bg-gray-100 hover:font-semibold hover:text-gray-900',
                    ]"
                    ><span class="mr-2" v-if="multiple">
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            class="cursor-pointer border"
                        />
                    </span>
                    <span class="">{{ item.name }}</span>
                </span>
                <span v-else class="block w-full py-2 text-center font-bold">
                    No Data Available !
                </span>
            </div>
        </div>
    </div>
</template>
