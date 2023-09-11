import axios from "axios";
import { ref } from "vue";

export default function useFollowers() {
    const followers = ref([]);
    const follower = ref([]);
    const errorsFollower = ref("");
    const loading = ref(false);

    const getFollowers = async () => {
        errorsFollower.value = "";
        loading.value = true;
        let response = await axios.get("/api/followers", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        followers.value = response.data.data;

        loading.value = false;
    };

    const getFollower = async (id) => {
        errorsFollower.value = "";
        loading.value = true;
        let response = await axios.get("/api/followers/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = false;
        follower.value = response.data.data;
    };

    const createFollower = async (data) => {
        errorsFollower.value = "";
        try {
            loading.value = true;
            let response = await axios.post("/api/followers", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            localStorage.user = JSON.stringify(response.data.data);
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = false;
                for (const key in e.response.data.errorsFollower)
                    errorsFollower.value +=
                        e.response.data.errorsFollower[key][0] + "\n";
            }
        }
    };

    const updateFollower = async (id, data) => {
        errorsFollower.value = "";
        try {
            loading.value = true;
            await axios.put("/api/followers/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = false;
            if (e.response.status == 422) {
                for (const key in e.response.data.errorsFollower)
                    errorsFollower.value +=
                        e.response.data.errorsFollower[key][0] + "\t\n";
            }
        }
    };

    const destroyFollower = async (id) => {
        errorsFollower.value = "";
        try {
            loading.value = true;
            let response = await axios.delete("/api/followers/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            localStorage.user = JSON.stringify(response.data.data);
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = false;
            errorsFollower.value = "Impossible de supprimer ce follower";
        }
    };

    return {
        followers,
        follower,
        errorsFollower,
        loading,
        getFollowers,
        getFollower,
        createFollower,
        updateFollower,
        destroyFollower,
    };
}
