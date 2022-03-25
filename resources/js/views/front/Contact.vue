<template>
    <Header />
    <h1 class="text-5xl text-primary-blue text-center capitalize font-bold">{{ $t('contact') }}</h1>
    <div class=" py-8 px-16">
                <h1 class="text-center text-2xl text-gray-500 font-bold italic">Comming Soon</h1>
    </div>
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
