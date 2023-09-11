import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useDemonstrationTypes() {
    const router = useRouter();
    const demonstrationTypes = ref([]);
    const demonstrationType = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getDemonstrationTypes = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/demonstrationTypes", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        demonstrationTypes.value = response.data.data;

        loading.value = false;
    };

    const getDemonstrationType = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/demonstrationTypes/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        demonstrationType.value = response.data.data;
    };

    const createDemonstrationType = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/demonstrationTypes", data, {
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

    const updateDemonstrationType = async (data, id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put("/api/demonstrationTypes/" + id, data, {
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

    const destroyDemonstrationType = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/demonstrationTypes/" + `${JSON.stringify(data)}`,
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
        demonstrationTypes,
        demonstrationType,
        errors,
        loading,
        getDemonstrationTypes,
        getDemonstrationType,
        createDemonstrationType,
        updateDemonstrationType,
        destroyDemonstrationType,
    };
}
