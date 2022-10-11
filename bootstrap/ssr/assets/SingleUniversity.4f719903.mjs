import { onMounted, reactive, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "../app.mjs";
import { EmojiSadIcon, PlusCircleIcon, SpeakerphoneIcon, UserIcon, CalendarIcon } from "@heroicons/vue/solid";
import { u as useUniversities } from "./universityServices.829204b1.mjs";
import { u as useAnnouncements } from "./announcementServices.cb974870.mjs";
import { u as useCategoryAnnouncements } from "./categoryAnnouncementServices.08a50fb5.mjs";
import "./Error.a4f77a94.mjs";
import "lodash";
import "axios";
import "vue-router";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "SingleUniversity",
  __ssrInlineRender: true,
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const { university, getUniversity2, loading } = useUniversities();
    const { categoryAnnouncements, getCategoryAnnouncements } = useCategoryAnnouncements();
    const user = localStorage.user ? JSON.parse(localStorage.user) : "";
    const { announcements, getAnnouncementsUniversity } = useAnnouncements();
    onMounted(async () => {
      await getUniversity2(props.id);
      await getAnnouncementsUniversity(props.id);
      await getCategoryAnnouncements();
    });
    const filterAds = reactive({
      searchKey: "",
      category: ""
    });
    const filteredAnnouncement = computed(() => {
      return announcements.value.filter((announcement) => {
        let data = "";
        if (filterAds.category != "")
          data = announcement.title.toLowerCase().includes(filterAds.searchKey.toLowerCase()) && announcement.category.id == filterAds.category;
        else
          data = announcement.title.toLowerCase().includes(filterAds.searchKey.toLowerCase());
        return data;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white px-20 text-lg xl:w-[90%]" }, _attrs))}><div>`);
      if (unref(university).length != 0) {
        _push(`<div class="py-6 px-4"><div class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md"><img class="h-96 w-full object-cover"${ssrRenderAttr("src", unref(university).image)} alt=""><div class="p-6"><div><a href="#" class="rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white">`);
        if (_ctx.$i18n.locale == "en") {
          _push(`<span>${ssrInterpolate(unref(university).city.name_en + "-" + unref(university).country.code_iso)}</span>`);
        } else if (_ctx.$i18n.locale == "fr") {
          _push(`<span>${ssrInterpolate(unref(university).city.name_fr + "-" + unref(university).country.code_iso)}</span>`);
        } else if (_ctx.$i18n.locale == "es") {
          _push(`<span>${ssrInterpolate(unref(university).city.name_es + "-" + unref(university).country.code_iso)}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(university).country.name_pt + "-" + unref(university).country.code_iso)}</span>`);
        }
        _push(`</a><h1 class="dark:text-white mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600">${ssrInterpolate(unref(university).name)}</h1><p class="dark:text-gray-400 my-4 mt-2 py-4 text-gray-600">${unref(university).description}</p></div></div></div></div>`);
      } else if (unref(loading) == 1) {
        _push(`<div class="p-28"><svg class="mx-auto h-16 w-16 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
        _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
        _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
      }
      _push(`<h1 class="py-2 text-center text-3xl font-bold text-primary-blue">${ssrInterpolate(_ctx.$t("ads-university"))} ${ssrInterpolate(unref(university).name)}</h1><div class="flex justify-end px-6">`);
      if (unref(user).type == "particular") {
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
      _push(`</div><div class="mt-4 grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-3"><div class="text-xs lg:text-sm"><label class="dark:text-gray-200 text-gray-700">${ssrInterpolate(_ctx.$t("key-words"))}</label><input type="text"${ssrRenderAttr("value", filterAds.searchKey)} class="form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="text-xs lg:text-sm"><label class="text-gray-700" for="es">${ssrInterpolate(_ctx.$t("category"))}</label><select class="form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
      ssrRenderList(unref(categoryAnnouncements), (category_announcement) => {
        _push(`<option${ssrRenderAttr("value", category_announcement.id)}>${ssrInterpolate(category_announcement.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="bg-primary-blue p-2 shadow"></div><div class="py-8">`);
      if (unref(filteredAnnouncement).length != 0) {
        _push(`<div class="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10"><!--[-->`);
        ssrRenderList(unref(filteredAnnouncement), (announcement) => {
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
          _push(`<div class="space-y-2 px-4 py-2"><a href="#" class="mt-2 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white">${ssrInterpolate(announcement.category.name)}</a>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.ads",
              params: { id: announcement.id }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h1 class="text-2xl font-bold capitalize text-gray-800 hover:underline"${_scopeId}>${ssrInterpolate(announcement.title)}</h1>`);
              } else {
                return [
                  createVNode("h1", { class: "text-2xl font-bold capitalize text-gray-800 hover:underline" }, toDisplayString(announcement.title), 1)
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
          _push(`</div><div class="hidden space-x-1 lg:flex">`);
          _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
          _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(announcement.date)}</a></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
        _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
        _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/SingleUniversity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
