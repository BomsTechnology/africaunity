import axios from "axios";
import { ref } from "vue";
import "../app.mjs";
function useSizeCompanies() {
  const sizeCompanies = ref([]);
  const sizeCompany = ref([]);
  const errorsSC = ref("");
  const loading = ref(0);
  const getSizeCompanies = async () => {
    errorsSC.value = "";
    loading.value = true;
    let response = await axios.get("/api/sizeCompanies", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    sizeCompanies.value = response.data.data;
    loading.value = false;
  };
  const getSizeCompany = async (id) => {
    errorsSC.value = "";
    loading.value = true;
    let response = await axios.get("/api/sizeCompanies/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    loading.value = 0;
    sizeCompany.value = response.data.data;
  };
  const createSizeCompany = async (data) => {
    errorsSC.value = "";
    try {
      loading.value = true;
      await axios.post("/api/sizeCompanies", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      if (e.response.status == 422) {
        loading.value = 0;
        for (const key in e.response.data.errorsSC)
          errorsSC.value += e.response.data.errorsSC[key][0] + "\n";
      }
    }
  };
  const updateSizeCompany = async (id, data) => {
    errorsSC.value = "";
    try {
      loading.value = true;
      await axios.put("/api/sizeCompanies/" + id, data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errorsSC)
          errorsSC.value += e.response.data.errorsSC[key][0] + "	\n";
      }
    }
  };
  const destroySizeCompany = async (id) => {
    errorsSC.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/sizeCompanies/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == "500") {
        errorsSC.value = "Impossible de supprimer ce pays";
      }
    }
  };
  return {
    sizeCompanies,
    sizeCompany,
    errorsSC,
    loading,
    getSizeCompanies,
    getSizeCompany,
    createSizeCompany,
    updateSizeCompany,
    destroySizeCompany
  };
}
function useWorkDepartments() {
  const workDepartments = ref([]);
  const workDepartment = ref([]);
  const errorsWD = ref("");
  const loading = ref(0);
  const getWorkDepartments = async () => {
    errorsWD.value = "";
    loading.value = true;
    let response = await axios.get("/api/workDepartments", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    workDepartments.value = response.data.data;
    loading.value = false;
  };
  const getWorkDepartment = async (id) => {
    errorsWD.value = "";
    loading.value = true;
    let response = await axios.get("/api/workDepartments/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
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
          Authorization: `Bearer ${localStorage.token}`
        }
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
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errorsWD)
          errorsWD.value += e.response.data.errorsWD[key][0] + "	\n";
      }
    }
  };
  const destroyWorkDepartment = async (id) => {
    errorsWD.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/workDepartments/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
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
    destroyWorkDepartment
  };
}
export {
  useWorkDepartments as a,
  useSizeCompanies as u
};
