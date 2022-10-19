import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useUniversities() {
    const universities = ref([]);
    const university = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const isAll = ref(false);
    const page = ref(1);

    const getAllUniversities = async () => {
        errors.value = "";
        try {
            universities.value = [];
            loading.value = true;
            let response = await axios.get("/api/university/all", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            universities.value = response.data.data;

            loading.value = false;
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

    const getUniversities = async () => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get(
                "/api/universities?page=" + page.value,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            if (page.value == 1) {
                universities.value = response.data.data;
            } else {
                universities.value = universities.value.concat(
                    response.data.data
                );
            }
            loading.value = false;
            if (response.data.data.length == 0) {
                isAll.value = true;
            }
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

    const filterUniversities = async (data) => {
        errors.value = "";
        try {
            loading.value = 3;
            let response = await axios.post("/api/universities-filter", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            universities.value = response.data.data;
            loading.value = false;
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
            loading.value = true;
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
            loading.value = true;
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
            loading.value = true;
            await axios.post("/api/universities", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
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
            loading.value = true;
            await axios.post("/api/universities/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.university.index" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyUniversity = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/universities/" + `${JSON.stringify(data)}`,
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
                errors.value = "Impossible de supprimer cette université";
            }
        }
    };

    return {
        filterUniversities,
        isAll,
        page,
        universities,
        university,
        errors,
        loading,
        getUniversities,
        getAllUniversities,
        getUniversity,
        createUniversity,
        updateUniversity,
        destroyUniversity,
        getUniversity2,
    };
}
