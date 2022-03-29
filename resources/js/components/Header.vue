<template>
    <div class="px-5 py-2 border-b border-gray-100 flex md:flex-row flex-col md:justify-start items-center">
        <!-- <div> -->
            <h1> {{ now }} </h1>
            <h1>
                <span class="font-semibold mx-4">{{ $t('lastest') }} :</span>
                <Swiper class=" h-5 inline-flex" :space-between="0" :slides-per-view="1" :direction="'vertical'" :autoplay="{delay: 3500, disableOnInteraction: false,}" :modules="modules">
                <SwiperSlide class="relative" v-for="post in posts" :key="post.id"> 
                   <router-link  v-if="!token"
                                :to="{
                                    name: 'login',
                                }" class="text-primary-blue">
                                {{ post.title }}
                                </router-link>
                        <a v-else :href="'/post/ '+ post.id"
                                 class="text-primary-blue"> {{ post.title }} </a>
                </SwiperSlide>
                </Swiper>
            </h1>
        <!-- </div> -->
        <!-- <div>
            <select name="" id="">
                <option value="">yo</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div> -->
    </div>
    <div class="p-4 flex md:justify-end justify-center">
        <img src="/img/barniere-africa.png" alt="">
    </div>
    <Navigation />
</template>

<script>
import Navigation from "../components/Navigation.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay } from 'swiper';
import { reactive, ref, onMounted} from "vue";
import 'swiper/css';
import 'swiper/css/effect-fade';
export default {
    components:{
        Navigation,
        Swiper,
        SwiperSlide,
    },
    data(){
        return{
            now : ((new Date()).toUTCString()).substr(0, 16)
        }
    },
    setup() {
        const token = localStorage.token;
        const posts = ref([]);
        onMounted(
            async () =>{
                let response = await axios.get('/api/posts-caroussel/' + localStorage.lang);
                posts.value = response.data.data;
            });
        return{
            modules: [Autoplay, ],
            posts,
            token
        }
    },
}
</script>
