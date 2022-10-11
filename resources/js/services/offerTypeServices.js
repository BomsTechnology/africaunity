import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useOfferTypes() {
    const offerTypes = ref([]);
    const offerType = ref([]);
    const errorsOT = ref("");
    const loading = ref(0);

    const getOfferTypes = async () => {
        errorsOT.value = "";
        loading.value = true;
        let response = await axios.get("/api/offerTypes", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        offerTypes.value = response.data.data;

        loading.value = false;
    };

    const getOfferType = async (id) => {
        errorsOT.value = "";
        loading.value = true;
        let response = await axios.get("/api/offerTypes/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        offerType.value = response.data.data;
    };

    const createOfferType = async (data) => {
        errorsOT.value = "";
        try {
            loading.value = true;
            await axios.post("/api/offerTypes", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errorsOT)
                    errorsOT.value += e.response.data.errorsOT[key][0] + "\n";
            }
        }
    };

    const updateOfferType = async (data) => {
        errorsOT.value = "";
        try {
            loading.value = true;
            await axios.put("/api/offerTypes/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errorsOT)
                    errorsOT.value += e.response.data.errorsOT[key][0] + "\t\n";
            }
        }
    };

    const destroyOfferType = async (id) => {
        errorsOT.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/offerTypes/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsOT.value = "Impossible de supprimer ce offerType";
        }
    };

    return {
        offerTypes,
        offerType,
        errorsOT,
        loading,
        getOfferTypes,
        getOfferType,
        createOfferType,
        updateOfferType,
        destroyOfferType,
    };
}
