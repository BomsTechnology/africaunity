import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";;
export default function useBusinessTypes() {
    const businessTypes = ref([]);
    const businessType = ref([]);
    const errorsBT = ref("");
    const loading = ref(0);

    const getBusinessTypes = async () => {
        errorsBT.value = "";
        loading.value = 1;
        let response = await axios.get("/api/businessTypes", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        businessTypes.value = response.data.data;

        loading.value = 2;
    };

    const getBusinessType = async (id) => {
        errorsBT.value = "";
        loading.value = 1;
        let response = await axios.get("/api/businessTypes/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        businessType.value = response.data.data;
    };

    const createBusinessType = async (data) => {
        errorsBT.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/businessTypes", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errorsBT.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateBusinessType = async (id, data) => {
        errorsBT.value = "";
        try {
            loading.value = 1;
            await axios.put("/api/businessTypes/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errorsBT.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyBusinessType = async (id) => {
        errorsBT.value = "";
        try {
            loading.value = 1;
            await axios.delete("/api/businessTypes/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsBT.value = "Impossible de supprimer ce businessType";
        }
    };

    return {
        businessTypes,
        businessType,
        errorsBT,
        loading,
        getBusinessTypes,
        getBusinessType,
        createBusinessType,
        updateBusinessType,
        destroyBusinessType,
    };
}
