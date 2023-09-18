<template>
    <Report
        :open="openReport"
        :toogleModal="toogleModal"
        :id="id"
        :type="'Account'"
    />

    <section
        class="mx-auto min-h-screen w-full bg-white p-4 lg:py-10 lg:px-20 xl:w-[90%]"
    >
        <div class="relative h-[27rem]">
            <div class="z-0 h-1/2 bg-gray-50 shadow">
                <img
                    :src="user.cover"
                    class="h-full w-full bg-cover object-cover"
                    alt=""
                    v-if="user.cover"
                />
            </div>
            <div
                class="relative flex h-1/2 w-full flex-col items-center justify-center bg-white lg:flex-row lg:justify-between lg:space-x-3"
            >
                <div class="relative z-30 -mt-28 lg:-mt-60 lg:ml-8">
                    <button
                    v-if="user.id == loginUser.id"
                        type="button"
                        @click="changeTab('chat')"
                        class="group absolute bottom-0 right-10 flex items-center space-x-2 rounded-full bg-primary-blue p-2 text-white hover:right-5"
                    >
                        <ChatBubbleLeftRightIcon class="h-6 w-6" />
                        <span class="hidden group-hover:block">Chat</span>
                    </button>
                    <router-link
                        :to="{
                            name: 'setting.account',
                            params: { slug: loginUser.slug, id: loginUser.id },
                        }"
                        v-if="user.id == loginUser.id"
                        class="block h-40 w-40 overflow-hidden rounded-full shadow lg:h-60 lg:w-60"
                    >
                        <img
                            :src="user.avatar"
                            class="h-full w-full bg-cover object-cover"
                            alt=""
                            v-if="user.avatar"
                        />
                        <UserCircleIcon
                            v-else
                            class="h-full w-full text-gray-500"
                        />
                    </router-link>
                    <div
                        v-else
                        class="block h-40 w-40 overflow-hidden rounded-full shadow lg:h-60 lg:w-60"
                    >
                        <img
                            :src="user.avatar"
                            class="h-full w-full bg-cover object-cover"
                            alt=""
                            v-if="user.avatar"
                        />
                        <UserCircleIcon
                            v-else
                            class="h-full w-full text-gray-500"
                        />
                    </div>
                </div>
                <div
                    class="no-scrollbar h-full w-full overflow-y-auto px-8 py-2 lg:w-[65%] xl:w-[75%]"
                >
                    <div v-if="loading == 1" class="mt-4">
                        <Spin />
                    </div>
                    <div v-else>
                        <div
                            class="mt-1 flex flex-col items-center lg:mt-0 lg:items-start lg:justify-between xl:flex-row xl:items-center"
                        >
                            <div>
                                <h1
                                    class="text-center text-2xl font-semibold capitalize text-gray-700 lg:text-left lg:text-3xl"
                                >
                                    <span>{{ user.firstname }}</span>
                                    <span v-if="user.type == 'particular'"
                                        >&nbsp;{{ user.lastname }}</span
                                    >
                                </h1>
                                <div
                                    class="mt-2 flex items-center space-x-2 text-sm"
                                >
                                    <h2
                                        class="text-primary-blue"
                                        v-if="!user.hide_email"
                                    >
                                        {{ user.email }}
                                    </h2>
                                    <h2
                                        class="text-gray-400"
                                        v-if="!user.hide_phone"
                                    >
                                        ° {{ detail.phone_number }}
                                    </h2>
                                </div>
                                <div
                                    class="my-2 flex items-center space-x-4 text-sm text-gray-700"
                                >
                                    <button
                                        type="button"
                                        @click="changeTab('subscription')"
                                        class="rounded-full border border-white py-1 px-2 hover:border-primary-blue"
                                        v-if="detail.subscriptions"
                                    >
                                        <span
                                            class="font-bold text-primary-blue"
                                            >{{
                                                detail.subscriptions.length
                                            }}</span
                                        >&nbsp;
                                        <span
                                            v-if="
                                                detail.subscriptions.length <= 1
                                            "
                                            >{{ $tc("subscription", 1) }}</span
                                        >
                                        <span v-else>{{
                                            $tc("subscription", 2)
                                        }}</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="rounded-full border border-white py-1 px-2 hover:border-primary-blue"
                                        @click="changeTab('subscriber')"
                                        v-if="detail.subscribers"
                                    >
                                        <span
                                            class="font-bold text-primary-blue"
                                            >{{
                                                detail.subscribers.length
                                            }}</span
                                        >&nbsp;
                                        <span
                                            v-if="
                                                detail.subscribers.length <= 1
                                            "
                                            >{{ $tc("subscriber", 1) }}</span
                                        >
                                        <span v-else>{{
                                            $tc("subscriber", 2)
                                        }}</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="flex items-center space-x-2 py-1 lg:py-0"
                                v-if="user.id == loginUser.id"
                            >
                                <button
                                    type="button"
                                    @click="changeTab('edit')"
                                    class="flex items-center space-x-2 rounded-xl bg-primary-blue py-2 px-2 text-sm text-white shadow-md lg:px-4"
                                >
                                    <PencilIcon class="h-5 w-5" />
                                    <span class="hidden lg:block"
                                        >{{ $t("edit") }}
                                        {{ $t("profile") }}</span
                                    >
                                </button>
                                <router-link
                                    :to="{
                                        name: 'setting.account',
                                        params: {
                                            slug: loginUser.slug,
                                            id: loginUser.id,
                                        },
                                    }"
                                >
                                    <CogIcon
                                        class="h-8 w-8 text-gray-600 hover:text-primary-blue"
                                    />
                                </router-link>
                            </div>
                            <button
                                v-else-if="isFollow.length == 0"
                                @click="follow(user.id)"
                                type="button"
                                class="mt-2 rounded-xl bg-primary-blue py-2 px-2 text-sm text-white shadow-md lg:mt-0 lg:px-4"
                            >
                                <div
                                    v-if="!loadingFollow"
                                    class="flex items-center space-x-2"
                                >
                                    <UserPlusIcon class="h-5 w-5" />
                                    <span class="hidden lg:block">{{
                                        $t("follow")
                                    }}</span>
                                </div>
                                <span v-else><Spin :size="'small'" /></span>
                            </button>
                            <button
                                v-else
                                @click="unfollow(isFollow[0].id)"
                                type="button"
                                class="mt-2 rounded-xl bg-primary-blue py-2 px-2 text-sm text-white shadow-md lg:mt-0 lg:px-4"
                            >
                                <div
                                    v-if="!loadingFollow"
                                    class="flex items-center space-x-2"
                                >
                                    <UserMinusIcon class="h-5 w-5" />
                                    <span class="hidden lg:block">{{
                                        $t("unfollow")
                                    }}</span>
                                </div>
                                <span v-else><Spin :size="'small'" /> </span>
                            </button>
                        </div>
                        <div
                            class="my-2 mx-auto mb-2 break-words text-sm font-light text-gray-500 lg:h-24 lg:w-full"
                        >
                            {{ detail.presentation }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative flex">
            <button
                type="button"
                @click="scrollLeft()"
                class="block bg-menu p-2 text-white"
            >
                <ChevronLeftIcon class="h-6 w-6" />
            </button>

            <div
                ref="nav"
                class="no-scrollbar flex w-full items-center space-x-2 overflow-auto bg-menu px-5 py-3 transition-all lg:mt-0"
            >
                <button
                    @click="changeTab('profil')"
                    :class="[
                        open.profil
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <IdentificationIcon class="h-5 w-5" />
                    <span class="hidden lg:block">{{ $t("profile") }}</span>
                </button>
                <button
                    @click="changeTab('article')"
                    :class="[
                        open.article
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <NewspaperIcon class="h-5 w-5" />
                    <span class="hidden lg:block">{{ $t("articles") }}</span>
                </button>
                <button
                    @click="changeTab('propau')"
                    :class="[
                        open.propau
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <BookOpenIcon class="h-5 w-5" />
                    <span class="hidden lg:block">{{ $t("propau") }}</span>
                </button>
                <button
                    @click="changeTab('comment')"
                    :class="[
                        open.comment
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <ChatBubbleOvalLeftEllipsisIcon class="h-5 w-5" />
                    <span class="hidden lg:block">{{ $t("comments") }}</span>
                </button>
                <button
                    v-if="user.type != 'particular'"
                    @click="changeTab('job')"
                    :class="[
                        open.job
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <ChatBubbleLeftEllipsisIcon class="h-5 w-5" />
                    <span class="hidden whitespace-nowrap lg:block">{{
                        $t("my-jobs")
                    }}</span>
                </button>
                <button
                    v-if="user.type != 'particular'"
                    @click="changeTab('tender')"
                    :class="[
                        open.tender
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <DocumentTextIcon class="h-5 w-5" />
                    <span class="hidden whitespace-nowrap lg:block"> AO </span>
                </button>
                <button
                    v-if="user.type == 'particular' || user.type == 'admin'"
                    @click="changeTab('ads')"
                    :class="[
                        open.ads
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <MegaphoneIcon class="h-5 w-5" />
                    <span class="hidden whitespace-nowrap lg:block"
                        >{{ $t("ads-s") }} {{ $tc("student", 1) }}</span
                    >
                </button>
                <button
                    @click="changeTab('event')"
                    :class="[
                        open.event
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <CalendarDaysIcon class="h-5 w-5" />
                    <span class="hidden whitespace-nowrap lg:block">
                        {{ $tc("events", 2) }}</span
                    >
                </button>
                <button
                    @click="changeTab('personalBlog')"
                    :class="[
                        open.personalBlog
                            ? 'text-md flex items-center space-x-2 rounded-md bg-primary-blue px-2 py-1 text-white'
                            : 'text-md flex items-center space-x-2 rounded-md px-2 py-1 text-white hover:bg-white/25',
                    ]"
                >
                    <ClipboardIcon class="h-5 w-5" />
                    <span class="hidden whitespace-nowrap lg:block">{{
                        $t("personal-blog")
                    }}</span>
                </button>
            </div>

            <button
                type="button"
                @click="scrollRight()"
                class="block bg-menu p-2 text-white"
            >
                <ChevronRightIcon class="h-6 w-6" />
            </button>
        </div>
        <div v-if="loading == 1" class="p-28">
            <Spin />
        </div>
        <div class="py-8 lg:px-16" v-if="open.profil && loading == 0">
            <Detail
                :user="user"
                :detail="detail"
                :status="status"
                :legalStatuses="legalStatuses"
                :languages="languages"
                :countries="countries"
                :activityAreas="activityAreas"
                :businessSizes="businessSizes"
                :businessTypes="businessTypes"
            />
            <div>
                <button
                    @click="toogleModal()"
                    class="flex cursor-pointer items-center space-x-2 rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-400 hover:border-white hover:bg-yellow-300 hover:text-white"
                >
                    <ExclamationCircleIcon class="h-5 w-5" />
                    <span class="hidden lg:block">{{ $t("report") }}</span>
                </button>
            </div>
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.chat && loading == 0">
            <Chat :user="user" />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.article && loading == 0">
            <Article :user="user" />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.propau && loading == 0">
            <PropAu :user="user" />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.comment && loading == 0">
            <Comment :user="user" />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.job && loading == 0">
            <JobOffer :user="user" />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.tender && loading == 0">
            <Tender :user="user" />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.ads && loading == 0">
            <Ads :user="user" />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.edit && loading == 0">
            <EditProfile
                :user="user"
                :detail="detail"
                :status="status"
                :legalStatuses="legalStatuses"
                :languages="languages"
                :countries="countries"
                :activityAreas="activityAreas"
                :businessSizes="businessSizes"
                :businessTypes="businessTypes"
            />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.event && loading == 0">
            <Demonstration :user="user" />
        </div>
        <div class="py-8 lg:px-16" v-else-if="open.subscriber && loading == 0">
            <Subscriber :subscribers="detail.subscribers" />
        </div>

        <div
            class="py-8 lg:px-16"
            v-else-if="open.subscription && loading == 0"
        >
            <Subscription :subcriptions="detail.subscriptions" />
        </div>
        <div
            id="personal_post"
            class="py-8 lg:px-16"
            v-else-if="open.personalBlog && loading == 0"
        >
            <PersonalBlog :user="user" :post="personalPost" />
        </div>
    </section>
</template>

<script setup>
import { reactive, ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import Report from "@/components/Report.vue";

import PersonalBlog from "@/components/profile/personal_blog/PersonalBlog.vue";
import EditProfile from "@/components/profile/EditProfile.vue";
import Detail from "@/components/profile/Detail.vue";
import Article from "@/components/profile/Article.vue";
import PropAu from "@/components/profile/PropAu.vue";
import Subscriber from "@/components/profile/Subscriber.vue";
import Subscription from "@/components/profile/Subscription.vue";
import Ads from "@/components/profile/Ads.vue";
import JobOffer from "@/components/profile/JobOffer.vue";
import Comment from "@/components/profile/Comment.vue";
import Demonstration from "@/components/profile/Demonstration.vue";

import useUsers from "@/services/userServices.js";
import useFollowers from "@/services/followerServices.js";
import useLanguages from "@/services/languageServices.js";
import useBusinessTypes from "@/services/businessTypeServices.js";
import useBusinessSizes from "@/services/businessSizeServices.js";
import useActivityAreas from "@/services/activityAreaServices.js";
import useLegalStatuses from "@/services/legalStatusServices.js";
import useCountries from "@/services/countryServices.js";
import useStatus from "@/services/statusServices.js";
import {
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    DocumentTextIcon,
} from "@heroicons/vue/24/solid";
import {
    CogIcon,
    ExclamationCircleIcon,
    PlusCircleIcon,
    MegaphoneIcon,
    PencilIcon,
    NewspaperIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ChatBubbleLeftEllipsisIcon,
    BookOpenIcon,
    IdentificationIcon,
    UserCircleIcon,
    UserPlusIcon,
    UserMinusIcon,
    ClipboardIcon,
} from "@heroicons/vue/24/solid";
import Tender from "@/components/profile/Tender.vue";
import Chat from "@/components/profile/Chat.vue";

const props = defineProps({
    slug: {
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
});
const route = useRoute();
const { status, getStatus, errorsStatus } = useStatus();
const { user, getUser } = useUsers();
const { followers, createFollower, destroyFollower, errorsFollower } =
    useFollowers();
const { languages, getLanguages } = useLanguages();
const { businessTypes, getBusinessTypes } = useBusinessTypes();
const { businessSizes, getBusinessSizes } = useBusinessSizes();
const { activityAreas, getActivityAreas } = useActivityAreas();
const { legalStatuses, getLegalStatuses } = useLegalStatuses();
const { countries, getCountries } = useCountries();
const detail = ref([]);
const loginUser = ref("");
loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
const loading = ref(0);
const personalPost = ref(0);
const loadingFollow = ref(false);
const isFollow = ref(false);
const openReport = ref(false);
const nav = ref(null);
const open = reactive({
    profil: true,
    article: false,
    propau: false,
    comment: false,
    job: false,
    ads: false,
    edit: false,
    subscription: false,
    subscriber: false,
    personalBlog: false,
    event: false,
    tender: false,
    chat: false,
});

onMounted(async () => {
    try {
        loading.value = 1;
        setLoginUser();
        await getUser(props.id);
        await getDetail(props.id);
        loading.value = 0;

        await getLanguages();
        await getStatus();
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
        setLoginUser();
        await getUser(currentValue.id);
        await getDetail(currentValue.id);
        loading.value = 0;
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

const getDetail = async (id) => {
    let response = await axios.get("/api/details/" + id, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        },
    });
    detail.value = response.data.data;
};

const setLoginUser = async () => {
    loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
    if (loginUser.value) {
        isFollow.value = loginUser.value.subscriptions.filter(
            (u) => u.subscription == props.id
        );
    }
    if ("redirect" in route.query) {
        if (route.query.redirect == "article") {
            changeTab("article");
        } else if (route.query.redirect == "propau") {
            changeTab("propau");
        } else {
            changeTab("profil");
        }
    } else if ("personal_post" in route.query) {
        personalPost.value = route.query.personal_post;
        changeTab("personalBlog");
    }
};

const follow = async (id) => {
    loadingFollow.value = true;
    await createFollower({ subscriber: loginUser.value.id, subscription: id });
    await setLoginUser();
    await getDetail(props.id);
    loadingFollow.value = false;
};

const unfollow = async (id) => {
    loadingFollow.value = true;
    if (confirm("I you Sure ?")) {
        await destroyFollower(id);
        await setLoginUser();
        await getDetail(props.id);
    }
    loadingFollow.value = false;
};

const changeTab = (type) => {
    switch (type) {
        case "profil":
            open.ads = false;
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.subscription = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.profil = true;
            open.tender = false;
            open.chat = false;
            break;
        case "tender":
            open.ads = false;
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.subscription = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.profil = false;
            open.chat = false;
            open.tender = true;
            break;
        case "article":
            open.ads = false;
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.profil = false;
            open.subscription = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.article = true;
            open.tender = false;
            open.chat = false;
            break;
        case "propau":
            open.ads = false;
            open.job = false;
            open.comment = false;
            open.article = false;
            open.profil = false;
            open.subscription = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.propau = true;
            open.tender = false;
            open.chat = false;
            break;
        case "comment":
            open.ads = false;
            open.job = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.subscription = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.comment = true;
            open.tender = false;
            open.chat = false;
            break;
        case "job":
            open.ads = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.subscription = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.job = true;
            open.tender = false;
            open.chat = false;
            break;
        case "ads":
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.subscription = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.ads = true;
            open.tender = false;
            open.chat = false;
            break;
        case "edit":
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.ads = false;
            open.subscription = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.edit = true;
            open.tender = false;
            open.chat = false;
            break;
        case "subscriber":
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.ads = false;
            open.edit = false;
            open.subscription = false;
            open.personalBlog = false;
            open.event = false;
            open.subscriber = true;
            open.tender = false;
            open.chat = false;
            break;
        case "subscription":
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.ads = false;
            open.edit = false;
            open.subscriber = false;
            open.personalBlog = false;
            open.event = false;
            open.subscription = true;
            open.tender = false;
            open.chat = false;
            break;
        case "personalBlog":
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.ads = false;
            open.edit = false;
            open.subscriber = false;
            open.event = false;
            open.subscription = false;
            open.personalBlog = true;
            open.tender = false;
            open.chat = false;
            break;
        case "event":
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.ads = false;
            open.edit = false;
            open.subscriber = false;
            open.chat = false;
            open.subscription = false;
            open.personalBlog = false;
            open.tender = false;
            open.event = true;
            break;
        case "chat":
            open.job = false;
            open.comment = false;
            open.propau = false;
            open.article = false;
            open.profil = false;
            open.ads = false;
            open.edit = false;
            open.subscriber = false;
            open.chat = true;
            open.subscription = false;
            open.personalBlog = false;
            open.tender = false;
            open.event = false;
            break;
    }
};

async function scrollLeft() {
    nav.value.scrollLeft -= 100;
}
async function scrollRight() {
    nav.value.scrollLeft += 100;
}
</script>
