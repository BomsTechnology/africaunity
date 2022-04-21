<template>
    <Header />
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
                                }"> {{ article.title }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title }}
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
                                        <p
                                            class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                                        >
                                            {{
                                                article.content.substring(
                                                    0,
                                                    19
                                                ) + "..."
                                            }}
                                        </p>
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
                                }"> {{ article.title }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title }}
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
                                }"> {{ article.title }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title }}
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
                                            <p
                                                class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                                            >
                                                {{
                                                    article.content.substring(
                                                        0,
                                                        19
                                                    ) + "..."
                                                }}
                                            </p>
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
                                }"> {{ article.title }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title }}
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
                                }"> {{ article.title }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title }}
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
                                            <p
                                                class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                                            >
                                                {{
                                                    article.content.substring(
                                                        0,
                                                        19
                                                    ) + "..."
                                                }}
                                            </p>
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
                                }"> {{ article.title }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title }}
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
                                }"> {{ article.title }} </router-link>
                                            <router-link v-else
                                                :to="{
                                                    name: 'show.post',
                                                    params: { id: article.id },
                                                }"
                                                class="text-xl font-semibold text-gray-600 hover:text-primary-blue"
                                                >{{ article.title }}
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
                                        <p
                                            class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                                        >
                                            {{
                                                article.content.substring(
                                                    0,
                                                    19
                                                ) + "..."
                                            }}
                                        </p>
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
                                                >{{ article.title }}
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
            <!-- <div class="w-full">
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    {{ $t("recent-posts") }}
                </h1>
                <div
                    class="border-t-2 w-full border-primary-blue text-justify py-4"
                >
                    <p></p>
                </div>
            </div> -->
            <div class="w-full">
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    {{ $t("video") }}
                </h1>
                <div
                    class="border-t-2 w-full border-primary-blue text-justify py-4"
                >
                    <p></p>
                </div>
            </div>
            <div class="w-full">
                <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
                    {{ $t("presentation") }}
                </h1>
                <div
                    class="border-t-2 w-full border-primary-blue text-justify py-4"
                >
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from "../../components/Header.vue";
import FilterArticle from "../../components/FilterArticle.vue";
import Footer from "../../components/Footer.vue";
import Caroussel from "../../components/Caroussel.vue";
import { CalendarIcon, UserIcon, ChatIcon } from "@heroicons/vue/solid";
import { reactive, ref, onMounted } from "vue";
export default {
    components: {
        Header,
        Caroussel,
        Footer,
        CalendarIcon,
        UserIcon,
        ChatIcon,
        FilterArticle,
    },
    setup(props) {
        const token = localStorage.token;
        const ministries = ref([]);
        const errors = ref("");
        const loading = ref(0);
        const articles1 = ref([]);
        const articles2 = ref([]);
        const articles3 = ref([]);
        const articles4 = ref([]);
        const ministry1 = ref("");
        const ministry2 = ref("");
        const ministry3 = ref("");
        const ministry4 = ref("");

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

            loading.value = 2;
        });

        return {
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
