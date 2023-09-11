import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useSizeCompanies() {
    const sizeCompanies = ref([]);
    const sizeCompany = ref([]);
    const errorsSC = ref("");
    const loading = ref(0);

    const getSizeCompanies = async () => {
        errorsSC.value = "";
        loading.value = true;
        let response = await axios.get("/api/sizeCompanies", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        sizeCompanies.value = response.data.data;

        loading.value = false;
    };

    const getSizeCompany = async (id) => {
        errorsSC.value = "";
        loading.value = true;
        let response = await axios.get("/api/sizeCompanies/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        sizeCompany.value = response.data.data;
    };

    const createSizeCompany = async (data) => {
        errorsSC.value = "";
        try {
            loading.value = true;
            await axios.post("/api/sizeCompanies", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errorsSC)
                    errorsSC.value += e.response.data.errorsSC[key][0] + "\n";
            }
        }
    };

    const updateSizeCompany = async (id, data) => {
        errorsSC.value = "";
        try {
            loading.value = true;
            await axios.put("/api/sizeCompanies/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errorsSC)
                    errorsSC.value += e.response.data.errorsSC[key][0] + "\t\n";
            }
        }
    };

    const destroySizeCompany = async (id) => {
        errorsSC.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/sizeCompanies/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errorsSC.value = "Impossible de supprimer ce pays";
            }
        }
    };

    return {
        sizeCompanies,
        sizeCompany,
        errorsSC,
        loading,
        getSizeCompanies,
        getSizeCompany,
        createSizeCompany,
        updateSizeCompany,
        destroySizeCompany,
    };
}
