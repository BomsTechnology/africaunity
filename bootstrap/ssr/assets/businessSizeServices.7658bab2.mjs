import axios from "axios";
import { ref } from "vue";
import "../app.mjs";
function useBusinessTypes() {
  const businessTypes = ref([]);
  const businessType = ref([]);
  const errorsBT = ref("");
  const loading = ref(0);
  const getBusinessTypes = async () => {
    errorsBT.value = "";
    loading.value = true;
    let response = await axios.get("/api/businessTypes", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    businessTypes.value = response.data.data;
    loading.value = false;
  };
  const getBusinessType = async (id) => {
    errorsBT.value = "";
    loading.value = true;
    let response = await axios.get("/api/businessTypes/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    loading.value = 0;
    businessType.value = response.data.data;
  };
  const createBusinessType = async (data) => {
    errorsBT.value = "";
    try {
      loading.value = true;
      await axios.post("/api/businessTypes", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = 0;
    } catch (e) {
      if (e.response.status == 422) {
        loading.value = 0;
        for (const key in e.response.data.errors)
          errorsBT.value += e.response.data.errors[key][0] + "\n";
      }
    }
  };
  const updateBusinessType = async (id, data) => {
    errorsBT.value = "";
    try {
      loading.value = true;
      await axios.put("/api/businessTypes/" + id, data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errorsBT.value += e.response.data.errors[key][0] + "	\n";
      }
    }
  };
  const destroyBusinessType = async (id) => {
    errorsBT.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/businessTypes/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
      return true;
    } catch (e) {
      loading.value = 0;
      errorsBT.value = "Impossible de supprimer ce businessType";
    }
  };
  return {
    businessTypes,
    businessType,
    errorsBT,
    loading,
    getBusinessTypes,
    getBusinessType,
    createBusinessType,
    updateBusinessType,
    destroyBusinessType
  };
}
function useBusinessSizes() {
  const businessSizes = ref([]);
  const businessSize = ref([]);
  const errorsBS = ref("");
  const loading = ref(0);
  const getBusinessSizes = async () => {
    errorsBS.value = "";
    loading.value = true;
    let response = await axios.get("/api/businessSizes", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    businessSizes.value = response.data.data;
    loading.value = false;
  };
  const getBusinessSize = async (id) => {
    errorsBS.value = "";
    loading.value = true;
    let response = await axios.get("/api/businessSizes/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    loading.value = 0;
    businessSize.value = response.data.data;
  };
  const createBusinessSize = async (data) => {
    errorsBS.value = "";
    try {
      loading.value = true;
      await axios.post("/api/businessSizes", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = 0;
    } catch (e) {
      if (e.response.status == 422) {
        loading.value = 0;
        for (const key in e.response.data.errors)
          errorsBS.value += e.response.data.errors[key][0] + "\n";
      }
    }
  };
  const updateBusinessSize = async (id, data) => {
    errorsBS.value = "";
    try {
      loading.value = true;
      await axios.put("/api/businessSizes/" + id, data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errorsBS.value += e.response.data.errors[key][0] + "	\n";
      }
    }
  };
  const destroyBusinessSize = async (id) => {
    errorsBS.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/businessSizes/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
      return true;
    } catch (e) {
      loading.value = 0;
      errorsBS.value = "Impossible de supprimer ce businessSize";
    }
  };
  return {
    businessSizes,
    businessSize,
    errorsBS,
    loading,
    getBusinessSizes,
    getBusinessSize,
    createBusinessSize,
    updateBusinessSize,
    destroyBusinessSize
  };
}
export {
  useBusinessTypes as a,
  useBusinessSizes as u
};
