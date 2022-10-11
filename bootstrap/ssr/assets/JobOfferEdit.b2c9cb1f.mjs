import { ref, onMounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as useJobOffers } from "./jobOfferServices.59b2001d.mjs";
import { u as useCurrencies } from "./currencyServices.228bdf7b.mjs";
import { u as useActivityAreas } from "./activityAreaServices.104ad1e7.mjs";
import { u as useSizeCompanies, a as useWorkDepartments } from "./workDepartmentServices.fd8cf5de.mjs";
import { u as useLevelStudies, a as useOfferTypes, b as useWorkModes, c as useYearExperiences } from "./yearExperienceServices.04c39224.mjs";
import { u as useLanguages } from "./languageServices.c378cfc4.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { u as useZones } from "./zoneServices.1a55a02b.mjs";
import { u as useContinents } from "./continentServices.22a4cba4.mjs";
import { u as useCities } from "./cityServices.162b2697.mjs";
import { useRouter } from "vue-router";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-i18n";
import "@heroicons/vue/solid";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "JobOfferEdit",
  __ssrInlineRender: true,
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    ref(null);
    const { updateJobOffer, getJobOffer2, jobOffer, errors, loading } = useJobOffers();
    const { currencies, getCurrencies } = useCurrencies();
    const { languages, getLanguages } = useLanguages();
    const { activityAreas, getActivityAreas } = useActivityAreas();
    const { sizeCompanies, getSizeCompanies } = useSizeCompanies();
    const { levelStudies, getLevelStudies } = useLevelStudies();
    const { offerTypes, getOfferTypes } = useOfferTypes();
    const { workDepartments, getWorkDepartments } = useWorkDepartments();
    const { workModes, getWorkModes } = useWorkModes();
    const { yearExperiences, getYearExperiences } = useYearExperiences();
    const { countries, getCountries } = useCountries();
    const { zones, getZones } = useZones();
    const { continents, getContinents } = useContinents();
    const { cities, getCities } = useCities();
    const zoneFiltered = ref([]);
    const countryFiltered = ref([]);
    const cityfiltered = ref([]);
    onMounted(async () => {
      await getJobOffer2(props.id), getCurrencies(), await getContinents(), await getZones(), await getYearExperiences(), await getWorkModes(), await getWorkDepartments(), await getLevelStudies(), await getSizeCompanies(), await getOfferTypes(), await getActivityAreas(), await getLanguages(), await getCountries(), await getCities(), zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == jobOffer.value.continent_id;
      });
      countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == jobOffer.value.zone_id;
      });
      cityfiltered.value = cities.value.filter((city) => {
        return city.country_id == jobOffer.value.country_id;
      });
    });
    ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-auto w-full xl:mt-0 xl:p-4" }, _attrs))}><div class="z-0 w-full p-4"><div class="flex w-full justify-between bg-white px-8 py-5 shadow-lg"><h1 class="text-4xl font-bold capitalize text-primary-blue"> Edit JobOffer </h1></div><section class="mx-auto w-full bg-white p-6 shadow-md">`);
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
      _push(`<h2 class="text-md font-light text-gray-700"> Edit a JobOffer </h2><form id="jobOfferform" enctype="multipart/form-data"><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">Title</label><input required${ssrRenderAttr("value", unref(jobOffer).title)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Continent</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(continents), (continent) => {
        _push(`<option${ssrRenderAttr("value", continent.id)}>${ssrInterpolate(continent.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Zone</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
      if (zoneFiltered.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(zoneFiltered.value, (zone) => {
          _push(`<option${ssrRenderAttr("value", zone.id)}>${ssrInterpolate(zone.name_en)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("continent"))}</option>`);
      }
      _push(`</select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Country</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
      if (countryFiltered.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(countryFiltered.value, (country) => {
          _push(`<option${ssrRenderAttr("value", country.id)}>${ssrInterpolate(country.name_en)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("zoned"))}</option>`);
      }
      _push(`</select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">City</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
      if (cityfiltered.value.length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(cityfiltered.value, (city) => {
          _push(`<option${ssrRenderAttr("value", city.id)}>${ssrInterpolate(city.name_en)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option value="null"> Select ${ssrInterpolate(_ctx.$t("country"))}</option>`);
      }
      _push(`</select></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">Location</label><input required${ssrRenderAttr("value", unref(jobOffer).location)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Company Name</label><input required${ssrRenderAttr("value", unref(jobOffer).company_name)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Company Email</label><input required${ssrRenderAttr("value", unref(jobOffer).company_email)} type="email" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Company Website</label><input${ssrRenderAttr("value", unref(jobOffer).company_website)} type="url" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Company logo</label><input type="file" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-3"><div><label class="dark:text-gray-200 text-gray-700">Min Price</label><input required${ssrRenderAttr("value", unref(jobOffer).min_price)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700">Max Price</label><input required${ssrRenderAttr("value", unref(jobOffer).max_price)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Currency</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(currencies), (currency) => {
        _push(`<option${ssrRenderAttr("value", currency.id)}>${ssrInterpolate(currency.symbol + " " + currency.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="es">Languages</label><select required multiple class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(languages), (language) => {
        _push(`<option${ssrRenderAttr("value", language.id)}>${ssrInterpolate(language.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Size Company</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(sizeCompanies), (sizeCompany) => {
        _push(`<option${ssrRenderAttr("value", sizeCompany.id)}>${ssrInterpolate(sizeCompany.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Level Study</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(levelStudies), (levelStudy) => {
        _push(`<option${ssrRenderAttr("value", levelStudy.id)}>${ssrInterpolate(levelStudy.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="es">Activity Areas</label><select required multiple class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(activityAreas), (activityArea) => {
        _push(`<option${ssrRenderAttr("value", activityArea.id)}>${ssrInterpolate(activityArea.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Work Department</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(workDepartments), (workDepartment) => {
        _push(`<option${ssrRenderAttr("value", workDepartment.id)}>${ssrInterpolate(workDepartment.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Work Mode</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(workModes), (workMode) => {
        _push(`<option${ssrRenderAttr("value", workMode.id)}>${ssrInterpolate(workMode.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Offer Type</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(offerTypes), (offerType) => {
        _push(`<option${ssrRenderAttr("value", offerType.id)}>${ssrInterpolate(offerType.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Year Experience</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(yearExperiences), (yearExperience) => {
        _push(`<option${ssrRenderAttr("value", yearExperience.id)}>${ssrInterpolate(yearExperience.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="pt">Description</label><textarea required type="text" id="pt" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(unref(jobOffer).description)}</textarea></div></div><div class="mt-6 flex justify-end">`);
      if (unref(loading) == 0) {
        _push(`<button type="submit" class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"> Save </button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<button type="submit" disabled class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"><svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/jobOffer/JobOfferEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
