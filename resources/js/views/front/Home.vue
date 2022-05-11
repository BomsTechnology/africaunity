<template>
<section class="relative" v-if="!token">
        <div
            class="h-screen w-full bg-cover object-cover"
            style="background-image: url('/img/bg_maintenance.jpg')"
        ></div>
        <div
            class="bg-black/50 absolute top-0 h-screen w-full flex flex-col text-white py-8 justify-between items-center"
        >
            <div>
                <h1 class="text-4xl font-bold mt-10">AfricaUnity</h1>
            </div>

            <div>
                <p class="md:w-1/2 px-8 md:mx-auto mx-10 font-light text-center">
                   <span class="text-3xl font-semibold block my-2">We’ll be back soon!</span> 
                    Sorry for the inconvenience. We’re performing some maintenance at the moment. If you need to you can always contact us for updates, otherwise we’ll be back up shortly!
                </p>
            </div>

            <div>© AficaUnity 2022</div>
        </div>
        <button type="button" @click="toogleLogMaint = !toogleLogMaint " :class="[ toogleLogMaint ? 'h-10 w-10 bg-white absolute md:right-96 right-2/3 p-2 top-36 rounded-l-lg' : 'h-10 w-10 bg-white absolute right-0 p-2 top-36 rounded-l-lg']">
                <LockClosedIcon />
        </button>
        <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 translate-x-full"
            enter-to-class="opacity-1 translate-x-0"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1 translate-x-0"
            leave-to-class="opacity-0 translate-x-full"
        >
            <div v-if="toogleLogMaint" class="absolute h-full top-0 right-0 md:w-96 w-2/3 bg-white px-4">
            <h1 class="text-center font-bold text-gray-600 text-xl my-2 md:text-3xl">Accès utilisateur</h1>
                <Error v-if="errors != ''">{{ errors }}</Error>
                    <form @submit.prevent="login" class="py-4">
                        <div class="relative">
                            <span
                                ><MailIcon
                                    class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="email"
                                required
                                v-model="user.email"
                                :placeholder="$t('adresse') + ' ' + $t('email')"
                                class="form-input px-3 pr-2 pl-10 w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div class="relative">
                            <span
                                ><LockClosedIcon
                                    class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                :placeholder="$t('password')"
                                class="form-input px-3 pr-2 pl-10 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div>
                            <button
                                v-if="loadingL == 0"
                                type="submit"
                                class="text-white text-lg bg-primary-blue px-8 py-2 mt-6 w-full"
                            >
                                {{ $t("login") }}
                            </button>
                            <button
                                v-if="loadingL == 1"
                                disabled
                                type="submit"
                                class="inline-flex items-center justify-center text-white text-lg bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full"
                            >
                                <svg
                                    class="animate-spin mr-3 h-5 w-5 text-white"
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
                                {{ $t("login") }}...
                            </button>
                        </div>

                        <!-- <div class="pt-6 text-center">
                            <router-link
                                class="text-gray-400 hover:underline"
                                :to="{ name: 'forgot.password' }"
                            >
                                {{ $t("password-forgot") }} ?
                            </router-link>
                        </div> -->
                    </form>
            </div>
        </Transition>
</section>
<div v-else>
    <Caroussel />
    <div class="lg:flex p-4 lg:space-x-2 space-y-4 md:space-y-0 text-lg">
        <div class="lg:w-[70%]">
            <div>
                <h1
                    class="text-white px-2 py-1 inline-block"
                    :style="'background:' + ministry1.color"
                >
                    <span v-if="$i18n.locale == 'en'">{{
                        ministry1.name_en
                    }}</span>
                    <span v-else-if="$i18n.locale == 'fr'">{{
                        ministry1.name_fr
                    }}</span>
                    <span v-else-if="$i18n.locale == 'es'">{{
                        ministry1.name_es
                    }}</span>
                    <span v-else>{{ ministry1.name_pt }}</span>
                </h1>
                <div
                    class="border-t-2 text-justify py-4"
                    :style="'border-color:' + ministry1.color"
                >
                    <div
                    class="lg:flex lg:items-start lg:space-x-2"
                    v-if="articles1.length != 0"
                    >
                    <div v-for="(article, index) in articles1" :key="index" >
                            <div
                                class="overflow-hidden shadow bg-white"
                                v-if="index === 0"
                            >
                            <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                />  </router-link>
                                <router-link v-else
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id },
                                    }"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                /></router-link>
                                <div class="p-6">
                                    <div class="space-y-2">
                                        <div>
                                            <a
                                                href="#"
                                                class="text-xs py-1 px-2 rounded text-white"
                                                :style="
                                                    'background:' +
                                                    ministry4.color
                                                "
                                            >
                                                <span
                                                    v-if="$i18n.locale == 'en'"
                                                    >{{
                                                        ministry4.name_en
                                                    }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        $i18n.locale == 'fr'
                                                    "
                                                    >{{
                                                        ministry4.name_fr
                                                    }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        $i18n.locale == 'es'
                                                    "
                                                    >{{
                                                        ministry4.name_es
                                                    }}</span
                                                >
                                                <span v-else>{{
                                                    ministry4.name_pt
                                                }}</span>
                                            </a>
                                        </div>
                                        <div>
                                            <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> {{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }}
                                            </router-link>
                                        </div>
                                        <div
                                            class="flex text-xs space-x-2 text-gray-400"
                                        >
                                            <div class="flex space-x-1">
                                                <CalendarIcon class="h-4 w-4" />
                                                <a
                                                    href="#"
                                                    class="hover:text-primary-blue"
                                                    >{{ article.date }}</a
                                                >
                                            </div>
                                            <div class="flex space-x-1">
                                                <UserIcon class="h-4 w-4" />
                                                <router-link   :to="{name:'compte',  params: { name: article.user.firstname, id : article.user.id }}"
                                                    href="#"
                                                    class="hover:text-primary-blue"
                                                    >{{
                                                        article.user.firstname
                                                    }}</router-link 
                                                >
                                            </div>
                                            <div class="flex space-x-1">
                                                <ChatIcon class="h-4 w-4" />
                                                <a
                                                    href="#"
                                                    class="hover:text-primary-blue"
                                                    >{{ article.comments }}</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="space-y-2 grow">
                        <div v-for="(article, index) in articles1" :key="index">
                            <div
                                class="overflow-hidden w-full h-32 flex space-x-2 shadow bg-white"
                                v-if="index !== 0"
                            >
                            <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }" class=" w-36"> <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                />  </router-link>
                                
                                <router-link v-else
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id },
                                    }"
                                    class=" w-36"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                /></router-link>
                                <div class="space-y-2 p-2">
                                    <div>
                                        <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> {{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }}
                                            </router-link>
                                    </div>
                                    <div
                                        class="flex text-xs space-x-2 text-gray-400"
                                    >
                                        <div class="flex space-x-1">
                                            <CalendarIcon class="h-4 w-4" />
                                            <a
                                                href="#"
                                                class="hover:text-primary-blue"
                                                >{{ article.date }}</a
                                            >
                                        </div>
                                        <div class="flex space-x-1">
                                            <ChatIcon class="h-4 w-4" />
                                            <a
                                                href="#"
                                                class="hover:text-primary-blue"
                                                >{{ article.comments }}</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="md:flex md:space-x-3">
                <div class="w-full">
                    <h1
                        class="text-white px-2 py-1 inline-block"
                        :style="'background:' + ministry2.color"
                    >
                        <span v-if="$i18n.locale == 'en'">{{
                            ministry2.name_en
                        }}</span>
                        <span v-else-if="$i18n.locale == 'fr'">{{
                            ministry2.name_fr
                        }}</span>
                        <span v-else-if="$i18n.locale == 'es'">{{
                            ministry2.name_es
                        }}</span>
                        <span v-else>{{ ministry2.name_pt }}</span>
                    </h1>
                    <div
                        class="border-t-2 w-full text-justify py-4"
                        :style="'border-color:' + ministry2.color"
                    >
                        <div class="space-y-2" v-if="articles2.length != 0">
                            <div
                                v-for="(article, index) in articles2"
                                :key="index"
                            >
                                <div
                                    class="overflow-hidden shadow bg-white"
                                    v-if="index === 0"
                                >
                                    <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                />  </router-link>
                                <router-link v-else
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id },
                                    }"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                /></router-link>
                                    <div class="p-6">
                                        <div class="space-y-2">
                                            <div>
                                                <a
                                                    href="#"
                                                    class="text-xs py-1 px-2 rounded text-white"
                                                    :style="
                                                        'background:' +
                                                        ministry2.color
                                                    "
                                                >
                                                    <span
                                                        v-if="
                                                            $i18n.locale == 'en'
                                                        "
                                                        >{{
                                                            ministry2.name_en
                                                        }}</span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            $i18n.locale == 'fr'
                                                        "
                                                        >{{
                                                            ministry2.name_fr
                                                        }}</span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            $i18n.locale == 'es'
                                                        "
                                                        >{{
                                                            ministry2.name_es
                                                        }}</span
                                                    >
                                                    <span v-else>{{
                                                        ministry2.name_pt
                                                    }}</span>
                                                </a>
                                            </div>
                                            <div>
                                                <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> {{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }}
                                            </router-link>
                                            </div>
                                            <div
                                                class="flex text-xs space-x-2 text-gray-400"
                                            >
                                                <div class="flex space-x-1">
                                                    <CalendarIcon
                                                        class="h-4 w-4"
                                                    />
                                                    <a
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{ article.date }}</a
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <UserIcon class="h-4 w-4" />
                                                    <router-link   :to="{name:'compte',  params: { name: article.user.firstname, id : article.user.id }}"
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{
                                                            article.user
                                                                .firstname
                                                        }}</router-link
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <ChatIcon class="h-4 w-4" />
                                                    <a
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{ article.comments }}</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    v-for="(article, index) in articles2"
                                    :key="index"
                                >
                                    <div
                                        class="overflow-hidden h-32 flex space-x-2 shadow bg-white w-full"
                                        v-if="index !== 0"
                                    >
                                    <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }" class=" w-36"> <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                />  </router-link>
                                
                                        <router-link v-else
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id },
                                    }"
                                    class="w-36"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                /></router-link>
                                        <div class="space-y-2 p-2">
                                            <div>
                                                <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> {{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }}
                                            </router-link>
                                            </div>
                                            <div
                                                class="flex text-xs space-x-2 text-gray-400"
                                            >
                                                <div class="flex space-x-1">
                                                    <CalendarIcon
                                                        class="h-4 w-4"
                                                    />
                                                    <a
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{ article.date }}</a
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <ChatIcon class="h-4 w-4" />
                                                    <a
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{ article.comments }}</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <h1
                        class="text-white px-2 py-1 inline-block"
                        :style="'background:' + ministry3.color"
                    >
                        <span v-if="$i18n.locale == 'en'">{{
                            ministry3.name_en
                        }}</span>
                        <span v-else-if="$i18n.locale == 'fr'">{{
                            ministry3.name_fr
                        }}</span>
                        <span v-else-if="$i18n.locale == 'es'">{{
                            ministry3.name_es
                        }}</span>
                        <span v-else>{{ ministry3.name_pt }}</span>
                    </h1>
                    <div
                        class="border-t-2 w-full text-justify py-4"
                        :style="'border-color:' + ministry3.color"
                    >
                        <div class="space-y-2" v-if="articles3.length != 0">
                            <div
                                v-for="(article, index) in articles3"
                                :key="index"
                            >
                                <div
                                    class="overflow-hidden shadow bg-white"
                                    v-if="index === 0"
                                >
                                   <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                />  </router-link>
                                <router-link v-else
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id },
                                    }"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                /></router-link>
                                    <div class="p-6">
                                        <div class="space-y-2">
                                            <div>
                                                <a
                                                    href="#"
                                                    class="text-xs py-1 px-2 rounded text-white"
                                                    :style="
                                                        'background:' +
                                                        ministry3.color
                                                    "
                                                >
                                                    <span
                                                        v-if="
                                                            $i18n.locale == 'en'
                                                        "
                                                        >{{
                                                            ministry3.name_en
                                                        }}</span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            $i18n.locale == 'fr'
                                                        "
                                                        >{{
                                                            ministry3.name_fr
                                                        }}</span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            $i18n.locale == 'es'
                                                        "
                                                        >{{
                                                            ministry3.name_es
                                                        }}</span
                                                    >
                                                    <span v-else>{{
                                                        ministry3.name_pt
                                                    }}</span>
                                                </a>
                                            </div>
                                            <div>
                                                <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> {{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }}
                                            </router-link>
                                            </div>
                                            <div
                                                class="flex text-xs space-x-2 text-gray-400"
                                            >
                                                <div class="flex space-x-1">
                                                    <CalendarIcon
                                                        class="h-4 w-4"
                                                    />
                                                    <a
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{ article.date }}</a
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <UserIcon class="h-4 w-4" />
                                                    <router-link   :to="{name:'compte',  params: { name: article.user.firstname, id : article.user.id }}"
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{
                                                            article.user
                                                                .firstname
                                                        }}</router-link 
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <ChatIcon class="h-4 w-4" />
                                                    <a
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{ article.comments }}</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    v-for="(article, index) in articles3"
                                    :key="index"
                                >
                                    <div
                                        class="overflow-hidden h-32 flex space-x-2 shadow bg-white w-full"
                                        v-if="index !== 0"
                                    >
                                    <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }" class=" w-36"> <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                />  </router-link>
                                        <router-link v-else
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id },
                                    }"
                                    class="w-36"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover h-64"
                                /></router-link>
                                        <div class="space-y-2 p-2">
                                            <div>
                                                <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> {{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }}
                                            </router-link>
                                            </div>
                                            <div
                                                class="flex text-xs space-x-2 text-gray-400"
                                            >
                                                <div class="flex space-x-1">
                                                    <CalendarIcon
                                                        class="h-4 w-4"
                                                    />
                                                    <a
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{ article.date }}</a
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <ChatIcon class="h-4 w-4" />
                                                    <a
                                                        href="#"
                                                        class="hover:text-primary-blue"
                                                        >{{ article.comments }}</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-8 flex justify-center">
                <div class="inline-block shadow p-2">
                    <img src="/img/barniere-africa.png" alt="" />
                </div>
            </div>
            <div>
                <h1
                    class="text-white px-3 py-2 mb-3 block"
                    :style="'background:' + ministry4.color"
                >
                    <span v-if="$i18n.locale == 'en'">{{
                        ministry4.name_en
                    }}</span>
                    <span v-else-if="$i18n.locale == 'fr'">{{
                        ministry4.name_fr
                    }}</span>
                    <span v-else-if="$i18n.locale == 'es'">{{
                        ministry4.name_es
                    }}</span>
                    <span v-else>{{ ministry4.name_pt }}</span>
                </h1>
                <div
                    class="lg:flex lg:items-start lg:space-x-2"
                    v-if="articles4.length != 0"
                >
                    <div v-for="(article, index) in articles4" :key="index">
                            <div
                                class="overflow-hidden shadow bg-white"
                                v-if="index === 0"
                            >
                                <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                />  </router-link>
                                <router-link v-else
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id },
                                    }"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                /></router-link>
                                <div class="p-6">
                                    <div class="space-y-2">
                                        <div>
                                            <a
                                                href="#"
                                                class="text-xs py-1 px-2 rounded text-white"
                                                :style="
                                                    'background:' +
                                                    ministry4.color
                                                "
                                            >
                                                <span
                                                    v-if="$i18n.locale == 'en'"
                                                    >{{
                                                        ministry4.name_en
                                                    }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        $i18n.locale == 'fr'
                                                    "
                                                    >{{
                                                        ministry4.name_fr
                                                    }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        $i18n.locale == 'es'
                                                    "
                                                    >{{
                                                        ministry4.name_es
                                                    }}</span
                                                >
                                                <span v-else>{{
                                                    ministry4.name_pt
                                                }}</span>
                                            </a>
                                        </div>
                                        <div>
                                            <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"> {{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }}
                                            </router-link>
                                        </div>
                                        <div
                                            class="flex text-xs space-x-2 text-gray-400"
                                        >
                                            <div class="flex space-x-1">
                                                <CalendarIcon class="h-4 w-4" />
                                                <a
                                                    href="#"
                                                    class="hover:text-primary-blue"
                                                    >{{ article.date }}</a
                                                >
                                            </div>
                                            <div class="flex space-x-1">
                                                <UserIcon class="h-4 w-4" />
                                                <router-link   :to="{name:'compte',  params: { name: article.user.firstname, id : article.user.id }}"
                                                    href="#"
                                                    class="hover:text-primary-blue"
                                                    >{{
                                                        article.user.firstname
                                                    }}</router-link 
                                                >
                                            </div>
                                            <div class="flex space-x-1">
                                                <ChatIcon class="h-4 w-4" />
                                                <a
                                                    href="#"
                                                    class="hover:text-primary-blue"
                                                    >{{ article.comments }}</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="space-y-2 grow">
                        <div v-for="(article, index) in articles4" :key="index">
                            <div
                                class="overflow-hidden h-32 flex space-x-2 shadow bg-white"
                                v-if="index !== 0"
                            >
                            <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                    
                                }" class=" w-36"> <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                />  </router-link>
                                
                                <router-link v-else
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id },
                                    }"
                                    class=" w-36"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover w-full h-64"
                                /></router-link>
                                <div class="space-y-2 p-2">
                                    <div>
                                        <router-link
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title.length <= 20 ? article.title : article.title.substring(0, 19) + "..." }}
                                            </router-link>
                                    </div>
                                    <div
                                        class="flex text-xs space-x-2 text-gray-400"
                                    >
                                        <div class="flex space-x-1">
                                            <CalendarIcon class="h-4 w-4" />
                                            <a
                                                href="#"
                                                class="hover:text-primary-blue"
                                                >{{ article.date }}</a
                                            >
                                        </div>
                                        <div class="flex space-x-1">
                                            <ChatIcon class="h-4 w-4" />
                                            <a
                                                href="#"
                                                class="hover:text-primary-blue"
                                                >{{ article.comments }}</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:w-[30%]">
            <FilterArticle />
            <div class="w-full" v-if="!token">
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    {{ $t("register") }}
                </h1>
                <div
                    class="border-t-2 w-full border-primary-blue text-justify py-4"
                >
                    <router-link :to="{ name: 'pack' }">
                        <img
                            src="/img/barre-laterale-africa.jpg"
                            alt=""
                            class="object-cover mx-auto"
                        />
                    </router-link>
                </div>
            </div>
            <div class="w-full">
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    {{ $t("recent-posts") }}
                </h1>
                <div
                    class="border-t-2 w-full border-primary-blue text-justify py-4"
                >
                    <p v-if="jobOffersHome.length != 0" class="p-4">
                        <div 
                        v-for="jobOffer in jobOffersHome"
                        :key="jobOffer.id"
                        >
                        <router-link  v-if="!token"
                                :to="{
                                    name: 'login', params: { redirect: 'not-login' },
                                }"
                            class="flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"
                        >
                            <div class="flex items-center space-x-4 ">
                                <div class="hidden lg:block">
                                    <img v-if="jobOffer.company_logo" :src="jobOffer.company_logo" alt="" class="w-10 h-10 object-cover">
                                    <OfficeBuildingIcon v-else class="w-10 h-10 text-gray-500" />
                                </div>
                                <div>
                                    <h1 class="capitalize text-sm">{{ jobOffer.title }}</h1>
                                    <h2 class="font-bold capitalize text-gray-500 text-sm">{{ jobOffer.company_name }}</h2>
                                </div>
                            </div>
                            <div class="">
                                <h2 class="font-bold capitalize text-primary-blue text-sm">
                                    <span v-if="$i18n.locale == 'en'">{{
                                        jobOffer.offer_type.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        jobOffer.offer_type.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        jobOffer.offer_type.name_es
                                    }}</span>
                                    <span v-else>{{ jobOffer.offer_type.name_pt }}</span>
                                </h2>
                            </div>
                        </router-link>
                        <router-link 
                        v-else
                        :to="{
                            name: 'show.job',
                            params: { id: jobOffer.id },
                            }"
                            class="flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"
                        >
                            <div class="flex items-center space-x-4 ">
                                <div class="hidden lg:block">
                                    <img v-if="jobOffer.company_logo" :src="jobOffer.company_logo" alt="" class="w-10 h-10 object-cover">
                                    <OfficeBuildingIcon v-else class="w-10 h-10 text-gray-500" />
                                </div>
                                <div>
                                    <h1 class="capitalize text-sm">{{ jobOffer.title }}</h1>
                                    <h2 class="font-bold capitalize text-gray-500 text-sm">{{ jobOffer.company_name }}</h2>
                                </div>
                            </div>
                            <div class="">
                                <h2 class="font-bold capitalize text-primary-blue text-sm">
                                    <span v-if="$i18n.locale == 'en'">{{
                                        jobOffer.offer_type.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        jobOffer.offer_type.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        jobOffer.offer_type.name_es
                                    }}</span>
                                    <span v-else>{{ jobOffer.offer_type.name_pt }}</span>
                                </h2>
                            </div>
                        </router-link>
                    </div>
                    </p>
                </div>
            </div>
            <div class="w-full">
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    {{ $t("video") }}
                </h1>
                <div
                    class="border-t-2 w-full border-primary-blue text-justify py-4"
                >
                    <p class="p-4">
                        <iframe class="w-full h-60" src="https://www.youtube.com/embed/TBikbn5XJhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
            </div>
            <div class="w-full">
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    {{ $t("presentation") }}
                </h1>
                <div
                    class="border-t-2 w-full border-primary-blue text-justify py-4"
                >
                    <p class="p-4">
                        <iframe class="w-full h-60" src="https://www.youtube.com/embed/3gb2do8F6Q0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import Error from "../../components/Error.vue";
import useAuth from "../../services/authServices.js";
import FilterArticle from "../../components/FilterArticle.vue";
import Caroussel from "../../components/Caroussel.vue";
import { CalendarIcon, UserIcon, MailIcon, ChatIcon, OfficeBuildingIcon, LockClosedIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted } from "vue";
export default {
    components: {
        MailIcon,
        Error,
        LockClosedIcon,
        Caroussel,
        CalendarIcon,
        UserIcon,
        ChatIcon,
        FilterArticle,
        OfficeBuildingIcon,
    },
    setup(props) {
        const toogleLogMaint = ref(false);
        const token = localStorage.token;
        const ministries = ref([]);
        // const errors = ref("");
        const loading = ref(0);
        const loadingL = ref(0);
        const articles1 = ref([]);
        const articles2 = ref([]);
        const articles3 = ref([]);
        const articles4 = ref([]);
        const ministry1 = ref("");
        const ministry2 = ref("");
        const ministry3 = ref("");
        const ministry4 = ref("");
        const jobOffersHome = ref([]);
        const user = reactive({
            email: "",
            password: "",
        });
        const { loginUser, errors } = useAuth();

        onMounted(async () => {
            loading.value = 1;
            let response = await axios.get("/api/ministries-home");
            ministries.value = response.data.data;
            ministry1.value = ministries.value[0];
            ministry2.value = ministries.value[1];
            ministry3.value = ministries.value[2];
            ministry4.value = ministries.value[3];

            response = await axios.get(
                "/api/posts-home/" +
                    localStorage.lang +
                    "/" +
                    ministry1.value.id
            );
            articles1.value = response.data.data;

            response = await axios.get(
                "/api/posts-home/" +
                    localStorage.lang +
                    "/" +
                    ministry2.value.id
            );
            articles2.value = response.data.data;

            response = await axios.get(
                "/api/posts-home/" +
                    localStorage.lang +
                    "/" +
                    ministry3.value.id
            );
            articles3.value = response.data.data;

            response = await axios.get(
                "/api/posts-home/" +
                    localStorage.lang +
                    "/" +
                    ministry4.value.id
            );
            articles4.value = response.data.data;

            response = await axios.get('/api/jobOffers-home/');
            jobOffersHome.value = response.data.data;

            loading.value = 2;
        });

        const login = async () => {
            loadingL.value = 1;
            await loginUser({ ...user });
            if (errors.value == "") {
                location.href = window.location.origin;
            }
            loadingL.value = 0;
        };

        return {
            loadingL,
            user,
            login,
            toogleLogMaint,
            jobOffersHome,
            loading,
            errors,
            articles4,
            articles2,
            articles3,
            articles1,
            ministry1,
            ministry2,
            ministry3,
            ministry4,
            token
        };
    },
};
</script>
