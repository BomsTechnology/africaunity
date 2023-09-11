import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useContractTypes() {
    const contractTypes = ref([]);
    const contractType = ref([]);
    const errorsCT = ref("");
    const loading = ref(0);

    const getContractTypes = async () => {
        errorsCT.value = "";
        loading.value = true;
        let response = await axios.get("/api/contractTypes", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        contractTypes.value = response.data.data;

        loading.value = false;
    };

    const getContractType = async (id) => {
        errorsCT.value = "";
        loading.value = true;
        let response = await axios.get("/api/contractTypes/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        contractType.value = response.data.data;
    };

    const createContractType = async (data) => {
        errorsCT.value = "";
        try {
            loading.value = true;
            await axios.post("/api/contractTypes", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errorsCT)
                    errorsCT.value += e.response.data.errorsCT[key][0] + "\n";
            }
        }
    };

    const updateContractType = async (id, data) => {
        errorsCT.value = "";
        try {
            loading.value = true;
            await axios.put("/api/contractTypes/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errorsCT)
                    errorsCT.value += e.response.data.errorsCT[key][0] + "\t\n";
            }
        }
    };

    const destroyContractType = async (id) => {
        errorsCT.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/contractTypes/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsCT.value = "Impossible de supprimer ce contractType";
        }
    };

    return {
        contractTypes,
        contractType,
        errorsCT,
        loading,
        getContractTypes,
        getContractType,
        createContractType,
        updateContractType,
        destroyContractType,
    };
}
