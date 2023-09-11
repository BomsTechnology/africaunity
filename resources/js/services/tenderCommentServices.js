import axios from "axios";
import { ref } from "vue";

export default function useTenderComments() {
    const tenderComments = ref([]);
    const tenderComment = ref([]);
    const errorsCmtAds = ref("");
    const loading = ref(0);

    const getTenderComments = async () => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/tenders-comments", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        tenderComments.value = response.data.data;

        loading.value = false;
    };

    const getTenderCommentsPost = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/tenders-comments-post/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        tenderComments.value = response.data.data;

        loading.value = false;
    };

    const getTenderCommentsUser = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/tenders-comments-user/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        tenderComments.value = response.data.data;

        loading.value = false;
    };

    const getTenderComment = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/tenders-comments/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        tenderComment.value = response.data.data;
    };

    const createTenderComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.post("/api/tenders-comments", data, {
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

    const updateTenderComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.put("/api/tenders-comments/" + data.id, data, {
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

    const destroyTenderComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/tenders-comments/" + `${JSON.stringify(data)}`,
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
                "Impossible de supprimer ce tenderComment";
        }
    };

    return {
        tenderComments,
        tenderComment,
        errorsCmtAds,
        loading,
        getTenderComments,
        getTenderComment,
        createTenderComment,
        updateTenderComment,
        destroyTenderComment,
        getTenderCommentsPost,
        getTenderCommentsUser,
    };
}
