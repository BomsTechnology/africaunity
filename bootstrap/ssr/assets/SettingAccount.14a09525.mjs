import { ref, reactive, onMounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { u as useUsers } from "./userServices.c296645b.mjs";
import { E as Error } from "./Error.a4f77a94.mjs";
import { UserCircleIcon, ArrowCircleUpIcon, KeyIcon, LockClosedIcon, TrashIcon, CheckCircleIcon } from "@heroicons/vue/solid";
import "axios";
import "../app.mjs";
import "lodash";
import "vue-router";
import "vue-i18n";
import "@vueuse/core";
import "vue3-easy-data-table";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "SettingAccount",
  __ssrInlineRender: true,
  setup(__props) {
    const props = {
      name: {
        required: true,
        type: String
      },
      id: {
        required: true,
        type: String
      }
    };
    const {
      user,
      getUser,
      deleteUserData,
      destroyUserFront,
      updateUser,
      updateStatusUser,
      errors,
      updatePasswordUser
    } = useUsers();
    ref(1);
    const loading = ref(0);
    ref("");
    ref(null);
    ref(null);
    const loadingC = ref(0);
    const status = reactive({
      status: ""
    });
    const deleteD = reactive({
      user: "",
      password: ""
    });
    const deleteU = reactive({
      user: "",
      type: 1,
      password: ""
    });
    onMounted(async () => {
      loading.value = 1;
      await getUser(props.id);
      status.status = user.value.status;
      deleteD.user = user.value.id;
      deleteU.user = user.value.id;
      loading.value = 0;
    });
    const open = reactive({
      account: true,
      password: false,
      delete: false,
      conf: false
    });
    const password = reactive({
      old_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto min-h-screen w-full bg-white xl:w-[90%]" }, _attrs))}><h1 class="py-4 text-center text-4xl font-bold capitalize text-primary-blue lg:text-5xl">${ssrInterpolate(_ctx.$t("setting-account"))}</h1><div class="mx-auto flex py-8 lg:px-16"><div class="flex flex-col items-center justify-center border bg-gray-50 px-2 py-4 shadow lg:px-6">`);
      if (loading.value == 1) {
        _push(`<div class="p-28"><svg class="mx-auto h-16 w-16 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<div><div class="flex w-full flex-col items-center justify-center"><div class="h-20 w-20 overflow-hidden rounded-full lg:h-32 lg:w-32">`);
        if (unref(user).avatar) {
          _push(`<img${ssrRenderAttr("src", unref(user).avatar)} class="h-full w-full bg-cover object-cover" alt="">`);
        } else {
          _push(ssrRenderComponent(unref(UserCircleIcon), { class: "h-full w-full text-gray-500" }, null, _parent));
        }
        _push(`</div></div><h1 class="mt-2 hidden text-center text-lg font-bold capitalize lg:block lg:text-xl">${ssrInterpolate(unref(user).firstname)} `);
        if (unref(user).type == "particular") {
          _push(`<span>${ssrInterpolate(unref(user).lastname)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h1><h2 class="lg:text-md mt-1 text-center text-sm font-light">`);
        if (unref(user).type == "particular") {
          _push(`<span>${ssrInterpolate(_ctx.$t("physical-person"))}</span>`);
        } else if (unref(user).type == "ip") {
          _push(`<span>${ssrInterpolate(_ctx.$t("ip"))}</span>`);
        } else if (unref(user).type == "admin") {
          _push(`<span>Admin</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("corporation"))}</span>`);
        }
        _push(`</h2><h3 class="text-md mt-1 text-center font-black text-primary-blue lg:text-lg">`);
        if (unref(user).type == "particular") {
          _push(`<span>${ssrInterpolate(_ctx.$t("pack"))} ${ssrInterpolate(_ctx.$t("particular"))}</span>`);
        } else if (unref(user).type == "ip") {
          _push(`<span>${ssrInterpolate(_ctx.$t("pack"))} ${ssrInterpolate(_ctx.$t("politic"))}</span>`);
        } else if (unref(user).type == "admin") {
          _push(`<span>Admin</span>`);
        } else if (unref(user).type == "business1") {
          _push(`<span>${ssrInterpolate(_ctx.$t("pack"))} PRO</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("pack"))} ${ssrInterpolate(_ctx.$t("business"))}</span>`);
        }
        _push(`</h3>`);
        if (unref(user).type == "business1") {
          _push(`<button disabled class="lg:text-md flex items-center justify-center space-x-2 rounded bg-primary-blue px-2 py-1 text-xs text-white shadow">`);
          _push(ssrRenderComponent(unref(ArrowCircleUpIcon), { class: "h-6 w-6" }, null, _parent));
          _push(`<span class="hidden lg:block">UPGRADE PACK</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`<div class="mt-4"><button class="${ssrRenderClass([
        !open.account ? "flex  w-full items-center justify-start space-x-2 border-y bg-menu px-3 py-2 text-white" : "flex w-full items-center  justify-start space-x-2 border-y bg-primary-blue px-3 py-2 text-white"
      ])}">`);
      _push(ssrRenderComponent(unref(UserCircleIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("account"))}</span></button><button class="${ssrRenderClass([
        !open.conf ? "flex w-full items-center  justify-start space-x-2 border-y bg-menu px-3 py-2 text-white" : "flex w-full items-center  justify-start space-x-2 border-y bg-primary-blue px-3 py-2 text-white"
      ])}">`);
      _push(ssrRenderComponent(unref(KeyIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("privacy"))}</span></button><button class="${ssrRenderClass([
        !open.password ? "flex w-full items-center  justify-start space-x-2 border-y bg-menu px-3 py-2 text-white" : "flex w-full items-center  justify-start space-x-2 border-y bg-primary-blue px-3 py-2 text-white"
      ])}">`);
      _push(ssrRenderComponent(unref(LockClosedIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("change-password"))}</span></button><button class="${ssrRenderClass([
        !open.delete ? "flex w-full items-center  justify-start space-x-2 border-y bg-menu px-3 py-2 text-white" : "flex w-full items-center  justify-start space-x-2 border-y bg-primary-blue px-3 py-2 text-white"
      ])}">`);
      _push(ssrRenderComponent(unref(TrashIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`<span class="hidden lg:block">${ssrInterpolate(_ctx.$t("delete-account"))}</span></button></div></div><div class="w-[70%] py-10">`);
      if (unref(errors) != "") {
        _push(`<div class="px-12">`);
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (loadingC.value == 2) {
        _push(`<div class="mx-12 flex justify-start space-x-3 bg-green-50 py-4 px-4 text-green-700">`);
        _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-6 w-6" }, null, _parent));
        _push(`<p>${ssrInterpolate(_ctx.$t("update-s"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value == 1) {
        _push(`<div class="p-28"><svg class="mx-auto h-16 w-16 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<div>`);
        if (open.account) {
          _push(`<div><form>`);
          if (unref(user).type == "particular" || unref(user).type == "admin") {
            _push(`<div><div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("firstname"))}</label><input type="text" required${ssrRenderAttr("value", unref(user).firstname)} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("lastname"))}</label><input type="text" required${ssrRenderAttr("value", unref(user).lastname)} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div></div>`);
          } else if (unref(user).type == "business1" || unref(user).type == "business2") {
            _push(`<div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("social-reason"))}</label><input type="text" required${ssrRenderAttr("value", unref(user).firstname)} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div>`);
          } else {
            _push(`<div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("denomination"))}</label><input type="text" required${ssrRenderAttr("value", unref(user).firstname)} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div>`);
          }
          _push(`<div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("adresse") + " " + _ctx.$t("email"))}</label><input type="email" required${ssrRenderAttr("value", unref(user).email)} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("profile-picture"))}</label><input type="file" class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><span class="text-xs font-light text-gray-500">(Format: png, jpg, jpeg, gif)</span></div><div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("cover-picture"))}</label><input type="file" class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><span class="text-xs font-light text-gray-500">(Format: png, jpg, jpeg, gif)</span></div><div class="px-8 text-xs lg:px-16 lg:text-sm">`);
          if (loadingC.value == 0 || loadingC.value == 2) {
            _push(`<button type="submit" class="mt-6 w-full bg-primary-blue px-8 py-2 text-white">${ssrInterpolate(_ctx.$t("update"))}</button>`);
          } else {
            _push(`<!---->`);
          }
          if (loadingC.value == 1) {
            _push(`<button disabled type="submit" class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("update"))}... </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></form></div>`);
        } else {
          _push(`<!---->`);
        }
        if (open.conf) {
          _push(`<div><div class="m-4 flex space-x-2 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 lg:text-sm"><h1 class="font-bold">${ssrInterpolate(_ctx.$t("privacy"))}</h1><span class="font-light">(${ssrInterpolate(_ctx.$t("privacy-desc"))})</span></div><form><div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><select required class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"><option value="1">${ssrInterpolate(_ctx.$t("evreyone"))}</option><option value="2">${ssrInterpolate(_ctx.$t("only-me"))}</option></select></div><div class="px-8 text-xs lg:px-16 lg:text-sm">`);
          if (loadingC.value == 0 || loadingC.value == 2) {
            _push(`<button type="submit" class="mt-2 w-full bg-primary-blue px-8 py-2 text-white">${ssrInterpolate(_ctx.$t("update"))}</button>`);
          } else {
            _push(`<!---->`);
          }
          if (loadingC.value == 1) {
            _push(`<button disabled type="submit" class="mt-2 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("update"))}... </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></form><div class="m-4 flex space-x-2 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 opacity-25 lg:text-sm"><h1 class="font-bold">${ssrInterpolate(_ctx.$t("download-data"))}</h1><span class="font-light">(${ssrInterpolate(_ctx.$t("download-data-desc"))})</span></div><form class="opacity-25"><div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><input type="password" required${ssrRenderAttr("value", unref(user).password)}${ssrRenderAttr("placeholder", _ctx.$t("password"))} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="px-8 text-xs lg:px-16 lg:text-sm">`);
          if (loadingC.value == 0 || loadingC.value == 2) {
            _push(`<button disabled type="submit" class="mt-2 w-full bg-primary-blue px-8 py-2 text-white">${ssrInterpolate(_ctx.$t("download"))}</button>`);
          } else {
            _push(`<!---->`);
          }
          if (loadingC.value == 1) {
            _push(`<button disabled type="submit" class="mt-2 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("download"))}... </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></form><div class="m-4 flex space-x-2 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 lg:text-sm"><h1 class="font-bold">${ssrInterpolate(_ctx.$t("delete-data"))}</h1><span class="font-light">(${ssrInterpolate(_ctx.$t("delete-data-desc"))})</span></div><form><div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"><input type="password" required${ssrRenderAttr("value", deleteD.password)}${ssrRenderAttr("placeholder", _ctx.$t("password"))} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="px-8 text-xs lg:px-16 lg:text-sm">`);
          if (loadingC.value == 0 || loadingC.value == 2) {
            _push(`<button type="submit" class="mt-2 w-full bg-primary-blue px-8 py-2 text-white">${ssrInterpolate(_ctx.$t("delete"))}</button>`);
          } else {
            _push(`<!---->`);
          }
          if (loadingC.value == 1) {
            _push(`<button disabled type="submit" class="mt-2 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("delete"))}... </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></form></div>`);
        } else {
          _push(`<!---->`);
        }
        if (open.password) {
          _push(`<div><form><div class="relative mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("old-password"))}</label><input type="password" required${ssrRenderAttr("value", password.old_password)} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="relative mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("new-password"))}</label><input type="password" required${ssrRenderAttr("value", password.password)} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="relative mt-2 px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("confirm-password"))}</label><input type="password" required${ssrRenderAttr("value", password.password_confirmation)} class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="px-8 text-xs lg:px-16 lg:text-sm">`);
          if (loadingC.value == 0 || loadingC.value == 2) {
            _push(`<button type="submit" class="mt-6 w-full bg-primary-blue px-8 py-2 text-white">${ssrInterpolate(_ctx.$t("update"))}</button>`);
          } else {
            _push(`<!---->`);
          }
          if (loadingC.value == 1) {
            _push(`<button disabled type="submit" class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("update"))}... </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></form></div>`);
        } else {
          _push(`<!---->`);
        }
        if (open.delete) {
          _push(`<div><form><div class="flex justify-center space-x-4 px-2 text-xs lg:text-sm"><div><input type="radio" id="fulldelete" value="2"${ssrIncludeBooleanAttr(ssrLooseEqual(deleteU.type, "2")) ? " checked" : ""} class="mr-2 border p-1"><label for="fulldelete">${ssrInterpolate(_ctx.$t("complete-delete"))}</label></div><div><input type="radio" id="softdelete" value="1"${ssrIncludeBooleanAttr(ssrLooseEqual(deleteU.type, "1")) ? " checked" : ""} class="mr-2 border p-1"><label for="softdelete">${ssrInterpolate(_ctx.$t("partial-delete"))}</label></div></div><div class="m-4 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 lg:text-sm">`);
          if (deleteU.type == 2) {
            _push(`<span>${ssrInterpolate(_ctx.$t("complete-delete-desc"))}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(_ctx.$t("partial-delete-desc"))}</span>`);
          }
          _push(`</div><div class="relative px-8 text-xs lg:px-16 lg:text-sm"><label class="">${ssrInterpolate(_ctx.$t("delete-account-desc"))}</label><span>`);
          _push(ssrRenderComponent(unref(LockClosedIcon), { class: "absolute mt-5 ml-2 h-6 w-6 text-gray-400" }, null, _parent));
          _push(`</span><input type="password" required${ssrRenderAttr("value", deleteU.password)}${ssrRenderAttr("placeholder", _ctx.$t("password"))} class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"></div><div class="px-8 text-xs lg:px-16 lg:text-sm">`);
          if (loadingC.value == 0 || loadingC.value == 2) {
            _push(`<button type="submit" class="mt-6 w-full bg-primary-blue px-8 py-2 text-white">${ssrInterpolate(_ctx.$t("delete"))}</button>`);
          } else {
            _push(`<!---->`);
          }
          if (loadingC.value == 1) {
            _push(`<button disabled type="submit" class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"><svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${ssrInterpolate(_ctx.$t("delete"))}... </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></form></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/front/SettingAccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
