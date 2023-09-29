<template>
    <div
        class="fixed inset-0 z-40 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-show="open"
    >
        <div
            class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                style="backdrop-filter: blur(5px)"
                aria-hidden="true"
                @click="toogleModal"
            ></div>

            <span
                class="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
                >&#8203;</span
            >
            <div
                class="inline-block transform overflow-hidden rounded-lg p-4 bg-white text-left align-middle shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
                <!-- Modal content -->
                <h1 class="text-2xl font-bold text-black">
                Ajouter un dossier
            </h1>
                <form @submit.prevent="storeFolderConversation" class="relative mt-5">
                    <div class="relative">
                        <input
                            type="text"
                            v-model="name"
                            class="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Nom du dossier"
                            required
                        />
                    </div>

                    <div class="mt-5">
                        <button
                            type="submit"
                            :disabled="loading"
                            class="text-md w-full rounded bg-primary-blue px-6 py-3 leading-5 text-white focus:outline-none"
                        >
                            <span v-if="loading == 1">
                                <Spin size="small" />
                            </span>
                            <span v-else>
                                {{ $t("save") }}
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useChats from "@/services/chatServices.js";
import Spin from "@/components/utils/Spin.vue";

const { createConversationFolder, loading, getConversationsFolderUser, errors } = useChats();
const loginUser = JSON.parse(localStorage.user);
const props = defineProps({ open: Boolean, toogleModal: Function });
const emits = defineEmits(["folderCreated"]);
const name = ref("");

const storeFolderConversation = async () => {
    await createConversationFolder({
        name: name.value,
        user_id: loginUser.id,
    });
    emits("folderCreated");
}
</script>
