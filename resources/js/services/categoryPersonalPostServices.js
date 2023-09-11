import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useCategoryPersonalPosts() {
    const router = useRouter();
    const categoryPersonalPosts = ref([]);
    const categoryPersonalPost = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getCategoryPersonalPosts = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/categoryPersonalPosts", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        categoryPersonalPosts.value = response.data.data;

        loading.value = false;
    };

    const getCategoryPersonalPost = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/categoryPersonalPosts/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        categoryPersonalPost.value = response.data.data;
    };

    const createCategoryPersonalPost = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/categoryPersonalPosts", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
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

    const updateCategoryPersonalPost = async (data, id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put("/api/categoryPersonalPosts/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
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

    const destroyCategoryPersonalPost = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/categoryPersonalPosts/" + `${JSON.stringify(data)}`,
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
                errors.value = "Impossible de supprimer cette category";
            }
        }
    };

    return {
        categoryPersonalPosts,
        categoryPersonalPost,
        errors,
        loading,
        getCategoryPersonalPosts,
        getCategoryPersonalPost,
        createCategoryPersonalPost,
        updateCategoryPersonalPost,
        destroyCategoryPersonalPost,
    };
}
