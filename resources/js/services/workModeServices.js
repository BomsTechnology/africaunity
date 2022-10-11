import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useWorkModes() {
    const workModes = ref([]);
    const workMode = ref([]);
    const errorsWM = ref("");
    const loading = ref(0);

    const getWorkModes = async () => {
        errorsWM.value = "";
        loading.value = true;
        let response = await axios.get("/api/workModes", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        workModes.value = response.data.data;

        loading.value = false;
    };

    const getWorkMode = async (id) => {
        errorsWM.value = "";
        loading.value = true;
        let response = await axios.get("/api/workModes/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        workMode.value = response.data.data;
    };

    const createWorkMode = async (data) => {
        errorsWM.value = "";
        try {
            loading.value = true;
            await axios.post("/api/workModes", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errorsWM.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateWorkMode = async (id, data) => {
        errorsWM.value = "";
        try {
            loading.value = true;
            await axios.put("/api/workModes/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errorsWM.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyWorkMode = async (id) => {
        errorsWM.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/workModes/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsWM.value = "Impossible de supprimer ce workMode";
        }
    };

    return {
        workModes,
        workMode,
        errorsWM,
        loading,
        getWorkModes,
        getWorkMode,
        createWorkMode,
        updateWorkMode,
        destroyWorkMode,
    };
}
