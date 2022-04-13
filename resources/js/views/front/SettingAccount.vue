<template>
    <Header />
    <h1 class="lg:text-5xl text-4xl text-primary-blue text-center py-4 capitalize font-bold">Setting Account</h1>
   <div class=" py-8 lg:px-16 flex mx-auto">
       <div class="border bg-gray-50 lg:px-6 px-2 py-4 flex flex-col items-center justify-center shadow">
           <div class="lg:h-32 lg:w-32 h-20 w-20  rounded-full overflow-hidden">
               <img :src="user.avatar" class="w-full h-full bg-cover object-cover" alt="" v-if="user.avatar">
                <UserCircleIcon v-else class="w-full h-full text-gray-500"/>
           </div>
           <h1 class=" capitalize font-bold lg:text-xl text-lg text-center mt-2 hidden lg:block">{{ user.firstname }} {{ user.lastname }}</h1>
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
           <div class="mt-4">
               <button @click="changeTab('account')" :class="[ !open.account ? 'border-y  w-full bg-menu text-white px-3 py-2 flex items-center justify-start space-x-2' : 'border-y bg-primary-blue w-full  text-white px-3 py-2 flex items-center justify-start space-x-2']" >
                   <UserCircleIcon class="w-6 h-6"/>
                   <span class="hidden lg:block">Compte</span>
               </button>
               <button @click="changeTab('conf')" :class="[ !open.conf ? 'border-y bg-menu w-full  text-white px-3 py-2 flex items-center justify-start space-x-2' : 'border-y bg-primary-blue w-full  text-white px-3 py-2 flex items-center justify-start space-x-2']">
                   <KeyIcon class="w-6 h-6"/>
                   <span class="hidden lg:block">Confidentialité</span>
               </button>
               <button @click="changeTab('password')" :class="[ !open.password ? 'border-y bg-menu w-full  text-white px-3 py-2 flex items-center justify-start space-x-2' : 'border-y bg-primary-blue w-full  text-white px-3 py-2 flex items-center justify-start space-x-2']">
                   <LockClosedIcon class="w-6 h-6"/>
                   <span class="hidden lg:block">Modifier le mot de passe</span>
               </button>
               <button @click="changeTab('delete')" :class="[ !open.delete ? 'border-y bg-menu w-full  text-white px-3 py-2 flex items-center justify-start space-x-2' : 'border-y bg-primary-blue w-full  text-white px-3 py-2 flex items-center justify-start space-x-2']">
                   <TrashIcon class="w-6 h-6"/>
                   <span class="hidden lg:block">Supprimer le compte</span>
               </button>
           </div>
       </div>
       <div class=" py-10 w-[70%]">
           <div v-if="open.account">
                <form>
                    <div v-if="user.type == 'particular' || user.type == 'admin'">
                        <div class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                                <label class="">
                                    {{ $t('firstname') }}
                                </label>
                                <input
                                    type="text"
                                    required
                                    v-model="user.password"
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
                                v-model="user.password"
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
                            v-model="user.password"
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
                            v-model="user.password"
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
                            v-model="user.password"
                            class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                        />
                    </div>

                    <div  class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                        <label class="">
                            Photo de profil
                        </label>
                        <input
                            type="file"
                            required
                            class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                        />
                    </div>

                    <div  class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                        <label class="">
                            Photo de couverture
                        </label>
                        <input
                            type="file"
                            required
                            class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                        />
                    </div>

                    <div class="lg:px-16 px-8 lg:text-sm text-xs">
                        <button v-if="loading == 0" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-6 w-full"> Delete </button>
                        <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                            <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {{ $t("delete") }}...
                        </button>
                    </div>
                </form>
           </div>
           <div v-if="open.conf">
                <div class="bg-gray-100 text-gray-700 px-3 py-2 m-4 rounded lg:text-sm text-xs flex space-x-2">
                    <h1 class="font-bold">Confidentialité du profil</h1> <span class=" font-light">(Qui peut voir votre profil)</span>
                </div>
                <form>
                        <div class="lg:px-16 px-8 lg:text-sm text-xs mt-2">
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                class="form-input px-3  w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div class="lg:px-16 px-8 lg:text-sm text-xs">
                            <button v-if="loading == 0" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-2 w-full"> Delete </button>
                            <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-2 w-full">
                                <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ $t("delete") }}...
                            </button>
                        </div>
                </form>
                <div class="bg-gray-100 text-gray-700 px-3 py-2 m-4 rounded lg:text-sm text-xs flex space-x-2">
                    <h1 class="font-bold">Téléchargez vos données</h1> <span class=" font-light">(Saisissez votre mot de passe pour confirmer l'exportation de vos données personnelles)</span>
                </div>
                <form>
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
                            <button v-if="loading == 0" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-2 w-full"> Delete </button>
                            <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-2 w-full">
                                <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ $t("delete") }}...
                            </button>
                        </div>
                </form>
                <div class="bg-gray-100 text-gray-700 px-3 py-2 m-4 rounded lg:text-sm text-xs flex space-x-2">
                    <h1 class="font-bold">Effacement de vos données</h1> <span class=" font-light">(Saisissez votre mot de passe pour confirmer l'effacement de vos données personnelles)</span>
                </div>
                <form>
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
                            <button v-if="loading == 0" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-2 w-full"> Delete </button>
                            <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-2 w-full">
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
                <form>
                    <div class="relative lg:px-16 px-8 lg:text-sm text-xs mt-2">
                            <label class="">
                                Ancien Mot de passe 
                            </label>
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div class="relative lg:px-16 px-8 lg:text-sm text-xs mt-2">
                            <label class="">
                                Nouveau Mot de passe 
                            </label>
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                    <div class="relative lg:px-16 px-8 lg:text-sm text-xs mt-2">
                            <label class="">
                                Confirmer le mot de passe
                            </label>
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                class="form-input px-3 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div class="lg:px-16 px-8 lg:text-sm text-xs">
                            <button v-if="loading == 0" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-6 w-full"> Delete </button>
                            <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                                <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ $t("delete") }}...
                            </button>
                        </div>
                </form>
           </div>
           <div v-if="open.delete">
                <form>
                    <div class="flex space-x-4 lg:text-sm text-xs px-2 justify-center">
                        
                        <div>
                            <input type="radio" id="fulldelete" value="2" v-model="deleteType" class="border p-1 mr-2">
                            <label for="fulldelete">Suppression complete</label>
                            
                        </div>

                        <div>
                            <input type="radio" id="softdelete" value="1" v-model="deleteType" class="border p-1 mr-2">
                            <label for="softdelete">Suppression partielle</label>
                            
                        </div>

                    </div>
                    <div class="bg-gray-100 text-gray-700 px-3 py-2 m-4 rounded lg:text-sm text-xs">
                        <span v-if="deleteType == 2">
                            Ceci entrainera la suppression de toutes vos données sur ce site.
                        </span>
                            

                        <span v-else>
                        Ceci desactivera votre compte, pour le reactiver vous devrez contacter les administrateurs du site via le formulaire de contact
                        </span>
                    </div>

                    <div class="relative lg:px-16 px-8 lg:text-sm text-xs">
                            <label class="">
                                Pour supprimer votre compte saississez votre mot de passe ci-dessous
                            </label>
                            <span
                                ><LockClosedIcon
                                    class="absolute h-6 w-6 mt-5 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                :placeholder="$t('password')"
                                class="form-input px-3 pr-2 pl-10 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div class="lg:px-16 px-8 lg:text-sm text-xs">
                            <button v-if="loading == 0" type="submit" class="text-white  bg-primary-blue px-8 py-2 mt-6 w-full"> Delete </button>
                            <button v-if="loading == 1" disabled type="submit" class="inline-flex items-center justify-center text-white  bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full">
                                <svg class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ $t("delete") }}...
                            </button>
                        </div>
                </form>
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
import { UserCircleIcon, ArrowCircleUpIcon, TrashIcon, KeyIcon, LockClosedIcon } from "@heroicons/vue/solid";
export default {
    components:{
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
        const { user, getUser } = useUsers();
        const deleteType = ref(1);
        const loading = ref(0);

        onMounted( getUser(props.id));

        const open = reactive({
            account: true,
            password: false,
            delete: false, 
            conf: false,
        });

         const changeTab = (type) => {
            switch (type){
                case 'account':
                    open.password = false;
                    open.delete = false;
                    open.conf = false;
                    open.account = true;
                break;
                case 'password':
                    open.account = false;
                    open.delete = false;
                    open.conf = false;
                    open.password = true;
                break;
                case 'delete':
                    open.account = false;
                    open.password = false;
                    open.conf = false;
                    open.delete = true;
                break;
                case 'conf':
                    open.account = false;
                    open.password = false;
                    open.delete = false;
                    open.conf = true;
                break;
            }
        }

        return{
            loading,
            deleteType,
            changeTab,
            open,
            user
        }
    }
}
</script>