import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export default function useCities() {
    const router = useRouter();
    const cities = ref([]);
    const city = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const { locale } = useI18n();

    const getCities = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get(`/api/cities/language/${locale.value}`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        cities.value = response.data.data;

        loading.value = false;
    };

    const getCity = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/cities/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        city.value = response.data.data;
    };

    const createCity = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/cities", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.city.index" });
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateCity = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put("/api/cities/" + id, city.value, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.city.index" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyCity = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/cities/" + `${JSON.stringify(data)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce pays";
            }
        }
    };

    return {
        cities,
        city,
        errors,
        loading,
        getCities,
        getCity,
        createCity,
        updateCity,
        destroyCity,
    };
}
