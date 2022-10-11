import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { PhotographIcon } from "@heroicons/vue/solid";
const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [1, 2, 3, 4];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-pulse" }, _attrs))}><div class="grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-3"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="rounded bg-gray-100 shadow"><div class="mx-auto h-44 w-32 overflow-hidden">`);
        _push(ssrRenderComponent(unref(PhotographIcon), { class: "h-full w-full text-gray-200" }, null, _parent));
        _push(`</div><div class="flex flex-col items-center justify-center p-6"><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/skeleton/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
