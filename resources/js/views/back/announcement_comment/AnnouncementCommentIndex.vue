<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 h-full w-full p-4">
            <div class="flex justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold text-primary-blue">Comment</h1>
                <!-- <router-link
                        :to="{ name: 'admin.comment.create' }"
                        class="flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add Comment</p>
                    </router-link> -->
            </div>

            <div class="flex flex-col bg-white pt-8">
                <div class="overflow-x-auto shadow-lg">
                    <div
                        class="dark:bg-gray-800 inline-block min-w-full align-middle"
                    >
                        <div class="items-center justify-between p-4 lg:flex">
                            <div class="relative mt-1">
                                <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                >
                                    <svg
                                        class="dark:text-gray-400 h-5 w-5 text-gray-500"
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
                                    v-model="searchKey"
                                    type="text"
                                    id="table-search"
                                    class="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                                    placeholder="Search for items"
                                />
                            </div>
                            <div class="">
                                <button
                                    type="button"
                                    title="delete"
                                    @click="deleteComments()"
                                    class="flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"
                                >
                                    <TrashIcon class="h-6 w-6" />
                                    <span
                                        class="hidden text-sm font-thin lg:block"
                                        >Delete</span
                                    >
                                </button>
                            </div>
                        </div>
                        <Error v-if="errorsCmtAds != ''">{{
                            errorsCmtAds
                        }}</Error>
                        <EasyDataTable
                            v-model:items-selected="itemsSelected"
                            :headers="headers"
                            :items="announcementComments"
                            alternating
                            show-index
                            buttons-pagination
                            :loading="loading"
                        >
                            <template #item-announcement.title="item">
                                <router-link
                                    :to="{
                                        name: 'show.ads',
                                        params: {
                                            id: item.announcement.id,
                                            slug: item.announcement.slug,
                                        },
                                    }"
                                    class="hover:underline"
                                >
                                    {{
                                        item.announcement.title <= 50
                                            ? item.announcement.title
                                            : item.announcement.title.substring(
                                                  0,
                                                  49
                                              ) + "..."
                                    }}
                                </router-link>
                            </template>
                            <template #item-content="item">
                                <span
                                    v-if="
                                        modifyComment.id == '' ||
                                        modifyComment.id != item.id
                                    "
                                >
                                    {{
                                        item.content <= 50
                                            ? item.content
                                            : item.content.substring(0, 49) +
                                              "..."
                                    }}</span
                                >
                                <form
                                    v-if="
                                        modifyComment.id != '' &&
                                        modifyComment.id == item.id
                                    "
                                    @submit.prevent="saveComment()"
                                >
                                    <textarea
                                        required
                                        v-model="modifyComment.content"
                                        type="text"
                                        id="pt"
                                        class="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
                                    >
                                    </textarea>
                                    <div class="mt-6 flex justify-end">
                                        <button
                                            type="submit"
                                            class="rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </template>
                            <template #item-id="item">
                                <div>
                                    <button
                                        @click="selectComment(item)"
                                        type="button"
                                        class="dark:text-blue-500 text-primary-blue hover:underline"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import useAnnouncementComments from "@/services/announcementCommentServices.js";
import Error from "@/components/Error.vue";
import { TrashIcon } from "@heroicons/vue/24/solid";
const itemsSelected = ref([]);
const {
    loading,
    errorsCmtAds,

    announcementComments,
    getAnnouncementComments,
    destroyAnnouncementComment,
    updateAnnouncementComment,
} = useAnnouncementComments();
const searchKey = ref("");

onMounted(async () => {
    await getAnnouncementComments();
});

const deleteComments = async () => {
    if (itemsSelected.value.length != 0) {
        const deleteIds = ref([]);
        itemsSelected.value.forEach((d) => {
            deleteIds.value.push(d.id);
        });
        if (confirm("I you Sure ?")) {
            await destroyAnnouncementComment(deleteIds.value);
            if (errorsCmtAds.value == "") {
                await getAnnouncementComments();
                itemsSelected.value = [];
            }
        }
    }
};

const modifyComment = reactive({
    id: "",
    user_id: "",
    announcement_id: "",
    content: "",
});

const selectComment = (comment) => {
    modifyComment.id = comment.id;
    modifyComment.content = comment.content;
    modifyComment.user_id = comment.user.id;
    modifyComment.announcement_id = comment.announcement.id;
};

const saveComment = async () => {
    await updateAnnouncementComment(modifyComment);
    modifyComment.id = "";
    modifyComment.content = "";
    modifyComment.user_id = "";
    modifyComment.announcement_id = "";
    await getAnnouncementComments();
};

const headers = [
    { text: "User", value: "user.firstname" },
    { text: "Post", value: "announcement.title" },
    { text: "Comment", value: "content" },
    { text: "ACTION", value: "id" },
];
</script>
