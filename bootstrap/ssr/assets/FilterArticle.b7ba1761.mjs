import { ref, onMounted, reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const _sfc_main = {
  __name: "FilterArticle",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { locale } = useI18n();
    const continents = ref([]);
    const zones = ref([]);
    const countries = ref([]);
    const ministries = ref([]);
    const zoneFiltered = ref([]);
    const countryFiltered = ref([]);
    onMounted(async () => {
      let response = await axios.get("/api/continents");
      continents.value = response.data.data;
      response = await axios.get("/api/zones");
      zones.value = response.data.data;
      response = await axios.get("/api/countries");
      countries.value = response.data.data;
      response = await axios.get("/api/ministries");
      ministries.value = response.data.data;
    });
    const filter = reactive({
      country: "",
      continent: "",
      ministry: "",
      zone: "",
      lang: "",
      keywords: "",
      type: "article"
    });
    onMounted(async () => {
      filter.lang = localStorage.lang ? localStorage.lang : locale.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-0 w-full bg-white" }, _attrs))}><h1 class="inline-block bg-primary-blue px-2 py-1 text-white">${ssrInterpolate(_ctx.$t("filter-article"))}</h1><form><div class="space-y-2 border-t-2 border-primary-blue p-4 text-sm"><div><label class="text-gray-500">${ssrInterpolate(_ctx.$t("language"))}</label><select class="form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="fr">${ssrInterpolate(_ctx.$t("fr"))}</option><option value="en">${ssrInterpolate(_ctx.$t("en"))}</option><option value="es">${ssrInterpolate(_ctx.$t("es"))}</option><option value="pt">${ssrInterpolate(_ctx.$t("pt"))}</option></select></div><div><label class="text-gray-500">${ssrInterpolate(_ctx.$t("key-words"))}</label><input type="text"${ssrRenderAttr("value", filter.keywords)}${ssrRenderAttr("placeholder", _ctx.$t("key-words"))} class="form-input mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"></div><div><label class="text-gray-500">${ssrInterpolate(_ctx.$t("continent"))}</label><select class="form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
      ssrRenderList(continents.value, (continent) => {
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
      _push(`<!--]--></select></div><div><label class="text-gray-500">${ssrInterpolate(_ctx.$t("zoned"))}</label><select class="form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="">--------------</option>`);
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
      _push(`</select></div><div><label class="text-gray-500">${ssrInterpolate(_ctx.$t("country"))}</label><select class="form-select mt-2 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="">--------------</option>`);
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
      _push(`</select></div><div><label class="text-gray-500">${ssrInterpolate(_ctx.$t("ministry"))}</label><select class="form-select mt-1 block w-full border-gray-300 px-3 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
      ssrRenderList(ministries.value, (ministry) => {
        _push(`<option${ssrRenderAttr("value", ministry.id)}>`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(ministry.name_en)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(ministry.name_fr)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(ministry.name_es)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(ministry.name_pt)}</span>`);
        }
        _push(`</option>`);
      });
      _push(`<!--]--></select></div><div><button type="button" class="mt-3 w-full bg-primary-blue px-8 py-2 text-lg text-white">${ssrInterpolate(_ctx.$t("filter"))}</button></div></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/FilterArticle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
