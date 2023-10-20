import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useSchoolingTypes() {
    const schoolingTypes = ref([]);
    const schoolingType = ref([]);
    const errorsST = ref("");
    const loading = ref(0);

    const getSchoolingTypes = async () => {
        errorsST.value = "";
        loading.value = true;
        let response = await axios.get("/api/schoolingTypes", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        schoolingTypes.value = response.data.data;

        loading.value = false;
    };

    const getSchoolingType = async (id) => {
        errorsST.value = "";
        loading.value = true;
        let response = await axios.get("/api/schoolingTypes/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        schoolingType.value = response.data.data;
    };

    const createSchoolingType = async (data) => {
        errorsST.value = "";
        try {
            loading.value = true;
            await axios.post("/api/schoolingTypes", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errorsST.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateSchoolingType = async (id, data) => {
        errorsST.value = "";
        try {
            loading.value = true;
            await axios.put("/api/schoolingTypes/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errorsST.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroySchoolingType = async (id) => {
        errorsST.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/schoolingTypes/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsST.value = "Impossible de supprimer ce schoolingType";
        }
    };

    return {
        schoolingTypes,
        schoolingType,
        errorsST,
        loading,
        getSchoolingTypes,
        getSchoolingType,
        createSchoolingType,
        updateSchoolingType,
        destroySchoolingType,
    };
}
