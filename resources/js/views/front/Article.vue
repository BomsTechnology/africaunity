<template>
    <Header />
        <div class="flex lg:flex-row flex-col-reverse  p-4 lg:space-x-2 md:space-y-2 text-lg">
        <div class="lg:w-[70%]">
                <h1 class="text-5xl text-primary-blue text-center capitalize font-bold">{{ $t('articles') }}</h1>
                <div>
                    
                </div>
        </div>
        <div class="lg:w-[30%] bg-white">
            <FilterArticle/>
        </div>
    </div>
    <Footer/>
</template>

<script>
import router from "../../router";
import { reactive, ref, onMounted} from "vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import FilterArticle from "../../components/FilterArticle.vue";
export default {
    components:{
        Header,
        Footer,
        FilterArticle
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
