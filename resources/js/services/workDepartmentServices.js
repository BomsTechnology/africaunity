import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";
export default function useWorkDepartments() {
    const workDepartments = ref([]);
    const workDepartment = ref([]);
    const errorsWD = ref("");
    const loading = ref(0);

    const getWorkDepartments = async () => {
        errorsWD.value = "";
        loading.value = true;
        let response = await axios.get("/api/workDepartments", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        workDepartments.value = response.data.data;

        loading.value = false;
    };

    const getWorkDepartment = async (id) => {
        errorsWD.value = "";
        loading.value = true;
        let response = await axios.get("/api/workDepartments/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        workDepartment.value = response.data.data;
    };

    const createWorkDepartment = async (data) => {
        errorsWD.value = "";
        try {
            loading.value = true;
            await axios.post("/api/workDepartments", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errorsWD)
                    errorsWD.value += e.response.data.errorsWD[key][0] + "\n";
            }
        }
    };

    const updateWorkDepartment = async (id, data) => {
        errorsWD.value = "";
        try {
            loading.value = true;
            await axios.put("/api/workDepartments/" + id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errorsWD)
                    errorsWD.value += e.response.data.errorsWD[key][0] + "\t\n";
            }
        }
    };

    const destroyWorkDepartment = async (id) => {
        errorsWD.value = "";
        try {
            loading.value = true;
            await axios.delete("/api/workDepartments/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = false;
            return true;
        } catch (e) {
            loading.value = 0;
            errorsWD.value = "Impossible de supprimer ce workDepartment";
        }
    };

    return {
        workDepartments,
        workDepartment,
        errorsWD,
        loading,
        getWorkDepartments,
        getWorkDepartment,
        createWorkDepartment,
        updateWorkDepartment,
        destroyWorkDepartment,
    };
}
