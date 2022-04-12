<template>
    <Header />
   <section class="lg:py-10 p-4 lg:px-20">
        <div class="h-96 relative">
            <div class="h-1/2 bg-gray-50 z-0">

            </div>
            <div class="h-1/2 bg-white z-10 flex lg:justify-end items-center justify-center lg:space-x-3 relative">
                <div class="lg:w-60 lg:h-60 overflow-hidden absolute h-40 w-40 text-center lg:left-4 mb-40 lg:mt-0 -mt-28 bg-white z-10 rounded-full">
                    <img :src="user.avatar" class="w-full h-full bg-cover object-cover" alt="" v-if="user.avatar">
                    <UserCircleIcon v-else class="w-full h-full text-gray-500"/>
                </div>
                <div class="lg:w-[80%] px-8 py-4 lg:mt-0 mt-20">
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
                    <div v-else class="flex lg:justify-between items-center lg:flex-row flex-col lg:mt-0 mt-20">
                        <div>
                            <h1 class="lg:text-3xl text-2xl lg:text-left text-center font-semibold capitalize text-gray-700"> <span>{{ user.firstname }}</span> <span v-if="user.type ==  'particular'">{{ user.lastname }}</span> </h1>
                            <div class="flex items-center space-x-2 text-sm mt-2">
                                <h2 class="text-primary-blue">{{ user.email }}</h2> 
                                <h2 class="text-gray-400">° {{ detail.phone_number }}</h2>
                            </div>
                        </div>
                        <div class="space-x-2 flex items-center lg:py-0 py-1" v-if="user.id == loginUser.id">
                            <router-link
                    :to="{
                        name: 'add.post',
                        params: { type: 'article' },
                    }" class="py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue" v-if="(user.type != 'business1')">
                                <PlusCircleIcon class="w-5 h-5"/>
                                <span class="lg:block hidden">{{ $t('add') }} {{ $t('articles') }}</span>                        
                            </router-link>
                            <button @click="changeTab('edit')" class="py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue">
                                <PencilIcon class="w-5 h-5"/>
                                <span class="lg:block hidden">{{ $t('edit') }} {{ $t('profile') }}</span> 
                            </button>
                            <a href="#">
                                <CogIcon class="h-8 w-8 text-gray-600  hover:text-primary-blue" />
                            </a>
                        </div>
                    </div>
                    <div class="text-sm font-light text-gray-500 overflow-y-auto lg:h-24 h-20 mt-2">
                        {{ detail.presentation }}
                    </div>
                </div>
            </div>
        </div>
        <div class="px-5 py-3 space-x-2 bg-menu flex items-center lg:mt-0 mt-20">
            <button @click="changeTab('profil')" :class="[ open.profil ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <IdentificationIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('profile') }}</span>
            </button>
            <button v-if="(user.type != 'business1')" @click="changeTab('article')" :class="[ open.article ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <NewspaperIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('articles') }}</span>                
            </button>
            <button v-if="(user.type != 'business1')" @click="changeTab('propau')" :class="[ open.propau ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <BookOpenIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('propau') }}</span>               
            </button>
            <button @click="changeTab('comment')" :class="[ open.comment ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <ChatIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('comments') }}</span>               
            </button>
            <button v-if="(user.type != 'particular' && user.type != 'business1') && (user.id == loginUser.id)" @click="changeTab('job')" :class="[ open.job ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <ChatAltIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('my-jobs') }}</span>               
            </button>
            <button v-if="(user.type == 'particular' || user.type == 'admin') && (user.id == loginUser.id)" @click="changeTab('ads')" :class="[ open.ads ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md': 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md']">
                <SpeakerphoneIcon class="w-5 h-5"/>
                <span class="lg:block hidden">{{ $t('my-ads') }}</span>               
            </button>
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
        <div class=" py-8 lg:px-16" v-if="(open.profil) && (loading == 0)">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div v-if="user.type == 'particular'" class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('firstname') }}</label>
                                <p class="py-1">{{ user.firstname }}</p>    
                            </div>
                            <div class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('lastname') }}</label>
                                <p class="py-1">{{ user.lastname }}</p>
                            </div>
                        </div>
                        <div
                            v-else-if="
                                user.type == 'business1' || user.type == 'business2'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('social-reason') }}</label>
                            <p class="py-1">{{ user.firstname }}</p>
                        </div>
                        <div v-else class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('denomination') }} </label>
                            <p class="py-1">{{ user.firstname }}</p>
                        </div>
                        <div v-if="user.type == 'particular'" class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('status') }}</label>
                                <p class="py-1">
                                    <span v-if="detail.status == 1">{{ $t('actif') }}</span>
                                    <span v-else>{{ $t('no-actif') }}</span>
                                </p>
                        </div>
                        <div  
                            v-else-if="
                                user.type == 'business1' || user.type == 'business2'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('social-object') }}</label>
                            <p class="py-1">{{ detail.social_object }}</p>
                        </div>
                        <div v-else-if="user.type == 'ip'" class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('goal-attribution') }}</label>
                            <p class="py-1">{{ detail.goal_attribution }}</p>
                        </div>
                        <div class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('adresse') + ' ' + $t('email') }}</label>
                            <p class="py-1">{{ user.email }}</p>
                        </div>
                        <div  
                            v-if="user.type == 'particular'"
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('diplome-certification') }}</label>
                            <p class="py-1">{{ detail.goal_attribution }}</p>
                        </div>
                        <div
                            v-if="
                                user.type == 'business1' || user.type == 'business2' || user.type == 'ip'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('name-responsable') }}</label>
                            <p class="py-1">{{ detail.name_responsible }}</p>
                        </div>
                        <div
                            v-if="
                                user.type == 'business1' || user.type == 'business2' || user.type == 'ip'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('adresse') }}</label>
                            <p class="py-1">{{ detail.adress }}</p>
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div v-if="user.type == 'particular'"  class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('sex') }}</label>
                                 <p class="py-1">  <span v-if="detail.sex == 1">{{ $t('male') }}</span>
                                    <span v-else>{{ $t('female') }}</span> </p> 
                            </div>
                            <div class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('phone-number') }}</label>
                                <p class="py-1">{{ detail.phone_number }}</p>
                            </div>
                            <div v-if="user.type != 'particular'" class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('phone-number') }} 2</label>
                                <p class="py-1">{{ detail.phone_number_2 }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div class="relative" v-if="user.type == 'particular' || user.type == 'ip'">
                                <label class="text-gray-700 py-1 text-md font-semibold">
                                    <span>{{ $t('native-country') }}</span> 
                                </label>
                                <ul class="py-1">
                                    <li v-for="country in countries" :key="country.id">
                                            <span v-if="country.id === detail.native_country">
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
                                            </span>
                                    </li>
                                </ul>

                            </div>
                            <div  :class="[user.type == 'particular' || user.type == 'ip' ? '' : 'col-span-2']">
                                <label class="text-gray-700 py-1 text-md font-semibold">
                                    <span v-if="user.type == 'particular' || user.type == 'ip'">{{ $t('residence-country') }}</span>
                                    <span v-else>{{ $t('social-country') }}</span>
                                </label>
                                <ul class="py-1">
                                    <li v-for="country in countries" :key="country.id">
                                            <span v-if="country.id === detail.residence_country">
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
                                            </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div v-if="user.type != 'particular'" class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">
                                    <span v-if="user.type == 'ip'">{{ $t('perimetre') }}</span>
                                    <span v-else>{{ $t('type-company') }}</span> 
                                </label>
                                <ul class="py-1">
                                    <li v-for="businessType in businessTypes" :key="businessType.id">
                                            <span v-if="businessType.id === detail.business_type_id">
                                                <span v-if="$i18n.locale == 'en'">{{
                                                    businessType.name_en
                                                }}</span>
                                                <span v-else-if="$i18n.locale == 'fr'">{{
                                                    businessType.name_fr
                                                }}</span>
                                                <span v-else-if="$i18n.locale == 'es'">{{
                                                    businessType.name_es
                                                }}</span>
                                                <span v-else>{{ businessType.name_pt }}</span>
                                            </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">
                                    <span v-if="user.type == 'ip'">{{ $t('size-institution') }}</span>
                                    <span v-else>{{ $t('size-company') }}</span>
                                </label>
                                <ul class="py-1">
                                    <li v-for="BusinessSize in businessSizes" :key="BusinessSize.id">
                                            <span v-if="BusinessSize.id === detail.business_size_id">
                                                <span v-if="$i18n.locale == 'en'">{{
                                                    BusinessSize.name_en
                                                }}</span>
                                                <span v-else-if="$i18n.locale == 'fr'">{{
                                                    BusinessSize.name_fr
                                                }}</span>
                                                <span v-else-if="$i18n.locale == 'es'">{{
                                                    BusinessSize.name_es
                                                }}</span>
                                                <span v-else>{{ BusinessSize.name_pt }}</span>
                                            </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            v-if="user.type == 'particular'"
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('speak-language') }}</label>
                            <ul class="py-1">
                                <li v-for="language in languages" :key="language.id">
                                    <span v-for="lang in detail.languages" :key="lang.id">
                                        <span v-if="lang.id === language.id">
                                            <span v-if="$i18n.locale == 'en'">{{
                                                language.name_en
                                            }}</span>
                                            <span v-else-if="$i18n.locale == 'fr'">{{
                                                language.name_fr
                                            }}</span>
                                            <span v-else-if="$i18n.locale == 'es'">{{
                                                language.name_es
                                            }}</span>
                                            <span v-else>{{ language.name_pt }}</span>
                                        </span>
                                    </span>
                                </li>
                            </ul> 
                        </div>
                        <div
                            v-if="
                                user.type == 'business1' || user.type == 'business2'
                            "
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">{{ $t('legal-status') }}</label>
                            <ul class="py-1">
                                <li v-for="legalStatus in legalStatuses" :key="legalStatus.id">
                                        <span v-if="legalStatus.id === detail.legal_status_id">
                                            <span v-if="$i18n.locale == 'en'">{{
                                                legalStatus.name_en
                                            }}</span>
                                            <span v-else-if="$i18n.locale == 'fr'">{{
                                                legalStatus.name_fr
                                            }}</span>
                                            <span v-else-if="$i18n.locale == 'es'">{{
                                                legalStatus.name_es
                                            }}</span>
                                            <span v-else>{{ legalStatus.name_pt }}</span>
                                        </span>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">
                                <span v-if="user.type == 'particular'">{{ $t('birth-date') }}</span>
                                <span v-else>{{ $t('create-date') }}</span>
                            </label>
                            <p class="py-1">{{ detail.navite_date }}</p>
                        </div>
                        <div  class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                            <div class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">
                                    {{ $t('website') }}
                                </label>
                                <p class="py-1">{{ detail.website }}</p>
                            </div>
                            <div class="relative">
                                <label class="text-gray-700 py-1 text-md font-semibold">
                                    Youtube
                                </label>
                                <p class="py-1">{{ detail.youtube }}</p>
                            </div>
                        </div>
                        <div
                        v-if="user.type != 'ip'"
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">
                                {{ $t('activity-area') }}
                            </label>
                            <ul class="py-1">
                                <li v-for="activityArea in activityAreas" :key="activityArea.id">
                                    <span v-for="activity_area in detail.activity_areas" :key="activity_area.id">
                                        <span v-if="activity_area.id === activityArea.id">
                                            <span v-if="$i18n.locale == 'en'">{{
                                                activityArea.name_en
                                            }}</span>
                                            <span v-else-if="$i18n.locale == 'fr'">{{
                                                activityArea.name_fr
                                            }}</span>
                                            <span v-else-if="$i18n.locale == 'es'">{{
                                                activityArea.name_es
                                            }}</span>
                                            <span v-else>{{ activityArea.name_pt }}</span>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div  
                            v-if="user.type == 'particular'"
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">
                                {{ $t('o-activity') }}
                            </label>
                            <p class="py-1">{{ detail.other_activity }}</p>
                        </div>
                        <div  
                            v-if="user.type == 'particular'"
                            class="relative col-span-2">
                            <label class="text-gray-700 py-1 text-md font-semibold">
                                {{ $t('rsearch-p') }}
                            </label>
                            <p class="py-1">{{ detail.search_partner }}</p>
                        </div>
            </div>
        </div>
         <div v-else-if="(open.article) && (loading == 0)">
            <div
                class="grid lg:grid-cols-2 gap-8 px-6 py-8"
                v-if="articles.length != 0"
            >
            
            <div v-for="post in articles"
                    :key="post.id" class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    
                <div class="w-1/3 bg-cover overflow-hidden">
                   <router-link :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"><img :src="post.image" class="w-full h-full bg-cover object-cover" :alt="post.title"></router-link> 
                </div>

                <div class="w-2/3 p-4 md:p-4">
                    <router-link :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"  class="text-2xl font-bold text-gray-800 dark:text-white">{{ post.title }}</router-link>

                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ post.content.substring(0, 19) + "..." }}</p>

                    <div class="flex mt-2 item-center space-x-1">
                        <ChatIcon class="h-4 w-4 text-gray-500" />
                        <a href="#" class="hover:text-primary-blue text-xs"
                            >{{ post.comments }}</a
                        >

                    </div>

                    <div class="flex justify-between mt-3 item-center">
                        <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }" class="text-sm font-bold text-primary-blue hover:underline">{{ $t('read-more') }}</router-link>
                        <router-link
                                :to="{
                                    name: 'edit.post',
                                    params: { id: post.id, type: post.type},
                                }">
                                        <PencilAltIcon
                                            class="h-5 w-5 hover:text-gray-400 cursor-pointer text-primary-blue"
                                        />
                                        </router-link>
                    </div>
                </div>
            </div>
            </div>
            <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">{{ $t('no-content') }} </span>
            </div>
        </div>
         <div class=" py-8 lg:px-16" v-else-if="(open.propau) && (loading == 0)">
            <div
                class="grid lg:grid-cols-2 gap-8 px-10 py-8"
                v-if="propau.length != 0"
            >
            <div v-for="post in propau"
                    :key="post.id" class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    
                <div class="w-1/3 bg-cover overflow-hidden">
                   <router-link :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }">
                                <BookOpenIcon class="w-full h-full text-gray-400"/>
                                </router-link> 
                </div>

                <div class="w-2/3 p-4 md:p-4">
                    <router-link :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"  class="text-2xl font-bold text-gray-800 dark:text-white">{{ post.title }}</router-link>

                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ post.content.substring(0, 19) + "..." }}</p>

                    <div class="flex mt-2 item-center space-x-1">
                        <ChatIcon class="h-4 w-4 text-gray-500" />
                        <a href="#" class="hover:text-primary-blue text-xs"
                            >0</a
                        >

                    </div>

                    <div class="flex justify-between mt-3 item-center">
                        <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }" class="text-sm font-bold text-primary-blue hover:underline">Read More</router-link>
                        <router-link
                                :to="{
                                    name: 'edit.post',
                                    params: { id: post.id, type: post.type},
                                }">
                                        <PencilAltIcon
                                            class="h-5 w-5 hover:text-gray-400 cursor-pointer text-primary-blue"
                                        />
                                        </router-link>
                    </div>
                </div>
            </div>
            </div>
            <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">{{ $t('no-content') }} </span>
            </div>
        </div>
         <div class=" py-8 lg:px-16" v-else-if="(open.comment) && (loading == 0)">
                <div class="overflow-x-auto">
                    <table
                        class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                    >
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    {{ $t('articles') }} & {{ $t('propau') }}
                                </th>
                                <th
                                    scope="col"
                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    {{ $t('comments') }}
                                </th>
                                <th scope="col" class="p-4" v-if="user.id == loginUser.id">
                                    <span class="sr-only"
                                        >Edit</span
                                    >
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            v-if="comments.length != 0"
                        >
                            <tr
                                v-for="comment in comments"
                                :key="comment.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: comment.post.id },
                                    }"
                                    class="hover:underline"
                                    >{{ comment.post.title }}</router-link> 
                                </td>
                                <td
                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <span v-if="modifyComment.id == '' || modifyComment.id != comment.id">{{ comment.content }}</span>
                                    <form v-if="modifyComment.id != '' && modifyComment.id == comment.id" @submit.prevent="saveComment()">
                                        <textarea required v-model="modifyComment.content" type="text" id="pt" class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        </textarea>
                                        <div class="flex justify-end mt-6">
                                            <button
                                                type="submit"
                                                class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none"
                                            >
                                                {{ $t('save') }}
                                            </button>
                                        </div>
                                    </form>
                                </td>
                                <td
                                    v-if="user.id == loginUser.id"
                                    class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <div class="flex">
                                        <button
                                            @click="selectComment(comment)"
                                            class="text-primary-blue dark:text-blue-500 hover:underline"
                                            >
                                            <PencilAltIcon
                                                    class="h-5 w-5 hover:text-blue-700 cursor-pointer text-blue-400"
                                                />
                                            </button
                                        >
                                        <button
                                            @click="deleteComment(comment.id)"
                                            class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                            >
                                                <TrashIcon
                                                    class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                                />
                                            </button
                                        >
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            v-else
                        >
                            <tr
                                
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    colspan="5"
                                    class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                                >
                                    <div
                                        class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
                                    >
                                        <EmojiSadIcon class="h-16 w-16" />
                                        <span class="text-2xl mt-2">{{ $t('no-content') }} </span>
                                    </div>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
         <div class=" py-8 lg:px-16" v-else-if="(open.job) && (loading == 0)">
                <div class="flex justify-end px-6 py-2">
                <router-link
                    :to="{
                        name: 'add.job',
                    }"
                    class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">{{ $t('add') }} Job</p>
                </router-link>
            </div>
                <div class="overflow-x-auto">
                    <table
                        class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                    >
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    {{ $t('my-jobs') }}
                                </th>
                                <th
                                    scope="col"
                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    {{ $t('status') }}
                                </th>
                                <th v-if="user.id == loginUser.id" scope="col" class="p-4">
                                    <span class="sr-only"
                                        >Edit</span
                                    >
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            v-if="jobOffers.length != 0"
                        >
                            <tr
                                v-for="jobOffer in jobOffers"
                                :key="jobOffer.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <router-link 
                                        :to="{
                                            name: 'show.job',
                                            params: { id: jobOffer.id },
                                        }"
                                    class="hover:underline"
                                    >{{ jobOffer.title }}</router-link> 
                                </td>
                                <td
                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <span v-if="jobOffer.status == 3" class="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">Pourvu</span>
                                    <span v-else class="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 rounded-full">En Cours</span>
                                </td>
                                <td
                                    v-if="user.id == loginUser.id"
                                    class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <div class="flex">
                                        <router-link
                                            :to="{
                                                name: 'edit.job',
                                                params: { id: jobOffer.id},
                                            }"
                                            class="text-primary-blue dark:text-blue-500 hover:underline"
                                            >
                                            <PencilAltIcon
                                                    class="h-5 w-5 hover:text-blue-700 cursor-pointer text-blue-400"
                                                />
                                            </router-link
                                        >
                                        <button
                                            @click="deleteJobOffer(jobOffer.id)"
                                            class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                            >
                                                <TrashIcon
                                                    class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                                />
                                            </button
                                        >
                                        <button
                                            @click="mark(jobOffer.id)"
                                            v-if="jobOffer.status != 3"
                                            class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                            >
                                                <CheckCircleIcon
                                                    class="h-5 w-5 hover:text-purple-700 cursor-pointer text-purple-400"
                                                />
                                            </button
                                        >
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            v-else
                        >
                            <tr
                                
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    colspan="3"
                                    class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                                >
                                    <div
                                        class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
                                    >
                                        <EmojiSadIcon class="h-16 w-16" />
                                        <span class="text-2xl mt-2">{{ $t('no-content') }} </span>
                                    </div>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
         <div class=" py-8 lg:px-16" v-else-if="(open.ads) && (loading == 0)">
             <div class="flex justify-end px-6 py-2">
                <router-link
                    :to="{
                        name: 'add.ads',
                    }"
                    class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">{{ $t('add') }} {{ $t('ads') }}</p>
                </router-link>
            </div>
                <div class="overflow-x-auto">
                    <table
                        class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                    >
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                >
                                    {{ $t('my-ads') }}
                                </th>
                                <th v-if="user.id == loginUser.id" scope="col" class="p-4">
                                    <span class="sr-only"
                                        >Edit</span
                                    >
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            v-if="announcements.length != 0"
                        >
                            <tr
                                v-for="announcement in announcements"
                                :key="announcement.id"
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <router-link 
                                    :to="{
                                        name: 'show.ads',
                                        params: { id: announcement.id },
                                    }"
                                    class="hover:underline"
                                    >{{ announcement.title }}</router-link> 
                                </td>
                                <td
                                    v-if="user.id == loginUser.id"
                                    class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <div class="flex">
                                        <router-link
                                            :to="{
                                                name: 'edit.ads',
                                                params: { id: announcement.id},
                                            }"
                                            class="text-primary-blue dark:text-blue-500 hover:underline"
                                            >
                                            <PencilAltIcon
                                                    class="h-5 w-5 hover:text-blue-700 cursor-pointer text-blue-400"
                                                />
                                            </router-link
                                        >
                                        <button
                                            @click="deleteAnnouncement(announcement.id)"
                                            class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                            >
                                                <TrashIcon
                                                    class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                                />
                                            </button
                                        >
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            v-else
                        >
                            <tr
                                
                                class="hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <td
                                    colspan="5"
                                    class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                                >
                                    <div
                            class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
                        >
                            <EmojiSadIcon class="h-16 w-16" />
                            <span class="text-2xl mt-2">{{ $t('no-content') }} </span>
                        </div>
                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        <div class=" py-8 lg:px-16" v-else-if="(open.edit) && (loading == 0)">
                <h1 class="text-center text-2xl text-gray-500 font-bold">{{ $t('edit') }} {{ $t('your') }} {{ $t('profile') }}</h1>
                <EditProfile :user="user" :detail="detail" :legalStatuses="legalStatuses" :languages="languages" :countries="countries" :activityAreas="activityAreas" :businessSizes="businessSizes" :businessTypes="businessTypes"/>
        </div>

    </section>
    <Footer/>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { reactive, ref, onMounted} from "vue";
import router from "../../router";
import usePosts from "../../services/postServices.js";
import EditProfile from "../../components/EditProfile.vue";
import useUsers from "../../services/userServices.js";
import useComments from "../../services/commentServices.js";
import useAnnouncements from "../../services/announcementServices.js";
import useLanguages from "../../services/languageServices.js";
import useBusinessTypes from "../../services/businessTypeServices.js";
import useBusinessSizes from "../../services/businessSizeServices.js";
import useActivityAreas from "../../services/activityAreaServices.js";
import useJobOffers from "../../services/jobOfferServices.js";
import useLegalStatuses from "../../services/legalStatusServices.js";
import useCountries from "../../services/countryServices.js";
import { CogIcon, TrashIcon, EmojiSadIcon, PlusCircleIcon, SpeakerphoneIcon, CheckCircleIcon, PencilIcon, PencilAltIcon, NewspaperIcon, ChatIcon, ChatAltIcon, BookOpenIcon, IdentificationIcon, UserCircleIcon } from "@heroicons/vue/solid";
export default {
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
    components:{
        EmojiSadIcon,
        Header,
        Footer,
        EditProfile,
        PencilAltIcon,
        TrashIcon,
        BookOpenIcon,
        ChatAltIcon,
        ChatIcon,
        NewspaperIcon,
        PencilIcon,
        IdentificationIcon,
        SpeakerphoneIcon,
        CheckCircleIcon,
        CogIcon,
        PlusCircleIcon,
        UserCircleIcon
    },
    created(){
        if (!localStorage.token) {
                router.push({ name: "login", params: { redirect: 'not-login' }, });
        }
    },
    setup(props) {
        const loginUser = JSON.parse(localStorage.user);
        const { articles, getPostsUser, propau } = usePosts();
        const { user, getUser } = useUsers();
        const { comments, getCommentsUser, destroyComment, updateComment} = useComments();
        const { jobOffers, getJobOffersUser, destroyJobOffer, markFilled} = useJobOffers();
        const { announcements, getAnnouncementsUser, destroyAnnouncement} = useAnnouncements();
        const { languages, getLanguages } = useLanguages();
        const { businessTypes, getBusinessTypes } = useBusinessTypes();
        const { businessSizes, getBusinessSizes } = useBusinessSizes();
        const { activityAreas, getActivityAreas } = useActivityAreas();
        const { legalStatuses, getLegalStatuses } = useLegalStatuses();
        const { countries, getCountries } = useCountries();
        const detail = ref([]);
        const loading = ref(0);
        onMounted(                
            async () => {
                try{
                    loading.value = 1;
                    await getUser(props.id);
                    let response = await axios.get('/api/details/' + props.id, {
                        headers:{
                            'Authorization': `Bearer ${localStorage.token}`
                        }
                    });
                    detail.value = response.data.data;
                    loading.value = 0;
                    await getPostsUser(props.id);
                    await getCommentsUser(props.id);
                    await getJobOffersUser(props.id);
                    await getLanguages();
                    await getBusinessTypes();
                    await getBusinessSizes();
                    await getActivityAreas();
                    await getLegalStatuses();
                    await getCountries();
                    await getAnnouncementsUser(props.id);
                }catch(e){
                    if(e.response.status == 401){
                        location.href = 'login/not-login';
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("user");
                    }
                }
            }
            
        );      

        const deleteComment = async (id) => {
            if(confirm("I you Sure ?")){
                await destroyComment(id)
                await getCommentsUser(props.id);
            }
        };

        const deleteAnnouncement = async (id) => {
            if(confirm("I you Sure ?")){
                await destroyAnnouncement(id)
                await getAnnouncementsUser(props.id);
            }
        };

        const deleteJobOffer = async (id) => {
            if(confirm("I you Sure ?")){
                await destroyJobOffer(id)
                await getJobOffersUser(props.id);
            }
        };

        const mark = async (id) => {
            if(confirm("I you Sure ?")){
                await markFilled(id)
                await getJobOffersUser(props.id);
            }
        };

        const modifyComment = reactive({
            id: '',
            user_id: '',
            post_id: '',
            content: '',
        });
        
        const selectComment = (comment) => {
            modifyComment.id = comment.id;
            modifyComment.content = comment.content;
            modifyComment.user_id = comment.user.id;
            modifyComment.post_id = comment.post.id;
        }

        const saveComment = async () => {
            await updateComment(modifyComment);
            modifyComment.id = '';
            modifyComment.content = '';
            modifyComment.user_id = '';
            modifyComment.post_id = '';
            await getCommentsUser(props.id);
        }

        const open = reactive({
            profil: true,
            article: false,
            propau: false, 
            comment: false,
            job: false,
            ads: false,
            edit: false,
        });

        const changeTab = (type) => {
            switch (type){
                case 'profil':
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = true;
                break;
                case 'article':
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.profil = false;
                    open.article = true;
                break;
                case 'propau':
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.article = false;
                    open.profil = false;
                    open.propau = true;
                break;
                case 'comment':
                    open.ads = false;
                    open.job = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.comment = true;
                break;
                case 'job':
                    open.ads = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.job = true;
                break;
                case 'ads':
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.ads = true;
                break;
                case 'edit':
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.ads = false;
                    open.edit = true;
                break;
            }
        }

        return{
            mark,
            detail,
            open,
            deleteAnnouncement,
            changeTab,
            deleteComment,
            deleteJobOffer,
            announcements,
            jobOffers,
            user,
            loginUser,
            propau,
            articles,
            loading,
            comments,
            modifyComment,
            languages,
            businessTypes,
            businessSizes,
            activityAreas,
            legalStatuses,
            countries,
            selectComment,
            saveComment,
        }
    },
}
</script>
