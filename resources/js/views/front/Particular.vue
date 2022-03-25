<template>
    <Header />
    <h1 class="text-5xl text-primary-blue text-center capitalize font-bold">{{ $t('particular') }}</h1>
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
