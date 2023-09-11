<script setup></script>

<template>
    <!-- <section class="relative" v-if="!token">
        <div
            class="h-screen w-full bg-cover object-cover"
            style="background-image: url('/img/bg_maintenance.jpg')"
        ></div>
        <div
            class="bg-black/50 absolute top-0 h-screen w-full flex flex-col text-white py-8 justify-between items-center"
        >
            <div>
                <h1 class="text-4xl font-bold mt-10">AfricaUnity</h1>
            </div>

            <div>
                <p class="md:w-1/2 px-8 md:mx-auto mx-10 font-light text-center">
                   <span class="text-3xl font-semibold block my-2">We’ll be back soon!</span> 
                    Sorry for the inconvenience. We’re performing some maintenance at the moment. If you need to you can always contact us for updates, otherwise we’ll be back up shortly!
                </p>
            </div>

            <div>© AfricaUnity 2022</div>
        </div>
        <button type="button" @click="toogleLogMaint = !toogleLogMaint " :class="[ toogleLogMaint ? 'h-10 w-10 bg-white absolute md:right-96 right-2/3 p-2 top-36 rounded-l-lg' : 'h-10 w-10 bg-white absolute right-0 p-2 top-36 rounded-l-lg']">
                <LockClosedIcon />
        </button>
        <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 translate-x-full"
            enter-to-class="opacity-1 translate-x-0"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1 translate-x-0"
            leave-to-class="opacity-0 translate-x-full"
        >
            <div v-if="toogleLogMaint" class="absolute h-full top-0 right-0 md:w-96 w-2/3 bg-white px-4">
            <h1 class="text-center font-bold text-gray-600 text-xl my-2 md:text-3xl">Accès utilisateur</h1>
                <Error v-if="errors != ''">{{ errors }}</Error>
                    <form @submit.prevent="login" class="py-4">
                        <div class="relative">
                            <span
                                ><EnvelopeIcon
                                    class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="email"
                                required
                                v-model="user.email"
                                :placeholder="$t('adresse') + ' ' + $t('email')"
                                class="form-input px-3 pr-2 pl-10 w-full border-gray-400 mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>
                        <div class="relative">
                            <span
                                ><LockClosedIcon
                                    class="absolute h-6 w-6 mt-2 ml-2 text-gray-400"
                            /></span>
                            <input
                                type="password"
                                required
                                v-model="user.password"
                                :placeholder="$t('password')"
                                class="form-input px-3 pr-2 pl-10 w-full mt-3 placeholder:text-gray-400 border-gray-400 focus:ring-primary-blue focus:border-primary-blue block"
                            />
                        </div>

                        <div>
                            <button
                                v-if="loadingL == 0"
                                type="submit"
                                class="text-white text-lg bg-primary-blue px-8 py-2 mt-6 w-full"
                            >
                                {{ $t("login") }}
                            </button>
                            <button
                                v-if="loadingL == 1"
                                disabled
                                type="submit"
                                class="inline-flex items-center justify-center text-white text-lg bg-blue-300 cursor-wait px-8 py-2 mt-6 w-full"
                            >
                                <svg
                                    class="animate-spin mr-3 h-5 w-5 text-white"
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
                                {{ $t("login") }}...
                            </button>
                        </div>

                         <div class="pt-6 text-center">
                            <router-link
                                class="text-gray-400 hover:underline"
                                :to="{ name: 'forgot.password' }"
                            >
                                {{ $t("password-forgot") }} ?
                            </router-link>
                        </div> 
                    </form>
            </div>
        </Transition>
</section> -->
</template>
