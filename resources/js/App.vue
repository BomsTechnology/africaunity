<template>
    <Header v-if="url != '/' || token" />
    <router-view></router-view>
    <Footer v-if="url != '/' || token" />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { watch, ref } from "vue";
export default {
    components: {
        Header,
        Footer,
    },

    setup() {
        const token = localStorage.token ? localStorage.token : "";
        const url = ref("");
        url.value = window.location.pathname;

        watch(url, (c, o) => {
            url.value = c;
        });
        return {
            url,
            token,
        };
    },
};
</script>
