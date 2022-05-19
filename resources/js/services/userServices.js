import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useUsers() {
    const users = ref([]);
    const user = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getUsers = async () => {
        try {
            errors.value = "";
            loading.value = 1;
            let response = await axios.get("/api/users", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            users.value = response.data.data;
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

    const getUsersType = async (type) => {
        try {
            errors.value = "";
            loading.value = 1;
            let response = await axios.get("/api/users-type/" + type, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            users.value = response.data.data;
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

    const filterUsers = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.post("/api/users-filter", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            users.value = response.data.data;
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

    const getUser = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.get("/api/users/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            user.value = response.data.data;
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

    const createUser = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/users", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateUser = async (id, data) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.post("/api/users/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            loading.value = 2;
            localStorage.user = JSON.stringify(response.data.data);
            location.reload();
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const updateUser2 = async () => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.put(
                "/api/users-update/" + user.value.id,
                user.value,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const updateStatusUser = async (id, data) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.put(
                "/api/users-change-status/" + id,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            loading.value = 2;
            localStorage.user = JSON.stringify(response.data.data);
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const deleteUserData = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.post("/api/users-delete-data", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            } else if (e.response.status == 401) {
                errors.value = e.response.data.message;
            }
        }
    };

    const destroyUserFront = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            let response = await axios.post("/api/users-delete-user", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            } else if (e.response.status == 401) {
                errors.value = e.response.data.message;
            }
        }
    };

    const updatePasswordUser = async (id, data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.put("/api/users-change-password/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            } else if (e.response.status == 401) {
                errors.value = e.response.data.message;
            }
        }
    };

    const destroyUser = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.delete("/api/users/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
            return true;
        } catch (e) {
            loading.value = 0;
            errors.value = "Impossible de supprimer ce user";
        }
    };

    return {
        users,
        user,
        errors,
        loading,
        deleteUserData,
        getUsers,
        getUser,
        createUser,
        updateUser,
        destroyUser,
        updatePasswordUser,
        updateStatusUser,
        destroyUserFront,
        getUsersType,
        filterUsers,
        updateUser2,
    };
}
