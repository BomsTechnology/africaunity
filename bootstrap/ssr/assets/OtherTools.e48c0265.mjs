import { ref, reactive, onMounted, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as useLanguages } from "./languageServices.c3bbe23f.mjs";
import { a as useBusinessTypes, u as useBusinessSizes } from "./businessSizeServices.7658bab2.mjs";
import { u as useActivityAreas } from "./activityAreaServices.104ad1e7.mjs";
import { u as useSizeCompanies, a as useWorkDepartments } from "./workDepartmentServices.2777c58c.mjs";
import { u as useLevelStudies, a as useOfferTypes, b as useWorkModes, c as useYearExperiences } from "./yearExperienceServices.f6a510d2.mjs";
import { u as useLegalStatuses } from "./legalStatusServices.a3b74ae6.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-router";
import "vue-i18n";
import "@heroicons/vue/solid";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "OtherTools",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      languages,
      getLanguages,
      createLanguage,
      destroyLanguage,
      updateLanguage,
      errorsLang
    } = useLanguages();
    useBusinessTypes();
    useBusinessSizes();
    useActivityAreas();
    useLegalStatuses();
    useSizeCompanies();
    useLevelStudies();
    useOfferTypes();
    useWorkDepartments();
    useWorkModes();
    useYearExperiences();
    const searchKey = ref("");
    const currentOther = ref(0);
    const loading = ref(0);
    const items = ref([]);
    const errors = ref("");
    const isEdit = ref(false);
    ref("");
    const others = [
      "Language",
      "Activity Area",
      "Businnes Type",
      "Business Size",
      "Legal Status",
      "Work Department",
      "Year Experience",
      "Work Mode",
      "Level Studies",
      "Offer Type",
      "Size Company"
    ];
    const item = reactive({
      name_fr: "",
      name_en: "",
      name_es: "",
      name_pt: ""
    });
    onMounted(async () => {
      loading.value = 1;
      await getLanguages();
      errors.value = errorsLang.value;
      items.value = languages.value;
      loading.value = 0;
    });
    const filteredItem = computed(() => {
      return items.value.filter((item2) => {
        return item2.name_en.toLowerCase().includes(searchKey.value.toLowerCase());
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-auto w-full xl:mt-0 xl:p-4" }, _attrs))}><div class="z-0 h-full w-full p-4"><div class="flex justify-between bg-white px-8 py-5 shadow-lg"><h1 class="text-4xl font-bold text-primary-blue"> Other - <!--[-->`);
      ssrRenderList(others, (other, index) => {
        _push(`<span>`);
        if (currentOther.value === index) {
          _push(`<span>${ssrInterpolate(other)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></h1><div><select class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><!--[-->`);
      ssrRenderList(others, (other, index) => {
        _push(`<option${ssrRenderAttr("value", index)}>${ssrInterpolate(other)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="justify-between lg:flex"><div class="bg-white px-6 pt-8 lg:w-[40%]">`);
      if (!isEdit.value) {
        _push(`<div><h1 class="mb-4 text-2xl font-semibold"><span class="text-primary-blue underline">Add </span><!--[-->`);
        ssrRenderList(others, (other, index) => {
          _push(`<span>`);
          if (currentOther.value === index) {
            _push(`<span>${ssrInterpolate(other)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></h1>`);
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
        _push(`<form class="px-8"><div class=""><label class="dark:text-gray-200 text-gray-700">French Name</label><input required${ssrRenderAttr("value", item.name_fr)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class=""><label class="dark:text-gray-200 text-gray-700">English Name</label><input required${ssrRenderAttr("value", item.name_en)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class=""><label class="dark:text-gray-200 text-gray-700">Espanol Name</label><input required${ssrRenderAttr("value", item.name_es)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class=""><label class="dark:text-gray-200 text-gray-700">Portugues Name</label><input required${ssrRenderAttr("value", item.name_pt)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="mt-6 flex justify-end">`);
        if (loading.value == 0) {
          _push(`<button type="submit" class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"> Save </button>`);
        } else {
          _push(`<!---->`);
        }
        if (loading.value == 1) {
          _push(`<button type="submit" disabled class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"><svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form></div>`);
      } else {
        _push(`<div><h1 class="mb-4 text-2xl font-semibold"><span class="text-primary-blue underline">Edit </span><!--[-->`);
        ssrRenderList(others, (other, index) => {
          _push(`<span>`);
          if (currentOther.value === index) {
            _push(`<span>${ssrInterpolate(other)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></h1>`);
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
        _push(`<form class="px-8"><div class=""><label class="dark:text-gray-200 text-gray-700">French Name</label><input required${ssrRenderAttr("value", item.name_fr)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class=""><label class="dark:text-gray-200 text-gray-700">English Name</label><input required${ssrRenderAttr("value", item.name_en)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class=""><label class="dark:text-gray-200 text-gray-700">Espanol Name</label><input required${ssrRenderAttr("value", item.name_es)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class=""><label class="dark:text-gray-200 text-gray-700">Portugues Name</label><input required${ssrRenderAttr("value", item.name_pt)} type="text" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></div><div class="mt-6 flex justify-end">`);
        if (loading.value == 0) {
          _push(`<button type="submit" class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"> Save </button>`);
        } else {
          _push(`<!---->`);
        }
        if (loading.value == 1) {
          _push(`<button type="submit" disabled class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"><svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form></div>`);
      }
      _push(`</div><div class="flex flex-col bg-white pt-8 lg:w-[60%]"><div class="overflow-x-auto border"><div class="dark:bg-gray-800 inline-block min-w-full align-middle"><div class="p-4"><label for="table-search" class="sr-only">Search</label><div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input${ssrRenderAttr("value", searchKey.value)} type="text" id="table-search" class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue" placeholder="Search for items"></div></div>`);
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
      _push(`<div class="overflow-hidden"><table class="dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"><thead class="dark:bg-gray-700 bg-gray-100"><tr><th scope="col" class="dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"> Name </th><th scope="col" class="p-4"><span class="sr-only">Edit</span></th></tr></thead>`);
      if (unref(filteredItem).length != 0) {
        _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><!--[-->`);
        ssrRenderList(unref(filteredItem), (item2) => {
          _push(`<tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td class="dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">${ssrInterpolate(item2.name_en)}</td><td class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"><a href="#" class="dark:text-blue-500 text-primary-blue hover:underline">Edit</a><a href="#" class="dark:text-blue-500 ml-3 text-red-600 hover:underline">Delete</a></td></tr>`);
        });
        _push(`<!--]--></tbody>`);
      } else if (loading.value == 1) {
        _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td colspan="2" class="dark:text-white w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"><svg class="mx-auto h-16 w-16 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></td></tr></tbody>`);
      } else {
        _push(`<tbody class="dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"><tr class="dark:hover:bg-gray-700 hover:bg-gray-100"><td colspan="2" class="dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"> NO <!--[-->`);
        ssrRenderList(others, (other, index) => {
          _push(`<span>`);
          if (currentOther.value === index) {
            _push(`<span>${ssrInterpolate(other)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></td></tr></tbody>`);
      }
      _push(`</table></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/OtherTools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
