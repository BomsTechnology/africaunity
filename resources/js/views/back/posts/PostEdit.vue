<template>
<div class="flex">
  <Sidebar/>
  <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
      <div class=" w-full z-0  p-4">
        <div class="px-8 py-5 bg-white shadow-lg flex w-full justify-between">
            <h1 class="text-4xl text-primary-blue font-bold capitalize">
                Edit {{ type }}
            </h1>
        </div>

                
    <section class=" p-6 mx-auto bg-white shadow-md w-full">
        <Error v-if="errors != ''">{{ errors }}</Error>
        <h2 class="text-md font-light text-gray-700">Add a new {{ type }} </h2>
        <form  @submit.prevent="savePost()" id="postform" enctype="multipart/form-data">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200">Title</label>
                    <input required v-model="post.title" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="en">Language</label>
                    <select required v-model="post.language" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option value="fr">French</option>
                        <option value="en">English</option>
                        <option value="es">Espanol</option>
                        <option value="pt">Portugues</option>
                    </select>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es">Continent</label>
                    <select required v-model="post.continent_id" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option v-for="continent in continents" :key="continent.id" :value="continent.id">{{ continent.name_en }}</option>
                    </select>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="pt">Zone</label>
                    <select required v-model="post.zone_id" name="" id="" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option v-for="zone in zones" :key="zone.id" :value="zone.id">{{ zone.name_en }}</option>
                    </select>
                </div>
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="es">Country</label>
                    <select required v-model="post.country_id" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name_en }}</option>
                    </select>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="pt">Ministry</label>
                    <select required v-model="post.ministry_id" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                        <option v-for="ministry in ministries" :key="ministry.id" :value="ministry.id">{{ ministry.name_en }}</option>
                    </select>
                </div>

                <div class="col-span-2" v-if="type == 'article'">
                    <label class="text-gray-700 dark:text-gray-200" for="fr">Image</label>
                    <input required ref="file" @change="handelFileObject()" type="file" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                </div>

                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="pt">Content</label>
                    <textarea required type="text" v-model="post.content" id="pt" class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </textarea>
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button v-if="loading == 0" type="submit" class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none">Save</button>
                <button v-if="loading == 1" type="submit" disabled class="px-6 py-2 leading-5 text-white rounded bg-blue-300 focus:outline-none">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                </button>
            </div>
        </form>
    </section>
            </div>
  </div>
</div>
</template>

<script>
import Sidebar from "../../../components/Sidebar.vue";
import { reactive, ref, onMounted} from "vue";
import Error from "../../../components/Error.vue";
import usePosts from "../../../services/postServices.js";
import useContinents from "../../../services/continentServices.js";
import useZones from "../../../services/zoneServices.js";
import useCountries from "../../../services/countryServices.js";
import useMinistries from "../../../services/ministryServices.js";
import router from "../../../router/index.js"
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
    components: {
        Sidebar,
        Error,
    },
     setup(props) {
        const { updatePost ,getPost, post, errors, loading } = usePosts();
        const { continents, getContinents } = useContinents();
        const { zones, getZones } = useZones();
        const { countries, getCountries} = useCountries();
        const { ministries, getMinistries } = useMinistries();


         ;onMounted(
                getPost(props.id),   
                getContinents(),
                getZones(),
                getCountries(),
                getMinistries(),                      
        );
        
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
            if(props.type == 'article'){
                router.push({ name: 'admin.post.index',  params: { type : 'article' } });
            }else{
                router.push({ name: 'admin.post.index',  params: { type : 'propau' } });
            }
        }

        return{
            post,
            continents,
            zones,
            countries,
            ministries,
            savePost,
            errors,
            loading
        }

    },
    methods: {
        handelFileObject() {
            this.post.image = this.$refs.file.files[0];
            console.log(this.post);
        }
    },

}
</script>