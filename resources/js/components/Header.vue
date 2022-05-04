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
                                    name: 'login', params: { redirect: 'not-login' },
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
    <div class="p-4 flex flex-col lg:flex-row md:justify-between items-center lg:space-y-0 space-y-2 justify-center">
        <img src="/img/logo_au.png" class="h-16 w-80" alt="">
        <img src="/img/barniere-africa.png" class=" h-20" alt="">
    </div>
    <Navigation />
    <div class="fixed md:hidden z-50 bottom-0 inset-x-0 pb-2">
            <div class=" flex justify-center">
                <button class="px-2 py-1 bg-primary-blue text-white shadow-xl rounded download-app">Télécharger AfricaUnity</button>
            </div> 
        </div>
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
        const download_app = ref(null);
        onMounted(
            async () =>{
                let response = await axios.get('/api/posts-caroussel/' + localStorage.lang);
                posts.value = response.data.data;
            });
        return{
            modules: [Autoplay, ],
            download_app,
            posts,
            token
        }
    },
    methods: {
        initializePWA () {
            let deferredPrompt;
            const addBtn = document.querySelector('.download-app');
            addBtn.style.display = 'none';
            window.addEventListener('beforeinstallprompt', (e) => {
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                e.preventDefault();
                // Stash the event so it can be triggered later.
                deferredPrompt = e;
                // Update UI to notify the user they can add to home screen
                addBtn.style.display = 'block';

                addBtn.addEventListener('click', (e) => {
                // hide our user interface that shows our A2HS button
                addBtn.style.display = 'none';
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                    });
                });
            });
        }
    },
    mounted(){
        this.initializePWA()
    }
}
</script>
