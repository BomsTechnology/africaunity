<template>
    <Header />
    <div class=" w-full lg:px-20 py-4">
        <div class=" py-5 text-center w-full space-y-4">
            <h1 class="text-4xl  text-primary-blue font-bold capitalize">
                {{ $t('edit') }} {{ $t('ads') }}
            </h1>
        </div>

                
    <section class=" p-6 bg-white shadow-xl rounded-md mx-auto  w-full">
        <Error v-if="errors != ''">{{ errors }}</Error>
        <h1 class="text-xl font-semibold">{{ $t('edit') }} {{ $t('ads') }}</h1>
        <h2 class="text-md font-light text-gray-700">{{ $t('good-msg-post') }} ! </h2>

        <form  @submit.prevent="saveAnnouncement()" id="announcementform" enctype="multipart/form-data">
                <div class="mt-4">
                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >
                                    {{ $t('title') }} 
                                    <span class="text-red-500">*</span>                              
                                    </label
                                >
                                <input
                                    required
                                    v-model="announcement.title"
                                    maxlength="50"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                                <span class="text-xs font-light text-gray-400">{{ announcement.title ? announcement.title.length : 0 }} of 50 Characters</span>
                            </div>
                            <div class="col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4">
                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="pt"
                                        >{{ $t('university') }} 
                                        <span class="text-red-500">*</span>
                                        </label
                                    >
                                    <select
                                        required
                                        v-model="announcement.university_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="university in universities"
                                            :key="university.id"
                                            :value="university.id"
                                        >
                                            {{ university.name }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="pt"
                                        >{{ $t('category') }} <span class="text-red-500">*</span></label
                                    >
                                    <select
                                        required
                                        v-model="announcement.category_announcement_id"
                                        name=""
                                        id=""
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="category_announcement in categoryAnnouncements"
                                            :key="category_announcement.id"
                                            :value="category_announcement.id"
                                        >
                                            {{ category_announcement.name }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >{{ $t('contact-phone') }} 
                                        <span class="text-red-500">*</span>
                                        </label
                                    >
                                    <input
                                        required
                                        v-model="announcement.phone"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >{{ $t('contact-email') }}
                                        <span class="text-red-500">*</span>
                                        </label
                                    >
                                    <input
                                        required
                                        v-model="announcement.email"
                                        type="email"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div v-if="announcement.category_announcement_id != 10">
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >{{ $t('price') }}
                                        <span class="text-red-500">*</span>
                                        </label
                                    >
                                    <input
                                        required
                                        v-model="announcement.price"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>

                                <div v-if="announcement.category_announcement_id != 10">
                                    <label
                                        class="text-gray-700 dark:text-gray-200"
                                        for="es"
                                        >{{ $t('currency') }}
                                        <span class="text-red-500">*</span>
                                        </label
                                    >
                                    <select
                                        required
                                        v-model="announcement.currency_id"
                                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                                    >
                                        <option
                                            v-for="currency in currencies"
                                            :key="currency.id"
                                            :value="currency.id"
                                        >
                                            {{ currency.symbol + ' ' + currency.name }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >{{ $t('adresse') }}</label
                                    >
                                    <input
                                        v-model="announcement.adress"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200"
                                        >{{ $t('website') }}</label
                                    >
                                    <input
                                        v-model="announcement.website"
                                        type="text"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                            </div>
                            <div class="col-span-2 mt-4">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="fr"
                                    >{{ $t('thumbnails') }}</label
                                >
                                <input
                                    ref="file"
                                    @change="handelFileObject()"
                                    type="file"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div class="col-span-2 mt-4">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="pt"
                                    >{{ $t('description') }}
                                    <span class="text-red-500">*</span>
                                    </label
                                >
                                <textarea
                                    required
                                    type="text"
                                    v-model="announcement.description"
                                    id="pt"
                                    class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                >
                                </textarea>
                            </div>
                        </div>
            <div class="mt-6">
                <button v-if="loading == 0" type="submit" class="px-6 py-4 text-md leading-5 w-full text-white rounded bg-primary-blue focus:outline-none">{{ $t('save') }}</button>
                <button v-if="loading == 1" type="submit" disabled class="px-6 py-4 text-md leading-5 flex justify-center items-center w-full text-white rounded bg-blue-300 focus:outline-none">
                    {{ $t('save') }}...
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
import useAnnouncements from "../../services/announcementServices.js";
import usecategoryAnnouncements from "../../services/categoryAnnouncementServices.js";
import useCurrencies from "../../services/currencyServices.js";
import useUniversities from "../../services/universityServices.js";
import router from "../../router/index.js";
export default {
    props: {
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
    created(){
        if (!localStorage.token) {
                router.push({ name: "login", params: { redirect: 'not-login' }, });
        }
    },
    setup(props) {

        const { updateAnnouncement ,getAnnouncement, announcement, errors, loading } = useAnnouncements();
        const { categoryAnnouncements, getCategoryAnnouncements } = usecategoryAnnouncements();
        const { currencies, getCurrencies } = useCurrencies();
        const { universities, getUniversities } = useUniversities();

        ;onMounted(
            getAnnouncement(props.id),   
            getCategoryAnnouncements(),
            getCurrencies(),
            getUniversities()
        );
        announcement.value.image = '';
        const saveAnnouncement = async () => {
            let  formData = new FormData();
            formData.append('image', announcement.value.image);
            formData.append("title", announcement.value.title);
            formData.append("description", announcement.value.description);
            formData.append("price", announcement.value.price);
            formData.append("adress", announcement.value.adress);
            formData.append("website", announcement.value.website);
            formData.append("email", announcement.value.email);
            formData.append("phone", announcement.value.phone);
            formData.append("user_id", announcement.value.user_id);
            formData.append("category_announcement_id", announcement.value.category_announcement_id);
            formData.append("currency_id", announcement.value.currency_id);
            formData.append("university_id", announcement.value.university_id);
            formData.append('_method', 'PUT');

            await updateAnnouncement(formData, props.id);
            if(errors.value == ''){
                router.push({
                    name: "universities",
                });
            }
        };
        return {
            announcement,
            universities,
            categoryAnnouncements,
            currencies,
            saveAnnouncement,
            errors,
            loading
        };
    },
    methods: {
        handelFileObject() {
            this.announcement.image = this.$refs.file.files[0];
        },
    },
}
</script>