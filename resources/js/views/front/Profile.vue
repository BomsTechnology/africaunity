<template>
    <Header />
   <h1 class="text-5xl text-primary-blue text-center capitalize font-bold">{{ $t('account') }}</h1>
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
    data(){
        return{

        }
    },
    setup(props) {
        onMounted(()=>{
            if(!localStorage.token){
                router.push({ name: "login" });
            }
        })
    },
}
</script>
