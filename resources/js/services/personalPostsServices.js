import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function usePersonalPosts() {
    const personalPosts = ref([]);
    const personalPost = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const isAll = ref(false);
    const page = ref(1);
    const getPersonalPostsAll = async (type) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/personalPosts-all/", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            personalPosts.value = response.data.data;
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

    const getPersonalPostsLang = async (lang) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/personalPosts-lang/" + lang, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            personalPosts.value = response.data.data;

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

    const getPersonalPostsUser = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/personalPosts-user/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            personalPosts.value = response.data.data;

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

    const getPersonalPosts = async () => {
        errors.value = "";
        loading.value = true;
        try {
            let response = await axios.get(
                "/api/personalPosts?page=" + page.value,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            if (page.value == 1) {
                personalPosts.value = response.data.data;
            } else {
                personalPosts.value = personalPosts.value.concat(
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
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    const getPersonalPost = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/personalPosts/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            personalPost.value = response.data.data;
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

    const createPersonalPost = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/personalPosts", data, {
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

    const filterPersonalPost = async (data) => {
        errors.value = "";
        try {
            loading.value = 3;
            let response = await axios.post("/api/personalPosts-filter", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            personalPosts.value = response.data.data;
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

    const updatePersonalPost = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post(
                "/api/personalPosts/" + personalPost.value.id,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
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

    const destroyPersonalPost = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/personalPosts/" + `${JSON.stringify(data)}`,
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
                errors.value = "Impossible de supprimer ce personalPost";
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    return {
        isAll,
        page,
        filterPersonalPost,
        personalPosts,
        personalPost,
        errors,
        loading,
        getPersonalPostsLang,
        getPersonalPosts,
        getPersonalPost,
        createPersonalPost,
        updatePersonalPost,
        destroyPersonalPost,
        getPersonalPostsAll,
        getPersonalPostsUser,
    };
}
