import { ref, onMounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as usePosts } from "./postServices.c94ed1b2.mjs";
import { u as useContinents } from "./continentServices.22a4cba4.mjs";
import { u as useZones } from "./zoneServices.1a55a02b.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { u as useMinistries } from "./ministryServices.90c5c883.mjs";
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
  __name: "PostEdit",
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
    useRouter();
    ref(null);
    const { updatePost, getPost, post, errors, loading } = usePosts();
    const { continents, getContinents } = useContinents();
    const { zones, getZones } = useZones();
    const { countries, getCountries } = useCountries();
    const { ministries, getMinistries } = useMinistries();
    const zoneFiltered = ref([]);
    const countryFiltered = ref([]);
    onMounted(async () => {
      await getPost(props.id), await getContinents(), await getZones(), await getCountries(), await getMinistries();
      zoneFiltered.value = zones.value.filter((zone) => {
        return zone.continent_id == post.value.continent_id;
      });
      countryFiltered.value = countries.value.filter((country) => {
        return country.zone_id == post.value.zone_id;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-auto w-full xl:mt-0 xl:p-4" }, _attrs))}><div class="z-0 w-full p-4"><div class="flex w-full justify-between bg-white px-8 py-5 shadow-lg"><h1 class="text-4xl font-bold capitalize text-primary-blue"> Edit ${ssrInterpolate(__props.type)}</h1></div><section class="mx-auto w-full bg-white p-6 shadow-md">`);
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
      _push(`<h2 class="text-md font-light text-gray-700"> Add a new ${ssrInterpolate(__props.type)}</h2><form id="postform" enctype="multipart/form-data"><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700">Title</label><input required${ssrRenderAttr("value", unref(post).title)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="en">Language</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="fr">French</option><option value="en">English</option><option value="es">Espanol</option><option value="pt">Portugues</option></select></div><div><label class="dark:text-gray-200 text-gray-700" for="es">Continent</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(continents), (continent) => {
        _push(`<option${ssrRenderAttr("value", continent.id)}>${ssrInterpolate(continent.name_en)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="dark:text-gray-200 text-gray-700" for="pt">Zone</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue">`);
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
      _push(`</select></div><div><label class="dark:text-gray-200 text-gray-700" for="pt">Ministry</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(unref(ministries), (ministry) => {
        _push(`<option${ssrRenderAttr("value", ministry.id)}>${ssrInterpolate(ministry.name_en)}</option>`);
      });
      _push(`<!--]--></select></div>`);
      if (__props.type == "article") {
        _push(`<div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="fr">Image</label><input type="file" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="pt">Content</label><textarea required type="text" id="pt" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40">${ssrInterpolate(unref(post).content)}</textarea></div></div><div class="mt-6 flex justify-end">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/posts/PostEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
