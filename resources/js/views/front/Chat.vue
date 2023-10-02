<template>
    <div class="mx-auto w-full bg-white p-4 lg:px-20 xl:w-[90%]">
        <StartConversation
            :open="openModal"
            :toogleModal="toogleModal"
            :conversationSelect="startConversation"
        />
        <AddConversationToFolder
            :open="openAddConvToFolderModal"
            :toogleModal="toogleAddConvToFolderModal"
            :folders="folders"
            :conversation="selectedConversation"
            @conversationAdded="conversationAdded"
        />
        <CreateConversationFolder
            :open="openAddFolderModal"
            :toogleModal="toogleAddFolderModal"
            @folderCreated="folderCreated"
        />
        <Error v-if="errors != ''">{{ errors }}</Error>
        <section class="relative h-full w-full overflow-x-auto sm:rounded-lg">
            <div
                class="relative flex h-[500px] w-full rounded-lg bg-white shadow-lg md:h-[700px]"
            >
                <!-- start  mobile button change view -->
                <button
                    @click="changeView('conversation')"
                    type="button"
                    :class="[
                        open.conversation
                            ? ' border-primary-blue bg-primary-blue '
                            : '   border-primary-blue bg-white  text-primary-blue ',
                    ]"
                    class="absolute left-0 top-0 z-10 rounded-full border p-2 text-white shadow lg:hidden"
                >
                    <ChatBubbleLeftRightIcon class="h-5 w-5" />
                </button>
                <!-- end  mobile button change view -->

                <!-- start conversation mobile view -->
                <div v-if="open.conversation" class="w-full py-4">
                    <div class="relative mx-2">
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <MagnifyingGlassIcon
                                class="h-5 w-5 text-gray-500"
                            />
                        </div>
                        <input
                            type="text"
                            v-model="search"
                            class="block w-full border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                            placeholder="Rechercher..."
                            required
                        />
                    </div>
                    <button
                        type="button"
                        @click="toogleModal"
                        class="absolute bottom-10 right-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-blue p-2 text-white shadow-lg"
                    >
                        <PlusIcon class="h-10 w-10" />
                    </button>
                    <div class="mt-2 w-full px-2 py-2">
                        <div
                            class="no-scrollbar overflow-x-auto overflow-y-hidden"
                        >
                            <div
                                class="content items-scretch flex justify-start border-b"
                            >
                                <button
                                    type="button"
                                    @click="
                                        () => {
                                            selectedConversationList =
                                                conversations;
                                            selectedFolder = null;
                                        }
                                    "
                                    class="flex-shrink-0 cursor-pointer rounded-t-md py-2 px-4 text-center font-bold"
                                    :class="[
                                        !selectedFolder
                                            ? 'border-b-2 border-primary-blue text-primary-blue hover:bg-blue-100'
                                            : 'border-gray-500 text-gray-500 hover:bg-gray-50',
                                    ]"
                                >
                                    <span>Tous</span>
                                </button>
                                <button
                                    type="button"
                                    v-for="folder in folders"
                                    :key="folder.id"
                                    @click="selectFolder(folder)"
                                    class="flex-shrink-0 cursor-pointer rounded-t-md py-2 px-4 text-center font-bold"
                                    :class="[
                                        selectedFolder &&
                                        selectedFolder.id == folder.id
                                            ? 'border-b-2 border-primary-blue text-primary-blue hover:bg-blue-100'
                                            : 'border-gray-500 text-gray-500 hover:bg-gray-50',
                                    ]"
                                >
                                    <span>{{ folder.name }}</span>
                                </button>
                                <div
                                    class="flex flex-shrink-0 items-center justify-center"
                                >
                                    <button
                                        type="button"
                                        @click="toogleAddFolderModal"
                                        class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-primary-blue p-0.5 text-white shadow-lg"
                                    >
                                        <PlusIcon class="h-full w-full" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grow overflow-y-auto">
                        <div
                            v-if="filteredConversation.length != []"
                            v-for="(
                                conversation, index
                            ) in filteredConversation"
                            :key="conversation.id"
                            @click="selectConversation(conversation)"
                            :class="[
                                selectedConversation &&
                                selectedConversation.id == conversation.id
                                    ? 'bg-primary-blue text-white'
                                    : 'text-gray-800 hover:bg-gray-100',
                            ]"
                        >
                            <div
                                v-if="conversation.type == 'conversation'"
                                class="group relative flex h-24 w-full cursor-pointer items-center space-x-2 border-b p-3"
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                                >
                                    <template
                                        v-for="user in conversation.users"
                                    >
                                        <img
                                            v-if="
                                                user.avatar &&
                                                user.id != loginUser.id
                                            "
                                            :src="user.avatar"
                                            class="h-full w-full bg-cover object-cover"
                                            alt=""
                                        />
                                        <UserCircleIcon
                                            v-else
                                            class="h-full w-full"
                                        />
                                    </template>
                                </div>
                                <div class="flex-grow">
                                    <div class="flex w-full justify-between">
                                        <h1
                                            class="whitespace-normal break-words text-base font-bold"
                                        >
                                            <template
                                                v-for="user in conversation.users"
                                            >
                                                <span
                                                    v-if="
                                                        user.id != loginUser.id
                                                    "
                                                    >{{ user.firstname }}</span
                                                >
                                            </template>
                                        </h1>
                                        <span
                                            v-if="
                                                conversation.messages.length > 0
                                            "
                                            class="text-xs"
                                            >{{
                                                showDate(
                                                    conversation.messages[
                                                        conversation.messages
                                                            .length - 1
                                                    ].date,
                                                    false,
                                                    true
                                                )
                                            }}</span
                                        >
                                    </div>
                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <h6
                                            class="flex items-center gap-1 whitespace-normal text-sm font-light"
                                        >
                                            <template
                                                v-if="
                                                    conversation.messages
                                                        .length > 0
                                                "
                                            >
                                                <span
                                                    class="block h-2 w-2 flex-shrink-0 rounded-full"
                                                    :class="[
                                                        !conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].is_send
                                                            ? 'bg-red-500'
                                                            : conversation
                                                                  .messages[
                                                                  conversation
                                                                      .messages
                                                                      .length -
                                                                      1
                                                              ].is_read
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-400  ',
                                                    ]"
                                                ></span>
                                                <span
                                                    class="flex w-full items-center justify-start gap-0.5 overflow-hidden overflow-ellipsis"
                                                >
                                                    <span
                                                        v-if="
                                                            conversation
                                                                .messages[
                                                                conversation
                                                                    .messages
                                                                    .length - 1
                                                            ].type == 'file'
                                                        "
                                                        ><PaperClipIcon
                                                            class="h-4 w-4"
                                                    /></span>
                                                    <span
                                                        v-else-if="
                                                            conversation
                                                                .messages[
                                                                conversation
                                                                    .messages
                                                                    .length - 1
                                                            ].type == 'image'
                                                        "
                                                    >
                                                        <PhotoIcon
                                                            class="h-4 w-4"
                                                    /></span>
                                                    <span
                                                        >{{
                                                            conversation
                                                                .messages[
                                                                conversation
                                                                    .messages
                                                                    .length - 1
                                                            ].message.length >
                                                            35
                                                                ? conversation.messages[
                                                                      conversation
                                                                          .messages
                                                                          .length -
                                                                          1
                                                                  ].message.substring(
                                                                      0,
                                                                      35
                                                                  ) + "..."
                                                                : conversation
                                                                      .messages[
                                                                      conversation
                                                                          .messages
                                                                          .length -
                                                                          1
                                                                  ].message
                                                        }}
                                                    </span>
                                                </span>
                                            </template>
                                            <template
                                                v-else
                                                v-for="user in conversation.users"
                                            >
                                                <span
                                                    v-if="
                                                        user.id != loginUser.id
                                                    "
                                                    >{{ user.email }}</span
                                                >
                                            </template>
                                        </h6>
                                        <span
                                            v-if="conversation.nbUnRead > 0"
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-sm font-light text-white"
                                        >
                                            <span>{{
                                                conversation.nbUnRead
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                                <button
                                    @click="
                                        deleteConversationToFolder(conversation)
                                    "
                                    type="button"
                                    v-if="selectedFolder"
                                    class="hidden h-6 w-6 items-center justify-center rounded-full text-red-300 hover:bg-red-100 hover:text-red-500 group-hover:flex"
                                >
                                    <span>
                                        <FolderMinusIcon class="h-4 w-4" />
                                    </span>
                                </button>
                            </div>
                            <div
                                v-else
                                class="group flex h-24 w-full cursor-pointer items-center space-x-2 border-b p-3 hover:bg-gray-50"
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                                >
                                    <img
                                        v-if="conversation.image"
                                        :src="conversation.image"
                                        class="h-full w-full bg-cover object-cover"
                                        alt=""
                                    />
                                    <UserGroupIcon
                                        v-else
                                        class="h-full w-full text-gray-500"
                                    />
                                </div>
                                <div class="flex-grow">
                                    <div class="flex w-full justify-between">
                                        <h1
                                            class="whitespace-normal break-words text-base font-bold"
                                        >
                                            <span v-if="conversation.name">{{
                                                conversation.name
                                            }}</span>
                                            <span v-else>Sans nom</span>
                                        </h1>
                                        <span
                                            class="text-xs"
                                            v-if="
                                                conversation.messages.length > 0
                                            "
                                            >{{
                                                showDate(
                                                    conversation.messages[
                                                        conversation.messages
                                                            .length - 1
                                                    ].date,
                                                    true,
                                                    true
                                                )
                                            }}</span
                                        >
                                    </div>

                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <h6
                                            class="whitespace-normal text-sm font-light text-gray-800"
                                        >
                                            <template
                                                v-if="
                                                    conversation.messages
                                                        .length > 0
                                                "
                                            >
                                                <span
                                                    class="block h-2 w-2 flex-shrink-0 rounded-full"
                                                    :class="[
                                                        !conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].is_send
                                                            ? 'bg-red-500'
                                                            : conversation
                                                                  .messages[
                                                                  conversation
                                                                      .messages
                                                                      .length -
                                                                      1
                                                              ].is_read
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-400  ',
                                                    ]"
                                                ></span>
                                                <span
                                                    class="w-full overflow-hidden overflow-ellipsis"
                                                    >{{
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].message.length > 35
                                                            ? conversation.messages[
                                                                  conversation
                                                                      .messages
                                                                      .length -
                                                                      1
                                                              ].message.substring(
                                                                  0,
                                                                  35
                                                              ) + "..."
                                                            : conversation
                                                                  .messages[
                                                                  conversation
                                                                      .messages
                                                                      .length -
                                                                      1
                                                              ].message
                                                    }}</span
                                                >
                                            </template>
                                            <span
                                                v-else
                                                v-for="(
                                                    user, i
                                                ) in conversation.users"
                                            >
                                                <span v-if="i < 3">
                                                    {{ user.email }},
                                                </span>
                                            </span>
                                        </h6>
                                        <span
                                            v-if="conversation.nbUnRead > 0"
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-sm font-light text-white"
                                        >
                                            <span>{{
                                                conversation.nbUnRead
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                                <button
                                    @click="
                                        deleteConversationToFolder(conversation)
                                    "
                                    type="button"
                                    v-if="selectedFolder"
                                    class="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500"
                                >
                                    <span>
                                        <FolderMinusIcon class="h-4 w-4" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <button
                            type="button"
                            v-if="selectedFolder"
                            @click="deleteFolderConversation"
                            class="flex w-full items-center justify-center gap-1 p-2 text-red-500 opacity-25 hover:bg-red-100 hover:opacity-100"
                        >
                            <span>
                                <TrashIcon class="h-4 w-4" />
                            </span>
                            <p class="text-sm">Supprimer ce dossier</p>
                        </button>
                    </div>
                </div>
                <!-- end conversation mobile view -->

                <!-- start conversation pc view -->
                <div
                    class="relative hidden w-full max-w-[30%] flex-col border-x py-4 lg:flex"
                >
                    <div class="relative mx-2">
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <MagnifyingGlassIcon
                                class="h-5 w-5 text-gray-500"
                            />
                        </div>
                        <input
                            type="text"
                            v-model="search"
                            class="block w-full border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue"
                            placeholder="Rechercher..."
                            required
                        />
                    </div>
                    <button
                        type="button"
                        @click="toogleModal"
                        class="absolute bottom-10 right-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-blue p-2 text-white shadow-lg"
                    >
                        <PlusIcon class="h-10 w-10" />
                    </button>
                    <div class="mt-2 w-full px-2 py-2">
                        <div
                            :onWheel="onWheelFolder"
                            class="no-scrollbar overflow-x-auto overflow-y-hidden"
                        >
                            <div
                                class="content items-scretch flex justify-start border-b"
                            >
                                <button
                                    type="button"
                                    @click="
                                        () => {
                                            selectedConversationList =
                                                conversations;
                                            selectedFolder = null;
                                        }
                                    "
                                    class="flex-shrink-0 cursor-pointer rounded-t-md py-2 px-4 text-center font-bold"
                                    :class="[
                                        !selectedFolder
                                            ? 'border-b-2 border-primary-blue text-primary-blue hover:bg-blue-100'
                                            : 'border-gray-500 text-gray-500 hover:bg-gray-50',
                                    ]"
                                >
                                    <span>Tous</span>
                                </button>
                                <button
                                    type="button"
                                    v-for="folder in folders"
                                    :key="folder.id"
                                    @click="selectFolder(folder)"
                                    class="flex-shrink-0 cursor-pointer rounded-t-md py-2 px-4 text-center font-bold"
                                    :class="[
                                        selectedFolder &&
                                        selectedFolder.id == folder.id
                                            ? 'border-b-2 border-primary-blue text-primary-blue hover:bg-blue-100'
                                            : 'border-gray-500 text-gray-500 hover:bg-gray-50',
                                    ]"
                                >
                                    <span>{{ folder.name }}</span>
                                </button>
                                <div
                                    class="flex flex-shrink-0 items-center justify-center"
                                >
                                    <button
                                        type="button"
                                        @click="toogleAddFolderModal"
                                        class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-primary-blue p-0.5 text-white shadow-lg"
                                    >
                                        <PlusIcon class="h-full w-full" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grow overflow-y-auto">
                        <div
                            v-if="filteredConversation.length != []"
                            v-for="(
                                conversation, index
                            ) in filteredConversation"
                            :key="conversation.id"
                            @click="selectConversation(conversation)"
                            :class="[
                                selectedConversation &&
                                selectedConversation.id == conversation.id
                                    ? 'bg-primary-blue text-white'
                                    : 'text-gray-800 hover:bg-gray-100',
                            ]"
                        >
                            <div
                                v-if="conversation.type == 'conversation'"
                                class="group relative flex h-24 w-full cursor-pointer items-center space-x-2 border-b p-3"
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                                >
                                    <template
                                        v-for="user in conversation.users"
                                    >
                                        <img
                                            v-if="
                                                user.avatar &&
                                                user.id != loginUser.id
                                            "
                                            :src="user.avatar"
                                            class="h-full w-full bg-cover object-cover"
                                            alt=""
                                        />
                                        <UserCircleIcon
                                            v-else
                                            class="h-full w-full"
                                        />
                                    </template>
                                </div>
                                <div class="flex-grow">
                                    <div class="flex w-full justify-between">
                                        <h1
                                            class="whitespace-normal break-words text-base font-bold"
                                        >
                                            <template
                                                v-for="user in conversation.users"
                                            >
                                                <span
                                                    v-if="
                                                        user.id != loginUser.id
                                                    "
                                                    >{{ user.firstname }}</span
                                                >
                                            </template>
                                        </h1>
                                        <span
                                            v-if="
                                                conversation.messages.length > 0
                                            "
                                            class="text-xs"
                                            >{{
                                                showDate(
                                                    conversation.messages[
                                                        conversation.messages
                                                            .length - 1
                                                    ].date,
                                                    false,
                                                    true
                                                )
                                            }}</span
                                        >
                                    </div>
                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <h6
                                            class="flex items-center gap-1 whitespace-normal text-sm font-light"
                                        >
                                            <template
                                                v-if="
                                                    conversation.messages
                                                        .length > 0
                                                "
                                            >
                                                <span
                                                    class="block h-2 w-2 flex-shrink-0 rounded-full"
                                                    :class="[
                                                        !conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].is_send
                                                            ? 'bg-red-500'
                                                            : conversation
                                                                  .messages[
                                                                  conversation
                                                                      .messages
                                                                      .length -
                                                                      1
                                                              ].is_read
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-400  ',
                                                    ]"
                                                ></span>
                                                <span
                                                    class="flex w-full items-center justify-start gap-0.5 overflow-hidden overflow-ellipsis"
                                                >
                                                    <span
                                                        v-if="
                                                            conversation
                                                                .messages[
                                                                conversation
                                                                    .messages
                                                                    .length - 1
                                                            ].type == 'file'
                                                        "
                                                        ><PaperClipIcon
                                                            class="h-4 w-4"
                                                    /></span>
                                                    <span
                                                        v-else-if="
                                                            conversation
                                                                .messages[
                                                                conversation
                                                                    .messages
                                                                    .length - 1
                                                            ].type == 'image'
                                                        "
                                                    >
                                                        <PhotoIcon
                                                            class="h-4 w-4"
                                                    /></span>
                                                    <span
                                                        >{{
                                                            conversation
                                                                .messages[
                                                                conversation
                                                                    .messages
                                                                    .length - 1
                                                            ].message.length >
                                                            35
                                                                ? conversation.messages[
                                                                      conversation
                                                                          .messages
                                                                          .length -
                                                                          1
                                                                  ].message.substring(
                                                                      0,
                                                                      35
                                                                  ) + "..."
                                                                : conversation
                                                                      .messages[
                                                                      conversation
                                                                          .messages
                                                                          .length -
                                                                          1
                                                                  ].message
                                                        }}
                                                    </span>
                                                </span>
                                            </template>
                                            <template
                                                v-else
                                                v-for="user in conversation.users"
                                            >
                                                <span
                                                    v-if="
                                                        user.id != loginUser.id
                                                    "
                                                    >{{ user.email }}</span
                                                >
                                            </template>
                                        </h6>
                                        <span
                                            v-if="conversation.nbUnRead > 0"
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-sm font-light text-white"
                                        >
                                            <span>{{
                                                conversation.nbUnRead
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                                <button
                                    @click="
                                        deleteConversationToFolder(conversation)
                                    "
                                    type="button"
                                    v-if="selectedFolder"
                                    class="hidden h-6 w-6 items-center justify-center rounded-full text-red-300 hover:bg-red-100 hover:text-red-500 group-hover:flex"
                                >
                                    <span>
                                        <FolderMinusIcon class="h-4 w-4" />
                                    </span>
                                </button>
                            </div>
                            <div
                                v-else
                                class="group flex h-24 w-full cursor-pointer items-center space-x-2 border-b p-3 hover:bg-gray-50"
                            >
                                <div
                                    class="h-12 w-12 overflow-hidden rounded lg:h-16 lg:w-16"
                                >
                                    <img
                                        v-if="conversation.image"
                                        :src="conversation.image"
                                        class="h-full w-full bg-cover object-cover"
                                        alt=""
                                    />
                                    <UserGroupIcon
                                        v-else
                                        class="h-full w-full text-gray-500"
                                    />
                                </div>
                                <div class="flex-grow">
                                    <div class="flex w-full justify-between">
                                        <h1
                                            class="whitespace-normal break-words text-base font-bold"
                                        >
                                            <span v-if="conversation.name">{{
                                                conversation.name
                                            }}</span>
                                            <span v-else>Sans nom</span>
                                        </h1>
                                        <span
                                            class="text-xs"
                                            v-if="
                                                conversation.messages.length > 0
                                            "
                                            >{{
                                                showDate(
                                                    conversation.messages[
                                                        conversation.messages
                                                            .length - 1
                                                    ].date,
                                                    true,
                                                    true
                                                )
                                            }}</span
                                        >
                                    </div>

                                    <div
                                        class="flex w-full items-center justify-between"
                                    >
                                        <h6
                                            class="whitespace-normal text-sm font-light text-gray-800"
                                        >
                                            <template
                                                v-if="
                                                    conversation.messages
                                                        .length > 0
                                                "
                                            >
                                                <span
                                                    class="block h-2 w-2 flex-shrink-0 rounded-full"
                                                    :class="[
                                                        !conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].is_send
                                                            ? 'bg-red-500'
                                                            : conversation
                                                                  .messages[
                                                                  conversation
                                                                      .messages
                                                                      .length -
                                                                      1
                                                              ].is_read
                                                            ? 'bg-green-500'
                                                            : 'bg-gray-400  ',
                                                    ]"
                                                ></span>
                                                <span
                                                    class="w-full overflow-hidden overflow-ellipsis"
                                                    >{{
                                                        conversation.messages[
                                                            conversation
                                                                .messages
                                                                .length - 1
                                                        ].message.length > 35
                                                            ? conversation.messages[
                                                                  conversation
                                                                      .messages
                                                                      .length -
                                                                      1
                                                              ].message.substring(
                                                                  0,
                                                                  35
                                                              ) + "..."
                                                            : conversation
                                                                  .messages[
                                                                  conversation
                                                                      .messages
                                                                      .length -
                                                                      1
                                                              ].message
                                                    }}</span
                                                >
                                            </template>
                                            <span
                                                v-else
                                                v-for="(
                                                    user, i
                                                ) in conversation.users"
                                            >
                                                <span v-if="i < 3">
                                                    {{ user.email }},
                                                </span>
                                            </span>
                                        </h6>
                                        <span
                                            v-if="conversation.nbUnRead > 0"
                                            class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue text-sm font-light text-white"
                                        >
                                            <span>{{
                                                conversation.nbUnRead
                                            }}</span>
                                        </span>
                                    </div>
                                </div>
                                <button
                                    @click="
                                        deleteConversationToFolder(conversation)
                                    "
                                    type="button"
                                    v-if="selectedFolder"
                                    class="hidden h-6 w-6 items-center justify-center rounded-full text-red-300 hover:bg-red-100 hover:text-red-500 group-hover:flex"
                                >
                                    <span>
                                        <FolderMinusIcon class="h-4 w-4" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <button
                            type="button"
                            v-if="selectedFolder"
                            @click="deleteFolderConversation"
                            class="flex w-full items-center justify-center gap-1 p-2 text-red-500 opacity-25 hover:bg-red-100 hover:opacity-100"
                        >
                            <span>
                                <TrashIcon class="h-4 w-4" />
                            </span>
                            <p class="text-sm">Supprimer ce dossier</p>
                        </button>
                    </div>
                </div>
                <!-- end conversation pc view -->

                <!-- start chat  view -->
                <div
                    v-show="open.chat"
                    class="bg-chat relative flex w-full grow flex-col border-r"
                >
                    <div
                        v-if="selectedConversation"
                        class="relative flex h-24 w-full items-center justify-between space-x-2 border-b bg-white p-3"
                    >
                        <div class="flex items-center gap-2">
                            <div
                                class="h-12 w-12 overflow-hidden rounded-full drop-shadow-md"
                            >
                                <template
                                    v-if="
                                        selectedConversation.type ==
                                        'conversation'
                                    "
                                >
                                    <template
                                        v-for="user in selectedConversation.users"
                                    >
                                        <img
                                            v-if="
                                                user.id != loginUser.id &&
                                                user.image
                                            "
                                            :src="user.image"
                                            class="h-full w-full bg-cover object-cover"
                                            alt=""
                                        />
                                        <UserCircleIcon
                                            v-else
                                            class="h-full w-full text-gray-800"
                                        />
                                    </template>
                                </template>
                                <template v-else>
                                    <img
                                        v-if="selectedConversation.image"
                                        :src="selectedConversation.image"
                                        class="h-full w-full bg-cover object-cover"
                                        alt=""
                                    />
                                    <UserGroupIcon
                                        v-else
                                        class="h-full w-full text-gray-800"
                                    />
                                </template>
                            </div>
                            <div>
                                <h1 class="whitespace-normal text-sm font-bold">
                                    <template
                                        v-if="
                                            selectedConversation.type ==
                                            'conversation'
                                        "
                                    >
                                        <template
                                            v-for="user in selectedConversation.users"
                                        >
                                            <span
                                                v-if="user.id != loginUser.id"
                                                >{{ user.firstname }}</span
                                            >
                                        </template>
                                    </template>
                                    <template v-else>
                                        <span
                                            v-if="selectedConversation.name"
                                            >{{
                                                selectedConversation.name
                                            }}</span
                                        >
                                        <span v-else>Sans nom</span>
                                    </template>
                                </h1>
                                <p class="text-[11px]">
                                    <template
                                        v-if="
                                            selectedConversation.type ==
                                            'conversation'
                                        "
                                    >
                                        <template
                                            v-for="user in selectedConversation.users"
                                        >
                                            <span
                                                v-if="user.id != loginUser.id"
                                                >{{ user.email }}</span
                                            >
                                        </template>
                                    </template>
                                    <template v-else>
                                        <template
                                            v-for="user in selectedConversation.users"
                                        >
                                            <span>{{ user.firstname }},</span>
                                        </template>
                                    </template>
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            @click="
                                () => {
                                    if (!open.editMessage)
                                        open.option = !open.option;
                                }
                            "
                            class="rounded p-0.5 hover:bg-gray-100"
                        >
                            <EllipsisVerticalIcon
                                class="h-8 w-8 text-gray-900"
                            />
                        </button>
                        <div
                            v-show="open.option"
                            ref="optionBlock"
                            class="items-scretch absolute top-[80%] right-5 z-20 flex min-w-[80px] flex-col justify-start overflow-hidden rounded bg-white shadow"
                        >
                            <button
                                v-if="selectedConversation.type != 'group'"
                                @click="addConversationToFolder"
                                type="button"
                                class="text-block flex items-center gap-1 p-2 hover:bg-gray-100"
                            >
                                <span>
                                    <FolderPlusIcon class="h-4 w-4" />
                                </span>
                                <p class="text-sm">Ajouter à un dossier</p>
                            </button>
                            <button
                                type="button"
                                @click="blockConversation"
                                v-if="false"
                                class="flex items-center gap-1 p-2 text-black hover:bg-gray-100"
                            >
                                <span>
                                    <NoSymbolIcon class="h-4 w-4" />
                                </span>
                                <p class="text-sm">Bloquer</p>
                            </button>
                            <button
                                type="button"
                                @click="deleteConversation"
                                class="flex items-center gap-1 p-2 text-red-500 hover:bg-gray-100"
                            >
                                <span>
                                    <TrashIcon class="h-4 w-4" />
                                </span>
                                <p class="text-sm">Supprimer</p>
                            </button>
                        </div>
                    </div>

                    <div
                        ref="chatDiv"
                        class="no-scrollbar mx-auto flex w-full grow flex-col-reverse items-center justify-center overflow-scroll p-4 md:max-w-[70%]"
                    >
                        <div
                            class="flex min-h-0 w-full flex-col items-end justify-end"
                        >
                            <div
                                v-show="open.optionMessage && !open.editMessage"
                                ref="optionMessageBlock"
                                class="items-scretch fixed z-50 flex min-w-[100px] flex-col justify-start overflow-hidden rounded bg-white shadow"
                            >
                                <button
                                    v-if="
                                        selectedMessage &&
                                        selectedMessage.user.id == loginUser.id
                                    "
                                    type="button"
                                    @click="openEditMessage"
                                    class="flex items-center gap-1 p-2 text-black hover:bg-gray-100"
                                >
                                    <span>
                                        <PencilSquareIcon class="h-4 w-4" />
                                    </span>
                                    <p class="text-xs">Editer</p>
                                </button>
                                <button
                                    type="button"
                                    @click="signalMessage"
                                    class="flex items-center gap-1 p-2 text-black hover:bg-gray-100"
                                >
                                    <span>
                                        <ExclamationTriangleIcon
                                            class="h-4 w-4"
                                        />
                                    </span>
                                    <p class="text-xs">Signaler</p>
                                </button>
                                <button
                                    type="button"
                                    @click="openDeleteMessage"
                                    class="flex items-center gap-1 p-2 text-red-500 hover:bg-gray-100"
                                >
                                    <span>
                                        <TrashIcon class="h-4 w-4" />
                                    </span>
                                    <p class="text-xs">Supprimer</p>
                                </button>
                            </div>

                            <div
                                v-if="
                                    selectedConversation &&
                                    groupMessages.length != []
                                "
                                v-for="(group, index) in groupMessages"
                                :key="index"
                                class="w-full"
                            >
                                <div
                                    class="sticky top-0 my-4 flex items-center justify-center"
                                    :class="[open.editMessage ? 'blur' : '']"
                                >
                                    <span
                                        class="rounded bg-white px-2 py-1 text-center text-xs uppercase text-gray-700 shadow"
                                        >{{
                                            showDate(group[0].date, true)
                                        }}</span
                                    >
                                </div>
                                <div
                                    v-for="(message, i) in group"
                                    :key="message.id"
                                    class="relative mb-2 flex w-full flex-col"
                                    :class="[
                                        message.user.id == loginUser.id
                                            ? 'items-end'
                                            : 'items-start',
                                    ]"
                                >
                                    <div
                                        @contextmenu.prevent="
                                            (e) => handleContextMenu(e, message)
                                        "
                                        class="relative block max-w-[90%] whitespace-pre-line break-all p-2 text-xs leading-normal tracking-wider shadow"
                                        :class="[
                                            message.user.id == loginUser.id &&
                                            open.editMessage &&
                                            selectedMessage &&
                                            selectedMessage.id != message.id
                                                ? 'rounded-l-lg rounded-tr-lg bg-primary-blue text-white blur'
                                                : message.user.id !=
                                                      loginUser.id &&
                                                  open.editMessage
                                                ? 'rounded-r-lg rounded-bl-lg bg-white text-black blur'
                                                : message.user.id ==
                                                  loginUser.id
                                                ? 'rounded-l-lg rounded-tr-lg bg-primary-blue text-white'
                                                : 'rounded-r-lg rounded-bl-lg bg-white text-black',
                                        ]"
                                    >
                                        <a
                                            :href="message.attachement_path"
                                            :download="message.attachement_name"
                                            v-if="message.type == 'image'"
                                            class="group relative mb-2 block min-h-[150px] min-w-[150px] overflow-hidden rounded"
                                        >
                                            <span
                                                style="
                                                    backdrop-filter: blur(5px);
                                                "
                                                class="absolute right-0 top-0 hidden items-center bg-white/50 p-2 text-primary-blue hover:bg-primary-blue/50 hover:text-black group-hover:flex"
                                            >
                                                <span class="block"
                                                    ><ArrowDownTrayIcon
                                                        class="h-5 w-5"
                                                /></span>
                                                <span class="block"
                                                    >Telecharger</span
                                                >
                                            </span>
                                            <img
                                                :src="message.attachement_path"
                                                class="max-h-[300px]"
                                                alt=""
                                            />
                                            <span
                                                class="absolute bottom-0 w-full bg-white/50 p-2 text-xs"
                                            >
                                                <span
                                                    class="block break-words text-xs font-medium"
                                                    >{{
                                                        message.attachement_name
                                                    }}</span
                                                >
                                                <span
                                                    class="mt-1 block break-words text-[11px]"
                                                    >{{
                                                        message.attachement_size
                                                    }}</span
                                                >
                                            </span>
                                        </a>
                                        <a
                                            :href="message.attachement_path"
                                            :download="message.attachement_name"
                                            v-if="message.type == 'file'"
                                            class="group relative mb-2 flex w-[300px] items-stretch justify-start overflow-hidden rounded bg-white/25"
                                        >
                                            <span
                                                style="
                                                    backdrop-filter: blur(5px);
                                                "
                                                class="absolute right-0 top-0 hidden items-center bg-white/50 p-2 text-primary-blue hover:bg-primary-blue/50 hover:text-black group-hover:flex"
                                            >
                                                <span class="block"
                                                    ><ArrowDownTrayIcon
                                                        class="h-5 w-5"
                                                /></span>
                                                <span class="block"
                                                    >Telecharger</span
                                                >
                                            </span>
                                            <div
                                                class="flex h-20 w-32 items-center justify-center bg-gray-500 font-bold uppercase text-white"
                                            >
                                                <span>{{
                                                    message.attachement_name
                                                        .split(".")
                                                        .pop()
                                                }}</span>
                                            </div>
                                            <div
                                                class="flex grow flex-col items-start justify-start p-2"
                                            >
                                                <span
                                                    class="break-words text-xs"
                                                >
                                                    {{
                                                        message.attachement_name
                                                    }}
                                                </span>
                                                <span
                                                    class="break-words text-[11px]"
                                                >
                                                    {{
                                                        message.attachement_size
                                                    }}
                                                </span>
                                            </div>
                                        </a>
                                        <span class="text-md">
                                            {{ message.message }}
                                        </span>
                                        <span
                                            class="mt-2 flex items-center gap-1 text-right text-xs font-light"
                                        >
                                            <span
                                                class="block h-2 w-2 rounded-full"
                                                :class="[
                                                    !message.is_send
                                                        ? 'bg-red-500'
                                                        : message.is_read
                                                        ? 'bg-green-500'
                                                        : 'bg-gray-300  ',
                                                ]"
                                            ></span>
                                            <span class="block">{{
                                                showDate(message.date, false)
                                            }}</span>
                                            <span
                                                class="block italic"
                                                v-if="message.is_edit"
                                                >Modifié</span
                                            >
                                        </span>
                                    </div>

                                    <div
                                        v-if="
                                            selectedMessage &&
                                            selectedMessage.id == message.id &&
                                            open.editMessage
                                        "
                                        class="relative mt-2"
                                    >
                                        <FaceSmileIcon
                                            @click="
                                                () => {
                                                    open.emoji = !open.emoji;
                                                }
                                            "
                                            class="absolute bottom-2 left-1 h-6 w-6 cursor-pointer text-gray-700"
                                        />
                                        <textarea
                                            ref="textareaEdit"
                                            placeholder="Your message..."
                                            v-model="selectedMessage.message"
                                            @input="
                                                (e) =>
                                                    handleInputEdit(
                                                        e.target.value
                                                    )
                                            "
                                            @keydown.enter="
                                                (e) => handleEnterEdit(e)
                                            "
                                            :rows="nbRowsEdit"
                                            class="w-full resize-none rounded-xl border border-gray-300 bg-white px-8 py-2 text-xs text-gray-900 shadow transition-all focus:border-primary-blue focus:ring-primary-blue"
                                            cols="50"
                                        ></textarea>
                                        <button
                                            type="button"
                                            @click="editMessage()"
                                            class="absolute right-1 bottom-2 rounded-full bg-primary-blue p-1 text-white"
                                        >
                                            <span v-if="loading == 1">
                                                <Spin size="small" />
                                            </span>
                                            <span v-else>
                                                <PaperAirplaneIcon
                                                    class="h-4 w-4"
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-show="selectedConversation != null"
                        class="mx-auto w-full md:max-w-[70%]"
                    >
                        <div
                            class="relative flex items-end gap-2 rounded-lg py-2 px-3"
                        >
                            <input
                                type="file"
                                id="pickimage"
                                class="hidden"
                                accept="image/*"
                                @change="(e) => handlePickImage(e)"
                                :disabled="open.editMessage"
                            />
                            <input
                                type="file"
                                id="pickfile"
                                class="hidden"
                                @change="(e) => handlePickFile(e)"
                                :disabled="open.editMessage"
                            />
                            <label
                                for="pickimage"
                                class="mb-1 cursor-pointer rounded-full bg-white p-2 shadow"
                                :class="[open.editMessage ? 'blur' : '']"
                            >
                                <span
                                    ><PhotoIcon
                                        class="h-4 w-4 text-gray-500 md:h-5 md:w-5"
                                /></span>
                            </label>
                            <label
                                for="pickfile"
                                class="mb-1 cursor-pointer rounded-full bg-white p-2 shadow"
                                :class="[open.editMessage ? 'blur' : '']"
                            >
                                <span
                                    ><PaperClipIcon
                                        class="h-4 w-4 text-gray-500 md:h-5 md:w-5"
                                /></span>
                            </label>

                            <div class="relative flex w-full flex-col">
                                <div
                                    v-if="message.attachement"
                                    class="mb-0.5 flex w-full items-stretch overflow-hidden rounded bg-white/60"
                                    :class="[open.editMessage ? 'blur' : '']"
                                >
                                    <div class="h-20 w-32">
                                        <img
                                            v-if="message.type == 'image'"
                                            class="h-full w-full object-cover"
                                            :src="message.attachement_path"
                                            alt=""
                                        />
                                        <div
                                            v-else
                                            class="flex h-full w-full items-center justify-center bg-gray-500 text-white"
                                        >
                                            <span>File</span>
                                        </div>
                                    </div>
                                    <div
                                        class="flex grow flex-col items-start justify-start p-2"
                                    >
                                        <h4 class="break-words text-xs">
                                            {{ message.attachement_name }}
                                        </h4>
                                        <p class="break-words text-[11px]">
                                            {{ message.attachement_size }}
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        @click="clearMessage(true)"
                                        class="flex w-10 cursor-pointer items-center justify-center rounded bg-white"
                                    >
                                        <XMarkIcon
                                            class="h-5 w-5 text-primary-blue"
                                        />
                                    </button>
                                </div>
                                <div
                                    v-show="open.emoji"
                                    ref="emojiBlock"
                                    class="emojiBlock absolute bottom-[110%] z-40 min-h-[100px] min-w-[100px] overflow-hidden rounded-xl bg-white shadow"
                                >
                                    <emoji-picker locale="fr"></emoji-picker>
                                </div>
                                <FaceSmileIcon
                                    @click="
                                        () => {
                                            if (!open.editMessage)
                                                open.emoji = !open.emoji;
                                        }
                                    "
                                    class="absolute bottom-3 left-2 h-5 w-5 cursor-pointer text-gray-500"
                                    :class="[open.editMessage ? 'blur' : '']"
                                />
                                <textarea
                                    ref="textarea"
                                    :rows="nbRows"
                                    @keydown.enter="handleEnter"
                                    v-model="message.message"
                                    @input="handleInput"
                                    :disabled="open.editMessage"
                                    class="mr-2 block w-full resize-none rounded-lg border border-gray-300 bg-white py-2.5 pr-2.5 pl-8 text-sm text-gray-900 shadow transition-all focus:border-primary-blue focus:ring-primary-blue"
                                    placeholder="Your message..."
                                    :class="[open.editMessage ? 'blur' : '']"
                                ></textarea>
                            </div>
                            <button
                                :class="[open.editMessage ? 'blur' : '']"
                                type="button"
                                @click="sendMessage()"
                                :disabled="open.editMessage"
                                class="mb-0.5 flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary-blue text-white shadow md:h-10 md:w-10"
                            >
                                <span v-if="loading == 1">
                                    <Spin size="small" />
                                </span>
                                <span v-else>
                                    <PaperAirplaneIcon
                                        class="h-5 w-5 md:h-6 md:w-6"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- end chat  view -->
            </div>
        </section>
        <div
            v-show="open.deleteMessage"
            class="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center"
            style="backdrop-filter: blur(5px)"
        >
            <div class="min-w-[300px] rounded bg-white p-4 shadow">
                <p class="">Supprimer le message ?</p>
                <div class="mt-5 flex flex-col items-end justify-end gap-3">
                    <button
                        v-if="
                            selectedMessage &&
                            selectedMessage.user.id == loginUser.id
                        "
                        @click="destroyMessage(true)"
                        type="button"
                        class="rounded-full border border-gray-400 bg-white px-2 py-1 text-sm hover:bg-gray-100"
                    >
                        Supprimer pour tout le monde
                    </button>
                    <button
                        @click="destroyMessage(false)"
                        type="button"
                        class="rounded-full border border-gray-400 bg-white px-2 py-1 text-sm hover:bg-gray-100"
                    >
                        Supprimer pour moi
                    </button>
                    <button
                        @click="open.deleteMessage = false"
                        type="button"
                        class="rounded-full border border-gray-400 bg-white px-2 py-1 text-sm hover:bg-gray-100"
                    >
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    MagnifyingGlassIcon,
    PaperAirplaneIcon,
    ChatBubbleLeftRightIcon,
    PlusIcon,
    UserGroupIcon,
    UserCircleIcon,
    TrashIcon,
    FaceSmileIcon,
    PhotoIcon,
    PaperClipIcon,
    EllipsisVerticalIcon,
    XMarkIcon,
    NoSymbolIcon,
    FolderIcon,
    FolderMinusIcon,
    FolderPlusIcon,
    ExclamationTriangleIcon,
    PencilSquareIcon,
    ArrowDownTrayIcon,
} from "@heroicons/vue/24/solid";
import { reactive, onMounted, ref, computed, onUnmounted, watch } from "vue";
import Spin from "@/components/utils/Spin.vue";
import StartConversation from "@/components/StartConversation.vue";
import useChats from "@/services/chatServices";
import Error from "@/components/Error.vue";
import { onClickOutside } from "@vueuse/core";
import CreateConversationFolder from "@/components/CreateConversationFolder.vue";
import AddConversationToFolder from "@/components/AddConversationToFolder.vue";

const {
    createConversation,
    loading,
    errors,
    conversation,
    createMessage,
    destroyConversation,
    updateMessage,
    getConversationsUser,
    conversations,
    isRead,
    folders,
    getConversationsFolderUser,
    removeCoversationToFolder,
    destroyCoversationFolder,
    deleteMessage,
    reportMessage,
} = useChats();

const chatDiv = ref(null);
const textarea = ref(null);
const textareaEdit = ref(null);
const selectedFolder = ref(null);
const selectedConversationList = ref(null);
const emojiBlock = ref(null);
const optionBlock = ref(null);
const optionMessageBlock = ref(null);
const nbRows = ref(1);
const nbRowsEdit = ref(1);
const search = ref("");
const openModal = ref(false);
const openAddConvToFolderModal = ref(false);
const openAddFolderModal = ref(false);
const selectedConversation = ref(null);
const selectedMessage = ref(null);
const loginUser = ref(null);
loginUser.value = JSON.parse(localStorage.user);

const open = reactive({
    chat: true,
    conversation: false,
    emoji: false,
    option: false,
    optionMessage: false,
    editMessage: false,
    deleteMessage: false,
});

const message = reactive({
    message: "",
    user_id: loginUser.value.id,
    conversation_id: "",
    attachement: null,
    attachement_path: "",
    attachement_name: "",
    attachement_size: "",
    type: "text",
});
onMounted(async () => {
    await getConversationsUser(loginUser.value.id);
    selectedConversationList.value = conversations.value;
    await getConversationsFolderUser(loginUser.value.id);
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            if (open.emoji) {
                open.emoji = false;
            } else if (open.editMessage) {
                open.editMessage = false;
                open.optionMessage = false;
            } else if (open.optionMessage) {
                open.optionMessage = false;
            } else if (open.option) {
                open.option = false;
            } else if (selectedConversation.value) {
                selectedConversation.value = null;
                clearMessage();
            } else {
                selectedFolder.value = null;
            }
        }
    };
    emojiBlock.value
        .querySelector("emoji-picker")
        .addEventListener("emoji-click", (event) => {
            if (open.editMessage) {
                selectedMessage.value.message += `${event.detail.unicode} `;
            } else {
                message.message += `${event.detail.unicode} `;
            }
        });
    window.Echo.channel(`chat.${loginUser.value.id}`).listen(
        ".chat-update",
        async (e) => {
            refreshList();
            scrollToEnd();
        }
    );
});

onClickOutside(emojiBlock, () => {
    open.emoji = false;
});

onClickOutside(optionBlock, () => {
    open.option = false;
});

onClickOutside(optionMessageBlock, () => {
    open.optionMessage = false;
});

const clearMessage = (lsms = false) => {
    if (!lsms) {
        message.message = "";
        message.conversation_id = "";
    }

    message.attachement = "";
    message.attachement_path = "";
    message.attachement_name = "";
    message.attachement_size = "";
    message.type = "text";
    open.editMessage = false;
    selectedMessage.value = null;
};

function changeView(view) {
    switch (view) {
        case "chat":
            open.conversation = false;
            open.chat = true;
            break;
        case "conversation":
            open.chat = false;
            open.conversation = true;
            break;
    }
}

const toogleModal = () => {
    openModal.value = !openModal.value;
};

const toogleAddFolderModal = () => {
    openAddFolderModal.value = !openAddFolderModal.value;
};

const toogleAddConvToFolderModal = () => {
    openAddConvToFolderModal.value = !openAddConvToFolderModal.value;
};

const folderCreated = async () => {
    await getConversationsFolderUser(loginUser.value.id);
    openAddFolderModal.value = false;
};

const conversationAdded = async (res) => {
    open.option = false;
    selectedConversationList.value = res.folder.conversations;
    selectedFolder.value = res.folder;
    openAddConvToFolderModal.value = false;
    if (!res.isExist) {
        await getConversationsFolderUser(loginUser.value.id).then((data) => {
            let currFolder = folders.value.filter(
                (folder) => folder.id == res.folder.id
            )[0];
            selectedConversationList.value = currFolder.conversations;
            selectedFolder.value = currFolder;
        });
    }
};

const startConversation = async (userSelect) => {
    toogleModal();
    let isStartCov = conversations.value.filter((conv) => {
        return conv.users.find((user) => {
            return user.id == userSelect.id;
        });
    })[0];
    if (!isStartCov) {
        await createConversation({
            users: [loginUser.value.id, userSelect.id],
        });
        await getConversationsUser(loginUser.value.id);
        refreshList();
    } else {
        selectedConversation.value = isStartCov;
    }
    clearMessage();
};

const openEditMessage = () => {
    open.editMessage = true;
    setTimeout(() => {
        handleInputEdit(textareaEdit.value[0].value);
    }, 100);
};

const editMessage = async () => {
    const received = selectedConversation.value.users.filter(
        (user) => user.id != loginUser.value.id
    )[0];
    selectedMessage.value.is_edit = true;
    open.editMessage = false;
    updateMessage(selectedMessage.value.id, {
        text: selectedMessage.value.message,
        received_id: received.id,
    });
};

const destroyMessage = async (f) => {
    open.deleteMessage = false;
    const index = selectedConversation.value.messages.indexOf(
        selectedMessage.value
    );
    if (index >= 0) {
        const received = selectedConversation.value.users.filter(
            (user) => user.id != loginUser.value.id
        )[0];
        selectedConversation.value.messages.splice(index, 1);
        await deleteMessage(selectedMessage.value.id, {
            for: f,
            user_id: loginUser.value.id,
            received_id: received.id,
        });
    }
};

const signalMessage = async () => {
    open.optionMessage = false;
    await reportMessage({
        conversation_id: selectedConversation.value.id,
        message_id: selectedMessage.value.id,
    });
    alert("Report sucess");
};

const openDeleteMessage = async () => {
    open.optionMessage = false;
    open.deleteMessage = true;
};

const addConversationToFolder = async () => {
    toogleAddConvToFolderModal();
    open.option = false;
};

const deleteConversationToFolder = async (conv) => {
    if (
        confirm("Are you sure you want to remove this conversation in folder?")
    ) {
        const index = selectedFolder.value.conversations.indexOf(conv);
        if (index >= 0) {
            selectedFolder.value.conversations.splice(index, 1);
            await removeCoversationToFolder(selectedFolder.value.id, conv.id);
            await getConversationsFolderUser(loginUser.value.id);
        }
    }
};

const blockConversation = async () => {
    if (confirm("Are you sure you want to block this conversation?")) {
        open.option = false;
    }
};

const deleteFolderConversation = async () => {
    if (confirm("Are you sure you want to delete this folder?")) {
        await destroyCoversationFolder(selectedFolder.value.id);
        selectedConversationList.value = conversations.value;
        selectedFolder.value = null;
        await getConversationsFolderUser(loginUser.value.id);
    }
};

const deleteConversation = async () => {
    if (confirm("Are you sure you want to delete this conversation?")) {
        open.option = false;
        await destroyConversation(selectedConversation.value.id, {
            user_id: loginUser.value.id,
        });
        selectedConversation.value = null;
        await getConversationsUser(loginUser.value.id);
        await getConversationsFolderUser(loginUser.value.id);
        if (selectedFolder.value == null) {
            selectedConversationList.value = conversations.value;
        } else {
            selectedFolder.value = folders.value.filter(
                (folder) => folder.id === selectedFolder.value.id
            )[0];
            selectedConversationList.value = selectedFolder.value.conversations;
        }
    }
};

const filteredConversation = computed(() => {
    return selectedConversationList.value
        ? selectedConversationList.value.filter((conv) =>
              conv.users.some(
                  (user) =>
                      user.id != loginUser.value.id &&
                      (user.firstname
                          .toLowerCase()
                          .includes(search.value.toLowerCase()) ||
                          user.lastname
                              .toLowerCase()
                              .includes(search.value.toLowerCase()) ||
                          user.email
                              .toLowerCase()
                              .includes(search.value.toLowerCase()))
              )
          )
        : [];
});

const groupMessages = computed(() => {
    let groups = {};
    selectedConversation.value.messages.forEach((message) => {
        if (!groups[`${showDate(message.date, true)}`]) {
            groups[`${showDate(message.date, true)}`] = [];
        }
        groups[`${showDate(message.date, true)}`].push(message);
    });
    return groups;
});

const selectFolder = (folder) => {
    selectedConversationList.value = folder.conversations;
    selectedFolder.value = folder;
};

function selectConversation(conversation) {
    selectedConversation.value = conversation;
    message.conversation_id = conversation.id;
    clearMessage();
    const received = selectedConversation.value.users.filter(
        (user) => user.id != loginUser.value.id
    )[0];

    isRead({
        conversation_id: selectedConversation.value.id,
        user_id: loginUser.value.id,
        received_id: received.id,
    });
    changeView("chat");
}

async function sendMessage() {
    if (
        selectedConversation.value &&
        !loading.value &&
        (message.message || message.attachement)
    ) {
        
        message.conversation_id = selectedConversation.value.id;
        const currMessage = {
            id: new Date().getTime(),
            user_id: loginUser.value.id,
            user: loginUser.value,
            is_send: false,
            is_read: false,
            date: Date.now(),
            attachement_path: message.attachement_path,
            attachement_name: message.attachement_name,
            message: message.message,
            type: message.type,
            conversation_id: message.conversation_id,
        };
        conversations.value
            .filter((conv) => conv.id === selectedConversation.value.id)[0]
            .messages.push(currMessage);
        
        if (selectFolder.value)
            selectedConversation.value.messages.push(currMessage);
        const received = selectedConversation.value.users.filter(
            (user) => user.id != loginUser.value.id
        )[0];

        let formData = new FormData();
        formData.append("received_id", received.id);
        formData.append("user_id", loginUser.value.id);
        formData.append("conversation_id", message.conversation_id);
        formData.append("attachement", message.attachement);
        formData.append("attachement_path", message.attachement_path);
        formData.append("attachement_name", message.attachement_name);
        formData.append("attachement_size", message.attachement_size);
        formData.append("type", message.type);
        formData.append("message", message.message);
        clearMessage();
        await createMessage(formData);
        refreshList();
    }
}

function showDate(date, grouped, min = false) {
    date = new Date(date);
    const now = new Date();

    const difference = Math.round((now - date) / (1000 * 60 * 60 * 24));
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const joursSemaine = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ];

    if (difference === 0) {
        return grouped
            ? "Aujourd'hui"
            : `${
                  date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
              }:${
                  date.getMinutes() > 9
                      ? date.getMinutes()
                      : "0" + date.getMinutes()
              }`;
    } else if (difference === 1) {
        return grouped || min
            ? "Hier"
            : `${
                  date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
              }:${
                  date.getMinutes() > 9
                      ? date.getMinutes()
                      : "0" + date.getMinutes()
              }`;
    } else if (difference > 1 && difference < 7) {
        return grouped || min
            ? joursSemaine[date.getDay()]
            : `${
                  date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
              }:${
                  date.getMinutes() > 9
                      ? date.getMinutes()
                      : "0" + date.getMinutes()
              }`;
    } else {
        return grouped && !min
            ? date.toLocaleDateString("fr-FR", options)
            : !grouped && min
            ? date.toLocaleDateString("fr-FR")
            : `${
                  date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
              }:${
                  date.getMinutes() > 9
                      ? date.getMinutes()
                      : "0" + date.getMinutes()
              }`;
    }
}

const onWheelFolder = (event) => {
    event.preventDefault();
    const container = event.currentTarget;
    const delta = event.deltaY;
    container.scrollLeft += delta;
};

const handleEnter = (event) => {
    if (event.shiftKey && event.key === "Enter") {
        event.preventDefault();
        const textarea = event.target;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        textarea.value =
            value.substring(0, start) + "\n" + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    } else {
        event.preventDefault();
        sendMessage();
    }
};

const handleInput = () => {
    const value = textarea.value.value;
    const numberOfLines = (value.match(/\n/g) || []).length + 1;
    nbRows.value = numberOfLines < 10 ? numberOfLines : 10;
};

const handleEnterEdit = (event) => {
    if (event.shiftKey && event.key === "Enter") {
        event.preventDefault();
        const textarea = event.target;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        textarea.value =
            value.substring(0, start) + "\n" + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    } else {
        event.preventDefault();
        editMessage();
    }
};

const handleInputEdit = (value) => {
    const numberOfLines = (value.match(/\n/g) || []).length + 1;
    nbRowsEdit.value = numberOfLines < 10 ? numberOfLines : 10;
};

const handleContextMenu = (event, message) => {
    event.preventDefault();
    if (!open.editMessage) {
        optionMessageBlock.value.style.left = `${event.clientX + 10}px`;
        optionMessageBlock.value.style.top = `${event.clientY + 10}px`;
        open.option = false;
        open.emoji = false;
        selectedMessage.value = message;
        open.optionMessage = true;
    }
};

const handlePickImage = async (e) => {
    const file = e.target.files[0];
    message.type = "image";
    message.attachement = file;
    message.attachement_name = file.name;
    message.attachement_path = previewImage(file);
    message.attachement_size = bytesToSize(file.size);
};

const handlePickFile = async (e) => {
    const file = e.target.files[0];
    message.type = "file";
    message.attachement = file;
    message.attachement_name = file.name;
    message.attachement_path = previewImage(file);
    message.attachement_size = bytesToSize(file.size);
};

const scrollToEnd = () => {
    if (chatDiv.value != null) {
        chatDiv.value.scroll({
            top: chatDiv.value.scrollHeight,
            behavior: "smooth",
        });
    }
};

const refreshList = async () => {
    await getConversationsUser(loginUser.value.id);
    if (selectedConversation.value) {
        selectedConversation.value = conversations.value.filter(
            (conv) => conv.id === selectedConversation.value.id
        )[0];
    }
    await getConversationsFolderUser(loginUser.value.id);
    if (selectedFolder.value == null) {
        selectedConversationList.value = conversations.value;
    } else {
        selectedFolder.value = folders.value.filter(
            (folder) => folder.id === selectedFolder.value.id
        )[0];
        selectedConversationList.value = selectedFolder.value.conversations;
    }
};

function previewImage(file) {
    return URL.createObjectURL(file);
}

function bytesToSize(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}
</script>

<style>
.bg-chat {
    background-color: #dfdbe5;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.emojiBlock {
    left: 0;
}
@media screen and (max-width: 460px) {
    .emojiBlock {
        left: -30%;
    }
    emoji-picker {
        --num-columns: 5 !important;
        --emoji-padding: 0.2rem !important;
        --input-padding: 0.1rem !important;
    }
}
</style>
