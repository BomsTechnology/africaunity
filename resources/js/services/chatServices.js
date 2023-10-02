import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useChats() {
    const conversations = ref([]);
    const folders = ref([]);
    const conversation = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getConversationsUser = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get(
                "/api/chat/conversations/user/" + id,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            conversations.value = await orderyConversation(response.data.data);

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

    const getConversationsFolderUser = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/chat/folders/user/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            let res = response.data.data;
            for (let i = 0; i < res.length; i++) {
                res[i].conversations = await orderyConversation(
                    res[i].conversations
                );
            }
            folders.value = res;
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

    const createConversationFolder = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.post("/api/chat/folders", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const addConversationToFolder = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/chat/folders/conversations", data, {
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

    const reportMessage = async (data) => {
        errors.value = "";
        try {
            let response = await axios.post("/api/chat/report/messages",data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
        } catch (e) {

            if (e.response && e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const isRead = async (data) => {
        errors.value = "";
        try {
            let response = await axios.post("/api/chat/isread", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            conversations.value = await orderyConversation(response.data.data);
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateMessage = async (id, data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post(
                "/api/chat/messages/" + id,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyConversation = async (id, data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/chat/conversations/" + id + '/delete', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer cette conversation";
            }
        }
    };

    const destroyCoversationFolder = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/chat/folders/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce Dossier";
            }
        }
    };

    const deleteMessage = async (id, data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post(
                "/api/chat/messages/" + id + "/delete",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce Message";
            }
        }
    };

    const removeCoversationToFolder = async (folder_id, conversation_id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post(
                "/api/chat/folders/conversations/" + folder_id,
                {
                    conversation_id: conversation_id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de retirer cette conversation";
            }
        }
    };

    const orderyConversation = async (data) => {
        let conWithMessages = data.filter((conv) => conv.messages.length > 0);
        let conWithOutMessages = data.filter(
            (conv) => conv.messages.length == 0
        );
        conWithMessages.sort((a, b) => {
            let date2 = new Date(
                b.messages[b.messages.length - 1].date
            ).getTime();
            let date1 = new Date(
                a.messages[a.messages.length - 1].date
            ).getTime();
            return date2 - date1;
        });
        const res = conWithMessages.concat(conWithOutMessages);
        return res;
    };

    return {
        conversations,
        conversation,
        errors,
        loading,
        deleteMessage,
        updateMessage,
        removeCoversationToFolder,
        destroyCoversationFolder,
        addConversationToFolder,
        folders,
        isRead,
        createMessage,
        destroyConversation,
        getConversationsUser,
        createConversation,
        getConversationsFolderUser,
        createConversationFolder,
        reportMessage,
    };
}
