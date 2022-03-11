import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Contact from "../views/Contact.vue";
import Establishment from "../views/Establishment.vue";
import Job from "../views/Job.vue";
import Login from "../views/Login.vue";
import Pack from "../views/Pack.vue";
import Particular from "../views/Particular.vue";
import PoliticalInstitution from "../views/PoliticalInstitution.vue";
import PropAu from "../views/PropAu.vue";
import Universities from "../views/Universities.vue";
import RegisterParticular from "../views/RegisterParticular.vue";
import RegisterFreeBusiness from "../views/RegisterFreeBusiness.vue";
import RegisterPayBusiness from "../views/RegisterPayBusiness.vue";
import RegisterIP from "../views/RegisterIP.vue";
import NotFound from "../views/NotFound.vue";

const siteName = "AfricaUnity";

const routes = [
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
        path: '/register/particular',
        name: 'register.p',
        component: RegisterParticular,
        meta:{
            title: siteName + ' - S\'inscrire'
        }
    },
    {
        path: '/register/business/1',
        name: 'register.fb',
        component: RegisterFreeBusiness,
        meta:{
            title: siteName + ' - S\'inscrire'
        }
    },
    {
        path: '/register/business/2',
        name: 'register.pb',
        component: RegisterPayBusiness,
        meta:{
            title: siteName + ' - S\'inscrire'
        }
    },
    {
        path: '/register/political-institution',
        name: 'register.ip',
        component: RegisterIP,
        meta:{
            title: siteName + ' - S\'inscrire'
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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;