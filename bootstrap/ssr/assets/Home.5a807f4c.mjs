import { mergeProps, unref, useSSRContext, ref, onMounted, resolveComponent, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, reactive, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "./Error.a4f77a94.mjs";
import { u as useAuth } from "./authServices.2a79b253.mjs";
import { _ as _sfc_main$3 } from "./FilterArticle.b7ba1761.mjs";
import { PhotographIcon, CalendarIcon, UserIcon, ChatIcon, EmojiSadIcon, OfficeBuildingIcon } from "@heroicons/vue/solid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
/* empty css                           */import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "vue-router";
import "vue-i18n";
const _sfc_main$2 = {
  __name: "Slider",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [1, 2, 3];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full animate-pulse space-x-3 p-4 lg:flex" }, _attrs))}><div class="h-[400px] bg-gray-100 lg:w-1/2">`);
      _push(ssrRenderComponent(unref(PhotographIcon), { class: "h-full w-full text-gray-200" }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-1/2"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="rounded bg-gray-100 shadow"><div class="mx-auto w-full overflow-hidden md:h-[190px]">`);
        _push(ssrRenderComponent(unref(PhotographIcon), { class: "h-full w-full text-gray-200" }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/skeleton/Slider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Caroussel",
  __ssrInlineRender: true,
  setup(__props) {
    const token = localStorage.token;
    const posts = ref([]);
    const errors = ref("");
    const loading = ref(0);
    onMounted(async () => {
      errors.value = "";
      loading.value = 1;
      let response = await axios.get("/api/posts-caroussel/" + localStorage.lang);
      posts.value = response.data.data;
      loading.value = 2;
    });
    const modules = [Autoplay];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      if (posts.value.length != 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3 p-4 lg:flex lg:space-x-3 lg:space-y-0" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(Swiper), {
          class: "h-[400px] w-full",
          centeredSlides: true,
          autoplay: { delay: 2500, disableOnInteraction: false },
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
                        _push3(ssrRenderComponent(_component_router_link, { to: {
                          name: "login",
                          params: { redirect: "not-login" }
                        } }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white"${_scopeId3}><div${_scopeId3}><a href="#" class="rounded py-1 px-2 text-xs capitalize" style="${ssrRenderStyle("background:" + post.ministry.color)}"${_scopeId3}>`);
                              if (_ctx.$i18n.locale == "en") {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(post.ministry.name_en)}</span>`);
                              } else if (_ctx.$i18n.locale == "fr") {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(post.ministry.name_fr)}</span>`);
                              } else if (_ctx.$i18n.locale == "es") {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(post.ministry.name_es)}</span>`);
                              } else {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(post.country.name_pt)}</span>`);
                              }
                              _push4(`</a></div><div${_scopeId3}><a href="#" class="text-lg hover:text-primary-blue"${_scopeId3}>${ssrInterpolate(post.title)}</a></div><div class="flex space-x-2 text-xs"${_scopeId3}><div class="flex space-x-1"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                              _push4(`<a href="#" class="hover:text-primary-blue"${_scopeId3}>${ssrInterpolate(new Date(post.date).toLocaleDateString(
                                "fr-FR",
                                {
                                  day: "numeric",
                                  year: "numeric",
                                  month: "long"
                                }
                              ))}</a></div><div class="flex space-x-1"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                              _push4(`<a href="#" class="hover:text-primary-blue"${_scopeId3}>${ssrInterpolate(post.user.firstname)}</a></div><div class="flex space-x-1"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                              _push4(`<a href="#" class="hover:text-primary-blue"${_scopeId3}>${ssrInterpolate(post.comments)}</a></div></div></div><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="h-full w-full object-cover"${_scopeId3}>`);
                            } else {
                              return [
                                createVNode("div", { class: "absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white" }, [
                                  createVNode("div", null, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "rounded py-1 px-2 text-xs capitalize",
                                      style: "background:" + post.ministry.color
                                    }, [
                                      _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(post.ministry.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(post.ministry.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(post.ministry.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(post.country.name_pt), 1))
                                    ], 4)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "text-lg hover:text-primary-blue"
                                    }, toDisplayString(post.title), 1)
                                  ]),
                                  createVNode("div", { class: "flex space-x-2 text-xs" }, [
                                    createVNode("div", { class: "flex space-x-1" }, [
                                      createVNode(unref(CalendarIcon), { class: "h-4 w-4" }),
                                      createVNode("a", {
                                        href: "#",
                                        class: "hover:text-primary-blue"
                                      }, toDisplayString(new Date(post.date).toLocaleDateString(
                                        "fr-FR",
                                        {
                                          day: "numeric",
                                          year: "numeric",
                                          month: "long"
                                        }
                                      )), 1)
                                    ]),
                                    createVNode("div", { class: "flex space-x-1" }, [
                                      createVNode(unref(UserIcon), { class: "h-4 w-4" }),
                                      createVNode("a", {
                                        href: "#",
                                        class: "hover:text-primary-blue"
                                      }, toDisplayString(post.user.firstname), 1)
                                    ]),
                                    createVNode("div", { class: "flex space-x-1" }, [
                                      createVNode(unref(ChatIcon), { class: "h-4 w-4" }),
                                      createVNode("a", {
                                        href: "#",
                                        class: "hover:text-primary-blue"
                                      }, toDisplayString(post.comments), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("img", {
                                  src: post.image,
                                  alt: post.title,
                                  class: "h-full w-full object-cover"
                                }, null, 8, ["src", "alt"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(_component_router_link, {
                          to: {
                            name: "show.post",
                            params: { id: post.id }
                          }
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white"${_scopeId3}><div${_scopeId3}><a href="#" class="rounded py-1 px-2 text-xs capitalize" style="${ssrRenderStyle("background:" + post.ministry.color)}"${_scopeId3}>`);
                              if (_ctx.$i18n.locale == "en") {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(post.ministry.name_en)}</span>`);
                              } else if (_ctx.$i18n.locale == "fr") {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(post.ministry.name_fr)}</span>`);
                              } else if (_ctx.$i18n.locale == "es") {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(post.ministry.name_es)}</span>`);
                              } else {
                                _push4(`<span${_scopeId3}>${ssrInterpolate(post.country.name_pt)}</span>`);
                              }
                              _push4(`</a></div><div${_scopeId3}><a href="#" class="text-lg hover:text-primary-blue"${_scopeId3}>${ssrInterpolate(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "...")}</a></div><div class="flex space-x-2 text-xs"${_scopeId3}><div class="flex space-x-1"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                              _push4(`<a href="#" class="hover:text-primary-blue"${_scopeId3}>${ssrInterpolate(new Date(post.date).toLocaleDateString(
                                "fr-FR",
                                {
                                  day: "numeric",
                                  year: "numeric",
                                  month: "long"
                                }
                              ))}</a></div><div class="flex space-x-1"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                              _push4(`<a href="#" class="hover:text-primary-blue"${_scopeId3}>${ssrInterpolate(post.user.firstname)}</a></div><div class="flex space-x-1"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                              _push4(`<a href="#" class="hover:text-primary-blue"${_scopeId3}>${ssrInterpolate(post.comments)}</a></div></div></div><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="h-full w-full object-cover"${_scopeId3}>`);
                            } else {
                              return [
                                createVNode("div", { class: "absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white" }, [
                                  createVNode("div", null, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "rounded py-1 px-2 text-xs capitalize",
                                      style: "background:" + post.ministry.color
                                    }, [
                                      _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(post.ministry.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(post.ministry.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(post.ministry.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(post.country.name_pt), 1))
                                    ], 4)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "text-lg hover:text-primary-blue"
                                    }, toDisplayString(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "..."), 1)
                                  ]),
                                  createVNode("div", { class: "flex space-x-2 text-xs" }, [
                                    createVNode("div", { class: "flex space-x-1" }, [
                                      createVNode(unref(CalendarIcon), { class: "h-4 w-4" }),
                                      createVNode("a", {
                                        href: "#",
                                        class: "hover:text-primary-blue"
                                      }, toDisplayString(new Date(post.date).toLocaleDateString(
                                        "fr-FR",
                                        {
                                          day: "numeric",
                                          year: "numeric",
                                          month: "long"
                                        }
                                      )), 1)
                                    ]),
                                    createVNode("div", { class: "flex space-x-1" }, [
                                      createVNode(unref(UserIcon), { class: "h-4 w-4" }),
                                      createVNode("a", {
                                        href: "#",
                                        class: "hover:text-primary-blue"
                                      }, toDisplayString(post.user.firstname), 1)
                                    ]),
                                    createVNode("div", { class: "flex space-x-1" }, [
                                      createVNode(unref(ChatIcon), { class: "h-4 w-4" }),
                                      createVNode("a", {
                                        href: "#",
                                        class: "hover:text-primary-blue"
                                      }, toDisplayString(post.comments), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("img", {
                                  src: post.image,
                                  alt: post.title,
                                  class: "h-full w-full object-cover"
                                }, null, 8, ["src", "alt"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      }
                    } else {
                      return [
                        !unref(token) ? (openBlock(), createBlock(_component_router_link, {
                          key: 0,
                          to: {
                            name: "login",
                            params: { redirect: "not-login" }
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white" }, [
                              createVNode("div", null, [
                                createVNode("a", {
                                  href: "#",
                                  class: "rounded py-1 px-2 text-xs capitalize",
                                  style: "background:" + post.ministry.color
                                }, [
                                  _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(post.ministry.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(post.ministry.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(post.ministry.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(post.country.name_pt), 1))
                                ], 4)
                              ]),
                              createVNode("div", null, [
                                createVNode("a", {
                                  href: "#",
                                  class: "text-lg hover:text-primary-blue"
                                }, toDisplayString(post.title), 1)
                              ]),
                              createVNode("div", { class: "flex space-x-2 text-xs" }, [
                                createVNode("div", { class: "flex space-x-1" }, [
                                  createVNode(unref(CalendarIcon), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "#",
                                    class: "hover:text-primary-blue"
                                  }, toDisplayString(new Date(post.date).toLocaleDateString(
                                    "fr-FR",
                                    {
                                      day: "numeric",
                                      year: "numeric",
                                      month: "long"
                                    }
                                  )), 1)
                                ]),
                                createVNode("div", { class: "flex space-x-1" }, [
                                  createVNode(unref(UserIcon), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "#",
                                    class: "hover:text-primary-blue"
                                  }, toDisplayString(post.user.firstname), 1)
                                ]),
                                createVNode("div", { class: "flex space-x-1" }, [
                                  createVNode(unref(ChatIcon), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "#",
                                    class: "hover:text-primary-blue"
                                  }, toDisplayString(post.comments), 1)
                                ])
                              ])
                            ]),
                            createVNode("img", {
                              src: post.image,
                              alt: post.title,
                              class: "h-full w-full object-cover"
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 2
                        }, 1024)) : (openBlock(), createBlock(_component_router_link, {
                          key: 1,
                          to: {
                            name: "show.post",
                            params: { id: post.id }
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white" }, [
                              createVNode("div", null, [
                                createVNode("a", {
                                  href: "#",
                                  class: "rounded py-1 px-2 text-xs capitalize",
                                  style: "background:" + post.ministry.color
                                }, [
                                  _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(post.ministry.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(post.ministry.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(post.ministry.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(post.country.name_pt), 1))
                                ], 4)
                              ]),
                              createVNode("div", null, [
                                createVNode("a", {
                                  href: "#",
                                  class: "text-lg hover:text-primary-blue"
                                }, toDisplayString(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "..."), 1)
                              ]),
                              createVNode("div", { class: "flex space-x-2 text-xs" }, [
                                createVNode("div", { class: "flex space-x-1" }, [
                                  createVNode(unref(CalendarIcon), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "#",
                                    class: "hover:text-primary-blue"
                                  }, toDisplayString(new Date(post.date).toLocaleDateString(
                                    "fr-FR",
                                    {
                                      day: "numeric",
                                      year: "numeric",
                                      month: "long"
                                    }
                                  )), 1)
                                ]),
                                createVNode("div", { class: "flex space-x-1" }, [
                                  createVNode(unref(UserIcon), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "#",
                                    class: "hover:text-primary-blue"
                                  }, toDisplayString(post.user.firstname), 1)
                                ]),
                                createVNode("div", { class: "flex space-x-1" }, [
                                  createVNode(unref(ChatIcon), { class: "h-4 w-4" }),
                                  createVNode("a", {
                                    href: "#",
                                    class: "hover:text-primary-blue"
                                  }, toDisplayString(post.comments), 1)
                                ])
                              ])
                            ]),
                            createVNode("img", {
                              src: post.image,
                              alt: post.title,
                              class: "h-full w-full object-cover"
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 2
                        }, 1032, ["to"]))
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
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white" }, [
                            createVNode("div", null, [
                              createVNode("a", {
                                href: "#",
                                class: "rounded py-1 px-2 text-xs capitalize",
                                style: "background:" + post.ministry.color
                              }, [
                                _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(post.ministry.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(post.ministry.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(post.ministry.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(post.country.name_pt), 1))
                              ], 4)
                            ]),
                            createVNode("div", null, [
                              createVNode("a", {
                                href: "#",
                                class: "text-lg hover:text-primary-blue"
                              }, toDisplayString(post.title), 1)
                            ]),
                            createVNode("div", { class: "flex space-x-2 text-xs" }, [
                              createVNode("div", { class: "flex space-x-1" }, [
                                createVNode(unref(CalendarIcon), { class: "h-4 w-4" }),
                                createVNode("a", {
                                  href: "#",
                                  class: "hover:text-primary-blue"
                                }, toDisplayString(new Date(post.date).toLocaleDateString(
                                  "fr-FR",
                                  {
                                    day: "numeric",
                                    year: "numeric",
                                    month: "long"
                                  }
                                )), 1)
                              ]),
                              createVNode("div", { class: "flex space-x-1" }, [
                                createVNode(unref(UserIcon), { class: "h-4 w-4" }),
                                createVNode("a", {
                                  href: "#",
                                  class: "hover:text-primary-blue"
                                }, toDisplayString(post.user.firstname), 1)
                              ]),
                              createVNode("div", { class: "flex space-x-1" }, [
                                createVNode(unref(ChatIcon), { class: "h-4 w-4" }),
                                createVNode("a", {
                                  href: "#",
                                  class: "hover:text-primary-blue"
                                }, toDisplayString(post.comments), 1)
                              ])
                            ])
                          ]),
                          createVNode("img", {
                            src: post.image,
                            alt: post.title,
                            class: "h-full w-full object-cover"
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock(_component_router_link, {
                        key: 1,
                        to: {
                          name: "show.post",
                          params: { id: post.id }
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover px-8 py-6 text-white" }, [
                            createVNode("div", null, [
                              createVNode("a", {
                                href: "#",
                                class: "rounded py-1 px-2 text-xs capitalize",
                                style: "background:" + post.ministry.color
                              }, [
                                _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(post.ministry.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(post.ministry.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(post.ministry.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(post.country.name_pt), 1))
                              ], 4)
                            ]),
                            createVNode("div", null, [
                              createVNode("a", {
                                href: "#",
                                class: "text-lg hover:text-primary-blue"
                              }, toDisplayString(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "..."), 1)
                            ]),
                            createVNode("div", { class: "flex space-x-2 text-xs" }, [
                              createVNode("div", { class: "flex space-x-1" }, [
                                createVNode(unref(CalendarIcon), { class: "h-4 w-4" }),
                                createVNode("a", {
                                  href: "#",
                                  class: "hover:text-primary-blue"
                                }, toDisplayString(new Date(post.date).toLocaleDateString(
                                  "fr-FR",
                                  {
                                    day: "numeric",
                                    year: "numeric",
                                    month: "long"
                                  }
                                )), 1)
                              ]),
                              createVNode("div", { class: "flex space-x-1" }, [
                                createVNode(unref(UserIcon), { class: "h-4 w-4" }),
                                createVNode("a", {
                                  href: "#",
                                  class: "hover:text-primary-blue"
                                }, toDisplayString(post.user.firstname), 1)
                              ]),
                              createVNode("div", { class: "flex space-x-1" }, [
                                createVNode(unref(ChatIcon), { class: "h-4 w-4" }),
                                createVNode("a", {
                                  href: "#",
                                  class: "hover:text-primary-blue"
                                }, toDisplayString(post.comments), 1)
                              ])
                            ])
                          ]),
                          createVNode("img", {
                            src: post.image,
                            alt: post.title,
                            class: "h-full w-full object-cover"
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1032, ["to"]))
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="grid w-full grid-cols-1 gap-4 md:h-[400px] md:grid-cols-2"><!--[-->`);
        ssrRenderList(posts.value, (post) => {
          _push(`<div class="relative md:h-[190px]">`);
          _push(ssrRenderComponent(_component_router_link, {
            to: {
              name: "show.post",
              params: { id: post.id }
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover p-4 text-white"${_scopeId}><div${_scopeId}><a href="#" class="text-md hover:text-primary-blue"${_scopeId}>${ssrInterpolate(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "...")}</a></div><div class="flex space-x-2 text-xs"${_scopeId}><div class="flex space-x-1"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`<a href="#" class="hover:text-primary-blue"${_scopeId}>${ssrInterpolate(new Date(post.date).toLocaleDateString(
                  "fr-FR",
                  {
                    day: "numeric",
                    year: "numeric",
                    month: "long"
                  }
                ))}</a></div><div class="flex space-x-1"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`<a href="#" class="hover:text-primary-blue"${_scopeId}>${ssrInterpolate(post.comments)}</a></div></div></div><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="h-60 w-full object-cover md:h-full"${_scopeId}>`);
              } else {
                return [
                  createVNode("div", { class: "absolute flex h-full w-full flex-col justify-end space-y-1 bg-black/25 object-cover p-4 text-white" }, [
                    createVNode("div", null, [
                      createVNode("a", {
                        href: "#",
                        class: "text-md hover:text-primary-blue"
                      }, toDisplayString(post.title.length <= 20 ? post.title : post.title.substring(0, 19) + "..."), 1)
                    ]),
                    createVNode("div", { class: "flex space-x-2 text-xs" }, [
                      createVNode("div", { class: "flex space-x-1" }, [
                        createVNode(unref(CalendarIcon), { class: "h-4 w-4" }),
                        createVNode("a", {
                          href: "#",
                          class: "hover:text-primary-blue"
                        }, toDisplayString(new Date(post.date).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            year: "numeric",
                            month: "long"
                          }
                        )), 1)
                      ]),
                      createVNode("div", { class: "flex space-x-1" }, [
                        createVNode(unref(ChatIcon), { class: "h-4 w-4" }),
                        createVNode("a", {
                          href: "#",
                          class: "hover:text-primary-blue"
                        }, toDisplayString(post.comments), 1)
                      ])
                    ])
                  ]),
                  createVNode("img", {
                    src: post.image,
                    alt: post.title,
                    class: "h-60 w-full object-cover md:h-full"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else if (loading.value == 1) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex animate-pulse flex-col items-center justify-center p-28 text-gray-500" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(EmojiSadIcon), { class: "h-16 w-16" }, null, _parent));
        _push(`<span class="mt-2 text-2xl">${ssrInterpolate(_ctx.$t("no-content"))}</span></div>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Caroussel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const token = localStorage.token;
    const ministries = ref([]);
    const loading = ref(0);
    ref(0);
    const articles1 = ref([]);
    const articles2 = ref([]);
    const articles3 = ref([]);
    const articles4 = ref([]);
    const ministry1 = ref("");
    const ministry2 = ref("");
    const ministry3 = ref("");
    const ministry4 = ref("");
    const jobOffersHome = ref([]);
    reactive({
      email: "",
      password: ""
    });
    useAuth();
    onMounted(async () => {
      loading.value = 1;
      let response = await axios.get("/api/ministries-home");
      ministries.value = response.data.data;
      ministry1.value = ministries.value[0];
      ministry2.value = ministries.value[1];
      ministry3.value = ministries.value[2];
      ministry4.value = ministries.value[3];
      response = await axios.get(
        "/api/posts-home/" + localStorage.lang + "/" + ministry1.value.id
      );
      articles1.value = response.data.data;
      response = await axios.get(
        "/api/posts-home/" + localStorage.lang + "/" + ministry2.value.id
      );
      articles2.value = response.data.data;
      response = await axios.get(
        "/api/posts-home/" + localStorage.lang + "/" + ministry3.value.id
      );
      articles3.value = response.data.data;
      response = await axios.get(
        "/api/posts-home/" + localStorage.lang + "/" + ministry4.value.id
      );
      articles4.value = response.data.data;
      response = await axios.get("/api/jobOffers-home/");
      jobOffersHome.value = response.data.data;
      loading.value = 2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white xl:w-[90%] w-full mx-auto min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="lg:flex p-4 lg:space-x-2 space-y-4 md:space-y-0 text-lg"><div class="lg:w-[70%]"><div><h1 class="text-white px-2 py-1 inline-block" style="${ssrRenderStyle("background:" + ministry1.value.color)}">`);
      if (_ctx.$i18n.locale == "en") {
        _push(`<span>${ssrInterpolate(ministry1.value.name_en)}</span>`);
      } else if (_ctx.$i18n.locale == "fr") {
        _push(`<span>${ssrInterpolate(ministry1.value.name_fr)}</span>`);
      } else if (_ctx.$i18n.locale == "es") {
        _push(`<span>${ssrInterpolate(ministry1.value.name_es)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(ministry1.value.name_pt)}</span>`);
      }
      _push(`</h1><div class="border-t-2 text-justify py-4" style="${ssrRenderStyle("border-color:" + ministry1.value.color)}">`);
      if (articles1.value.length != 0) {
        _push(`<div class="lg:flex lg:items-start lg:space-x-2"><!--[-->`);
        ssrRenderList(articles1.value, (article, index) => {
          _push(`<div>`);
          if (index === 0) {
            _push(`<div class="overflow-hidden shadow bg-white">`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<div class="p-6"><div class="space-y-2"><div><a href="#" class="text-xs py-1 px-2 rounded text-white" style="${ssrRenderStyle(
              "background:" + ministry4.value.color
            )}">`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(ministry4.value.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(ministry4.value.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(ministry4.value.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(ministry4.value.name_pt)}</span>`);
            }
            _push(`</a></div><div>`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "text-xl font-semibold text-gray-600 hover:text-primary-blue"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div><div class="flex text-xs space-x-2 text-gray-400"><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.date)}</a></div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent));
            _push(ssrRenderComponent(_component_router_link, {
              to: { name: "compte", params: { name: article.user.firstname, id: article.user.id } },
              href: "#",
              class: "hover:text-primary-blue"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(article.user.firstname)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(article.user.firstname), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.comments)}</a></div></div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="space-y-2 grow"><!--[-->`);
        ssrRenderList(articles1.value, (article, index) => {
          _push(`<div>`);
          if (index !== 0) {
            _push(`<div class="overflow-hidden w-full h-32 flex space-x-2 shadow bg-white">`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "login",
                  params: { redirect: "not-login" }
                },
                class: "w-36"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "w-36"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<div class="space-y-2 p-2"><div>`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "text-xl font-semibold text-gray-600 hover:text-primary-blue"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div><div class="flex text-xs space-x-2 text-gray-400"><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.date)}</a></div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.comments)}</a></div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="md:flex md:space-x-3"><div class="w-full"><h1 class="text-white px-2 py-1 inline-block" style="${ssrRenderStyle("background:" + ministry2.value.color)}">`);
      if (_ctx.$i18n.locale == "en") {
        _push(`<span>${ssrInterpolate(ministry2.value.name_en)}</span>`);
      } else if (_ctx.$i18n.locale == "fr") {
        _push(`<span>${ssrInterpolate(ministry2.value.name_fr)}</span>`);
      } else if (_ctx.$i18n.locale == "es") {
        _push(`<span>${ssrInterpolate(ministry2.value.name_es)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(ministry2.value.name_pt)}</span>`);
      }
      _push(`</h1><div class="border-t-2 w-full text-justify py-4" style="${ssrRenderStyle("border-color:" + ministry2.value.color)}">`);
      if (articles2.value.length != 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(articles2.value, (article, index) => {
          _push(`<div>`);
          if (index === 0) {
            _push(`<div class="overflow-hidden shadow bg-white">`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<div class="p-6"><div class="space-y-2"><div><a href="#" class="text-xs py-1 px-2 rounded text-white" style="${ssrRenderStyle(
              "background:" + ministry2.value.color
            )}">`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(ministry2.value.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(ministry2.value.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(ministry2.value.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(ministry2.value.name_pt)}</span>`);
            }
            _push(`</a></div><div>`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "text-xl font-semibold text-gray-600 hover:text-primary-blue"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div><div class="flex text-xs space-x-2 text-gray-400"><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.date)}</a></div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent));
            _push(ssrRenderComponent(_component_router_link, {
              to: { name: "compte", params: { name: article.user.firstname, id: article.user.id } },
              href: "#",
              class: "hover:text-primary-blue"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(article.user.firstname)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(article.user.firstname), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.comments)}</a></div></div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="space-y-2"><!--[-->`);
        ssrRenderList(articles2.value, (article, index) => {
          _push(`<div>`);
          if (index !== 0) {
            _push(`<div class="overflow-hidden h-32 flex space-x-2 shadow bg-white w-full">`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "login",
                  params: { redirect: "not-login" }
                },
                class: "w-36"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "w-36"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<div class="space-y-2 p-2"><div>`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "text-xl font-semibold text-gray-600 hover:text-primary-blue"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div><div class="flex text-xs space-x-2 text-gray-400"><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.date)}</a></div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.comments)}</a></div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-full"><h1 class="text-white px-2 py-1 inline-block" style="${ssrRenderStyle("background:" + ministry3.value.color)}">`);
      if (_ctx.$i18n.locale == "en") {
        _push(`<span>${ssrInterpolate(ministry3.value.name_en)}</span>`);
      } else if (_ctx.$i18n.locale == "fr") {
        _push(`<span>${ssrInterpolate(ministry3.value.name_fr)}</span>`);
      } else if (_ctx.$i18n.locale == "es") {
        _push(`<span>${ssrInterpolate(ministry3.value.name_es)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(ministry3.value.name_pt)}</span>`);
      }
      _push(`</h1><div class="border-t-2 w-full text-justify py-4" style="${ssrRenderStyle("border-color:" + ministry3.value.color)}">`);
      if (articles3.value.length != 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(articles3.value, (article, index) => {
          _push(`<div>`);
          if (index === 0) {
            _push(`<div class="overflow-hidden shadow bg-white">`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<div class="p-6"><div class="space-y-2"><div><a href="#" class="text-xs py-1 px-2 rounded text-white" style="${ssrRenderStyle(
              "background:" + ministry3.value.color
            )}">`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(ministry3.value.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(ministry3.value.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(ministry3.value.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(ministry3.value.name_pt)}</span>`);
            }
            _push(`</a></div><div>`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "text-xl font-semibold text-gray-600 hover:text-primary-blue"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div><div class="flex text-xs space-x-2 text-gray-400"><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.date)}</a></div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent));
            _push(ssrRenderComponent(_component_router_link, {
              to: { name: "compte", params: { name: article.user.firstname, id: article.user.id } },
              href: "#",
              class: "hover:text-primary-blue"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(article.user.firstname)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(article.user.firstname), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.comments)}</a></div></div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="space-y-2"><!--[-->`);
        ssrRenderList(articles3.value, (article, index) => {
          _push(`<div>`);
          if (index !== 0) {
            _push(`<div class="overflow-hidden h-32 flex space-x-2 shadow bg-white w-full">`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "login",
                  params: { redirect: "not-login" }
                },
                class: "w-36"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "w-36"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<div class="space-y-2 p-2"><div>`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "text-xl font-semibold text-gray-600 hover:text-primary-blue"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div><div class="flex text-xs space-x-2 text-gray-400"><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.date)}</a></div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.comments)}</a></div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="my-8 flex justify-center"><div class="inline-block shadow p-2"><img src="/img/barniere-africa.png" alt=""></div></div><div><h1 class="text-white px-3 py-2 mb-3 block" style="${ssrRenderStyle("background:" + ministry4.value.color)}">`);
      if (_ctx.$i18n.locale == "en") {
        _push(`<span>${ssrInterpolate(ministry4.value.name_en)}</span>`);
      } else if (_ctx.$i18n.locale == "fr") {
        _push(`<span>${ssrInterpolate(ministry4.value.name_fr)}</span>`);
      } else if (_ctx.$i18n.locale == "es") {
        _push(`<span>${ssrInterpolate(ministry4.value.name_es)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(ministry4.value.name_pt)}</span>`);
      }
      _push(`</h1>`);
      if (articles4.value.length != 0) {
        _push(`<div class="lg:flex lg:items-start lg:space-x-2"><!--[-->`);
        ssrRenderList(articles4.value, (article, index) => {
          _push(`<div>`);
          if (index === 0) {
            _push(`<div class="overflow-hidden shadow bg-white">`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<div class="p-6"><div class="space-y-2"><div><a href="#" class="text-xs py-1 px-2 rounded text-white" style="${ssrRenderStyle(
              "background:" + ministry4.value.color
            )}">`);
            if (_ctx.$i18n.locale == "en") {
              _push(`<span>${ssrInterpolate(ministry4.value.name_en)}</span>`);
            } else if (_ctx.$i18n.locale == "fr") {
              _push(`<span>${ssrInterpolate(ministry4.value.name_fr)}</span>`);
            } else if (_ctx.$i18n.locale == "es") {
              _push(`<span>${ssrInterpolate(ministry4.value.name_es)}</span>`);
            } else {
              _push(`<span>${ssrInterpolate(ministry4.value.name_pt)}</span>`);
            }
            _push(`</a></div><div>`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, { to: {
                name: "login",
                params: { redirect: "not-login" }
              } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "text-xl font-semibold text-gray-600 hover:text-primary-blue"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`</div><div class="flex text-xs space-x-2 text-gray-400"><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.date)}</a></div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(UserIcon), { class: "h-4 w-4" }, null, _parent));
            _push(ssrRenderComponent(_component_router_link, {
              to: { name: "compte", params: { name: article.user.firstname, id: article.user.id } },
              href: "#",
              class: "hover:text-primary-blue"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(article.user.firstname)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(article.user.firstname), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.comments)}</a></div></div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="space-y-2 grow"><!--[-->`);
        ssrRenderList(articles4.value, (article, index) => {
          _push(`<div>`);
          if (index !== 0) {
            _push(`<div class="overflow-hidden h-32 flex space-x-2 shadow bg-white">`);
            if (!unref(token)) {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "login",
                  params: { redirect: "not-login" }
                },
                class: "w-36"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(ssrRenderComponent(_component_router_link, {
                to: {
                  name: "show.post",
                  params: { id: article.id }
                },
                class: "w-36"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<img${ssrRenderAttr("src", article.image)} alt="" class="object-cover w-full h-64"${_scopeId}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: article.image,
                        alt: "",
                        class: "object-cover w-full h-64"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<div class="space-y-2 p-2"><div>`);
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: { id: article.id }
              },
              class: "text-xl font-semibold text-gray-600 hover:text-primary-blue"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "...")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..."), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="flex text-xs space-x-2 text-gray-400"><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(CalendarIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.date)}</a></div><div class="flex space-x-1">`);
            _push(ssrRenderComponent(unref(ChatIcon), { class: "h-4 w-4" }, null, _parent));
            _push(`<a href="#" class="hover:text-primary-blue">${ssrInterpolate(article.comments)}</a></div></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="lg:w-[30%]">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      if (!unref(token)) {
        _push(`<div class="w-full"><h1 class="text-white px-2 py-1 bg-primary-blue inline-block">${ssrInterpolate(_ctx.$t("register"))}</h1><div class="border-t-2 w-full border-primary-blue text-justify py-4">`);
        _push(ssrRenderComponent(_component_router_link, { to: { name: "pack" } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img src="/img/barre-laterale-africa.jpg" alt="" class="object-cover mx-auto"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: "/img/barre-laterale-africa.jpg",
                  alt: "",
                  class: "object-cover mx-auto"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full"><h1 class="text-white px-2 py-1 bg-primary-blue inline-block">${ssrInterpolate(_ctx.$t("recent-posts"))}</h1><div class="border-t-2 w-full border-primary-blue text-justify py-4">`);
      if (jobOffersHome.value.length != 0) {
        _push(`<p class="p-4"><!--[-->`);
        ssrRenderList(jobOffersHome.value, (jobOffer) => {
          _push(`<div>`);
          if (!unref(token)) {
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "login",
                params: { redirect: "not-login" }
              },
              class: "flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center space-x-4"${_scopeId}><div class="hidden lg:block"${_scopeId}>`);
                  if (jobOffer.company_logo) {
                    _push2(`<img${ssrRenderAttr("src", jobOffer.company_logo)} alt="" class="w-10 h-10 object-cover"${_scopeId}>`);
                  } else {
                    _push2(ssrRenderComponent(unref(OfficeBuildingIcon), { class: "w-10 h-10 text-gray-500" }, null, _parent2, _scopeId));
                  }
                  _push2(`</div><div${_scopeId}><h1 class="capitalize text-sm"${_scopeId}>${ssrInterpolate(jobOffer.title)}</h1><h2 class="font-bold capitalize text-gray-500 text-sm"${_scopeId}>${ssrInterpolate(jobOffer.company_name)}</h2></div></div><div class=""${_scopeId}><h2 class="font-bold capitalize text-primary-blue text-sm"${_scopeId}>`);
                  if (_ctx.$i18n.locale == "en") {
                    _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_en)}</span>`);
                  } else if (_ctx.$i18n.locale == "fr") {
                    _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_fr)}</span>`);
                  } else if (_ctx.$i18n.locale == "es") {
                    _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_es)}</span>`);
                  } else {
                    _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_pt)}</span>`);
                  }
                  _push2(`</h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode("div", { class: "hidden lg:block" }, [
                        jobOffer.company_logo ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: jobOffer.company_logo,
                          alt: "",
                          class: "w-10 h-10 object-cover"
                        }, null, 8, ["src"])) : (openBlock(), createBlock(unref(OfficeBuildingIcon), {
                          key: 1,
                          class: "w-10 h-10 text-gray-500"
                        }))
                      ]),
                      createVNode("div", null, [
                        createVNode("h1", { class: "capitalize text-sm" }, toDisplayString(jobOffer.title), 1),
                        createVNode("h2", { class: "font-bold capitalize text-gray-500 text-sm" }, toDisplayString(jobOffer.company_name), 1)
                      ])
                    ]),
                    createVNode("div", { class: "" }, [
                      createVNode("h2", { class: "font-bold capitalize text-primary-blue text-sm" }, [
                        _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(jobOffer.offer_type.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(jobOffer.offer_type.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(jobOffer.offer_type.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(jobOffer.offer_type.name_pt), 1))
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.job",
                params: { id: jobOffer.id }
              },
              class: "flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center space-x-4"${_scopeId}><div class="hidden lg:block"${_scopeId}>`);
                  if (jobOffer.company_logo) {
                    _push2(`<img${ssrRenderAttr("src", jobOffer.company_logo)} alt="" class="w-10 h-10 object-cover"${_scopeId}>`);
                  } else {
                    _push2(ssrRenderComponent(unref(OfficeBuildingIcon), { class: "w-10 h-10 text-gray-500" }, null, _parent2, _scopeId));
                  }
                  _push2(`</div><div${_scopeId}><h1 class="capitalize text-sm"${_scopeId}>${ssrInterpolate(jobOffer.title)}</h1><h2 class="font-bold capitalize text-gray-500 text-sm"${_scopeId}>${ssrInterpolate(jobOffer.company_name)}</h2></div></div><div class=""${_scopeId}><h2 class="font-bold capitalize text-primary-blue text-sm"${_scopeId}>`);
                  if (_ctx.$i18n.locale == "en") {
                    _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_en)}</span>`);
                  } else if (_ctx.$i18n.locale == "fr") {
                    _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_fr)}</span>`);
                  } else if (_ctx.$i18n.locale == "es") {
                    _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_es)}</span>`);
                  } else {
                    _push2(`<span${_scopeId}>${ssrInterpolate(jobOffer.offer_type.name_pt)}</span>`);
                  }
                  _push2(`</h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode("div", { class: "hidden lg:block" }, [
                        jobOffer.company_logo ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: jobOffer.company_logo,
                          alt: "",
                          class: "w-10 h-10 object-cover"
                        }, null, 8, ["src"])) : (openBlock(), createBlock(unref(OfficeBuildingIcon), {
                          key: 1,
                          class: "w-10 h-10 text-gray-500"
                        }))
                      ]),
                      createVNode("div", null, [
                        createVNode("h1", { class: "capitalize text-sm" }, toDisplayString(jobOffer.title), 1),
                        createVNode("h2", { class: "font-bold capitalize text-gray-500 text-sm" }, toDisplayString(jobOffer.company_name), 1)
                      ])
                    ]),
                    createVNode("div", { class: "" }, [
                      createVNode("h2", { class: "font-bold capitalize text-primary-blue text-sm" }, [
                        _ctx.$i18n.locale == "en" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(jobOffer.offer_type.name_en), 1)) : _ctx.$i18n.locale == "fr" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(jobOffer.offer_type.name_fr), 1)) : _ctx.$i18n.locale == "es" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(jobOffer.offer_type.name_es), 1)) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(jobOffer.offer_type.name_pt), 1))
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-full"><h1 class="text-white px-2 py-1 bg-primary-blue inline-block">${ssrInterpolate(_ctx.$t("video"))}</h1><div class="border-t-2 w-full border-primary-blue text-justify py-4"><p class="p-4"><iframe class="w-full h-60" src="https://www.youtube.com/embed/N2WKfyIbr68" title="AfricaUnity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p></div></div><div class="w-full"><h1 class="text-white px-2 py-1 bg-primary-blue inline-block">${ssrInterpolate(_ctx.$t("presentation"))}</h1><div class="border-t-2 w-full border-primary-blue text-justify py-4"><p class="p-4"><iframe class="w-full h-60" src="https://www.youtube.com/embed/7mtO5fdzO_8" title="AfricaUnity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
