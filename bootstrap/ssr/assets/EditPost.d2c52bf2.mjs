import { ref, onMounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as usePosts } from "./postServices.0c30d0eb.mjs";
import { u as useContinents } from "./continentServices.22a4cba4.mjs";
import { u as useZones } from "./zoneServices.1a55a02b.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { u as useMinistries } from "./ministryServices.90c5c883.mjs";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "@heroicons/vue/solid";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "EditPost",
  __ssrInlineRender: true,
  props: {
    type: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    ref(null);
    useI18n();
    const types = ["article", "propau"];
    localStorage.user ? JSON.parse(localStorage.user) : "";
    const { updatePost, getPost, post, errors, loading } = usePosts();
    const { continents, getContinents } = useContinents();
    const { zones, getZones } = useZones();
    const { countries, getCountries } = useCountries();
    const { ministries, getMinistries } = useMinistries();
    const textarea = ref("");
    const nbClick = ref(0);
    const msgClick = ref("");
    const zoneFiltered = ref([]);
    const countryFiltered = ref([]);
    onMounted(async () => {
      await getPost(props.id);
      if (!types.includes(props.type)) {
        router.push({ name: "home" });
      }
      await getContinents();
      await getZones();
      await getCountries();
      await getMinistries();
      zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == post.value.continent_id;
      });
      countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == post.value.zone_id;
      });
      if (props.type == "article") {
        textarea.value.value = post.value.content;
        sceditor.create(textarea.value, {
          format: "bbcode",
          style: "https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",
          height: 400,
          toolbarExclude: "indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",
          icons: "material"
        });
      }
      nbClick.value++;
    });
    post.value.image = "";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]" }, _attrs))}><div class="w-full space-y-4 py-5 text-center"><h1 class="text-4xl font-bold capitalize text-primary-blue">${ssrInterpolate(_ctx.$t("edit"))} ${ssrInterpolate(__props.type)}</h1><h2 class="text-md text-gray-700">${ssrInterpolate(_ctx.$t("your"))} ${ssrInterpolate(__props.type)} ${ssrInterpolate(_ctx.$t("add-desc-1"))}</h2><div class="flex flex-col items-center justify-center lg:flex-row lg:space-x-3"><h1 class="font-semibold">${ssrInterpolate(_ctx.$t("select-lang"))} :</h1><div class="mt-3 flex space-x-3 lg:mt-0"><button class="${ssrRenderClass([
        _ctx.$i18n.locale != "fr" ? "rounded-md bg-menu px-3 py-1 text-white" : "rounded-md bg-primary-blue px-3 py-1 text-white"
      ])}">${ssrInterpolate(_ctx.$t("fr"))}</button><button class="${ssrRenderClass([
        _ctx.$i18n.locale != "en" ? "rounded-md bg-menu px-3 py-1 text-white" : "rounded-md bg-primary-blue px-3 py-1 text-white"
      ])}">${ssrInterpolate(_ctx.$t("en"))}</button><button class="${ssrRenderClass([
        _ctx.$i18n.locale != "es" ? "rounded-md bg-menu px-3 py-1 text-white" : "rounded-md bg-primary-blue px-3 py-1 text-white"
      ])}">${ssrInterpolate(_ctx.$t("es"))}</button><button class="${ssrRenderClass([
        _ctx.$i18n.locale != "pt" ? "rounded-md bg-menu px-3 py-1 text-white" : "rounded-md bg-primary-blue px-3 py-1 text-white"
      ])}">${ssrInterpolate(_ctx.$t("pt"))}</button></div></div></div><section class="mx-auto w-full rounded-md bg-white p-6 shadow-xl">`);
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
      _push(`<h1 class="text-xl font-semibold">${ssrInterpolate(_ctx.$t("edit"))} ${ssrInterpolate(__props.type)}</h1><h2 class="text-md font-light text-gray-700">${ssrInterpolate(_ctx.$t("good-msg-post"))} ! </h2><form id="postform" enctype="multipart/form-data"><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("title"))} <span class="text-red-500">*</span></label><input required${ssrRenderAttr("value", unref(post).title)} maxlength="50" type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"><span class="text-xs font-light text-gray-400">${ssrInterpolate(unref(post).title ? unref(post).title.length : 0)} of 50 Characters</span></div><div class="col-span-2 lg:col-span-1"><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("continent"))} <span class="text-red-500">*</span></label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
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
      _push(`<!--]--></select></div><div class="col-span-2 lg:col-span-1"><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("zoned"))} <span class="text-red-500">*</span></label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
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
      _push(`</select></div><div class="col-span-2 lg:col-span-1"><label class="dark:text-gray-200 text-gray-700" for="es">${ssrInterpolate(_ctx.$t("country"))} <span class="text-red-500">*</span></label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
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
      _push(`</select></div><div class="col-span-2 lg:col-span-1"><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("ministry"))} <span class="text-red-500">*</span></label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(ministries), (ministry) => {
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
      _push(`<!--]--></select></div>`);
      if (__props.type == "article") {
        _push(`<div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="fr">${ssrInterpolate(_ctx.$t("thumbnails"))} <span class="text-red-500">*</span></label><div class="flex items-center space-x-4 py-4"><img${ssrRenderAttr("src", unref(post).image)} class="h-16 w-16 rounded-full"${ssrRenderAttr("alt", unref(post).title)}><input type="file" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="pt">${ssrInterpolate(_ctx.$t("content"))} <span class="text-red-500">*</span></label>`);
      if (__props.type == "article") {
        _push(`<textarea required class="h-96 w-full">
                        </textarea>`);
      } else {
        _push(`<div>`);
        if (unref(post).content) {
          _push(`<textarea required maxlength="2000" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(unref(post).content)}</textarea>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(post).content) {
          _push(`<span class="text-xs font-light text-gray-400">${ssrInterpolate(unref(post).content.length)} of 2000 Characters</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div><div class="mt-20">`);
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
      if (msgClick.value != "") {
        _push(`<span class="text-xs font-light italic">${ssrInterpolate(msgClick.value)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/EditPost.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
