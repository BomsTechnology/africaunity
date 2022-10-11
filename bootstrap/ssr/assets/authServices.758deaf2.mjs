import axios from "axios";
import { ref } from "vue";
import { r as router } from "../app.mjs";
function useAuth() {
  const user = ref([]);
  const errors = ref("");
  const loading = ref(0);
  const createUser = async (data) => {
    errors.value = "";
    try {
      loading.value = true;
      await axios.post("/api/register", data);
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      for (const key in e.response.data.errors)
        errors.value += e.response.data.errors[key][0] + "\n";
    }
  };
  const loginUser = async (data) => {
    errors.value = "";
    try {
      loading.value = true;
      let response = await axios.post("/api/login", data);
      user.value = response.data.data;
      localStorage.user = JSON.stringify(response.data.data.user);
      localStorage.token = response.data.data.token;
      loading.value = false;
    } catch (e) {
      loading.value = 0;
      errors.value = e.response.data.message;
    }
  };
  const loginAdmin = async (data) => {
    errors.value = "";
    try {
      loading.value = true;
      let response = await axios.post("/api/login-admin", data);
      localStorage.user = JSON.stringify(response.data.data.user);
      localStorage.token = response.data.data.token;
      loading.value = false;
      router.push({ name: "admin.dash" });
    } catch (e) {
      loading.value = 0;
      errors.value = "invalid email or password";
    }
  };
  const verifAdmin = async (data) => {
    errors.value = "";
    try {
      loading.value = true;
      let response = await axios.post("/api/verif-admin", data);
      user.value = response.data.data;
      loading.value = false;
      return true;
    } catch (e) {
      loading.value = 0;
      errors.value = "Your not a admin";
      router.push({ name: "admin" });
    }
  };
  return {
    createUser,
    errors,
    loading,
    user,
    loginUser,
    loginAdmin,
    verifAdmin
  };
}
export {
  useAuth as u
};
