import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";


export default function useContinents() {
    const router = useRouter();
    const continents = ref([]);
    const continent = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const { locale } = useI18n();

    const getContinents = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get(`/api/continents/language/${locale.value}`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        continents.value = response.data.data;

        loading.value = false;
    };

    const getContinent = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/continents/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        continent.value = response.data.data;
    };

    const createContinent = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/continents", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.continent.index" });
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateContinent = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put("/api/continents/" + id, continent.value, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.continent.index" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyContinent = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/continents/" + `${JSON.stringify(data)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errors.value = "Impossible de supprimer ce continent";
        }
    };

    return {
        continents,
        continent,
        errors,
        loading,
        getContinents,
        getContinent,
        createContinent,
        updateContinent,
        destroyContinent,
    };
}
