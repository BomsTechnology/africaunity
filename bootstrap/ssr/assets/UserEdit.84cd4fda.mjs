import { onMounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { E as Error } from "./Error.a4f77a94.mjs";
import { u as useUsers } from "./userServices.13abed0a.mjs";
import { useRouter } from "vue-router";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-i18n";
import "@heroicons/vue/solid";
import "@vueuse/core";
import "vue3-easy-data-table";
const _sfc_main = {
  __name: "UserEdit",
  __ssrInlineRender: true,
  props: {
    id: {
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const { updateUser2, getUser, user, errors, loading } = useUsers();
    onMounted(async () => {
      await getUser(props.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-auto w-full xl:mt-0 xl:p-4" }, _attrs))}><div class="z-0 w-full p-4"><div class="flex w-full justify-between bg-white px-8 py-5 shadow-lg"><h1 class="text-4xl font-bold capitalize text-primary-blue"> Edit User </h1></div><section class="mx-auto w-full bg-white p-6 shadow-md">`);
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
      _push(`<h2 class="text-md font-light text-gray-700"> Edit a new User </h2><form id="userform"><div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"><div class="col-span-2"><label class="dark:text-gray-200 text-gray-700" for="en">Type</label><select required class="form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"><option value="particular">particular</option><option value="admin">admin</option><option value="business1">business 1</option><option value="business2">business 2</option><option value="ip">Institution politic</option></select></div>`);
      if (unref(user).type == "particular") {
        _push(`<span class="col-span-2"><div class="col-span-2"><input type="text" required${ssrRenderAttr("value", unref(user).firstname)}${ssrRenderAttr("placeholder", _ctx.$t("firstname"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="col-span-2"><input type="text" required${ssrRenderAttr("value", unref(user).lastname)}${ssrRenderAttr("placeholder", _ctx.$t("lastname"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></span>`);
      } else if (unref(user).type == "business1" || _ctx.type == "business2") {
        _push(`<span class="col-span-2"><div class="col-span-2"><input type="text" required${ssrRenderAttr("value", unref(user).firstname)}${ssrRenderAttr("placeholder", _ctx.$t("social-reason"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></span>`);
      } else {
        _push(`<span class="col-span-2"><div class="col-span-2"><input type="text" required${ssrRenderAttr("value", unref(user).firstname)}${ssrRenderAttr("placeholder", _ctx.$t("denomination"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></span>`);
      }
      _push(`<div class="col-span-2"><input type="email" required${ssrRenderAttr("value", unref(user).email)}${ssrRenderAttr("placeholder", _ctx.$t("adresse") + " " + _ctx.$t("email"))} class="form-input mt-2 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="col-span-2"><input type="password"${ssrRenderAttr("value", unref(user).password)}${ssrRenderAttr("placeholder", _ctx.$t("password"))} class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></div><div class="mt-6 flex justify-end">`);
      if (unref(loading) == 0) {
        _push(`<button type="submit" class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"> Save </button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == 1) {
        _push(`<button type="submit" disabled class="rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"><svg class="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/back/user/UserEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
