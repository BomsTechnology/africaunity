import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useCategoryAnnouncements() {
    const router = useRouter();
    const categoryAnnouncements = ref([]);
    const categoryAnnouncement = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getCategoryAnnouncements = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/categoryAnnouncements", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        categoryAnnouncements.value = response.data.data;

        loading.value = false;
    };

    const getCategoryAnnouncement = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/categoryAnnouncements/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        categoryAnnouncement.value = response.data.data;
    };

    const createCategoryAnnouncement = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/categoryAnnouncements", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.category.index" });
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateCategoryAnnouncement = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put(
                "/api/categoryAnnouncements/" + id,
                categoryAnnouncement.value,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
            loading.value = false;
            router.push({ name: "admin.category.index" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyCategoryAnnouncement = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/categoryAnnouncements/" + id, {
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
        categoryAnnouncements,
        categoryAnnouncement,
        errors,
        loading,
        getCategoryAnnouncements,
        getCategoryAnnouncement,
        createCategoryAnnouncement,
        updateCategoryAnnouncement,
        destroyCategoryAnnouncement,
    };
}
