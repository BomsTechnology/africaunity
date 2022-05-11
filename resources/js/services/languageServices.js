import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useLanguages() {
    const languages = ref([]);
    const language = ref([]);
    const errorsLang = ref("");
    const loading = ref(0);

    const getLanguages = async () => {
        errorsLang.value = "";
        loading.value = 1;
        let response = await axios.get("/api/languages", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        languages.value = response.data.data;

        loading.value = 2;
    };

    const getLanguage = async (id) => {
        errorsLang.value = "";
        loading.value = 1;
        let response = await axios.get("/api/languages/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        language.value = response.data.data;
    };

    const createLanguage = async (data) => {
        errorsLang.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/languages", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errorsLang.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateLanguage = async (id, data) => {
        errorsLang.value = "";
        try {
            loading.value = 1;
            await axios.put("/api/languages/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errorsLang.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyLanguage = async (id) => {
        errorsLang.value = "";
        try {
            loading.value = 1;
            await axios.delete("/api/languages/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsLang.value = "Impossible de supprimer ce language";
        }
    };

    return {
        languages,
        language,
        errorsLang,
        loading,
        getLanguages,
        getLanguage,
        createLanguage,
        updateLanguage,
        destroyLanguage,
    };
}
