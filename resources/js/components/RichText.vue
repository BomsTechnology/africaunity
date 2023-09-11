<template>
    <div class="w-full flex justify-center">
        <textarea
            required
            type="text"
            ref="textarea"
            id="pt"
            class="h-32 !w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"
        >
        </textarea>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String],
    },
});

const emit = defineEmits(["update:modelValue"]);

const textarea = ref("");
onMounted(async ()  => {
    textarea.value.value = props.modelValue;
     sceditor.create(textarea.value, {
            format: "xhtml",
            style: "https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",
            height: 400,
            toolbarExclude:
                "indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",
            icons: "material"
        });

    var instance = sceditor.instance(textarea.value);
    instance.bind('valuechanged', function(e) {
        emit("update:modelValue", `${instance.val()}`);
    });
    instance.bind('keyup', function(e) {
        emit("update:modelValue", `${instance.val()}`);
    });
    instance.bind('selectionchanged', function(e) {
        emit("update:modelValue", `${instance.val()}`);
    });
});

watch(props, async (newProps, oldProps)  => {
    textarea.value.value = newProps.modelValue;
});

</script>

<style>
.sceditor-container {
    width: 100% !important;
}
</style>
