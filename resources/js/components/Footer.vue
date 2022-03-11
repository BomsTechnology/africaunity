<template>
    <footer class="bg-[#303440] px-6 py-8 text-[#b1b6b6] text-md">
        <div class="flex lg:justify-between justify-center lg:flex-row flex-col lg:items-start items-center mb-8">
            <div>
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    {{ $t('about-title') }}
                </h1>
                <div class="border-t-2 border-primary-blue md:w-96 text-justify py-4">
                    <p>
                        {{ $t('about-text') }}
                    </p>
                </div>
            </div>
            <div>
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    Other
                </h1>
                <div class="border-t-2 lg:w-96 border-primary-blue text-justify py-4">
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
        <div class="py-6 lg:text-left text-center">
            <p>
                Copyright © 2022 
                <a :href="path" class="hover:text-white underline">AfricaUnity</a>
                | All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            path : window.location.origin ,
        }
    },
    setup() {
        
    },
}
</script>