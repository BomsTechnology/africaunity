<template>
    <div class="">
        <StartConversation
            :open="openModal"
            :toogleModal="toogleModal"
            :conversationSelect="startConversation"
        />
        <div class="flex w-full justify-center lg:justify-end">
            <button
                type="button"
                @click="toogleModal"
                class="mb-2 flex w-auto items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white lg:mb-0"
            >
                <PlusCircleIcon class="h-6 w-6" />
                <p class="text-base leading-4">Demarrer une conversation</p>
            </button>
        </div>
        <Error v-if="errors != ''">{{ errors }}</Error>
        <section
            class="relative mt-8 h-full w-full overflow-x-auto shadow-md sm:rounded-lg"
        >
            <div
                class="relative flex h-[700px] w-full rounded-lg bg-white shadow-lg"
            >
                <!-- start  mobile button change view -->
                <button
                    @click="changeView('conversation')"
                    type="button"
                    :class="[
                        open.conversation
                            ? ' border-primary-blue bg-primary-blue '
                            : '   border-primary-blue bg-white  text-primary-blue ',
                    ]"
                    class="absolute left-0 top-0 z-10 rounded-full border p-2 text-white shadow lg:hidden"
                >
                    <ChatBubbleLeftRightIcon class="h-5 w-5" />
                </button>
                <!-- end  mobile button change view -->

                <!-- start conversation mobile view -->
                <div v-if="open.conversation" class="w-full overflow-auto py-4">
                    <div class="relative mx-2">
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <MagnifyingGlassIcon
                                class="h-5 w-5 text-gray-500"
                            />
                        </div>
                        <input
                            type="text"
                            v-model="search"
                            class="block w-full border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                            placeholder="Rechercher..."
                            required
                        />
                    </div>
                    <div class="mt-4 overflow-auto">
                        <div
                            v-if="filteredConversation.length != []"
                            v-for="(
                                conversation, index
                            ) in filteredConversation"
                            :key="conversation.id"
                            @click="selectConversation(conversation)"
                        >
                            <div
                                v-if="conversation.type == 'conversation'"
                                class="flex h-24 w-full cursor-pointer items-center space-x-2 border-b p-3 hover:bg-gray-50"
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                                >
                                    <template
                                        v-for="user in conversation.users"
                                    >
                                        <img
                                            v-if="
                                                user.avatar &&
                                                user.id != props.user.id
                                            "
                                            :src="user.avatar"
                                            class="h-full w-full bg-cover object-cover"
                                            alt=""
                                        />
                                        <UserCircleIcon
                                            v-else
                                            class="h-full w-full text-gray-500"
                                        />
                                    </template>
                                </div>
                                <div class="flex-grow">
                                    <h1
                                        class="whitespace-normal break-words text-base font-bold"
                                    >
                                        <template
                                            v-for="user in conversation.users"
                                        >
                                            <span
                                                v-if="user.id != props.user.id"
                                                >{{ user.firstname }}</span
                                            >
                                        </template>
                                    </h1>
                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <h6
                                            class="whitespace-normal text-sm font-light text-gray-800"
                                        >
                                            <template
                                                v-if="
                                                    conversation.messages
                                                        .length > 0
                                                "
                                            >
                                                <span
                                                    class="block h-2 w-2 rounded-full"
                                                    :class="[
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].is_read == 1
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-400  ',
                                                    ]"
                                                ></span>
                                                <span
                                                    class="w-full overflow-hidden overflow-ellipsis"
                                                    >{{
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].message
                                                    }}</span
                                                >
                                            </template>
                                            <template
                                                v-else
                                                v-for="user in conversation.users"
                                            >
                                                <span
                                                    v-if="
                                                        user.id != props.user.id
                                                    "
                                                    >{{ user.email }}</span
                                                >
                                            </template>
                                        </h6>
                                        <span
                                            v-if="conversation.nbUnRead > 0"
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-sm font-light text-white"
                                        >
                                            <span>{{
                                                conversation.nbUnRead
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-else
                                class="flex h-24 w-full cursor-pointer items-center space-x-2 border-b p-3 hover:bg-gray-50"
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                                >
                                    <img
                                        v-if="conversation.image"
                                        :src="conversation.image"
                                        class="h-full w-full bg-cover object-cover"
                                        alt=""
                                    />
                                    <UserGroupIcon
                                        v-else
                                        class="h-full w-full text-gray-500"
                                    />
                                </div>
                                <div class="flex-grow">
                                    <h1
                                        class="whitespace-normal break-words text-base font-bold"
                                    >
                                        <span v-if="conversation.name">{{
                                            conversation.name
                                        }}</span>
                                        <span v-else>Sans nom</span>
                                    </h1>
                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <h6
                                            class="whitespace-normal text-sm font-light text-gray-800"
                                        >
                                            <template
                                                v-if="
                                                    conversation.messages
                                                        .length > 0
                                                "
                                            >
                                                <span
                                                    class="block h-2 w-2 rounded-full"
                                                    :class="[
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].is_read
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-400  ',
                                                    ]"
                                                ></span>
                                                <span
                                                    class="w-full overflow-hidden overflow-ellipsis"
                                                    >{{
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].message
                                                    }}</span
                                                >
                                            </template>
                                            <span
                                                v-else
                                                v-for="(
                                                    user, i
                                                ) in conversation.users"
                                            >
                                                <span v-if="i < 3">
                                                    {{ user.email }},
                                                </span>
                                            </span>
                                        </h6>
                                        <span
                                            v-if="conversation.nbUnRead > 0"
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-sm font-light text-white"
                                        >
                                            <span>{{
                                                conversation.nbUnRead
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end conversation mobile view -->

                <!-- start conversation pc view -->
                <div class="hidden w-[40%] flex-col py-4 lg:flex">
                    <div class="relative mx-2">
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <MagnifyingGlassIcon
                                class="h-5 w-5 text-gray-500"
                            />
                        </div>
                        <input
                            type="text"
                            v-model="search"
                            class="block w-full border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                            placeholder="Rechercher..."
                            required
                        />
                    </div>

                    <div class="mt-10 grow overflow-auto">
                        <div
                            v-if="filteredConversation.length != []"
                            v-for="(
                                conversation, index
                            ) in filteredConversation"
                            :key="conversation.id"
                            @click="selectConversation(conversation)"
                        >
                            <div
                                v-if="conversation.type == 'conversation'"
                                class="flex h-24 w-full cursor-pointer items-center space-x-2 border-b p-3 hover:bg-gray-50"
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                                >
                                    <template
                                        v-for="user in conversation.users"
                                    >
                                        <img
                                            v-if="
                                                user.avatar &&
                                                user.id != props.user.id
                                            "
                                            :src="user.avatar"
                                            class="h-full w-full bg-cover object-cover"
                                            alt=""
                                        />
                                        <UserCircleIcon
                                            v-else
                                            class="h-full w-full text-gray-500"
                                        />
                                    </template>
                                </div>
                                <div class="flex-grow">
                                    <h1
                                        class="whitespace-normal break-words text-base font-bold"
                                    >
                                        <template
                                            v-for="user in conversation.users"
                                        >
                                            <span
                                                v-if="user.id != props.user.id"
                                                >{{ user.firstname }}</span
                                            >
                                        </template>
                                    </h1>
                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <h6
                                            class="flex items-center gap-1 whitespace-normal text-sm font-light text-gray-800"
                                        >
                                            <template
                                                v-if="
                                                    conversation.messages
                                                        .length > 0
                                                "
                                            >
                                                <span
                                                    class="block h-2 w-2 flex-shrink-0 rounded-full"
                                                    :class="[
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].is_read
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-400  ',
                                                    ]"
                                                ></span>
                                                <span
                                                    class="w-full overflow-hidden overflow-ellipsis"
                                                    >{{
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].message
                                                    }}</span
                                                >
                                            </template>
                                            <template
                                                v-else
                                                v-for="user in conversation.users"
                                            >
                                                <span
                                                    v-if="
                                                        user.id != props.user.id
                                                    "
                                                    >{{ user.email }}</span
                                                >
                                            </template>
                                        </h6>
                                        <span
                                            v-if="conversation.nbUnRead > 0"
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-sm font-light text-white"
                                        >
                                            <span>{{
                                                conversation.nbUnRead
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-else
                                class="flex h-24 w-full cursor-pointer items-center space-x-2 border-b p-3 hover:bg-gray-50"
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                                >
                                    <img
                                        v-if="conversation.image"
                                        :src="conversation.image"
                                        class="h-full w-full bg-cover object-cover"
                                        alt=""
                                    />
                                    <UserGroupIcon
                                        v-else
                                        class="h-full w-full text-gray-500"
                                    />
                                </div>
                                <div class="flex-grow">
                                    <h1
                                        class="whitespace-normal break-words text-base font-bold"
                                    >
                                        <span v-if="conversation.name">{{
                                            conversation.name
                                        }}</span>
                                        <span v-else>Sans nom</span>
                                    </h1>
                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <h6
                                            class="whitespace-normal text-sm font-light text-gray-800"
                                        >
                                            <template
                                                v-if="
                                                    conversation.messages
                                                        .length > 0
                                                "
                                            >
                                                <span
                                                    class="block h-2 w-2 flex-shrink-0 rounded-full"
                                                    :class="[
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].is_read
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-400  ',
                                                    ]"
                                                ></span>
                                                <span
                                                    class="w-full overflow-hidden overflow-ellipsis"
                                                    >{{
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].message
                                                    }}</span
                                                >
                                            </template>
                                            <span
                                                v-else
                                                v-for="(
                                                    user, i
                                                ) in conversation.users"
                                            >
                                                <span v-if="i < 3">
                                                    {{ user.email }},
                                                </span>
                                            </span>
                                        </h6>
                                        <span
                                            v-if="conversation.nbUnRead > 0"
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-sm font-light text-white"
                                        >
                                            <span>{{
                                                conversation.nbUnRead
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end conversation pc view -->

                <!-- start chat  view -->
                <div
                    v-if="open.chat"
                    class="relative flex w-full grow flex-col bg-gray-50"
                >
                    <div
                        class="flex h-24 w-full items-center justify-between space-x-2 bg-white p-3"
                    >
                        <div
                            v-if="selectedConversation"
                            class="flex items-center gap-2"
                        >
                            <template
                                v-if="
                                    selectedConversation.type == 'conversation'
                                "
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded-full drop-shadow-md"
                                >
                                    <template
                                        v-for="user in selectedConversation.users"
                                    >
                                        <img
                                            v-if="user.image"
                                            :src="user.image"
                                            class="h-full w-full bg-cover object-cover"
                                            alt=""
                                        />
                                        <UserCircleIcon
                                            v-else
                                            class="h-full w-full text-gray-500"
                                        />
                                    </template>
                                </div>
                                <h1 class="whitespace-normal text-sm font-bold">
                                    <template
                                        v-for="user in selectedConversation.users"
                                    >
                                        <span v-if="user.id != props.user.id">{{
                                            user.firstname
                                        }}</span>
                                    </template>
                                </h1>
                            </template>
                            <template v-else>
                                <div
                                    class="h-12 w-12 overflow-hidden rounded-full drop-shadow-md"
                                >
                                    <img
                                        v-if="selectedConversation.image"
                                        :src="selectedConversation.image"
                                        class="h-full w-full bg-cover object-cover"
                                        alt=""
                                    />
                                    <UserGroupIcon
                                        v-else
                                        class="h-full w-full text-gray-500"
                                    />
                                </div>
                                <h1 class="whitespace-normal text-sm font-bold">
                                    <span v-if="selectedConversation.name">{{
                                        selectedConversation.name
                                    }}</span>
                                    <span v-else>Sans nom</span>
                                </h1>
                            </template>
                        </div>
                        <!-- <button
                            @click="deleteConversation(selectedConversation.id)"
                            type="button"
                            v-if="selectedConversation"
                        >
                            <span>
                                <TrashIcon class="h-6 w-6 text-red-500" />
                            </span>
                        </button> -->
                    </div>

                    <div
                        ref="chatDiv"
                        id="chatDiv"
                        class="no-scrollbar h-full overflow-auto p-4"
                    >
                        <div
                            v-if="
                                selectedConversation &&
                                groupMessages.length != []
                            "
                            v-for="(group, index) in groupMessages"
                            :key="index"
                        >
                            <div
                                class="sticky top-0 my-4 flex items-center justify-center"
                            >
                                <span
                                    class="rounded bg-white px-2 py-1 text-center text-xs uppercase text-gray-700 shadow"
                                    >{{ showDate(group[0].date, true) }}</span
                                >
                            </div>
                            <template
                                v-for="(message, i) in group"
                                :key="message.id"
                            >
                                <div
                                    v-if="message.user.id != props.user.id"
                                    class="mb-2 flex justify-start pr-10"
                                >
                                    <p
                                        class="whitespace-pre-line break-all rounded-r-lg rounded-bl-lg bg-white p-2 text-xs leading-normal tracking-wider shadow"
                                    >
                                        {{ message.message }}

                                        <span
                                            class="mt-2 flex items-center gap-1 text-right text-xs font-bold"
                                        >
                                            <span
                                                class="block h-2 w-2 rounded-full"
                                                :class="[
                                                    message.is_read
                                                        ? 'bg-green-500'
                                                        : 'bg-gray-300  ',
                                                ]"
                                            ></span>
                                            <span class="block">{{
                                                showDate(message.date, false)
                                            }}</span>
                                        </span>
                                    </p>
                                </div>
                                <div v-else class="mb-2 flex justify-end pl-10">
                                    <p
                                        class="whitespace-pre-line break-all rounded-l-lg rounded-tr-lg bg-primary-blue p-2 text-xs leading-normal tracking-wider text-white shadow"
                                    >
                                        {{ message.message }}
                                        <span
                                            class="mt-2 flex items-center gap-1 text-right text-xs font-bold"
                                        >
                                            <span
                                                class="block h-2 w-2 rounded-full"
                                                :class="[
                                                    message.is_read
                                                        ? 'bg-green-500'
                                                        : 'bg-gray-300  ',
                                                ]"
                                            ></span>
                                            <span class="block">{{
                                                showDate(message.date, false)
                                            }}</span>
                                        </span>
                                    </p>
                                </div>
                            </template>
                        </div>
                        <div
                            v-else-if="!selectedConversation"
                            class="flex h-full items-center justify-center"
                        ></div>
                        <div
                            v-else
                            class="flex h-full items-center justify-center"
                        >
                            <h1 class="text-3xl font-semibold">No Message</h1>
                        </div>
                    </div>

                    <div class="0 w-full bg-white">
                        <div
                            class="dark:bg-gray-700 flex items-center rounded-lg py-2 px-3"
                        >
                            <textarea
                                id="chat"
                                rows="1"
                                @keydown.enter.prevent="sendMessage" @keydown.shift.enter="handleShiftEnter"
                                v-model="message.message"
                                class="mx-4 block w-full resize-none rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                                placeholder="Your message..."
                            ></textarea>

                            <button
                                type="button"
                                @click="sendMessage()"
                                class="hover:bg-secondary-color inline-flex cursor-pointer items-center justify-center rounded-full bg-primary-blue p-2 text-white"
                            >
                                <span v-if="loading == 1">
                                    <Spin size="small" />
                                </span>
                                <span v-else>
                                    <PaperAirplaneIcon class="h-6 w-6" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- end chat  view -->
            </div>
        </section>
    </div>
</template>

<script setup>
import {
    MagnifyingGlassIcon,
    PaperAirplaneIcon,
    ChatBubbleLeftRightIcon,
    PlusCircleIcon,
    UserGroupIcon,
    UserCircleIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";
import { reactive, onMounted, ref, computed, onUnmounted, watch } from "vue";
import Spin from "@/components/utils/Spin.vue";
import StartConversation from "../StartConversation.vue";
import useChats from "@/services/chatServices";
import Error from "@/components/Error.vue";

const {
    createConversation,
    loading,
    errors,
    conversation,
    createMessage,
    destroyCoversation,
    getConversationsUser,
    conversations,
    isRead,
} = useChats();

const chatDiv = ref(null)
const search = ref("");
const openModal = ref(false);
const props = defineProps({
    user: Object,
});
const selectedConversation = ref(null);
onMounted(async () => {
    await getConversationsUser(props.user.id);
});

watch(selectedConversation, async (newConv, oldConv) => {
    scrollToEnd();
    if (oldConv && newConv.id != oldConv.id) {
        window.Echo.leave(`chat.${oldConv.id}`);
    }

    window.Echo.channel(`chat.${newConv.id}`).listen(
        ".new-message",
        async (e) => {
            await getConversationsUser(props.user.id);
            console.log(conversations.value);
            if (selectedConversation.value) {
                selectedConversation.value = conversations.value.filter(
                    (conv) => conv.id === selectedConversation.value.id
                )[0];
                scrollToEnd();
            }
        }
    );

    message.conversation_id = newConv.id;
    await isRead({ ...message });
    await getConversationsUser(props.user.id);
    scrollToEnd();
});
const open = reactive({
    chat: true,
    conversation: false,
});

const message = reactive({
    message: "",
    user_id: props.user.id,
    conversation_id: null,
});

function changeView(view) {
    switch (view) {
        case "chat":
            open.conversation = false;
            open.chat = true;
            break;
        case "conversation":
            open.chat = false;
            open.conversation = true;
            break;
    }
}
const toogleModal = () => {
    openModal.value = !openModal.value;
};

const startConversation = async (userSelect) => {
    toogleModal();
    let isStartCov = conversations.value.filter((conv) => {
        return conv.users.find((user) => {
            return user.id == userSelect.id;
        });
    })[0];
    if (!isStartCov) {
        await createConversation({
            users: [props.user.id, userSelect.id],
        });
        await getConversationsUser(props.user.id);
        selectedConversation.value = conversations.value[0];
    } else {
        selectedConversation.value = isStartCov;
    }
};

const deleteConversation = async (id) => {
    if (confirm("Are you sure you want to delete this conversation?")) {
        await destroyCoversation(id);
        await getConversationsUser(props.user.id);
        selectedConversation.value = null;
    }
};

const filteredConversation = computed(() => {
    return conversations.value.filter((conv) => {
        return conv.users.filter((user) => {
            return (
                user.id != props.user.id &&
                (user.firstname
                    .toLowerCase()
                    .includes(search.value.toLowerCase()) ||
                    user.lastname
                        .toLowerCase()
                        .includes(search.value.toLowerCase()) ||
                    user.email
                        .toLowerCase()
                        .includes(search.value.toLowerCase()))
            );
        });
    });
});

const groupMessages = computed(() => {
    let groups = {};
    selectedConversation.value.messages.forEach((message) => {
        if (!groups[`${showDate(message.date, true)}`]) {
            groups[`${showDate(message.date, true)}`] = [];
        }
        groups[`${showDate(message.date, true)}`].push(message);
    });
    return groups;
});

function selectConversation(conversation) {
    selectedConversation.value = conversation;
    changeView("chat");
    var chatDiv = document.getElementById("chatDiv");
    chatDiv.scrollTo(0, chatDiv.scrollHeight);
}

async function sendMessage() {
    if (selectedConversation.value && message.message) {
        message.conversation_id = selectedConversation.value.id;
        await createMessage({ ...message });
        message.message = "";
    }
}
function showDate(date, grouped) {
    date = new Date(date);
    const now = new Date();
    const difference = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const joursSemaine = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ];

    if (difference === 0) {
        return grouped
            ? "Aujourd'hui"
            : `${date.getHours()}h:${date.getMinutes()}m`;
    } else if (difference === 1) {
        return grouped ? "Hier" : `${date.getHours()}h:${date.getMinutes()}m`;
    } else if (difference > 1 && difference < 7) {
        return grouped
            ? joursSemaine[date.getDay()]
            : `${date.getHours()}h:${date.getMinutes()}m`;
    } else {
        return grouped
            ? date.toLocaleDateString("fr-FR", options)
            : `${date.getHours()}h:${date.getMinutes()}m`;
    }
}

const scrollToEnd = () => {
  console.log('scrool to end')
      chatDiv.value?.scroll({
                top: chatDiv.value?.scrollHeight,
                left:0,
                behavior: "smooth",
            });
}

const handleShiftEnter = (event) => {
  if (event.shiftKey) {
    // Ajouter un retour à la ligne dans le champ de texte
    const textarea = event.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    textarea.value = value.substring(0, start) + "\n" + value.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + 1;
    event.preventDefault();
  }
}
</script>
