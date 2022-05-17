<template>
    <Report
        :open="openReport"
        :toogleModal="toogleModal"
        :id="id"
        :type="'account'"
    />

    <section class="lg:py-10 p-4 lg:px-20">
        <div class="h-96 relative">
            <div class="h-1/2 bg-gray-50 z-0 shadow">
                <img
                    :src="user.cover"
                    class="w-full h-full bg-cover object-cover"
                    alt=""
                    v-if="user.cover"
                />
            </div>
            <div
                class="h-1/2 bg-white z-10 flex lg:justify-end items-center justify-center lg:space-x-3 relative"
            >
                <router-link
                    :to="{
                        name: 'setting.account',
                        params: { name: user.firstname, id: user.id },
                    }"
                    v-if="user.id == loginUser.id"
                    class="lg:w-60 lg:h-60 overflow-hidden absolute h-40 w-40 text-center shadow lg:left-4 mb-40 lg:mt-0 -mt-28 bg-white z-10 rounded-full"
                >
                    <img
                        :src="user.avatar"
                        class="w-full h-full bg-cover object-cover"
                        alt=""
                        v-if="user.avatar"
                    />
                    <UserCircleIcon
                        v-else
                        class="w-full h-full text-gray-500"
                    />
                </router-link>
                <div
                    v-else
                    class="lg:w-60 lg:h-60 overflow-hidden absolute h-40 w-40 text-center shadow lg:left-4 mb-40 lg:mt-0 -mt-28 bg-white z-10 rounded-full"
                >
                    <img
                        :src="user.avatar"
                        class="w-full h-full bg-cover object-cover"
                        alt=""
                        v-if="user.avatar"
                    />
                    <UserCircleIcon
                        v-else
                        class="w-full h-full text-gray-500"
                    />
                </div>
                <div
                    class="xl:w-[75%] lg:w-[65%] w-full px-8 py-2 h-full overflow-y-auto lg:mt-0 mt-20"
                >
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
                        <div
                            class="flex lg:justify-between items-center lg:flex-row flex-col lg:mt-0 mt-20"
                        >
                            <div>
                                <h1
                                    class="lg:text-3xl text-2xl lg:text-left text-center font-semibold capitalize text-gray-700"
                                >
                                    <span>{{ user.firstname }}</span>
                                    <span v-if="user.type == 'particular'">{{
                                        user.lastname
                                    }}</span>
                                </h1>
                                <div
                                    class="flex items-center space-x-2 text-sm mt-2"
                                >
                                    <h2
                                        class="text-primary-blue"
                                        v-if="!user.hide_email"
                                    >
                                        {{ user.email }} °
                                    </h2>
                                    <h2 class="text-gray-400">
                                        {{ detail.phone_number }}
                                    </h2>
                                </div>
                            </div>
                            <div
                                class="space-x-2 flex items-center lg:py-0 py-1"
                                v-if="user.id == loginUser.id"
                            >
                                <router-link
                                    :to="{
                                        name: 'add.post',
                                        params: { type: 'article' },
                                    }"
                                    class="py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue"
                                    v-if="user.type != 'business1'"
                                >
                                    <PlusCircleIcon class="w-5 h-5" />
                                    <span class="lg:block hidden"
                                        >{{ $t("add") }}
                                        {{ $t("article") }}</span
                                    >
                                </router-link>
                                <button
                                    @click="changeTab('edit')"
                                    class="py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue"
                                >
                                    <PencilIcon class="w-5 h-5" />
                                    <span class="lg:block hidden"
                                        >{{ $t("edit") }}
                                        {{ $t("profile") }}</span
                                    >
                                </button>
                                <router-link
                                    :to="{
                                        name: 'setting.account',
                                        params: {
                                            name: user.firstname,
                                            id: user.id,
                                        },
                                    }"
                                >
                                    <CogIcon
                                        class="h-8 w-8 text-gray-600 hover:text-primary-blue"
                                    />
                                </router-link>
                            </div>
                        </div>
                        <div
                            class="text-sm font-light text-gray-500 lg:w-full break-words overflow-y-auto lg:h-24 h-20 my-2 mx-auto"
                        >
                            {{ detail.presentation }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="px-5 py-3 space-x-2 bg-menu flex items-center lg:mt-0 mt-20"
        >
            <button
                @click="changeTab('profil')"
                :class="[
                    open.profil
                        ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md'
                        : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md',
                ]"
            >
                <IdentificationIcon class="w-5 h-5" />
                <span class="lg:block hidden">{{ $t("profile") }}</span>
            </button>
            <button
                v-if="user.type != 'business1'"
                @click="changeTab('article')"
                :class="[
                    open.article
                        ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md'
                        : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md',
                ]"
            >
                <NewspaperIcon class="w-5 h-5" />
                <span class="lg:block hidden">{{ $t("articles") }}</span>
            </button>
            <button
                v-if="user.type != 'business1'"
                @click="changeTab('propau')"
                :class="[
                    open.propau
                        ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md'
                        : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md',
                ]"
            >
                <BookOpenIcon class="w-5 h-5" />
                <span class="lg:block hidden">{{ $t("propau") }}</span>
            </button>
            <button
                @click="changeTab('comment')"
                :class="[
                    open.comment
                        ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md'
                        : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md',
                ]"
            >
                <ChatIcon class="w-5 h-5" />
                <span class="lg:block hidden">{{ $t("comments") }}</span>
            </button>
            <button
                v-if="user.type != 'particular' && user.type != 'business1'"
                @click="changeTab('job')"
                :class="[
                    open.job
                        ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md'
                        : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md',
                ]"
            >
                <ChatAltIcon class="w-5 h-5" />
                <span class="lg:block hidden">{{ $t("my-jobs") }}</span>
            </button>
            <button
                v-if="user.type == 'particular' || user.type == 'admin'"
                @click="changeTab('ads')"
                :class="[
                    open.ads
                        ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md'
                        : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md',
                ]"
            >
                <SpeakerphoneIcon class="w-5 h-5" />
                <span class="lg:block hidden">{{ $t("my-ads") }}</span>
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
        <div class="py-8 lg:px-16" v-if="open.profil && loading == 0">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div
                    v-if="user.type == 'particular'"
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2"
                >
                    <div class="relative border-b py-2">
                        <label
                            class="text-gray-700 py-1 text-md font-semibold"
                            >{{ $t("firstname") }}</label
                        >
                        <p class="p-2 rounded-lg mt-1 shadow border">
                            {{ user.firstname }}
                        </p>
                    </div>
                    <div class="relative border-b py-2">
                        <label
                            class="text-gray-700 py-1 text-md font-semibold"
                            >{{ $t("lastname") }}</label
                        >
                        <p class="p-2 rounded-lg mt-1 shadow border">
                            {{ user.lastname }}
                        </p>
                    </div>
                </div>
                <div
                    v-else-if="
                        user.type == 'business1' || user.type == 'business2'
                    "
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("social-reason")
                    }}</label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ user.firstname }}
                    </p>
                </div>
                <div v-else class="relative col-span-2 border-b py-2">
                    <label class="text-gray-700 py-1 text-md font-semibold"
                        >{{ $t("denomination") }}
                    </label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ user.firstname }}
                    </p>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("status")
                    }}</label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        <span v-if="detail.status == 1">{{ $t("actif") }}</span>
                        <span v-else>{{ $t("no-actif") }}</span>
                    </p>
                </div>
                <div
                    v-else-if="
                        user.type == 'business1' || user.type == 'business2'
                    "
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("social-object")
                    }}</label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ detail.social_object }}
                    </p>
                </div>
                <div
                    v-else-if="user.type == 'ip'"
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("goal-attribution")
                    }}</label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ detail.goal_attribution }}
                    </p>
                </div>
                <div
                    class="relative col-span-2 border-b py-2"
                    v-if="!user.hide_email"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("adresse") + " " + $t("email")
                    }}</label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ user.email }}
                    </p>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("diplome-certification")
                    }}</label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ detail.goal_attribution }}
                    </p>
                </div>
                <div
                    v-if="
                        user.type == 'business1' ||
                        user.type == 'business2' ||
                        user.type == 'ip'
                    "
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("name-responsable")
                    }}</label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ detail.name_responsible }}
                    </p>
                </div>
                <div
                    v-if="
                        user.type == 'business1' ||
                        user.type == 'business2' ||
                        user.type == 'ip'
                    "
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("adresse")
                    }}</label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ detail.adress }}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                    <div
                        v-if="user.type == 'particular'"
                        class="relative border-b py-2"
                    >
                        <label
                            class="text-gray-700 py-1 text-md font-semibold"
                            >{{ $t("sex") }}</label
                        >
                        <p class="p-2 rounded-lg mt-1 shadow border">
                            <span v-if="detail.sex == 1">{{ $t("male") }}</span>
                            <span v-else>{{ $t("female") }}</span>
                        </p>
                    </div>
                    <div class="relative border-b py-2">
                        <label
                            class="text-gray-700 py-1 text-md font-semibold"
                            >{{ $t("phone-number") }}</label
                        >
                        <p class="p-2 rounded-lg mt-1 shadow border">
                            {{ detail.phone_number }}
                        </p>
                    </div>
                    <div
                        v-if="user.type != 'particular'"
                        class="relative border-b py-2"
                    >
                        <label class="text-gray-700 py-1 text-md font-semibold"
                            >{{ $t("phone-number") }} 2</label
                        >
                        <p class="p-2 rounded-lg mt-1 shadow border">
                            {{ detail.phone_number_2 }}
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                    <div
                        class="relative border-b py-2"
                        v-if="user.type == 'particular' || user.type == 'ip'"
                    >
                        <label class="text-gray-700 py-1 text-md font-semibold">
                            <span>{{ $t("native-country") }}</span>
                        </label>
                        <ul class="p-2 rounded-lg mt-1 shadow border">
                            <li v-if="detail.country_native">
                                <span v-if="$i18n.locale == 'en'">{{
                                    detail.country_native.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    detail.country_native.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    detail.country_native.name_es
                                }}</span>
                                <span v-else>{{
                                    detail.country_native.name_pt
                                }}</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        :class="[
                            user.type == 'particular' || user.type == 'ip'
                                ? 'border-b py-2'
                                : 'col-span-2 border-b py-2',
                        ]"
                    >
                        <label class="text-gray-700 py-1 text-md font-semibold">
                            <span
                                v-if="
                                    user.type == 'particular' ||
                                    user.type == 'ip'
                                "
                                >{{ $t("residence-country") }}</span
                            >
                            <span v-else>{{ $t("social-country") }}</span>
                        </label>
                        <ul class="p-2 rounded-lg mt-1 shadow border">
                            <li v-if="detail.country_residence">
                                <span v-if="$i18n.locale == 'en'">{{
                                    detail.country_residence.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    detail.country_residence.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    detail.country_residence.name_es
                                }}</span>
                                <span v-else>{{
                                    detail.country_residence.name_pt
                                }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    v-if="user.type != 'particular'"
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2"
                >
                    <div class="relative border-b py-2">
                        <label class="text-gray-700 py-1 text-md font-semibold">
                            <span v-if="user.type == 'ip'">{{
                                $t("perimetre")
                            }}</span>
                            <span v-else>{{ $t("type-company") }}</span>
                        </label>
                        <ul class="p-2 rounded-lg mt-1 shadow border">
                            <li v-if="detail.business_type">
                                <span v-if="$i18n.locale == 'en'">{{
                                    detail.business_type.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    detail.business_type.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    detail.business_type.name_es
                                }}</span>
                                <span v-else>{{
                                    detail.business_type.name_pt
                                }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="relative border-b py-2">
                        <label class="text-gray-700 py-1 text-md font-semibold">
                            <span v-if="user.type == 'ip'">{{
                                $t("size-institution")
                            }}</span>
                            <span v-else>{{ $t("size-company") }}</span>
                        </label>
                        <ul class="p-2 rounded-lg mt-1 shadow border">
                            <li v-if="detail.business_size">
                                <span v-if="$i18n.locale == 'en'">{{
                                    detail.business_size.name_en
                                }}</span>
                                <span v-else-if="$i18n.locale == 'fr'">{{
                                    detail.business_size.name_fr
                                }}</span>
                                <span v-else-if="$i18n.locale == 'es'">{{
                                    detail.business_size.name_es
                                }}</span>
                                <span v-else>{{
                                    detail.business_size.name_pt
                                }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("speak-language")
                    }}</label>
                    <ul class="p-2 rounded-lg mt-1 shadow border">
                        <li v-for="language in languages" :key="language.id">
                            <span
                                v-for="lang in detail.languages"
                                :key="lang.id"
                            >
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
                    v-if="user.type == 'business1' || user.type == 'business2'"
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">{{
                        $t("legal-status")
                    }}</label>
                    <ul class="p-2 rounded-lg mt-1 shadow border">
                        <li v-if="detail.legal_status">
                            <span v-if="$i18n.locale == 'en'">{{
                                detail.legal_status.name_en
                            }}</span>
                            <span v-else-if="$i18n.locale == 'fr'">{{
                                detail.legal_status.name_fr
                            }}</span>
                            <span v-else-if="$i18n.locale == 'es'">{{
                                detail.legal_status.name_es
                            }}</span>
                            <span v-else>{{
                                detail.legal_status.name_pt
                            }}</span>
                        </li>
                    </ul>
                </div>
                <div class="relative col-span-2 border-b py-2">
                    <label class="text-gray-700 py-1 text-md font-semibold">
                        <span v-if="user.type == 'particular'">{{
                            $t("birth-date")
                        }}</span>
                        <span v-else>{{ $t("create-date") }}</span>
                    </label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ detail.navite_date }}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 col-span-2">
                    <div class="relative border-b py-2">
                        <label class="text-gray-700 py-1 text-md font-semibold">
                            {{ $t("website") }}
                        </label>
                        <p class="p-2 rounded-lg mt-1 shadow border">
                            <a
                                target="_blank"
                                class="py-1 text-primary-blue block italic hover:underline"
                                :href="detail.website"
                                >{{ detail.website }}</a
                            >
                        </p>
                    </div>
                    <div class="relative border-b py-2">
                        <label class="text-gray-700 py-1 text-md font-semibold">
                            Youtube
                        </label>
                        <p class="p-2 rounded-lg mt-1 shadow border">
                            <a
                                target="_blank"
                                class="py-1 hover:underline block italic"
                                :href="detail.youtube"
                                >Youtube</a
                            >
                        </p>
                    </div>
                </div>
                <div
                    v-if="user.type != 'ip'"
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">
                        {{ $t("activity-area") }}
                    </label>
                    <ul class="p-2 rounded-lg mt-1 shadow border">
                        <li
                            v-for="activityArea in activityAreas"
                            :key="activityArea.id"
                        >
                            <span
                                v-for="activity_area in detail.activity_areas"
                                :key="activity_area.id"
                            >
                                <span
                                    v-if="activity_area.id === activityArea.id"
                                >
                                    <span v-if="$i18n.locale == 'en'">{{
                                        activityArea.name_en
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'fr'">{{
                                        activityArea.name_fr
                                    }}</span>
                                    <span v-else-if="$i18n.locale == 'es'">{{
                                        activityArea.name_es
                                    }}</span>
                                    <span v-else>{{
                                        activityArea.name_pt
                                    }}</span>
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">
                        {{ $t("o-activity") }}
                    </label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ detail.other_activity }}
                    </p>
                </div>
                <div
                    v-if="user.type == 'particular'"
                    class="relative col-span-2 border-b py-2"
                >
                    <label class="text-gray-700 py-1 text-md font-semibold">
                        {{ $t("rsearch-p") }}
                    </label>
                    <p class="p-2 rounded-lg mt-1 shadow border">
                        {{ detail.search_partner }}
                    </p>
                </div>
                <div class="px-2 flex items-center space-x-3 py-4">
                    <!-- facebook icons -->
                    <!-- <a :href="'https://www.facebook.com/sharer/sharer.php?u='+url" data-network="facebook" target="_blank" rel="noopener noreferrer">
                                <svg fill="#3b5998" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" class="h-6 w-6"><path d="M27,15c0,6.627-5.373,12-12,12S3,21.627,3,15S8.373,3,15,3S27,8.373,27,15z M19.181,8.131C18.877,8.09,18.235,8,17.021,8 C14.486,8,13,9.339,13,12.389V14h-3v3h3v7.799C13.646,24.93,14.315,25,15,25c0.338,0,0.671-0.018,1-0.05V17h2.726l0.428-3H16 v-1.282C16,11.568,16.376,11,17.452,11h1.729V8.131z"/></svg>
                            </a> -->
                    <!-- wathsapp icons -->
                    <a
                        :href="
                            'whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you ' +
                            url
                        "
                    >
                        <svg
                            fill="#25D366"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            class="h-6 w-6"
                        >
                            <path
                                d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"
                            />
                        </svg>
                    </a>

                    <div>
                        <button
                            @click="toogleModal()"
                            class="flex text-gray-400 cursor-pointer text-xs border-gray-400 border rounded-full px-2 py-1 items-center hover:bg-yellow-300 space-x-2 hover:text-white hover:border-white"
                        >
                            <ExclamationCircleIcon class="h-5 w-5" />
                            <span class="hidden lg:block">{{
                                $t("report")
                            }}</span>
                        </button>
                    </div>
                    <!-- twitter icon -->
                    <!-- <a :href="'https://twitter.com/intent/tweet?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you&url='+url" data-network="twitter" target="_blank">
                                <svg fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" class="h-6 w-6">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
                            </a> -->
                </div>
            </div>
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.article && loading == 0">
            <div class="md:flex space-x-2 items-center">
                <div>
                    <div class="relative">
                        <div
                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            v-model="searchArticle"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div>
                    <select
                        v-model="langArticle"
                        class="form-select block w-full pr-8 pl-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                    >
                        <option value="">Select Language</option>
                        <option value="fr">{{ $t("fr") }}</option>
                        <option value="en">{{ $t("en") }}</option>
                        <option value="es">{{ $t("es") }}</option>
                        <option value="pt">{{ $t("pt") }}</option>
                    </select>
                </div>
            </div>
            <div
                class="grid lg:grid-cols-2 gap-8 px-6 py-8"
                v-if="filteredArticles.length != 0"
            >
                <div
                    v-for="post in filteredArticles"
                    :key="post.id"
                    class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
                >
                    <div class="w-1/3 bg-cover overflow-hidden">
                        <router-link
                            :to="{
                                name: 'show.post',
                                params: { id: post.id },
                            }"
                            ><img
                                :src="post.image"
                                class="w-full h-full bg-cover object-cover"
                                :alt="post.title"
                        /></router-link>
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <router-link
                            :to="{
                                name: 'show.post',
                                params: { id: post.id },
                            }"
                            class="text-2xl font-bold text-gray-800 dark:text-white"
                        >
                            {{
                                post.title.length <= 20
                                    ? post.title
                                    : post.title.substring(0, 19) + "..."
                            }}</router-link
                        >

                        <!-- <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ post.content.substring(0, 19) + "..." }}</p> -->

                        <div class="flex mt-2 item-center space-x-1">
                            <ChatIcon class="h-4 w-4 text-gray-500" />
                            <a
                                href="#"
                                class="hover:text-primary-blue text-xs"
                                >{{ post.comments }}</a
                            >
                        </div>

                        <div class="flex justify-between mt-3 item-center">
                            <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"
                                class="text-sm font-bold text-primary-blue hover:underline"
                                >{{ $t("read-more") }}
                            </router-link>
                            <div
                                class="flex space-x-2"
                                v-if="user.id == loginUser.id"
                            >
                                <router-link
                                    :to="{
                                        name: 'edit.post',
                                        params: {
                                            id: post.id,
                                            type: post.type,
                                        },
                                    }"
                                >
                                    <PencilAltIcon
                                        class="h-5 w-5 hover:text-gray-400 cursor-pointer text-primary-blue"
                                    />
                                </router-link>

                                <button
                                    @click="deletePost(post.id)"
                                    class="text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    <TrashIcon
                                        class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">{{ $t("no-content") }} </span>
            </div>
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.propau && loading == 0">
            <div class="md:flex space-x-2 items-center">
                <div>
                    <div class="relative">
                        <div
                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            v-model="searchProp"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div>
                    <select
                        v-model="langProp"
                        class="form-select block w-full pr-8 pl-4 py-2 text-gray-700 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                    >
                        <option value="">Select Language</option>
                        <option value="fr">{{ $t("fr") }}</option>
                        <option value="en">{{ $t("en") }}</option>
                        <option value="es">{{ $t("es") }}</option>
                        <option value="pt">{{ $t("pt") }}</option>
                    </select>
                </div>
            </div>
            <div
                class="grid lg:grid-cols-2 gap-8 px-10 py-8"
                v-if="filteredPropAu.length != 0"
            >
                <div
                    v-for="post in filteredPropAu"
                    :key="post.id"
                    class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
                >
                    <div class="w-1/3 bg-cover overflow-hidden">
                        <router-link
                            :to="{
                                name: 'show.post',
                                params: { id: post.id },
                            }"
                        >
                            <BookOpenIcon class="w-full h-full text-gray-400" />
                        </router-link>
                    </div>

                    <div class="w-2/3 p-4 md:p-4">
                        <router-link
                            :to="{
                                name: 'show.post',
                                params: { id: post.id },
                            }"
                            class="text-2xl font-bold text-gray-800 dark:text-white"
                            >{{
                                post.title.length <= 20
                                    ? post.title
                                    : post.title.substring(0, 19) + "..."
                            }}</router-link
                        >

                        <p
                            class="mt-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                            {{ post.content.substring(0, 19) + "..." }}
                        </p>

                        <div class="flex mt-2 item-center space-x-1">
                            <ChatIcon class="h-4 w-4 text-gray-500" />
                            <a
                                href="#"
                                class="hover:text-primary-blue text-xs"
                                >{{ post.comments }}</a
                            >
                        </div>

                        <div class="flex justify-between mt-3 item-center">
                            <router-link
                                :to="{
                                    name: 'show.post',
                                    params: { id: post.id },
                                }"
                                class="text-sm font-bold text-primary-blue hover:underline"
                                >Read More</router-link
                            >
                            <div
                                class="flex space-x-2"
                                v-if="user.id == loginUser.id"
                            >
                                <router-link
                                    :to="{
                                        name: 'edit.post',
                                        params: {
                                            id: post.id,
                                            type: post.type,
                                        },
                                    }"
                                >
                                    <PencilAltIcon
                                        class="h-5 w-5 hover:text-gray-400 cursor-pointer text-primary-blue"
                                    />
                                </router-link>

                                <button
                                    @click="deletePost(post.id)"
                                    class="text-red-600 dark:text-blue-500 hover:underline"
                                >
                                    <TrashIcon
                                        class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-else
                class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
            >
                <EmojiSadIcon class="h-16 w-16" />
                <span class="text-2xl mt-2">{{ $t("no-content") }} </span>
            </div>
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.comment && loading == 0">
            <div class="p-4">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div
                        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                    >
                        <svg
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        v-model="searchComment"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                    />
                </div>
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
                                {{ $t("articles") }} & {{ $t("propau") }}
                            </th>
                            <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                                {{ $t("comments") }}
                            </th>
                            <th
                                scope="col"
                                class="p-4"
                                v-if="user.id == loginUser.id"
                            >
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                        v-if="filteredComment.length != 0"
                    >
                        <tr
                            v-for="comment in filteredComment"
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
                                    >{{ comment.post.title }}</router-link
                                >
                            </td>
                            <td
                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                <span
                                    v-if="
                                        modifyComment.id == '' ||
                                        modifyComment.id != comment.id
                                    "
                                    >{{ comment.content }}</span
                                >
                                <form
                                    v-if="
                                        modifyComment.id != '' &&
                                        modifyComment.id == comment.id
                                    "
                                    @submit.prevent="saveComment()"
                                >
                                    <textarea
                                        required
                                        v-model="modifyComment.content"
                                        type="text"
                                        id="pt"
                                        class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-primary-blue focus:border-primary-blue focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    >
                                    </textarea>
                                    <div class="flex justify-end mt-6">
                                        <button
                                            type="submit"
                                            class="px-6 py-2 leading-5 text-white rounded bg-primary-blue focus:outline-none"
                                        >
                                            {{ $t("save") }}
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
                                    </button>
                                    <button
                                        @click="deleteComment(comment.id)"
                                        class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                    >
                                        <TrashIcon
                                            class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody
                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                        v-else
                    >
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td
                                colspan="5"
                                class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                            >
                                <div
                                    class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
                                >
                                    <EmojiSadIcon class="h-16 w-16" />
                                    <span class="text-2xl mt-2"
                                        >{{ $t("no-content") }}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.job && loading == 0">
            <div
                class="flex justify-between lg:flex-row flex-col-reverse items-center px-6 py-2"
            >
                <div class="p-4">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
                        <div
                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            v-model="searchJob"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <router-link
                    :to="{
                        name: 'add.job',
                    }"
                    class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2 lg:mb-0 mb-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">{{ $t("add") }} Job</p>
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
                                {{ $t("my-jobs") }}
                            </th>
                            <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                            >
                                {{ $t("status") }}
                            </th>
                            <th
                                v-if="user.id == loginUser.id"
                                scope="col"
                                class="p-4"
                            >
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                        v-if="filteredJob.length != 0"
                    >
                        <tr
                            v-for="jobOffer in filteredJob"
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
                                    >{{ jobOffer.title }}</router-link
                                >
                            </td>
                            <td
                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                <span
                                    v-if="jobOffer.status == 3"
                                    class="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full"
                                    >{{ $t("provided") }}</span
                                >
                                <span
                                    v-else-if="jobOffer.status == 1"
                                    class="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 rounded-full"
                                    >{{ $t("in-progress") }}</span
                                >
                            </td>
                            <td
                                v-if="user.id == loginUser.id"
                                class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                            >
                                <div class="flex">
                                    <router-link
                                        :to="{
                                            name: 'edit.job',
                                            params: { id: jobOffer.id },
                                        }"
                                        class="text-primary-blue dark:text-blue-500 hover:underline"
                                    >
                                        <!-- <PencilAltIcon
                                                    class="h-5 w-5 hover:text-blue-700 cursor-pointer text-blue-400"
                                                /> -->
                                        {{ $t("modify") }}
                                    </router-link>
                                    <button
                                        @click="deleteJobOffer(jobOffer.id)"
                                        class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                    >
                                        <!-- <TrashIcon
                                                    class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                                /> -->
                                        <span>
                                            {{ $t("delete") }}
                                        </span>
                                    </button>
                                    <button
                                        @click="mark(jobOffer.id)"
                                        class="text-purple-600 relative ml-3 dark:text-blue-500 hover:underline"
                                    >
                                        <!-- <CheckCircleIcon
                                                    class="h-5 w-5 hover:text-purple-700 cursor-pointer text-purple-400"
                                                /> -->
                                        <span v-if="jobOffer.status != 3">
                                            {{ $t("mark-provided") }}
                                        </span>
                                        <span v-else-if="jobOffer.status != 1">
                                            {{ $t("mark-progress") }}
                                        </span>
                                    </button>
                                    <router-link
                                        :to="{
                                            name: 'add.job',
                                            params: {
                                                duplicate:
                                                    JSON.stringify(jobOffer),
                                            },
                                        }"
                                        class="text-pink-600 relative ml-3 dark:text-blue-500 hover:underline"
                                    >
                                        <span>
                                            {{ $t("duplicate") }}
                                        </span>
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody
                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                        v-else
                    >
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td
                                colspan="3"
                                class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                            >
                                <div
                                    class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
                                >
                                    <EmojiSadIcon class="h-16 w-16" />
                                    <span class="text-2xl mt-2"
                                        >{{ $t("no-content") }}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.ads && loading == 0">
            <div
                class="flex justify-between lg:flex-row flex-col-reverse items-center px-6 py-2"
            >
                <div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
                        <div
                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                        >
                            <svg
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            v-model="searchAds"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <router-link
                    :to="{
                        name: 'add.ads',
                    }"
                    class="flex items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2 lg:mb-0 mb-2"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">
                        {{ $t("add") }} {{ $t("ads") }}
                    </p>
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
                                {{ $t("my-ads") }}
                            </th>
                            <th
                                v-if="user.id == loginUser.id"
                                scope="col"
                                class="p-4"
                            >
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                        v-if="filteredAnnouncement.length != 0"
                    >
                        <tr
                            v-for="announcement in filteredAnnouncement"
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
                                    >{{ announcement.title }}</router-link
                                >
                            </td>
                            <td
                                v-if="user.id == loginUser.id"
                                class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                            >
                                <div class="flex">
                                    <router-link
                                        :to="{
                                            name: 'edit.ads',
                                            params: { id: announcement.id },
                                        }"
                                        class="text-primary-blue dark:text-blue-500 hover:underline"
                                    >
                                        <PencilAltIcon
                                            class="h-5 w-5 hover:text-blue-700 cursor-pointer text-blue-400"
                                        />
                                    </router-link>
                                    <button
                                        @click="
                                            deleteAnnouncement(announcement.id)
                                        "
                                        class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                    >
                                        <TrashIcon
                                            class="h-5 w-5 hover:text-red-700 cursor-pointer text-red-400"
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody
                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                        v-else
                    >
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td
                                colspan="5"
                                class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                            >
                                <div
                                    class="p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
                                >
                                    <EmojiSadIcon class="h-16 w-16" />
                                    <span class="text-2xl mt-2"
                                        >{{ $t("no-content") }}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.edit && loading == 0">
            <h1 class="text-center text-2xl text-gray-500 font-bold">
                {{ $t("edit") }} {{ $t("your") }} {{ $t("profile") }}
            </h1>
            <EditProfile
                :user="user"
                :detail="detail"
                :legalStatuses="legalStatuses"
                :languages="languages"
                :countries="countries"
                :activityAreas="activityAreas"
                :businessSizes="businessSizes"
                :businessTypes="businessTypes"
            />
        </div>
    </section>
</template>

<script>
import { reactive, ref, onMounted, watch } from "vue";
import Report from "../../components/Report.vue";
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
import {
    CogIcon,
    ExclamationCircleIcon,
    TrashIcon,
    EmojiSadIcon,
    PlusCircleIcon,
    SpeakerphoneIcon,
    CheckCircleIcon,
    PencilIcon,
    PencilAltIcon,
    NewspaperIcon,
    ChatIcon,
    ChatAltIcon,
    BookOpenIcon,
    IdentificationIcon,
    UserCircleIcon,
} from "@heroicons/vue/solid";
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
        redirect: {
            required: false,
            type: String,
        },
    },
    components: {
        ExclamationCircleIcon,
        Report,
        EmojiSadIcon,
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
        UserCircleIcon,
    },
    setup(props) {
        const loginUser = localStorage.user
            ? JSON.parse(localStorage.user)
            : "";
        const { articles, getPostsUser, propau, destroyPost } = usePosts();
        const { user, getUser } = useUsers();
        const { comments, getCommentsUser, destroyComment, updateComment } =
            useComments();
        const { jobOffers, getJobOffersUser, destroyJobOffer, markFilled } =
            useJobOffers();
        const { announcements, getAnnouncementsUser, destroyAnnouncement } =
            useAnnouncements();
        const { languages, getLanguages } = useLanguages();
        const { businessTypes, getBusinessTypes } = useBusinessTypes();
        const { businessSizes, getBusinessSizes } = useBusinessSizes();
        const { activityAreas, getActivityAreas } = useActivityAreas();
        const { legalStatuses, getLegalStatuses } = useLegalStatuses();
        const { countries, getCountries } = useCountries();
        const detail = ref([]);
        const loading = ref(0);
        const searchArticle = ref("");
        const searchAds = ref("");
        const searchJob = ref("");
        const searchComment = ref("");
        const searchProp = ref("");
        const langArticle = ref("");
        const langProp = ref("");
        const url = window.location.href;
        const openReport = ref(false);
        const open = reactive({
            profil: true,
            article: false,
            propau: false,
            comment: false,
            job: false,
            ads: false,
            edit: false,
        });
        onMounted(async () => {
            try {
                loading.value = 1;
                if (props.redirect == "article") {
                    open.profil = false;
                    open.article = true;
                } else if (props.redirect == "propau") {
                    open.profil = false;
                    open.propau = true;
                }
                await getUser(props.id);
                let response = await axios.get("/api/details/" + props.id, {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                });
                detail.value = response.data.data;
                loading.value = 0;
                await getPostsUser(props.id);
                await getCommentsUser(props.id);
                await getJobOffersUser(props.id);
                await getAnnouncementsUser(props.id);
                await getLanguages();
                await getBusinessTypes();
                await getBusinessSizes();
                await getActivityAreas();
                await getLegalStatuses();
                await getCountries();
            } catch (e) {
                if (e.response.status == 401) {
                    router.push({
                        name: login,
                        params: {
                            redirect: "not-login",
                        },
                    });
                    window.localStorage.removeItem("token");
                    window.localStorage.removeItem("user");
                }
            }
        });

        watch(props, async (currentValue, oldValue) => {
            try {
                loading.value = 1;
                await getUser(currentValue.id);
                let response = await axios.get(
                    "/api/details/" + currentValue.id,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                    }
                );
                detail.value = response.data.data;
                loading.value = 0;
                await getPostsUser(currentValue.id);
                await getCommentsUser(currentValue.id);
                await getJobOffersUser(currentValue.id);
                await getAnnouncementsUser(currentValue.id);
            } catch (e) {
                if (e.response.status == 401) {
                    router.push({
                        name: login,
                        params: {
                            redirect: "not-login",
                        },
                    });
                    window.localStorage.removeItem("token");
                    window.localStorage.removeItem("user");
                }
            }
        });

        const toogleModal = () => {
            openReport.value = !openReport.value;
        };

        const deletePost = async (id) => {
            if (confirm("I you Sure ?")) {
                await destroyPost(id);
                await getPostsUser(props.id);
            }
        };

        const deleteComment = async (id) => {
            if (confirm("I you Sure ?")) {
                await destroyComment(id);
                await getCommentsUser(props.id);
            }
        };

        const deleteAnnouncement = async (id) => {
            if (confirm("I you Sure ?")) {
                await destroyAnnouncement(id);
                await getAnnouncementsUser(props.id);
            }
        };

        const deleteJobOffer = async (id) => {
            if (confirm("I you Sure ?")) {
                await destroyJobOffer(id);
                await getJobOffersUser(props.id);
            }
        };

        const mark = async (id) => {
            if (confirm("I you Sure ?")) {
                await markFilled(id);
                await getJobOffersUser(props.id);
            }
        };

        const modifyComment = reactive({
            id: "",
            user_id: "",
            post_id: "",
            content: "",
        });

        const selectComment = (comment) => {
            modifyComment.id = comment.id;
            modifyComment.content = comment.content;
            modifyComment.user_id = comment.user.id;
            modifyComment.post_id = comment.post.id;
        };

        const saveComment = async () => {
            await updateComment(modifyComment);
            modifyComment.id = "";
            modifyComment.content = "";
            modifyComment.user_id = "";
            modifyComment.post_id = "";
            await getCommentsUser(props.id);
        };

        const changeTab = (type) => {
            switch (type) {
                case "profil":
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = true;
                    break;
                case "article":
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.profil = false;
                    open.article = true;
                    break;
                case "propau":
                    open.ads = false;
                    open.job = false;
                    open.comment = false;
                    open.article = false;
                    open.profil = false;
                    open.propau = true;
                    break;
                case "comment":
                    open.ads = false;
                    open.job = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.comment = true;
                    break;
                case "job":
                    open.ads = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.job = true;
                    break;
                case "ads":
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.ads = true;
                    break;
                case "edit":
                    open.job = false;
                    open.comment = false;
                    open.propau = false;
                    open.article = false;
                    open.profil = false;
                    open.ads = false;
                    open.edit = true;
                    break;
            }
        };

        return {
            toogleModal,
            openReport,
            deletePost,
            langProp,
            langArticle,
            searchProp,
            searchComment,
            searchJob,
            searchAds,
            searchArticle,
            url,
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
        };
    },

    computed: {
        filteredAnnouncement() {
            return this.announcements.filter((announcement) => {
                return announcement.title
                    .toLowerCase()
                    .includes(this.searchAds.toLowerCase());
            });
        },
        filteredJob() {
            return this.jobOffers.filter((jobOffer) => {
                return jobOffer.title
                    .toLowerCase()
                    .includes(this.searchJob.toLowerCase());
            });
        },
        filteredComment() {
            return this.comments.filter((comment) => {
                return comment.post.title
                    .toLowerCase()
                    .includes(this.searchComment.toLowerCase());
            });
        },
        filteredPropAu() {
            return this.propau.filter((prop) => {
                if (this.langProp != "") {
                    return (
                        prop.title
                            .toLowerCase()
                            .includes(this.searchProp.toLowerCase()) &&
                        prop.language == this.langProp
                    );
                } else {
                    return prop.title
                        .toLowerCase()
                        .includes(this.searchProp.toLowerCase());
                }
            });
        },
        filteredArticles() {
            return this.articles.filter((article) => {
                if (this.langArticle != "") {
                    return (
                        article.title
                            .toLowerCase()
                            .includes(this.searchArticle.toLowerCase()) &&
                        article.language == this.langArticle
                    );
                } else {
                    return article.title
                        .toLowerCase()
                        .includes(this.searchArticle.toLowerCase());
                }
            });
        },
    },
};
</script>
