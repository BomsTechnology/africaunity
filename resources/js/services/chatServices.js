import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useChats() {
    const conversations = ref([]);
    const conversation = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getChats = async () => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/chats/", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            chats.value = response.data.data;
            loading.value = false;
        } catch (e) {
            if (e.response.status == 401) {
                router.push({
                    name: "login",
                    params: {
                        redirect: "not-login",
                    },
                });
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const getConversationsUser = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/chat/conversations/user/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            conversations.value = response.data.data;

            loading.value = false;
        } catch (e) {
            if (e.response.status == 401) {
                router.push({
                    name: "login",
                    params: {
                        redirect: "not-login",
                    },
                });
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const createConversation = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.post("/api/chat/conversations", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            conversation.value = response.data.data;
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const createMessage = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.post("/api/chat/messages", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            conversation.value = response.data.data;
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const isRead = async (data) => {
        errors.value = "";
        try {
            let response = await axios.post("/api/chat/messages/is-read", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const getChat = async (keywords) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/chat/user/search" + keywords, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            chat.value = response.data.data;
        } catch (e) {
            if (e.response.status == 401) {
                router.push({
                    name: "login",
                    params: {
                        redirect: "not-login",
                    },
                });
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const updateChat = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/chats/" + chat.value.id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyCoversation = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/chat/conversations/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce chat";
            }
        }
    };

    const markFilled = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.get("/api/chats-mark-filled/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce chat";
            }
        }
    };

    return {
        conversations,
        conversation,
        errors,
        loading,
        //getChats,
        //getChat,
        //markFilled,
        //getChatsFront,
        //updateChat,
        isRead,
        createMessage,
        destroyCoversation,
        getConversationsUser,
        createConversation,
        
    };
}