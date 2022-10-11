import { ref, onMounted, onUnmounted, reactive, computed, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { UserCircleIcon, ChevronDownIcon, ChevronUpIcon, EmojiSadIcon } from "@heroicons/vue/solid";
import { u as useUsers } from "./userServices.13abed0a.mjs";
import { u as useLanguages } from "./languageServices.c378cfc4.mjs";
import { u as useActivityAreas } from "./activityAreaServices.104ad1e7.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { _ as _sfc_main$1 } from "./Profile.43c964ac.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-router";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "Particular",
  __ssrInlineRender: true,
  setup(__props) {
    const { languages, getLanguages } = useLanguages();
    const { countries, getCountries } = useCountries();
    const { activityAreas, getActivityAreas } = useActivityAreas();
    const { users, getUsersType, filterUsers, page, isAll, loading } = useUsers();
    const userContainer = ref(null);
    const toGet = ref(true);
    onMounted(async () => {
      window.addEventListener("scroll", handleScroll);
      await getUsersType("particular");
      await getLanguages();
      await getCountries();
      await getActivityAreas();
    });
    onUnmounted(async () => {
      page.value = 1;
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = async (e) => {
      if (userContainer.value) {
        let element = userContainer.value;
        if (element.getBoundingClientRect().bottom < window.innerHeight && toGet.value && !isAll.value && (filter.native_country == "" && filter.status == "" && filter.residence_country == "" && filter.language == "" && filter.activity_area == "")) {
          toGet.value = false;
          page.value++;
          await getUsersType("particular");
          toGet.value = true;
        }
      }
    };
    const searchKey = ref("");
    const filter = reactive({
      native_country: "",
      status: "",
      residence_country: "",
      language: "",
      activity_area: "",
      type: "particular"
    });
    const showDetail = reactive({
      id: "",
      state: false
    });
    const usersFilter = async () => {
      if (filter.native_country != "" || filter.status != "" || filter.residence_country != "" || filter.language != "" || filter.activity_area != "") {
        await filterUsers({ ...filter });
      } else {
        page.value = 1;
        isAll.value = false;
        await getUsersType("particular");
      }
    };
    const filteredUser = computed(() => {
      return users.value.filter((user) => {
        return user.firstname.toLowerCase().includes(searchKey.value.toLowerCase());
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SelectFilter = resolveComponent("SelectFilter");
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white xl:w-[90%]" }, _attrs))}><h1 class="text-5xl text-primary-blue py-2 text-center capitalize font-bold">${ssrInterpolate(_ctx.$t("particular"))}</h1><div class="pb-8 lg:px-16"><div class="grid lg:grid-cols-3 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow mt-4"><div class="lg:text-sm text-xs"><label class="text-gray-700 dark:text-gray-200">${ssrInterpolate(_ctx.$t("status"))}</label><select class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"><option value="">--------------</option><option value="1">${ssrInterpolate(_ctx.$t("actif"))}</option><option value="0">${ssrInterpolate(_ctx.$t("no-actif"))}</option></select></div><div class="lg:text-sm text-xs"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("native-country"))}</label>`);
      _push(ssrRenderComponent(_component_SelectFilter, {
        modelValue: filter.native_country,
        "onUpdate:modelValue": ($event) => filter.native_country = $event,
        data: unref(countries),
        placeholder: "Select Country",
        required: false,
        resetField: true,
        handled: true,
        onHandle: usersFilter,
        className: "form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
      }, null, _parent));
      _push(`</div><div class="lg:text-sm text-xs"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("residence-country"))}</label>`);
      _push(ssrRenderComponent(_component_SelectFilter, {
        modelValue: filter.residence_country,
        "onUpdate:modelValue": ($event) => filter.residence_country = $event,
        data: unref(countries),
        placeholder: "Select Country",
        required: false,
        resetField: true,
        handled: true,
        onHandle: usersFilter,
        className: "form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
      }, null, _parent));
      _push(`</div><div class="lg:text-sm text-xs"><label class="text-gray-700 dark:text-gray-200">${ssrInterpolate(_ctx.$t("activity-area"))}</label><select class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"><option value="">--------------</option><!--[-->`);
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
      _push(`<!--]--></select></div><div class="lg:text-sm text-xs"><label class="text-gray-700">${ssrInterpolate(_ctx.$t("speak-language"))}</label><select class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"><option value="">--------------</option><!--[-->`);
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
      _push(`<!--]--></select></div></div><div class="p-2 bg-primary-blue shadow"></div>`);
      if (unref(loading) == 3) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div>`);
      } else if (unref(filteredUser).length != 0) {
        _push(`<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10 py-8"><!--[-->`);
        ssrRenderList(unref(filteredUser), (user) => {
          _push(`<div class="flex flex-col items-center py-2 text-center space-y-5 dark:bg-gray-800 border">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "compte", params: { name: user.firstname, id: user.id } },
            class: "flex justify-center flex-col items-center"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (user.avatar) {
                  _push2(`<img class="object-cover lg:h-44 lg:w-44 rounded-full h-36 w-36"${ssrRenderAttr("src", user.avatar)}${_scopeId}>`);
                } else {
                  _push2(ssrRenderComponent(unref(UserCircleIcon), { class: "lg:h-44 lg:w-44 h-36 w-36 text-gray-700" }, null, _parent2, _scopeId));
                }
                _push2(`<h4 class="text-gray-700 font-bold capitalize dark:text-gray-300"${_scopeId}>${ssrInterpolate(user.firstname)} ${ssrInterpolate(user.lastname)}</h4>`);
              } else {
                return [
                  user.avatar ? (openBlock(), createBlock("img", {
                    key: 0,
                    class: "object-cover lg:h-44 lg:w-44 rounded-full h-36 w-36",
                    src: user.avatar
                  }, null, 8, ["src"])) : (openBlock(), createBlock(unref(UserCircleIcon), {
                    key: 1,
                    class: "lg:h-44 lg:w-44 h-36 w-36 text-gray-700"
                  })),
                  createVNode("h4", { class: "text-gray-700 font-bold capitalize dark:text-gray-300" }, toDisplayString(user.firstname) + " " + toDisplayString(user.lastname), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (showDetail.id != user.id) {
            _push(`<button class="mt-2">`);
            _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-8 w-8 text-gray-500" }, null, _parent));
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          if (showDetail.id == user.id && showDetail.state == true) {
            _push(`<div class="text-center border-t w-full py-3 space-y-3 text-xs"><p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("status"))}</h1><h2 class="font-light">`);
            if (user.detail.status == 1) {
              _push(`<span>${ssrInterpolate(_ctx.$t("actif"))}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(_ctx.$t("no-actif"))}</span>`);
            }
            _push(`</h2></p><p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("adresse") + " " + _ctx.$t("email"))}</h1><h2 class="font-light text-primary-blue">${ssrInterpolate(user.email)}</h2></p>`);
            if (user.detail.native_country) {
              _push(`<p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("native-country"))}</h1><h2 class="font-light">`);
              if (_ctx.$i18n.locale == "en") {
                _push(`<span>${ssrInterpolate(user.detail.country_native.name_en)}</span>`);
              } else if (_ctx.$i18n.locale == "fr") {
                _push(`<span>${ssrInterpolate(user.detail.country_native.name_fr)}</span>`);
              } else if (_ctx.$i18n.locale == "es") {
                _push(`<span>${ssrInterpolate(user.detail.country_native.name_es)}</span>`);
              } else {
                _push(`<span>${ssrInterpolate(user.detail.country_native.name_pt)}</span>`);
              }
              _push(`</h2></p>`);
            } else {
              _push(`<!---->`);
            }
            if (user.detail.residence_country) {
              _push(`<p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("residence-country"))}</h1><h2 class="font-light">`);
              if (_ctx.$i18n.locale == "en") {
                _push(`<span>${ssrInterpolate(user.detail.country_residence.name_en)}</span>`);
              } else if (_ctx.$i18n.locale == "fr") {
                _push(`<span>${ssrInterpolate(user.detail.country_residence.name_fr)}</span>`);
              } else if (_ctx.$i18n.locale == "es") {
                _push(`<span>${ssrInterpolate(user.detail.country_residence.name_es)}</span>`);
              } else {
                _push(`<span>${ssrInterpolate(user.detail.country_residence.name_pt)}</span>`);
              }
              _push(`</h2></p>`);
            } else {
              _push(`<!---->`);
            }
            if (user.detail.languages.length != 0) {
              _push(`<p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("speak-language"))}</h1><!--[-->`);
              ssrRenderList(unref(languages), (language) => {
                _push(`<h2 class="font-light"><!--[-->`);
                ssrRenderList(user.detail.languages, (lang) => {
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
                _push(`<!--]--></h2>`);
              });
              _push(`<!--]--></p>`);
            } else {
              _push(`<!---->`);
            }
            if (user.detail.activity_areas.length != 0) {
              _push(`<p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("activity-area"))}</h1><!--[-->`);
              ssrRenderList(unref(activityAreas), (activityArea) => {
                _push(`<h2 class="font-light"><!--[-->`);
                ssrRenderList(user.detail.activity_areas, (activity_area) => {
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
                _push(`<!--]--></h2>`);
              });
              _push(`<!--]--></p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<button class="mt-2">`);
            _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "h-8 w-8 text-gray-500" }, null, _parent));
            _push(`</button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
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
      if (unref(filteredUser).length == 0 && unref(loading) != 1) {
        _push(`<div class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse">`);
        _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
        _push(`<span class="text-2xl mt-2">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Particular.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
