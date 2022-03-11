<template>
    <div class="p-4 grid grid-cols-1 lg:grid-cols-9 gap-4">
        <div class="relative lg:col-start-1 lg:col-end-6">
            <div class="object-cover absolute w-full h-full text-white space-y-1 px-8 py-6 flex flex-col justify-end bg-black/25">
                    <div><a href="#" class="text-xs py-1 px-2 rounded bg-purple-500"> Art, Culture et Antiquité </a></div>
                    <div><a href="#" class="text-lg hover:text-primary-blue"> Article Art UA 5 </a></div>
                    <div class="flex text-xs space-x-2">
                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                        <div class="flex space-x-1"><UserIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">Union Africaine</a></div>
                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                    </div>
            </div>
            <img :src="path + '/img/img-2.jpg'" alt="" class="object-cover w-full h-full">
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-start-6 lg:col-end-10">
            <div class="relative">
                <div class="object-cover absolute w-full h-full text-white space-y-1 p-4 flex flex-col justify-end bg-black/25">
                    <div><a href="#" class="text-md hover:text-primary-blue"> Article Art UA 5 </a></div>
                    <div class="flex text-xs space-x-2">
                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                    </div>
                </div>
                <img :src="path + '/img/img-1.jpg'" alt="" class="object-cover md:h-full h-60 w-full">
            </div>
            <div class="relative">
                <div class="object-cover absolute w-full h-full text-white space-y-1 p-4 flex flex-col justify-end bg-black/25">
                    <div><a href="#" class="text-md hover:text-primary-blue"> Article Art UA 5 </a></div>
                    <div class="flex text-xs space-x-2">
                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                    </div>
            </div>
                <img :src="path + '/img/img-3.jpg'" alt="" class="object-cover md:h-full h-60 w-full">
            </div>
            <div class="relative">
                <div class="object-cover absolute w-full h-full text-white space-y-1 p-4 flex flex-col justify-end bg-black/25">
                    <div><a href="#" class="text-md hover:text-primary-blue"> Article Art UA 5 </a></div>
                    <div class="flex text-xs space-x-2">
                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                    </div>
            </div>
                <img :src="path + '/img/img-4.jpg'" alt="" class="object-cover md:h-full h-60 w-full">
            </div>
            <div class="relative">
                <div class="object-cover absolute w-full h-full text-white space-y-1 p-4 flex flex-col justify-end bg-black/25">
                    <div><a href="#" class="text-md hover:text-primary-blue"> Article Art UA 5 </a></div>
                    <div class="flex text-xs space-x-2">
                        <div class="flex space-x-1"><CalendarIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">8 février 2022</a></div>
                        <div class="flex space-x-1"><ChatIcon class="h-4 w-4"/> <a href="#" class="hover:text-primary-blue">0</a></div>
                    </div>
            </div>
                <img :src="path + '/img/img-5.jpg'" alt="" class="object-cover md:h-full h-60 w-full">
            </div>
        </div>
    </div>
</template>

<script>
import { CalendarIcon, UserIcon, ChatIcon} from '@heroicons/vue/solid';
export default {
    components: { 
        CalendarIcon,
        UserIcon,
        ChatIcon
    },
    data(){
        return{
            path : window.location.origin ,
        }
    },
    setup() {
        
    },
    mounted(){
        console.log(this.$t('menu'))
    }
}
</script>