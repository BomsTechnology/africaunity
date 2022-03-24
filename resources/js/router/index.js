import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/front/Home.vue";
import Article from "../views/front/Article.vue";
import Contact from "../views/front/Contact.vue";
import Establishment from "../views/front/Establishment.vue";
import Job from "../views/front/Job.vue";
import Login from "../views/front/Login.vue";
import Pack from "../views/front/Pack.vue";
import AddPost from "../views/front/AddPost.vue";
import SinglePost from "../views/front/SinglePost.vue";
import EditPost from "../views/front/EditPost.vue";
import Particular from "../views/front/Particular.vue";
import PoliticalInstitution from "../views/front/PoliticalInstitution.vue";
import PropAu from "../views/front/PropAu.vue";
import Universities from "../views/front/Universities.vue";
import Register from "../views/front/Register.vue";
import NotFound from "../views/front/NotFound.vue";
import Profile from "../views/front/Profile.vue";
import LoginAdmin from "../views/back/Login.vue";
import Dashboard from "../views/back/Dashboard.vue";
import PostIndex from "../views/back/posts/PostIndex.vue";
import PostCreate from "../views/back/posts/PostCreate.vue";
import PostEdit from "../views/back/posts/PostEdit.vue";
import ContinentIndex from "../views/back/continent/ContinentIndex.vue";
import ContinentCreate from "../views/back/continent/ContinentCreate.vue";
import ContinentEdit from "../views/back/continent/ContinentEdit.vue";
import ZoneIndex from "../views/back/zone/ZoneIndex.vue";
import ZoneCreate from "../views/back/zone/ZoneCreate.vue";
import ZoneEdit from "../views/back/zone/ZoneEdit.vue";
import CountryIndex from "../views/back/country/CountryIndex.vue";
import CountryCreate from "../views/back/country/CountryCreate.vue";
import CountryEdit from "../views/back/country/CountryEdit.vue";
import MinistryIndex from "../views/back/ministry/MinistryIndex.vue";
import MinistryCreate from "../views/back/ministry/MinistryCreate.vue";
import MinistryEdit from "../views/back/ministry/MinistryEdit.vue";
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
        path: '/add/:type',
        name: 'add.post',
        props: true,
        component: AddPost,
        meta:{
            title: siteName + ' - Ajouter'
        }
    },
    {
        path: '/post/:id',
        name: 'show.post',
        props: true,
        component: SinglePost,
        meta:{
            title: siteName
        }
    },
    {
        path: '/:type/:id/edit',
        name: 'edit.post',
        props: true,
        component: EditPost,
        meta:{
            title: siteName
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
                path: 'post/:type',
                component: PostIndex,
                props: true,
                name: 'admin.post.index',
                meta:{
                    title: siteName + ' - Posts'
                }
            },
            {
                path: 'post/create/:type',
                component: PostCreate,
                props: true,
                name: 'admin.post.create',
                meta:{
                    title: siteName + ' - Create Post'
                }
            },
            {
                path: 'post/edit/:type/:id',
                component: PostEdit,
                props: true,
                name: 'admin.post.edit',
                meta:{
                    title: siteName + ' - Edit Post'
                }
            },
            {
                path: 'continent',
                component: ContinentIndex,
                name: 'admin.continent.index',
                meta:{
                    title: siteName + ' - Continent'
                }
            },
            {
                path: 'continent/create',
                component: ContinentCreate,
                name: 'admin.continent.create',
                meta:{
                    title: siteName + ' - Create Continent'
                }
            },
            {
                path: 'continent/edit/:id',
                component: ContinentEdit,
                props: true,
                name: 'admin.continent.edit',
                meta:{
                    title: siteName + ' - Edit Continent'
                }
            },
            {
                path: 'zone',
                component: ZoneIndex,
                name: 'admin.zone.index',
                meta:{
                    title: siteName + ' - Zone'
                }
            },
            {
                path: 'zone/create',
                component: ZoneCreate,
                name: 'admin.zone.create',
                meta:{
                    title: siteName + ' - Create Zone'
                }
            },
            {
                path: 'zone/edit/:id',
                component: ZoneEdit,
                props: true,
                name: 'admin.zone.edit',
                meta:{
                    title: siteName + ' - Edit Zone'
                }
            },
            {
                path: 'country',
                component: CountryIndex,
                name: 'admin.country.index',
                meta:{
                    title: siteName + ' - Country'
                }
            },
            {
                path: 'country/create',
                component: CountryCreate,
                name: 'admin.country.create',
                meta:{
                    title: siteName + ' - Create Country'
                }
            },
            {
                path: 'country/edit/:id',
                component: CountryEdit,
                props: true,
                name: 'admin.country.edit',
                meta:{
                    title: siteName + ' - Edit Country'
                }
            },
            {
                path: 'ministry',
                component: MinistryIndex,
                name: 'admin.ministry.index',
                meta:{
                    title: siteName + ' - Ministry'
                }
            },
            {
                path: 'ministry/create',
                component: MinistryCreate,
                name: 'admin.ministry.create',
                meta:{
                    title: siteName + ' - Create Ministry'
                }
            },
            {
                path: 'ministry/edit/:id',
                component: MinistryEdit,
                props: true,
                name: 'admin.ministry.edit',
                meta:{
                    title: siteName + ' - Edit Ministry'
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
