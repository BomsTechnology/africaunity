import { ref, onMounted, useSSRContext, reactive, watch, computed, resolveComponent, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Report.2cf93ea7.mjs";
import { u as usePosts } from "./postServices.c94ed1b2.mjs";
import "./Error.a4f77a94.mjs";
import { u as useUsers } from "./userServices.c296645b.mjs";
import { u as useComments } from "./commentServices.b5a681da.mjs";
import { u as useAnnouncements } from "./announcementServices.99c189fe.mjs";
import { u as useLanguages } from "./languageServices.c3bbe23f.mjs";
import { a as useBusinessTypes, u as useBusinessSizes } from "./businessSizeServices.7658bab2.mjs";
import { u as useActivityAreas } from "./activityAreaServices.104ad1e7.mjs";
import { u as useJobOffers } from "./jobOfferServices.5379a3b9.mjs";
import { u as useLegalStatuses } from "./legalStatusServices.a3b74ae6.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { UserCircleIcon, PlusCircleIcon, PencilIcon, CogIcon, IdentificationIcon, NewspaperIcon, BookOpenIcon, ChatIcon, ChatAltIcon, SpeakerphoneIcon, ExclamationCircleIcon, PencilAltIcon, TrashIcon, EmojiSadIcon } from "@heroicons/vue/solid";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-router";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main$1 = {
  __name: "EditProfile",
  __ssrInlineRender: true,
  props: {
    user: Object,
    detail: Object,
    languages: Array,
    businessTypes: Array,
    businessSizes: Array,
    activityAreas: Array,
    legalStatuses: Array,
    countries: Array
  },
  setup(__props) {
    const props = __props;
    const area_activities = ref([]);
    const langs = ref([]);
    const loading = ref(0);
    onMounted(async () => {
      for (const item of props.detail.activity_areas) {
        area_activities.value.push(item.id);
      }
      for (const item of props.detail.languages) {
        langs.value.push(item.id);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><form class="py-7"><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">`);
      if (__props.user.type == "particular") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("status"))} <span class="text-red-500">*</span></label><select required class="form-input mt-3 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><option value="1">${ssrInterpolate(_ctx.$t("actif"))}</option><option value="0">${ssrInterpolate(_ctx.$t("no-actif"))}</option></select></div>`);
      } else if (__props.user.type == "business1" || __props.user.type == "business2") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("social-object"))}</label><textarea class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(__props.detail.social_object)}</textarea></div>`);
      } else {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("goal-attribution"))}</label><textarea class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(__props.detail.goal_attribution)}</textarea></div>`);
      }
      _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("adresse") + " " + _ctx.$t("email"))} <span class="text-red-500">*</span><span class="ml-4"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(__props.user.hide_email) ? ssrLooseContain(__props.user.hide_email, null) : __props.user.hide_email) ? " checked" : ""}><span class="text-xs font-light">Masquer</span></span></label><input type="email"${ssrRenderAttr("value", __props.user.email)} required disabled class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-500 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div>`);
      if (__props.user.type == "particular") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("diplome-certification"))}</label><textarea class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(__props.detail.goal_attribution)}</textarea></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("presentation"))}</label><textarea maxlength="500" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(__props.detail.presentation)}</textarea><span class="text-xs font-light text-gray-400">${ssrInterpolate(__props.detail.presentation ? __props.detail.presentation.length : 0)} of 500 Characters</span></div>`);
      if (__props.user.type == "business1" || __props.user.type == "business2" || __props.user.type == "ip") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("name-responsable"))}<span class="text-red-500">*</span></label><input type="text"${ssrRenderAttr("value", __props.detail.name_responsible)} required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.user.type == "business1" || __props.user.type == "business2" || __props.user.type == "ip") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("adresse"))}</label><input type="text"${ssrRenderAttr("value", __props.detail.adress)} required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">`);
      if (__props.user.type == "particular") {
        _push(`<div class="relative"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("sex"))} <span class="text-red-500">*</span></label><select class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><option value="1">${ssrInterpolate(_ctx.$t("male"))}</option><option value="2">${ssrInterpolate(_ctx.$t("female"))}</option></select></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("phone-number"))}<span class="text-red-500">*</span></label><input type="text"${ssrRenderAttr("value", __props.detail.phone_number)} required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div>`);
      if (__props.user.type != "particular") {
        _push(`<div class="relative"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("phone-number"))} 2</label><input type="text"${ssrRenderAttr("value", __props.detail.phone_number_2)} class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">`);
      if (__props.user.type == "particular" || __props.user.type == "ip") {
        _push(`<div class="relative"><label class="dark:text-gray-200 text-gray-700"><span>${ssrInterpolate(_ctx.$t("native-country"))}</span><span class="text-red-500"> *</span></label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(__props.countries, (country) => {
          _push(`<option${ssrRenderAttr("value", country.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(country.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(country.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(country.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(country.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([
        __props.user.type == "particular" || __props.user.type == "ip" ? "" : "col-span-2"
      ])}"><label class="dark:text-gray-200 text-gray-700">`);
      if (__props.user.type == "particular" || __props.user.type == "ip") {
        _push(`<span>${ssrInterpolate(_ctx.$t("residence-country"))}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("social-country"))}</span>`);
      }
      _push(`<span class="text-red-500"> *</span></label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(__props.countries, (country) => {
        _push(`<option${ssrRenderAttr("value", country.id)}>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(country.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(country.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(country.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(country.name_pt)}</span>`);
        }
        _push(`</option>`);
      });
      _push(`<!--]--></select></div></div>`);
      if (__props.user.type != "particular") {
        _push(`<div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="relative"><label class="dark:text-gray-200 text-gray-700">`);
        if (__props.user.type == "ip") {
          _push(`<span>${ssrInterpolate(_ctx.$t("perimetre"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("type-company"))}</span>`);
        }
        _push(`<span class="text-red-500"> *</span></label><select required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(__props.businessTypes, (businessType) => {
          _push(`<option${ssrRenderAttr("value", businessType.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(businessType.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(businessType.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(businessType.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(businessType.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div><div class="relative"><label class="dark:text-gray-200 text-gray-700">`);
        if (__props.user.type == "ip") {
          _push(`<span>${ssrInterpolate(_ctx.$t("size-institution"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("size-company"))}</span>`);
        }
        _push(`<span class="text-red-500"> *</span></label><select required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(__props.businessSizes, (BusinessSize) => {
          _push(`<option${ssrRenderAttr("value", BusinessSize.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(BusinessSize.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(BusinessSize.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(BusinessSize.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(BusinessSize.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.user.type == "particular") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("speak-language"))} <span class="hidden text-xs font-light lg:inline-block">(${ssrInterpolate(_ctx.$t("maintain-crtl"))})</span><span class="text-red-500"> *</span></label><select multiple size="4" required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(__props.languages, (language) => {
          _push(`<option${ssrRenderAttr("value", language.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(language.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(language.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(language.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(language.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.user.type == "business1" || __props.user.type == "business2") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("legal-status"))}<span class="text-red-500"> *</span></label><select required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(__props.legalStatuses, (legalStatus) => {
          _push(`<option${ssrRenderAttr("value", legalStatus.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(legalStatus.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(legalStatus.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(legalStatus.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(legalStatus.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">`);
      if (__props.user.type == "particular") {
        _push(`<span>${ssrInterpolate(_ctx.$t("birth-date"))}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("create-date"))}</span>`);
      }
      _push(`<span class="text-red-500"> *</span></label><input type="date"${ssrRenderAttr("value", __props.detail.navite_date)} required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="relative"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("website"))}</label><input${ssrRenderAttr("value", __props.detail.website)} type="url" placeholder="https://www.monsite.com" class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="relative"><label class="dark:text-gray-200 text-gray-700"> Youtube </label><input type="url"${ssrRenderAttr("value", __props.detail.youtube)} placeholder="https://youtu.be/m0N965nXmXY" class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></div>`);
      if (__props.user.type != "ip") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("activity-area"))} <span class="hidden text-xs font-light lg:inline-block">(${ssrInterpolate(_ctx.$t("maintain-crtl"))})</span><span class="text-red-500"> *</span></label><select multiple size="4" required class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><!--[-->`);
        ssrRenderList(__props.activityAreas, (activity) => {
          _push(`<option${ssrRenderAttr("value", activity.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(activity.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(activity.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(activity.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(activity.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.user.type == "particular") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("o-activity"))}</label><textarea class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(__props.detail.other_activity)}</textarea></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.user.type == "particular") {
        _push(`<div class="relative col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("rsearch-p"))}</label><textarea class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-20 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(__props.detail.search_partner)}</textarea></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-span-2">`);
      if (loading.value == 0) {
        _push(`<button type="submit" class="mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white">${ssrInterpolate(_ctx.$t("save"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value == 1) {
        _push(`<button disabled type="submit" class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("save"))}... </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/EditProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  props: {
    name: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    },
    redirect: {
      required: false,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const loginUser = localStorage.user ? JSON.parse(localStorage.user) : "";
    const { articles, getPostsUser, propau, destroyPost } = usePosts();
    const { user, getUser } = useUsers();
    const { comments, getCommentsUser, destroyComment, updateComment } = useComments();
    const { jobOffers, getJobOffersUser, destroyJobOffer, markFilled } = useJobOffers();
    const { announcements, getAnnouncementsUser, destroyAnnouncement } = useAnnouncements();
    const { languages, getLanguages } = useLanguages();
    const { businessTypes, getBusinessTypes } = useBusinessTypes();
    const { businessSizes, getBusinessSizes } = useBusinessSizes();
    const { activityAreas, getActivityAreas } = useActivityAreas();
    const { legalStatuses, getLegalStatuses } = useLegalStatuses();
    const { countries, getCountries } = useCountries();
    const detail = ref([]);
    const loading = ref(0);
    const searchArticle = ref("");
    const searchAds = ref("");
    const searchJob = ref("");
    const searchComment = ref("");
    const searchProp = ref("");
    const langArticle = ref("");
    const langProp = ref("");
    const url = window.location.href;
    const openReport = ref(false);
    const open = reactive({
      profil: true,
      article: false,
      propau: false,
      comment: false,
      job: false,
      ads: false,
      edit: false
    });
    onMounted(async () => {
      try {
        loading.value = 1;
        if (props.redirect == "article") {
          open.profil = false;
          open.article = true;
        } else if (props.redirect == "propau") {
          open.profil = false;
          open.propau = true;
        }
        await getUser(props.id);
        let response = await axios.get("/api/details/" + props.id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        });
        detail.value = response.data.data;
        loading.value = 0;
        await getPostsUser(props.id);
        await getCommentsUser(props.id);
        await getJobOffersUser(props.id);
        await getAnnouncementsUser(props.id);
        await getLanguages();
        await getBusinessTypes();
        await getBusinessSizes();
        await getActivityAreas();
        await getLegalStatuses();
        await getCountries();
      } catch (e) {
        if (e.response.status == 401) {
          router.push({
            name: login,
            params: {
              redirect: "not-login"
            }
          });
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("user");
        }
      }
    });
    watch(props, async (currentValue, oldValue) => {
      try {
        loading.value = 1;
        await getUser(currentValue.id);
        let response = await axios.get("/api/details/" + currentValue.id, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        });
        detail.value = response.data.data;
        loading.value = 0;
        await getPostsUser(currentValue.id);
        await getCommentsUser(currentValue.id);
        await getJobOffersUser(currentValue.id);
        await getAnnouncementsUser(currentValue.id);
      } catch (e) {
        if (e.response.status == 401) {
          router.push({
            name: login,
            params: {
              redirect: "not-login"
            }
          });
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("user");
        }
      }
    });
    const toogleModal = () => {
      openReport.value = !openReport.value;
    };
    const modifyComment = reactive({
      id: "",
      user_id: "",
      post_id: "",
      content: ""
    });
    const filteredAnnouncement = computed(() => {
      return announcements.value.filter((announcement) => {
        return announcement.title.toLowerCase().includes(searchAds.value.toLowerCase());
      });
    });
    const filteredJob = computed(() => {
      return jobOffers.value.filter((jobOffer) => {
        return jobOffer.title.toLowerCase().includes(searchJob.value.toLowerCase());
      });
    });
    const filteredComment = computed(() => {
      return comments.value.filter((comment) => {
        return comment.post.title.toLowerCase().includes(searchComment.value.toLowerCase());
      });
    });
    const filteredPropAu = computed(() => {
      return propau.value.filter((prop) => {
        if (langProp.value != "") {
          return prop.title.toLowerCase().includes(searchProp.value.toLowerCase()) && prop.language == langProp.value;
        } else {
          return prop.title.toLowerCase().includes(searchProp.value.toLowerCase());
        }
      });
    });
    const filteredArticles = computed(() => {
      return articles.value.filter((article) => {
        if (langArticle.value != "") {
          return article.title.toLowerCase().includes(searchArticle.value.toLowerCase()) && article.language == langArticle.value;
        } else {
          return article.title.toLowerCase().includes(searchArticle.value.toLowerCase());
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        open: openReport.value,
        toogleModal,
        id: __props.id,
        type: "account"
      }, null, _parent));
      _push(`<section class="mx-auto min-h-screen w-full bg-white p-4 lg:py-10 lg:px-20 xl:w-[90%]"><div class="relative h-96"><div class="z-0 h-1/2 bg-gray-50 shadow">`);
      if (unref(user).cover) {
        _push(`<img${ssrRenderAttr("src", unref(user).cover)} class="h-full w-full bg-cover object-cover" alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative flex h-1/2 items-center justify-center bg-white lg:justify-end lg:space-x-3">`);
      if (unref(user).id == unref(loginUser).id) {
        _push(ssrRenderComponent(_component_router_link, {
          to: {
            name: "setting.account",
            params: { name: unref(user).firstname, id: unref(user).id }
          },
          class: "absolute mb-40 -mt-28 h-40 w-40 overflow-hidden rounded-full bg-white text-center shadow lg:left-4 lg:mt-0 lg:h-60 lg:w-60"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(user).avatar) {
                _push2(`<img${ssrRenderAttr("src", unref(user).avatar)} class="h-full w-full bg-cover object-cover" alt=""${_scopeId}>`);
              } else {
                _push2(ssrRenderComponent(unref(UserCircleIcon), { class: "h-full w-full text-gray-500" }, null, _parent2, _scopeId));
              }
            } else {
              return [
                unref(user).avatar ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: unref(user).avatar,
                  class: "h-full w-full bg-cover object-cover",
                  alt: ""
                }, null, 8, ["src"])) : (openBlock(), createBlock(unref(UserCircleIcon), {
                  key: 1,
                  class: "h-full w-full text-gray-500"
                }))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="absolute mb-40 -mt-28 h-40 w-40 overflow-hidden rounded-full bg-white text-center shadow lg:left-4 lg:mt-0 lg:h-60 lg:w-60">`);
        if (unref(user).avatar) {
          _push(`<img${ssrRenderAttr("src", unref(user).avatar)} class="h-full w-full bg-cover object-cover" alt="">`);
        } else {
          _push(ssrRenderComponent(unref(UserCircleIcon), { class: "h-full w-full text-gray-500" }, null, _parent));
        }
        _push(`</div>`);
      }
      _push(`<div class="mt-20 h-full w-full overflow-y-auto px-8 py-2 lg:mt-0 lg:w-[65%] xl:w-[75%]">`);
      if (loading.value == 1) {
        _push(`<div class="p-28"><svg class="mx-auto h-16 w-16 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<div><div class="mt-20 flex flex-col items-center lg:mt-0 lg:flex-row lg:justify-between"><div><h1 class="text-center text-2xl font-semibold capitalize text-gray-700 lg:text-left lg:text-3xl"><span>${ssrInterpolate(unref(user).firstname)}</span>`);
        if (unref(user).type == "particular") {
          _push(`<span>${ssrInterpolate(unref(user).lastname)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h1><div class="mt-2 flex items-center space-x-2 text-sm">`);
        if (!unref(user).hide_email) {
          _push(`<h2 class="text-primary-blue">${ssrInterpolate(unref(user).email)} \xB0 </h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="text-gray-400">${ssrInterpolate(detail.value.phone_number)}</h2></div></div>`);
        if (unref(user).id == unref(loginUser).id) {
          _push(`<div class="flex items-center space-x-2 py-1 lg:py-0">`);
          if (unref(user).type != "business1") {
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "add.post",
                params: { type: "article" }
              },
              class: "flex items-center space-x-2 rounded-xl bg-primary-blue py-2 px-2 text-sm text-white shadow-md lg:px-4"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(unref(PlusCircleIcon), { class: "h-5 w-5" }, null, _parent2, _scopeId));
                  _push2(`<span class="hidden lg:block"${_scopeId}>${ssrInterpolate(_ctx.$t("add"))} ${ssrInterpolate(_ctx.$t("article"))}</span>`);
                } else {
                  return [
                    createVNode(unref(PlusCircleIcon), { class: "h-5 w-5" }),
                    createVNode("span", { class: "hidden lg:block" }, toDisplayString(_ctx.$t("add")) + " " + toDisplayString(_ctx.$t("article")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="flex items-center space-x-2 rounded-xl bg-primary-blue py-2 px-2 text-sm text-white shadow-md lg:px-4">`);
          _push(ssrRenderComponent(unref(PencilIcon), { class: "h-5 w-5" }, null, _parent));
          _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("edit"))} ${ssrInterpolate(_ctx.$t("profile"))}</span></button>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "setting.account",
              params: {
                name: unref(user).firstname,
                id: unref(user).id
              }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(CogIcon), { class: "h-8 w-8 text-gray-600 hover:text-primary-blue" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(CogIcon), { class: "h-8 w-8 text-gray-600 hover:text-primary-blue" })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="my-2 mx-auto h-20 overflow-y-auto break-words text-sm font-light text-gray-500 lg:h-24 lg:w-full">${ssrInterpolate(detail.value.presentation)}</div></div>`);
      }
      _push(`</div></div></div><div class="mt-20 flex items-center space-x-2 bg-menu px-5 py-3 lg:mt-0"><button class="${ssrRenderClass([
        open.profil ? "text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white" : "text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25"
      ])}">`);
      _push(ssrRenderComponent(unref(IdentificationIcon), { class: "h-5 w-5" }, null, _parent));
      _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("profile"))}</span></button>`);
      if (unref(user).type != "business1") {
        _push(`<button class="${ssrRenderClass([
          open.article ? "text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white" : "text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25"
        ])}">`);
        _push(ssrRenderComponent(unref(NewspaperIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("articles"))}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(user).type != "business1") {
        _push(`<button class="${ssrRenderClass([
          open.propau ? "text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white" : "text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25"
        ])}">`);
        _push(ssrRenderComponent(unref(BookOpenIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("propau"))}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="${ssrRenderClass([
        open.comment ? "text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white" : "text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25"
      ])}">`);
      _push(ssrRenderComponent(unref(ChatIcon), { class: "h-5 w-5" }, null, _parent));
      _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("comments"))}</span></button>`);
      if (unref(user).type != "particular" && unref(user).type != "business1") {
        _push(`<button class="${ssrRenderClass([
          open.job ? "text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white" : "text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25"
        ])}">`);
        _push(ssrRenderComponent(unref(ChatAltIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("my-jobs"))}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(user).type == "particular" || unref(user).type == "admin") {
        _push(`<button class="${ssrRenderClass([
          open.ads ? "text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white" : "text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25"
        ])}">`);
        _push(ssrRenderComponent(unref(SpeakerphoneIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("my-ads"))}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (loading.value == 1) {
        _push(`<div class="p-28"><svg class="mx-auto h-16 w-16 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (open.profil && loading.value == 0) {
        _push(`<div class="py-8 lg:px-16"><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">`);
        if (unref(user).type == "particular") {
          _push(`<div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("firstname"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(unref(user).firstname)}</p></div><div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("lastname"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(unref(user).lastname)}</p></div></div>`);
        } else if (unref(user).type == "business1" || unref(user).type == "business2") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("social-reason"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(unref(user).firstname)}</p></div>`);
        } else {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("denomination"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(unref(user).firstname)}</p></div>`);
        }
        if (unref(user).type == "particular") {
          _push(`<div class="relative col-span-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("status"))}</label><p class="mt-1 rounded-lg border p-2 shadow">`);
          if (detail.value.status == 1) {
            _push(`<span>${ssrInterpolate(_ctx.$t("actif"))}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(_ctx.$t("no-actif"))}</span>`);
          }
          _push(`</p></div>`);
        } else if (unref(user).type == "business1" || unref(user).type == "business2") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("social-object"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.social_object)}</p></div>`);
        } else if (unref(user).type == "ip") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("goal-attribution"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.goal_attribution)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(user).hide_email) {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("adresse") + " " + _ctx.$t("email"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(unref(user).email)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user).type == "particular") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("diplome-certification"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.goal_attribution)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user).type == "business1" || unref(user).type == "business2" || unref(user).type == "ip") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("name-responsable"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.name_responsible)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user).type == "business1" || unref(user).type == "business2" || unref(user).type == "ip") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("adresse"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.adress)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">`);
        if (unref(user).type == "particular") {
          _push(`<div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("sex"))}</label><p class="mt-1 rounded-lg border p-2 shadow">`);
          if (detail.value.sex == 1) {
            _push(`<span>${ssrInterpolate(_ctx.$t("male"))}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(_ctx.$t("female"))}</span>`);
          }
          _push(`</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("phone-number"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.phone_number)}</p></div>`);
        if (unref(user).type != "particular") {
          _push(`<div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("phone-number"))} 2</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.phone_number_2)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">`);
        if (unref(user).type == "particular" || unref(user).type == "ip") {
          _push(`<div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700"><span>${ssrInterpolate(_ctx.$t("native-country"))}</span></label><ul class="mt-1 rounded-lg border p-2 shadow">`);
          if (detail.value.country_native) {
            _push(`<li>`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(detail.value.country_native.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(detail.value.country_native.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(detail.value.country_native.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(detail.value.country_native.name_pt)}</span>`);
            }
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([
          unref(user).type == "particular" || unref(user).type == "ip" ? "border-b py-2" : "col-span-2 border-b py-2"
        ])}"><label class="text-md py-1 font-semibold text-gray-700">`);
        if (unref(user).type == "particular" || unref(user).type == "ip") {
          _push(`<span>${ssrInterpolate(_ctx.$t("residence-country"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("social-country"))}</span>`);
        }
        _push(`</label><ul class="mt-1 rounded-lg border p-2 shadow">`);
        if (detail.value.country_residence) {
          _push(`<li>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(detail.value.country_residence.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(detail.value.country_residence.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(detail.value.country_residence.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(detail.value.country_residence.name_pt)}</span>`);
          }
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div>`);
        if (unref(user).type != "particular") {
          _push(`<div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">`);
          if (unref(user).type == "ip") {
            _push(`<span>${ssrInterpolate(_ctx.$t("perimetre"))}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(_ctx.$t("type-company"))}</span>`);
          }
          _push(`</label><ul class="mt-1 rounded-lg border p-2 shadow">`);
          if (detail.value.business_type) {
            _push(`<li>`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(detail.value.business_type.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(detail.value.business_type.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(detail.value.business_type.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(detail.value.business_type.name_pt)}</span>`);
            }
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></div><div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">`);
          if (unref(user).type == "ip") {
            _push(`<span>${ssrInterpolate(_ctx.$t("size-institution"))}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(_ctx.$t("size-company"))}</span>`);
          }
          _push(`</label><ul class="mt-1 rounded-lg border p-2 shadow">`);
          if (detail.value.business_size) {
            _push(`<li>`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(detail.value.business_size.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(detail.value.business_size.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(detail.value.business_size.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(detail.value.business_size.name_pt)}</span>`);
            }
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user).type == "particular") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("speak-language"))}</label><ul class="mt-1 rounded-lg border p-2 shadow"><!--[-->`);
          ssrRenderList(unref(languages), (language) => {
            _push(`<li><!--[-->`);
            ssrRenderList(detail.value.languages, (lang) => {
              _push(`<span>`);
              if (lang.id === language.id) {
                _push(`<span>`);
                if (_ctx.$i18n.locale == "en") {
                  _push(`<span>${ssrInterpolate(language.name_en)}</span>`);
                } else if (_ctx.$i18n.locale == "fr") {
                  _push(`<span>${ssrInterpolate(language.name_fr)}</span>`);
                } else if (_ctx.$i18n.locale == "es") {
                  _push(`<span>${ssrInterpolate(language.name_es)}</span>`);
                } else {
                  _push(`<span>${ssrInterpolate(language.name_pt)}</span>`);
                }
                _push(`</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</span>`);
            });
            _push(`<!--]--></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user).type == "business1" || unref(user).type == "business2") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("legal-status"))}</label><ul class="mt-1 rounded-lg border p-2 shadow">`);
          if (detail.value.legal_status) {
            _push(`<li>`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(detail.value.legal_status.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(detail.value.legal_status.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(detail.value.legal_status.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(detail.value.legal_status.name_pt)}</span>`);
            }
            _push(`</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">`);
        if (unref(user).type == "particular") {
          _push(`<span>${ssrInterpolate(_ctx.$t("birth-date"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("create-date"))}</span>`);
        }
        _push(`</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.navite_date)}</p></div><div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("website"))}</label><p class="mt-1 rounded-lg border p-2 shadow"><a target="_blank" class="block py-1 italic text-primary-blue hover:underline"${ssrRenderAttr("href", detail.value.website)}>${ssrInterpolate(detail.value.website)}</a></p></div><div class="relative border-b py-2"><label class="text-md py-1 font-semibold text-gray-700"> Youtube </label><p class="mt-1 rounded-lg border p-2 shadow"><a target="_blank" class="block py-1 italic hover:underline"${ssrRenderAttr("href", detail.value.youtube)}>Youtube</a></p></div></div>`);
        if (unref(user).type != "ip") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("activity-area"))}</label><ul class="mt-1 rounded-lg border p-2 shadow"><!--[-->`);
          ssrRenderList(unref(activityAreas), (activityArea) => {
            _push(`<li><!--[-->`);
            ssrRenderList(detail.value.activity_areas, (activity_area) => {
              _push(`<span>`);
              if (activity_area.id === activityArea.id) {
                _push(`<span>`);
                if (_ctx.$i18n.locale == "en") {
                  _push(`<span>${ssrInterpolate(activityArea.name_en)}</span>`);
                } else if (_ctx.$i18n.locale == "fr") {
                  _push(`<span>${ssrInterpolate(activityArea.name_fr)}</span>`);
                } else if (_ctx.$i18n.locale == "es") {
                  _push(`<span>${ssrInterpolate(activityArea.name_es)}</span>`);
                } else {
                  _push(`<span>${ssrInterpolate(activityArea.name_pt)}</span>`);
                }
                _push(`</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</span>`);
            });
            _push(`<!--]--></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user).type == "particular") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("o-activity"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.other_activity)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user).type == "particular") {
          _push(`<div class="relative col-span-2 border-b py-2"><label class="text-md py-1 font-semibold text-gray-700">${ssrInterpolate(_ctx.$t("rsearch-p"))}</label><p class="mt-1 rounded-lg border p-2 shadow">${ssrInterpolate(detail.value.search_partner)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center space-x-3 px-2 py-4"><a${ssrRenderAttr(
          "href",
          "whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you " + unref(url)
        )}><svg fill="#25D366" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="h-6 w-6"><path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path></svg></a><div><button class="flex cursor-pointer items-center space-x-2 rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-400 hover:border-white hover:bg-yellow-300 hover:text-white">`);
        _push(ssrRenderComponent(unref(ExclamationCircleIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("report"))}</span></button></div></div></div></div>`);
      } else if (open.article && loading.value == 0) {
        _push(`<div class="py-8 lg:px-16"><div class="items-center space-x-2 md:flex"><div><div class="relative"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search"${ssrRenderAttr("value", searchArticle.value)} class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Search"></div></div><div><select class="form-select block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pr-8 pl-4 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">Select Language</option><option value="fr">${ssrInterpolate(_ctx.$t("fr"))}</option><option value="en">${ssrInterpolate(_ctx.$t("en"))}</option><option value="es">${ssrInterpolate(_ctx.$t("es"))}</option><option value="pt">${ssrInterpolate(_ctx.$t("pt"))}</option></select></div></div>`);
        if (unref(filteredArticles).length != 0) {
          _push(`<div class="grid gap-8 px-6 py-8 lg:grid-cols-2"><!--[-->`);
          ssrRenderList(unref(filteredArticles), (post) => {
            _push(`<div class="dark:bg-gray-800 mx-auto flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg"><div class="w-1/3 overflow-hidden bg-cover">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: { id: post.id }
              }
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", post.image)} class="h-full w-full bg-cover object-cover"${ssrRenderAttr("alt", post.title)}${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: post.image,
                      class: "h-full w-full bg-cover object-cover",
                      alt: post.title
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="w-2/3 p-4 md:p-4">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: { id: post.id }
              },
              class: "dark:text-white text-2xl font-bold text-gray-800"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "...")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "..."), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="item-center mt-2 flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4 text-gray-500" }, null, _parent));
            _push(`<a href="#" class="text-xs hover:text-primary-blue">${ssrInterpolate(post.comments)}</a></div><div class="item-center mt-3 flex justify-between">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: { id: post.id }
              },
              class: "text-sm font-bold text-primary-blue hover:underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("read-more"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("read-more")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            if (unref(user).id == unref(loginUser).id) {
              _push(`<div class="flex space-x-2">`);
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "edit.post",
                  params: {
                    id: post.id,
                    type: post.type
                  }
                }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-primary-blue hover:text-gray-400" }, null, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-primary-blue hover:text-gray-400" })
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<button class="dark:text-blue-500 text-red-600 hover:underline">`);
              _push(ssrRenderComponent(unref(TrashIcon), { class: "h-5 w-5 cursor-pointer text-red-400 hover:text-red-700" }, null, _parent));
              _push(`</button></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
          _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
          _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
        }
        _push(`</div>`);
      } else if (open.propau && loading.value == 0) {
        _push(`<div class="py-8 lg:px-16"><div class="items-center space-x-2 md:flex"><div><div class="relative"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search"${ssrRenderAttr("value", searchProp.value)} class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Search"></div></div><div><select class="form-select block w-full rounded-md border border-gray-200 bg-gray-50 py-2 pr-8 pl-4 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">Select Language</option><option value="fr">${ssrInterpolate(_ctx.$t("fr"))}</option><option value="en">${ssrInterpolate(_ctx.$t("en"))}</option><option value="es">${ssrInterpolate(_ctx.$t("es"))}</option><option value="pt">${ssrInterpolate(_ctx.$t("pt"))}</option></select></div></div>`);
        if (unref(filteredPropAu).length != 0) {
          _push(`<div class="grid gap-8 px-10 py-8 lg:grid-cols-2"><!--[-->`);
          ssrRenderList(unref(filteredPropAu), (post) => {
            _push(`<div class="dark:bg-gray-800 mx-auto flex max-w-md overflow-hidden rounded-lg bg-white shadow-lg"><div class="w-1/3 overflow-hidden bg-cover">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: { id: post.id }
              }
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(unref(BookOpenIcon), { class: "h-full w-full text-gray-400" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(unref(BookOpenIcon), { class: "h-full w-full text-gray-400" })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="w-2/3 p-4 md:p-4">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: { id: post.id }
              },
              class: "dark:text-white text-2xl font-bold text-gray-800"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "...")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "..."), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<p class="dark:text-gray-400 mt-2 text-sm text-gray-600">${ssrInterpolate(post.content.substring(0, 19) + "...")}</p><div class="item-center mt-2 flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4 text-gray-500" }, null, _parent));
            _push(`<a href="#" class="text-xs hover:text-primary-blue">${ssrInterpolate(post.comments)}</a></div><div class="item-center mt-3 flex justify-between">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: { id: post.id }
              },
              class: "text-sm font-bold text-primary-blue hover:underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Read More`);
                } else {
                  return [
                    createTextVNode("Read More")
                  ];
                }
              }),
              _: 2
            }, _parent));
            if (unref(user).id == unref(loginUser).id) {
              _push(`<div class="flex space-x-2">`);
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "edit.post",
                  params: {
                    id: post.id,
                    type: post.type
                  }
                }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-primary-blue hover:text-gray-400" }, null, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-primary-blue hover:text-gray-400" })
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<button class="dark:text-blue-500 text-red-600 hover:underline">`);
              _push(ssrRenderComponent(unref(TrashIcon), { class: "h-5 w-5 cursor-pointer text-red-400 hover:text-red-700" }, null, _parent));
              _push(`</button></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
          _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
          _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
        }
        _push(`</div>`);
      } else if (open.comment && loading.value == 0) {
        _push(`<div class="py-8 lg:px-16"><div class="p-4"><label for="table-search" class="sr-only">Search</label><div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search"${ssrRenderAttr("value", searchComment.value)} class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Search"></div></div><div class="overflow-x-auto"><table class="dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"><thead class="dark:bg-gray-700 bg-gray-100"><tr><th scope="col" class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700">${ssrInterpolate(_ctx.$t("articles"))} &amp; ${ssrInterpolate(_ctx.$t("propau"))}</th><th scope="col" class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700">${ssrInterpolate(_ctx.$t("comments"))}</th>`);
        if (unref(user).id == unref(loginUser).id) {
          _push(`<th scope="col" class="p-4"><span class="sr-only">Edit</span></th>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr></thead>`);
        if (unref(filteredComment).length != 0) {
          _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><!--[-->`);
          ssrRenderList(unref(filteredComment), (comment) => {
            _push(`<tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: { id: comment.post.id }
              },
              class: "hover:underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(comment.post.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(comment.post.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td><td class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">`);
            if (modifyComment.id == "" || modifyComment.id != comment.id) {
              _push(`<span>${ssrInterpolate(comment.content)}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (modifyComment.id != "" && modifyComment.id == comment.id) {
              _push(`<form><textarea required type="text" id="pt" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(modifyComment.content)}</textarea><div class="mt-6 flex justify-end"><button type="submit" class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none">${ssrInterpolate(_ctx.$t("save"))}</button></div></form>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</td>`);
            if (unref(user).id == unref(loginUser).id) {
              _push(`<td class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"><div class="flex"><button class="dark:text-blue-500 text-primary-blue hover:underline">`);
              _push(ssrRenderComponent(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-blue-400 hover:text-blue-700" }, null, _parent));
              _push(`</button><button class="dark:text-blue-500 ml-3 text-red-600 hover:underline">`);
              _push(ssrRenderComponent(unref(TrashIcon), { class: "h-5 w-5 cursor-pointer text-red-400 hover:text-red-700" }, null, _parent));
              _push(`</button></div></td>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</tr>`);
          });
          _push(`<!--]--></tbody>`);
        } else {
          _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td colspan="5" class="dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium text-gray-900"><div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
          _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
          _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div></td></tr></tbody>`);
        }
        _push(`</table></div></div>`);
      } else if (open.job && loading.value == 0) {
        _push(`<div class="py-8 lg:px-16"><div class="flex flex-col-reverse items-center justify-between px-6 py-2 lg:flex-row"><div class="p-4"><label for="table-search" class="sr-only">Search</label><div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search"${ssrRenderAttr("value", searchJob.value)} class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Search"></div></div>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: {
            name: "add.job"
          },
          class: "mb-2 flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white lg:mb-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(PlusCircleIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
              _push2(`<p class="text-base leading-4"${_scopeId}>${ssrInterpolate(_ctx.$t("add"))} Job</p>`);
            } else {
              return [
                createVNode(unref(PlusCircleIcon), { class: "h-6 w-6" }),
                createVNode("p", { class: "text-base leading-4" }, toDisplayString(_ctx.$t("add")) + " Job", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="overflow-x-auto"><table class="dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"><thead class="dark:bg-gray-700 bg-gray-100"><tr><th scope="col" class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700">${ssrInterpolate(_ctx.$t("my-jobs"))}</th><th scope="col" class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700">${ssrInterpolate(_ctx.$t("status"))}</th>`);
        if (unref(user).id == unref(loginUser).id) {
          _push(`<th scope="col" class="p-4"><span class="sr-only">Edit</span></th>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr></thead>`);
        if (unref(filteredJob).length != 0) {
          _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><!--[-->`);
          ssrRenderList(unref(filteredJob), (jobOffer) => {
            _push(`<tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.job",
                params: { id: jobOffer.id }
              },
              class: "hover:underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(jobOffer.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(jobOffer.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td><td class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">`);
            if (jobOffer.status == 3) {
              _push(`<span class="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">${ssrInterpolate(_ctx.$t("provided"))}</span>`);
            } else if (jobOffer.status == 1) {
              _push(`<span class="rounded-full bg-yellow-50 px-2 py-1 text-xs text-yellow-700">${ssrInterpolate(_ctx.$t("in-progress"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</td>`);
            if (unref(user).id == unref(loginUser).id) {
              _push(`<td class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"><div class="flex">`);
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "edit.job",
                  params: { id: jobOffer.id }
                },
                class: "dark:text-blue-500 text-primary-blue hover:underline"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(_ctx.$t("modify"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("modify")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<button class="dark:text-blue-500 ml-3 text-red-600 hover:underline"><span>${ssrInterpolate(_ctx.$t("delete"))}</span></button><button class="dark:text-blue-500 relative ml-3 text-purple-600 hover:underline">`);
              if (jobOffer.status != 3) {
                _push(`<span>${ssrInterpolate(_ctx.$t("mark-provided"))}</span>`);
              } else if (jobOffer.status != 1) {
                _push(`<span>${ssrInterpolate(_ctx.$t("mark-progress"))}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</button>`);
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "add.job",
                  params: {
                    duplicate: JSON.stringify(jobOffer)
                  }
                },
                class: "dark:text-blue-500 relative ml-3 text-pink-600 hover:underline"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("duplicate"))}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(_ctx.$t("duplicate")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div></td>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</tr>`);
          });
          _push(`<!--]--></tbody>`);
        } else {
          _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td colspan="3" class="dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium text-gray-900"><div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
          _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
          _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div></td></tr></tbody>`);
        }
        _push(`</table></div></div>`);
      } else if (open.ads && loading.value == 0) {
        _push(`<div class="py-8 lg:px-16"><div class="flex flex-col-reverse items-center justify-between px-6 py-2 lg:flex-row"><div><label for="table-search" class="sr-only">Search</label><div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search"${ssrRenderAttr("value", searchAds.value)} class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Search"></div></div>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: {
            name: "add.ads"
          },
          class: "mb-2 flex items-center space-x-3 rounded bg-primary-blue px-3 py-2 text-white lg:mb-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(PlusCircleIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
              _push2(`<p class="text-base leading-4"${_scopeId}>${ssrInterpolate(_ctx.$t("add"))} ${ssrInterpolate(_ctx.$t("ads"))}</p>`);
            } else {
              return [
                createVNode(unref(PlusCircleIcon), { class: "h-6 w-6" }),
                createVNode("p", { class: "text-base leading-4" }, toDisplayString(_ctx.$t("add")) + " " + toDisplayString(_ctx.$t("ads")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="overflow-x-auto"><table class="dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"><thead class="dark:bg-gray-700 bg-gray-100"><tr><th scope="col" class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700">${ssrInterpolate(_ctx.$t("my-ads"))}</th>`);
        if (unref(user).id == unref(loginUser).id) {
          _push(`<th scope="col" class="p-4"><span class="sr-only">Edit</span></th>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr></thead>`);
        if (unref(filteredAnnouncement).length != 0) {
          _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><!--[-->`);
          ssrRenderList(unref(filteredAnnouncement), (announcement) => {
            _push(`<tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.ads",
                params: { id: announcement.id }
              },
              class: "hover:underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(announcement.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(announcement.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td>`);
            if (unref(user).id == unref(loginUser).id) {
              _push(`<td class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"><div class="flex">`);
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "edit.ads",
                  params: { id: announcement.id }
                },
                class: "dark:text-blue-500 text-primary-blue hover:underline"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-blue-400 hover:text-blue-700" }, null, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(unref(PencilAltIcon), { class: "h-5 w-5 cursor-pointer text-blue-400 hover:text-blue-700" })
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<button class="dark:text-blue-500 ml-3 text-red-600 hover:underline">`);
              _push(ssrRenderComponent(unref(TrashIcon), { class: "h-5 w-5 cursor-pointer text-red-400 hover:text-red-700" }, null, _parent));
              _push(`</button></div></td>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</tr>`);
          });
          _push(`<!--]--></tbody>`);
        } else {
          _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td colspan="5" class="dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium text-gray-900"><div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
          _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
          _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div></td></tr></tbody>`);
        }
        _push(`</table></div></div>`);
      } else if (open.edit && loading.value == 0) {
        _push(`<div class="py-8 lg:px-16"><h1 class="text-center text-2xl font-bold text-gray-500">${ssrInterpolate(_ctx.$t("edit"))} ${ssrInterpolate(_ctx.$t("your"))} ${ssrInterpolate(_ctx.$t("profile"))}</h1>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          user: unref(user),
          detail: detail.value,
          legalStatuses: unref(legalStatuses),
          languages: unref(languages),
          countries: unref(countries),
          activityAreas: unref(activityAreas),
          businessSizes: unref(businessSizes),
          businessTypes: unref(businessTypes)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
