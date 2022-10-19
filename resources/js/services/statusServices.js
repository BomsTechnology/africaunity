import axios from "axios";
import { ref } from "vue";

export default function useStatus() {
    const status = ref([]);
    const errorsStatus = ref("");
    const loading = ref(0);

    const getStatus = async () => {
        errorsStatus.value = "";
        loading.value = true;
        let response = await axios.get("/api/status", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        status.value = response.data.data;

        loading.value = false;
    };

    const createStatus = async (data) => {
        errorsStatus.value = "";
        try {
            loading.value = true;
            await axios.post("/api/status", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errorsStatus.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateStatus = async (id, data) => {
        errorsStatus.value = "";
        try {
            loading.value = true;
            await axios.put("/api/status/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errorsStatus.value +=
                        e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyStatus = async (id) => {
        errorsStatus.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/status/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsStatus.value = "Impossible de supprimer ce statu";
        }
    };

    return {
        status,
        errorsStatus,
        loading,
        getStatus,
        createStatus,
        updateStatus,
        destroyStatus,
    };
}
