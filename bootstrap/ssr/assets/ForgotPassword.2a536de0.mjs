import { onMounted, reactive, ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { MailIcon } from "@heroicons/vue/solid";
import "axios";
import { useRouter } from "vue-router";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const cuser = localStorage.user ? JSON.parse(localStorage.user) : "";
    onMounted(async () => {
      if (localStorage.token) {
        router.push({
          name: "compte",
          params: { name: cuser.firstname, id: cuser.id }
        });
      }
    });
    const email = reactive({
      email: ""
    });
    const errors = ref("");
    const loading = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]" }, _attrs))}><div class="p-6"><div class="shadow"><div class="px-6 py-6"><h1 class="text-center text-3xl font-bold text-[#242A56]">${ssrInterpolate(_ctx.$t("password-forgot"))}</h1>`);
      if (errors.value != "") {
        _push(ssrRenderComponent(Error, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(errors.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(errors.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (loading.value == 2) {
        _push(`<div class="mx-8 mt-2 bg-green-50 py-4 px-2 text-green-700"><p>${ssrInterpolate(_ctx.$t("msg-sucess-send-Fp"))}</p></div>`);
      } else {
        _push(`<form class="py-7"><p class="text-sm font-light">${ssrInterpolate(_ctx.$t("write-email"))}</p><div class="relative"><span>`);
        _push(ssrRenderComponent(unref(MailIcon), { class: "absolute mt-2 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
        _push(`</span><input type="email" required${ssrRenderAttr("value", email.email)}${ssrRenderAttr("placeholder", _ctx.$t("adresse") + " " + _ctx.$t("email"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div>`);
        if (loading.value == 0) {
          _push(`<button type="submit" class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white">${ssrInterpolate(_ctx.$t("send"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        if (loading.value == 1) {
          _push(`<button disabled type="submit" class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("send"))}... </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
