<script setup>
import {
    FaceFrownIcon,
    UserCircleIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
    subcriptions: Array,
});




</script>

<template>
    <div>
        <h1 class="text-center text-2xl font-bold text-gray-500 sm:text-4xl">
            {{ $tc("subscription", 2) }}
        </h1>
        <div
            ref="userContainer"
            class="grid grid-cols-1 gap-8 px-10 py-8 md:grid-cols-2 "
            v-if="subcriptions.length != 0"
        >
            <div v-for="(user, index) in subcriptions" :key="index">
                <div
                    v-if="user.subscription_detail"
                    class=" flex flex-col items-center space-y-5 border py-2 text-center"
                >
                   <router-link   :to="{name:'compte',  params: {id : user.subscription_detail.id,slug:'' }}" class="flex justify-center flex-col items-center">
                    <img
                        class="object-cover lg:h-44 lg:w-44 rounded-full h-36 w-36"
                        :src="user.subscription_detail.avatar"
                        v-if="user.subscription_detail.avatar"
                    />
                    <UserCircleIcon v-else class="lg:h-44 lg:w-44 h-36 w-36 text-gray-700" />
                    <div class="mt-2">
                    <h4
                        class="text-gray-700 font-bold capitalize "
                    >
                        {{ user.subscription_detail.firstname }} 
                        {{ user.subscription_detail.lastname  && user.subscription_detail.lastname != 'null' ? user.subscription_detail.lastname : ''}}
                    </h4>
                    <p class="leading-3">
                        <h2 class="font-light text-sm text-primary-blue">
                            {{ user.subscription_detail.email }}
                        </h2>
                    </p>
                    </div>
                    </router-link>
                    <div class=" flex space-x-3 items-center justify-center pb-2">
                        <router-link  class=" text-sm px-2 py-1 rounded-full border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"  :to="{name:'compte',  params: {id : user.subscription_detail.id , slug:'',
                    },query: {
                    redirect: 'article',
                },}"> {{ $t("articles") }}</router-link>
                         <router-link  class=" text-sm px-2 py-1 rounded-full border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"  :to="{name:'compte',  params: {id : user.subscription_detail.id , slug:'',
                    },query: {
                    redirect: 'propau',
                },}"> Propau</router-link>
                    </div>
                </div>
            </div>
        </div>
        <NoContent v-else />
    </div>
</template>
