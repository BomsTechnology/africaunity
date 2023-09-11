import axios from "axios";
import { ref } from "vue";

export default function usePersonalPostComments() {
    const personalPostComments = ref([]);
    const personalPostComment = ref([]);
    const errorsCmtAds = ref("");
    const loading = ref(0);

    const getPersonalPostComments = async () => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/personalPost-comments", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        personalPostComments.value = response.data.data;

        loading.value = false;
    };

    const getPersonalPostCommentsPost = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/personalPost-comments-post/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        personalPostComments.value = response.data.data;

        loading.value = false;
    };

    const getPersonalPostCommentsUser = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/personalPost-comments-user/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        personalPostComments.value = response.data.data;

        loading.value = false;
    };

    const getPersonalPostComment = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/personalPost-comments/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        personalPostComment.value = response.data.data;
    };

    const createPersonalPostComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.post("/api/personalPost-comments", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errorsCmtAds)
                    errorsCmtAds.value +=
                        e.response.data.errorsCmtAds[key][0] + "\n";
            }
        }
    };

    const updatePersonalPostComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.put("/api/personalPost-comments/" + data.id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errorsCmtAds)
                    errorsCmtAds.value +=
                        e.response.data.errorsCmtAds[key][0] + "\t\n";
            }
        }
    };

    const destroyPersonalPostComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/personalPost-comments/" + `${JSON.stringify(data)}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsCmtAds.value =
                "Impossible de supprimer ce personalPostComment";
        }
    };

    return {
        personalPostComments,
        personalPostComment,
        errorsCmtAds,
        loading,
        getPersonalPostComments,
        getPersonalPostComment,
        createPersonalPostComment,
        updatePersonalPostComment,
        destroyPersonalPostComment,
        getPersonalPostCommentsPost,
        getPersonalPostCommentsUser,
    };
}
