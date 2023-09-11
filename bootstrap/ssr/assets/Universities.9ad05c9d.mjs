import { mergeProps, unref, useSSRContext, ref, onMounted, onUnmounted, reactive, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { PhotographIcon, EmojiSadIcon } from "@heroicons/vue/solid";
import { u as useUniversities } from "./universityServices.b8f493bb.mjs";
import { u as useContinents } from "./continentServices.22a4cba4.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { u as useCities } from "./cityServices.162b2697.mjs";
import { u as useZones } from "./zoneServices.1a55a02b.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-router";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main$1 = {
  __name: "University",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [1, 2, 3, 4, 5, 6];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse" }, _attrs))}><div class="grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="h-80 rounded bg-gray-100 shadow"><div class="mx-auto h-44 w-32 overflow-hidden">`);
        _push(ssrRenderComponent(unref(PhotographIcon), { class: "h-full w-full text-gray-200" }, null, _parent));
        _push(`</div><div class="flex flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/skeleton/University.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Universities",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      universities,
      getUniversities,
      loading,
      page,
      isAll,
      filterUniversities
    } = useUniversities();
    const { continents, getContinents } = useContinents();
    const { countries, getCountries } = useCountries();
    const { zones, getZones } = useZones();
    const { cities, getCities } = useCities();
    const zoneFilteredU = ref([]);
    const countryFilteredU = ref([]);
    const cityfilteredU = ref([]);
    const universityContainer = ref(null);
    const toGet = ref(true);
    onMounted(async () => {
      window.addEventListener("scroll", handleScroll);
      await getUniversities();
      await getContinents();
      await getZones();
      await getCountries();
      await getCities();
    });
    onUnmounted(async () => {
      page.value = 1;
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = async (e) => {
      if (universityContainer.value) {
        let element = universityContainer.value;
        if (element.getBoundingClientRect().bottom < window.innerHeight && toGet.value && !isAll.value && filterUniversity.country == "" && filterUniversity.continent == "" && filterUniversity.city == "" && filterUniversity.zone == "" && filterUniversity.searchKey == "") {
          toGet.value = false;
          page.value++;
          await getUniversities();
          toGet.value = true;
        }
      }
    };
    const filterUniversity = reactive({
      country: "",
      continent: "",
      city: "",
      zone: "",
      searchKey: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white xl:w-[90%]" }, _attrs))}><h1 class="py-2 text-center text-5xl font-bold capitalize text-primary-blue">${ssrInterpolate(_ctx.$t("univerities"))}</h1><div class="py-8 lg:px-16"><div class="grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-4"><div class="text-xs lg:text-sm"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("key-words"))}</label><input type="text"${ssrRenderAttr("value", filterUniversity.searchKey)} class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("continent"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
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
      if (zoneFilteredU.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(zoneFilteredU.value, (zone) => {
          _push(`<option${ssrRenderAttr("value", zone.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(zone.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(zone.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(zone.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(zone.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("continent"))}</option>`);
      }
      _push(`</select></div><div class="text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("country"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option>`);
      if (countryFilteredU.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(countryFilteredU.value, (country) => {
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
      if (cityfilteredU.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(cityfilteredU.value, (city) => {
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
      _push(`</select></div><div class="flex items-end text-xs lg:text-sm"><button type="button" class="w-full rounded-md bg-primary-blue px-4 py-2.5 text-white">${ssrInterpolate(_ctx.$t("search"))}</button></div></div><div class="bg-primary-blue p-2 shadow"></div>`);
      if (unref(loading) == 3) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div>`);
      } else if (unref(universities).length != 0) {
        _push(`<div class="grid grid-cols-1 gap-8 px-10 py-8 md:grid-cols-2 lg:grid-cols-4"><!--[-->`);
        ssrRenderList(unref(universities), (university) => {
          _push(`<div class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.university",
              params: { id: university.id }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="h-44 w-full object-cover"${ssrRenderAttr("src", university.image)} alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "h-44 w-full object-cover",
                    src: university.image,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="p-6"><div>`);
          if (university.city) {
            _push(`<a href="#" class="rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white">`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(university.city.name_en + "-" + university.country.code_iso)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(university.city.name_fr + "-" + university.country.code_iso)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(university.city.name_es + "-" + university.country.code_iso)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(university.country.name_pt + "-" + university.country.code_iso)}</span>`);
            }
            _push(`</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.university",
              params: { id: university.id }
            },
            href: "#",
            class: "dark:text-white mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(university.name.length <= 30 ? university.name : university.name.substring(0, 27) + "...")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(university.name.length <= 30 ? university.name : university.name.substring(0, 27) + "..."), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="mt-4 flex items-center justify-between text-sm">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.university",
              params: { id: university.id }
            },
            class: "dark:text-blue-400 text-blue-600 hover:underline"
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
          _push(`</div></div></div>`);
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
      if (unref(universities).length == 0 && unref(loading) != 1) {
        _push(`<div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
        _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
        _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Universities.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
