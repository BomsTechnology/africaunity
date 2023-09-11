<script setup>
import { reactive, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import PersonalBlogCreate from "./PersonalBlogCreate.vue";
import PersonalBlogIndex from "./PersonalBlogIndex.vue";
import PersonalBlogEdit from "./PersonalBlogEdit.vue";
import PersonalBlogSingle from "./PersonalBlogSingle.vue";

const props = defineProps({
    user: Object,
    post: [String, Number],
});
const router = useRouter();
const currentPost = ref(0);
const show = reactive({
    index: true,
    create: false,
    edit: false,
    single: false,
});

onMounted(async function () {
    if (props.post != 0 && props.post != 'create') {
        currentPost.value = props.post;
        changeView("single");
    }else if(props.post === 'create'){
        changeView("create");
    }
});

watch(props, async function (newProps, oldProps) {
    if (newProps.post != 0 && newProps.post != 'create') {
        currentPost.value = newProps.post;
        changeView("single");
    }else if(newProps.post === 'create'){
        changeView("create");
    }
});

async function changeView(view) {
    switch (view) {
        case "create":
            show.index = false;
            show.edit = false;
            show.single = false;
            show.create = true;
            currentPost.value = 0;
            break;
        case "edit":
            show.create = false;
            show.index = false;
            show.single = false;
            show.edit = true;
            break;
        case "index":
            show.edit = false;
            show.create = false;
            show.single = false;
            show.index = true;
            currentPost.value = 0;
            break;
        case "single":
            show.edit = false;
            show.create = false;
            show.index = false;
            show.single = true;
            break;
    }
}
</script>

<template>
    <div>
        <PersonalBlogIndex
            v-model="currentPost"
            v-if="show.index"
            :user="user"
            @create="changeView('create')"
            @edit="changeView('edit')"
            @single="changeView('single')"
        />
        <PersonalBlogCreate
            v-else-if="show.create"
            :user="user"
            @back="changeView('index')"
        />
        <PersonalBlogEdit
            v-else-if="show.edit"
            :user="user"
            :id="currentPost"
            @back="changeView('index')"
        />
        <PersonalBlogSingle
            v-else="currentPost != 0 && show.single"
            :id="currentPost"
            @back="changeView('index')"
        />
    </div>
</template>
