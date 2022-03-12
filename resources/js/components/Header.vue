<template>
    <div class="px-5 py-2 border-b border-gray-100 flex md:flex-row flex-col md:justify-start items-center">
        <h1> {{ now }} </h1>
        <h1>
            <span class="font-semibold ml-4">{{ $t('lastest') }} :</span>
            <span class="text-primary-blue"> Mon Super Article </span>
        </h1>
    </div>
    <div class="p-4 flex md:justify-end justify-center">
        <img src="/img/barniere-africa.png" alt="">
    </div>
    <Navigation />
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
    components:{
        Navigation,
    },
    data(){
        return{

            now : ((new Date()).toUTCString()).substr(0, 16)
        }
    },
    setup() {
        
    },
}
</script>
