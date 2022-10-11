import { onMounted, ref, reactive, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { UserIcon, MailIcon, LockClosedIcon } from "@heroicons/vue/solid";
import { r as router } from "../app.mjs";
import { u as useAuth } from "./authServices.758deaf2.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "lodash";
import "axios";
import "vue-router";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    type: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const cuser = localStorage.user ? JSON.parse(localStorage.user) : "";
    onMounted(async () => {
      if (!types.includes(props.type)) {
        router.push({ name: "pack" });
      }
      if (localStorage.token) {
        router.push({
          name: "compte",
          params: { name: cuser.firstname, id: cuser.id }
        });
      }
    });
    const cpolitic = ref(false);
    const types = ["particular", "ip", "business1", "business2"];
    const user = reactive({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      type: props.type
    });
    const { createUser, errors, loading } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]" }, _attrs))}><div class="space-y-6 text-center lg:w-[60%] lg:text-left"><h1 class="text-4xl font-bold text-primary-blue lg:text-5xl">${ssrInterpolate(_ctx.$t("create-account"))} `);
      if (__props.type == "particular") {
        _push(`<span>PP (${ssrInterpolate(_ctx.$t("pack"))} ${ssrInterpolate(_ctx.$t("particular"))})</span>`);
      } else if (__props.type == "business1") {
        _push(`<span>PB (${ssrInterpolate(_ctx.$t("pack"))} PRO)</span>`);
      } else if (__props.type == "business2") {
        _push(`<span>PB (${ssrInterpolate(_ctx.$t("pack"))} ${ssrInterpolate(_ctx.$t("business"))})</span>`);
      } else {
        _push(`<span>IP (${ssrInterpolate(_ctx.$t("pack"))} ${ssrInterpolate(_ctx.$t("politic"))})</span>`);
      }
      _push(`<svg xmlns="http://www.w3.org/2000/svg" class="inline h-10 w-10" viewBox="0 0 36 36"><circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle><path fill="#664500" d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379.055-.217-.043-.442-.237-.554-.195-.111-.439-.078-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855C11.256 23.05 11.128 23 11 23c-.084 0-.169.021-.246.064-.196.112-.294.339-.239.557z"></path><ellipse fill="#664500" cx="12" cy="13.5" rx="2.5" ry="3.5"></ellipse><ellipse fill="#664500" cx="24" cy="13.5" rx="2.5" ry="3.5"></ellipse></svg></h1><p>${ssrInterpolate(_ctx.$t("register-free-desc"))}</p><p>${ssrInterpolate(_ctx.$t("create-other-account"))} `);
      if (__props.type != "ip") {
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "register", params: { type: "ip" } },
          class: "text-primary-blue hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` IP (${ssrInterpolate(_ctx.$t("pack"))} ${ssrInterpolate(_ctx.$t("politic"))}) ? `);
            } else {
              return [
                createTextVNode(" IP (" + toDisplayString(_ctx.$t("pack")) + " " + toDisplayString(_ctx.$t("politic")) + ") ? ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.type != "business1") {
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "register", params: { type: "business1" } },
          class: "text-primary-blue hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` PB (${ssrInterpolate(_ctx.$t("pack"))} PRO) ? `);
            } else {
              return [
                createTextVNode(" PB (" + toDisplayString(_ctx.$t("pack")) + " PRO) ? ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.type != "particular") {
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "register", params: { type: "particular" } },
          class: "text-primary-blue hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` PP (${ssrInterpolate(_ctx.$t("pack"))} ${ssrInterpolate(_ctx.$t("particular"))}) ? `);
            } else {
              return [
                createTextVNode(" PP (" + toDisplayString(_ctx.$t("pack")) + " " + toDisplayString(_ctx.$t("particular")) + ") ? ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div class="p-6 lg:w-[40%]"><div class="border-t-8 border-primary-blue shadow"><div class="px-6 py-6"><h1 class="text-center text-3xl font-bold text-[#242A56]">${ssrInterpolate(_ctx.$t("register"))}</h1>`);
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
      if (unref(loading) == 2) {
        _push(`<div class="py-4"><p>${ssrInterpolate(_ctx.$t("msg-a-register"))}</p></div>`);
      } else {
        _push(`<form class="py-7">`);
        if (__props.type == "particular") {
          _push(`<span><div class="relative"><span>`);
          _push(ssrRenderComponent(unref(UserIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
          _push(`</span><input type="text" required${ssrRenderAttr("value", user.firstname)}${ssrRenderAttr("placeholder", _ctx.$t("firstname"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="relative"><span>`);
          _push(ssrRenderComponent(unref(UserIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
          _push(`</span><input type="text" required${ssrRenderAttr("value", user.lastname)}${ssrRenderAttr("placeholder", _ctx.$t("lastname"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></span>`);
        } else if (__props.type == "business1" || __props.type == "business2") {
          _push(`<span><div class="relative"><span>`);
          _push(ssrRenderComponent(unref(UserIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
          _push(`</span><input type="text" required${ssrRenderAttr("value", user.firstname)}${ssrRenderAttr("placeholder", _ctx.$t("social-reason"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></span>`);
        } else {
          _push(`<span><div class="relative"><span>`);
          _push(ssrRenderComponent(unref(UserIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
          _push(`</span><input type="text" required${ssrRenderAttr("value", user.firstname)}${ssrRenderAttr("placeholder", _ctx.$t("denomination"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></span>`);
        }
        _push(`<div class="relative"><span>`);
        _push(ssrRenderComponent(unref(MailIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
        _push(`</span><input type="email" required${ssrRenderAttr("value", user.email)}${ssrRenderAttr("placeholder", _ctx.$t("adresse") + " " + _ctx.$t("email"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="relative"><span>`);
        _push(ssrRenderComponent(unref(LockClosedIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
        _push(`</span><input type="password" required${ssrRenderAttr("value", user.password)}${ssrRenderAttr("placeholder", _ctx.$t("password"))} class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="relative"><span>`);
        _push(ssrRenderComponent(unref(LockClosedIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
        _push(`</span><input type="password" required${ssrRenderAttr("value", user.password_confirmation)}${ssrRenderAttr("placeholder", _ctx.$t("confirm-password"))} class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="mt-10"><h3 class="text-primary-blue hover:underline">${ssrInterpolate(_ctx.$t("show-confidentail-politic"))}</h3><p class="text-left text-gray-400"><input type="checkbox" required${ssrIncludeBooleanAttr(Array.isArray(cpolitic.value) ? ssrLooseContain(cpolitic.value, null) : cpolitic.value) ? " checked" : ""} class="form-checkbox mr-2 text-primary-blue focus:ring-0"> ${ssrInterpolate(_ctx.$t("confirm-confidentail-politic"))}</p></div><div>`);
        if (unref(loading) == 0) {
          _push(`<button type="submit" class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white">${ssrInterpolate(_ctx.$t("register"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(loading) == 1) {
          _push(`<button disabled type="submit" class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("register"))}... </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form>`);
      }
      _push(`</div><div class="md:text-md h-16 bg-primary-blue p-4 text-center text-sm text-white">${ssrInterpolate(_ctx.$t("already-signup"))} `);
      _push(ssrRenderComponent(_component_router_link, {
        class: "text-[#242A56] hover:underline",
        to: { name: "login" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("login"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("login")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
