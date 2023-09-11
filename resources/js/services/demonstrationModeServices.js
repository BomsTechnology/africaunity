import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useDemonstrationModes() {
    const router = useRouter();
    const demonstrationModes = ref([]);
    const demonstrationMode = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getDemonstrationModes = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/demonstrationModes", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        demonstrationModes.value = response.data.data;

        loading.value = false;
    };

    const getDemonstrationMode = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/demonstrationModes/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        demonstrationMode.value = response.data.data;
    };

    const createDemonstrationMode = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/demonstrationModes", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateDemonstrationMode = async (data, id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put("/api/demonstrationModes/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyDemonstrationMode = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/demonstrationModes/" + `${JSON.stringify(data)}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer cette category";
            }
        }
    };

    return {
        demonstrationModes,
        demonstrationMode,
        errors,
        loading,
        getDemonstrationModes,
        getDemonstrationMode,
        createDemonstrationMode,
        updateDemonstrationMode,
        destroyDemonstrationMode,
    };
}
