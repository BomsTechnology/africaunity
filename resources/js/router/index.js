import { createRouter, createWebHistory } from "vue-router";

const Header = () => import("@/components/Header.vue");
const Footer = () => import("@/components/Footer.vue");

const siteName = "AfricaUnity | The profesional and social network";

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
        path: "/chat",
        name: "chat",
        components: {
            default: () => import("@/views/front/Chat.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Chat",
            requiresAuth: true,
        },
    },
    {
        path: "/blog",
        name: "blog",
        components: {
            default: () => import("@/views/front/Blog.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Blog",
            requiresAuth: true,
        },
    },
    {
        path: "/articles",
        name: "articles",
        components: {
            default: () => import("@/views/front/post/Article.vue"),
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
            default: () => import("@/views/front/post/PropAu.vue"),
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
            default: () => import("@/views/front/post/AddPost.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Ajouter une Publication",
            requiresAuth: true,
        },
    },
    {
        path: "/post/:id/:slug?",
        name: "show.post",
        props: true,
        components: {
            default: () => import("@/views/front/post/SinglePost.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "",
            requiresAuth: true,
        },
    },
    {
        path: "/post-shared/:id/:slug?",
        name: "shared.post",
        props: true,
        components: {
            default: () => import("@/views/front/post/SharedPost.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "",
        },
    },
    {
        path: "/ads/:id/:slug?",
        name: "show.ads",
        props: true,
        components: {
            default: () =>
                import("@/views/front/announcement/SingleAnnouncement.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "",
            requiresAuth: true,
        },
    },
    {
        path: "/ads/:id/edit",
        name: "edit.ads",
        props: true,
        components: {
            default: () =>
                import("@/views/front/announcement/EditAnnouncement.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Editer une Annonce",
            requiresAuth: true,
        },
    },
    {
        path: "/add/ads",
        name: "add.ads",
        props: true,
        components: {
            default: () =>
                import("@/views/front/announcement/AddAnnouncement.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Ajouter une Annonce",
            requiresAuth: true,
        },
    },
    {
        path: "/tender/:id/:slug?",
        name: "show.tender",
        props: true,
        components: {
            default: () =>
                import("@/views/front/tender/SingleTender.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "",
            requiresAuth: true,
        },
    },
    {
        path: "/tender/:id/edit",
        name: "edit.tender",
        props: true,
        components: {
            default: () =>
                import("@/views/front/tender/EditTender.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Editer une Appel d'offre",
            requiresAuth: true,
        },
    },
    {
        path: "/add/tender/:duplicate?",
        name: "add.tender",
        props: true,
        components: {
            default: () =>
                import("@/views/front/tender/AddTender.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Ajouter une Appel d'offre",
            requiresAuth: true,
        },
    },
    {
        path: "/add/job/:duplicate?",
        name: "add.job",
        props: true,
        components: {
            default: () => import("@/views/front/job/AddJob.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Ajouter une offre d'emploi",
            requiresAuth: true,
        },
    },
    {
        path: "/job/:id/:slug?",
        name: "show.job",
        props: true,
        components: {
            default: () => import("@/views/front/job/SingleJob.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "",
            requiresAuth: true,
        },
    },
    {
        path: "/job/:id/edit",
        name: "edit.job",
        props: true,
        components: {
            default: () => import("@/views/front/job/EditJob.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Editer une Offre d'emploi",
            requiresAuth: true,
        },
    },
    {
        path: "/:type/:id/edit",
        name: "edit.post",
        props: true,
        components: {
            default: () => import("@/views/front/post/EditPost.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Editer une Publication",
            requiresAuth: true,
        },
    },
    {
        path: "/profiles/establishment",
        name: "establishment",
        components: {
            default: () => import("@/views/front/profile/Establishment.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Etablissements",
            requiresAuth: true,
        },
    },
    {
        path: "/profiles/particular",
        name: "particular",
        components: {
            default: () => import("@/views/front/profile/Particular.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Particuliers",
            requiresAuth: true,
        },
    },
    {
        path: "/profiles/political-institution",
        name: "ip",
        components: {
            default: () =>
                import("@/views/front/profile/PoliticalInstitution.vue"),
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
            default: () => import("@/views/front/job/Job.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Jobs",
            requiresAuth: true,
        },
    },
    {
        path: "/tenders",
        name: "tenders",
        components: {
            default: () => import("@/views/front/tender/Tender.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Appel d'offres",
            requiresAuth: true,
        },
    },
    {
        path: "/universities",
        name: "universities",
        components: {
            default: () => import("@/views/front/university/Universities.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Universités",
            requiresAuth: true,
        },
    },
    {
        path: "/university/:id/:slug?",
        name: "show.university",
        props: true,
        components: {
            default: () =>
                import("@/views/front/university/SingleUniversity.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "",
            requiresAuth: true,
        },
    },
    {
        path: "/ads",
        name: "ads",
        components: {
            default: () =>
                import("@/views/front/announcement/Announcement.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Annonces",
            requiresAuth: true,
        },
    },
    {
        path: "/events",
        name: "events",
        components: {
            default: () =>
                import("@/views/front/demonstration/Demonstration.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " -  Evenements",
            requiresAuth: true,
        },
    },
    {
        path: "/events/:id/:slug?",
        name: "show.events",
        props: true,
        components: {
            default: () =>
                import("@/views/front/demonstration/SingleDemonstration.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "",
            requiresAuth: true,
        },
    },
    {
        path: "/events/:id/edit",
        name: "edit.events",
        props: true,
        components: {
            default: () =>
                import("@/views/front/demonstration/EditDemonstration.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Editer un Evenement",
            requiresAuth: true,
        },
    },
    {
        path: "/add/events",
        name: "add.events",
        props: true,
        components: {
            default: () =>
                import("@/views/front/demonstration/AddDemonstration.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - Ajouter un Evenement",
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
            default: () => import("@/views/front/auth/ForgotPassword.vue"),
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
            default: () => import("@/views/front/auth/ResetPassword.vue"),
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
            default: () => import("@/views/front/auth/Login.vue"),
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
            default: () => import("@/views/front/auth/Pack.vue"),
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
            default: () => import("@/views/front/auth/Register.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: siteName + " - S'inscrire",
        },
    },
    {
        path: "/account/:id/:slug?/",
        name: "compte",
        props: true,
        components: {
            default: () => import("@/views/front/account/Profile.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "",
            requiresAuth: true,
        },
    },
    {
        path: "/setting/:id/:slug?",
        name: "setting.account",
        props: true,
        components: {
            default: () => import("@/views/front/account/SettingAccount.vue"),
            header: Header,
            footer: Footer,
        },
        meta: {
            title: "Parametre : ",
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
        path: "/gnosolutions-connect",
        name: "admin",
        components: {
            default: () => import("@/views/back/DashHome.vue"),
            sidebar: () => import("@/components/Sidebar.vue"),
        },
        meta: {
            requiresAuth: true,
            isAdmin: true,
        },
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
                path: "tender",
                component: () =>
                    import("@/views/back/tender/TenderIndex.vue"),
                name: "admin.tender.index",
                meta: {
                    title: siteName + " - Job",
                },
            },
            {
                path: "tender/create",
                component: () =>
                    import("@/views/back/tender/TenderCreate.vue"),
                name: "admin.tender.create",
                meta: {
                    title: siteName + " - Create Tender",
                },
            },
            {
                path: "tender/edit/:id",
                component: () =>
                    import("@/views/back/tender/TenderEdit.vue"),
                props: true,
                name: "admin.tender.edit",
                meta: {
                    title: siteName + " - Edit Tender",
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
                path: "reportings",
                component: () => import("@/views/back/Reporting.vue"),
                name: "admin.reporting",
                meta: {
                    title: siteName + " - Reportings",
                },
            },

            {
                path: "category-personal-blog",
                component: () =>
                    import("@/views/back/CategoryPersonalBlog.vue"),
                name: "admin.category-personal-blog",
                meta: {
                    title: siteName + " - Category Personal Blog",
                },
            },
            {
                path: "event-niche",
                component: () => import("@/views/back/DemonstrationNiche.vue"),
                name: "admin.event-niche",
                meta: {
                    title: siteName + " - Event Niche",
                },
            },
            {
                path: "event-type",
                component: () => import("@/views/back/DemonstrationType.vue"),
                name: "admin.event-type",
                meta: {
                    title: siteName + " - Event Type",
                },
            },
            {
                path: "event-mode",
                component: () => import("@/views/back/DemonstrationMode.vue"),
                name: "admin.event-mode",
                meta: {
                    title: siteName + " - Event Mode",
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
                path: "personal-posts",
                component: () =>
                    import("@/views/back/personal_blog/PersonalBlogIndex.vue"),
                props: true,
                name: "admin.personal-post.index",
                meta: {
                    title: siteName + " - Posts",
                },
            },
            {
                path: "personal-post/create",
                component: () =>
                    import("@/views/back/personal_blog/PersonalBlogCreate.vue"),
                props: true,
                name: "admin.personal-post.create",
                meta: {
                    title: siteName + " - Create Post",
                },
            },
            {
                path: "personal-post/edit/:id",
                component: () =>
                    import("@/views/back/personal_blog/PersonalBlogEdit.vue"),
                props: true,
                name: "admin.personal-post.edit",
                meta: {
                    title: siteName + " - Edit Post",
                },
            },
            {
                path: "events",
                component: () =>
                    import("@/views/back/demonstration/DemonstrationIndex.vue"),
                props: true,
                name: "admin.event.index",
                meta: {
                    title: siteName + " - Events",
                },
            },
            {
                path: "events/create",
                component: () =>
                    import(
                        "@/views/back/demonstration/DemonstrationCreate.vue"
                    ),
                props: true,
                name: "admin.event.create",
                meta: {
                    title: siteName + " - Create Event",
                },
            },
            {
                path: "events/edit/:id",
                component: () =>
                    import("@/views/back/demonstration/DemonstrationEdit.vue"),
                props: true,
                name: "admin.event.edit",
                meta: {
                    title: siteName + " - Edit Event",
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
                path: "announcement-comment",
                component: () =>
                    import(
                        "@/views/back/announcement_comment/AnnouncementCommentIndex.vue"
                    ),
                name: "admin.announcement-comment.index",
                meta: {
                    title: siteName + " - Announcement Comment",
                },
            },
            {
                path: "announcement-comment/create",
                component: () =>
                    import(
                        "@/views/back/announcement_comment/AnnouncementCommentCreate.vue"
                    ),
                name: "admin.announcement-comment.create",
                meta: {
                    title: siteName + " - Create Announcement Comment",
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
    if (to.params.slug && to.params.slug != "") {
        document.title =
            to.meta.title +
            `${to.params.slug[0].toUpperCase()}${to.params.slug
                .replaceAll("-", " ")
                .slice(1)} | ` +
            siteName;
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
        window.location.href = "/login/not-login";
    } else {
        next();
    }
});

export default router;
