<template>
    <Header />
    <div
        class="px-20 text-lg"
    >
        <div>
            <div class="py-6 px-4" v-if="university.length != 0">
                <div 
                    class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                    <!-- University -->
                    <img
                        class="object-cover w-full h-96"
                        :src="university.image"
                        alt=""
                    />
                    <div class="p-6">
                        <div>
                            <a
                                href="#"
                                class="text-xs py-1 px-2 rounded capitalize text-white bg-primary-blue"
                            >
                                <span v-if="$i18n.locale == 'en'">{{
                                    university.city.name_en+ '-' + university.country.code_iso
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    university.city.name_fr+ '-' + university.country.code_iso
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    university.city.name_es + '-' + university.country.code_iso
                                }}</span>
                                <span v-else>{{ university.country.name_pt+ '-' + university.country.code_iso }}</span>
                            </a>
                            <h1
                                class="block mt-2 text-3xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"
                            >
                                {{ university.name }}
                            </h1>

                            <p
                                class="mt-2 py-4 my-4 text-gray-600 dark:text-gray-400"
                            >
                                {{ university.description }}
                            </p>
                        </div>

                    </div>
                </div>
                
            </div>
            <div v-else-if="loading == 1" class="p-28">
                <svg
                    class="animate-spin h-16 w-16 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </div>
            <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">{{ $t('no-content') }}</span>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import router from "../../router";
import { reactive, ref, onMounted } from "vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import {EmojiSadIcon,} from "@heroicons/vue/solid";
import useUniversities from "../../services/universityServices.js";
import Error from "../../components/Error.vue";
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },
    components: {
        EmojiSadIcon,
        Header,
        Footer,
        Error
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login" });
        }
    },
    setup(props) {
        const { university, getUniversity2, loading } = useUniversities();
        const user = JSON.parse(localStorage.user);

        onMounted(
            async () => {
                await getUniversity2(props.id);
            },  
        );
        
        return {
            loading,
            university,
            user,
        };
    },
};
</script>
