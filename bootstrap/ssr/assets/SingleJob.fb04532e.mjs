import { reactive, ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, onBeforeMount, resolveComponent, unref, openBlock, createBlock, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { OfficeBuildingIcon, CalendarIcon, UserIcon, UserCircleIcon, PencilAltIcon, EmojiSadIcon, MailIcon, GlobeIcon, MapIcon, FlagIcon, BriefcaseIcon, DesktopComputerIcon, LocationMarkerIcon, AcademicCapIcon, TemplateIcon, GlobeAltIcon, CashIcon, TranslateIcon } from "@heroicons/vue/solid";
import { u as useJobOffers } from "./jobOfferServices.5379a3b9.mjs";
import { useRouter } from "vue-router";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main$1 = {
  __name: "Apply",
  __ssrInlineRender: true,
  props: { open: Boolean, toogleModal: Function, id: String },
  setup(__props) {
    const props = __props;
    const apply = reactive({
      user: JSON.parse(localStorage.user).id,
      job: props.id,
      message: "",
      email: JSON.parse(localStorage.user).email,
      name: JSON.parse(localStorage.user).firstname + " " + (JSON.parse(localStorage.user).lastname ? JSON.parse(localStorage.user).lastname : ""),
      cv: ""
    });
    const loadingC = ref(0);
    const errors = ref("");
    ref(null);
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
        _push(`<form class="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8" action="#"><h3 class="flex items-center justify-center text-xl font-bold text-gray-900 md:text-2xl">${ssrInterpolate(_ctx.$t("apply"))}</h3><div class=""><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("full-name"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", apply.name)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class=""><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("email"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", apply.email)} type="email" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class=""><label class="dark:text-gray-200 text-gray-700">CV(pdf) <span class="text-red-500">*</span></label><input required type="file" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label for="report" class="dark:text-gray-300 mb-2 block text-sm font-medium text-gray-900">Message <span class="text-red-500">*</span></label><textarea required id="report" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(apply.message)}</textarea></div>`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Apply.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SingleJob",
  __ssrInlineRender: true,
  props: {
    id: String
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const openApply = ref(false);
    const { jobOffer, getJobOffer, loading, errors } = useJobOffers();
    const user = localStorage.user ? JSON.parse(localStorage.user) : "";
    ref(0);
    const url = window.location.href;
    onBeforeMount(async () => {
      await getJobOffer(props.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        toogleModal: () => {
          openApply.value = false;
        },
        open: openApply.value,
        id: __props.id
      }, null, _parent));
      _push(`<div class="mx-auto flex min-h-screen w-full flex-col bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"><div class="lg:w-[65%]">`);
      if (unref(jobOffer).length != 0) {
        _push(`<div class="py-6 px-4"><div class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md"><div class="flex items-center space-x-4 px-4">`);
        if (unref(jobOffer).company_logo) {
          _push(`<img${ssrRenderAttr("src", unref(jobOffer).company_logo)} alt="" class="h-28 w-28 object-cover">`);
        } else {
          _push(ssrRenderComponent(unref(OfficeBuildingIcon), { class: "h-28 w-28 text-gray-500" }, null, _parent));
        }
        _push(`<span class="text-4xl font-bold text-gray-700">${ssrInterpolate(unref(jobOffer).company_name)}</span></div><div class="p-6"><div><a href="#" class="rounded bg-primary-blue py-1 px-2 text-sm capitalize text-white">`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).offer_type.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).offer_type.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).offer_type.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).offer_type.name_pt)}</span>`);
        }
        _push(`</a><h1 class="dark:text-white mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600">${ssrInterpolate(unref(jobOffer).title)}</h1><div class="mt-2 flex space-x-2 text-xs text-gray-500"><div class="flex space-x-1">`);
        _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
        _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(new Date(
          unref(jobOffer).date
        ).toLocaleDateString("fr-FR", {
          day: "numeric",
          year: "numeric",
          month: "long"
        }))}</a></div><div class="flex space-x-1">`);
        _push(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          to: {
            name: "compte",
            params: {
              name: unref(jobOffer).user.firstname,
              id: unref(jobOffer).user.id
            }
          },
          href: "#",
          class: "hover:text-primary-blue"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(jobOffer).user.firstname)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(jobOffer).user.firstname), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><p class="dark:text-gray-400 my-4 mt-2 py-4 text-gray-600">${ssrInterpolate(unref(jobOffer).description)}</p></div><div class="mt-4"><div class="flex items-center justify-between">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: {
            name: "compte",
            params: {
              name: unref(jobOffer).user.firstname,
              id: unref(jobOffer).user.id
            }
          },
          class: "flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(jobOffer).user.avatar) {
                _push2(`<img class="h-16 w-16 rounded-full object-cover shadow"${ssrRenderAttr("src", unref(jobOffer).user.avatar)}${_scopeId}>`);
              } else {
                _push2(ssrRenderComponent(unref(UserCircleIcon), { class: "h-10 w-10 text-gray-700" }, null, _parent2, _scopeId));
              }
              _push2(`<span class="dark:text-gray-200 mx-2 font-semibold text-gray-700"${_scopeId}>${ssrInterpolate(unref(jobOffer).user.firstname)}</span>`);
            } else {
              return [
                unref(jobOffer).user.avatar ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "h-16 w-16 rounded-full object-cover shadow",
                  src: unref(jobOffer).user.avatar
                }, null, 8, ["src"])) : (openBlock(), createBlock(unref(UserCircleIcon), {
                  key: 1,
                  class: "h-10 w-10 text-gray-700"
                })),
                createVNode("span", { class: "dark:text-gray-200 mx-2 font-semibold text-gray-700" }, toDisplayString(unref(jobOffer).user.firstname), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center">`);
        if (unref(user).id == unref(jobOffer).user.id) {
          _push(`<div class="ml-3">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "edit.job",
              params: { id: unref(jobOffer).id }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-gray-400 hover:text-primary-blue" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-gray-400 hover:text-primary-blue" })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="flex items-center space-x-3 px-2 py-4"><a${ssrRenderAttr(
          "href",
          "whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you " + unref(url)
        )}><svg fill="#25D366" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="h-6 w-6"><path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path></svg></a></div></div></div></div>`);
      } else if (unref(loading) == 1) {
        _push(`<div class="p-28"><svg class="mx-auto h-16 w-16 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
        _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
        _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
      }
      _push(`</div><div class="bg-white py-5 lg:w-[35%]"><div class="space-y-3 rounded-md py-5 px-10 shadow"><h1 class="text-2xl font-bold text-primary-blue"> Job ${ssrInterpolate(_ctx.$t("details"))}</h1><div class="flex items-center space-x-2 text-sm text-gray-500">`);
      _push(ssrRenderComponent(unref(MailIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(jobOffer).company_email)}</span></div><div class="grid gap-2 text-sm lg:grid-cols-2">`);
      if (unref(jobOffer).continent) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(GlobeIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).continent.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).continent.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).continent.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).continent.name_pt)}</span>`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffer).zone) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(MapIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).zone.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).zone.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).zone.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).zone.name_pt)}</span>`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffer).country) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(FlagIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).country.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).country.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).country.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).country.name_pt)}</span>`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffer).city) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(OfficeBuildingIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).city.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).city.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).city.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).city.name_pt)}</span>`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffer).work_department) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(BriefcaseIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).work_department.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).work_department.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).work_department.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).work_department.name_pt)}</span>`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffer).work_mode) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(DesktopComputerIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).work_mode.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).work_mode.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).work_mode.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).work_mode.name_pt)}</span>`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center space-x-2 text-gray-500">`);
      _push(ssrRenderComponent(unref(LocationMarkerIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(jobOffer).location)}</span></div>`);
      if (unref(jobOffer).year_experience) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(AcademicCapIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).year_experience.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).year_experience.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).year_experience.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).year_experience.name_pt)}</span>`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffer).size_company) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(TemplateIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).size_company.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).size_company.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(jobOffer).size_company.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(jobOffer).size_company.name_pt)}</span>`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffer).company_website && unref(jobOffer).company_website != "null") {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(GlobeAltIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(jobOffer).company_website)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffer).currency) {
        _push(`<div class="flex items-center space-x-2 text-gray-500">`);
        _push(ssrRenderComponent(unref(CashIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(jobOffer).min_price + unref(jobOffer).currency.symbol)} - ${ssrInterpolate(unref(jobOffer).max_price + unref(jobOffer).currency.symbol)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center space-x-2 text-sm text-gray-500">`);
      _push(ssrRenderComponent(unref(TranslateIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`<span><ul class="flex space-x-2 py-1"><!--[-->`);
      ssrRenderList(unref(jobOffer).languages, (lang) => {
        _push(`<li>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(lang.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(lang.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(lang.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(lang.name_pt)}</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></span></div>`);
      if (unref(user).type == "particular") {
        _push(`<div><button type="button" class="w-full rounded bg-primary-blue px-3 py-2 text-white">${ssrInterpolate(_ctx.$t("apply"))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/SingleJob.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
