import { ref, onMounted, onUnmounted, reactive, computed, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { UserCircleIcon, ChevronDownIcon, ChevronUpIcon, EmojiSadIcon } from "@heroicons/vue/solid";
import { u as useUsers } from "./userServices.13abed0a.mjs";
import { u as useBusinessSizes, a as useBusinessTypes } from "./businessSizeServices.29e8ba03.mjs";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import "../app.mjs";
import { _ as _sfc_main$1 } from "./Profile.43c964ac.mjs";
import "axios";
import "vue-router";
import "lodash";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "PoliticalInstitution",
  __ssrInlineRender: true,
  setup(__props) {
    const { businessSizes, getBusinessSizes } = useBusinessSizes();
    const { countries, getCountries } = useCountries();
    const { businessTypes, getBusinessTypes } = useBusinessTypes();
    const { users, getUsersType, filterUsers, page, isAll, loading } = useUsers();
    const userContainer = ref(null);
    const toGet = ref(true);
    onMounted(
      async () => {
        window.addEventListener("scroll", handleScroll);
        await getUsersType("ip");
        await getBusinessSizes();
        await getCountries();
        await getBusinessTypes();
      }
    );
    onUnmounted(async () => {
      page.value = 1;
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = async (e) => {
      if (userContainer.value) {
        let element = userContainer.value;
        if (element.getBoundingClientRect().bottom < window.innerHeight && toGet.value && !isAll.value && (filter.native_country == "" && filter.residence_country == "" && filter.business_size == "" && filter.business_type == "")) {
          toGet.value = false;
          page.value++;
          await getUsersType("ip");
          toGet.value = true;
        }
      }
    };
    const searchKey = ref("");
    const filter = reactive({
      native_country: "",
      residence_country: "",
      business_size: "",
      business_type: "",
      type: "ip"
    });
    const showDetail = reactive({
      id: "",
      state: false
    });
    const usersFilter = async () => {
      if (filter.native_country != "" || filter.residence_country != "" || filter.business_size != "" || filter.business_type != "") {
        await filterUsers({ ...filter });
      } else {
        page.value = 1;
        isAll.value = false;
        await getUsersType("ip");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white xl:w-[90%]" }, _attrs))}><h1 class="text-5xl text-primary-blue text-center py-2 capitalize font-bold">${ssrInterpolate(_ctx.$t("ip"))}</h1><div class="pb-8 lg:px-16"><div class="grid lg:grid-cols-3 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow mt-4"><div class="lg:text-sm text-xs"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("native-country"))}</label>`);
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
      _push(`</div><div class="lg:text-sm text-xs"><label class="text-gray-700 dark:text-gray-200">${ssrInterpolate(_ctx.$t("perimetre"))}</label><select class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"><option value="">--------------</option><!--[-->`);
      ssrRenderList(unref(businessTypes), (businessType) => {
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
      _push(`<!--]--></select></div><div class="lg:text-sm text-xs"><label class="text-gray-700">${ssrInterpolate(_ctx.$t("size-institution"))}</label><select class="form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"><option value="">--------------</option><!--[-->`);
      ssrRenderList(unref(businessSizes), (BusinessSize) => {
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
                _push2(`<h4 class="text-gray-700 font-bold capitalize dark:text-gray-300"${_scopeId}>${ssrInterpolate(user.firstname)}</h4>`);
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
                  createVNode("h4", { class: "text-gray-700 font-bold capitalize dark:text-gray-300" }, toDisplayString(user.firstname), 1)
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
            _push(`<div class="text-center border-t w-full py-3 space-y-3 text-xs"><p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("adresse") + " " + _ctx.$t("email"))}</h1><h2 class="font-light text-primary-blue">${ssrInterpolate(user.email)}</h2></p>`);
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
            if (user.detail.business_type_id) {
              _push(`<p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("perimetre"))}</h1><h2 class="font-light">`);
              if (_ctx.$i18n.locale == "en") {
                _push(`<span>${ssrInterpolate(user.detail.business_type.name_en)}</span>`);
              } else if (_ctx.$i18n.locale == "fr") {
                _push(`<span>${ssrInterpolate(user.detail.business_type.name_fr)}</span>`);
              } else if (_ctx.$i18n.locale == "es") {
                _push(`<span>${ssrInterpolate(user.detail.business_type.name_es)}</span>`);
              } else {
                _push(`<span>${ssrInterpolate(user.detail.business_type.name_pt)}</span>`);
              }
              _push(`</h2></p>`);
            } else {
              _push(`<!---->`);
            }
            if (user.detail.business_size_id) {
              _push(`<p class="leading-3"><h1 class="font-semibold text-sm">${ssrInterpolate(_ctx.$t("size-institution"))}</h1><h2 class="font-light">`);
              if (_ctx.$i18n.locale == "en") {
                _push(`<span>${ssrInterpolate(user.detail.business_size.name_en)}</span>`);
              } else if (_ctx.$i18n.locale == "fr") {
                _push(`<span>${ssrInterpolate(user.detail.business_size.name_fr)}</span>`);
              } else if (_ctx.$i18n.locale == "es") {
                _push(`<span>${ssrInterpolate(user.detail.business_size.name_es)}</span>`);
              } else {
                _push(`<span>${ssrInterpolate(user.detail.business_size.name_pt)}</span>`);
              }
              _push(`</h2></p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/PoliticalInstitution.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
