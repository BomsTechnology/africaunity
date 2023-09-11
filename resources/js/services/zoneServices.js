import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export default function useZones() {
    const router = useRouter();
    const zones = ref([]);
    const zone = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const { locale } = useI18n();

    const getZones = async () => {
        errors.value = "";
        loading.value = true;
        let response = await axios.get(`/api/zones/language/${locale.value}`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        zones.value = response.data.data;

        loading.value = false;
    };

    const getZone = async (id) => {
        errors.value = "";
        loading.value = true;
        try {
            let response = await axios.get("/api/zones/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 0;
            zone.value = response.data.data;
        } catch (e) {
            return false;
        }
    };

    const createZone = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.post("/api/zones", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.zone.index" });
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateZone = async (id) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.put("/api/zones/" + id, zone.value, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            router.push({ name: "admin.zone.index" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyZone = async (data) => {
        errors.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/zones/" + `${JSON.stringify(data)}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer cette zone";
            }
        }
    };

    return {
        zones,
        zone,
        errors,
        loading,
        getZones,
        getZone,
        createZone,
        updateZone,
        destroyZone,
    };
}
