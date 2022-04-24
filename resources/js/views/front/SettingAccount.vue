<template>
    <Header />
    <h1 class="lg:text-5xl text-4xl text-primary-blue text-center py-4 capitalize font-bold">{{ $t('setting-account') }}</h1>
   <div class=" py-8 lg:px-16 flex mx-auto">
       <div class="border bg-gray-50 lg:px-6 px-2 py-4 flex flex-col items-center justify-center shadow">
            <div v-if="loading == 1" class="p-28">
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
            <div v-else >
                <div class="w-full flex justify-center flex-col items-center">
                <div class="lg:h-32 lg:w-32 h-20 w-20  rounded-full overflow-hidden">
                    <img :src="user.avatar" class="w-full h-full bg-cover object-cover" alt="" v-if="user.avatar">
                        <UserCircleIcon v-else class="w-full h-full text-gray-500"/>
                </div>
                </div>
                <h1 class=" capitalize font-bold lg:text-xl text-lg text-center mt-2 hidden lg:block">{{ user.firstname }} <span v-if="user.type == 'particular'">{{ user.lastname }}</span> </h1>
                <h2 class="text-center lg:text-md text-sm font-light mt-1">
                    <span v-if="user.type == 'particular'">{{ $t('physical-person') }}</span>
                    <span v-else-if="user.type == 'ip'">{{ $t('ip') }}</span>
                    <span v-else-if="user.type == 'admin'">Admin</span>
                    <span v-else>{{ $t('corporation') }}</span>
                </h2>
                <h3 class="text-center font-black text-primary-blue lg:text-lg text-md mt-1">
                    <span v-if="user.type == 'particular'">{{ $t('pack') }} {{ $t('particular') }}</span>
                    <span v-else-if="user.type == 'ip'">{{ $t('pack') }} {{ $t('politic') }}</span>
                    <span v-else-if="user.type == 'admin'">Admin</span>
                    <span v-else>{{ $t('pack') }} {{ $t('business') }}</span>
                </h3>
                <button disabled v-if="user.type == 'business1'" class=" bg-primary-blue px-2 py-1 flex items-center justify-center lg:text-md text-xs space-x-2 shadow text-white rounded">
                    <ArrowCircleUpIcon  class="w-6 h-6"/>
                    <span class="hidden lg:block">UPGRADE PACK</span>
                </button>
            </div>
           <div class="mt-4">
               <button @click="changeTab('account')" :class="[ !open.account ? 'border-y  w-full bg-menu text-white px-3 py-2 flex items-center justify-start space-x-2' : 'border-y bg-primary-blue w-full  text-white px-3 py-2 flex items-center justify-start space-x-2']" >
                   <UserCircleIcon class="w-6 h-6"/>
                   <span class="hidden lg:block">{{ $t('account') }}</span>
               </button>
               <button @click="changeTab('conf')" :class="[ !open.conf ? 'border-y bg-menu w-full  text-white px-3 py-2 flex items-center justify-start space-x-2' : 'border-y bg-primary-blue w-full  text-white px-3 py-2 flex items-center justify-start space-x-2']">
                   <KeyIcon class="w-6 h-6"/>
                   <span class="hidden lg:block">{{ $t('privacy') }}</span>
               </button>
               <button @click="changeTab('password')" :class="[ !open.password ? 'border-y bg-menu w-full  text-white px-3 py-2 flex items-center justify-start space-x-2' : 'border-y bg-primary-blue w-full  text-white px-3 py-2 flex items-center justify-start space-x-2']">
                   <LockClosedIcon class="w-6 h-6"/>
                   <span class="hidden lg:block">{{ $t('change-password') }}</span>
               </button>
               <button @click="changeTab('delete')" :class="[ !open.delete ? 'border-y bg-menu w-full  text-white px-3 py-2 flex items-center justify-start space-x-2' : 'border-y bg-primary-blue w-full  text-white px-3 py-2 flex items-center justify-start space-x-2']">
                   <TrashIcon class="w-6 h-6"/>
                   <span class="hidden lg:block">{{ $t('delete-account') }}</span>
               </button>
           </div>
       </div>
       <div class=" py-10 w-[70%]">
           <div v-if="errors != ''" class="px-12"> 
               <Error>{{ errors }}</Error>
           </div>
           <div v-if="loadingC == 2" class=" flex justify-start space-x-3 py-4 px-4 bg-green-50 text-green-700 mx-12">
                <CheckCircleIcon class="h-6 w-6" />
                <p> {{ $t('update-s') }}</p>
            </div>
           <div v-if="loading == 1" class="p-28">
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
           <div v-else>
                <div v-if="open.account">
                        <form @submit.prevent="saveUserSetting()">
                            <div v-if="user.type == 'particular' || user.type == 'admin'">
                                <div class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                        <label class="">
                                            {{ $t('firstname') }}
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            v-model="user.firstname"
                                            class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                        />
                                </div>
                                <div class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                    <label class="">
                                        {{ $t('lastname') }}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        v-model="user.lastname"
                                        class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                    />
                                </div>
                            </div>
                            <div v-else-if=" user.type == 'business1' || user.type == 'business2'" class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                <label class="">
                                    {{ $t('social-reason') }}
                                </label>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>

                            <div v-else class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                <label class="">
                                    {{ $t('denomination') }}
                                </label>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>

                            <div  class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                <label class="">
                                    {{ $t('adresse') + ' ' + $t('email') }}
                                </label>
                                <input
                                    type="email"
                                    required
                                    v-model="user.email"
                                    class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                            </div>

                            <div  class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                <label class="">
                                    {{ $t('profile-picture')  }}
                                </label>
                                <input
                                    @change="handelAvatarObject()"
                                    type="file"
                                    ref="avatar"
                                    class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                                <span class="text-xs font-light text-gray-500">(Format: png, jpg, jpeg, gif)</span>
                            </div>

                            <div  class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                <label class="">
                                    {{ $t('cover-picture')  }}
                                </label>
                                <input
                                    @change="handelCoverObject()"
                                    type="file"
                                    ref="cover"
                                    class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                />
                                <span class="text-xs font-light text-gray-500">(Format: png, jpg, jpeg, gif)</span>
                            </div>

                            <div class="lg:px-16 px-8 lg:text-sm text-xs">
                                <button v-if="loadingC == 0 || loadingC == 2" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-6 w-full"> {{ $t('update')  }} </button>
                                <button v-if="loadingC == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                                    <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {{ $t('update')  }}...
                                </button>
                            </div>
                        </form>
                </div>
                <div v-if="open.conf">
                        <div class="bg-gray-100 text-gray-700 px-3 py-2 m-4 rounded lg:text-sm text-xs flex space-x-2">
                            <h1 class="font-bold">{{ $t('privacy') }}</h1> <span class=" font-light">({{ $t('privacy-desc') }})</span>
                        </div>
                        <form @submit.prevent="changePrivacy()">
                                <div class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                    <select
                                        required
                                        v-model="status.status"
                                        class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                    >
                                        <option value="1">{{ $t('evreyone') }}</option>
                                        <option value="2">{{ $t('only-me') }}</option>
                                    </select>
                                </div>

                                <div class="lg:px-16 px-8 lg:text-sm text-xs">
                                    <button v-if="loadingC == 0 || loadingC == 2" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-2 w-full"> {{ $t('update')  }} </button>
                                    <button v-if="loadingC == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-2 w-full">
                                        <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {{ $t('update')  }}...
                                    </button>
                                </div>
                        </form>
                        <div class="bg-gray-100 opacity-25 text-gray-700 px-3 py-2 m-4 rounded lg:text-sm text-xs flex space-x-2">
                            <h1 class="font-bold">{{ $t('download-data')  }}</h1> <span class=" font-light">({{ $t('download-data-desc')  }})</span>
                        </div>
                        <form class=" opacity-25">
                                <div class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                    <input
                                        type="password"
                                        required
                                        v-model="user.password"
                                        :placeholder="$t('password')"
                                        class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                    />
                                </div>

                                <div class="lg:px-16 px-8 lg:text-sm text-xs">
                                    <button v-if="loadingC == 0 || loadingC == 2" disabled type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-2 w-full"> {{ $t("download") }} </button>
                                    <button v-if="loadingC == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-2 w-full">
                                        <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {{ $t("download") }}...
                                    </button>
                                </div>
                        </form>
                        <div class="bg-gray-100 text-gray-700 px-3 py-2 m-4 rounded lg:text-sm text-xs flex space-x-2">
                            <h1 class="font-bold">{{ $t("delete-data") }}</h1> <span class=" font-light">({{ $t("delete-data-desc") }})</span>
                        </div>
                        <form @submit.prevent="deleteData()">
                                <div class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                    <input
                                        type="password"
                                        required
                                        v-model="deleteD.password"
                                        :placeholder="$t('password')"
                                        class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                    />
                                </div>

                                <div class="lg:px-16 px-8 lg:text-sm text-xs">
                                    <button v-if="loadingC == 0 || loadingC == 2" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-2 w-full"> {{ $t("delete") }} </button>
                                    <button v-if="loadingC == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-2 w-full">
                                        <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {{ $t("delete") }}...
                                    </button>
                                </div>
                        </form>
                </div>
                <div v-if="open.password">
                        <form @submit.prevent="changeUserPassword()">
                            <div class="relative lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                    <label class="">
                                        {{ $t("old-password") }}
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        v-model="password.old_password"
                                        class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                    />
                                </div>
                                <div class="relative lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                    <label class="">
                                        {{ $t("new-password") }} 
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        v-model="password.password"
                                        class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                    />
                                </div>
                            <div class="relative lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                    <label class="">
                                        {{ $t('confirm-password') }}
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        v-model="password.password_confirmation"
                                        class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                    />
                                </div>

                                <div class="lg:px-16 px-8 lg:text-sm text-xs">
                                    <button v-if="loadingC == 0 || loadingC == 2" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-6 w-full"> {{ $t('update') }} </button>
                                    <button v-if="loadingC == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                                        <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {{ $t('update') }}...
                                    </button>
                                </div>
                        </form>
                </div>
                <div v-if="open.delete">
                        <form @submit.prevent="deleteUser()">
                            <div class="flex space-x-4 lg:text-sm text-xs px-2 justify-center">
                                
                                <div>
                                    <input type="radio" id="fulldelete" value="2" v-model="deleteU.type" class="border p-1 mr-2">
                                    <label for="fulldelete">{{ $t('complete-delete') }}</label>
                                    
                                </div>

                                <div>
                                    <input type="radio" id="softdelete" value="1" v-model="deleteU.type" class="border p-1 mr-2">
                                    <label for="softdelete">{{ $t('partial-delete') }}</label>
                                    
                                </div>

                            </div>
                            <div class="bg-gray-100 text-gray-700 px-3 py-2 m-4 rounded lg:text-sm text-xs">
                                <span v-if="deleteU.type == 2">
                                    {{ $t('complete-delete-desc') }}
                                </span>
                                    

                                <span v-else>
                                {{ $t('partial-delete-desc') }}
                                </span>
                            </div>

                            <div class="relative lg:px-16 px-8 lg:text-sm text-xs">
                                    <label class="">
                                        {{ $t('delete-account-desc') }}
                                    </label>
                                    <span
                                        ><LockClosedIcon
                                            class="absolute h-6 w-6 mt-5 ml-2 text-gray-400"
                                    /></span>
                                    <input
                                        type="password"
                                        required
                                        v-model="deleteU.password"
                                        :placeholder="$t('password')"
                                        class="form-input px-3 pr-2 pl-10 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                                    />
                                </div>

                                <div class="lg:px-16 px-8 lg:text-sm text-xs">
                                    <button v-if="loadingC == 0 || loadingC == 2" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-6 w-full"> {{ $t('delete') }} </button>
                                    <button v-if="loadingC == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                                        <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {{ $t('delete') }}...
                                    </button>
                                </div>
                        </form>
                </div>
           </div>
       </div>
    </div>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { reactive, ref, onMounted} from "vue";
import useUsers from "../../services/userServices.js";
import Error from "../../components/Error.vue";
import { UserCircleIcon, CheckCircleIcon, ArrowCircleUpIcon, TrashIcon, KeyIcon, LockClosedIcon } from "@heroicons/vue/solid";

export default {
    components:{
        CheckCircleIcon,
        Error,
        ArrowCircleUpIcon,
        UserCircleIcon,
        TrashIcon,
        Header,
        Footer,
        KeyIcon, LockClosedIcon
    },
    props: {
        name: {
            required: true,
            type: String,
        },
        id: {
            required: true,
            type: String,
        },
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login", params: { redirect: 'not-login' }, });
        }
    },
    setup(props) {
        const { user, getUser, deleteUserData, destroyUserFront, updateUser, updateStatusUser, errors, updatePasswordUser } = useUsers();
        const deleteType = ref(1);
        const loading = ref(0);
        const avatar = ref('');
        const loadingC = ref(0);
        const status = reactive({
            status: ""
        });
        const deleteD = reactive({
            user: "",
            password: "",
        });
        const deleteU = reactive({
            user: "",
            type: 1,
            password: "",
        });

        onMounted(
            async () => { 
                loading.value = 1;
                await getUser(props.id);
                status.status = user.value.status;
                deleteD.user = user.value.id;
                deleteU.user = user.value.id;
                loading.value = 0;
            }
        );

        const open = reactive({
            account: true,
            password: false,
            delete: false, 
            conf: false,
        });

        const password = reactive({
            old_password: "",
            password: "",
            password_confirmation: "",
        });

         const changeTab = (type) => {
            switch (type){
                case 'account':
                    open.password = false;
                    open.delete = false;
                    open.conf = false;
                    loadingC.value = 0;
                    errors.value = '';
                    open.account = true;
                break;
                case 'password':
                    open.account = false;
                    open.delete = false;
                    open.conf = false;
                    loadingC.value = 0;
                    errors.value = '';
                    open.password = true;
                break;
                case 'delete':
                    open.account = false;
                    open.password = false;
                    open.conf = false;
                    loadingC.value = 0;
                    errors.value = '';
                    open.delete = true;
                break;
                case 'conf':
                    open.account = false;
                    open.password = false;
                    open.delete = false;
                    loadingC.value = 0;
                    errors.value = '';
                    open.conf = true;
                break;
            }
        };

        const saveUserSetting = async () => {
            loadingC.value = 1;
            let  formData = new FormData();
            formData.append('firstname', user.value.firstname);
            formData.append('lastname', user.value.lastname);
            formData.append('email', user.value.email);
            formData.append('avatar', avatar.value);
            formData.append('cover', user.value.cover);
            formData.append('_method', 'PUT');

            await updateUser(user.value.id, formData)
            if(errors.value == ''){
                loadingC.value = 2;
            }else{
                loadingC.value = 0;
            }

        };

        const changeUserPassword = async () => {
            loadingC.value = 1;
            await updatePasswordUser(user.value.id, {...password})
            if(errors.value == ''){
                loadingC.value = 2;
                password.old_password = '';
                password.password = '';
                password.password_confirmation = '';
            }else{
                loadingC.value = 0;
            }
        };      

        const changePrivacy = async () => {
            loadingC.value = 1;   
            await updateStatusUser(user.value.id, {...status})
            if(errors.value == ''){
                loadingC.value = 2;
            }else{
                loadingC.value = 0;
            }
        };

        const deleteData = async () => {
            loadingC.value = 1;
            if(confirm("I you Sure ?")){   
                await deleteUserData({...deleteD})
            }
            if(errors.value == ''){
                loadingC.value = 2;
                deleteD.password = '';
            }else{
                loadingC.value = 0;
            }
        };

        const deleteUser = async () => {
            loadingC.value = 1;
            if(confirm("I you Sure ?")){   
                await destroyUserFront({...deleteU})
            }
            if(errors.value == ''){
                loadingC.value = 2;
                deleteU.password = '';
                location.href = '/';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }else{
                loadingC.value = 0;
            }
        };

        return{
            deleteUser,
            deleteU,
            deleteD,
            deleteData,
            status,
            changePrivacy,
            password,
            changeUserPassword,
            avatar,
            loadingC,
            errors,
            saveUserSetting,
            loading,
            deleteType,
            changeTab,
            open,
            user
        }
    },
    methods: {
        handelAvatarObject() {
            this.avatar = this.$refs.avatar.files[0];
        },
        handelCoverObject() {
            this.user.cover = this.$refs.cover.files[0];
        },
    }
}
</script>