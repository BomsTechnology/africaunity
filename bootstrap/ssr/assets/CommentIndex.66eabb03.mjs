import { ref, onMounted, reactive, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useComments } from "./commentServices.9ab099d1.mjs";
import { E as Error } from "./Error.a4f77a94.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-router";
import "vue-i18n";
import "@heroicons/vue/solid";
import "@vueuse/core";
import "vue3-easy-data-table";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "CommentIndex",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      comments,
      getComments,
      destroyComment,
      updateComment,
      loading,
      errors
    } = useComments();
    const searchKey = ref("");
    onMounted(async () => {
      await getComments();
    });
    const deleteComment = async (id) => {
      if (confirm("I you Sure ?")) {
        await destroyComment(id);
        if (errors.value == "") {
          await getComments();
        }
      }
    };
    const modifyComment = reactive({
      id: "",
      user_id: "",
      post_id: "",
      content: ""
    });
    const selectComment = (comment) => {
      modifyComment.id = comment.id;
      modifyComment.content = comment.content;
      modifyComment.user_id = comment.user.id;
      modifyComment.post_id = comment.post.id;
    };
    const saveComment = async () => {
      await updateComment(modifyComment);
      modifyComment.id = "";
      modifyComment.content = "";
      modifyComment.user_id = "";
      modifyComment.post_id = "";
      await getComments();
    };
    const headers = [
      { text: "User", value: "user.firstname" },
      { text: "Post", value: "post.title" },
      { text: "Comment", value: "content" },
      { text: "ACTION", value: "id" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EasyDataTable = resolveComponent("EasyDataTable");
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-auto w-full xl:mt-0 xl:p-4" }, _attrs))}><div class="z-0 h-full w-full p-4"><div class="flex justify-between bg-white px-8 py-5 shadow-lg"><h1 class="text-4xl font-bold text-primary-blue">Comment</h1></div><div class="flex flex-col bg-white pt-8"><div class="overflow-x-auto shadow-lg"><div class="dark:bg-gray-800 inline-block min-w-full align-middle"><div class="p-4"><label for="table-search" class="sr-only">Search</label><div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="dark:text-gray-400 h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input${ssrRenderAttr("value", searchKey.value)} type="text" id="table-search" class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue" placeholder="Search for items"></div></div>`);
      if (unref(errors) != "") {
        _push(ssrRenderComponent(Error, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_EasyDataTable, {
        headers,
        items: unref(comments),
        alternating: "",
        "show-index": "",
        "buttons-pagination": "",
        loading: unref(loading)
      }, {
        "item-post.title": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_router_link, {
              to: {
                name: "show.post",
                params: {
                  id: item.post.id
                }
              },
              class: "hover:underline"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.post.title <= 50 ? item.post.title : item.post.title.substring(0, 49) + "...")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.post.title <= 50 ? item.post.title : item.post.title.substring(0, 49) + "..."), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_router_link, {
                to: {
                  name: "show.post",
                  params: {
                    id: item.post.id
                  }
                },
                class: "hover:underline"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.post.title <= 50 ? item.post.title : item.post.title.substring(0, 49) + "..."), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ];
          }
        }),
        "item-content": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (modifyComment.id == "" || modifyComment.id != item.id) {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.content <= 50 ? item.content : item.content.substring(0, 49) + "...")}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (modifyComment.id != "" && modifyComment.id == item.id) {
              _push2(`<form${_scopeId}><textarea required type="text" id="pt" class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"${_scopeId}>${ssrInterpolate(modifyComment.content)}</textarea><div class="mt-6 flex justify-end"${_scopeId}><button type="submit" class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"${_scopeId}> Save </button></div></form>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              modifyComment.id == "" || modifyComment.id != item.id ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(item.content <= 50 ? item.content : item.content.substring(0, 49) + "..."), 1)) : createCommentVNode("", true),
              modifyComment.id != "" && modifyComment.id == item.id ? (openBlock(), createBlock("form", {
                key: 1,
                onSubmit: withModifiers(($event) => saveComment(), ["prevent"])
              }, [
                withDirectives(createVNode("textarea", {
                  required: "",
                  "onUpdate:modelValue": ($event) => modifyComment.content = $event,
                  type: "text",
                  id: "pt",
                  class: "dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                }, "\r\n                                    ", 8, ["onUpdate:modelValue"]), [
                  [vModelText, modifyComment.content]
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                  }, " Save ")
                ])
              ], 40, ["onSubmit"])) : createCommentVNode("", true)
            ];
          }
        }),
        "item-id": withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><button type="button" class="dark:text-blue-500 text-primary-blue hover:underline"${_scopeId}> Edit </button><button type="button" class="dark:text-blue-500 ml-3 text-red-600 hover:underline"${_scopeId}> Delete </button></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("button", {
                  onClick: ($event) => selectComment(item),
                  type: "button",
                  class: "dark:text-blue-500 text-primary-blue hover:underline"
                }, " Edit ", 8, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => deleteComment(item.id),
                  type: "button",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/comment/CommentIndex.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
