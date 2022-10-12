import { ref, onMounted, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createTextVNode, useSSRContext, reactive } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { PlusCircleIcon, UserCircleIcon } from "@heroicons/vue/solid";
import { u as useUsers } from "./userServices.c296645b.mjs";
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
  __name: "UserIndex",
  __ssrInlineRender: true,
  setup(__props) {
    const { users, getUsers, destroyUser, updateStatusUser, loading, errors } = useUsers();
    const searchField = ref("firstname");
    const searchValue = ref("");
    onMounted(async () => {
      await getUsers();
    });
    const deleteUser = async (id) => {
      if (confirm("I you Sure ?")) {
        await destroyUser(id);
        if (errors.value == "") {
          await getUsers();
        }
      }
    };
    const desactiveUser = async (id, s) => {
      const status = reactive({
        status: s
      });
      if (confirm("I you Sure ?")) {
        await updateStatusUser(id, { ...status });
        if (errors.value == "") {
          await getUsers();
        }
      }
    };
    const activeUser = async (id, s) => {
      const status = reactive({
        status: s
      });
      if (confirm("I you Sure ?")) {
        await updateStatusUser(id, { ...status });
        if (errors.value == "") {
          await getUsers();
        }
      }
    };
    const headers = [
      { text: "AVATAR", value: "avatar" },
      { text: "FIRSTNAME", value: "firstname" },
      { text: "EMAIL", value: "email" },
      { text: "TYPE", value: "type" },
      { text: "STATUS", value: "status" },
      { text: "ACTION", value: "id" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-auto min-h-screen w-full bg-white xl:mt-0 xl:p-4" }, _attrs))}><div class="z-0 h-full w-full p-4"><div class="flex justify-between bg-white px-8 py-5"><h1 class="text-4xl font-bold capitalize text-primary-blue"> User </h1>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: {
          name: "admin.user.create"
        },
        class: "flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PlusCircleIcon), { class: "h-6 w-6" }, null, _parent2, _scopeId));
            _push2(`<p class="text-base leading-4"${_scopeId}>Add User</p>`);
          } else {
            return [
              createVNode(unref(PlusCircleIcon), { class: "h-6 w-6" }),
              createVNode("p", { class: "text-base leading-4" }, "Add User")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-4"><label for="table-search" class="sr-only">Search</label><div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input${ssrRenderAttr("value", searchValue.value)} type="text" id="table-search" class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue" placeholder="Search for items"></div></div>`);
      _push(ssrRenderComponent(_component_EasyDataTable, {
        headers,
        items: unref(users),
        alternating: "",
        "search-field": searchField.value,
        "search-value": searchValue.value,
        "show-index": "",
        "buttons-pagination": ""
      }, {
        "item-avatar": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.avatar) {
              _push2(`<img${ssrRenderAttr("src", item.avatar)} alt="" class="h-12 w-12 rounded-full object-cover"${_scopeId}>`);
            } else {
              _push2(ssrRenderComponent(unref(UserCircleIcon), { class: "h-12 w-12 text-gray-700" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              item.avatar ? (openBlock(), createBlock("img", {
                key: 0,
                src: item.avatar,
                alt: "",
                class: "h-12 w-12 rounded-full object-cover"
              }, null, 8, ["src"])) : (openBlock(), createBlock(unref(UserCircleIcon), {
                key: 1,
                class: "h-12 w-12 text-gray-700"
              }))
            ];
          }
        }),
        "item-status": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.status == 1) {
              _push2(`<span class="rounded-full bg-green-500 p-2 text-white"${_scopeId}>Actived</span>`);
            } else {
              _push2(`<span class="rounded-full bg-red-500 p-2 text-white"${_scopeId}>Desactived</span>`);
            }
          } else {
            return [
              item.status == 1 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "rounded-full bg-green-500 p-2 text-white"
              }, "Actived")) : (openBlock(), createBlock("span", {
                key: 1,
                class: "rounded-full bg-red-500 p-2 text-white"
              }, "Desactived"))
            ];
          }
        }),
        "item-id": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_router_link, {
              to: {
                name: "admin.user.edit",
                params: { id: item.id }
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
            _push2(`<button type="button" class="dark:text-blue-500 ml-3 text-red-600 hover:underline"${_scopeId}> Delete </button>`);
            if (item.status == 1) {
              _push2(`<button type="button" class="dark:text-blue-500 ml-3 text-purple-600 hover:underline"${_scopeId}> Desactived </button>`);
            } else {
              _push2(`<button type="button" class="dark:text-blue-500 ml-3 text-purple-600 hover:underline"${_scopeId}> Actived </button>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_router_link, {
                  to: {
                    name: "admin.user.edit",
                    params: { id: item.id }
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
                  onClick: ($event) => deleteUser(item.id),
                  class: "dark:text-blue-500 ml-3 text-red-600 hover:underline"
                }, " Delete ", 8, ["onClick"]),
                item.status == 1 ? (openBlock(), createBlock("button", {
                  key: 0,
                  type: "button",
                  onClick: ($event) => desactiveUser(item.id, 3),
                  class: "dark:text-blue-500 ml-3 text-purple-600 hover:underline"
                }, " Desactived ", 8, ["onClick"])) : (openBlock(), createBlock("button", {
                  key: 1,
                  type: "button",
                  onClick: ($event) => activeUser(item.id, 1),
                  class: "dark:text-blue-500 ml-3 text-purple-600 hover:underline"
                }, " Actived ", 8, ["onClick"]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/user/UserIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
