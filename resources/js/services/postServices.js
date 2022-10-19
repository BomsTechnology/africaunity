import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function usePosts() {
    const posts = ref([]);
    const postCaroussel = ref([]);
    const post = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const articles = ref([]);
    const propau = ref([]);
    const isAll = ref(false);
    const page = ref(1);
    const getPostsAll = async (type) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/posts-all/" + type, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            posts.value = response.data.data;
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

    const getPostsUser = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/posts-user/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            posts.value = response.data.data;

            articles.value = posts.value.filter((post) => {
                return post.type == "article";
            });

            propau.value = posts.value.filter((post) => {
                return post.type == "propau";
            });
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

    const getPosts = async (type, lang) => {
        errors.value = "";
        loading.value = true;
        try {
            let response = await axios.get(
                "/api/posts-type/" + type + "/" + lang + "?page=" + page.value,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            if (page.value == 1) {
                posts.value = response.data.data;
            } else {
                posts.value = posts.value.concat(response.data.data);
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

    const getPostCarousssel = async (lang) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/posts-caroussel/" + lang, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            postCaroussel.value = response.data.data;
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

    const getPost = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/posts/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            post.value = response.data.data;
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

    const getPost2 = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.get("/api/posts2/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            post.value = response.data.data;
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

    const createPost = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/posts", data, {
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

    const filterPost = async (data) => {
        errors.value = "";
        try {
            loading.value = 3;
            let response = await axios.post("/api/posts-filter", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            posts.value = response.data.data;
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

    const updatePost = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/posts/" + post.value.id, data, {
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

    const destroyPost = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/posts/" + `${JSON.stringify(data)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce post";
            } else {
                errors.value = e.response.data.message;
            }
        }
    };

    return {
        isAll,
        page,
        filterPost,
        posts,
        post,
        errors,
        loading,
        getPosts,
        getPost,
        createPost,
        updatePost,
        destroyPost,
        getPostCarousssel,
        postCaroussel,
        getPost2,
        getPostsAll,
        getPostsUser,
        articles,
        propau,
    };
}
