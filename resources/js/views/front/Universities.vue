<template>
    <Header />
   <h1 class="text-5xl text-primary-blue text-center capitalize font-bold">{{ $t('univerities') }}</h1>
   <div class=" py-8 px-16">
                <h1 class="text-center text-2xl text-gray-500 font-bold italic">Comming Soon</h1>
    </div>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { reactive, ref, onMounted} from "vue";
import router from "../../router";
export default {
    components:{
        Header,
        Footer,
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login" });
        }
    },
    setup(props) {
    },
}
</script>
