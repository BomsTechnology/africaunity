import { mergeProps, unref, useSSRContext, ref, onMounted, onUnmounted, reactive, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { PhotographIcon, ChevronUpIcon, ChevronDownIcon, PlusCircleIcon, OfficeBuildingIcon, LocationMarkerIcon, CashIcon, EmojiSadIcon } from "@heroicons/vue/solid";
import { u as useJobOffers } from "./jobOfferServices.59b2001d.mjs";
import { u as useCurrencies } from "./currencyServices.228bdf7b.mjs";
import { u as useActivityAreas } from "./activityAreaServices.104ad1e7.mjs";
import { u as useLevelStudies, a as useOfferTypes, b as useWorkModes, c as useYearExperiences } from "./yearExperienceServices.04c39224.mjs";
import { u as useLanguages } from "./languageServices.c378cfc4.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { u as useZones } from "./zoneServices.1a55a02b.mjs";
import { u as useContinents } from "./continentServices.22a4cba4.mjs";
import { u as useCities } from "./cityServices.162b2697.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-router";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main$1 = {
  __name: "Job",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [1, 2, 3, 4];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse" }, _attrs))}><div class="space-y-3 py-8"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="flex items-center rounded bg-gray-100 shadow"><div class="mx-auto h-16 w-16 overflow-hidden">`);
        _push(ssrRenderComponent(unref(PhotographIcon), { class: "h-full w-full text-gray-200" }, null, _parent));
        _push(`</div><div class="flex w-5/6 flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="flex w-full items-center justify-between"><div class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/skeleton/Job.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Job",
  __ssrInlineRender: true,
  setup(__props) {
    const { currencies, getCurrencies } = useCurrencies();
    const { languages, getLanguages } = useLanguages();
    const { activityAreas, getActivityAreas } = useActivityAreas();
    const { levelStudies, getLevelStudies } = useLevelStudies();
    const { offerTypes, getOfferTypes } = useOfferTypes();
    const { workModes, getWorkModes } = useWorkModes();
    const { yearExperiences, getYearExperiences } = useYearExperiences();
    const { countries, getCountries } = useCountries();
    const { zones, getZones } = useZones();
    const { continents, getContinents } = useContinents();
    const { cities, getCities } = useCities();
    const { jobOffers, filterJobs, getJobOffersFront, loading, isAll, page } = useJobOffers();
    const user = localStorage.user ? JSON.parse(localStorage.user) : "";
    const zoneFiltered = ref([]);
    const countryFiltered = ref([]);
    const cityfiltered = ref([]);
    const jobContainer = ref(null);
    const toGet = ref(true);
    onMounted(async () => {
      window.addEventListener("scroll", handleScroll);
      await getJobOffersFront();
      await getCurrencies();
      await getContinents();
      await getZones();
      await getYearExperiences();
      await getWorkModes();
      await getLevelStudies();
      await getOfferTypes();
      await getActivityAreas();
      await getLanguages();
      await getCountries();
      await getCities();
    });
    onUnmounted(async () => {
      page.value = 1;
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = async (e) => {
      if (jobContainer.value) {
        let element = jobContainer.value;
        if (element.getBoundingClientRect().bottom < window.innerHeight && toGet.value && !isAll.value && filterJob.country == "" && filterJob.continent == "" && filterJob.zone == "" && filterJob.activity_area == "" && filterJob.city == "" && filterJob.work_mode == "" && filterJob.offer_type == "" && filterJob.language == "" && filterJob.year_experience == "" && filterJob.level_study == "" && filterJob.min_price == "" && filterJob.currency == "") {
          toGet.value = false;
          page.value++;
          await getJobOffersFront();
          toGet.value = true;
        }
      }
    };
    const showFilter = ref(true);
    const filterJob = reactive({
      country: "",
      continent: "",
      zone: "",
      activity_area: "",
      city: "",
      work_mode: "",
      offer_type: "",
      language: "",
      year_experience: "",
      level_study: "",
      min_price: "",
      currency: "",
      searchKey: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full bg-white py-4 xl:w-[90%]" }, _attrs))}><h1 class="py-4 text-center text-5xl font-bold capitalize text-primary-blue">${ssrInterpolate(_ctx.$t("jobs"))}</h1><div class="py-8 px-6 lg:px-16"><div class="flex justify-end px-6 py-4"><button class="flex items-center justify-start text-sm text-primary-blue hover:underline">`);
      if (showFilter.value) {
        _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "h-5 w-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (showFilter.value) {
        _push(`<span>${ssrInterpolate(_ctx.$t("hide-filter"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (!showFilter.value) {
        _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-5 w-5" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!showFilter.value) {
        _push(`<span>${ssrInterpolate(_ctx.$t("show-filter"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div>`);
      if (showFilter.value) {
        _push(`<div class="space-y-3 bg-gray-100 px-10 pb-8 pt-4 text-xs shadow lg:text-sm"><div class="grid grid-cols-1 gap-2 lg:grid-cols-2"><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("key-words"))}</label><input type="text"${ssrRenderAttr("value", filterJob.searchKey)} class="form-input mt-1 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("activity-area"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
        ssrRenderList(unref(activityAreas), (activity) => {
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
        _push(`<!--]--></select></div></div><div class="grid grid-cols-1 gap-2 lg:grid-cols-3"><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("work-mode"))}</label><select class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
        ssrRenderList(unref(workModes), (workMode) => {
          _push(`<option${ssrRenderAttr("value", workMode.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(workMode.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(workMode.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(workMode.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(workMode.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("offer-type"))}</label><select class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
        ssrRenderList(unref(offerTypes), (offerType) => {
          _push(`<option${ssrRenderAttr("value", offerType.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(offerType.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(offerType.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(offerType.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(offerType.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("language"))}</label><select class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
        ssrRenderList(unref(languages), (language) => {
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
        _push(`<!--]--></select></div></div><div class="grid grid-cols-1 gap-2 lg:grid-cols-2"><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("y-experience"))}</label><select class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
        ssrRenderList(unref(yearExperiences), (yearExperience) => {
          _push(`<option${ssrRenderAttr("value", yearExperience.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(yearExperience.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(yearExperience.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(yearExperience.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(yearExperience.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("level-study"))}</label><select class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
        ssrRenderList(unref(levelStudies), (levelStudy) => {
          _push(`<option${ssrRenderAttr("value", levelStudy.id)}>`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(levelStudy.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(levelStudy.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(levelStudy.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(levelStudy.name_pt)}</span>`);
          }
          _push(`</option>`);
        });
        _push(`<!--]--></select></div></div><div class="grid grid-cols-1 gap-2 lg:grid-cols-4"><div class=""><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("continent"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
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
        _push(`<!--]--></select></div><div class=""><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("zoned"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option>`);
        if (zoneFiltered.value.length != 0) {
          _push(`<!--[-->`);
          ssrRenderList(zoneFiltered.value, (zone) => {
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
        _push(`</select></div><div class=""><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("country"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option>`);
        if (countryFiltered.value.length != 0) {
          _push(`<!--[-->`);
          ssrRenderList(countryFiltered.value, (country) => {
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
        _push(`</select></div><div class=""><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("city"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option>`);
        if (cityfiltered.value.length != 0) {
          _push(`<!--[-->`);
          ssrRenderList(cityfiltered.value, (city) => {
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
        _push(`</select></div></div><div class="grid grid-cols-1 gap-2 lg:grid-cols-2"><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("price"))}</label><input${ssrRenderAttr("value", filterJob.min_price)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("currency"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
        ssrRenderList(unref(currencies), (currency) => {
          _push(`<option${ssrRenderAttr("value", currency.id)}>${ssrInterpolate(currency.symbol + " " + currency.name)}</option>`);
        });
        _push(`<!--]--></select></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showFilter.value) {
        _push(`<div class="bg-primary-blue p-2 shadow"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(user).type != "particular" && unref(user).type != "business1") {
        _push(`<div class="flex justify-end px-6 py-4">`);
        _push(ssrRenderComponent(_component_router_link, {
          to: {
            name: "add.job"
          },
          class: "flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 3) {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else if (unref(jobOffers).length != 0) {
        _push(`<div class="text-lg"><!--[-->`);
        ssrRenderList(unref(jobOffers), (jobOffer) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.job",
              params: { id: jobOffer.id }
            },
            class: "flex items-center justify-between border-b border-gray-200 px-2 py-4 hover:bg-gray-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center space-x-4"${_scopeId}><div class="hidden lg:block"${_scopeId}>`);
                if (jobOffer.company_logo) {
                  _push2(`<img${ssrRenderAttr("src", jobOffer.company_logo)} alt="" class="h-16 w-16 object-cover"${_scopeId}>`);
                } else {
                  _push2(ssrRenderComponent(unref(OfficeBuildingIcon), { class: "h-16 w-16 text-gray-500" }, null, _parent2, _scopeId));
                }
                _push2(`</div><div${_scopeId}><h1 class="capitalize"${_scopeId}>${ssrInterpolate(jobOffer.title)}</h1><h2 class="font-bold capitalize text-gray-500"${_scopeId}>${ssrInterpolate(jobOffer.company_name)}</h2></div><div class="hidden justify-start space-x-4 font-light capitalize text-gray-500 lg:flex"${_scopeId}><h1 class="flex items-center justify-center space-x-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(LocationMarkerIcon), { class: "h-5 w-5" }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.location)}</span></h1><h2 class="flex items-center justify-start space-x-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(CashIcon), { class: "h-5 w-5" }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.min_price + jobOffer.currency.symbol)} - ${ssrInterpolate(jobOffer.max_price + jobOffer.currency.symbol)}</span></h2></div></div><div class=""${_scopeId}><h2 class="font-bold capitalize text-primary-blue"${_scopeId}>`);
                if (_ctx.$i18n.locale == "en") {
                  _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_en)}</span>`);
                } else if (_ctx.$i18n.locale == "fr") {
                  _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_fr)}</span>`);
                } else if (_ctx.$i18n.locale == "es") {
                  _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_es)}</span>`);
                } else {
                  _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_pt)}</span>`);
                }
                _push2(`</h2><h1 class="capitalize"${_scopeId}> Publi\xE9 le: ${ssrInterpolate(new Date(jobOffer.date).toLocaleDateString(
                  "fr-FR",
                  {
                    day: "numeric",
                    year: "numeric",
                    month: "long"
                  }
                ))}</h1></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center space-x-4" }, [
                    createVNode("div", { class: "hidden lg:block" }, [
                      jobOffer.company_logo ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: jobOffer.company_logo,
                        alt: "",
                        class: "h-16 w-16 object-cover"
                      }, null, 8, ["src"])) : (openBlock(), createBlock(unref(OfficeBuildingIcon), {
                        key: 1,
                        class: "h-16 w-16 text-gray-500"
                      }))
                    ]),
                    createVNode("div", null, [
                      createVNode("h1", { class: "capitalize" }, toDisplayString(jobOffer.title), 1),
                      createVNode("h2", { class: "font-bold capitalize text-gray-500" }, toDisplayString(jobOffer.company_name), 1)
                    ]),
                    createVNode("div", { class: "hidden justify-start space-x-4 font-light capitalize text-gray-500 lg:flex" }, [
                      createVNode("h1", { class: "flex items-center justify-center space-x-2" }, [
                        createVNode(unref(LocationMarkerIcon), { class: "h-5 w-5" }),
                        createVNode("span", null, toDisplayString(jobOffer.location), 1)
                      ]),
                      createVNode("h2", { class: "flex items-center justify-start space-x-2" }, [
                        createVNode(unref(CashIcon), { class: "h-5 w-5" }),
                        createVNode("span", null, toDisplayString(jobOffer.min_price + jobOffer.currency.symbol) + " - " + toDisplayString(jobOffer.max_price + jobOffer.currency.symbol), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode("h2", { class: "font-bold capitalize text-primary-blue" }, [
                      _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(jobOffer.offer_type.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(jobOffer.offer_type.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(jobOffer.offer_type.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(jobOffer.offer_type.name_pt), 1))
                    ]),
                    createVNode("h1", { class: "capitalize" }, " Publi\xE9 le: " + toDisplayString(new Date(jobOffer.date).toLocaleDateString(
                      "fr-FR",
                      {
                        day: "numeric",
                        year: "numeric",
                        month: "long"
                      }
                    )), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(jobOffers).length == 0 && unref(loading) != 1) {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Job.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
