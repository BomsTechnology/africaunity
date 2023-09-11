import axios from "axios";
import { ref } from "vue";

export default function useAnnouncementComments() {
    const announcementComments = ref([]);
    const announcementComment = ref([]);
    const errorsCmtAds = ref("");
    const loading = ref(0);

    const getAnnouncementComments = async () => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/announcement-comments", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        announcementComments.value = response.data.data;

        loading.value = false;
    };

    const getAnnouncementCommentsPost = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/announcement-comments-post/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        announcementComments.value = response.data.data;

        loading.value = false;
    };

    const getAnnouncementCommentsUser = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/announcement-comments-user/" + id,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );

        announcementComments.value = response.data.data;

        loading.value = false;
    };

    const getAnnouncementComment = async (id) => {
        errorsCmtAds.value = "";
        loading.value = true;
        let response = await axios.get("/api/announcement-comments/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        announcementComment.value = response.data.data;
    };

    const createAnnouncementComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.post("/api/announcement-comments", data, {
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

    const updateAnnouncementComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.put("/api/announcement-comments/" + data.id, data, {
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

    const destroyAnnouncementComment = async (data) => {
        errorsCmtAds.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/announcement-comments/" + `${JSON.stringify(data)}`,
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
                "Impossible de supprimer ce announcementComment";
        }
    };

    return {
        announcementComments,
        announcementComment,
        errorsCmtAds,
        loading,
        getAnnouncementComments,
        getAnnouncementComment,
        createAnnouncementComment,
        updateAnnouncementComment,
        destroyAnnouncementComment,
        getAnnouncementCommentsPost,
        getAnnouncementCommentsUser,
    };
}
