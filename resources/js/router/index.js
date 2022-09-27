import { createRouter, createWebHistory } from "vue-router";

const Header = () => import("@/components/Header.vue");
const Footer = () => import("@/components/Footer.vue");

const siteName = "AfricaUnity";

const routes = [
    // front routes
    {
        path: "/",
        name: "home",
        components: {
            default: () => import("@/views/front/Home.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Accueil",
        },
    },
    {
        path: "/articles",
        name: "articles",
        components: {
            default: () => import("@/views/front/Article.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Articles",
            requiresAuth: true,
        },
    },
    {
        path: "/prop-au",
        name: "propau",
        components: {
            default: () => import("@/views/front/PropAu.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - PropAU",
            requiresAuth: true,
        },
    },
    {
        path: "/add/:type",
        name: "add.post",
        props: true,
        components: {
            default: () => import("@/views/front/AddPost.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Ajouter",
            requiresAuth: true,
        },
    },
    {
        path: "/post/:id",
        name: "show.post",
        props: true,
        components: {
            default: () => import("@/views/front/SinglePost.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/ads/:id",
        name: "show.ads",
        props: true,
        components: {
            default: () => import("@/views/front/SingleAnnouncement.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/ads/:id/edit",
        name: "edit.ads",
        props: true,
        components: {
            default: () => import("@/views/front/EditAnnouncement.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/add/ads",
        name: "add.ads",
        props: true,
        components: {
            default: () => import("@/views/front/AddAnnouncement.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/add/job/:duplicate?",
        name: "add.job",
        props: true,
        components: {
            default: () => import("@/views/front/AddJob.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/job/:id",
        name: "show.job",
        props: true,
        components: {
            default: () => import("@/views/front/SingleJob.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/job/:id/edit",
        name: "edit.job",
        props: true,
        components: {
            default: () => import("@/views/front/EditJob.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/:type/:id/edit",
        name: "edit.post",
        props: true,
        components: {
            default: () => import("@/views/front/EditPost.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/profiles/establishment",
        name: "establishment",
        components: {
            default: () => import("@/views/front/Establishment.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Etablissement",
            requiresAuth: true,
        },
    },
    {
        path: "/profiles/particular",
        name: "particular",
        components: {
            default: () => import("@/views/front/Particular.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Particulier",
            requiresAuth: true,
        },
    },
    {
        path: "/profiles/political-institution",
        name: "ip",
        components: {
            default: () => import("@/views/front/PoliticalInstitution.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Institutions Politiques",
            requiresAuth: true,
        },
    },
    {
        path: "/jobs",
        name: "jobs",
        components: {
            default: () => import("@/views/front/Job.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Jobs",
            requiresAuth: true,
        },
    },
    {
        path: "/universities",
        name: "universities",
        components: {
            default: () => import("@/views/front/Universities.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Universités",
            requiresAuth: true,
        },
    },
    {
        path: "/university/:id",
        name: "show.university",
        props: true,
        components: {
            default: () => import("@/views/front/SingleUniversity.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName,
            requiresAuth: true,
        },
    },
    {
        path: "/contact",
        name: "contact",
        components: {
            default: () => import("@/views/front/Contact.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Contact",
        },
    },
    {
        path: "/forgot-password",
        name: "forgot.password",
        components: {
            default: () => import("@/views/front/ForgotPassword.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Mot de passe oublié",
        },
    },
    {
        path: "/reset-password/:token",
        name: "reset.password",
        components: {
            default: () => import("@/views/front/ResetPassword.vue"),
            header: Header,
            footer: Footer,
        },
        props: true,
        meta: {
            title: siteName + " - Modifié Le Mot de passe",
        },
    },
    {
        path: "/login/:redirect?",
        name: "login",
        props: true,
        components: {
            default: () => import("@/views/front/Login.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Se Connecter",
        },
    },
    {
        path: "/pack",
        name: "pack",
        components: {
            default: () => import("@/views/front/Pack.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Pack",
        },
    },
    {
        path: "/register/:type",
        name: "register",
        props: true,
        components: {
            default: () => import("@/views/front/Register.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - S'inscrire",
        },
    },
    {
        path: "/account/:name/:id/:redirect?",
        name: "compte",
        props: true,
        components: {
            default: () => import("@/views/front/Profile.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Compte",
            requiresAuth: true,
        },
    },
    {
        path: "/setting/:name/:id",
        name: "setting.account",
        props: true,
        components: {
            default: () => import("@/views/front/SettingAccount.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Parametre du Compte",
            requiresAuth: true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "not.found",
        components: {
            default: () => import("@/views/front/NotFound.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Page Introuvable",
        },
    },
    {
        path: "/login/admin",
        component: () => import("@/views/back/Login.vue"),
        name: "login.admin",
        meta: {
            title: siteName + " - Admin Panel",
        },
    },

    // Admin routes
    {
        path: "/admin",
        name: "admin",
        components: {
            default: () => import("@/views/back/DashHome.vue"),
            sidebar: () => import("@/components/Sidebar.vue"),
        },
        meta: {
            requiresAuth: true,
            isAdmin: true,
        },
        name: "admin",
        children: [
            {
                path: "",
                component: () => import("@/views/back/Dashboard.vue"),
                name: "admin.dash",
                meta: {
                    title: siteName + " - Dashboard",
                },
            },

            {
                path: "other",
                component: () => import("@/views/back/OtherTools.vue"),
                name: "admin.other",
                meta: {
                    title: siteName + " - Other",
                },
            },

            {
                path: "post/:type",
                component: () => import("@/views/back/posts/PostIndex.vue"),
                props: true,
                name: "admin.post.index",
                meta: {
                    title: siteName + " - Posts",
                },
            },
            {
                path: "post/create/:type",
                component: () => import("@/views/back/posts/PostCreate.vue"),
                props: true,
                name: "admin.post.create",
                meta: {
                    title: siteName + " - Create Post",
                },
            },
            {
                path: "post/edit/:type/:id",
                component: () => import("@/views/back/posts/PostEdit.vue"),
                props: true,
                name: "admin.post.edit",
                meta: {
                    title: siteName + " - Edit Post",
                },
            },
            {
                path: "continent",
                component: () =>
                    import("@/views/back/continent/ContinentIndex.vue"),
                name: "admin.continent.index",
                meta: {
                    title: siteName + " - Continent",
                },
            },
            {
                path: "continent/create",
                component: () =>
                    import("@/views/back/continent/ContinentCreate.vue"),
                name: "admin.continent.create",
                meta: {
                    title: siteName + " - Create Continent",
                },
            },
            {
                path: "continent/edit/:id",
                component: () =>
                    import("@/views/back/continent/ContinentEdit.vue"),
                props: true,
                name: "admin.continent.edit",
                meta: {
                    title: siteName + " - Edit Continent",
                },
            },
            {
                path: "user",
                component: () => import("@/views/back/user/UserIndex.vue"),
                name: "admin.user.index",
                meta: {
                    title: siteName + " - User",
                },
            },
            {
                path: "user/create",
                component: () => import("@/views/back/user/UserCreate.vue"),
                name: "admin.user.create",
                meta: {
                    title: siteName + " - Create User",
                },
            },
            {
                path: "user/edit/:id",
                component: () => import("@/views/back/user/UserEdit.vue"),
                props: true,
                name: "admin.user.edit",
                meta: {
                    title: siteName + " - Edit User",
                },
            },
            {
                path: "job",
                component: () =>
                    import("@/views/back/jobOffer/JobOfferIndex.vue"),
                name: "admin.jobOffer.index",
                meta: {
                    title: siteName + " - Job",
                },
            },
            {
                path: "job/create",
                component: () =>
                    import("@/views/back/jobOffer/JobOfferCreate.vue"),
                name: "admin.jobOffer.create",
                meta: {
                    title: siteName + " - Create Job",
                },
            },
            {
                path: "job/edit/:id",
                component: () =>
                    import("@/views/back/jobOffer/JobOfferEdit.vue"),
                props: true,
                name: "admin.jobOffer.edit",
                meta: {
                    title: siteName + " - Edit Job",
                },
            },
            {
                path: "comment",
                component: () =>
                    import("@/views/back/comment/CommentIndex.vue"),
                name: "admin.comment.index",
                meta: {
                    title: siteName + " - Comment",
                },
            },
            {
                path: "comment/create",
                component: () =>
                    import("@/views/back/comment/CommentCreate.vue"),
                name: "admin.comment.create",
                meta: {
                    title: siteName + " - Create Comment",
                },
            },
            {
                path: "zone",
                component: () => import("@/views/back/zone/ZoneIndex.vue"),
                name: "admin.zone.index",
                meta: {
                    title: siteName + " - Zone",
                },
            },
            {
                path: "zone/create",
                component: () => import("@/views/back/zone/ZoneCreate.vue"),
                name: "admin.zone.create",
                meta: {
                    title: siteName + " - Create Zone",
                },
            },
            {
                path: "zone/edit/:id",
                component: () => import("@/views/back/zone/ZoneEdit.vue"),
                props: true,
                name: "admin.zone.edit",
                meta: {
                    title: siteName + " - Edit Zone",
                },
            },
            {
                path: "country",
                component: () =>
                    import("@/views/back/country/CountryIndex.vue"),
                name: "admin.country.index",
                meta: {
                    title: siteName + " - Country",
                },
            },
            {
                path: "country/create",
                component: () =>
                    import("@/views/back/country/CountryCreate.vue"),
                name: "admin.country.create",
                meta: {
                    title: siteName + " - Create Country",
                },
            },
            {
                path: "country/edit/:id",
                component: () => import("@/views/back/country/CountryEdit.vue"),
                props: true,
                name: "admin.country.edit",
                meta: {
                    title: siteName + " - Edit Country",
                },
            },
            {
                path: "ads",
                component: () =>
                    import("@/views/back/announcement/AnnouncementIndex.vue"),
                name: "admin.announcement.index",
                meta: {
                    title: siteName + " - Ads",
                },
            },
            {
                path: "ads/create",
                component: () =>
                    import("@/views/back/announcement/AnnouncementCreate.vue"),
                name: "admin.announcement.create",
                meta: {
                    title: siteName + " - Create Ads",
                },
            },
            {
                path: "ads/edit/:id",
                component: () =>
                    import("@/views/back/announcement/AnnouncementEdit.vue"),
                props: true,
                name: "admin.announcement.edit",
                meta: {
                    title: siteName + " - Edit Ads",
                },
            },
            {
                path: "currency",
                component: () =>
                    import("@/views/back/currency/CurrencyIndex.vue"),
                name: "admin.currency.index",
                meta: {
                    title: siteName + " - Currency",
                },
            },
            {
                path: "currency/create",
                component: () =>
                    import("@/views/back/currency/CurrencyCreate.vue"),
                name: "admin.currency.create",
                meta: {
                    title: siteName + " - Create Currency",
                },
            },
            {
                path: "currency/edit/:id",
                component: () =>
                    import("@/views/back/currency/CurrencyEdit.vue"),
                props: true,
                name: "admin.currency.edit",
                meta: {
                    title: siteName + " - Edit Currency",
                },
            },
            {
                path: "category",
                component: () =>
                    import(
                        "@/views/back/category_announcement/CategoryAnnouncementIndex.vue"
                    ),
                name: "admin.category.index",
                meta: {
                    title: siteName + " - Category",
                },
            },
            {
                path: "category/create",
                component: () =>
                    import(
                        "@/views/back/category_announcement/CategoryAnnouncementCreate.vue"
                    ),
                name: "admin.category.create",
                meta: {
                    title: siteName + " - Create Category",
                },
            },
            {
                path: "category/edit/:id",
                component: () =>
                    import(
                        "@/views/back/category_announcement/CategoryAnnouncementEdit.vue"
                    ),
                props: true,
                name: "admin.category.edit",
                meta: {
                    title: siteName + " - Edit Category",
                },
            },
            {
                path: "city",
                component: () => import("@/views/back/city/CityIndex.vue"),
                name: "admin.city.index",
                meta: {
                    title: siteName + " - City",
                },
            },
            {
                path: "city/create",
                component: () => import("@/views/back/city/CityCreate.vue"),
                name: "admin.city.create",
                meta: {
                    title: siteName + " - Create City",
                },
            },
            {
                path: "city/edit/:id",
                component: () => import("@/views/back/city/CityEdit.vue"),
                props: true,
                name: "admin.city.edit",
                meta: {
                    title: siteName + " - Edit City",
                },
            },
            {
                path: "university",
                component: () =>
                    import("@/views/back/university/UniversityIndex.vue"),
                name: "admin.university.index",
                meta: {
                    title: siteName + " - University",
                },
            },
            {
                path: "university/create",
                component: () =>
                    import("@/views/back/university/UniversityCreate.vue"),
                name: "admin.university.create",
                meta: {
                    title: siteName + " - Create University",
                },
            },
            {
                path: "university/edit/:id",
                component: () =>
                    import("@/views/back/university/UniversityEdit.vue"),
                props: true,
                name: "admin.university.edit",
                meta: {
                    title: siteName + " - Edit University",
                },
            },
            {
                path: "ministry",
                component: () =>
                    import("@/views/back/ministry/MinistryIndex.vue"),
                name: "admin.ministry.index",
                meta: {
                    title: siteName + " - Ministry",
                },
            },
            {
                path: "ministry/create",
                component: () =>
                    import("@/views/back/ministry/MinistryCreate.vue"),
                name: "admin.ministry.create",
                meta: {
                    title: siteName + " - Create Ministry",
                },
            },
            {
                path: "ministry/edit/:id",
                component: () =>
                    import("@/views/back/ministry/MinistryEdit.vue"),
                props: true,
                name: "admin.ministry.edit",
                meta: {
                    title: siteName + " - Edit Ministry",
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

// router.afterEach((to) => {
//     document.title = to.meta.title;
// });

router.beforeEach((to, from, next) => {
    if (to.params.slug) {
        document.title =
            `${to.params.slug[0].toUpperCase()}${to.params.slug
                .replaceAll("-", " ")
                .slice(1)} | ` + siteName;
    } else {
        document.title = to.meta.title;
    }
    if (
        to.meta.isAdmin &&
        to.meta.requiresAuth &&
        (!localStorage.token || JSON.parse(localStorage.user).type != "admin")
    ) {
        next({ name: "login.admin" });
    } else if (to.meta.requiresAuth && !localStorage.token) {
        router.push({
            name: "login",
            params: {
                redirect: "not-login",
            },
        });
    } else {
        next();
    }
});

export default router;
