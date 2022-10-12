import { mergeProps, unref, useSSRContext, ref, reactive, onMounted, onUnmounted, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useCountries } from "./countryServices.cf8e0e4a.mjs";
import { u as useZones } from "./zoneServices.1a55a02b.mjs";
import { u as useContinents } from "./continentServices.22a4cba4.mjs";
import { u as useMinistries } from "./ministryServices.90c5c883.mjs";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { PhotographIcon, PlusCircleIcon, UserIcon, CalendarIcon, ChatIcon, EmojiSadIcon } from "@heroicons/vue/solid";
import { u as usePosts } from "./postServices.c94ed1b2.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main$1 = {
  __name: "Article",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [1, 2, 3];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse" }, _attrs))}><div class="grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-2"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="rounded bg-gray-100 shadow"><div class="mx-auto h-44 w-32 overflow-hidden">`);
        _push(ssrRenderComponent(unref(PhotographIcon), { class: "h-full w-full text-gray-200" }, null, _parent));
        _push(`</div><div class="flex flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="flex w-full items-center justify-between"><div class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/skeleton/Article.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Article",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useI18n();
    const route = useRoute();
    const { posts, getPosts, filterPost, loading, page, isAll } = usePosts();
    const { countries, getCountries } = useCountries();
    const { zones, getZones } = useZones();
    const { continents, getContinents } = useContinents();
    const { ministries, getMinistries } = useMinistries();
    const zoneFiltered = ref([]);
    const countryFiltered = ref([]);
    const user = localStorage.user ? JSON.parse(localStorage.user) : "";
    const postsContainer = ref(null);
    const toGet = ref(true);
    const filter = reactive({
      country: "",
      continent: "",
      ministry: "",
      zone: "",
      keywords: "",
      lang: localStorage.lang,
      type: "article"
    });
    onMounted(async () => {
      window.addEventListener("scroll", handleScroll);
      if ("lang" in route.query) {
        filter.continent = route.query.continent;
        filter.zone = route.query.zone;
        filter.ministry = route.query.ministry;
        filter.keywords = route.query.keywords;
        filter.country = route.query.country;
        filter.lang = route.query.lang;
        await filterPost({ ...filter });
      } else {
        await getPosts("article", localStorage.lang);
      }
      await getContinents();
      await getZones();
      await getCountries();
      await getMinistries();
    });
    onUnmounted(async () => {
      page.value = 1;
      window.removeEventListener("scroll", handleScroll);
    });
    const handleScroll = async (e) => {
      if (postsContainer.value) {
        let element = postsContainer.value;
        if (element.getBoundingClientRect().bottom < window.innerHeight && toGet.value && !isAll.value && filter.country == "" && filter.continent == "" && filter.ministry == "" && filter.zone == "" && filter.keywords == "") {
          toGet.value = false;
          page.value++;
          await getPosts("article", localStorage.lang);
          toGet.value = true;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto flex min-h-screen w-full flex-col-reverse bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]" }, _attrs))}><div class="lg:w-[70%]"><h1 class="text-center text-5xl font-bold capitalize text-primary-blue">${ssrInterpolate(_ctx.$t("articles"))}</h1><div class="flex justify-end px-6">`);
      if (unref(user).type != "business1") {
        _push(ssrRenderComponent(_component_router_link, {
          to: {
            name: "add.post",
            params: { type: "article" }
          },
          class: "flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(PlusCircleIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
              _push2(`<p class="text-base leading-4"${_scopeId}>${ssrInterpolate(_ctx.$t("add"))} Article</p>`);
            } else {
              return [
                createVNode(unref(PlusCircleIcon), { class: "h-6 w-6" }),
                createVNode("p", { class: "text-base leading-4" }, toDisplayString(_ctx.$t("add")) + " Article", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(loading) == 3) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div>`);
      } else if (unref(posts).length != 0) {
        _push(`<div class="grid gap-8 py-8 lg:grid-cols-2 lg:px-10"><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(`<div class="dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.post",
              params: { id: post.id }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="h-44 w-full object-cover"${ssrRenderAttr("src", post.image)} alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "h-44 w-full object-cover",
                    src: post.image,
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="p-6"><div><a href="#" class="rounded py-1 px-2 text-xs capitalize text-white" style="${ssrRenderStyle("background:" + post.ministry.color)}">`);
          if (_ctx.$i18n.locale == "en") {
            _push(`<span>${ssrInterpolate(post.ministry.name_en)}</span>`);
          } else if (_ctx.$i18n.locale == "fr") {
            _push(`<span>${ssrInterpolate(post.ministry.name_fr)}</span>`);
          } else if (_ctx.$i18n.locale == "es") {
            _push(`<span>${ssrInterpolate(post.ministry.name_es)}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(post.country.name_pt)}</span>`);
          }
          _push(`</a>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.post",
              params: { id: post.id }
            },
            href: "#",
            class: "dark:text-white mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "...")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "..."), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="mt-4 flex items-center justify-between text-sm">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.post",
              params: { id: post.id }
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
          _push(`<div class="flex items-center space-x-2 text-xs text-gray-500"><div class="flex space-x-1">`);
          _push(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "compte",
              params: {
                name: post.user.firstname,
                id: post.user.id
              }
            },
            href: "#",
            class: "hover:text-primary-blue"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(post.user.firstname)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(post.user.firstname), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="hidden space-x-1 lg:flex">`);
          _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
          _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(new Date(post.date).toLocaleDateString(
            "fr-FR",
            {
              day: "numeric",
              year: "numeric",
              month: "long"
            }
          ))}</a></div><div class="item-center flex space-x-1">`);
          _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4 text-gray-500" }, null, _parent));
          _push(`<a href="#" class="text-xs hover:text-primary-blue">${ssrInterpolate(post.comments)}</a></div></div></div></div></div>`);
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
      if (unref(posts).length == 0 && unref(loading) != 1) {
        _push(`<div class="flex animate-pulse flex-col items-center justify-center p-28 text-gray-500">`);
        _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
        _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white lg:w-[30%]"><div class="z-0 w-full bg-white"><h1 class="inline-block bg-primary-blue px-2 py-1 text-white">${ssrInterpolate(_ctx.$t("filter-article"))}</h1><form><div class="text-md space-y-1 border-t-2 border-primary-blue p-4"><div><label class="text-xs text-gray-500">${ssrInterpolate(_ctx.$t("language"))}</label><select class="form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="fr">${ssrInterpolate(_ctx.$t("fr"))}</option><option value="en">${ssrInterpolate(_ctx.$t("en"))}</option><option value="es">${ssrInterpolate(_ctx.$t("es"))}</option><option value="pt">${ssrInterpolate(_ctx.$t("pt"))}</option></select></div><div><label class="text-xs text-gray-500">${ssrInterpolate(_ctx.$t("key-words"))}</label><input type="text"${ssrRenderAttr("value", filter.keywords)}${ssrRenderAttr("placeholder", _ctx.$t("key-words"))} class="form-input mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"></div><div><label class="text-xs text-gray-500">${ssrInterpolate(_ctx.$t("continent"))}</label><select class="form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
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
      _push(`<!--]--></select></div><div><label class="text-xs text-gray-500">${ssrInterpolate(_ctx.$t("zoned"))}</label><select class="form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="">--------------</option>`);
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
      _push(`</select></div><div><label class="text-xs text-gray-500">${ssrInterpolate(_ctx.$t("country"))}</label><select class="form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="">--------------</option>`);
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
      _push(`</select></div><div><label class="text-xs text-gray-500">${ssrInterpolate(_ctx.$t("ministry"))}</label><select class="form-select mt-1 block w-full border-gray-300 px-3 py-2 text-xs focus:border-primary-blue focus:ring-primary-blue"><option value="">--------------</option><!--[-->`);
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
      _push(`<!--]--></select></div><div>`);
      if (unref(loading) == 0 || unref(loading) == 2) {
        _push(`<button type="submit" class="mt-3 w-full bg-primary-blue px-8 py-2 text-lg text-white">${ssrInterpolate(_ctx.$t("filter"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<button disabled type="submit" class="mt-3 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("filter"))}... </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
