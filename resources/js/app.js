require('./bootstrap');

import { createApp } from 'vue';
import Home from "./views/front/Home.vue";
import router from "./router";
import i18n from './locales/i18n';


const app = createApp({
    components:{
        Home
    },
}).use(i18n).use(router).mount('#app');



