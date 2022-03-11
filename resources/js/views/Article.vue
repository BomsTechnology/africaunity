<template>
    <Header />
        <div class="flex p-4 space-x-2 text-lg">
        <div class="w-[70%]">
            
        </div>
        <div class="w-[30%] bg-white">
            <FilterArticle/>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import FilterArticle from "../components/FilterArticle.vue";
export default {
    components:{
        Header,
        Footer,
        FilterArticle
    },
    data(){
        return{
            
        }
    },
    setup(props) {
        
    },
    methods: {

    },
    computed(){

    },
    mounted(){

    }
}
</script>