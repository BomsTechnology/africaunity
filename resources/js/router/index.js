import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/front/Home.vue";
import Article from "../views/front/Article.vue";
import Contact from "../views/front/Contact.vue";
import Establishment from "../views/front/Establishment.vue";
import Job from "../views/front/Job.vue";
import Login from "../views/front/Login.vue";
import Pack from "../views/front/Pack.vue";
import Particular from "../views/front/Particular.vue";
import PoliticalInstitution from "../views/front/PoliticalInstitution.vue";
import PropAu from "../views/front/PropAu.vue";
import Universities from "../views/front/Universities.vue";
import Register from "../views/front/Register.vue";
import NotFound from "../views/front/NotFound.vue";
import Profile from "../views/front/Profile.vue";
import LoginAdmin from "../views/back/Login.vue";
import Dashboard from "../views/back/Dashboard.vue";

const siteName = "AfricaUnity";

const routes = [
    // front routes
    {
        path: '/',
        name: 'home',
        component: Home,
        meta:{
            title: siteName + ' - Acceuil'
        }
    },
    {
        path: '/articles',
        name: 'articles',
        component: Article,
        meta:{
            title: siteName + ' - Articles'
        }
    },
    {
        path: '/prop-au',
        name: 'propau',
        component: PropAu,
        meta:{
            title: siteName + ' - PropAU'
        }
    },
    {
        path: '/profiles/establishment',
        name: 'establishment',
        component: Establishment,
        meta:{
            title: siteName + ' - Etablissement'
        }
    },
    {
        path: '/profiles/particular',
        name: 'particular',
        component: Particular,
        meta:{
            title: siteName + ' - Particulier'
        }
    },
    {
        path: '/profiles/political-institution',
        name: 'ip',
        component: PoliticalInstitution,
        meta:{
            title: siteName + ' - Institutions Politiques'
        }
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: Job,
        meta:{
            title: siteName + ' - Jobs'
        }
    },
    {
        path: '/universities',
        name: 'universities',
        component: Universities,
        meta:{
            title: siteName + ' - Universités'
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta:{
            title: siteName + ' - Contact'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta:{
            title: siteName + ' - Se Connecter'
        }
    },
    {
        path: '/pack',
        name: 'pack',
        component: Pack,
        meta:{
            title: siteName + ' - Pack'
        }
    },
    {
        path: '/register/:type',
        name: 'register',
        props: true,
        component: Register,
        meta:{
            title: siteName + ' - S\'inscrire'
        }
    },
    {
        path: '/compte/:id',
        name: 'compte',
        props: true,
        component: Profile,
        meta:{
            title: siteName + ' - Compte'
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not.found',
        component: NotFound,
        meta:{
            title: siteName + ' - Page Introuvable'
        }
    },

    // Admin routes
    {
        path: '/admin',
        name: 'admin',
        component: LoginAdmin,
        name: 'admin',
        children: [
            {
                path: '',
                component: LoginAdmin,
                name: 'admin.login',
                meta:{
                    title: siteName + ' - Admin Panel'
                }
            },
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'admin.dash',
                meta:{
                    title: siteName + ' - Dashboard'
                }
            },
            {
                path: 'post/:type/:id',
                component: Dashboard,
                props: true,
                name: 'admin.post',
                meta:{
                    title: siteName + ' - Posts'
                }
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else  if (savedPosition) {
            return savedPosition
          } else {
            return { top: 0 }
          }
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;
