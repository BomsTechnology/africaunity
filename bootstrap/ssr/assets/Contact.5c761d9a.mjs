import { ref, reactive, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import "../app.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "lodash";
import "axios";
import "vue-router";
import "vue-i18n";
import "@heroicons/vue/solid";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const show_city = ref(false);
    const loading = ref(0);
    const errors = ref("");
    const contact = reactive({
      name: "",
      email: "",
      about: "",
      city: "",
      content: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white xl:w-[90%]" }, _attrs))}><h1 class="text-center text-5xl font-bold capitalize text-primary-blue">${ssrInterpolate(_ctx.$t("contact"))}</h1><div class="py-8 lg:px-36"><section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">`);
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
        _push(`<div class="bg-green-50 py-4 px-2 text-green-700"><p>${ssrInterpolate(_ctx.$t("msg-contact-sucess"))}</p></div>`);
      } else {
        _push(`<div><h2 class="text-md font-light text-gray-700">${ssrInterpolate(_ctx.$t("contact-msg"))} ! </h2><form id="contactform"><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("full-name"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", contact.name)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("email"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", contact.email)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("about-title"))}<span class="text-red-500">*</span></label><select required name="" id="" class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="1">${ssrInterpolate(_ctx.$t("contact-about-1"))}</option><option value="2">${ssrInterpolate(_ctx.$t("contact-about-2"))}</option><option value="3">${ssrInterpolate(_ctx.$t("contact-about-3"))}</option><option value="4">${ssrInterpolate(_ctx.$t("contact-about-4"))}</option><option value="5">${ssrInterpolate(_ctx.$t("contact-about-5"))}</option></select></div>`);
        if (show_city.value) {
          _push(`<div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("city"))} <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", contact.city)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("content"))} <span class="text-red-500">*</span></label><textarea required id="pt" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(contact.content)}</textarea></div></div><div class="mt-6">`);
        if (loading.value == 0) {
          _push(`<button type="submit" class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none">${ssrInterpolate(_ctx.$t("send"))}</button>`);
        } else {
          _push(`<!---->`);
        }
        if (loading.value == 1) {
          _push(`<button type="submit" disabled class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none">${ssrInterpolate(_ctx.$t("send"))}... <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form></div>`);
      }
      _push(`</section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
