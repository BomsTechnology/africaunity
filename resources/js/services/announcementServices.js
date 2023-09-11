import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useAnnouncements() {
    const announcements = ref([]);
    const announcement = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const isAll = ref(false);
    const page = ref(1);

    const getFormData = (object) =>
        Object.entries(object).reduce((fd, [key, val]) => {
            if (Array.isArray(val)) {
                val.forEach((v) => fd.append(`${key}[]`, v.file));
            } else {
                fd.append(key, val);
            }
            return fd;
        }, new FormData());

    const getAnnouncements = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get(
            "/api/announcements?page=" + page.value,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );
        if (page.value == 1) {
            announcements.value = response.data.data;
        } else {
            announcements.value = announcements.value.concat(
                response.data.data
            );
        }
        loading.value = false;
        if (response.data.data.length == 0) {
            isAll.value = true;
        }
    };

    const getAnnouncementsUser = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/announcements-user/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        announcements.value = response.data.data;
        loading.value = false;
    };

    const getAnnouncementsUniversity = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/announcements-university/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        announcements.value = response.data.data;

        loading.value = false;
    };

    const getAnnouncement = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/announcements/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        announcement.value = response.data.data;
    };

    const getAnnouncement2 = async (id) => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get("/api/announcements2/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        announcement.value = response.data.data;
    };

    const filterAnnouncements = async (data) => {
        errors.value = "";
        try {
            loading.value = 3;
            let response = await axios.post("/api/announcements-filter", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            announcements.value = response.data.data;
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

    const createAnnouncement = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            let response = await axios.post(
                "/api/announcements",
                getFormData(data),
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateAnnouncement = async (data, id) => {
        errors.value = "";
        try {
            loading.value = true;
            let oldFiles = data.image.filter((f) => typeof f == "string");
            let newFiles = data.image.filter((f) => typeof f != "string");
            data.image = newFiles;

            let form = getFormData(data);
            form.append("old_files", oldFiles);
            form.append("_method", "PUT");

            let response = await axios.post(
                "/api/announcements/" + announcement.value.id,
                form,
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
            }
        }
    };

    const destroyAnnouncement = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete(
                "/api/announcements/" + `${JSON.stringify(data)}`,
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
                errors.value = "Impossible de supprimer ce announcement";
            }
        }
    };

    return {
        filterAnnouncements,
        isAll,
        page,
        announcements,
        announcement,
        errors,
        loading,
        getAnnouncements,
        getAnnouncement,
        createAnnouncement,
        updateAnnouncement,
        destroyAnnouncement,
        getAnnouncementsUser,
        getAnnouncementsUniversity,
        getAnnouncement2,
    };
}
