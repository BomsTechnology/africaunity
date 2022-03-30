import { createRouter, createWebHistory } from "vue-router";
const Home = () => import ("../views/front/Home.vue");
const Article = () => import ("../views/front/Article.vue");
const Contact = () => import ("../views/front/Contact.vue");
const Establishment = () => import ("../views/front/Establishment.vue");
const Job = () => import ("../views/front/Job.vue");
const Login = () => import ("../views/front/Login.vue");
const Pack = () => import ("../views/front/Pack.vue");
const AddPost = () => import ("../views/front/AddPost.vue");
const SinglePost = () => import ("../views/front/SinglePost.vue");
const SingleUniversity = () => import ("../views/front/SingleUniversity.vue");
const EditPost = () => import ("../views/front/EditPost.vue");
const Particular = () => import ("../views/front/Particular.vue");
const PoliticalInstitution = () => import ("../views/front/PoliticalInstitution.vue");
const PropAu = () => import ("../views/front/PropAu.vue");
const Universities = () => import ("../views/front/Universities.vue");
const Register = () => import ("../views/front/Register.vue");
const NotFound = () => import  ("../views/front/NotFound.vue");
const Profile = () => import  ("../views/front/Profile.vue");
const LoginAdmin = () => import  ("../views/back/Login.vue");
const Dashboard = () => import  ("../views/back/Dashboard.vue");
const PostIndex = () => import  ("../views/back/posts/PostIndex.vue");
const PostCreate = () => import  ("../views/back/posts/PostCreate.vue");
const PostEdit = () => import ("../views/back/posts/PostEdit.vue");
const ContinentIndex = () => import ("../views/back/continent/ContinentIndex.vue");
const ContinentCreate = () => import  ("../views/back/continent/ContinentCreate.vue");
const ContinentEdit = () => import ("../views/back/continent/ContinentEdit.vue");
const CommentIndex = () => import ("../views/back/comment/CommentIndex.vue");
const CommentCreate = () => import  ("../views/back/comment/CommentCreate.vue");
const ZoneIndex = () => import  ("../views/back/zone/ZoneIndex.vue");
const ZoneCreate = () => import  ("../views/back/zone/ZoneCreate.vue");
const ZoneEdit = () => import  ("../views/back/zone/ZoneEdit.vue");
const CountryIndex = () => import  ("../views/back/country/CountryIndex.vue");
const CountryCreate = () => import  ("../views/back/country/CountryCreate.vue");
const CountryEdit = () => import  ("../views/back/country/CountryEdit.vue");
const CityIndex = () => import  ("../views/back/city/CityIndex.vue");
const CityCreate = () => import  ("../views/back/city/CityCreate.vue");
const CityEdit = () => import  ("../views/back/city/CityEdit.vue");
const UniversityIndex = () => import  ("../views/back/university/UniversityIndex.vue");
const UniversityCreate = () => import  ("../views/back/university/UniversityCreate.vue");
const UniversityEdit = () => import  ("../views/back/university/UniversityEdit.vue");
const MinistryIndex = () => import  ("../views/back/ministry/MinistryIndex.vue");
const MinistryCreate = () => import  ("../views/back/ministry/MinistryCreate.vue");
const MinistryEdit = () => import  ("../views/back/ministry/MinistryEdit.vue");
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
        path: '/university/:id',
        name: 'show.university',
        props: true,
        component: SingleUniversity,
        meta:{
            title: siteName
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
        path: '/account/:name/:id',
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
                path: 'comment',
                component: CommentIndex,
                name: 'admin.comment.index',
                meta:{
                    title: siteName + ' - Comment'
                }
            },
            {
                path: 'comment/create',
                component: CommentCreate,
                name: 'admin.comment.create',
                meta:{
                    title: siteName + ' - Create Comment'
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
                path: 'city',
                component: CityIndex,
                name: 'admin.city.index',
                meta:{
                    title: siteName + ' - City'
                }
            },
            {
                path: 'city/create',
                component: CityCreate,
                name: 'admin.city.create',
                meta:{
                    title: siteName + ' - Create City'
                }
            },
            {
                path: 'city/edit/:id',
                component: CityEdit,
                props: true,
                name: 'admin.city.edit',
                meta:{
                    title: siteName + ' - Edit City'
                }
            },
            {
                path: 'university',
                component: UniversityIndex,
                name: 'admin.university.index',
                meta:{
                    title: siteName + ' - University'
                }
            },
            {
                path: 'university/create',
                component: UniversityCreate,
                name: 'admin.university.create',
                meta:{
                    title: siteName + ' - Create University'
                }
            },
            {
                path: 'university/edit/:id',
                component: UniversityEdit,
                props: true,
                name: 'admin.university.edit',
                meta:{
                    title: siteName + ' - Edit University'
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
