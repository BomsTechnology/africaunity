<template>
    <div class="mx-auto min-h-screen w-full bg-white xl:w-[90%]">
        <h1
            class="py-4 text-center text-4xl font-bold capitalize text-primary-blue lg:text-5xl"
        >
            {{ $t("setting-account") }}
        </h1>
        <div class="mx-auto flex py-8 lg:px-16">
            <div
                class="flex flex-col items-center justify-center border bg-gray-50 px-2 py-4 shadow lg:px-6"
            >
                <div v-if="loading == 1" class="p-28">
                    <svg
                        class="mx-auto h-16 w-16 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
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
                <div v-else>
                    <div
                        class="flex w-full flex-col items-center justify-center"
                    >
                        <div
                            class="h-20 w-20 overflow-hidden rounded-full lg:h-32 lg:w-32"
                        >
                            <img
                                :src="user.avatar"
                                class="h-full w-full bg-cover object-cover"
                                alt=""
                                v-if="user.avatar"
                            />
                            <UserCircleIcon
                                v-else
                                class="h-full w-full text-gray-500"
                            />
                        </div>
                    </div>
                    <h1
                        class="mt-2 hidden text-center text-lg font-bold capitalize lg:block lg:text-xl"
                    >
                        {{ user.firstname }}
                        <span v-if="user.type == 'particular'">{{
                            user.lastname
                        }}</span>
                    </h1>
                    <h2 class="lg:text-md mt-1 text-center text-sm font-light">
                        <span v-if="user.type == 'particular'">{{
                            $t("physical-person")
                        }}</span>
                        <span v-else-if="user.type == 'ip'">{{
                            $t("ip")
                        }}</span>
                        <span v-else-if="user.type == 'admin'">Admin</span>
                        <span v-else>{{ $t("corporation") }}</span>
                    </h2>
                    <h3
                        class="text-md mt-1 text-center font-black text-primary-blue lg:text-lg"
                    >
                        <span v-if="user.type == 'particular'"
                            >{{ $t("pack") }} {{ $t("particular") }}</span
                        >
                        <span v-else-if="user.type == 'ip'"
                            >{{ $t("pack") }} {{ $t("politic") }}</span
                        >
                        <span v-else-if="user.type == 'admin'">Admin</span>
                        <span v-else-if="user.type == 'business1'"
                            >{{ $t("pack") }} PRO</span
                        >
                        <span v-else
                            >{{ $t("pack") }} {{ $t("business") }}</span
                        >
                    </h3>
                    <button
                        disabled
                        v-if="user.type == 'business1'"
                        class="lg:text-md flex items-center justify-center space-x-2 rounded bg-primary-blue px-2 py-1 text-xs text-white shadow"
                    >
                        <ArrowUpCircleIcon class="h-6 w-6" />
                        <span class="hidden lg:block">UPGRADE PACK</span>
                    </button>
                </div>
                <div class="mt-4">
                    <button
                        @click="changeTab('account')"
                        :class="[
                            !open.account
                                ? 'flex  w-full items-center justify-start space-x-2 border-y bg-menu px-3 py-2 text-white'
                                : 'flex w-full items-center  justify-start space-x-2 border-y bg-primary-blue px-3 py-2 text-white',
                        ]"
                    >
                        <UserCircleIcon class="h-6 w-6" />
                        <span class="hidden lg:block">{{ $t("account") }}</span>
                    </button>
                    <button
                        @click="changeTab('conf')"
                        :class="[
                            !open.conf
                                ? 'flex w-full items-center  justify-start space-x-2 border-y bg-menu px-3 py-2 text-white'
                                : 'flex w-full items-center  justify-start space-x-2 border-y bg-primary-blue px-3 py-2 text-white',
                        ]"
                    >
                        <KeyIcon class="h-6 w-6" />
                        <span class="hidden lg:block">{{ $t("privacy") }}</span>
                    </button>
                    <button
                        @click="changeTab('password')"
                        :class="[
                            !open.password
                                ? 'flex w-full items-center  justify-start space-x-2 border-y bg-menu px-3 py-2 text-white'
                                : 'flex w-full items-center  justify-start space-x-2 border-y bg-primary-blue px-3 py-2 text-white',
                        ]"
                    >
                        <LockClosedIcon class="h-6 w-6" />
                        <span class="hidden lg:block">{{
                            $t("change-password")
                        }}</span>
                    </button>
                    <button
                        @click="changeTab('delete')"
                        :class="[
                            !open.delete
                                ? 'flex w-full items-center  justify-start space-x-2 border-y bg-menu px-3 py-2 text-white'
                                : 'flex w-full items-center  justify-start space-x-2 border-y bg-primary-blue px-3 py-2 text-white',
                        ]"
                    >
                        <TrashIcon class="h-6 w-6" />
                        <span class="hidden lg:block">{{
                            $t("delete-account")
                        }}</span>
                    </button>
                </div>
            </div>
            <div class="w-[70%] py-10">
                <div v-if="errors != ''" class="px-12">
                    <Error>{{ errors }}</Error>
                </div>
                <div
                    v-if="loadingC == 2"
                    class="mx-12 flex justify-start space-x-3 bg-green-50 py-4 px-4 text-green-700"
                >
                    <CheckCircleIcon class="h-6 w-6" />
                    <p>{{ $t("update-s") }}</p>
                </div>
                <div v-if="loading == 1" class="p-28">
                    <svg
                        class="mx-auto h-16 w-16 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
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
                <div v-else>
                    <div v-if="open.account">
                        <form @submit.prevent="saveUserSetting()">
                            <div
                                v-if="
                                    user.type == 'particular' ||
                                    user.type == 'admin'
                                "
                            >
                                <div
                                    class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"
                                >
                                    <label class="">
                                        {{ $t("firstname") }}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        v-model="user.firstname"
                                        class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                    />
                                </div>
                                <div
                                    class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"
                                >
                                    <label class="">
                                        {{ $t("lastname") }}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        v-model="user.lastname"
                                        class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                    />
                                </div>
                            </div>
                            <div
                                v-else-if="
                                    user.type == 'business1' ||
                                    user.type == 'business2'
                                "
                                class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"
                            >
                                <label class="">
                                    {{ $t("social-reason") }}
                                </label>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>

                            <div
                                v-else
                                class="mt-2 px-8 text-xs lg:px-16 lg:text-sm"
                            >
                                <label class="">
                                    {{ $t("denomination") }}
                                </label>
                                <input
                                    type="text"
                                    required
                                    v-model="user.firstname"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>

                            <div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm">
                                <label class="">
                                    {{ $t("adresse") + " " + $t("email") }}
                                </label>
                                <input
                                    type="email"
                                    required
                                    v-model="user.email"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>

                            <div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm">
                                <label class="">
                                    {{ $t("profile-picture") }}
                                </label>
                                <input
                                    @change="handelAvatarObject()"
                                    type="file"
                                    ref="pavatar"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                                <span class="text-xs font-light text-gray-500"
                                    >(Format: png, jpg, jpeg, gif) | (size: 160*160)</span
                                >
                            </div>

                            <div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm">
                                <label class="">
                                    {{ $t("cover-picture") }}
                                </label>
                                <input
                                    @change="handelCoverObject()"
                                    type="file"
                                    ref="cover"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                                <span class="text-xs font-light text-gray-500"
                                    >(Format: png, jpg, jpeg, gif) | (size: 1500*250)</span
                                >
                            </div>

                            <div class="px-8 text-xs lg:px-16 lg:text-sm">
                                <button
                                    v-if="loadingC == 0 || loadingC == 2"
                                    type="submit"
                                    class="mt-6 w-full bg-primary-blue px-8 py-2 text-white"
                                >
                                    {{ $t("update") }}
                                </button>
                                <button
                                    v-if="loadingC == 1"
                                    disabled
                                    type="submit"
                                    class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"
                                >
                                    <svg
                                        class="mr-3 h-5 w-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
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
                                    {{ $t("update") }}...
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-if="open.conf">
                        <div
                            class="m-4 flex space-x-2 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 lg:text-sm"
                        >
                            <h1 class="font-bold">{{ $t("privacy") }}</h1>
                            <span class="font-light"
                                >({{ $t("privacy-desc") }})</span
                            >
                        </div>
                        <form @submit.prevent="changePrivacy()">
                            <div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm">
                                <select
                                    required
                                    v-model="status.status"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                >
                                    <option value="1">
                                        {{ $t("evreyone") }}
                                    </option>
                                    <option value="2">
                                        {{ $t("only-me") }}
                                    </option>
                                </select>
                            </div>

                            <div class="px-8 text-xs lg:px-16 lg:text-sm">
                                <button
                                    v-if="loadingC == 0 || loadingC == 2"
                                    type="submit"
                                    class="mt-2 w-full bg-primary-blue px-8 py-2 text-white"
                                >
                                    {{ $t("update") }}
                                </button>
                                <button
                                    v-if="loadingC == 1"
                                    disabled
                                    type="submit"
                                    class="mt-2 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"
                                >
                                    <svg
                                        class="mr-3 h-5 w-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
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
                                    {{ $t("update") }}...
                                </button>
                            </div>
                        </form>
                        <div
                            class="m-4 flex space-x-2 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 opacity-25 lg:text-sm"
                        >
                            <h1 class="font-bold">{{ $t("download-data") }}</h1>
                            <span class="font-light"
                                >({{ $t("download-data-desc") }})</span
                            >
                        </div>
                        <form class="opacity-25">
                            <div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm">
                                <input
                                    type="password"
                                    required
                                    v-model="user.password"
                                    :placeholder="$t('password')"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>

                            <div class="px-8 text-xs lg:px-16 lg:text-sm">
                                <button
                                    v-if="loadingC == 0 || loadingC == 2"
                                    disabled
                                    type="submit"
                                    class="mt-2 w-full bg-primary-blue px-8 py-2 text-white"
                                >
                                    {{ $t("download") }}
                                </button>
                                <button
                                    v-if="loadingC == 1"
                                    disabled
                                    type="submit"
                                    class="mt-2 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"
                                >
                                    <svg
                                        class="mr-3 h-5 w-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
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
                                    {{ $t("download") }}...
                                </button>
                            </div>
                        </form>
                        <div
                            class="m-4 flex space-x-2 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 lg:text-sm"
                        >
                            <h1 class="font-bold">{{ $t("delete-data") }}</h1>
                            <span class="font-light"
                                >({{ $t("delete-data-desc") }})</span
                            >
                        </div>
                        <form @submit.prevent="deleteData()">
                            <div class="mt-2 px-8 text-xs lg:px-16 lg:text-sm">
                                <input
                                    type="password"
                                    required
                                    v-model="deleteD.password"
                                    :placeholder="$t('password')"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>

                            <div class="px-8 text-xs lg:px-16 lg:text-sm">
                                <button
                                    v-if="loadingC == 0 || loadingC == 2"
                                    type="submit"
                                    class="mt-2 w-full bg-primary-blue px-8 py-2 text-white"
                                >
                                    {{ $t("delete") }}
                                </button>
                                <button
                                    v-if="loadingC == 1"
                                    disabled
                                    type="submit"
                                    class="mt-2 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"
                                >
                                    <svg
                                        class="mr-3 h-5 w-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
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
                                    {{ $t("delete") }}...
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-if="open.password">
                        <form @submit.prevent="changeUserPassword()">
                            <div
                                class="relative mt-2 px-8 text-xs lg:px-16 lg:text-sm"
                            >
                                <label class="">
                                    {{ $t("old-password") }}
                                </label>
                                <input
                                    type="password"
                                    required
                                    v-model="password.old_password"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                            <div
                                class="relative mt-2 px-8 text-xs lg:px-16 lg:text-sm"
                            >
                                <label class="">
                                    {{ $t("new-password") }}
                                </label>
                                <input
                                    type="password"
                                    required
                                    v-model="password.password"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>
                            <div
                                class="relative mt-2 px-8 text-xs lg:px-16 lg:text-sm"
                            >
                                <label class="">
                                    {{ $t("confirm-password") }}
                                </label>
                                <input
                                    type="password"
                                    required
                                    v-model="password.password_confirmation"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>

                            <div class="px-8 text-xs lg:px-16 lg:text-sm">
                                <button
                                    v-if="loadingC == 0 || loadingC == 2"
                                    type="submit"
                                    class="mt-6 w-full bg-primary-blue px-8 py-2 text-white"
                                >
                                    {{ $t("update") }}
                                </button>
                                <button
                                    v-if="loadingC == 1"
                                    disabled
                                    type="submit"
                                    class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"
                                >
                                    <svg
                                        class="mr-3 h-5 w-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
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
                                    {{ $t("update") }}...
                                </button>
                            </div>
                        </form>
                    </div>
                    <div v-if="open.delete">
                        <form @submit.prevent="deleteUser()">
                            <div
                                class="flex justify-center space-x-4 px-2 text-xs lg:text-sm"
                            >
                                <div>
                                    <input
                                        type="radio"
                                        id="fulldelete"
                                        value="2"
                                        v-model="deleteU.type"
                                        class="mr-2 border p-1"
                                    />
                                    <label for="fulldelete">{{
                                        $t("complete-delete")
                                    }}</label>
                                </div>

                                <div>
                                    <input
                                        type="radio"
                                        id="softdelete"
                                        value="1"
                                        v-model="deleteU.type"
                                        class="mr-2 border p-1"
                                    />
                                    <label for="softdelete">{{
                                        $t("partial-delete")
                                    }}</label>
                                </div>
                            </div>
                            <div
                                class="m-4 rounded bg-gray-100 px-3 py-2 text-xs text-gray-700 lg:text-sm"
                            >
                                <span v-if="deleteU.type == 2">
                                    {{ $t("complete-delete-desc") }}
                                </span>

                                <span v-else>
                                    {{ $t("partial-delete-desc") }}
                                </span>
                            </div>

                            <div
                                class="relative px-8 text-xs lg:px-16 lg:text-sm"
                            >
                                <label class="">
                                    {{ $t("delete-account-desc") }}
                                </label>
                                <span
                                    ><LockClosedIcon
                                        class="absolute mt-5 ml-2 h-6 w-6 text-gray-400"
                                /></span>
                                <input
                                    type="password"
                                    required
                                    v-model="deleteU.password"
                                    :placeholder="$t('password')"
                                    class="form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"
                                />
                            </div>

                            <div class="px-8 text-xs lg:px-16 lg:text-sm">
                                <button
                                    v-if="loadingC == 0 || loadingC == 2"
                                    type="submit"
                                    class="mt-6 w-full bg-primary-blue px-8 py-2 text-white"
                                >
                                    {{ $t("delete") }}
                                </button>
                                <button
                                    v-if="loadingC == 1"
                                    disabled
                                    type="submit"
                                    class="mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-white"
                                >
                                    <svg
                                        class="mr-3 h-5 w-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
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
                                    {{ $t("delete") }}...
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import useUsers from "../../../services/userServices.js";
import {
    UserCircleIcon,
    CheckCircleIcon,
    ArrowUpCircleIcon,
    TrashIcon,
    KeyIcon,
    LockClosedIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
    slug: {
        required: true,
        type: String,
    },
    id: {
        required: true,
        type: String,
    },
});

const {
    user,
    getUser,
    deleteUserData,
    destroyUserFront,
    updateUser,
    updateStatusUser,
    errors,
    updatePasswordUser,
} = useUsers();
const deleteType = ref(1);
const loading = ref(0);
const avatar = ref("");
const pavatar = ref(null);
const cover = ref(null);
const loadingC = ref(0);
const status = reactive({
    status: "",
});
const deleteD = reactive({
    user: "",
    password: "",
});
const deleteU = reactive({
    user: "",
    type: 1,
    password: "",
});

onMounted(async () => {
    loading.value = 1;
    await getUser(props.id);
    status.status = user.value.status;
    deleteD.user = user.value.id;
    deleteU.user = user.value.id;
    loading.value = 0;
});

const open = reactive({
    account: true,
    password: false,
    delete: false,
    conf: false,
});

const password = reactive({
    old_password: "",
    password: "",
    password_confirmation: "",
});

const changeTab = (type) => {
    switch (type) {
        case "account":
            open.password = false;
            open.delete = false;
            open.conf = false;
            loadingC.value = 0;
            errors.value = "";
            open.account = true;
            break;
        case "password":
            open.account = false;
            open.delete = false;
            open.conf = false;
            loadingC.value = 0;
            errors.value = "";
            open.password = true;
            break;
        case "delete":
            open.account = false;
            open.password = false;
            open.conf = false;
            loadingC.value = 0;
            errors.value = "";
            open.delete = true;
            break;
        case "conf":
            open.account = false;
            open.password = false;
            open.delete = false;
            loadingC.value = 0;
            errors.value = "";
            open.conf = true;
            break;
    }
};

const saveUserSetting = async () => {
    loadingC.value = 1;
    let formData = new FormData();
    formData.append("firstname", user.value.firstname);
    formData.append("lastname", user.value.lastname);
    formData.append("email", user.value.email);
    formData.append("avatar", avatar.value);
    formData.append("cover", user.value.cover);
    formData.append("_method", "PUT");

    await updateUser(user.value.id, formData);
    if (errors.value == "") {
        loadingC.value = 2;
    } else {
        loadingC.value = 0;
    }
};

const changeUserPassword = async () => {
    loadingC.value = 1;
    await updatePasswordUser(user.value.id, { ...password });
    if (errors.value == "") {
        loadingC.value = 2;
        password.old_password = "";
        password.password = "";
        password.password_confirmation = "";
    } else {
        loadingC.value = 0;
    }
};

const changePrivacy = async () => {
    loadingC.value = 1;
    await updateStatusUser(user.value.id, { ...status });
    if (errors.value == "") {
        loadingC.value = 2;
    } else {
        loadingC.value = 0;
    }
};

const deleteData = async () => {
    loadingC.value = 1;
    if (confirm("I you Sure ?")) {
        await deleteUserData({ ...deleteD });
    }
    if (errors.value == "") {
        loadingC.value = 2;
        deleteD.password = "";
    } else {
        loadingC.value = 0;
    }
};

const deleteUser = async () => {
    loadingC.value = 1;
    if (confirm("I you Sure ?")) {
        await destroyUserFront({ ...deleteU });
    }
    if (errors.value == "") {
        loadingC.value = 2;
        deleteU.password = "";
        location.href = "/";
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
    } else {
        loadingC.value = 0;
    }
};

const handelAvatarObject = () => {
    avatar.value = pavatar.value.files[0];
};
const handelCoverObject = () => {
    user.value.cover = cover.value.files[0];
};
</script>
