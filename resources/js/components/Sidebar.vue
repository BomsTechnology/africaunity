<template>
<div class="min-h-screen">
    <div
        class="rounded-r bg-menu xl:hidden flex fixed xl:relative justify-between  w-full p-6 items-center z-40"
    >
        <div class="xl:flex hidden justify-between items-center space-x-3">
            <img src="/img/afrique.png" alt="logo" />
            <p class="text-2xl xl leading-6 text-primary-blue">AfricaUnity</p>
        </div>
        <div class="flex justify-center items-center">
            <button
                v-if="!open.menu"
                @click="open.menu = true"
                class="focus:outline-none focus:ring-2"
            >
                <MenuIcon class="w-6 h-6 text-white" />
            </button>
            <button
                v-if="open.menu"
                @click="open.menu = false"
                class="focus:outline-none focus:ring-2"
            >
                <XIcon class="w-6 h-6 text-white" />
            </button>
        </div>
    </div>
    <div
        v-if="open.menu"
        class="xl:rounded-r xl:mt-0 mt-[74px] transform xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start h-full w-full sm:w-64 bg-menu flex-col z-30"
    >
        <div class="hidden xl:flex justify-start p-6 items-center space-x-3">
            <img src="/img/afrique.png" alt="logo" />
            <p class="text-2xl leading-6 text-primary-blue">AfricaUnity</p>
        </div>
        <div
            class="mt-6 flex flex-col justify-start items-center pl-4 w-full border-gray-600 border-b space-y-3 pb-5"
        >
            <button
                class="flex jusitfy-start items-center space-x-6 w-full focus:outline-none focus:text-primary-blue text-white rounded"
            >
                <HomeIcon class="w-6 h-6" />
                <p class="text-base leading-4">Dashboard</p>
            </button>
            <button
                class="flex jusitfy-start items-center w-full space-x-6 focus:outline-none text-white focus:text-primary-blue rounded"
            >
                <UserGroupIcon class="w-6 h-6" />
                <p class="text-base leading-4">Users</p>
            </button>
            <button
                class="flex jusitfy-start items-center w-full space-x-6 focus:outline-none text-white focus:text-primary-blue rounded"
            >
                <ChatIcon class="w-6 h-6" />
                <p class="text-base leading-4">Comments</p>
            </button>
        </div>
        <div
            class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
        >
            <button
                @click="open.article = !open.article"
                class="focus:outline-none focus:text-primary-blue text-left text-white flex justify-between items-center w-full py-2 space-x-14"
            >
                <p
                    class="text-base leading-4 flex jusitfy-start items-center w-full"
                >
                    <NewspaperIcon class="w-6 h-6 mr-6" />
                    Article
                </p>

                <ChevronDownIcon v-if="!open.article" class="w-10 h-10" />
                <ChevronUpIcon v-if="open.article" class="w-10 h-10" />
            </button>
            <div
                v-if="open.article"
                class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
            >
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <TableIcon class="w-6 h-6" />
                    <p class="text-base leading-4">All Articles</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <GlobeIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Continent</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <MapIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Zoned</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <FlagIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Country</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <OfficeBuildingIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Ministry</p>
                </button>
            </div>
        </div>
        <div
            class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
        >
            <button
                @click="open.propau = !open.propau"
                class="focus:outline-none focus:text-primary-blue text-left text-white flex justify-between items-center w-full py-2 space-x-14"
            >
                <p
                    class="text-base leading-4 flex jusitfy-start items-center w-full"
                >
                    <NewspaperIcon class="w-6 h-6 mr-6" />
                    PropAu
                </p>

                <ChevronDownIcon v-if="!open.propau" class="w-10 h-10" />
                <ChevronUpIcon v-if="open.propau" class="w-10 h-10" />
            </button>
            <div
                v-if="open.propau"
                class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
            >
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <TableIcon class="w-6 h-6" />
                    <p class="text-base leading-4">All PropAU</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <GlobeIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Continent</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <MapIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Zoned</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <FlagIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Country</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <OfficeBuildingIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Ministry</p>
                </button>
            </div>
        </div>
        <div
            class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
        >
            <button
                @click="open.university = !open.university"
                class="focus:outline-none focus:text-primary-blue text-left text-white flex justify-between items-center w-full py-2 space-x-14"
            >
                <p
                    class="text-base leading-4 flex jusitfy-start items-center w-full"
                >
                    <LibraryIcon class="w-6 h-6 mr-6" />
                    University
                </p>

                <ChevronDownIcon v-if="!open.university" class="w-10 h-10" />
                <ChevronUpIcon v-if="open.university" class="w-10 h-10" />
            </button>
            <div
                v-if="open.university"
                class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
            >
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <TableIcon class="w-6 h-6" />
                    <p class="text-base leading-4">All Universities</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <GlobeIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Continent</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <FlagIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Country</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <TemplateIcon class="w-6 h-6" />
                    <p class="text-base leading-4">City</p>
                </button>
            </div>
        </div>
        <div
            class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
        >
            <button
                @click="open.job = !open.job"
                class="focus:outline-none focus:text-primary-blue text-left text-white flex justify-between items-center w-full py-2 space-x-14"
            >
                <p
                    class="text-base leading-4 flex jusitfy-start items-center w-full"
                >
                    <BriefcaseIcon class="w-6 h-6 mr-6" />
                    Job Offer
                </p>

                <ChevronDownIcon v-if="!open.job" class="w-10 h-10" />
                <ChevronUpIcon v-if="open.job" class="w-10 h-10" />
            </button>
            <div
                v-if="open.job"
                class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
            >
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <TableIcon class="w-6 h-6" />
                    <p class="text-base leading-4">All Job</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <GlobeIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Continent</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <MapIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Zoned</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <FlagIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Country</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <TemplateIcon class="w-6 h-6" />
                    <p class="text-base leading-4">City</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <CurrencyDollarIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Currency</p>
                </button>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <ColorSwatchIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Other Tools</p>
                </button>
            </div>
        </div>
        <div
            class="flex flex-col justify-between items-center h-full pb-6 w-full space-y-32"
        >
            <div
                class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
            >
                <button
                    @click="open.announcement = !open.announcement"
                    class="focus:outline-none focus:text-primary-blue text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                >
                    <p
                        class="text-base leading-4 flex jusitfy-start items-center w-full"
                    >
                        <SpeakerphoneIcon class="w-6 h-6 mr-6" />
                        Ads
                    </p>

                    <ChevronDownIcon
                        v-if="!open.announcement"
                        class="w-10 h-10"
                    />
                    <ChevronUpIcon v-if="open.announcement" class="w-10 h-10" />
                </button>
                <div
                    v-if="open.announcement"
                    class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
                >
                    <button
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <TableIcon class="w-6 h-6" />
                        <p class="text-base leading-4">All Announcement</p>
                    </button>
                    <button
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <LibraryIcon class="w-6 h-6" />
                        <p class="text-base leading-4">University</p>
                    </button>
                    <button
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <ChartPieIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Category</p>
                    </button>
                    <button
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <CurrencyDollarIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Currency</p>
                    </button>
                </div>
            </div>
            <div class="flex justify-between px-6 items-center w-full">
                <div class="flex justify-center items-center space-x-2">
                    <div>
                        <img
                            class="rounded-full"
                            src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                            alt="avatar"
                        />
                    </div>
                    <div class="flex justify-start flex-col items-start">
                        <p class="cursor-pointer text-sm leading-5 text-white">
                            Alexis Enache
                        </p>
                        <p
                            class="cursor-pointer text-xs leading-3 text-gray-300"
                        >
                            alexis81@gmail.com
                        </p>
                    </div>
                </div>
                <CogIcon class="w-6 h-6 text-white" />
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import {
    XIcon,
    MenuIcon,
    HomeIcon,
    UserGroupIcon,
    NewspaperIcon,
    ChevronDownIcon,
    TableIcon,
    GlobeIcon,
    MapIcon,
    FlagIcon,
    OfficeBuildingIcon,
    ChevronUpIcon,
    ChatIcon,
    SpeakerphoneIcon,
    LibraryIcon,
    TemplateIcon,
    CogIcon,
    CurrencyDollarIcon,
    ChartPieIcon,
    BriefcaseIcon,
    ColorSwatchIcon,
} from "@heroicons/vue/solid";
import { reactive, ref, onMounted } from "vue";
export default {
    components: {
        XIcon,
        MenuIcon,
        HomeIcon,
        UserGroupIcon,
        NewspaperIcon,
        ChevronDownIcon,
        TableIcon,
        GlobeIcon,
        MapIcon,
        FlagIcon,
        OfficeBuildingIcon,
        ChevronUpIcon,
        ChatIcon,
        SpeakerphoneIcon,
        LibraryIcon,
        TemplateIcon,
        CogIcon,
        CurrencyDollarIcon,
        ChartPieIcon,
        BriefcaseIcon,
        ColorSwatchIcon,
    },
    setup() {
        const open = reactive({
            menu: true,
            article: false,
            propau: false,
            announcement: false,
            university: false,
            job: false,
        });

        return {
            open,
        };
    },
};
</script>
