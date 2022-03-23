<template>
    <div class="p-4 lg:flex lg:space-x-3 lg:space-y-0 space-y-3">
        <Swiper class="w-full h-[480px]"  :centeredSlides="true" :autoplay="{delay: 2500, disableOnInteraction: false,}" :modules="modules">
            <SwiperSlide class="relative" v-for="post in posts" :key="post.id">                   
                <div class="object-cover absolute w-full h-full text-white space-y-1 px-8 py-6 flex flex-col justify-end bg-black/25">
                    <div>
                        <a href="#" class="text-xs py-1 px-2 rounded capitalize" :style="'background:'+post.ministry.color"> 
                            <span v-if="$i18n.locale == 'en'">{{ post.ministry.name_en }}</span> 
                            <span v-else-if="$i18n.locale == 'fr'">{{ post.ministry.name_fr }}</span> 
                            <span v-else-if="$i18n.locale == 'es'">{{ post.ministry.name_es }}</span> 
                            <span v-else>{{ post.country.name_pt }}</span> 
                         </a>
                    </div>
                    <div><a href="#" class="text-lg hover:text-primary-blue"> {{ post.title }} </a></div>
                    <div class="flex text-xs space-x-2">
                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">{{ post.date }}</a></div>
                        <div class="flex space-x-1"><UserIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">{{ post.user.firstname }}</a></div>
                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                    </div>
                </div>
                <img :src="post.image" :alt="post.title" class="object-cover w-full h-full">
            </SwiperSlide>
        </Swiper>
        <div class="w-full h-[480px] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="relative h-[230px]"  v-for="post in posts" :key="post.id">
                <div class="object-cover absolute w-full h-full text-white space-y-1 p-4 flex flex-col justify-end bg-black/25">
                    <div><a href="#" class="text-md hover:text-primary-blue"> {{ post.title }} </a></div>
                    <div class="flex text-xs space-x-2">
                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">{{ post.date }}</a></div>
                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                    </div>
                </div>
                <img :src="post.image" :alt="post.title" class="object-cover md:h-full h-60 w-full">
            </div>
        </div>
    </div> 
</template>

<script>
import { CalendarIcon, UserIcon, ChatIcon} from '@heroicons/vue/solid';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
export default {
    props: ['posts'],
    components: { 
        CalendarIcon,
        UserIcon,
        ChatIcon,
        Swiper,
        SwiperSlide,
    },

    setup() {
        return{
            modules: [Autoplay, ],
        }
    },
}
</script>