<template>
    <div class="bg-menu border-t-4 text-md font-semibold border-primary-blue px-4 pb-2 flex justify-between relative w-full z-10">
        <nav class="hidden lg:flex">
            <router-link :to="{name:'home'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 flex justify-center items-start">
                <HomeIcon class="h-6 w-6"/>
            </router-link>

            <router-link :to="{name:'articles'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('articles') }}
            </router-link>

            <div @mouseleave="open.profile = false" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase relative">
                <label @mouseover="open.profile = true" class="flex items-center justify-center cursor-pointer">
                    {{ $t('profile') }}
                    <ChevronDownIcon class="h-5 w-5 ml-2"/>
                </label>
                <div v-show="open.profile" class="absolute left-0 w-60 flex flex-col py-2 mt-2 bg-menu z-40">
                    <router-link :to="{name:'particular'}" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                        {{ $t('particular') }}
                    </router-link>
                    <router-link :to="{name:'establishment'}" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                        {{ $t('establishment') }}
                    </router-link>
                    <router-link :to="{name:'ip'}" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                        {{ $t('ip') }}
                    </router-link>
                </div>
            </div>

            <router-link :to="{name:'propau'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('propau') }}
            </router-link>

            <router-link :to="{name:'universities'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('univerities') }}
            </router-link>

            <router-link :to="{name:'jobs'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('jobs') }}
            </router-link>

            <router-link :to="{name:'contact'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('contact') }}
            </router-link>

            <router-link @mouseleave="open.logout = false"  v-if="token" :to="{name:'compte', params: { name: user.firstname ,id: user.id}}" class="text-white relative transition-colors duration-200 bg-primary-blue px-3 py-2 mx-2 uppercase">
                <div @mouseover="open.logout = true" class="flex items-start space-x-2">
                    <span v-if="user.avatar">
                        <img :src="user.avatar" alt="" class="h-7 w-7 border rounded-full object-cover shadow">
                    </span>
                    <UserCircleIcon v-else class="h-8 w-8 text-white"/>
                    <span>{{ user.firstname }}</span>
                    <span><ChevronDownIcon class="h-5 w-5"/></span>
                </div>
                <div v-show="open.logout" class="absolute left-0 w-48 flex flex-col py-2 mt-2 bg-menu z-40">
                    <a href="#"  @click.prevent="logout()" class="text-white flex items-center transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('logout') }}
                            <svg v-if="loading == 1" class="animate-spin ml-3  h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                    </a>
                </div>           
            </router-link>
            <router-link v-else  :to="{name:'login'}" class="text-white flex transition-colors duration-200 bg-primary-blue px-3 py-2 mx-2 uppercase">
                    {{ $t('login') }} / {{ $t('register') }}
            </router-link>

            <div @mouseleave="open.lang = false" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase relative">
                <label @mouseover="open.lang = true" class="flex items-center justify-center cursor-pointer">
                    <span v-if="$i18n.locale == 'fr'">
                            {{  $t('fr') }}
                        </span>
                        <span v-else-if="$i18n.locale == 'en'">
                            {{ $t('en') }}
                        </span>
                        <span v-else-if="$i18n.locale == 'es'">
                            {{ $t('es') }}
                        </span>
                        <span v-else>
                            {{ $t('pt') }}
                        </span>
                    <ChevronDownIcon class="h-5 w-5 ml-2"/>
                </label>
                <div v-show="open.lang" class="absolute left-0 w-48 flex flex-col py-2 mt-2 bg-menu z-40">
                    <a href="#" v-if="$i18n.locale != 'fr' " @click.prevent="changeLocale('fr')" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('fr') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'en' " @click.prevent="changeLocale('en')" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('en') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'es' " @click.prevent="changeLocale('es')"  class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('es') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'pt' " @click.prevent="changeLocale('pt')"  class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('pt') }}
                        </a>
                </div>
            </div>              
        </nav>

        <nav class="lg:hidden flex z-40">
            <router-link :to="{name:'home'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 flex items-center justify-center">
                <HomeIcon class="h-6 w-6"/>
            </router-link>
            <button type="button" @click="open.menu = !open.menu" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 flex items-center justify-center">
                <MenuIcon class="h-6 w-6"/>
            </button>
            <div v-show="open.menu" class="bg-white absolute mt-12 w-[90%] mx-auto border border-menu shadow-md flex flex-col justify-center">
                <router-link :to="{name:'articles'}" class="text-menu hover:text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('articles') }}
                </router-link>

                <div class="text-menu pl-6 py-2 uppercase relative">
                    <label class="flex items-center cursor-pointer">
                        {{ $t('profile') }}
                        <ChevronDownIcon class="h-5 w-5 ml-2"/>
                    </label>
                    <div  class="flex flex-col py-2 mt-2">
                        <router-link :to="{name:'particular'}" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('particular') }}
                        </router-link>
                        <router-link :to="{name:'establishment'}" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('establishment') }}
                        </router-link>
                        <router-link :to="{name:'ip'}" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('ip') }}
                        </router-link>
                    </div>
                </div>

                <router-link :to="{name:'propau'}" class="text-menu transition-colors duration-200 hover:text-white hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('propau') }}
                </router-link>

                <router-link :to="{name:'universities'}" class="text-menu transition-colors duration-200 hover:text-white hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('univerities') }}
                </router-link>

                <router-link  :to="{name:'jobs'}" class="text-menu transition-colors duration-200 hover:text-white hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('jobs') }}
                </router-link>

                <router-link :to="{name:'contact'}" class="text-menu transition-colors duration-200  hover:text-white hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('contact') }}
                </router-link>

                <router-link v-if="token" :to="{name:'compte', params: { name: user.firstname ,id: user.id},}" >
                <div class="flex space-x-2 items-center text-white transition-colors duration-200 text-sm bg-primary-blue px-3 py-2 uppercase">
                    <span v-if="user.avatar">
                        <img :src="user.avatar" class="h-16 w-16 border rounded-full shadow" alt="">
                    </span>
                    <UserCircleIcon v-else class="h-8 w-8 text-white"/>
                    <span>{{ user.firstname }} {{ user.lastname }}</span>
                </div>
                <div  class="flex flex-col py-2">
                    <a href="#"  @click.prevent="logout()" class="hover:text-white text-menu flex items-center transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('logout') }}
                            <svg v-if="loading == 1" class="animate-spin ml-3  h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                    </a>
                </div>           
            </router-link>
            <router-link v-else  :to="{name:'login'}" class="text-white transition-colors duration-200 bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('login') }} / {{ $t('register') }}
            </router-link>

                <div class="text-menu pl-6 py-2 uppercase relative">
                    <label class="flex items-center  cursor-pointer">
                        <span v-if="$i18n.locale == 'fr'">
                            {{ $t('fr') }}
                        </span>
                        <span v-else-if="$i18n.locale == 'en'">
                            {{ $t('en') }}
                        </span>
                        <span v-else-if="$i18n.locale == 'es'">
                            {{ $t('es') }}
                        </span>
                        <span v-else>
                            {{ $t('pt') }}
                        </span>
                        <ChevronDownIcon class="h-5 w-5 ml-2"/>
                    </label>
                    <div class="flex flex-col py-2 mt-2">
                        <a href="#" v-if="$i18n.locale != 'fr' " @click.prevent="changeLocale('fr')" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('fr') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'en' " @click.prevent="changeLocale('en')" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('en') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'es' " @click.prevent="changeLocale('es')"  class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('es') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'pt' " @click.prevent="changeLocale('pt')"  class="text-menu  transition-colors duration-200hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('pt') }}
                        </a>
                    </div>
                </div> 
            </div>             
        </nav>

        <div class="relative">
            <button type="button" @click="open.search = !open.search" class="text-white hover:bg-primary-blue px-3 py-2 flex items-center justify-center">
                <SearchIcon class="h-6 w-6"/>
            </button>
            <div v-show="open.search" class="absolute right-0 w-48 flex flex-col p-2 mt-2 bg-white lg:bg-menu lg:border-0 border border-menu shadow-md lg:shadow-none z-40">
                <form>
                    <div class="flex">
                        <input type="search" class="px-3 py-2 w-32" placeholder="Recherche">
                        <button type="submit" class="text-white bg-primary-blue px-3 py-2 flex items-center justify-center" ><SearchIcon class="h-6 w-6"/></button>                    
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { HomeIcon, ChevronDownIcon, SearchIcon, MenuIcon, UserCircleIcon } from '@heroicons/vue/solid';
import { reactive, ref, onMounted} from "vue";
import axios from "axios";
export default {
    components: { 
        HomeIcon,
        ChevronDownIcon,
        SearchIcon,
        UserCircleIcon,
        MenuIcon,
    },
    setup() {
        const user = ref('');
        const token = ref('');
        const errors = ref('');
        const loading = ref(0);
        const url = window.location.origin;
        onMounted(()=>{if(localStorage.token){user.value = JSON.parse(localStorage.user); token.value = localStorage.token}}, );
        const open = reactive({
            lang: false,
            profile: false,
            search: false,
            menu: false,
            logout: false
        });

        const logout = async () => {
            try {
                loading.value = 1;
                let response = await axios.post('/api/logout', {}, {
                    headers:{
                        'Authorization': `Bearer ${localStorage.token}`
                    }
                });
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
                loading.value = 2;
                location.href = '/';
            } catch (e) {
                loading.value = 0;
                if(e.response.status == 401){
                    location.href = '/';
                    window.localStorage.removeItem("token");
                    window.localStorage.removeItem("user");
                }
            }
        };

        return{
            url,
            open,
            user,
            token,
            logout,
            loading
        }
    },
    computed:{

    },
    methods: {
        changeLocale(lang){
            this.$i18n.locale = lang;
            localStorage.lang = this.$i18n.locale;
            location.reload();
        }
    },
    mounted(){
        if(localStorage.lang){
            this.$i18n.locale = localStorage.lang;
        }else{
            localStorage.lang = this.$i18n.locale;
        };
    }
}
</script>

<style scoped>
.router-link-active{
    background: #289dcc;
}
</style>