import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useUniversitySectors() {
    const universitySectors = ref([]);
    const universitySector = ref([]);
    const errorsUS = ref("");
    const loading = ref(0);

    const getUniversitySectors = async () => {
        errorsUS.value = "";
        loading.value = true;
        let response = await axios.get("/api/universitySectors", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        universitySectors.value = response.data.data;

        loading.value = false;
    };

    const getUniversitySector = async (id) => {
        errorsUS.value = "";
        loading.value = true;
        let response = await axios.get("/api/universitySectors/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        universitySector.value = response.data.data;
    };

    const createUniversitySector = async (data) => {
        errorsUS.value = "";
        try {
            loading.value = true;
            await axios.post("/api/universitySectors", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errorsUS.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateUniversitySector = async (id, data) => {
        errorsUS.value = "";
        try {
            loading.value = true;
            await axios.put("/api/universitySectors/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errorsUS.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyUniversitySector = async (id) => {
        errorsUS.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/universitySectors/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsUS.value = "Impossible de supprimer ce universitySector";
        }
    };

    return {
        universitySectors,
        universitySector,
        errorsUS,
        loading,
        getUniversitySectors,
        getUniversitySector,
        createUniversitySector,
        updateUniversitySector,
        destroyUniversitySector,
    };
}
