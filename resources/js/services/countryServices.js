import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export default function useCountries() {
    const router = useRouter();
    const countries = ref([]);
    const country = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const { locale } = useI18n();

    const getCountries = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get(`/api/countries/language/${locale.value}`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        countries.value = response.data.data;

        loading.value = false;
    };

    const getCountry = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/countries/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        country.value = response.data.data;
    };

    const createCountry = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/countries", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.country.index" });
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateCountry = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put("/api/countries/" + id, country.value, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.country.index" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyCountry = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/countries/" + `${JSON.stringify(data)}`, {
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
        countries,
        country,
        errors,
        loading,
        getCountries,
        getCountry,
        createCountry,
        updateCountry,
        destroyCountry,
    };
}
