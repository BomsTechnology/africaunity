
<template>
    <div id="container_recaptcha" class="my-4 w-full flex justify-center"></div>
</template>

<script setup>
    import { onMounted } from 'vue';
    onMounted(async () => {
        const link = "https://www.google.com/recaptcha/api.js";
        new Promise((resolve, reject) => {
            let googleScript = document.querySelector(`script[src="${link}"]`);
            if(!googleScript){
                googleScript = document.createElement('script');
                googleScript.src = link;
                googleScript.async = true;
                document.head.append(googleScript);
                googleScript.addEventListener('error', () => {
                    reject();
                });
                
                googleScript.addEventListener('load', () => {
                    resolve();
                });
            }
        }).then(() => {
            document.querySelector('#container_recaptcha').innerHTML = '<div class="g-recaptcha" data-sitekey="6Lerg9YlAAAAAN4OUFACmGDFAmwgNUUKD_VQMzht"></div>';
        });
    });
</script>