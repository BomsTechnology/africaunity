import axios from "axios";
import { ref } from "vue";
import "../app.mjs";
function useLevelStudies() {
  const levelStudies = ref([]);
  const levelStudy = ref([]);
  const errorsLS = ref("");
  const loading = ref(0);
  const getLevelStudies = async () => {
    errorsLS.value = "";
    loading.value = true;
    let response = await axios.get("/api/levelStudies", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    levelStudies.value = response.data.data;
    loading.value = false;
  };
  const getLevelStudy = async (id2) => {
    errorsLS.value = "";
    loading.value = true;
    let response = await axios.get("/api/levelStudies/" + id2, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    loading.value = 0;
    levelStudy.value = response.data.data;
  };
  const createLevelStudy = async (data) => {
    errorsLS.value = "";
    try {
      loading.value = true;
      await axios.post("/api/levelStudies", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      if (e.response.status == 422) {
        loading.value = 0;
        for (const key in e.response.data.errorsLS)
          errorsLS.value += e.response.data.errorsLS[key][0] + "\n";
      }
    }
  };
  const updateLevelStudy = async (id2, data) => {
    errorsLS.value = "";
    try {
      loading.value = true;
      await axios.put("/api/levelStudies/" + id2, data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errorsLS)
          errorsLS.value += e.response.data.errorsLS[key][0] + "	\n";
      }
    }
  };
  const destroyLevelStudy = async (id2) => {
    errorsLS.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/levelStudies/" + id2, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == "500") {
        errorsLS.value = "Impossible de supprimer ce pays";
      }
    }
  };
  return {
    levelStudies,
    levelStudy,
    errorsLS,
    loading,
    getLevelStudies,
    getLevelStudy,
    createLevelStudy,
    updateLevelStudy,
    destroyLevelStudy
  };
}
function useOfferTypes() {
  const offerTypes = ref([]);
  const offerType = ref([]);
  const errorsOT = ref("");
  const loading = ref(0);
  const getOfferTypes = async () => {
    errorsOT.value = "";
    loading.value = true;
    let response = await axios.get("/api/offerTypes", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    offerTypes.value = response.data.data;
    loading.value = false;
  };
  const getOfferType = async (id2) => {
    errorsOT.value = "";
    loading.value = true;
    let response = await axios.get("/api/offerTypes/" + id2, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
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
          Authorization: `Bearer ${localStorage.token}`
        }
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
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errorsOT)
          errorsOT.value += e.response.data.errorsOT[key][0] + "	\n";
      }
    }
  };
  const destroyOfferType = async (id2) => {
    errorsOT.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/offerTypes/" + id2, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
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
    destroyOfferType
  };
}
function useWorkModes() {
  const workModes = ref([]);
  const workMode = ref([]);
  const errorsWM = ref("");
  const loading = ref(0);
  const getWorkModes = async () => {
    errorsWM.value = "";
    loading.value = true;
    let response = await axios.get("/api/workModes", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    workModes.value = response.data.data;
    loading.value = false;
  };
  const getWorkMode = async (id2) => {
    errorsWM.value = "";
    loading.value = true;
    let response = await axios.get("/api/workModes/" + id2, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    loading.value = 0;
    workMode.value = response.data.data;
  };
  const createWorkMode = async (data) => {
    errorsWM.value = "";
    try {
      loading.value = true;
      await axios.post("/api/workModes", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      if (e.response.status == 422) {
        loading.value = 0;
        for (const key in e.response.data.errors)
          errorsWM.value += e.response.data.errors[key][0] + "\n";
      }
    }
  };
  const updateWorkMode = async (id2, data) => {
    errorsWM.value = "";
    try {
      loading.value = true;
      await axios.put("/api/workModes/" + id2, data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errorsWM.value += e.response.data.errors[key][0] + "	\n";
      }
    }
  };
  const destroyWorkMode = async (id2) => {
    errorsWM.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/workModes/" + id2, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
      return true;
    } catch (e) {
      loading.value = 0;
      errorsWM.value = "Impossible de supprimer ce workMode";
    }
  };
  return {
    workModes,
    workMode,
    errorsWM,
    loading,
    getWorkModes,
    getWorkMode,
    createWorkMode,
    updateWorkMode,
    destroyWorkMode
  };
}
function useYearExperiences() {
  const yearExperiences = ref([]);
  const yearExperience = ref([]);
  const errorsYE = ref("");
  const loading = ref(0);
  const getYearExperiences = async () => {
    errorsYE.value = "";
    loading.value = true;
    let response = await axios.get("/api/yearExperiences", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    yearExperiences.value = response.data.data;
    loading.value = false;
  };
  const getYearExperience = async (id2) => {
    errorsYE.value = "";
    loading.value = true;
    let response = await axios.get("/api/yearExperiences/" + id2, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    loading.value = 0;
    yearExperience.value = response.data.data;
  };
  const createYearExperience = async (data) => {
    errorsYE.value = "";
    try {
      loading.value = true;
      await axios.post("/api/yearExperiences", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      if (e.response.status == 422) {
        loading.value = 0;
        for (const key in e.response.data.errorsYE)
          errorsYE.value += e.response.data.errorsYE[key][0] + "\n";
      }
    }
  };
  const updateYearExperience = async (id2, data) => {
    errorsYE.value = "";
    try {
      loading.value = true;
      await axios.put("/api/yearExperiences/" + id2, data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errorsYE)
          errorsYE.value += e.response.data.errorsYE[key][0] + "	\n";
      }
    }
  };
  const destroyYearExperience = async (id2) => {
    errorsYE.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/yearExperiences/" + id2, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
      return true;
    } catch (e) {
      loading.value = 0;
      errorsYE.value = "Impossible de supprimer ce yearExperience";
    }
  };
  return {
    yearExperiences,
    yearExperience,
    errorsYE,
    loading,
    getYearExperiences,
    getYearExperience,
    createYearExperience,
    updateYearExperience,
    destroyYearExperience
  };
}
export {
  useOfferTypes as a,
  useWorkModes as b,
  useYearExperiences as c,
  useLevelStudies as u
};
