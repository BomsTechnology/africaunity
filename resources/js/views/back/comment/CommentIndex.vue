<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div
                class=" w-full z-0 h-full p-4"
            >
                <div class="px-8 py-5 bg-white shadow-lg flex justify-between">
                    <h1 class="text-4xl text-primary-blue font-bold">
                        Comment
                    </h1>
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
                            class="inline-block min-w-full align-middle dark:bg-gray-800"
                        >
                            <div class="p-4">
                                <label for="table-search" class="sr-only"
                                    >Search</label
                                >
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
                                        v-model="searchKey"
                                        type="text"
                                        id="table-search"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-blue focus:border-primary-blue block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search for items"
                                    />
                                </div>
                            </div>
                            <Error v-if="errors != ''">{{ errors }}</Error>
                            <div class="overflow-hidden">
                                <table
                                    class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                                >
                                    <thead class="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                User
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Post
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Comment
                                            </th>
                                            <th scope="col" class="p-4">
                                                <span class="sr-only"
                                                    >Edit</span
                                                >
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
                                                {{ comment.user.firstname }}
                                            </td>
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
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </td>
                                <td
                                    class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <div class="flex">
                                        <button
                                            @click="selectComment(comment)"
                                            class="text-primary-blue dark:text-blue-500 hover:underline"
                                            >
                                            Edit
                                            </button
                                        >
                                        <button
                                            @click="deleteComment(comment.id)"
                                            class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                            >
                                                Delete
                                            </button
                                        >
                                    </div>
                                </td>
                                        </tr>
                                    </tbody>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                        v-else-if="loading == 1"
                                    >
                                        <tr
                                            
                                            class="hover:bg-gray-100 dark:hover:bg-gray-700 "
                                        >
                                            <td
                                                colspan="5"
                                                class=" text-sm w-full font-medium border text-gray-900 whitespace-nowrap  p-16 dark:text-white"
                                            >
                                                <svg class="animate-spin h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
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
                                                NO COMMENT
                                                </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import Sidebar from "../../../components/Sidebar.vue";
import { PlusCircleIcon } from "@heroicons/vue/solid";
import useComments from "../../../services/commentServices.js";
import Error from "../../../components/Error.vue";
export default {
    components: {
        PlusCircleIcon,
        Sidebar,
        Error
    },
    setup() {
        const { comments, getComments, destroyComment, updateComment, loading, errors } =
            useComments();
        const searchKey = ref("");

        onMounted(getComments());

        const deleteComment = async (id) => {
            if(confirm("I you Sure ?")){
                await destroyComment(id)
                if(errors.value == ''){
                    await getComments();
                }
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
            await getComments();
        }

        return {
            comments,
            deleteComment,
            loading,
            errors,
            searchKey,
            modifyComment,
            saveComment,
            selectComment
        };
    },

    computed: {
        filteredComment() {
            return this.comments.filter((comment) => {
                return comment.user.firstname
                    .toLowerCase()
                    .includes(this.searchKey.toLowerCase());
            });
        },
    },
};
</script>
