import { ref, onMounted, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as useAnnouncements } from "./announcementServices.cb974870.mjs";
import { u as useCategoryAnnouncements } from "./categoryAnnouncementServices.08a50fb5.mjs";
import { u as useCurrencies } from "./currencyServices.228bdf7b.mjs";
import { u as useUniversities } from "./universityServices.829204b1.mjs";
import { useRouter } from "vue-router";
import { _ as _sfc_main$1 } from "../app.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "lodash";
import "vue-i18n";
import "@heroicons/vue/solid";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "AddAnnouncement",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const user = localStorage.user ? JSON.parse(localStorage.user) : "";
    const { categoryAnnouncements, getCategoryAnnouncements } = useCategoryAnnouncements();
    const { currencies, getCurrencies } = useCurrencies();
    const { universities, getAllUniversities } = useUniversities();
    ref(null);
    onMounted(async () => {
      await getCategoryAnnouncements();
      await getCurrencies();
      await getAllUniversities();
    });
    const announcement = reactive({
      title: "",
      user_id: user.id,
      description: "",
      price: "",
      image: "",
      adress: "",
      website: "",
      email: user.email,
      phone: "",
      category_announcement_id: "",
      currency_id: "",
      university_id: ""
    });
    const { createAnnouncement, errors, loading } = useAnnouncements();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]" }, _attrs))}><div class="w-full space-y-4 py-5 text-center"><h1 class="text-4xl font-bold capitalize text-primary-blue">${ssrInterpolate(_ctx.$t("add"))} ${ssrInterpolate(_ctx.$t("ads"))}</h1></div><section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">`);
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
      _push(`<h1 class="text-xl font-semibold">${ssrInterpolate(_ctx.$t("add"))} ${ssrInterpolate(_ctx.$t("ads"))}</h1><h2 class="text-md font-light text-gray-700">${ssrInterpolate(_ctx.$t("good-msg-post"))} ! </h2><form id="announcementform" enctype="multipart/form-data"><div class="mt-4"><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("title"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", announcement.title)} maxlength="50" type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"><span class="text-xs font-light text-gray-400">${ssrInterpolate(announcement.title ? announcement.title.length : 0)} of 50 Characters</span></div><div class="divSelect2 col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("university"))} <span class="text-red-500">*</span></label>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: announcement.university_id,
        "onUpdate:modelValue": ($event) => announcement.university_id = $event,
        data: unref(universities),
        placeholder: "Select University",
        required: false,
        resetField: true,
        className: "w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
      }, null, _parent));
      _push(`</div><div><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("category"))} <span class="text-red-500">*</span></label><select required name="" id="" class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(categoryAnnouncements), (category_announcement) => {
        _push(`<option${ssrRenderAttr("value", category_announcement.id)}>${ssrInterpolate(category_announcement.name)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("contact-phone"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", announcement.phone)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("contact-email"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", announcement.email)} type="email" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div>`);
      if (announcement.category_announcement_id != 10) {
        _push(`<div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("price"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", announcement.price)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (announcement.category_announcement_id != 10) {
        _push(`<div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("currency"))} <span class="text-red-500">*</span></label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(unref(currencies), (currency) => {
          _push(`<option${ssrRenderAttr("value", currency.id)}>${ssrInterpolate(currency.symbol + " " + currency.name)}</option>`);
        });
        _push(`<!--]--></select></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("adresse"))}</label><input${ssrRenderAttr("value", announcement.adress)} type="text" placeholder="Douala Cameroon" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("website"))}</label><input${ssrRenderAttr("value", announcement.website)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div></div><div class="col-span-2 mt-4"><label class="dark:text-gray-200 text-gray-700" for="fr">${ssrInterpolate(_ctx.$t("thumbnails"))}</label><input type="file" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="col-span-2 mt-4"><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("description"))} <span class="text-red-500">*</span></label><textarea required type="text" id="pt" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(announcement.description)}</textarea></div></div><div class="mt-6">`);
      if (unref(loading) == 0) {
        _push(`<button type="submit" class="text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none">${ssrInterpolate(_ctx.$t("save"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<button type="submit" disabled class="text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none">${ssrInterpolate(_ctx.$t("save"))}... <svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/AddAnnouncement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
