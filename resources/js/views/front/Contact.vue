<template>
    <Header />
    <h1 class="text-5xl text-primary-blue text-center capitalize font-bold">{{ $t('contact') }}</h1>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
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
        
    },
}
</script>
