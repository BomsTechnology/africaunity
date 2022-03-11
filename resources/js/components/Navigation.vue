<template>
    <div class="bg-menu border-t-4 text-md font-semibold border-primary-blue px-4 pb-2 flex justify-between relative w-full z-40">
        <nav class="hidden lg:flex">
            <router-link :to="{name:'home'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 flex items-center justify-center">
                <HomeIcon class="h-6 w-6"/>
            </router-link>

            <router-link :to="{name:'articles'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('menu-articles') }}
            </router-link>

            <div @mouseleave="hoverProfile = false" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase relative">
                <label @mouseover="hoverProfile = true" class="flex items-center justify-center cursor-pointer">
                    {{ $t('menu-profile') }}
                    <ChevronDownIcon class="h-5 w-5 ml-2"/>
                </label>
                <div v-show="hoverProfile" class="absolute left-0 w-60 flex flex-col py-2 mt-2 bg-menu z-40">
                    <router-link :to="{name:'particular'}" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                        {{ $t('menu-particular') }}
                    </router-link>
                    <router-link :to="{name:'establishment'}" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                        {{ $t('menu-establishment') }}
                    </router-link>
                    <router-link :to="{name:'ip'}" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                        {{ $t('menu-ip') }}
                    </router-link>
                </div>
            </div>

            <router-link :to="{name:'propau'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('menu-propau') }}
            </router-link>

            <router-link :to="{name:'universities'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('menu-univerities') }}
            </router-link>

            <router-link :to="{name:'jobs'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('menu-jobs') }}
            </router-link>

            <router-link :to="{name:'contact'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                {{ $t('menu-contact') }}
            </router-link>

            <router-link :to="{name:'login'}" class="text-white transition-colors duration-200 bg-primary-blue px-3 py-2 mx-2 uppercase">
                {{ $t('login') }} / {{ $t('register') }}
            </router-link>

            <div @mouseleave="hoverLang = false" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase relative">
                <label @mouseover="hoverLang = true" class="flex items-center justify-center cursor-pointer">
                    <span v-if="$i18n.locale == 'fr'">
                            {{  $t('lang-fr') }}
                        </span>
                        <span v-else-if="$i18n.locale == 'en'">
                            {{ $t('lang-en') }}
                        </span>
                        <span v-else-if="$i18n.locale == 'es'">
                            {{ $t('lang-es') }}
                        </span>
                        <span v-else>
                            {{ $t('lang-pt') }}
                        </span>
                    <ChevronDownIcon class="h-5 w-5 ml-2"/>
                </label>
                <div v-show="hoverLang" class="absolute left-0 w-48 flex flex-col py-2 mt-2 bg-menu z-40">
                    <a href="#" v-if="$i18n.locale != 'fr' " @click.prevent="changeLocale('fr')" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('lang-fr') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'en' " @click.prevent="changeLocale('en')" class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('lang-en') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'es' " @click.prevent="changeLocale('es')"  class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('lang-es') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'pt' " @click.prevent="changeLocale('pt')"  class="text-white transition-colors duration-200 text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('lang-pt') }}
                        </a>
                </div>
            </div>              
        </nav>

        <nav class="lg:hidden flex z-40">
            <router-link :to="{name:'home'}" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 flex items-center justify-center">
                <HomeIcon class="h-6 w-6"/>
            </router-link>
            <button type="button" @click="openMenu = !openMenu" class="text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 flex items-center justify-center">
                <MenuIcon class="h-6 w-6"/>
            </button>
            <div v-show="openMenu" class="bg-white absolute mt-12 w-[90%] mx-auto border border-menu shadow-md flex flex-col justify-center">
                <router-link :to="{name:'articles'}" class="text-menu hover:text-white transition-colors duration-200 hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('menu-articles') }}
                </router-link>

                <div class="text-menu pl-6 py-2 uppercase relative">
                    <label class="flex items-center cursor-pointer">
                        {{ $t('menu-profile') }}
                        <ChevronDownIcon class="h-5 w-5 ml-2"/>
                    </label>
                    <div  class="flex flex-col py-2 mt-2">
                        <router-link :to="{name:'particular'}" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('menu-particular') }}
                        </router-link>
                        <router-link :to="{name:'establishment'}" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('menu-establishment') }}
                        </router-link>
                        <router-link :to="{name:'ip'}" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('menu-ip') }}
                        </router-link>
                    </div>
                </div>

                <router-link :to="{name:'propau'}" class="text-menu transition-colors duration-200 hover:text-white hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('menu-propau') }}
                </router-link>

                <router-link :to="{name:'universities'}" class="text-menu transition-colors duration-200 hover:text-white hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('menu-univerities') }}
                </router-link>

                <router-link :to="{name:'jobs'}" class="text-menu transition-colors duration-200 hover:text-white hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('menu-jobs') }}
                </router-link>

                <router-link :to="{name:'contact'}" class="text-menu transition-colors duration-200  hover:text-white hover:bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('menu-contact') }}
                </router-link>

                <router-link :to="{name:'contact'}" class="text-white transition-colors duration-200 bg-primary-blue px-3 py-2 uppercase">
                    {{ $t('login') }} / {{ $t('register') }}
                </router-link>

                <div class="text-menu pl-6 py-2 uppercase relative">
                    <label class="flex items-center  cursor-pointer">
                        <span v-if="$i18n.locale == 'fr'">
                            {{ $t('lang-fr') }}
                        </span>
                        <span v-else-if="$i18n.locale == 'en'">
                            {{ $t('lang-en') }}
                        </span>
                        <span v-else-if="$i18n.locale == 'es'">
                            {{ $t('lang-es') }}
                        </span>
                        <span v-else>
                            {{ $t('lang-pt') }}
                        </span>
                        <ChevronDownIcon class="h-5 w-5 ml-2"/>
                    </label>
                    <div class="flex flex-col py-2 mt-2">
                        <a href="#" v-if="$i18n.locale != 'fr' " @click.prevent="changeLocale('fr')" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('lang-fr') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'en' " @click.prevent="changeLocale('en')" class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('lang-en') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'es' " @click.prevent="changeLocale('es')"  class="text-menu transition-colors duration-200 hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('lang-es') }}
                        </a>
                        <a href="#" v-if="$i18n.locale != 'pt' " @click.prevent="changeLocale('pt')"  class="text-menu  transition-colors duration-200hover:text-white text-sm hover:bg-primary-blue px-3 py-2 uppercase">
                            {{ $t('lang-pt') }}
                        </a>
                    </div>
                </div> 
            </div>             
        </nav>

        <div class="relative">
            <button type="button" @click="openSearch = !openSearch" class="text-white hover:bg-primary-blue px-3 py-2 flex items-center justify-center">
                <SearchIcon class="h-6 w-6"/>
            </button>
            <div v-show="openSearch" class="absolute right-0 w-48 flex flex-col p-2 mt-2 bg-white lg:bg-menu lg:border-0 border border-menu shadow-md lg:shadow-none z-40">
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
import { HomeIcon, ChevronDownIcon, SearchIcon, MenuIcon } from '@heroicons/vue/solid';
export default {
    components: { 
        HomeIcon,
        ChevronDownIcon,
        SearchIcon,
        MenuIcon,
    },
    data(){
        return{
            hoverLang : false ,
            hoverProfile : false ,
            openSearch : false,
            openMenu: false,
        }
    },
    setup() {
        
    },
    computed:{
        currentLang(){
            return $i18n.locale == 'fr' ? this.$t('lang-fr') : $i18n.locale == 'en' ? this.this.$t('lang-en'): $i18n.locale == 'es' ? this.this.$t('lang-es') : this.this.$t('lang-pt');
        }
    },
    methods: {
        changeLocale(lang){
            this.$i18n.locale = lang;
            localStorage.lang = this.$i18n.locale;
        },
    },
    mounted(){
        if(localStorage.lang){
            this.$i18n.locale = localStorage.lang;
        }
    }
}
</script>