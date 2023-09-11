import { ref, onMounted, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { CheckCircleIcon, BanIcon } from "@heroicons/vue/solid";
import "@vue-stripe/vue-stripe";
import "axios";
const _sfc_main = {
  __name: "Pack",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    onMounted(async () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white xl:w-[90%]" }, _attrs))}><section class=""><div class="container mx-auto px-6 py-8"><div class="text-center"><h2 class="text-4xl font-bold uppercase">${ssrInterpolate(_ctx.$t("create-account"))}</h2><p class="mt-4 text-gray-500">${ssrInterpolate(_ctx.$t("register-desc"))}.</p></div><div class="-mx-6 mt-16 grid gap-6 px-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4"><div class="transform rounded-lg px-6 py-4 shadow transition-colors duration-200 hover:bg-gray-50"><div class="text-center"><p class="text-3xl font-semibold uppercase text-gray-800">${ssrInterpolate(_ctx.$t("pack"))} <br> ${ssrInterpolate(_ctx.$t("particular"))}</p><h4 class="dark:text-gray-400 mt-2 text-gray-600"> (${ssrInterpolate(_ctx.$t("physical-person"))}) </h4><p class="mt-4 text-gray-500">${ssrInterpolate(_ctx.$t("essential-features"))}</p><h4 class="mt-2 text-5xl font-semibold uppercase text-gray-800">${ssrInterpolate(_ctx.$t("free"))}</h4><p class="mt-4 text-gray-500">${ssrInterpolate(_ctx.$t("unlimited"))}</p></div><div class="mt-8 space-y-8"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc1"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc2"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc3"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc4"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc5"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc6"))}</span></div></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: {
          name: "register",
          params: { type: "particular" }
        },
        class: "mt-10 block w-full transform rounded-md bg-primary-blue px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("register"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("register")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="transform rounded-lg px-6 py-4 shadow transition-colors duration-200 hover:bg-gray-50"><div class="text-center"><p class="text-3xl font-semibold uppercase text-gray-800">${ssrInterpolate(_ctx.$t("pack"))} <br> PRO </p><h4 class="dark:text-gray-400 mt-2 text-gray-600"> (${ssrInterpolate(_ctx.$t("corporation"))}) </h4><p class="mt-4 text-gray-500">${ssrInterpolate(_ctx.$t("essential-features"))}</p><h4 class="mt-2 text-5xl font-semibold uppercase text-gray-800">${ssrInterpolate(_ctx.$t("free"))}</h4><p class="mt-4 text-gray-500">${ssrInterpolate(_ctx.$t("unlimited"))}</p></div><div class="mt-8 space-y-8"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc1"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(BanIcon), { class: "h-5 w-5 text-red-500" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc2"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(BanIcon), { class: "h-5 w-5 text-red-500" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc3"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc4"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(BanIcon), { class: "h-5 w-5 text-red-500" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc8"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc7"))}</span></div></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: {
          name: "register",
          params: { type: "business1" }
        },
        class: "mt-10 block w-full transform rounded-md bg-primary-blue px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("register"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("register")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="transform rounded-lg bg-primary-blue px-6 py-4 shadow transition-colors duration-200"><div class="text-center"><p class="text-3xl font-semibold uppercase text-white">${ssrInterpolate(_ctx.$t("pack"))} <br> ${ssrInterpolate(_ctx.$t("business"))}</p><h4 class="dark:text-gray-400 mt-2 text-gray-100"> (${ssrInterpolate(_ctx.$t("corporation"))}) </h4><p class="mt-4 text-gray-100">${ssrInterpolate(_ctx.$t("advanced-features"))}</p><h4 class="mt-2 animate-pulse text-5xl font-semibold text-white"> $50.00 </h4><p class="mt-4 text-gray-100">/ ${ssrInterpolate(_ctx.$t("year"))}</p></div><div class="mt-8 space-y-8"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-white" }, null, _parent));
      _push(`<span class="mx-4 text-gray-100">${ssrInterpolate(_ctx.$t("plan-desc1"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-white" }, null, _parent));
      _push(`<span class="mx-4 text-gray-100">${ssrInterpolate(_ctx.$t("plan-desc2"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-white" }, null, _parent));
      _push(`<span class="mx-4 text-gray-100">${ssrInterpolate(_ctx.$t("plan-desc3"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-white" }, null, _parent));
      _push(`<span class="mx-4 text-gray-100">${ssrInterpolate(_ctx.$t("plan-desc4"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-white" }, null, _parent));
      _push(`<span class="mx-4 text-gray-100">${ssrInterpolate(_ctx.$t("plan-desc8"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-white" }, null, _parent));
      _push(`<span class="mx-4 text-gray-100">${ssrInterpolate(_ctx.$t("plan-desc7"))}</span></div></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: {
          name: "register",
          params: { type: "business2" }
        },
        class: "mt-10 block w-full transform rounded-md bg-white px-4 py-2 text-center font-medium capitalize tracking-wide text-primary-blue transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("register"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("register")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="transform rounded-lg bg-white px-6 py-4 shadow transition-colors duration-200 hover:bg-gray-50"><div class="text-center"><p class="text-3xl font-semibold uppercase text-gray-800">${ssrInterpolate(_ctx.$t("pack"))} <br> ${ssrInterpolate(_ctx.$t("politic"))}</p><h4 class="dark:text-gray-400 mt-2 text-gray-600"> (${ssrInterpolate(_ctx.$t("ip"))}) </h4><p class="mt-4 text-gray-500">${ssrInterpolate(_ctx.$t("essential-features"))}</p><h4 class="mt-2 text-5xl font-semibold uppercase text-gray-800">${ssrInterpolate(_ctx.$t("free"))}</h4><p class="mt-4 text-gray-500">${ssrInterpolate(_ctx.$t("unlimited"))}</p></div><div class="mt-8 space-y-8"><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc1"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc2"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc3"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc4"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc8"))}</span></div><div class="flex items-center">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary-blue" }, null, _parent));
      _push(`<span class="mx-4 text-gray-700">${ssrInterpolate(_ctx.$t("plan-desc7"))}</span></div></div>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "register", params: { type: "ip" } },
        class: "mt-10 block w-full transform rounded-md bg-primary-blue px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-primary-blue focus:bg-primary-blue focus:outline-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("register"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("register")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><div class="md:text-md mb-4 h-16 p-4 text-center text-lg">${ssrInterpolate(_ctx.$t("already-signup"))} `);
      _push(ssrRenderComponent(_component_router_link, {
        class: "text-primary-blue hover:underline",
        to: { name: "login" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("login"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("login")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/Pack.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
