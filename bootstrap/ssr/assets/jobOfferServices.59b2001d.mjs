import axios from "axios";
import { ref } from "vue";
import { r as router } from "../app.mjs";
function useJobOffers() {
  const jobOffers = ref([]);
  const jobOffer = ref([]);
  const errors = ref("");
  const loading = ref(0);
  const isAll = ref(false);
  const page = ref(1);
  const getJobOffers = async () => {
    errors.value = "";
    try {
      loading.value = true;
      let response = await axios.get("/api/jobOffers/", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      jobOffers.value = response.data.data;
      loading.value = false;
    } catch (e) {
      if (e.response.status == 401) {
        router.push({
          name: "login",
          params: {
            redirect: "not-login"
          }
        });
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
      }
    }
  };
  const getJobOffersFront = async () => {
    errors.value = "";
    try {
      loading.value = true;
      let response = await axios.get(
        "/api/jobOffers-front?page=" + page.value,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        }
      );
      if (page.value == 1) {
        jobOffers.value = response.data.data;
      } else {
        jobOffers.value = jobOffers.value.concat(response.data.data);
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
            redirect: "not-login"
          }
        });
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
      }
    }
  };
  const filterJobs = async (data) => {
    errors.value = "";
    try {
      loading.value = 3;
      let response = await axios.post("/api/jobOffers-filter", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      jobOffers.value = response.data.data;
      loading.value = false;
    } catch (e) {
      if (e.response.status == 401) {
        router.push({
          name: "login",
          params: {
            redirect: "not-login"
          }
        });
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
      }
    }
  };
  const getJobOffersUser = async (id) => {
    errors.value = "";
    try {
      loading.value = true;
      let response = await axios.get("/api/jobOffers-user/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      jobOffers.value = response.data.data;
      loading.value = false;
    } catch (e) {
      if (e.response.status == 401) {
        router.push({
          name: "login",
          params: {
            redirect: "not-login"
          }
        });
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
      }
    }
  };
  const getJobOffer = async (id) => {
    errors.value = "";
    try {
      loading.value = true;
      let response = await axios.get("/api/jobOffers/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = 0;
      jobOffer.value = response.data.data;
    } catch (e) {
      if (e.response.status == 401) {
        router.push({
          name: "login",
          params: {
            redirect: "not-login"
          }
        });
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
      }
    }
  };
  const getJobOffer2 = async (id) => {
    errors.value = "";
    loading.value = true;
    let response = await axios.get("/api/jobOffers2/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    loading.value = 0;
    jobOffer.value = response.data.data;
  };
  const createJobOffer = async (data) => {
    errors.value = "";
    try {
      loading.value = true;
      await axios.post("/api/jobOffers", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "multipart/form-data"
        }
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
  const updateJobOffer = async (data) => {
    errors.value = "";
    try {
      loading.value = true;
      await axios.post("/api/jobOffers/" + jobOffer.value.id, data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errors.value += e.response.data.errors[key][0] + "	\n";
      }
    }
  };
  const destroyJobOffer = async (id) => {
    errors.value = "";
    try {
      loading.value = true;
      await axios.delete("/api/jobOffers/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == "500") {
        errors.value = "Impossible de supprimer ce jobOffer";
      }
    }
  };
  const markFilled = async (id) => {
    errors.value = "";
    try {
      loading.value = true;
      await axios.get("/api/jobOffers-mark-filled/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      if (e.response.status == "500") {
        errors.value = "Impossible de supprimer ce jobOffer";
      }
    }
  };
  return {
    isAll,
    page,
    jobOffers,
    jobOffer,
    errors,
    loading,
    filterJobs,
    getJobOffers,
    getJobOffer,
    createJobOffer,
    updateJobOffer,
    destroyJobOffer,
    getJobOffersUser,
    getJobOffer2,
    markFilled,
    getJobOffersFront
  };
}
export {
  useJobOffers as u
};
