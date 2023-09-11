import axios from "axios";
import { ref } from "vue";

export default function useDemonstrationComments() {
    const demonstrationComments = ref([]);
    const demonstrationComment = ref([]);
    const errorsCmtAds = ref("");
    const loading = ref(0);

    const getDemonstrationComments = async () => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/demonstration-comments", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        demonstrationComments.value = response.data.data;

        loading.value = false;
    };

    const getDemonstrationCommentsPost = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/demonstration-comments-post/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        demonstrationComments.value = response.data.data;

        loading.value = false;
    };

    const getDemonstrationCommentsUser = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/demonstration-comments-user/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        demonstrationComments.value = response.data.data;

        loading.value = false;
    };

    const getDemonstrationComment = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/demonstration-comments/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        demonstrationComment.value = response.data.data;
    };

    const createDemonstrationComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.post("/api/demonstration-comments", data, {
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

    const updateDemonstrationComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.put("/api/demonstration-comments/" + data.id, data, {
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

    const destroyDemonstrationComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/demonstration-comments/" + `${JSON.stringify(data)}`,
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
                "Impossible de supprimer ce demonstrationComment";
        }
    };

    return {
        demonstrationComments,
        demonstrationComment,
        errorsCmtAds,
        loading,
        getDemonstrationComments,
        getDemonstrationComment,
        createDemonstrationComment,
        updateDemonstrationComment,
        destroyDemonstrationComment,
        getDemonstrationCommentsPost,
        getDemonstrationCommentsUser,
    };
}
