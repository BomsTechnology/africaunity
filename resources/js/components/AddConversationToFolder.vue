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
                aria-hidden="true"
                style="backdrop-filter: blur(5px)"
                @click="toogleModal"
            ></div>

            <span
                class="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
                >&#8203;</span
            >
            <div
                class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
                <!-- Modal content -->
                <div class="relative rounded-lg bg-white py-4">
                    <h1 class="text-2xl font-bold text-black mx-4">
                        Selectionner un dossier
                    </h1>
                    <div
                        class=" max-h-96 min-h-[200px]  overflow-y-auto mt-5"
                    >
                        <button type="button"
                            v-if="folders.length != []"
                            v-for="folder in folders"
                            :key="folder.id"
                            @click="conversationToFolder(folder)"
                            class=" cursor-pointer block w-full text-xl text-left bg-white px-6  py-2 hover:bg-gray-100"
                        >{{  folder.name  }}
                        </button>

                        <div v-else>
                            <NoContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useChats from "@/services/chatServices.js";
import NoContent from "./utils/NoContent.vue";

const {  loading,  errors, addConversationToFolder } = useChats();

const props = defineProps({
    open: Boolean,
    toogleModal: Function,
    folders: Array,
    conversation: Object,
});
const emits = defineEmits(["conversationAdded"]);

const conversationToFolder = async (folder) => {
    const isExist = folder.conversations.filter((conv) => conv.id == props.conversation.id)[0];
    if(!isExist){
        await addConversationToFolder(
            {
                conversation_id: props.conversation.id,
                conversation_folder_id: folder.id,
            }
        );
    }
    emits("conversationAdded", { isExist: isExist ? true : false  ,
        folder});
}
</script>
