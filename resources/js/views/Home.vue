<template>
    <Header />
    <Caroussel />
    <div class="lg:flex p-4 lg:space-x-2 space-y-4 text-lg">
        <div class="lg:w-[70%]">
            <div>
                <h1 class="text-white px-2 py-1 bg-[#006d62] inline-block">
                    Intégration Africaine
                </h1>
                <div class="border-t-2 border-[#006d62] text-justify py-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">                           
                        <div class="overflow-hidden shadow bg-white">
                            <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-full h-64">
                            <div class="p-6">
                                <div class="space-y-2">
                                    <div><a href="#" class="text-xs py-1 px-2 rounded text-white bg-[#006d62]"> Art, Culture et Antiquité </a></div>
                                    <div><a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue"> Article Art UA 5 </a></div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><UserIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">Union Africaine</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="overflow-hidden h-32 flex space-x-2 shadow bg-white">
                                <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-32 min-h-full">
                                <div class="space-y-2 p-2">
                                    <div>
                                        <a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue"> Article Art UA 5 </a>
                                    </div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    </div>
                            </div>
                            <div class="overflow-hidden h-32 flex space-x-2 shadow bg-white">
                                <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-32 min-h-full">
                                <div class="space-y-2 p-2">
                                    <div>
                                        <a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue leading-none"> Article Art UA 5 </a>
                                    </div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:flex md:space-x-3">
                <div class="w-full">
                    <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                        Other
                    </h1>
                    <div class="border-t-2 w-full border-primary-blue text-justify py-4">
                        <div class="space-y-2">                           
                        <div class="overflow-hidden shadow bg-white">
                            <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-full h-64">
                            <div class="p-6">
                                <div class="space-y-2">
                                    <div><a href="#" class="text-xs py-1 px-2 rounded text-white bg-[#006d62]"> Art, Culture et Antiquité </a></div>
                                    <div><a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue"> Article Art UA 5 </a></div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><UserIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">Union Africaine</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="overflow-hidden h-32 flex space-x-2 shadow bg-white">
                                <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-32 min-h-full">
                                <div class="space-y-2 p-2">
                                    <div>
                                        <a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue"> Article Art UA 5 </a>
                                    </div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    </div>
                            </div>
                            <div class="overflow-hidden h-32 flex space-x-2 shadow bg-white">
                                <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-32 min-h-full">
                                <div class="space-y-2 p-2">
                                    <div>
                                        <a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue leading-none"> Article Art UA 5 </a>
                                    </div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="w-full">
                    <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                        Other
                    </h1>
                    <div class="border-t-2 w-full border-primary-blue text-justify py-4">
                        <p>
                            
                        </p>
                    </div>
                </div>
            </div>
            <div class="my-8 flex justify-center">
                <div class="inline-block shadow p-2"><img :src="path + '/img/barniere-africa.png'" alt=""></div>          
            </div>
            <div>
                <h1 class="text-white px-3 py-2 mb-3 bg-primary-blue block">
                        Other
                </h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">                           
                        <div class="overflow-hidden shadow bg-white">
                            <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-full h-64">
                            <div class="p-6">
                                <div class="space-y-2">
                                    <div><a href="#" class="text-xs py-1 px-2 rounded text-white bg-[#006d62]"> Art, Culture et Antiquité </a></div>
                                    <div><a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue"> Article Art UA 5 </a></div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><UserIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">Union Africaine</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="overflow-hidden h-32 flex space-x-2 shadow bg-white">
                                <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-32 min-h-full">
                                <div class="space-y-2 p-2">
                                    <div>
                                        <a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue"> Article Art UA 5 </a>
                                    </div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    </div>
                            </div>
                            <div class="overflow-hidden h-32 flex space-x-2 shadow bg-white">
                                <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover w-32 min-h-full">
                                <div class="space-y-2 p-2">
                                    <div>
                                        <a href="#" class="text-xl font-semibold text-gray-600 hover:text-primary-blue leading-none"> Article Art UA 5 </a>
                                    </div>
                                    <div class="flex text-xs space-x-2 text-gray-400">
                                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="lg:w-[30%]">
            <FilterArticle/>
            <div class="w-full">
                    <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                        {{ $t('register') }}
                    </h1>
                    <div class="border-t-2 w-full border-primary-blue text-justify py-4">
                        <img :src="path + '/img/barre-laterale-africa.jpg'" alt="" class="object-cover mx-auto">
                    </div>
            </div>
            <div class="w-full">
                    <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                        {{ $t('recent-posts') }}
                    </h1>
                    <div class="border-t-2 w-full border-primary-blue text-justify py-4">
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                        {{ $t('video') }}
                    </h1>
                    <div class="border-t-2 w-full border-primary-blue text-justify py-4">
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                        {{ $t('presentation') }}
                    </h1>
                    <div class="border-t-2 w-full border-primary-blue text-justify py-4">
                        <p>
                            
                        </p>
                    </div>
                </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Header from "../components/Header.vue";
import FilterArticle from "../components/FilterArticle.vue";
import Footer from "../components/Footer.vue";
import Caroussel from "../components/Caroussel.vue";
import { CalendarIcon, UserIcon, ChatIcon} from '@heroicons/vue/solid';
export default {
    components:{
        Header,
        Caroussel,
        Footer,
        CalendarIcon,
        UserIcon,
        ChatIcon,
        FilterArticle
    },
    data(){
        return{
            path : window.location.origin ,
        }
    },
    setup(props) {
        
    },
    methods: {

    },
    computed:{

    },
    mounted(){

    }
}
</script>