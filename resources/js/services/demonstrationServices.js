import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useDemonstrations() {
    const demonstrations = ref([]);
    const demonstration = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getDemonstrationsUser = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/demonstrations-user/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
           
            demonstrations.value = response.data.data;

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
            } else {
                errors.value = e.response.data.message;
            }
        }
    };


    const markedDemonstration = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/demonstrations-mark/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
           
            demonstrations.value = response.data.data;

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
            } else {
                errors.value = e.response.data.message;
            }
        }
    };


    const getDemonstrations = async () => {
        errors.value = "";
        loading.value = true;
        try {
            let response = await axios.get(
                "/api/demonstrations/" ,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
                demonstrations.value = response.data.data;

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
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    const getDemonstration = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/demonstrations/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            demonstration.value = response.data.data;
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
            } else {
                errors.value = e.response.data.message;
            }
        }
    };  

    const createDemonstration = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/demonstrations", data, {
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
                    errors.value += e.response.data.errors[key][0] + "\n";
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    const filterDemonstration = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.post("/api/demonstrations-filter", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            demonstrations.value = response.data.data;
            loading.value = 0;
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
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    const updateDemonstration = async (data, id) => {
        errors.value = "";
        try {
            loading.value = true;
       
            await axios.post("/api/demonstrations/" + demonstration.value.id, data, {
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
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    const destroyDemonstration = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/demonstrations/" + `${JSON.stringify(data)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce demonstration";
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    return {
        filterDemonstration,
        demonstrations,
        demonstration,
        errors,
        loading,
        markedDemonstration,
        getDemonstrations,
        getDemonstration,
        createDemonstration,
        updateDemonstration,
        destroyDemonstration,
        getDemonstrationsUser,
    };
}
