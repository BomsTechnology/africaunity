<script setup>
import {
    UserGroupIcon,
    BuildingLibraryIcon,
    NewspaperIcon,
    BriefcaseIcon,
    MegaphoneIcon,
} from "@heroicons/vue/24/solid";
</script>
<template>
    <div class="relative h-screen w-full bg-white p-4 shadow-lg xl:mt-0 xl:p-4">
        <h1 class="text-3xl font-bold text-primary-blue">Dashboard</h1>
        <div class="flex h-full flex-col space-y-4">
            <div class="mt-4 grid grid-cols-2 gap-8 lg:grid-cols-3">
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-blue-500 shadow"
                >
                    <div><UserGroupIcon class="h-12 w-12" /></div>
                    <div class="text-center text-2xl font-bold">
                        <h2></h2>
                        <h1>Users</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 shadow"
                >
                    <div><NewspaperIcon class="h-12 w-12" /></div>
                    <div class="text-center text-2xl font-bold">
                        <h2></h2>
                        <h1>Articles</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-emerald-500 shadow"
                >
                    <div><NewspaperIcon class="h-12 w-12" /></div>
                    <div class="text-center text-2xl font-bold">
                        <h2></h2>
                        <h1>PropAu</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-amber-500 shadow"
                >
                    <div><BuildingLibraryIcon class="h-12 w-12" /></div>
                    <div class="text-center text-2xl font-bold">
                        <h2></h2>
                        <h1>Universities</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-pink-500 shadow"
                >
                    <div><MegaphoneIcon class="h-12 w-12" /></div>
                    <div class="text-center text-2xl font-bold">
                        <h2></h2>
                        <h1>Ads</h1>
                    </div>
                </div>
                <div
                    class="flex h-36 items-center justify-center space-x-6 rounded-lg bg-white p-4 text-amber-500 shadow"
                >
                    <div><BriefcaseIcon class="h-12 w-12" /></div>
                    <div class="text-center text-2xl font-bold">
                        <h2></h2>
                        <h1>Job Offer</h1>
                    </div>
                </div>
            </div>
            <div
                class="h-full grow space-y-8 py-8 lg:flex lg:space-x-8 lg:space-y-0"
            >
                <div class="h-full w-full rounded-lg bg-white p-2 shadow-lg">
                    <h1 class="text-2xl font-bold underline">
                        Utilisateurs Récents
                    </h1>
                    <div class="h-full overflow-y-auto"></div>
                </div>
                <div class="h-full w-full rounded-lg bg-white p-2 shadow-lg">
                    <h1 class="text-2xl font-bold underline">
                        Publications Récentes
                    </h1>
                    <div class="h-full overflow-y-auto"></div>
                </div>
            </div>
        </div>
    </div>
</template>
