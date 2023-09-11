import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useDemonstrationNiches() {
    const router = useRouter();
    const demonstrationNiches = ref([]);
    const demonstrationNiche = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getDemonstrationNiches = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/demonstrationNiches", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        demonstrationNiches.value = response.data.data;

        loading.value = false;
    };

    const getDemonstrationNiche = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/demonstrationNiches/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        demonstrationNiche.value = response.data.data;
    };

    const createDemonstrationNiche = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/demonstrationNiches", data, {
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

    const updateDemonstrationNiche = async (data, id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.put(
                "/api/demonstrationNiches/" + id,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyDemonstrationNiche = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/demonstrationNiches/" + `${JSON.stringify(data)}`,
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
        demonstrationNiches,
        demonstrationNiche,
        errors,
        loading,
        getDemonstrationNiches,
        getDemonstrationNiche,
        createDemonstrationNiche,
        updateDemonstrationNiche,
        destroyDemonstrationNiche,
    };
}
