<template>
    <div class="w-full z-0 bg-white">
        <h1 class="text-white px-2 py-1 bg-primary-blue inline-block">
            {{ $t("filter-article") }}
        </h1>
        <div class="border-t-2 space-y-2 border-primary-blue text-md p-4">
            <div>
                <label class="text-gray-500" for="username">{{
                    $t("language")
                }}</label>
                <select
                    v-model="lang"
                    class="form-select px-3 py-2 w-full mt-2  border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                >
                    <option value="fr">{{ $t("fr") }}</option>
                    <option value="en">{{ $t("en") }}</option>
                    <option value="es">{{ $t("es") }}</option>
                    <option value="pt">{{ $t("pt") }}</option>
                </select>
            </div>
            <div>
                <label class="text-gray-500">{{ $t("key-words") }}</label>
                <input
                    type="text"
                    :placeholder="$t('key-words')"
                    class="form-input px-3 py-2 w-full mt-2 border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                />
            </div>
            <div>
                <label class="text-gray-500">{{ $t("continent") }}</label>
                <select
                    class="form-select px-3 py-2 w-full mt-2 border-gray-300  focus:ring-primary-blue focus:border-primary-blue block"
                >
                    <option value="*">All {{ $t("continent") }}</option>
                </select>
            </div>
            <div>
                <label class="text-gray-500">{{ $t("country") }}</label>
                <select
                    class="form-select px-3 py-2 w-full mt-2 border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                >
                    <option value="*">All {{ $t("country") }}</option>
                </select>
            </div>
            <div>
                <label class="text-gray-500">{{ $t("ministry") }}</label>
                <select
                    class="form-select px-3 py-2 w-full mt-2  border-gray-300 focus:ring-primary-blue focus:border-primary-blue block"
                >
                    <option value="*">All {{ $t("ministry") }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lang: "",
        };
    },
    setup() {},
    computed: {},
    mounted() {
        this.lang = localStorage.lang ? localStorage.lang : this.$i18n.locale;
    },
};
</script>
