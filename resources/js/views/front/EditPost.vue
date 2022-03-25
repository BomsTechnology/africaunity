<template>
    <Header />
    <div class=" w-full lg:px-20 py-4">
        <div class=" py-5 text-center w-full space-y-4">
            <h1 class="text-4xl  text-primary-blue font-bold capitalize">
                {{ $t('edit') }} {{ type }}
            </h1>
            <h2 class="text-md  text-gray-700">{{ $t('your') }} {{ type }} {{ $t('add-desc-1') }}</h2>
            <div class="flex lg:flex-row flex-col justify-center items-center lg:space-x-3">
                <h1 class="font-semibold">Veillez sélectionner la langue de publication : </h1>
                <div class="flex space-x-3 lg:mt-0 mt-3">
                    <button :class=" [$i18n.locale != 'fr' ? 'px-3 py-1 rounded-md bg-menu text-white' :'px-3 py-1 rounded-md bg-primary-blue text-white']" @click.prevent="changeLocale('fr')">{{ $t('fr') }}</button>
                    <button :class=" [$i18n.locale != 'en' ? 'px-3 py-1 rounded-md bg-menu text-white' :'px-3 py-1 rounded-md bg-primary-blue text-white']" @click.prevent="changeLocale('en')">{{ $t('en') }}</button>
                    <button :class=" [$i18n.locale != 'es' ? 'px-3 py-1 rounded-md bg-menu text-white' :'px-3 py-1 rounded-md bg-primary-blue text-white']" @click.prevent="changeLocale('es')">{{ $t('es') }}</button>
                    <button :class=" [$i18n.locale != 'pt' ? 'px-3 py-1 rounded-md bg-menu text-white' :'px-3 py-1 rounded-md bg-primary-blue text-white']" @click.prevent="changeLocale('pt')">{{ $t('pt') }}</button>
                </div>
            </div>
        </div>

                
    <section class=" p-6 bg-white shadow-xl rounded-md mx-auto  w-full">
        <Error v-if="errors != ''">{{ errors }}</Error>
        <h1 class="text-xl font-semibold">Modifier un {{ type }}</h1>
        <h2 class="text-md font-light text-gray-700">Merci de garder à l'esprit que la courtoisie est le maitre mot de la communauté ! </h2>
        <form  @submit.prevent="savePost()" id="postform" enctype="multipart/form-data">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200">Title <span class="text-red-500">*</span></label>
                    <input required v-model="post.title" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div class="lg:col-span-1 col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="es">Continent <span class="text-red-500">*</span></label>
                    <select required v-model="post.continent_id" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option v-for="continent in continents" :key="continent.id" :value="continent.id">
                            <span v-if="$i18n.locale == 'en'">{{
                                continent.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                continent.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                continent.name_es
                            }}</span>
                            <span v-else>{{ continent.name_pt }}</span>
                        </option>
                    </select>
                </div>

                <div class="lg:col-span-1 col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="pt">Zone <span class="text-red-500">*</span></label>
                    <select required v-model="post.zone_id" name="" id="" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option v-for="zone in zones" :key="zone.id" :value="zone.id">
                            <span v-if="$i18n.locale == 'en'">{{
                                zone.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                zone.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                zone.name_es
                            }}</span>
                            <span v-else>{{ zone.name_pt }}</span>
                        </option>
                    </select>
                </div>
                <div class="lg:col-span-1 col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="es">Country <span class="text-red-500">*</span></label>
                    <select required v-model="post.country_id" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option v-for="country in countries" :key="country.id" :value="country.id">
                            <span v-if="$i18n.locale == 'en'">{{
                                country.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                country.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                country.name_es
                            }}</span>
                            <span v-else>{{ country.name_pt }}</span>
                        </option>
                    </select>
                </div>

                <div class="lg:col-span-1 col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="pt">Ministry <span class="text-red-500">*</span></label>
                    <select required v-model="post.ministry_id" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option v-for="ministry in ministries" :key="ministry.id" :value="ministry.id">
                            <span v-if="$i18n.locale == 'en'">{{
                                ministry.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                ministry.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                ministry.name_es
                            }}</span>
                            <span v-else>{{ ministry.name_pt }}</span>
                        </option>
                    </select>
                </div>

                <div class="col-span-2" v-if="type == 'article'">
                    <label class="text-gray-700 dark:text-gray-200" for="fr">Image <span class="text-red-500">*</span></label>
                    <input ref="file" @change="handelFileObject()" type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="pt">Content <span class="text-red-500">*</span></label>
                    <textarea required type="text" v-model="post.content" id="pt" class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </textarea>
                </div>
            </div>

            <div class="mt-6">
                <button v-if="loading == 0" type="submit" class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-primary-blue focus:outline-none">Save</button>
                <button v-if="loading == 1" type="submit" disabled class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-blue-300 focus:outline-none">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                </button>
            </div>
        </form>
    </section>
    </div>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { reactive, ref, onMounted } from "vue";
import Error from "../../components/Error.vue";
import usePosts from "../../services/postServices.js";
import useContinents from "../../services/continentServices.js";
import useZones from "../../services/zoneServices.js";
import useCountries from "../../services/countryServices.js";
import useMinistries from "../../services/ministryServices.js";
import router from "../../router/index.js";
export default {
    props: {
          type : {
              required: true,
              type: String
          },
          id : {
              required: true,
              type: String
          }
    },
    components:{
        Header,
        Footer,
        Error
    },
    setup(props) {
        const types = ["article", "propau"];
        const { updatePost ,getPost, post, errors, loading } = usePosts();
        const { continents, getContinents } = useContinents();
        const { zones, getZones } = useZones();
        const { countries, getCountries} = useCountries();
        const { ministries, getMinistries } = useMinistries();

        ;onMounted(
            ()=>{
            if(!localStorage.token){
                router.push({ name: "login" });
            }
            },
            () => {
                if (!types.includes(props.type)) {
                    router.push({ name: "home" });
                }
            },
            getPost(props.id),   
            getContinents(),
            getZones(),
            getCountries(),
            getMinistries(), 
        );
        post.value.image = '';
        const savePost = async () => {
            let  formData = new FormData();
            formData.append('image', post.value.image);
            formData.append('title', post.value.title);
            formData.append('type', post.value.type);
            formData.append('user_id', post.value.user_id);
            formData.append('language', post.value.language);
            formData.append('content', post.value.content);
            formData.append('continent_id', post.value.continent_id);
            formData.append('zone_id', post.value.zone_id);
            formData.append('country_id', post.value.country_id);
            formData.append('ministry_id', post.value.ministry_id);
            formData.append('_method', 'PUT');

            await updatePost(formData, props.id);
                router.push({
                    name: "home",
                });
        };
        return {
            post,
            continents,
            zones,
            countries,
            ministries,
            savePost,
            errors,
            loading
        };
    },
    methods: {
        handelFileObject() {
            this.post.image = this.$refs.file.files[0];
            console.log(this.post);
        },
        changeLocale(lang){
            this.$i18n.locale = lang;
            localStorage.lang = this.$i18n.locale;
        },
    },
}
</script>