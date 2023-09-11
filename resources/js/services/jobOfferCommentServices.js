import axios from "axios";
import { ref } from "vue";

export default function useJobOfferComments() {
    const jobOfferComments = ref([]);
    const jobOfferComment = ref([]);
    const errorsCmtAds = ref("");
    const loading = ref(0);

    const getJobOfferComments = async () => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/jobOffer-comments", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        jobOfferComments.value = response.data.data;

        loading.value = false;
    };

    const getJobOfferCommentsPost = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/jobOffer-comments-post/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        jobOfferComments.value = response.data.data;

        loading.value = false;
    };

    const getJobOfferCommentsUser = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/jobOffer-comments-user/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        jobOfferComments.value = response.data.data;

        loading.value = false;
    };

    const getJobOfferComment = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/jobOffer-comments/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        jobOfferComment.value = response.data.data;
    };

    const createJobOfferComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.post("/api/jobOffer-comments", data, {
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

    const updateJobOfferComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.put("/api/jobOffer-comments/" + data.id, data, {
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

    const destroyJobOfferComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/jobOffer-comments/" + `${JSON.stringify(data)}`,
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
                "Impossible de supprimer ce jobOfferComment";
        }
    };

    return {
        jobOfferComments,
        jobOfferComment,
        errorsCmtAds,
        loading,
        getJobOfferComments,
        getJobOfferComment,
        createJobOfferComment,
        updateJobOfferComment,
        destroyJobOfferComment,
        getJobOfferCommentsPost,
        getJobOfferCommentsUser,
    };
}
