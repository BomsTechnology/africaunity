<template>
    <div
        :class="[
            open.menu
                ? 'relative mr-64 overflow-x-hidden transition-all duration-1000'
                : 'relative  overflow-x-hidden transition-all duration-1000',
        ]"
    >
        <div
            class="fixed z-40 mt-10 flex items-center justify-center lg:hidden"
        >
            <button
                v-if="!open.menu"
                @click="open.menu = true"
                class="bg-menu p-2 focus:outline-none focus:ring-2"
            >
                <Bars3Icon class="h-6 w-6 text-white" />
            </button>
            <button
                v-if="open.menu"
                @click="open.menu = false"
                class="focus:outline-none focus:ring-2"
            >
                <XMarkIcon class="h-6 w-6 text-white" />
            </button>
        </div>
        <Transition
            enter-active-class="transition duration-1000 "
            enter-from-class="-translate-x-full"
            enter-to-class=" translate-x-0"
            leave-active-class="transition duration-1000  ease-out"
            leave-from-class=" translate-x-0"
            leave-to-class=" -translate-x-full "
        >
            <div
                v-if="open.menu"
                class="no-scrollbar fixed z-30 flex h-full w-full transform flex-col items-start justify-start overflow-y-auto overflow-x-hidden bg-menu transition duration-500 ease-in-out sm:w-64 xl:translate-x-0 xl:rounded-r"
            >
                <div class="flex items-center justify-start space-x-3 p-6">
                    <img src="/img/afrique.png" alt="logo" />
                    <p class="text-2xl leading-6 text-primary-blue">
                        AfricaUnity
                    </p>
                </div>
                <div
                    class="mt-6 flex w-full flex-col items-center justify-start space-y-3 border-b border-gray-600 pl-4 pb-5"
                >
                    <router-link
                        :to="{ name: 'admin.dash' }"
                        class="jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
                    >
                        <HomeIcon class="h-6 w-6" />
                        <p class="text-base leading-4">Dashboard</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.user.index' }"
                        class="jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
                    >
                        <UserGroupIcon class="h-6 w-6" />
                        <p class="text-base leading-4">Users</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.comment.index' }"
                        class="jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
                    >
                        <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6" />
                        <p class="text-base leading-4">Comments</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.other' }"
                        class="jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
                    >
                        <SwatchIcon class="h-6 w-6" />
                        <p class="text-base leading-4">Others</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.reporting' }"
                        class="jusitfy-start flex w-full items-center space-x-6 rounded text-white focus:text-primary-blue focus:outline-none"
                    >
                        <ExclamationCircleIcon class="h-6 w-6" />
                        <p class="text-base leading-4">Reportings</p>
                    </router-link>
                </div>
                <div
                    class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4"
                >
                    <button
                        @click="open.article = !open.article"
                        class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none"
                    >
                        <p
                            class="jusitfy-start flex w-full items-center text-base leading-4"
                        >
                            <NewspaperIcon class="mr-6 h-6 w-6" />
                            Article
                        </p>

                        <ChevronDownIcon
                            v-if="!open.article"
                            class="h-10 w-10"
                        />
                        <ChevronUpIcon v-if="open.article" class="h-10 w-10" />
                    </button>
                    <div
                        v-if="open.article"
                        class="flex w-full flex-col items-start justify-start pb-1 md:w-auto"
                    >
                        <router-link
                            :to="{
                                name: 'admin.post.index',
                                params: { type: 'article' },
                            }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <QueueListIcon class="h-6 w-6" />
                            <p class="text-base leading-4">All Articles</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.continent.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <GlobeEuropeAfricaIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Continent</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.zone.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <MapIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Zone</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.country.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <FlagIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Country</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.ministry.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <BuildingOffice2Icon class="h-6 w-6" />
                            <p class="text-base leading-4">Ministry</p>
                        </router-link>
                    </div>
                </div>
                <div
                    class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4"
                >
                    <button
                        @click="open.propau = !open.propau"
                        class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none"
                    >
                        <p
                            class="jusitfy-start flex w-full items-center text-base leading-4"
                        >
                            <NewspaperIcon class="mr-6 h-6 w-6" />
                            PropAu
                        </p>

                        <ChevronDownIcon
                            v-if="!open.propau"
                            class="h-10 w-10"
                        />
                        <ChevronUpIcon v-if="open.propau" class="h-10 w-10" />
                    </button>
                    <div
                        v-if="open.propau"
                        class="flex w-full flex-col items-start justify-start pb-1 md:w-auto"
                    >
                        <router-link
                            :to="{
                                name: 'admin.post.index',
                                params: { type: 'propau' },
                            }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <QueueListIcon class="h-6 w-6" />
                            <p class="text-base leading-4">All PropAU</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.continent.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <GlobeEuropeAfricaIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Continent</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.zone.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <MapIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Zone</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.country.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <FlagIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Country</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.ministry.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <BuildingOffice2Icon class="h-6 w-6" />
                            <p class="text-base leading-4">Ministry</p>
                        </router-link>
                    </div>
                </div>
                <div
                    class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4"
                >
                    <button
                        @click="open.personalBlog = !open.personalBlog"
                        class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none"
                    >
                        <p
                            class="jusitfy-start flex w-full items-center text-base leading-4"
                        >
                            <ClipboardIcon class="mr-6 h-6 w-6" />
                            <span class="whitespace-nowrap">
                                Personal Blog</span
                            >
                        </p>

                        <ChevronDownIcon
                            v-if="!open.personalBlog"
                            class="h-10 w-10"
                        />
                        <ChevronUpIcon
                            v-if="open.personalBlog"
                            class="h-10 w-10"
                        />
                    </button>
                    <div
                        v-if="open.personalBlog"
                        class="flex w-full flex-col items-start justify-start pb-1 md:w-auto"
                    >
                        <router-link
                            :to="{
                                name: 'admin.personal-post.index',
                            }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <QueueListIcon class="h-6 w-6" />
                            <p class="text-base leading-4">All Post</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.category-personal-blog' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <ChartPieIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Category</p>
                        </router-link>
                    </div>
                </div>
                <div
                    class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4"
                >
                    <button
                        @click="open.event = !open.event"
                        class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none"
                    >
                        <p
                            class="jusitfy-start flex w-full items-center text-base leading-4"
                        >
                            <CalendarDaysIcon class="mr-6 h-6 w-6" />
                            <span class="whitespace-nowrap"> Event</span>
                        </p>

                        <ChevronDownIcon
                            v-if="!open.personalBlog"
                            class="h-10 w-10"
                        />
                        <ChevronUpIcon
                            v-if="open.personalBlog"
                            class="h-10 w-10"
                        />
                    </button>
                    <div
                        v-if="open.event"
                        class="flex w-full flex-col items-start justify-start pb-1 md:w-auto"
                    >
                        <router-link
                            :to="{
                                name: 'admin.event.index',
                            }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <QueueListIcon class="h-6 w-6" />
                            <p class="text-base leading-4">All Event</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.event-type' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <Square3Stack3DIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Type</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.event-mode' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <TicketIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Mode</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.event-niche' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <ClockIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Niche</p>
                        </router-link>
                    </div>
                </div>
                <div
                    class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4"
                >
                    <button
                        @click="open.university = !open.university"
                        class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none"
                    >
                        <p
                            class="jusitfy-start flex w-full items-center text-base leading-4"
                        >
                            <BuildingLibraryIcon class="mr-6 h-6 w-6" />
                            University
                        </p>

                        <ChevronDownIcon
                            v-if="!open.university"
                            class="h-10 w-10"
                        />
                        <ChevronUpIcon
                            v-if="open.university"
                            class="h-10 w-10"
                        />
                    </button>
                    <div
                        v-if="open.university"
                        class="flex w-full flex-col items-start justify-start pb-1 md:w-auto"
                    >
                        <router-link
                            :to="{ name: 'admin.university.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <QueueListIcon class="h-6 w-6" />
                            <p class="text-base leading-4">All Universities</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.continent.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <GlobeEuropeAfricaIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Continent</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.country.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <FlagIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Country</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.city.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <Squares2X2Icon class="h-6 w-6" />
                            <p class="text-base leading-4">City</p>
                        </router-link>
                    </div>
                </div>

                <div
                    class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4"
                >
                    <button
                        @click="open.job = !open.job"
                        class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none"
                    >
                        <p
                            class="jusitfy-start flex w-full items-center text-base leading-4"
                        >
                            <BriefcaseIcon class="mr-6 h-6 w-6" />
                            Job Offer
                        </p>

                        <ChevronDownIcon v-if="!open.job" class="h-10 w-10" />
                        <ChevronUpIcon v-if="open.job" class="h-10 w-10" />
                    </button>
                    <div
                        v-if="open.job"
                        class="flex w-full flex-col items-start justify-start pb-1 md:w-auto"
                    >
                        <router-link
                            :to="{ name: 'admin.jobOffer.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <QueueListIcon class="h-6 w-6" />
                            <p class="text-base leading-4">All Job</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.continent.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <GlobeEuropeAfricaIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Continent</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.zone.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <MapIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Zone</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.country.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <FlagIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Country</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.city.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <Squares2X2Icon class="h-6 w-6" />
                            <p class="text-base leading-4">City</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.currency.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <CurrencyDollarIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Currency</p>
                        </router-link>
                    </div>
                </div>

                <div
                    class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4"
                >
                    <button
                        @click="open.tender = !open.tender"
                        class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none"
                    >
                        <p
                            class="jusitfy-start flex w-full items-center text-base leading-4"
                        >
                            <BriefcaseIcon class="mr-6 h-6 w-6" />
                            Tender
                        </p>

                        <ChevronDownIcon v-if="!open.tender" class="h-10 w-10" />
                        <ChevronUpIcon v-if="open.tender" class="h-10 w-10" />
                    </button>
                    <div
                        v-if="open.tender"
                        class="flex w-full flex-col items-start justify-start pb-1 md:w-auto"
                    >
                        <router-link
                            :to="{ name: 'admin.tender.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <QueueListIcon class="h-6 w-6" />
                            <p class="text-base leading-4">All Tender</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.continent.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <GlobeEuropeAfricaIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Continent</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.zone.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <MapIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Zone</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.country.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <FlagIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Country</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.city.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <Squares2X2Icon class="h-6 w-6" />
                            <p class="text-base leading-4">City</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.currency.index' }"
                            class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                        >
                            <CurrencyDollarIcon class="h-6 w-6" />
                            <p class="text-base leading-4">Currency</p>
                        </router-link>
                    </div>
                </div>

                <div
                    class="relative flex h-full w-full flex-col items-center justify-between pb-6"
                >
                    <div
                        class="flex w-full flex-col items-center justify-start border-b border-gray-600 px-4"
                    >
                        <button
                            @click="open.announcement = !open.announcement"
                            class="flex w-full items-center justify-between space-x-14 py-2 text-left text-white focus:text-primary-blue focus:outline-none"
                        >
                            <p
                                class="jusitfy-start flex w-full items-center text-base leading-4"
                            >
                                <MegaphoneIcon class="mr-6 h-6 w-6" />
                                Ads
                            </p>

                            <ChevronDownIcon
                                v-if="!open.announcement"
                                class="h-10 w-10"
                            />
                            <ChevronUpIcon
                                v-if="open.announcement"
                                class="h-10 w-10"
                            />
                        </button>
                        <div
                            v-if="open.announcement"
                            class="flex w-full flex-col items-start justify-start pb-1 md:w-auto"
                        >
                            <router-link
                                :to="{ name: 'admin.announcement.index' }"
                                class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                            >
                                <QueueListIcon class="h-6 w-6" />
                                <p class="text-base leading-4">
                                    All Announcement
                                </p>
                            </router-link>
                            <router-link
                                :to="{ name: 'admin.university.index' }"
                                class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                            >
                                <BuildingLibraryIcon class="h-6 w-6" />
                                <p class="text-base leading-4">University</p>
                            </router-link>
                            <router-link
                                :to="{ name: 'admin.category.index' }"
                                class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                            >
                                <ChartPieIcon class="h-6 w-6" />
                                <p class="text-base leading-4">Category</p>
                            </router-link>
                            <router-link
                                :to="{
                                    name: 'admin.announcement-comment.index',
                                }"
                                class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                            >
                                <ChatBubbleOvalLeftEllipsisIcon
                                    class="h-6 w-6"
                                />
                                <p class="text-base leading-4">Comments</p>
                            </router-link>
                            <router-link
                                :to="{ name: 'admin.currency.index' }"
                                class="flex w-full items-center justify-start space-x-6 rounded px-3 py-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white md:w-52"
                            >
                                <CurrencyDollarIcon class="h-6 w-6" />
                                <p class="text-base leading-4">Currency</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="">
                        <img src="/img/gno_logo.png" class="h-16" alt="" />
                    </div>
                    <div class="flex w-full items-center justify-between px-6">
                        <div class="flex items-center justify-center space-x-2">
                            <div>
                                <img
                                    v-if="user.avatar"
                                    class="rounded-full"
                                    :src="user.avatar"
                                    :alt="user.firstname"
                                />
                                <UserCircleIcon
                                    v-else
                                    class="h-8 w-8 text-white"
                                />
                            </div>
                            <div
                                class="flex flex-col items-start justify-start"
                            >
                                <p
                                    class="cursor-pointer text-sm leading-5 text-white"
                                >
                                    {{ user.firstname }}
                                    {{ user.lastname }}
                                </p>
                                <p
                                    class="cursor-pointer text-xs leading-3 text-gray-300"
                                >
                                    {{ user.email }}
                                </p>
                            </div>
                        </div>
                        <div>
                            <!-- <CogIcon class="w-6 h-6 text-white" /> -->
                            <ArrowRightOnRectangleIcon
                                v-if="loading == 0"
                                @click="logout()"
                                class="h-6 w-6 cursor-pointer text-white"
                            />
                            <svg
                                v-if="loading == 1"
                                class="mt-1 h-6 w-6 animate-spin cursor-wait text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import {
    XMarkIcon,
    Bars3Icon,
    HomeIcon,
    UserGroupIcon,
    NewspaperIcon,
    ChevronDownIcon,
    QueueListIcon,
    GlobeEuropeAfricaIcon,
    MapIcon,
    UserCircleIcon,
    FlagIcon,
    BuildingOffice2Icon,
    ChevronUpIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    MegaphoneIcon,
    BuildingLibraryIcon,
    Squares2X2Icon,
    CogIcon,
    CurrencyDollarIcon,
    ChartPieIcon,
    BriefcaseIcon,
    SwatchIcon,
    ArrowRightOnRectangleIcon,
    ClipboardIcon,
    CalendarDaysIcon,
    ClockIcon,
    Square3Stack3DIcon,
    TicketIcon,
} from "@heroicons/vue/24/solid";
import axios from "axios";
import { reactive, ref, onMounted } from "vue";
import { ExclamationCircleIcon } from '@heroicons/vue/24/solid';

const user = ref(null);
user.value = JSON.parse(localStorage.user);
const verifAdmin = async () => {
    if (localStorage.token && localStorage.token != "") {

        try {
            let response = await axios.post(
                "/api/verif-admin",
                { id: user.value.id },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );
        } catch (e) {
            if (e.response.status == 401) {
                location.href = "/admin";
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        }
    } else {
        location.href = "/login/admin";
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
    }
};
onMounted(async () => {
    await verifAdmin();
});
const open = reactive({
    menu: true,
    article: false,
    propau: false,
    personalBlog: false,
    announcement: false,
    university: false,
    event: false,
    job: false,
    tender: false,
});
const loading = ref(0);

const logout = async () => {
    try {
        loading.value = 1;
        await axios.post(
            "/api/logout",
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        loading.value = 2;
        location.href = "/";
    } catch (e) {
        loading.value = 0;
        if (e.response.status == 422) {
            for (const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + "\n";
        }
    }
};
</script>

<style scoped>
.a-exact-active {
    @apply bg-gray-50 text-gray-700;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
