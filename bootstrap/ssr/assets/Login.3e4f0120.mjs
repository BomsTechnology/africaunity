import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, unref, ref, reactive, onMounted } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as useAuth } from "./authServices.2a79b253.mjs";
import { EmojiHappyIcon, MailIcon, LockClosedIcon } from "@heroicons/vue/solid";
import { useRouter } from "vue-router";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
const _sfc_main$2 = {
  __name: "NotLogin",
  __ssrInlineRender: true,
  props: {
    open: Boolean,
    toogleModal: Function
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fixed inset-0 z-40 overflow-y-auto",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true",
        style: __props.open ? null : { display: "none" }
      }, _attrs))}><div class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div><span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">\u200B</span><div class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:flex-col sm:items-center sm:justify-center"><div class="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"><svg class="h-8 w-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"><div class="py-4"><p class="text-md text-center text-gray-500">${ssrInterpolate(_ctx.$t("modal-not-login"))}</p></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-center sm:px-6">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "pack" },
        class: "inline-flex w-full justify-center rounded-md border border-transparent bg-primary-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("register"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("register")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">${ssrInterpolate(_ctx.$t("login"))}</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/NotLogin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "VerifyOK",
  __ssrInlineRender: true,
  props: {
    open: Boolean,
    toogleModal: Function
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fixed inset-0 z-10 overflow-y-auto",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true",
        style: __props.open ? null : { display: "none" }
      }, _attrs))}><div class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div><span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">\u200B</span><div class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><div class="sm:flex sm:flex-col sm:items-center sm:justify-center"><div class="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-20 sm:w-20">`);
      _push(ssrRenderComponent(unref(EmojiHappyIcon), { class: "h-16 w-16 text-green-600" }, null, _parent));
      _push(`</div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"><div class="py-4"><p class="text-md text-center font-semibold text-gray-500">${ssrInterpolate(_ctx.$t("modal-verif-ok"))}</p></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:items-center sm:justify-center sm:px-6"><button type="button" class="mt-3 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> OK </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/VerifyOK.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    redirect: {
      required: false,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const cuser = localStorage.user ? JSON.parse(localStorage.user) : "";
    const openNotLogin = ref(false);
    const openVerifyOK = ref(false);
    const user = reactive({
      email: "",
      password: ""
    });
    const toogleModal = () => {
      openNotLogin.value = false;
      openVerifyOK.value = false;
    };
    const { loginUser, errors, loading } = useAuth();
    onMounted(async () => {
      if (props.redirect == "not-login") {
        openNotLogin.value = true;
      } else if (props.redirect == "verif-ok") {
        openVerifyOK.value = true;
      }
      if (localStorage.token) {
        router.push({
          name: "compte",
          params: { name: cuser.firstname, id: cuser.id }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        open: openNotLogin.value,
        toogleModal
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        open: openVerifyOK.value,
        toogleModal
      }, null, _parent));
      _push(`<div class="mx-auto w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"><div class="space-y-6 text-center lg:w-[60%] lg:text-left"><h1 class="text-4xl font-bold text-primary-blue lg:text-5xl"><span>${ssrInterpolate(_ctx.$t("login-welcome-msg"))} <svg xmlns="http://www.w3.org/2000/svg" class="inline h-10 w-10" viewBox="0 0 36 36"><circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle><path fill="#664500" d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379.055-.217-.043-.442-.237-.554-.195-.111-.439-.078-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855C11.256 23.05 11.128 23 11 23c-.084 0-.169.021-.246.064-.196.112-.294.339-.239.557z"></path><ellipse fill="#664500" cx="12" cy="13.5" rx="2.5" ry="3.5"></ellipse><ellipse fill="#664500" cx="24" cy="13.5" rx="2.5" ry="3.5"></ellipse></svg></span></h1><p>${ssrInterpolate(_ctx.$t("login-desc"))}</p></div><div class="p-6 lg:w-[40%]"><div class="border-t-8 border-primary-blue shadow"><div class="px-6 py-6"><h1 class="text-center text-3xl font-bold text-[#242A56]">${ssrInterpolate(_ctx.$t("login"))}</h1>`);
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
      _push(`<form class="py-7"><div class="relative"><span>`);
      _push(ssrRenderComponent(unref(MailIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
      _push(`</span><input type="email" required${ssrRenderAttr("value", user.email)}${ssrRenderAttr("placeholder", _ctx.$t("adresse") + " " + _ctx.$t("email"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="relative"><span>`);
      _push(ssrRenderComponent(unref(LockClosedIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
      _push(`</span><input type="password" required${ssrRenderAttr("value", user.password)}${ssrRenderAttr("placeholder", _ctx.$t("password"))} class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div>`);
      if (unref(loading) == 0) {
        _push(`<button type="submit" class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white">${ssrInterpolate(_ctx.$t("login"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<button disabled type="submit" class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("login"))}... </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-6 text-center">`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "text-gray-400 hover:underline",
        to: { name: "forgot.password" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("password-forgot"))} ? `);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("password-forgot")) + " ? ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div><div class="md:text-md h-16 bg-primary-blue p-4 text-center text-sm text-white">${ssrInterpolate(_ctx.$t("no-signup"))} `);
      _push(ssrRenderComponent(_component_router_link, {
        class: "text-[#242A56] hover:underline",
        to: { name: "pack" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("register"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("register")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
