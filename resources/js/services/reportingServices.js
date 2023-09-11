import axios from "axios";
import { ref } from "vue";

export default function useReportings() {
    const reportings = ref([]);
    const reporting = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getReportings = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/reports", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        reportings.value = response.data.data;

        loading.value = false;
    };

    const getReporting = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/reports/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        reporting.value = response.data.data;
    };


    const destroyReporting = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/reports/" + `${JSON.stringify(data)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errors.value = "Impossible de supprimer ce reporting";
        }
    };

    return {
        reportings,
        reporting,
        errors,
        loading,
        getReportings,
        //getReporting,
        destroyReporting,
    };
}
