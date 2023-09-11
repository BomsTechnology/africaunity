<template>
<div class="bg-white  xl:w-[90%]  w-full mx-auto min-h-screen">
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
                    class="border-t-2 text-justify py-4 w-full"
                    :style="'border-color:' + ministry1.color"
                >
                    <div
                    class="lg:flex lg:items-start lg:space-x-4 w-full"
                    v-if="articles1.length != 0"
                    >
                    <template v-for="(article, index) in articles1" :key="index" >
                            <div
                                class="overflow-hidden shadow bg-white lg:w-1/2 w-full"
                                v-if="index === 0"
                            >   <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id, slug: article.slug },
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
                                                    ministry1.color
                                                "
                                            >
                                                <span
                                                    v-if="$i18n.locale == 'en'"
                                                    >{{
                                                        ministry1.name_en
                                                    }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        $i18n.locale == 'fr'
                                                    "
                                                    >{{
                                                        ministry1.name_fr
                                                    }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        $i18n.locale == 'es'
                                                    "
                                                    >{{
                                                        ministry1.name_es
                                                    }}</span
                                                >
                                                <span v-else>{{
                                                    ministry1.name_pt
                                                }}</span>
                                            </a>
                                        </div>
                                        <div>
                                                 <router-link 
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id, slug: article.slug },
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
                                                    > {{
                                        new Date(article.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a
                                                >
                                            </div>
                                            <div class="flex space-x-1">
                                                <UserIcon class="h-4 w-4" />
                                                <router-link   :to="{name:'compte',  params: { slug: article.user.slug, id : article.user.id }}"
                                                    class="hover:text-primary-blue"
                                                    >{{
                                                        article.user.firstname
                                                    }}</router-link 
                                                >
                                            </div>
                                            <div class="flex space-x-1">
                                                <ChatBubbleOvalLeftEllipsisIcon class="h-4 w-4" />
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
                    </template>
                    <div class="space-y-2 w-full lg:w-1/2">
                        <div v-for="(article, index) in articles1" :key="index">
                            <div
                                class="overflow-hidden w-full h-32 flex space-x-2 shadow bg-white"
                                v-if="index !== 0"
                            >
                                <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id, slug: article.slug },
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
                                                    params: { id: article.id, slug: article.slug },
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
                                                >{{
                                        new Date(article.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a
                                            >
                                        </div>
                                        <div class="flex space-x-1">
                                            <ChatBubbleOvalLeftEllipsisIcon class="h-4 w-4" />
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
            
                                <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id, slug: article.slug },
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
                                                   <router-link 
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id , slug: article.slug},
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
                                                        >{{
                                        new Date(article.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <UserIcon class="h-4 w-4" />
                                                    <router-link   :to="{name:'compte',  params: { slug: article.user.slug, id : article.user.id }}"
                                                        
                                                        class="hover:text-primary-blue"
                                                        >{{
                                                            article.user
                                                                .firstname
                                                        }}</router-link
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <ChatBubbleOvalLeftEllipsisIcon class="h-4 w-4" />
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
                                
                                        <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id, slug: article.slug },
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
                                             <router-link 
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id, slug: article.slug },
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
                                                        >{{
                                        new Date(article.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <ChatBubbleOvalLeftEllipsisIcon class="h-4 w-4" />
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
                                <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id, slug: article.slug },
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
                                            <div>    <router-link 
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id, slug: article.slug },
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
                                                        >{{
                                        new Date(article.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <UserIcon class="h-4 w-4" />
                                                    <router-link   :to="{name:'compte',  params: { slug: article.user.slug, id : article.user.id }}"
                                                        
                                                        class="hover:text-primary-blue"
                                                        >{{
                                                            article.user
                                                                .firstname
                                                        }}</router-link 
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <ChatBubbleOvalLeftEllipsisIcon class="h-4 w-4" />
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
                                    >     <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id, slug: article.slug },
                                    }"
                                    class="w-36"
                                >
                                    <img
                                        :src="article.image"
                                        alt=""
                                        class="object-cover h-64"
                                /></router-link>
                                        <div class="space-y-2 p-2">
                                            <div>     <router-link 
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id, slug: article.slug },
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
                                                        >{{
                                        new Date(article.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a
                                                    >
                                                </div>
                                                <div class="flex space-x-1">
                                                    <ChatBubbleOvalLeftEllipsisIcon class="h-4 w-4" />
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
                                <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id, slug: article.slug },
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
                                        <div>   <router-link 
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id, slug: article.slug },
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
                                                    >{{
                                        new Date(article.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a
                                                >
                                            </div>
                                            <div class="flex space-x-1">
                                                <UserIcon class="h-4 w-4" />
                                                <router-link   :to="{name:'compte',  params: { slug: article.user.slug, id : article.user.id }}"
                                                   
                                                    class="hover:text-primary-blue"
                                                    >{{
                                                        article.user.firstname
                                                    }}</router-link 
                                                >
                                            </div>
                                            <div class="flex space-x-1">
                                                <ChatBubbleOvalLeftEllipsisIcon class="h-4 w-4" />
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
                                
                                <router-link 
                                    :to="{
                                        name: 'show.post',
                                        params: { id: article.id, slug: article.slug },
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
                                                    params: { id: article.id, slug: article.slug },
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
                                                >{{
                                        new Date(article.date).toLocaleDateString(
                                            locale,
                                            {
                                                day: "numeric",
                                                year: "numeric",
                                                month: "long",
                                            }
                                        )
                                    }}</a
                                            >
                                        </div>
                                        <div class="flex space-x-1">
                                            <ChatBubbleOvalLeftEllipsisIcon class="h-4 w-4" />
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
                        <router-link 
                    
                        :to="{
                            name: 'show.job',
                            params: { id: jobOffer.id, slug: jobOffer.slug },
                            }"
                            class="flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"
                        >
                            <div class="flex items-center space-x-4 ">
                                <div class="hidden lg:block">
                                    <img v-if="jobOffer.company_logo" :src="jobOffer.company_logo" alt="" class="w-10 h-10 object-cover">
                                    <BuildingOffice2Icon v-else class="w-10 h-10 text-gray-500" />
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
                        <iframe class="w-full h-60" src="https://www.youtube.com/embed/N2WKfyIbr68" title="AfricaUnity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        <iframe class="w-full h-60" src="https://www.youtube.com/embed/7mtO5fdzO_8" title="AfricaUnity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script setup>
import Error from "@/components/Error.vue";
import useAuth from "@/services/authServices.js";
import FilterArticle from "@/components/FilterArticle.vue";
import Caroussel from "@/components/Caroussel.vue";
import { CalendarIcon, UserIcon, EnvelopeIcon, ChatBubbleOvalLeftEllipsisIcon, BuildingOffice2Icon, LockClosedIcon } from '@heroicons/vue/24/solid';
import { reactive, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
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


</script>
