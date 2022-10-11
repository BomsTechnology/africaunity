import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const path = window.location.origin;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-md mx-auto w-full bg-[#303440] px-6 py-8 text-[#b1b6b6] xl:w-[90%]" }, _attrs))}><div class="mb-8 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between"><div><h1 class="inline-block bg-primary-blue px-2 py-1 text-white">${ssrInterpolate(_ctx.$t("about-title"))}</h1><div class="border-t-2 border-primary-blue py-4 text-justify md:w-96"><p>${ssrInterpolate(_ctx.$t("about-text"))}</p></div></div><div><h1 class="inline-block bg-primary-blue px-2 py-1 text-white"> Other </h1><div class="border-t-2 border-primary-blue py-4 text-justify lg:w-96"><p></p></div></div></div><div class="py-6 text-center lg:text-left"><p> Copyright \xA9 2022 <a${ssrRenderAttr("href", unref(path))} class="underline hover:text-white">AfricaUnity</a> | All rights reserved. </p></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
