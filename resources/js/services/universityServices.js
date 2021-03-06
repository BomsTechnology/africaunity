import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useUniversities() {
    const universities = ref([]);
    const minUniversities = ref([]);
    const university = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getUniversities = async (page = 1) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.get("/api/universities?page=" + page, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            universities.value = response.data.data;
            console.log(universities.value);
            minUniversities.value = universities.value.slice(0, 8);

            loading.value = 2;
        } catch (e) {
            if (e.response.status == 401) {
                router.push({
                    name: "login",
                    params: {
                        redirect: "not-login",
                    },
                });
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const getUniversity = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.get("/api/universities/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            university.value = response.data.data;
        } catch (e) {
            if (e.response.status == 401) {
                router.push({
                    name: "login",
                    params: {
                        redirect: "not-login",
                    },
                });
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const getUniversity2 = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.get("/api/universities2/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            university.value = response.data.data;
        } catch (e) {
            if (e.response.status == 401) {
                router.push({
                    name: "login",
                    params: {
                        redirect: "not-login",
                    },
                });
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    };

    const createUniversity = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/universities", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
            router.push({ name: "admin.university.index" });
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateUniversity = async (data, id) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/universities/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
            router.push({ name: "admin.university.index" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyUniversity = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.delete("/api/universities/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce pays";
            }
        }
    };

    return {
        minUniversities,
        universities,
        university,
        errors,
        loading,
        getUniversities,
        getUniversity,
        createUniversity,
        updateUniversity,
        destroyUniversity,
        getUniversity2,
    };
}
