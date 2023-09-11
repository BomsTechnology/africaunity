import { ref, onMounted, reactive, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, withDirectives, withModifiers, createCommentVNode, vShow, useSSRContext, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { HomeIcon, ChevronDownIcon, UserCircleIcon, MenuIcon, SearchIcon } from "@heroicons/vue/solid";
import axios$1 from "axios";
import "../app.mjs";
import { useI18n } from "vue-i18n";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
/* empty css                           */import "lodash";
import "vue-router";
import "@vueuse/core";
import "vue3-easy-data-table";
const Navigation_vue_vue_type_style_index_0_scoped_b3cd600a_lang = "";
const _sfc_main$1 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const user = ref("");
    const token = ref("");
    ref("");
    const loading = ref(0);
    onMounted(async () => {
      if (localStorage.token) {
        user.value = JSON.parse(localStorage.user);
        token.value = localStorage.token;
      }
    });
    const open = reactive({
      lang: false,
      profile: false,
      search: false,
      menu: false,
      logout: false
    });
    const logout = async () => {
      try {
        loading.value = 1;
        await axios$1.post(
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
        if (e.response.status == 401) {
          location.href = "/";
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("user");
        }
      }
    };
    onMounted(async () => {
      if (localStorage.lang) {
        locale.value = localStorage.lang;
      } else {
        localStorage.lang = locale.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-md relative z-10 flex w-full justify-between border-t-4 border-primary-blue bg-menu px-4 pb-2 font-semibold" }, _attrs))} data-v-b3cd600a><nav class="hidden lg:flex" data-v-b3cd600a>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "home" },
        class: "flex items-start justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HomeIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(HomeIcon), { class: "h-6 w-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "articles" },
        class: "px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("articles"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("articles")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a><label class="flex cursor-pointer items-center justify-center" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("profile"))} `);
      _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "ml-2 h-5 w-5" }, null, _parent));
      _push(`</label><div style="${ssrRenderStyle(open.profile ? null : { display: "none" })}" class="absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2" data-v-b3cd600a>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "particular" },
        class: "px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("particular"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("particular")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "establishment" },
        class: "px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("establishment"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("establishment")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "ip" },
        class: "px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("ip"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("ip")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "propau" },
        class: "px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("propau"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("propau")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "universities" },
        class: "px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("univerities"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("univerities")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "ads" },
        class: "px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("ads"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("ads")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "jobs" },
        class: "px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("jobs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("jobs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "contact" },
        class: "px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (token.value) {
        _push(ssrRenderComponent(_component_router_link, {
          onMouseleave: ($event) => open.logout = false,
          to: {
            name: "compte",
            params: { name: user.value.firstname, id: user.value.id }
          },
          class: "relative mx-2 bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-start space-x-2" data-v-b3cd600a${_scopeId}>`);
              if (user.value.avatar) {
                _push2(`<span data-v-b3cd600a${_scopeId}><img${ssrRenderAttr("src", user.value.avatar)} alt="" class="h-7 w-7 rounded-full border object-cover shadow" data-v-b3cd600a${_scopeId}></span>`);
              } else {
                _push2(ssrRenderComponent(unref(UserCircleIcon), { class: "h-8 w-8 text-white" }, null, _parent2, _scopeId));
              }
              _push2(`<span data-v-b3cd600a${_scopeId}>${ssrInterpolate(user.value.firstname)}</span><span data-v-b3cd600a${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              _push2(`</span></div><div style="${ssrRenderStyle(open.logout ? null : { display: "none" })}" class="absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2" data-v-b3cd600a${_scopeId}><a href="#" class="flex items-center px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a${_scopeId}>${ssrInterpolate(_ctx.$t("logout"))} `);
              if (loading.value == 1) {
                _push2(`<svg class="ml-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-b3cd600a${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-b3cd600a${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-b3cd600a${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</a></div>`);
            } else {
              return [
                createVNode("div", {
                  onMouseover: ($event) => open.logout = true,
                  class: "flex items-start space-x-2"
                }, [
                  user.value.avatar ? (openBlock(), createBlock("span", { key: 0 }, [
                    createVNode("img", {
                      src: user.value.avatar,
                      alt: "",
                      class: "h-7 w-7 rounded-full border object-cover shadow"
                    }, null, 8, ["src"])
                  ])) : (openBlock(), createBlock(unref(UserCircleIcon), {
                    key: 1,
                    class: "h-8 w-8 text-white"
                  })),
                  createVNode("span", null, toDisplayString(user.value.firstname), 1),
                  createVNode("span", null, [
                    createVNode(unref(ChevronDownIcon), { class: "h-5 w-5" })
                  ])
                ], 40, ["onMouseover"]),
                withDirectives(createVNode("div", { class: "absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2" }, [
                  createVNode("a", {
                    href: "#",
                    onClick: withModifiers(($event) => logout(), ["prevent"]),
                    class: "flex items-center px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"
                  }, [
                    createTextVNode(toDisplayString(_ctx.$t("logout")) + " ", 1),
                    loading.value == 1 ? (openBlock(), createBlock("svg", {
                      key: 0,
                      class: "ml-3 h-5 w-5 animate-spin text-white",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }),
                      createVNode("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      })
                    ])) : createCommentVNode("", true)
                  ], 8, ["onClick"])
                ], 512), [
                  [vShow, open.logout]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: "login" },
          class: "mx-2 flex bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("login"))} / ${ssrInterpolate(_ctx.$t("register"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("login")) + " / " + toDisplayString(_ctx.$t("register")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`<div class="relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a><label class="flex cursor-pointer items-center justify-center" data-v-b3cd600a>`);
      if (_ctx.$i18n.locale == "fr") {
        _push(`<span data-v-b3cd600a>${ssrInterpolate(_ctx.$t("fr"))}</span>`);
      } else if (_ctx.$i18n.locale == "en") {
        _push(`<span data-v-b3cd600a>${ssrInterpolate(_ctx.$t("en"))}</span>`);
      } else if (_ctx.$i18n.locale == "es") {
        _push(`<span data-v-b3cd600a>${ssrInterpolate(_ctx.$t("es"))}</span>`);
      } else {
        _push(`<span data-v-b3cd600a>${ssrInterpolate(_ctx.$t("pt"))}</span>`);
      }
      _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "ml-2 h-5 w-5" }, null, _parent));
      _push(`</label><div style="${ssrRenderStyle(open.lang ? null : { display: "none" })}" class="absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2" data-v-b3cd600a>`);
      if (_ctx.$i18n.locale != "fr") {
        _push(`<a href="#" class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("fr"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$i18n.locale != "en") {
        _push(`<a href="#" class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("en"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$i18n.locale != "es") {
        _push(`<a href="#" class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("es"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$i18n.locale != "pt") {
        _push(`<a href="#" class="px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("pt"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></nav><nav class="z-50 flex lg:hidden" data-v-b3cd600a><button type="button" class="flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a>`);
      _push(ssrRenderComponent(unref(HomeIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`</button><button type="button" class="flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue" data-v-b3cd600a>`);
      _push(ssrRenderComponent(unref(MenuIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle(open.menu ? null : { display: "none" })}" class="absolute mx-auto mt-12 flex w-[90%] flex-col justify-center border border-menu bg-white shadow-md" data-v-b3cd600a><a href="#" class="px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("articles"))}</a><div class="relative py-2 pl-6 uppercase text-menu" data-v-b3cd600a><label class="flex cursor-pointer items-center" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("profile"))} `);
      _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "ml-2 h-5 w-5" }, null, _parent));
      _push(`</label><div class="mt-2 flex flex-col py-2" data-v-b3cd600a><a href="#" class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("particular"))}</a><a href="#" class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("establishment"))}</a><a href="#" type="button" class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("ip"))}</a></div></div><a href="#" class="px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("propau"))}</a><a href="#" class="px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("univerities"))}</a><a href="#" class="px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("ads"))}</a><a href="#" class="px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("jobs"))}</a><a href="#" class="px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("contact"))}</a>`);
      if (token.value) {
        _push(`<a href="#" data-v-b3cd600a><div class="flex items-center space-x-2 bg-primary-blue px-3 py-2 text-sm uppercase text-white transition-colors duration-200" data-v-b3cd600a>`);
        if (user.value.avatar) {
          _push(`<span data-v-b3cd600a><img${ssrRenderAttr("src", user.value.avatar)} class="h-16 w-16 rounded-full border shadow" alt="" data-v-b3cd600a></span>`);
        } else {
          _push(ssrRenderComponent(unref(UserCircleIcon), { class: "h-8 w-8 text-white" }, null, _parent));
        }
        _push(`<span data-v-b3cd600a>${ssrInterpolate(user.value.firstname)} ${ssrInterpolate(user.value.lastname)}</span></div><div class="flex flex-col py-2" data-v-b3cd600a><a href="#" class="flex items-center px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("logout"))} `);
        if (loading.value == 1) {
          _push(`<svg class="ml-3 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-b3cd600a><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-b3cd600a></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-b3cd600a></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a></div></a>`);
      } else {
        _push(`<a href="#" class="bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("login"))} / ${ssrInterpolate(_ctx.$t("register"))}</a>`);
      }
      _push(`<div class="relative py-2 pl-6 uppercase text-menu" data-v-b3cd600a><label class="flex cursor-pointer items-center" data-v-b3cd600a>`);
      if (_ctx.$i18n.locale == "fr") {
        _push(`<span data-v-b3cd600a>${ssrInterpolate(_ctx.$t("fr"))}</span>`);
      } else if (_ctx.$i18n.locale == "en") {
        _push(`<span data-v-b3cd600a>${ssrInterpolate(_ctx.$t("en"))}</span>`);
      } else if (_ctx.$i18n.locale == "es") {
        _push(`<span data-v-b3cd600a>${ssrInterpolate(_ctx.$t("es"))}</span>`);
      } else {
        _push(`<span data-v-b3cd600a>${ssrInterpolate(_ctx.$t("pt"))}</span>`);
      }
      _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "ml-2 h-5 w-5" }, null, _parent));
      _push(`</label><div class="mt-2 flex flex-col py-2" data-v-b3cd600a>`);
      if (_ctx.$i18n.locale != "fr") {
        _push(`<a href="#" class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("fr"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$i18n.locale != "en") {
        _push(`<a href="#" class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("en"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$i18n.locale != "es") {
        _push(`<a href="#" class="px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("es"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$i18n.locale != "pt") {
        _push(`<a href="#" class="duration-200hover:text-white px-3 py-2 text-sm uppercase text-menu transition-colors hover:bg-primary-blue" data-v-b3cd600a>${ssrInterpolate(_ctx.$t("pt"))}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></nav><div class="relative" data-v-b3cd600a><button type="button" class="flex items-center justify-center px-3 py-2 text-white hover:bg-primary-blue" data-v-b3cd600a>`);
      _push(ssrRenderComponent(unref(SearchIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle(open.search ? null : { display: "none" })}" class="absolute right-0 z-40 mt-2 flex w-48 flex-col border border-menu bg-white p-2 shadow-md lg:border-0 lg:bg-menu lg:shadow-none" data-v-b3cd600a><form data-v-b3cd600a><div class="flex" data-v-b3cd600a><input type="search" class="w-32 px-3 py-2" placeholder="Recherche" data-v-b3cd600a><button type="submit" class="flex items-center justify-center bg-primary-blue px-3 py-2 text-white" data-v-b3cd600a>`);
      _push(ssrRenderComponent(unref(SearchIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`</button></div></form></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b3cd600a"]]);
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const now = new Date().toUTCString().substr(0, 16);
    const token = localStorage.token;
    const posts = ref([]);
    ref(null);
    onMounted(async () => {
      let response = await axios.get("/api/posts-caroussel/" + localStorage.lang);
      posts.value = response.data.data;
    });
    const modules = [Autoplay];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full bg-white xl:w-[90%]" }, _attrs))}><div class="flex flex-col items-center border-b border-gray-100 px-5 py-2 md:flex-row md:justify-start"><h1>${ssrInterpolate(unref(now))}</h1><h1><span class="mx-4 font-semibold">${ssrInterpolate(_ctx.$t("lastest"))} :</span>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "inline-flex h-5",
        "space-between": 0,
        "slides-per-view": 1,
        direction: "vertical",
        autoplay: { delay: 3500, disableOnInteraction: false },
        modules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(posts.value, (post) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "relative",
                key: post.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!unref(token)) {
                      _push3(ssrRenderComponent(_component_router_link, {
                        to: {
                          name: "login",
                          params: { redirect: "not-login" }
                        },
                        class: "text-primary-blue"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(post.title.substring(0, 19) + "...")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(post.title.substring(0, 19) + "..."), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<a${ssrRenderAttr("href", "/post/ " + post.id)} class="text-primary-blue"${_scopeId2}>${ssrInterpolate(post.title.substring(0, 19) + "...")}</a>`);
                    }
                  } else {
                    return [
                      !unref(token) ? (openBlock(), createBlock(_component_router_link, {
                        key: 0,
                        to: {
                          name: "login",
                          params: { redirect: "not-login" }
                        },
                        class: "text-primary-blue"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(post.title.substring(0, 19) + "..."), 1)
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock("a", {
                        key: 1,
                        href: "/post/ " + post.id,
                        class: "text-primary-blue"
                      }, toDisplayString(post.title.substring(0, 19) + "..."), 9, ["href"]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(posts.value, (post) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  class: "relative",
                  key: post.id
                }, {
                  default: withCtx(() => [
                    !unref(token) ? (openBlock(), createBlock(_component_router_link, {
                      key: 0,
                      to: {
                        name: "login",
                        params: { redirect: "not-login" }
                      },
                      class: "text-primary-blue"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(post.title.substring(0, 19) + "..."), 1)
                      ]),
                      _: 2
                    }, 1024)) : (openBlock(), createBlock("a", {
                      key: 1,
                      href: "/post/ " + post.id,
                      class: "text-primary-blue"
                    }, toDisplayString(post.title.substring(0, 19) + "..."), 9, ["href"]))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1></div><div class="flex flex-col items-center justify-center space-y-2 p-4 md:justify-between lg:flex-row lg:space-y-0"><img src="/img/logo_au.png" class="h-16 w-80" alt=""><img src="/img/barniere-africa.png" class="h-20" alt=""></div>`);
      _push(ssrRenderComponent(Navigation, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
