<template>
    <Header />
        <div class="flex lg:flex-row flex-col-reverse  p-4 lg:space-x-2 md:space-y-2 text-lg">
        <div class="lg:w-[70%]">
            <h1 class="text-5xl text-primary-blue text-center capitalize font-bold">{{ $t('propau') }}</h1>
        </div>
        <div class="lg:w-[30%] bg-white">
            <FilterPropAu/>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import FilterPropAu from "../../components/FilterPropAu.vue";
import { reactive, ref, onMounted} from "vue";
import router from "../../router";
export default {
    components:{
        Header,
        Footer,
        FilterPropAu
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
