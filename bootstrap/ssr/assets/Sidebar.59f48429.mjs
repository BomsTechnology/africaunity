import { reactive, onMounted, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { MenuIcon, XIcon, HomeIcon, UserGroupIcon, ChatIcon, ColorSwatchIcon, NewspaperIcon, ChevronDownIcon, ChevronUpIcon, TableIcon, GlobeIcon, MapIcon, FlagIcon, OfficeBuildingIcon, LibraryIcon, TemplateIcon, BriefcaseIcon, CurrencyDollarIcon, SpeakerphoneIcon, ChartPieIcon, UserCircleIcon, LogoutIcon } from "@heroicons/vue/solid";
import axios from "axios";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const Sidebar_vue_vue_type_style_index_0_scoped_670b567e_lang = "";
const _sfc_main = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const user = reactive({});
    const verifAdmin = async () => {
      if (localStorage.token && localStorage.token != "") {
        user.value = JSON.parse(localStorage.user);
        try {
          let response = await axios.post(
            "/api/verif-admin",
            { id: user.value.id },
            {
              headers: {
                Authorization: `Bearer ${localStorage.token}`
              }
            }
          );
        } catch (e) {
          if (e.response.status == 401) {
            location.href = "/admin";
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
          }
        }
      } else {
        location.href = "/login/admin";
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
      }
    };
    onMounted(verifAdmin());
    const open = reactive({
      menu: true,
      article: false,
      propau: false,
      announcement: false,
      university: false,
      job: false
    });
    const loading = ref(0);
    const logout = async () => {
      try {
        loading.value = 1;
        await axios.post(
          "/api/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            }
          }
        );
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        loading.value = 2;
        location.href = "/";
      } catch (e) {
        loading.value = 0;
        if (e.response.status == 422) {
          for (const key in e.response.data.errors)
            errors.value += e.response.data.errors[key][0] + "\n";
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          open.menu ? "relative mr-64 overflow-x-hidden transition-all duration-1000" : "relative  overflow-x-hidden transition-all duration-1000"
        ]
      }, _attrs))} data-v-670b567e><div class="fixed z-40 mt-10 flex items-center justify-center lg:hidden" data-v-670b567e>`);
      if (!open.menu) {
        _push(`<button class="bg-menu p-2 focus:outline-none focus:ring-2" data-v-670b567e>`);
        _push(ssrRenderComponent(unref(MenuIcon), { class: "h-6 w-6 text-white" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (open.menu) {
        _push(`<button class="focus:outline-none focus:ring-2" data-v-670b567e>`);
        _push(ssrRenderComponent(unref(XIcon), { class: "h-6 w-6 text-white" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (open.menu) {
        _push(`<div class="no-scrollbar fixed z-30 flex h-full w-full transform flex-col items-start justify-start overflow-y-auto overflow-x-hidden bg-menu transition duration-500 ease-in-out sm:w-64 xl:translate-x-0 xl:rounded-r" data-v-670b567e><div class="flex items-center justify-start space-x-3 p-6" data-v-670b567e><img src="/img/afrique.png" alt="logo" data-v-670b567e><p class="text-2xl leading-6 text-primary-blue" data-v-670b567e> AfricaUnity </p></div><div class="mt-6 flex w-full flex-col items-center justify-start space-y-3 border-b border-gray-600 pl-4 pb-5" data-v-670b567e>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "admin.dash" },
          class: "jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(HomeIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
              _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Dashboard</p>`);
            } else {
              return [
                createVNode(unref(HomeIcon), { class: "h-6 w-6" }),
                createVNode("p", { class: "text-base leading-4" }, "Dashboard")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "admin.user.index" },
          class: "jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(UserGroupIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
              _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Users</p>`);
            } else {
              return [
                createVNode(unref(UserGroupIcon), { class: "h-6 w-6" }),
                createVNode("p", { class: "text-base leading-4" }, "Users")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "admin.comment.index" },
          class: "jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ChatIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
              _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Comments</p>`);
            } else {
              return [
                createVNode(unref(ChatIcon), { class: "h-6 w-6" }),
                createVNode("p", { class: "text-base leading-4" }, "Comments")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "admin.other" },
          class: "jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ColorSwatchIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
              _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Others</p>`);
            } else {
              return [
                createVNode(unref(ColorSwatchIcon), { class: "h-6 w-6" }),
                createVNode("p", { class: "text-base leading-4" }, "Others")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4" data-v-670b567e><button class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none" data-v-670b567e><p class="jusitfy-start flex w-full items-center text-base leading-4" data-v-670b567e>`);
        _push(ssrRenderComponent(unref(NewspaperIcon), { class: "mr-6 h-6 w-6" }, null, _parent));
        _push(` Article </p>`);
        if (!open.article) {
          _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (open.article) {
          _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
        if (open.article) {
          _push(`<div class="flex w-full flex-col items-start justify-start pb-1 md:w-auto" data-v-670b567e>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "admin.post.index",
              params: { type: "article" }
            },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(TableIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>All Articles</p>`);
              } else {
                return [
                  createVNode(unref(TableIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "All Articles")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.continent.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(GlobeIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Continent</p>`);
              } else {
                return [
                  createVNode(unref(GlobeIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Continent")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.zone.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(MapIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Zone</p>`);
              } else {
                return [
                  createVNode(unref(MapIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Zone")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.country.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(FlagIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Country</p>`);
              } else {
                return [
                  createVNode(unref(FlagIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Country")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.ministry.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(OfficeBuildingIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Ministry</p>`);
              } else {
                return [
                  createVNode(unref(OfficeBuildingIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Ministry")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4" data-v-670b567e><button class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none" data-v-670b567e><p class="jusitfy-start flex w-full items-center text-base leading-4" data-v-670b567e>`);
        _push(ssrRenderComponent(unref(NewspaperIcon), { class: "mr-6 h-6 w-6" }, null, _parent));
        _push(` PropAu </p>`);
        if (!open.propau) {
          _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (open.propau) {
          _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
        if (open.propau) {
          _push(`<div class="flex w-full flex-col items-start justify-start pb-1 md:w-auto" data-v-670b567e>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "admin.post.index",
              params: { type: "propau" }
            },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(TableIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>All PropAU</p>`);
              } else {
                return [
                  createVNode(unref(TableIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "All PropAU")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.continent.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(GlobeIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Continent</p>`);
              } else {
                return [
                  createVNode(unref(GlobeIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Continent")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.zone.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(MapIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Zone</p>`);
              } else {
                return [
                  createVNode(unref(MapIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Zone")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.country.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(FlagIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Country</p>`);
              } else {
                return [
                  createVNode(unref(FlagIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Country")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.ministry.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(OfficeBuildingIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Ministry</p>`);
              } else {
                return [
                  createVNode(unref(OfficeBuildingIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Ministry")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4" data-v-670b567e><button class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none" data-v-670b567e><p class="jusitfy-start flex w-full items-center text-base leading-4" data-v-670b567e>`);
        _push(ssrRenderComponent(unref(LibraryIcon), { class: "mr-6 h-6 w-6" }, null, _parent));
        _push(` University </p>`);
        if (!open.university) {
          _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (open.university) {
          _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
        if (open.university) {
          _push(`<div class="flex w-full flex-col items-start justify-start pb-1 md:w-auto" data-v-670b567e>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.university.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(TableIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>All Universities</p>`);
              } else {
                return [
                  createVNode(unref(TableIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "All Universities")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.continent.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(GlobeIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Continent</p>`);
              } else {
                return [
                  createVNode(unref(GlobeIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Continent")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.country.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(FlagIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Country</p>`);
              } else {
                return [
                  createVNode(unref(FlagIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Country")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.city.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(TemplateIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>City</p>`);
              } else {
                return [
                  createVNode(unref(TemplateIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "City")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4" data-v-670b567e><button class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none" data-v-670b567e><p class="jusitfy-start flex w-full items-center text-base leading-4" data-v-670b567e>`);
        _push(ssrRenderComponent(unref(BriefcaseIcon), { class: "mr-6 h-6 w-6" }, null, _parent));
        _push(` Job Offer </p>`);
        if (!open.job) {
          _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (open.job) {
          _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
        if (open.job) {
          _push(`<div class="flex w-full flex-col items-start justify-start pb-1 md:w-auto" data-v-670b567e>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.jobOffer.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(TableIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>All Job</p>`);
              } else {
                return [
                  createVNode(unref(TableIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "All Job")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.continent.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(GlobeIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Continent</p>`);
              } else {
                return [
                  createVNode(unref(GlobeIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Continent")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.zone.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(MapIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Zone</p>`);
              } else {
                return [
                  createVNode(unref(MapIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Zone")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.country.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(FlagIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Country</p>`);
              } else {
                return [
                  createVNode(unref(FlagIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Country")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.city.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(TemplateIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>City</p>`);
              } else {
                return [
                  createVNode(unref(TemplateIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "City")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.currency.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(CurrencyDollarIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Currency</p>`);
              } else {
                return [
                  createVNode(unref(CurrencyDollarIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Currency")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="relative flex h-full w-full flex-col items-center justify-between pb-6" data-v-670b567e><div class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4" data-v-670b567e><button class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none" data-v-670b567e><p class="jusitfy-start flex w-full items-center text-base leading-4" data-v-670b567e>`);
        _push(ssrRenderComponent(unref(SpeakerphoneIcon), { class: "mr-6 h-6 w-6" }, null, _parent));
        _push(` Ads </p>`);
        if (!open.announcement) {
          _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (open.announcement) {
          _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "h-10 w-10" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
        if (open.announcement) {
          _push(`<div class="flex w-full flex-col items-start justify-start pb-1 md:w-auto" data-v-670b567e>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.announcement.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(TableIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}> All Announcement </p>`);
              } else {
                return [
                  createVNode(unref(TableIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, " All Announcement ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.university.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(LibraryIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>University</p>`);
              } else {
                return [
                  createVNode(unref(LibraryIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "University")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.category.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(ChartPieIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Category</p>`);
              } else {
                return [
                  createVNode(unref(ChartPieIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Category")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "admin.currency.index" },
            class: "flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(CurrencyDollarIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
                _push2(`<p class="text-base leading-4" data-v-670b567e${_scopeId}>Currency</p>`);
              } else {
                return [
                  createVNode(unref(CurrencyDollarIcon), { class: "h-6 w-6" }),
                  createVNode("p", { class: "text-base leading-4" }, "Currency")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="" data-v-670b567e><img src="/img/gno_logo.png" class="h-16" alt="" data-v-670b567e></div><div class="flex w-full items-center justify-between px-6" data-v-670b567e><div class="flex items-center justify-center space-x-2" data-v-670b567e><div data-v-670b567e>`);
        if (user.value.avatar) {
          _push(`<img class="rounded-full"${ssrRenderAttr("src", user.value.avatar)}${ssrRenderAttr("alt", user.value.firstname)} data-v-670b567e>`);
        } else {
          _push(ssrRenderComponent(unref(UserCircleIcon), { class: "h-8 w-8 text-white" }, null, _parent));
        }
        _push(`</div><div class="flex flex-col items-start justify-start" data-v-670b567e><p class="cursor-pointer text-sm leading-5 text-white" data-v-670b567e>${ssrInterpolate(user.value.firstname)} ${ssrInterpolate(user.value.lastname)}</p><p class="cursor-pointer text-xs leading-3 text-gray-300" data-v-670b567e>${ssrInterpolate(user.value.email)}</p></div></div><div data-v-670b567e>`);
        if (loading.value == 0) {
          _push(ssrRenderComponent(unref(LogoutIcon), {
            onClick: ($event) => logout(),
            class: "h-6 w-6 cursor-pointer text-white"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (loading.value == 1) {
          _push(`<svg class="mt-1 h-6 w-6 animate-spin cursor-wait text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" data-v-670b567e><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-670b567e></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-670b567e></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-670b567e"]]);
export {
  Sidebar as default
};
