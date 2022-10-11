import { ref, onMounted, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { PlusCircleIcon, SpeakerphoneIcon } from "@heroicons/vue/solid";
import { u as useAnnouncements } from "./announcementServices.cb974870.mjs";
import "./Error.a4f77a94.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-router";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "AnnouncementIndex",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      announcements,
      getAnnouncements,
      destroyAnnouncement,
      loading,
      errors
    } = useAnnouncements();
    ref("");
    onMounted(async () => {
      getAnnouncements();
    });
    const deleteAnnouncement = async (id) => {
      if (confirm("I you Sure ?")) {
        await destroyAnnouncement(id);
        if (errors.value == "") {
          await getAnnouncements();
        }
      }
    };
    const searchField = ref("title");
    const searchValue = ref("");
    const headers = [
      { text: "Image", value: "image" },
      { text: "Title", value: "title" },
      { text: "Author", value: "user.firstname" },
      { text: "Phone", value: "phone" },
      { text: "Price", value: "price" },
      { text: "University", value: "university.name" },
      { text: "Category", value: "category.name" },
      { text: "ACTION", value: "id" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-auto w-full xl:mt-0 xl:p-4" }, _attrs))}><div class="z-0 h-full w-full p-4"><div class="flex justify-between bg-white px-8 py-5 shadow-lg"><h1 class="text-4xl font-bold capitalize text-primary-blue"> Announcement </h1>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: {
          name: "admin.announcement.create"
        },
        class: "flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PlusCircleIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
            _push2(`<p class="text-base leading-4"${_scopeId}>Add Announcement</p>`);
          } else {
            return [
              createVNode(unref(PlusCircleIcon), { class: "h-6 w-6" }),
              createVNode("p", { class: "text-base leading-4" }, "Add Announcement")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col bg-white pt-8"><div class="overflow-x-auto shadow-lg"><div class="dark:bg-gray-800 inline-block min-w-full align-middle"><div class="p-4"><label for="table-search" class="sr-only">Search</label><div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search"${ssrRenderAttr("value", searchValue.value)} class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="Search for items"></div></div>`);
      _push(ssrRenderComponent(_component_EasyDataTable, {
        headers,
        items: unref(announcements),
        alternating: "",
        "search-field": searchField.value,
        "search-value": searchValue.value,
        "show-index": "",
        "buttons-pagination": "",
        loading: unref(loading)
      }, {
        "item-image": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-2"${_scopeId}>`);
            if (item.image) {
              _push2(`<img${ssrRenderAttr("src", item.image)} alt="" class="h-12 w-12 rounded-full object-cover"${_scopeId}>`);
            } else {
              _push2(ssrRenderComponent(unref(SpeakerphoneIcon), { class: "h-12 w-12" }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-2" }, [
                item.image ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: item.image,
                  alt: "",
                  class: "h-12 w-12 rounded-full object-cover"
                }, null, 8, ["src"])) : (openBlock(), createBlock(unref(SpeakerphoneIcon), {
                  key: 1,
                  class: "h-12 w-12"
                }))
              ])
            ];
          }
        }),
        "item-title": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.title.length <= 30 ? item.title : item.title.substring(0, 29) + "...")}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.title.length <= 30 ? item.title : item.title.substring(0, 29) + "..."), 1)
            ];
          }
        }),
        "item-price": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.price)} ${ssrInterpolate(item.currency.symbol)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.price) + " " + toDisplayString(item.currency.symbol), 1)
            ];
          }
        }),
        "item-id": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_router_link, {
              to: {
                name: "admin.announcement.edit",
                params: {
                  type: _ctx.type,
                  id: item.id
                }
              },
              class: "dark:text-blue-500 text-primary-blue hover:underline"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Edit`);
                } else {
                  return [
                    createTextVNode("Edit")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<button type="button" class="dark:text-blue-500 ml-3 text-red-600 hover:underline"${_scopeId}> Delete </button></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_router_link, {
                  to: {
                    name: "admin.announcement.edit",
                    params: {
                      type: _ctx.type,
                      id: item.id
                    }
                  },
                  class: "dark:text-blue-500 text-primary-blue hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Edit")
                  ]),
                  _: 2
                }, 1032, ["to"]),
                createVNode("button", {
                  type: "button",
                  onClick: ($event) => deleteAnnouncement(item.id),
                  class: "dark:text-blue-500 ml-3 text-red-600 hover:underline"
                }, " Delete ", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/announcement/AnnouncementIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
