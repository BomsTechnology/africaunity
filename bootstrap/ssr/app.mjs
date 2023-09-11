import _ from "lodash";
import axios from "axios";
import { ref, onMounted, watch, resolveComponent, mergeProps, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, KeepAlive, Suspense, Transition, createCommentVNode, useSSRContext, reactive, computed, unref, createApp } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRoute, createRouter, createWebHistory } from "vue-router";
import { createI18n } from "vue-i18n";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import { onClickOutside } from "@vueuse/core";
import Vue3EasyDataTable from "vue3-easy-data-table";
window._ = _;
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app$1 = "";
const _sfc_main$1 = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const currentRoute = ref("home");
    onMounted(async () => {
      currentRoute.value = route.name;
    });
    watch(route, (nR, oR) => {
      currentRoute.value = nR.name;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full" }, _attrs))}><div class="h-full">`);
      _push(ssrRenderComponent(_component_router_view, { name: "sidebar" }, null, _parent));
      _push(`</div><div class="h-full w-full"><div>`);
      _push(ssrRenderComponent(_component_router_view, { name: "header" }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_router_view, null, {
        default: withCtx(({ Component, route: route2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (Component) {
              ssrRenderSuspense(_push2, {
                fallback: () => {
                  _push2(`<div class="h-screen bg-red-50 text-center"${_scopeId}> Loading... </div>`);
                },
                default: () => {
                  _push2(`<div class="h-full w-full"${_scopeId}>`);
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
                  _push2(`</div>`);
                },
                _: 2
              });
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              Component ? (openBlock(), createBlock(KeepAlive, { key: 0 }, [
                (openBlock(), createBlock(Suspense, null, {
                  fallback: withCtx(() => [
                    createVNode("div", { class: "h-screen bg-red-50 text-center" }, " Loading... ")
                  ]),
                  default: withCtx(() => [
                    createVNode(Transition, {
                      "enter-active-class": "transition duration-1000",
                      "enter-from-class": "opacity-0 ",
                      "enter-to-class": "opacity-1",
                      "leave-active-class": "transition duration-500 ",
                      "leave-from-class": "opacity-1 ",
                      "leave-to-class": "opacity-0 "
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("div", {
                          key: route2.name,
                          class: "h-full w-full"
                        }, [
                          (openBlock(), createBlock(resolveDynamicComponent(Component)))
                        ]))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024))
              ], 1024)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="fixed inset-x-0 bottom-0 z-50 pb-2 md:hidden"><div class="flex justify-center"><button class="download-app rounded bg-primary-blue px-2 py-1 text-white shadow-xl"> T\xE9l\xE9charger AfricaUnity </button></div></div></div><div>`);
      _push(ssrRenderComponent(_component_router_view, { name: "footer" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header = () => import("./assets/Header.795fabb9.mjs");
const Footer = () => import("./assets/Footer.1ff1fe57.mjs");
const siteName = "AfricaUnity";
const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("./assets/Home.5a807f4c.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Accueil"
    }
  },
  {
    path: "/articles",
    name: "articles",
    components: {
      default: () => import("./assets/Article.a96cf575.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Articles",
      requiresAuth: true
    }
  },
  {
    path: "/prop-au",
    name: "propau",
    components: {
      default: () => import("./assets/PropAu.f7f6b8be.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - PropAU",
      requiresAuth: true
    }
  },
  {
    path: "/add/:type",
    name: "add.post",
    props: true,
    components: {
      default: () => import("./assets/AddPost.d756c101.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Ajouter",
      requiresAuth: true
    }
  },
  {
    path: "/post/:id",
    name: "show.post",
    props: true,
    components: {
      default: () => import("./assets/SinglePost.dd535420.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/ads/:id",
    name: "show.ads",
    props: true,
    components: {
      default: () => import("./assets/SingleAnnouncement.64e6a4c1.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/ads/:id/edit",
    name: "edit.ads",
    props: true,
    components: {
      default: () => import("./assets/EditAnnouncement.374c10cd.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/add/ads",
    name: "add.ads",
    props: true,
    components: {
      default: () => import("./assets/AddAnnouncement.6539d1a1.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/add/job/:duplicate?",
    name: "add.job",
    props: true,
    components: {
      default: () => import("./assets/AddJob.d6ec8a6f.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/job/:id",
    name: "show.job",
    props: true,
    components: {
      default: () => import("./assets/SingleJob.fb04532e.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/job/:id/edit",
    name: "edit.job",
    props: true,
    components: {
      default: () => import("./assets/EditJob.bab8d842.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/:type/:id/edit",
    name: "edit.post",
    props: true,
    components: {
      default: () => import("./assets/EditPost.d2057064.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/profiles/establishment",
    name: "establishment",
    components: {
      default: () => import("./assets/Establishment.b03cf6ea.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Etablissement",
      requiresAuth: true
    }
  },
  {
    path: "/profiles/particular",
    name: "particular",
    components: {
      default: () => import("./assets/Particular.ddc26d18.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Particulier",
      requiresAuth: true
    }
  },
  {
    path: "/profiles/political-institution",
    name: "ip",
    components: {
      default: () => import("./assets/PoliticalInstitution.c12b7f21.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Institutions Politiques",
      requiresAuth: true
    }
  },
  {
    path: "/jobs",
    name: "jobs",
    components: {
      default: () => import("./assets/Job.c94e856d.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Jobs",
      requiresAuth: true
    }
  },
  {
    path: "/universities",
    name: "universities",
    components: {
      default: () => import("./assets/Universities.9ad05c9d.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Universit\xE9s",
      requiresAuth: true
    }
  },
  {
    path: "/university/:id",
    name: "show.university",
    props: true,
    components: {
      default: () => import("./assets/SingleUniversity.f030ee9e.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName,
      requiresAuth: true
    }
  },
  {
    path: "/ads",
    name: "ads",
    components: {
      default: () => import("./assets/Announcement.a128c103.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Ads",
      requiresAuth: true
    }
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      default: () => import("./assets/Contact.2ec3b9b5.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Contact"
    }
  },
  {
    path: "/forgot-password",
    name: "forgot.password",
    components: {
      default: () => import("./assets/ForgotPassword.2a536de0.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Mot de passe oubli\xE9"
    }
  },
  {
    path: "/reset-password/:token",
    name: "reset.password",
    components: {
      default: () => import("./assets/ResetPassword.f0a90848.mjs"),
      header: Header,
      footer: Footer
    },
    props: true,
    meta: {
      title: siteName + " - Modifi\xE9 Le Mot de passe"
    }
  },
  {
    path: "/login/:redirect?",
    name: "login",
    props: true,
    components: {
      default: () => import("./assets/Login.3e4f0120.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Se Connecter"
    }
  },
  {
    path: "/pack",
    name: "pack",
    components: {
      default: () => import("./assets/Pack.c1180580.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Pack"
    }
  },
  {
    path: "/register/:type",
    name: "register",
    props: true,
    components: {
      default: () => import("./assets/Register.c0f72ecc.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - S'inscrire"
    }
  },
  {
    path: "/account/:name/:id/:redirect?",
    name: "compte",
    props: true,
    components: {
      default: () => import("./assets/Profile.0714ab42.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Compte",
      requiresAuth: true
    }
  },
  {
    path: "/setting/:name/:id",
    name: "setting.account",
    props: true,
    components: {
      default: () => import("./assets/SettingAccount.14a09525.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Parametre du Compte",
      requiresAuth: true
    }
  },
  {
    path: "/:pathMatch(.*)",
    name: "not.found",
    components: {
      default: () => import("./assets/NotFound.40957cf7.mjs"),
      header: Header,
      footer: Footer
    },
    meta: {
      title: siteName + " - Page Introuvable"
    }
  },
  {
    path: "/login/admin",
    component: () => import("./assets/Login.ac1ecdd6.mjs"),
    name: "login.admin",
    meta: {
      title: siteName + " - Admin Panel"
    }
  },
  {
    path: "/admin",
    name: "admin",
    components: {
      default: () => import("./assets/DashHome.fea6f9aa.mjs"),
      sidebar: () => import("./assets/Sidebar.59f48429.mjs")
    },
    meta: {
      requiresAuth: true,
      isAdmin: true
    },
    name: "admin",
    children: [
      {
        path: "",
        component: () => import("./assets/Dashboard.49cb82ea.mjs"),
        name: "admin.dash",
        meta: {
          title: siteName + " - Dashboard"
        }
      },
      {
        path: "other",
        component: () => import("./assets/OtherTools.e48c0265.mjs"),
        name: "admin.other",
        meta: {
          title: siteName + " - Other"
        }
      },
      {
        path: "post/:type",
        component: () => import("./assets/PostIndex.386c8cb7.mjs"),
        props: true,
        name: "admin.post.index",
        meta: {
          title: siteName + " - Posts"
        }
      },
      {
        path: "post/create/:type",
        component: () => import("./assets/PostCreate.b689109e.mjs"),
        props: true,
        name: "admin.post.create",
        meta: {
          title: siteName + " - Create Post"
        }
      },
      {
        path: "post/edit/:type/:id",
        component: () => import("./assets/PostEdit.8f30013b.mjs"),
        props: true,
        name: "admin.post.edit",
        meta: {
          title: siteName + " - Edit Post"
        }
      },
      {
        path: "continent",
        component: () => import("./assets/ContinentIndex.08e2ee71.mjs"),
        name: "admin.continent.index",
        meta: {
          title: siteName + " - Continent"
        }
      },
      {
        path: "continent/create",
        component: () => import("./assets/ContinentCreate.7a0084fc.mjs"),
        name: "admin.continent.create",
        meta: {
          title: siteName + " - Create Continent"
        }
      },
      {
        path: "continent/edit/:id",
        component: () => import("./assets/ContinentEdit.9932fa57.mjs"),
        props: true,
        name: "admin.continent.edit",
        meta: {
          title: siteName + " - Edit Continent"
        }
      },
      {
        path: "user",
        component: () => import("./assets/UserIndex.9faabdf5.mjs"),
        name: "admin.user.index",
        meta: {
          title: siteName + " - User"
        }
      },
      {
        path: "user/create",
        component: () => import("./assets/UserCreate.0306b211.mjs"),
        name: "admin.user.create",
        meta: {
          title: siteName + " - Create User"
        }
      },
      {
        path: "user/edit/:id",
        component: () => import("./assets/UserEdit.8d9477f9.mjs"),
        props: true,
        name: "admin.user.edit",
        meta: {
          title: siteName + " - Edit User"
        }
      },
      {
        path: "job",
        component: () => import("./assets/JobOfferIndex.d6e61977.mjs"),
        name: "admin.jobOffer.index",
        meta: {
          title: siteName + " - Job"
        }
      },
      {
        path: "job/create",
        component: () => import("./assets/JobOfferCreate.440b123c.mjs"),
        name: "admin.jobOffer.create",
        meta: {
          title: siteName + " - Create Job"
        }
      },
      {
        path: "job/edit/:id",
        component: () => import("./assets/JobOfferEdit.e706d1cf.mjs"),
        props: true,
        name: "admin.jobOffer.edit",
        meta: {
          title: siteName + " - Edit Job"
        }
      },
      {
        path: "comment",
        component: () => import("./assets/CommentIndex.c3de654f.mjs"),
        name: "admin.comment.index",
        meta: {
          title: siteName + " - Comment"
        }
      },
      {
        path: "comment/create",
        component: () => import("./assets/CommentCreate.2ef529e9.mjs"),
        name: "admin.comment.create",
        meta: {
          title: siteName + " - Create Comment"
        }
      },
      {
        path: "zone",
        component: () => import("./assets/ZoneIndex.cbe3b140.mjs"),
        name: "admin.zone.index",
        meta: {
          title: siteName + " - Zone"
        }
      },
      {
        path: "zone/create",
        component: () => import("./assets/ZoneCreate.466be132.mjs"),
        name: "admin.zone.create",
        meta: {
          title: siteName + " - Create Zone"
        }
      },
      {
        path: "zone/edit/:id",
        component: () => import("./assets/ZoneEdit.57442099.mjs"),
        props: true,
        name: "admin.zone.edit",
        meta: {
          title: siteName + " - Edit Zone"
        }
      },
      {
        path: "country",
        component: () => import("./assets/CountryIndex.461993b2.mjs"),
        name: "admin.country.index",
        meta: {
          title: siteName + " - Country"
        }
      },
      {
        path: "country/create",
        component: () => import("./assets/CountryCreate.ef3637c8.mjs"),
        name: "admin.country.create",
        meta: {
          title: siteName + " - Create Country"
        }
      },
      {
        path: "country/edit/:id",
        component: () => import("./assets/CountryEdit.9f4b0561.mjs"),
        props: true,
        name: "admin.country.edit",
        meta: {
          title: siteName + " - Edit Country"
        }
      },
      {
        path: "ads",
        component: () => import("./assets/AnnouncementIndex.82fdd5ea.mjs"),
        name: "admin.announcement.index",
        meta: {
          title: siteName + " - Ads"
        }
      },
      {
        path: "ads/create",
        component: () => import("./assets/AnnouncementCreate.9d7421bf.mjs"),
        name: "admin.announcement.create",
        meta: {
          title: siteName + " - Create Ads"
        }
      },
      {
        path: "ads/edit/:id",
        component: () => import("./assets/AnnouncementEdit.ba9295e2.mjs"),
        props: true,
        name: "admin.announcement.edit",
        meta: {
          title: siteName + " - Edit Ads"
        }
      },
      {
        path: "currency",
        component: () => import("./assets/CurrencyIndex.0ed6f24d.mjs"),
        name: "admin.currency.index",
        meta: {
          title: siteName + " - Currency"
        }
      },
      {
        path: "currency/create",
        component: () => import("./assets/CurrencyCreate.e245ae47.mjs"),
        name: "admin.currency.create",
        meta: {
          title: siteName + " - Create Currency"
        }
      },
      {
        path: "currency/edit/:id",
        component: () => import("./assets/CurrencyEdit.a996254a.mjs"),
        props: true,
        name: "admin.currency.edit",
        meta: {
          title: siteName + " - Edit Currency"
        }
      },
      {
        path: "category",
        component: () => import("./assets/CategoryAnnouncementIndex.155a2298.mjs"),
        name: "admin.category.index",
        meta: {
          title: siteName + " - Category"
        }
      },
      {
        path: "category/create",
        component: () => import("./assets/CategoryAnnouncementCreate.460e53dd.mjs"),
        name: "admin.category.create",
        meta: {
          title: siteName + " - Create Category"
        }
      },
      {
        path: "category/edit/:id",
        component: () => import("./assets/CategoryAnnouncementEdit.0cc5ae8a.mjs"),
        props: true,
        name: "admin.category.edit",
        meta: {
          title: siteName + " - Edit Category"
        }
      },
      {
        path: "city",
        component: () => import("./assets/CityIndex.abb10f44.mjs"),
        name: "admin.city.index",
        meta: {
          title: siteName + " - City"
        }
      },
      {
        path: "city/create",
        component: () => import("./assets/CityCreate.93e701df.mjs"),
        name: "admin.city.create",
        meta: {
          title: siteName + " - Create City"
        }
      },
      {
        path: "city/edit/:id",
        component: () => import("./assets/CityEdit.2f623d13.mjs"),
        props: true,
        name: "admin.city.edit",
        meta: {
          title: siteName + " - Edit City"
        }
      },
      {
        path: "university",
        component: () => import("./assets/UniversityIndex.c5cadd14.mjs"),
        name: "admin.university.index",
        meta: {
          title: siteName + " - University"
        }
      },
      {
        path: "university/create",
        component: () => import("./assets/UniversityCreate.3824de77.mjs"),
        name: "admin.university.create",
        meta: {
          title: siteName + " - Create University"
        }
      },
      {
        path: "university/edit/:id",
        component: () => import("./assets/UniversityEdit.b7ac1111.mjs"),
        props: true,
        name: "admin.university.edit",
        meta: {
          title: siteName + " - Edit University"
        }
      },
      {
        path: "ministry",
        component: () => import("./assets/MinistryIndex.9de83f24.mjs"),
        name: "admin.ministry.index",
        meta: {
          title: siteName + " - Ministry"
        }
      },
      {
        path: "ministry/create",
        component: () => import("./assets/MinistryCreate.abb08414.mjs"),
        name: "admin.ministry.create",
        meta: {
          title: siteName + " - Create Ministry"
        }
      },
      {
        path: "ministry/edit/:id",
        component: () => import("./assets/MinistryEdit.0eb1b094.mjs"),
        props: true,
        name: "admin.ministry.edit",
        meta: {
          title: siteName + " - Edit Ministry"
        }
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
router.beforeEach((to, from, next) => {
  if (to.params.slug) {
    document.title = `${to.params.slug[0].toUpperCase()}${to.params.slug.replaceAll("-", " ").slice(1)} | ` + siteName;
  } else {
    document.title = to.meta.title;
  }
  if (to.meta.isAdmin && to.meta.requiresAuth && (!localStorage.token || JSON.parse(localStorage.user).type != "admin")) {
    next({ name: "login.admin" });
  } else if (to.meta.requiresAuth && !localStorage.token) {
    router.push({
      name: "login",
      params: {
        redirect: "not-login"
      }
    });
  } else {
    next();
  }
});
const lastest$3 = "Lastest";
const fr$4 = "Fran\xE7ais";
const en$3 = "English";
const es$4 = "Espa\xF1ol";
const pt$4 = "Portugu\xEAs";
const articles$3 = "Articles";
const article$1 = "Article";
const profile$3 = "Profile";
const propau$3 = "PropAU";
const univerities$3 = "Universities";
const contact$3 = "Contact";
const jobs$3 = "Jobs";
const particular$3 = "Particular";
const establishment$3 = "Establishment";
const ip$3 = "Political Institutions ";
const login$3 = "Login";
const filter$3 = "Filter";
const continent$3 = "Continent";
const zoned$3 = "Zoned";
const country$3 = "Country";
const ministry$3 = "Ministry";
const search$3 = "Search";
const register$3 = "Register";
const video$3 = "Video";
const presentation$3 = "Presentation";
const language$3 = "Language";
const all$3 = "";
const firstname$3 = "Name";
const lastname$3 = "First name";
const adresse$3 = "Adress";
const email$3 = "E-mail";
const password$3 = "Password";
const pack$3 = "Pack";
const account$3 = "My account";
const comments$3 = "Comments";
const business$3 = "Business";
const politic$3 = "Politics";
const denomination$3 = "Denomination";
const logout$3 = "Logout";
const corporation$3 = "Corporation";
const free$3 = "Free";
const year$3 = "year";
const unlimited$3 = "Unlimited";
const add$3 = "Add";
const your$3 = "Your";
const edit$3 = "Edit";
const modify$3 = "Edit";
const content$3 = "Content";
const thumbnails$3 = "Featured image";
const title$3 = "Title";
const save$3 = "Save";
const ads$3 = "Announcement";
const university$3 = "University";
const category$3 = "Category";
const price$3 = "Price";
const currency$3 = "Currency";
const website$3 = "WebSite";
const description$3 = "Description";
const city$3 = "City";
const location$3 = "Location";
const status$3 = "Status";
const sex$3 = "Sex";
const male$3 = "Male";
const female$3 = "Female";
const perimetre$3 = "Perimeter";
const details$3 = "Details";
const actif$3 = "Active";
const send$3 = "Send";
const report$3 = "Report";
const provided$3 = "Provided";
const privacy$3 = "Privacy";
const update$3 = "Update";
const evreyone$3 = "Everyone";
const download$3 = "Download";
const duplicate$3 = "Duplicate";
const apply$3 = "Apply";
const en$4 = {
  lastest: lastest$3,
  fr: fr$4,
  en: en$3,
  es: es$4,
  pt: pt$4,
  articles: articles$3,
  article: article$1,
  profile: profile$3,
  propau: propau$3,
  univerities: univerities$3,
  contact: contact$3,
  jobs: jobs$3,
  particular: particular$3,
  establishment: establishment$3,
  ip: ip$3,
  login: login$3,
  "about-title": "About",
  "about-text": "AfricaUnity is a professional social network and digital think tank for the development of Africa and Latin America. Through written articles offered to ministries, institutions and organizations, AfricaUnity contributors participate in the improvement of the various States. Participants have the opportunity to interact on any subject in an ethical and courteous manner. It is a platform on which you will find many CVs and presentations of public and private organizations.",
  "filter-article": "Articles Filter",
  "filter-propau": "PropAU Filter",
  filter: filter$3,
  "key-words": "Keys Words",
  continent: continent$3,
  zoned: zoned$3,
  country: country$3,
  ministry: ministry$3,
  search: search$3,
  register: register$3,
  "recent-posts": "Recent Posts",
  video: video$3,
  presentation: presentation$3,
  language: language$3,
  all: all$3,
  "full-name": "Full Name",
  firstname: firstname$3,
  lastname: lastname$3,
  adresse: adresse$3,
  "login-welcome-msg": "Welcome to Africaunity",
  "login-desc": "Log in to your account and interact in the spirit of courtesy of the community. Do not hesitate to contact us at any time if you encounter any difficulties.Log in to your account and interact in the spirit of courtesy of the community. Do not hesitate to contact us at any time if you encounter any difficulties.",
  "no-signup": "Do not have an account yet ?",
  "already-signup": "Already have an account ?",
  email: email$3,
  password: password$3,
  "confirm-password": "Confirm password",
  "password-forgot": "Forgot your password",
  "show-confidentail-politic": "View Privacy Policy",
  "confirm-confidentail-politic": "Confirm that you accept our privacy policy",
  "create-account": "Create an account",
  pack: pack$3,
  account: account$3,
  comments: comments$3,
  "my-ads": "My Ads",
  "my-jobs": "My Jobs Offers",
  "create-other-account": "Do you want to create an account instead?",
  business: business$3,
  politic: politic$3,
  "register-free-desc": "We are happy to have you in this community dedicated to the emergence of Africa and Latin America. Fill in the fields to create your free account and access special member benefits.",
  "register-desc": "Please create an account that suits your status and benefit from the many advantages",
  "register-pay-desc": "We are happy to have you in this community dedicated to the emergence of Africa and Latin America. Fill in the fields to create your account and access special member benefits.",
  "social-reason": "Social reason",
  denomination: denomination$3,
  "plan-desc1": "Presentation page",
  "plan-desc2": "Write articles",
  "plan-desc3": "Write PropAU",
  "plan-desc4": "Comment on posts",
  "plan-desc5": "Search jobs",
  "plan-desc6": "Post ads",
  "plan-desc7": "Increase your visibility",
  "plan-desc8": "Post jobs",
  logout: logout$3,
  corporation: corporation$3,
  "physical-person": "Physical Person",
  free: free$3,
  year: year$3,
  unlimited: unlimited$3,
  "essential-features": "Essential Features",
  "advanced-features": "Advanced Features",
  add: add$3,
  your: your$3,
  "add-desc-1": "will be published in the current language of the site",
  edit: edit$3,
  modify: modify$3,
  content: content$3,
  thumbnails: thumbnails$3,
  title: title$3,
  save: save$3,
  "select-lang": "Please select the language of publication",
  "good-msg-post": "Please keep in mind that courtesy is the key word of the community",
  "read-more": "Read More",
  "no-content": "No Content",
  ads: ads$3,
  university: university$3,
  category: category$3,
  "contact-phone": "Contact number",
  "contact-email": "Contact Email Address",
  price: price$3,
  currency: currency$3,
  website: website$3,
  description: description$3,
  city: city$3,
  location: location$3,
  "company-name": "Company Name",
  "company-logo": "Company logo",
  "company-website": "Company Website",
  "company-email": "Company email address",
  "work-mode": "Work mode",
  "work-dept": "Work department",
  "offer-type": "Type of offer",
  "y-experience": "Year of experience",
  "activity-area": "Activity area",
  "level-study": "Study level",
  "size-company": "Size of the company",
  "type-company": "Type of the company",
  "size-institution": "Institution size",
  status: status$3,
  "rsearch-p": "Partner search",
  "o-activity": "Other activites",
  "birth-date": "Date of Birth",
  "create-date": "Creation date",
  "legal-status": "Legal status",
  "speak-language": "Spoken languages",
  sex: sex$3,
  male: male$3,
  female: female$3,
  perimetre: perimetre$3,
  "phone-number": "Phone number",
  "native-country": "Native country",
  "residence-country": "Country of residence",
  "social-country": "Headquarters country",
  "social-object": "Social object",
  "name-responsable": "Last name & first name of the person in charge",
  "goal-attribution": "Purpose - Allocation",
  details: details$3,
  "ads-university": "Announcements relating to",
  "contact-ads": "Contact the advertiser",
  actif: actif$3,
  "no-actif": "Not Active",
  "contact-about-1": "Invitation to a conference",
  "contact-about-2": "Commercial proposition",
  "contact-about-3": "Proposition of collaboration",
  "contact-about-4": "Propose a university",
  "contact-about-5": "Others",
  send: send$3,
  report: report$3,
  "the-post": "This post",
  "setting-account": "Account setting",
  "hide-filter": "Hide filter",
  "show-filter": "Show filter",
  provided: provided$3,
  "in-progress": "In progress",
  privacy: privacy$3,
  "change-password": "Change the password",
  "delete-account": "Delete account",
  "delete-account-desc": "To delete your account enter your password below",
  "delete": "Delete",
  "update-s": "Update successful",
  "profile-picture": "Profile picture",
  "cover-picture": "Cover picture",
  update: update$3,
  "privacy-desc": "Who can see your profile",
  evreyone: evreyone$3,
  "only-me": "Only me",
  "download-data": "Download your data",
  download: download$3,
  "show-more": "See more",
  "hide-more": "See Less",
  "write-email": "Enter your email address",
  "msg-sucess-send-Fp": "The password reset link has been emailed to you.",
  "msg-sucess-reset-p": "The password has been changed successfully",
  "mark-provided": "Mark as filled",
  "mark-progress": "Mark as in progress",
  duplicate: duplicate$3,
  "maintain-crtl": "Hold the CTRL key to select multiple",
  apply: apply$3,
  "download-data-desc": "Enter your password to confirm the export of your personal data",
  "delete-data": "Erasing your data",
  "delete-data-desc": "Enter your password to confirm the deletion of your personal data (articles, propau, comments, announcements, jobs, etc.)",
  "old-password": "Old Password",
  "new-password": "New Password",
  "complete-delete": "Complete removal",
  "complete-delete-desc": "This will result in the deletion of all your data on this site.",
  "partial-delete": "Partial deletion",
  "partial-delete-desc": "This deactivates your account, to reactivate it you must contact the administrators of the site via the contact form",
  "diplome-certification": "Diploma and Certification",
  "contact-msg": "To contact us, please complete the form below",
  "report-msg": "Say what you don't like",
  "msg-contact-sucess": "Thank you for having contacted us. We will respond to you within 48 hours. In the meantime, take advantage of the offers, announcements and job opportunities in your sector!!!",
  "msg-a-register": "We are happy to have you in this community dedicated to the emergence of Africa and Latin America. Fill in the fields to create your free account and access special member benefits. Activate your account by clicking on the activation link sent by email.",
  "modal-not-login": "Access to this content is restricted to subscribers. Please login or register",
  "modal-verif-ok": "Your account has been successfully created. Log in to take advantage of the features offered by the AU platform"
};
const lastest$2 = "Reciente";
const fr$3 = "Fran\xE7ais";
const en$2 = "English";
const es$2 = "Espa\xF1ol";
const pt$3 = "Portugu\xEAs";
const articles$2 = "Articulos";
const profile$2 = "Perfil";
const propau$2 = "PropAU";
const univerities$2 = "Universidades";
const contact$2 = "Contactos";
const jobs$2 = "Jobs";
const particular$2 = "Especial";
const establishment$2 = "Establecimiento";
const ip$2 = "Instituciones politicas";
const login$2 = "Iniciar sesi\xF3n";
const filter$2 = "Filtrar";
const continent$2 = "Continente";
const zoned$2 = "Zonificado";
const country$2 = "Pais";
const ministry$2 = "Ministro";
const search$2 = "Buscar";
const register$2 = "Registrarse";
const video$2 = "Video";
const presentation$2 = "Presentacion";
const language$2 = "Lengua";
const all$2 = "";
const firstname$2 = "Apellido";
const lastname$2 = "Primer nombre";
const adresse$2 = "Habla a";
const email$2 = "E-mail";
const password$2 = "Contrase\xF1a";
const pack$2 = "Paquete";
const account$2 = "Mi cuenta";
const business$2 = "Negocio";
const politic$2 = "Pol\xEDtica";
const denomination$2 = "Denominaci\xF3n";
const logout$2 = "Cerrar sesi\xF3n";
const corporation$2 = "Corporaci\xF3n";
const free$2 = "Gratis";
const year$2 = "a\xF1o";
const unlimited$2 = "Ilimitado";
const add$2 = "Agregar";
const edit$2 = "Editar";
const modify$2 = "Editar";
const your$2 = "Tu";
const content$2 = "Contenido";
const thumbnails$2 = "Foto principal";
const title$2 = "T\xEDtulo";
const save$2 = "Salvar";
const comments$2 = "Comentarios";
const ads$2 = "Anuncio";
const university$2 = "Universidad";
const category$2 = "Categor\xEDa";
const price$2 = "Premio";
const currency$2 = "Divisa";
const website$2 = "Sitio web";
const description$2 = "Descripci\xF3n";
const city$2 = "Ciudad";
const location$2 = "Localizaci\xF3n";
const status$2 = "Estado";
const sex$2 = "Sexo";
const male$2 = "Hombre";
const female$2 = "Mujeres";
const perimetre$2 = "Per\xEDmetro";
const details$2 = "Detalles";
const actif$2 = "Activo";
const send$2 = "Enviar a";
const report$2 = "Reporte";
const provided$2 = "Prevista";
const privacy$2 = "Privacidad";
const update$2 = "Actualizar";
const evreyone$2 = "Todos";
const download$2 = "Descargar";
const duplicate$2 = "Duplicar";
const apply$2 = "Aplicar";
const es$3 = {
  lastest: lastest$2,
  fr: fr$3,
  en: en$2,
  es: es$2,
  pt: pt$3,
  articles: articles$2,
  profile: profile$2,
  propau: propau$2,
  univerities: univerities$2,
  contact: contact$2,
  jobs: jobs$2,
  particular: particular$2,
  establishment: establishment$2,
  ip: ip$2,
  login: login$2,
  "about-title": "A proposito",
  "about-text": "AfricaUnity es una red social profesional y un think tank digital para el desarrollo de \xC1frica y Am\xE9rica Latina. A trav\xE9s de art\xEDculos escritos ofrecidos a ministerios, instituciones y organizaciones, los contribuyentes de AfricaUnity participan en la mejora de los distintos Estados. Los participantes tienen la oportunidad de interactuar sobre cualquier tema de manera \xE9tica y cort\xE9s. Es una plataforma en la que encontrar\xE1s muchos CV y \u200B\u200Bpresentaciones de organizaciones p\xFAblicas y privadas.",
  "filter-article": "Filtro de Articulos",
  "filter-propau": "Filtro de PropAU",
  filter: filter$2,
  "key-words": "Palabra Clave",
  continent: continent$2,
  zoned: zoned$2,
  country: country$2,
  ministry: ministry$2,
  search: search$2,
  register: register$2,
  "recent-posts": "Mensajes Recientes",
  video: video$2,
  presentation: presentation$2,
  language: language$2,
  all: all$2,
  "full-name": "Nombre completo",
  firstname: firstname$2,
  lastname: lastname$2,
  adresse: adresse$2,
  "login-welcome-msg": "Bienvenido a AfricaUnity",
  "login-desc": "Inicie sesi\xF3n en su cuenta e interact\xFAe con el esp\xEDritu de cortes\xEDa de la comunidad. No dude en ponerse en contacto con nosotros en cualquier momento si encuentra alguna dificultad.",
  "no-signup": "Aun no tiene una cuenta ?",
  "already-signup": "Ya tienes una cuenta ?",
  email: email$2,
  password: password$2,
  "confirm-password": "Confirmar la contrase\xF1a",
  "password-forgot": "Contrase\xF1a olvidada",
  "show-confidentail-politic": "Ver pol\xEDtica de privacidad",
  "confirm-confidentail-politic": "Confirma que aceptas nuestra pol\xEDtica de privacidad",
  "create-account": "Crear una cuenta",
  pack: pack$2,
  account: account$2,
  "create-other-account": "\xBFQuieres crear una cuenta en su lugar",
  business: business$2,
  politic: politic$2,
  "register-free-desc": "Estamos felices de tenerte en esta comunidad dedicada al surgimiento de \xC1frica y Am\xE9rica Latina. Complete los campos para crear su cuenta gratuita y acceder a los beneficios especiales para miembros.",
  "register-desc": "Cree una cuenta que se adapte a su estado y benef\xEDciese de las numerosas ventajas",
  "register-pay-desc": "Estamos felices de tenerte en esta comunidad dedicada al surgimiento de \xC1frica y Am\xE9rica Latina. Complete los campos para crear su cuenta y acceder a beneficios especiales para miembros.",
  "social-reason": "Raz\xF3n social",
  denomination: denomination$2,
  "plan-desc1": "P\xE1gina de presentaci\xF3n",
  "plan-desc2": "Escribe art\xEDculos",
  "plan-desc3": "Escritura de PropAU",
  "plan-desc4": "Comentar en las publicaciones",
  "plan-desc5": "Buscar empleos",
  "plan-desc6": "Publicar anuncios",
  "plan-desc7": "Aumenta tu visibilidad",
  "plan-desc8": "Publicar trabajos",
  logout: logout$2,
  corporation: corporation$2,
  "physical-person": "Persona f\xEDsica",
  free: free$2,
  year: year$2,
  unlimited: unlimited$2,
  "essential-features": "Caracter\xEDsticas esenciales",
  "advanced-features": "Caracter\xEDsticas avanzadas",
  add: add$2,
  edit: edit$2,
  modify: modify$2,
  your: your$2,
  content: content$2,
  thumbnails: thumbnails$2,
  title: title$2,
  save: save$2,
  comments: comments$2,
  "my-ads": "Mis anuncios",
  "my-jobs": "Mis ofertas de trabajo",
  "add-desc-1": "se publicar\xE1 en el idioma actual del sitio",
  "select-lang": "Por favor seleccione el idioma de publicaci\xF3n",
  "good-msg-post": "Tenga en cuenta que la cortes\xEDa es la palabra clave de la comunidad.",
  "read-more": "Leer m\xE1s",
  "no-content": "Sin contenido",
  ads: ads$2,
  university: university$2,
  category: category$2,
  "contact-phone": "N\xFAmero de contacto",
  "contact-email": "Correo electr\xF3nico de contacto",
  price: price$2,
  currency: currency$2,
  website: website$2,
  description: description$2,
  city: city$2,
  location: location$2,
  "company-name": "Nombre de la empresa",
  "company-logo": "Logo de la compa\xF1\xEDa",
  "company-website": "P\xE1gina Web de la compa\xF1\xEDa",
  "company-email": "Direcci\xF3n de correo electr\xF3nico de la empresa",
  "work-mode": "Modo de trabajo",
  "work-dept": "Departamento de trabajo",
  "offer-type": "Tipo de oferta",
  "y-experience": "A\xF1o de experiencia",
  "activity-area": "Sector de actividad",
  "level-study": "Nivel de estudios",
  "size-company": "Tama\xF1o de la empresa",
  "type-company": "Tipo de empresa",
  "size-institution": "Tama\xF1o de la instituci\xF3n",
  status: status$2,
  "rsearch-p": "B\xFAsqueda de socios",
  "o-activity": "Otras actividades",
  "birth-date": "Fecha de nacimiento",
  "create-date": "Fecha de creaci\xF3n",
  "legal-status": "Forma jur\xEDdica",
  "speak-language": "Lenguas habladas",
  sex: sex$2,
  male: male$2,
  female: female$2,
  perimetre: perimetre$2,
  "phone-number": "N\xFAmero de tel\xE9fono",
  "native-country": "Pa\xEDs de origen",
  "residence-country": "Pa\xEDs de residencia",
  "social-country": "Pa\xEDs de la sede",
  "social-object": "Objeto social",
  "name-responsable": "Apellido y nombre de la persona a cargo",
  "goal-attribution": "Prop\xF3sito - Asignaci\xF3n",
  details: details$2,
  "ads-university": "Anuncios relacionados con",
  "contact-ads": "Contacta con el anunciante",
  actif: actif$2,
  "no-actif": "No activo",
  "contact-about-1": "Invitaci\xF3n a una conferencia",
  "contact-about-2": "Propuesta comercial",
  "contact-about-3": "Propuesta de colaboraci\xF3n",
  "contact-about-4": "proponer una universidad",
  "contact-about-5": "Otros",
  send: send$2,
  report: report$2,
  "the-post": "Esta publicaci\xF3n",
  "setting-account": "Configuraci\xF3n de la cuenta",
  "hide-filter": "Ocultar filtro",
  "show-filter": "Mostrar filtro",
  provided: provided$2,
  "in-progress": "En curso",
  privacy: privacy$2,
  "change-password": "cambiar la contrase\xF1a",
  "delete-account": "Borrar cuenta",
  "delete-account-desc": "Para eliminar su cuenta ingrese su contrase\xF1a a continuaci\xF3n",
  "delete": "Borrar",
  "update-s": "Actualizaci\xF3n exitosa",
  "profile-picture": "Foto de perfil",
  "cover-picture": "Imagen de portada",
  update: update$2,
  "privacy-desc": "Qui\xE9n puede ver tu perfil",
  evreyone: evreyone$2,
  "only-me": "Solo yo",
  "download-data": "Descarga tus datos",
  download: download$2,
  "show-more": "Ver m\xE1s",
  "hide-more": "Ver menos",
  "write-email": "Ingrese su direcci\xF3n de correo electr\xF3nico",
  "msg-sucess-send-Fp": "El enlace de restablecimiento de contrase\xF1a se le ha enviado por correo electr\xF3nico.",
  "msg-sucess-reset-p": "La contrase\xF1a ha sido cambiada con \xE9xito",
  "mark-provided": "Marcar como lleno",
  "mark-progress": "Marcar como en curso",
  duplicate: duplicate$2,
  "maintain-crtl": "Mantenga presionada la tecla CTRL para seleccionar varios",
  apply: apply$2,
  "download-data-desc": "Introduzca su contrase\xF1a para confirmar la exportaci\xF3n de sus datos personales",
  "delete-data": "Borrando tus datos",
  "delete-data-desc": "Ingrese su contrase\xF1a para confirmar la eliminaci\xF3n de sus datos personales (art\xEDculos, propau, comentarios, anuncios, trabajos, etc.)",
  "old-password": "Contrase\xF1a anterior",
  "new-password": "Nueva contrase\xF1a",
  "complete-delete": "eliminaci\xF3n completa",
  "complete-delete-desc": "Esto resultar\xE1 en la eliminaci\xF3n de todos sus datos en este sitio.",
  "partial-delete": "Eliminaci\xF3n parcial",
  "partial-delete-desc": "Esto desactiva su cuenta, para reactivarla debe comunicarse con los administradores del sitio a trav\xE9s del formulario de contacto.",
  "diplome-certification": "Diploma y Certificaci\xF3n",
  "contact-msg": "Para contactarnos, por favor complete el siguiente formulario",
  "report-msg": "Di lo que no te gusta.",
  "msg-contact-sucess": "Gracias por habernos contactado. Le responderemos dentro de las 48 horas. Mientras tanto, aprovecha las ofertas, anuncios y oportunidades laborales de tu sector!!!",
  "msg-a-register": "Estamos felices de tenerte en esta comunidad dedicada al surgimiento de \xC1frica y Am\xE9rica Latina. Complete los campos para crear su cuenta gratuita y acceder a los beneficios especiales para miembros. Active su cuenta haciendo clic en el enlace de activaci\xF3n enviado por correo electr\xF3nico.",
  "modal-not-login": "El acceso a este contenido est\xE1 restringido a suscriptores. Por favor, inicie sesi\xF3n o reg\xEDstrese",
  "modal-verif-ok": "Tu cuenta ha sido creada satisfactoriamente. Inicie sesi\xF3n para aprovechar las funciones que ofrece la plataforma AU"
};
const lastest$1 = "R\xE9cents";
const fr$1 = "Fran\xE7ais";
const en$1 = "English";
const es$1 = "Espa\xF1ol";
const pt$2 = "Portugu\xEAs";
const articles$1 = "Articles";
const article = "Article";
const profile$1 = "Profil";
const propau$1 = "PropAU";
const univerities$1 = "Universit\xE9s";
const contact$1 = "Contact";
const jobs$1 = "Jobs";
const particular$1 = "Particulier";
const establishment$1 = "Etablissement";
const ip$1 = "Institution Politique";
const login$1 = "Se Connecter";
const register$1 = "S'inscrire";
const filter$1 = "Filtrer";
const continent$1 = "Continent";
const zoned$1 = "Zone";
const country$1 = "Pays";
const ministry$1 = "Minist\xE8re";
const search$1 = "Recherche";
const video$1 = "Vid\xE9o";
const presentation$1 = "Pr\xE9sentation";
const language$1 = "Langue";
const all$1 = "";
const firstname$1 = "Nom";
const lastname$1 = "Pr\xE9nom";
const adresse$1 = "Adresse";
const email$1 = "E-mail";
const password$1 = "Mot de passe";
const pack$1 = "Pack";
const account$1 = "Mon Compte";
const business$1 = "Business";
const politic$1 = "Politique";
const denomination$1 = "D\xE9nomination";
const logout$1 = "D\xE9connexion";
const corporation$1 = "Personne Morale";
const free$1 = "Gratuit";
const year$1 = "An";
const unlimited$1 = "Illimit\xE9";
const add$1 = "Ajouter un";
const edit$1 = "Editer un";
const modify$1 = "Modifier";
const your$1 = "Votre";
const content$1 = "Contenu";
const thumbnails$1 = "Image mise en avant";
const title$1 = "Titre";
const save$1 = "Enregistrer";
const comments$1 = "Commentaires";
const ads$1 = "Annonce";
const university$1 = "Universit\xE9";
const category$1 = "Cat\xE9gorie";
const price$1 = "Prix";
const currency$1 = "Devise";
const website$1 = "Site Web";
const description$1 = "Description";
const city$1 = "Ville";
const location$1 = "Localisation";
const status$1 = "Statut";
const sex$1 = "Sexe";
const male$1 = "Homme";
const female$1 = "Femme";
const perimetre$1 = "P\xE9rim\xE8tre";
const details$1 = "D\xE9tails";
const actif$1 = "Actif";
const send$1 = "Envoyer";
const report$1 = "Signaler";
const provided$1 = "Pourvu";
const privacy$1 = "Confidentialit\xE9";
const update$1 = "Mettre \xE0 jour";
const evreyone$1 = "Tout le monde";
const download$1 = "T\xE9l\xE9charger";
const duplicate$1 = "Dupliquer";
const apply$1 = "Postuler";
const fr$2 = {
  lastest: lastest$1,
  fr: fr$1,
  en: en$1,
  es: es$1,
  pt: pt$2,
  articles: articles$1,
  article,
  profile: profile$1,
  propau: propau$1,
  univerities: univerities$1,
  contact: contact$1,
  jobs: jobs$1,
  particular: particular$1,
  establishment: establishment$1,
  ip: ip$1,
  login: login$1,
  register: register$1,
  "about-title": "A Propos",
  "about-text": "AfricaUnity est un r\xE9seau social professionnel et un groupe de r\xE9flexion num\xE9rique pour le d\xE9veloppement de l'Afrique et de l'Am\xE9rique latine. A travers des articles \xE9crits propos\xE9s aux minist\xE8res, institutions et organisations, les contributeurs d'AfricaUnity participent \xE0 l'am\xE9lioration des diff\xE9rents Etats. Les participants ont la possibilit\xE9 d'interagir sur n'importe quel sujet de mani\xE8re \xE9thique et courtoise. C'est une plateforme sur laquelle vous trouverez de nombreux CV et pr\xE9sentations d'organismes publics et priv\xE9s.",
  "filter-article": "Filtre Articles",
  "filter-propau": "Filtre PropAU",
  filter: filter$1,
  "key-words": "Mot Cl\xE9s",
  continent: continent$1,
  zoned: zoned$1,
  country: country$1,
  ministry: ministry$1,
  search: search$1,
  "recent-posts": "Postes R\xE9cents",
  video: video$1,
  presentation: presentation$1,
  language: language$1,
  all: all$1,
  "full-name": "Nom Complet",
  firstname: firstname$1,
  lastname: lastname$1,
  adresse: adresse$1,
  "login-welcome-msg": "Bienvenue sur AfricaUnity",
  "login-desc": "Connectez-vous \xE0 votre compte et interagissez dans l\u2019esprit de courtoisie de la communaut\xE9. N\u2019h\xE9sitez pas \xE0 nous contacter \xE0 tout moment si vous rencontrez des difficult\xE9s quelconques.",
  "no-signup": "Vous n'avez pas encore de compte ?",
  "already-signup": "Vous avez d\xE9ja un compte ?",
  email: email$1,
  password: password$1,
  "confirm-password": "Confirmer le Mot de passe",
  "password-forgot": "Mot de passe oubli\xE9",
  "show-confidentail-politic": "Afficher la politique de confidentialit\xE9",
  "confirm-confidentail-politic": "Confirmer que vous acceptez notre politique de confidentialit\xE9",
  "create-account": "Cr\xE9er un compte",
  pack: pack$1,
  account: account$1,
  "create-other-account": "Vous voulez plutot cr\xE9er un compte",
  business: business$1,
  politic: politic$1,
  "register-free-desc": "Nous sommes heureux de vous avoir dans cette communaut\xE9 d\xE9di\xE9e \xE0 l\u2019\xE9mergence de l\u2019Afrique et de l\u2019Am\xE9rique Latine. Remplissez les champs pour cr\xE9er votre compte gratuitement et acc\xE9dez aux avantages sp\xE9ciaux des membres.",
  "register-desc": "Merci de cr\xE9er un compte qui sied \xE0 votre statut et b\xE9n\xE9ficiez des nombreux avantages",
  "register-pay-desc": "Nous sommes heureux de vous avoir dans cette communaut\xE9 d\xE9di\xE9e \xE0 l\u2019\xE9mergence de l\u2019Afrique et de l\u2019Am\xE9rique Latine. Remplissez les champs pour cr\xE9er votre compte et acc\xE9dez aux avantages sp\xE9ciaux des membres.",
  "social-reason": "Raison Sociale",
  denomination: denomination$1,
  "plan-desc1": "Page de pr\xE9sentation",
  "plan-desc2": "R\xE9diger des articles",
  "plan-desc3": "R\xE9diger des PropAU",
  "plan-desc4": "Commenter les publications",
  "plan-desc5": "Rechercher des jobs",
  "plan-desc6": "Poster des annonces",
  "plan-desc7": "Augmenter votre visibilit\xE9",
  "plan-desc8": "Poster des jobs",
  logout: logout$1,
  corporation: corporation$1,
  "physical-person": "Personne physique",
  free: free$1,
  year: year$1,
  unlimited: unlimited$1,
  "essential-features": "Essential Features",
  "advanced-features": "Advanced Features",
  add: add$1,
  edit: edit$1,
  modify: modify$1,
  your: your$1,
  content: content$1,
  thumbnails: thumbnails$1,
  title: title$1,
  save: save$1,
  comments: comments$1,
  "my-ads": "Mes Annonces",
  "my-jobs": "Mes offres d'emploi",
  "add-desc-1": "sera publi\xE9 dans la langue actuelle du site",
  "select-lang": "Veuillez s\xE9lectionner la langue de publication",
  "good-msg-post": "Merci de garder \xE0 l'esprit que la courtoisie est le maitre mot de la communaut\xE9",
  "read-more": "Lire la suite",
  "no-content": "Pas de contenu",
  ads: ads$1,
  university: university$1,
  category: category$1,
  "contact-phone": "Num\xE9ro de Contact",
  "contact-email": "Adresse E-mail de Contact",
  price: price$1,
  currency: currency$1,
  website: website$1,
  description: description$1,
  city: city$1,
  location: location$1,
  "company-name": "Nom de l'entreprise",
  "company-logo": "Logo de l'entreprise",
  "company-website": "Site Web de l'entreprise",
  "company-email": "Adresse E-mail de l'entreprise",
  "work-mode": "Mode de travail",
  "work-dept": "D\xE9partement de travail",
  "offer-type": "Type d'offre",
  "y-experience": "Ann\xE9e d'experience",
  "activity-area": "Secteur d'activit\xE9",
  "level-study": "Niveau d'\xE9tude",
  "size-company": "Taille de l'entreprise",
  "type-company": "Type d'entreprise",
  "size-institution": "Taille de l'institution",
  status: status$1,
  "rsearch-p": "Recherche de partenaire",
  "o-activity": "Autres Activit\xE9s",
  "birth-date": "Date de naissance",
  "create-date": "Date de cr\xE9ation",
  "legal-status": "Forme juridique",
  "speak-language": "Langues parl\xE9es",
  sex: sex$1,
  male: male$1,
  female: female$1,
  perimetre: perimetre$1,
  "phone-number": "Num\xE9ro de t\xE9l\xE9phone",
  "native-country": "Pays d'origine",
  "residence-country": "Pays de R\xE9sidence",
  "social-country": "Pays du si\xE8ge social",
  "social-object": "Objet Social",
  "name-responsable": "Nom & Pr\xE9nom du Responsable",
  "goal-attribution": "But - Attribution",
  details: details$1,
  "ads-university": "Les Annonces relatives \xE0",
  "contact-ads": "Contactez le lanceur d'annonce",
  actif: actif$1,
  "no-actif": "Non Actif",
  "diplome-certification": "Dipl\xF4me et Certification",
  "contact-about-1": "Invitation \xE0 une conf\xE9rence",
  "contact-about-2": "Proposition commerciale",
  "contact-about-3": "Proposition de collaboration",
  "contact-about-4": "Proposer une universit\xE9",
  "contact-about-5": "Autres",
  send: send$1,
  report: report$1,
  "the-post": "Cette publication",
  "setting-account": "Param\xE8tre du compte",
  "hide-filter": "Masquer le filtre",
  "show-filter": "Afficher le filtre",
  provided: provided$1,
  "in-progress": "En Cours",
  privacy: privacy$1,
  "change-password": "Changer le mot de passe",
  "delete-account": "Supprimer le compte",
  "delete-account-desc": "Pour supprimer votre compte entrez votre mot de passe ci-dessous",
  "delete": "Supprimer",
  "update-s": "Mise \xE0 jour r\xE9ussie",
  "profile-picture": "Photo de profil",
  "cover-picture": "Photo de couverture",
  update: update$1,
  "privacy-desc": "Qui peut voir votre profil",
  evreyone: evreyone$1,
  "only-me": "Seulement moi",
  "download-data": "T\xE9l\xE9chargez vos donn\xE9es",
  download: download$1,
  "show-more": "Voir Plus",
  "hide-more": "Voir Moins",
  "write-email": "Saisissez votre adresse e-mail",
  "msg-sucess-send-Fp": "Le lien de r\xE9initialisation du mot de passe vous a \xE9t\xE9 envoy\xE9 par email",
  "msg-sucess-reset-p": "Le mot de passe a \xE9t\xE9 chang\xE9 avec succ\xE8s",
  "mark-provided": "Marquer comme pourvu",
  "mark-progress": "Marquer comme en cours",
  duplicate: duplicate$1,
  "maintain-crtl": "Maintenir la touche CTRL pour s\xE9lectionner plusieurs",
  apply: apply$1,
  "download-data-desc": "Entrez votre mot de passe pour confirmer l'exportation de vos donn\xE9es personnelles",
  "delete-data": "Effacement de vos donn\xE9es",
  "delete-data-desc": "Entrez votre mot de passe pour confirmer la suppression de vos donn\xE9es personnelles (articles, propau, commentaires, annonces, offres d'emploi, etc.)",
  "old-password": "Ancien mot de passe",
  "new-password": "Nouveu mot de passe",
  "complete-delete": "Suppression compl\xE8te",
  "complete-delete-desc": "Cela entra\xEEnera la suppression de toutes vos donn\xE9es sur ce site.",
  "partial-delete": "Suppression partielle",
  "partial-delete-desc": "Ceci d\xE9sactive votre compte, pour le r\xE9activer vous devez contacter les administrateurs du site via le formulaire de contact",
  "contact-msg": "Pour nous contacter, veuillez remplir le formulaire ci-dessous",
  "report-msg": "Dites ce qui vous d\xE9plait",
  "msg-contact-sucess": "Merci de nous avoir contact\xE9. Nous vous r\xE9pondrons dans les 48h. EN attendant profitez des offres, annonce et opportunit\xE9 d'emploi dans votre secteur !!!",
  "msg-a-register": "Nous sommes heureux de vous avoir dans cette communaut\xE9 d\xE9di\xE9e \xE0 l'\xE9mergence de l'Afrique et l'Am\xE9rique Latine. Remplissez les champs pour cr\xE9er votre compte gratuitement et acc\xE9dez aux avantages sp\xE9ciaux des membres. Activez votre compte en cliquant sur le lien d'activation envoy\xE9 par e-mail.",
  "modal-not-login": "L'acc\xE9s \xE0 ce contenu est r\xE9serv\xE9 aux inscrits. Merci de vous connecter ou vous inscrire",
  "modal-verif-ok": "Votre compte a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s. Connectez-vous pour profiter des fonctionnalit\xE9s que propose la plateforme AU"
};
const lastest = "Recente";
const fr = "Fran\xE7ais";
const en = "English";
const es = "Espa\xF1ol";
const pt = "Portugu\xEAs";
const articles = "Artigos";
const profile = "Perfil";
const propau = "PropAU";
const univerities = "Universidades";
const contact = "Contactos";
const jobs = "Jobs";
const particular = "Especial";
const establishment = "Establecimiento";
const ip = "Instituciones politicas";
const login = "Login";
const filter = "Filtro";
const continent = "Continente";
const zoned = "Zoneado";
const country = "Pais";
const ministry = "Minist\xE9rio";
const search = "Pesquisa";
const register = "Registro";
const video = "Video";
const presentation = "Apresenta\xE7\xE9\xE3o";
const language = "Lingua";
const all = "";
const firstname = "Nome";
const lastname = "Primeiro nome";
const adresse = "Endere\xE7o";
const email = "E-mail";
const password = "Senha";
const pack = "Pacote";
const account = "Minha conta";
const business = "O neg\xF3cio";
const politic = "Pol\xEDtica";
const denomination = "Denomina\xE7\xE3o";
const logout = "Sair";
const corporation = "Corporation";
const free = "Livre";
const year = "ano";
const unlimited = "Ilimitado";
const add = "Adicionar";
const edit = "Editar";
const modify = "Editar";
const your = "Seu";
const content = "Conte\xFAdo";
const thumbnails = "Imagem em destaque";
const title = "T\xEDtulo";
const save = "Salvar";
const comments = "Coment\xE1rios";
const ads = "An\xFAncio";
const university = "Universidade";
const category = "Categoria";
const price = "Pre\xE7o";
const currency = "Moeda";
const website = "Local na rede Internet";
const description = "Descri\xE7\xE3o";
const city = "Cidade";
const location = "Localiza\xE7\xE3o";
const status = "Status";
const sex = "Sexo";
const male = "Macho";
const female = "Mulheres";
const perimetre = "Per\xEDmetro";
const details = "Detalhes";
const actif = "De ativos";
const send = "Enviar";
const report = "Relat\xF3rio";
const provided = "Forneceu";
const privacy = "Privacidade";
const update = "Atualizar";
const evreyone = "Todos";
const download = "Download";
const duplicate = "Duplicado";
const apply = "Aplicar";
const pt$1 = {
  lastest,
  fr,
  en,
  es,
  pt,
  articles,
  profile,
  propau,
  univerities,
  contact,
  jobs,
  particular,
  establishment,
  ip,
  login,
  "about-title": "A prop\xF3sito",
  "about-text": "AfricaUnity \xE9 uma rede social profissional e um think tank digital para o desenvolvimento da \xC1frica e da Am\xE9rica Latina. Atrav\xE9s de artigos escritos oferecidos a minist\xE9rios, institui\xE7\xF5es e organiza\xE7\xF5es, os contribuintes da AfricaUnity participam na melhoria dos v\xE1rios Estados. Os participantes t\xEAm a oportunidade de interagir sobre qualquer assunto de forma \xE9tica e cort\xEAs. \xC9 uma plataforma na qual voc\xEA encontrar\xE1 muitos curr\xEDculos e apresenta\xE7\xF5es de organiza\xE7\xF5es p\xFAblicas e privadas.",
  "filter-article": "Filtro de Artigos",
  "filter-propau": "Filtro de PropAU",
  filter,
  "key-words": "Palavra Chave",
  continent,
  zoned,
  country,
  ministry,
  search,
  register,
  "recent-posts": "Postagens Recentes",
  video,
  presentation,
  language,
  all,
  "full-name": "Nome completo",
  firstname,
  lastname,
  adresse,
  "login-welcome-msg": "Bem-vindo \xE0 AfricaUnity",
  "login-desc": "Fa\xE7a login na sua conta e interaja no esp\xEDrito de cortesia da comunidade. N\xE3o hesite em nos contatar a qualquer momento se encontrar alguma dificuldade.",
  "no-signup": "N\xE3o tem uma conta ainda ?",
  "already-signup": "J\xE1 tem uma conta ?",
  email,
  password,
  "confirm-password": "Confirme a Senha",
  "password-forgot": "Esqueceu sua senha",
  "show-confidentail-politic": "Ver Pol\xEDtica de Privacidade",
  "confirm-confidentail-politic": "Confirme que voc\xEA aceita nossa pol\xEDtica de privacidade",
  "create-account": "Crie a sua conta aqui",
  pack,
  account,
  "create-other-account": "Deseja criar uma conta em vez disso?",
  business,
  politic,
  "register-free-desc": "Estamos felizes em t\xEA-lo nesta comunidade dedicada ao surgimento da \xC1frica e da Am\xE9rica Latina. Preencha os campos para criar sua conta gratuita e acessar benef\xEDcios especiais para membros.",
  "register-desc": "Por favor, crie uma conta que se adapte ao seu status e beneficie-se das muitas vantagens",
  "register-pay-desc": "Estamos felizes em t\xEA-lo nesta comunidade dedicada ao surgimento da \xC1frica e da Am\xE9rica Latina. Preencha os campos para criar sua conta e acessar benef\xEDcios especiais para membros.",
  "social-reason": "Raz\xE3o social",
  denomination,
  "plan-desc1": "P\xE1gina de apresenta\xE7\xE3o",
  "plan-desc2": "Escrever artigos",
  "plan-desc3": "Escrever PropAU",
  "plan-desc4": "Comentar nas postagens",
  "plan-desc5": "Procurar empregos",
  "plan-desc6": "Publicar an\xFAncios",
  "plan-desc7": "Aumente sua visibilidade",
  "plan-desc8": "Postar vagas",
  logout,
  corporation,
  "physical-person": "Pessoa f\xEDsica",
  free,
  year,
  unlimited,
  "essential-features": "Caracteristicas essenciais",
  "advanced-features": "Caracter\xEDsticas avan\xE7adas",
  add,
  edit,
  modify,
  your,
  content,
  thumbnails,
  title,
  save,
  comments,
  "my-ads": "Meus an\xFAncios",
  "my-jobs": "Minhas ofertas de trabalho",
  "add-desc-1": "ser\xE1 publicado no idioma atual do site",
  "select-lang": "Selecione o idioma de publica\xE7\xE3o",
  "good-msg-post": "Por favor, tenha em mente que cortesia \xE9 a palavra-chave da comunidade",
  "read-more": "consulte Mais informa\xE7\xE3o",
  "no-content": "Sem conte\xFAdo",
  ads,
  university,
  category,
  "contact-phone": "N\xFAmero de contato",
  "contact-email": "Endere\xE7o de e-mail de contato",
  price,
  currency,
  website,
  description,
  city,
  location,
  "company-name": "Nome da empresa",
  "company-logo": "Logotipo da empresa",
  "company-website": "Site da companhia",
  "company-email": "Endere\xE7o de e-mail da empresa",
  "work-mode": "Modo de trabalho",
  "work-dept": "Departamento de trabalho",
  "offer-type": "Tipo de oferta",
  "y-experience": "Ano de experi\xEAncia",
  "activity-area": "\xC1rea de atividade",
  "level-study": "N\xEDvel de estudo",
  "size-company": "Tamanho da empresa",
  "type-company": "Tipo de Empresa",
  "size-institution": "Tamanho da institui\xE7\xE3o",
  status,
  "rsearch-p": "Pesquisa de parceiros",
  "o-activity": "Outras atividades",
  "birth-date": "Data de nascimento",
  "create-date": "Data de cria\xE7\xE3o",
  "legal-status": "Status legal",
  "speak-language": "L\xEDnguas faladas",
  sex,
  male,
  female,
  perimetre,
  "phone-number": "N\xFAmero de telefone",
  "native-country": "Pa\xEDs nativo",
  "residence-country": "Pa\xEDs de resid\xEAncia",
  "social-country": "Pa\xEDs da sede",
  "social-object": "Objeto social",
  "name-responsable": "Sobrenome e nome do respons\xE1vel",
  "goal-attribution": "Finalidade - Aloca\xE7\xE3o",
  details,
  "ads-university": "An\xFAncios relacionados a",
  "contact-ads": "Entre em contato com o anunciante",
  actif,
  "no-actif": "N\xE3o ativo",
  "contact-about-1": "Convite para uma confer\xEAncia",
  "contact-about-2": "Proposta comercial",
  "contact-about-3": "Proposta de colabora\xE7\xE3o",
  "contact-about-4": "Proponha uma universidade",
  "contact-about-5": "Outros",
  send,
  report,
  "the-post": "Esta postagem",
  "setting-account": "Configura\xE7\xF5es de conta",
  "hide-filter": "Ocultar filtro",
  "show-filter": "Mostrar filtro",
  provided,
  "in-progress": "Em andamento",
  privacy,
  "change-password": "Alterar a senha",
  "delete-account": "Deletar conta",
  "delete-account-desc": "Para excluir sua conta digite sua senha abaixo",
  "delete": "Excluir",
  "update-s": "Atualiza\xE7\xE3o bem sucedida",
  "profile-picture": "Foto do perfil",
  "cover-picture": "Foto de capa",
  update,
  "privacy-desc": "Quem pode ver seu perfil",
  evreyone,
  "only-me": "S\xF3 eu",
  "download-data": "Baixe seus dados",
  download,
  "show-more": "Ver mais",
  "hide-more": "Ver menos",
  "write-email": "Insira o seu endere\xE7o de email",
  "msg-sucess-send-Fp": "O link de redefini\xE7\xE3o de senha foi enviado para voc\xEA.",
  "msg-sucess-reset-p": "A senha foi alterada com sucesso",
  "mark-provided": "Marcar como preenchido",
  "mark-progress": "Marcar como em andamento",
  duplicate,
  "maintain-crtl": "Segure a tecla CTRL para selecionar v\xE1rios",
  apply,
  "download-data-desc": "Digite sua senha para confirmar a exporta\xE7\xE3o de seus dados pessoais",
  "delete-data": "Apagando seus dados",
  "delete-data-desc": "Digite sua senha para confirmar a exclus\xE3o de seus dados pessoais (artigos, propau, coment\xE1rios, an\xFAncios, empregos, etc.)",
  "old-password": "Senha Antiga",
  "new-password": "Nova Senha",
  "complete-delete": "Remo\xE7\xE3o completa",
  "complete-delete-desc": "Isso resultar\xE1 na exclus\xE3o de todos os seus dados neste site.",
  "partial-delete": "Exclus\xE3o parcial",
  "partial-delete-desc": "Isso desativa sua conta, para reativ\xE1-la voc\xEA deve entrar em contato com os administradores do site atrav\xE9s do formul\xE1rio de contato",
  "diplome-certification": "Diploma e Certifica\xE7\xE3o",
  "contact-msg": "Para entrar em contato conosco, preencha o formul\xE1rio abaixo",
  "report-msg": "Diga o que voc\xEA n\xE3o",
  "msg-contact-sucess": "Obrigado por nos ter contactado. N\xF3s responderemos a voc\xEA dentro de 48 horas. Enquanto isso, aproveite as ofertas, an\xFAncios e oportunidades de emprego no seu setor!!!",
  "msg-a-register": "Estamos felizes em t\xEA-lo nesta comunidade dedicada ao surgimento da \xC1frica e da Am\xE9rica Latina. Preencha os campos para criar sua conta gratuita e acessar benef\xEDcios especiais para membros. Ative sua conta clicando no link de ativa\xE7\xE3o enviado por e-mail.",
  "modal-not-login": "O acesso a este conte\xFAdo \xE9 restrito a assinantes. Por favor fa\xE7a o login ou registre-se",
  "modal-verif-ok": "Votre compte a \xE9t\xE9 cre\xE9 avec succ\xE8s. Connectez-vous pour profiter des fonctionnalit\xE9s proposto pela plataforma AU"
};
const i18n = createI18n({
  locale: "fr",
  allowComposition: true,
  messages: {
    en: en$4,
    fr: fr$2,
    es: es$3,
    pt: pt$1
  }
});
const _sfc_main = {
  __name: "SelectFilter",
  __ssrInlineRender: true,
  props: {
    placeholder: {
      type: String,
      default: "Select item"
    },
    required: {
      type: Boolean,
      default: true
    },
    subCategory: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    },
    data: {
      type: Array
    },
    modelValue: {
      type: String
    },
    resetField: {
      type: Boolean,
      default: false
    },
    handled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "resetValue", "handle"],
  setup(__props, { emit }) {
    const props = __props;
    const open = ref(false);
    const search2 = ref("");
    const itemModal = ref(null);
    const subCategory = ref(false);
    const selectItem = reactive({
      id: "",
      name: ""
    });
    const filteredData = computed(() => {
      let data = props.data.filter(
        (item) => item.name.toLowerCase().includes(search2.value.toLowerCase())
      );
      if (data.length != 0) {
        subCategory.value = props.subCategory;
        return data;
      } else if (props.subCategory) {
        subCategory.value = false;
        data = props.data.filter(
          (item) => item.name.toLowerCase().includes(search2.value.toLowerCase())
        );
        if (data.length != 0) {
          return data;
        } else {
          data = [];
          for (let i = 0; i < props.data.length; i++) {
            if (props.data[i].children.length != 0) {
              props.data[i].children.forEach((element) => {
                if (element.name.toLowerCase().includes(search2.value.toLowerCase())) {
                  data.push(element);
                }
              });
            }
          }
          return data;
        }
      } else {
        return [];
      }
    });
    async function resetValue() {
      emit("update:modelValue", "");
      selectItem.id = "";
      selectItem.name = "";
      search2.value = "";
      open.value = false;
      if (props.handled)
        emit("handle");
    }
    watch(props, async (newProps, oldProps) => {
      if (newProps.modelValue) {
        if (!props.subCategory) {
          let currentData = newProps.data.find(
            (item) => item.id == newProps.modelValue
          );
          selectItem.id = currentData.id;
          selectItem.name = currentData.name;
        } else {
          for (let i = 0; i < newProps.data.length; i++) {
            if (newProps.data[i].id == newProps.modelValue) {
              selectItem.id = newProps.data[i].id;
              selectItem.name = newProps.data[i].name;
              i = newProps.data.length;
            } else if (newProps.data[i].children.length != 0) {
              newProps.data[i].children.forEach((element) => {
                if (element.id == newProps.modelValue) {
                  selectItem.id = element.id;
                  selectItem.name = element.name;
                  i = newProps.data.length;
                }
              });
            }
          }
        }
        if (props.handled)
          emit("handle");
      } else {
        resetValue();
      }
    });
    onClickOutside(itemModal, () => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><span class="absolute right-3 top-1/4 cursor-pointer">`);
      if (!open.value) {
        _push(ssrRenderComponent(unref(ChevronDownIcon), { class: "h-5 w-5 text-gray-400" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "h-5 w-5 text-gray-400" }, null, _parent));
      }
      _push(`</span><input readonly${ssrRenderAttr("value", selectItem.name)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""} class="${ssrRenderClass(__props.className + " cursor-pointer")}"${ssrRenderAttr("placeholder", __props.placeholder)}><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="absolute top-full z-50 w-full rounded-b bg-white shadow"><input type="text"${ssrRenderAttr("value", search2.value)} class="container mx-auto my-2 block w-[95%] border border-gray-300 py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none"><div class="mt-4 h-48 w-full overflow-y-auto text-sm">`);
      if (__props.resetField) {
        _push(`<span class="block w-full cursor-pointer py-2 px-3 text-gray-400 hover:bg-gray-100 hover:font-semibold hover:text-gray-900">${ssrInterpolate(__props.placeholder)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(filteredData).length != 0 && subCategory.value) {
        _push(`<!--[-->`);
        ssrRenderList(unref(filteredData), (item, index) => {
          _push(`<!--[--><span class="block w-full bg-gray-50 px-3 py-2 font-bold text-gray-900">${ssrInterpolate(item.name)}</span><div><span class="${ssrRenderClass([
            selectItem.id == item.id ? "block w-full cursor-pointer bg-blue-400 py-2 pr-3 pl-8 font-semibold text-white hover:bg-gray-100 hover:text-gray-900" : "block w-full cursor-pointer py-2 pr-3 pl-8 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"
          ])}">${ssrInterpolate(item.name)}</span>`);
          if (item.children.length != 0) {
            _push(`<!--[-->`);
            ssrRenderList(item.children, (subitem) => {
              _push(`<span class="${ssrRenderClass([
                selectItem.id == subitem.id ? "block w-full cursor-pointer bg-blue-400 py-2 pr-3 pl-8 font-semibold text-white hover:bg-gray-100 hover:text-gray-900" : "block w-full cursor-pointer py-2 pr-3 pl-8 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"
              ])}">${ssrInterpolate(subitem.name)}</span>`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><!--]-->`);
        });
        _push(`<!--]-->`);
      } else if (unref(filteredData).length != 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(filteredData), (item, index) => {
          _push(`<span class="${ssrRenderClass([
            selectItem.id == item.id || selectItem.id == "" && index == 0 ? "block w-full cursor-pointer bg-blue-400 px-3 py-2 font-semibold text-white hover:bg-gray-100 hover:text-gray-900" : "block w-full cursor-pointer px-3 py-2 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"
          ])}">${ssrInterpolate(item.name)}</span>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<span class="block w-full py-2 text-center font-bold"> NO DATA ! </span>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SelectFilter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const style = "";
const app = createApp(_sfc_main$1);
app.use(i18n);
app.use(router);
app.component("SelectFilter", _sfc_main);
app.component("EasyDataTable", Vue3EasyDataTable);
app.mount("#app");
let deferredPrompt;
const addBtn = document.querySelector(".download-app");
addBtn.style.display = "none";
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = "block";
  addBtn.addEventListener("click", (e2) => {
    addBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
const isInStandaloneMode = () => "standalone" in window.navigator && window.navigator.standalone;
if (isIos() && !isInStandaloneMode()) {
  globalThis.setState({ showInstallMessage: true });
}
export {
  _sfc_main as _,
  router as r
};
