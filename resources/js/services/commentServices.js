import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useComments() {
    const comments = ref([]);
    const comment = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getComments = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/comments", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        comments.value = response.data.data;

        loading.value = false;
    };

    const getCommentsPost = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/comments-post/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });

        comments.value = response.data.data;

        loading.value = false;
    };

    const getCommentsUser = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/comments-user/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });

        comments.value = response.data.data;

        loading.value = false;
    };

    const getComment = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/comments/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        comment.value = response.data.data;
    };

    const createComment = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/comments", data, {
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

    const updateComment = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put("/api/comments/" + data.id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
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

    const destroyComment = async (data) => {
        console.log(data);
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/comments/" + `${JSON.stringify(data)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errors.value = "Impossible de supprimer ce comment";
        }
    };

    return {
        comments,
        comment,
        errors,
        loading,
        getComments,
        getComment,
        createComment,
        updateComment,
        destroyComment,
        getCommentsPost,
        getCommentsUser,
    };
}
