import { reactive, onMounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as useAuth } from "./authServices.2a79b253.mjs";
import axios from "axios";
import { useRouter } from "vue-router";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const user = reactive({
      email: "",
      password: ""
    });
    const { loginAdmin, errors, loading } = useAuth();
    const verifAdmin = async () => {
      if (localStorage.token && localStorage.token != "") {
        var u = JSON.parse(localStorage.user);
        try {
          let response = await axios.post("/api/verif-admin", { id: u.id });
          router.push({ name: "admin.dash" });
        } catch (e) {
          errors.value = "Your not a admin";
        }
      }
    };
    onMounted(async () => {
      verifAdmin();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen items-center justify-center" }, _attrs))}><div class="w-full max-w-sm rounded-md bg-white p-6 shadow-md"><div class="flex items-center justify-center space-x-2"><h1 class="text-center text-3xl font-semibold text-primary-blue"> AfricaUnity </h1></div><h1 class="text-md text-center font-light text-[#242A56]"> login to acces the admin panel </h1>`);
      if (unref(errors) != "") {
        _push(ssrRenderComponent(Error, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="mt-6"><div><label for="username" class="block text-sm text-gray-800">Username or E-mail</label><input type="text"${ssrRenderAttr("value", user.email)} class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="mt-4"><div class="flex items-center justify-between"><label for="password" class="block text-sm text-gray-800">Password</label></div><input type="password"${ssrRenderAttr("value", user.password)} class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="mt-6">`);
      if (unref(loading) == 0) {
        _push(`<button type="submit" class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"> Login </button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<button disabled type="submit" class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Login... </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="font-mone py-2 text-center text-sm italic text-primary-blue underline"> Powered By GNO Solutions </p></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
