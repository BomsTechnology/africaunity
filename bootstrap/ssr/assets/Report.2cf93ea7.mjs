import { reactive, ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import { E as Error } from "./Error.a4f77a94.mjs";
const _sfc_main = {
  __name: "Report",
  __ssrInlineRender: true,
  props: {
    open: Boolean,
    toogleModal: Function,
    id: String,
    type: String
  },
  setup(__props) {
    const props = __props;
    const report = reactive({
      user: JSON.parse(localStorage.user).id,
      reported: props.id,
      content: ""
    });
    const loadingC = ref(0);
    const errors = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fixed inset-0 z-40 overflow-y-auto",
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true",
        style: __props.open ? null : { display: "none" }
      }, _attrs))}><div class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div><span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">\u200B</span><div class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"><div class="relative rounded-lg bg-white py-4 shadow">`);
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
      if (loadingC.value == 2) {
        _push(`<div class="mx-8 bg-green-50 py-4 px-2 text-green-700"><p>${ssrInterpolate(_ctx.$t("msg-contact-sucess"))}</p></div>`);
      } else {
        _push(`<form class="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8" action="#"><h3 class="flex items-center justify-center text-xl font-bold text-gray-900 md:text-2xl"><span class="mr-2 rounded-full bg-yellow-100 p-2 text-yellow-700">`);
        _push(ssrRenderComponent(unref(ExclamationCircleIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`</span> ${ssrInterpolate(_ctx.$t("report"))}</h3><div><label for="report" class="dark:text-gray-300 mb-2 block text-sm font-medium text-gray-900">${ssrInterpolate(_ctx.$t("report-msg"))} <span class="text-red-500">*</span></label><textarea required id="report" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(report.content)}</textarea></div>`);
        if (loadingC.value == 0) {
          _push(`<button type="submit" class="dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full rounded-lg bg-primary-blue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">${ssrInterpolate(_ctx.$t("send"))}</button>`);
        } else {
          _push(`<button type="submit" disabled class="dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex w-full items-center justify-center rounded-lg bg-blue-300 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">${ssrInterpolate(_ctx.$t("send"))}... <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
        }
        _push(`</form>`);
      }
      if (loadingC.value == 2) {
        _push(`<div class="px-8"><button type="button" class="dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 w-full rounded bg-primary-blue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"> OK </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Report.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
