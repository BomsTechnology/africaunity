import { mergeProps, unref, useSSRContext, ref, onMounted, onUnmounted, reactive, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { PhotographIcon, PlusCircleIcon, SpeakerphoneIcon, UserIcon, EmojiSadIcon } from "@heroicons/vue/solid";
import { u as useAnnouncements } from "./announcementServices.99c189fe.mjs";
import { u as useUniversities } from "./universityServices.b8f493bb.mjs";
import { u as useCategoryAnnouncements } from "./categoryAnnouncementServices.08a50fb5.mjs";
import { u as useContinents } from "./continentServices.22a4cba4.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { u as useCities } from "./cityServices.162b2697.mjs";
import { u as useZones } from "./zoneServices.1a55a02b.mjs";
import { _ as _sfc_main$2 } from "../app.mjs";
import "axios";
import "vue-router";
import "lodash";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main$1 = {
  __name: "Ads",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [1, 2, 3, 4];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse" }, _attrs))}><div class="grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-3"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="rounded bg-gray-100 shadow"><div class="mx-auto h-44 w-32 overflow-hidden">`);
        _push(ssrRenderComponent(unref(PhotographIcon), { class: "h-full w-full text-gray-200" }, null, _parent));
        _push(`</div><div class="flex flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="flex w-full items-center justify-between"><div class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/skeleton/Ads.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Announcement",
  __ssrInlineRender: true,
  setup(__props) {
    const { universities, getAllUniversities } = useUniversities();
    const {
      announcements,
      getAnnouncements,
      loading,
      page,
      isAll,
      filterAnnouncements
    } = useAnnouncements();
    const { continents, getContinents } = useContinents();
    const { countries, getCountries } = useCountries();
    const { categoryAnnouncements, getCategoryAnnouncements } = useCategoryAnnouncements();
    const { zones, getZones } = useZones();
    const { cities, getCities } = useCities();
    const user = localStorage.user ? JSON.parse(localStorage.user) : "";
    const zoneFilteredA = ref([]);
    const countryFilteredA = ref([]);
    const cityfilteredA = ref([]);
    const universityfilteredA = ref([]);
    const adsContainer = ref(null);
    const toGet = ref(true);
    onMounted(async () => {
      window.addEventListener("scroll", handleScroll);
      await getAnnouncements();
      await getContinents();
      await getZones();
      await getCountries();
      await getCategoryAnnouncements();
      await getCities();
      getAllUniversities();
    });
    onUnmounted(async () => {
      page.value = 1;
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = async (e) => {
      if (adsContainer.value) {
        let element = adsContainer.value;
        if (element.getBoundingClientRect().bottom < window.innerHeight && toGet.value && !isAll.value && filterAds.searchKey == "" && filterAds.category == "" && filterAds.country == "" && filterAds.continent == "" && filterAds.university == "" && filterAds.city == "" && filterAds.zone == "") {
          toGet.value = false;
          page.value++;
          await getAnnouncements();
          toGet.value = true;
        }
      }
    };
    const filterAds = reactive({
      searchKey: "",
      category: "",
      country: "",
      continent: "",
      university: "",
      city: "",
      zone: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white xl:w-[90%]" }, _attrs))}><h1 class="py-2 text-center text-5xl font-bold capitalize text-primary-blue">${ssrInterpolate(_ctx.$t("ads"))}</h1><div class="py-8 lg:px-16"><div class="mt-4 grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-3"><div class="text-xs lg:text-sm"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("key-words"))}</label><input type="text"${ssrRenderAttr("value", filterAds.searchKey)} class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("category"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
      ssrRenderList(unref(categoryAnnouncements), (category_announcement) => {
        _push(`<option${ssrRenderAttr("value", category_announcement.id)}>${ssrInterpolate(category_announcement.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("continent"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
      ssrRenderList(unref(continents), (continent) => {
        _push(`<option${ssrRenderAttr("value", continent.id)}>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(continent.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(continent.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(continent.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(continent.name_pt)}</span>`);
        }
        _push(`</option>`);
      });
      _push(`<!--]--></select></div><div class="text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("zoned"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option>`);
      if (zoneFilteredA.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(zoneFilteredA.value, (country) => {
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
        _push(`<!--]-->`);
      } else {
        _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("continent"))}</option>`);
      }
      _push(`</select></div><div class="text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("country"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option>`);
      if (countryFilteredA.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(countryFilteredA.value, (country) => {
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
        _push(`<!--]-->`);
      } else {
        _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("zoned"))}</option>`);
      }
      _push(`</select></div><div class="text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("city"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option>`);
      if (cityfilteredA.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(cityfilteredA.value, (city) => {
          _push(`<option${ssrRenderAttr("value", city.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(city.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(city.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(city.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(city.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("country"))}</option>`);
      }
      _push(`</select></div><div class="divSelect2 text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("university"))}</label>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: filterAds.university,
        "onUpdate:modelValue": ($event) => filterAds.university = $event,
        data: universityfilteredA.value,
        placeholder: "Select University",
        required: false,
        resetField: true,
        className: "w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
      }, null, _parent));
      _push(`</div><div class="flex items-end text-xs lg:text-sm"><button type="button" class="w-full rounded-md bg-primary-blue px-4 py-2.5 text-white">${ssrInterpolate(_ctx.$t("search"))}</button></div></div><div class="bg-primary-blue p-2 shadow"></div><div class="flex justify-end py-4">`);
      if (unref(user).type == "particular" || unref(user).type == "admin") {
        _push(ssrRenderComponent(_component_router_link, {
          to: {
            name: "add.ads"
          },
          class: "flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
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
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="py-8">`);
      if (unref(loading) == 3) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div>`);
      } else if (unref(announcements).length != 0) {
        _push(`<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(announcements), (announcement) => {
          _push(`<div class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-lg">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.ads",
              params: { id: announcement.id }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (announcement.image) {
                  _push2(`<img class="mt-2 h-48 w-full rounded-t-lg object-cover"${ssrRenderAttr("src", announcement.image)}${ssrRenderAttr("alt", announcement.title)}${_scopeId}>`);
                } else {
                  _push2(`<div class="mt-2 h-48 w-full overflow-hidden rounded-t-lg bg-gray-50 py-10"${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(SpeakerphoneIcon), { class: "h-full w-full text-gray-500" }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
              } else {
                return [
                  announcement.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    class: "mt-2 h-48 w-full rounded-t-lg object-cover",
                    src: announcement.image,
                    alt: announcement.title
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mt-2 h-48 w-full overflow-hidden rounded-t-lg bg-gray-50 py-10"
                  }, [
                    createVNode(unref(SpeakerphoneIcon), { class: "h-full w-full text-gray-500" })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="space-y-2 px-4 py-2"><a href="#" class="mt-2 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white">${ssrInterpolate(announcement.category.name.length <= 30 ? announcement.category.name : announcement.category.name.substring(
            0,
            25
          ) + "...")}</a>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.ads",
              params: { id: announcement.id }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h1 class="text-2xl font-bold capitalize text-gray-800 hover:underline"${_scopeId}>${ssrInterpolate(announcement.title.length <= 20 ? announcement.title : announcement.title.substring(
                  0,
                  19
                ) + "...")}</h1>`);
              } else {
                return [
                  createVNode("h1", { class: "text-2xl font-bold capitalize text-gray-800 hover:underline" }, toDisplayString(announcement.title.length <= 20 ? announcement.title : announcement.title.substring(
                    0,
                    19
                  ) + "..."), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="dark:text-gray-400 mt-2 text-sm text-gray-600">${ssrInterpolate(announcement.description.substring(0, 19) + "...")}</p></div><div class="flex h-10 items-center justify-between bg-gray-900 px-4 py-2">`);
          if (announcement.price && announcement.price != "null") {
            _push(`<h1 class="text-lg font-bold text-white">${ssrInterpolate(announcement.price)} ${ssrInterpolate(announcement.currency.symbol)}</h1>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex items-center space-x-2 text-xs text-white"><div class="flex space-x-1">`);
          _push(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "compte",
              params: {
                name: announcement.user.firstname,
                id: announcement.user.id
              }
            },
            href: "#",
            class: "hover:text-primary-blue"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(announcement.user.firstname)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(announcement.user.firstname), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(announcements).length == 0 && unref(loading) != 1) {
        _push(`<div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
        _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
        _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Announcement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
