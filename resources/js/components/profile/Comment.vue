<script setup>
import useComments from "@/services/commentServices.js";
import useAnnouncementComments from "@/services/announcementCommentServices.js";
import useJobOfferComments from "@/services/jobOfferCommentServices.js";
import useDemonstrationComments from "@/services/demonstrationCommentServices.js";
import usePersonalPostComments from "@/services/personalPostCommentServices.js";
import useTenderComments from "@/services/tenderCommentServices.js";

import { onMounted, ref, computed, reactive } from "vue";
import {
    TrashIcon,
    FaceFrownIcon,
    PlusCircleIcon,
    PencilSquareIcon,
} from "@heroicons/vue/24/solid";
const props = defineProps({
    user: Object,
});

const searchComment = ref("");

const {
    updateTenderComment,
    destroyTenderComment,
    tenderComments,
    getTenderCommentsUser,
} = useTenderComments();
const {
    updateAnnouncementComment,
    destroyAnnouncementComment,
    announcementComments,
    getAnnouncementCommentsUser,
} = useAnnouncementComments();
const {
    updateJobOfferComment,
    destroyJobOfferComment,
    jobOfferComments,
    getJobOfferCommentsUser,
} = useJobOfferComments();
const {
    updatePersonalPostComment,
    destroyPersonalPostComment,
    personalPostComments,
    getPersonalPostCommentsUser,
} = usePersonalPostComments();
const {
    updateDemonstrationComment,
    destroyDemonstrationComment,
    demonstrationComments,
    getDemonstrationCommentsUser,
} = useDemonstrationComments();
const { comments, getCommentsUser, destroyComment, updateComment } =
    useComments();
const loginUser = ref("");
loginUser.value = localStorage.user ? JSON.parse(localStorage.user) : "";
const modifyComment = reactive({
    id: "",
    user_id: "",
    post_id: "",
    announcement_id: "",
    job_offer_id: "",
    demonstration_id: "",
    personal_post_id: "",
    tender_id: "",
    content: "",
});
const loading = ref(0);

onMounted(async function () {
    loading.value = 1;
    await getCommentsUser(props.user.id);
    await getAnnouncementCommentsUser(props.user.id);
    await getJobOfferCommentsUser(props.user.id);
    await getPersonalPostCommentsUser(props.user.id);
    await getDemonstrationCommentsUser(props.user.id);
    await getTenderCommentsUser(props.user.id);
    console.log(tenderComments)
    loading.value = 0;
});

const deleteComment = async (id, type) => {
    const deleteId = [id];
    if (confirm("I you Sure ?")) {
        type == "post"
            ? await destroyComment(deleteId)
            : type == "job"
            ? await destroyJobOfferComment(deleteId)
            : type == "demonstration"
            ? await destroyDemonstrationComment(deleteId)
            : type == "personalPost"
            ? await destroyPersonalPostComment(deleteId)
            : type == "tender"
            ? await destroyTenderComment(deleteId)
            : await destroyAnnouncementComment(deleteId);
        await getCommentsUser(props.user.id);
        await getAnnouncementCommentsUser(props.user.id);
        await getJobOfferCommentsUser(props.user.id);
        await getPersonalPostCommentsUser(props.user.id);
        await getDemonstrationCommentsUser(props.user.id);
        await getTenderCommentsUser(props.user.id);
    }
};

const selectComment = (comment) => {
    modifyComment.id = comment.id;
    modifyComment.content = comment.content;
    modifyComment.user_id = comment.user.id;
    modifyComment.post_id = comment.post ? comment.post.id : "";
    modifyComment.job_offer_id = comment.jobOffer ? comment.jobOffer.id : "";
    modifyComment.demonstration_id = comment.demonstration
        ? comment.demonstration.id
        : "";
    modifyComment.personal_post_id = comment.personalPost
        ? comment.personalPost.id
        : "";
    modifyComment.tender_id = comment.tender ? comment.tender.id : "";
    modifyComment.announcement_id = comment.announcement
        ? comment.announcement.id
        : "";
};

const saveComment = async () => {
    modifyComment.post_id
        ? await updateComment(modifyComment)
        : modifyComment.job_offer_id
        ? await updateJobOfferComment(modifyComment)
        : modifyComment.demonstration_id
        ? await updateDemonstrationComment(modifyComment)
        : modifyComment.personal_post_id
        ? await updatePersonalPostComment(modifyComment)
        : modifyComment.tender_id
        ? await updateTenderComment(modifyComment)
        : await updateAnnouncementComment(modifyComment);

    modifyComment.id = "";
    modifyComment.content = "";
    modifyComment.user_id = "";
    modifyComment.post_id = "";
    modifyComment.announcement_id = "";
    modifyComment.job_offer_id = "";
    modifyComment.demonstration_id = "";
    modifyComment.personal_post_id = "";

    await getCommentsUser(props.user.id);
    await getAnnouncementCommentsUser(props.user.id);
    await getJobOfferCommentsUser(props.user.id);
    await getPersonalPostCommentsUser(props.user.id);
    await getDemonstrationCommentsUser(props.user.id);
    await getTenderCommentsUser(props.user.id);
};

const filteredComment = computed(() => {
    return comments.value
        .concat(announcementComments.value)
        .concat(jobOfferComments.value)
        .concat(demonstrationComments.value)
        .concat(personalPostComments.value)
        .concat(tenderComments.value)
        .filter((comment) => {
            return comment.post
                ? comment.post.title
                      .toLowerCase()
                      .includes(searchComment.value.toLowerCase())
                : comment.jobOffer
                ? comment.jobOffer.title
                      .toLowerCase()
                      .includes(searchComment.value.toLowerCase())
                : comment.demonstration
                ? comment.demonstration.title
                      .toLowerCase()
                      .includes(searchComment.value.toLowerCase())
                : comment.personalPost
                ? comment.personalPost.title
                      .toLowerCase()
                      .includes(searchComment.value.toLowerCase())
                      : comment.tender
                ? comment.tender.title
                      .toLowerCase()
                      .includes(searchComment.value.toLowerCase())
                : comment.announcement.title
                      .toLowerCase()
                      .includes(searchComment.value.toLowerCase());
        });
});
</script>

<template>
    <div>
        <div v-if="loading == 1" class="py-6">
            <Spin />
        </div>
        <div v-else>
            <div class="p-4">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                        <svg
                            class="h-5 w-5 text-gray-500"
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
                        class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="min-w-full table-fixed divide-y divide-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                            >
                                Publication
                            </th>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
                            >
                                Publication Type
                            </th>
                            <th
                                scope="col"
                                class="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
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
                        class="divide-y divide-gray-200 bg-white"
                        v-if="filteredComment.length != 0"
                    >
                        <tr
                            v-for="comment in filteredComment"
                            :key="comment.id"
                            class="hover:bg-gray-100"
                        >
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <router-link
                                    v-if="comment.post"
                                    :to="{
                                        name: 'show.post',
                                        params: {
                                            id: comment.post.id,
                                            slug: comment.post.slug,
                                        },
                                    }"
                                    class="hover:underline"
                                    >{{ comment.post.title }}</router-link
                                >
                                <router-link
                                    v-else-if="comment.jobOffer"
                                    :to="{
                                        name: 'show.job',
                                        params: {
                                            id: comment.jobOffer.id,
                                            slug: comment.jobOffer.slug,
                                        },
                                    }"
                                    class="hover:underline"
                                    >{{ comment.jobOffer.title }}</router-link
                                >
                                <router-link
                                    v-else-if="comment.demonstration"
                                    :to="{
                                        name: 'show.events',
                                        params: {
                                            id: comment.demonstration.id,
                                            slug: comment.demonstration.slug,
                                        },
                                    }"
                                    class="hover:underline"
                                    >{{
                                        comment.demonstration.title
                                    }}</router-link
                                >
                                <router-link
                                    v-else-if="comment.personalPost"
                                    :to="{
                                        name: 'compte',
                                        params: {
                                            id: comment.user.id,
                                            slug: comment.user.slug,
                                        },
                                        query: {
                                            personal_post:
                                                comment.personalPost.id,
                                        },
                                        hash: '#personal_post',
                                    }"
                                    class="hover:underline"
                                    >{{
                                        comment.personalPost.title
                                    }}</router-link
                                >
                                <router-link
                                    v-else-if="comment.tender"
                                    :to="{
                                        name: 'show.tender',
                                        params: {
                                            id: comment.tender.id,
                                            slug: comment.tender.slug,
                                        },
                                    }"
                                    class="hover:underline"
                                    >{{ comment.tender.title }}</router-link
                                >
                                <router-link
                                    v-else
                                    :to="{
                                        name: 'show.ads',
                                        params: {
                                            id: comment.announcement.id,
                                            slug: comment.announcement.slug,
                                        },
                                    }"
                                    class="hover:underline"
                                    >{{
                                        comment.announcement.title
                                    }}</router-link
                                >
                            </td>
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <span v-if="comment.post"> Post </span>
                                <span v-else-if="comment.jobOffer"> Job </span>
                                <span v-else-if="comment.demonstration">
                                    Event
                                </span>
                                <span v-else-if="comment.personalPost">
                                    Personal Post
                                </span>
                                <span v-else-if="comment.tender"> Tender </span>
                                <span v-else> Ads </span>
                            </td>
                            <td
                                class="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"
                            >
                                <span
                                    v-if="
                                        modifyComment.id == '' ||
                                        modifyComment.id != comment.id
                                    "
                                >
                                    <span>{{
                                        comment.content.length <= 50
                                            ? comment.content
                                            : comment.content.substring(0, 49) +
                                              "..."
                                    }}</span>
                                </span>
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
                                        class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                                    >
                                    </textarea>
                                    <div class="mt-6 flex justify-end">
                                        <button
                                            type="submit"
                                            class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                                        >
                                            {{ $t("save") }}
                                        </button>
                                    </div>
                                </form>
                            </td>
                            <td
                                v-if="user.id == loginUser.id"
                                class="whitespace-nowrap py-4 px-6 text-right text-sm font-medium"
                            >
                                <div class="flex">
                                    <button
                                        @click="selectComment(comment)"
                                        class="text-primary-blue hover:underline"
                                    >
                                        <PencilSquareIcon
                                            class="h-5 w-5 cursor-pointer text-blue-400 hover:text-blue-700"
                                        />
                                    </button>
                                    <button
                                        @click="
                                            deleteComment(
                                                comment.id,
                                                comment.post
                                                    ? 'post'
                                                    : comment.jobOffer
                                                    ? 'job'
                                                    : comment.demonstration
                                                    ? 'demonstration'
                                                    : comment.personalPost
                                                    ? 'personalPost'
                                                    : comment.tender
                                                    ? 'tender'
                                                    : 'ads'
                                            )
                                        "
                                        class="ml-3 text-red-600 hover:underline"
                                    >
                                        <TrashIcon
                                            class="h-5 w-5 cursor-pointer text-red-400 hover:text-red-700"
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody class="divide-y divide-gray-200 bg-white" v-else>
                        <tr class="hover:bg-gray-100">
                            <td
                                colspan="5"
                                class="whitespace-nowrap py-4 px-6 text-center text-xl font-medium text-gray-900"
                            >
                                <NoContent />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
