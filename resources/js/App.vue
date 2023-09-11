<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const currentRoute = ref("home");
onMounted(async () => {
    currentRoute.value = route.name;
});
watch(route, (nR, oR) => {
    currentRoute.value = nR.name;
});
</script>

<template>
    <div class="flex h-full">
        <div class="h-full">
            <router-view name="sidebar"></router-view>
        </div>

        <div class="h-full w-full">
            <div>
                <router-view name="header"></router-view>
            </div>
            <!-- <div class="w-full overflow-x-auto"> -->
            <div>
                <router-view v-slot="{ Component, route }">
                    <template v-if="Component">
                        <KeepAlive>
                            <Suspense>
                                <Transition
                                    enter-active-class="transition duration-1000"
                                    enter-from-class="opacity-0 "
                                    enter-to-class="opacity-1"
                                    leave-active-class="transition duration-500 "
                                    leave-from-class="opacity-1 "
                                    leave-to-class="opacity-0 "
                                >
                                    <div
                                        :key="route.name"
                                        class="h-full w-full"
                                    >
                                        <component :is="Component" />
                                    </div>
                                </Transition>
                                <template #fallback>
                                    <div class="h-screen bg-red-50 text-center">
                                        Loading...
                                    </div>
                                </template>
                            </Suspense>
                        </KeepAlive>
                    </template>
                </router-view>
                <div class="fixed inset-x-0 bottom-0 z-50 pb-2 md:hidden">
                    <div class="flex justify-center">
                        <button
                            class="download-app rounded bg-primary-blue px-2 py-1 text-white shadow-xl"
                        >
                            Télécharger AfricaUnity
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <router-view name="footer"></router-view>
            </div>
        </div>
    </div>
</template>
