import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useTenders() {
    const tenders = ref([]);
    const tender = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const isAll = ref(false);
    const page = ref(1);
    const getTenders = async () => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/tenders/", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            tenders.value = response.data.data;
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

    const getTendersFront = async () => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get(
                "/api/tenders-front?page=" + page.value,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            if (page.value == 1) {
                tenders.value = response.data.data;
            } else {
                tenders.value = tenders.value.concat(response.data.data);
            }
            loading.value = false;
            if (response.data.data.length == 0) {
                isAll.value = true;
            }
        } catch (e) {
            if (e && e.response.status == 401) {
                router.push({
                    name: "login",
                    params: {
                        redirect: "not-login",
                    },
                });
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }else{
                console.log(e)
            }
        }
    };

    const filterJobs = async (data) => {
        errors.value = "";
        try {
            loading.value = 3;
            let response = await axios.post("/api/tenders-filter", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            tenders.value = response.data.data;
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

    const getTendersUser = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/tenders-user/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            tenders.value = response.data.data;

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

    const getTender = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/tenders/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            tender.value = response.data.data;
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

    const getTender2 = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/tenders2/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        tender.value = response.data.data;
    };

    const createTender = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/tenders", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-Type": "multipart/form-data",
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

    const updateTender = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/tenders/" + tender.value.id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-Type": "multipart/form-data",
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

    const destroyTender = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/tenders/" + `${JSON.stringify(data)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce tender";
            }
        }
    };

    const markFilled = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.get("/api/tenders-mark-filled/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce tender";
            }
        }
    };

    return {
        isAll,
        page,
        tenders,
        tender,
        errors,
        loading,
        filterJobs,
        getTenders,
        getTender,
        createTender,
        updateTender,
        destroyTender,
        getTendersUser,
        getTender2,
        markFilled,
        getTendersFront,
    };
}
